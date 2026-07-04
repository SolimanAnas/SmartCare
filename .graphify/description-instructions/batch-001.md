# Node Description Batch 2 of 48

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

- "vendor_chart_4_5_1_umd_min_e": "e()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ._notify(), at(), Ye(), ei(), ho()] | lang=en
- "vendor_chart_4_5_1_umd_min_jt": "jt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .alpha(), .clearer(), .clone(), .constructor(), .darken()] | lang=en
- "vendor_chart_4_5_1_umd_min_r": "r()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .register(), fn(), ho(), ji(), ._dataCheck()] | lang=en
- "vendor_supabase_js_2_110_0_log": "log()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _cancelPendingDisconnect(), connect(), heartbeatTimeout(), isMember(), leaveOpenTopic()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4e043449ee81107a468aa101968d4f7e7f3c1bf9": "4e04344 feat: migrate to Lucide SVG sprite system" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@59a9f955e997d007e52d730af3d1c2baa97e945c": "59a9f95 toc: implement prehospital (EMT) curriculum skeleton" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "tests_test_api_register": "_register()" | kind=code-symbol | source=tests/test_api.py:L9 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_non_admin_cannot_update_role()] | lang=en
- "vendor_chart_4_5_1_umd_min_si": "Si()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), .drawGrid(), _i(), l(), Ta()] | lang=en
- "vendor_chart_4_5_1_umd_min_u": "u()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ln(), Ta(), .bindUserEvents(), .buildOrUpdateScales(), ._computeLabelSizes()] | lang=en
- "vendor_supabase_js_2_110_0_tostring": "toString()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, applyTransformOptsToQuery(), cloneRequestState(), download(), getPublicUrl(), _getSessionFromURL()] | lang=en
- "vendor_chart_4_5_1_umd_min_da": "da()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), ca, dataset(), l(), la()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_notifyplugins": ".notifyPlugins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterDraw(), sn, tn, ._callHooks(), .destroy(), .draw()] | lang=en
- "vendor_supabase_js_2_110_0_request": "request()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, ajax(), createNamespace(), createTable(), dropNamespace(), dropTable()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@02bf7e644e7a038f4e5e21a38810bd927880fd2c": "02bf7e6 fix: replace single-quoted SVG attributes with double quotes" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@662adfbee05be686dfeb3f8bbe0175b5b17de144": "662adfb Ship the Performance section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[5f7c4f2 Merge pull request #12 Step 1&2…, app.js, main, 829493a Merge Merged: pull request #13 …, 85f0dc5 Rebuild the admin console on Su…, c10.meta.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@77d43551b0cb4e685f16a5147f79785b0e9be437": "77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency" | kind=Commit | source=git | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@829493a9c668ca7211f2ed4140395a52750c1480": "829493a Merge Merged: pull request #13 Performance ✅ V2 ⭐" | kind=Commit | source=git | neighbors=[5f7c4f2 Merge pull request #12 Step 1&2…, 662adfb Ship the Performance section fr…, app.js, main, 7c821ae Merge pull request #14 Admin da…, c10.meta.js] | lang=pt
- "vendor_chart_4_5_1_umd_min_tn_getdatasetmeta": ".getDatasetMeta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), afterDatasetsUpdate(), da(), dataset(), .getMeta(), .getMaxBorderWidth()] | lang=en
- "vendor_supabase_js_2_110_0_add": "add()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, push(), ajax(), eq(), gt(), gte()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0bee1e7f92c7c67776f3280ca7bd10e13f9b5693": "0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4999b7f64887d314e380a4dc3f26c0cda84ab73a": "4999b7f swot-its-compliance-GaiuJ" | kind=Commit | source=git | neighbors=[46e3cd1 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@53ec4c10f19fa97df5c5dedd1dd25bc8d9e3063f": "53ec4c1 Merge pull request #16 ✅" | kind=Commit | source=git | neighbors=[main, 69ad055 Merge pull request #17 html Cle…, c9e85ef Deduplicate the 8 standalone ex…, 20260702000001_create_user_state.sql, 20260702000002_create_profiles.sql, playwright.config.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f311cdee2c6f2992890795e6c835c4d237447f0": "8f311cd Merge branch 'main' of https://github.com/SolimanAnas/CPG-2025" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c7c9a6fb230ca2911ccf540f080007aa589b4fe0": "c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS st…" | kind=Commit | source=git | neighbors=[77d4355 Merge pull request #21 from Sol…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "vendor_chart_4_5_1_umd_min_co": "co()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Do(), n(), Oe(), ro(), .getIndexAngle()] | lang=en
- "vendor_chart_4_5_1_umd_min_ya": "ya" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .adjustHitBoxes(), .buildLabels(), ._computeTitleHeight(), .constructor()] | lang=en
- "vendor_supabase_js_2_110_0_notifyallsubscribers": "_notifyAllSubscribers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), _debug(), from(), _recoverAndRefresh()] | lang=en
- "vendor_supabase_js_2_110_0_savesession": "_saveSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), initialize(), _recoverAndRefresh(), _debug()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8a6ee0bcdfbf2ba692f9367d540c696843aef629": "8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, main, 90c10bb Make hero greeting on index.htm…, a4deb03 Merge pull request #8 from Soli…, c0.js, c1.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@99cd25c88503ea3b1c63704b6c33a6ff812330bb": "99cd25c Organized the Repo, Fixing all the links" | kind=Commit | source=git | neighbors=[8f311cd Merge branch 'main' of https://…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4deb031e7d25457487335262b6329ef02aed316": "a4deb03 Merge pull request #8 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, 8a6ee0b Fix invisible table borders and…, main, 4ccb8df Merge pull request #9 from Soli…, c0.js, c1.js] | lang=en
- "content_c1": "c1.js" | kind=code-symbol | source=content/c1.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 59a9f95 toc: implement prehospital (EMT…, 65ac830 feat: restructure Chapter 1 — m…, 77d4355 Merge pull request #21 from Sol…] | lang=en
- "vendor_chart_4_5_1_umd_min_rn": "rn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors(), .createResolver(), .getOptionScopes(), .pluginScopeKeys(), .add()] | lang=en
- "vendor_chart_4_5_1_umd_min_updateelements": "updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), _calculateBarIndexPixels(), _calculateBarValuePixels(), _getRuler(), jn()] | lang=en
- "vendor_chart_4_5_1_umd_min_xt": "xt" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, Ft(), It(), .add(), .constructor(), ._getAnims()] | lang=en
- "vendor_supabase_js_2_110_0_acquirelock": "_acquireLock()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), push(), _autoRefreshTokenTick(), _challenge(), exchangeCodeForSession()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1d86134cb4354c77c56508110db1b6214e8a63d7": "1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@beb9c47aec6456afedc3e4f0809372721f1143de": "beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wi…" | kind=Commit | source=git | neighbors=[0ac5f99 feat(ui): cherry-pick loading o…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c_index": "c-index.js" | kind=code-symbol | source=content/c-index.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 1a56d75 feat: graphify rebuild with des…, 26ac1b0 new index with pdf, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 5d23c19 fix: improve heading and index-…] | lang=en
- "precache_manifest": "precache-manifest.js" | kind=code-symbol | source=precache-manifest.js:L1 | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, 3c15b4d V2 ⭐ : Question Review, All Que…, 503d0e1 Fix 36 single-option questions …, 53ec4c1 Merge pull request #16 ✅, 5d2d46f Fix WCAG AA contrast failure in…, 69ad055 Merge pull request #17 html Cle…] | lang=en

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
