# Node Description Batch 39 of 49

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

- "vendor_supabase_js_2_110_0_copy": "copy()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_cr": "cr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, invoke()]
- "vendor_supabase_js_2_110_0_createbucket": "createBucket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_createnamespaceifnotexists": "createNamespaceIfNotExists()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createNamespace()]
- "vendor_supabase_js_2_110_0_createsigneduploadurl": "createSignedUploadUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_createsignedurl": "createSignedUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_createsignedurls": "createSignedUrls()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_deletebucket": "deleteBucket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_deleteindex": "deleteIndex()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_dn": "Dn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, es()]
- "vendor_supabase_js_2_110_0_ei": "ei()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge()]
- "vendor_supabase_js_2_110_0_emitinitialsession": "_emitInitialSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _useSession()]
- "vendor_supabase_js_2_110_0_emptybucket": "emptyBucket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_eq": "eq()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_explain": "explain()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_fi": "fi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, yi()]
- "vendor_supabase_js_2_110_0_finally": "finally()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, getPromise()]
- "vendor_supabase_js_2_110_0_fo": "fo()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, y()]
- "vendor_supabase_js_2_110_0_fs": "fs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, ie()]
- "vendor_supabase_js_2_110_0_getaccesstoken": "_getAccessToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, getSession()]
- "vendor_supabase_js_2_110_0_getbucket": "getBucket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_getchannel": "getChannel()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_getchannels": "getChannels()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, channel()]
- "vendor_supabase_js_2_110_0_getindex": "getIndex()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_gs": "Gs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, transformState()]
- "vendor_supabase_js_2_110_0_gte": "gte()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_hn": "Hn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, re()]
- "vendor_supabase_js_2_110_0_ho": "ho()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, y()]
- "vendor_supabase_js_2_110_0_i": "_i()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, push()]
- "vendor_supabase_js_2_110_0_ii": "Ii()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, match()]
- "vendor_supabase_js_2_110_0_ilike": "ilike()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_ilikeallof": "ilikeAllOf()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_ilikeanyof": "ilikeAnyOf()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, join()]
- "vendor_supabase_js_2_110_0_imatch": "imatch()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_inpendingsyncstate": "inPendingSyncState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, joinRef()]
- "vendor_supabase_js_2_110_0_isclosed": "isClosed()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, subscribe()]
- "vendor_supabase_js_2_110_0_isdistinct": "isDistinct()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add()]
- "vendor_supabase_js_2_110_0_isfiltervalueequal": "isFilterValueEqual()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _updatePostgresBindings()]
- "vendor_supabase_js_2_110_0_isimplicitgrantcallback": "_isImplicitGrantCallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, initialize()]
- "vendor_supabase_js_2_110_0_isjoining": "isJoining()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, on()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-038.json

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
