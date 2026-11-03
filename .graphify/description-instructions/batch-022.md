# Node Description Batch 23 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@b042359d67fc94e5d7fa0c1b6081a704fe3f7f43": "b042359 Reduced image SIZE ✅" | kind=Commit | source=git | neighbors=[718cde2 Major update has been implement…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b1f43853e23e6ee9189e3fa1630d95dbd4a28c56": "b1f4385 Bump service worker cache to v2.7" | kind=Commit | source=git | neighbors=[4389d53 Improve drawer toggle panel ide…, main, 4ccb8df Merge pull request #9 from Soli…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b7039e9262be5609b033826892527f0a613df939": "b7039e9 Bump service worker cache to v2.8" | kind=Commit | source=git | neighbors=[main, ee41524 fix: wrap long line in test_adm…, sw.js, c4f8810 Wire admin.html to real app use…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b7c7a4cbc179a557b8ab378abd373f217facb974": "b7c7a4c Author Medical chapters c07-c09 (psychotic/mood, personality/substance,…" | kind=Commit | source=git | neighbors=[main, 75a7b26 Author Medical chapters c10-c12…, bundle.js, c34a015 Author Medical chapters c04-c06…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b88a05e5bdf0f09a6adddbc87e5df6c75aac306f": "b88a05e Author PEPP chapters c05-c08 (respiratory, shock, cardiac, neurologic)" | kind=Commit | source=git | neighbors=[27fd0d1 Author PEPP chapters c03-c04 (p…, main, 0555934 Author PEPP chapters c09-c11 (t…, bundle.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b8bb3802d649a1de7d5b62646b1b8a8e5e7bf0f7": "b8bb380 fix: rebuild precache-manifest.js" | kind=Commit | source=git | neighbors=[main, 2c06261 Remove Respiratory Patterns tab…, precache-manifest.js, f73818b Adding respiratory patterns] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bae7406bd189e89ae4016f9482e4001f23a323f8": "bae7406 chore: graphify auto-update, ECG study page, course data updates" | kind=Commit | source=git | neighbors=[39cc6bb fix: remove extra '})' causing …, main, 5dddc2f feat: update ECG-study.html foo…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bc0cb4ea55202935c43043e2c387e773a4f14b66": "bc0cb4e Regenerate precache-manifest.js after file changes" | kind=Commit | source=git | neighbors=[8abc850 Fix CI: restore server.py — tes…, main, e1be186 fix: make precache build determ…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bc75ac8dabcac40a537e9182a157238876be7a60": "bc75ac8 Update email placeholder in login form" | kind=Commit | source=git | neighbors=[6a7c398 Update login page subhead and b…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 994915d Icon Pack ❤️] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bfe43fb14b84b1e6af8ba93056602627c5771b5a": "bfe43fb Update requirements.txt" | kind=Commit | source=git | neighbors=[668149a Log in & sign up 👍, feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2479e9d0726a40d4d94cfbee9e025dedf321257": "c2479e9 Adding ECG & Drug calc 👍❤️💊" | kind=Commit | source=git | neighbors=[03f6898 Update sw.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c34a015994bff04bee952b4567f70a72ac4dcfe8": "c34a015 Author Medical chapters c04-c06 (asthma/COPD, preeclampsia, behavioral …" | kind=Commit | source=git | neighbors=[508b810 Author Medical chapters c02-c03…, main, b7c7a4c Author Medical chapters c07-c09…, bundle.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@c6c0a5cdb1fc6cf80ee0c44eabfa981c32b15305": "c6c0a5c chore: update core app - service worker, landing page, exam page, and c…" | kind=Commit | source=git | neighbors=[074617f feat: update chapter files with…, main, a4df22b fix: resolve CI lint failure an…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c75db552003a9077740036675dfd11920e4350ee": "c75db55 Update index.html" | kind=Commit | source=git | neighbors=[35a1e71 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3ecc147 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9f040012caa5c4a566b770192bca7a146688efc": "c9f0400 Update index.html" | kind=Commit | source=git | neighbors=[07ec89d Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cc9ac57ff3dfe4764e7f776bc28f351f0086f2f2": "cc9ac57 List ACLS Megacode on the Courses page under ACLS" | kind=Commit | source=git | neighbors=[700555c #49_2 acls-megacode-scenarios, main, d37eeda Home: feature ACLS Megacode in …, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d183462b1428daee70e9e992ba586e3c55c7f7a1": "d183462 Fix redirect URL for login page" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 6a7c398 Update login page subhead and b…, e8be921 Remove leading slash from login…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d37eedadea0c4cf441ff93fd78adbcb694be9a3e": "d37eeda Home: feature ACLS Megacode in the EMS Essentials card" | kind=Commit | source=git | neighbors=[cc9ac57 List ACLS Megacode on the Cours…, main, 6ee3cd6 PR #50 acls-megacode-scenarios, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d6f12c6ee6ace1164a13e7297d7f44f010a7a431": "d6f12c6 Add course documentation: BDLS, EMPACT, Medical, PEPP, PPET" | kind=Commit | source=git | neighbors=[7d6035c Regenerate all PWA/app icons fr…, main, 2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d9844d1521f4e0d2b95ce69a8b8d65b5512673cf": "d9844d1 Fix CI: break long line in generate_sitemap.py for Ruff E501" | kind=Commit | source=git | neighbors=[521060d BLS , ACLS, PALS added ✅, main, 6477974 BLS illustrations ✅, generate_sitemap.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dbf642d7dead31e7b1da608cfef1d93bf83d3601": "dbf642d Redesign SmartCare Cloud page; add local profile name for guests" | kind=Commit | source=git | neighbors=[9fa33da PR #43 Mobile layout fixes acro…, main, 9dca257 PR #44 Redesign SmartCare Cloud…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e3854ccf355ecbd73ae6e064eb1be96eca546f34": "e3854cc Drop endotracheal drug delivery from adult cardiac arrest (AHA 2025)" | kind=Commit | source=git | neighbors=[ce11d74 Rewrite chapter 10 (Clinical Pr…, main, 123b1c0 Chapter 10 rewrite: Clinical Pr…, c9.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e5cb445781709f6a7461030071bec2d6723f556d": "e5cb445 Herniation signs: any one sign triggers bridge hyperventilation (BTF)" | kind=Commit | source=git | neighbors=[a497e1f Rewrite chapter 6 (Trauma Emerg…, main, a7f8828 Chapter 6 update : Trauma Emerg…, c6.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e630fb6e26745ad32a5c63a3c0a5e7638c14054c": "e630fb6 Author PEPP chapters c12-c14, complete all 14 chapters" | kind=Commit | source=git | neighbors=[0555934 Author PEPP chapters c09-c11 (t…, main, 20ed56a Integrate PEPP reviewer into pl…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e6ace1cbab9503be7a68ceb32e257ba0cc12a056": "e6ace1c Add files via upload" | kind=Commit | source=git | neighbors=[9d96839 Added Login pages, feat/lucide-svg-migration, fix/lucide-quote-consistency, 668149a Log in & sign up 👍] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e8be9216e3b1e09a9a6d77fa1da9b919a7b030fb": "e8be921 Remove leading slash from login redirect URL" | kind=Commit | source=git | neighbors=[006f9af Update requirements.txt, feat/lucide-svg-migration, fix/lucide-quote-consistency, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e956daa7e11eb23e0cacfabeb308604efa37ef43": "e956daa Author BLS chapters c10-c12 (choking, opioids, special circumstances)" | kind=Commit | source=git | neighbors=[main, 23060c0 Integrate BLS reviewer into pla…, bundle.js, f4356e0 Author BLS chapters c07-c09 (br…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e984ef6a3ff83f30ab59b0234957cf465e813f5a": "e984ef6 Courses page: re-check chip state when the scroll lock ends" | kind=Commit | source=git | neighbors=[8fedbbf Regenerate precache-manifest.js…, main, e713100 PR #58 Courses page layout fix, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@eff053b6c11e2d6434d9f6b0cb42098b310531fa": "eff053b Ship all six Critical Fixes from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[main, 2e2f605 Ship the Security section from …, sw.js, 5b68bae docs: add comprehensive v2.0 up…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f3d2625949a03b0fdcb69988a24786569bba09bf": "f3d2625 Update README.md" | kind=Commit | source=git | neighbors=[3f5e261 Revise README to enhance projec…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 4fb7ba0 Fix formatting in README for Li…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f4356e02ffa9879da4ad050311e8dc37ab81af2e": "f4356e0 Author BLS chapters c07-c09 (breaths, child BLS, infant BLS)" | kind=Commit | source=git | neighbors=[33c9dd7 Author BLS chapters c04-c06 (2-…, main, e956daa Author BLS chapters c10-c12 (ch…, bundle.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f73818bc3d472f6843700f7dcdc563d388d4560f": "f73818b Adding respiratory patterns" | kind=Commit | source=git | neighbors=[8080576 PR #30, Redesign drug monograph…, main, b8bb380 fix: rebuild precache-manifest.…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fdbf3108e2f6372c2b88c121a2c93dc6adfc685a": "fdbf310 Fix CI: regenerate precache-manifest.js" | kind=Commit | source=git | neighbors=[ae06d27 PALS illustrations ✅, main, 7d6035c Regenerate all PWA/app icons fr…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fefe4cdb3029f7ea702a5a865d265739e1e9e272": "fefe4cd chore: bump SW to v2.2 for initial public release" | kind=Commit | source=git | neighbors=[d546791 feat: add screenshots, orientat…, main, 40d423a Remove unused admin/login/signu…, sw.js] | lang=en
- "cpg_guide_renderguide": "renderGuide()" | kind=code-symbol | source=cpg-guide.js:L210 | neighbors=[cpg-guide.js, legend(), source(), usedLevels()] | lang=en
- "cpg_guide_step": "step()" | kind=code-symbol | source=cpg-guide.js:L77 | neighbors=[cpg-guide.js, doseTable(), figures(), level()] | lang=en
- "cpg_strip": "cpg-strip.js" | kind=code-symbol | source=cpg-strip.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 7208d8e Rewrite chapter 3 (Airway & Ven…, svg(), trace()] | lang=en
- "empact_build": "build.py" | kind=code-symbol | source=courses/empact/build.py:L1 | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…, load(), main()] | lang=en
- "itls_build": "build.py" | kind=code-symbol | source=courses/itls/build.py:L1 | neighbors=[load(), main(), 1a00316 feat(itls): restructure itls co…, a4df22b fix: resolve CI lint failure an…] | lang=en
- "medical_build": "build.py" | kind=code-symbol | source=courses/medical/build.py:L1 | neighbors=[79e6410 Scaffold Medical reviewer (cour…, 877d856 Medical-bdls-empact-pepp-review…, load(), main()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-022.json

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
