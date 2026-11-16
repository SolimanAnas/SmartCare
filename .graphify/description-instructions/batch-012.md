# Node Description Batch 13 of 63

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
- "commit:repo:github.com/SolimanAnas/SmartCare@0555934e2b6e5e9f59ba4bb24065645c854d0506": "0555934 Author PEPP chapters c09-c11 (trauma, toxic/environmental, neonatal)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, e630fb6 Author PEPP chapters c12-c14, c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05fc83d2e47f1b864e8248891326212642bfe399": "05fc83d fix: re-disable auth guard on courses page (was accidentally uncommente…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@11207b469453f62b79397d9f0287b64664aca701": "11207b4 chore: add playwright-report and test-results to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@13785086b08d151bf6b027032d7ab8d37cc15a9f": "1378508 Add BDLS v3.0 pre-test question bank" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 07b8707 Show BDLS pre-test first in exa…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@18ca925cc61b3852ead75191f1ed905f059e6066": "18ca925 Wrap a long line in the guide content test (ruff E501)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 6bcfae8 Infant choking: chest thrusts w…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1c052319b55d91fb7aa2ec0f9e2a16d8daf892cc": "1c05231 Fix layout issues found in a mobile audit of all pages" | kind=Commit | source=git | neighbors=[1b4fd7d PR #42 Add animated dose-calcul…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2146843fa7789f566266d1e8f68117e049ec4413": "2146843 chore: untrack playwright-report and test-results artifacts" | kind=Commit | source=git | neighbors=[11207b4 chore: add playwright-report an…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2521a89396aa1120fac9807949e1c0969d2f00b9": "2521a89 style: resize action-button Lucide icons to 1.5em inline accent size" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@26da0f4742a4dd8bcbbcbad4de6634e1b5b0d865": "26da0f4 Add read-only question database audit report" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@273600ccdbcd63b668fe861156fb74bf307686eb": "273600c chore: ignore run-debug.mjs scratch script" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@27fd0d1773775a89c199c582747618213d909de5": "27fd0d1 Author PEPP chapters c03-c04 (primary assessment, history/secondary ass…" | kind=Commit | source=git | neighbors=[179984f Scaffold PEPP reviewer (courses…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2875fd1a0c08a5946a3b04042371cbb90034e978": "2875fd1 feat: continue learning card, thicker progress bars, meaningful progres…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2ac796c44aeef3174e8afa28f5ad23d8548c3b39": "2ac796c Pulmonary edema gate: CPAP only when awake, protecting the airway and n…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 63e2100 Chapter 4 rewrite: Cardiovascul…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@33c9dd7bb174acb9ced8ec3f37508895a6f4c4ac": "33c9dd7 Author BLS chapters c04-c06 (2-rescuer/teams, AED, ventilation)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, f4356e0 Author BLS chapters c07-c09 (br…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@39ba2028bcd67279de8a7be079316c8ac45119cd": "39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pag…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3c6f528f5edff89e65b4304cad3b822c77cac75c": "3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner a…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3e50ecde28aeeb0f121e4c5cc69418a913b88d72": "3e50ecd Merge remote-tracking branch 'origin/main' into ccr-81fddd6b-wx4wsm" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 05afd15 Cap IV diazepam and midazolam s…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f751adb5c9bc978e26f667056a07e8aa2027ca8": "3f751ad Regenerate precache-manifest.js after final page edits" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 5cfcb95 PR #55 fix Home ring] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4f69b7cf1d05ccbc37def03b0723928adf5e3d52": "4f69b7c Remove extra padding above search bar" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fc5e357eeac5f3e1ff0f5321f4fe0c0092fcbb4": "4fc5e35 Sync Prometric progress, follow the app theme, show hints" | kind=Commit | source=git | neighbors=[3cde249 Improved the prometric exam pag…, main, 4c061e2 Fix the explanation and hint fo…, precache-manifest.js, exam.js, progress.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@503d0e1699bdadb4f7175ecb92717550c1770eb6": "503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508b810f88f199a6d6a7436b64cf869effd96c6f": "508b810 Author Medical chapters c02-c03 (seizures/AMS, DKA/HHS)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, c34a015 Author Medical chapters c04-c06…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@521060d9852ec14d305937c0cc2041c59ef27d50": "521060d BLS , ACLS, PALS added ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, d9844d1 Fix CI: break long line in gene…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-012.json

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
