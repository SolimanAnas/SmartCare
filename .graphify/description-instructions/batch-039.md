# Node Description Batch 40 of 49

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

- "vendor_supabase_js_2_110_0_isleaving": "isLeaving()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, rejoin()]
- "vendor_supabase_js_2_110_0_ismanualtoken": "_isManualToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _setAuthSafely()]
- "vendor_supabase_js_2_110_0_ispkcecallback": "_isPKCECallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, initialize()]
- "vendor_supabase_js_2_110_0_iswebsocketsupported": "isWebSocketSupported()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, detectEnvironment()]
- "vendor_supabase_js_2_110_0_jr": "Jr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, y()]
- "vendor_supabase_js_2_110_0_like": "like()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_likeallof": "likeAllOf()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_likeanyof": "likeAnyOf()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_list": "list()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_listbucketoptionstoquerystring": "listBucketOptionsToQueryString()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, toString()]
- "vendor_supabase_js_2_110_0_listbuckets": "listBuckets()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_listv2": "listV2()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_ln": "ln()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, toString()]
- "vendor_supabase_js_2_110_0_ls": "ls()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, getClaims()]
- "vendor_supabase_js_2_110_0_lte": "lte()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_mi": "mi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Ri()]
- "vendor_supabase_js_2_110_0_move": "move()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_neq": "neq()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_nn": "nn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, an()]
- "vendor_supabase_js_2_110_0_normalizeendpoint": "normalizeEndpoint()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_not": "not()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_oi": "Oi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Ci()]
- "vendor_supabase_js_2_110_0_onconnmessage": "onConnMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, decode()]
- "vendor_supabase_js_2_110_0_onheartbeat": "onHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _wrapHeartbeatCallback()]
- "vendor_supabase_js_2_110_0_onjoin": "onJoin()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_onjoinpayload": "onJoinPayload()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, lt()]
- "vendor_supabase_js_2_110_0_onleave": "onLeave()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_onleavepayload": "onLeavePayload()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, lt()]
- "vendor_supabase_js_2_110_0_onsync": "onSync()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_ontimeout": "ontimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, closeAndRetry()]
- "vendor_supabase_js_2_110_0_or": "or()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, lt()]
- "vendor_supabase_js_2_110_0_overlaps": "overlaps()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_parsejson": "parseJSON()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, log()]
- "vendor_supabase_js_2_110_0_pick": "_pick()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _encodeUserBroadcastPush()]
- "vendor_supabase_js_2_110_0_poll": "poll()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, ajax()]
- "vendor_supabase_js_2_110_0_pr": "pr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, rt()]
- "vendor_supabase_js_2_110_0_processresponse": "processResponse()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, match()]
- "vendor_supabase_js_2_110_0_purgebucketcache": "purgeBucketCache()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_purgecache": "purgeCache()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_qn": "qn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, toString()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-039.json

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
