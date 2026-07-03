# SmartCare — Fresh Production Audit (July 2026)

**TL;DR:** SmartCare is an advanced side project crossing into professional territory — but it is **not yet production-ready for thousands of clinicians**. The three gates: the offline promise is broken for the core exam content (question banks under `src/` are never precached), the medical-safety layer is thin (no disclaimer on the drug/GCS/exam pages, zero content review metadata in 121 JSON files), and the medical tools themselves have zero functional test coverage. Overall maturity: **~58%**.

This is a from-scratch audit, deliberately independent of `docs/upgrades.md` and `docs/audit-v2-2026-07.md` — it judges the current implementation only, not progress against any prior roadmap. Method note: it was produced by six parallel deep-audit passes (architecture/state, security/Supabase, offline/PWA, testing/CI, accessibility/medical content, dead code) that read the actual files — every finding below has file:line evidence behind it.

---

## Phase 2 — Production Readiness Scores

| Area | /100 | Why |
|---|---|---|
| Architecture | 58 | Coherent no-build philosophy, clean vendoring — but **three parallel exam engines** (`app.js` chapter quizzes, `pages/exam-review.js`, `src/prometric/exam.js` at 1,257 lines), ~2,300 lines of inline JS/CSS still in `index.html` (1,080 JS + 453 CSS) and `courses.html` (1,270 CSS), no module system, manual script load-order. |
| Maintainability | 55 | `escapeHtml` exists in **5 diverged copies** (empact's doesn't escape quotes), the SW-update toast is copy-pasted 4×, `timeAgo` 3×, and there are **8+ different localStorage spellings for "current theme"** (`theme`, `smartcare-theme`, `ecg-theme`, `ecg-test-theme`, `ecgcourse-theme`, `empact-theme`, `examTheme`, `${EXAM_ID}-theme`). |
| Security | 66 | RLS is correctly per-user, admin Edge Functions are properly gated, no secrets committed, all deps vendored. But **30 of 32 pages ship with no CSP at all** on GitHub Pages, every CSP variant that does exist has `'unsafe-inline'`, `src/prometric/exam.js` has 15+ raw `innerHTML` interpolations with no escaping, and `user_state.data` (jsonb) has **no size limit** — any user can upsert unbounded blobs. |
| Accessibility | 48 | The ARIA pass was real but narrow. **No focus trap exists anywhere** (aria-modal attributes without the behavior), the exam pages' `--muted` text **fails WCAG AA in all four themes** (2.83:1–4.38:1, needs 4.5:1), and admin.html (1,265 lines) has exactly 1 aria-label. Many pages: 0/0/0. |
| Performance | 72 | Small payloads, vendored deps, lazy chapters, deferred Chart.js. Inline blobs defeat HTML caching; no size budget in CI. |
| Offline reliability | 62 | The SW design is sound (SWR + content-hash versioning, correct cache cleanup). But `build_precache.py`'s `src` glob is **non-recursive**, so no question bank (`src/ACLS/acls.json`…) and none of the prometric engine is precached — first visit offline **fails on the app's core content**. Worse: `manifest.json` defines a home-screen shortcut to `src/prometric/exam.html`, which isn't precached — an installed-app shortcut that 404s offline. Precache failures and quota errors are silently swallowed (`Promise.allSettled`, no `QuotaExceededError` handling). |
| Medical safety | 45 | The weakest pillar. Zero `version`/`reviewer`/`review_date` fields in any of 121 content JSON files; schemas are inconsistent (BLS bank has no `explanation` field at all); the educational disclaimer exists on about.html but is **not linked from drug-calculator, GCS, or any exam page** (they have no footer). Mitigating fact: the "drug calculator" is actually a static lookup table (no weight input, no live math) — lower calculation risk, but its dose strings are unverifiable with no review metadata. The update toast has no forced path, so a user who ignores it keeps **stale medical content indefinitely** — a corrected answer key would never reach them. |
| Testing | 52 | 35 real tests + a working CI gate for precache staleness. But **zero functional coverage** of: drug calculator, GCS, the whole ECG suite, admin console, login/signup, and the sync/merge logic. The exam-flow spec only asserts "no console errors" (never asserts the exam actually rendered). ESLint misses `pages/*.js` (including `ecg-engine.js`, `drug-calculator.js`) and all 32 pages' inline scripts — the majority of app logic is unlinted. Prettier is `continue-on-error`. No `npm audit`, no Lighthouse, 4 fixed `waitForTimeout` sleeps. |
| UX | 65 | Exam UX is genuinely polished. But there are **three incompatible "take a quiz" paradigms** (different flagging mechanics, modals, results screens, theme sets — exam-review has `green`, main app has `amoled`/`forest`, prometric has neither), and **four different fetch-error patterns** with no global `onerror`/`unhandledrejection` fallback. |
| PWA quality | 68 | Complete icon set (any+maskable ×8 sizes), shortcuts, splash screens. But `manifest.json` `id: "/"` conflicts with the `/SmartCare/` deploy scope (app-identity bug on installed PWAs), iOS meta/splash tags exist **only on index.html**, and `theme_color` is one static value across a 5-theme app with theme-color meta on just 2 pages. |
| Google Play readiness | 70 | Already in closed testing; `assetlinks.json` is present; account deletion (a Play requirement) works. The shortcut-offline failure and the stale-content path are review-visible defects. |
| Apple App Store readiness | 35 | No wrapper (no Capacitor/PWABuilder/Bubblewrap artifacts), iOS install experience relies on a manifest Safari mostly ignores, splash tags on one page. Apple rejects thin web wrappers; this needs a real packaging effort. |
| Supabase architecture | 64 | Migrations as code, correct RLS, `SECURITY DEFINER` trigger pattern, admin gated via `ADMIN_EMAILS`. But the sync client has **no offline queue, no retry/backoff, no concurrent-tab handling** (two tabs can race on snapshot keys), all-or-nothing push, and the CORS helper allows any `localhost` origin in the production code path. |
| Documentation | 66 | Ops docs are solid (SUPABASE_SETUP, DEPLOYMENT); `upgrades.md` is a great changelog. Nothing explains the three-engine architecture, the theme-key situation, or how content is authored/validated. |
| Developer experience | 60 | Zero-build onboarding is genuinely easy. But most code is invisible to lint, module boundaries don't exist, and inline blobs make diffs painful. |

