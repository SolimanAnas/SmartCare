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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "vendor_chart_4_5_1_umd_min_x": "x()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, b(), ce(), .register(), m(), ._computeGridLineItems()] | lang=en
- "vendor_supabase_js_2_110_0_s": "S()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), createIndex(), deleteVectors(), getVectors(), ht()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithethereum": "signInWithEthereum()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, catch(), m(), ms(), _notifyAllSubscribers(), request()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@15433376abc94bbc394430291955ee01727dd629": "1543337 Fix raw markup in Last Visited, extend homepage search to sub-chapters,…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8c61be7 Merge pull request #22 raw mark…, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@154f42dc3a6850d7c2b3e530a5d4a655ba742d78": "154f42d Merge pull request #25 BLS reviewer" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, f953366 PR #26 BLS-reviewer] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2520f226ef5688df0e156ca844bfa0f76cfd81e5": "2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@63e2100b7f2cb69a559c1426606d67f3c2b089d5": "63e2100 Chapter 4 rewrite: Cardiovascular & Resuscitation" | kind=Commit | source=git | neighbors=[2ac796c Pulmonary edema gate: CPAP only…, 582a9d8 Chapter 3 rewrite  ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cb179681e80e87af69aaf2f62b470867df6171": "67cb179 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c821aed82020dcd71e48c31e7068945a05c8c8b": "7c821ae Merge pull request #14 Admin dashboard ✅" | kind=Commit | source=git | neighbors=[index.ts, index.ts, index.ts, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@83a1ea80a58845fddd9a6b711f412a85dd3f639e": "83a1ea8 Ship the Offline & PWA section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, aa3705c Add mid-cycle v2.0 audit: verif…, d1b235f Merge pull request #15 Offline …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8bee5a7fde08e64a6e7b24ba5c1128f5f627b04d": "8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-openi…" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b501450444932deb236e0879738e7110565f326": "9b50145 Secure SDLC Phase 2: password policy, rate limiting, audit logging" | kind=Commit | source=git | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a831ff4d5ac4125bde634c450e31bcb05e7e9c52": "a831ff4 Merge pull request #8 from SolimanAnas/ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "google_flow_update_tracker": "update-tracker.js" | kind=code-symbol | source=.google-flow/update-tracker.js:L1 | neighbors=[9724717 Add google-flow workspace and s…, counts, fs, generated, head, [iId, iTrack, iStatus, iNotes]] | lang=en
- "scripts_compose_lib_bokeh": "Bokeh" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L171 | neighbors=[compose_lib.py, .__init__(), .render(), .sprite(), Out-of-focus clinical lights drifting s…, 33 s store-listing cut: the real app on…] | lang=en
- "tests_test_api_login": "_login()" | kind=code-symbol | source=tests/test_api.py:L18 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_non_admin_cannot_update_role()] | lang=en
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
- "commit:repo:github.com/SolimanAnas/SmartCare@093fcc25e0af7bb85bbc32ac5b6943d839662f92": "093fcc2 fix(ui): remove auto-advance, show explanation until user clicks Next" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1041e6c06c26aa254ad40794a63cce89b90ac08d": "1041e6c major updates ✅🔥🧠" | kind=Commit | source=git | neighbors=[03d0cad Update ecg.html, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1116a68fd6f7d4209efb692c6844c641a0513e77": "1116a68 Chapter 8 rewrite: Environmental & Disaster ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 14bac52 Rewrite chapter 9 (Emergency Ph…, 1fa9c3a Run Playwright tests in parallel] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@123b1c0ed9be6403e280ebad8bbc20d31c887786": "123b1c0 Chapter 10 rewrite: Clinical Procedures & Skills ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5f4c3e6 Formulary group A: cardiac & re…, b2fa646 Formulary group A: cardiac and …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@22c09240665f6617014b8cf2124074ce06a0c53b": "22c0924 Add MCI (Mass Casualty Incident) course reviewer with timed drills" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 106f200 Add MCI exam page with final ex…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e859ad198c315bd6eba15414659842980235039": "2e859ad Adding PALS Course" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, bd7b1a9 Completing ACLS Course Reviewer, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3c15b4dfbc62398ebfad35ef0e6eaeceab8c2c35": "3c15b4d V2 ⭐ : Question Review, All Questions have 4 options ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f461d469bfa19460cfb19eb755c827981c0a568": "5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mo…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f4c3e6adeed3b4e8cd54a36a1ad8dfa78a1e7ed": "5f4c3e6 Formulary group A: cardiac & resuscitation drugs ✅" | kind=Commit | source=git | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 992b393 Drug Formulary group B: respira…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@5f7c4f281330866857f93fac3b12e6c961db87e5": "5f7c4f2 Merge pull request #12 Step 1&2 of V2 plan" | kind=Commit | source=git | neighbors=[app.js, worktree-pr85-supabase-deploy, 662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …, exam.js, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@66d31181e7f97dc0bc271a39391d7bf19e0a272e": "66d3118 BDLS update ,ECG engine update ✅" | kind=Commit | source=git | neighbors=[6663113 PR #63 Update ECG simulator, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 0366711 ECG Fixed ✅ Crisp waveform ⭐] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70abbed3010f771cedec4f0af14bc8dfcf8e90db": "70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports" | kind=Commit | source=git | neighbors=[28f8e2f docs: add Secure SDLC validatio…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7b23e68e562ccb20fe77bc7c26b9d00734a2f416": "7b23e68 PR #47 Update Question bank" | kind=Commit | source=git | neighbors=[312f7b9 PR #46 Audience levels, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7dfcee83bed9e6dd3d5168b247e4f01627e7da1b": "7dfcee8 Updated the exam engine ❤️✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en

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
