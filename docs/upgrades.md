# SmartCare — v2.0 Upgrade Roadmap & Repository Audit

> **Living document.** Updated as items ship. Each item carries a status checklist —
> move the `x` as work progresses. Findings are from a full repository audit
> (July 2026): every HTML page, `styles.css`, `app.js`, `sw.js`, `manifest.json`,
> `server.py`, Supabase integration, CI workflows, assets, and docs were reviewed.
>
> **Ordering philosophy:** highest user value ÷ lowest engineering effort first.
> Within each section, items are listed in recommended execution order.
>
> Repo vitals at audit time: **202 MB total** (deployed in full to GitHub Pages),
> 39 MB `images/`, 37 MB `icons/`, 103 MB `pdf_sections/`, 12 MB `algorithms/`,
> ~37 standalone HTML pages, 13 chapter content bundles (15 KB–402 KB each),
> service worker `smartcare-v2.9`, Flask API + Supabase hybrid backend.

---

# Critical Fixes

## 1. Stop deploying the entire repository to GitHub Pages

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`static.yml` uploads `path: '.'` — all 202 MB — to public GitHub Pages. That
includes `pdf_sections/` (103 MB of exam PDFs, a copyright/medico-legal exposure),
`_archive/`, `content_starters_backup/`, `reports/`, `scripts/`, `tests/`,
`server.py`, `.graphify/graph.json` (2 MB), and `graphify.html` (a dev tool).
Anyone can crawl these. Deploys are slow, and the public surface leaks internal files.

### Current implementation
`.github/workflows/static.yml` → `upload-pages-artifact` with `path: '.'`.

### Recommended upgrade
Deploy an explicit allow-list of runtime folders only.

### Detailed implementation steps
1. Add a "Prepare site" step before upload: `mkdir _site && rsync -a --exclude-from=.pagesignore . _site/` (or an explicit `cp` list: `index.html 404.html app.js styles.css sw.js manifest.json favicon.ico chapters content pages courses algorithms icons images data src docs/SUPABASE_SETUP.md`).
2. Create `.pagesignore` listing `pdf_sections/ _archive/ content_starters_backup/ reports/ scripts/ tests/ .graphify/ graphify.html graphify.yaml server.py requirements.txt pyproject.toml Procfile`.
3. Change `upload-pages-artifact` to `path: '_site'`.
4. Verify the deployed site still passes a smoke click-through (home → chapter → quiz → login).

### Files to modify
`.github/workflows/static.yml`, new `.pagesignore`.

### Difficulty
Easy

### Priority
**Critical**

### Estimated impact
Security, legal exposure, deploy speed, bandwidth, professionalism.

---

## 2. De-index and strip SEO metadata from the admin console

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`pages/admin.html` is meant to be hidden behind a 4-tap + PIN gesture, yet it ships
`<meta name="robots" content="index, follow">`, Open Graph tags, Twitter cards, and
JSON-LD that *advertise* "SmartCare admin dashboard — manage users…" to every search
engine. The server-side `ADMIN_EMAILS` check keeps data safe, but publicly indexing
the admin URL invites probing.

### Current implementation
`pages/admin.html:8` — `robots: index, follow` plus full SEO/OG/JSON-LD block (lines 4–63).

### Recommended upgrade
`noindex, nofollow`, remove OG/Twitter/JSON-LD entirely, and add the page to a new
`robots.txt` disallow list.

### Detailed implementation steps
1. Replace the robots meta with `<meta name="robots" content="noindex, nofollow">`.
2. Delete the OG, Twitter, canonical, and JSON-LD blocks from `admin.html`.
3. Add `Disallow: /pages/admin.html` to the new `robots.txt` (see SEO §1).

### Files to modify
`pages/admin.html`, `robots.txt`.

### Difficulty
Easy

### Priority
**Critical**

### Estimated impact
Security (attack-surface discoverability), professionalism.

---

## 3. Fix the service-worker `accept` header crash and dead pre-cache entries

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Two latent bugs: (a) `sw.js:176` calls `req.headers.get('accept').includes(...)` —
`accept` can be `null` (some fetches/extensions), which throws inside the fetch
handler and fails the request entirely while offline. (b) `PRE_CACHE` lists
`chapters/s1.html` and `content/s1.js`, which **do not exist** — every install logs
two failed fetches and carries dead entries.

### Current implementation
`sw.js:176` unguarded `.get('accept')`; `sw.js:37,51` reference deleted files.

### Recommended upgrade
Null-safe accept check; prune the pre-cache list; add a CI guard that verifies every
`PRE_CACHE` entry exists.

### Detailed implementation steps
1. Change to `const accept = req.headers.get('accept') || ''; if (accept.includes('text/html') || req.mode === 'navigate')`.
2. Remove `'chapters/s1.html'` and `'content/s1.js'` from `PRE_CACHE`.
3. Add a tiny Node script `scripts/check-precache.js` that parses `PRE_CACHE` and `fs.existsSync`-checks each path; wire it into `ci.yml` after the ESLint step.
4. Bump `CACHE_VERSION`.

### Files to modify
`sw.js`, new `scripts/check-precache.js`, `.github/workflows/ci.yml`.

### Difficulty
Easy

### Priority
**Critical**

### Estimated impact
Reliability (offline correctness — this is the core promise of the app).

---

## 4. "Clear Cache" wipes the user's Supabase session and all progress with one tap

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The drawer's Cache button runs `localStorage.clear()` (`index.html` drawer logic),
which deletes: study progress, quiz history, theme, font size, **and the `sb-*`
Supabase session keys** — silently signing the user out and destroying unsynced
data. A "fix a glitch" button should never be a data-loss button.

### Current implementation
`qsClearCache` handler: `caches.delete(...)` for all caches, then `localStorage.clear()`, then reload.

### Recommended upgrade
Clear only HTTP caches + unregister SW by default. Offer "also reset my study data"
as a separate confirm step that (if signed in) runs `SmartCareCloud.push()` first,
and always preserves `sb-*` keys and theme.

### Detailed implementation steps
1. Split the handler: step 1 clears `caches` and calls `navigator.serviceWorker.getRegistrations()` → `unregister()`, then reloads.
2. Step 2 (second confirm): iterate `localStorage` keys, delete only `smartcare_*`/`smartcare-*` keys, never `sb-*`.
3. Before step 2, if `SmartCareCloud.getUser()` resolves, `await SmartCareCloud.push()` and tell the user a backup was made.
4. Mirror the same fix in `pages/courses.html` if it gains a cache button.

### Files to modify
`index.html` (drawer script).

### Difficulty
Easy

### Priority
**Critical**

### Estimated impact
User retention (data loss is the #1 uninstall trigger), reliability.

---

## 5. The drawer "Logout" button doesn't log out of the real auth system

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`qsLogout` removes `smartcare_local_auth` — a key from the *retired* Flask local-auth
experiment — and redirects to login. The actual session (Supabase, `sb-*` keys)
survives, so the user lands on login.html still signed in. "Logout that doesn't log
out" is a trust and shared-device privacy problem.

### Current implementation
`index.html`: `localStorage.removeItem('smartcare_local_auth'); window.location.replace('pages/login.html');`

### Recommended upgrade
Call `SmartCareCloud.signOut()` (already exists in `pages/supabase-client.js`) and
then redirect; keep the legacy key removal as belt-and-braces.

### Detailed implementation steps
1. Load `pages/supabase-config.js` + `pages/supabase-client.js` are already on index.html (added for the hero greeting) — reuse them.
2. Handler: `await SmartCareCloud.signOut().catch(()=>{}); localStorage.removeItem('smartcare_local_auth'); location.replace('pages/login.html');`
3. Update the hero greeting via the existing `SmartCareCloud.onChange` hook (it already re-renders to Guest).

### Files to modify
`index.html`.

### Difficulty
Easy

### Priority
**Critical**

### Estimated impact
Security (shared devices), trust, UX coherence.

---

## 6. Remove `user-scalable=no` from all ~30 pages (WCAG failure)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`maximum-scale=1.0, user-scalable=no` blocks pinch-zoom on ~30 pages (index, all 13
chapters, most tools). This fails WCAG 2.1 SC 1.4.4, hurts low-vision users — a real
concern for a medical study app used by tired clinicians on night shift — and iOS
Safari ignores it anyway (inconsistent behavior across platforms).

### Current implementation
`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">` in `index.html`, `404.html`, all `chapters/*.html`, most `pages/*.html`.

### Recommended upgrade
Standardize on `width=device-width, initial-scale=1.0, viewport-fit=cover` everywhere.

### Detailed implementation steps
1. `grep -rl "user-scalable=no"` and batch-replace the viewport meta in each file (a one-line `sed` across the repo, excluding `_archive/`).
2. Spot-check 2–3 pages for layout breakage when zoomed (there should be none — layouts are responsive).

### Files to modify
`index.html`, `404.html`, `chapters/*.html` (14 files), `pages/*.html` (~18 files).

### Difficulty
Easy

### Priority
**Critical** (accessibility + store-review risk)

### Estimated impact
Accessibility, App Store/Play review compliance, medical safety (dose tables must be zoomable).

---

# Security

## 1. Add Subresource Integrity (SRI) to all CDN scripts

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Zero `integrity=` attributes exist in the repo. Chart.js, Font Awesome (cdnjs), the
Supabase SDK, and Google Fonts load from third-party CDNs. A compromised CDN could
inject script into a *medical reference app*. SRI pins exact hashes.

