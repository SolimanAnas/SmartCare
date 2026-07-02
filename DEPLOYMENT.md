# Deployment Guide — SmartCare

Covers local development and production deployment.

## 1. Prerequisites

- Python 3.11+
- `pip` / virtualenv
- A WSGI host (Render, or standard server) running Gunicorn

## 2. Environment Variables

server.py has no database of its own — real users live in Supabase (the same
account system the frontend uses for sign-in). It only serves static files plus
one endpoint: self-service account deletion (`DELETE /api/account`). The admin
console's API (list/update-role/delete users) runs as Supabase Edge Functions
instead — see `docs/SUPABASE_SETUP.md` §4 — so it has no server.py dependency
and no separate env vars to set here.

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `SECRET_KEY` | Strongly recommended | ephemeral random (logs a warning) | Flask session signing. Without it, sessions don't survive a restart. Generate: `python -c "import secrets; print(secrets.token_hex(32))"` |
| `APP_ENV` | Prod | `development` | Set to `production` to enable `Secure` session cookies + HSTS |
| `SUPABASE_URL` | For account self-deletion | — | Same project URL as `pages/supabase-config.js`. Without it, `/api/account` returns `503` |
| `SUPABASE_SERVICE_ROLE_KEY` | For account self-deletion | — | Supabase dashboard → Project Settings → API → `service_role` secret. **Never** put this in a file shipped to the browser — see `docs/SUPABASE_SETUP.md` §4 |
| `RATELIMIT_STORAGE_URI` | Multi-worker prod | `memory://` | Set to `redis://...` so rate limits are shared across workers |

> Never commit secrets. `.env` is gitignored.

## 3. Local Development

```bash
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt

export SECRET_KEY=$(python -c "import secrets; print(secrets.token_hex(32))")
python server.py        # http://localhost:8899 (set FLASK_DEBUG=1 for debug)
```

Alternatively, run `server.bat` on Windows to launch and open the app in your browser automatically.

## 4. Running Tests

```bash
SECRET_KEY=test python -m pytest tests/ -v
```

## 5. Production (Gunicorn)

The app exposes a module-level `app = create_app()`, so the `Procfile` works as-is:

```
web: gunicorn server:app
```

Manual launch:

```bash
APP_ENV=production SECRET_KEY=... gunicorn server:app --bind 0.0.0.0:$PORT --workers 2
```

> When running more than one worker, set `RATELIMIT_STORAGE_URI=redis://...` so
> rate limits are enforced consistently across processes.

## 6. Host Configuration

1. **TLS / HTTPS** — terminate TLS at the host/load balancer. Setting
   `APP_ENV=production` makes session cookies `Secure` and emits HSTS.
2. **Rate-limit storage** — Redis via `RATELIMIT_STORAGE_URI` for multi-worker.
3. **Audit log sink** — route the `smartcare.audit` logger to a monitored sink
   (CloudWatch/Datadog/etc.).
4. **Health checks** — point the monitor at `GET /api/health` (`200` = alive;
   this is a liveness probe only — there's no local database to be "down").

## 7. Post-Deploy Verification

```bash
curl -fsS https://<host>/api/health        # {"status":"healthy"}
curl -sI https://<host>/ | grep -iE "content-security-policy|x-frame-options|strict-transport-security"
```
