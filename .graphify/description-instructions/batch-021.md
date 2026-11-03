# Node Description Batch 22 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@3f5e26121b7d69f098e5dd4d1204d495c1eca664": "3f5e261 Revise README to enhance project documentation" | kind=Commit | source=git | neighbors=[349d35a Add files via upload, feat/lucide-svg-migration, fix/lucide-quote-consistency, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f751adb5c9bc978e26f667056a07e8aa2027ca8": "3f751ad Regenerate precache-manifest.js after final page edits" | kind=Commit | source=git | neighbors=[main, 5cfcb95 PR #55 fix Home ring, precache-manifest.js, 8253b1e Fix home progress ring overflow…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fb7ba040a790e01ce1b9ce07446c7ffd4603b53": "4fb7ba0 Fix formatting in README for Live Demo link" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a9eb59e Update README.md, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@503d0e1699bdadb4f7175ecb92717550c1770eb6": "503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks" | kind=Commit | source=git | neighbors=[main, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js, ef31570 Fix offline precache gap, add c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508b810f88f199a6d6a7436b64cf869effd96c6f": "508b810 Author Medical chapters c02-c03 (seizures/AMS, DKA/HHS)" | kind=Commit | source=git | neighbors=[main, c34a015 Author Medical chapters c04-c06…, bundle.js, 79e6410 Scaffold Medical reviewer (cour…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508e08701627fbfd39a37fe6c0f5ff394ac4e414": "508e087 Update index.html" | kind=Commit | source=git | neighbors=[0801c55 Update styles.css, feat/lucide-svg-migration, fix/lucide-quote-consistency, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@521060d9852ec14d305937c0cc2041c59ef27d50": "521060d BLS , ACLS, PALS added ✅" | kind=Commit | source=git | neighbors=[main, d9844d1 Fix CI: break long line in gene…, bundle.js, bd7b1a9 Completing ACLS Course Reviewer] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@580d672df381225f960d33d9175697d1c51b76e2": "580d672 Add animated dose-calculator illustration to calculator pages" | kind=Commit | source=git | neighbors=[main, 1b4fd7d PR #42 Add animated dose-calcul…, precache-manifest.js, b5294ba PR #41 Redesign formulary overv…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d23c19f55908df5132630da585963ba2940e065": "5d23c19 fix: improve heading and index-count visibility in dark/amoled themes" | kind=Commit | source=git | neighbors=[main, 65ac830 feat: restructure Chapter 1 — m…, c-index.js, 5dddc2f feat: update ECG-study.html foo…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6477974342f4903a0866c4e1eb4d05e398d97732": "6477974 BLS illustrations ✅" | kind=Commit | source=git | neighbors=[main, ae06d27 PALS illustrations ✅, bundle.js, d9844d1 Fix CI: break long line in gene…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@66b6296edf474b26677fd1702aa386e397d1c466": "66b6296 Home: add a NEW corner ribbon to the ACLS Megacode button" | kind=Commit | source=git | neighbors=[main, 7605a9f PR #53 New ribbon to the MEGACO…, precache-manifest.js, c8b8f6e PR #52 Improved UI/UX of Course…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@680d70693d693c7dbadddb4ecbac5fbc6e194561": "680d706 Browslow tape" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 730ad49 BLS, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@68635a510e1c8f397ced701176830060e26fc58e": "68635a5 Rename Prometric EMT Exam to Prometric Paramedic / EMT Exam" | kind=Commit | source=git | neighbors=[5f7bbc6 PR #45 Update Log in & Supabase, main, 312f7b9 PR #46 Audience levels, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69889e8c8c739569db5fa221249f0c802ce0d30c": "69889e8 Delete chapters/c3.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 680d706 Browslow tape, edb1e1d Version 4.0.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6a7c398ed7d998ca34de34685aa4472dfab3d834": "6a7c398 Update login page subhead and button width" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bc75ac8 Update email placeholder in log…, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6bcfae867089082a53a3c60feb6c9da75248406a": "6bcfae8 Infant choking: chest thrusts with the heel of one hand (AHA 2025)" | kind=Commit | source=git | neighbors=[18ca925 Wrap a long line in the guide c…, main, 582a9d8 Chapter 3 rewrite  ✅, c3.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@707c0339a55de4be93f4915021d977cdaa023b8e": "707c033 Major Updates ✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 236ac26 local hashed authentication (SH…, b042359 Reduced image SIZE ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70a3f4da8cfd80498ebe52b7e562ef977cffc974": "70a3f4d Clean up about.html copy and relocate MIT license to privacy.html" | kind=Commit | source=git | neighbors=[main, acb0328 About ✅ Merge pull request #11 …, sw.js, ee41524 fix: wrap long line in test_adm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70e6861d34f00b7776eb6bf90229dd565c9766b4": "70e6861 Redesign Medication Index for mobile with animated theme toggle" | kind=Commit | source=git | neighbors=[639f5a4 PR #39 medications-cleanup-xnuh…, main, 8fa52dc  PR #40 Redesign Medication Ind…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@730ad49c64375a5ca16cd3dd738508c240965bdb": "730ad49 BLS" | kind=Commit | source=git | neighbors=[680d706 Browslow tape, feat/lucide-svg-migration, fix/lucide-quote-consistency, 0801c55 Update styles.css] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@75a7b2642d68c9152a92128cb50a45c7050006a8": "75a7b26 Author Medical chapters c10-c12, complete all 12 chapters" | kind=Commit | source=git | neighbors=[main, 3a000d0 Integrate Medical reviewer into…, bundle.js, b7c7a4c Author Medical chapters c07-c09…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@773db003c190ced836331666be4137ab1a13f0b6": "773db00 Update remaining formulary counts to 77" | kind=Commit | source=git | neighbors=[main, ae7e23e Fix Table of Contents chapters …, precache-manifest.js, dd8f4c7 Bump Werkzeug to 3.1.9 for CVE-…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@79ddf2194305135889524ea5e95b3fcd33db9c4d": "79ddf21 Use Google's ID-token sign-in so the chooser stops showing supabase.co" | kind=Commit | source=git | neighbors=[main, 5f7bbc6 PR #45 Update Log in & Supabase, precache-manifest.js, 9dca257 PR #44 Redesign SmartCare Cloud…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c0b047bbf492134983ff1310ec0e37d642fa101": "7c0b047 Author BLS chapters c02-c03 (assessment, adult 1-rescuer CPR)" | kind=Commit | source=git | neighbors=[main, 33c9dd7 Author BLS chapters c04-c06 (2-…, bundle.js, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7d4e283a2b0688db0af3365f7b4da804bef07037": "7d4e283 Falling consciousness in respiratory failure: BVM, not CPAP/NIV" | kind=Commit | source=git | neighbors=[78cc7e6 Rewrite chapter 2 (Patient Asse…, main, ed28729 Chapter 2 rewrite: Patient Asse…, c2.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7f265481d3ae312090c0cde13e86c71cfbd18b0d": "7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in…" | kind=Commit | source=git | neighbors=[04af7e8 fix: correct UTF-8 mojibake in …, main, ff409d5 fix: match section-header style…, c6.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81e52893fa8f325d4bcb8a447e98b53a3db0ecb6": "81e5289 ECG Simulator: crisp waveform rendering" | kind=Commit | source=git | neighbors=[66d3118 BDLS update ,ECG engine update ✅, main, 0366711 ECG Fixed ✅ Crisp waveform ⭐, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8253b1e4009b391c78e48c81a9687fe8eeca3479": "8253b1e Fix home progress ring overflow, compact EMS tools with grid/list toggl…" | kind=Commit | source=git | neighbors=[7605a9f PR #53 New ribbon to the MEGACO…, main, 3f751ad Regenerate precache-manifest.js…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@829a86de14d53579a31149642dffbec851623ad0": "829a86d update: refresh PWA icons from new22.png + bump SW cache version" | kind=Commit | source=git | neighbors=[main, d5777e9 feat: comprehensive privacy pol…, sw.js, 86a3d5c update PWA icons] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8abc85096112407be3748a456212a0cb4493eb6c": "8abc850 Fix CI: restore server.py — tests depend on Flask app module" | kind=Commit | source=git | neighbors=[main, bc0cb4e Regenerate precache-manifest.js…, server.py, bdf7315 Add Emil Kowalski design engine…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8deb40e0ed96722c2204b0664033a59fd324729b": "8deb40e Completed the content" | kind=Commit | source=git | neighbors=[508e087 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 718cde2 Major update has been implement…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8fedbbf6830821612ae660c0199ecd712528f59a": "8fedbbf Regenerate precache-manifest.js after courses page change" | kind=Commit | source=git | neighbors=[main, e984ef6 Courses page: re-check chip sta…, precache-manifest.js, 94cae40 Courses page: stop filter-chip …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@92652cae1ec07b8255f43baa4a7b75a1570a4b9c": "92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CP…" | kind=Commit | source=git | neighbors=[app.js, main, 8541abe chore: Change index page title …, 98557d8 docs: Update curriculum content…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@994915d305ca2c03275f3e9c5fcafab9b078f9ba": "994915d Icon Pack ❤️" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, afa5eb0 Add files via upload, bc75ac8 Update email placeholder in log…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9d9683964cb250f7634998134279aa737fa18797": "9d96839 Added Login pages" | kind=Commit | source=git | neighbors=[061bcae local hashed authentication (SH…, feat/lucide-svg-migration, fix/lucide-quote-consistency, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9ed5dd4aebc26dccc8a760c11ef4f8415f1ef0d9": "9ed5dd4 Update index.html" | kind=Commit | source=git | neighbors=[3ecc147 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 07ec89d Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a2d730986c342cca1b6b68ee21dbf6fb882a1f7e": "a2d7309 💊👍" | kind=Commit | source=git | neighbors=[6c15c3c Bump CACHE_VERSION to v5.1, feat/lucide-svg-migration, fix/lucide-quote-consistency, 20dc373 Update ecg.html ❤️] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a572e0a00a79d9ad9c11f91e3e3272afadf35181": "a572e0a Redesign Global Statistics as an animated progress dashboard" | kind=Commit | source=git | neighbors=[1c05231 Fix layout issues found in a mo…, main, 9fa33da PR #43 Mobile layout fixes acro…, precache-manifest.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a9eb59ec7f48be934e1314090131f369596736d0": "a9eb59e Update README.md" | kind=Commit | source=git | neighbors=[4fb7ba0 Fix formatting in README for Li…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3073386 Update login.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@afa5eb0ee2539a4b7e798856d4bbbf67db0cade5": "afa5eb0 Add files via upload" | kind=Commit | source=git | neighbors=[994915d Icon Pack ❤️, feat/lucide-svg-migration, fix/lucide-quote-consistency, 349d35a Add files via upload] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-021.json

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
