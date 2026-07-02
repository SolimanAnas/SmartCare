"""Smoke tests for the SmartCare Flask API."""
import json
import logging
import types

import pytest
import requests as requests_lib


# ── Fake Supabase backend for the admin API (server.py talks to Supabase over
# HTTP; these tests stub `requests.get/patch/delete` so no network is needed) ──
class _FakeResp:
    def __init__(self, status_code=200, json_data=None):
        self.status_code = status_code
        self._json = {} if json_data is None else json_data

    def json(self):
        return self._json

    def raise_for_status(self):
        if self.status_code >= 400:
            raise requests_lib.HTTPError(f"HTTP {self.status_code}")


@pytest.fixture
def supabase_admin(monkeypatch):
    """Stubs server.py's Supabase admin integration with an in-memory fake.
    Returns a namespace with add_user(token, id, email, ...) to seed fixtures."""
    import server

    monkeypatch.setattr(server, "SUPABASE_URL", "https://fake.supabase.co")
    monkeypatch.setattr(server, "SUPABASE_SERVICE_ROLE_KEY", "fake-service-role-key")
    monkeypatch.setenv("ADMIN_EMAILS", "admin@smartcare.org")

    tokens = {}    # access token -> {id, email}
    profiles = {}  # user id -> profile dict

    def add_user(token, user_id, email, full_name="Test User", role="Unassigned"):
        tokens[token] = {"id": user_id, "email": email}
        profiles[user_id] = {
            "id": user_id, "email": email, "full_name": full_name,
            "role": role, "created_at": "2024-01-01T00:00:00Z",
        }

    def fake_get(url, headers=None, params=None, timeout=None):
        headers = headers or {}
        if url.endswith("/auth/v1/user"):
            token = headers.get("Authorization", "").replace("Bearer ", "")
            user = tokens.get(token)
            return _FakeResp(200, user) if user else _FakeResp(401, {})
        if url.endswith("/rest/v1/profiles"):
            return _FakeResp(200, list(profiles.values()))
        return _FakeResp(404, {})

    def fake_patch(url, headers=None, params=None, json=None, timeout=None):
        target_id = (params or {}).get("id", "").replace("eq.", "")
        profile = profiles.get(target_id)
        if not profile:
            return _FakeResp(200, [])
        profile["role"] = (json or {}).get("role", profile["role"])
        return _FakeResp(200, [profile])

    def fake_delete(url, headers=None, timeout=None):
        user_id = url.rsplit("/", 1)[-1]
        if user_id in profiles:
            del profiles[user_id]
            return _FakeResp(200, {})
        return _FakeResp(404, {})

    monkeypatch.setattr(server.requests, "get", fake_get)
    monkeypatch.setattr(server.requests, "patch", fake_patch)
    monkeypatch.setattr(server.requests, "delete", fake_delete)

    return types.SimpleNamespace(add_user=add_user, tokens=tokens, profiles=profiles)


def _auth(token):
    return {"Authorization": f"Bearer {token}"}


# ── Index ─────────────────────────────────────────────────────────────────────
class TestIndex:
    def test_index_serves_html(self, client):
        resp = client.get("/")
        assert resp.status_code == 200
        assert resp.content_type.startswith("text/html")


