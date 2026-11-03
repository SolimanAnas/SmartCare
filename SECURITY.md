# Security Policy

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
| Static web app (GitHub Pages) | HTML/CSS/JS + service worker. No server-side code. |
| Authentication | Google OAuth 2.0 via Supabase Auth. Email/password sign-up should be disabled. |
| Data | Supabase Postgres; `user_state` and `profiles` protected by row-level security (own row only). |
| Edge Functions (`supabase/functions/`) | `account-delete` — any signed-in user, own account only. `admin-*` — confirmed, Google-verified email in the `ADMIN_EMAILS` secret. |

## Security Controls in CI

Every push and pull request runs:
- **Ruff** — Python linting (build scripts, tests).
- **pytest** — content and course data checks.
- **Bandit** — Python SAST on `scripts/`.
- **pip-audit** — Python dependency vulnerability scanning.
- **ESLint** — JavaScript static analysis.
- **Playwright** — end-to-end tests, including XSS and offline regressions.

## Handling of Secrets

- The browser only ever holds the Supabase publishable/anon key
  (`pages/supabase-config.js`); access is enforced by row-level security.
- The `service_role` key exists only inside Supabase Edge Functions, injected
  by Supabase. `ADMIN_EMAILS` is a Supabase secret. Neither is in this repo.
- `.env` files are git-ignored and excluded from the Pages build.

## Roadmap

A compliance gap analysis and remediation roadmap is maintained in
[`docs/upgrades.md`](docs/upgrades.md); the requirements specification is in
[`docs/requirements.md`](docs/requirements.md).
