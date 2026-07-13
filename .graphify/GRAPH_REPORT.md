# Graph Report - .  (2026-07-13)

## Corpus Check
- Large corpus: 94 files · ~614,926 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 1943 nodes · 5995 edges · 84 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: calls: 1977 · ON_BRANCH: 1698 · contains: 920 · method: 550 · MODIFIES: 413 · PARENT_OF: 382 · rationale_for: 34 · imports: 12 · imports_from: 4 · references: 2 · inherits: 1 · reads_from: 1 · triggers: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 94 · Candidates: 1056
- Excluded: 32 untracked · 14597 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `d9844d1`
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
  git → git  _Bridges community 63 → community 0_
- `02bf7e6 fix: replace single-quoted SVG attributes with double quotes` --ON_BRANCH--> `dependabot/github_actions/actions/checkout-7`  [EXTRACTED]
  git → git  _Bridges community 36 → community 0_
- `0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 64 → community 0_
- `074617f feat: update chapter files with SEO and accessibility improvements` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 43 → community 0_
- `0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/` --PARENT_OF--> `9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curriculum`  [EXTRACTED]
  git → git  _Bridges community 0 → community 27_

## Communities

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (12): recordLastVisited(), updateHeader(), renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav(), switchSection(), setMainContent() (+4 more)

### Community 36 - "Community 36"
Cohesion: 0.31
Nodes (9): Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in, 02bf7e6 fix: replace single-quoted SVG attributes with double quotes, 323b8fc feat: migrate to Lucide SVG sprite system, 4e04344 feat: migrate to Lucide SVG sprite system, 5d23c19 fix: improve heading and index-count visibility in dark/amoled themes, 65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC, 77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency, b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) with NREMT-aligned curriculum (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.15
Nodes (10): fs, path, vm, ROOT, CONTENT_DIR, CHAPTER_IDS, loadChapterData(), main() (+2 more)

### Community 27 - "Community 27"
Cohesion: 0.25
Nodes (13): 4663aec fix: Resolve unused variable and import lint errors in scripts/assemble_chapters.py and sync content/c3.js, 59a9f95 toc: implement prehospital (EMT) curriculum skeleton, 60c1782 chore: stop tracking TOC/ directory (now gitignored), 6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data, 8541abe chore: Change index page title from landing page to clinical learning platform, 8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries, 92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CPG reference in login/signup views, 98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5 (+5 more)

### Community 53 - "Community 53"
Cohesion: 0.31
Nodes (6): 1543337 Fix raw markup in Last Visited, extend homepage search to sub-chapters, harden sw.js, 301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' by app.js, not 'ts'), 817a4bf Merge pull request #23 Fixed: reflected XSS, 81d920a Fix reflected XSS in med-index.html, add Google Play production audit, 8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅, f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)

### Community 39 - "Community 39"
Cohesion: 0.18
Nodes (12): load(), main(), load(), main(), 33c9dd7 Author BLS chapters c04-c06 (2-rescuer/teams, AED, ventilation), 521060d BLS , ACLS, PALS added ✅, 7c0b047 Author BLS chapters c02-c03 (assessment, adult 1-rescuer CPR), a75c415 Scaffold BLS reviewer (courses/bls) with c01 content (+4 more)

### Community 43 - "Community 43"
Cohesion: 0.17
Nodes (10): load(), main(), 074617f feat: update chapter files with SEO and accessibility improvements, 1a00316 feat(itls): restructure itls course - replace static chapters with builder, 1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically injected chapters, 20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and generate all 22 chapters, a4df22b fix: resolve CI lint failure and remove orphaned files, c6c0a5c chore: update core app - service worker, landing page, exam page, and course assets (+2 more)

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (9): load(), main(), 154f42d Merge pull request #25 BLS reviewer, 23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap), 2e859ad Adding PALS Course, 5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers, 82ff814 Add Playwright smoke test for BLS reviewer, e9a2970 Add agentic implementation plans for ACLS and PALS reviewers (+1 more)

### Community 26 - "Community 26"
Cohesion: 0.13
Nodes (17): compress(), main(), public.user_state, auth.users, public.profiles, auth.users, on_auth_user_created, public.handle_new_user() (+9 more)

### Community 47 - "Community 47"
Cohesion: 0.29
Nodes (12): 2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes, 3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅, 503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks, 5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes, 69ad055 Merge pull request #17 html Clean-up🗑️, 9b12c84 Merge pull request #20, bb51308 Merge pull request #19  Exam themes fix ✅, bc0cb4e Regenerate precache-manifest.js after file changes (+4 more)

### Community 67 - "Community 67"
Cohesion: 0.47
Nodes (5): extract_sections(), assemble(), main(), Extract section objects from a TOC section file.      The file has the pattern:, Assemble a complete chapter JS file.

### Community 58 - "Community 58"
Cohesion: 0.42
Nodes (8): rel(), collect_content_files(), collect_globs(), build_list(), content_hash(), main(), content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c, content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c

### Community 71 - "Community 71"
Cohesion: 0.83
Nodes (3): esc(), gen_chapter(), main()

### Community 65 - "Community 65"
Cohesion: 0.48
Nodes (6): hex_to_rgb(), luminance(), contrast(), parse_themes(), main(), Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.

### Community 68 - "Community 68"
Cohesion: 0.47
Nodes (5): create_src_folders(), generate_course_page(), main(), Creates the necessary src/COURSE folders., Replaces placeholders in the template with course-specific data.

### Community 34 - "Community 34"
Cohesion: 0.17
Nodes (12): device_entry(), main(), escapeHtml(), icon(), renderLoading(), renderEmptyOrError(), renderState(), current() (+4 more)

### Community 49 - "Community 49"
Cohesion: 0.28
Nodes (12): rel(), load_json_lenient(), validate_manifest_shape(), validate_manifest_coverage(), question_core_fields(), validate_question(), validate_pearl(), validate_bank_content() (+4 more)

### Community 20 - "Community 20"
Cohesion: 0.10
Nodes (24): _audit(), create_app(), _supabase_admin_configured(), _supabase_user_from_token(), _require_supabase_user(), _register_routes(), _register_csrf_guard(), _register_security_headers() (+16 more)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (249): PAGES, 006f9af Update requirements.txt, 0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aesthetic, 03d0cad Update ecg.html, 03f6898 Update sw.js, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅ (+241 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (1): ExamEngine

### Community 45 - "Community 45"
Cohesion: 0.41
Nodes (10): ALLOWED_ORIGINS, corsHeaders(), json(), serviceClient(), adminEmails(), audit(), AdminCaller, requireAdmin() (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.11
Nodes (20): CACHE_FIRST_PATTERNS, networkFirst(), staleWhileRevalidate(), offlineFallback(), 18fb7dc Added ├── .well-known/, 1a56d75 feat: graphify rebuild with descriptions + interactive file map view, 40d423a Remove unused admin/login/signup pages, 4389d53 Improve drawer toggle panel identification on index.html (+12 more)

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (18): supabase_backend(), TestIndex, TestSecurityHeaders, TestHealthCheck, Smoke tests for the SmartCare Flask API., Stubs server.py's Supabase integration with an in-memory fake.     Returns a na, 2e2f605 Ship the Security section from the v2.0 roadmap audit, 5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit (+10 more)

### Community 72 - "Community 72"
Cohesion: 0.50
Nodes (1): _FakeResp

### Community 59 - "Community 59"
Cohesion: 0.28
Nodes (4): _auth(), TestAccountSelfDelete, A completely ordinary (non-admin) signed-in user can delete themself., There is no id parameter on this route — it can only ever delete         the ac

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (10): TestAuditLogging, _register(), _login(), TestRegister, TestLogin, TestAdminUsers, Both bad-user and bad-password return the same message (anti-enumeration)., Anonymous access to the admin API must be denied (no PII leak). (+2 more)

### Community 44 - "Community 44"
Cohesion: 0.13
Nodes (9): TestCsrfGuard, A plain-form request to an /api/ endpoint must be rejected (CSRF)., A request missing X-Requested-With must be rejected., A well-formed request with the CSRF headers must reach the handler., GET requests are never subject to the CSRF guard (only auth applies)., A plain-form POST to an API endpoint must be rejected (CSRF)., A POST missing X-Requested-With must be rejected., A well-formed JSON POST with the CSRF headers must reach the handler. (+1 more)

### Community 73 - "Community 73"
Cohesion: 0.50
Nodes (1): TestStaticFiles

### Community 13 - "Community 13"
Cohesion: 0.06
Nodes (13): et(), removeBox(), vs(), ws(), hn(), cn(), wn(), Nn() (+5 more)

### Community 57 - "Community 57"
Cohesion: 0.20
Nodes (8): e(), ct(), ei(), Ni(), ms(), ks(), Ys(), Us()

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (9): s(), H(), j(), ne(), Be(), xo(), bo, So (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (13): n(), r(), Ye(), pi(), _i(), ji(), ln(), un() (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (24): o(), a(), g(), m(), v(), gi(), mi(), vi() (+16 more)

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (27): l(), Ae(), Ls(), Vn(), Bn(), jn(), parsePrimitiveData(), parseArrayData() (+19 more)

### Community 29 - "Community 29"
Cohesion: 0.15
Nodes (3): d(), Di(), Pn()

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (20): u(), f(), p(), x(), wi(), ki(), Si(), Oi() (+12 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (13): b(), Z(), nt(), lt(), pt(), Fs(), rn(), zn() (+5 more)

### Community 21 - "Community 21"
Cohesion: 0.12
Nodes (4): w(), en, sn, addElements()

### Community 31 - "Community 31"
Cohesion: 0.12
Nodes (2): Y(), Ie()

### Community 54 - "Community 54"
Cohesion: 0.18
Nodes (10): q(), ai(), ri(), li(), hi(), getMaxOverflow(), draw(), fo() (+2 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (20): tt(), ve(), Oe(), Re(), Yi(), Ui(), Xi(), index() (+12 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (5): at(), rt(), Ci(), js, initialize()

### Community 55 - "Community 55"
Cohesion: 0.25
Nodes (3): dt(), on, an()

### Community 14 - "Community 14"
Cohesion: 0.08
Nodes (15): mt(), _t(), vt(), wt(), kt(), It(), zt(), Ft() (+7 more)

### Community 56 - "Community 56"
Cohesion: 0.25
Nodes (1): xt

### Community 38 - "Community 38"
Cohesion: 0.18
Nodes (1): ke()

### Community 40 - "Community 40"
Cohesion: 0.17
Nodes (3): ts(), as(), rs()

### Community 41 - "Community 41"
Cohesion: 0.17
Nodes (4): he(), ce(), de, ca

### Community 75 - "Community 75"
Cohesion: 0.50
Nodes (3): fe(), ps(), dn()

### Community 37 - "Community 37"
Cohesion: 0.13
Nodes (10): ge(), pe(), xe(), we(), es(), is(), ss(), ns() (+2 more)

### Community 80 - "Community 80"
Cohesion: 0.67
Nodes (3): ze(), je(), ti()

### Community 60 - "Community 60"
Cohesion: 0.22
Nodes (1): hs

### Community 79 - "Community 79"
Cohesion: 0.67
Nodes (1): cs

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (2): kn(), qn()

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (2): tn, onClick()

### Community 50 - "Community 50"
Cohesion: 0.21
Nodes (12): ea(), ia(), sa(), oa(), ua(), fa(), ga(), pa() (+4 more)

### Community 74 - "Community 74"
Cohesion: 0.50
Nodes (4): jo(), initOffsets(), buildLookupTable(), getDecimalForValue()

### Community 76 - "Community 76"
Cohesion: 0.50
Nodes (4): ie(), fs(), er(), tr()

### Community 32 - "Community 32"
Cohesion: 0.12
Nodes (20): cr(), invoke(), toString(), ln(), un(), ft(), execute(), uploadToSignedUrl() (+12 more)

### Community 24 - "Community 24"
Cohesion: 0.10
Nodes (24): constructor(), normalizeEndpoint(), onJoin(), onLeave(), onSync(), updatePayloadTransform(), getChannel(), zs() (+16 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (44): toJSON(), select(), explain(), likeAllOf(), likeAnyOf(), ilikeAllOf(), ilikeAnyOf(), in() (+36 more)

### Community 70 - "Community 70"
Cohesion: 0.40
Nodes (5): setAuth(), _isManualToken(), _performAuth(), _setAuthSafely(), _handleTokenChanged()

### Community 15 - "Community 15"
Cohesion: 0.07
Nodes (34): setHeader(), update(), list(), Nr(), S(), ht(), handleOperation(), uploadOrUpdate() (+26 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (27): then(), request(), fetchRequest(), ct(), listNamespaces(), createNamespace(), dropNamespace(), loadNamespaceMetadata() (+19 more)

### Community 51 - "Community 51"
Cohesion: 0.18
Nodes (12): processResponse(), match(), serialize(), appendParams(), endpointURL(), protocol(), os(), hs() (+4 more)

### Community 48 - "Community 48"
Cohesion: 0.14
Nodes (14): eq(), neq(), gte(), lte(), like(), ilike(), is(), isDistinct() (+6 more)

### Community 77 - "Community 77"
Cohesion: 0.50
Nodes (4): gt(), ts(), U(), zn()

### Community 78 - "Community 78"
Cohesion: 0.50
Nodes (4): lt(), or(), onJoinPayload(), onLeavePayload()

### Community 23 - "Community 23"
Cohesion: 0.15
Nodes (25): delete(), zr(), Kt(), ss(), bt(), us(), _debug(), initialize() (+17 more)

### Community 69 - "Community 69"
Cohesion: 0.40
Nodes (6): Pe(), Cs(), Ps(), js(), pr(), rt()

### Community 62 - "Community 62"
Cohesion: 0.25
Nodes (8): detectEnvironment(), getWebSocketConstructor(), isWebSocketSupported(), onHeartbeat(), nn(), an(), _wrapHeartbeatCallback(), _initializeOptions()

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (93): resend(), getSession(), xr(), y(), Jr(), ze(), ho(), fo() (+85 more)

### Community 42 - "Community 42"
Cohesion: 0.15
Nodes (16): send(), receive(), hasReceived(), trigger(), canPush(), leave(), isMember(), joinRef() (+8 more)

### Community 35 - "Community 35"
Cohesion: 0.13
Nodes (19): reset(), destroy(), cancelRefEvent(), cancelTimeout(), teardown(), off(), closeAndRetry(), ontimeout() (+11 more)

### Community 33 - "Community 33"
Cohesion: 0.16
Nodes (20): startTimeout(), onClose(), onError(), on(), push(), onMessage(), replyEventName(), isJoining() (+12 more)

### Community 30 - "Community 30"
Cohesion: 0.15
Nodes (21): scheduleTimeout(), rejoin(), isLeaving(), parseJSON(), log(), hasLogger(), clearHeartbeats(), onConnOpen() (+13 more)

### Community 52 - "Community 52"
Cohesion: 0.24
Nodes (12): isClosed(), connect(), connectionState(), isConnected(), subscribe(), updateJoinPayload(), isConnecting(), isDisconnecting() (+4 more)

### Community 81 - "Community 81"
Cohesion: 1.00
Nodes (3): syncState(), syncDiff(), clone()

### Community 82 - "Community 82"
Cohesion: 0.67
Nodes (3): state(), transformState(), Gs()

### Community 83 - "Community 83"
Cohesion: 0.67
Nodes (3): unsubscribe(), _updatePostgresBindings(), isFilterValueEqual()

### Community 84 - "Community 84"
Cohesion: 1.00
Nodes (2): Dn(), es()

### Community 66 - "Community 66"
Cohesion: 0.29
Nodes (7): fi(), gi(), yi(), mi(), vi(), wi(), Ri()

### Community 63 - "Community 63"
Cohesion: 0.29
Nodes (7): 0245fab update: refresh PWA icons and favicon from new source image, 04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, symbols), 411adfd update: refresh PWA icons from updated source image, 6c55b58 fix: sync section-header & continue-label colors with index.html section-label, 7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in courses.html, 86a3d5c update PWA icons, ff409d5 fix: match section-header style to index.html section-label

### Community 64 - "Community 64"
Cohesion: 0.29
Nodes (7): 0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + fix sync error msg, 24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr), 39cc6bb fix: remove extra '})' causing syntax error in login.html, 4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co), 5dddc2f feat: update ECG-study.html footer to match index.html branding, 7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supabase docs, prometric planner, bae7406 chore: graphify auto-update, ECG study page, course data updates

## Knowledge Gaps
- **48 isolated node(s):** `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c`, `Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block.`, `Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 3`** (1 nodes): `ExamEngine`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `_FakeResp`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `TestStaticFiles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (2 nodes): `Y()`, `Ie()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `xt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `ke()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `hs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `cs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (2 nodes): `kn()`, `qn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (2 nodes): `tn`, `onClick()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (2 nodes): `Dn()`, `es()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tn` connect `Community 6` to `Community 13`, `Community 29`, `Community 18`, `Community 61`, `Community 31`, `Community 38`, `Community 9`, `Community 55`, `Community 12`, `Community 4`, `Community 7`, `Community 5`, `Community 8`, `Community 37`, `Community 11`, `Community 57`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `ExamEngine` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `js` connect `Community 7` to `Community 13`, `Community 12`, `Community 5`, `Community 8`, `Community 9`, `Community 61`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `Extract section objects from a TOC section file.      The file has the pattern:`, `Assemble a complete chapter JS file.`, `content/: *.meta.js + any full bundle that ISN'T superseded by a     meta.js (c` to the rest of the system?**
  _48 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 19` be split into smaller, more focused modules?**
  _Cohesion score 0.10582010582010581 - nodes in this community are weakly interconnected._
- **Should `Community 26` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._
- **Should `Community 20` be split into smaller, more focused modules?**
  _Cohesion score 0.09686609686609686 - nodes in this community are weakly interconnected._