### Current implementation
`index.html` loads `https://cdn.jsdelivr.net/npm/chart.js` unpinned (floating latest!);
`pages/admin.html`/`login.html` load Font Awesome 6.0.0-beta3 from cdnjs; `supabase-client.js` dynamically imports `@supabase/supabase-js@2/+esm`.

### Recommended upgrade
Pin exact versions with SRI hashes for `<script>`/`<link>` tags; for the dynamic
Supabase import, pin an exact version (`@supabase/supabase-js@2.x.y`) — dynamic
`import()` can't use SRI, so consider self-hosting it (see Offline §3).

### Detailed implementation steps
1. Replace `chart.js` URL with a pinned version (`chart.js@4.x.y/dist/chart.umd.min.js`) + `integrity` + `crossorigin="anonymous"`.
2. Same for Font Awesome (or replace it with the existing `icons/sprite.svg` Lucide set — it's already used everywhere else; Font Awesome is a second icon system, see Code Quality §3).
3. Pin the Supabase ESM import version in `pages/supabase-client.js`.
4. Generate hashes with `openssl dgst -sha384 -binary file | openssl base64 -A`.

### Files to modify
`index.html`, `pages/admin.html`, `pages/login.html`, `pages/supabase-client.js`, any other CDN consumers (`grep -rl "cdn\." --include="*.html"`).

### Difficulty
Easy

### Priority
High

### Estimated impact
Security (supply chain), reliability (no surprise breaking CDN updates).

---

## 2. Tighten CSP: remove `'unsafe-inline'` for scripts (long-term), add CSP to GitHub Pages via meta

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`server.py` sends a decent CSP but with `script-src 'unsafe-inline'`, which
neutralizes much of its XSS protection. The GitHub Pages deployment has **no CSP at
all** (no server headers there).

### Current implementation
`server.py:_register_security_headers` — CSP with `'unsafe-inline'`. Pages relies on inline `<script>` blocks in every HTML file.

### Recommended upgrade
Short term: add `<meta http-equiv="Content-Security-Policy">` to every page so the
Pages deployment gets *some* CSP. Long term: extract inline scripts to `.js` files
(pairs with Code Quality §1) and drop `'unsafe-inline'`.

### Detailed implementation steps
1. Add a meta CSP mirroring server.py's policy to the shared `<head>` of each page (do this when the shared-head template of Code Quality §2 lands, to avoid 37 hand-edits).
2. Move inline `<script>` bodies into `src/pages/*.js` files progressively (start with index.html — the largest).
3. Remove `'unsafe-inline'` from `script-src` in `server.py` once no inline scripts remain; keep `'unsafe-inline'` for styles until the CSS consolidation (Code Quality §2) is done.

### Files to modify
`server.py`, all `*.html`, new `src/pages/*.js`.

### Difficulty
Hard (long tail)

### Priority
Medium

### Estimated impact
Security (XSS defense-in-depth).

---

## 3. Production-grade rate-limit storage

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`limiter` uses `memory://` storage. `DEPLOYMENT.md` runs gunicorn with 2 workers —
each worker has its own counter, so real limits are ~2× the configured values, and
counters reset on every deploy.

### Current implementation
`server.py` — `RATELIMIT_STORAGE_URI` defaults to `memory://` (code comment already acknowledges this).

### Recommended upgrade
Set `RATELIMIT_STORAGE_URI=redis://...` in the Render environment (free Redis tier
or Upstash), no code change needed.

### Detailed implementation steps
1. Provision Redis; set the env var on the deployment.
2. Add `redis` to `requirements.txt` (flask-limiter needs the client lib).
3. Document in `DEPLOYMENT.md`.

### Files to modify
`requirements.txt`, `DEPLOYMENT.md`, deployment env.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Security (real brute-force protection), reliability.

---

## 4. Self-service account deletion (also a Play Store requirement)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`privacy.html §7` promises deletion "within 30 days" via email. Google Play now
**requires** in-app account deletion for apps with accounts. Manual email flows also
don't scale.

### Current implementation
No deletion endpoint or UI. Admin can delete users via `admin.html`, but users can't delete themselves.

### Recommended upgrade
Add `DELETE /api/account` (verifies the caller's own Supabase token, deletes their
`auth.users` row via the service-role Admin API — `profiles` and `user_state`
cascade) plus a "Delete my account" button with double-confirm on `login.html`'s
signed-in card.

### Detailed implementation steps
1. `server.py`: new route reusing `_supabase_user_from_token()` (no admin check — a user may delete *themself*); call `DELETE {SUPABASE_URL}/auth/v1/admin/users/{caller_id}`.
2. Audit-log it (`account_self_delete`).
3. `login.html`: danger-zone button → typed confirmation ("DELETE") → call endpoint with bearer token → `signOut()` → clear `smartcare_*` localStorage keys.
4. Add a pytest covering: self-delete works, deleting *another* id via this route is impossible.
5. Update `privacy.html §7` to mention the in-app path.

### Files to modify
`server.py`, `pages/login.html`, `pages/privacy.html`, `tests/test_api.py`.

### Difficulty
Medium

### Priority
High (blocking for Play Store)

### Estimated impact
Store readiness, privacy compliance (GDPR Art. 17), trust.

---

## 5. Retire the legacy Flask local-auth system (dead attack surface)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Two auth systems coexist: the live Supabase/Google flow and a dormant Flask
email/password system (`/api/register`, `/api/login`, SQLAlchemy `User` table). No
frontend calls the Flask endpoints anymore, but they remain publicly exposed —
password endpoints that accept registrations into a database nobody reads. Dead
auth code is pure attack surface plus maintenance burden. Commented-out auth guards
also linger in `index.html:76-91` and `app.js` ("LOCAL AUTH GUARD" block).

### Current implementation
`server.py` register/login/logout + `User` model + `users.db`; `signup.html` already just redirects to `login.html`; guards are commented out in two files.

### Recommended upgrade
Delete the Flask auth endpoints and `User` model (keep `/api/health` and the
Supabase-backed `/api/admin/*`), delete the commented-out guard blocks, delete
`smartcare_local_auth` references.

### Detailed implementation steps
1. Remove routes `register`, `login`, `google_login`, `logout` and the `User` model + `flask_login`/`werkzeug.security` imports from `server.py`.
2. Remove the corresponding test classes; keep admin/health/CSRF/header tests.
3. Delete the commented guard blocks in `index.html` and `app.js`; remove `smartcare_local_auth` from `qsLogout` and `SYNC_BLOCK` in `supabase-client.js`.
4. Slim `requirements.txt` (drop Flask-Login, Flask-SQLAlchemy if the DB is fully unused).
5. Run full pytest + a manual login/sync smoke test.

### Files to modify
`server.py`, `tests/test_api.py`, `index.html`, `app.js`, `pages/supabase-client.js`, `requirements.txt`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Security, maintainability, ~500 lines of dead code removed.

---

# Performance

## 1. Compress and resize all images (39 MB images + 37 MB icons + 12 MB algorithms)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Course icons rendered at ~100 px are shipped as 2–3 MB PNGs (`icons/courses/PEPP.png`
= 2.99 MB). `algorithms/Pediatric-BLS-Single-Rescuer.png` is **5.37 MB** — and the
AHA algorithms are exactly what a clinician opens on a bad connection in a hurry.
Manifest screenshots (up to 2.4 MB each ×18) slow the install prompt. This is the
single biggest performance lever in the repo.

### Current implementation
Raw PNG exports, no compression pipeline, no responsive sizes, no WebP/AVIF.

### Recommended upgrade
One-time batch conversion: course icons → 256 px WebP (~20 KB each); algorithm
charts → max-width 1600 px WebP with PNG fallback (~150–300 KB each, still
crisp); screenshots → 1080 px JPEG/WebP ≤300 KB. Add `loading="lazy"` +
`decoding="async"` + explicit `width`/`height` to all `<img>` tags.

### Detailed implementation steps
1. `for f in icons/courses/*.png; do cwebp -q 82 -resize 256 0 "$f" -o "${f%.png}.webp"; done` (same pattern for `algorithms/` at 1600 px and `images/screenshots/` at 1080 px).
2. Update references (`grep -rl "icons/courses/"`) to `.webp`; keep PNG originals out of the deploy (move to a `raw-assets/` folder excluded by `.pagesignore`).
3. Add `loading="lazy" decoding="async" width=... height=...` to `<img>` tags in `pages/aha.html`, `pages/courses.html`, chapter pages.
4. Update `manifest.json` screenshot entries; verify install prompt still shows them.
5. Bump SW version.

### Files to modify
`icons/courses/*`, `algorithms/*`, `images/screenshots/*`, `pages/aha.html`, `pages/courses.html`, `manifest.json`, `sw.js`, `.pagesignore`.

### Difficulty
Medium (mostly mechanical)

### Priority
**High** — biggest single perf win

### Estimated impact
Performance (~80 MB → ~8 MB asset payload), offline install time, mobile data cost, retention.

---

## 2. Smarter service-worker strategy: stale-while-revalidate for app-shell assets + update toast

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Everything except icons/images/fonts is **network-first with a 5 s timeout**. On a
flaky hospital-basement connection, every navigation waits up to 5 s before falling
back to cache — the app *feels* broken exactly when offline support matters most.
Meanwhile `skipWaiting()` activates new SWs immediately, so a mid-session update can
mix old HTML with new content bundles.

### Current implementation
`sw.js`: `networkFirst` w/ `CACHE_TIMEOUT = 5000` for all same-origin; `cacheFirst` only for `/icons/`, `/images/`, font/CDN hosts; `skipWaiting()` on install.

