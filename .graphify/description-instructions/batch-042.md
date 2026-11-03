# Node Description Batch 43 of 62

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

- "tests_test_api_testindex": "TestIndex" | kind=code-symbol | source=tests/test_api.py:L73 | neighbors=[test_api.py, .test_index_serves_html()]
- "tests_test_api_testlogin_test_login_nonexistent_user": ".test_login_nonexistent_user()" | kind=code-symbol | source=tests/test_api.py:L102 | neighbors=[TestLogin, _login()]
- "tests_test_api_testlogout": "TestLogout" | kind=code-symbol | source=tests/test_api.py:L127 | neighbors=[test_api.py, .test_logout_requires_auth()]
- "tests_test_api_testregister_test_common_password_blocked": ".test_common_password_blocked()" | kind=code-symbol | source=tests/test_api.py:L68 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_invalid_email_rejected": ".test_invalid_email_rejected()" | kind=code-symbol | source=tests/test_api.py:L73 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_digit": ".test_password_no_digit()" | kind=code-symbol | source=tests/test_api.py:L63 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_lowercase": ".test_password_no_lowercase()" | kind=code-symbol | source=tests/test_api.py:L58 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_uppercase": ".test_password_no_uppercase()" | kind=code-symbol | source=tests/test_api.py:L53 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_too_short": ".test_password_too_short()" | kind=code-symbol | source=tests/test_api.py:L48 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_register_creates_user": ".test_register_creates_user()" | kind=code-symbol | source=tests/test_api.py:L32 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_register_duplicate_email": ".test_register_duplicate_email()" | kind=code-symbol | source=tests/test_api.py:L37 | neighbors=[TestRegister, _register()]
- "tests_test_content_guides_squash": "squash()" | kind=code-symbol | source=tests/test_content_guides.py:L59 | neighbors=[test_content_guides.py, test_numbers_match_the_reference_notes()]
- "tests_test_content_guides_strings": "strings()" | kind=code-symbol | source=tests/test_content_guides.py:L63 | neighbors=[test_content_guides.py, test_numbers_match_the_reference_notes()]
- "tests_test_courses_page_test_every_reviewer_course_has_a_chapter_count": "test_every_reviewer_course_has_a_chapter_count()" | kind=code-symbol | source=tests/test_courses_page.py:L31 | neighbors=[test_courses_page.py, _chapter_counts()]
- "tests_test_courses_page_test_reviewer_chapter_counts_match_manifests": "test_reviewer_chapter_counts_match_manifests()" | kind=code-symbol | source=tests/test_courses_page.py:L20 | neighbors=[test_courses_page.py, _chapter_counts()]
- "vendor_chart_4_5_1_umd_min_addbox": "addBox()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start()]
- "vendor_chart_4_5_1_umd_min_addelements": "addElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getElement()]
- "vendor_chart_4_5_1_umd_min_an": "an()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors()]
- "vendor_chart_4_5_1_umd_min_as_notify": "._notify()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), e()]
- "vendor_chart_4_5_1_umd_min_as_tick": ".tick()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .cancel()]
- "vendor_chart_4_5_1_umd_min_as_wait": ".wait()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), ._animateOptions()]
- "vendor_chart_4_5_1_umd_min_be": "Be()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ne()]
- "vendor_chart_4_5_1_umd_min_beforelayout": "beforeLayout()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Go()]
- "vendor_chart_4_5_1_umd_min_bi": "Bi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Fi()]
- "vendor_chart_4_5_1_umd_min_bo_getlabelforvalue": ".getLabelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, ne()]
- "vendor_chart_4_5_1_umd_min_bo_getticklimit": ".getTickLimit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, .buildTicks()]
- "vendor_chart_4_5_1_umd_min_bo_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, s()]
- "vendor_chart_4_5_1_umd_min_buildlookuptable": "buildLookupTable()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, initOffsets()]
- "vendor_chart_4_5_1_umd_min_buildticks": "buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabels()]
- "vendor_chart_4_5_1_umd_min_cn": "cn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, hn()]
- "vendor_chart_4_5_1_umd_min_de_get": ".get()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, he()]
- "vendor_chart_4_5_1_umd_min_de_override": ".override()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, ce()]
- "vendor_chart_4_5_1_umd_min_de_route": ".route()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, he()]
- "vendor_chart_4_5_1_umd_min_de_set": ".set()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, ce()]
- "vendor_chart_4_5_1_umd_min_dn": "dn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, fe()]
- "vendor_chart_4_5_1_umd_min_do": "Do()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co()]
- "vendor_chart_4_5_1_umd_min_ei": "ei()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e()]
- "vendor_chart_4_5_1_umd_min_en_isfortype": ".isForType()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en, ._getRegistryForType()]
- "vendor_chart_4_5_1_umd_min_fo": "fo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw()]
- "vendor_chart_4_5_1_umd_min_generate": "_generate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getDataTimestamps()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-042.json

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
