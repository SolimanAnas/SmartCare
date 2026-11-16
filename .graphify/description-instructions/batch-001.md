# Node Description Batch 2 of 62

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

- "data_bundle": "bundle.js" | kind=code-symbol | source=courses/pepp/data/bundle.js:L1 | neighbors=[0555934 Author PEPP chapters c09-c11 (t…, 154f42d Merge pull request #25 BLS revi…, 179984f Scaffold PEPP reviewer (courses…, 22c0924 Add MCI (Mass Casualty Incident…, 27fd0d1 Author PEPP chapters c03-c04 (p…, 2b1ffb7 Port BDLS and EMPACT course rev…] | lang=en
- "scripts_build_precache": "build_precache.py" | kind=code-symbol | source=scripts/build_precache.py:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 20ed56a Integrate PEPP reviewer into pl…, 22c0924 Add MCI (Mass Casualty Incident…, 23060c0 Integrate BLS reviewer into pla…, 2b1ffb7 Port BDLS and EMPACT course rev…, 2e859ad Adding PALS Course] | lang=en
- "vendor_chart_4_5_1_umd_min_l": "l()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), da(), fn(), _getAxis(), .determineDataLimits()] | lang=en
- "vendor_supabase_js_2_110_0_push": "push()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), add(), channel(), constructor(), _getUrlForProvider()] | lang=en
- "vendor_supabase_js_2_110_0_usesession": "_useSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _approveAuthorization(), _autoRefreshTokenTick(), _deletePasskey(), _denyAuthorization(), _emitInitialSession()] | lang=en
- "scripts_audio": "audio.py" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L1 | neighbors=[05dca1e Add Google Play preview cut of …, 17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo, app_sound()] | lang=en
- "vendor_chart_4_5_1_umd_min_ro": "ro()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), ho(), .computeTickLimit(), .constructor(), .determineDataLimits()] | lang=en
- "vendor_chart_4_5_1_umd_min_d": "d()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .apply(), ._tickFormatFunction(), .notify(), Pn(), sn] | lang=en
- "vendor_chart_4_5_1_umd_min_sn": "sn" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, d(), .add(), .addControllers(), .addElements(), .addPlugins()] | lang=en
- "google_flow_run_batch": "run-batch.mjs" | kind=code-symbol | source=.google-flow/run-batch.mjs:L1 | neighbors=[9724717 Add google-flow workspace and s…, arg(), batchArg, click(), controls(), done()] | lang=en
- "vendor_supabase_js_2_110_0_debug": "_debug()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _autoRefreshTokenTick(), _callRefreshToken(), _logPrefix(), _getSessionFromURL()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b791fda62e041ca6d3c20a155e4cd309f7f10a90": "b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) wit…" | kind=Commit | source=git | neighbors=[602ffdf chore: gitignore copyrighted so…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "content_formulary": "formulary.js" | kind=code-symbol | source=content/formulary.js:L1 | neighbors=[05afd15 Cap IV diazepam and midazolam s…, 07b10be Hypertonic saline: separate hyp…, 2550192 PR #37 Medications update, 500f1a7 Hypertonic saline: dose for mod…, 5f4c3e6 Formulary group A: cardiac & re…, 6bb10e4 Formulary group D: fluids, gluc…] | lang=en
- "cpg_guide": "cpg-guide.js" | kind=code-symbol | source=cpg-guide.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…] | lang=en
- "vendor_chart_4_5_1_umd_min_e": "e()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ._notify(), at(), Ye(), ei(), ho()] | lang=en
- "vendor_chart_4_5_1_umd_min_jt": "jt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .alpha(), .clearer(), .clone(), .constructor(), .darken()] | lang=en
- "vendor_chart_4_5_1_umd_min_r": "r()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .register(), fn(), ho(), ji(), ._dataCheck()] | lang=en
- "vendor_supabase_js_2_110_0_log": "log()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _cancelPendingDisconnect(), connect(), heartbeatTimeout(), isMember(), leaveOpenTopic()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@323b8fc32a733a73bb6811945e79ce4a6eaaa493": "323b8fc feat: migrate to Lucide SVG sprite system" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@53ec4c10f19fa97df5c5dedd1dd25bc8d9e3063f": "53ec4c1 Merge pull request #16 ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 69ad055 Merge pull request #17 html Cle…, c9e85ef Deduplicate the 8 standalone ex…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@59a9f955e997d007e52d730af3d1c2baa97e945c": "59a9f95 toc: implement prehospital (EMT) curriculum skeleton" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@662adfbee05be686dfeb3f8bbe0175b5b17de144": "662adfb Ship the Performance section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[5f7c4f2 Merge pull request #12 Step 1&2…, app.js, guide-images, worktree-pr85-supabase-deploy, 829493a Merge Merged: pull request #13 …, 85f0dc5 Rebuild the admin console on Su…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7421ea4c9e9b7811f0006802183d4ed64d965be4": "7421ea4 Megacode cinematic promo" | kind=Commit | source=git | neighbors=[05dca1e Add Google Play preview cut of …, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1378508 Add BDLS v3.0 pre-test question…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@829493a9c668ca7211f2ed4140395a52750c1480": "829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐" | kind=Commit | source=git | neighbors=[5f7c4f2 Merge pull request #12 Step 1&2…, 662adfb Ship the Performance section fr…, app.js, guide-images, main, worktree-pr85-supabase-deploy] | lang=pt
- "content_c_index": "c-index.js" | kind=code-symbol | source=content/c-index.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 1bd0a15 PR #38 medications-cleanup-xnuh…, 8c61be7 Merge pull request #22 raw mark…, ae7e23e Fix Table of Contents chapters …, bindIndexBehaviour(), generateIndexHTML()] | lang=en
- "content_c1": "c1.js" | kind=code-symbol | source=content/c1.js:L1 | neighbors=[54bf4f2 Chapter 1 rewrite: Foundations …, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, eb1ff62 Rewrite chapter 1 (Foundations …, 02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…] | lang=en
- "scripts_record": "record.js" | kind=code-symbol | source=promo/megacode/scripts/record.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, driver.js, open(), advance(), ANSWERS] | lang=en
- "tests_test_api_register": "_register()" | kind=code-symbol | source=tests/test_api.py:L9 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_non_admin_cannot_update_role()] | lang=en
- "vendor_chart_4_5_1_umd_min_si": "Si()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), .drawGrid(), _i(), l(), Ta()] | lang=en
- "vendor_chart_4_5_1_umd_min_u": "u()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ln(), Ta(), .bindUserEvents(), .buildOrUpdateScales(), ._computeLabelSizes()] | lang=en
- "vendor_supabase_js_2_110_0_tostring": "toString()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, applyTransformOptsToQuery(), cloneRequestState(), download(), getPublicUrl(), _getSessionFromURL()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2a5f204d0e397b1c804de43d7f6304728c6697c0": "2a5f204 Add SmartCare Megacode cinematic promo (promo/megacode/)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 05dca1e Add Google Play preview cut of …, audio.py] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@4e043449ee81107a468aa101968d4f7e7f3c1bf9": "4e04344 feat: migrate to Lucide SVG sprite system" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@582a9d8c763825db209f7ee232a2d5fd9fe258de": "582a9d8 Chapter 3 rewrite  ✅" | kind=Commit | source=git | neighbors=[0673752 PR #67 Homepage Redesigned ✨, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@7543d58eba8b247992e4d6a6091468ff7ed350e3": "7543d58 Add illustrations to the chapter and formulary guides" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, b40ee4a Add illustrations to the chapte…, c1.js, c10.js, c2.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b40ee4a2685ed57c5b4172dce376034a1b7f566b": "b40ee4a Add illustrations to the chapter and formulary guides ✅ 🖼️ ⭐" | kind=Commit | source=git | neighbors=[7543d58 Add illustrations to the chapte…, ccr-b58d9c43-7az2tj, badddb6 Harden static file serving, adm…, c1.js, c10.js, c2.js] | lang=en
- "tests_test_content_guides": "test_content_guides.py" | kind=code-symbol | source=tests/test_content_guides.py:L1 | neighbors=[18ca925 Wrap a long line in the guide c…, 582a9d8 Chapter 3 rewrite  ✅, 5f4c3e6 Formulary group A: cardiac & re…, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, 7208d8e Rewrite chapter 3 (Airway & Ven…] | lang=en
- "vendor_chart_4_5_1_umd_min_da": "da()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), ca, dataset(), l(), la()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_notifyplugins": ".notifyPlugins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterDraw(), sn, tn, ._callHooks(), .destroy(), .draw()] | lang=en
- "vendor_supabase_js_2_110_0_request": "request()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, ajax(), createNamespace(), createTable(), dropNamespace(), dropTable()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-001.json

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
