# Node Description Batch 34 of 49

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

- "server_validate_email": "_validate_email()" | kind=code-symbol | source=server.py:L60 | neighbors=[server.py, Return an error string, or None if vali…]
- "server_validate_password": "_validate_password()" | kind=code-symbol | source=server.py:L69 | neighbors=[server.py, Return an error string, or None if the …]
- "shared_admin_adminemails": "adminEmails()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L43 | neighbors=[admin.ts, requireAdmin()]
- "shared_admin_serviceclient": "serviceClient()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L36 | neighbors=[admin.ts, requireAdmin()]
- "src_render_state_renderloading": "renderLoading()" | kind=code-symbol | source=src/render-state.js:L39 | neighbors=[render-state.js, renderState()]
- "src_theme_current": "current()" | kind=code-symbol | source=src/theme.js:L23 | neighbors=[theme.js, next()]
- "src_theme_next": "next()" | kind=code-symbol | source=src/theme.js:L40 | neighbors=[theme.js, current()]
- "tests_check_exam_flow_spec": "_check_exam_flow.spec.js" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L1 | neighbors=[99f095b fix: resolve mixed SVG quote mi…, PAGES]
- "tests_exam_review_a11y_spec": "exam-review-a11y.spec.js" | kind=code-symbol | source=tests/exam-review-a11y.spec.js:L1 | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, 9b12c84 Merge pull request #20]
- "tests_homepage_search_spec": "homepage-search.spec.js" | kind=code-symbol | source=tests/homepage-search.spec.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
- "tests_init": "__init__.py" | kind=code-symbol | source=tests/__init__.py:L1 | neighbors=[67cb179 Add files via upload, 8f311cd Merge branch 'main' of https://…]
- "tests_last_visited_spec": "last-visited.spec.js" | kind=code-symbol | source=tests/last-visited.spec.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
- "tests_med_index_xss_spec": "med-index-xss.spec.js" | kind=code-symbol | source=tests/med-index-xss.spec.js:L1 | neighbors=[817a4bf Merge pull request #23 Fixed: r…, 81d920a Fix reflected XSS in med-index.…]
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
- "vendor_chart_4_5_1_umd_min_addbox": "addBox()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, start()]
- "vendor_chart_4_5_1_umd_min_addelements": "addElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getElement()]
- "vendor_chart_4_5_1_umd_min_an": "an()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._createDescriptors()]
- "vendor_chart_4_5_1_umd_min_as_notify": "._notify()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), e()]
- "vendor_chart_4_5_1_umd_min_as_tick": ".tick()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .cancel()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-033.json

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
