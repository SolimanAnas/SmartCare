# Node Description Batch 42 of 62

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

- "scripts_qa_probe": "probe()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L23 | neighbors=[qa.py, main()]
- "scripts_qa_sheet": "sheet()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L41 | neighbors=[qa.py, main()]
- "scripts_record_click": "click()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L76 | neighbors=[record.js, auto()]
- "scripts_record_hold": "hold()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L66 | neighbors=[record.js, frame()]
- "scripts_record_scrollto": "scrollTo()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L84 | neighbors=[record.js, frame()]
- "scripts_split_content_loadchapterdata": "loadChapterData()" | kind=code-symbol | source=scripts/split_content.js:L24 | neighbors=[split_content.js, main()]
- "scripts_split_content_main": "main()" | kind=code-symbol | source=scripts/split_content.js:L37 | neighbors=[split_content.js, loadChapterData()]
- "scripts_validate_content_load_known_single_option": "load_known_single_option()" | kind=code-symbol | source=scripts/validate_content.py:L199 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_manifest_shape": "validate_manifest_shape()" | kind=code-symbol | source=scripts/validate_content.py:L57 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_pearl": "validate_pearl()" | kind=code-symbol | source=scripts/validate_content.py:L149 | neighbors=[validate_content.py, validate_bank_content()]
- "server_register_csrf_guard": "_register_csrf_guard()" | kind=code-symbol | source=server.py:L217 | neighbors=[server.py, create_app()]
- "server_register_routes": "_register_routes()" | kind=code-symbol | source=server.py:L136 | neighbors=[server.py, create_app()]
- "server_register_security_headers": "_register_security_headers()" | kind=code-symbol | source=server.py:L239 | neighbors=[server.py, create_app()]
- "server_user": "User" | kind=code-symbol | source=server.py:L136 | neighbors=[server.py, UserMixin]
- "server_validate_email": "_validate_email()" | kind=code-symbol | source=server.py:L60 | neighbors=[server.py, Return an error string, or None if vali…]
- "server_validate_password": "_validate_password()" | kind=code-symbol | source=server.py:L69 | neighbors=[server.py, Return an error string, or None if the …]
- "shared_admin_adminemails": "adminEmails()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L43 | neighbors=[admin.ts, requireAdmin()]
- "shared_admin_serviceclient": "serviceClient()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L36 | neighbors=[admin.ts, requireAdmin()]
- "src_render_state_renderloading": "renderLoading()" | kind=code-symbol | source=src/render-state.js:L39 | neighbors=[render-state.js, renderState()]
- "src_theme_current": "current()" | kind=code-symbol | source=src/theme.js:L23 | neighbors=[theme.js, next()]
- "src_theme_next": "next()" | kind=code-symbol | source=src/theme.js:L40 | neighbors=[theme.js, current()]
- "tests_bdls_reviewer_spec": "bdls-reviewer.spec.js" | kind=code-symbol | source=tests/bdls-reviewer.spec.js:L1 | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…]
- "tests_empact_reviewer_spec": "empact-reviewer.spec.js" | kind=code-symbol | source=tests/empact-reviewer.spec.js:L1 | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…]
- "tests_exam_review_a11y_spec": "exam-review-a11y.spec.js" | kind=code-symbol | source=tests/exam-review-a11y.spec.js:L1 | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, 9b12c84 Merge pull request #20]
- "tests_init": "__init__.py" | kind=code-symbol | source=tests/__init__.py:L1 | neighbors=[67cb179 Add files via upload, 8f311cd Merge branch 'main' of https://…]
- "tests_last_visited_spec": "last-visited.spec.js" | kind=code-symbol | source=tests/last-visited.spec.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-041.json

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
