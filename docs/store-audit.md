# SmartCare — Google Play Production Readiness Audit

**Scope:** entire repository, audited as a Google Play reviewer would evaluate a PWA/TWA submission. Six parallel research passes (manifest/SW/PWA wrapper/offline, security, policy/privacy/medical content, accessibility/performance, repository hygiene/GitHub Pages) plus direct verification of the highest-severity finding. Every item below has file:line evidence — nothing in this report is speculative.

**Headline result:** one confirmed, actively-exploitable reflected XSS was found and **fixed during this audit** (see §5). Everything else below is prioritized findings for you to triage — this report does not assume you want everything fixed unprompted.

**Update:** the five highest-priority items from the original Priority Summary have since been fixed in a follow-up pass — see "Fixed in this follow-up pass" below. Two lower-priority items were reviewed and explicitly deferred by the app owner (also noted below, so they aren't silently dropped from this report).

Context note: `.well-known/assetlinks.json` **does exist in this repo** (package `io.github.solimananas.smartcare`), correcting an earlier assumption in this project's history that it lived in a separate repo. It's present and correctly formatted.

---

## Fixed during this audit

### Reflected XSS in `pages/med-index.html` — CONFIRMED, EXPLOITABLE, NOW FIXED
`pages/med-index.html:369-370` read a `?drug=` URL parameter and, when the search matched zero results, interpolated it **unescaped** directly into `innerHTML` (line 433 originally: `'No results for &ldquo;'+query+'&rdquo;'`). A link like:
```
med-index.html?drug=<img src=x onerror=alert(document.cookie)>
```
executed arbitrary JavaScript in the victim's session — and this page had **no CSP** to mitigate it. This is a real, remotely-triggerable vulnerability an attacker could embed in a shared link, QR code, or ad.

**Fix applied:** added an `escHtml()` helper and applied it to both unescaped interpolation sites (the search-empty message and the fetch-error message, which was lower-risk but fixed for consistency); added a CSP meta tag to the page (it had none). Verified with a live Playwright test using an actual XSS payload — confirmed the test **fails against the original code** and **passes against the fix** (no `alert()` fires, payload renders as literal text, no injected DOM element). Promoted to a permanent regression test: `tests/med-index-xss.spec.js`.

---

## Fixed in this follow-up pass

All five items below were confirmed via user Q&A to prioritize before doing any implementation work (in particular, the account-deletion item below turned out to be worse than originally scored — see its entry).

### Account deletion silently broken in production — was "risk," CONFIRMED, NOW FIXED
§6 originally flagged this as a "deployment-dependent risk" contingent on which backend the shipped TWA build points at. Asked directly: **the actual Play Store build points at the static GitHub Pages mirror only — no Flask backend is deployed anywhere reachable from the client.** That means `server.py`'s `DELETE /api/account` (which `pages/login.html`'s delete-account button called) was **always unreachable in production** — every real-world account-deletion attempt has been silently failing. This is a genuine Google Play policy violation (apps offering account creation must offer working in-app account deletion) and a GDPR Art. 17 compliance gap, not just a theoretical risk.

**Fix applied:** added a fourth Supabase Edge Function, `supabase/functions/self-delete-account`, following the exact pattern already established for the three `admin-*` functions (`_shared/admin.ts` gained a new `requireUser()` helper — same bearer-token verification as `requireAdmin()`, minus the `ADMIN_EMAILS` allow-list check, since every signed-in user is always authorized to delete their own account). `pages/login.html`'s delete handler now calls this Edge Function instead of the unreachable Flask route. `server.py`'s route is left in place unmodified — removing it would orphan `tests/test_api.py`'s `TestCsrfGuard` coverage (it explicitly relies on `/api/account` being "the only body-carrying endpoint left" to test CSRF protection against), and full Flask retirement is a separate, larger decision out of scope here. Documented the new function's deployment step in `docs/SUPABASE_SETUP.md` §4b. Added a permanent regression test: `tests/self-delete-account.spec.js` (stubs the network layer and asserts the delete button calls `/functions/v1/self-delete-account`, never `/api/account`).

### `manifest.json` `id` field mismatch — FIXED
§3's one-line fix applied: `"id": "/"` → `"id": "/SmartCare/"`, matching the actual GitHub Pages project-site deploy path.

### "Official Pre/Post Exam" wording — FIXED
§1's fix applied to `pages/ITLS-course.html:341-342`: "Official Pre/Post Exam" / "Complete the official certification-style examination" → "Practice Pre/Post Exam" / "Complete the unofficial, ITLS-style practice examination." Removes the unqualified affiliation claim against the trademarked ITLS program.

