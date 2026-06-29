# Node Description Batch 11 of 14

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "prometric_exam_examengine_loadstats": ".loadStats()" | kind=code-symbol | source=src/prometric/exam.js:L1089 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_pauseexam": ".pauseExam()" | kind=code-symbol | source=src/prometric/exam.js:L758 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_renderheatmap": ".renderHeatmap()" | kind=code-symbol | source=src/prometric/exam.js:L1159 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderimprovementchart": ".renderImprovementChart()" | kind=code-symbol | source=src/prometric/exam.js:L1124 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderinsights": ".renderInsights()" | kind=code-symbol | source=src/prometric/exam.js:L883 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_renderstrengthsweaknesses": ".renderStrengthsWeaknesses()" | kind=code-symbol | source=src/prometric/exam.js:L1202 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_rendertopicperformance": ".renderTopicPerformance()" | kind=code-symbol | source=src/prometric/exam.js:L920 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_savequestionhistory": ".saveQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L326 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_savestats": ".saveStats()" | kind=code-symbol | source=src/prometric/exam.js:L1097 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_selectmode": ".selectMode()" | kind=code-symbol | source=src/prometric/exam.js:L124 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_selectsetting": ".selectSetting()" | kind=code-symbol | source=src/prometric/exam.js:L138 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_settheme": ".setTheme()" | kind=code-symbol | source=src/prometric/exam.js:L72 | neighbors=[ExamEngine, .initTheme()]
- "prometric_exam_examengine_showresults": ".showResults()" | kind=code-symbol | source=src/prometric/exam.js:L942 | neighbors=[ExamEngine, .showScreen()]
- "prometric_exam_examengine_showtoast": ".showToast()" | kind=code-symbol | source=src/prometric/exam.js:L1068 | neighbors=[ExamEngine, .toggleFlag()]
- "prometric_exam_examengine_shuffleoptions": ".shuffleOptions()" | kind=code-symbol | source=src/prometric/exam.js:L344 | neighbors=[ExamEngine, .shuffleArray()]
- "prometric_exam_examengine_updatelivescore": ".updateLiveScore()" | kind=code-symbol | source=src/prometric/exam.js:L498 | neighbors=[ExamEngine, .updateNavigator()]
- "scripts_assemble_chapters_main": "main()" | kind=code-symbol | source=scripts/assemble_chapters.py:L122 | neighbors=[assemble_chapters.py, assemble()]
- "scripts_build_toc_esc": "esc()" | kind=code-symbol | source=scripts/build_toc.py:L88 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_build_toc_main": "main()" | kind=code-symbol | source=scripts/build_toc.py:L131 | neighbors=[build_toc.py, gen_chapter()]
- "server_audit": "_audit()" | kind=code-symbol | source=server.py:L34 | neighbors=[server.py, Write a structured audit record for aut…]
- "server_register_csrf_guard": "_register_csrf_guard()" | kind=code-symbol | source=server.py:L409 | neighbors=[server.py, create_app()]
- "server_register_routes": "_register_routes()" | kind=code-symbol | source=server.py:L168 | neighbors=[server.py, create_app()]
- "server_register_security_headers": "_register_security_headers()" | kind=code-symbol | source=server.py:L431 | neighbors=[server.py, create_app()]
- "server_user": "User" | kind=code-symbol | source=server.py:L136 | neighbors=[server.py, UserMixin]
- "server_validate_email": "_validate_email()" | kind=code-symbol | source=server.py:L60 | neighbors=[server.py, Return an error string, or None if vali…]
- "server_validate_password": "_validate_password()" | kind=code-symbol | source=server.py:L69 | neighbors=[server.py, Return an error string, or None if the …]
- "tests_check_exam_flow_spec": "_check_exam_flow.spec.js" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L1 | neighbors=[99f095b fix: resolve mixed SVG quote mi…, PAGES]
- "tests_init": "__init__.py" | kind=code-symbol | source=tests/__init__.py:L1 | neighbors=[67cb179 Add files via upload, 8f311cd Merge branch 'main' of https://…]
- "tests_test_api_testadminusers_test_admin_users_requires_auth": ".test_admin_users_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L135 | neighbors=[Anonymous access to the admin API must …, TestAdminUsers]
- "tests_test_api_testauditlogging_test_failed_login_is_audited": ".test_failed_login_is_audited()" | kind=code-symbol | source=tests/test_api.py:L229 | neighbors=[TestAuditLogging, _login()]
- "tests_test_api_testcsrfguard_test_get_requests_not_blocked": ".test_get_requests_not_blocked()" | kind=code-symbol | source=tests/test_api.py:L278 | neighbors=[GET requests are never subject to the C…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_post_without_json_content_type_rejected": ".test_post_without_json_content_type_rejected()" | kind=code-symbol | source=tests/test_api.py:L249 | neighbors=[A plain-form POST to an API endpoint mu…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_post_without_xrw_header_rejected": ".test_post_without_xrw_header_rejected()" | kind=code-symbol | source=tests/test_api.py:L259 | neighbors=[A POST missing X-Requested-With must be…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_valid_json_post_allowed": ".test_valid_json_post_allowed()" | kind=code-symbol | source=tests/test_api.py:L268 | neighbors=[A well-formed JSON POST with the CSRF h…, TestCsrfGuard]
- "tests_test_api_testhealthcheck": "TestHealthCheck" | kind=code-symbol | source=tests/test_api.py:L209 | neighbors=[test_api.py, .test_health_returns_ok()]
- "tests_test_api_testindex": "TestIndex" | kind=code-symbol | source=tests/test_api.py:L23 | neighbors=[test_api.py, .test_index_serves_html()]
- "tests_test_api_testlogin_test_login_nonexistent_user": ".test_login_nonexistent_user()" | kind=code-symbol | source=tests/test_api.py:L102 | neighbors=[TestLogin, _login()]
- "tests_test_api_testlogout": "TestLogout" | kind=code-symbol | source=tests/test_api.py:L127 | neighbors=[test_api.py, .test_logout_requires_auth()]
- "tests_test_api_testregister_test_common_password_blocked": ".test_common_password_blocked()" | kind=code-symbol | source=tests/test_api.py:L68 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_invalid_email_rejected": ".test_invalid_email_rejected()" | kind=code-symbol | source=tests/test_api.py:L73 | neighbors=[TestRegister, _register()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-010.json

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