# ── Admin (access-control regression, P0-1/P0-2) ─────────────────────────────
# Backed by Supabase (real Google sign-ins) — see server.py's
# _require_supabase_admin(). The `supabase_admin` fixture stubs the Supabase
# HTTP calls so these tests need no network. This is the only account system
# left in server.py; the legacy Flask-Login/SQLAlchemy email+password system
# was retired since nothing in the live app ever called it.
class TestAdminUsers:
    def test_admin_users_requires_auth(self, client, supabase_admin):
        """No/invalid Supabase token must be denied (no PII leak)."""
        resp = client.get("/api/admin/users")
        assert resp.status_code == 401

    def test_admin_users_not_configured_returns_503(self, client):
        """Without SUPABASE_SERVICE_ROLE_KEY set, the admin API fails closed."""
        resp = client.get("/api/admin/users", headers=_auth("whatever"))
        assert resp.status_code == 503

    def test_admin_users_forbidden_for_regular_user(self, client, supabase_admin):
        """A signed-in, non-allow-listed user must be forbidden."""
        supabase_admin.add_user("tok-regular", "uid-regular", "regular@smartcare.org")
        resp = client.get("/api/admin/users", headers=_auth("tok-regular"))
        assert resp.status_code == 403

    def test_admin_can_list_users(self, client, supabase_admin):
        """An allow-listed (ADMIN_EMAILS) signed-in user can list users."""
        supabase_admin.add_user("tok-admin", "uid-admin", "admin@smartcare.org")
        resp = client.get("/api/admin/users", headers=_auth("tok-admin"))
        assert resp.status_code == 200
        data = resp.get_json()
        assert any(u["email"] == "admin@smartcare.org" for u in data)

    def test_admin_role_update(self, client, supabase_admin):
        supabase_admin.add_user("tok-admin", "uid-admin", "admin@smartcare.org")
        supabase_admin.add_user(
            "tok-x", "uid-target", "promote-me@smartcare.org", role="Unassigned"
        )
        resp = client.patch(
            "/api/admin/users/uid-target/role",
            json={"role": "Paramedic"},
            headers=_auth("tok-admin"),
        )
        assert resp.status_code == 200
        assert resp.get_json()["role"] == "Paramedic"

    def test_admin_delete_user(self, client, supabase_admin):
        supabase_admin.add_user("tok-admin", "uid-admin", "admin@smartcare.org")
        supabase_admin.add_user("tok-x", "uid-target", "todelete@smartcare.org")
        resp = client.delete(
            "/api/admin/users/uid-target",
            headers={**_auth("tok-admin"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 200
        users_after = client.get("/api/admin/users", headers=_auth("tok-admin")).get_json()
        assert not any(u["email"] == "todelete@smartcare.org" for u in users_after)

    def test_admin_cannot_delete_own_account(self, client, supabase_admin):
        supabase_admin.add_user("tok-admin", "uid-admin", "admin@smartcare.org")
        resp = client.delete(
            "/api/admin/users/uid-admin",
            headers={**_auth("tok-admin"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 400

    def test_non_admin_cannot_update_role(self, client, supabase_admin):
        supabase_admin.add_user("tok-attacker", "uid-attacker", "attacker@smartcare.org")
        supabase_admin.add_user("tok-victim", "uid-victim", "victim@smartcare.org")
        resp = client.patch(
            "/api/admin/users/uid-victim/role",
            json={"role": "Admin"},
            headers=_auth("tok-attacker"),
        )
        assert resp.status_code == 403


# ── Self-service account deletion (Security #4, GDPR Art. 17) ───────────────
class TestAccountSelfDelete:
    def test_requires_auth(self, client, supabase_admin):
        resp = client.delete(
            "/api/account", headers={"X-Requested-With": "XMLHttpRequest"}
        )
        assert resp.status_code == 401

    def test_not_configured_returns_503(self, client):
        resp = client.delete(
            "/api/account",
            headers={**_auth("whatever"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 503

    def test_self_delete_works_no_admin_required(self, client, supabase_admin):
        """A completely ordinary (non-admin) signed-in user can delete themself."""
        supabase_admin.add_user("tok-jane", "uid-jane", "jane@example.com")
        resp = client.delete(
            "/api/account",
            headers={**_auth("tok-jane"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 200
        assert "uid-jane" not in supabase_admin.profiles

    def test_only_deletes_the_caller_own_account(self, client, supabase_admin):
        """There is no id parameter on this route — it can only ever delete
        the account the caller's own token resolves to, never someone else's."""
        supabase_admin.add_user("tok-jane", "uid-jane", "jane@example.com")
        supabase_admin.add_user("tok-bob", "uid-bob", "bob@example.com")
        client.delete(
            "/api/account",
            headers={**_auth("tok-jane"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert "uid-jane" not in supabase_admin.profiles
        assert "uid-bob" in supabase_admin.profiles


# ── Security headers (P0-7, §3.5) ────────────────────────────────────────────
class TestSecurityHeaders:
    REQUIRED_HEADERS = [
        "X-Content-Type-Options",
        "X-Frame-Options",
        "Referrer-Policy",
        "Content-Security-Policy",
    ]

    def test_security_headers_present(self, client):
        resp = client.get("/")
        for h in self.REQUIRED_HEADERS:
            assert h in resp.headers, f"Missing header: {h}"

    def test_csp_blocks_framing(self, client):
        csp = client.get("/").headers.get("Content-Security-Policy", "")
        assert "frame-ancestors" in csp


# ── Health check ─────────────────────────────────────────────────────────────
class TestHealthCheck:
    def test_health_returns_ok(self, client):
        resp = client.get("/api/health")
        assert resp.status_code == 200
        assert resp.get_json()["status"] == "healthy"


# ── Audit logging (P2-5, §4.7(b)) ────────────────────────────────────────────
class TestAuditLogging:
    def test_admin_access_denied_is_audited(self, client, caplog, supabase_admin):
        supabase_admin.add_user("tok-regular", "uid-regular", "regular@smartcare.org")
        with caplog.at_level(logging.INFO, logger="smartcare.audit"):
            client.get("/api/admin/users", headers=_auth("tok-regular"))
        records = [r for r in caplog.records if r.name == "smartcare.audit"]
        events = [json.loads(r.message) for r in records]
        assert any(e["event"] == "admin_access" and e["outcome"] == "denied"
                   for e in events)

    def test_admin_action_is_audited(self, client, caplog, supabase_admin):
        supabase_admin.add_user("tok-admin", "uid-admin", "admin@smartcare.org")
        with caplog.at_level(logging.INFO, logger="smartcare.audit"):
            client.get("/api/admin/users", headers=_auth("tok-admin"))
        records = [r for r in caplog.records if r.name == "smartcare.audit"]
        events = [json.loads(r.message) for r in records]
        assert any(e["event"] == "admin_list_users" and e["outcome"] == "success"
                   for e in events)


# ── CSRF guard (P2-7, §4.2(b)) ───────────────────────────────────────────────
# Exercised against the admin role-update route (the only PATCH endpoint left
# in server.py) rather than the retired /api/login. The guard is a
# before_request hook, so it fires regardless of which route it protects.
class TestCsrfGuard:
    def test_post_without_json_content_type_rejected(self, client, supabase_admin):
        """A plain-form request to an API endpoint must be rejected (CSRF)."""
        resp = client.patch(
            "/api/admin/users/uid-1/role",
            data="role=Admin",
            content_type="application/x-www-form-urlencoded",
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 400

    def test_post_without_xrw_header_rejected(self, client, supabase_admin):
        """A request missing X-Requested-With must be rejected."""
        resp = client.patch(
            "/api/admin/users/uid-1/role",
            json={"role": "Admin"},
            headers={"X-Requested-With": ""},  # blank — override the fixture default
        )
        assert resp.status_code == 400

    def test_valid_json_request_allowed(self, client, supabase_admin):
        """A well-formed JSON request with the CSRF headers must reach the handler."""
        resp = client.patch(
            "/api/admin/users/uid-1/role",
            json={"role": "Admin"},
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        # Handler reached — 401 from missing auth, not 400 from the CSRF guard.
        assert resp.status_code == 401

    def test_get_requests_not_blocked(self, client, supabase_admin):
        """GET requests are never subject to the CSRF guard (only auth applies)."""
        assert client.get("/api/admin/users").status_code == 401


# ── Static files ──────────────────────────────────────────────────────────────
class TestStaticFiles:
    def test_style_css(self, client):
        resp = client.get("/styles.css")
        assert resp.status_code == 200
        assert resp.content_type.startswith("text/css")

    def test_manifest_json(self, client):
        resp = client.get("/manifest.json")
        assert resp.status_code == 200
        assert resp.content_type.startswith("application/json")

    def test_nonexistent_file_returns_404(self, client):
        resp = client.get("/nonexistent-file.xyz")
        assert resp.status_code == 404
