# Node Description Batch 31 of 49

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

- "vendor_supabase_js_2_110_0_notin": "notIn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, from(), join()]
- "vendor_supabase_js_2_110_0_nr": "Nr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, ws(), S()]
- "vendor_supabase_js_2_110_0_os": "os()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, hs(), match()]
- "vendor_supabase_js_2_110_0_pe": "Pe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, Cs(), Ps()]
- "vendor_supabase_js_2_110_0_performauth": "_performAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, log(), setAuth()]
- "vendor_supabase_js_2_110_0_protocol": "protocol()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, endpointURL(), match()]
- "vendor_supabase_js_2_110_0_putvectors": "putVectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_qt": "Qt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, S(), ws()]
- "vendor_supabase_js_2_110_0_queryvectors": "queryVectors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), S()]
- "vendor_supabase_js_2_110_0_regenerateoauthclientsecret": "_regenerateOAuthClientSecret()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_removechannel": "removeChannel()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, teardown(), unsubscribe()]
- "vendor_supabase_js_2_110_0_replacetransport": "replaceTransport()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, close(), reset()]
- "vendor_supabase_js_2_110_0_resetheartbeat": "resetHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, onConnOpen(), clearHeartbeats()]
- "vendor_supabase_js_2_110_0_rt": "rt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, js(), pr()]
- "vendor_supabase_js_2_110_0_select": "select()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, cloneRequestState(), join()]
- "vendor_supabase_js_2_110_0_signinwithweb3": "signInWithWeb3()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, signInWithEthereum(), signInWithSolana()]
- "vendor_supabase_js_2_110_0_startworkerheartbeat": "_startWorkerHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, log(), _workerObjectUrl()]
- "vendor_supabase_js_2_110_0_syncdiff": "syncDiff()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, clone(), syncState()]
- "vendor_supabase_js_2_110_0_syncstate": "syncState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, clone(), syncDiff()]
- "vendor_supabase_js_2_110_0_tableexists": "tableExists()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), Te()]
- "vendor_supabase_js_2_110_0_tobase64": "toBase64()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, from(), toString()]
- "vendor_supabase_js_2_110_0_tr": "tr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), ie()]
- "vendor_supabase_js_2_110_0_transformstate": "transformState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, state(), Gs()]
- "vendor_supabase_js_2_110_0_tt": "tt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, bi(), Si()]
- "vendor_supabase_js_2_110_0_un": "un()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), toString()]
- "vendor_supabase_js_2_110_0_update": "update()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, cloneRequestState(), uploadOrUpdate()]
- "vendor_supabase_js_2_110_0_updatecustomprovider": "_updateCustomProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_updatefiltertransform": "_updateFilterTransform()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor(), updatePayloadTransform()]
- "vendor_supabase_js_2_110_0_updateoauthclient": "_updateOAuthClient()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), y()]
- "vendor_supabase_js_2_110_0_updatetable": "updateTable()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), Te()]
- "vendor_supabase_js_2_110_0_upsert": "upsert()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, cloneRequestState(), join()]
- "vendor_supabase_js_2_110_0_vi": "vi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Ri(), wi()]
- "vendor_supabase_js_2_110_0_vs": "vs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, signInWithEthereum(), Yt()]
- "vendor_supabase_js_2_110_0_wrapheartbeatcallback": "_wrapHeartbeatCallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _initializeOptions(), onHeartbeat()]
- "vendor_supabase_js_2_110_0_ws": "ws()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, Nr(), Qt()]
- "vendor_supabase_js_2_110_0_wt": "Wt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, join(), Ye()]
- "vendor_supabase_js_2_110_0_xdomainrequest": "xdomainRequest()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, request(), send()]
- "vendor_supabase_js_2_110_0_xhrrequest": "xhrRequest()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, request(), send()]
- "vendor_supabase_js_2_110_0_xi": "xi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), x()]
- "vendor_supabase_js_2_110_0_yt": "Yt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, signInWithEthereum(), vs()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-030.json

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
