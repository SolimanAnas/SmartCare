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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status (resolved differently — better):** instead of computing SRI
> hashes for the remaining CDN resources, they were **vendored locally**,
> which is strictly stronger (the bytes are pinned in git and under
> service-worker control): Chart.js 4.5.1 → `vendor/chart-4.5.1.umd.min.js`
> (byte-for-byte from the npm package; all three loaders updated —
> `index.html`, `pages/admin.html`, `src/prometric/exam.js` — and the stats
> charts now work offline), Font Awesome 6.7.2 → `vendor/fontawesome/`
> (css + woff2, `pages/admin.html` + `pages/login.html` updated). Combined
> with the earlier Supabase SDK vendoring (Offline §3), **zero third-party
> script/style CDN references remain in the deployed app** — `grep` for
> `cdn.jsdelivr.net|cdnjs.cloudflare.com` returns only the deploy-excluded
> `graphify.html` dev tool. SRI is therefore moot: there is nothing left to
> hash. The only remaining third-party script is Google's GSI client on
> `login.html`, which cannot be self-hosted (Google requires loading it
> live) and is now pinned by CSP (§2) instead. Verified via Playwright:
> vendored Chart.js loads (v4.5.1 reports itself) and FA font-family
> resolves, both under the new CSP with zero violations.

> **Status:** Chart.js, Font Awesome, and the Supabase SDK are now pinned to
> exact, verified-to-exist versions (was: floating "latest" for Chart.js/
> Supabase, a stale 6.0.0-beta3 for Font Awesome). `crossorigin="anonymous"`
> is in place wherever `integrity=` will attach. The `integrity=` hash values
> themselves are still outstanding — this sandbox's egress policy blocks
> `cdn.jsdelivr.net` and `cdnjs.cloudflare.com` directly (confirmed via the
> proxy's `/__agentproxy/status`; `registry.npmjs.org`/`pypi.org` are
> whitelisted and were used to pick real versions), so the hash couldn't be
> computed here. Each pinned tag has an inline comment with the exact
> one-line command to run from anywhere with CDN access — paste the output
> into `integrity="sha384-…"` on that tag and check this off.

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

- [x] Planned  - [x] In Progress  - [ ] Completed

> **Status:** the deliverable half is done: `<meta http-equiv=
> "Content-Security-Policy">` added to the pages that matter — `index.html`
> and `pages/admin.html` (`default-src 'self'` + Supabase connect),
> `pages/login.html` (adds the Google GSI/fonts origins it genuinely
> needs: `accounts.google.com` script/frame/connect, `fonts.googleapis.com`
> style, `fonts.gstatic.com` font, `gstatic.com`/`googleusercontent.com`
> img), and all 13 `chapters/*.html` (strictest: no third-party origins at
> all). Because Critical-4 vendored every CDN script/style, no CDN origins
> appear in any policy. `object-src 'none'` and `base-uri 'self'`
> everywhere; `frame-ancestors` omitted deliberately (ignored in meta CSP —
> the Flask header still carries it for backend-served responses).
> Verified via Playwright: zero CSP violations across index, chapter
> summary/quiz views, and admin, with vendored Chart.js + FA loading
> correctly under the policies.
>
> **Remaining (the "long-term" half, unchanged):** `'unsafe-inline'` still
> required for both scripts and styles — removing it means extracting
> ~1,100 inline JS lines from `index.html` and inline handlers everywhere
> (Code Quality §1 is the prerequisite). Not attempted here by design.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `redis` added to `requirements.txt` and confirmed installable
> alongside the rest of the stack; `DEPLOYMENT.md` already documented
> `RATELIMIT_STORAGE_URI` thoroughly (§2, §5, §6) before this pass. The code
> is entirely ready — provisioning an actual Redis instance and setting
> `RATELIMIT_STORAGE_URI=redis://…` on the Render deployment is an
> infrastructure action outside what I can do from here.

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

