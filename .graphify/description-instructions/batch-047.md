# Node Description Batch 48 of 49

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

- "vendor_supabase_js_2_110_0_dr": "dr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_ds": "ds()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_encodemetadata": "encodeMetadata()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_endpoint": "endPoint()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_filter": "filter()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_filterbindings": "filterBindings()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_functions": "functions()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_geojson": "geojson()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_getlongpolltransport": "getLongPollTransport()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_getpayloadrecords": "_getPayloadRecords()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_heartbeatintervalms": "heartbeatIntervalMs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_heartbeattimer": "heartbeatTimer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_index": "index()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_isactive": "isActive()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_isauthenticationtimeout": "isAuthenticationTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_isconflict": "isConflict()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_iserrored": "isErrored()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_isnotfound": "isNotFound()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_isthrowonerrorenabled": "isThrowOnErrorEnabled()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_j": "J()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_joinedonce": "joinedOnce()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_joinpush": "joinPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_jt": "Jt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_jwks": "jwks()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_jwks_cached_at": "jwks_cached_at()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_limit": "limit()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_map": "map()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_matchreceive": "matchReceive()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_maxaffected": "maxAffected()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_maybesingle": "maybeSingle()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_notthischannelevent": "_notThisChannelEvent()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_order": "order()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_overridetypes": "overrideTypes()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_pendingheartbeatref": "pendingHeartbeatRef()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_presencestate": "presenceState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_qe": "qe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_range": "range()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rangeadjacent": "rangeAdjacent()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rangegt": "rangeGt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_rangegte": "rangeGte()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-047.json

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
