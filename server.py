import json
import logging
import os
import secrets
from datetime import datetime, timezone

import requests
from flask import Flask, abort, jsonify, request, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

# ── Audit logger (Secure SDLC §4.7(b), §3.9) ─────────────────────────────────
# Emits one JSON line per security event to the "smartcare.audit" logger.
# Wire this logger to a monitored sink (e.g. CloudWatch, Datadog) in production.
_audit_log = logging.getLogger("smartcare.audit")


def _audit(event: str, outcome: str, actor: str = "anonymous", detail: str = "") -> None:
    """Write a structured audit record for auth and admin events."""
    record = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "event": event,
        "outcome": outcome,
        "actor": actor,
        "ip": request.remote_addr if request else "-",
        "detail": detail,
    }
    _audit_log.info(json.dumps(record))


def create_app(test_config=None):
    app = Flask(__name__, static_folder=".", static_url_path="")

    # ── Secrets & config (Secure SDLC §3.4: no hard-coded secrets) ──────────
    secret_key = os.getenv("SECRET_KEY")
    if not secret_key:
        secret_key = secrets.token_hex(32)
        app.logger.warning(
            "SECRET_KEY not set — generated an ephemeral key. Sessions will not "
            "survive a restart. Set SECRET_KEY in the environment for production."
        )
    app.config["SECRET_KEY"] = secret_key

    # ── Secure session cookies (Secure SDLC §3.5, §4.6) ─────────────────────
    is_production = os.getenv("APP_ENV", "development").lower() == "production"
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SAMESITE"] = "Lax"
    app.config["SESSION_COOKIE_SECURE"] = is_production

    # ── Rate limiting (Secure SDLC §4.4(c), ISR 5.2.1.5) ────────────────────
    # Production: set RATELIMIT_STORAGE_URI=redis://... for multi-worker safety.
    # In test mode RATELIMIT_ENABLED is set to False (see test_config below).
    app.config.setdefault(
        "RATELIMIT_STORAGE_URI",
        os.getenv("RATELIMIT_STORAGE_URI", "memory://"),
    )
    app.config.setdefault("RATELIMIT_HEADERS_ENABLED", True)

    if test_config:
        app.config.update(test_config)

    limiter.init_app(app)

    _register_routes(app)
    _register_csrf_guard(app)
    _register_security_headers(app)

    return app


def _admin_emails():
    """Allow-list of admin emails sourced from the environment (no hard-coding)."""
    raw = os.getenv("ADMIN_EMAILS", "")
    return {e.strip().lower() for e in raw.split(",") if e.strip()}


# ── Supabase-backed admin API (Secure SDLC §4.4(c)) ─────────────────────────
# The admin console manages real app users (Supabase/Google sign-ins). The
# service_role key stays server-side only — see docs/SUPABASE_SETUP.md §4 for
# the required Supabase-side setup.
SUPABASE_URL = os.getenv("SUPABASE_URL", "").rstrip("/")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")


def _supabase_admin_configured():
    return bool(SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY)


def _supabase_service_headers(prefer=None):
    headers = {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
        "Content-Type": "application/json",
    }
    if prefer:
        headers["Prefer"] = prefer
    return headers


def _supabase_user_from_token(token):
    """Resolve a Supabase access token (from the browser's session) to
    {id, email}, or None if the token is missing/invalid/expired."""
    if not token or not _supabase_admin_configured():
        return None
    try:
        resp = requests.get(
            f"{SUPABASE_URL}/auth/v1/user",
            headers={"Authorization": f"Bearer {token}", "apikey": SUPABASE_SERVICE_ROLE_KEY},
            timeout=5,
        )
    except requests.RequestException:
        return None
    if resp.status_code != 200:
        return None
    data = resp.json()
    email = (data.get("email") or "").strip().lower()
    if not data.get("id") or not email:
        return None
    return {"id": data["id"], "email": email}


def _require_supabase_user():
    """Abort with 503/401 unless the caller has a valid Supabase session.
    Returns {id, email} for the caller on success."""
    if not _supabase_admin_configured():
        abort(503, description="This API is not configured on this server.")
    auth_header = request.headers.get("Authorization", "")
    token = auth_header[7:] if auth_header.lower().startswith("bearer ") else ""
    user = _supabase_user_from_token(token)
    if not user:
        abort(401, description="Sign in required.")
    return user


