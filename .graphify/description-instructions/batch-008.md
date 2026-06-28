# Node Description Batch 9 of 13

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "app_bootapp": "bootApp()" | kind=code-symbol | source=app.js:L1303 | neighbors=[app.js, renderComingSoon(), switchSection()]
- "app_handlescroll": "handleScroll()" | kind=code-symbol | source=app.js:L493 | neighbors=[app.js, setMainContent(), switchSection()]
- "app_initbottomnav": "initBottomNav()" | kind=code-symbol | source=app.js:L508 | neighbors=[app.js, setMainContent(), switchSection()]
- "app_initchapterpage": "initChapterPage()" | kind=code-symbol | source=app.js:L137 | neighbors=[app.js, initBatteryIndicator(), recordLastVisited()]
- "app_initfooterawarenav": "initFooterAwareNav()" | kind=code-symbol | source=app.js:L515 | neighbors=[app.js, setMainContent(), switchSection()]
- "commit:repo:github.com/SolimanAnas/SmartCare@04af7e8a04b95def18cba3521ef83cb3d46d09bf": "04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, sy…" | kind=Commit | source=git | neighbors=[main, 7f26548 fix: UTF-8 mojibake across exam…, a4df22b fix: resolve CI lint failure an…]
- "commit:repo:github.com/SolimanAnas/SmartCare@074617fb80abc2dfd95727de3b786f490098ea7e": "074617f feat: update chapter files with SEO and accessibility improvements" | kind=Commit | source=git | neighbors=[main, c6c0a5c chore: update core app - servic…, d641fa0 feat: improve SEO, Open Graph m…]
- "commit:repo:github.com/SolimanAnas/SmartCare@213cb39f0d6e9525ba772b3c13089eed29d72086": "213cb39 NEW CHAPTERS ADDED V 4.0.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, edb1e1d Version 4.0.1, 98be90d Add files via upload]
- "commit:repo:github.com/SolimanAnas/SmartCare@60c17820d11ca70af36e0dffe44414c34a7b9672": "60c1782 chore: stop tracking TOC/ directory (now gitignored)" | kind=Commit | source=git | neighbors=[main, de0dcb2 feat: Add Open Graph metadata, …, 9b0bbbb content: deploy chapters 6-10 w…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8541abefec7ae7fa9d781e820ae6356b7c77b72b": "8541abe chore: Change index page title from landing page to clinical learning p…" | kind=Commit | source=git | neighbors=[main, d00c567 feat: Remove Scope of Practice …, 92652ca feat: Update search placeholder…]
- "commit:repo:github.com/SolimanAnas/SmartCare@98be90d66a0dcd109768dee26ba7727d0e6608ab": "98be90d Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, 213cb39 NEW CHAPTERS ADDED V 4.0.1, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…]
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…]
- "content_c3": "c3.js" | kind=code-symbol | source=content/c3.js:L1 | neighbors=[4663aec fix: Resolve unused variable an…, 59a9f95 toc: implement prehospital (EMT…, 98557d8 docs: Update curriculum content…]
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…, fe7449d docs: Update curriculum content…]
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…, fe7449d docs: Update curriculum content…]
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1084 | neighbors=[ExamEngine, .endExam(), .resumeExam()]
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L63 | neighbors=[ExamEngine, .init(), .setTheme()]
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L768 | neighbors=[ExamEngine, .closeModal(), .startTimer()]
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L600 | neighbors=[ExamEngine, .handleKeyboard(), .updateNavigator()]
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1102 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .showScreen()]
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1042 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam()]
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L490 | neighbors=[ExamEngine, .startExam(), .updateNavigator()]
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…]
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()]
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()]
- "scripts_extract_itls_toc": "extract_itls_toc.py" | kind=code-symbol | source=scripts/extract_itls_toc.py:L1 | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, b791fda content: deploy chapters 4-5 (C…, Extract TOC from International Trauma L…]
- "scripts_gen_create_src_folders": "create_src_folders()" | kind=code-symbol | source=scripts/gen.py:L24 | neighbors=[gen.py, main(), Creates the necessary src/COURSE folder…]
- "scripts_gen_generate_course_page": "generate_course_page()" | kind=code-symbol | source=scripts/gen.py:L32 | neighbors=[gen.py, main(), Replaces placeholders in the template w…]
- "scripts_gen_main": "main()" | kind=code-symbol | source=scripts/gen.py:L55 | neighbors=[gen.py, create_src_folders(), generate_course_page()]
- "scripts_generate_all_itls_data": "generate_all_itls_data.py" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()]
- "server_admin_emails": "_admin_emails()" | kind=code-symbol | source=server.py:L150 | neighbors=[server.py, _is_admin(), Allow-list of admin emails sourced from…]
- "server_is_admin": "_is_admin()" | kind=code-symbol | source=server.py:L156 | neighbors=[server.py, _admin_emails(), A user is an admin if their role is 'Ad…]
- "tests_test_api_testadminusers_test_admin_delete_user": ".test_admin_delete_user()" | kind=code-symbol | source=tests/test_api.py:L166 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_admin_role_update": ".test_admin_role_update()" | kind=code-symbol | source=tests/test_api.py:L155 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_non_admin_cannot_update_role": ".test_non_admin_cannot_update_role()" | kind=code-symbol | source=tests/test_api.py:L180 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testauditlogging_test_admin_action_is_audited": ".test_admin_action_is_audited()" | kind=code-symbol | source=tests/test_api.py:L236 | neighbors=[TestAuditLogging, _login(), _register()]
- "tests_test_api_testauditlogging_test_successful_login_is_audited": ".test_successful_login_is_audited()" | kind=code-symbol | source=tests/test_api.py:L220 | neighbors=[TestAuditLogging, _login(), _register()]
- "tests_test_api_testgooglelogin": "TestGoogleLogin" | kind=code-symbol | source=tests/test_api.py:L115 | neighbors=[test_api.py, .test_google_login_bad_token(), .test_google_login_missing_token()]

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
