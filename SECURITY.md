# Security Policy

SmartCare is developed following secure software development best practices.

## Reporting a Vulnerability

If you discover a security vulnerability, **do not open a public issue**.
Instead, report it privately so it can be triaged and remediated before disclosure.

- Email the project maintainer.
- Include: a description, steps to reproduce, affected component/endpoint, and
  impact assessment.
- You will receive an acknowledgement and a remediation timeline.

## Supported Surface

| Component | Notes |
|-----------|-------|
| Backend API (`server.py`) | Self-service account deletion only (`/api/account`). |
| Authentication | Google OAuth 2.0 via Supabase. |
| Admin API (`supabase/functions/admin-*`) | Supabase Edge Functions — require a Supabase session token **and** an allow-listed email (`ADMIN_EMAILS` secret). |

## Security Controls in CI

Every push and pull request runs:
- **Ruff** — Python static linting.
- **pytest** — includes access-control regression tests.
- **Bandit** — Python SAST (Static Source Code Scanning).
- **pip-audit** — dependency vulnerability scanning.
- **ESLint** — JavaScript static analysis.

## Handling of Secrets

All secrets (`SECRET_KEY`, OAuth credentials, `DATABASE_URL`) are injected via
environment variables — never hard-coded. See `.env.example`. Databases and
`.env` files are git-ignored and must never be committed.

## Roadmap

A full compliance gap analysis and remediation roadmap is maintained in
[`upgrades.md`](upgrades.md); the mandated requirements specification is in
[`docs/requirements.md`](docs/requirements.md).
