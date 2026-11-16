# Node Description Batch 10 of 62

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

- "tests_megacode_spec": "megacode.spec.js" | kind=code-symbol | source=tests/megacode.spec.js:L1 | neighbors=[1fa9c3a Run Playwright tests in parallel, 6a16b91 Add ACLS Megacode simulator wit…, 700555c #49_2 acls-megacode-scenarios, aed54cb PR #48 acls-megacode-scenarios, afeb5dc feat: Run Playwright tests in p…, cb54779 Megacode: add Quick Code lite m…] | lang=en
- "vendor_chart_4_5_1_umd_min_so": "So" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .configure(), .constructor(), .determineDataLimits(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getuserbounds": ".getUserBounds()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.handleTickRangeOptions(), determineDataLimits(), .determineDataLimits(), .getMinMax(), pt(), .handleTickRangeOptions()] | lang=en
- "vendor_supabase_js_2_110_0_challenge": "_challenge()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), createNewAbortSignal(), ei(), getUser(), ir()] | lang=en
- "vendor_supabase_js_2_110_0_from": "from()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, binaryEncode(), _encodeUserBroadcastPush(), fn(), in(), Mn()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithpasskey": "signInWithPasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, createNewAbortSignal(), ir(), L(), _returnResult(), sr()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@036671140919a7f04fad56697aaca3eb57cab3f0": "0366711 ECG Fixed ✅ Crisp waveform ⭐" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2b928c2 ECG Simulator: downloadable rhy…, 437e8d4 Merge pull request #66  ECG] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05dca1e75ebf704b906e2bd88c7d689a4434506d": "05dca1e Add Google Play preview cut of the Megacode promo" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7421ea4 Megacode cinematic promo, audio.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0b92e146be6cc500460dd1590a52cafb1192bf53": "0b92e14 Create ems-tools.html ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@14bac52a782ca2e2c6e0f13e1c3bac0ffdbf626e": "14bac52 Rewrite chapter 9 (Emergency Pharmacology) as guides" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, cae9224 Chapter 9 rewrite: Emergency Ph…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1b4fd7daa77350c3ae81836a601714e7057064ec": "1b4fd7d PR #42 Add animated dose-calculator illustration to calculator pages" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1c05231 Fix layout issues found in a mo…, 9fa33da PR #43 Mobile layout fixes acro…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@20dc3734df2f7ab34c4b67d7ba0a0c11f81f5cbf": "20dc373 Update ecg.html ❤️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@23060c04d7670be603a3f4f724158d8558d896fa": "23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 82ff814 Add Playwright smoke test for B…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@26a1bc43ffa0ebc9412c5c8d9e615630a0b155a3": "26a1bc4 Adding O2 Cylinder Calculator ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@2b928c26d4e6ba57696f3697cf952536077da595": "2b928c2 ECG Simulator: downloadable rhythm reference PDF" | kind=Commit | source=git | neighbors=[0366711 ECG Fixed ✅ Crisp waveform ⭐, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 437e8d4 Merge pull request #66  ECG] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e2f6056018760b1aee2b055cd6b8f3884af63ed": "2e2f605 Ship the Security section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[app.js, main, 5f7c4f2 Merge pull request #12 Step 1&2…, exam.js, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@312f7b961a8f3bfe088bae0419839b02fbfec4df": "312f7b9 PR #46 Audience levels" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 734b6ca Prometric exam: add an Exam Lev…, 7b23e68 PR #47 Update Question bank] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@35ac6663bb7ca30026160d64d91183c7253fbd01": "35ac666 Rewrite chapter 5 (Medical Emergencies) as guides" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 0159986 Chapter 5 rewrite: Medical Emer…, c5.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@43111c714d6f6b4cc8e113d25af803a42ca8c97f": "43111c7 ❤️" | kind=Commit | source=git | neighbors=[20dc373 Update ecg.html ❤️, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b70a7192e82001c0ae45e2c6d4056d5aec5c4d5": "5b70a71 chore: bump SW cache to v5.3 after Lucide migration fixes" | kind=Commit | source=git | neighbors=[3fa0113 Merge pull request #22 from Sol…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5cfcb956b26e38caf7e3dacd44dc3584b65771a3": "5cfcb95 PR #55 fix Home ring" | kind=Commit | source=git | neighbors=[3f751ad Regenerate precache-manifest.js…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6018c48 PR #57 MCI Exam 1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f7bbc677ea817063888d9e6e3464e514359008c": "5f7bbc6 PR #45 Update Log in & Supabase" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 312f7b9 PR #46 Audience levels, 68635a5 Rename Prometric EMT Exam to Pr…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@63e2fbb5f72f16ff04ca3a77825d6c9500343261": "63e2fbb Update Carevent.html ▶️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69ad0559354068097fea7335f58f33b6b903690a": "69ad055 Merge pull request #17 html Clean-up🗑️" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3c15b4d V2 ⭐ : Question Review, All Que…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6bb10e45a56fa3ca25487aeeeb83f8253cb39129": "6bb10e4 Formulary group D: fluids, glucose, antidotes and obstetric drugs as gu…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, d01251f Formulary group D (fluids, gluc…, formulary.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6ee3cd6f216c7bd47a825665b4b1cb27b7af3014": "6ee3cd6 PR #50 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 62386af PR #51 Megacode 3, f272ce6 Courses page: compact, collapsi…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@734b6caebe1f096db0b08380e1b38f101ed1770e": "734b6ca Prometric exam: add an Exam Level filter and the missing topics" | kind=Commit | source=git | neighbors=[312f7b9 PR #46 Audience levels, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, fa0335e Add 190 paramedic-level (ALS) q…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7605a9f1d52edcc6cebe818da690655f00baaf78": "7605a9f PR #53 New ribbon to the MEGACODE home tab" | kind=Commit | source=git | neighbors=[66b6296 Home: add a NEW corner ribbon t…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5cfcb95 PR #55 fix Home ring] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@78cc7e6e4e11609130337a8913be7586cdc91f59": "78cc7e6 Rewrite chapter 2 (Patient Assessment) as guides" | kind=Commit | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7d4e283 Falling consciousness in respir…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7d02ca27bc687d7b618c92d793f56853a47d431c": "7d02ca2 Rename drug formulary numbering to plain Drug N, add 10 more medications" | kind=Commit | source=git | neighbors=[467bf94 Restore full M1-38 medication f…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, be729fd Merge pull request #29 from res…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7dcb4bd168559d9eef4321ba0424a016783d6794": "7dcb4bd Merge pull request #61 from SolimanAnas/ccr-d2edeac7-v6zk4b" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7421ea4 Megacode cinematic promo, build-screenshots.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7fa435524c339a552bcbe6b5de2cc2a05e714bcb": "7fa4355 fix: resolve JS syntax errors in 5 content files (template literals, en…" | kind=Commit | source=git | neighbors=[58e37c8 fix(css): collapse second multi…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8389b95c59edd76ff9f9013c3736bd7582f799fa": "8389b95 Redesign formulary overview card; fix card titles never revealing" | kind=Commit | source=git | neighbors=[app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, b5294ba PR #41 Redesign formulary overv…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f65c40f16fd546b860ed990a5cbebe84bbf2f73": "8f65c40 Formulary group C: sedation, seizure, airway, pain and nausea drugs as …" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3e50ecd Merge remote-tracking branch 'o…, formulary.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8fa52dcab8adc150f2546b05a6a5a806dbce7bc2": "8fa52dc  PR #40 Redesign Medication Index for mobile with animated theme toggle" | kind=Commit | source=git | neighbors=[639f5a4 PR #39 medications-cleanup-xnuh…, 70e6861 Redesign Medication Index for m…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992e51c574ed2600dd92d0cd968872902ec74b89": "992e51c Enhance courses.html UI/UX with category colors, stats strip, and anima…" | kind=Commit | source=git | neighbors=[92528c5 Fix broken med-index links (m1-…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b0bbbb3fa1c06a898e2f8a92685c8fba0802e49": "9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curricul…" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, main, 60c1782 chore: stop tracking TOC/ direc…, c10.js, c6.js, c7.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b12c8496163af9e2a4ca6f179ac66805c9614ca": "9b12c84 Merge pull request #20" | kind=Commit | source=git | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, bdf7315 Add Emil Kowalski design engine…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9dca2579814880105435db4feb3a0d62095e4b7a": "9dca257 PR #44 Redesign SmartCare Cloud page; add local profile name for guests" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5f7bbc6 PR #45 Update Log in & Supabase, 79ddf21 Use Google's ID-token sign-in s…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9fa33dacbb72bdda1b1a53304a6726a965cd6d3b": "9fa33da PR #43 Mobile layout fixes across pages + animated Global Statistics da…" | kind=Commit | source=git | neighbors=[1b4fd7d PR #42 Add animated dose-calcul…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 9dca257 PR #44 Redesign SmartCare Cloud…] | lang=pt

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-009.json

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
