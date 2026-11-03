# Node Description Batch 27 of 62

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

- "vendor_chart_4_5_1_umd_min_wa_getbeforebody": ".getBeforeBody()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Ba(), za(), .update()]
- "vendor_chart_4_5_1_umd_min_we": "we()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getMaximumSize(), ge(), pe()]
- "vendor_chart_4_5_1_umd_min_xt_getanims": "._getAnims()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt, .add(), .has(), .listen()]
- "vendor_chart_4_5_1_umd_min_xt_has": ".has()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[.getOptionScopes(), .render(), xt, ._getAnims()]
- "vendor_chart_4_5_1_umd_min_y": "Y()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ao(), co(), .calculateLabelRotation()]
- "vendor_chart_4_5_1_umd_min_ya_buildlabels": ".buildLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterUpdate(), ya, d(), .update()]
- "vendor_chart_4_5_1_umd_min_zi": "zi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .segments(), Fi(), o()]
- "vendor_supabase_js_2_110_0_appendparams": "appendParams()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, match(), serialize(), endpointURL()]
- "vendor_supabase_js_2_110_0_applytransformoptstoquery": "applyTransformOptsToQuery()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, toString(), download(), getPublicUrl()]
- "vendor_supabase_js_2_110_0_approveauthorization": "_approveAuthorization()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_autorefreshtokentick": "_autoRefreshTokenTick()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _debug(), _useSession()]
- "vendor_supabase_js_2_110_0_build": "build()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, join(), on(), toString()]
- "vendor_supabase_js_2_110_0_cancelrefevent": "cancelRefEvent()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, off(), destroy(), reset()]
- "vendor_supabase_js_2_110_0_challengeandverify": "_challengeAndVerify()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _returnResult(), _verify()]
- "vendor_supabase_js_2_110_0_ci": "Ci()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, match(), Oi(), constructor()]
- "vendor_supabase_js_2_110_0_close": "close()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, closeAndRetry(), dispose(), replaceTransport()]
- "vendor_supabase_js_2_110_0_connectionstate": "connectionState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), isConnecting(), isDisconnecting()]
- "vendor_supabase_js_2_110_0_createnewabortsignal": "createNewAbortSignal()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), registerPasskey(), signInWithPasskey()]
- "vendor_supabase_js_2_110_0_createtable": "createTable()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, request(), Te(), createTableIfNotExists()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-026.json

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