### Recommended upgrade
Serve versioned static assets (`content/*.js`, `styles.css`, `app.js`, chapter HTML)
**stale-while-revalidate**: respond from cache instantly, refresh in background.
Keep network-first *only* for `/api/`. Replace silent `skipWaiting` with an "Update
ready — Refresh" toast driven by the `waiting` worker + `SKIP_WAITING` message
(handler already exists at `sw.js:249`).

### Detailed implementation steps
1. Add a `staleWhileRevalidate(req)` helper; route same-origin GETs for `.js/.css/.html/.json/.svg` through it.
2. Add `/algorithms/` to `CACHE_FIRST_PATTERNS` (currently NOT cached-first despite being static medical images).
3. Remove `skipWaiting()` from the install handler; in `index.html`'s SW registration, listen for `registration.waiting` / `updatefound` → show a small toast → on click `waiting.postMessage({type:'SKIP_WAITING'})` + reload on `controllerchange`.
4. Drop `CACHE_TIMEOUT` to 2500 ms for the remaining network-first paths.

### Files to modify
`sw.js`, `index.html` (registration script).

### Difficulty
Medium

### Priority
High

### Estimated impact
Performance (instant repeat loads), reliability, perceived speed offline.

---

## 3. Defer Chart.js (and load it only when the stats modal opens)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`index.html` loads Chart.js from CDN in `<head>` on every home-page visit; it is
only used inside the stats modal that most sessions never open. It blocks first
paint on slow connections.

### Current implementation
`<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>` at `index.html:104`.

### Recommended upgrade
Lazy-load on first stats-modal open with a dynamic script injection + loading state.

