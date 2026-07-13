# Node Description Batch 49 of 49

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

- "vendor_supabase_js_2_110_0_reconnectafterms": "reconnectAfterMs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_reconnecttimer": "reconnectTimer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_regeximatch": "regexIMatch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_regexmatch": "regexMatch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rejointimer": "rejoinTimer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_retry": "retry()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_returns": "returns()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rollback": "rollback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rpc": "rpc()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_schema": "schema()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_sendbuffer": "sendBuffer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_single": "single()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_statechangecallbacks": "stateChangeCallbacks()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_storesession": "storeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_stripnulls": "stripNulls()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_textsearch": "textSearch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_throwonerror": "throwOnError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_timeout": "timeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_vectors": "vectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_vsn": "vsn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_waitforsocketclosed": "waitForSocketClosed()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-048.json

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
