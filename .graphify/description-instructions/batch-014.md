# Node Description Batch 15 of 62

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
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

- "commit:repo:github.com/SolimanAnas/SmartCare@503d0e1699bdadb4f7175ecb92717550c1770eb6": "503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508b810f88f199a6d6a7436b64cf869effd96c6f": "508b810 Author Medical chapters c02-c03 (seizures/AMS, DKA/HHS)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, c34a015 Author Medical chapters c04-c06…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@521060d9852ec14d305937c0cc2041c59ef27d50": "521060d BLS , ACLS, PALS added ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, d9844d1 Fix CI: break long line in gene…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@580d672df381225f960d33d9175697d1c51b76e2": "580d672 Add animated dose-calculator illustration to calculator pages" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1b4fd7d PR #42 Add animated dose-calcul…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6477974342f4903a0866c4e1eb4d05e398d97732": "6477974 BLS illustrations ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, ae06d27 PALS illustrations ✅, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@66b6296edf474b26677fd1702aa386e397d1c466": "66b6296 Home: add a NEW corner ribbon to the ACLS Megacode button" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7605a9f PR #53 New ribbon to the MEGACO…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@68635a510e1c8f397ced701176830060e26fc58e": "68635a5 Rename Prometric EMT Exam to Prometric Paramedic / EMT Exam" | kind=Commit | source=git | neighbors=[5f7bbc6 PR #45 Update Log in & Supabase, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 312f7b9 PR #46 Audience levels] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6bcfae867089082a53a3c60feb6c9da75248406a": "6bcfae8 Infant choking: chest thrusts with the heel of one hand (AHA 2025)" | kind=Commit | source=git | neighbors=[18ca925 Wrap a long line in the guide c…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 582a9d8 Chapter 3 rewrite  ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70e6861d34f00b7776eb6bf90229dd565c9766b4": "70e6861 Redesign Medication Index for mobile with animated theme toggle" | kind=Commit | source=git | neighbors=[639f5a4 PR #39 medications-cleanup-xnuh…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8fa52dc  PR #40 Redesign Medication Ind…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@75a7b2642d68c9152a92128cb50a45c7050006a8": "75a7b26 Author Medical chapters c10-c12, complete all 12 chapters" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3a000d0 Integrate Medical reviewer into…, bundle.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@773db003c190ced836331666be4137ab1a13f0b6": "773db00 Update remaining formulary counts to 77" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, ae7e23e Fix Table of Contents chapters …, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@79ddf2194305135889524ea5e95b3fcd33db9c4d": "79ddf21 Use Google's ID-token sign-in so the chooser stops showing supabase.co" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5f7bbc6 PR #45 Update Log in & Supabase, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c0b047bbf492134983ff1310ec0e37d642fa101": "7c0b047 Author BLS chapters c02-c03 (assessment, adult 1-rescuer CPR)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 33c9dd7 Author BLS chapters c04-c06 (2-…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7d4e283a2b0688db0af3365f7b4da804bef07037": "7d4e283 Falling consciousness in respiratory failure: BVM, not CPAP/NIV" | kind=Commit | source=git | neighbors=[78cc7e6 Rewrite chapter 2 (Patient Asse…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, ed28729 Chapter 2 rewrite: Patient Asse…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81e52893fa8f325d4bcb8a447e98b53a3db0ecb6": "81e5289 ECG Simulator: crisp waveform rendering" | kind=Commit | source=git | neighbors=[66d3118 BDLS update ,ECG engine update ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 0366711 ECG Fixed ✅ Crisp waveform ⭐] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8253b1e4009b391c78e48c81a9687fe8eeca3479": "8253b1e Fix home progress ring overflow, compact EMS tools with grid/list toggl…" | kind=Commit | source=git | neighbors=[7605a9f PR #53 New ribbon to the MEGACO…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3f751ad Regenerate precache-manifest.js…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8abc85096112407be3748a456212a0cb4493eb6c": "8abc850 Fix CI: restore server.py — tests depend on Flask app module" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, bc0cb4e Regenerate precache-manifest.js…, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8fedbbf6830821612ae660c0199ecd712528f59a": "8fedbbf Regenerate precache-manifest.js after courses page change" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e984ef6 Courses page: re-check chip sta…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@95f63633aba5ff9266a8145d45782fa66083ef6b": "95f6363 Merge pull request #10 from SolimanAnas/claude/chapters-html-summary-fi…" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, acb0328 About ✅ Merge pull request #11 …, server.py, sw.js, test_api.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@98557d8f2f10ce30a41dfbccf300f412c7b40860": "98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5" | kind=Commit | source=git | neighbors=[4663aec fix: Resolve unused variable an…, main, 92652ca feat: Update search placeholder…, c2.js, c3.js, c4.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4df22b3015e72e7b31ed3d38a6ed3201412ac4f": "a4df22b fix: resolve CI lint failure and remove orphaned files" | kind=Commit | source=git | neighbors=[main, 04af7e8 fix: correct UTF-8 mojibake in …, build.py, build_courses.py, generate_all_itls_data.py, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a572e0a00a79d9ad9c11f91e3e3272afadf35181": "a572e0a Redesign Global Statistics as an animated progress dashboard" | kind=Commit | source=git | neighbors=[1c05231 Fix layout issues found in a mo…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 9fa33da PR #43 Mobile layout fixes acro…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b7c7a4cbc179a557b8ab378abd373f217facb974": "b7c7a4c Author Medical chapters c07-c09 (psychotic/mood, personality/substance,…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 75a7b26 Author Medical chapters c10-c12…, bundle.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b88a05e5bdf0f09a6adddbc87e5df6c75aac306f": "b88a05e Author PEPP chapters c05-c08 (respiratory, shock, cardiac, neurologic)" | kind=Commit | source=git | neighbors=[27fd0d1 Author PEPP chapters c03-c04 (p…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 0555934 Author PEPP chapters c09-c11 (t…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b8bb3802d649a1de7d5b62646b1b8a8e5e7bf0f7": "b8bb380 fix: rebuild precache-manifest.js" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2c06261 Remove Respiratory Patterns tab…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bc0cb4ea55202935c43043e2c387e773a4f14b66": "bc0cb4e Regenerate precache-manifest.js after file changes" | kind=Commit | source=git | neighbors=[8abc850 Fix CI: restore server.py — tes…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e1be186 fix: make precache build determ…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c34a015994bff04bee952b4567f70a72ac4dcfe8": "c34a015 Author Medical chapters c04-c06 (asthma/COPD, preeclampsia, behavioral …" | kind=Commit | source=git | neighbors=[508b810 Author Medical chapters c02-c03…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, b7c7a4c Author Medical chapters c07-c09…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@cc9ac57ff3dfe4764e7f776bc28f351f0086f2f2": "cc9ac57 List ACLS Megacode on the Courses page under ACLS" | kind=Commit | source=git | neighbors=[700555c #49_2 acls-megacode-scenarios, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, d37eeda Home: feature ACLS Megacode in …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d35441ed2d251619eabaacf3f89d863b2d49a33b": "d35441e Add google-flow workspace and sync with remote" | kind=Commit | source=git | neighbors=[d01251f Formulary group D (fluids, gluc…, main, generate-batches.js, run-all.mjs, run-batch.mjs, sheet.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d37eedadea0c4cf441ff93fd78adbcb694be9a3e": "d37eeda Home: feature ACLS Megacode in the EMS Essentials card" | kind=Commit | source=git | neighbors=[cc9ac57 List ACLS Megacode on the Cours…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6ee3cd6 PR #50 acls-megacode-scenarios] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d6f12c6ee6ace1164a13e7297d7f44f010a7a431": "d6f12c6 Add course documentation: BDLS, EMPACT, Medical, PEPP, PPET" | kind=Commit | source=git | neighbors=[7d6035c Regenerate all PWA/app icons fr…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2b1ffb7 Port BDLS and EMPACT course rev…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d9844d1521f4e0d2b95ce69a8b8d65b5512673cf": "d9844d1 Fix CI: break long line in generate_sitemap.py for Ruff E501" | kind=Commit | source=git | neighbors=[521060d BLS , ACLS, PALS added ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6477974 BLS illustrations ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dbf642d7dead31e7b1da608cfef1d93bf83d3601": "dbf642d Redesign SmartCare Cloud page; add local profile name for guests" | kind=Commit | source=git | neighbors=[9fa33da PR #43 Mobile layout fixes acro…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 9dca257 PR #44 Redesign SmartCare Cloud…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e3854ccf355ecbd73ae6e064eb1be96eca546f34": "e3854cc Drop endotracheal drug delivery from adult cardiac arrest (AHA 2025)" | kind=Commit | source=git | neighbors=[ce11d74 Rewrite chapter 10 (Clinical Pr…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 123b1c0 Chapter 10 rewrite: Clinical Pr…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e5cb445781709f6a7461030071bec2d6723f556d": "e5cb445 Herniation signs: any one sign triggers bridge hyperventilation (BTF)" | kind=Commit | source=git | neighbors=[a497e1f Rewrite chapter 6 (Trauma Emerg…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, a7f8828 Chapter 6 update : Trauma Emerg…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e630fb6e26745ad32a5c63a3c0a5e7638c14054c": "e630fb6 Author PEPP chapters c12-c14, complete all 14 chapters" | kind=Commit | source=git | neighbors=[0555934 Author PEPP chapters c09-c11 (t…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 20ed56a Integrate PEPP reviewer into pl…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e956daa7e11eb23e0cacfabeb308604efa37ef43": "e956daa Author BLS chapters c10-c12 (choking, opioids, special circumstances)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 23060c0 Integrate BLS reviewer into pla…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e984ef6a3ff83f30ab59b0234957cf465e813f5a": "e984ef6 Courses page: re-check chip state when the scroll lock ends" | kind=Commit | source=git | neighbors=[8fedbbf Regenerate precache-manifest.js…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e713100 PR #58 Courses page layout fix] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f4356e02ffa9879da4ad050311e8dc37ab81af2e": "f4356e0 Author BLS chapters c07-c09 (breaths, child BLS, infant BLS)" | kind=Commit | source=git | neighbors=[33c9dd7 Author BLS chapters c04-c06 (2-…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e956daa Author BLS chapters c10-c12 (ch…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f73818bc3d472f6843700f7dcdc563d388d4560f": "f73818b Adding respiratory patterns" | kind=Commit | source=git | neighbors=[8080576 PR #30, Redesign drug monograph…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, b8bb380 fix: rebuild precache-manifest.…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-014.json

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
