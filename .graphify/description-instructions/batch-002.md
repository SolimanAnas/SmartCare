# Node Description Batch 3 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@b791fda62e041ca6d3c20a155e4cd309f7f10a90": "b791fda content: deploy chapters 4-5 (Cardiovascular & Medical Emergencies) wit…" | kind=Commit | source=git | neighbors=[602ffdf chore: gitignore copyrighted so…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "content_c2": "c2.js" | kind=code-symbol | source=content/c2.js:L1 | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 7543d58 Add illustrations to the chapte…, 78cc7e6 Rewrite chapter 2 (Patient Asse…, 7d4e283 Falling consciousness in respir…, b40ee4a Add illustrations to the chapte…]
- "prometric_progress": "progress.js" | kind=code-symbol | source=src/prometric/progress.js:L1 | neighbors=[4fc5e35 Sync Prometric progress, follow…, 828970b Prometric Question Bank Updated…, addExam(), clear(), compactExam(), compactHistory()]
- "vendor_chart_4_5_1_umd_min_tn_getdatasetmeta": ".getDatasetMeta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[aa(), afterDatasetsUpdate(), da(), dataset(), .getMeta(), .getMaxBorderWidth()]
- "vendor_supabase_js_2_110_0_add": "add()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, push(), ajax(), eq(), gt(), gte()]
- "commit:repo:github.com/SolimanAnas/SmartCare@02bf7e644e7a038f4e5e21a38810bd927880fd2c": "02bf7e6 fix: replace single-quoted SVG attributes with double quotes" | kind=Commit | source=git | neighbors=[app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@1cf1fb1d757031d11d569a282e753352e08c25f2": "1cf1fb1 Merge pull request #99 from SolimanAnas/guide-images-best" | kind=Commit | source=git | neighbors=[main, 3cde249 Improved the prometric exam pag…, e340cb2 Reorganize the Prometric exam p…, c10.js, c2.js, c3.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@2b1ffb7df1cdc4cc1effe2617ca882992e3d2d38": "2b1ffb7 Port BDLS and EMPACT course reviewers onto a dedicated branch" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@6663113735e6dd48d97b2ea1cbffb96000a0e80b": "6663113 PR #63 Update ECG simulator" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, 17232c9 Fix Ruff lint failure in Megaco…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@7208d8e96a4548966c11a68b6ec09a3493ae2e28": "7208d8e Rewrite chapter 3 (Airway & Ventilation) as guides; guide renderer and …" | kind=Commit | source=git | neighbors=[app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@77d43551b0cb4e685f16a5147f79785b0e9be437": "77d4355 Merge pull request #21 from SolimanAnas/fix/lucide-quote-consistency" | kind=Commit | source=git | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…]
- "commit:repo:github.com/SolimanAnas/SmartCare@877d8563506489ec2c44655014ce7c12da1e86d6": "877d856 Medical-bdls-empact-pepp-reviewers" | kind=Commit | source=git | neighbors=[3a000d0 Integrate Medical reviewer into…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@8c61be706bdbed1c53fbeb5d2c0fcf7a832e6ff1": "8c61be7 Merge pull request #22 raw markup code, SW, Extended search✅" | kind=Commit | source=git | neighbors=[1543337 Fix raw markup in Last Visited,…, 301bb11 Fix NaN days ago — index.html r…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@d1b235f765f2d00709c3b06befc31ad77a31276d": "d1b235f Merge pull request #15 Offline & PWA upgrades ✅" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, 83a1ea8 Ship the Offline & PWA section …, app.js, ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@e98b15caa8ec6ba54517f26bca40b61d1504f00a": "e98b15c Merge PR #36 MCI Course" | kind=Commit | source=git | neighbors=[106f200 Add MCI exam page with final ex…, 2c06261 Remove Respiratory Patterns tab…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@f008f88f7519bc51bf5af4010188aad5ba9e67fa": "f008f88 Merge pull request #27 BDLS & EMPACT ✅" | kind=Commit | source=git | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, d6f12c6 Add course documentation: BDLS,…, build.py, ccr-b58d9c43-7az2tj, guide-images, guide-images-best]
- "scripts_apply_guide_images": "apply_guide_images.js" | kind=code-symbol | source=scripts/apply_guide_images.js:L1 | neighbors=[7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, chapterIds, CONTENT, figure(), { figures }]
- "scripts_capture_screenshots": "capture-screenshots.js" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L1 | neighbors=[3cde249 Improved the prometric exam pag…, 7dcb4bd Merge pull request #61 from Sol…, c7f6894 Add Google Play screenshot camp…, e340cb2 Reorganize the Prometric exam p…, argBase, { chromium }]
- "scripts_generate_sitemap": "generate_sitemap.py" | kind=code-symbol | source=scripts/generate_sitemap.py:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 20ed56a Integrate PEPP reviewer into pl…, 22c0924 Add MCI (Mass Casualty Incident…, 23060c0 Integrate BLS reviewer into pla…, 2b1ffb7 Port BDLS and EMPACT course rev…, 2e859ad Adding PALS Course]
- "tests_mci_reviewer_spec": "mci-reviewer.spec.js" | kind=code-symbol | source=tests/mci-reviewer.spec.js:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, 2e4d5a6 MCI: Officer roles with two-row…, 34eb824 Merge pull request #106 from MC…, 6018c48 PR #57 MCI Exam 1, 66d3118 BDLS update ,ECG engine update ✅]
- "vendor_chart_4_5_1_umd_min_co": "co()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Do(), n(), Oe(), ro(), .getIndexAngle()]
- "vendor_chart_4_5_1_umd_min_ya": "ya" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start(), .adjustHitBoxes(), .buildLabels(), ._computeTitleHeight(), .constructor()]
- "vendor_supabase_js_2_110_0_notifyallsubscribers": "_notifyAllSubscribers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), _debug(), from(), _recoverAndRefresh()]
- "vendor_supabase_js_2_110_0_savesession": "_saveSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), exchangeCodeForSession(), initialize(), _recoverAndRefresh(), _debug()]
- "commit:repo:github.com/SolimanAnas/SmartCare@0bee1e7f92c7c67776f3280ca7bd10e13f9b5693": "0bee1e7 fix(ci): resolve ruff linting errors in scripts/ and tests/" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@294f48b7b9bdb6eac886200c97274cc40737712a": "294f48b Keep only the guide illustrations with no visible doubt" | kind=Commit | source=git | neighbors=[guide-images-best, main, 1cf1fb1 Merge pull request #99 from Sol…, c10.js, c2.js, c3.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@8a6ee0bcdfbf2ba692f9367d540c696843aef629": "8a6ee0b Fix invisible table borders and EMT-only tone in chapter summaries" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, main, 90c10bb Make hero greeting on index.htm…, a4deb03 Merge pull request #8 from Soli…, c0.js, c1.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@94235c68663f4d978835344a4cf366a7469c5783": "94235c6 Ship the critical hardening list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, 1ca0f65 Ship the High priority list fro…, 20260702000001_create_user_state.sql, 20260702000002_create_profiles.sql]
- "commit:repo:github.com/SolimanAnas/SmartCare@a4deb031e7d25457487335262b6329ef02aed316": "a4deb03 Merge pull request #8 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[6acd5dc feat: add SVT rhythm, improve P…, 8a6ee0b Fix invisible table borders and…, main, 4ccb8df Merge pull request #9 from Soli…, c0.js, c1.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c7c9a6fb230ca2911ccf540f080007aa589b4fe0": "c7c9a6f fix: restore missing <style> tags and fix SVG quote mismatches in JS st…" | kind=Commit | source=git | neighbors=[77d4355 Merge pull request #21 from Sol…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]
- "scripts_compose_lib_capture": "Capture" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L47 | neighbors=[compose_lib.py, .clicks(), .frame(), .frames(), .__init__(), .mark()]
- "src_install_prompt": "install-prompt.js" | kind=code-symbol | source=src/install-prompt.js:L1 | neighbors=[94865e6 PR #103, BDLS pre-test hints & …, ac21f18 Add Google Play / Add to Home S…, autoShow(), build(), busy(), ensureHomeScreenMeta()]
- "vendor_chart_4_5_1_umd_min_rn": "rn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors(), .createResolver(), .getOptionScopes(), .pluginScopeKeys(), .add()]
- "vendor_chart_4_5_1_umd_min_updateelements": "updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), _calculateBarIndexPixels(), _calculateBarValuePixels(), _getRuler(), jn()]
- "vendor_chart_4_5_1_umd_min_xt": "xt" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, Ft(), It(), .add(), .constructor(), ._getAnims()]
- "vendor_supabase_js_2_110_0_acquirelock": "_acquireLock()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), push(), _autoRefreshTokenTick(), _challenge(), exchangeCodeForSession()]
- "commit:repo:github.com/SolimanAnas/SmartCare@15433376abc94bbc394430291955ee01727dd629": "1543337 Fix raw markup in Last Visited, extend homepage search to sub-chapters,…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 8c61be7 Merge pull request #22 raw mark…, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@154f42dc3a6850d7c2b3e530a5d4a655ba742d78": "154f42d Merge pull request #25 BLS reviewer" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, f953366 PR #26 BLS-reviewer]
- "commit:repo:github.com/SolimanAnas/SmartCare@63e2100b7f2cb69a559c1426606d67f3c2b089d5": "63e2100 Chapter 4 rewrite: Cardiovascular & Resuscitation" | kind=Commit | source=git | neighbors=[2ac796c Pulmonary edema gate: CPAP only…, 582a9d8 Chapter 3 rewrite  ✅, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@99cd25c88503ea3b1c63704b6c33a6ff812330bb": "99cd25c Organized the Repo, Fixing all the links" | kind=Commit | source=git | neighbors=[8f311cd Merge branch 'main' of https://…, app.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1]

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