### Detailed implementation steps
1. Remove the head `<script>`.
2. In the stats-modal open handler: `if (!window.Chart) { await loadScript('...chart.umd.min.js'); }` with a spinner and a graceful offline message if it fails (SW's cdn cache-first will serve it after first success).
3. Pin version + SRI (Security §1).

### Files to modify
`index.html`.

### Difficulty
Easy

### Priority
High

### Estimated impact
Performance (First Contentful Paint on the most-visited page).

---

## 4. Split mega chapter bundles and lazy-load per section

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`content/c8.js` is 402 KB, `c6.js` 373 KB — each a single synchronous `<script>`
setting `window.CPG_DATA`. Every chapter open parses the *entire* chapter (all
sections, quizzes, scenarios) even to read one summary. On low-end Android this is
hundreds of ms of parse/eval.

### Current implementation
One `content/cN.js` per chapter, loaded eagerly by `chapters/cN.html`.

### Recommended upgrade
Keep the current file as the offline source of truth, but split at build time into
`content/cN/meta.js` (titles/TOC, ~5 KB) + `content/cN/sN.json` per section, fetched
on demand (and cached by SW). A small build script generates these from the existing
files — no hand-migration of content.

### Detailed implementation steps
1. Write `scripts/split_content.py`: evaluate/parse each `content/cN.js`, emit per-section JSON + meta file into `content/` (checked in, so GitHub Pages serves them).
2. Update `app.js` chapter loader: fetch section JSON on tab switch, memoize.
3. Add the generated files to `PRE_CACHE` generation (see Offline §2 — generate the list, don't hand-maintain).
4. Keep backward compat: if fetch fails and `window.CPG_DATA` exists, use it.

### Files to modify
New `scripts/split_content.py`, `app.js`, `chapters/*.html`, `sw.js`.

### Difficulty
Hard

### Priority
Medium

### Estimated impact
Performance (chapter open time on low-end devices), memory.

---

## 5. Self-host fonts (Google Fonts round-trips + privacy)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Every page hits `fonts.googleapis.com` + `fonts.gstatic.com` (render-blocking CSS
fetch, IP shared with Google — currently disclosed in the privacy policy §1.3, which
could then be simplified). Offline-first apps should own their fonts.

### Current implementation
`<link href="https://fonts.googleapis.com/css2?family=Inter...">` on every page; 404.html pulls two more families (JetBrains Mono, DM Sans).

### Recommended upgrade
Download Inter (400/600/700/800 latin subsets, woff2, ~90 KB total), serve from
`/fonts/`, one shared `fonts.css` with `font-display: swap`. Standardize 404.html on
Inter too.

### Detailed implementation steps
1. Use `google-webfonts-helper` to grab woff2 files; commit under `fonts/`.
2. Create `fonts.css` with `@font-face` rules; replace the Google Fonts `<link>` in all pages.
3. Add `fonts/` to `CACHE_FIRST_PATTERNS` + pre-cache.
4. Remove the Google Fonts bullet from `privacy.html §1.3`.

### Files to modify
All `*.html`, new `fonts/`, `fonts.css`, `sw.js`, `pages/privacy.html`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Performance, privacy, offline robustness.

---

# UI/UX Improvements

## 1. Give privacy.html and terms.html a header/back navigation

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Both legal pages have **zero** `<header>` and no back link. In the installed PWA
(standalone display mode) there is no browser back button — a user who opens
Privacy from the login page is *stuck* and must kill the app. This is also the page
the new `#license` link lands on.

### Current implementation
`pages/privacy.html` / `pages/terms.html`: bare `<main>`, no navigation.

### Recommended upgrade
Add the standard app header (back arrow + title) used by `about.html`, plus a
"Back" button at the bottom of the page.

### Detailed implementation steps
1. Copy the `<header>` block from `about.html`; point the back button at `login.html` if `document.referrer` includes it, else `../index.html` (or simply `history.length > 1 ? history.back() : goHome()`).
2. Add the same theme-init snippet so the pages respect the saved theme (they currently ignore AMOLED, see §2).
3. Repeat for `terms.html`.

### Files to modify
`pages/privacy.html`, `pages/terms.html`.

### Difficulty
Easy

### Priority
High

### Estimated impact
UX (dead-end removal), store review (reviewers hit legal pages).

---

## 2. Unify theme switching — one shared module, consistent theme list

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`const themes = [...]` is re-declared in **17+ files** with *different* lists:
`c-index.html` has 5 themes (incl. `amoled`), all other chapters and `404.html` have
4. A user who picks AMOLED on the home page gets silently bounced to `dark` when
cycling on a chapter page. Duplication guarantees future drift.

### Current implementation
Copy-pasted theme arrays + `nextTheme()` in every page's inline script; `styles.css` defines all 5 themes.

### Recommended upgrade
One `src/theme.js` (list, init-before-paint, cycle, badge logic) included by every
page; delete all inline copies.

### Detailed implementation steps
1. Create `src/theme.js` exposing `window.SmartTheme = { init, next, set }` with the canonical 5-theme list.
2. Replace each page's inline theme code with `<script src="(rel)/src/theme.js"></script>` + a one-line init call in `<head>` (before-paint to avoid flash).
3. Add to `PRE_CACHE`.
4. Grep-verify no `const themes =` remains outside `src/theme.js`.

### Files to modify
New `src/theme.js`; `index.html`, `404.html`, `chapters/*.html` (14), `pages/*.html` (~18), `courses/itls/index.html`, `sw.js`.

### Difficulty
Medium (mechanical, wide)

### Priority
High

### Estimated impact
UX consistency, maintainability (removes ~17 duplicated blocks).

---

## 3. Consistent loading / empty / error states across fetch-driven views

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
States are inconsistent: `admin.html` has a spinner row; index search has an empty
hint; but chapter pages have no skeleton while heavy content parses, the stats modal
has no loading state for Chart.js, quiz engines show blank cards for zero-question
sections, and failed `fetch` in tools generally falls through silently.

### Current implementation
Ad-hoc per page; several code paths render nothing on failure.

### Recommended upgrade
A tiny shared pattern: `.skeleton` shimmer class in `styles.css` + a `renderState(el, 'loading'|'empty'|'error', msg)` helper in `app.js`; audit each fetch/parse call site and wire it.

### Detailed implementation steps
1. Add skeleton CSS (shimmer block, 3 sizes) to `styles.css`.
2. Add the helper to `app.js`; export on `window.app`.
3. Sweep call sites: chapter section load, quiz start, flashcards, stats modal, drug calculator fetch of `drug-data.json`, ECG engine init, courses list.
4. Every `catch` must render the error state with a retry button — no silent failures.

### Files to modify
`styles.css`, `app.js`, `pages/drug-calculator.js`, `pages/ecg.html`, `pages/courses.html`, chapter view code.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
UX polish, perceived reliability, fewer "it's blank" bug reports.

---

## 4. Tablet layout pass (two-pane study mode)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The manifest ships 8 tablet screenshots, but layouts are single-column with a
`max-width: 800px` main. On a 10–13" tablet (a very common study device) the app is
a phone UI centered in whitespace. No `md:` breakpoints exist above 600 px besides
minor grid tweaks.

### Current implementation
`styles.css` breakpoints: 600/480/420/400/380/360 px only — all *downward*.

### Recommended upgrade
Add ≥900 px enhancements: chapter pages get a persistent section sidebar (TOC) +
content pane; home gets a 2-column card grid (already partially exists) with the
hero + stats side by side; quiz view centers at a comfortable 720 px measure.

### Detailed implementation steps
1. Add `@media (min-width: 900px)` blocks in `styles.css` for `.menu-grid` (2–3 cols), hero row, and a `.chapter-layout { display:grid; grid-template-columns: 280px 1fr; }`.
2. In chapter pages, render the existing section pill-bar as a vertical sidebar at ≥900 px (CSS only — same markup, different layout).
3. Re-take the `tab*.png` manifest screenshots afterward.

### Files to modify
`styles.css`, chapter page markup (minor), `images/screenshots/tab*.png`.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
UX on tablets, store-listing honesty, session length.

---

## 5. Fix the self-referencing footer link and standardize footers

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`about.html`'s footer links "Legal & Disclaimer" → `about.html` (itself). Footers
vary page to page. Small, but it reads as unfinished.

### Current implementation
`pages/about.html:302` `<a href="about.html">` inside about.html.

### Recommended upgrade
Footer template: `About · Privacy · Terms · vX.Y.Z` with correct relative links,
identical on all top-level pages; the version string sourced from one place (see
Code Quality §5).

### Detailed implementation steps
1. Fix the self-link → `privacy.html` / keep About link only on non-about pages.
2. Add Privacy + Terms links to `index.html`'s footer (Play/App Store reviewers look for these).

### Files to modify
`pages/about.html`, `index.html`, other footered pages.

### Difficulty
Easy

### Priority
Low

### Estimated impact
Polish, store readiness.

---

# Medical Workflow Improvements

## 1. Content versioning & review metadata (medical safety backbone)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Clinical guidance changes (AHA cycles, NREMT updates). Nothing in `content/*.js`
records *when* a section was last reviewed, against *which* guideline edition, or by
*whom*. `docs/medical-review/` exists but isn't linked to content. For a medical
education product this is the difference between "study aid" and "liability."

### Current implementation
Content objects have `id`, `title`, `summary`, quiz arrays — no provenance fields. About page says "Last Update: June 2026" globally.

### Recommended upgrade
Add `meta: { reviewedBy, reviewedOn, sourceGuideline, edition }` to every section;
render a discreet "Reviewed {date} · {guideline}" line under each summary title and
an amber "review overdue" badge when `reviewedOn` > 24 months old.

### Detailed implementation steps
1. Define the meta schema in `docs/medical-review/README`.
2. Script a one-time injection of `meta` stubs into all `content/*.js` sections (`scripts/add_review_meta.py`).
3. Render in the summary header inside `app.js`; add the overdue badge style.
4. Add a CI check that fails if any section lacks `meta.reviewedOn`.

### Files to modify
`content/*.js` (13), `app.js`, `styles.css`, new script, `ci.yml`.

### Difficulty
Medium

### Priority
**High** (medical safety)

### Estimated impact
Medical safety, trust, content-maintenance discipline.

---

## 2. Spaced repetition for flashcards (the highest-value study feature)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Flashcards currently have no memory — every session starts from zero. Spaced
repetition (SM-2/FSRS) is the single most evidence-backed retention technique and
turns SmartCare from "content viewer" into "study system." It's also fully
offline-friendly (pure localStorage).

### Current implementation
`app.js` flashcards: linear deck per section, flip animation, no scheduling, no per-card state.

### Recommended upgrade
Per-card SM-2 state (`ease`, `interval`, `due`) in localStorage (synced by the
existing `smartcare_*` sync rules); a "Review due cards" entry on the home hero
showing today's due count across all chapters.

### Detailed implementation steps
1. Add `srs.js` module: `grade(cardId, quality)` implementing SM-2; state under `smartcare_srs`.
2. After each card flip, show 3 buttons (Again / Good / Easy) instead of just next.
3. Build a "Due today" aggregator that scans all chapter metas; wire a hero-card chip.
4. It syncs for free — `smartcare_` prefix is already in `SYNC_PREFIX`.

### Files to modify
`app.js` (flashcard engine), new `src/srs.js`, `index.html` (hero chip), `styles.css`.

### Difficulty
Medium

### Priority
**High**

### Estimated impact
User retention, learning outcomes — the flagship v2.0 feature.

---

## 3. Weak-area analytics: turn stored quiz stats into guidance

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Per-chapter attempts/accuracy already accumulate in `smartcare_cpg_stats`, but the
app never acts on them. "You're at 54% on Pharmacology — review 9.2 and retake"
converts data the app already has into study direction.

### Current implementation
Stats modal shows totals and a chart; no recommendations.

### Recommended upgrade
A "Focus areas" card on the home page listing the 3 lowest-accuracy sections with ≥5
attempts, deep-linking to their summary + a fresh quiz.

### Detailed implementation steps
1. Add an aggregator in `app.js` reading `stats.chapters` (already keyed per chapter/section).
2. Render a `menu-card` under the hero when at least one qualifying weak area exists (empty state: hide entirely).
3. Deep-link format already exists (`chapters/cN.html?view=quiz&section=...` — verify param handling, add if missing).

### Files to modify
`index.html`, `app.js`.

### Difficulty
Easy–Medium

### Priority
High

### Estimated impact
Learning outcomes, retention, differentiation.

---

## 4. Printable / shareable quick-reference cards

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Clinicians pin dose cards and algorithm crib sheets inside ambulances and break
rooms. The content exists (tables in summaries) but there's no print stylesheet —
printing a chapter today outputs the dark theme with nav chrome.

### Current implementation
No `@media print` rules anywhere.

### Recommended upgrade
A print stylesheet (light background, hide header/nav/buttons, table borders on) +
a "Print this section" button on summaries.

### Detailed implementation steps
1. Add `@media print` block to `styles.css`: force light palette, `display:none` for header/drawer/nav-row/float buttons, avoid page-breaks inside `table`/`.highlight-box`.
2. Add a small print button next to section titles calling `window.print()`.

### Files to modify
`styles.css`, `app.js` or chapter templates.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Real-world clinical workflow value, shareability (organic growth).

---

# AI Features

## 1. Server-proxied AI study assistant ("Ask SmartCare")

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The #1 modern differentiator for study apps: "explain why option B is wrong,"
"quiz me harder on cardiogenic shock." No AI features exist today. Because this is
a medical app, answers must be *grounded in SmartCare's own reviewed content*, not
free-floating model knowledge.

### Current implementation
None.

### Recommended upgrade
A `POST /api/ai/ask` endpoint on the existing Flask server that calls the Anthropic
API (key server-side only, never in the browser), with the *current section's
summary text* injected as grounding context and a hard system prompt: educational
use only, cite the section, refuse patient-specific advice. Rate-limit per user
token. UI: an "Explain" button on quiz review screens and a section-level Q&A box.

### Detailed implementation steps
1. `server.py`: new blueprint; verify Supabase token (reuse `_supabase_user_from_token`); `limiter.limit("20 per hour")`.
2. Request body: `{sectionId, question, context}` where context is the client-supplied section summary (server truncates to ~6 k chars).
3. Call Claude (e.g., `claude-sonnet-5`) with a fixed system prompt (educational scope, refuse clinical decisions, answer from context first).
4. Client: `src/ai.js` with streaming display, offline detection ("AI needs a connection — your content still works offline"), and a disclaimer line under every answer.
5. Log usage counts (no message content) to the audit logger.

### Files to modify
`server.py`, new `src/ai.js`, `app.js` (quiz review hook), `styles.css`, `requirements.txt` (anthropic), `docs/`.

### Difficulty
Hard

### Priority
Medium (high value, but requires backend to be always-on — today's Flask server is only used for admin)

### Estimated impact
Retention, differentiation, learning outcomes. Must be gated by careful medical-safety prompting.

---

## 2. AI-assisted question generation pipeline (offline, build-time)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Question banks are the bottleneck for content growth. A *build-time* (not runtime)
pipeline drafts NREMT-style items from summaries for **human review** — the
`docs/question-database-audit.md` workflow suggests this pain already exists.

### Current implementation
Hand-written quiz arrays in `content/*.js`; `scripts/gen.py` exists (generation tooling already started).

### Recommended upgrade
Extend `scripts/gen.py` into `scripts/draft_questions.py`: input a section id, output
draft items to `docs/medical-review/drafts/` in the exact quiz schema, each flagged
`"draft": true`. Nothing enters `content/` without a human editor removing the flag.

### Detailed implementation steps
1. Script reads section summary, calls the API with few-shot examples of existing items, emits JSON drafts.
2. Add a review checklist template to `docs/medical-review/`.
3. CI check: fail if any `"draft": true` appears inside `content/`.

### Files to modify
`scripts/`, `docs/medical-review/`, `ci.yml`.

### Difficulty
Medium

### Priority
Low–Medium

### Estimated impact
Content velocity with a human-in-the-loop safety gate.

---

# Offline & PWA

## 1. iOS PWA metadata (Apple install experience is currently broken-ish)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Zero `apple-mobile-web-app-*` meta tags exist. On iOS: no proper standalone status
bar styling, the title defaults oddly, and no splash screens — the app looks
second-class on exactly the platform where PWA installs need the most care.

### Current implementation
`apple-touch-icon` only.

### Recommended upgrade
Add `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`
(`black-translucent`), `apple-mobile-web-app-title`, and generated splash-screen
links (`pwa-asset-generator`) to the shared head.

### Detailed implementation steps
1. `npx pwa-asset-generator icons/icon-512x512.png splash/ --splash-only --background "#0f2027"`.
2. Add the meta + `<link rel="apple-touch-startup-image">` set to `index.html` (entry page is enough for install).
3. Verify on an iPhone: install, launch, rotate, status-bar color per theme.

### Files to modify
`index.html`, new `splash/`, `sw.js` (pre-cache splash for offline launches).

### Difficulty
Easy

### Priority
High

### Estimated impact
iOS install quality — a prerequisite for App Store PWA wrapping.

---

## 2. Generate `PRE_CACHE` at build time instead of hand-maintaining it

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The hand-written list already drifted (dead `s1` entries; `pages/GCS.html`,
`pages/ems-tools.html`, `pages/aha.html`'s algorithm images, `pages/terms.html` are
*not* pre-cached, so the "fully offline" promise silently fails for tools).

### Current implementation
Static array in `sw.js` (64 entries), edited by hand each release.

### Recommended upgrade
`scripts/build_precache.py` walks the deployable tree, emits `precache-manifest.js`
(list + content-hash version), imported by `sw.js` via `importScripts`. CACHE_VERSION
becomes the manifest hash → automatic cache busting, no more manual bumps.

### Detailed implementation steps
1. Script outputs `self.__PRECACHE = [...]; self.__VERSION = '<sha1-of-list+mtimes>';`.
2. `sw.js`: `importScripts('precache-manifest.js')`; use those constants.
3. Run the script in CI before deploy + as a pre-commit convenience.
4. Exclude heavy optional media (algorithm images can stay lazy/cache-first).

### Files to modify
New `scripts/build_precache.py`, `sw.js`, `.github/workflows/static.yml`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Reliability (offline completeness), maintainability (kills the "bump SW" ritual).

---

## 3. Self-host the Supabase SDK for offline-resilient auth checks

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`supabase-client.js` dynamically imports the SDK from jsdelivr. First visit offline
(or CDN hiccup) → `ready` resolves false → hero greeting and sync silently degrade.
Self-hosting puts it under SW control.

### Current implementation
`import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm')`.

### Recommended upgrade
Vendor the ESM bundle at a pinned version into `vendor/supabase-js-2.x.y.mjs`, import relatively, pre-cache it.

### Detailed implementation steps
1. Download the +esm bundle; commit under `vendor/`.
2. Change the import path; add to pre-cache; note the version in the filename for upgrade discipline.

### Files to modify
`pages/supabase-client.js`, new `vendor/`, `sw.js`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Reliability, security (pinning), offline coherence.

---

## 4. Manifest upgrades: shortcuts, proper maskable icons, lang/dir/scope

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
All icons declare `"purpose": "any maskable"` — a known anti-pattern: maskable needs
~20% safe-zone padding, so either the maskable crop clips the logo or the "any" icon
looks small. No `shortcuts` (long-press quick actions), no `lang`/`dir`/`scope`.

### Current implementation
`manifest.json`: 8 dual-purpose icons, 18 screenshots, no shortcuts.

### Recommended upgrade
Separate `any` and `maskable` icon files (192/512 each); add `"lang": "en"`,
`"dir": "ltr"`, `"scope": "/"`, and 3 shortcuts (Resume last chapter → handled via a
tiny redirect page reading `smartcare_last_visited`; Prometric Exam; Drug Calculator).

### Detailed implementation steps
1. Export padded maskable variants (`icon-512-maskable.png` etc.); split the entries.
2. Add `shortcuts` array with 96 px icons.
3. Create `resume.html` (10 lines: read localStorage, `location.replace` to last chapter or home).
4. Validate with Lighthouse + `maskable.app`.

### Files to modify
`manifest.json`, `icons/`, new `resume.html`, `sw.js`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Android install polish, Play (TWA) readiness, power-user UX.

---

## 5. App Store / Play Store packaging track

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The manifest, screenshots, privacy policy, and offline behavior are near
store-ready. Packaging as a **TWA (Bubblewrap/PWABuilder)** for Play and a
PWABuilder iOS wrapper unlocks distribution where clinicians actually search.

### Current implementation
Web-only. Prerequisites status: ✅ HTTPS, ✅ manifest+SW, ✅ privacy policy, ✅ screenshots, ❌ account deletion (Security §4), ❌ maskable icons (§4 above), ❌ stable canonical domain (SEO §2), ❌ `assetlinks.json`.

### Recommended upgrade
Play first (TWA is genuinely a PWA wrapper): fix prerequisites, run
`pwabuilder.com` → Android package, host `.well-known/assetlinks.json`, submit with
"Medical" category + education disclaimer. iOS after (needs the wrapper's WKWebView
review-proofing: offline behavior + real functionality beyond a website — flashcards/quiz engines qualify).

### Detailed implementation steps
1. Complete Security §4, Offline §1/§4, SEO §2 first.
2. Generate the TWA; commit `/.well-known/assetlinks.json` with the signing fingerprint.
3. Play listing: reuse manifest screenshots; add the medical-education disclaimer to the description; data-safety form matches privacy.html.
4. iOS: PWABuilder package, TestFlight pass focusing on offline + no dead ends (UI/UX §1 fixes the known one).

### Files to modify
New `.well-known/assetlinks.json`, store metadata (external), no app code beyond prerequisites.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Distribution, credibility, user acquisition.

---

# Database & Supabase

## 1. Run the `profiles` migration + set server env (activation blocker)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The admin console (PR #10) is code-complete but **inert** until the one-time
Supabase dashboard SQL (`docs/SUPABASE_SETUP.md §4`) runs and
`SUPABASE_SERVICE_ROLE_KEY`/`ADMIN_EMAILS` are set on the server.

### Current implementation
Documented, not executed (dashboard access required — owner action).

### Recommended upgrade / steps
1. Run §4a SQL (profiles table + trigger + backfill) in the Supabase SQL editor.
2. Set the three env vars on Render.
3. Sign in, 4-tap the cloud icon, PIN, verify the roster loads.

### Files to modify
None (ops).

### Difficulty
Easy

### Priority
**High** (unblocks shipped feature)

### Estimated impact
Feature activation.

---

## 2. Sync conflict hardening: per-key merge instead of whole-blob newest-wins

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`sync()` = pull (overwrite local from cloud blob) then push (overwrite cloud with
merged local). Two devices used offline in the same window silently lose the loser's
quiz history — for a study-streak product, silent data loss breaks trust.

### Current implementation
`user_state.data.entries` is one JSON blob; `applyLocal` overwrites key-by-key with cloud values, then push sends the result.

### Recommended upgrade
Store `{value, updatedAt}` per key; merge takes the newer timestamp per key; for the
stats key specifically, merge *additively* (sum attempts, max accuracy arrays merge)
via a custom reducer.

### Detailed implementation steps
1. Wrap writes: a `setSynced(key, value)` helper stamps `smartcare_meta_<key>` timestamps.
2. `pull()` merges per key by timestamp; `smartcare_cpg_stats` gets a dedicated merge function (sum counters, union per-chapter records taking max attempts).
3. Version the blob (`data.schema = 2`) with fallback for old rows.

### Files to modify
`pages/supabase-client.js`, `app.js` (stats writes).

### Difficulty
Hard

### Priority
Medium

### Estimated impact
Reliability, trust in sync, retention.

---

## 3. RLS policy audit + `user_state` size guard

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`user_state` accepts arbitrary JSON of any size from any authenticated user — a
griefing/vandalism vector (10 MB blobs) and a hygiene risk (no delete policy is
documented for `user_state`).

### Current implementation
RLS: own-row select/insert/update. No size constraint; no delete policy.

### Recommended upgrade
Add a CHECK constraint `pg_column_size(data) < 262144` (256 KB), an own-row delete
policy, and document both in SUPABASE_SETUP.md.

### Files to modify
`docs/SUPABASE_SETUP.md` (SQL), Supabase dashboard.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Security, cost control.

---

# Authentication

## 1. `?next=` deep-link return after sign-in

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Signing in always strands you on login.html; tapping into it from the hero card
mid-flow loses your place. Small friction on the exact action we ask users to take.

### Current implementation
`login.html` never reads a return URL; hero card links plain `pages/login.html`.

### Recommended upgrade
Hero/nav links append `?next=<encoded current path>`; after `onChange(user)` fires
signed-in, `location.replace(next)` (validate: same-origin relative paths only —
prevent open-redirect).

### Detailed implementation steps
1. `index.html` hero: `href="pages/login.html?next=" + encodeURIComponent(location.pathname)`.
2. `login.html`: parse param, `if (/^\/[^/]/.test(next))` allow, else ignore; redirect on successful sign-in only (not on page load while already signed in — show the account card instead with a "Continue" button).

### Files to modify
`index.html`, `pages/login.html`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
UX, sign-in conversion.

---

## 2. Session-expiry UX for the admin console

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Admin fetches bounce to login on 401 mid-action (e.g., after editing a role for 10
minutes) with unsaved intent lost and no explanation.

### Current implementation
`sendToLogin()` hard-redirects on any 401.

### Recommended upgrade
Attempt one silent `getSession()` refresh; if still unauthorized, toast "Session
expired — sign in again" for 2 s before redirecting with `?next=admin.html`.

### Files to modify
`pages/admin.html`.

### Difficulty
Easy

### Priority
Low

### Estimated impact
Admin UX.

---

# Accessibility

## 1. ARIA + keyboard pass on the tool pages (0 aria-labels today)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`pages/ems-tools.html`, `drug-calculator.html`, `ecg.html` contain **zero**
`aria-label`s; icon-only buttons are unnamed; the drug calculator's live results
aren't announced. The drawer got this treatment on index.html — the rest of the app
didn't.

### Current implementation
Icon buttons with no accessible names; results updated via `innerText` with no `aria-live`; quiz options are styled `div`s in places rather than buttons.

### Recommended upgrade
Systematic pass: every icon-only control gets `aria-label`; calculator outputs get
`role="status" aria-live="polite"`; quiz options become real `<button>`s; visible
`:focus-visible` outline in `styles.css`; skip-to-content link on index.

### Detailed implementation steps
1. Grep for `class="icon-btn"` / `<button` without text; label each.
2. Wrap calculator result containers with `aria-live="polite"`.
3. Add `:focus-visible { outline: 2px solid var(--primary-accent); outline-offset: 2px; }` globally (audit that no `outline: none` remains).
4. Run Lighthouse a11y + axe on the 6 core pages; fix to ≥95.

### Files to modify
`pages/ems-tools.html`, `pages/drug-calculator.html`, `pages/ecg.html`, `pages/aha.html`, `app.js` (quiz rendering), `styles.css`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Accessibility, store review, professionalism.

---

## 2. Color-contrast audit across all five themes

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Five themes × glassmorphism (translucent panels over gradients) is high-risk for
contrast failures — e.g., `.hero-sub` uses fixed `#94a3b8` regardless of theme, and
sepia/forest secondary text over glass panels likely dips below 4.5:1.

### Current implementation
Hard-coded grays in several components; no contrast checks in CI or docs.

### Recommended upgrade
Audit each theme's `--text-secondary` over its real panel backgrounds; replace
hard-coded colors with theme variables; document minimum ratios in a THEMING note.

### Files to modify
`styles.css`, `index.html` inline styles.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Accessibility, readability during night shifts (AMOLED users).

---

## 3. `prefers-reduced-motion` support

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Cards animate in, the drawer trigger bobs infinitely (`floatDown 3s infinite`),
flashcards 3D-flip. No reduced-motion handling exists for vestibular-sensitive users.

### Recommended upgrade / steps
Add once to `styles.css`:
`@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }`

### Files to modify
`styles.css`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Accessibility. (Also a Quick Win.)

---

# Notifications

## 1. Study-reminder notifications (local, privacy-first)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Retention for study apps lives and dies on gentle reminders ("15 due flashcards";
"Prometric exam in 12 days"). The prometric-planner already knows the exam date;
SRS (Medical §2) will know due counts. No notification capability exists.

### Current implementation
None.

### Recommended upgrade
Phase 1 (no push infra): in-app "due" badges + `Notification` permission with a
scheduled check when the app opens. Phase 2: real scheduled notifications via the
TWA wrapper (Android) once the Play package exists — web push for a static host
needs a push service, so defer server push until the AI/backend endpoint exists.

### Detailed implementation steps
1. Settings drawer toggle "Study reminders"; request permission on enable only.
2. On app open + `visibilitychange`, compute due cards / exam countdown; fire a local notification if >0 and last-notified >20 h ago (`smartcare_last_reminder`).
3. Wire exam-date countdown from the planner's stored date.

### Files to modify
`index.html` (drawer + logic), `app.js`, `pages/prometric-planner.html` (expose date key).

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Retention (the highest-leverage retention feature after SRS).

---

# Search

## 1. Full-text content search (today's search only matches card titles)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
The home search filters menu cards by `data-search` attributes — searching
"epinephrine dose anaphylaxis" finds nothing even though three chapters cover it.
For a reference app, deep search is table stakes; about.html markets "Instant
Search" across the curriculum.

### Current implementation
`index.html` `filterCards()` string-matching card attributes; chapters have per-page section pills only.

### Recommended upgrade
Build-time index: script extracts plain text per section from `content/*.js` into
`data/search-index.json` (title + stripped body, ~400 KB, gzip ~80 KB); client uses
MiniSearch (vendored, 8 KB) lazily loaded on first search; results show
chapter › section with match snippet, deep-linking into the section.

### Detailed implementation steps
1. `scripts/build_search_index.py`: strip HTML from summaries, tokenize, emit JSON.
2. Vendor `minisearch.min.js`; lazy-load with the index on first keystroke ≥3 chars (loading state).
3. Render a results panel under the search bar (keyboard navigable); Enter opens the section.
4. Pre-cache index + lib; regenerate in CI when `content/` changes.

### Files to modify
New script, `data/search-index.json` (generated), `vendor/minisearch.min.js`, `index.html`, `sw.js`, `ci.yml`.

### Difficulty
Medium–Hard

### Priority
**High**

### Estimated impact
UX (primary reference workflow), retention, fulfills an existing marketing claim.

---

# Clinical Calculators

## 1. Calculator suite expansion + shared engine

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Only GCS (`pages/GCS.html`) and the drug calculator exist as standalone pages with
duplicated shells. EMS/nursing daily drivers are missing: APGAR, Parkland burns,
pediatric weight (Broselow/age), MAP, anion gap, Wells DVT/PE, qSOFA, NIHSS-lite,
burn BSA (rule of 9s).

### Current implementation
Two hand-built pages, separate styling/logic.

### Recommended upgrade
`pages/calculators.html` hub + one data-driven engine: each calculator defined as a
JSON schema (inputs, units, formula fn, interpretation bands, reference note +
guideline citation). Every result screen carries the "verify before clinical use"
disclaimer.

### Detailed implementation steps
1. Build `src/calc-engine.js` (schema → form → live result with `aria-live`).
2. Define 8–10 calculators in `data/calculators.json`, each with `reviewedOn` metadata (ties into Medical §1).
3. Migrate GCS into the engine; link hub from EMS Tools card.
4. Unit tests for formulas via a small Node test run in CI.

### Files to modify
New `pages/calculators.html`, `src/calc-engine.js`, `data/calculators.json`; `index.html` (EMS tools grid), `sw.js`, `ci.yml`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Daily-use clinical value (turns SmartCare from study-only into shift companion), retention.

---

# ECG Improvements

## 1. Structured rhythm-recognition trainer with scoring

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`ecg-engine.js` (17 KB) renders simulated rhythms and recently gained SVT/PSVT, but
practice is unscored free-play; there's no "show me 20 random strips, grade me"
mode — the way rhythm competency is actually tested.

### Current implementation
`pages/ecg.html` simulator + `ecg-test.html` (basic); no stats integration.

### Recommended upgrade
"Strip drill" mode: random rhythm at random rate/variation, 4-option answer,
immediate feedback with the *why* (rate/regularity/P-QRS logic), results feeding the
same `smartcare_cpg_stats` pipeline so ECG shows up in weak-area analytics.

### Detailed implementation steps
1. Add a drill controller to `ecg-engine.js` (pool of rhythm configs × distractor logic).
2. Record results under a synthetic chapter id (`ecg-drill`) in the stats store.
3. Add lead-II labeling and a caliper overlay (tap two points → ms/boxes readout) as a stretch goal.

### Files to modify
`pages/ecg.html`, `pages/ecg-engine.js`, `app.js` (stats key), `pages/ecg-test.html` (fold in or redirect).

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Learning outcomes, differentiation (few offline ECG trainers exist).

---

# Drug Database

## 1. Drug monograph quality pass + fast lookup UX

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`pages/drug-data.json` (64 KB) powers the calculator, and `drug-index.html` lists
monographs — but there's no indication of source/review date per drug (highest
medical-safety-risk content in the app), no offline-verified search-as-you-type
index page unification, and pediatric dosing presentation varies.

