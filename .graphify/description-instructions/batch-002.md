# Node Description Batch 3 of 49

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/SolimanAnas/SmartCare@beb9c47aec6456afedc3e4f0809372721f1143de": "beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wi…" | kind=Commit | source=git | neighbors=[0ac5f99 feat(ui): cherry-pick loading o…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "tests_conftest": "conftest.py" | kind=code-symbol | source=tests/conftest.py:L1 | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, 1d86134 Secure SDLC Phase 0: fix critic…, 2520f22 Secure SDLC Phase 2 cont.: XSS …, 2e2f605 Ship the Security section from …, 4999b7f swot-its-compliance-GaiuJ, 5f7c4f2 Merge pull request #12 Step 1&2…]
- "vendor_chart_4_5_1_umd_min_ki": "ki()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), lo(), po(), .setDimensions(), Ta()]
- "vendor_chart_4_5_1_umd_min_update": "update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), is(), .resolveDatasetElementOptions(), .updateElement(), ki()]
- "vendor_chart_4_5_1_umd_min_x": "x()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, b(), ce(), .register(), m(), ._computeGridLineItems()]
- "vendor_supabase_js_2_110_0_s": "S()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), createIndex(), deleteVectors(), getVectors(), ht()]
- "vendor_supabase_js_2_110_0_signinwithethereum": "signInWithEthereum()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, catch(), m(), ms(), _notifyAllSubscribers(), request()]
- "commit:repo:github.com/SolimanAnas/SmartCare@2520f226ef5688df0e156ca844bfa0f76cfd81e5": "2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@67cb179681e80e87af69aaf2f62b470867df6171": "67cb179 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@8bee5a7fde08e64a6e7b24ba5c1128f5f627b04d": "8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-openi…" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@9b501450444932deb236e0879738e7110565f326": "9b50145 Secure SDLC Phase 2: password policy, rate limiting, audit logging" | kind=Commit | source=git | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@a831ff4d5ac4125bde634c450e31bcb05e7e9c52": "a831ff4 Merge pull request #8 from SolimanAnas/ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@d1b235f765f2d00709c3b06befc31ad77a31276d": "d1b235f Merge pull request #15 Offline & PWA upgrades ✅" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, 83a1ea8 Ship the Offline & PWA section …, app.js, main, 53ec4c1 Merge pull request #16 ✅, precache-manifest.js]
- "shared_admin": "admin.ts" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L1 | neighbors=[index.ts, index.ts, index.ts, 7c821ae Merge pull request #14 Admin da…, 85f0dc5 Rebuild the admin console on Su…, AdminCaller]
- "tests_test_api_login": "_login()" | kind=code-symbol | source=tests/test_api.py:L18 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_non_admin_cannot_update_role()]
- "vendor_chart_4_5_1_umd_min_js_getdataset": ".getDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), initialize(), js, .buildOrUpdateElements(), .configure()]
- "vendor_chart_4_5_1_umd_min_js_getparsed": ".getParsed()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), _calculateBarValuePixels(), draw(), getLabelAndValue(), _getRuler()]
- "vendor_chart_4_5_1_umd_min_n_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), a(), f(), fn(), g(), .calculateTotal()]
- "vendor_chart_4_5_1_umd_min_oo": "oo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), na(), .constructor(), .draw(), .first()]
- "vendor_chart_4_5_1_umd_min_ss": "ss()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, os(), es(), is(), o(), .acquireContext()]
- "vendor_chart_4_5_1_umd_min_tn_getlabels": ".getLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[buildTicks(), da(), determineDataLimits(), getLabelAndValue(), .getLabelTimestamps(), init()]
- "vendor_chart_4_5_1_umd_min_yn": "yn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .createResolver(), .resolveNamedOptions(), je(), ._computeAngle(), .constructor()]
- "vendor_supabase_js_2_110_0_getuser": "getUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _getAuthenticatorAssuranceLevel(), getClaims(), _acquireLock(), m()]
- "vendor_supabase_js_2_110_0_initialize": "initialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _debug(), _getSessionFromURL(), _handleVisibilityChange(), _isImplicitGrantCallback()]
- "vendor_supabase_js_2_110_0_send": "send()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, leave(), push(), resend(), canPush(), _fetchWithTimeout()]
- "commit:repo:github.com/SolimanAnas/SmartCare@093fcc25e0af7bb85bbc32ac5b6943d839662f92": "093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@1041e6c06c26aa254ad40794a63cce89b90ac08d": "1041e6c major updates ✅🔥🧠" | kind=Commit | source=git | neighbors=[03d0cad Update ecg.html, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@292c5bc7082a36b41cbcf4be4904cbacb9e098e4": "292c5bc Major Updates ✅❤️🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@5f461d469bfa19460cfb19eb755c827981c0a568": "5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mo…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@70abbed3010f771cedec4f0af14bc8dfcf8e90db": "70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports" | kind=Commit | source=git | neighbors=[28f8e2f docs: add Secure SDLC validatio…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@7dfcee83bed9e6dd3d5168b247e4f01627e7da1b": "7dfcee8 Updated the exam engine ❤️✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@8c61be706bdbed1c53fbeb5d2c0fcf7a832e6ff1": "8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅" | kind=Commit | source=git | neighbors=[1543337 Fix raw markup in Last Visited,…, 301bb11 Fix NaN days ago — index.html r…, main, 817a4bf Merge pull request #23 Fixed: r…, 81d920a Fix reflected XSS in med-index.…, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@94235c68663f4d978835344a4cf366a7469c5783": "94235c6 Ship the critical hardening list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[main, 1ca0f65 Ship the High priority list fro…, 20260702000001_create_user_state.sql, 20260702000002_create_profiles.sql, precache-manifest.js, exam.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ccd6185d17a3880815564cc103489a9609ee93e2": "ccd6185 fix(ui): shrink fixed buttons on mobile, add screen padding to prevent …" | kind=Commit | source=git | neighbors=[557325c fix(ui): add light theme CSS, h…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e2bc409ab40b5eddb828dfef54c7fdad83cefcea": "e2bc409 fix: allow cdn.jsdelivr.net in CSP and make Chart.js load non-fatal" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@ff0d1a13bca921ba15aeeadffdaf550bc2c83fe8": "ff0d1a1 feat: add /api/health probe and API/deployment docs" | kind=Commit | source=git | neighbors=[4999b7f swot-its-compliance-GaiuJ, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "scripts_validate_content": "validate_content.py" | kind=code-symbol | source=scripts/validate_content.py:L1 | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ef31570 Fix offline precache gap, add c…, load_json_lenient(), load_known_single_option(), main(), question_core_fields()]
- "vendor_chart_4_5_1_umd_min_calculatebarindexpixels": "_calculateBarIndexPixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getStackCount()]
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatecontrollers": ".buildOrUpdateControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, e(), .updateIndex(), ln(), .getController(), .getElement()]
- "vendor_chart_4_5_1_umd_min_ua": "ua()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeDatasetDraw(), beforeDatasetsDraw(), beforeDraw(), da(), fa()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-002.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
