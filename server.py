import json
import logging
import os
import re
import secrets
from datetime import datetime, timezone

import requests
from flask import Flask, abort, jsonify, redirect, request, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_login import (
    LoginManager,
    UserMixin,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask_sqlalchemy import SQLAlchemy
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token
from werkzeug.security import check_password_hash, generate_password_hash

db = SQLAlchemy()
login_manager = LoginManager()
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


# ── Password policy (Secure SDLC §4.2(b), ISR 5.2.1.5) ─────────────────────
_MIN_PW_LEN = 10
_EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
# Top common passwords to block at registration (sampled from NCSC/HIBP top-1k).
_COMMON_PASSWORDS = {
    "password", "password1", "password123", "passw0rd",
    "123456789", "1234567890", "12345678", "123456",
    "qwerty123", "qwertyuiop", "iloveyou", "welcome1",
    "admin1234", "letmein1", "monkey123", "dragon123",
    "superman", "batman123", "football", "baseball",
}


def _validate_email(email: str) -> str | None:
    """Return an error string, or None if valid."""
    if not email or not _EMAIL_RE.match(email):
        return "A valid email address is required."
    if len(email) > 254:
        return "Email address is too long."
    return None


def _validate_password(pw: str) -> str | None:
    """Return an error string, or None if the password meets policy."""
    if len(pw) < _MIN_PW_LEN:
        return f"Password must be at least {_MIN_PW_LEN} characters."
    if not re.search(r"[A-Z]", pw):
        return "Password must include at least one uppercase letter."
    if not re.search(r"[a-z]", pw):
        return "Password must include at least one lowercase letter."
    if not re.search(r"\d", pw):
        return "Password must include at least one digit."
    if pw.lower() in _COMMON_PASSWORDS:
        return "Password is too common. Please choose a stronger password."
    return None


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

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///users.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

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

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = "index"
    limiter.init_app(app)

    with app.app_context():
        db.create_all()

    _register_routes(app)
    _register_csrf_guard(app)
    _register_security_headers(app)

    return app


# ==========================================
# DATABASE MODEL
# ==========================================
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(150), nullable=True)
    role = db.Column(db.String(50), nullable=True)
    progress = db.Column(db.Text, default="{}")


@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))


def _admin_emails():
    """Allow-list of admin emails sourced from the environment (no hard-coding)."""
    raw = os.getenv("ADMIN_EMAILS", "")
    return {e.strip().lower() for e in raw.split(",") if e.strip()}


# ── Supabase-backed admin API (Secure SDLC §4.4(c)) ─────────────────────────
# The admin console manages real app users (Supabase/Google sign-ins), not the
# legacy SQLAlchemy `User` table above. The service_role key stays server-side
# only — see docs/SUPABASE_SETUP.md §4 for the required Supabase-side setup.
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


def _require_supabase_admin():
    """Abort with 503/401/403 unless the caller is a signed-in, allow-listed
    admin. Returns {id, email} for the caller on success."""
    if not _supabase_admin_configured():
        abort(503, description="Admin API is not configured on this server.")
    auth_header = request.headers.get("Authorization", "")
    token = auth_header[7:] if auth_header.lower().startswith("bearer ") else ""
    user = _supabase_user_from_token(token)
    if not user:
        abort(401, description="Sign in required.")
    if user["email"] not in _admin_emails():
        _audit("admin_access", "denied", actor=user["email"])
        abort(403)
    return user


