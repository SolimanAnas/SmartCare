# Node Description Batch 29 of 48

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

- "vendor_supabase_js_2_110_0_exists": "exists()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ft(), _getFinalPath()]
- "vendor_supabase_js_2_110_0_fetchjwk": "fetchJwk()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), getClaims()]
- "vendor_supabase_js_2_110_0_fetchwithtimeout": "_fetchWithTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, httpSend(), send()]
- "vendor_supabase_js_2_110_0_flushsendbuffer": "flushSendBuffer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), onConnOpen()]
- "vendor_supabase_js_2_110_0_getcustomprovider": "_getCustomProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_getoauthclient": "_getOAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_getsocket": "getSocket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _handleNodeJsRaceCondition()]
- "vendor_supabase_js_2_110_0_getvectors": "getVectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_getwebsocketconstructor": "getWebSocketConstructor()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, detectEnvironment(), _initializeOptions()]
- "vendor_supabase_js_2_110_0_gi": "gi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, catch(), yi()]
- "vendor_supabase_js_2_110_0_gn": "gn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, pn(), S()]
- "vendor_supabase_js_2_110_0_gt": "gt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add(), U()]
- "vendor_supabase_js_2_110_0_handletokenchanged": "_handleTokenChanged()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, setAuth(), signOut()]
- "vendor_supabase_js_2_110_0_hasreceived": "hasReceived()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, receive(), send()]
- "vendor_supabase_js_2_110_0_heartbeatcallback": "heartbeatCallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatTimeout(), sendHeartbeat()]
- "vendor_supabase_js_2_110_0_hs": "hs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, os(), Jn()]
- "vendor_supabase_js_2_110_0_ht": "ht()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, S(), setHeader()]
- "vendor_supabase_js_2_110_0_httpsend": "httpSend()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _fetchWithTimeout(), toString()]
- "vendor_supabase_js_2_110_0_info": "info()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _getFinalPath(), handleOperation()]
- "vendor_supabase_js_2_110_0_initrealtimeclient": "_initRealtimeClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), x()]
- "vendor_supabase_js_2_110_0_initsupabaseauthclient": "_initSupabaseAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), x()]
- "vendor_supabase_js_2_110_0_insert": "insert()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, cloneRequestState(), join()]
- "vendor_supabase_js_2_110_0_inviteuserbyemail": "inviteUserByEmail()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_ir": "ir()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), signInWithPasskey()]
- "vendor_supabase_js_2_110_0_is": "is()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add(), _recoverAndRefresh()]
- "vendor_supabase_js_2_110_0_isarraybuffer": "_isArrayBuffer()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _binaryEncodeUserBroadcastPush(), decode()]
- "vendor_supabase_js_2_110_0_isconnecting": "isConnecting()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), connectionState()]
- "vendor_supabase_js_2_110_0_isjoined": "isJoined()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, canPush(), on()]
- "vendor_supabase_js_2_110_0_isvalidsession": "_isValidSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, __loadSession(), _recoverAndRefresh()]
- "vendor_supabase_js_2_110_0_jn": "Jn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, hs(), m()]
- "vendor_supabase_js_2_110_0_js": "js()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, Ps(), rt()]
- "vendor_supabase_js_2_110_0_ki": "ki()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Si(), x()]
- "vendor_supabase_js_2_110_0_kt": "Kt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), y()]
- "vendor_supabase_js_2_110_0_linkidentity": "linkIdentity()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, linkIdentityIdToken(), linkIdentityOAuth()]
- "vendor_supabase_js_2_110_0_linkidentityidtoken": "linkIdentityIdToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, linkIdentity(), _useSession()]
- "vendor_supabase_js_2_110_0_listcustomproviders": "_listCustomProviders()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_listenforauthevents": "_listenForAuthEvents()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), onAuthStateChange()]
- "vendor_supabase_js_2_110_0_listindexes": "listIndexes()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_listnamespaces": "listNamespaces()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ct(), request()]
- "vendor_supabase_js_2_110_0_listtables": "listTables()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), Te()]

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
