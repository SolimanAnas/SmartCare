# Node Description Batch 4 of 62

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

- "vendor_chart_4_5_1_umd_min_oo": "oo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), na(), .constructor(), .draw(), .first()]
- "vendor_chart_4_5_1_umd_min_ss": "ss()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, os(), es(), is(), o(), .acquireContext()]
- "vendor_chart_4_5_1_umd_min_tn_getlabels": ".getLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[buildTicks(), da(), determineDataLimits(), getLabelAndValue(), .getLabelTimestamps(), init()]
- "vendor_chart_4_5_1_umd_min_yn": "yn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .createResolver(), .resolveNamedOptions(), je(), ._computeAngle(), .constructor()]
- "vendor_supabase_js_2_110_0_getuser": "getUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _getAuthenticatorAssuranceLevel(), getClaims(), _acquireLock(), m()]
- "vendor_supabase_js_2_110_0_initialize": "initialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _debug(), _getSessionFromURL(), _handleVisibilityChange(), _isImplicitGrantCallback()]
- "vendor_supabase_js_2_110_0_send": "send()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, leave(), push(), resend(), canPush(), _fetchWithTimeout()]
- "commit:repo:github.com/SolimanAnas/SmartCare@093fcc25e0af7bb85bbc32ac5b6943d839662f92": "093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@1041e6c06c26aa254ad40794a63cce89b90ac08d": "1041e6c major updates ✅🔥🧠" | kind=Commit | source=git | neighbors=[03d0cad Update ecg.html, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@2b1ffb7df1cdc4cc1effe2617ca882992e3d2d38": "2b1ffb7 Port BDLS and EMPACT course reviewers onto a dedicated branch" | kind=Commit | source=git | neighbors=[build.py, main, 179984f Scaffold PEPP reviewer (courses…, f008f88 Merge pull request #27 BDLS & E…, bundle.js, build.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@5f461d469bfa19460cfb19eb755c827981c0a568": "5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mo…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@6663113735e6dd48d97b2ea1cbffb96000a0e80b": "6663113 PR #63 Update ECG simulator" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, 17232c9 Fix Ruff lint failure in Megaco…, main, 55997db ECG Simulator: easy mode, visib…, 66d3118 BDLS update ,ECG engine update ✅, precache-manifest.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@70abbed3010f771cedec4f0af14bc8dfcf8e90db": "70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports" | kind=Commit | source=git | neighbors=[28f8e2f docs: add Secure SDLC validatio…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@7208d8e96a4548966c11a68b6ec09a3493ae2e28": "7208d8e Rewrite chapter 3 (Airway & Ventilation) as guides; guide renderer and …" | kind=Commit | source=git | neighbors=[app.js, main, 18ca925 Wrap a long line in the guide c…, c3.js, cpg-guide.js, cpg-strip.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@7dfcee83bed9e6dd3d5168b247e4f01627e7da1b": "7dfcee8 Updated the exam engine ❤️✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@877d8563506489ec2c44655014ce7c12da1e86d6": "877d856 Medical-bdls-empact-pepp-reviewers" | kind=Commit | source=git | neighbors=[3a000d0 Integrate Medical reviewer into…, main, 954bb06 docs: rewrite README with profe…, bundle.js, build.py, build.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@8c61be706bdbed1c53fbeb5d2c0fcf7a832e6ff1": "8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅" | kind=Commit | source=git | neighbors=[1543337 Fix raw markup in Last Visited,…, 301bb11 Fix NaN days ago — index.html r…, main, 817a4bf Merge pull request #23 Fixed: r…, 81d920a Fix reflected XSS in med-index.…, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@94235c68663f4d978835344a4cf366a7469c5783": "94235c6 Ship the critical hardening list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[main, 1ca0f65 Ship the High priority list fro…, 20260702000001_create_user_state.sql, 20260702000002_create_profiles.sql, precache-manifest.js, exam.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ccd6185d17a3880815564cc103489a9609ee93e2": "ccd6185 fix(ui): shrink fixed buttons on mobile, add screen padding to prevent …" | kind=Commit | source=git | neighbors=[557325c fix(ui): add light theme CSS, h…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e2bc409ab40b5eddb828dfef54c7fdad83cefcea": "e2bc409 fix: allow cdn.jsdelivr.net in CSP and make Chart.js load non-fatal" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e98b15caa8ec6ba54517f26bca40b61d1504f00a": "e98b15c Merge PR #36 MCI Course" | kind=Commit | source=git | neighbors=[106f200 Add MCI exam page with final ex…, 2c06261 Remove Respiratory Patterns tab…, main, 2550192 PR #37 Medications update, d3c3843 Update medication list, bundle.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@f008f88f7519bc51bf5af4010188aad5ba9e67fa": "f008f88 Merge pull request #27 BDLS & EMPACT ✅" | kind=Commit | source=git | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, d6f12c6 Add course documentation: BDLS,…, build.py, main, 877d856 Medical-bdls-empact-pepp-review…, bundle.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ff0d1a13bca921ba15aeeadffdaf550bc2c83fe8": "ff0d1a1 feat: add /api/health probe and API/deployment docs" | kind=Commit | source=git | neighbors=[4999b7f swot-its-compliance-GaiuJ, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "google_flow_update_tracker": "update-tracker.js" | kind=code-symbol | source=.google-flow/update-tracker.js:L1 | neighbors=[d35441e Add google-flow workspace and s…, counts, fs, generated, head, [iId, iTrack, iStatus, iNotes]]
- "scripts_audio_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L282 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), lp(), place()]
- "scripts_split_content": "split_content.js" | kind=code-symbol | source=scripts/split_content.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 662adfb Ship the Performance section fr…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 829493a Merge Merged: pull request #13 …, CHAPTER_IDS, CONTENT_DIR]
- "scripts_validate_content": "validate_content.py" | kind=code-symbol | source=scripts/validate_content.py:L1 | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ef31570 Fix offline precache gap, add c…, load_json_lenient(), load_known_single_option(), main(), question_core_fields()]
- "tests_mci_reviewer_spec": "mci-reviewer.spec.js" | kind=code-symbol | source=tests/mci-reviewer.spec.js:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, 2e4d5a6 MCI: Officer roles with two-row…, 6018c48 PR #57 MCI Exam 1, 66d3118 BDLS update ,ECG engine update ✅, 81f95d0 ⭐PR #60 Unified Course Design s…]
- "vendor_chart_4_5_1_umd_min_calculatebarindexpixels": "_calculateBarIndexPixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getStackCount()]
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatecontrollers": ".buildOrUpdateControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, e(), .updateIndex(), ln(), .getController(), .getElement()]
- "vendor_chart_4_5_1_umd_min_ua": "ua()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeDatasetDraw(), beforeDatasetsDraw(), beforeDraw(), da(), fa()]
- "vendor_supabase_js_2_110_0_connect": "connect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _handleNodeJsRaceCondition(), isConnected(), isConnecting(), isDisconnecting()]
- "vendor_supabase_js_2_110_0_l": "L()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deletePasskey(), _listPasskeys(), registerPasskey()]
- "commit:repo:github.com/SolimanAnas/SmartCare@0277cd528b810324f3641c4fe6e1c1d68d55411f": "0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aest…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@0ac5f99358c3f93109576216ff93f6f2f30fba98": "0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS f…" | kind=Commit | source=git | neighbors=[0277cd5 feat(ui): redesign prometric pa…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@0e6242c2c1d329897a7e19a444029cce13c3abf7": "0e6242c Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@1eee11b7334ff1e088cf071c8f48f2ecb735ece1": "1eee11b create exam-2.html — redesigned exam page using CPG-2025 style" | kind=Commit | source=git | neighbors=[093fcc2 fix(ui): remove auto-advance, s…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@266c2ed570387416999830d96487f11d2830d266": "266c2ed Add server.py and server.bat to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@26ac1b00eb98e145aa83b91cf1b197816c78b3ea": "26ac1b0 new index with pdf" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@28f8e2f6779bb201ccb4b92f7ee2449f1cd256fc": "28f8e2f docs: add Secure SDLC validation reports from security review" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-003.json

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
