# Node Description Batch 1 of 48

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

- "vendor_supabase_js_2_110_0": "supabase-js-2.110.0.mjs" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, abortSignal(), _acquireLock(), add(), _adminDeletePasskey()]
- "branch:repo:github.com/SolimanAnas/SmartCare#main": "main" | kind=Branch | source=git | neighbors=[0245fab update: refresh PWA icons and f…, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 0465774 feat: Google Identity Services …, 04af7e8 fix: correct UTF-8 mojibake in …, 05fc83d fix: re-disable auth guard on c…]
- "vendor_chart_4_5_1_umd_min": "chart-4.5.1.umd.min.js" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, chart-4.5.1.umd.min.js, a(), aa(), addBox()]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/checkout-7": "dependabot/github_actions/actions/checkout-7" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/setup-node-6": "dependabot/github_actions/actions/setup-node-6" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/setup-python-6": "dependabot/github_actions/actions/setup-python-6" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/pip/google-auth-2.55.1": "dependabot/pip/google-auth-2.55.1" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/pip/pytest-9.1.1": "dependabot/pip/pytest-9.1.1" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#feat/lucide-svg-migration": "feat/lucide-svg-migration" | kind=Branch | source=git | neighbors=[006f9af Update requirements.txt, 0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 03d0cad Update ecg.html, 03f6898 Update sw.js, 0588b95 Update styles.css ✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#fix/lucide-quote-consistency": "fix/lucide-quote-consistency" | kind=Branch | source=git | neighbors=[006f9af Update requirements.txt, 0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 03f6898 Update sw.js]
- "vendor_chart_4_5_1_umd_min_tn": "tn" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .afterAutoSkip(), .afterBuildTicks(), .afterCalculateLabelRotation(), .afterDataLimits(), .afterFit()]
- "vendor_supabase_js_2_110_0_y": "y()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _approveAuthorization(), _authenticate(), _callRefreshToken()]
- "prometric_exam_examengine": "ExamEngine" | kind=code-symbol | source=src/prometric/exam.js:L1 | neighbors=[exam.js, .adjustCatDifficulty(), .bindEvents(), .buildNavigator(), .calculateResults(), .calculateTopicAccuracy()]
- "vendor_chart_4_5_1_umd_min_n": "n()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ca, co(), fn(), g(), .parse()]
- "vendor_chart_4_5_1_umd_min_js": "js" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .addElements(), .applyStack(), .buildOrUpdateElements(), .configure(), .constructor()]
- "sw": "sw.js" | kind=code-symbol | source=sw.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 03f6898 Update sw.js, 1a56d75 feat: graphify rebuild with des…, 2e2f605 Ship the Security section from …, 323b8fc feat: migrate to Lucide SVG spr…, 4ccb8df Merge pull request #9 from Soli…]
- "app": "app.js" | kind=code-symbol | source=app.js:L1 | neighbors=[bootApp(), createRipple(), handleScroll(), initBottomNav(), initFooterAwareNav(), initIndexSearch()]
- "vendor_supabase_js_2_110_0_returnresult": "_returnResult()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _approveAuthorization(), _challengeAndVerify(), _deletePasskey(), _denyAuthorization(), _enroll()]
- "vendor_supabase_js_2_110_0_m": "m()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _createCustomProvider(), _createOAuthClient(), createUser()]
- "server": "server.py" | kind=code-symbol | source=server.py:L1 | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, 20fdfa2 feat(itls): complete itls revie…, 2520f22 Secure SDLC Phase 2 cont.: XSS …, 266c2ed Add server.py and server.bat to…, 2e2f605 Ship the Security section from …, 354c93e fix: restore server.py to repo …]
- "tests_test_api": "test_api.py" | kind=code-symbol | source=tests/test_api.py:L1 | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, 2520f22 Secure SDLC Phase 2 cont.: XSS …, 2e2f605 Ship the Security section from …, 4999b7f swot-its-compliance-GaiuJ, 5f7c4f2 Merge pull request #12 Step 1&2…, 67cb179 Add files via upload]
- "vendor_chart_4_5_1_umd_min_s": "s()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .parse(), _calculateBarIndexPixels(), _calculateBarValuePixels(), co()]
- "vendor_chart_4_5_1_umd_min_o": "o()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .handleTickRangeOptions(), da(), g(), Gt(), ho()]
- "vendor_chart_4_5_1_umd_min_tn_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Di(), .buildOrUpdateElements(), kn(), .chartOptionScopes(), .createResolver()]
- "vendor_supabase_js_2_110_0_constructor": "constructor()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, catch(), channel(), Ci(), getChannel(), getSocket()]
- "vendor_chart_4_5_1_umd_min_ho": "ho()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), e(), .afterAutoSkip(), .beforeLayout(), .buildTicks()]
- "vendor_chart_4_5_1_umd_min_a": "a()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, aa(), at(), .handleTickRangeOptions(), _calculateBarIndexPixels(), da()]
- "vendor_supabase_js_2_110_0_handleoperation": "handleOperation()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, copy(), createBucket(), createIndex(), createSignedUploadUrl(), createSignedUrl()]
- "vendor_supabase_js_2_110_0_join": "join()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, batchSend(), build(), constructor(), containedBy(), contains()]
- "vendor_chart_4_5_1_umd_min_wa": "wa" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .constructor(), ._createItems(), .draw(), ._drawArgs()]
- "prometric_exam": "exam.js" | kind=code-symbol | source=src/prometric/exam.js:L1 | neighbors=[0277cd5 feat(ui): redesign prometric pa…, 093fcc2 fix(ui): remove auto-advance, s…, 0ac5f99 feat(ui): cherry-pick loading o…, 0e6242c Add files via upload, 1041e6c major updates ✅🔥🧠, 1eee11b create exam-2.html — redesigned…]
- "vendor_chart_4_5_1_umd_min_l": "l()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), da(), fn(), _getAxis(), .determineDataLimits()]
- "vendor_supabase_js_2_110_0_push": "push()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), add(), channel(), constructor(), _getUrlForProvider()]
- "vendor_supabase_js_2_110_0_usesession": "_useSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _approveAuthorization(), _autoRefreshTokenTick(), _deletePasskey(), _denyAuthorization(), _emitInitialSession()]
- "vendor_chart_4_5_1_umd_min_ro": "ro()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), ho(), .computeTickLimit(), .constructor(), .determineDataLimits()]
- "vendor_chart_4_5_1_umd_min_d": "d()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .apply(), ._tickFormatFunction(), .notify(), Pn(), sn]
- "vendor_chart_4_5_1_umd_min_sn": "sn" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, d(), .add(), .addControllers(), .addElements(), .addPlugins()]
- "commit:repo:github.com/SolimanAnas/SmartCare@b791fda62e041ca6d3c20a155e4cd309f7f10a90": "b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) wit…" | kind=Commit | source=git | neighbors=[602ffdf chore: gitignore copyrighted so…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "vendor_supabase_js_2_110_0_debug": "_debug()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _autoRefreshTokenTick(), _callRefreshToken(), _logPrefix(), _getSessionFromURL()]
- "commit:repo:github.com/SolimanAnas/SmartCare@323b8fc32a733a73bb6811945e79ce4a6eaaa493": "323b8fc feat: migrate to Lucide SVG sprite system" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-000.json

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
