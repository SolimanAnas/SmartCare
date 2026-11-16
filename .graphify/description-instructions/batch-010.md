# Node Description Batch 11 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@fa0335e98562bad624985ede1c0a908db6542b3d": "fa0335e Add 190 paramedic-level (ALS) questions to the Prometric exam" | kind=Commit | source=git | neighbors=[734b6ca Prometric exam: add an Exam Lev…, app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fb463cfa3b4a0857dc1a11ef10170467e7cb796a": "fb463cf Rewrite chapter 8 (Environmental & Disaster) as guides" | kind=Commit | source=git | neighbors=[54bf4f2 Chapter 1 rewrite: Foundations …, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fba5606c24443fb60956c3fa267b6d4405963b64": "fba5606 Update drug-calculator.html" | kind=Commit | source=git | neighbors=[7356ef5 Update ems-tools.html, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fe7449d2732faaa3abcba42fc0b71cec6ce5f59d": "fe7449d docs: Update curriculum content databases and medical-review summary" | kind=Commit | source=git | neighbors=[d00c567 feat: Remove Scope of Practice …, main, 20fdfa2 feat(itls): complete itls revie…, c1.js, c10.js, c4.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff0d1a13bca921ba15aeeadffdaf550bc2c83fe8": "ff0d1a1 feat: add /api/health probe and API/deployment docs" | kind=Commit | source=git | neighbors=[4999b7f swot-its-compliance-GaiuJ, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "prometric_exam_examengine_submitanswer": ".submitAnswer()" | kind=code-symbol | source=src/prometric/exam.js:L795 | neighbors=[ExamEngine, .handleKeyboard(), .adjustCatDifficulty(), .gradeOptions(), .nextOrEnd(), .renderFeedback()] | lang=en
- "scripts_audio_score": "score()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L112 | neighbors=[audio.py, main(), cue: dict of section times from the edi…, env(), lp(), midi()] | lang=en
- "tests_megacode_spec": "megacode.spec.js" | kind=code-symbol | source=tests/megacode.spec.js:L1 | neighbors=[1fa9c3a Run Playwright tests in parallel, 6a16b91 Add ACLS Megacode simulator wit…, 700555c #49_2 acls-megacode-scenarios, aed54cb PR #48 acls-megacode-scenarios, afeb5dc feat: Run Playwright tests in p…, cb54779 Megacode: add Quick Code lite m…] | lang=en
- "vendor_chart_4_5_1_umd_min_so": "So" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .configure(), .constructor(), .determineDataLimits(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getuserbounds": ".getUserBounds()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.handleTickRangeOptions(), determineDataLimits(), .determineDataLimits(), .getMinMax(), pt(), .handleTickRangeOptions()] | lang=en
- "vendor_supabase_js_2_110_0_challenge": "_challenge()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), createNewAbortSignal(), ei(), getUser(), ir()] | lang=en
- "vendor_supabase_js_2_110_0_from": "from()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, binaryEncode(), _encodeUserBroadcastPush(), fn(), in(), Mn()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithpasskey": "signInWithPasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, createNewAbortSignal(), ir(), L(), _returnResult(), sr()] | lang=en
- "admin_delete_user_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-delete-user/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "admin_list_users_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-list-users/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "admin_update_role_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-update-role/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 2c020d4 Remove the Flask server; move a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05afd154bc1cce4ecfa6d4ad627b1c2e0615dd59": "05afd15 Cap IV diazepam and midazolam seizure doses at 10 mg per dose (AES)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 8ac7ca0 Formulary group C: sedation, se…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07b10be7694807cad3435ffa777f96c1de31054b": "07b10be Hypertonic saline: separate hyponatraemic seizure dosing from the TBI d…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 500f1a7 Hypertonic saline: dose for mod…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07b8707f007a6b5c203fc88e4173968e67b994f0": "07b8707 Show BDLS pre-test first in exam bank pickers" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 6663113 PR #63 Update ECG simulator] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0b92e146be6cc500460dd1590a52cafb1192bf53": "0b92e14 Create ems-tools.html ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@179984fa63966139110698d7ec4730c859409e32": "179984f Scaffold PEPP reviewer (courses/pepp) with c01-c02 content" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 27fd0d1 Author PEPP chapters c03-c04 (p…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fa9c3ab0d4f0cb60f6a872bfce54320e2d020a5": "1fa9c3a Run Playwright tests in parallel" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@20dc3734df2f7ab34c4b67d7ba0a0c11f81f5cbf": "20dc373 Update ecg.html ❤️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@26a1bc43ffa0ebc9412c5c8d9e615630a0b155a3": "26a1bc4 Adding O2 Cylinder Calculator ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@2ab1c09879d07807a9999bf121c4580560a8df9f": "2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 9b12c84 Merge pull request #20, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2c062613f9029de90a0335e4dd8c3ef49ebf75f2": "2c06261 Remove Respiratory Patterns tab from index.html" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 22c0924 Add MCI (Mass Casualty Incident…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e4d5a6d7bf13d870d73b02fb093176e5779861b": "2e4d5a6 MCI: Officer roles with two-row tabs and swipe between roles" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, c254251 Exam pages: one design for ever…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@301bb11e09abee8e1fc3c51b3ea52b2afcef575d": "301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' …" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3cde249b8ed6fd27ce84d5da84562085387c39fd": "3cde249 Improved the prometric exam page ✅" | kind=Commit | source=git | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, main, 4fc5e35 Sync Prometric progress, follow…, 828970b Prometric Question Bank Updated…, precache-manifest.js, exam.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@43111c714d6f6b4cc8e113d25af803a42ca8c97f": "43111c7 ❤️" | kind=Commit | source=git | neighbors=[20dc373 Update ecg.html ❤️, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@467bf9440fad0deff10ec2bf8189cbc10228b644": "467bf94 Restore full M1-38 medication formulary, de-branded from source" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 7d02ca2 Rename drug formulary numbering…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@473813229128758f9190dc2f8d4096e2cdc42819": "4738132 Dependabot & Code Cleaning 🧽🫧" | kind=Commit | source=git | neighbors=[guide-images-best, main, 49c0810 Add a baseline Content-Security…, 7c83637 CSP alignment 🛡️✅, precache-manifest.js, generate_sitemap.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@500f1a7751f5ef14897caec1b4fb0cfda2a64eab": "500f1a7 Hypertonic saline: dose for moderate hyponatraemia symptoms and a lower…" | kind=Commit | source=git | neighbors=[07b10be Hypertonic saline: separate hyp…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5157b39de21c35f150fbad2092e22d9d7d7d016b": "5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, f953366 PR #26 BLS-reviewer] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@55997dbc7ab441a14f719fc1d335da66a2bb34bd": "55997db ECG Simulator: easy mode, visible rhythm picker, advanced toggle" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 8f44320 Update exam-page tests for the …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b70a7192e82001c0ae45e2c6d4056d5aec5c4d5": "5b70a71 chore: bump SW cache to v5.3 after Lucide migration fixes" | kind=Commit | source=git | neighbors=[3fa0113 Merge pull request #22 from Sol…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d2d46fe76134bde01e41fb2fef194250c331615": "5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f7c4f281330866857f93fac3b12e6c961db87e5": "5f7c4f2 Merge pull request #12 Step 1&2 of V2 plan" | kind=Commit | source=git | neighbors=[app.js, worktree-pr85-supabase-deploy, 662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …, exam.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@63e2fbb5f72f16ff04ca3a77825d6c9500343261": "63e2fbb Update Carevent.html ▶️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69ad0559354068097fea7335f58f33b6b903690a": "69ad055 Merge pull request #17 html Clean-up🗑️" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-010.json

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
