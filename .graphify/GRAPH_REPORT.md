# Graph Report - .  (2026-06-27)

## Corpus Check
- 42 files · ~351,038 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 481 nodes · 2342 edges · 24 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 1600 · PARENT_OF: 267 · MODIFIES: 183 · calls: 119 · method: 98 · contains: 61 · rationale_for: 14


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 42 · Candidates: 378
- Excluded: 119 untracked · 14433 ignored · 0 sensitive · 23 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `1fc629e`
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
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/checkout-7`  [EXTRACTED]
  git → git  _Bridges community 8 → community 11_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-node-6`  [EXTRACTED]
  git → git  _Bridges community 8 → community 5_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-python-6`  [EXTRACTED]
  git → git  _Bridges community 8 → community 6_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/pip/google-auth-2.55.1`  [EXTRACTED]
  git → git  _Bridges community 8 → community 10_
- `0275018 layout fix 🔥` --ON_BRANCH--> `feat/lucide-svg-migration`  [EXTRACTED]
  git → git  _Bridges community 8 → community 0_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (75): feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt, 03f6898 Update sw.js, 0588b95 Update styles.css ✅, 061bcae local hashed authentication (SHA-256)✅, 07ec89d Update index.html, 0801c55 Update styles.css (+67 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (37): 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/, 224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1, 323b8fc feat: migrate to Lucide SVG sprite system, 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 4e04344 feat: migrate to Lucide SVG sprite system, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for symptomatic bradycardia (+29 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (10): _login(), Both bad-user and bad-password return the same message (anti-enumeration)., Anonymous access to the admin API must be denied (no PII leak)., A signed-in non-admin must be forbidden (broken-access-control fix)., An authenticated admin (role == 'Admin') can list users., _register(), TestAdminUsers, TestAuditLogging (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (13): bootApp(), handleScroll(), initBatteryIndicator(), initBottomNav(), initChapterPage(), initFooterAwareNav(), recordLastVisited(), renderComingSoon() (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (26): dependabot/github_actions/actions/setup-node-6, 03d0cad Update ecg.html, 059df1b SOP updated 🔥✅, 1041e6c major updates ✅🔥🧠, 176d264 Add files via upload, 26ac1b0 new index with pdf, 2a89ecb fix(ui): add kbd key styling, clean up footer hint separators, 4adae54 Deleted redundant files 🗑️ (+18 more)

### Community 6 - "Community 6"
Cohesion: 0.18
Nodes (20): dependabot/github_actions/actions/setup-python-6, 13162ef Unified Style✅⭐, 1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI, 2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection, 3f23517 Delete instance/users.db, 46e3cd1 Add files via upload, 4999b7f swot-its-compliance-GaiuJ, 65d9e73 Secure SDLC Phase 3: mandatory SDLC documentation set (+12 more)

### Community 7 - "Community 7"
Cohesion: 0.16
Nodes (25): main, 095f95c Update ecg.html, 0a26180 Update ecg-engine.js, 15cf55d Update ecg-engine.js, 4b1c0d6 Added Courses ✅▶️✅, 4dc6572 Update ecg.html, 507d93f Create ecg-engine.js, 54ba860 👍 (+17 more)

### Community 8 - "Community 8"
Cohesion: 0.18
Nodes (22): dependabot/pip/pytest-9.1.1, 0275018 layout fix 🔥, 05bf1a8 Update courses.html 👍, 291f913 Answers Corrected ✅, 292c5bc Major Updates ✅❤️🔥, 32fc6da new index, 3e20e20 Answers Corrected ✅, 3e89f41 Answers Corrected ✅ (+14 more)

### Community 9 - "Community 9"
Cohesion: 0.16
Nodes (18): 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next, 0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS fixes from 0dad921, 0e6242c Add files via upload, 1eee11b create exam-2.html — redesigned exam page using CPG-2025 style, 266c2ed Add server.py and server.bat to .gitignore, 354c93e fix: restore server.py to repo (CI needs it for tests and Bandit), 557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as subject (+10 more)

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (17): dependabot/pip/google-auth-2.55.1, 1312361 deps(deps): bump flask-limiter from 3.9.0 to 4.1.1 (#6), 2f06b84 fix text contrast: bump text-secondary for readability; add dark-theme overrides for 404 page, 3d93108 Delete server.py, 5678531 deps(deps-dev): update setuptools requirement from >=64.0 to >=82.0.1 (#7), 5a25785 deps(deps): bump werkzeug from 3.1.6 to 3.1.8 (#3), 676c33f CI pipeline, 67cb179 Add files via upload (+9 more)

### Community 11 - "Community 11"
Cohesion: 0.23
Nodes (17): dependabot/github_actions/actions/checkout-7, 05fc83d fix: re-disable auth guard on courses page (was accidentally uncommented), 26da0f4 Add read-only question database audit report, 273600c chore: ignore run-debug.mjs scratch script, 4f69b7c Remove extra padding above search bar, 58e37c8 fix(css): collapse second multi-line SVG data URL in .exp-label::before across 8 pages, 6ad2e9f Add category-specific colors, improve icon contrast and badge visibility, 7fa4355 fix: resolve JS syntax errors in 5 content files (template literals, encoding, brace) (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (5): A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard., TestCsrfGuard

### Community 13 - "Community 13"
Cohesion: 0.32
Nodes (8): 11207b4 chore: add playwright-report and test-results to .gitignore, 2146843 chore: untrack playwright-report and test-results artifacts, 2fabb59 fix(exam): use innerHTML for SVG pass/fail indicator in prometric exam engine, 3fa0113 Merge pull request #22 from SolimanAnas/claude/exam-lucide-migration-fix-lqj1ni, 5b70a71 chore: bump SW cache to v5.3 after Lucide migration fixes, 99f095b fix: resolve mixed SVG quote mismatches in 3 content JS files, a90dc17 Merge branch 'claude/exam-lucide-migration-fix-lqj1ni' into main, d1c82f1 fix(sw): bump cache to v5.3 to force client refresh after Lucide migration fixes

### Community 14 - "Community 14"
Cohesion: 0.25
Nodes (8): 2521a89 style: resize action-button Lucide icons to 1.5em inline accent size, 2875fd1 feat: continue learning card, thicker progress bars, meaningful progress display, dedicated count badges, 39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pages, 3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner arrows, FAB icons, timer, sort, and pass/fail SVGs, 8ae8c29 refactor: compact course cards with search, filters, progress bars, and proper Lucide icons, a90c723 style: resize special-card icons to 20px inline beside headings, cc4574d style: claymorphic redesign of courses page with Figtree/Noto Sans typography and staggered entrance animation, e016fb6 fix: replace textContent with innerHTML for SVG icons across 9 exam pages prevents raw code rendering

### Community 15 - "Community 15"
Cohesion: 0.47
Nodes (5): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 16 - "Community 16"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 17 - "Community 17"
Cohesion: 1.00
Nodes (3): 28f8e2f docs: add Secure SDLC validation reports from security review, 70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports, 7761051 fix(ci): exclude reports/ from ruff lint

### Community 18 - "Community 18"
Cohesion: 0.67
Nodes (1): TestGoogleLogin

### Community 19 - "Community 19"
Cohesion: 0.67
Nodes (1): TestSecurityHeaders

### Community 20 - "Community 20"
Cohesion: 1.00
Nodes (1): PAGES

### Community 21 - "Community 21"
Cohesion: 1.00
Nodes (1): TestHealthCheck

### Community 22 - "Community 22"
Cohesion: 1.00
Nodes (1): TestIndex

### Community 23 - "Community 23"
Cohesion: 1.00
Nodes (1): TestLogout

## Knowledge Gaps
- **17 isolated node(s):** `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in`, `Creates the necessary src/COURSE folders.`, `Replaces placeholders in the template with course-specific data.` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 2`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `TestGoogleLogin`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `TestSecurityHeaders`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `PAGES`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `TestHealthCheck`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `TestIndex`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `TestLogout`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEngine` connect `Community 2` to `Community 9`?**
  _High betweenness centrality (0.237) - this node is a cross-community bridge._
- **Why does `_register()` connect `Community 3` to `Community 6`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `TestCsrfGuard` connect `Community 12` to `Community 6`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07783783783783783 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05117117117117117 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06980433632998413 - nodes in this community are weakly interconnected._