### Current implementation
Static JSON consumed by `drug-calculator.js`; separate index page.

### Recommended upgrade
(a) Add `reviewedOn`/`source` per drug and render it on every monograph + calculator
result. (b) Merge index + calculator into one search-first page: type drug → monograph
+ inline weight-based calc. (c) High-alert drugs (epi, amiodarone…) get a visual
high-alert band and a dose-range sanity check that flags out-of-range results.

### Detailed implementation steps
1. Extend the JSON schema; backfill review metadata during a documented review sitting.
2. Add `maxSingleDose`/`maxDailyDose` fields; calculator warns when exceeded ("exceeds usual maximum — verify").
3. Unify pages; keep old URLs as redirects.
4. Formula unit tests in CI (this is the code that must never silently regress).

### Files to modify
`pages/drug-data.json`, `pages/drug-calculator.js`, `pages/drug-calculator.html`, `pages/drug-index.html`, `ci.yml`.

### Difficulty
Medium

### Priority
**High** (medical safety)

### Estimated impact
Medical safety, daily clinical utility, trust.

---

# Emergency Tools

## 1. Metronome + timers for codes (CPR rate, med timers)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
A 110-bpm CPR metronome, epi-interval timer (3–5 min), and elapsed-code stopwatch
are tiny to build, fully offline, and used in anger — classic "shift companion"
features that drive daily opens. (Ships with the standard training-use disclaimer.)

