# Node Description Batch 63 of 63

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

- "vendor_supabase_js_2_110_0_rollback": "rollback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_rpc": "rpc()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_schema": "schema()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_sendbuffer": "sendBuffer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_single": "single()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_statechangecallbacks": "stateChangeCallbacks()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_storesession": "storeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_stripnulls": "stripNulls()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_textsearch": "textSearch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_throwonerror": "throwOnError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_timeout": "timeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_vectors": "vectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_vsn": "vsn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "vendor_supabase_js_2_110_0_waitforsocketclosed": "waitForSocketClosed()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs] | lang=en
- "server_rationale_121": "Abort with 503/401 unless the caller has a valid Supabase session.\r     Returns" | kind=entity | source=server.py:L121 | lang=en
- "server_rationale_151": "Allow-list of admin emails sourced from the environment (no hard-coding)." | kind=entity | source=server.py:L151 | lang=en
- "server_rationale_157": "A user is an admin if their role is 'Admin' or they are allow-listed." | kind=entity | source=server.py:L157 | lang=en
- "server_rationale_21": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L21 | lang=en
- "server_rationale_35": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L35 | lang=en
- "server_rationale_61": "Return an error string, or None if valid." | kind=entity | source=server.py:L61 | lang=en
- "server_rationale_70": "Return an error string, or None if the password meets policy." | kind=entity | source=server.py:L70 | lang=en
- "server_rationale_99": "Resolve a Supabase access token (from the browser's session) to\r     {id, email}" | kind=entity | source=server.py:L99 | lang=en
- "tests_test_api_rationale_1": "Smoke tests for the SmartCare Flask API." | kind=entity | source=tests/test_api.py:L1 | lang=en
- "tests_test_api_rationale_102": "A completely ordinary (non-admin) signed-in user can delete themself." | kind=entity | source=tests/test_api.py:L102 | lang=pt
- "tests_test_api_rationale_107": "Both bad-user and bad-password return the same message (anti-enumeration)." | kind=entity | source=tests/test_api.py:L107 | lang=en
- "tests_test_api_rationale_112": "There is no id parameter on this route — it can only ever delete\r         the ac" | kind=entity | source=tests/test_api.py:L112 | lang=en
- "tests_test_api_rationale_136": "Anonymous access to the admin API must be denied (no PII leak)." | kind=entity | source=tests/test_api.py:L136 | lang=en
- "tests_test_api_rationale_141": "A signed-in non-admin must be forbidden (broken-access-control fix)." | kind=entity | source=tests/test_api.py:L141 | lang=pt
- "tests_test_api_rationale_147": "An authenticated admin (role == 'Admin') can list users." | kind=entity | source=tests/test_api.py:L147 | lang=en
- "tests_test_api_rationale_178": "A plain-form request to an /api/ endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L178 | lang=en
- "tests_test_api_rationale_188": "A request missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L188 | lang=pt
- "tests_test_api_rationale_196": "A well-formed request with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L196 | lang=en
- "tests_test_api_rationale_205": "GET requests are never subject to the CSRF guard (only auth applies)." | kind=entity | source=tests/test_api.py:L205 | lang=en
- "tests_test_api_rationale_250": "A plain-form POST to an API endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L250 | lang=en
- "tests_test_api_rationale_260": "A POST missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L260 | lang=pt
- "tests_test_api_rationale_269": "A well-formed JSON POST with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L269 | lang=en
- "tests_test_api_rationale_279": "GET requests are never subject to the CSRF guard." | kind=entity | source=tests/test_api.py:L279 | lang=en
- "tests_test_api_rationale_30": "Stubs server.py's Supabase integration with an in-memory fake.\r     Returns a na" | kind=entity | source=tests/test_api.py:L30 | lang=en
- "usermixin": "UserMixin" | kind=code-symbol | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-062.json

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
