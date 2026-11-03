import json
import logging
import os
import secrets
from datetime import datetime, timezone

import requests
from flask import Flask, abort, jsonify, request, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from werkzeug.middleware.proxy_fix import ProxyFix

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
    # No built-in static route: Flask's would serve every file in the repo
    # root (.env, .git/, server.py ...). All static files go through
    # serve_static() below, which applies _is_public_path().
    app = Flask(__name__, static_folder=None)

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

    # ── Client IP behind a reverse proxy ────────────────────────────────────
    # On Render (and most PaaS hosts) requests arrive via a load balancer, so
    # request.remote_addr is the proxy's IP. Without ProxyFix every visitor
    # shares one rate-limit bucket and audit records log the proxy address.
    # TRUSTED_PROXY_COUNT = number of proxies in front of the app (default 1
    # in production, 0 elsewhere). Never set it higher than the real number of
    # hops, or clients can spoof X-Forwarded-For.
    default_hops = "1" if is_production else "0"
    proxy_hops = int(os.getenv("TRUSTED_PROXY_COUNT", default_hops) or 0)
    if proxy_hops > 0:
        app.wsgi_app = ProxyFix(app.wsgi_app, x_for=proxy_hops, x_proto=proxy_hops)

    limiter.init_app(app)

    _register_routes(app)
    _register_csrf_guard(app)
    _register_security_headers(app)

    return app


# ── Supabase-backed self-service account API (Secure SDLC §4.4(c)) ──────────
# The admin console (pages/admin.html) is served by Supabase Edge Functions
# now (see supabase/functions/) rather than this Flask backend — see
# docs/SUPABASE_SETUP.md §4. server.py keeps only the self-deletion endpoint
# below, which every signed-in user (not just admins) is always authorized to
# call on themself. The service_role key stays server-side only.
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


# ==========================================
# STATIC FILE ALLOW-RULES
# ==========================================
# The static folder is the repository root, so the catch-all route below must
# never hand out backend source, secrets, VCS data or dev tooling. These rules
# mirror .pagesignore (the GitHub Pages deploy filter) so both deployments
# publish the same set of files.
_ALLOWED_DOT_DIRS = {".well-known"}  # Android assetlinks.json
_BLOCKED_TOP_DIRS = {
    "supabase", "scripts", "tests", "docs", "reports", "pdf_sections",
    "instance", "node_modules", "venv", "env", "_archive",
    "content_starters_backup", "playwright-report", "test-results",
}
_BLOCKED_TOP_FILES = {
    "server.py", "requirements.txt", "pyproject.toml", "procfile",
    "playwright.config.js", "package.json", "package-lock.json",
    "agents.md", "api.md", "claude.md", "deployment.md", "security.md",
    "graphify.html", "graphify.yaml", "server.bat",
}
_BLOCKED_ANY_DIRS = {"__pycache__"}
_BLOCKED_FILENAMES = {"secrets.json", "thumbs.db"}
_BLOCKED_SUFFIXES = (".py", ".pyc", ".pyo", ".key", ".pem", ".swp", ".db", ".sqlite", ".sqlite3")


def _is_public_path(path):
    """True if `path` (relative to the repo root) may be served publicly."""
    parts = [p for p in path.replace("\\", "/").split("/") if p]
    if not parts:
        return False
    lowered = [p.lower() for p in parts]
    for i, part in enumerate(lowered):
        # Hidden files/dirs (.env, .git/, .github/, .graphify/ ...), except
        # the explicitly allowed top-level .well-known/.
        if part.startswith(".") and not (i == 0 and part in _ALLOWED_DOT_DIRS):
            return False
        if part in _BLOCKED_ANY_DIRS:
            return False
    if lowered[0] in _BLOCKED_TOP_DIRS:
        return False
    if len(lowered) == 1 and lowered[0] in _BLOCKED_TOP_FILES:
        return False
    name = lowered[-1]
    if name in _BLOCKED_FILENAMES or name.endswith(_BLOCKED_SUFFIXES):
        return False
    return True


# ==========================================
# ROUTES
# ==========================================
def _register_routes(app):

    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:path>")
    def serve_static(path):
        if not _is_public_path(path):
            abort(404)
        return send_from_directory(".", path)

    # ── Self-service account deletion (Secure SDLC §4.4(c), GDPR Art. 17) ────
    # Any signed-in user may delete their OWN account — a user is always
    # authorized to delete themself, no admin allow-list needed. Deletes the
    # Supabase auth user directly; the `profiles`/`user_state` rows cascade
    # via their FK `on delete cascade`.
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
        # at all is the signal.
        return jsonify({"status": "healthy"}), 200

    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(".", "404.html"), 404


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
