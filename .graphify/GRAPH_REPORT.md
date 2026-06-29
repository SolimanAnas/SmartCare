# Graph Report - .  (2026-06-29)

## Corpus Check
- 45 files · ~404,364 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 523 nodes · 2436 edges · 27 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 1620 · PARENT_OF: 287 · MODIFIES: 212 · calls: 124 · method: 98 · contains: 74 · rationale_for: 19 · imports_from: 1 · inherits: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 45 · Candidates: 562
- Excluded: 7 untracked · 14513 ignored · 0 sensitive · 15 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `40d423a`
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
  git → git  _Bridges community 3 → community 10_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/checkout-7`  [EXTRACTED]
  git → git  _Bridges community 20 → community 6_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-node-6`  [EXTRACTED]
  git → git  _Bridges community 20 → community 7_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/github_actions/actions/setup-python-6`  [EXTRACTED]
  git → git  _Bridges community 20 → community 9_
- `0275018 layout fix 🔥` --ON_BRANCH--> `dependabot/pip/google-auth-2.55.1`  [EXTRACTED]
  git → git  _Bridges community 20 → community 8_

## Communities

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (11): recordLastVisited(), initBatteryIndicator(), initChapterPage(), updateHeader(), renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav() (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.26
Nodes (8): PRE_CACHE, CACHE_FIRST_PATTERNS, 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 323b8fc feat: migrate to Lucide SVG sprite system, 4e04344 feat: migrate to Lucide SVG sprite system, 5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for symptomatic bradycardia, 77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency, c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS strings

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (10): 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 8541abe chore: Change index page title from landing page to clinical learning platform, 92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CPG reference in login/signup views, 98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5, 9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curriculum, d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (1): b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (24): load(), main(), 0245fab update: refresh PWA icons and favicon from new source image, 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 074617f feat: update chapter files with SEO and accessibility improvements, 18fb7dc Added ├── .well-known/, 1a00316 feat(itls): restructure itls course - replace static chapters with builder, 1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically injected chapters (+16 more)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (69): 006f9af Update requirements.txt, 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 03f6898 Update sw.js, 061bcae local hashed authentication (SHA-256)✅, 07ec89d Update index.html, 0801c55 Update styles.css, 093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next, 0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS fixes from 0dad921 (+61 more)

### Community 22 - "Community 22"
Cohesion: 0.47
Nodes (5): extract_sections(), assemble(), main(), Extract section objects from a TOC section file.      The file has the pattern:, Assemble a complete chapter JS file.

### Community 16 - "Community 16"
Cohesion: 0.20
Nodes (10): esc(), gen_chapter(), main(), Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in, 0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/, 224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1, 755284c ci(deps)(deps): bump actions/checkout from 4 to 7, cb7e171 deps(deps): bump pytest from 9.0.3 to 9.1.1 (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.28
Nodes (7): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data., 8f311cd Merge branch 'main' of https://github.com/SolimanAnas/CPG-2025, 99cd25c Organized the Repo, Fixing all the links

### Community 12 - "Community 12"
Cohesion: 0.15
Nodes (16): _audit(), _validate_email(), _validate_password(), create_app(), User, UserMixin, _register_routes(), _register_csrf_guard() (+8 more)

### Community 23 - "Community 23"
Cohesion: 0.50
Nodes (4): _admin_emails(), _is_admin(), Allow-list of admin emails sourced from the environment (no hard-coding)., A user is an admin if their role is 'Admin' or they are allow-listed.

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 26 - "Community 26"
Cohesion: 1.00
Nodes (1): PAGES

### Community 21 - "Community 21"
Cohesion: 0.38
Nodes (3): 1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI, 2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection, 9b50145 Secure SDLC Phase 2: password policy, rate limiting, audit logging

### Community 14 - "Community 14"
Cohesion: 0.15
Nodes (10): TestIndex, TestGoogleLogin, TestLogout, TestHealthCheck, Smoke tests for the SmartCare Flask API., 4999b7f swot-its-compliance-GaiuJ, 6dced57 chore(ci): remove claude/** branch trigger from CI, a831ff4 Merge pull request #8 from SolimanAnas/ports/health-and-docs (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (10): _register(), _login(), TestRegister, TestLogin, TestAdminUsers, TestAuditLogging, Both bad-user and bad-password return the same message (anti-enumeration)., Anonymous access to the admin API must be denied (no PII leak). (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.67
Nodes (1): TestSecurityHeaders

### Community 19 - "Community 19"
Cohesion: 0.22
Nodes (5): TestCsrfGuard, A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard.

### Community 24 - "Community 24"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 20 - "Community 20"
Cohesion: 0.25
Nodes (8): 0275018 layout fix 🔥, 05bf1a8 Update courses.html 👍, 32fc6da new index, 5fdcd4e Update index-new.html, 8c58bcd Update print statement from 'Hello' to 'Goodbye', 91e2637 old index to be Stats page 📊, b359745 Update courses.html, ccc75ec Update index-new.html

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (24): 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 0a26180 Update ecg-engine.js, 1041e6c major updates ✅🔥🧠, 15cf55d Update ecg-engine.js, 2455787 Update index.html 💊, 26a1bc4 Adding O2 Cylinder Calculator ✅, 395d37d Update ems-tools.html ▶️ (+16 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (20): 059df1b SOP updated 🔥✅, 13162ef Unified Style✅⭐, 176d264 Add files via upload, 26ac1b0 new index with pdf, 3f23517 Delete instance/users.db, 46e3cd1 Add files via upload, 4adae54 Deleted redundant files 🗑️, 4cb7238 New index with pdf (+12 more)

### Community 9 - "Community 9"
Cohesion: 0.18
Nodes (21): 05fc83d fix: re-disable auth guard on courses page (was accidentally uncommented), 1eee11b create exam-2.html — redesigned exam page using CPG-2025 style, 26da0f4 Add read-only question database audit report, 273600c chore: ignore run-debug.mjs scratch script, 2f06b84 fix text contrast: bump text-secondary for readability; add dark-theme overrides for 404 page, 4f69b7c Remove extra padding above search bar, 58e37c8 fix(css): collapse second multi-line SVG data URL in .exp-label::before across 8 pages, 5dada8e replace exams.html with exam.html; update all references (+13 more)

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (9): 095f95c Update ecg.html, 4dc6572 Update ecg.html, 507d93f Create ecg-engine.js, 54ba860 👍, 8684d3f Update ecg.html, a89445c Update print statement from 'Hello' to 'Goodbye', b0c29ce ✅✅, d616807 👍 (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (27): 0e6242c Add files via upload, 291f913 Answers Corrected ✅, 292c5bc Major Updates ✅❤️🔥, 3d93108 Delete server.py, 3e20e20 Answers Corrected ✅, 3e89f41 Answers Corrected ✅, 3fca031 Answers Corrected ✅, 676c33f CI pipeline (+19 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (24): 11207b4 chore: add playwright-report and test-results to .gitignore, 1312361 deps(deps): bump flask-limiter from 3.9.0 to 4.1.1 (#6), 2146843 chore: untrack playwright-report and test-results artifacts, 2521a89 style: resize action-button Lucide icons to 1.5em inline accent size, 2875fd1 feat: continue learning card, thicker progress bars, meaningful progress display, dedicated count badges, 2fabb59 fix(exam): use innerHTML for SVG pass/fail indicator in prometric exam engine, 39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pages, 3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner arrows, FAB icons, timer, sort, and pass/fail SVGs (+16 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (25): 1571a9d Assessment  Added ✅, 411163c Create itls.html 🚑, 4b1c0d6 Added Courses ✅▶️✅, 53c6b6d ❤️❤️❤️, 56597b4 Update EMPACT course link to point to empact.html, 6574552 Update drug-data.json 🔥, 6c69061 Update empact.html, 7000b0d Update itls.html (+17 more)

## Knowledge Gaps
- **22 isolated node(s):** `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in`, `Creates the necessary src/COURSE folders.`, `Replaces placeholders in the template with course-specific data.` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 15`** (1 nodes): `b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 1`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `PAGES`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `TestSecurityHeaders`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEngine` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.219) - this node is a cross-community bridge._
- **Why does `_register()` connect `Community 2` to `Community 14`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `TestCsrfGuard` connect `Community 19` to `Community 14`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 15` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.07586206896551724 - nodes in this community are weakly interconnected._