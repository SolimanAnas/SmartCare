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

- "tests_med_index_xss_spec": "med-index-xss.spec.js" | kind=code-symbol | source=tests/med-index-xss.spec.js:L1 | neighbors=[817a4bf Merge pull request #23 Fixed: r…, 81d920a Fix reflected XSS in med-index.…]
- "tests_medical_reviewer_spec": "medical-reviewer.spec.js" | kind=code-symbol | source=tests/medical-reviewer.spec.js:L1 | neighbors=[3a000d0 Integrate Medical reviewer into…, 877d856 Medical-bdls-empact-pepp-review…]
- "tests_pepp_reviewer_spec": "pepp-reviewer.spec.js" | kind=code-symbol | source=tests/pepp-reviewer.spec.js:L1 | neighbors=[20ed56a Integrate PEPP reviewer into pl…, 877d856 Medical-bdls-empact-pepp-review…]
- "tests_sw_cache_writes_spec": "sw-cache-writes.spec.js" | kind=code-symbol | source=tests/sw-cache-writes.spec.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
- "tests_test_api_supabase_backend": "supabase_backend()" | kind=code-symbol | source=tests/test_api.py:L29 | neighbors=[test_api.py, Stubs server.py's Supabase integration …]
- "tests_test_api_testaccountselfdelete_test_not_configured_returns_503": ".test_not_configured_returns_503()" | kind=code-symbol | source=tests/test_api.py:L94 | neighbors=[TestAccountSelfDelete, _auth()]
- "tests_test_api_testadminusers_test_admin_users_requires_auth": ".test_admin_users_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L135 | neighbors=[Anonymous access to the admin API must …, TestAdminUsers]
- "tests_test_api_testauditlogging_test_failed_login_is_audited": ".test_failed_login_is_audited()" | kind=code-symbol | source=tests/test_api.py:L229 | neighbors=[TestAuditLogging, _login()]
- "tests_test_api_testauditlogging_test_self_delete_is_audited": ".test_self_delete_is_audited()" | kind=code-symbol | source=tests/test_api.py:L157 | neighbors=[TestAuditLogging, _auth()]
- "tests_test_api_testcsrfguard_test_delete_without_xrw_header_rejected": ".test_delete_without_xrw_header_rejected()" | kind=code-symbol | source=tests/test_api.py:L187 | neighbors=[A request missing X-Requested-With must…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_post_without_xrw_header_rejected": ".test_post_without_xrw_header_rejected()" | kind=code-symbol | source=tests/test_api.py:L259 | neighbors=[A POST missing X-Requested-With must be…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_valid_delete_request_allowed": ".test_valid_delete_request_allowed()" | kind=code-symbol | source=tests/test_api.py:L195 | neighbors=[A well-formed request with the CSRF hea…, TestCsrfGuard]
- "tests_test_api_testcsrfguard_test_valid_json_post_allowed": ".test_valid_json_post_allowed()" | kind=code-symbol | source=tests/test_api.py:L268 | neighbors=[A well-formed JSON POST with the CSRF h…, TestCsrfGuard]
- "tests_test_api_testhealthcheck": "TestHealthCheck" | kind=code-symbol | source=tests/test_api.py:L144 | neighbors=[test_api.py, .test_health_returns_ok()]
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
