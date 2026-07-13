# Node Description Batch 22 of 49

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

- "vendor_supabase_js_2_110_0_deletefactor": "_deleteFactor()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), m(), y()]
- "vendor_supabase_js_2_110_0_deleteuser": "deleteUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), m(), y()]
- "vendor_supabase_js_2_110_0_denyauthorization": "_denyAuthorization()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_destroy": "destroy()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, cancelRefEvent(), cancelTimeout(), teardown()]
- "vendor_supabase_js_2_110_0_dispose": "dispose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, close(), _removeVisibilityChangedCallback(), _stopAutoRefresh()]
- "vendor_supabase_js_2_110_0_download": "download()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, applyTransformOptsToQuery(), _getFinalPath(), toString()]
- "vendor_supabase_js_2_110_0_encodejsonuserbroadcastpush": "_encodeJsonUserBroadcastPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _binaryEncodeUserBroadcastPush(), encode(), _encodeUserBroadcastPush()]
- "vendor_supabase_js_2_110_0_endpointurl": "endpointURL()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, ajax(), appendParams(), protocol()]
- "vendor_supabase_js_2_110_0_fetchrequest": "fetchRequest()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, catch(), then(), request()]
- "vendor_supabase_js_2_110_0_ft": "ft()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, execute(), exists(), handleOperation()]
- "vendor_supabase_js_2_110_0_generatelink": "generateLink()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, ie(), m(), y()]
- "vendor_supabase_js_2_110_0_getauthorizationdetails": "_getAuthorizationDetails()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_getpublicurl": "getPublicUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, applyTransformOptsToQuery(), _getFinalPath(), toString()]
- "vendor_supabase_js_2_110_0_getuserbyid": "getUserById()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), m(), y()]
- "vendor_supabase_js_2_110_0_getuseridentities": "getUserIdentities()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, getUser(), _returnResult(), y()]
- "vendor_supabase_js_2_110_0_handleprovidersignin": "_handleProviderSignIn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), _getUrlForProvider(), signInWithOAuth()]
- "vendor_supabase_js_2_110_0_handlevisibilitychange": "_handleVisibilityChange()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), _onVisibilityChanged(), initialize()]
- "vendor_supabase_js_2_110_0_in": "in()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add(), from(), join()]
- "vendor_supabase_js_2_110_0_invoke": "invoke()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, catch(), cr(), toString()]
- "vendor_supabase_js_2_110_0_isdisconnecting": "isDisconnecting()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), disconnect(), connectionState()]
- "vendor_supabase_js_2_110_0_ismember": "isMember()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), joinRef(), log()]
- "vendor_supabase_js_2_110_0_listoauthclients": "_listOAuthClients()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), toString(), y()]
- "vendor_supabase_js_2_110_0_listoauthgrants": "_listOAuthGrants()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_listusers": "listUsers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), toString(), y()]
- "vendor_supabase_js_2_110_0_loadtable": "loadTable()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTableIfNotExists(), request(), Te()]
- "vendor_supabase_js_2_110_0_mn": "Mn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, from(), join(), re()]
- "vendor_supabase_js_2_110_0_off": "off()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, cancelRefEvent(), connectWithFallback(), remove()]
- "vendor_supabase_js_2_110_0_onauthstatechange": "onAuthStateChange()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _listenForAuthEvents(), _debug(), rs()]
- "vendor_supabase_js_2_110_0_pn": "pn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, gn(), fn(), Me()]
- "vendor_supabase_js_2_110_0_ps": "Ps()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, js(), Cs(), Pe()]
- "vendor_supabase_js_2_110_0_reconnectauth": "_reconnectAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), isConnected(), _waitForAuthIfNeeded()]
- "vendor_supabase_js_2_110_0_revokeoauthgrant": "_revokeOAuthGrant()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_ri": "Ri()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, mi(), vi(), yi()]
- "vendor_supabase_js_2_110_0_rr": "rr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), Q(), toJSON()]
- "vendor_supabase_js_2_110_0_serialize": "serialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, appendParams(), join(), push()]
- "vendor_supabase_js_2_110_0_setauth": "setAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _performAuth(), _setAuthSafely()]
- "vendor_supabase_js_2_110_0_si": "Si()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, ki(), bi(), tt()]
- "vendor_supabase_js_2_110_0_sr": "sr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), Q(), toJSON()]
- "vendor_supabase_js_2_110_0_tojson": "toJSON()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, rr(), sr(), S()]
- "vendor_supabase_js_2_110_0_transportconnect": "transportConnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), connectWithFallback(), transport()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-021.json

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