### Current implementation
None (`ems-tools.html` links study tools only).

### Recommended upgrade
`pages/code-timer.html`: metronome via WebAudio oscillator (works with screen
locked? — no; document that limitation), big elapsed clock, epi/rhythm-check lap
buttons that log a timestamped list, screen-wake via `navigator.wakeLock`.

### Detailed implementation steps
1. Build page with WebAudio tick at 100–120 bpm slider, wake-lock request, lap log.
2. Add to EMS Essentials grid + pre-cache.
3. Disclaim: training aid, follow local protocol.

### Files to modify
New `pages/code-timer.html`, `index.html`, `sw.js`.

### Difficulty
Easy–Medium

### Priority
Medium

### Estimated impact
Daily utility, word-of-mouth growth.

---

# Documentation

## 1. Restructure docs for contributors and clinical reviewers

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`docs/` mixes setup (SUPABASE_SETUP), process (reboot_plan_progress), audits, and
vendored assets (`docs/lucide`). There's no CONTRIBUTING, no content style guide
(the EMT→EMS-provider tone pass established conventions that live only in git
history), no architecture overview for newcomers.

### Recommended upgrade / steps
1. Add `docs/ARCHITECTURE.md` (page map, data flow, SW strategy, auth diagram).
2. Add `docs/CONTENT_STYLE.md` (audience = nurses/paramedics; "EMS provider" not "EMT"; table wrapper requirement; review-meta requirement).
3. Add `CONTRIBUTING.md` at root (setup, test commands, PR checklist incl. SW bump / precache regen).
4. Move `docs/lucide` vendored assets to `vendor/`; archive `reboot_plan_progress.md` when v2 lands.

