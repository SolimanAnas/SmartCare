# Node Description Batch 14 of 14

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

- "tests_test_api_testgooglelogin_test_google_login_missing_token": ".test_google_login_missing_token()" | kind=code-symbol | source=tests/test_api.py:L116 | neighbors=[TestGoogleLogin]
- "tests_test_api_testhealthcheck_test_health_returns_ok": ".test_health_returns_ok()" | kind=code-symbol | source=tests/test_api.py:L210 | neighbors=[TestHealthCheck]
- "tests_test_api_testindex_test_index_serves_html": ".test_index_serves_html()" | kind=code-symbol | source=tests/test_api.py:L24 | neighbors=[TestIndex]
- "tests_test_api_testlogout_test_logout_requires_auth": ".test_logout_requires_auth()" | kind=code-symbol | source=tests/test_api.py:L128 | neighbors=[TestLogout]
- "tests_test_api_testregister_test_invalid_professional_level_rejected": ".test_invalid_professional_level_rejected()" | kind=code-symbol | source=tests/test_api.py:L78 | neighbors=[TestRegister]
- "tests_test_api_testregister_test_register_missing_password": ".test_register_missing_password()" | kind=code-symbol | source=tests/test_api.py:L43 | neighbors=[TestRegister]
- "tests_test_api_testsecurityheaders_test_csp_blocks_framing": ".test_csp_blocks_framing()" | kind=code-symbol | source=tests/test_api.py:L203 | neighbors=[TestSecurityHeaders]
- "tests_test_api_testsecurityheaders_test_security_headers_present": ".test_security_headers_present()" | kind=code-symbol | source=tests/test_api.py:L198 | neighbors=[TestSecurityHeaders]
- "tests_test_api_teststaticfiles_test_manifest_json": ".test_manifest_json()" | kind=code-symbol | source=tests/test_api.py:L290 | neighbors=[TestStaticFiles]
- "tests_test_api_teststaticfiles_test_nonexistent_file_returns_404": ".test_nonexistent_file_returns_404()" | kind=code-symbol | source=tests/test_api.py:L295 | neighbors=[TestStaticFiles]
- "tests_test_api_teststaticfiles_test_style_css": ".test_style_css()" | kind=code-symbol | source=tests/test_api.py:L285 | neighbors=[TestStaticFiles]
- "usermixin": "UserMixin" | kind=code-symbol | neighbors=[User]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-013.json

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
