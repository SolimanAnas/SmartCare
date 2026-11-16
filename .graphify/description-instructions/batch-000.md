# Node Description Batch 1 of 62

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
- "branch:repo:github.com/SolimanAnas/SmartCare#main": "main" | kind=Branch | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 0555934 Author PEPP chapters c09-c11 (t…, 05afd15 Cap IV diazepam and midazolam s…, 05dca1e Add Google Play preview cut of …, 0673752 PR #67 Homepage Redesigned ✨]
- "vendor_chart_4_5_1_umd_min": "chart-4.5.1.umd.min.js" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, chart-4.5.1.umd.min.js, a(), aa(), addBox()]
- "branch:repo:github.com/SolimanAnas/SmartCare#ccr-b58d9c43-7az2tj": "ccr-b58d9c43-7az2tj" | kind=Branch | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 0555934 Author PEPP chapters c09-c11 (t…, 05afd15 Cap IV diazepam and midazolam s…, 05dca1e Add Google Play preview cut of …, 0673752 PR #67 Homepage Redesigned ✨]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/checkout-7": "dependabot/github_actions/actions/checkout-7" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/setup-node-6": "dependabot/github_actions/actions/setup-node-6" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/github_actions/actions/setup-python-6": "dependabot/github_actions/actions/setup-python-6" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/pip/google-auth-2.55.1": "dependabot/pip/google-auth-2.55.1" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#dependabot/pip/pytest-9.1.1": "dependabot/pip/pytest-9.1.1" | kind=Branch | source=git | neighbors=[0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 0588b95 Update styles.css ✅, 059df1b SOP updated 🔥✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#feat/lucide-svg-migration": "feat/lucide-svg-migration" | kind=Branch | source=git | neighbors=[006f9af Update requirements.txt, 0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 03d0cad Update ecg.html, 03f6898 Update sw.js, 0588b95 Update styles.css ✅]
- "branch:repo:github.com/SolimanAnas/SmartCare#fix/lucide-quote-consistency": "fix/lucide-quote-consistency" | kind=Branch | source=git | neighbors=[006f9af Update requirements.txt, 0275018 layout fix 🔥, 0277cd5 feat(ui): redesign prometric pa…, 02bf7e6 fix: replace single-quoted SVG …, 03d0cad Update ecg.html, 03f6898 Update sw.js]
- "branch:repo:github.com/SolimanAnas/SmartCare#guide-images": "guide-images" | kind=Branch | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 0555934 Author PEPP chapters c09-c11 (t…, 05afd15 Cap IV diazepam and midazolam s…, 05dca1e Add Google Play preview cut of …, 0673752 PR #67 Homepage Redesigned ✨]
- "branch:repo:github.com/SolimanAnas/SmartCare#worktree-pr85-supabase-deploy": "worktree-pr85-supabase-deploy" | kind=Branch | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 0555934 Author PEPP chapters c09-c11 (t…, 05afd15 Cap IV diazepam and midazolam s…, 05dca1e Add Google Play preview cut of …, 0673752 PR #67 Homepage Redesigned ✨]
- "precache_manifest": "precache-manifest.js" | kind=code-symbol | source=precache-manifest.js:L1 | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 05afd15 Cap IV diazepam and midazolam s…, 0673752 PR #67 Homepage Redesigned ✨, 07b10be Hypertonic saline: separate hyp…, 07b8707 Show BDLS pre-test first in exa…]
- "vendor_chart_4_5_1_umd_min_tn": "tn" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .afterAutoSkip(), .afterBuildTicks(), .afterCalculateLabelRotation(), .afterDataLimits(), .afterFit()]
- "vendor_supabase_js_2_110_0_y": "y()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _approveAuthorization(), _authenticate(), _callRefreshToken()]
- "prometric_exam_examengine": "ExamEngine" | kind=code-symbol | source=src/prometric/exam.js:L1 | neighbors=[exam.js, .adjustCatDifficulty(), .bindEvents(), .buildNavigator(), .calculateResults(), .calculateTopicAccuracy()]
- "vendor_chart_4_5_1_umd_min_n": "n()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ca, co(), fn(), g(), .parse()]
- "app": "app.js" | kind=code-symbol | source=app.js:L1 | neighbors=[bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav(), initIndexSearch(), initScrollReveal()]
- "vendor_chart_4_5_1_umd_min_js": "js" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .addElements(), .applyStack(), .buildOrUpdateElements(), .configure(), .constructor()]
- "sw": "sw.js" | kind=code-symbol | source=sw.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 53ec4c1 Merge pull request #16 ✅, 5f7c4f2 Merge pull request #12 Step 1&2…, 662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …, 83a1ea8 Ship the Offline & PWA section …]
- "server": "server.py" | kind=code-symbol | source=server.py:L1 | neighbors=[2c020d4 Remove the Flask server; move a…, 393a5b0 Drop ProxyFix: server.py is a l…, 5f7c4f2 Merge pull request #12 Step 1&2…, 7c821ae Merge pull request #14 Admin da…, 85f0dc5 Rebuild the admin console on Su…, 8abc850 Fix CI: restore server.py — tes…]
- "vendor_supabase_js_2_110_0_returnresult": "_returnResult()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _approveAuthorization(), _challengeAndVerify(), _deletePasskey(), _denyAuthorization(), _enroll()]
- "vendor_supabase_js_2_110_0_m": "m()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _createCustomProvider(), _createOAuthClient(), createUser()]
- "google_flow_generate_batches": "generate-batches.js" | kind=code-symbol | source=.google-flow/generate-batches.js:L1 | neighbors=[9724717 Add google-flow workspace and s…, ANATOMY, batches, byId, chapters, count()]
- "tests_test_api": "test_api.py" | kind=code-symbol | source=tests/test_api.py:L1 | neighbors=[2c020d4 Remove the Flask server; move a…, 393a5b0 Drop ProxyFix: server.py is a l…, 5f7c4f2 Merge pull request #12 Step 1&2…, 7c821ae Merge pull request #14 Admin da…, 85f0dc5 Rebuild the admin console on Su…, badddb6 Harden static file serving, adm…]
- "vendor_chart_4_5_1_umd_min_s": "s()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .parse(), _calculateBarIndexPixels(), _calculateBarValuePixels(), co()]
- "scripts_build_ecg_reference": "build_ecg_reference.js" | kind=code-symbol | source=scripts/build_ecg_reference.js:L1 | neighbors=[2b928c2 ECG Simulator: downloadable rhy…, 437e8d4 Merge pull request #66  ECG, actions(), calPulse(), card(), dataUri()]
- "scripts_compose": "compose.py" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L1 | neighbors=[05dca1e Add Google Play preview cut of …, 17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo, app_events()]
- "vendor_chart_4_5_1_umd_min_o": "o()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .handleTickRangeOptions(), da(), g(), Gt(), ho()]
- "vendor_chart_4_5_1_umd_min_tn_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Di(), .buildOrUpdateElements(), kn(), .chartOptionScopes(), .createResolver()]
- "vendor_supabase_js_2_110_0_constructor": "constructor()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, catch(), channel(), Ci(), getChannel(), getSocket()]
- "tests_content_guides_spec": "content-guides.spec.js" | kind=code-symbol | source=tests/content-guides.spec.js:L1 | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 1116a68 Chapter 8 rewrite: Environmenta…, 123b1c0 Chapter 10 rewrite: Clinical Pr…, 14bac52 Rewrite chapter 9 (Emergency Ph…, 35ac666 Rewrite chapter 5 (Medical Emer…, 54bf4f2 Chapter 1 rewrite: Foundations …]
- "vendor_chart_4_5_1_umd_min_ho": "ho()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), e(), .afterAutoSkip(), .beforeLayout(), .buildTicks()]
- "prometric_exam": "exam.js" | kind=code-symbol | source=src/prometric/exam.js:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 5f7c4f2 Merge pull request #12 Step 1&2…, 734b6ca Prometric exam: add an Exam Lev…, 7b23e68 PR #47 Update Question bank, 94235c6 Ship the critical hardening lis…, ExamEngine]
- "vendor_chart_4_5_1_umd_min_a": "a()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, aa(), at(), .handleTickRangeOptions(), _calculateBarIndexPixels(), da()]
- "vendor_supabase_js_2_110_0_handleoperation": "handleOperation()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, copy(), createBucket(), createIndex(), createSignedUploadUrl(), createSignedUrl()]
- "vendor_supabase_js_2_110_0_join": "join()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, batchSend(), build(), constructor(), containedBy(), contains()]
- "scripts_compose_lib": "compose_lib.py" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L1 | neighbors=[17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo, Bokeh, camera_view()]
- "vendor_chart_4_5_1_umd_min_wa": "wa" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .constructor(), ._createItems(), .draw(), ._drawArgs()]

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
