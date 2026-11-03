# Environment Separation — SmartCare CPG 2025

**Policy ref:** Secure SDLC §6 (SAD §5.6 "Network Positioning") · §3.9 · ISR 8.1.1.4
**Document ref:** CPG2025-ENV-001 · Version 2.0 · 2026-11-03 (static site + Supabase; the Flask/Render setup was retired)
**Classification:** Shared – Confidential

---

## 1. Purpose

This document defines the separation of environments used throughout the SmartCare CPG 2025 SDLC, ensuring that production data is never accessible from development or test environments and that each environment has controls appropriate to its exposure level.

---

## 2. Environment Inventory

SmartCare has no application server: the app is static files plus Supabase.

| Environment | Purpose | Hosting | Access |
|-------------|---------|---------|--------|
| **Development (DEV)** | Active coding and local preview | Developer workstation — `python3 -m http.server 8899 --bind 127.0.0.1` | Developer only — bound to localhost |
| **CI (Continuous Integration)** | Lint, tests, SAST, dependency scan | GitHub Actions ephemeral runners | GitHub Actions — isolated per run |
| **Production (PROD)** | Live app | GitHub Pages (static, HTTPS) + Supabase project (auth, Postgres, Edge Functions) | Public site; data behind Google sign-in + row-level security |

---

## 3. Data Rules per Environment

| Rule | DEV | CI | PROD |
|------|:---:|:--:|:----:|
| Real user data in the repo or CI | ✗ | ✗ | — |
| Production `service_role` key outside Supabase | ✗ | ✗ | ✗ |
| TLS required | ✗ | ✗ | ✅ |
| External network exposure | ✗ (localhost only) | ✗ | ✅ |

---

## 4. Configuration per Environment

### 4.1 Development

- Static preview server bound to `127.0.0.1`; no secrets needed.
- Signing in locally uses the production Supabase project; `http://localhost:8899/pages/login.html` must be listed in Supabase Redirect URLs.
- `.env` files (if any) are git-ignored and excluded from the Pages build.

### 4.2 CI (GitHub Actions)

- Runs Ruff, pytest (content checks), Bandit, pip-audit, ESLint, Playwright.
- Needs no secrets; Playwright serves the repo with a local static server.
- Ephemeral runner destroyed after each run — no data persistence.

### 4.3 Production

- **GitHub Pages**: `.github/workflows/static.yml` publishes a filtered copy of the repo (`.pagesignore` excludes tooling, tests, docs, Supabase source, dotfiles).
- **Supabase**: `service_role` key exists only in Edge Function environments (injected by Supabase); `ADMIN_EMAILS` is a Supabase secret; Email auth provider disabled, Google only.

---

## 5. Promotion Gates

```
DEV ──► Pull request ──► CI green (lint + tests + SAST + pip-audit + E2E)
                              │  review (CODEOWNERS)
                              ▼
                       merge to main ──► GitHub Pages deploy (automatic)

Supabase migrations / Edge Functions ──► deployed manually with the Supabase CLI
```

---

## 6. Secret Isolation

| Secret | DEV | CI | PROD |
|--------|:---:|:--:|:----:|
| Supabase publishable (anon) key | `pages/supabase-config.js` (public by design) | same | same |
| Supabase `service_role` key | never | never | Edge Function env (Supabase-injected) |
| `ADMIN_EMAILS` | never | never | Supabase secret |

---

## 7. Network Zones

| Zone | Exposure | Controls |
|------|----------|---------|
| DEV workstation | None (localhost only) | Preview server bound to `127.0.0.1` |
| CI runner | GitHub internal network | Ephemeral; destroyed post-run; no inbound |
| GitHub Pages | HTTPS (public) | Static files only; filtered by `.pagesignore` |
| Supabase | HTTPS (public API) | Google sign-in, row-level security, admin allow-list in Edge Functions |

---

## 8. Open Items

| ID | Item | Owner | Target |
|----|------|-------|--------|
| — | Confirm Supabase Email auth provider is disabled | Project Owner | Next deploy |

---

## 9. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Project Manager | | ☐ |
| Project Owner | | ☐ |