# ==========================================
# ROUTES
# ==========================================
def _register_routes(app):

    GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:path>")
    def serve_static(path):
        return send_from_directory(".", path)

    # ── Auth endpoints ────────────────────────────────────────────────────────
    @app.route("/api/register", methods=["POST"])
    @limiter.limit("5 per minute; 20 per hour")
    def register():
        data = request.get_json(silent=True) or {}
        email = (data.get("username") or "").strip()
        password = (data.get("password") or "").strip()
        full_name = (data.get("full_name") or "").strip()
        professional_level = (data.get("professional_level") or "").strip()

        # ── Input validation (Secure SDLC §4.2(b), ISR 8.3.1) ───────────────
        err = _validate_email(email)
        if err:
            _audit("register", "fail", detail=f"invalid email: {err}")
            return jsonify({"error": err}), 400

        err = _validate_password(password)
        if err:
            _audit("register", "fail", actor=email, detail=f"weak password: {err}")
            return jsonify({"error": err}), 400

        if len(full_name) > 150:
            return jsonify({"error": "Name is too long."}), 400

        allowed_levels = {"Physician", "Paramedic", "EMT", "Admin", ""}
        if professional_level and professional_level not in allowed_levels:
            return jsonify({"error": "Invalid professional level."}), 400

        if User.query.filter_by(username=email).first():
            _audit("register", "fail", actor=email, detail="duplicate email")
            return jsonify({"error": "An account with that email already exists"}), 400

        hashed_pw = generate_password_hash(password)
        new_user = User(
            username=email,
            password=hashed_pw,
            full_name=full_name,
            role=professional_level,
        )
        db.session.add(new_user)
        db.session.commit()

        _audit("register", "success", actor=email)
        return jsonify({"message": "Account created successfully! You can now log in."}), 201

    @app.route("/api/login", methods=["POST"])
    @limiter.limit("10 per minute; 50 per hour")
    def login():
        data = request.get_json(silent=True) or {}
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""

        user = User.query.filter_by(username=username).first()

        if user and check_password_hash(user.password, password):
            login_user(user)
            _audit("login", "success", actor=username)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )

        # Generic message — do not reveal whether the user exists (anti-enumeration).
        _audit("login", "fail", actor=username or "unknown")
        return jsonify({"error": "Invalid username or password"}), 401

    @app.route("/api/google-login", methods=["POST"])
    @limiter.limit("10 per minute; 50 per hour")
    def google_login():
        data = request.get_json(silent=True) or {}
        token = data.get("credential")

        if not token:
            return jsonify({"error": "No token provided"}), 400

        if not GOOGLE_CLIENT_ID:
            return jsonify({"error": "Google login is not configured"}), 503

        try:
            idinfo = id_token.verify_oauth2_token(
                token, google_requests.Request(), GOOGLE_CLIENT_ID
            )
            email = idinfo["email"]
            name = idinfo.get("name", "")

            user = User.query.filter_by(username=email).first()
            if not user:
                random_pw = generate_password_hash(secrets.token_hex(16))
                user = User(username=email, password=random_pw, full_name=name)
                db.session.add(user)
                db.session.commit()
                _audit("google_register", "success", actor=email)

            login_user(user)
            _audit("google_login", "success", actor=email)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )
        except ValueError:
            _audit("google_login", "fail", detail="invalid token")
            return jsonify({"error": "Google authentication failed."}), 401

    @app.route("/api/logout")
    @login_required
    def logout():
        actor = current_user.username if current_user.is_authenticated else "unknown"
        logout_user()
        _audit("logout", "success", actor=actor)
        return redirect("/login.html")

    # ── Admin API (Secure SDLC §4.4(c): authn + authz required) ──────────────
    # Backed by Supabase (the real, live user base) rather than the legacy
    # SQLAlchemy `User` table — see _require_supabase_admin() above. Callers
    # authenticate with their Supabase session token (Authorization: Bearer …),
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
        # Liveness/readiness probe for monitoring. Verifies DB connectivity.
        try:
            db.session.execute(db.text("SELECT 1"))
            db_ok = True
        except Exception:
            _audit("health_check", "db_probe_failed")
            db_ok = False
        status = "healthy" if db_ok else "degraded"
        return (
            jsonify({"status": status, "database": "up" if db_ok else "down"}),
            200 if db_ok else 503,
        )

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
