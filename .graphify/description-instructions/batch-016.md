# Node Description Batch 17 of 48

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

- "vendor_supabase_js_2_110_0_updateuser": "updateUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_verify": "_verify()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _authenticate(), _challengeAndVerify(), _register(), _acquireLock()] | lang=en
- "vendor_supabase_js_2_110_0_ye": "Ye()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _getAuthenticatorAssuranceLevel(), getClaims(), setSession(), Wt()] | lang=en
- "app_rendercomingsoon": "renderComingSoon()" | kind=code-symbol | source=app.js:L250 | neighbors=[app.js, bootApp(), setMainContent(), updateHeader()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@006f9af1ad1a1bbcd287dc250a76824c22388f19": "006f9af Update requirements.txt" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, e8be921 Remove leading slash from login…, bfe43fb Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@061bcaea764dbcdde05eff0ec5f6d1311114d9bc": "061bcae local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9d96839 Added Login pages, 236ac26 local hashed authentication (SH…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07ec89d204627921b78d499e08f2571bcbc9bee2": "07ec89d Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c9f0400 Update index.html, 9ed5dd4 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0801c559b31cf09ddc0994cae7077465833ac82b": "0801c55 Update styles.css" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 508e087 Update index.html, 730ad49 BLS] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fc629ed8067812d2115ce0199634b321a6a231d": "1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically inj…" | kind=Commit | source=git | neighbors=[app.js, main, c9276ae chore: update graphify knowledg…, 20fdfa2 feat(itls): complete itls revie…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@30733863a7d00ae86a2ada463d90a25c6ef25149": "3073386 Update login.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 35a1e71 Update login.html, a9eb59e Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@349d35ae67680ca2ad186a9ca1811b9454fd3c2a": "349d35a Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 3f5e261 Revise README to enhance projec…, afa5eb0 Add files via upload] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@35a1e71c5c2ffd02e382b436b2f7eee1be57d954": "35a1e71 Update login.html" | kind=Commit | source=git | neighbors=[3073386 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, c75db55 Update index.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@3ecc147b35eb3e6948ba67c859c489066222418c": "3ecc147 Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9ed5dd4 Update index.html, c75db55 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f5e26121b7d69f098e5dd4d1204d495c1eca664": "3f5e261 Revise README to enhance project documentation" | kind=Commit | source=git | neighbors=[349d35a Add files via upload, feat/lucide-svg-migration, fix/lucide-quote-consistency, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fb7ba040a790e01ce1b9ce07446c7ffd4603b53": "4fb7ba0 Fix formatting in README for Live Demo link" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a9eb59e Update README.md, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@503d0e1699bdadb4f7175ecb92717550c1770eb6": "503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks" | kind=Commit | source=git | neighbors=[main, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js, ef31570 Fix offline precache gap, add c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508e08701627fbfd39a37fe6c0f5ff394ac4e414": "508e087 Update index.html" | kind=Commit | source=git | neighbors=[0801c55 Update styles.css, feat/lucide-svg-migration, fix/lucide-quote-consistency, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d23c19f55908df5132630da585963ba2940e065": "5d23c19 fix: improve heading and index-count visibility in dark/amoled themes" | kind=Commit | source=git | neighbors=[main, 65ac830 feat: restructure Chapter 1 — m…, c-index.js, 5dddc2f feat: update ECG-study.html foo…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@680d70693d693c7dbadddb4ecbac5fbc6e194561": "680d706 Browslow tape" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 730ad49 BLS, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69889e8c8c739569db5fa221249f0c802ce0d30c": "69889e8 Delete chapters/c3.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 680d706 Browslow tape, edb1e1d Version 4.0.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6a7c398ed7d998ca34de34685aa4472dfab3d834": "6a7c398 Update login page subhead and button width" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bc75ac8 Update email placeholder in log…, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@707c0339a55de4be93f4915021d977cdaa023b8e": "707c033 Major Updates ✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 236ac26 local hashed authentication (SH…, b042359 Reduced image SIZE ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70a3f4da8cfd80498ebe52b7e562ef977cffc974": "70a3f4d Clean up about.html copy and relocate MIT license to privacy.html" | kind=Commit | source=git | neighbors=[main, acb0328 About ✅ Merge pull request #11 …, sw.js, ee41524 fix: wrap long line in test_adm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@730ad49c64375a5ca16cd3dd738508c240965bdb": "730ad49 BLS" | kind=Commit | source=git | neighbors=[680d706 Browslow tape, feat/lucide-svg-migration, fix/lucide-quote-consistency, 0801c55 Update styles.css] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7f265481d3ae312090c0cde13e86c71cfbd18b0d": "7f26548 fix: UTF-8 mojibake across exam-db.json, c6.js, exam.css + UI polish in…" | kind=Commit | source=git | neighbors=[04af7e8 fix: correct UTF-8 mojibake in …, main, ff409d5 fix: match section-header style…, c6.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@829a86de14d53579a31149642dffbec851623ad0": "829a86d update: refresh PWA icons from new22.png + bump SW cache version" | kind=Commit | source=git | neighbors=[main, d5777e9 feat: comprehensive privacy pol…, sw.js, 86a3d5c update PWA icons] | lang=en
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
- "commit:repo:github.com/SolimanAnas/SmartCare@bc75ac8dabcac40a537e9182a157238876be7a60": "bc75ac8 Update email placeholder in login form" | kind=Commit | source=git | neighbors=[6a7c398 Update login page subhead and b…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 994915d Icon Pack ❤️] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bfe43fb14b84b1e6af8ba93056602627c5771b5a": "bfe43fb Update requirements.txt" | kind=Commit | source=git | neighbors=[668149a Log in & sign up 👍, feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-016.json

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
