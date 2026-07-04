# Graph Report - .  (2026-07-04)

## Corpus Check
- 80 files · ~470,819 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1893 nodes · 5864 edges · 85 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: calls: 1971 · ON_BRANCH: 1673 · contains: 910 · method: 550 · MODIFIES: 356 · PARENT_OF: 353 · rationale_for: 30 · imports: 12 · imports_from: 4 · references: 2 · inherits: 1 · reads_from: 1 · triggers: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 80 · Candidates: 685
- Excluded: 0 untracked · 14494 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `9b12c84`
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
- `0245fab update: refresh PWA icons and favicon from new source image` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 62 → community 0_
- `02bf7e6 fix: replace single-quoted SVG attributes with double quotes` --ON_BRANCH--> `dependabot/github_actions/actions/checkout-7`  [EXTRACTED]
  git → git  _Bridges community 36 → community 0_
- `0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 63 → community 0_
- `074617f feat: update chapter files with SEO and accessibility improvements` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 38 → community 0_
- `0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/` --PARENT_OF--> `9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curriculum`  [EXTRACTED]
  git → git  _Bridges community 0 → community 27_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (249): dependabot/github_actions/actions/checkout-7, dependabot/github_actions/actions/setup-node-6, dependabot/github_actions/actions/setup-python-6, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration, fix/lucide-quote-consistency, main (+241 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (93): _adminDeletePasskey(), _adminListPasskeys(), _approveAuthorization(), _authenticate(), _challenge(), _challengeAndVerify(), _createCustomProvider(), createNewAbortSignal() (+85 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (12): da(), dataset(), fn(), gn(), ln(), n(), pi(), rn() (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (19): addBox(), afterDraw(), afterUpdate(), Ba(), f(), ki(), Oi(), p() (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (2): onClick(), tn

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (5): at(), Ci(), initialize(), js, rt()

### Community 8 - "Community 8"
Cohesion: 0.06
Nodes (44): _binaryDecode(), binaryEncode(), _binaryEncodeUserBroadcastPush(), cloneRequestState(), containedBy(), contains(), decode(), decodeBroadcast() (+36 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (27): Ae(), Bn(), buildTicks(), _calculateBarIndexPixels(), _calculateBarValuePixels(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis() (+19 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (13): beforeLayout(), cn(), getRange(), Go(), hn(), _i(), ji(), Nn() (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (17): a(), aa(), afterDatasetsUpdate(), determineDataLimits(), g(), getValueForPixel(), gi(), Gs() (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.08
Nodes (15): Bt(), Ee(), Ft(), Gt(), It(), jt(), kt(), Le() (+7 more)

### Community 13 - "Community 13"
Cohesion: 0.07
Nodes (34): copy(), createBucket(), createIndex(), createSignedUploadUrl(), createSignedUrl(), createSignedUrls(), deleteBucket(), deleteIndex() (+26 more)

### Community 14 - "Community 14"
Cohesion: 0.11
Nodes (10): _login(), Both bad-user and bad-password return the same message (anti-enumeration)., Anonymous access to the admin API must be denied (no PII leak)., A signed-in non-admin must be forbidden (broken-access-control fix)., An authenticated admin (role == 'Admin') can list users., _register(), TestAdminUsers, TestAuditLogging (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.09
Nodes (11): Fs(), _generate(), _getTimestampsForTable(), ho(), lo(), lt(), nt(), pt() (+3 more)

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (9): ao(), b(), co(), Do(), eo(), inXRange(), inYRange(), Oe() (+1 more)

### Community 17 - "Community 17"
Cohesion: 0.11
Nodes (12): bootApp(), handleScroll(), initBatteryIndicator(), initBottomNav(), initChapterPage(), initFooterAwareNav(), initScrollReveal(), recordLastVisited() (+4 more)

### Community 18 - "Community 18"
Cohesion: 0.12
Nodes (4): addElements(), en, sn, w()

### Community 19 - "Community 19"
Cohesion: 0.10
Nodes (4): as(), rs(), ts(), xt

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (27): catch(), createNamespace(), createNamespaceIfNotExists(), createTable(), createTableIfNotExists(), ct(), dropNamespace(), dropTable() (+19 more)

### Community 21 - "Community 21"
Cohesion: 0.10
Nodes (20): 2e2f605 Ship the Security section from the v2.0 roadmap audit, 5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit, 5f7c4f2 Merge pull request #12 Step 1&2 of V2 plan, eff053b Ship all six Critical Fixes from the v2.0 roadmap audit, _admin_emails(), _audit(), create_app(), _is_admin() (+12 more)

### Community 22 - "Community 22"
Cohesion: 0.09
Nodes (15): 70a3f4d Clean up about.html copy and relocate MIT license to privacy.html, 95f6363 Merge pull request #10 from SolimanAnas/claude/chapters-html-summary-fixes-5lnmvu, acb0328 About ✅ Merge pull request #11 from SolimanAnas/claude/chapters-html-summary-fixes-5lnmvu, b7039e9 Bump service worker cache to v2.8, c4f8810 Wire admin.html to real app users via a hidden login-page gate, ee41524 fix: wrap long line in test_admin_role_update for ruff line-length limit, _FakeResp, Smoke tests for the SmartCare Flask API. (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.15
Nodes (25): _acquireLock(), _autoRefreshTokenTick(), bt(), _callRefreshToken(), _debug(), delete(), dispose(), _getSessionFromURL() (+17 more)

### Community 24 - "Community 24"
Cohesion: 0.10
Nodes (24): bi(), bs(), constructor(), getChannel(), _initRealtimeClient(), _initSupabaseAuthClient(), ki(), _listenForAuthEvents() (+16 more)

### Community 25 - "Community 25"
Cohesion: 0.11
Nodes (20): 18fb7dc Added ├── .well-known/, 1a56d75 feat: graphify rebuild with descriptions + interactive file map view, 40d423a Remove unused admin/login/signup pages, 4389d53 Improve drawer toggle panel identification on index.html, 4ccb8df Merge pull request #9 from SolimanAnas/claude/chapters-html-summary-fixes-5lnmvu, 5b988aa Create .nojekyll, 67cd1eb fix: update contact email and all URLs in privacy policy, 829a86d update: refresh PWA icons from new22.png + bump SW cache version (+12 more)

### Community 26 - "Community 26"
Cohesion: 0.11
Nodes (10): Be(), bo, et(), H(), j(), ko(), ne(), s() (+2 more)

### Community 27 - "Community 27"
Cohesion: 0.25
Nodes (13): 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data, 8541abe chore: Change index page title from landing page to clinical learning platform, 8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries, 92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CPG reference in login/signup views, 98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5 (+5 more)

### Community 28 - "Community 28"
Cohesion: 0.15
Nodes (3): d(), Di(), Pn()

### Community 29 - "Community 29"
Cohesion: 0.15
Nodes (21): clearHeartbeats(), flushSendBuffer(), hasLogger(), heartbeatCallback(), heartbeatTimeout(), isLeaving(), leaveOpenTopic(), log() (+13 more)

### Community 30 - "Community 30"
Cohesion: 0.12
Nodes (2): Ie(), Y()

### Community 31 - "Community 31"
Cohesion: 0.12
Nodes (20): applyTransformOptsToQuery(), cr(), download(), execute(), exists(), ft(), _getFinalPath(), getPublicUrl() (+12 more)

### Community 32 - "Community 32"
Cohesion: 0.16
Nodes (20): build(), connectWithFallback(), _i(), isJoining(), makeRef(), on(), onClose(), onError() (+12 more)

### Community 33 - "Community 33"
Cohesion: 0.15
Nodes (13): 1ca0f65 Ship the High priority list from the mid-cycle audit, 53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening list from the mid-cycle audit, aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-prioritize, d7008b7 Add the actual content changes for the High priority list, d7918ff fix: commit package-lock.json — CI's npm ci can't run without it, auth.users, public.user_state (+5 more)

### Community 34 - "Community 34"
Cohesion: 0.15
Nodes (14): getCenterPoint(), ha(), index(), inRange(), la(), nearest(), Re(), to() (+6 more)

### Community 35 - "Community 35"
Cohesion: 0.13
Nodes (19): _cancelPendingDisconnect(), cancelRefEvent(), cancelTimeout(), channel(), close(), closeAndRetry(), destroy(), disconnect() (+11 more)

### Community 36 - "Community 36"
Cohesion: 0.31
Nodes (9): 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 323b8fc feat: migrate to Lucide SVG sprite system, 4e04344 feat: migrate to Lucide SVG sprite system, 5d23c19 fix: improve heading and index-count visibility in dark/amoled themes, 65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC, 77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency, b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum, c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS strings (+1 more)

### Community 37 - "Community 37"
Cohesion: 0.18
Nodes (1): ke()

### Community 38 - "Community 38"
Cohesion: 0.16
Nodes (10): 074617f feat: update chapter files with SEO and accessibility improvements, 1a00316 feat(itls): restructure itls course - replace static chapters with builder, 1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically injected chapters, 20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and generate all 22 chapters, a4df22b fix: resolve CI lint failure and remove orphaned files, c6c0a5c chore: update core app - service worker, landing page, exam page, and course assets, c9276ae chore: update graphify knowledge graph, d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pages (+2 more)

### Community 39 - "Community 39"
Cohesion: 0.17
Nodes (4): ca, ce(), de, he()

### Community 40 - "Community 40"
Cohesion: 0.14
Nodes (10): e(), ei(), es(), generateLabels(), is(), Ni(), ns(), os() (+2 more)

### Community 41 - "Community 41"
Cohesion: 0.15
Nodes (16): canPush(), _fetchWithTimeout(), hasReceived(), httpSend(), inPendingSyncState(), isJoined(), isMember(), joinRef() (+8 more)

### Community 42 - "Community 42"
Cohesion: 0.13
Nodes (9): A plain-form request to an /api/ endpoint must be rejected (CSRF)., A request missing X-Requested-With must be rejected., A well-formed request with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard (only auth applies)., A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard. (+1 more)

### Community 43 - "Community 43"
Cohesion: 0.41
Nodes (10): 7c821ae Merge pull request #14 Admin dashboard ✅, 85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI, AdminCaller, adminEmails(), ALLOWED_ORIGINS, audit(), corsHeaders(), json() (+2 more)

### Community 44 - "Community 44"
Cohesion: 0.18
Nodes (7): Bi(), Fi(), io(), na(), no(), oo, zi()

### Community 45 - "Community 45"
Cohesion: 0.14
Nodes (14): add(), ajax(), batchSend(), eq(), gte(), ilike(), imatch(), is() (+6 more)

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (7): 83a1ea8 Ship the Offline & PWA section from the v2.0 roadmap audit, d1b235f Merge pull request #15 Offline & PWA upgrades ✅, d708b15 Ship the UI/UX Improvements section from the v2.0 roadmap audit, device_entry(), main(), current(), next()

### Community 47 - "Community 47"
Cohesion: 0.28
Nodes (12): load_json_lenient(), load_known_single_option(), main(), question_core_fields(), Extract (text, options, correct_answer) regardless of which of the     bank's s, Several banks were authored with a UTF-8 BOM; browsers' fetch().json()     tole, rel(), validate_bank_content() (+4 more)

### Community 48 - "Community 48"
Cohesion: 0.21
Nodes (12): beforeDatasetDraw(), beforeDatasetsDraw(), ea(), fa(), ga(), ia(), ma(), oa() (+4 more)

### Community 49 - "Community 49"
Cohesion: 0.35
Nodes (10): 2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes, 3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅, 503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks, 5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes, 69ad055 Merge pull request #17 html Clean-up🗑️, 9b12c84 Merge pull request #20, bb51308 Merge pull request #19  Exam themes fix ✅, c9e85ef Deduplicate the 8 standalone exam-review pages into a shared engine (+2 more)

### Community 50 - "Community 50"
Cohesion: 0.32
Nodes (2): 662adfb Ship the Performance section from the v2.0 roadmap audit, 829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐

### Community 51 - "Community 51"
Cohesion: 0.18
Nodes (12): appendParams(), Ci(), endpointURL(), hs(), Ii(), Jn(), match(), Oi() (+4 more)

### Community 52 - "Community 52"
Cohesion: 0.24
Nodes (12): connect(), connectionState(), getSocket(), _handleNodeJsRaceCondition(), isClosed(), isConnected(), isConnecting(), isDisconnecting() (+4 more)

### Community 53 - "Community 53"
Cohesion: 0.25
Nodes (3): an(), dt(), on

### Community 54 - "Community 54"
Cohesion: 0.20
Nodes (9): ai(), beforeDraw(), draw(), fo(), getMaxOverflow(), hi(), li(), q() (+1 more)

### Community 55 - "Community 55"
Cohesion: 0.25
Nodes (8): CHAPTER_IDS, CONTENT_DIR, fs, loadChapterData(), main(), path, ROOT, vm

### Community 56 - "Community 56"
Cohesion: 0.28
Nodes (4): _auth(), A completely ordinary (non-admin) signed-in user can delete themself., There is no id parameter on this route — it can only ever delete         the ac, TestAccountSelfDelete

### Community 57 - "Community 57"
Cohesion: 0.22
Nodes (7): ct(), ge(), ks(), ms(), pe(), we(), xe()

### Community 58 - "Community 58"
Cohesion: 0.22
Nodes (1): hs

### Community 59 - "Community 59"
Cohesion: 0.50
Nodes (7): build_list(), collect_content_files(), collect_globs(), content_hash(), main(), content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c, rel()

### Community 60 - "Community 60"
Cohesion: 0.29
Nodes (2): kn(), qn()

### Community 61 - "Community 61"
Cohesion: 0.25
Nodes (8): an(), detectEnvironment(), getWebSocketConstructor(), _initializeOptions(), isWebSocketSupported(), nn(), onHeartbeat(), _wrapHeartbeatCallback()

### Community 62 - "Community 62"
Cohesion: 0.29
Nodes (7): 0245fab update: refresh PWA icons and favicon from new source image, 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 411adfd update: refresh PWA icons from updated source image, 6c55b58 fix: sync section-header & continue-label colors with index.html section-label, 7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in courses.html, 86a3d5c update PWA icons, ff409d5 fix: match section-header style to index.html section-label

### Community 63 - "Community 63"
Cohesion: 0.29
Nodes (7): 0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg, 24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr), 39cc6bb fix: remove extra '})' causing syntax error in login.html, 4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co), 5dddc2f feat: update ECG-study.html footer to match index.html branding, 7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supabase docs, prometric planner, bae7406 chore: graphify auto-update, ECG study page, course data updates

### Community 64 - "Community 64"
Cohesion: 0.48
Nodes (6): contrast(), hex_to_rgb(), luminance(), main(), parse_themes(), Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.

### Community 65 - "Community 65"
Cohesion: 0.29
Nodes (7): fi(), gi(), mi(), Ri(), vi(), wi(), yi()

### Community 66 - "Community 66"
Cohesion: 0.47
Nodes (5): assemble(), extract_sections(), main(), Extract section objects from a TOC section file.      The file has the pattern:, Assemble a complete chapter JS file.

### Community 67 - "Community 67"
Cohesion: 0.47
Nodes (5): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 68 - "Community 68"
Cohesion: 0.67
Nodes (5): escapeHtml(), icon(), renderEmptyOrError(), renderLoading(), renderState()

### Community 69 - "Community 69"
Cohesion: 0.40
Nodes (6): Cs(), js(), Pe(), pr(), Ps(), rt()

### Community 70 - "Community 70"
Cohesion: 0.70
Nodes (4): auth.users, on_auth_user_created, public.handle_new_user(), public.profiles

### Community 71 - "Community 71"
Cohesion: 0.40
Nodes (5): _handleTokenChanged(), _isManualToken(), _performAuth(), setAuth(), _setAuthSafely()

### Community 72 - "Community 72"
Cohesion: 0.83
Nodes (3): esc(), gen_chapter(), main()

### Community 73 - "Community 73"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 74 - "Community 74"
Cohesion: 0.50
Nodes (4): buildLookupTable(), getDecimalForValue(), initOffsets(), jo()

### Community 75 - "Community 75"
Cohesion: 0.50
Nodes (3): dn(), fe(), ps()

### Community 76 - "Community 76"
Cohesion: 0.50
Nodes (4): er(), fs(), ie(), tr()

### Community 77 - "Community 77"
Cohesion: 0.50
Nodes (4): gt(), ts(), U(), zn()

### Community 78 - "Community 78"
Cohesion: 0.50
Nodes (4): lt(), onJoinPayload(), onLeavePayload(), or()

### Community 79 - "Community 79"
Cohesion: 0.67
Nodes (1): cs

### Community 80 - "Community 80"
Cohesion: 0.67
Nodes (3): je(), ti(), ze()

### Community 81 - "Community 81"
Cohesion: 0.67
Nodes (2): Us(), Ys()

### Community 82 - "Community 82"
Cohesion: 1.00
Nodes (3): clone(), syncDiff(), syncState()

### Community 83 - "Community 83"
Cohesion: 0.67
Nodes (3): Gs(), state(), transformState()

### Community 84 - "Community 84"
Cohesion: 0.67
Nodes (3): isFilterValueEqual(), unsubscribe(), _updatePostgresBindings()

### Community 85 - "Community 85"
Cohesion: 1.00
Nodes (2): Dn(), es()

## Knowledge Gaps
- **44 isolated node(s):** `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c`, `Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 4`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (2 nodes): `onClick()`, `tn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (2 nodes): `Ie()`, `Y()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `ke()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (2 nodes): `662adfb Ship the Performance section from the v2.0 roadmap audit`, `829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `hs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (2 nodes): `kn()`, `qn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `cs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (2 nodes): `Us()`, `Ys()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (2 nodes): `Dn()`, `es()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tn` connect `Community 6` to `Community 10`, `Community 28`, `Community 26`, `Community 60`, `Community 30`, `Community 37`, `Community 11`, `Community 53`, `Community 9`, `Community 5`, `Community 7`, `Community 3`, `Community 15`, `Community 40`, `Community 34`, `Community 81`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Why does `ExamEngine` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `js` connect `Community 7` to `Community 10`, `Community 9`, `Community 3`, `Community 15`, `Community 11`, `Community 60`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05729463099981028 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0565684899485741 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0273972602739726 - nodes in this community are weakly interconnected._