# Node Description Batch 4 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@beb9c47aec6456afedc3e4f0809372721f1143de": "beb9c47 fix(ui): swap CSS to 0dad921 glassmorphism; fix Chart.js colors; add wi…" | kind=Commit | source=git | neighbors=[0ac5f99 feat(ui): cherry-pick loading o…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c6": "c6.js" | kind=code-symbol | source=content/c6.js:L1 | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 7543d58 Add illustrations to the chapte…, a497e1f Rewrite chapter 6 (Trauma Emerg…, a7f8828 Chapter 6 update : Trauma Emerg…, b40ee4a Add illustrations to the chapte…] | lang=en
- "google_flow_update_tracker": "update-tracker.js" | kind=code-symbol | source=.google-flow/update-tracker.js:L1 | neighbors=[dc19fef Add google-flow workspace and s…, counts, fs, generated, head, [iId, iTrack, iStatus, iNotes]] | lang=en
- "prometric_exam_examengine_renderquestion": ".renderQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L650 | neighbors=[ExamEngine, .beginSession(), .goToQuestion(), .navigate(), .nextOrEnd(), .gradeOptions()] | lang=en
- "vendor_chart_4_5_1_umd_min_ki": "ki()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), lo(), po(), .setDimensions(), Ta()] | lang=en
- "vendor_chart_4_5_1_umd_min_update": "update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), is(), .resolveDatasetElementOptions(), .updateElement(), ki()] | lang=en
- "vendor_chart_4_5_1_umd_min_x": "x()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, b(), ce(), .register(), m(), ._computeGridLineItems()] | lang=en
- "vendor_supabase_js_2_110_0_s": "S()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), createIndex(), deleteVectors(), getVectors(), ht()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithethereum": "signInWithEthereum()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, catch(), m(), ms(), _notifyAllSubscribers(), request()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1116a68fd6f7d4209efb692c6844c641a0513e77": "1116a68 Chapter 8 rewrite: Environmental & Disaster ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 14bac52 Rewrite chapter 9 (Emergency Ph…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@123b1c0ed9be6403e280ebad8bbc20d31c887786": "123b1c0 Chapter 10 rewrite: Clinical Procedures & Skills ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 5f4c3e6 Formulary group A: cardiac & re…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@22c09240665f6617014b8cf2124074ce06a0c53b": "22c0924 Add MCI (Mass Casualty Incident) course reviewer with timed drills" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 106f200 Add MCI exam page with final ex…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e859ad198c315bd6eba15414659842980235039": "2e859ad Adding PALS Course" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, bd7b1a9 Completing ACLS Course Reviewer] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3c15b4dfbc62398ebfad35ef0e6eaeceab8c2c35": "3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4999b7f64887d314e380a4dc3f26c0cda84ab73a": "4999b7f swot-its-compliance-GaiuJ" | kind=Commit | source=git | neighbors=[46e3cd1 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f4c3e6adeed3b4e8cd54a36a1ad8dfa78a1e7ed": "5f4c3e6 Formulary group A: cardiac & resuscitation drugs ✅" | kind=Commit | source=git | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@66d31181e7f97dc0bc271a39391d7bf19e0a272e": "66d3118 BDLS update ,ECG engine update ✅" | kind=Commit | source=git | neighbors=[6663113 PR #63 Update ECG simulator, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7b23e68e562ccb20fe77bc7c26b9d00734a2f416": "7b23e68 PR #47 Update Question bank" | kind=Commit | source=git | neighbors=[312f7b9 PR #46 Audience levels, app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81f95d0a2e0242bc2d6a14ce8ba7d8f7b474bf48": "81f95d0 ⭐PR #60 Unified Course Design star ⭐" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 2a5f204 Add SmartCare Megacode cinemati…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@83a1ea80a58845fddd9a6b711f412a85dd3f639e": "83a1ea8 Ship the Offline & PWA section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, aa3705c Add mid-cycle v2.0 audit: verif…, d1b235f Merge pull request #15 Offline …, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f311cdee2c6f2992890795e6c835c4d237447f0": "8f311cd Merge branch 'main' of https://github.com/SolimanAnas/CPG-2025" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d01251f918b6992b204ae001307edda2c939de14": "d01251f Formulary group D (fluids, glucose, antidotes, obstetric) and overview …" | kind=Commit | source=git | neighbors=[6bb10e4 Formulary group D: fluids, gluc…, 8ac7ca0 Formulary group C: sedation, se…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "content_c4": "c4.js" | kind=code-symbol | source=content/c4.js:L1 | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 2ac796c Pulmonary edema gate: CPAP only…, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, 7543d58 Add illustrations to the chapte…] | lang=en
- "prometric_exam_examengine_updateavailablecount": ".updateAvailableCount()" | kind=code-symbol | source=src/prometric/exam.js:L386 | neighbors=[ExamEngine, .applySettingsToUI(), .goToSetup(), .onTopicsChanged(), .selectMode(), .selectSetting()] | lang=en
- "scripts_compose_lib_bokeh": "Bokeh" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L171 | neighbors=[compose_lib.py, .__init__(), .render(), .sprite(), Out-of-focus clinical lights drifting s…, 33 s store-listing cut: the real app on…] | lang=en
- "vendor_chart_4_5_1_umd_min_js_getdataset": ".getDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), initialize(), js, .buildOrUpdateElements(), .configure()] | lang=en
- "vendor_chart_4_5_1_umd_min_js_getparsed": ".getParsed()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), _calculateBarIndexPixels(), _calculateBarValuePixels(), draw(), getLabelAndValue(), _getRuler()] | lang=en
- "vendor_chart_4_5_1_umd_min_n_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), a(), f(), fn(), g(), .calculateTotal()] | lang=en
- "vendor_chart_4_5_1_umd_min_oo": "oo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), na(), .constructor(), .draw(), .first()] | lang=en
- "vendor_chart_4_5_1_umd_min_ss": "ss()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, os(), es(), is(), o(), .acquireContext()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getlabels": ".getLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[buildTicks(), da(), determineDataLimits(), getLabelAndValue(), .getLabelTimestamps(), init()] | lang=en
- "vendor_chart_4_5_1_umd_min_yn": "yn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .createResolver(), .resolveNamedOptions(), je(), ._computeAngle(), .constructor()] | lang=en
- "vendor_supabase_js_2_110_0_getuser": "getUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _getAuthenticatorAssuranceLevel(), getClaims(), _acquireLock(), m()] | lang=en
- "vendor_supabase_js_2_110_0_initialize": "initialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _debug(), _getSessionFromURL(), _handleVisibilityChange(), _isImplicitGrantCallback()] | lang=en
- "vendor_supabase_js_2_110_0_send": "send()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, leave(), push(), resend(), canPush(), _fetchWithTimeout()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0159986df1b3d8b150b9e9d8f1fc199963a5ccc0": "0159986 Chapter 5 rewrite: Medical Emergencies ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 78cc7e6 Rewrite chapter 2 (Patient Asse…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@093fcc25e0af7bb85bbc32ac5b6943d839662f92": "093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1041e6c06c26aa254ad40794a63cce89b90ac08d": "1041e6c major updates ✅🔥🧠" | kind=Commit | source=git | neighbors=[03d0cad Update ecg.html, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@17232c9a91c8616537acf15a117e26cb5afdba4a": "17232c9 Fix Ruff lint failure in Megacode promo scripts" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 6663113 PR #63 Update ECG simulator] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1bd0a15c3bb8cfb385aba8a57cc73cbb79e2274c": "1bd0a15 PR #38 medications-cleanup-xnuh0i" | kind=Commit | source=git | neighbors=[app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=pt

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
