# Node Description Batch 19 of 49

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

- "prometric_exam_examengine_buildnavigator": ".buildNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L443 | neighbors=[ExamEngine, .updateNavigator(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_constructor": ".constructor()" | kind=code-symbol | source=src/prometric/exam.js:L2 | neighbors=[ExamEngine, .init(), .loadQuestionHistory(), .loadStats()]
- "prometric_exam_examengine_navigate": ".navigate()" | kind=code-symbol | source=src/prometric/exam.js:L707 | neighbors=[ExamEngine, .handleKeyboard(), .handleTouchEnd(), .renderQuestion()]
- "prometric_exam_examengine_newexam": ".newExam()" | kind=code-symbol | source=src/prometric/exam.js:L814 | neighbors=[ExamEngine, .goToStep(), .removeTouchListeners(), .showScreen()]
- "prometric_exam_examengine_removetouchlisteners": ".removeTouchListeners()" | kind=code-symbol | source=src/prometric/exam.js:L789 | neighbors=[ExamEngine, .endExam(), .newExam(), .retryIncorrect()]
- "prometric_exam_examengine_shufflearray": ".shuffleArray()" | kind=code-symbol | source=src/prometric/exam.js:L338 | neighbors=[ExamEngine, .retryIncorrect(), .shuffleOptions(), .startExam()]
- "prometric_exam_examengine_starttimer": ".startTimer()" | kind=code-symbol | source=src/prometric/exam.js:L720 | neighbors=[ExamEngine, .resumeExam(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_toggleflag": ".toggleFlag()" | kind=code-symbol | source=src/prometric/exam.js:L699 | neighbors=[ExamEngine, .handleKeyboard(), .showToast(), .updateNavigator()]
- "prometric_exam_examengine_updateavailablecount": ".updateAvailableCount()" | kind=code-symbol | source=src/prometric/exam.js:L150 | neighbors=[ExamEngine, .selectMode(), .selectSetting(), .filterQuestions()]
- "scripts_assemble_chapters_assemble": "assemble()" | kind=code-symbol | source=scripts/assemble_chapters.py:L90 | neighbors=[assemble_chapters.py, extract_sections(), main(), Assemble a complete chapter JS file.]
- "scripts_build_precache_build_list": "build_list()" | kind=code-symbol | source=scripts/build_precache.py:L121 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_build_precache_main": "main()" | kind=code-symbol | source=scripts/build_precache.py:L147 | neighbors=[build_precache.py, build_list(), content_hash(), rel()]
- "scripts_build_precache_rel": "rel()" | kind=code-symbol | source=scripts/build_precache.py:L67 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_check_contrast_contrast": "contrast()" | kind=code-symbol | source=scripts/check_contrast.py:L46 | neighbors=[check_contrast.py, hex_to_rgb(), luminance(), main()]
- "scripts_generate_screenshots": "generate_screenshots.py" | kind=code-symbol | source=scripts/generate_screenshots.py:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, compress(), main()]
- "scripts_generate_splash": "generate_splash.py" | kind=code-symbol | source=scripts/generate_splash.py:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, device_entry(), main()]
- "server_create_app": "create_app()" | kind=code-symbol | source=server.py:L33 | neighbors=[server.py, _register_csrf_guard(), _register_routes(), _register_security_headers()]
- "server_require_supabase_user": "_require_supabase_user()" | kind=code-symbol | source=server.py:L120 | neighbors=[server.py, Abort with 503/401 unless the caller ha…, _supabase_admin_configured(), _supabase_user_from_token()]
- "server_supabase_user_from_token": "_supabase_user_from_token()" | kind=code-symbol | source=server.py:L98 | neighbors=[server.py, Resolve a Supabase access token (from t…, _require_supabase_user(), _supabase_admin_configured()]
- "src_render_state_renderemptyorerror": "renderEmptyOrError()" | kind=code-symbol | source=src/render-state.js:L49 | neighbors=[render-state.js, escapeHtml(), icon(), renderState()]
- "tests_bls_reviewer_spec": "bls-reviewer.spec.js" | kind=code-symbol | source=tests/bls-reviewer.spec.js:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 5157b39 Fix horizontal overflow on phon…, 82ff814 Add Playwright smoke test for B…, f953366 PR #26 BLS-reviewer]
- "tests_test_api_fakeresp": "_FakeResp" | kind=code-symbol | source=tests/test_api.py:L15 | neighbors=[test_api.py, .__init__(), .json(), .raise_for_status()]
- "tests_test_api_testadminusers_test_admin_can_list_users": ".test_admin_can_list_users()" | kind=code-symbol | source=tests/test_api.py:L146 | neighbors=[An authenticated admin (role == 'Admin'…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_admin_users_forbidden_for_regular_user": ".test_admin_users_forbidden_for_regular_user()" | kind=code-symbol | source=tests/test_api.py:L140 | neighbors=[A signed-in non-admin must be forbidden…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testlogin_test_login_generic_error_message": ".test_login_generic_error_message()" | kind=code-symbol | source=tests/test_api.py:L106 | neighbors=[Both bad-user and bad-password return t…, TestLogin, _login(), _register()]
- "tests_test_api_teststaticfiles": "TestStaticFiles" | kind=code-symbol | source=tests/test_api.py:L210 | neighbors=[test_api.py, .test_manifest_json(), .test_nonexistent_file_returns_404(), .test_style_css()]
- "vendor_chart_4_5_1_umd_min_ae": "Ae()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._computeGridLineItems(), .drawBorder(), .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_as_cancel": ".cancel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .tick(), ._createAnimations(), .stop()]
- "vendor_chart_4_5_1_umd_min_at": "at()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), ._dataCheck()]
- "vendor_chart_4_5_1_umd_min_b": "b()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, x(), eo(), .init()]
- "vendor_chart_4_5_1_umd_min_beforedatasetsdraw": "beforeDatasetsDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, oa(), .getSortedVisibleDatasetMetas(), ua()]
- "vendor_chart_4_5_1_umd_min_beforedraw": "beforeDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .updateControlPoints(), .getSortedVisibleDatasetMetas(), ua()]
- "vendor_chart_4_5_1_umd_min_bn": "Bn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarValuePixels(), getLabelAndValue(), updateElements()]
- "vendor_chart_4_5_1_umd_min_bo_handletickrangeoptions": ".handleTickRangeOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, a(), o(), .getUserBounds()]
- "vendor_chart_4_5_1_umd_min_de_describe": ".describe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, .constructor(), ce(), .register()]
- "vendor_chart_4_5_1_umd_min_en_register": ".register()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en, .describe(), r(), x()]
- "vendor_chart_4_5_1_umd_min_fa": "fa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), .first(), ua()]
- "vendor_chart_4_5_1_umd_min_ga": "ga()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), .first(), ua()]
- "vendor_chart_4_5_1_umd_min_ge": "ge()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ms(), .isAttached(), we()]
- "vendor_chart_4_5_1_umd_min_getcenterpoint": "getCenterPoint()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getProps(), tooltipPosition(), Ui()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-018.json

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