### Footer contrast failure, default dark theme — FIXED
§7's bug fixed: `styles.css`'s footer was reusing `--text-secondary` (a color tuned for the theme's opaque light glass cards), directly on the raw dark `--bg-gradient` it actually sits on, computing to ≈2.07:1. Added a dedicated `--footer-text` token (`#94a3b8`, matching the AMOLED theme's already-established value for text-on-dark) used only by the footer, leaving `--text-secondary` and every other consumer of it untouched. Verified ≥4.5:1 against all three `--bg-gradient` stops. Per explicit user decision, only the confirmed dark/default theme was fixed — the other 4 themes were not audited for the same class of bug in this pass. Extended `scripts/check_contrast.py` (already wired into CI) to guard this specific regression going forward, alongside its existing `exam-review.css` `--muted` check.

### `ci.yml` missing `permissions:` block — FIXED
§12's one-line fix applied: added `permissions: contents: read` at the workflow level, matching the least-privilege pattern `static.yml` already uses (which additionally needs `pages: write`/`id-token: write` for its deploy job — `ci.yml` doesn't, since it only lints/tests/builds).

## Explicitly reviewed and deferred (not fixed, by owner decision)

- **Orphaned `pages/drug-index.html` still in `sitemap.xml`** (§11) — owner chose to leave both the page and its sitemap entry as-is for now.
- **103MB of `pdf_sections/` PDFs + oversized PNGs in git history** (§11) — owner chose to skip any git-history rewrite (including the non-destructive `git rm --cached` option) for now.

---

## 1. Google Play Policy Compliance

| Finding | Severity | Evidence |
|---|---|---|
| "Official Pre/Post Exam" wording | **Policy-blocking, FIXED** | `pages/ITLS-course.html:341-342` — was "Complete the **official** certification-style examination," now "Complete the unofficial, ITLS-style practice examination." See "Fixed in this follow-up pass" above. |
| Certification names in page titles | **Should improve, not fixed** | `pages/acls.html:66`, `pages/bls.html:66`, `pages/pals.html:66`, `pages/bdls.html:66`, `pages/itls.html:66` all title the page as e.g. "ACLS Exam Review" with no "(Unofficial)" qualifier in the title/H1 itself (only in body copy). ACLS/BLS/PALS are AHA-trademarked. |
| Course thumbnail icons | **Needs manual visual check** | `icons/courses/thumb/{acls,bls,itls,pals,pepp,bdls,ecg,empact}.png` — uniform custom-generated style, but a human should visually confirm none are stylized after real AHA/ITLS logos. |
| Medical claims language | **Already fine, verified** | Marketing copy (index.html, about.html) consistently frames the app as a study aid; no diagnostic/treatment claims found in a repo-wide scan. |
| Developer disclosure | **Minor, not fixed** | Only an email link in `pages/privacy.html:470`; no dedicated in-app Support/Help page. Acceptable minimum, not ideal. |

## 2. PWABuilder / Android Wrapper

- **No TWA build artifacts in this repo** (no `twa-manifest.json`, `android/`, `build.gradle`, bubblewrap config) — confirmed the actual Android project lives elsewhere, consistent with prior project notes.
- `.well-known/assetlinks.json` **present and correctly formatted** — package `io.github.solimananas.smartcare`, one SHA-256 cert fingerprint.
- No wrapper-side navigation/orientation/back-button code exists in this repo to audit (lives in the external Android project).

## 3. Manifest Audit (`manifest.json`)

