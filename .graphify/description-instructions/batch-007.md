# Node Description Batch 8 of 49

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/SolimanAnas/SmartCare@3c15b4dfbc62398ebfad35ef0e6eaeceab8c2c35": "3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅" | kind=Commit | source=git | neighbors=[main, 5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…, precache-manifest.js, build_precache.py, validate_content.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@43111c714d6f6b4cc8e113d25af803a42ca8c97f": "43111c7 ❤️" | kind=Commit | source=git | neighbors=[20dc373 Update ecg.html ❤️, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b70a7192e82001c0ae45e2c6d4056d5aec5c4d5": "5b70a71 chore: bump SW cache to v5.3 after Lucide migration fixes" | kind=Commit | source=git | neighbors=[3fa0113 Merge pull request #22 from Sol…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@63e2fbb5f72f16ff04ca3a77825d6c9500343261": "63e2fbb Update Carevent.html ▶️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7fa435524c339a552bcbe6b5de2cc2a05e714bcb": "7fa4355 fix: resolve JS syntax errors in 5 content files (template literals, en…" | kind=Commit | source=git | neighbors=[58e37c8 fix(css): collapse second multi…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@85f0dc5e9b198389d296aeb8006e43cc16e91555": "85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI" | kind=Commit | source=git | neighbors=[662adfb Ship the Performance section fr…, index.ts, index.ts, index.ts, main, 7c821ae Merge pull request #14 Admin da…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@92528c56c41645348ceb465d296a3803b8cf8f12": "92528c5 Fix broken med-index links (m1-38.js, index.html)" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992e51c574ed2600dd92d0cd968872902ec74b89": "992e51c Enhance courses.html UI/UX with category colors, stats strip, and anima…" | kind=Commit | source=git | neighbors=[92528c5 Fix broken med-index links (m1-…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b0bbbb3fa1c06a898e2f8a92685c8fba0802e49": "9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curricul…" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, main, 60c1782 chore: stop tracking TOC/ direc…, c10.js, c6.js, c7.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa88f007c6ebedcde7fac67b435b8dc9a2d01834": "aa88f00 Update EMS Essentials card with additional links 👌" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c0536bd44b562e270641e383ea8bc930bd1a26d3": "c0536bd Create Carevent.html 🚑" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cacbb42c28683ecad2789588b27a313f85de8851": "cacbb42 fix(sw): bump cache to v5.4 to evict stale CSS after exp-label::before …" | kind=Commit | source=git | neighbors=[7fa4355 fix: resolve JS syntax errors i…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d1c82f1295abd63dc36a10bec81906d6fb92a055": "d1c82f1 fix(sw): bump cache to v5.3 to force client refresh after Lucide migrat…" | kind=Commit | source=git | neighbors=[2fabb59 fix(exam): use innerHTML for SV…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de5c27269a2cc5486896a90ad989cc617e411312": "de5c272 Added AHA Algorithms 💗" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=nl
- "commit:repo:github.com/SolimanAnas/SmartCare@dede3d836434b2a5be7cdde89e4569f0ae9516de": "dede3d8 AHA Algorithms" | kind=Commit | source=git | neighbors=[aa88f00 Update EMS Essentials card with…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e56e5254233dfc1593145d05a3ba37f5fd4df5a3": "e56e525 Create GCS.html" | kind=Commit | source=git | neighbors=[0b92e14 Create ems-tools.html ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "data_bundle": "bundle.js" | kind=code-symbol | source=courses/pals/data/bundle.js:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 1a00316 feat(itls): restructure itls co…, 2e859ad Adding PALS Course, 33c9dd7 Author BLS chapters c04-c06 (2-…, 7c0b047 Author BLS chapters c02-c03 (as…, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "prometric_exam_examengine_showscreen": ".showScreen()" | kind=code-symbol | source=src/prometric/exam.js:L1039 | neighbors=[ExamEngine, .calculateResults(), .endExam(), .init(), .newExam(), .retryIncorrect()] | lang=en
- "vendor_chart_4_5_1_umd_min_as": "as()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .active(), .cancel(), .constructor(), ._notify(), .tick()] | lang=en
- "vendor_chart_4_5_1_umd_min_bo": "bo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .computeTickLimit(), .configure(), .constructor(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_calculatebarvaluepixels": "_calculateBarValuePixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), .applyStack(), .getParsed(), s(), .getDataVisibility()] | lang=en
- "vendor_chart_4_5_1_umd_min_de": "de" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .apply(), .constructor(), .describe(), .get(), .override()] | lang=en
- "vendor_chart_4_5_1_umd_min_draw": "draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), fo(), ho(), .getParsed(), Le()] | lang=en
- "vendor_chart_4_5_1_umd_min_hs": "hs" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .acquireContext(), .addEventListener(), .getDevicePixelRatio(), .getMaximumSize(), .isAttached()] | lang=en
- "vendor_chart_4_5_1_umd_min_n_createresolver": ".createResolver()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.configure(), ._resolveAnimations(), n(), o(), yn(), .resolveNamedOptions()] | lang=en
- "vendor_chart_4_5_1_umd_min_ne": "ne()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabelForValue(), .getLabelAndValue(), Be(), .rotate(), n()] | lang=en
- "vendor_chart_4_5_1_umd_min_on_createdescriptors": "._createDescriptors()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, an(), e(), l(), o(), rn()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_computelabelitems": "._computeLabelItems()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ki(), n(), o(), ._getLabelSizes(), ._getXAxisLabelAlignment()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getmatchingvisiblemetas": ".getMatchingVisibleMetas()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), Fs(), _getStacks(), .getDataTimestamps(), tn, .getSortedVisibleDatasetMetas()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getsortedvisibledatasetmetas": ".getSortedVisibleDatasetMetas()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[beforeDatasetsDraw(), beforeDraw(), _i(), index(), tn, ._drawDatasets()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_isdatasetvisible": ".isDatasetVisible()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterDatasetsUpdate(), da(), .getMaxBorderWidth(), ._getRingWeightOffset(), ._getRotationExtents(), onClick()] | lang=en
- "vendor_chart_4_5_1_umd_min_xn": "xn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .datasetAnimationScopeKeys(), .datasetElementScopeKeys(), .datasetScopeKeys(), .pluginScopeKeys(), e()] | lang=en
- "vendor_supabase_js_2_110_0_catch": "catch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, getPromise(), constructor(), fetchRequest(), gi(), invoke()] | lang=en
- "vendor_supabase_js_2_110_0_decode": "decode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _binaryDecode(), _isArrayBuffer(), decodeBroadcast(), decodePush(), decodeReply()] | lang=en
- "vendor_supabase_js_2_110_0_getclaims": "getClaims()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, es(), fetchJwk(), getSession(), getUser(), ls()] | lang=en
- "vendor_supabase_js_2_110_0_leave": "leave()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, cancelTimeout(), canPush(), receive(), reset(), send()] | lang=en
- "vendor_supabase_js_2_110_0_loadsession": "__loadSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, bt(), _callRefreshToken(), _debug(), _isValidSession(), _removeSession()] | lang=en
- "vendor_supabase_js_2_110_0_makeref": "makeRef()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, toString(), onClose(), onError(), onMessage(), onOpen()] | lang=en
- "vendor_supabase_js_2_110_0_re": "re()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _getUrlForProvider(), Hn(), Mn(), resend(), resetPasswordForEmail()] | lang=en
- "vendor_supabase_js_2_110_0_registerpasskey": "registerPasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, createNewAbortSignal(), er(), L(), _returnResult(), rr()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-007.json

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
