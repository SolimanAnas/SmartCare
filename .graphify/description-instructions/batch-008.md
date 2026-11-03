# Node Description Batch 9 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@63e2fbb5f72f16ff04ca3a77825d6c9500343261": "63e2fbb Update Carevent.html ▶️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@66d31181e7f97dc0bc271a39391d7bf19e0a272e": "66d3118 BDLS update ,ECG engine update ✅" | kind=Commit | source=git | neighbors=[6663113 PR #63 Update ECG simulator, main, 0366711 ECG Fixed ✅ Crisp waveform ⭐, 81e5289 ECG Simulator: crisp waveform r…, precache-manifest.js, ecg-simulator.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7b23e68e562ccb20fe77bc7c26b9d00734a2f416": "7b23e68 PR #47 Update Question bank" | kind=Commit | source=git | neighbors=[312f7b9 PR #46 Audience levels, app.js, main, 6a16b91 Add ACLS Megacode simulator wit…, aed54cb PR #48 acls-megacode-scenarios, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7fa435524c339a552bcbe6b5de2cc2a05e714bcb": "7fa4355 fix: resolve JS syntax errors in 5 content files (template literals, en…" | kind=Commit | source=git | neighbors=[58e37c8 fix(css): collapse second multi…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81f95d0a2e0242bc2d6a14ce8ba7d8f7b474bf48": "81f95d0 ⭐PR #60 Unified Course Design star ⭐" | kind=Commit | source=git | neighbors=[main, 2a5f204 Add SmartCare Megacode cinemati…, 7dcb4bd Merge pull request #61 from Sol…, c7f6894 Add Google Play screenshot camp…, precache-manifest.js, exam-pages.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@85f0dc5e9b198389d296aeb8006e43cc16e91555": "85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI" | kind=Commit | source=git | neighbors=[662adfb Ship the Performance section fr…, index.ts, index.ts, index.ts, main, 7c821ae Merge pull request #14 Admin da…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992e51c574ed2600dd92d0cd968872902ec74b89": "992e51c Enhance courses.html UI/UX with category colors, stats strip, and anima…" | kind=Commit | source=git | neighbors=[92528c5 Fix broken med-index links (m1-…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b0bbbb3fa1c06a898e2f8a92685c8fba0802e49": "9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curricul…" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, main, 60c1782 chore: stop tracking TOC/ direc…, c10.js, c6.js, c7.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa88f007c6ebedcde7fac67b435b8dc9a2d01834": "aa88f00 Update EMS Essentials card with additional links 👌" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c0536bd44b562e270641e383ea8bc930bd1a26d3": "c0536bd Create Carevent.html 🚑" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cacbb42c28683ecad2789588b27a313f85de8851": "cacbb42 fix(sw): bump cache to v5.4 to evict stale CSS after exp-label::before …" | kind=Commit | source=git | neighbors=[7fa4355 fix: resolve JS syntax errors i…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d1c82f1295abd63dc36a10bec81906d6fb92a055": "d1c82f1 fix(sw): bump cache to v5.3 to force client refresh after Lucide migrat…" | kind=Commit | source=git | neighbors=[2fabb59 fix(exam): use innerHTML for SV…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de5c27269a2cc5486896a90ad989cc617e411312": "de5c272 Added AHA Algorithms 💗" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=nl
- "commit:repo:github.com/SolimanAnas/SmartCare@dede3d836434b2a5be7cdde89e4569f0ae9516de": "dede3d8 AHA Algorithms" | kind=Commit | source=git | neighbors=[aa88f00 Update EMS Essentials card with…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e56e5254233dfc1593145d05a3ba37f5fd4df5a3": "e56e525 Create GCS.html" | kind=Commit | source=git | neighbors=[0b92e14 Create ems-tools.html ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c4": "c4.js" | kind=code-symbol | source=content/c4.js:L1 | neighbors=[2ac796c Pulmonary edema gate: CPAP only…, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 98557d8 docs: Update curriculum content…] | lang=en
- "content_curriculum_index": "curriculum-index.js" | kind=code-symbol | source=content/curriculum-index.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 2550192 PR #37 Medications update, 467bf94 Restore full M1-38 medication f…, 7d02ca2 Rename drug formulary numbering…, 8080576 PR #30, Redesign drug monograph…, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "prometric_exam_examengine_showscreen": ".showScreen()" | kind=code-symbol | source=src/prometric/exam.js:L1043 | neighbors=[ExamEngine, .calculateResults(), .endExam(), .init(), .newExam(), .retryIncorrect()] | lang=en
- "scripts_compose_render_frame": "render_frame()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L671 | neighbors=[compose.py, main(), render_full(), render_macro(), render_open(), render_play_overlays()] | lang=en
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-008.json

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
