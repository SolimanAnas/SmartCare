# Graph Report - .  (2026-11-04)

## Corpus Check
- Large corpus: 156 files · ~657,702 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 2459 nodes · 7851 edges · 99 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 2452 · calls: 2121 · contains: 1197 · MODIFIES: 825 · PARENT_OF: 593 · method: 558 · rationale_for: 62 · uses: 16 · imports: 15 · imports_from: 7 · references: 2 · inherits: 1 · reads_from: 1 · triggers: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 156 · Candidates: 2094
- Excluded: 100 untracked · 15211 ignored · 0 sensitive · 11 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `564422f`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `tn` - 124 edges
2. `y()` - 76 edges
3. `ExamEngine` - 62 edges
4. `n()` - 61 edges
5. `js` - 54 edges
6. `_returnResult()` - 44 edges
7. `m()` - 42 edges
8. `s()` - 34 edges
9. `o()` - 33 edges
10. `constructor()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `33 s store-listing cut: the real app on screen from the first frame, core loop i` --uses--> `Bokeh`  [INFERRED]
  promo/megacode/scripts/compose.py → promo/megacode/scripts/compose_lib.py
- `33 s store-listing cut: the real app on screen from the first frame, core loop i` --uses--> `Capture`  [INFERRED]
  promo/megacode/scripts/compose.py → promo/megacode/scripts/compose_lib.py
- `Narration as burned-in captions (the store autoplays muted), split by sentence a` --uses--> `Bokeh`  [INFERRED]
  promo/megacode/scripts/compose.py → promo/megacode/scripts/compose_lib.py
- `Narration as burned-in captions (the store autoplays muted), split by sentence a` --uses--> `Capture`  [INFERRED]
  promo/megacode/scripts/compose.py → promo/megacode/scripts/compose_lib.py
- `Output times of the engine's shock cues (noise bursts) — drives flash + impact.` --uses--> `Bokeh`  [INFERRED]
  promo/megacode/scripts/compose.py → promo/megacode/scripts/compose_lib.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (67): add(), ajax(), an(), appendParams(), batchSend(), Ci(), clone(), Cs() (+59 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (122): dependabot/github_actions/actions/checkout-7, dependabot/github_actions/actions/setup-node-6, dependabot/github_actions/actions/setup-python-6, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, 0275018 layout fix 🔥, 03d0cad Update ecg.html, 059df1b SOP updated 🔥✅ (+114 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (96): build(), _cancelPendingDisconnect(), cancelRefEvent(), cancelTimeout(), canPush(), channel(), clearHeartbeats(), close() (+88 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (93): _adminDeletePasskey(), _adminListPasskeys(), _approveAuthorization(), _authenticate(), _challenge(), _challengeAndVerify(), _createCustomProvider(), createNewAbortSignal() (+85 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (73): feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt, 03f6898 Update sw.js, 0588b95 Update styles.css ✅, 061bcae local hashed authentication (SHA-256)✅, 07ec89d Update index.html, 0801c55 Update styles.css (+65 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (14): ca, da(), dataset(), dt(), fn(), gn(), ln(), n() (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (46): load(), main(), load(), main(), worktree-pr85-supabase-deploy, 0555934 Author PEPP chapters c09-c11 (trauma, toxic/environmental, neonatal), 154f42d Merge pull request #25 BLS reviewer, 179984f Scaffold PEPP reviewer (courses/pepp) with c01-c02 content (+38 more)

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (54): main, 0245fab update: refresh PWA icons and favicon from new source image, 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg, 074617f feat: update chapter files with SEO and accessibility improvements, 18fb7dc Added ├── .well-known/, 1a56d75 feat: graphify rebuild with descriptions + interactive file map view, 24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr) (+46 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (23): addBox(), afterDraw(), afterUpdate(), Ba(), f(), g(), ki(), m() (+15 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (47): 1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI, 2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection, 266c2ed Add server.py and server.bat to .gitignore, 28f8e2f docs: add Secure SDLC validation reports from security review, 2e2f605 Ship the Security section from the v2.0 roadmap audit, 354c93e fix: restore server.py to repo (CI needs it for tests and Bandit), 4999b7f swot-its-compliance-GaiuJ, 5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit (+39 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (46): guide-images, 1c05231 Fix layout issues found in a mobile audit of all pages, 2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes, 312f7b9 PR #46 Audience levels, 3f751ad Regenerate precache-manifest.js after final page edits, 5cfcb95 PR #55 fix Home ring, 5f7bbc6 PR #45 Update Log in & Supabase, 6018c48 PR #57 MCI Exam 1 (+38 more)

### Community 12 - "Community 12"
Cohesion: 0.11
Nodes (32): 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 7543d58 Add illustrations to the chapter and formulary guides, 8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries, 98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5, 9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curriculum, a4deb03 Merge pull request #8 from SolimanAnas/claude/chapters-html-summary-fixes (+24 more)

### Community 13 - "Community 13"
Cohesion: 0.05
Nodes (17): beforeLayout(), cn(), et(), Fs(), getRange(), Go(), hn(), _i() (+9 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (44): _binaryDecode(), binaryEncode(), _binaryEncodeUserBroadcastPush(), cloneRequestState(), containedBy(), contains(), decode(), decodeBroadcast() (+36 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (41): ccr-b58d9c43-7az2tj, 05afd15 Cap IV diazepam and midazolam seizure doses at 10 mg per dose (AES), 07b10be Hypertonic saline: separate hyponatraemic seizure dosing from the TBI dose, 123b1c0 Chapter 10 rewrite: Clinical Procedures & Skills ✅, 1b4fd7d PR #42 Add animated dose-calculator illustration to calculator pages, 1bd0a15 PR #38 medications-cleanup-xnuh0i, 2550192 PR #37 Medications update, 396b4ed fix: remove all DCAS branding, fix license ISC→MIT, update package.json URLs to SmartCare (+33 more)

### Community 16 - "Community 16"
Cohesion: 0.08
Nodes (13): an(), ao(), co(), Do(), eo(), inXRange(), inYRange(), Oe() (+5 more)

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (14): _auth(), _login(), A completely ordinary (non-admin) signed-in user can delete themself., Both bad-user and bad-password return the same message (anti-enumeration)., There is no id parameter on this route — it can only ever delete         the ac, Anonymous access to the admin API must be denied (no PII leak)., A signed-in non-admin must be forbidden (broken-access-control fix)., An authenticated admin (role == 'Admin') can list users. (+6 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (34): 1ca0f65 Ship the High priority list from the mid-cycle audit, 3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅, 503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks, 53ec4c1 Merge pull request #16 ✅, 5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes, 69ad055 Merge pull request #17 html Clean-up🗑️, 83a1ea8 Ship the Offline & PWA section from the v2.0 roadmap audit, 94235c6 Ship the critical hardening list from the mid-cycle audit (+26 more)

### Community 19 - "Community 19"
Cohesion: 0.08
Nodes (9): b(), _generate(), _getTimestampsForTable(), ho(), lt(), nt(), rn(), Vo() (+1 more)

### Community 20 - "Community 20"
Cohesion: 0.06
Nodes (17): a(), aa(), afterDatasetsUpdate(), Be(), bo, determineDataLimits(), Di(), getValueForPixel() (+9 more)

### Community 21 - "Community 21"
Cohesion: 0.06
Nodes (31): ANATOMY, batches, byId, chapters, counted, csv, entries, famOrder (+23 more)

### Community 22 - "Community 22"
Cohesion: 0.08
Nodes (15): Bt(), Ee(), Ft(), Gt(), It(), jt(), kt(), Le() (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.07
Nodes (34): copy(), createBucket(), createIndex(), createSignedUploadUrl(), createSignedUrl(), createSignedUrls(), deleteBucket(), deleteIndex() (+26 more)

### Community 24 - "Community 24"
Cohesion: 0.07
Nodes (1): tn

### Community 25 - "Community 25"
Cohesion: 0.08
Nodes (24): actions(), calPulse(), card(), E, esc(), fs, grid(), KEEP_HTML (+16 more)

### Community 26 - "Community 26"
Cohesion: 0.09
Nodes (28): camera_view(), card(), chip(), draw_tracked(), ease(), font(), grade(), gradient_bg() (+20 more)

### Community 27 - "Community 27"
Cohesion: 0.08
Nodes (25): { chromium }, dataUri(), ecgPath(), fs, ICON, OUT, path, PREV (+17 more)

### Community 28 - "Community 28"
Cohesion: 0.16
Nodes (28): app_events(), build_edit(), build_edit_play(), cam_at(), cap_of(), clk(), debrief_card(), _disclaimer() (+20 more)

### Community 29 - "Community 29"
Cohesion: 0.11
Nodes (12): bootApp(), handleScroll(), initBatteryIndicator(), initBottomNav(), initChapterPage(), initFooterAwareNav(), initScrollReveal(), recordLastVisited() (+4 more)

### Community 30 - "Community 30"
Cohesion: 0.12
Nodes (4): addElements(), en, sn, w()

### Community 31 - "Community 31"
Cohesion: 0.10
Nodes (4): as(), rs(), ts(), xt

### Community 32 - "Community 32"
Cohesion: 0.12
Nodes (27): catch(), createNamespace(), createNamespaceIfNotExists(), createTable(), createTableIfNotExists(), ct(), dropNamespace(), dropTable() (+19 more)

### Community 33 - "Community 33"
Cohesion: 0.09
Nodes (17): ct(), e(), ei(), es(), ge(), generateLabels(), is(), ks() (+9 more)

### Community 34 - "Community 34"
Cohesion: 0.15
Nodes (25): _acquireLock(), _autoRefreshTokenTick(), bt(), _callRefreshToken(), _debug(), delete(), dispose(), _getSessionFromURL() (+17 more)

### Community 35 - "Community 35"
Cohesion: 0.17
Nodes (23): 0159986 Chapter 5 rewrite: Medical Emergencies ✅, 1116a68 Chapter 8 rewrite: Environmental & Disaster ✅, 14bac52 Rewrite chapter 9 (Emergency Pharmacology) as guides, 2ac796c Pulmonary edema gate: CPAP only when awake, protecting the airway and not vomiting, 35ac666 Rewrite chapter 5 (Medical Emergencies) as guides, 54bf4f2 Chapter 1 rewrite: Foundations of Care ✅, 5e168b5 Chapter 7 Update : Special Populations ✅, 63e2100 Chapter 4 rewrite: Cardiovascular & Resuscitation (+15 more)

### Community 36 - "Community 36"
Cohesion: 0.13
Nodes (18): 0673752 PR #67 Homepage Redesigned ✨, 18ca925 Wrap a long line in the guide content test (ruff E501), 582a9d8 Chapter 3 rewrite  ✅, 6026b7a Redesign the home page: courses and exams first, quick tools, chapter groups with topics, 6bcfae8 Infant choking: chest thrusts with the heel of one hand (AHA 2025), 7208d8e Rewrite chapter 3 (Airway & Ventilation) as guides; guide renderer and fact checks, bd1c53b Thinner greeting card; key, tooltips and labels for the row action icons, svg() (+10 more)

### Community 37 - "Community 37"
Cohesion: 0.10
Nodes (24): bi(), bs(), constructor(), getChannel(), _initRealtimeClient(), _initSupabaseAuthClient(), ki(), _listenForAuthEvents() (+16 more)

### Community 38 - "Community 38"
Cohesion: 0.15
Nodes (14): 05dca1e Add Google Play preview cut of the Megacode promo, 2a5f204 Add SmartCare Megacode cinematic promo (promo/megacode/), 7421ea4 Megacode cinematic promo, { chromium }, open(), path, { open }, { chromium } (+6 more)

### Community 39 - "Community 39"
Cohesion: 0.22
Nodes (22): app_sound(), bp(), env(), foley_tap(), hp(), impact(), lp(), main() (+14 more)

### Community 40 - "Community 40"
Cohesion: 0.13
Nodes (1): js

### Community 41 - "Community 41"
Cohesion: 0.17
Nodes (16): 106f200 Add MCI exam page with final exam and generated practice bank, 22c0924 Add MCI (Mass Casualty Incident) course reviewer with timed drills, 2c06261 Remove Respiratory Patterns tab from index.html, 2e4d5a6 MCI: Officer roles with two-row tabs and swipe between roles, 7dcb4bd Merge pull request #61 from SolimanAnas/ccr-d2edeac7-v6zk4b, 81f95d0 ⭐PR #60 Unified Course Design star ⭐, c254251 Exam pages: one design for every course, on a shared engine, c5c0567 Exam pages: Practice / Exam modes; MCI's third bank is Exam 3 (+8 more)

### Community 42 - "Community 42"
Cohesion: 0.13
Nodes (14): batchArg, click(), controls(), done(), idsArg, isDone(), jobs, limited (+6 more)

### Community 43 - "Community 43"
Cohesion: 0.14
Nodes (12): captions(), Bokeh, Capture, Out-of-focus clinical lights drifting slowly — a stylised resuscitation-bay back, Frames + manifest of one recorded layout (land / vert)., Narration as burned-in captions (the store autoplays muted), split by sentence a, Output times of the engine's shock cues (noise bursts) — drives flash + impact., Map the tapped Web Audio events into output time through the edit. (+4 more)

### Community 44 - "Community 44"
Cohesion: 0.16
Nodes (2): d(), Pn()

### Community 45 - "Community 45"
Cohesion: 0.12
Nodes (20): applyTransformOptsToQuery(), cr(), download(), execute(), exists(), ft(), _getFinalPath(), getPublicUrl() (+12 more)

### Community 46 - "Community 46"
Cohesion: 0.32
Nodes (13): 2c020d4 Remove the Flask server; move account deletion to a Supabase Edge Function, 393a5b0 Drop ProxyFix: server.py is a local dev server, not deployed behind a proxy, 7c821ae Merge pull request #14 Admin dashboard ✅, 85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI, badddb6 Harden static file serving, admin identity check and client IP handling, AdminCaller, adminEmails(), ALLOWED_ORIGINS (+5 more)

### Community 47 - "Community 47"
Cohesion: 0.20
Nodes (14): 0366711 ECG Fixed ✅ Crisp waveform ⭐, 07b8707 Show BDLS pre-test first in exam bank pickers, 1378508 Add BDLS v3.0 pre-test question bank, 17232c9 Fix Ruff lint failure in Megacode promo scripts, 2b928c2 ECG Simulator: downloadable rhythm reference PDF, 437e8d4 Merge pull request #66  ECG, 55997db ECG Simulator: easy mode, visible rhythm picker, advanced toggle, 6663113 PR #63 Update ECG simulator (+6 more)

### Community 48 - "Community 48"
Cohesion: 0.18
Nodes (13): advance(), ANSWERS, auto(), click(), frame(), fs, hold(), { open } (+5 more)

### Community 49 - "Community 49"
Cohesion: 0.16
Nodes (15): beforeDatasetDraw(), beforeDatasetsDraw(), ea(), fa(), ga(), ia(), je(), ma() (+7 more)

### Community 50 - "Community 50"
Cohesion: 0.15
Nodes (8): Bi(), Fi(), gi(), io(), na(), no(), oo, zi()

### Community 51 - "Community 51"
Cohesion: 0.20
Nodes (1): ke()

### Community 52 - "Community 52"
Cohesion: 0.21
Nodes (14): 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next, 0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS fixes from 0dad921, 1eee11b create exam-2.html — redesigned exam page using CPG-2025 style, 2a89ecb fix(ui): add kbd key styling, clean up footer hint separators, 557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as subject, 5dada8e replace exams.html with exam.html; update all references, 5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mobile tab test (+6 more)

### Community 53 - "Community 53"
Cohesion: 0.13
Nodes (9): A plain-form request to an /api/ endpoint must be rejected (CSRF)., A request missing X-Requested-With must be rejected., A well-formed request with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard (only auth applies)., A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard. (+1 more)

### Community 54 - "Community 54"
Cohesion: 0.18
Nodes (9): 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 1a00316 feat(itls): restructure itls course - replace static chapters with builder, 1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically injected chapters, 20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and generate all 22 chapters, 7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in courses.html, a4df22b fix: resolve CI lint failure and remove orphaned files, c9276ae chore: update graphify knowledge graph, load() (+1 more)

### Community 55 - "Community 55"
Cohesion: 0.28
Nodes (12): load_json_lenient(), load_known_single_option(), main(), question_core_fields(), Extract (text, options, correct_answer) regardless of which of the     bank's s, Several banks were authored with a UTF-8 BOM; browsers' fetch().json()     tole, rel(), validate_bank_content() (+4 more)

### Community 56 - "Community 56"
Cohesion: 0.22
Nodes (5): Bn(), _calculateBarValuePixels(), getLabelAndValue(), getPixelForValue(), updateElements()

### Community 57 - "Community 57"
Cohesion: 0.32
Nodes (2): 662adfb Ship the Performance section from the v2.0 roadmap audit, 829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐

### Community 58 - "Community 58"
Cohesion: 0.17
Nodes (9): counts, fs, generated, head, [iId, iTrack, iStatus, iNotes], log, out, { picks, notes, needs_pro_rerun: rerun } (+1 more)

### Community 59 - "Community 59"
Cohesion: 0.17
Nodes (11): ai(), beforeDraw(), draw(), fo(), getMaxOverflow(), hi(), li(), q() (+3 more)

### Community 60 - "Community 60"
Cohesion: 0.26
Nodes (3): ce(), de, he()

### Community 61 - "Community 61"
Cohesion: 0.24
Nodes (11): getCenterPoint(), index(), inRange(), nearest(), Re(), to(), tooltipPosition(), Ui() (+3 more)

### Community 62 - "Community 62"
Cohesion: 0.20
Nodes (1): Ie()

### Community 63 - "Community 63"
Cohesion: 0.21
Nodes (1): u()

### Community 64 - "Community 64"
Cohesion: 0.20
Nodes (9): 0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/, 224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1, 755284c ci(deps)(deps): bump actions/checkout from 4 to 7, a431503 Create static.yml, cb7e171 deps(deps): bump pytest from 9.0.3 to 9.1.1, cd24fea ci(deps)(deps): bump actions/setup-python from 5 to 6, ee58d7a content: deploy chapters 1-5 with full NREMT-aligned EMT curriculum, f954558 ci(deps)(deps): bump actions/setup-node from 4 to 6 (+1 more)

### Community 65 - "Community 65"
Cohesion: 0.33
Nodes (6): 1543337 Fix raw markup in Last Visited, extend homepage search to sub-chapters, harden sw.js, 301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' by app.js, not 'ts'), 817a4bf Merge pull request #23 Fixed: reflected XSS, 81d920a Fix reflected XSS in med-index.html, add Google Play production audit, 8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅, f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)

### Community 66 - "Community 66"
Cohesion: 0.31
Nodes (8): _calculateBarIndexPixels(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getRuler(), _getStackCount(), _getStackIndex(), _getStacks()

### Community 67 - "Community 67"
Cohesion: 0.22
Nodes (7): jn(), l(), Ls(), parse(), parseObjectData(), po(), resolveDataElementOptions()

### Community 68 - "Community 68"
Cohesion: 0.25
Nodes (7): 564422f Sync graphify updates and unignore google-flow, 9724717 Add google-flow workspace and sync with remote, d35441e Add google-flow workspace and sync with remote, [from, to], limited, MODELS, names

### Community 69 - "Community 69"
Cohesion: 0.25
Nodes (8): CHAPTER_IDS, CONTENT_DIR, fs, loadChapterData(), main(), path, ROOT, vm

### Community 70 - "Community 70"
Cohesion: 0.22
Nodes (6): buildTicks(), init(), mo(), parseArrayData(), parsePrimitiveData(), Vn()

### Community 71 - "Community 71"
Cohesion: 0.22
Nodes (2): Ci(), initialize()

### Community 72 - "Community 72"
Cohesion: 0.22
Nodes (1): hs

### Community 73 - "Community 73"
Cohesion: 0.32
Nodes (3): 1fa9c3a Run Playwright tests in parallel, afeb5dc feat: Run Playwright tests in parallel⭐, { test, expect }

### Community 74 - "Community 74"
Cohesion: 0.29
Nodes (2): kn(), qn()

### Community 75 - "Community 75"
Cohesion: 0.25
Nodes (1): Y()

### Community 76 - "Community 76"
Cohesion: 0.48
Nodes (6): contrast(), hex_to_rgb(), luminance(), main(), parse_themes(), Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.

### Community 78 - "Community 78"
Cohesion: 0.47
Nodes (5): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 79 - "Community 79"
Cohesion: 0.67
Nodes (5): escapeHtml(), icon(), renderEmptyOrError(), renderLoading(), renderState()

### Community 80 - "Community 80"
Cohesion: 0.40
Nodes (1): onClick()

### Community 81 - "Community 81"
Cohesion: 0.70
Nodes (4): auth.users, on_auth_user_created, public.handle_new_user(), public.profiles

### Community 82 - "Community 82"
Cohesion: 0.50
Nodes (5): Abort with 503/401 unless the caller has a valid Supabase session.     Returns, Resolve a Supabase access token (from the browser's session) to     {id, email}, _require_supabase_user(), _supabase_admin_configured(), _supabase_user_from_token()

### Community 83 - "Community 83"
Cohesion: 0.50
Nodes (2): current(), next()

### Community 84 - "Community 84"
Cohesion: 0.60
Nodes (4): _chapter_counts(), pages/courses.html progress bars divide chapters viewed by a hard-coded chapter, test_every_reviewer_course_has_a_chapter_count(), test_reviewer_chapter_counts_match_manifests()

### Community 85 - "Community 85"
Cohesion: 0.40
Nodes (2): Ae(), Gs()

### Community 86 - "Community 86"
Cohesion: 0.40
Nodes (2): at(), rt()

### Community 87 - "Community 87"
Cohesion: 0.40
Nodes (3): ha(), la(), tt()

### Community 88 - "Community 88"
Cohesion: 0.50
Nodes (4): 3d93108 Delete server.py, 9beafed Add files via upload, b5d9b21 Add files via upload, bb6bd37 Add files via upload

### Community 89 - "Community 89"
Cohesion: 0.50
Nodes (4): _admin_emails(), _is_admin(), Allow-list of admin emails sourced from the environment (no hard-coding)., A user is an admin if their role is 'Admin' or they are allow-listed.

### Community 90 - "Community 90"
Cohesion: 0.50
Nodes (1): _FakeResp

### Community 91 - "Community 91"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 92 - "Community 92"
Cohesion: 0.50
Nodes (4): buildLookupTable(), getDecimalForValue(), initOffsets(), jo()

### Community 93 - "Community 93"
Cohesion: 0.50
Nodes (3): dn(), fe(), ps()

### Community 94 - "Community 94"
Cohesion: 1.00
Nodes (2): load(), main()

### Community 95 - "Community 95"
Cohesion: 1.00
Nodes (2): load(), main()

### Community 96 - "Community 96"
Cohesion: 0.67
Nodes (3): _audit(), Write a structured audit record for auth and admin events., Write a structured audit record for auth and admin events.

### Community 97 - "Community 97"
Cohesion: 0.67
Nodes (1): TestGoogleLogin

### Community 98 - "Community 98"
Cohesion: 0.67
Nodes (1): TestSecurityHeaders

### Community 99 - "Community 99"
Cohesion: 0.67
Nodes (1): cs

## Knowledge Gaps
- **172 isolated node(s):** `fs`, `path`, `OUT`, `SVG`, `REUSE` (+167 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `tn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (2 nodes): `d()`, `Pn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `ke()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (2 nodes): `662adfb Ship the Performance section from the v2.0 roadmap audit`, `829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `Ie()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `u()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (2 nodes): `Ci()`, `initialize()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `hs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (2 nodes): `kn()`, `qn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `Y()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `onClick()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 83`** (2 nodes): `current()`, `next()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (2 nodes): `Ae()`, `Gs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (2 nodes): `at()`, `rt()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `_FakeResp`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 91`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (2 nodes): `load()`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (2 nodes): `load()`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (1 nodes): `TestGoogleLogin`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (1 nodes): `TestSecurityHeaders`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (1 nodes): `cs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tn` connect `Community 24` to `Community 13`, `Community 44`, `Community 16`, `Community 63`, `Community 74`, `Community 75`, `Community 51`, `Community 85`, `Community 62`, `Community 5`, `Community 9`, `Community 71`, `Community 20`, `Community 70`, `Community 19`, `Community 33`, `Community 56`, `Community 80`, `Community 100`, `Community 61`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Why does `ExamEngine` connect `Community 6` to `Community 52`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `js` connect `Community 40` to `Community 13`, `Community 86`, `Community 56`, `Community 5`, `Community 19`, `Community 71`, `Community 66`, `Community 67`, `Community 77`, `Community 100`, `Community 20`, `Community 70`, `Community 74`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `fs`, `path`, `OUT` to the rest of the system?**
  _172 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.020760534429599176 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09497358081560764 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.03684210526315789 - nodes in this community are weakly interconnected._