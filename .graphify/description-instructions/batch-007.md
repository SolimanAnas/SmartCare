# Node Description Batch 8 of 14

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

- "commit:repo:github.com/SolimanAnas/SmartCare@6a7c398ed7d998ca34de34685aa4472dfab3d834": "6a7c398 Update login page subhead and button width" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bc75ac8 Update email placeholder in log…, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@707c0339a55de4be93f4915021d977cdaa023b8e": "707c033 Major Updates ✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 236ac26 local hashed authentication (SH…, b042359 Reduced image SIZE ✅] | lang=en
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
- "commit:repo:github.com/SolimanAnas/SmartCare@bc75ac8dabcac40a537e9182a157238876be7a60": "bc75ac8 Update email placeholder in login form" | kind=Commit | source=git | neighbors=[6a7c398 Update login page subhead and b…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 994915d Icon Pack ❤️] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bfe43fb14b84b1e6af8ba93056602627c5771b5a": "bfe43fb Update requirements.txt" | kind=Commit | source=git | neighbors=[668149a Log in & sign up 👍, feat/lucide-svg-migration, fix/lucide-quote-consistency, 006f9af Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2479e9d0726a40d4d94cfbee9e025dedf321257": "c2479e9 Adding ECG & Drug calc 👍❤️💊" | kind=Commit | source=git | neighbors=[03f6898 Update sw.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c6c0a5cdb1fc6cf80ee0c44eabfa981c32b15305": "c6c0a5c chore: update core app - service worker, landing page, exam page, and c…" | kind=Commit | source=git | neighbors=[074617f feat: update chapter files with…, main, a4df22b fix: resolve CI lint failure an…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c75db552003a9077740036675dfd11920e4350ee": "c75db55 Update index.html" | kind=Commit | source=git | neighbors=[35a1e71 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3ecc147 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9f040012caa5c4a566b770192bca7a146688efc": "c9f0400 Update index.html" | kind=Commit | source=git | neighbors=[07ec89d Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d183462b1428daee70e9e992ba586e3c55c7f7a1": "d183462 Fix redirect URL for login page" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 6a7c398 Update login page subhead and b…, e8be921 Remove leading slash from login…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e6ace1cbab9503be7a68ceb32e257ba0cc12a056": "e6ace1c Add files via upload" | kind=Commit | source=git | neighbors=[9d96839 Added Login pages, feat/lucide-svg-migration, fix/lucide-quote-consistency, 668149a Log in & sign up 👍] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e8be9216e3b1e09a9a6d77fa1da9b919a7b030fb": "e8be921 Remove leading slash from login redirect URL" | kind=Commit | source=git | neighbors=[006f9af Update requirements.txt, feat/lucide-svg-migration, fix/lucide-quote-consistency, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f3d2625949a03b0fdcb69988a24786569bba09bf": "f3d2625 Update README.md" | kind=Commit | source=git | neighbors=[3f5e261 Revise README to enhance projec…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 4fb7ba0 Fix formatting in README for Li…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fefe4cdb3029f7ea702a5a865d265739e1e9e272": "fefe4cd chore: bump SW to v2.2 for initial public release" | kind=Commit | source=git | neighbors=[d546791 feat: add screenshots, orientat…, main, 40d423a Remove unused admin/login/signu…, sw.js] | lang=en
- "content_c10": "c10.js" | kind=code-symbol | source=content/c10.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…, de0dcb2 feat: Add Open Graph metadata, …, fe7449d docs: Update curriculum content…] | lang=en
- "content_c4": "c4.js" | kind=code-symbol | source=content/c4.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 98557d8 docs: Update curriculum content…, b791fda content: deploy chapters 4-5 (C…, fe7449d docs: Update curriculum content…] | lang=en
- "content_c5": "c5.js" | kind=code-symbol | source=content/c5.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 98557d8 docs: Update curriculum content…, b791fda content: deploy chapters 4-5 (C…, fe7449d docs: Update curriculum content…] | lang=en
- "itls_build": "build.py" | kind=code-symbol | source=courses/itls/build.py:L1 | neighbors=[1a00316 feat(itls): restructure itls co…, a4df22b fix: resolve CI lint failure an…, load(), main()] | lang=en
- "prometric_exam_examengine_buildnavigator": ".buildNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L441 | neighbors=[ExamEngine, .updateNavigator(), .retryIncorrect(), .startExam()] | lang=en
- "prometric_exam_examengine_constructor": ".constructor()" | kind=code-symbol | source=src/prometric/exam.js:L2 | neighbors=[ExamEngine, .init(), .loadQuestionHistory(), .loadStats()] | lang=en
- "prometric_exam_examengine_navigate": ".navigate()" | kind=code-symbol | source=src/prometric/exam.js:L705 | neighbors=[ExamEngine, .handleKeyboard(), .handleTouchEnd(), .renderQuestion()] | lang=en
- "prometric_exam_examengine_newexam": ".newExam()" | kind=code-symbol | source=src/prometric/exam.js:L812 | neighbors=[ExamEngine, .goToStep(), .removeTouchListeners(), .showScreen()] | lang=en
- "prometric_exam_examengine_removetouchlisteners": ".removeTouchListeners()" | kind=code-symbol | source=src/prometric/exam.js:L787 | neighbors=[ExamEngine, .endExam(), .newExam(), .retryIncorrect()] | lang=en
- "prometric_exam_examengine_shufflearray": ".shuffleArray()" | kind=code-symbol | source=src/prometric/exam.js:L336 | neighbors=[ExamEngine, .retryIncorrect(), .shuffleOptions(), .startExam()] | lang=en
- "prometric_exam_examengine_starttimer": ".startTimer()" | kind=code-symbol | source=src/prometric/exam.js:L718 | neighbors=[ExamEngine, .resumeExam(), .retryIncorrect(), .startExam()] | lang=en
- "prometric_exam_examengine_toggleflag": ".toggleFlag()" | kind=code-symbol | source=src/prometric/exam.js:L697 | neighbors=[ExamEngine, .handleKeyboard(), .showToast(), .updateNavigator()] | lang=en
- "prometric_exam_examengine_updateavailablecount": ".updateAvailableCount()" | kind=code-symbol | source=src/prometric/exam.js:L148 | neighbors=[ExamEngine, .selectMode(), .selectSetting(), .filterQuestions()] | lang=en
- "scripts_assemble_chapters_assemble": "assemble()" | kind=code-symbol | source=scripts/assemble_chapters.py:L90 | neighbors=[assemble_chapters.py, extract_sections(), main(), Assemble a complete chapter JS file.] | lang=en
- "server_create_app": "create_app()" | kind=code-symbol | source=server.py:L84 | neighbors=[server.py, _register_csrf_guard(), _register_routes(), _register_security_headers()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-007.json

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