| Finding | Severity | Evidence |
|---|---|---|
| `id` vs. deploy scope mismatch | **Confirmed bug, FIXED** | `manifest.json:12` now sets `"id": "/SmartCare/"`, matching the actual GitHub Pages project-site deploy path (`start_url`/`scope` were already correct, relative paths). See "Fixed in this follow-up pass" above. |
| Static `theme_color` vs. 5 themes | **Minor polish** | `theme_color:"#0056b3"` matches only the default theme; the app has 5 CSS themes (dark/AMOLED/light/sepia/forest) with different accents, and the manifest/meta tag don't track the active one. Cosmetic only. |
| Icons | **Already fine, verified** | All 8 sizes present with both `any` and `maskable` purposes, files confirmed to exist. |
| Shortcuts | **Already fine, verified** | `resume.html`, `src/prometric/exam.html`, `pages/drug-calculator.html` all resolve to real, existing files, and all three are confirmed present in `precache-manifest.js` (the earlier "broken offline shortcut" bug from this project's history is fixed). |
| Screenshots | **Already fine, verified** | All 9 referenced files exist; 6 phone (780×1688) + 3 tablet (1920×1200) — reasonable per-form-factor coverage. |
| `protocol_handlers`/`share_target`/`file_handlers` | **Gap, not a bug** | All absent — feature opportunity, not required. |

## 4. Service Worker (`sw.js`)

- **Already fixed this session:** all three caching strategies now protect background cache writes with `event.waitUntil()`; two dead message-handler cases removed; a broken absolute SW-registration path in `404.html` fixed; stray BOM removed.
- **No cache eviction/quota handling** — **confirmed gap, not fixed.** Cache-first/SWR/network-first all write indefinitely with no size-based pruning or `navigator.storage.estimate()` check. Not an outright bug, but a real unbounded-growth risk for a PWA meant for long-term offline use.
- **Update flow is dismissible, not forced** — `initSWUpdateToast` (app.js, index.html) only surfaces a toast; a user can ignore it indefinitely and keep studying from a stale SW version. Reasonable UX tradeoff, but worth knowing this is a real path to stale medical content persisting (also noted in `docs/production-readiness-audit-2026-07.md`).
- **Forced reload on update** — `clients.claim()` + `controllerchange` → `window.location.reload()` (app.js, index.html) means once a user clicks "Refresh," every open tab hard-reloads at once. In-progress quiz state is saved continuously to localStorage, so this isn't data loss, but it is an abrupt UX interruption worth knowing about.

## 5. Security

Full findings above under "Fixed during this audit." Beyond the XSS:

| Finding | Severity | Evidence |
|---|---|---|
| CSP present on only 16 of ~50 HTML pages | **Real gap, partially addressed** | 34 pages ship with no CSP meta tag at all, including `signup.html`, `privacy.html`, `ecg.html`, `src/prometric/exam.html`, `404.html`, and most tool/course pages. Added a CSP to `med-index.html` as part of this audit (the page that had the XSS); the remaining 33 pages are unaddressed — recommend rolling the same policy out repo-wide as a follow-up. |
| `'unsafe-inline'` on script-src and style-src | **Known, pre-existing, not newly introduced** | `index.html`'s CSP: `script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'`. Weakens CSP's script-injection protection significantly. Fixing requires moving all inline `<script>`/`<style>` to external files or adding nonces — a larger refactor, tracked as a known gap in `docs/production-readiness-audit-2026-07.md`, not attempted here. |
| No `frame-ancestors` directive | **Minor** | Clickjacking isn't mitigated via the meta CSP (meta CSP can't set `frame-ancestors` at all — it requires an HTTP header, which the static GitHub Pages deploy doesn't send). `server.py` does set `X-Frame-Options: DENY`, but that only applies when Flask-served, not to the public static site. |
| Self-XSS via Google avatar URL | **Low risk, not fixed** | `pages/login.html:373-374` inserts `user_metadata.avatar_url` (Google-controlled) into `innerHTML` unescaped. Low practical risk since it's not attacker-controlled in the normal flow, but should use `esc()`/set `.src` as a DOM property as defense-in-depth. |
| Admin auth | **Already fine, verified** | Real server-side enforcement in `supabase/functions/_shared/admin.ts` (`requireAdmin`, bearer-token verification + `ADMIN_EMAILS` allowlist) — the client-side check in `admin.html` is explicitly commented as "UX shortcut, not the security boundary." Not security-through-obscurity. |
| Hidden admin-unlock gesture | **Cosmetic clutter, not fixed** | `pages/login.html:536-568` — a 4-tap-logo + PIN gesture (PIN checked via SHA-256, not plaintext) to reach `admin.html`. Harmless since real auth is server-enforced regardless, but unnecessary and worth removing for code cleanliness. |
| No exposed secrets | **Already fine, verified** | Supabase key in `pages/supabase-config.js` is the public "publishable" key (RLS-protected by design), not a service-role key. `SECRET_KEY`/`SUPABASE_SERVICE_ROLE_KEY` in `server.py` are correctly environment-sourced with no hardcoded fallback value. No `eval`/`document.write`/`new Function` anywhere outside `vendor/`. |

## 6. Privacy

- **Already fine, verified:** `pages/privacy.html` is thorough — lists every collection point (account email/password, Google OAuth, server audit logs incl. IP, localStorage study data, third-party CDN/font loads), states data isn't sold/used for ad profiling, has a retention policy and children's-privacy section. Reachable at a stable URL suitable for the Play Console link.
- **Should improve, not fixed:** the policy never explicitly states "we do not collect PHI/patient data." Given the health-worker audience, an explicit one-line statement would preempt reviewer scrutiny even though it's technically implied by the itemized list.
- **Already fine, verified:** account creation is optional (`pages/login.html:289` "Continue without signing in"); in-app account deletion is real and functional (`pages/login.html`, audit-logged) — satisfies Play's account-deletion requirement.
- **Was "deployment-dependent risk," CONFIRMED BROKEN IN PRODUCTION, NOW FIXED:** the shipped Play Store build points at the static GitHub Pages mirror only, with no Flask backend deployed anywhere reachable from the client — so account deletion (which called `server.py`'s `DELETE /api/account`) was silently failing for every real user. Fixed via a new `supabase/functions/self-delete-account` Edge Function; see "Fixed in this follow-up pass" above.

## 7. Accessibility

| Finding | Severity | Evidence |
|---|---|---|
| Footer contrast failure, default dark theme | **New confirmed bug, FIXED** | `styles.css`'s footer computed to ≈2.07:1 against WCAG AA's 4.5:1 minimum. Fixed with a dedicated `--footer-text` token, dark/default theme only (per owner decision, the other 4 themes weren't audited for the same bug). See "Fixed in this follow-up pass" above. |
| No `Escape`-to-close on the app-shell drawer/stats modal | **Real gap, not fixed** | `index.html`'s settings drawer (877-890) and stats modal (1579-1652) only close via click-outside or an explicit close button — no `Escape` handler, unlike most tool pages (GCS.html, ecg.html, etc., which do have one). No focus-trap either — Tab can move focus out of an open overlay into the page behind it. |
| Touch targets under Play's ~48dp guideline | **Minor, not fixed** | `styles.css:1863` `.close-drawer-btn` is 20px tall; `pages/ecg.html` has several 20-28px controls (theme swatches, close buttons). |
| `prefers-reduced-motion` inconsistently applied | **Minor, not fixed** | Implemented in `styles.css` only; the ~20 pages with large inline `<style>` blocks (drug-calculator, GCS, ecg, admin, courses, etc.) don't guard their own animations/transitions. |
| Zoom/scaling | **Already fine, verified** | No `user-scalable=no` or `maximum-scale` found in any viewport meta tag across the entire repo — zoom is not restricted anywhere. |
| alt text / aria-label | **Already fine, verified** | Spot-checked index.html and a sample of chapters/pages — no missing `alt`, icon-only buttons consistently carry `aria-label`. |

## 8. Performance

- **Oversized assets, not fixed:** several PWA splash/screenshot PNGs are 200-430KB (`splash/splash-2048x2732.png` 431KB, `images/screenshots/tablet-drugcalc.png` 405KB) — not multi-MB, but good compression/WebP candidates. `icons/icon.png` and `icons/icon-512x512.png` are byte-identical duplicates (294KB each) — one could be a symlink/reference to the other.
- **Large per-page inline `<style>` blocks, not fixed:** `pages/courses.html` (1271 lines), `pages/admin.html` (638), `pages/GCS.html` (368), `pages/ecg.html` (308), `pages/drug-calculator.html` (197) — each duplicates common button/modal/theme rules rather than sharing `styles.css`. This is the same category of problem the `exam-review.css` extraction already solved for the 8 exam pages; these five are candidates for the same treatment.
- **Render-blocking head scripts, not fixed:** `pages/ecg.html`, `pages/drug-calculator.html`, `pages/admin.html`, `pages/courses.html` load their main JS without `defer`/`async`.
- **`src/prometric/exam-db.json` is 1.83MB, loaded as a single file** — no chunking/lazy-loading found, unlike `content/*.json` which is already split per chapter/section (30-56KB each).
- **Dependencies:** `package.json`/`requirements.txt` are lean and intentional — no unused dependencies found.

## 9. Offline Experience

- **Already fine, verified:** `tests/offline.spec.js` covers zero pre-cache failures, key pages loading offline (including `pages/drug-calculator.html`), vendored third-party assets (Chart.js/Supabase/FontAwesome) working offline, and the full exam engine/question banks (the two historical bugs this test guards — `GCS.html` missing from precache, and the `src/` non-recursive glob — are both confirmed fixed).
- **Already fine, verified:** all 3 manifest shortcuts (`resume.html`, `pages/drug-calculator.html`, `src/prometric/exam.html`) are present in `precache-manifest.js` — no gap between what the manifest promises and what's actually cached.
- **Already fine, verified:** no hardcoded absolute-origin URLs in `sw.js` or `precache-manifest.js` — a different deploy path wouldn't break the service worker's own logic (the `id` field mismatch in §3 is a manifest-level issue, not a service-worker one).

## 10. Medical Content

- Content governance infrastructure (added this session) is in place: `src/content-manifest.json` tracks `review_status` per question bank — currently **all banks are honestly marked "unreviewed."** This is infrastructure, not a substitute for actual clinical review — flagging again here because it's the single biggest medical-quality gap and belongs in a store-readiness report: **no clinician has signed off on any exam content yet.**
- No diagnostic/treatment claims found in marketing or app copy (see §1).
- Recommend: before Play submission, get at least the highest-traffic banks (BLS, ACLS, PALS) reviewed by a real clinician and update `content-manifest.json` accordingly — an unreviewed medical-education app is a soft credibility/liability risk even if not an explicit Play policy blocker.

## 11. Repository Hygiene

| Finding | Severity | Evidence |
|---|---|---|
| 103MB `pdf_sections/` committed to git history | **New finding, reviewed, DEFERRED by owner** | `pdf_sections/7 BDLS EXAM.pdf` (3.16MB) and ~120 similar files are fully committed. Combined with large PNGs in history (`algorithms/Pediatric-BLS-Single-Rescuer.png` 5.37MB, `.graphify/graph.json` 4.15MB — a dev-tool cache file that shouldn't be tracked at all, several `icons/courses/*.png` at 2-3MB), this is most of why the git pack is ~109MB. Not a Pages/Play blocker per se, but worth a git-history cleanup and image compression pass eventually. Owner chose to skip any git-history rewrite for now, including the non-destructive `git rm --cached` option. |
| Duplicate icon files | **Minor** | `icons/icon-512x512.png` and `icons/icon.png` are byte-identical. |
| Orphaned page still in sitemap | **New finding, reviewed, DEFERRED by owner** | `sitemap.xml` lists `pages/drug-index.html` — a page with zero internal links (confirmed orphaned in a prior audit) — search engines are still being told to index a page nothing links to. `pages/signup.html` (the other known orphan) is correctly *not* in the sitemap. Owner chose to leave both the page and its sitemap entry as-is for now. |
| `[SW] ...` console logging ships to every user | **Minor, not fixed** | `sw.js` has several intentional diagnostic `console.log` calls (install/activate/cache-hit logging) — reasonable for debugging, but will spam every production user's console. Consider gating behind a debug flag before submission. |
| `.gitignore` / `.pagesignore` | **Already fine, verified** | Both comprehensive. `.pagesignore` correctly excludes `server.py`, `requirements.txt`, `instance/`, `supabase/` (edge functions), `tests/`, `scripts/`, `.env*`, secrets-adjacent files, **and `docs/`** — confirming this audit report and the other internal audit docs will **not** be published to the live site. |
| No merge-conflict markers, no temp files | **Already fine, verified** | Clean. |

## 12. GitHub Pages

- **Already fine, verified:** `.github/workflows/static.yml`'s rsync + `.pagesignore` correctly excludes everything sensitive/internal (backend code, secrets, docs, dev tooling) from the published site.
- **New finding, FIXED:** `.github/workflows/ci.yml` now has `permissions: contents: read` at the workflow level, matching `static.yml`'s least-privilege pattern (which additionally needs `pages: write`/`id-token: write` for its deploy job — `ci.yml` doesn't). See "Fixed in this follow-up pass" above.
- **Already fine, verified:** `robots.txt` and `sitemap.xml` are internally consistent (robots.txt references the sitemap correctly; `pages/admin.html` is deliberately not disallowed, relying on its own noindex meta instead, which is a defensible, documented choice).

---

## Priority Summary

**Fixed in this audit:**
1. Reflected XSS in `pages/med-index.html` (critical) + added CSP to that page.

**Fixed in the follow-up pass:**
1. Account deletion silently broken in production (turned out to be a confirmed bug, not just a risk) — moved to a Supabase Edge Function.
2. Fixed `manifest.json`'s `id` field (`/` → `/SmartCare/`).
3. Removed "official" wording from `pages/ITLS-course.html`.
4. Fixed the footer contrast failure in `styles.css` (dark/default theme).
5. Added `permissions: contents: read` to `.github/workflows/ci.yml`.

**Explicitly reviewed and deferred by owner decision (not fixed):**
- Remove `pages/drug-index.html` from `sitemap.xml`.
- Git-history cleanup for `pdf_sections/` and oversized committed PNGs.

**Larger, worth scoping separately:**
- Roll CSP out to the remaining ~33 pages that have none.
- Get at least the top 3 exam banks clinically reviewed and marked as such in `content-manifest.json`.
- Extract the 5 remaining large inline `<style>` blocks the same way `exam-review.css` was extracted.
