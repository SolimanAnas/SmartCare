# Node Description Batch 9 of 14

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

- "tests_test_api_testadminusers_test_admin_users_forbidden_for_regular_user": ".test_admin_users_forbidden_for_regular_user()" | kind=code-symbol | source=tests/test_api.py:L140 | neighbors=[A signed-in non-admin must be forbidden…, TestAdminUsers, _login(), _register()] | lang=en
- "tests_test_api_testauditlogging": "TestAuditLogging" | kind=code-symbol | source=tests/test_api.py:L219 | neighbors=[test_api.py, .test_admin_action_is_audited(), .test_failed_login_is_audited(), .test_successful_login_is_audited()] | lang=en
- "tests_test_api_testlogin_test_login_generic_error_message": ".test_login_generic_error_message()" | kind=code-symbol | source=tests/test_api.py:L106 | neighbors=[Both bad-user and bad-password return t…, TestLogin, _login(), _register()] | lang=en
- "tests_test_api_teststaticfiles": "TestStaticFiles" | kind=code-symbol | source=tests/test_api.py:L284 | neighbors=[test_api.py, .test_manifest_json(), .test_nonexistent_file_returns_404(), .test_style_css()] | lang=en
- "app_bootapp": "bootApp()" | kind=code-symbol | source=app.js:L1303 | neighbors=[app.js, renderComingSoon(), switchSection()] | lang=en
- "app_handlescroll": "handleScroll()" | kind=code-symbol | source=app.js:L493 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "app_initbottomnav": "initBottomNav()" | kind=code-symbol | source=app.js:L508 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "app_initchapterpage": "initChapterPage()" | kind=code-symbol | source=app.js:L137 | neighbors=[app.js, initBatteryIndicator(), recordLastVisited()] | lang=en
- "app_initfooterawarenav": "initFooterAwareNav()" | kind=code-symbol | source=app.js:L515 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0245fabcf0c44243e22efc59abc50b6787cfa680": "0245fab update: refresh PWA icons and favicon from new source image" | kind=Commit | source=git | neighbors=[main, 411adfd update: refresh PWA icons from …, 6c55b58 fix: sync section-header & cont…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@04af7e8a04b95def18cba3521ef83cb3d46d09bf": "04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, sy…" | kind=Commit | source=git | neighbors=[main, 7f26548 fix: UTF-8 mojibake across exam…, a4df22b fix: resolve CI lint failure an…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@074617fb80abc2dfd95727de3b786f490098ea7e": "074617f feat: update chapter files with SEO and accessibility improvements" | kind=Commit | source=git | neighbors=[main, c6c0a5c chore: update core app - servic…, d641fa0 feat: improve SEO, Open Graph m…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@18fb7dc6b575d168d26a094106448fc9450c7ce1": "18fb7dc Added ├── .well-known/" | kind=Commit | source=git | neighbors=[main, d546791 feat: add screenshots, orientat…, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@213cb39f0d6e9525ba772b3c13089eed29d72086": "213cb39 NEW CHAPTERS ADDED V 4.0.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, edb1e1d Version 4.0.1, 98be90d Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@40d423a44d417ace48a649708990f8a719c1eb22": "40d423a Remove unused admin/login/signup pages" | kind=Commit | source=git | neighbors=[main, 5b988aa Create .nojekyll, fefe4cd chore: bump SW to v2.2 for init…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@411adfde74e797e1ca7a7b580827cd87c17075b6": "411adfd update: refresh PWA icons from updated source image" | kind=Commit | source=git | neighbors=[0245fab update: refresh PWA icons and f…, main, 86a3d5c update PWA icons] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b988aa93af5c5e028873d87c0cbd12b0379784f": "5b988aa Create .nojekyll" | kind=Commit | source=git | neighbors=[40d423a Remove unused admin/login/signu…, main, 1a56d75 feat: graphify rebuild with des…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@60c17820d11ca70af36e0dffe44414c34a7b9672": "60c1782 chore: stop tracking TOC/ directory (now gitignored)" | kind=Commit | source=git | neighbors=[main, de0dcb2 feat: Add Open Graph metadata, …, 9b0bbbb content: deploy chapters 6-10 w…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cd1ebdd38c3b3a718d12f11d183faaa761dfd6": "67cd1eb fix: update contact email and all URLs in privacy policy" | kind=Commit | source=git | neighbors=[main, 18fb7dc Added ├── .well-known/, d5777e9 feat: comprehensive privacy pol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c55b58a08f87310c2157a2ecec18a123b5f5594": "6c55b58 fix: sync section-header & continue-label colors with index.html sectio…" | kind=Commit | source=git | neighbors=[main, 0245fab update: refresh PWA icons and f…, ff409d5 fix: match section-header style…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8541abefec7ae7fa9d781e820ae6356b7c77b72b": "8541abe chore: Change index page title from landing page to clinical learning p…" | kind=Commit | source=git | neighbors=[main, d00c567 feat: Remove Scope of Practice …, 92652ca feat: Update search placeholder…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@98be90d66a0dcd109768dee26ba7727d0e6608ab": "98be90d Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, 213cb39 NEW CHAPTERS ADDED V 4.0.1, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d546791e464c038a52e24f9309be76c8b998d88f": "d546791 feat: add screenshots, orientation, and safe categories to manifest" | kind=Commit | source=git | neighbors=[18fb7dc Added ├── .well-known/, main, fefe4cd chore: bump SW to v2.2 for init…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d5777e9b8a0fe40413ec7e62d9487650a17bb5f7": "d5777e9 feat: comprehensive privacy policy with premium UI/UX design" | kind=Commit | source=git | neighbors=[829a86d update: refresh PWA icons from …, main, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…] | lang=en
- "content_c3": "c3.js" | kind=code-symbol | source=content/c3.js:L1 | neighbors=[4663aec fix: Resolve unused variable an…, 59a9f95 toc: implement prehospital (EMT…, 98557d8 docs: Update curriculum content…] | lang=en
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…, fe7449d docs: Update curriculum content…] | lang=en
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…, fe7449d docs: Update curriculum content…] | lang=en
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1084 | neighbors=[ExamEngine, .endExam(), .resumeExam()] | lang=en
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L63 | neighbors=[ExamEngine, .init(), .setTheme()] | lang=en
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L768 | neighbors=[ExamEngine, .closeModal(), .startTimer()] | lang=en
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L600 | neighbors=[ExamEngine, .handleKeyboard(), .updateNavigator()] | lang=en
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1102 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .showScreen()] | lang=en
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1042 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam()] | lang=en
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L490 | neighbors=[ExamEngine, .startExam(), .updateNavigator()] | lang=en
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…] | lang=en
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()] | lang=en
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-008.json

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