def _require_supabase_admin():
    """Abort with 503/401/403 unless the caller is a signed-in, allow-listed
    admin. Returns {id, email} for the caller on success."""
    user = _require_supabase_user()
    if user["email"] not in _admin_emails():
        _audit("admin_access", "denied", actor=user["email"])
        abort(403)
    return user


# ==========================================
# ROUTES
# ==========================================
def _register_routes(app):

    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:path>")
    def serve_static(path):
        return send_from_directory(".", path)

    # ── Admin API (Secure SDLC §4.4(c): authn + authz required) ──────────────
    # Backed by Supabase (the real, live user base) — see
    # _require_supabase_admin() above. Callers authenticate with their
    # Supabase session token (Authorization: Bearer …),
    # which the server verifies directly with Supabase before checking the
    # ADMIN_EMAILS allow-list. The service_role key never reaches the browser.
    @app.route("/api/admin/users", methods=["GET"])
    @limiter.limit("30 per minute")
    def get_all_users():
        admin = _require_supabase_admin()
        try:
            resp = requests.get(
                f"{SUPABASE_URL}/rest/v1/profiles",
                params={"select": "id,email,full_name,role,created_at", "order": "created_at.desc"},
                headers=_supabase_service_headers(),
                timeout=8,
            )
            resp.raise_for_status()
        except requests.RequestException:
            _audit("admin_list_users", "error", actor=admin["email"])
            return jsonify({"error": "Could not reach Supabase"}), 502

        _audit("admin_list_users", "success", actor=admin["email"])
        return jsonify(
            [
                {
                    "id": u.get("id"),
                    "full_name": u.get("full_name") or "Google User",
                    "email": u.get("email") or "",
                    "role": u.get("role") or "Unassigned",
                }
                for u in resp.json()
            ]
        )

    @app.route("/api/admin/users/<user_id>/role", methods=["PATCH"])
    @limiter.limit("30 per minute")
    def update_user_role(user_id):
        admin = _require_supabase_admin()

        data = request.get_json(silent=True) or {}
        new_role = (data.get("role") or "").strip()
        if not new_role:
            return jsonify({"error": "Role is required"}), 400
        if len(new_role) > 50:
            return jsonify({"error": "Role name is too long"}), 400

        try:
            resp = requests.patch(
                f"{SUPABASE_URL}/rest/v1/profiles",
                params={"id": f"eq.{user_id}"},
                json={"role": new_role},
                headers=_supabase_service_headers(prefer="return=representation"),
                timeout=8,
            )
            resp.raise_for_status()
        except requests.RequestException:
            _audit("admin_update_role", "error", actor=admin["email"], detail=f"user={user_id}")
            return jsonify({"error": "Update failed"}), 502

        rows = resp.json()
        if not rows:
            return jsonify({"error": "User not found"}), 404

        _audit(
            "admin_update_role",
            "success",
            actor=admin["email"],
            detail=f"user={user_id} -> {new_role!r}",
        )
        return jsonify({"message": "Role updated", "id": user_id, "role": new_role})

    @app.route("/api/admin/users/<user_id>", methods=["DELETE"])
    @limiter.limit("30 per minute")
    def delete_user(user_id):
        admin = _require_supabase_admin()

        if user_id == admin["id"]:
            return jsonify({"error": "You cannot delete your own account"}), 400

        try:
            resp = requests.delete(
                f"{SUPABASE_URL}/auth/v1/admin/users/{user_id}",
                headers=_supabase_service_headers(),
                timeout=8,
            )
        except requests.RequestException:
            _audit("admin_delete_user", "error", actor=admin["email"], detail=f"user={user_id}")
            return jsonify({"error": "Delete failed"}), 502

        if resp.status_code not in (200, 204):
            return jsonify({"error": "User not found or delete failed"}), 404

        _audit(
            "admin_delete_user",
            "success",
            actor=admin["email"],
            detail=f"deleted={user_id}",
        )
        return jsonify({"message": "User deleted", "id": user_id})

    # ── Self-service account deletion (Secure SDLC §4.4(c), GDPR Art. 17) ────
    # Any signed-in user may delete their OWN account — no ADMIN_EMAILS check,
    # unlike the /api/admin/* routes above (a user is always authorized to
    # delete themself). Deletes the Supabase auth user directly; the
    # `profiles`/`user_state` rows cascade via their FK `on delete cascade`.
    @app.route("/api/account", methods=["DELETE"])
    @limiter.limit("5 per hour")
    def delete_own_account():
        user = _require_supabase_user()

        try:
            resp = requests.delete(
                f"{SUPABASE_URL}/auth/v1/admin/users/{user['id']}",
                headers=_supabase_service_headers(),
                timeout=8,
            )
        except requests.RequestException:
            _audit("account_self_delete", "error", actor=user["email"])
            return jsonify({"error": "Delete failed"}), 502

        if resp.status_code not in (200, 204):
            _audit(
                "account_self_delete",
                "error",
                actor=user["email"],
                detail=f"status={resp.status_code}",
            )
            return jsonify({"error": "Account deletion failed"}), 502

        _audit("account_self_delete", "success", actor=user["email"])
        return jsonify({"message": "Account deleted"})

    @app.errorhandler(429)
    def rate_limit_exceeded(e):
        _audit("rate_limit", "blocked", detail=str(e.description))
        return jsonify({"error": "Too many requests. Please try again later."}), 429

    @app.errorhandler(401)
    def unauthorized(e):
        return jsonify({"error": "Sign in required."}), 401

    @app.errorhandler(403)
    def forbidden(e):
        return jsonify({"error": "Forbidden"}), 403

    @app.errorhandler(503)
    def service_unavailable(e):
        return jsonify({"error": str(e.description) or "Service unavailable"}), 503

    @app.route("/api/health")
    @limiter.exempt
    def health_check():
        # Liveness probe for monitoring — the server has no local database of
        # its own (see docs/upgrades.md "Security #5"); the process responding
        # at all is the signal. Admin API reachability to Supabase is a
        # separate concern, checked per-request by _require_supabase_admin().
        return jsonify({"status": "healthy"}), 200

    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(app.static_folder or ".", "404.html"), 404