### Files to modify
New docs; moves.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Maintainability, onboarding, content-quality consistency.

---

# Code Quality

## 1. Extract the 3,000+ lines of inline JS from index.html into modules

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`index.html` is 103 KB: ~450 lines inline CSS + an IIFE containing menu render, PWA
banner, drawer, themes, fonts, stats, search, greeting — untestable, unlintable
(ESLint only covers `*.js` and `src/**`), and blocks CSP hardening.

### Recommended upgrade / steps
1. Move the big IIFE to `src/home.js`; keep only the before-paint theme snippet inline.
2. Move inline CSS to `styles/home.css` (or a `@layer` in styles.css).
3. Add `src/**` lint coverage automatically (already configured); add the file to pre-cache.
4. Repeat for `pages/courses.html` (1,271 inline CSS lines — the worst offender) using the same pattern.

### Files to modify
`index.html`, new `src/home.js`, `styles/home.css`, `pages/courses.html`, `sw.js`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Maintainability, lint coverage, CSP enablement, cacheability (HTML changes stop invalidating all logic).

---

## 2. Shared head/header/footer partials (37 pages of copy-paste)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Every page duplicates ~70 lines of meta/OG/JSON-LD/favicon boilerplate plus header
markup. Fixing anything head-related currently means 37 edits (the viewport fix in
Critical §6 demonstrates the pain).

### Recommended upgrade
Given the no-build philosophy, adopt a *minimal* build step: an 11ty or hand-rolled
Python template pass (`scripts/build_pages.py`) that injects `{{head}}`, `{{header}}`,
`{{footer}}` partials at deploy time — source pages stay simple HTML.

### Detailed implementation steps
1. Create `partials/head.html`, `partials/header.html`, `partials/footer.html`.
2. Build script replaces `<!-- @include head title="..." -->` comments; run in CI before Pages upload (local dev still works from source since includes degrade gracefully if left unprocessed — keep a fallback head in each file or run the script pre-commit).
3. Migrate pages progressively (start with the 5 most-edited).

### Files to modify
New `partials/`, `scripts/build_pages.py`, `.github/workflows/static.yml`, pages progressively.

### Difficulty
Hard (touches everything, but incrementally)

### Priority
Medium

### Estimated impact
Maintainability (single-point head/header edits), consistency.

---

## 3. One icon system (Lucide sprite) — remove Font Awesome CDN

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`icons/sprite.svg` (Lucide) is the app standard, but `admin.html`, `login.html`, and
`privacy.html` pull Font Awesome 6.0.0-**beta3** from cdnjs — a second icon system,
a beta dependency, and an offline/CSP liability.

### Recommended upgrade / steps
1. Map used FA icons (`fa-cloud`, `fa-users`, `fa-trash-alt`, ~15 total) to Lucide equivalents already in or added to the sprite.
2. Replace `<i class="fas fa-...">` with the standard `<svg><use>` pattern; delete the cdnjs `<link>`s.

### Files to modify
`pages/admin.html`, `pages/login.html`, `pages/privacy.html`, `icons/sprite.svg`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Consistency, offline reliability, one less CDN, drops a beta dependency.

---

## 4. Delete dead weight: `_archive/`, `content_starters_backup/`, junk icons, `graphify.html`

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
1.1 MB `_archive/`, 196 KB `content_starters_backup/`, junk assets with broken names
(`icons/image ( 4).png`, `image (4).png`, `new.png`, `new2.png`, `new22.png`,
`new222.png` — 4+ MB of orphans), and dev tools ship in the repo (and today, to
production). Git history already preserves everything.

### Recommended upgrade / steps
1. `git rm -r _archive content_starters_backup icons/"image ( 4).png" icons/"image (4).png" icons/new*.png` after grep-verifying zero references.
2. Move `graphify.html`/`graphify.yaml` under a git-kept but non-deployed `tools/` dir (excluded via `.pagesignore`).
3. Evaluate `reports/` and `pdf_sections/` for the same treatment (pdf_sections likely belongs in cloud storage, not git).

### Files to modify
Deletions; `.pagesignore`.

### Difficulty
Easy

### Priority
Medium

### Estimated impact
Repo hygiene, clone time, deploy size.

---

## 5. Single source of truth for the version string

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Version lives in three unsynchronized places: `sw.js` (`smartcare-v2.9`),
`about.html` ("1.1.0"), `package.json` ("1.0.0"). Users reporting bugs cite a
version that means nothing.

### Recommended upgrade / steps
1. `version.js` → `window.SMARTCARE_VERSION = '2.0.0';` included where needed; about.html renders it; footer shows it.
2. SW cache version derives from the precache manifest hash (Offline §2), decoupling cache busting from marketing version.
3. Bump via one file; `package.json` synced by a pre-commit script or manually.

### Files to modify
New `version.js`, `pages/about.html`, `index.html` footer, `package.json`, `sw.js`.

### Difficulty
Easy

### Priority
Low

### Estimated impact
Supportability, professionalism.

---

## 6. Wire the existing Playwright tests into CI + fix the npm test script

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`tests/prometric.spec.js` and `playwright.config.js` exist but CI never runs them;
`package.json`'s test script is `echo "Error: no test specified" && exit 1`. The
JS half of the app — the majority — has zero automated coverage in CI.

### Recommended upgrade / steps
1. `package.json`: `"test:e2e": "playwright test"`, `"serve": "python3 -m http.server 8899"`.
2. CI job: install `@playwright/test`, `npx playwright install --with-deps chromium`, start the static server (config already expects `127.0.0.1:8899`), run specs.
3. Add smoke specs: home renders, chapter opens, quiz answers score, drawer opens, login page renders, offline reload works (`context.setOffline(true)`).

### Files to modify
`package.json`, `.github/workflows/ci.yml`, new specs in `tests/`.

### Difficulty
Medium

### Priority
High

### Estimated impact
Reliability (regression safety for the actual product surface).

---

# Technical Debt

## 1. Consolidate storage keys behind one module

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
localStorage keys are stringly-typed and scattered: `theme`, `smartcare-theme`
(both exist in `SYNC_EXACT`!), `smartcare_font_size`, `smartcare_cpg_stats`,
`smartcare_last_visited`, `smartcare_pwa_install`, `smartcare_chapters_expanded`,
suffix-matched `*-mode`/`*-hints-enabled`… Sync rules in `supabase-client.js` must
mirror this zoo by prefix/suffix guesswork.

### Recommended upgrade / steps
1. `src/store.js`: named accessors (`store.theme`, `store.stats`…) over a registry of `{key, synced: bool, default}`.
2. Generate `SYNC_EXACT`/`SYNC_PREFIX` from the registry (import into supabase-client).
3. Migrate call sites gradually; add a one-time migration collapsing `theme`/`smartcare-theme` duplicates.

### Files to modify
New `src/store.js`, `app.js`, `index.html`/`src/home.js`, `pages/supabase-client.js`.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Maintainability, sync correctness.

---

## 2. Client-side error telemetry (currently: total darkness)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
There is no client logging at all. When a user's chapter won't load or sync fails on
some Android WebView, nothing surfaces it. Server has an audit log; the client — the
actual product — is unobservable.

### Recommended upgrade
Privacy-respecting minimal telemetry: a `window.onerror`/`unhandledrejection`
handler batching to `POST /api/telemetry/errors` (message, stack top frame, page,
version, UA — **no PII, no content**), rate-limited, with an opt-out toggle in the
drawer and a line in privacy.html. Offline: buffer to localStorage, flush later.

### Detailed implementation steps
1. `src/telemetry.js` (≤60 lines); include after version.js.
2. Flask endpoint appending to the audit logger with a `client_error` event.
3. Privacy policy §1.2 addition; drawer toggle default-on with visible setting.

### Files to modify
New `src/telemetry.js`, `server.py`, `pages/privacy.html`, `index.html` drawer, `tests/test_api.py`.

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Reliability (you can't fix what you can't see), support cost.

---

## 3. Memory-leak & listener hygiene audit

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
`app.js` re-renders views by `innerHTML` replacement and re-attaches listeners
(`renderTable` in admin does `querySelectorAll(...).addEventListener` per render —
old nodes are collected, but patterns like document-level listeners added inside
render functions accumulate). The infinite `floatDown` animation and any
`setInterval` for battery indicator run regardless of visibility.

### Recommended upgrade / steps
1. Sweep for `addEventListener(document|window` inside re-runnable functions; hoist or use event delegation (one listener on a stable ancestor).
2. Pause decorative animations under `document.hidden` (or rely on browser throttling — verify).
3. Add a Playwright long-session test asserting listener/node counts stay flat across 50 view switches.

### Files to modify
`app.js`, `pages/admin.html`, `index.html`/`src/home.js`.

### Difficulty
Medium

### Priority
Low–Medium

### Estimated impact
Performance on long study sessions, low-end devices.

---

## 4. Internationalization groundwork (Arabic/RTL is the obvious second locale)

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
All strings are hard-coded English across HTML/JS. The author and likely early user
base are in the Gulf region (dependabot timezone `Asia/Dubai`); Arabic + RTL support
would be a major differentiator for regional EMS programs — but retrofitting i18n
later gets more expensive every month.

