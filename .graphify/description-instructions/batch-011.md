# Node Description Batch 12 of 62

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
- "admin_delete_user_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-delete-user/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "admin_list_users_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-list-users/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "admin_update_role_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-update-role/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05afd154bc1cce4ecfa6d4ad627b1c2e0615dd59": "05afd15 Cap IV diazepam and midazolam seizure doses at 10 mg per dose (AES)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8ac7ca0 Formulary group C: sedation, se…, formulary.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05fc83d2e47f1b864e8248891326212642bfe399": "05fc83d fix: re-disable auth guard on courses page (was accidentally uncommente…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07b10be7694807cad3435ffa777f96c1de31054b": "07b10be Hypertonic saline: separate hyponatraemic seizure dosing from the TBI d…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 500f1a7 Hypertonic saline: dose for mod…, formulary.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07b8707f007a6b5c203fc88e4173968e67b994f0": "07b8707 Show BDLS pre-test first in exam bank pickers" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6663113 PR #63 Update ECG simulator, d93e86e ECG Simulator: rebuild engine, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@11207b469453f62b79397d9f0287b64664aca701": "11207b4 chore: add playwright-report and test-results to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@179984fa63966139110698d7ec4730c859409e32": "179984f Scaffold PEPP reviewer (courses/pepp) with c01-c02 content" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 27fd0d1 Author PEPP chapters c03-c04 (p…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fa9c3ab0d4f0cb60f6a872bfce54320e2d020a5": "1fa9c3a Run Playwright tests in parallel" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, afeb5dc feat: Run Playwright tests in p…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2146843fa7789f566266d1e8f68117e049ec4413": "2146843 chore: untrack playwright-report and test-results artifacts" | kind=Commit | source=git | neighbors=[11207b4 chore: add playwright-report an…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2521a89396aa1120fac9807949e1c0969d2f00b9": "2521a89 style: resize action-button Lucide icons to 1.5em inline accent size" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@26da0f4742a4dd8bcbbcbad4de6634e1b5b0d865": "26da0f4 Add read-only question database audit report" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@273600ccdbcd63b668fe861156fb74bf307686eb": "273600c chore: ignore run-debug.mjs scratch script" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2875fd1a0c08a5946a3b04042371cbb90034e978": "2875fd1 feat: continue learning card, thicker progress bars, meaningful progres…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2ab1c09879d07807a9999bf121c4580560a8df9f": "2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 9b12c84 Merge pull request #20, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2c062613f9029de90a0335e4dd8c3ef49ebf75f2": "2c06261 Remove Respiratory Patterns tab from index.html" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 22c0924 Add MCI (Mass Casualty Incident…, e98b15c Merge PR #36 MCI Course] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e4d5a6d7bf13d870d73b02fb093176e5779861b": "2e4d5a6 MCI: Officer roles with two-row tabs and swipe between roles" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, c254251 Exam pages: one design for ever…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@301bb11e09abee8e1fc3c51b3ea52b2afcef575d": "301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' …" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@39ba2028bcd67279de8a7be079316c8ac45119cd": "39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pag…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3c6f528f5edff89e65b4304cad3b822c77cac75c": "3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner a…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@467bf9440fad0deff10ec2bf8189cbc10228b644": "467bf94 Restore full M1-38 medication formulary, de-branded from source" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7d02ca2 Rename drug formulary numbering…, curriculum-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4f69b7cf1d05ccbc37def03b0723928adf5e3d52": "4f69b7c Remove extra padding above search bar" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@500f1a7751f5ef14897caec1b4fb0cfda2a64eab": "500f1a7 Hypertonic saline: dose for moderate hyponatraemia symptoms and a lower…" | kind=Commit | source=git | neighbors=[07b10be Hypertonic saline: separate hyp…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, dfc25ad Merge pull request #83 from Hyp…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5157b39de21c35f150fbad2092e22d9d7d7d016b": "5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, f953366 PR #26 BLS-reviewer, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@55997dbc7ab441a14f719fc1d335da66a2bb34bd": "55997db ECG Simulator: easy mode, visible rhythm picker, advanced toggle" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8f44320 Update exam-page tests for the …, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@58e37c8577e994de16646d9e3b921b5b96da4f7f": "58e37c8 fix(css): collapse second multi-line SVG data URL in .exp-label::before…" | kind=Commit | source=git | neighbors=[273600c chore: ignore run-debug.mjs scr…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d2d46fe76134bde01e41fb2fef194250c331615": "5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@602ffdf28f1716f08636a655b10911c66170f676": "602ffdf chore: gitignore copyrighted source PDFs/epubs in TOC/" | kind=Commit | source=git | neighbors=[59a9f95 toc: implement prehospital (EMT…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-011.json

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
