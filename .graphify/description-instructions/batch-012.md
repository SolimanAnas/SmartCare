# Node Description Batch 13 of 13

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

- "server_rationale_70": "Return an error string, or None if the password meets policy." | kind=entity | source=server.py:L70 | neighbors=[_validate_password()] | lang=en
- "sw_cache_first_patterns": "CACHE_FIRST_PATTERNS" | kind=code-symbol | source=sw.js:L63 | neighbors=[sw.js] | lang=en
- "sw_cachefirst": "cacheFirst()" | kind=code-symbol | source=sw.js:L190 | neighbors=[sw.js] | lang=en
- "sw_iscacheable": "isCacheable()" | kind=code-symbol | source=sw.js:L208 | neighbors=[sw.js] | lang=en
- "sw_networkfirst": "networkFirst()" | kind=code-symbol | source=sw.js:L141 | neighbors=[sw.js] | lang=en
- "sw_pre_cache": "PRE_CACHE" | kind=code-symbol | source=sw.js:L10 | neighbors=[sw.js] | lang=en
- "tests_check_exam_flow_spec_pages": "PAGES" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L3 | neighbors=[_check_exam_flow.spec.js] | lang=en
- "tests_conftest_app": "app()" | kind=code-symbol | source=tests/conftest.py:L12 | neighbors=[conftest.py] | lang=en
- "tests_conftest_client": "client()" | kind=code-symbol | source=tests/conftest.py:L32 | neighbors=[conftest.py] | lang=en
- "tests_conftest_runner": "runner()" | kind=code-symbol | source=tests/conftest.py:L45 | neighbors=[conftest.py] | lang=en
- "tests_prometric_spec_navigatewizard": "navigateWizard()" | kind=code-symbol | source=tests/prometric.spec.js:L54 | neighbors=[prometric.spec.js] | lang=en
- "tests_test_api_rationale_1": "Smoke tests for the SmartCare Flask API." | kind=entity | source=tests/test_api.py:L1 | neighbors=[test_api.py] | lang=en
- "tests_test_api_rationale_107": "Both bad-user and bad-password return the same message (anti-enumeration)." | kind=entity | source=tests/test_api.py:L107 | neighbors=[.test_login_generic_error_message()] | lang=en
- "tests_test_api_rationale_136": "Anonymous access to the admin API must be denied (no PII leak)." | kind=entity | source=tests/test_api.py:L136 | neighbors=[.test_admin_users_requires_auth()] | lang=en
- "tests_test_api_rationale_141": "A signed-in non-admin must be forbidden (broken-access-control fix)." | kind=entity | source=tests/test_api.py:L141 | neighbors=[.test_admin_users_forbidden_for_regular…] | lang=pt
- "tests_test_api_rationale_147": "An authenticated admin (role == 'Admin') can list users." | kind=entity | source=tests/test_api.py:L147 | neighbors=[.test_admin_can_list_users()] | lang=en
- "tests_test_api_rationale_250": "A plain-form POST to an API endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L250 | neighbors=[.test_post_without_json_content_type_re…] | lang=en
- "tests_test_api_rationale_260": "A POST missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L260 | neighbors=[.test_post_without_xrw_header_rejected()] | lang=pt
- "tests_test_api_rationale_269": "A well-formed JSON POST with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L269 | neighbors=[.test_valid_json_post_allowed()] | lang=en
- "tests_test_api_rationale_279": "GET requests are never subject to the CSRF guard." | kind=entity | source=tests/test_api.py:L279 | neighbors=[.test_get_requests_not_blocked()] | lang=en
- "tests_test_api_testgooglelogin_test_google_login_bad_token": ".test_google_login_bad_token()" | kind=code-symbol | source=tests/test_api.py:L121 | neighbors=[TestGoogleLogin] | lang=en
- "tests_test_api_testgooglelogin_test_google_login_missing_token": ".test_google_login_missing_token()" | kind=code-symbol | source=tests/test_api.py:L116 | neighbors=[TestGoogleLogin] | lang=en
- "tests_test_api_testhealthcheck_test_health_returns_ok": ".test_health_returns_ok()" | kind=code-symbol | source=tests/test_api.py:L210 | neighbors=[TestHealthCheck] | lang=en
- "tests_test_api_testindex_test_index_serves_html": ".test_index_serves_html()" | kind=code-symbol | source=tests/test_api.py:L24 | neighbors=[TestIndex] | lang=en
- "tests_test_api_testlogout_test_logout_requires_auth": ".test_logout_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L128 | neighbors=[TestLogout] | lang=en
- "tests_test_api_testregister_test_invalid_professional_level_rejected": ".test_invalid_professional_level_rejected()" | kind=code-symbol | source=tests/test_api.py:L78 | neighbors=[TestRegister] | lang=en
- "tests_test_api_testregister_test_register_missing_password": ".test_register_missing_password()" | kind=code-symbol | source=tests/test_api.py:L43 | neighbors=[TestRegister] | lang=en
- "tests_test_api_testsecurityheaders_test_csp_blocks_framing": ".test_csp_blocks_framing()" | kind=code-symbol | source=tests/test_api.py:L203 | neighbors=[TestSecurityHeaders] | lang=en
- "tests_test_api_testsecurityheaders_test_security_headers_present": ".test_security_headers_present()" | kind=code-symbol | source=tests/test_api.py:L198 | neighbors=[TestSecurityHeaders] | lang=en
- "tests_test_api_teststaticfiles_test_manifest_json": ".test_manifest_json()" | kind=code-symbol | source=tests/test_api.py:L290 | neighbors=[TestStaticFiles] | lang=en
- "tests_test_api_teststaticfiles_test_nonexistent_file_returns_404": ".test_nonexistent_file_returns_404()" | kind=code-symbol | source=tests/test_api.py:L295 | neighbors=[TestStaticFiles] | lang=en
- "tests_test_api_teststaticfiles_test_style_css": ".test_style_css()" | kind=code-symbol | source=tests/test_api.py:L285 | neighbors=[TestStaticFiles] | lang=en
- "usermixin": "UserMixin" | kind=code-symbol | neighbors=[User] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-012.json

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
