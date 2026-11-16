# Node Description Batch 23 of 63

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

- "vendor_chart_4_5_1_umd_min_tn_fit": ".fit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._calculatePadding(), ._getLabelSizes(), ._handleMargins(), ._isVisible()]
- "vendor_chart_4_5_1_umd_min_tn_getdecimalforpixel": ".getDecimalForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[getValueForPixel(), .getValueForPixel(), .getValueForPixel(), .getValueForPixel(), tn]
- "vendor_chart_4_5_1_umd_min_tn_handleevent": "._handleEvent()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._eventHandler(), d(), f(), ._updateHoverStyles()]
- "vendor_chart_4_5_1_umd_min_tn_updatedatasets": "._updateDatasets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), .getDatasetMeta(), .notifyPlugins(), ._updateDataset()]
- "vendor_chart_4_5_1_umd_min_tn_updatescales": "._updateScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), .buildOrUpdateScales(), .ensureScalesHaveIDs(), u()]
- "vendor_chart_4_5_1_umd_min_tn_updatevisibility": "._updateVisibility()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .hide(), .show(), .getDatasetMeta(), .setDatasetVisibility()]
- "vendor_chart_4_5_1_umd_min_ts_createanimations": "._createAnimations()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts(), ._animateOptions(), .active(), .cancel(), .update()]
- "vendor_chart_4_5_1_umd_min_tt": "tt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, co(), ha(), inRange(), ._getLegendItemAt()]
- "vendor_chart_4_5_1_umd_min_ve": "ve()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), nearest(), l()]
- "vendor_chart_4_5_1_umd_min_wa_drawfooter": ".drawFooter()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw(), Oi(), Si(), x()]
- "vendor_chart_4_5_1_umd_min_ya_adjusthitboxes": ".adjustHitBoxes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterUpdate(), ya, Oi(), x(), ._computeTitleHeight()]
- "vendor_chart_4_5_1_umd_min_ya_drawtitle": ".drawTitle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, ki(), Oi(), Si(), ._computeTitleHeight()]
- "vendor_chart_4_5_1_umd_min_ya_fit": ".fit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, Si(), ._computeTitleHeight(), ._fitCols(), ._fitRows()]
- "vendor_chart_4_5_1_umd_min_zs": "zs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, vs(), ki(), n(), Si()]
- "vendor_supabase_js_2_110_0_admindeletepasskey": "_adminDeletePasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), L(), m(), y()]
- "vendor_supabase_js_2_110_0_adminlistpasskeys": "_adminListPasskeys()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), L(), m(), y()]
- "vendor_supabase_js_2_110_0_binaryencodeuserbroadcastpush": "_binaryEncodeUserBroadcastPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _encodeBinaryUserBroadcastPush(), _encodeJsonUserBroadcastPush(), _isArrayBuffer(), encode()]
- "vendor_supabase_js_2_110_0_cancelpendingdisconnect": "_cancelPendingDisconnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, log(), channel(), disconnect(), _schedulePendingDisconnect()]
- "vendor_supabase_js_2_110_0_canceltimeout": "cancelTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, destroy(), leave(), push(), startTimeout()]
- "vendor_supabase_js_2_110_0_channel": "channel()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _cancelPendingDisconnect(), getChannels(), push(), constructor()]
- "vendor_supabase_js_2_110_0_deletepasskey": "_deletePasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, L(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_encodeuserbroadcastpush": "_encodeUserBroadcastPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, _encodeBinaryUserBroadcastPush(), _encodeJsonUserBroadcastPush(), from(), _pick()]
- "vendor_supabase_js_2_110_0_enroll": "_enroll()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y(), _register()]
- "vendor_supabase_js_2_110_0_getpromise": "getPromise()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, catch(), finally(), execute(), then()]
- "vendor_supabase_js_2_110_0_handlenodejsracecondition": "_handleNodeJsRaceCondition()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), getSocket(), isConnected(), onConnOpen()]
- "vendor_supabase_js_2_110_0_ie": "ie()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, er(), fs(), generateLink(), tr()]
- "vendor_supabase_js_2_110_0_initializeoptions": "_initializeOptions()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, constructor(), an(), getWebSocketConstructor(), _wrapHeartbeatCallback()]
- "vendor_supabase_js_2_110_0_joinref": "joinRef()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, inPendingSyncState(), isMember(), send(), trigger()]
- "vendor_supabase_js_2_110_0_leaveopentopic": "leaveOpenTopic()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), leave(), log(), rejoin()]
- "vendor_supabase_js_2_110_0_linkidentityoauth": "linkIdentityOAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, linkIdentity(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_listpasskeys": "_listPasskeys()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, L(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_lt": "lt()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, add(), onJoinPayload(), onLeavePayload(), or()]
- "vendor_supabase_js_2_110_0_ms": "ms()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, encode(), from(), join(), signInWithEthereum()]
- "vendor_supabase_js_2_110_0_onconnerror": "onConnError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), log(), triggerChanError(), triggerStateCallbacks()]
- "vendor_supabase_js_2_110_0_ping": "ping()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), makeRef(), onMessage(), push()]
- "vendor_supabase_js_2_110_0_reauthenticate": "reauthenticate()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_refreshaccesstoken": "_refreshAccessToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), _debug(), _returnResult(), y()]
- "vendor_supabase_js_2_110_0_refreshsession": "refreshSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_rejoin": "rejoin()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, join(), isLeaving(), leaveOpenTopic(), resend()]
- "vendor_supabase_js_2_110_0_remove": "remove()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), log(), off(), _schedulePendingDisconnect()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-022.json

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