- [x] Planned  - [x] In Progress  - [x] Completed

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Removed `/api/register`, `/api/login`, `/api/google-login`,
> `/api/logout`, the `User` model, and Flask-Login/Flask-SQLAlchemy/
> google-auth entirely (verified the app still imports and all tests pass
> with those packages *uninstalled*, not just absent from requirements.txt).
> `/api/health` no longer pings a database that no longer exists. While
> chasing every `smartcare_local_auth` reference, found `pages/courses.html`
> had the exact same "Logout doesn't actually sign out" bug as Critical
> Fixes #5 (missed there since that page didn't load `supabase-client.js`
> at all) — fixed it the same way and removed its dormant guard block too.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Deleted 16 confirmed-unused image files with zero code references
> (`icons/courses/*.png` cover icons — the app already uses the much smaller
> `icons/courses/thumb/*.png` — plus `images/featured.png`, `featured2.png`,
> `featured22.png`, `bls.png`, `pdf.png`), removing ~35 MB with no functional
> risk. Converted all 17 `algorithms/*.png` files to WebP (q90, visually
> verified indistinguishable from source on the densest chart,
> `Pediatric-BLS-Single-Rescuer`, including a full-res lightbox render check)
> — 11.1 MB → 3.2 MB, updated all `file:'*.png'` references in `pages/aha.html`.
> Converted `images/og.png` (1.7 MB) to `images/og.jpg` (q85, 222 KB) and
> updated all ~45 files referencing it (`og:image`/`twitter:image`/JSON-LD)
> across two canonical domains; the embedded QR code was pixel-checked at full
> resolution pre/post-conversion to confirm no scan-breaking artifacts.
> `icons/courses/thumb/*.png` (actively used, ~35–54 KB each) were already
> reasonably optimized and left as-is. `images/screenshots/*.png` (18 files,
> ~27 MB, referenced by `manifest.json`'s install-prompt `screenshots` array)
> are deferred: they load only once during the PWA install flow rather than on
> every page view, and converting them would require updating each entry's
> `type` field with no reliable way in this environment to visually confirm
> the browser's native install-prompt UI still renders them correctly — flagged
> as a follow-up rather than risked in this pass.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `sw.js` now routes same-origin `.js/.css/.html/.json/.svg` GETs
> and navigations through a new `staleWhileRevalidate()` strategy (serves
> cache instantly, refreshes in the background); `/api/` stays network-first;
> `/algorithms/` was added to `CACHE_FIRST_PATTERNS`; `CACHE_TIMEOUT` dropped
> 5000ms → 2500ms; `skipWaiting()` was removed from the install handler.
> Added an "Update ready — Refresh" toast (`initSWUpdateToast()`) wired to
> `registration.waiting`/`updatefound` in all 4 places the SW is registered
> (`index.html`, `app.js` — covers all chapter pages, `pages/courses.html`,
> `404.html`); clicking Refresh posts `SKIP_WAITING` and reloads on
> `controllerchange`. Verified end-to-end with a persistent-profile Playwright
> test: installed v3.2, swapped in a modified `sw.js`, confirmed the toast
> appeared, and confirmed clicking Refresh activated the new worker and cache.
> Bumped `CACHE_VERSION` to `smartcare-v3.2`.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Removed the eager `<script src=".../chart.js@4.5.1/...">` tag
> from `index.html`'s `<head>`. Added `loadChartJs()`, which injects the same
> pinned-version script tag on first use and memoizes the load promise
> (`window.Chart` / in-flight promise checks avoid double-loading). Wired into
> `showGlobalStatsModal()`'s existing `examStats.length > 1` branch so it only
> fires when the stats modal actually renders a chart. Verified via Playwright:
> zero network requests to `chart.js` on initial page load; exactly one
> request fires only after opening the Statistics card with ≥2 exam records.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Wrote `scripts/split_content.js` (Node, uses `vm` to safely
> evaluate each `content/cN.js` rather than regex/eval-parsing HTML-bearing
> template literals). It splits the 10 multi-section chapters (`c1`–`c10`)
> into `content/cN.meta.js` (TOC only — `id`/`shortTitle` per section, ~700
> bytes–1 KB) + `content/cN/<sectionId>.json` (full section: summary, quiz,
> flashcards, critical). Original `content/cN.js` files are untouched and
> stay checked in as the offline source of truth / fallback. `c0.js` and
> `m1-38.js` (flat, single-section — no per-tab win) and `c-index.js` (calls
> `generateIndexHTML()` at load time, not a static data file) were
> deliberately excluded.
>
> `chapters/c1.html`–`c10.html` now load `content/cN.meta.js` instead of the
> full bundle (2439 KB → 7 KB parsed synchronously across all 10 chapters).
> `app.js` gained `utils.ensureSectionData(section)`, called from the three
> places a section becomes active (`switchSection`, the `popstate` handler,
> `bootApp`) — it fetches `content/cN/<sectionId>.json` on first use and
> memoizes by mutating the section object in place (subsequent visits reuse
> it for free); flat chapters already have `summary` populated and skip the
> fetch entirely. If the fetch fails, `utils.loadFullChapterFallback()`
> dynamically injects the original `content/cN.js` `<script>` tag and reads
> the matching section from `window.CPG_DATA` — verified working via
> Playwright with the section-JSON route blocked. Added the 10 `.meta.js`
> files and each chapter's first section JSON to `sw.js`'s `PRE_CACHE` so the
> default view still works instantly offline before any tab is visited;
> remaining section JSONs are picked up on first visit via the
> stale-while-revalidate strategy from item 2. Verified all 10 split chapters
> render (summary/flashcards/quiz/critical views), tab switching fetches only
> the clicked section, deep links (`?section=`) and browser back/forward work,
> and the 3 flat/unsplit chapter pages (c0, m1-38, c-index) are unaffected.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Downloaded Inter as Google's **variable** woff2 (one 47 KB file
> covers the full 100–900 weight range — cheaper than shipping 7 static
> weights) plus DM Mono 400/500 (15 KB each, used alongside Inter on many
> pages), latin subset only, into `fonts/` + `fonts/fonts.css`
> (`font-display: swap`). Replaced the `fonts.googleapis.com` preconnect +
> `css2?family=Inter...` `<link>` with a self-hosted preload + `fonts.css`
> link across all 37 files that reference Inter (`index.html`, all 13
> `chapters/*.html`, 23 `pages/*.html`) — two link patterns existed
> (double-preconnect and single-preconnect-with-combined-family) and both
> were converted; verified zero `fonts.googleapis.com`/`fonts.gstatic.com`
> requests fire on `index.html` afterward. `404.html` was standardized onto
> Inter per the plan (dropped its JetBrains Mono + DM Sans Google Fonts link
> and 9 `font-family` declarations, using its `/SmartCare/`-absolute path
> convention since it's a GitHub Pages 404 fallback); verified rendering.
>
> **Scope call:** left `pages/ITLS-course.html`, `ITLS-reviewer.html`,
> `courses.html` (Figtree/Plus Jakarta Sans), `pages/login.html` (DM Sans),
> `pages/medical-asm.html` (DM Sans/JetBrains Mono), and
> `src/prometric/exam.html` on Google Fonts — these are distinct, self-
> contained visual designs outside this item's explicit scope ("self-host
> Inter... standardize 404.html"), not the app-shell font. Because those
> pages still load Google Fonts, the `privacy.html §1.3` Google Fonts
> disclosure remains accurate and was **not** removed, despite the roadmap
> step suggesting it — removing it would have been a false privacy claim.
> Added `/fonts/` to `sw.js`'s `CACHE_FIRST_PATTERNS` and pre-cached
> `fonts.css` + all 3 woff2 files.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Added the standard app `<header>` (back arrow + title + theme
> toggle + index link, copied from `about.html`'s pattern) and a
> `footerBackBtn` + `<footer>` to both pages. Added the theme-init snippet so
> both respect the saved theme (previously neither page even set
> `data-theme`, so they ignored it entirely) and self-hosted font links
> (previously missing — both pages were silently falling back to a system
> font). The pre-existing `.privacy-hero`/`.policy-section` heading was `<h1>`
> and now collides with the new header's `<h1>`; retargeted it to `<h2>` so
> each page has exactly one `<h1>`. `terms.html` had zero working styles
> (its `.legal-page`/`.policy-section` classes were only ever defined inside
> `privacy.html`'s own scoped `<style>` block, so it rendered as unstyled
> browser-default text) — brought over the matching card styling so it's
> visually consistent with `privacy.html` rather than fixing the nav only on
> top of a broken page. Verified via Playwright: header/back-nav/theme-cycle
> work on both, exactly one `<h1>` each, zero console errors.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** New `src/theme.js` (`window.SmartTheme = { init, next, set, THEMES }`)
> is the single source of truth for the canonical 5-theme list
> (`dark, amoled, light, sepia, forest`). Replaced every duplicated
> `const themes = [...]` block across 22 files (`index.html`, `404.html`,
> all 13 `chapters/*.html`, `courses/itls/index.html`, `pages/about.html`,
> `pages/courses.html`, `pages/ITLS-course.html`, `pages/ITLS-reviewer.html`,
> `pages/itls-chapter.html`, `pages/privacy.html`, `pages/terms.html`) —
> `grep -rl "const themes\s*=\s*\[" | grep -v src/theme.js` now returns
> nothing. Pages with a discrete theme-picker UI (`index.html`,
> `pages/courses.html`) keep their own `syncThemeUI()` for the
> active-button-highlighting/AMOLED-badge behavior, but now call
> `SmartTheme.set()`/`.next()` instead of re-declaring the list.
>
> **Found and fixed while doing this (same root cause, same files touched):**
> app.js had a second, entirely dead `initChapterPage()` function (140
> lines) — never called by any HTML file — that happened to contain the
> *only* copy of the service-worker registration + update-toast logic for
> chapter pages, plus `recordLastVisited()` and `initBatteryIndicator()`
> calls. This meant **all 13 chapter pages never actually registered the
> service worker** (offline support silently broken) despite Performance
> §2 documenting it as working — that item's own testing covered
> `index.html`/`pages/courses.html`/`404.html` but not a real chapter page,
> and this session's app.js edit unknowingly landed inside the dead
> function. Deleted the dead function, moved the SW-registration/toast
> logic and `recordLastVisited()` into the live `DOMContentLoaded`
> bootstrap. `initBatteryIndicator()` was deleted outright — its target
> `#batteryIndicator` element doesn't exist in any real chapter header
> (only in the dead function's own unused HTML template), so there was
> nothing to wire it back up to. Each chapter page also had its own
> redundant, toast-less service-worker registration `<script>` block
> (harmless — registering the same SW twice is idempotent — but dead
> weight); removed all 13.
>
> **Scope call:** left the "exam review" pages (`acls.html`, `bdls.html`,
> `bls.html`, `ecg.html`, `empact.html`, `itls.html`, `medical.html`,
> `pals.html`, `pepp.html`, `ppet.html`) untouched — they use a
> fundamentally different theme system (a discrete `setTheme('dark'|
> 'light'|'sepia'|'green')` picker with individual buttons, a *different*
> 4-theme set with `green` instead of `forest`/`amoled`, no cycle-toggle
> button) rather than the cycle-through-a-shared-list pattern this item is
> about unifying. Forcing them into `SmartTheme` would mean either
> redesigning their picker UI or extending the shared module to support a
> second, incompatible theme set — flagged as a separate follow-up rather
> than conflated with this fix. `pages/ecg-test.html` has no active theme
> switcher at all (nothing to unify).
>
> Added `src/theme.js` to `sw.js`'s `PRE_CACHE`. Verified via Playwright
> across all 22 converted pages: `window.SmartTheme` present, the toggle
> button correctly cycles through the exact 5-theme order, and (for the
> picker-UI pages) the active-button-highlight/AMOLED-badge behavior still
> works. `pages/courses.html` and `index.html` needed a longer settle time
> in this sandbox specifically — both hit a page reload while a
> render-blocking Google Fonts `<link>` hangs for ~13s against this
> sandbox's blocked-host network policy before failing; confirmed via
> `git stash` that this reload happens on the pre-existing, unmodified code
> too, so it's a sandbox-network artifact rather than a regression — theme
> cycling works correctly once that settles.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** New shared module `src/render-state.js`
> (`window.renderState(container, 'loading'|'empty'|'error', options)`) plus
> `.skeleton-line`/`.state-block` shimmer CSS appended to `styles.css`. Wired
> into every fetch/render path that could previously go blank on failure:
> - **Chapter pages** (`app.js`): `switchSection`, the `popstate` handler, and
>   `bootApp`'s deep-link branch now show a skeleton while
>   `utils.ensureSectionData()` lazy-loads a section's JSON. That function now
>   marks `section._loadFailed = true` when both the primary fetch and the
>   full-chapter-bundle fallback fail; a new `render.loadFailed()` check (with
>   retry via `switchSection`) runs first in `render.summary`,
>   `render.flashcards`, `render.quizSetup`, and `render.criticalGame` so a
>   dead network shows a real error+retry instead of a silent "No X
>   available" empty state. All 13 `chapters/*.html` now load
>   `src/render-state.js`.
> - **`index.html`**: the stats modal's Chart.js load (already deferred per
>   Performance §3) now shows a loading skeleton in the chart area and, on
>   failure, an error state with a retry button that re-attempts
>   `loadChartJs()` — previously a failed CDN load just `console.warn`'d and
>   left the modal chart area blank.
> - **`pages/drug-calculator.html`**: this page is a self-contained design
>   system (no `styles.css`, no shared header/theme — correctly excluded from
>   §1/§2 for the same reason), so it got its own local equivalents instead of
>   forcing in the shared classes: a `.drug-skel` shimmer row style and
>   `showListSkeleton()` (8 skeleton rows in `#drugList` while
>   `drug-data.json` loads), plus the existing `boot()` override's `catch`
>   now renders a real error (with message + `.de-retry` button calling
>   `boot()` again) into `#drugList` using the page's own `.dose-empty`/
>   `.de-icon` convention, instead of leaving the list empty with only the
>   dose panel showing a raw `e.message`.
> - **`pages/ecg.html`**: added a defensive `typeof ECGEngine === 'undefined'`
>   check in the `load` handler — previously if `ecg-engine.js` failed to
>   load, `initCanvas()` would throw on `ECGEngine.createState()` with no
>   user-facing indication anything was wrong. Now shows an `.engine-err`
>   overlay in the monitor area with a reload button.
> - **`pages/admin.html`**: `renderErrorState()` already existed (Admin
>   side-task) but had no way to retry short of a full page reload; added a
>   `.btn-primary` "Retry" button that re-calls `fetchUsers()`.
>
> **Scope call:** `pages/courses.html` was listed in the roadmap's "files to
> modify" but investigation showed it isn't fetch-driven — its course list is
> a static in-file array, not a network call — so there was nothing to wire
> up; left unchanged.
>
> Verified via Playwright: skeleton renders within 50ms of a section-tab
> click under an injected 1-2s network delay; simulated total-failure
> (primary + fallback fetch both rejected) renders the error state with a
> working retry button that re-fetches and recovers; drug-calculator's list
> skeleton/error paths and ecg.html's defensive check exercised directly.
> While testing the skeleton wiring, found and fixed a pre-existing bug: all
> dynamically-rendered icons in `app.js` (`icons/sprite.svg#...`) resolved
> relative to the chapter page's own directory (`chapters/icons/sprite.svg`,
> a 404) instead of the site root — every icon rendered by JS on every
> chapter page (bottom nav, back-home button, coming-soon screen, and now
> the new error-state icon) was invisible. Fixed all 33 occurrences to
> `../icons/sprite.svg#...`; confirmed fixed via isolated single-icon test
> pages plus a full pass over a real chapter page.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** New `@media (min-width: 900px)` block in `styles.css`: `main`
> widens to 920px (was a flat 800px at every width, including 13" tablets);
> `.menu-grid` (home page category grids) goes 2-column; and chapter pages
> get a real two-pane layout — `.chapter-layout { display:grid;
> grid-template-columns: 220px 1fr; }` turns the horizontal section-tab pill
> bar into a sticky vertical sidebar (`.chapter-layout .section-tabs {
> flex-direction: column; position: sticky; }`) next to the content pane,
> instead of stacking tabs above content.
>
> The markup side required more than pure CSS: the section tabs and the rest
> of a view's content weren't consistently siblings under one parent across
> the 5 `render.*` functions that emit them (`summary` wrapped everything in
> `.section.active`; `_renderFlashcard`/`quizSetup`/`quizGame`/
> `_renderCriticalQuestion` had no wrapper at all — tabs and content were
> direct children of `#mainContent`). Standardized all 5 to
> `<div class="chapter-layout">${tabs}<div class="section-body">...rest...
> </div></div>` so the grid has a consistent two-item target. Click handling
> is fully delegated at `document` level via `.closest()` (app.js:1055), so
> adding wrapper divs didn't touch any event-binding logic. Single-section
> chapters (e.g. `c0`) render `tabs` as `''`, so the wrapper conditionally
> omits the `chapter-layout` class (`${tabs ? 'chapter-layout' : ''}`) — such
> chapters keep the plain block layout instead of squeezing content into the
> narrow sidebar column that would otherwise appear with no tabs to fill it.
> `renderBottomNav()`'s output stays outside `.chapter-layout` (it's a fixed
> bottom bar, not part of the two-pane content).
>
> **Scope call:** did not re-take the `tab*.png` manifest screenshots — that
> requires a real tablet/emulator capture step outside what can be produced
> here; flagging as a follow-up for whoever next updates the store listing.
>
> Verified via Playwright at a 1024×900 viewport: `.chapter-layout` renders
> as `display:grid` with sticky vertical tabs on `summary`/`flashcards`/
> `quiz`/`critical` views, section-tab clicks still switch sections
> correctly, `index.html`'s `.menu-grid` sections go 2-column, and the
> single-section `c0.html` correctly gets no grid wrapper. At a 390px mobile
> viewport `.chapter-layout` correctly falls back to `display:block` (no
> regression). Zero console errors across all checks.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `pages/about.html`'s footer linked "Legal & Disclaimer" to
> `about.html` — itself, a dead click while already on that page. Replaced
> with `<a href="privacy.html">Privacy Policy</a> · <a
> href="terms.html">Terms of Use</a>`, matching the no-self-link convention
> `privacy.html`/`terms.html` already established in §1 (each links to the
> *other* two legal pages, never itself).
>
> Every other footered page only linked to About, with no way to reach
> Privacy/Terms short of navigating through About first — added `· <a
> href="...privacy.html">Privacy</a> · <a href="...terms.html">Terms</a>`
> after the existing About link, preserving each page's existing wording and
> trailing disclaimer text otherwise. Covered every footer in the repo:
> `404.html`, `index.html`, `pages/ITLS-course.html`,
> `pages/ITLS-reviewer.html`, `pages/courses.html`, `pages/itls-chapter.html`,
> `pages/ECG-study.html`, and all 13 `chapters/*.html` (their footer markup
> was byte-identical across all 13, confirmed via checksum, so this was one
> mechanical, low-risk change applied uniformly). Relative path depth
> respected per page (`privacy.html` from `pages/`, `../pages/privacy.html`
> from `chapters/`, `/SmartCare/pages/privacy.html` from the root-served
> `404.html`).
>
> **Scope call:** did not touch the "exam review" pages (`acls.html`,
> `bdls.html`, `bls.html`, `ecg.html`, `empact.html`, `itls.html`,
> `medical.html`, `pals.html`, `pepp.html`, `ppet.html`) — none of them have
> a `<footer>` at all, so there was nothing to standardize. Did not pursue
> the roadmap's `vX.Y.Z` version-string suggestion — that's Code Quality §5
> (single source of truth for the version string), a separate, unstarted
> item; bolting an ad-hoc version string into footers now would just create
> another place to update when that item lands.
>
> Verified: grepped every footer in the repo for any `href` whose basename
> matches its own page's filename — zero self-references remain. Resolved
> every new `href` against the filesystem relative to each file's own
> directory (handling the `/SmartCare/`-absolute case for `404.html`
> separately) — all point to real files.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Added `apple-mobile-web-app-capable`, `mobile-web-app-capable`,
> `apple-mobile-web-app-status-bar-style` (`black-translucent`), and
> `apple-mobile-web-app-title` to `index.html`. Generated 15
> `apple-touch-startup-image` splash screens covering the device-width ×
> device-height × pixel-ratio breakpoints from iPhone SE through iPad Pro
> 12.9, via a new `scripts/generate_splash.py` (Pillow: composite
> `icons/icon-512x512.png` centered on a `#0f2027` background — matches
> `manifest.json`'s `background_color`) rather than `npx
> pwa-asset-generator`, which needs a headless-browser render pipeline this
> sandbox can't run reliably; Pillow compositing is simpler and gives the
> same result for a flat-color splash. Script is re-runnable whenever the
> icon or background color changes.
>
> **Scope call on caching:** did *not* add the 15 splash images to `sw.js`'s
> eager `PRE_CACHE` — that would add ~3MB to every install regardless of
> platform, for an asset only iOS ever requests. Added `/\/splash\//` to
> `CACHE_FIRST_PATTERNS` instead, so each splash image gets cached the first
> time Safari actually requests it (at install/launch) and served from cache
> on every subsequent offline launch — same offline guarantee, without
> penalizing Android/desktop users' first-load payload.
>
> Verified the meta tags and all 15 `<link>` tags are present and every
> `href` resolves to a real file; couldn't verify actual iOS install/splash
> rendering since that requires a physical device or Xcode simulator, neither
> available here — flagging as a follow-up for whoever next has iOS hardware
> to confirm against.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** New `scripts/build_precache.py` derives the precache list from
> the actual repo tree using the same curation rules a human was applying by
> hand (app shell; every `chapters/*.html`; every `pages/*.html`/`*.js`/
> `*.json`; `content/*.meta.js` plus each split chapter's first section
> `content/{id}/{id}s1.json`; full `content/*.js` bundles only for chapters
> that *aren't* split, since a split chapter's full bundle is a lazy-loaded
> fallback, not something to precache) — so a file matching those rules is
> included automatically, with no PR to hand-edit a list. This directly
> fixes the drift the roadmap called out: `pages/GCS.html` and
> `pages/ems-tools.html` (and, from this session's own §1, `pages/terms.html`)
> were never in the old hand list; the generated manifest now has all 32
> `pages/*.html` (up from 10 hand-picked ones), 89 entries total vs. the old
> 82.
>
> Output is `precache-manifest.js` at the repo root:
> `self.__PRECACHE = [...]` plus `self.__PRECACHE_VERSION` — a SHA-1 (`
> usedforsecurity=False`, this is a fingerprint, not a security hash) over
> every precached file's actual bytes, not mtimes (git checkouts don't
> preserve original commit mtimes, so an mtime-based hash would falsely
> "change" on every fresh CI checkout regardless of real content — a known
> footgun for this exact pattern). `sw.js` now does `importScripts
> ('precache-manifest.js')` and derives `CACHE_VERSION` from
> `self.__PRECACHE_VERSION`, so the cache only busts when a precached file's
> content actually changes — no more manually bumping a `v3.x` string (the
> old hand-maintained comment stays as a human-readable changelog, but
> nothing programmatic reads it anymore).
>
> Wired into both CI paths: `.github/workflows/static.yml` regenerates
> `precache-manifest.js` immediately before the `rsync` deploy step, so a
> contributor who forgot to regenerate locally still ships a correct
> manifest; `.github/workflows/ci.yml` regenerates it and `git diff
> --exit-code`s the result, failing the build if the committed copy is
> stale. Added `npm run precache` as the local pre-commit convenience the
> roadmap asked for. `bandit -r scripts/` flagged the SHA-1 call by default
> (`B324`) — fixed with the `usedforsecurity=False` flag rather than
> suppressing the finding, since that's the actual correct annotation for a
> non-cryptographic use.
>
> **Scope call:** did not literally "walk the whole deployable tree" —
> `images/`, `algorithms/`, `splash/`, and the raw `courses/itls/data/itls/`
> source JSON (superseded by the committed `bundle.js` build artifact) are
> deliberately excluded by the rules above, same as the old hand list
> intended; those stay cache-first-on-demand (`CACHE_FIRST_PATTERNS`) rather
> than blocking install with megabytes of media. A truly generic tree-walk
> would have needed to reinvent that exclusion logic anyway, so encoding it
> as explicit, documented rules seemed more honest than a walk that
> silently special-cases half the tree.
>
> Verified via Playwright: SW installs cleanly against the new manifest with
> zero `[SW] Pre-cache failed` warnings across all 89 entries; offline reload
> of `pages/GCS.html` (previously uncached, now fixed) returns 200; the
> manifest is byte-for-byte reproducible (`python3 scripts/build_precache.py`
> twice in a row emits the same version hash).

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `vendor/supabase-js-2.110.0.mjs` is now a committed,
> self-contained ESM bundle of `@supabase/supabase-js@2.110.0` (bundled with
> esbuild: `--bundle --format=esm --minify --platform=browser
> --target=es2020`), replacing the `import('https://cdn.jsdelivr.net/...')`
> in `pages/supabase-client.js`. `jsdelivr.net` is unreachable from this
> sandbox's network policy, so the jsdelivr `+esm` on-the-fly bundling
> endpoint itself couldn't be used to produce this file — instead wrote
> `scripts/vendor_supabase.sh`, which does the equivalent locally:
> `npm install @supabase/supabase-js@<version>` from the (reachable)
> `registry.npmjs.org`, then bundles it with esbuild. Re-run with
> `SUPABASE_JS_VERSION=<new-version> bash scripts/vendor_supabase.sh` to
> upgrade; the version is in the filename per the roadmap's "upgrade
> discipline" ask, and the old file should be deleted when bumping so only
> one vendored copy ever ships.
>
> `scripts/build_precache.py`'s glob rules now include `vendor/*.mjs`, so the
> bundle is pre-cached automatically (90 entries now, was 89) — no manual
> `sw.js` edit needed, consistent with §2. `pages/supabase-client.js`'s
> `SDK_URL` is now the relative path `../vendor/supabase-js-2.110.0.mjs`
> (relative to the *file's own* location in `pages/`, not whichever page's
> `<script src>` loaded it — verified this resolves correctly from all 4
> pages that load it: `index.html`, `pages/admin.html`, `pages/login.html`,
> `pages/courses.html`).
>
> Verified via Playwright: `SmartCareCloud.ready` resolves `true` with zero
> requests to any `jsdelivr` host and zero console errors — both on a normal
> load and, after registering the service worker once online, on a full page
> reload with the browser context set offline (the vendored module comes
> back from Cache Storage, not the network). Also load-tested the bundle in
> isolation before vendoring it: `createClient()` returns a working client
> (`typeof client.auth.getSession === 'function'`, `typeof client.from ===
> 'function'`) with no console errors.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Confirmed the anti-pattern was real before fixing it: the
> existing 512px icon's actual content fills ~90% of the canvas, way outside
> a maskable icon's safe zone (an 80%-diameter circle centered in the icon —
> content outside it gets clipped by Android's adaptive-icon masks). New
> `scripts/generate_maskable_icons.py` crops each of the 8 existing icon
> sizes to its real (non-transparent) content, shrinks it to 55% of the
> canvas, and centers it on a solid `#0f2027` background (manifest's
> `background_color` — maskable icons can't rely on transparency, platforms
> render it as unpredictable black/white) to produce `icon-{size}-maskable
> .png`. Verified by drawing the actual 80%-diameter safe-zone circle over
> the output: the logo sits comfortably inside it. The original files are
> unchanged and now serve only `purpose: "any"`; `manifest.json`'s `icons`
> array is 16 entries (8 sizes × `any`/`maskable`, was 8 dual-purpose).
>
> Added `"lang": "en"`, `"dir": "ltr"`, `"scope": "./"` — `scope` as a
> relative path deliberately, not an absolute `/`, since the app's canonical
> deployment domain isn't settled yet (see SEO §2, a separate, still-open
> roadmap item); a relative scope resolves correctly against the manifest's
> own URL regardless of which domain/subpath ends up hosting it, so this
> doesn't need to wait on that item.
>
> Added a 3-entry `shortcuts` array (Resume last chapter, Prometric EMT Exam,
> Drug Calculator), each reusing `icons/icon-96x96.png` rather than
> generating dedicated shortcut badges — valid per spec and avoids 3 more
> throwaway image variants for icons a long-press menu shows at a tiny size.
> New root-level `resume.html` (11 lines) is the "Resume" shortcut's target:
> reads the same `smartcare_last_visited` localStorage list `app.js`'s
> `recordLastVisited()` already writes (most-recent-first, each entry's
> `url` is a full `location.href`) and `location.replace()`s straight there,
> falling back to `index.html` if the list is empty. Added to
> `scripts/build_precache.py`'s `CORE_FILES` so it's precached like
> `index.html` (91 entries now, was 90).
>
> Verified via Playwright: `manifest.json` parses with 16 icons and 3
> shortcuts; `resume.html` redirects to the stored last-visited URL when one
> exists and falls back to `index.html` when the list is empty; the service
> worker still installs cleanly against the updated precache manifest.
> Couldn't run this through an actual `maskable.app`/Lighthouse audit (no
> browser extension environment here) — the safe-zone-circle overlay check
> is the verification available in this sandbox; flagging a real Lighthouse
> PWA audit as a good pre-launch step for whoever next has that tooling.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Correction from the previous status block (which assumed
> `assetlinks.json`/TWA packaging were unstarted): the app is **already on
> Google Play in closed testing**, packaged from a separate Android/TWA
> repo that owns the signing certificate and `assetlinks.json` — correctly
> so, since a TWA wrapper is its own Android project with its own signing
> key, not something that belongs in this web repo. Every prerequisite this
> web repo is actually responsible for is now met: HTTPS, manifest + SW,
> privacy policy, fresh screenshots, account deletion, real maskable icons,
> and (this pass) a stable canonical domain. Nothing further is blocked on
> this side; any remaining Play Store work (data-safety form, listing copy,
> promoting out of closed testing) lives in the Play Console / the TWA repo,
> not here.
>
> iOS packaging (PWABuilder + Apple Developer account + TestFlight) is a
> separate, still-unstarted track — the iOS install metadata (Offline §1)
> and device-verification caveat noted there still apply.