---

## Phase 3 — Problems Found (the hunt)

**Would hurt at 1M users first:**
1. **`user_state` unbounded jsonb** — no CHECK constraint, no client cap. At scale this is a storage-cost/DoS vector against your Supabase project from any authenticated account.
2. **In-memory rate limiting** (`server.py`, `memory://` default) — per-process, so with N gunicorn workers the real limit is N× the configured one; resets on restart.
3. **Sync race conditions** — no `storage`-event coordination between tabs; simultaneous syncs race on `SNAPSHOT_KEY`/`LAST_SYNC_KEY`. At scale, "my progress vanished" tickets.
4. **Silent SW degradation** — precache failures, 404s, and quota errors are all swallowed identically. On low-storage phones the app half-installs with zero signal. You'd never see it in telemetry either, because there is none.
5. **Stale-forever medical content** — deferring the update toast indefinitely means a corrected answer key never ships to that device.

**Correctness/edge cases:**
- `networkFirst` cache writes are fire-and-forget after the response returns — a fast subsequent offline read can see the old copy.
- Cache-version hash only covers precached files; changes to the (many) non-precached `src/` files never bump the version.
- `index.html`'s `escapeHtml` has a truthy-check bug (`if(!s) return ''` eats `0`); empact's copy doesn't escape quotes (attribute-context XSS gap).
- No `?next=` deep-link after login — verified absent; login lands you back where the login page thinks you were.
- No session-expiry UX (SDK auto-refresh only; hard expiry silently fails).

**Browser/CSS:** `-webkit-` prefixes in use are all still-required Safari ones (this is fine, verified — no obsolete IE-era cruft found).

---

## Phase 4 — New Opportunities (none of these were in the old roadmap)

