# Node Description Batch 10 of 14

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
- "tests_test_api_testlogin_test_login_success": ".test_login_success()" | kind=code-symbol | source=tests/test_api.py:L89 | neighbors=[TestLogin, _login(), _register()]
- "tests_test_api_testlogin_test_login_wrong_password": ".test_login_wrong_password()" | kind=code-symbol | source=tests/test_api.py:L97 | neighbors=[TestLogin, _login(), _register()]
- "tests_test_api_testsecurityheaders": "TestSecurityHeaders" | kind=code-symbol | source=tests/test_api.py:L190 | neighbors=[test_api.py, .test_csp_blocks_framing(), .test_security_headers_present()]
- "app_initbatteryindicator": "initBatteryIndicator()" | kind=code-symbol | source=app.js:L110 | neighbors=[app.js, initChapterPage()]
- "app_recordlastvisited": "recordLastVisited()" | kind=code-symbol | source=app.js:L79 | neighbors=[app.js, initChapterPage()]
- "app_updateheader": "updateHeader()" | kind=code-symbol | source=app.js:L325 | neighbors=[app.js, renderComingSoon()]
- "commit:repo:github.com/SolimanAnas/SmartCare@224ab831c8425237c6980236996ae43fb14d8737": "224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@39cc6bba95ea026c09c42c0f51d4637430307b0a": "39cc6bb fix: remove extra '})' causing syntax error in login.html" | kind=Commit | source=git | neighbors=[0465774 feat: Google Identity Services …, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@755284cd614315df67e3a15aaacb18093c6d8400": "755284c ci(deps)(deps): bump actions/checkout from 4 to 7" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/check…]
- "commit:repo:github.com/SolimanAnas/SmartCare@cb7e171493f7f62d600c7ed42b359f525dead499": "cb7e171 deps(deps): bump pytest from 9.0.3 to 9.1.1" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@cd24feaf092b8444f058985570e0a18082d74874": "cd24fea ci(deps)(deps): bump actions/setup-python from 5 to 6" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/setup…]
- "commit:repo:github.com/SolimanAnas/SmartCare@f95455824d4bb69e3f52741aca22ca53609903bb": "f954558 ci(deps)(deps): bump actions/setup-node from 4 to 6" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/setup…]
- "content_c9": "c9.js" | kind=code-symbol | source=content/c9.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 9b0bbbb content: deploy chapters 6-10 w…]
- "content_starters_backup_c_index": "c-index.js" | kind=code-symbol | source=content_starters_backup/c-index.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…, generateIndexHTML()]
- "itls_build_load": "load()" | kind=code-symbol | source=courses/itls/build.py:L24 | neighbors=[build.py, main()]
- "itls_build_main": "main()" | kind=code-symbol | source=courses/itls/build.py:L29 | neighbors=[build.py, load()]
- "prometric_exam_examengine_adjustcatdifficulty": ".adjustCatDifficulty()" | kind=code-symbol | source=src/prometric/exam.js:L655 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_bindevents": ".bindEvents()" | kind=code-symbol | source=src/prometric/exam.js:L155 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_calculatetopicaccuracy": ".calculateTopicAccuracy()" | kind=code-symbol | source=src/prometric/exam.js:L298 | neighbors=[ExamEngine, .filterQuestions()]
- "prometric_exam_examengine_confirmend": ".confirmEnd()" | kind=code-symbol | source=src/prometric/exam.js:L779 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_getselectedtopics": ".getSelectedTopics()" | kind=code-symbol | source=src/prometric/exam.js:L251 | neighbors=[ExamEngine, .filterQuestions()]

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