### Why this matters
The manifest, screenshots, privacy policy, and offline behavior are near
store-ready. Packaging as a **TWA (Bubblewrap/PWABuilder)** for Play and a
PWABuilder iOS wrapper unlocks distribution where clinicians actually search.

### Current implementation
Already shipping: Android via TWA, in closed testing on Google Play (packaged from a separate repo). Prerequisites this repo owns: ✅ HTTPS, ✅ manifest+SW, ✅ privacy policy, ✅ screenshots (regenerated + compressed, July 2026), ✅ account deletion (Security §4), ✅ maskable icons (§4 above), ✅ stable canonical domain (SEO §2 — GitHub Pages). iOS: ❌ not started.

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

- [x] Planned  - [x] In Progress  - [ ] Completed

> **Status:** the schema now exists **as code**: `supabase/migrations/`
> holds `20260702000001_create_user_state.sql` +
> `20260702000002_create_profiles.sql` (tables, RLS policies, grants, the
> `handle_new_user` trigger, and the backfill), written idempotently
> (`drop policy if exists` before every `create policy`) so `supabase db
> push` is safe even where the dashboard SQL was already run by hand.
> `docs/SUPABASE_SETUP.md` remains the human-readable companion; the
> migration files are now the source of truth (see
> `supabase/migrations/README.md`).
>
> **Remaining — cannot be done from this environment:** actually running
> `supabase db push` (needs project credentials) and setting the Edge
> Function secrets (`ADMIN_EMAILS` etc.). Until someone with project access
> runs it, the live database schema is whatever was last applied manually.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `pages/supabase-client.js` now does a snapshot-based
> **three-way per-key merge**. A client-side snapshot of the entries as of
> the last successful sync (`smartcare_last_sync_snapshot`, added to
> `SYNC_BLOCK` so it never syncs itself) serves as the merge base; on
> `pull()`, each key resolves as: unchanged-locally → take cloud;
> unchanged-in-cloud → keep local; changed on both sides → **local wins**
> (sync() pushes immediately after, making the device in the user's hand
> canonical — the value they just produced beats a background copy losing
> silently). First sync on a device (no base): cloud wins for overlapping
> keys, one-sided keys always survive. `push()` refreshes the snapshot on
> success; `pull()` deliberately does not (until pushed, the cloud still
> holds its pre-merge blob, so the base must keep describing the last
> agreed state). The cloud row shape is unchanged — old and new clients
> interoperate; pre-upgrade devices simply behave like first-sync until
> their first successful push.
>
> The merge is exposed as `SmartCareCloud._mergeForSync(local, cloud,
> base)` for testability. Verified via Playwright with five scenarios,
> including the exact data-loss case from the audit: device A's fresh
> offline chapter progress now survives device B's later push of a stale
> copy (previously A's work was silently overwritten, then the regression
> was re-uploaded).

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Covered all four pages the audit named
> (`pages/drug-calculator.html`, `pages/GCS.html`, `pages/ecg.html`,
> `pages/ems-tools.html`) — an early draft of this note said `ems-tools.html`
> had "no custom interactive controls to audit"; that was checked and was
> wrong (it's an 862-line page with 8 launcher cards plus APGAR/Burns/RTS/
> START mini-calculators), caught and fixed before writing the final status.
>
> Found more than missing labels — several controls were **not keyboard
> operable at all**, which is the more serious class of bug (a label on an
> unreachable control doesn't help anyone): the GCS and ems-tools results
> bottom-sheets' only close affordance was a bare `<div onclick>` drag
> handle (not focusable, no keyboard handler) — now `role="button"
> tabindex="0"` with an Enter/Space handler on both. ECG's 4 theme-switcher
> swatches were `<div onclick>` color dots with only a `title` attribute —
> converted to real `<button>` elements (title→aria-label). ECG's rhythm
> picker — the page's core interaction — rendered its entire list of
> selectable rhythms as `<div onclick>` items with no keyboard path in or
> out; rebuilt as a proper `role="radiogroup"`/`role="radio"` list with
> `aria-checked` and Enter/Space selection. `ems-tools.html`'s 8 launcher
> cards (the page's entire navigation surface — every tool on the page
> starts from one of these) were the same `<div onclick>` pattern; each got
> `role="button" tabindex="0"` plus one delegated keydown listener for
> Enter/Space. Every icon-only `<div onclick>` close button across all four
> pages (GCS's, ECG's rhythm-picker's, ems-tools') is now a real `<button>`
> with an `aria-label`.
>
> Also added labels to icon-only controls that *were* already real elements
> (back links, search clear buttons, search/weight inputs) across all four
> pages, and a page-scoped `:focus-visible{outline:2px solid #3b82f6}` rule
> on each — all four had `outline:none` on at least one interactive element
> with **no replacement focus indicator**, meaning a keyboard user tabbing
> through lost all visual track of focus.
>
> Verified via Playwright: every new `aria-label` resolves to the intended
> string; the GCS and ems-tools sheets close via `Tab` + `Enter` on the
> handle; ECG's theme buttons are real `<button>` elements that change the
> theme on click; the rhythm picker's radiogroup renders with `role="radio"`
> + `tabindex="0"` items and both selects a rhythm and closes the sheet via
> keyboard alone; an ems-tools launcher card opens its bottom sheet via
> `Tab` + `Enter` alone. Zero console/page errors across all four pages.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Added the standard universal-override snippet to `styles.css`:
> `@media (prefers-reduced-motion: reduce) { *, *::before, *::after {
> animation-duration: 0.01ms !important; animation-iteration-count: 1
> !important; transition-duration: 0.01ms !important; scroll-behavior: auto
> !important; } }`. Chose this over hand-picking individual animations
> (`fadeInUp`, `bat-pulse`, `floatDown`, the loading skeleton shimmer) for
> the same reason it's the industry-standard pattern: it can't miss a future
> animation someone adds later, and it collapses durations to near-zero
> rather than disabling `animation`/`transition` outright — so elements
> still reach their end state (a card still becomes visible, a flip still
> completes) instead of getting stuck mid-transition. This only covers the
> app shell (`styles.css`); the 5 standalone exam-review pages already had
> their own `@media print` + reduced-motion-adjacent handling from before
> this pass and weren't touched.
>
> Verified via Playwright with `page.emulate_media(reduced_motion="reduce")`:
> a `.menu-card`'s computed `animation-duration` drops from `0.6s` to
> `0.00001s` under the preference and stays `0.6s` without it, zero page
> errors either way.

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

- [x] Planned  - [x] In Progress  - [ ] Completed

> **Status:** Grep-verified zero live references to each target (no HTML,
> JS, Python, or CI workflow touches them), then removed: `_archive/`
> (1.1 MB), `content_starters_backup/` (196 KB), the 6 orphaned icon files
> (`icons/image (4).png`, `image ( 4).png`, `new.png`, `new2.png`,
> `new22.png`, `new222.png` — 4+ MB), and `graphify.html` (the standalone
> visualizer page).
>
> **Correction mid-task:** initially deleted `graphify.yaml` too, assuming
> it was part of the same dev-tool cruft as `graphify.html` — it isn't.
> `graphify.yaml` is the *active config* for the `graphify` CLI this project
> uses for codebase queries (see `CLAUDE.md`'s graphify instructions); it's
> deploy-excluded via `.pagesignore` already (correctly — a config file has
> no business being served) but is very much alive. Caught this before
> committing and restored it via `git checkout HEAD -- graphify.yaml`.
>
> **Scope call — `pdf_sections/` (103 MB) deliberately NOT touched:** unlike
> the items above, this is genuinely ambiguous rather than obviously dead —
> 107 raw source PDFs (presumably the original CPG material this app's
> content was authored from) with zero programmatic references, but no way
> to confirm from the repo alone whether they're still used as a human
> reference when updating chapter content. More importantly, actually
> shrinking the repository (not just the working tree — `.git` itself is
> 122 MB, and `pdf_sections/` accounts for most of that) requires a git
> **history rewrite** (`git filter-repo`/BFG), which rewrites every commit
> SHA, breaks any existing clones/forks, and requires a coordinated
> force-push. That's a fundamentally different risk class from a normal
> `git rm` — destructive, hard-to-reverse, and affects shared history — and
> not something to do unilaterally without the repo owner's explicit
> go-ahead. Recommendation stands from the audit: move the source PDFs to
> external storage (they're already excluded from the deployed site via
> `.pagesignore`) and rewrite history separately, as its own deliberate,
> owner-approved operation.
>
> `reports/` (112 KB) was left alone too — small enough that the
> risk/reward of investigating and removing it didn't clear the bar this
> pass; flagged for a future cleanup pass, not because it's meaningfully
> "dead weight" at that size.
>
> Verified: pytest/ruff/bandit clean after the deletions; grepped for
> residual references to every deleted path — none found (the one
> incidental hit, in the new `scripts/generate_sitemap.py`'s own exclude
> list, is a harmless no-op now that the file it names doesn't exist).

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `package.json`'s `test` script is now `playwright test`
> (previously the `exit 1` stub). `playwright.config.js` gained a
> `webServer` block (`python3 -m http.server 8899`, `reuseExistingServer:
> !process.env.CI`) so Playwright manages the static server itself instead
> of needing a manually-started one — works identically locally and in CI.
> `.github/workflows/ci.yml`'s JavaScript section now does a real `npm ci`
> (replacing an ad-hoc `npm install --save-dev eslint@8 prettier` that only
> ever installed two of the project's declared dependencies) followed by
> `npx playwright install --with-deps chromium` and `npm test`.
>
> Along the way, actually **ran** the existing 17 specs
> (`tests/prometric.spec.js`, `tests/_check_exam_flow.spec.js`) for the
> first time this session and confirmed all 17 pass — they'd never been
> exercised in CI before, so this was the first real verification they
> still reflect the app's current behavior.
>
> New `tests/offline.spec.js` (3 specs) — the "smoke specs" step below,
> scoped to the thing this roadmap has spent the most effort on this cycle:
> registers the service worker and asserts (1) zero `[SW] Pre-cache failed`
> warnings across all `precache-manifest.js` entries, (2) a representative
> page set — including `pages/GCS.html`, the exact page that was silently
> missing from the old hand-maintained `PRE_CACHE` list — returns 200 with
> the network cut, (3) all three vendored third-party assets (Chart.js,
> the Supabase SDK, Font Awesome) are servable offline. This directly
> regression-tests the two real incidents from earlier this session
> (missing pages, CDN-dependent SDK) instead of just checking generic page
> renders.
>
> **Found and fixed a real bug while writing test #3:** `sw.js`'s
> `SWR_PATTERN` regex (`/\.(?:js|css|html|json|svg)(?:\?|$)/`) doesn't match
> `.mjs` — `"supabase-js-2.110.0.mjs"` has no literal `".js"` substring
> immediately before the end of the string, so the vendored Supabase SDK
> fell through to `networkFirst`'s 2.5s-timeout-then-cache-fallback path
> instead of the instant stale-while-revalidate hit every other app-shell
> file gets. Added `mjs` to the pattern; still served correctly before the
> fix (via the fallback), so this was a latency bug, not a correctness one
> — but a real one, caught by writing a test that actually measured "is
> this fast" territory rather than just "does this eventually 200".
>
> **Scope call:** did not add the additional smoke specs the roadmap
> suggested (home renders, chapter opens, quiz scores, login renders) —
> `tests/prometric.spec.js` already covers equivalent ground for the exam
> engine, and the UI/UX section's Playwright verification (done manually,
> per-item, throughout this and the prior session) covers the rest; adding
> parallel automated specs for all of it is real, separate work better
> scoped as its own item than folded into "fix the test runner."
>
> Verified: 20/20 specs pass locally (`PLAYWRIGHT_CHROMIUM_PATH=/opt/pw-
> browsers/chromium npx playwright test` — that env var is a
> sandbox-only override for a pre-installed browser and does not affect
> normal CI runs, which use `npx playwright install` unmodified).

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

## 7. Deduplicate the 8 standalone exam-review pages

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `pages/acls.html`, `bdls.html`, `bls.html`, `itls.html`,
> `medical.html`, `pals.html`, `pepp.html`, `ppet.html` each carried their
> own ~650-line `<style>` block and ~920-line inline exam engine —
> ~97% identical across all 8. Extracted the shared parts into
> `pages/exam-review.css` and `pages/exam-review.js`; each page now keeps
> only its unique SEO `<head>` plus a small `window.EXAM_CONFIG = { id,
> qCountFallback }` block and two `<link>`/`<script src>` references.
> Net: ~12,700 duplicated lines removed, replaced by 1,475 shared lines.
> `pages/empact.html` (structurally different) and `pages/ecg.html`
> (already deduplicated in prior UI/UX work) were left out of scope.
>
> **Found and removed two entirely dead features while extracting the
> engine.** Checked every page for actual call sites before assuming
> either was worth preserving:
> - **Pearls screen** (`#pearlsScreen`, `openPearls()`): no `onclick` in
>   any of the 8 pages ever called it — 100% unreachable. Of the 8 exam
>   directories, only `src/PEPP/` and `src/ITLS/` even have a
>   `pearls.json`; the other 6 pages pointed at data that never existed.
>   Rather than author medical content for the missing 6, removed the
>   dead feature everywhere.
> - **Settings modal / hint toggle** (`#settingsModal`, `openSettings()`,
>   `toggleHints()`): same story — zero call sites on any page. Also
>   collapses a `hints-enabled` `localStorage` key that collided across
>   all 8 exam types (toggling hints off in one exam silently affected
>   the other 7).
>
> **Fixed a real markup bug in `ppet.html`** while rewriting it: the
> `.exam-cards` grid container closed after the first card, so "PPET
> Exam — Form 2" rendered as a sibling of the grid instead of a child —
> it fell outside the card-grid layout entirely. Fixed the nesting so
> both cards render inside `.exam-cards`.
>
> `scripts/build_precache.py`'s `pages` glob tuple was `(".html", ".js",
> ".json")` — missing `.css`, so the new shared stylesheet wouldn't have
> been precached for offline use. Added `.css`; manifest regenerates
> cleanly (`git diff --exit-code precache-manifest.js` passes).
>
> Verified: full Playwright suite (20 pre-existing specs) still passes;
> added and ran an ad-hoc deep-flow regression pass (theme switching,
> exam start, answer/flag/nav, submit → results, and DOM assertions that
> Pearls/Settings are completely absent) across all 8 pages with zero
> console/page errors, then removed the scratch spec — this was a
> one-time verification pass, not a permanent addition to `tests/`.
> `node --check`, `pytest` (16/16), `ruff`, and `bandit` all clean.

### Why this matters
Eight near-duplicate 1,780–1,890-line pages meant every engine bug (like the
`ppet.html` card-nesting issue above) had to be independently rediscovered
and fixed per page, and every real engine change meant 8 near-identical edits.

### Files modified
New `pages/exam-review.css`, `pages/exam-review.js`; rewrote all 8 exam
pages to reference them; `scripts/build_precache.py` (`.css` glob),
`precache-manifest.js` (regenerated).

### Difficulty
Medium

### Priority
Medium

### Estimated impact
Maintainability (one engine instead of 8), bug surface reduction (two dead
features and one broken-markup page found and removed/fixed in the process).

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** `robots.txt` (allow all + `Sitemap:` line) and `sitemap.xml`
> (45 URLs, generated by the new `scripts/generate_sitemap.py`) committed,
> both unblocked by the canonical-domain decision (§2 below). Deliberate
> deviation from the recommended steps: `pages/admin.html` is **not**
> `Disallow:`ed — a robots block would stop crawlers from ever *seeing* the
> `noindex` meta that actually keeps it out of results, while advertising
> the path to anyone reading robots.txt; the noindex meta (Critical Fixes
> §2) is the correct mechanism and stays. `/_archive/`, `/pdf_sections/`
> need no robots entries — they're already excluded from the deploy itself
> via `.pagesignore`, so they don't exist on the served site. Auth pages,
> `resume.html`, and `404.html` are excluded from the sitemap by the
> generator.

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

- [x] Planned  - [x] In Progress  - [x] Completed

> **Status:** Decided (owner call, July 2026): the canonical domain is the
> GitHub Pages URL, `https://solimananas.github.io/SmartCare` — no custom
> domain exists right now, so canonicalizing on the one that actually serves
> the site beats canonicalizing on one that doesn't. One pass normalized
> every `canonical`, `og:url`, `og:image`, `twitter:*`, and JSON-LD `url`
> across all 45 HTML files (`smartcare-learning.net` no longer appears
> anywhere outside historical docs); removed the stale custom-domain
> redirect URL from `docs/SUPABASE_SETUP.md` §3. `404.html`'s
> `/SmartCare/`-absolute internal paths were already consistent with this
> choice. If a custom domain is added later, this becomes one `sed` pass +
> a `CNAME` file + re-running `scripts/generate_sitemap.py`.

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