# ==========================================
# CSRF GUARD (Secure SDLC §4.2(b), P2-7)
# ==========================================
# Defense-in-depth on top of SameSite=Lax cookies:
#  1. SameSite=Lax blocks cross-site POST/PATCH/DELETE from carrying cookies.
#  2. We additionally require Content-Type: application/json (browsers cannot
#     send cross-site JSON POSTs without a CORS preflight) and the custom
#     X-Requested-With header (simple cross-site requests cannot set custom
#     headers without a preflight that would be rejected by absent CORS config).
def _register_csrf_guard(app):
    @app.before_request
    def csrf_guard():
        if request.method not in ("POST", "PATCH", "DELETE", "PUT"):
            return
        if not request.path.startswith("/api/"):
            return
        xrw = request.headers.get("X-Requested-With", "")
        # Body-carrying methods must additionally declare JSON content.
        # DELETE has no body so Content-Type is typically absent.
        ct = request.content_type or ""
        needs_ct = request.method in ("POST", "PATCH", "PUT")
        ct_ok = not needs_ct or "application/json" in ct
        if xrw != "XMLHttpRequest" or not ct_ok:
            detail = f"method={request.method} path={request.path}"
            _audit("csrf_guard", "blocked", detail=detail)
            return jsonify({"error": "Invalid request"}), 400


# ==========================================
# SECURITY HEADERS (Secure SDLC §3.5, §4.3(c))
# ==========================================
def _register_security_headers(app):
    @app.after_request
    def set_security_headers(response):
        response.headers.setdefault("X-Content-Type-Options", "nosniff")
        response.headers.setdefault("X-Frame-Options", "DENY")
        response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
        csp = (
            "default-src 'self'; "
            "img-src 'self' data: https:; "
            "script-src 'self' 'unsafe-inline' "
            "https://accounts.google.com https://apis.google.com "
            "https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline' https:; "
            "font-src 'self' https: data:; "
            "connect-src 'self' https://accounts.google.com https://cdn.jsdelivr.net "
            "https://*.supabase.co wss://*.supabase.co; "
            "frame-src https://accounts.google.com; "
            "frame-ancestors 'none'"
        )
        response.headers.setdefault("Content-Security-Policy", csp)
        if app.config.get("SESSION_COOKIE_SECURE"):
            response.headers.setdefault(
                "Strict-Transport-Security", "max-age=31536000; includeSubDomains"
            )
        return response


# ==========================================
# INITIALIZE & RUN
# ==========================================
app = create_app()

if __name__ == "__main__":
    debug_enabled = os.getenv("FLASK_DEBUG", "").lower() in ("1", "true", "yes")
    app.run(debug=debug_enabled, port=int(os.getenv("PORT", "8899")))
