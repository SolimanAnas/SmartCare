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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "vendor_chart_4_5_1_umd_min_co": "co()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Do(), n(), Oe(), ro(), .getIndexAngle()] | lang=en
- "vendor_chart_4_5_1_umd_min_ya": "ya" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .adjustHitBoxes(), .buildLabels(), ._computeTitleHeight(), .constructor()] | lang=en
- "vendor_supabase_js_2_110_0_notifyallsubscribers": "_notifyAllSubscribers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), _debug(), from(), _recoverAndRefresh()] | lang=en
- "vendor_supabase_js_2_110_0_savesession": "_saveSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), initialize(), _recoverAndRefresh(), _debug()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2a5f204d0e397b1c804de43d7f6304728c6697c0": "2a5f204 Add SmartCare Megacode cinematic promo (promo/megacode/)" | kind=Commit | source=git | neighbors=[main, 05dca1e Add Google Play preview cut of …, audio.py, compose.py, compose_lib.py, driver.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@582a9d8c763825db209f7ee232a2d5fd9fe258de": "582a9d8 Chapter 3 rewrite  ✅" | kind=Commit | source=git | neighbors=[0673752 PR #67 Homepage Redesigned ✨, app.js, main, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, c3.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@8a6ee0bcdfbf2ba692f9367d540c696843aef629": "8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, main, 90c10bb Make hero greeting on index.htm…, a4deb03 Merge pull request #8 from Soli…, c0.js, c1.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@99cd25c88503ea3b1c63704b6c33a6ff812330bb": "99cd25c Organized the Repo, Fixing all the links" | kind=Commit | source=git | neighbors=[8f311cd Merge branch 'main' of https://…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4deb031e7d25457487335262b6329ef02aed316": "a4deb03 Merge pull request #8 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, 8a6ee0b Fix invisible table borders and…, main, 4ccb8df Merge pull request #9 from Soli…, c0.js, c1.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c7c9a6fb230ca2911ccf540f080007aa589b4fe0": "c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS st…" | kind=Commit | source=git | neighbors=[77d4355 Merge pull request #21 from Sol…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "content_formulary": "formulary.js" | kind=code-symbol | source=content/formulary.js:L1 | neighbors=[05afd15 Cap IV diazepam and midazolam s…, 2550192 PR #37 Medications update, 5f4c3e6 Formulary group A: cardiac & re…, 6bb10e4 Formulary group D: fluids, gluc…, 8080576 PR #30, Redesign drug monograph…, 8389b95 Redesign formulary overview car…] | lang=en
- "scripts_compose_lib_capture": "Capture" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L47 | neighbors=[compose_lib.py, .clicks(), .frame(), .frames(), .__init__(), .mark()] | lang=en
- "vendor_chart_4_5_1_umd_min_rn": "rn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors(), .createResolver(), .getOptionScopes(), .pluginScopeKeys(), .add()] | lang=en
- "vendor_chart_4_5_1_umd_min_updateelements": "updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), _calculateBarIndexPixels(), _calculateBarValuePixels(), _getRuler(), jn()] | lang=en
- "vendor_chart_4_5_1_umd_min_xt": "xt" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, Ft(), It(), .add(), .constructor(), ._getAnims()] | lang=en
- "vendor_supabase_js_2_110_0_acquirelock": "_acquireLock()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), push(), _autoRefreshTokenTick(), _challenge(), exchangeCodeForSession()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1d86134cb4354c77c56508110db1b6214e8a63d7": "1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@beb9c47aec6456afedc3e4f0809372721f1143de": "beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wi…" | kind=Commit | source=git | neighbors=[0ac5f99 feat(ui): cherry-pick loading o…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "scripts_capture_screenshots": "capture-screenshots.js" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L1 | neighbors=[7dcb4bd Merge pull request #61 from Sol…, c7f6894 Add Google Play screenshot camp…, argBase, { chromium }, FIXED_NOW, fs] | lang=en
- "scripts_generate_sitemap": "generate_sitemap.py" | kind=code-symbol | source=scripts/generate_sitemap.py:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 20ed56a Integrate PEPP reviewer into pl…, 22c0924 Add MCI (Mass Casualty Incident…, 23060c0 Integrate BLS reviewer into pla…, 2b1ffb7 Port BDLS and EMPACT course rev…, 2e859ad Adding PALS Course] | lang=en
- "tests_conftest": "conftest.py" | kind=code-symbol | source=tests/conftest.py:L1 | neighbors=[2e2f605 Ship the Security section from …, 5f7c4f2 Merge pull request #12 Step 1&2…, server.py, app(), client(), runner()] | lang=en
- "tests_prometric_spec": "prometric.spec.js" | kind=code-symbol | source=tests/prometric.spec.js:L1 | neighbors=[734b6ca Prometric exam: add an Exam Lev…, 7b23e68 PR #47 Update Question bank, fa0335e Add 190 paramedic-level (ALS) q…, navigateWizard(), 02bf7e6 fix: replace single-quoted SVG …, 093fcc2 fix(ui): remove auto-advance, s…] | lang=en
- "vendor_chart_4_5_1_umd_min_ki": "ki()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), lo(), po(), .setDimensions(), Ta()] | lang=en
- "vendor_chart_4_5_1_umd_min_update": "update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), is(), .resolveDatasetElementOptions(), .updateElement(), ki()] | lang=en
- "vendor_chart_4_5_1_umd_min_x": "x()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, b(), ce(), .register(), m(), ._computeGridLineItems()] | lang=en
- "vendor_supabase_js_2_110_0_s": "S()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), createIndex(), deleteVectors(), getVectors(), ht()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithethereum": "signInWithEthereum()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, catch(), m(), ms(), _notifyAllSubscribers(), request()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2520f226ef5688df0e156ca844bfa0f76cfd81e5": "2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cb179681e80e87af69aaf2f62b470867df6171": "67cb179 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8bee5a7fde08e64a6e7b24ba5c1128f5f627b04d": "8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-openi…" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b501450444932deb236e0879738e7110565f326": "9b50145 Secure SDLC Phase 2: password policy, rate limiting, audit logging" | kind=Commit | source=git | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a831ff4d5ac4125bde634c450e31bcb05e7e9c52": "a831ff4 Merge pull request #8 from SolimanAnas/ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d1b235f765f2d00709c3b06befc31ad77a31276d": "d1b235f Merge pull request #15 Offline & PWA upgrades ✅" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, 83a1ea8 Ship the Offline & PWA section …, app.js, main, 53ec4c1 Merge pull request #16 ✅, precache-manifest.js] | lang=en
- "content_c2": "c2.js" | kind=code-symbol | source=content/c2.js:L1 | neighbors=[78cc7e6 Rewrite chapter 2 (Patient Asse…, 7d4e283 Falling consciousness in respir…, ed28729 Chapter 2 rewrite: Patient Asse…, 02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…] | lang=en
- "scripts_compose_lib_bokeh": "Bokeh" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L171 | neighbors=[compose_lib.py, .__init__(), .render(), .sprite(), Out-of-focus clinical lights drifting s…, 33 s store-listing cut: the real app on…] | lang=en
- "shared_admin": "admin.ts" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L1 | neighbors=[index.ts, index.ts, index.ts, 7c821ae Merge pull request #14 Admin da…, 85f0dc5 Rebuild the admin console on Su…, AdminCaller] | lang=en
- "tests_test_api_login": "_login()" | kind=code-symbol | source=tests/test_api.py:L18 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_non_admin_cannot_update_role()] | lang=en
- "vendor_chart_4_5_1_umd_min_js_getdataset": ".getDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), initialize(), js, .buildOrUpdateElements(), .configure()] | lang=en
- "vendor_chart_4_5_1_umd_min_js_getparsed": ".getParsed()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), _calculateBarValuePixels(), draw(), getLabelAndValue(), _getRuler()] | lang=en
- "vendor_chart_4_5_1_umd_min_n_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), a(), f(), fn(), g(), .calculateTotal()] | lang=en

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
