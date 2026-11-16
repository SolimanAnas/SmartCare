# Node Description Batch 3 of 62

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

- "scripts_build_screenshots": "build-screenshots.js" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L1 | neighbors=[7dcb4bd Merge pull request #61 from Sol…, c7f6894 Add Google Play screenshot camp…, checkPng(), { chromium }, contactSheetHtml(), dataUri()]
- "vendor_chart_4_5_1_umd_min_tn_getdatasetmeta": ".getDatasetMeta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), afterDatasetsUpdate(), da(), dataset(), .getMeta(), .getMaxBorderWidth()]
- "vendor_supabase_js_2_110_0_add": "add()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, push(), ajax(), eq(), gt(), gte()]
- "commit:repo:github.com/SolimanAnas/SmartCare@02bf7e644e7a038f4e5e21a38810bd927880fd2c": "02bf7e6 fix: replace single-quoted SVG attributes with double quotes" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@0bee1e7f92c7c67776f3280ca7bd10e13f9b5693": "0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@4999b7f64887d314e380a4dc3f26c0cda84ab73a": "4999b7f swot-its-compliance-GaiuJ" | kind=Commit | source=git | neighbors=[46e3cd1 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@77d43551b0cb4e685f16a5147f79785b0e9be437": "77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency" | kind=Commit | source=git | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8f311cdee2c6f2992890795e6c835c4d237447f0": "8f311cd Merge branch 'main' of https://github.com/SolimanAnas/CPG-2025" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@d1b235f765f2d00709c3b06befc31ad77a31276d": "d1b235f Merge pull request #15 Offline & PWA upgrades ✅" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, 83a1ea8 Ship the Offline & PWA section …, app.js, ccr-b58d9c43-7az2tj, guide-images, main]
- "vendor_chart_4_5_1_umd_min_co": "co()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Do(), n(), Oe(), ro(), .getIndexAngle()]
- "vendor_chart_4_5_1_umd_min_ya": "ya" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .adjustHitBoxes(), .buildLabels(), ._computeTitleHeight(), .constructor()]
- "vendor_supabase_js_2_110_0_notifyallsubscribers": "_notifyAllSubscribers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), _debug(), from(), _recoverAndRefresh()]
- "vendor_supabase_js_2_110_0_savesession": "_saveSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), initialize(), _recoverAndRefresh(), _debug()]
- "commit:repo:github.com/SolimanAnas/SmartCare@2b1ffb7df1cdc4cc1effe2617ca882992e3d2d38": "2b1ffb7 Port BDLS and EMPACT course reviewers onto a dedicated branch" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 179984f Scaffold PEPP reviewer (courses…]
- "commit:repo:github.com/SolimanAnas/SmartCare@6663113735e6dd48d97b2ea1cbffb96000a0e80b": "6663113 PR #63 Update ECG simulator" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, 17232c9 Fix Ruff lint failure in Megaco…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@7208d8e96a4548966c11a68b6ec09a3493ae2e28": "7208d8e Rewrite chapter 3 (Airway & Ventilation) as guides; guide renderer and …" | kind=Commit | source=git | neighbors=[app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 18ca925 Wrap a long line in the guide c…]
- "commit:repo:github.com/SolimanAnas/SmartCare@877d8563506489ec2c44655014ce7c12da1e86d6": "877d856 Medical-bdls-empact-pepp-reviewers" | kind=Commit | source=git | neighbors=[3a000d0 Integrate Medical reviewer into…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 954bb06 docs: rewrite README with profe…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8a6ee0bcdfbf2ba692f9367d540c696843aef629": "8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, main, 90c10bb Make hero greeting on index.htm…, a4deb03 Merge pull request #8 from Soli…, c0.js, c1.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@8c61be706bdbed1c53fbeb5d2c0fcf7a832e6ff1": "8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅" | kind=Commit | source=git | neighbors=[1543337 Fix raw markup in Last Visited,…, 301bb11 Fix NaN days ago — index.html r…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@94235c68663f4d978835344a4cf366a7469c5783": "94235c6 Ship the critical hardening list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1ca0f65 Ship the High priority list fro…, 20260702000001_create_user_state.sql]
- "commit:repo:github.com/SolimanAnas/SmartCare@99cd25c88503ea3b1c63704b6c33a6ff812330bb": "99cd25c Organized the Repo, Fixing all the links" | kind=Commit | source=git | neighbors=[8f311cd Merge branch 'main' of https://…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@a4deb031e7d25457487335262b6329ef02aed316": "a4deb03 Merge pull request #8 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, 8a6ee0b Fix invisible table borders and…, main, 4ccb8df Merge pull request #9 from Soli…, c0.js, c1.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c7c9a6fb230ca2911ccf540f080007aa589b4fe0": "c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS st…" | kind=Commit | source=git | neighbors=[77d4355 Merge pull request #21 from Sol…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e98b15caa8ec6ba54517f26bca40b61d1504f00a": "e98b15c Merge PR #36 MCI Course" | kind=Commit | source=git | neighbors=[106f200 Add MCI exam page with final ex…, 2c06261 Remove Respiratory Patterns tab…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@f008f88f7519bc51bf5af4010188aad5ba9e67fa": "f008f88 Merge pull request #27 BDLS & EMPACT ✅" | kind=Commit | source=git | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, d6f12c6 Add course documentation: BDLS,…, build.py, ccr-b58d9c43-7az2tj, guide-images, main]
- "content_c2": "c2.js" | kind=code-symbol | source=content/c2.js:L1 | neighbors=[7543d58 Add illustrations to the chapte…, 78cc7e6 Rewrite chapter 2 (Patient Asse…, 7d4e283 Falling consciousness in respir…, b40ee4a Add illustrations to the chapte…, ed28729 Chapter 2 rewrite: Patient Asse…, 02bf7e6 fix: replace single-quoted SVG …]
- "scripts_compose_lib_capture": "Capture" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L47 | neighbors=[compose_lib.py, .clicks(), .frame(), .frames(), .__init__(), .mark()]
- "shared_admin": "admin.ts" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L1 | neighbors=[index.ts, index.ts, index.ts, 2c020d4 Remove the Flask server; move a…, 7c821ae Merge pull request #14 Admin da…, 85f0dc5 Rebuild the admin console on Su…]
- "tests_conftest": "conftest.py" | kind=code-symbol | source=tests/conftest.py:L1 | neighbors=[2c020d4 Remove the Flask server; move a…, 5f7c4f2 Merge pull request #12 Step 1&2…, server.py, app(), client(), runner()]
- "vendor_chart_4_5_1_umd_min_rn": "rn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors(), .createResolver(), .getOptionScopes(), .pluginScopeKeys(), .add()]
- "vendor_chart_4_5_1_umd_min_updateelements": "updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), _calculateBarIndexPixels(), _calculateBarValuePixels(), _getRuler(), jn()]
- "vendor_chart_4_5_1_umd_min_xt": "xt" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, Ft(), It(), .add(), .constructor(), ._getAnims()]
- "vendor_supabase_js_2_110_0_acquirelock": "_acquireLock()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), push(), _autoRefreshTokenTick(), _challenge(), exchangeCodeForSession()]
- "commit:repo:github.com/SolimanAnas/SmartCare@1d86134cb4354c77c56508110db1b6214e8a63d7": "1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@beb9c47aec6456afedc3e4f0809372721f1143de": "beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wi…" | kind=Commit | source=git | neighbors=[0ac5f99 feat(ui): cherry-pick loading o…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "scripts_capture_screenshots": "capture-screenshots.js" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L1 | neighbors=[7dcb4bd Merge pull request #61 from Sol…, c7f6894 Add Google Play screenshot camp…, argBase, { chromium }, FIXED_NOW, fs]
- "scripts_generate_sitemap": "generate_sitemap.py" | kind=code-symbol | source=scripts/generate_sitemap.py:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 20ed56a Integrate PEPP reviewer into pl…, 22c0924 Add MCI (Mass Casualty Incident…, 23060c0 Integrate BLS reviewer into pla…, 2b1ffb7 Port BDLS and EMPACT course rev…, 2e859ad Adding PALS Course]
- "tests_prometric_spec": "prometric.spec.js" | kind=code-symbol | source=tests/prometric.spec.js:L1 | neighbors=[734b6ca Prometric exam: add an Exam Lev…, 7b23e68 PR #47 Update Question bank, fa0335e Add 190 paramedic-level (ALS) q…, navigateWizard(), 02bf7e6 fix: replace single-quoted SVG …, 093fcc2 fix(ui): remove auto-advance, s…]
- "vendor_chart_4_5_1_umd_min_ki": "ki()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), lo(), po(), .setDimensions(), Ta()]
- "vendor_chart_4_5_1_umd_min_update": "update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), is(), .resolveDatasetElementOptions(), .updateElement(), ki()]

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