1. **"Download for offline" per exam** — instead of blindly precaching everything (quota risk), give each exam card an explicit offline toggle that caches its bank + engine, with a stored readiness state. Fixes the precache gap *and* respects low-storage devices.
2. **Unify the three exam engines** — the exam-review dedup proved the pattern; the prometric `ExamEngine` (1,257 lines) and the chapter-quiz code in `app.js` are the obvious next targets. Ends the 3-theme-key, 3-modal-pattern split as a side effect.
3. **Content JSON Schema validated in CI** — a schema per bank type; CI fails on a missing `correct_answer`, malformed options array, or unknown fields. This is the cheapest possible protection for the thing that actually matters (the medical content).
4. **Offline-readiness diagnostics page** — an in-app page that reads the SW caches and shows "cached ✓ / missing ✗" per section. Turns the silent-swallow problem into something users and testers can see, without adding telemetry.
5. **Stale-content policy** — stamp the precache manifest with a build date; the SW auto-activates a waiting version on the next cold start after N days. Bounded staleness for medical data, no nagging.
6. **Retire `server.py` entirely** — its only real route is account self-deletion, which fits an Edge Function. That deletes Flask/gunicorn/redis/Procfile and most of test_api.py, making the product fully static + Supabase.
7. **Shared dialog utility with a real focus trap** — one `<dialog>`-or-div module used by every modal; fixes the app-wide keyboard-escape problem in one place.
8. **Lint the dark matter** — add `pages/*.js` to the ESLint glob and adopt an HTML-aware lint pass for inline scripts; add `npm audit` and an axe-core scan to CI.
9. **Storage migration shim** — a tiny versioned migrator that renames the 8 theme keys and inconsistent progress keys to one namespace on first load, so consolidation doesn't wipe anyone's progress.
10. **Manifest identity fix bundle** — `id` aligned to scope, dynamic `<meta name="theme-color">` synced to the active theme, iOS tags propagated to all pages.

---

## Phase 5 — Delete Before You Build

| Target | Evidence | Payoff |
|---|---|---|
| `pages/drug-index.html` | 432 lines, **zero inbound links** (only precache references it) | dead page gone |
| `pages/signup.html` | 25 lines, zero inbound links (login never links it) | dead page gone |
| `.view-tab`/`.view-tabs` CSS + 3 override rules | styled class never applied anywhere (styles.css:1241-1302, index.html:565, exam-review.css:605, courses.html:1114) | ~20 dead lines across 4 files |
| `.lv-text` | styles.css:1881, markup uses `.lv-info` family | dead rule |
| 4× SW-toast copies → 1 | app.js:86, index.html:1792, courses.html:2018, 404.html:668 | ~60 lines, one behavior |
| 5× `escapeHtml` → 1 | incl. the buggy index.html copy and quote-blind empact copy | fixes 2 latent bugs by deletion |
| 3× `timeAgo`, 2× storage wrappers → 1 each | app.js / index.html / courses.html | duplication gone |
| `reports/*.py` (3 inspection scripts) | excluded from ruff, never scanned by bandit, look like one-off dev tools | confirm, then delete |
| `server.py` + Flask stack (after Edge Function migration) | see Phase 4 #6 | an entire deployment target removed |
| Eventually: `src/prometric/exam.js` | absorbed by engine unification | −1,257 lines |

The dead-code agent found **no** unused images, unused deps, TODO graveyards, or commented-out blocks — the prior slimming pass genuinely worked. What's left to delete is *structural* duplication, not junk files.

---

## Phase 6 — Product Audit by Persona

