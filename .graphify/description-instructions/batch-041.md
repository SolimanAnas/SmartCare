# Node Description Batch 42 of 48

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

- "src_theme_init": "init()" | kind=code-symbol | source=src/theme.js:L34 | neighbors=[theme.js] | lang=en
- "src_theme_set": "set()" | kind=code-symbol | source=src/theme.js:L27 | neighbors=[theme.js] | lang=en
- "sw_cache_first_patterns": "CACHE_FIRST_PATTERNS" | kind=code-symbol | source=sw.js:L30 | neighbors=[sw.js] | lang=en
- "sw_cachefirst": "cacheFirst()" | kind=code-symbol | source=sw.js:L227 | neighbors=[sw.js] | lang=en
- "sw_iscacheable": "isCacheable()" | kind=code-symbol | source=sw.js:L269 | neighbors=[sw.js] | lang=en
- "sw_pre_cache": "PRE_CACHE" | kind=code-symbol | source=sw.js:L10 | neighbors=[sw.js] | lang=en
- "tests_check_exam_flow_spec_pages": "PAGES" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L3 | neighbors=[_check_exam_flow.spec.js] | lang=en
- "tests_conftest_app": "app()" | kind=code-symbol | source=tests/conftest.py:L7 | neighbors=[conftest.py] | lang=en
- "tests_conftest_client": "client()" | kind=code-symbol | source=tests/conftest.py:L19 | neighbors=[conftest.py] | lang=en
- "tests_conftest_runner": "runner()" | kind=code-symbol | source=tests/conftest.py:L32 | neighbors=[conftest.py] | lang=en
- "tests_offline_spec_exam_content_assets": "EXAM_CONTENT_ASSETS" | kind=code-symbol | source=tests/offline.spec.js:L31 | neighbors=[offline.spec.js] | lang=en
- "tests_offline_spec_key_pages": "KEY_PAGES" | kind=code-symbol | source=tests/offline.spec.js:L11 | neighbors=[offline.spec.js] | lang=en
- "tests_offline_spec_vendored_assets": "VENDORED_ASSETS" | kind=code-symbol | source=tests/offline.spec.js:L19 | neighbors=[offline.spec.js] | lang=en
- "tests_prometric_spec_navigatewizard": "navigateWizard()" | kind=code-symbol | source=tests/prometric.spec.js:L54 | neighbors=[prometric.spec.js] | lang=en
- "tests_test_api_fakeresp_init": ".__init__()" | kind=code-symbol | source=tests/test_api.py:L16 | neighbors=[_FakeResp] | lang=en
- "tests_test_api_fakeresp_json": ".json()" | kind=code-symbol | source=tests/test_api.py:L20 | neighbors=[_FakeResp] | lang=en
- "tests_test_api_fakeresp_raise_for_status": ".raise_for_status()" | kind=code-symbol | source=tests/test_api.py:L23 | neighbors=[_FakeResp] | lang=en
- "tests_test_api_rationale_1": "Smoke tests for the SmartCare Flask API." | kind=entity | source=tests/test_api.py:L1 | neighbors=[test_api.py] | lang=en
- "tests_test_api_rationale_102": "A completely ordinary (non-admin) signed-in user can delete themself." | kind=entity | source=tests/test_api.py:L102 | neighbors=[.test_self_delete_works_no_admin_requir…] | lang=pt
- "tests_test_api_rationale_107": "Both bad-user and bad-password return the same message (anti-enumeration)." | kind=entity | source=tests/test_api.py:L107 | neighbors=[.test_login_generic_error_message()] | lang=en
- "tests_test_api_rationale_112": "There is no id parameter on this route — it can only ever delete\r         the ac" | kind=entity | source=tests/test_api.py:L112 | neighbors=[.test_only_deletes_the_caller_own_accou…] | lang=en
- "tests_test_api_rationale_136": "Anonymous access to the admin API must be denied (no PII leak)." | kind=entity | source=tests/test_api.py:L136 | neighbors=[.test_admin_users_requires_auth()] | lang=en
- "tests_test_api_rationale_141": "A signed-in non-admin must be forbidden (broken-access-control fix)." | kind=entity | source=tests/test_api.py:L141 | neighbors=[.test_admin_users_forbidden_for_regular…] | lang=pt
- "tests_test_api_rationale_147": "An authenticated admin (role == 'Admin') can list users." | kind=entity | source=tests/test_api.py:L147 | neighbors=[.test_admin_can_list_users()] | lang=en
- "tests_test_api_rationale_178": "A plain-form request to an /api/ endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L178 | neighbors=[.test_post_without_json_content_type_re…] | lang=en
- "tests_test_api_rationale_188": "A request missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L188 | neighbors=[.test_delete_without_xrw_header_rejecte…] | lang=pt
- "tests_test_api_rationale_196": "A well-formed request with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L196 | neighbors=[.test_valid_delete_request_allowed()] | lang=en
- "tests_test_api_rationale_205": "GET requests are never subject to the CSRF guard (only auth applies)." | kind=entity | source=tests/test_api.py:L205 | neighbors=[.test_get_requests_not_blocked()] | lang=en
- "tests_test_api_rationale_250": "A plain-form POST to an API endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L250 | neighbors=[.test_post_without_json_content_type_re…] | lang=en
- "tests_test_api_rationale_260": "A POST missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L260 | neighbors=[.test_post_without_xrw_header_rejected()] | lang=pt
- "tests_test_api_rationale_269": "A well-formed JSON POST with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L269 | neighbors=[.test_valid_json_post_allowed()] | lang=en
- "tests_test_api_rationale_279": "GET requests are never subject to the CSRF guard." | kind=entity | source=tests/test_api.py:L279 | neighbors=[.test_get_requests_not_blocked()] | lang=en
- "tests_test_api_rationale_30": "Stubs server.py's Supabase integration with an in-memory fake.\r     Returns a na" | kind=entity | source=tests/test_api.py:L30 | neighbors=[supabase_backend()] | lang=en
- "tests_test_api_testaccountselfdelete_test_requires_auth": ".test_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L88 | neighbors=[TestAccountSelfDelete] | lang=en
- "tests_test_api_testgooglelogin_test_google_login_bad_token": ".test_google_login_bad_token()" | kind=code-symbol | source=tests/test_api.py:L121 | neighbors=[TestGoogleLogin] | lang=en
- "tests_test_api_testgooglelogin_test_google_login_missing_token": ".test_google_login_missing_token()" | kind=code-symbol | source=tests/test_api.py:L116 | neighbors=[TestGoogleLogin] | lang=en
- "tests_test_api_testhealthcheck_test_health_returns_ok": ".test_health_returns_ok()" | kind=code-symbol | source=tests/test_api.py:L145 | neighbors=[TestHealthCheck] | lang=en
- "tests_test_api_testindex_test_index_serves_html": ".test_index_serves_html()" | kind=code-symbol | source=tests/test_api.py:L74 | neighbors=[TestIndex] | lang=en
- "tests_test_api_testlogout_test_logout_requires_auth": ".test_logout_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L128 | neighbors=[TestLogout] | lang=en
- "tests_test_api_testregister_test_invalid_professional_level_rejected": ".test_invalid_professional_level_rejected()" | kind=code-symbol | source=tests/test_api.py:L78 | neighbors=[TestRegister] | lang=en

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
