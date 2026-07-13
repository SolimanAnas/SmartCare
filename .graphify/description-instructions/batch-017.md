# Node Description Batch 18 of 49

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

- "commit:repo:github.com/SolimanAnas/SmartCare@69889e8c8c739569db5fa221249f0c802ce0d30c": "69889e8 Delete chapters/c3.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 680d706 Browslow tape, edb1e1d Version 4.0.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6a7c398ed7d998ca34de34685aa4472dfab3d834": "6a7c398 Update login page subhead and button width" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bc75ac8 Update email placeholder in log…, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@707c0339a55de4be93f4915021d977cdaa023b8e": "707c033 Major Updates ✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 236ac26 local hashed authentication (SH…, b042359 Reduced image SIZE ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70a3f4da8cfd80498ebe52b7e562ef977cffc974": "70a3f4d Clean up about.html copy and relocate MIT license to privacy.html" | kind=Commit | source=git | neighbors=[main, acb0328 About ✅ Merge pull request #11 …, sw.js, ee41524 fix: wrap long line in test_adm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@730ad49c64375a5ca16cd3dd738508c240965bdb": "730ad49 BLS" | kind=Commit | source=git | neighbors=[680d706 Browslow tape, feat/lucide-svg-migration, fix/lucide-quote-consistency, 0801c55 Update styles.css] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c0b047bbf492134983ff1310ec0e37d642fa101": "7c0b047 Author BLS chapters c02-c03 (assessment, adult 1-rescuer CPR)" | kind=Commit | source=git | neighbors=[main, 33c9dd7 Author BLS chapters c04-c06 (2-…, bundle.js, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7f265481d3ae312090c0cde13e86c71cfbd18b0d": "7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in…" | kind=Commit | source=git | neighbors=[04af7e8 fix: correct UTF-8 mojibake in …, main, ff409d5 fix: match section-header style…, c6.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@829a86de14d53579a31149642dffbec851623ad0": "829a86d update: refresh PWA icons from new22.png + bump SW cache version" | kind=Commit | source=git | neighbors=[main, d5777e9 feat: comprehensive privacy pol…, sw.js, 86a3d5c update PWA icons] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8abc85096112407be3748a456212a0cb4493eb6c": "8abc850 Fix CI: restore server.py — tests depend on Flask app module" | kind=Commit | source=git | neighbors=[main, bc0cb4e Regenerate precache-manifest.js…, server.py, bdf7315 Add Emil Kowalski design engine…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8deb40e0ed96722c2204b0664033a59fd324729b": "8deb40e Completed the content" | kind=Commit | source=git | neighbors=[508e087 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 718cde2 Major update has been implement…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@92652cae1ec07b8255f43baa4a7b75a1570a4b9c": "92652ca feat: Update search placeholders, remove updates c0 tab, and debrand CP…" | kind=Commit | source=git | neighbors=[app.js, main, 8541abe chore: Change index page title …, 98557d8 docs: Update curriculum content…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@994915d305ca2c03275f3e9c5fcafab9b078f9ba": "994915d Icon Pack ❤️" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, afa5eb0 Add files via upload, bc75ac8 Update email placeholder in log…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9d9683964cb250f7634998134279aa737fa18797": "9d96839 Added Login pages" | kind=Commit | source=git | neighbors=[061bcae local hashed authentication (SH…, feat/lucide-svg-migration, fix/lucide-quote-consistency, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9ed5dd4aebc26dccc8a760c11ef4f8415f1ef0d9": "9ed5dd4 Update index.html" | kind=Commit | source=git | neighbors=[3ecc147 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 07ec89d Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a2d730986c342cca1b6b68ee21dbf6fb882a1f7e": "a2d7309 💊👍" | kind=Commit | source=git | neighbors=[6c15c3c Bump CACHE_VERSION to v5.1, feat/lucide-svg-migration, fix/lucide-quote-consistency, 20dc373 Update ecg.html ❤️] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a9eb59ec7f48be934e1314090131f369596736d0": "a9eb59e Update README.md" | kind=Commit | source=git | neighbors=[4fb7ba0 Fix formatting in README for Li…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3073386 Update login.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@afa5eb0ee2539a4b7e798856d4bbbf67db0cade5": "afa5eb0 Add files via upload" | kind=Commit | source=git | neighbors=[994915d Icon Pack ❤️, feat/lucide-svg-migration, fix/lucide-quote-consistency, 349d35a Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b042359d67fc94e5d7fa0c1b6081a704fe3f7f43": "b042359 Reduced image SIZE ✅" | kind=Commit | source=git | neighbors=[718cde2 Major update has been implement…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b1f43853e23e6ee9189e3fa1630d95dbd4a28c56": "b1f4385 Bump service worker cache to v2.7" | kind=Commit | source=git | neighbors=[4389d53 Improve drawer toggle panel ide…, main, 4ccb8df Merge pull request #9 from Soli…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b7039e9262be5609b033826892527f0a613df939": "b7039e9 Bump service worker cache to v2.8" | kind=Commit | source=git | neighbors=[main, ee41524 fix: wrap long line in test_adm…, sw.js, c4f8810 Wire admin.html to real app use…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bae7406bd189e89ae4016f9482e4001f23a323f8": "bae7406 chore: graphify auto-update, ECG study page, course data updates" | kind=Commit | source=git | neighbors=[39cc6bb fix: remove extra '})' causing …, main, 5dddc2f feat: update ECG-study.html foo…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bc0cb4ea55202935c43043e2c387e773a4f14b66": "bc0cb4e Regenerate precache-manifest.js after file changes" | kind=Commit | source=git | neighbors=[8abc850 Fix CI: restore server.py — tes…, main, e1be186 fix: make precache build determ…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bc75ac8dabcac40a537e9182a157238876be7a60": "bc75ac8 Update email placeholder in login form" | kind=Commit | source=git | neighbors=[6a7c398 Update login page subhead and b…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 994915d Icon Pack ❤️] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bfe43fb14b84b1e6af8ba93056602627c5771b5a": "bfe43fb Update requirements.txt" | kind=Commit | source=git | neighbors=[668149a Log in & sign up 👍, feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2479e9d0726a40d4d94cfbee9e025dedf321257": "c2479e9 Adding ECG & Drug calc 👍❤️💊" | kind=Commit | source=git | neighbors=[03f6898 Update sw.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c6c0a5cdb1fc6cf80ee0c44eabfa981c32b15305": "c6c0a5c chore: update core app - service worker, landing page, exam page, and c…" | kind=Commit | source=git | neighbors=[074617f feat: update chapter files with…, main, a4df22b fix: resolve CI lint failure an…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c75db552003a9077740036675dfd11920e4350ee": "c75db55 Update index.html" | kind=Commit | source=git | neighbors=[35a1e71 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3ecc147 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9f040012caa5c4a566b770192bca7a146688efc": "c9f0400 Update index.html" | kind=Commit | source=git | neighbors=[07ec89d Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d183462b1428daee70e9e992ba586e3c55c7f7a1": "d183462 Fix redirect URL for login page" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 6a7c398 Update login page subhead and b…, e8be921 Remove leading slash from login…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d9844d1521f4e0d2b95ce69a8b8d65b5512673cf": "d9844d1 Fix CI: break long line in generate_sitemap.py for Ruff E501" | kind=Commit | source=git | neighbors=[521060d BLS , ACLS, PALS added ✅, main, 6477974 BLS illustrations ✅, generate_sitemap.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e6ace1cbab9503be7a68ceb32e257ba0cc12a056": "e6ace1c Add files via upload" | kind=Commit | source=git | neighbors=[9d96839 Added Login pages, feat/lucide-svg-migration, fix/lucide-quote-consistency, 668149a Log in & sign up 👍] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e8be9216e3b1e09a9a6d77fa1da9b919a7b030fb": "e8be921 Remove leading slash from login redirect URL" | kind=Commit | source=git | neighbors=[006f9af Update requirements.txt, feat/lucide-svg-migration, fix/lucide-quote-consistency, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e956daa7e11eb23e0cacfabeb308604efa37ef43": "e956daa Author BLS chapters c10-c12 (choking, opioids, special circumstances)" | kind=Commit | source=git | neighbors=[main, 23060c0 Integrate BLS reviewer into pla…, bundle.js, f4356e0 Author BLS chapters c07-c09 (br…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@eff053b6c11e2d6434d9f6b0cb42098b310531fa": "eff053b Ship all six Critical Fixes from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[5b68bae docs: add comprehensive v2.0 up…, main, 2e2f605 Ship the Security section from …, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f3d2625949a03b0fdcb69988a24786569bba09bf": "f3d2625 Update README.md" | kind=Commit | source=git | neighbors=[3f5e261 Revise README to enhance projec…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 4fb7ba0 Fix formatting in README for Li…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f4356e02ffa9879da4ad050311e8dc37ab81af2e": "f4356e0 Author BLS chapters c07-c09 (breaths, child BLS, infant BLS)" | kind=Commit | source=git | neighbors=[33c9dd7 Author BLS chapters c04-c06 (2-…, main, e956daa Author BLS chapters c10-c12 (ch…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fefe4cdb3029f7ea702a5a865d265739e1e9e272": "fefe4cd chore: bump SW to v2.2 for initial public release" | kind=Commit | source=git | neighbors=[d546791 feat: add screenshots, orientat…, main, 40d423a Remove unused admin/login/signu…, sw.js] | lang=en
- "content_c9": "c9.js" | kind=code-symbol | source=content/c9.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "itls_build": "build.py" | kind=code-symbol | source=courses/itls/build.py:L1 | neighbors=[1a00316 feat(itls): restructure itls co…, a4df22b fix: resolve CI lint failure an…, load(), main()] | lang=en
- "migrations_20260702000001_create_user_state": "20260702000001_create_user_state.sql" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, public.user_state] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-017.json

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