- **Clinician:** Impressed by the offline-first pitch and clean exam UX. Concerned that dose data has no visible source, review date, or edition — a working medic will not trust a dose card without provenance.
- **Nursing student:** Impressed by breadth (8 certs + chapters + ECG). Concerned that BLS questions have no explanations — wrong answers teach nothing there.
- **Paramedic / EMT:** Loves the home-screen shortcut to the prometric exam… which fails offline in an ambulance if never opened online first. That's the exact user this app is for.
- **Google Play reviewer:** Sees account deletion ✓, assetlinks ✓, closed testing ✓. Might trip over the manifest `id`/scope mismatch and the broken offline shortcut.
- **Apple reviewer:** Rejects it today — no wrapper, no native value-add, iOS meta on one page.
- **Security engineer:** Nods at RLS, vendoring, no secrets. Flags CSP absent on 94% of pages, `unsafe-inline` everywhere it exists, unescaped `innerHTML` in an exam engine, and tokens in localStorage.
- **Hospital IT:** Asks two questions: "Where's your PHI statement?" (privacy.html never explicitly says no-PHI) and "How do you push a corrected content update?" (you can't force one). Both currently unanswerable.
- **First-time user:** Impressed by polish and instant load. Confused when the ECG page, exam pages, and chapters each have different theme options and none remember each other's choice.

---

## Phase 7 — The Next Roadmap: Top 10 by ROI

1. **Fix the precache gap** — make the `src` glob recursive (or explicitly add the question banks + prometric files). Hours of work; repairs the product's central promise. *Highest ROI in the codebase.*
2. **Medical disclaimer on every clinical page** — one footer line + link on drug-calculator, GCS, and the 8 exam pages. Trivial effort, real legal exposure.
3. **Fix `--muted` contrast in exam-review.css** — 4 color tokens; clears WCAG AA on 8 pages.
4. **Escape `innerHTML` in `src/prometric/exam.js`** — adopt the shared `escapeHtml`; closes the defense-in-depth hole in the second exam engine.
5. **Utility consolidation + dead-code deletion** (Phase 5's list) — small, and it's the enabler for everything after.
6. **CSP meta tag on all 32 pages** — one consistent policy stamped into every head (the old roadmap left this incomplete; finishing it is cheap).
7. **`user_state` size guard** — a CHECK constraint migration + a client-side pre-push cap.
8. **Content JSON Schema + CI validation** — protects the medical content from structural rot forever after.
9. **Shared focus-trapping dialog module** — one fix, app-wide keyboard accessibility.
10. **Bounded-staleness update policy** — auto-activate waiting SW on cold start after N days; ends the stale-medical-content scenario.

Items 1–5 are collectively about a week of work and would move the audit scores more than anything else on the list.

---

## Phase 8 — Final Verdict

**What is SmartCare?** An **advanced side project on the cusp of being a professional product.** It is not a hobby project — real CI, real RLS, real deploy hygiene, a real Play Store track put it well past that. It is not yet production-ready software — a production medical-education app cannot ship with its core content un-precachable offline, no provenance on clinical data, and zero tests on its clinical tools. And enterprise-grade is a different sport (SLAs, telemetry, incident process, none of which exist here — reasonably, for now).

**Six months, no budget, my pick:** Weeks 1–2: the Top-5 quick wins above. Months 1–3: **one exam engine** — this single consolidation deletes ~1,500 net lines, unifies themes/storage/modals, and makes every future feature 3× cheaper. Months 3–6: the **content pipeline** — JSON Schema in CI, review/version metadata in every bank, explanations added to the banks missing them, and the bounded-staleness update policy. That sequence turns "an app with medical content in it" into "a medical content product with an app around it," which is what clinicians will actually trust.

**Maturity estimate:**

| Dimension | % |
|---|---|
| Architecture | 60 |
| Code Quality | 55 |
| Medical Quality | 45 |
| Reliability | 60 |
| Offline Capability | 62 |
| User Experience | 65 |
| Security | 66 |
| Testing | 50 |
| **Overall Product** | **~58%** |

Why 58 and not higher: the scores aren't dragged down by sloppiness — the repo is unusually clean for its style — they're dragged down by the gap between what the product *claims* (offline-first clinical study tool) and what the code *guarantees* (offline works only for pages you've already visited, content correctness rests on unversioned JSON nobody formally reviewed, and the clinical tools have never been exercised by a single automated test). Close that claims-vs-guarantees gap and this is legitimately a 75–80% product without adding a single new feature.
