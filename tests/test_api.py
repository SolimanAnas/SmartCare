"""Smoke tests for the SmartCare Flask API."""
import json
import logging
import types

import pytest
import requests as requests_lib


# ── Fake Supabase backend (server.py talks to Supabase over HTTP for the
# self-service account-deletion endpoint; these tests stub `requests.get/
# delete` so no network is needed). The admin console (pages/admin.html) is
# served by Supabase Edge Functions now — see supabase/functions/ — so its
# tests live outside this Flask test suite. ─────────────────────────────────
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
def supabase_backend(monkeypatch):
    """Stubs server.py's Supabase integration with an in-memory fake.
    Returns a namespace with add_user(token, id, email, ...) to seed fixtures."""
    import server

    monkeypatch.setattr(server, "SUPABASE_URL", "https://fake.supabase.co")
    monkeypatch.setattr(server, "SUPABASE_SERVICE_ROLE_KEY", "fake-service-role-key")

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
        return _FakeResp(404, {})

    def fake_delete(url, headers=None, timeout=None):
        user_id = url.rsplit("/", 1)[-1]
        if user_id in profiles:
            del profiles[user_id]
            return _FakeResp(200, {})
        return _FakeResp(404, {})

    monkeypatch.setattr(server.requests, "get", fake_get)
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


# ── Self-service account deletion (Security #4, GDPR Art. 17) ───────────────
# Backed by Supabase (real Google sign-ins) — see server.py's
# _require_supabase_user(). The `supabase_backend` fixture stubs the Supabase
# HTTP calls so these tests need no network. This is the only account system
# left in server.py; the legacy Flask-Login/SQLAlchemy email+password system
# was retired since nothing in the live app ever called it, and the admin
# console's CRUD API moved to Supabase Edge Functions (supabase/functions/).
class TestAccountSelfDelete:
    def test_requires_auth(self, client, supabase_backend):
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

    def test_self_delete_works_no_admin_required(self, client, supabase_backend):
        """A completely ordinary (non-admin) signed-in user can delete themself."""
        supabase_backend.add_user("tok-jane", "uid-jane", "jane@example.com")
        resp = client.delete(
            "/api/account",
            headers={**_auth("tok-jane"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 200
        assert "uid-jane" not in supabase_backend.profiles

    def test_only_deletes_the_caller_own_account(self, client, supabase_backend):
        """There is no id parameter on this route — it can only ever delete
        the account the caller's own token resolves to, never someone else's."""
        supabase_backend.add_user("tok-jane", "uid-jane", "jane@example.com")
        supabase_backend.add_user("tok-bob", "uid-bob", "bob@example.com")
        client.delete(
            "/api/account",
            headers={**_auth("tok-jane"), "X-Requested-With": "XMLHttpRequest"},
        )
        assert "uid-jane" not in supabase_backend.profiles
        assert "uid-bob" in supabase_backend.profiles


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
# The admin-* audit events (admin_access, admin_list_users, ...) now come from
# the Supabase Edge Functions in supabase/functions/ (see their `audit()`
# helper, which logs to the Supabase Functions dashboard instead of this
# Flask logger). Only the self-delete audit trail remains here.
class TestAuditLogging:
    def test_self_delete_is_audited(self, client, caplog, supabase_backend):
        supabase_backend.add_user("tok-jane", "uid-jane", "jane@example.com")
        with caplog.at_level(logging.INFO, logger="smartcare.audit"):
            client.delete(
                "/api/account",
                headers={**_auth("tok-jane"), "X-Requested-With": "XMLHttpRequest"},
            )
        records = [r for r in caplog.records if r.name == "smartcare.audit"]
        events = [json.loads(r.message) for r in records]
        assert any(e["event"] == "account_self_delete" and e["outcome"] == "success"
                   for e in events)


# ── CSRF guard (P2-7, §4.2(b)) ───────────────────────────────────────────────
# The guard is a before_request hook keyed on method + the /api/ path prefix,
# so it fires before route dispatch regardless of whether a route exists —
# exercised here against /api/account (the only body-carrying endpoint left
# in server.py) plus a synthetic /api/ path for the POST/PUT content-type
# check, since no POST/PUT route remains in this Flask app at all.
class TestCsrfGuard:
    def test_post_without_json_content_type_rejected(self, client):
        """A plain-form request to an /api/ endpoint must be rejected (CSRF)."""
        resp = client.post(
            "/api/whatever",
            data="role=Admin",
            content_type="application/x-www-form-urlencoded",
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 400

    def test_delete_without_xrw_header_rejected(self, client, supabase_backend):
        """A request missing X-Requested-With must be rejected."""
        resp = client.delete(
            "/api/account",
            headers={"X-Requested-With": ""},  # blank — override the fixture default
        )
        assert resp.status_code == 400

    def test_valid_delete_request_allowed(self, client, supabase_backend):
        """A well-formed request with the CSRF headers must reach the handler."""
        resp = client.delete(
            "/api/account",
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        # Handler reached — 401 from missing auth, not 400 from the CSRF guard.
        assert resp.status_code == 401

    def test_get_requests_not_blocked(self, client):
        """GET requests are never subject to the CSRF guard (only auth applies)."""
        assert client.get("/api/health").status_code == 200


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