### Recommended upgrade
Don't translate content yet — *structure* for it: UI strings (buttons, labels,
empty states) into a `strings.js` dictionary; `dir`/`lang` plumbed through the
theme module; CSS logical properties (`margin-inline-start` vs `margin-left`) for
new code.

### Detailed implementation steps
1. Extract UI chrome strings (~150) into `src/strings.js` with `t(key)`.
2. Adopt logical properties in new/edited CSS; note in CONTENT_STYLE.md.
3. Pilot: translate chrome (not medical content) to Arabic behind a drawer language toggle; medical content translation is a separate, clinically-reviewed project.

### Files to modify
New `src/strings.js`, progressive edits.

### Difficulty
Hard (long tail)

### Priority
Low (groundwork now, payoff later)

### Estimated impact
Market expansion, future-proofing.

---

# SEO

## 1. Add robots.txt + sitemap.xml

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Neither exists. Search engines crawl blind (including `pdf_sections/` and
`_archive/` today), and there's no sitemap for the 13 chapters + tool pages that
*should* rank.

### Recommended upgrade / steps
1. `robots.txt`: allow all; `Disallow: /pages/admin.html`, `/pages/login.html`, `/_archive/`, `/pdf_sections/`; `Sitemap:` line.
2. `scripts/build_sitemap.py` emitting `sitemap.xml` from the deployable page list (canonical domain only); run in the deploy workflow.

### Files to modify
New `robots.txt`, `sitemap.xml` (generated), `scripts/build_sitemap.py`, `static.yml`.

### Difficulty
Easy

### Priority
High

### Estimated impact
SEO, discoverability, keeps private-ish pages out of the index.

---

## 2. Resolve the canonical-domain split

- [ ] Planned  - [ ] In Progress  - [ ] Completed

### Why this matters
Pages disagree about where the site lives: `about.html`/`admin.html`/`index.html`
canonicalize to `smartcare-learning.net` while `privacy.html` canonicalizes to
`solimananas.github.io/SmartCare` — duplicate-content signals, split link equity,
and OG images referencing possibly-wrong hosts. Store listings need one stable URL.

### Recommended upgrade / steps
1. Decide the primary domain (presumably `smartcare-learning.net`); set the custom domain + HTTPS in Pages settings.
2. One `sed` pass normalizing every `canonical`, `og:url`, `og:image`, `twitter:*`, JSON-LD `url` to it (this becomes trivial after Code Quality §2's shared head).
3. Verify `solimananas.github.io` 301-redirects (GitHub does this automatically once the custom domain is set).

### Files to modify
All `*.html` heads, `CNAME` (if missing), Pages settings.

### Difficulty
Easy

### Priority
High

### Estimated impact
SEO, store readiness, professionalism.

---

# Future Roadmap

## Near term (1–2 months)
- [ ] All **Critical Fixes** (1–6) — mostly hours each
- [ ] SEO §1–2, Offline §1 (iOS meta), Security §1 (SRI) — store/foundation prep
- [ ] Performance §1 (images) + §3 (Chart.js) — the felt-speed release
- [ ] Database §1 (activate admin), Security §4 (account deletion)
- [ ] Code Quality §6 (Playwright in CI) — safety net before bigger refactors

## Mid term (3–6 months)
- [ ] Medical §2 (spaced repetition) + §3 (weak areas) + Notifications §1 — the retention release
- [ ] Search §1 (full-text) — the reference release
- [ ] Offline §2 (generated precache) + Performance §2 (SW strategy + update toast)
- [ ] Clinical Calculators §1, Drug DB §1 — the shift-companion release
- [ ] Code Quality §1–3, UI/UX §2 — the maintainability release
- [ ] Offline §5 (Play Store TWA submission)

## Long term (6–12 months)
- [ ] AI §1 (Ask SmartCare) once backend hosting is committed
- [ ] Performance §4 (content splitting), Database §2 (merge sync)
- [ ] Technical Debt §4 (i18n/Arabic pilot)
- [ ] iOS App Store wrapper
- [ ] Medical §1 fully enforced (CI-gated review metadata)

# Nice-to-Have Features

- [ ] **Streaks & badges** — daily-study streak on the hero card; badge wall in stats modal (localStorage only, syncs free).
- [ ] **Haptic feedback** (`navigator.vibrate`) on quiz answers — mobile polish.
- [ ] **Chapter progress rings** on each menu card (per-chapter % like the hero ring).
- [ ] **Custom quiz builder** — pick chapters + count + difficulty → mixed exam.
- [ ] **Bookmark any section/card** — favorites list on home (key already syncs).
- [ ] **`Share` API** for flashcards/monographs — organic growth loop.
- [ ] **Keyboard shortcuts** for desktop (`/` search, `1–4` answer, `space` flip).
- [ ] **Confetti on chapter completion** (respecting reduced-motion).
- [ ] **Data export** — download my stats/progress as JSON (privacy goodwill, GDPR portability).
- [ ] **Dark-mode-aware `theme-color`** — swap the meta per theme so the Android status bar matches AMOLED.

# Version 2.0 Ideas

- [ ] **SmartCare Shift Mode** — a home-screen toggle flipping the app from *study* layout to *reference* layout: calculators, drug lookup, algorithms, and code timers first; big touch targets; AMOLED default. Same content, different information architecture for 03:00 in the ambulance.
- [ ] **Institution packs** — the "content-agnostic platform" promise made real: a documented content-pack format (chapters + protocols + branding JSON) so an EMS agency can load *their* protocols. One codebase, many deployments.
- [ ] **Cohort features** — instructors create a class code; students opt-in share progress; instructor dashboard (reuses the admin console patterns + Supabase RLS).
- [ ] **Case-of-the-week** — a scheduled scenario with community answer distribution shown after submission (static JSON + Supabase counter; no heavy backend).
- [ ] **Protocol diff view** — when guidelines update (AHA 2026…), show old→new diffs per section, powered by the review-metadata system.

---

# Quick Wins (each under ~30 minutes)

| # | Win | Files |
|---|-----|-------|
| 1 | Remove `user-scalable=no` everywhere (one `sed`) | all HTML |
| 2 | `noindex` + strip SEO block from admin.html | `pages/admin.html` |
| 3 | Delete dead `s1` pre-cache entries + null-safe `accept` | `sw.js` |
| 4 | Add `robots.txt` (allow all, disallow admin/login/archives) | new |
| 5 | Fix about.html footer self-link | `pages/about.html` |
| 6 | Add `prefers-reduced-motion` global rule | `styles.css` |
| 7 | Pin chart.js version + SRI | `index.html` |
| 8 | Add `/algorithms/` to SW `CACHE_FIRST_PATTERNS` | `sw.js` |
| 9 | Delete junk icons (`new*.png`, `image (4).png`, `image ( 4).png`) | `icons/` |
| 10 | Add `lang`/`dir`/`scope` + shortcuts stub to manifest | `manifest.json` |
| 11 | Apple meta tags (capable, status-bar, title) on index | `index.html` |
| 12 | Fix drawer Logout to call `SmartCareCloud.signOut()` | `index.html` |
| 13 | Add back-nav header to privacy.html & terms.html | 2 files |
| 14 | `npm test` script → real Playwright command | `package.json` |
| 15 | Add AMOLED to the theme array on the 16 pages missing it (or land UI/UX §2 directly) | chapters/pages |
| 16 | `aria-live="polite"` on drug-calculator results | `pages/drug-calculator.html` |
| 17 | Compress the 4 worst images (>2.5 MB each) with `cwebp` | `icons/courses/`, `algorithms/` |
| 18 | Add Privacy/Terms links to index.html footer | `index.html` |

---

# Long-Term Vision

**SmartCare becomes the tool a paramedic reaches for twice: the night before the
exam, and the night shift after passing it.**

The strategy has three pillars:

**1. Offline is the product, not a feature.** Everything a clinician needs —
chapters, drug doses, algorithms, calculators, ECG drills — lives on-device,
loads instantly from cache, and never shows a spinner in a dead zone. The service
worker becomes boring, generated, and provably complete (built pre-cache manifests,
CI checks, stale-while-revalidate). Cloud sync stays what it is today: optional,
private, additive. This is a genuine moat — most medical reference apps are thin
clients that die in a basement ED.

**2. From content viewer to learning system.** Spaced repetition, weak-area
guidance, streaks, scheduled reminders, and scored drills turn passive reading into
a retention engine, all computed locally from data the app already collects. AI
assistance arrives *grounded in SmartCare's own clinically-reviewed content* with
hard educational-scope guardrails — an explainer and tutor, never a decision-maker.
Every piece of medical content carries visible review provenance; trust is a
feature you can see.

**3. One codebase, every screen.** The PWA core ships to Android via TWA, iOS via
wrapper, desktop via installable PWA — no forks, no rewrites. Tablet two-pane
layouts serve study desks; Shift Mode serves the ambulance at 3 a.m.; institution
content packs let agencies deploy their own protocols on the same engine. The web
stays the canonical, instantly-updatable source of truth, with store presence for
discoverability rather than distribution lock-in.

Underneath, the engineering discipline that makes it sustainable for one developer:
a tiny build step instead of 37 copies of a `<head>`, one theme module instead of
seventeen, generated manifests instead of rituals, tests that run in CI instead of
tests that exist, and telemetry that turns "it doesn't work on my phone" into a
stack trace. Fast, reliable, medically safe — in that order of what users notice,
and the reverse order of what we compromise.
