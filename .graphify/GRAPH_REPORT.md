# Graph Report - .  (2026-11-16)

## Corpus Check
- Large corpus: 160 files · ~666,333 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 2519 nodes · 8285 edges · 125 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 2694 · calls: 2217 · contains: 1224 · MODIFIES: 871 · PARENT_OF: 645 · method: 550 · rationale_for: 38 · imports: 19 · uses: 16 · imports_from: 7 · references: 2 · reads_from: 1 · triggers: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 160 · Candidates: 2299
- Excluded: 0 untracked · 15399 ignored · 0 sensitive · 11 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `b30297c`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `tn` - 124 edges
2. `ExamEngine` - 101 edges
3. `y()` - 76 edges
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
Nodes (125): dependabot/github_actions/actions/checkout-7, dependabot/github_actions/actions/setup-node-6, dependabot/github_actions/actions/setup-python-6, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, 0275018 layout fix 🔥, 03d0cad Update ecg.html, 059df1b SOP updated 🔥✅ (+117 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (96): build(), _cancelPendingDisconnect(), cancelRefEvent(), cancelTimeout(), canPush(), channel(), clearHeartbeats(), close() (+88 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (93): _adminDeletePasskey(), _adminListPasskeys(), _approveAuthorization(), _authenticate(), _challenge(), _challengeAndVerify(), _createCustomProvider(), createNewAbortSignal() (+85 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (59): 1cf1fb1 Merge pull request #99 from SolimanAnas/guide-images-best, 294f48b Keep only the guide illustrations with no visible doubt, 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 49c0810 Add a baseline Content-Security-Policy to every published page, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 7543d58 Add illustrations to the chapter and formulary guides, 7c83637 CSP alignment 🛡️✅ (+51 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (66): main, 0245fab update: refresh PWA icons and favicon from new source image, 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg, 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 074617f feat: update chapter files with SEO and accessibility improvements, 18fb7dc Added ├── .well-known/, 1a56d75 feat: graphify rebuild with descriptions + interactive file map view (+58 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (74): feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt, 03f6898 Update sw.js, 0588b95 Update styles.css ✅, 061bcae local hashed authentication (SHA-256)✅, 07ec89d Update index.html, 0801c55 Update styles.css (+66 more)

### Community 7 - "Community 7"
Cohesion: 0.05
Nodes (14): ca, da(), dataset(), dt(), fn(), gn(), ln(), n() (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.06
Nodes (49): load(), main(), 0555934 Author PEPP chapters c09-c11 (trauma, toxic/environmental, neonatal), 179984f Scaffold PEPP reviewer (courses/pepp) with c01-c02 content, 20ed56a Integrate PEPP reviewer into platform, add Playwright coverage, 23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap), 27fd0d1 Author PEPP chapters c03-c04 (primary assessment, history/secondary assessment), 2b1ffb7 Port BDLS and EMPACT course reviewers onto a dedicated branch (+41 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (23): addBox(), afterDraw(), afterUpdate(), Ba(), f(), g(), ki(), m() (+15 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (40): app_events(), build_edit(), build_edit_play(), cam_at(), cap_of(), captions(), clk(), debrief_card() (+32 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (17): beforeLayout(), cn(), et(), Fs(), getRange(), Go(), hn(), _i() (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (44): _binaryDecode(), binaryEncode(), _binaryEncodeUserBroadcastPush(), cloneRequestState(), containedBy(), contains(), decode(), decodeBroadcast() (+36 more)

### Community 13 - "Community 13"
Cohesion: 0.08
Nodes (13): an(), ao(), co(), Do(), eo(), inXRange(), inYRange(), Oe() (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.10
Nodes (34): worktree-pr85-supabase-deploy, 05dca1e Add Google Play preview cut of the Megacode promo, 1ca0f65 Ship the High priority list from the mid-cycle audit, 2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes, 3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅, 503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks, 53ec4c1 Merge pull request #16 ✅, 5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes (+26 more)

### Community 15 - "Community 15"
Cohesion: 0.08
Nodes (9): b(), _generate(), _getTimestampsForTable(), ho(), lt(), nt(), rn(), Vo() (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.06
Nodes (17): a(), aa(), afterDatasetsUpdate(), Be(), bo, determineDataLimits(), Di(), getValueForPixel() (+9 more)

### Community 17 - "Community 17"
Cohesion: 0.06
Nodes (31): ANATOMY, batches, byId, chapters, counted, csv, entries, famOrder (+23 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (15): Bt(), Ee(), Ft(), Gt(), It(), jt(), kt(), Le() (+7 more)

### Community 19 - "Community 19"
Cohesion: 0.07
Nodes (34): copy(), createBucket(), createIndex(), createSignedUploadUrl(), createSignedUrl(), createSignedUrls(), deleteBucket(), deleteIndex() (+26 more)

### Community 20 - "Community 20"
Cohesion: 0.16
Nodes (31): ccr-b58d9c43-7az2tj, 0159986 Chapter 5 rewrite: Medical Emergencies ✅, 1116a68 Chapter 8 rewrite: Environmental & Disaster ✅, 14bac52 Rewrite chapter 9 (Emergency Pharmacology) as guides, 18ca925 Wrap a long line in the guide content test (ruff E501), 2ac796c Pulmonary edema gate: CPAP only when awake, protecting the airway and not vomiting, 35ac666 Rewrite chapter 5 (Medical Emergencies) as guides, 54bf4f2 Chapter 1 rewrite: Foundations of Care ✅ (+23 more)

### Community 21 - "Community 21"
Cohesion: 0.14
Nodes (30): 312f7b9 PR #46 Audience levels, 3f751ad Regenerate precache-manifest.js after final page edits, 5cfcb95 PR #55 fix Home ring, 5f7bbc6 PR #45 Update Log in & Supabase, 6018c48 PR #57 MCI Exam 1, 62386af PR #51 Megacode 3, 66b6296 Home: add a NEW corner ribbon to the ACLS Megacode button, 68635a5 Rename Prometric EMT Exam to Prometric Paramedic / EMT Exam (+22 more)

### Community 22 - "Community 22"
Cohesion: 0.07
Nodes (1): tn

### Community 23 - "Community 23"
Cohesion: 0.08
Nodes (24): actions(), calPulse(), card(), E, esc(), fs, grid(), KEEP_HTML (+16 more)

### Community 24 - "Community 24"
Cohesion: 0.11
Nodes (24): camera_view(), card(), chip(), draw_tracked(), ease(), font(), grade(), gradient_bg() (+16 more)

### Community 25 - "Community 25"
Cohesion: 0.13
Nodes (23): 106f200 Add MCI exam page with final exam and generated practice bank, 22c0924 Add MCI (Mass Casualty Incident) course reviewer with timed drills, 2c06261 Remove Respiratory Patterns tab from index.html, 2e4d5a6 MCI: Officer roles with two-row tabs and swipe between roles, 34eb824 Merge pull request #106 from MCI ✅, 7dcb4bd Merge pull request #61 from SolimanAnas/ccr-d2edeac7-v6zk4b, 81f95d0 ⭐PR #60 Unified Course Design star ⭐, 91ec300 Redesign the MCI START triage tool and add a flowchart quick reference (+15 more)

### Community 26 - "Community 26"
Cohesion: 0.12
Nodes (4): addElements(), en, sn, w()

### Community 27 - "Community 27"
Cohesion: 0.10
Nodes (4): as(), rs(), ts(), xt

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (27): catch(), createNamespace(), createNamespaceIfNotExists(), createTable(), createTableIfNotExists(), ct(), dropNamespace(), dropTable() (+19 more)

### Community 29 - "Community 29"
Cohesion: 0.20
Nodes (25): guide-images-best, 05afd15 Cap IV diazepam and midazolam seizure doses at 10 mg per dose (AES), 07b10be Hypertonic saline: separate hyponatraemic seizure dosing from the TBI dose, 123b1c0 Chapter 10 rewrite: Clinical Procedures & Skills ✅, 1b4fd7d PR #42 Add animated dose-calculator illustration to calculator pages, 1c05231 Fix layout issues found in a mobile audit of all pages, 393a5b0 Drop ProxyFix: server.py is a local dev server, not deployed behind a proxy, 3e50ecd Merge remote-tracking branch 'origin/main' into ccr-81fddd6b-wx4wsm (+17 more)

### Community 30 - "Community 30"
Cohesion: 0.18
Nodes (25): guide-images, 1bd0a15 PR #38 medications-cleanup-xnuh0i, 2550192 PR #37 Medications update, 396b4ed fix: remove all DCAS branding, fix license ISC→MIT, update package.json URLs to SmartCare, 467bf94 Restore full M1-38 medication formulary, de-branded from source, 639f5a4 PR #39 medications-cleanup-xnuh0i, 70e6861 Redesign Medication Index for mobile with animated theme toggle, 773db00 Update remaining formulary counts to 77 (+17 more)

### Community 31 - "Community 31"
Cohesion: 0.09
Nodes (17): ct(), e(), ei(), es(), ge(), generateLabels(), is(), ks() (+9 more)

### Community 32 - "Community 32"
Cohesion: 0.15
Nodes (25): _acquireLock(), _autoRefreshTokenTick(), bt(), _callRefreshToken(), _debug(), delete(), dispose(), _getSessionFromURL() (+17 more)

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (17): 2c020d4 Remove the Flask server; move account deletion to a Supabase Edge Function, 4c17ee2 Security fix #2 🛡️, 5bc6eff Security review: Remove the Flask server 🛡️, 7a36fde Tighten Edge Function CORS and cap user_state size, 7c821ae Merge pull request #14 Admin dashboard ✅, 85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI, a409382 Tighten Edge Function CORS and Size cap 1MB ✅🛡️, AdminCaller (+9 more)

### Community 34 - "Community 34"
Cohesion: 0.10
Nodes (24): bi(), bs(), constructor(), getChannel(), _initRealtimeClient(), _initSupabaseAuthClient(), ki(), _listenForAuthEvents() (+16 more)

### Community 35 - "Community 35"
Cohesion: 0.13
Nodes (22): 093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next, 0e6242c Add files via upload, 1eee11b create exam-2.html — redesigned exam page using CPG-2025 style, 557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as subject, 5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mobile tab test, 6ebda6a fix(ui): update Prometric question count to 2559 in courses.html, 7dfcee8 Updated the exam engine ❤️✅, 7e5c153 Updated the exam engine ✅ (+14 more)

### Community 36 - "Community 36"
Cohesion: 0.15
Nodes (1): ExamEngine

### Community 37 - "Community 37"
Cohesion: 0.22
Nodes (22): app_sound(), bp(), env(), foley_tap(), hp(), impact(), lp(), main() (+14 more)

### Community 38 - "Community 38"
Cohesion: 0.13
Nodes (1): js

### Community 39 - "Community 39"
Cohesion: 0.12
Nodes (19): 260450d Prometric question 721: protect the airway first, glucose second, 4736092 Clean up the Prometric question bank, 70f6354 Add 92 Disaster questions to the Prometric bank from the MCI course, 828970b Prometric Question Bank Updated ✅, c8226f9 Resolve the 22 flagged Prometric questions, c84b797 Question Bank Updated ✅✅, { chromium }, dataUri() (+11 more)

### Community 40 - "Community 40"
Cohesion: 0.14
Nodes (3): formatDuration(), formatNumber(), plural()

### Community 41 - "Community 41"
Cohesion: 0.13
Nodes (14): batchArg, click(), controls(), done(), idsArg, isDone(), jobs, limited (+6 more)

### Community 42 - "Community 42"
Cohesion: 0.16
Nodes (2): d(), Pn()

### Community 43 - "Community 43"
Cohesion: 0.12
Nodes (20): applyTransformOptsToQuery(), cr(), download(), execute(), exists(), ft(), _getFinalPath(), getPublicUrl() (+12 more)

### Community 44 - "Community 44"
Cohesion: 0.12
Nodes (3): initBatteryIndicator(), initChapterPage(), recordLastVisited()

### Community 45 - "Community 45"
Cohesion: 0.15
Nodes (16): 3cde249 Improved the prometric exam page ✅, 4c061e2 Fix the explanation and hint for Prometric question 55, 4fc5e35 Sync Prometric progress, follow the app theme, show hints, e340cb2 Reorganize the Prometric exam page and make it mobile friendly, argBase, { chromium }, FIXED_NOW, fs (+8 more)

### Community 46 - "Community 46"
Cohesion: 0.20
Nodes (14): 0366711 ECG Fixed ✅ Crisp waveform ⭐, 07b8707 Show BDLS pre-test first in exam bank pickers, 1378508 Add BDLS v3.0 pre-test question bank, 17232c9 Fix Ruff lint failure in Megacode promo scripts, 2b928c2 ECG Simulator: downloadable rhythm reference PDF, 437e8d4 Merge pull request #66  ECG, 55997db ECG Simulator: easy mode, visible rhythm picker, advanced toggle, 6663113 PR #63 Update ECG simulator (+6 more)

### Community 47 - "Community 47"
Cohesion: 0.21
Nodes (8): 2a5f204 Add SmartCare Megacode cinematic promo (promo/megacode/), 7421ea4 Megacode cinematic promo, { chromium }, open(), path, { open }, { chromium }, { open }

### Community 48 - "Community 48"
Cohesion: 0.28
Nodes (15): addExam(), clear(), compactExam(), compactHistory(), count(), loadExams(), loadHistory(), loadSetup() (+7 more)

### Community 49 - "Community 49"
Cohesion: 0.18
Nodes (13): advance(), ANSWERS, auto(), click(), frame(), fs, hold(), { open } (+5 more)

### Community 50 - "Community 50"
Cohesion: 0.16
Nodes (15): beforeDatasetDraw(), beforeDatasetsDraw(), ea(), fa(), ga(), ia(), je(), ma() (+7 more)

### Community 51 - "Community 51"
Cohesion: 0.15
Nodes (8): Bi(), Fi(), gi(), io(), na(), no(), oo, zi()

### Community 52 - "Community 52"
Cohesion: 0.20
Nodes (1): ke()

### Community 53 - "Community 53"
Cohesion: 0.22
Nodes (9): 0673752 PR #67 Homepage Redesigned ✨, 1543337 Fix raw markup in Last Visited, extend homepage search to sub-chapters, harden sw.js, 301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' by app.js, not 'ts'), 6026b7a Redesign the home page: courses and exams first, quick tools, chapter groups with topics, 817a4bf Merge pull request #23 Fixed: reflected XSS, 81d920a Fix reflected XSS in med-index.html, add Google Play production audit, 8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅, bd1c53b Thinner greeting card; key, tooltips and labels for the row action icons (+1 more)

### Community 55 - "Community 55"
Cohesion: 0.30
Nodes (13): autoShow(), build(), busy(), ensureHomeScreenMeta(), get(), hide(), inApp(), open() (+5 more)

### Community 56 - "Community 56"
Cohesion: 0.29
Nodes (3): 5f7c4f2 Merge pull request #12 Step 1&2 of V2 plan, 662adfb Ship the Performance section from the v2.0 roadmap audit, 829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐

### Community 57 - "Community 57"
Cohesion: 0.28
Nodes (12): load_json_lenient(), load_known_single_option(), main(), question_core_fields(), Extract (text, options, correct_answer) regardless of which of the     bank's s, Several banks were authored with a UTF-8 BOM; browsers' fetch().json()     tole, rel(), validate_bank_content() (+4 more)

### Community 58 - "Community 58"
Cohesion: 0.22
Nodes (5): Bn(), _calculateBarValuePixels(), getLabelAndValue(), getPixelForValue(), updateElements()

### Community 59 - "Community 59"
Cohesion: 0.21
Nodes (7): 1a00316 feat(itls): restructure itls course - replace static chapters with builder, 1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically injected chapters, 20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and generate all 22 chapters, a4df22b fix: resolve CI lint failure and remove orphaned files, c9276ae chore: update graphify knowledge graph, load(), main()

### Community 60 - "Community 60"
Cohesion: 0.20
Nodes (10): 4e4aac7 Sync graphify updates and unignore google-flow, 564422f Sync graphify updates and unignore google-flow, 9724717 Add google-flow workspace and sync with remote, b30297c Update google-flow outputs and graphify data, d35441e Add google-flow workspace and sync with remote, dc19fef Add google-flow workspace and sync with remote, [from, to], limited (+2 more)

### Community 61 - "Community 61"
Cohesion: 0.17
Nodes (9): counts, fs, generated, head, [iId, iTrack, iStatus, iNotes], log, out, { picks, notes, needs_pro_rerun: rerun } (+1 more)

### Community 63 - "Community 63"
Cohesion: 0.17
Nodes (11): ai(), beforeDraw(), draw(), fo(), getMaxOverflow(), hi(), li(), q() (+3 more)

### Community 64 - "Community 64"
Cohesion: 0.26
Nodes (3): ce(), de, he()

### Community 65 - "Community 65"
Cohesion: 0.24
Nodes (11): getCenterPoint(), index(), inRange(), nearest(), Re(), to(), tooltipPosition(), Ui() (+3 more)

### Community 66 - "Community 66"
Cohesion: 0.20
Nodes (1): Ie()

### Community 67 - "Community 67"
Cohesion: 0.21
Nodes (1): u()

### Community 68 - "Community 68"
Cohesion: 0.18
Nodes (11): 176d264 Add files via upload, 26ac1b0 new index with pdf, 4adae54 Deleted redundant files 🗑️, 4cb7238 New index with pdf, 6bae1b4 Add files via upload, 6c6b19b Drug formulary fully added ✅💊, 8bcf3b4 updated the index with drug formulary 💊✅, a21609c pdf 📖✅ (+3 more)

### Community 70 - "Community 70"
Cohesion: 0.31
Nodes (8): _calculateBarIndexPixels(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getRuler(), _getStackCount(), _getStackIndex(), _getStacks()

### Community 71 - "Community 71"
Cohesion: 0.22
Nodes (7): jn(), l(), Ls(), parse(), parseObjectData(), po(), resolveDataElementOptions()

### Community 72 - "Community 72"
Cohesion: 0.31
Nodes (9): bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav(), initScrollReveal(), renderComingSoon(), setMainContent(), switchSection() (+1 more)

### Community 73 - "Community 73"
Cohesion: 0.36
Nodes (7): load(), main(), 154f42d Merge pull request #25 BLS reviewer, 5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers, 82ff814 Add Playwright smoke test for BLS reviewer, e9a2970 Add agentic implementation plans for ACLS and PALS reviewers, f953366 PR #26 BLS-reviewer

### Community 74 - "Community 74"
Cohesion: 0.28
Nodes (9): 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS fixes from 0dad921, 266c2ed Add server.py and server.bat to .gitignore, 28f8e2f docs: add Secure SDLC validation reports from security review, 354c93e fix: restore server.py to repo (CI needs it for tests and Bandit), 70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports, 7761051 fix(ci): exclude reports/ from ruff lint, 8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-opening-x5wiwa (+1 more)

### Community 75 - "Community 75"
Cohesion: 0.25
Nodes (2): escapeHtml(), icon()

### Community 76 - "Community 76"
Cohesion: 0.31
Nodes (1): prefersReducedMotion()

### Community 77 - "Community 77"
Cohesion: 0.25
Nodes (8): CHAPTER_IDS, CONTENT_DIR, fs, loadChapterData(), main(), path, ROOT, vm

### Community 78 - "Community 78"
Cohesion: 0.22
Nodes (6): buildTicks(), init(), mo(), parseArrayData(), parsePrimitiveData(), Vn()

### Community 79 - "Community 79"
Cohesion: 0.22
Nodes (2): Ci(), initialize()

### Community 80 - "Community 80"
Cohesion: 0.22
Nodes (1): hs

### Community 81 - "Community 81"
Cohesion: 0.32
Nodes (8): 0bbed6c Make exam hint and explanation labels readable in every theme, 1aa1e5e Add hints and explanations to every BDLS pre-test question, 271b08b Exams: Finish/Submit 🏁, 6c92d35 Give the exam header room on phones, 94865e6 PR #103, BDLS pre-test hints & explanations✅, ac21f18 Add Google Play / Add to Home Screen install toast to the course pages, afd9a67 Merge remote-tracking branch 'origin/main' into ccr-8e7abc53-68tbbh, f2a7e76 Let every exam be finished and show its report

### Community 82 - "Community 82"
Cohesion: 0.32
Nodes (3): 1fa9c3a Run Playwright tests in parallel, afeb5dc feat: Run Playwright tests in parallel⭐, { test, expect }

### Community 84 - "Community 84"
Cohesion: 0.29
Nodes (2): kn(), qn()

### Community 85 - "Community 85"
Cohesion: 0.25
Nodes (1): Y()

### Community 86 - "Community 86"
Cohesion: 0.29
Nodes (6): 3d93108 Delete server.py, 676c33f CI pipeline, 67cb179 Add files via upload, 837e95f Delete server.bat, b5d9b21 Add files via upload, d886b0d CI pipeline

### Community 87 - "Community 87"
Cohesion: 0.48
Nodes (6): contrast(), hex_to_rgb(), luminance(), main(), parse_themes(), Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.

### Community 89 - "Community 89"
Cohesion: 0.47
Nodes (5): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 90 - "Community 90"
Cohesion: 0.60
Nodes (5): blacks(), loudness(), main(), probe(), sheet()

### Community 91 - "Community 91"
Cohesion: 0.67
Nodes (5): escapeHtml(), icon(), renderEmptyOrError(), renderLoading(), renderState()

### Community 92 - "Community 92"
Cohesion: 0.40
Nodes (1): onClick()

### Community 93 - "Community 93"
Cohesion: 0.70
Nodes (4): auth.users, on_auth_user_created, public.handle_new_user(), public.profiles

### Community 94 - "Community 94"
Cohesion: 0.50
Nodes (2): current(), next()

### Community 95 - "Community 95"
Cohesion: 0.60
Nodes (4): _chapter_counts(), pages/courses.html progress bars divide chapters viewed by a hard-coded chapter, test_every_reviewer_course_has_a_chapter_count(), test_reviewer_chapter_counts_match_manifests()

### Community 96 - "Community 96"
Cohesion: 0.40
Nodes (2): Ae(), Gs()

### Community 97 - "Community 97"
Cohesion: 0.40
Nodes (2): at(), rt()

### Community 98 - "Community 98"
Cohesion: 0.40
Nodes (3): ha(), la(), tt()

### Community 99 - "Community 99"
Cohesion: 0.50
Nodes (4): perspective(), perspective_coeffs(), PIL PERSPECTIVE coefficients mapping output (dst) points back to source points., Warp the full src onto quad (tl, tr, br, bl) in a W×H RGBA canvas.

### Community 100 - "Community 100"
Cohesion: 0.50
Nodes (4): buildLookupTable(), getDecimalForValue(), initOffsets(), jo()

### Community 101 - "Community 101"
Cohesion: 0.50
Nodes (3): dn(), fe(), ps()

### Community 102 - "Community 102"
Cohesion: 1.00
Nodes (2): load(), main()

### Community 103 - "Community 103"
Cohesion: 1.00
Nodes (2): load(), main()

### Community 104 - "Community 104"
Cohesion: 0.67
Nodes (1): cs

### Community 106 - "Community 106"
Cohesion: 1.00
Nodes (1): Abort with 503/401 unless the caller has a valid Supabase session.     Returns

### Community 107 - "Community 107"
Cohesion: 1.00
Nodes (1): Allow-list of admin emails sourced from the environment (no hard-coding).

### Community 108 - "Community 108"
Cohesion: 1.00
Nodes (1): A user is an admin if their role is 'Admin' or they are allow-listed.

### Community 109 - "Community 109"
Cohesion: 1.00
Nodes (1): Write a structured audit record for auth and admin events.

### Community 110 - "Community 110"
Cohesion: 1.00
Nodes (1): Write a structured audit record for auth and admin events.

### Community 111 - "Community 111"
Cohesion: 1.00
Nodes (1): Return an error string, or None if valid.

### Community 112 - "Community 112"
Cohesion: 1.00
Nodes (1): Return an error string, or None if the password meets policy.

### Community 113 - "Community 113"
Cohesion: 1.00
Nodes (1): Resolve a Supabase access token (from the browser's session) to     {id, email}

### Community 114 - "Community 114"
Cohesion: 1.00
Nodes (1): Smoke tests for the SmartCare Flask API.

### Community 115 - "Community 115"
Cohesion: 1.00
Nodes (1): A completely ordinary (non-admin) signed-in user can delete themself.

### Community 116 - "Community 116"
Cohesion: 1.00
Nodes (1): Both bad-user and bad-password return the same message (anti-enumeration).

### Community 117 - "Community 117"
Cohesion: 1.00
Nodes (1): There is no id parameter on this route — it can only ever delete         the ac

### Community 118 - "Community 118"
Cohesion: 1.00
Nodes (1): Anonymous access to the admin API must be denied (no PII leak).

### Community 119 - "Community 119"
Cohesion: 1.00
Nodes (1): A signed-in non-admin must be forbidden (broken-access-control fix).

### Community 120 - "Community 120"
Cohesion: 1.00
Nodes (1): An authenticated admin (role == 'Admin') can list users.

### Community 121 - "Community 121"
Cohesion: 1.00
Nodes (1): A plain-form request to an /api/ endpoint must be rejected (CSRF).

### Community 122 - "Community 122"
Cohesion: 1.00
Nodes (1): A request missing X-Requested-With must be rejected.

### Community 123 - "Community 123"
Cohesion: 1.00
Nodes (1): A well-formed request with the CSRF headers must reach the handler.

### Community 124 - "Community 124"
Cohesion: 1.00
Nodes (1): GET requests are never subject to the CSRF guard (only auth applies).

### Community 125 - "Community 125"
Cohesion: 1.00
Nodes (1): A plain-form POST to an API endpoint must be rejected (CSRF).

### Community 126 - "Community 126"
Cohesion: 1.00
Nodes (1): A POST missing X-Requested-With must be rejected.

### Community 127 - "Community 127"
Cohesion: 1.00
Nodes (1): A well-formed JSON POST with the CSRF headers must reach the handler.

### Community 128 - "Community 128"
Cohesion: 1.00
Nodes (1): GET requests are never subject to the CSRF guard.

### Community 129 - "Community 129"
Cohesion: 1.00
Nodes (1): Stubs server.py's Supabase integration with an in-memory fake.     Returns a na

### Community 130 - "Community 130"
Cohesion: 1.00
Nodes (1): UserMixin

## Knowledge Gaps
- **189 isolated node(s):** `fs`, `path`, `OUT`, `SVG`, `REUSE` (+184 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 22`** (1 nodes): `tn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (2 nodes): `d()`, `Pn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `ke()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `Ie()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `u()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (2 nodes): `escapeHtml()`, `icon()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `prefersReducedMotion()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (2 nodes): `Ci()`, `initialize()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `hs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (2 nodes): `kn()`, `qn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `Y()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (1 nodes): `onClick()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (2 nodes): `current()`, `next()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (2 nodes): `Ae()`, `Gs()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `at()`, `rt()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (2 nodes): `load()`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (2 nodes): `load()`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `cs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `Abort with 503/401 unless the caller has a valid Supabase session.     Returns`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `Allow-list of admin emails sourced from the environment (no hard-coding).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `A user is an admin if their role is 'Admin' or they are allow-listed.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (1 nodes): `Write a structured audit record for auth and admin events.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (1 nodes): `Write a structured audit record for auth and admin events.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (1 nodes): `Return an error string, or None if valid.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `Return an error string, or None if the password meets policy.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `Resolve a Supabase access token (from the browser's session) to     {id, email}`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (1 nodes): `Smoke tests for the SmartCare Flask API.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (1 nodes): `A completely ordinary (non-admin) signed-in user can delete themself.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (1 nodes): `Both bad-user and bad-password return the same message (anti-enumeration).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `There is no id parameter on this route — it can only ever delete         the ac`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (1 nodes): `Anonymous access to the admin API must be denied (no PII leak).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 119`** (1 nodes): `A signed-in non-admin must be forbidden (broken-access-control fix).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 120`** (1 nodes): `An authenticated admin (role == 'Admin') can list users.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 121`** (1 nodes): `A plain-form request to an /api/ endpoint must be rejected (CSRF).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (1 nodes): `A request missing X-Requested-With must be rejected.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (1 nodes): `A well-formed request with the CSRF headers must reach the handler.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 124`** (1 nodes): `GET requests are never subject to the CSRF guard (only auth applies).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 125`** (1 nodes): `A plain-form POST to an API endpoint must be rejected (CSRF).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 126`** (1 nodes): `A POST missing X-Requested-With must be rejected.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 127`** (1 nodes): `A well-formed JSON POST with the CSRF headers must reach the handler.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 128`** (1 nodes): `GET requests are never subject to the CSRF guard.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 129`** (1 nodes): `Stubs server.py's Supabase integration with an in-memory fake.     Returns a na`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 130`** (1 nodes): `UserMixin`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExamEngine` connect `Community 36` to `Community 35`, `Community 83`, `Community 40`, `Community 62`, `Community 75`, `Community 76`, `Community 54`, `Community 69`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `tn` connect `Community 22` to `Community 11`, `Community 42`, `Community 13`, `Community 67`, `Community 84`, `Community 85`, `Community 52`, `Community 96`, `Community 66`, `Community 7`, `Community 9`, `Community 79`, `Community 16`, `Community 78`, `Community 15`, `Community 31`, `Community 58`, `Community 92`, `Community 105`, `Community 65`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `js` connect `Community 38` to `Community 11`, `Community 97`, `Community 58`, `Community 7`, `Community 15`, `Community 79`, `Community 70`, `Community 71`, `Community 88`, `Community 105`, `Community 16`, `Community 78`, `Community 84`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `fs`, `path`, `OUT` to the rest of the system?**
  _189 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.020760534429599176 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09006451612903225 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.03684210526315789 - nodes in this community are weakly interconnected._