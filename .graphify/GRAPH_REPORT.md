# Graph Report - .  (2026-06-29)

## Corpus Check
- 46 files · ~404,438 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 532 nodes · 2458 edges · 30 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 1629 · PARENT_OF: 296 · MODIFIES: 216 · calls: 124 · method: 98 · contains: 74 · rationale_for: 19 · imports_from: 1 · inherits: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 46 · Candidates: 579
- Excluded: 1 untracked · 14536 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `39cc6bb`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `ExamEngine` - 62 edges
2. `_register()` - 19 edges
3. `_login()` - 13 edges
4. `TestRegister` - 11 edges
5. `TestAdminUsers` - 7 edges
6. `switchSection()` - 5 edges
7. `setMainContent()` - 5 edges
8. `TestLogin` - 5 edges
9. `TestCsrfGuard` - 5 edges
10. `renderComingSoon()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `0245fab update: refresh PWA icons and favicon from new source image` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 24 → community 8_
- `0245fab update: refresh PWA icons and favicon from new source image` --PARENT_OF--> `411adfd update: refresh PWA icons from updated source image`  [EXTRACTED]
  git → git  _Bridges community 24 → community 10_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/checkout-7`  [EXTRACTED]
  git → git  _Bridges community 21 → community 5_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-node-6`  [EXTRACTED]
  git → git  _Bridges community 21 → community 7_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-python-6`  [EXTRACTED]
  git → git  _Bridges community 21 → community 6_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (61): feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt, 03f6898 Update sw.js, 061bcae local hashed authentication (SHA-256)✅, 07ec89d Update index.html, 0801c55 Update styles.css, 0b92e14 Create ems-tools.html ✅ (+53 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (21): bootApp(), handleScroll(), initBatteryIndicator(), initBottomNav(), initChapterPage(), initFooterAwareNav(), recordLastVisited(), renderComingSoon() (+13 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (10): _login(), Both bad-user and bad-password return the same message (anti-enumeration)., Anonymous access to the admin API must be denied (no PII leak)., A signed-in non-admin must be forbidden (broken-access-control fix)., An authenticated admin (role == 'Admin') can list users., _register(), TestAdminUsers, TestAuditLogging (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (26): dependabot/pip/pytest-9.1.1, 0588b95 Update styles.css ✅, 1571a9d Assessment  Added ✅, 2455787 Update index.html 💊, 2f06b84 fix text contrast: bump text-secondary for readability; add dark-theme overrides for 404 page, 395d37d Update ems-tools.html ▶️, 3af30ad Update styles.css, 411163c Create itls.html 🚑 (+18 more)

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (25): dependabot/github_actions/actions/checkout-7, 05fc83d fix: re-disable auth guard on courses page (was accidentally uncommented), 11207b4 chore: add playwright-report and test-results to .gitignore, 2146843 chore: untrack playwright-report and test-results artifacts, 26da0f4 Add read-only question database audit report, 273600c chore: ignore run-debug.mjs scratch script, 2fabb59 fix(exam): use innerHTML for SVG pass/fail indicator in prometric exam engine, 3fa0113 Merge pull request #22 from SolimanAnas/claude/exam-lucide-migration-fix-lqj1ni (+17 more)

### Community 6 - "Community 6"
Cohesion: 0.15
Nodes (25): dependabot/github_actions/actions/setup-python-6, 03d0cad Update ecg.html, 0a26180 Update ecg-engine.js, 1041e6c major updates ✅🔥🧠, 13162ef Unified Style✅⭐, 15cf55d Update ecg-engine.js, 176d264 Add files via upload, 26ac1b0 new index with pdf (+17 more)

### Community 7 - "Community 7"
Cohesion: 0.16
Nodes (24): dependabot/github_actions/actions/setup-node-6, 1312361 deps(deps): bump flask-limiter from 3.9.0 to 4.1.1 (#6), 2a89ecb fix(ui): add kbd key styling, clean up footer hint separators, 4b1c0d6 Added Courses ✅▶️✅, 56597b4 Update EMPACT course link to point to empact.html, 5678531 deps(deps-dev): update setuptools requirement from >=64.0 to >=82.0.1 (#7), 5a25785 deps(deps): bump werkzeug from 3.1.6 to 3.1.8 (#3), 69ad320 deps(deps): bump requests from 2.33.0 to 2.34.2 (#2) (+16 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (23): main, 05bf1a8 Update courses.html 👍, 0e6242c Add files via upload, 291f913 Answers Corrected ✅, 292c5bc Major Updates ✅❤️🔥, 3e20e20 Answers Corrected ✅, 3e89f41 Answers Corrected ✅, 3fca031 Answers Corrected ✅ (+15 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (21): dependabot/pip/google-auth-2.55.1, 2521a89 style: resize action-button Lucide icons to 1.5em inline accent size, 2875fd1 feat: continue learning card, thicker progress bars, meaningful progress display, dedicated count badges, 39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pages, 3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner arrows, FAB icons, timer, sort, and pass/fail SVGs, 3d93108 Delete server.py, 65d9e73 Secure SDLC Phase 3: mandatory SDLC documentation set, 676c33f CI pipeline (+13 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (16): 18fb7dc Added ├── .well-known/, 1a56d75 feat: graphify rebuild with descriptions + interactive file map view, 40d423a Remove unused admin/login/signup pages, 411adfd update: refresh PWA icons from updated source image, 4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co), 5b988aa Create .nojekyll, 67cd1eb fix: update contact email and all URLs in privacy policy, 829a86d update: refresh PWA icons from new22.png + bump SW cache version (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.15
Nodes (16): 266c2ed Add server.py and server.bat to .gitignore, 354c93e fix: restore server.py to repo (CI needs it for tests and Bandit), 8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-opening-x5wiwa, e2bc409 fix: allow cdn.jsdelivr.net in CSP and make Chart.js load non-fatal, _audit(), create_app(), Write a structured audit record for auth and admin events., Return an error string, or None if valid. (+8 more)

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (10): 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 8541abe chore: Change index page title from landing page to clinical learning platform, 92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CPG reference in login/signup views, 98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5, 9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curriculum, d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js (+2 more)

### Community 13 - "Community 13"
Cohesion: 0.13
Nodes (1): b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum

### Community 14 - "Community 14"
Cohesion: 0.43
Nodes (6): 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 323b8fc feat: migrate to Lucide SVG sprite system, 4e04344 feat: migrate to Lucide SVG sprite system, 5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for symptomatic bradycardia, 77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency, c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS strings

### Community 15 - "Community 15"
Cohesion: 0.17
Nodes (7): 4999b7f swot-its-compliance-GaiuJ, ff0d1a1 feat: add /api/health probe and API/deployment docs, Smoke tests for the SmartCare Flask API., TestGoogleLogin, TestHealthCheck, TestIndex, TestLogout

### Community 16 - "Community 16"
Cohesion: 0.20
Nodes (10): 0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/, 224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1, 755284c ci(deps)(deps): bump actions/checkout from 4 to 7, cb7e171 deps(deps): bump pytest from 9.0.3 to 9.1.1, cd24fea ci(deps)(deps): bump actions/setup-python from 5 to 6, f954558 ci(deps)(deps): bump actions/setup-node from 4 to 6, esc(), gen_chapter() (+2 more)

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (8): 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next, 0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS fixes from 0dad921, 1eee11b create exam-2.html — redesigned exam page using CPG-2025 style, 557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as subject, 5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mobile tab test, beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wizard-badge; remove unused --score-pct, ccd6185 fix(ui): shrink fixed buttons on mobile, add screen padding to prevent overlap, default to tutor mode

### Community 18 - "Community 18"
Cohesion: 0.22
Nodes (9): 095f95c Update ecg.html, 4dc6572 Update ecg.html, 507d93f Create ecg-engine.js, 54ba860 👍, 8684d3f Update ecg.html, a89445c Update print statement from 'Hello' to 'Goodbye', b0c29ce ✅✅, d616807 👍 (+1 more)

### Community 19 - "Community 19"
Cohesion: 0.28
Nodes (7): 8f311cd Merge branch 'main' of https://github.com/SolimanAnas/CPG-2025, 99cd25c Organized the Repo, Fixing all the links, create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 20 - "Community 20"
Cohesion: 0.22
Nodes (5): A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard., TestCsrfGuard

### Community 21 - "Community 21"
Cohesion: 0.25
Nodes (8): 0275018 layout fix 🔥, 059df1b SOP updated 🔥✅, 32fc6da new index, 5fdcd4e Update index-new.html, 7bf2e84 SOP revised ✅🔥, 8bcf3b4 updated the index with drug formulary 💊✅, 8c58bcd Update print statement from 'Hello' to 'Goodbye', c56c024 Drug formulary fully added💊✅

### Community 22 - "Community 22"
Cohesion: 0.38
Nodes (3): 1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI, 2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection, 9b50145 Secure SDLC Phase 2: password policy, rate limiting, audit logging

### Community 23 - "Community 23"
Cohesion: 0.47
Nodes (5): assemble(), extract_sections(), main(), Extract section objects from a TOC section file.      The file has the pattern:, Assemble a complete chapter JS file.

### Community 24 - "Community 24"
Cohesion: 0.40
Nodes (5): 0245fab update: refresh PWA icons and favicon from new source image, 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 6c55b58 fix: sync section-header & continue-label colors with index.html section-label, 7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in courses.html, ff409d5 fix: match section-header style to index.html section-label

### Community 25 - "Community 25"
Cohesion: 0.50
Nodes (4): 0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg, 24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr), 39cc6bb fix: remove extra '})' causing syntax error in login.html, 7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supabase docs, prometric planner

### Community 26 - "Community 26"
Cohesion: 0.50
Nodes (4): _admin_emails(), _is_admin(), Allow-list of admin emails sourced from the environment (no hard-coding)., A user is an admin if their role is 'Admin' or they are allow-listed.

### Community 27 - "Community 27"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 28 - "Community 28"
Cohesion: 0.67
Nodes (1): TestSecurityHeaders

### Community 29 - "Community 29"
Cohesion: 1.00
Nodes (1): PAGES

## Knowledge Gaps
- **22 isolated node(s):** `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in`, `Creates the necessary src/COURSE folders.`, `Replaces placeholders in the template with course-specific data.` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 0`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (1 nodes): `b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `TestSecurityHeaders`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `PAGES`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEngine` connect `Community 0` to `Community 17`?**
  _High betweenness centrality (0.216) - this node is a cross-community bridge._
- **Why does `_register()` connect `Community 3` to `Community 15`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `TestCsrfGuard` connect `Community 20` to `Community 15`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06980433632998413 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09562841530054644 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06951219512195123 - nodes in this community are weakly interconnected._