# Node Description Batch 41 of 49

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

- "vendor_supabase_js_2_110_0_purgebucketcache": "purgeBucketCache()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_purgecache": "purgeCache()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_qn": "qn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, toString()]
- "vendor_supabase_js_2_110_0_qr": "Qr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, Q()]
- "vendor_supabase_js_2_110_0_removeallchannels": "removeAllChannels()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, disconnect()]
- "vendor_supabase_js_2_110_0_removeemptyfolders": "_removeEmptyFolders()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, uploadToSignedUrl()]
- "vendor_supabase_js_2_110_0_replyeventname": "replyEventName()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, startTimeout()]
- "vendor_supabase_js_2_110_0_rs": "rs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, onAuthStateChange()]
- "vendor_supabase_js_2_110_0_scheduletimeout": "scheduleTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, onConnClose()]
- "vendor_supabase_js_2_110_0_setheader": "setHeader()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, ht()]
- "vendor_supabase_js_2_110_0_signinwithoauth": "signInWithOAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _handleProviderSignIn()]
- "vendor_supabase_js_2_110_0_ss": "ss()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, initialize()]
- "vendor_supabase_js_2_110_0_state": "state()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, transformState()]
- "vendor_supabase_js_2_110_0_terminateworker": "_terminateWorker()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, log()]
- "vendor_supabase_js_2_110_0_ti": "ti()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge()]
- "vendor_supabase_js_2_110_0_track": "track()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, send()]
- "vendor_supabase_js_2_110_0_transport": "transport()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, transportConnect()]
- "vendor_supabase_js_2_110_0_transportname": "transportName()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback()]
- "vendor_supabase_js_2_110_0_ts": "ts()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, U()]
- "vendor_supabase_js_2_110_0_untrack": "untrack()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, send()]
- "vendor_supabase_js_2_110_0_updatebucket": "updateBucket()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, handleOperation()]
- "vendor_supabase_js_2_110_0_updatefilterbindings": "updateFilterBindings()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _updateFilterMessage()]
- "vendor_supabase_js_2_110_0_updatejoinpayload": "updateJoinPayload()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, subscribe()]
- "vendor_supabase_js_2_110_0_updatepayloadtransform": "updatePayloadTransform()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _updateFilterTransform()]
- "vendor_supabase_js_2_110_0_upload": "upload()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, uploadOrUpdate()]
- "vendor_supabase_js_2_110_0_us": "us()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, __loadSession()]
- "vendor_supabase_js_2_110_0_vt": "Vt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _saveSession()]
- "vendor_supabase_js_2_110_0_waitforauthifneeded": "_waitForAuthIfNeeded()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _reconnectAuth()]
- "vendor_supabase_js_2_110_0_waitforbufferdone": "waitForBufferDone()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, teardown()]
- "vendor_supabase_js_2_110_0_wi": "wi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, vi()]
- "vendor_supabase_js_2_110_0_workerobjecturl": "_workerObjectUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _startWorkerHeartbeat()]
- "vendor_supabase_js_2_110_0_xr": "xr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, y()]
- "vendor_supabase_js_2_110_0_yn": "yn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_ys": "ys()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, signInWithEthereum()]
- "vendor_supabase_js_2_110_0_zn": "zn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, U()]
- "vendor_supabase_js_2_110_0_zs": "zs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "vendor_supabase_js_2_110_0_zt": "zt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, constructor()]
- "app_applytheme": "applyTheme()" | kind=code-symbol | source=app.js:L1270 | neighbors=[app.js]
- "app_createripple": "createRipple()" | kind=code-symbol | source=app.js:L1218 | neighbors=[app.js]
- "app_initindexsearch": "initIndexSearch()" | kind=code-symbol | source=app.js:L1013 | neighbors=[app.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-040.json

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
