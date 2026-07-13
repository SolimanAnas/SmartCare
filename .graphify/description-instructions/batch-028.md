# Node Description Batch 29 of 49

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

- "vendor_chart_4_5_1_umd_min_yn_updateradius": "._updateRadius()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .update(), .getVisibleDatasetCount()]
- "vendor_chart_4_5_1_umd_min_za": "za()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getAfterBody(), .getBeforeBody()]
- "vendor_chart_4_5_1_umd_min_zt": "zt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bt(), Ft()]
- "vendor_supabase_js_2_110_0_an": "an()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, nn(), _initializeOptions()]
- "vendor_supabase_js_2_110_0_authenticate": "_authenticate()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _verify(), y()]
- "vendor_supabase_js_2_110_0_batchsend": "batchSend()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, ajax(), join()]
- "vendor_supabase_js_2_110_0_bi": "bi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, tt(), Si()]
- "vendor_supabase_js_2_110_0_binaryencode": "binaryEncode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, from(), encode()]
- "vendor_supabase_js_2_110_0_bt": "bt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, __loadSession(), _recoverAndRefresh()]
- "vendor_supabase_js_2_110_0_clearheartbeats": "clearHeartbeats()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, onConnClose(), resetHeartbeat()]
- "vendor_supabase_js_2_110_0_clone": "clone()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, syncDiff(), syncState()]
- "vendor_supabase_js_2_110_0_closeandretry": "closeAndRetry()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, close(), ontimeout()]
- "vendor_supabase_js_2_110_0_createcustomprovider": "_createCustomProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_createindex": "createIndex()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_createnamespace": "createNamespace()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), createNamespaceIfNotExists()]
- "vendor_supabase_js_2_110_0_createoauthclient": "_createOAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_createtableifnotexists": "createTableIfNotExists()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTable(), loadTable()]
- "vendor_supabase_js_2_110_0_createuser": "createUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_cs": "Cs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, Pe(), Ps()]
- "vendor_supabase_js_2_110_0_decodebroadcast": "decodeBroadcast()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _binaryDecode(), decode()]
- "vendor_supabase_js_2_110_0_decodepush": "decodePush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _binaryDecode(), decode()]
- "vendor_supabase_js_2_110_0_decodereply": "decodeReply()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _binaryDecode(), decode()]
- "vendor_supabase_js_2_110_0_decodeuserbroadcast": "_decodeUserBroadcast()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _binaryDecode(), decode()]
- "vendor_supabase_js_2_110_0_delete": "delete()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, cloneRequestState(), _getSessionFromURL()]
- "vendor_supabase_js_2_110_0_deletecustomprovider": "_deleteCustomProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_deleteoauthclient": "_deleteOAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_deletevectors": "deleteVectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_detectenvironment": "detectEnvironment()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, getWebSocketConstructor(), isWebSocketSupported()]
- "vendor_supabase_js_2_110_0_dropnamespace": "dropNamespace()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ct(), request()]
- "vendor_supabase_js_2_110_0_droptable": "dropTable()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), Te()]
- "vendor_supabase_js_2_110_0_encodebinaryuserbroadcastpush": "_encodeBinaryUserBroadcastPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _binaryEncodeUserBroadcastPush(), _encodeUserBroadcastPush()]
- "vendor_supabase_js_2_110_0_er": "er()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, ie(), registerPasskey()]
- "vendor_supabase_js_2_110_0_es": "es()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, Dn(), getClaims()]
- "vendor_supabase_js_2_110_0_execute": "execute()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ft(), getPromise()]
- "vendor_supabase_js_2_110_0_exists": "exists()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ft(), _getFinalPath()]
- "vendor_supabase_js_2_110_0_fetchjwk": "fetchJwk()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), getClaims()]
- "vendor_supabase_js_2_110_0_fetchwithtimeout": "_fetchWithTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, httpSend(), send()]
- "vendor_supabase_js_2_110_0_flushsendbuffer": "flushSendBuffer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), onConnOpen()]
- "vendor_supabase_js_2_110_0_getcustomprovider": "_getCustomProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_getoauthclient": "_getOAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-028.json

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
