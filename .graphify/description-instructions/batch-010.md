# Node Description Batch 11 of 49

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

- "vendor_chart_4_5_1_umd_min_ca": "ca" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), .interpolate(), .pathSegment(), .apply(), n()]
- "vendor_chart_4_5_1_umd_min_en": "en" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), .get(), .isForType(), .register(), .unregister()]
- "vendor_chart_4_5_1_umd_min_f": "f()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, Fi(), .update(), ._handleEvent(), .setActiveElements(), .handleEvent()]
- "vendor_chart_4_5_1_umd_min_fn": "fn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, l(), n(), r(), un(), .constructor()]
- "vendor_chart_4_5_1_umd_min_ho_determinedatalimits": ".determineDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), a(), ._getLabelBounds(), l(), .endOf(), .startOf()]
- "vendor_chart_4_5_1_umd_min_ho_getdatatimestamps": ".getDataTimestamps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_generate(), _getTimestampsForTable(), ho(), ._generate(), .normalize(), .getAllParsedValues()]
- "vendor_chart_4_5_1_umd_min_ho_getlabeltimestamps": ".getLabelTimestamps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_getTimestampsForTable(), ho(), .buildTicks(), ._getLabelBounds(), .normalize(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_inrange": "inRange()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), l(), .getProps(), tt(), Ui()]
- "vendor_chart_4_5_1_umd_min_js_resolveelementoptions": "._resolveElementOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .resolveDataElementOptions(), .resolveDatasetElementOptions(), .getDataset(), .datasetElementScopeKeys(), .getOptionScopes()]
- "vendor_chart_4_5_1_umd_min_js_setstyle": "._setStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._removeDatasetHoverStyle(), .removeHoverStyle(), ._setDatasetHoverStyle(), .setHoverStyle(), .getSharedOptions()]
- "vendor_chart_4_5_1_umd_min_js_sync": "._sync()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._onDataPop(), ._onDataPush(), ._onDataShift(), ._onDataSplice(), ._onDataUnshift()]
- "vendor_chart_4_5_1_umd_min_n_getoptionscopes": ".getOptionScopes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.configure(), ._resolveAnimations(), ._resolveElementOptions(), n(), ._cachedScopes(), .has()]
- "vendor_chart_4_5_1_umd_min_n_resolvenamedoptions": ".resolveNamedOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[._resolveElementOptions(), n(), .createResolver(), r(), s(), Ye()]
- "vendor_chart_4_5_1_umd_min_ro_getdistancefromcenterforvalue": ".getDistanceFromCenterForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), ro(), .drawBackground(), .drawGrid(), s(), .getPointPositionForValue()]
- "vendor_chart_4_5_1_umd_min_ro_getpointposition": ".getPointPosition()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ao(), co(), eo(), ro(), .drawGrid(), .getIndexAngle()]
- "vendor_chart_4_5_1_umd_min_tn_callhooks": "._callHooks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .afterBuildTicks(), .afterDataLimits(), .beforeBuildTicks(), .beforeDataLimits(), d()]
- "vendor_chart_4_5_1_umd_min_tn_computegridlineitems": "._computeGridLineItems()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ae(), Gs(), l(), o(), x()]
- "vendor_chart_4_5_1_umd_min_tn_drawtitle": ".drawTitle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ki(), n(), o(), p(), Qs()]
- "vendor_chart_4_5_1_umd_min_tn_getlabelsizes": "._getLabelSizes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .calculateLabelRotation(), ._computeLabelItems(), .fit(), ._computeLabelSizes(), ._getYAxisLabelAlignment()]
- "vendor_chart_4_5_1_umd_min_tn_isvisible": "._isVisible()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .calculateLabelRotation(), .draw(), .fit(), .getLineWidthForValue(), .getMatchingVisibleMetas()]
- "vendor_chart_4_5_1_umd_min_tn_render": ".render()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._eventHandler(), .notifyPlugins(), .has(), .running(), .resize()]
- "vendor_chart_4_5_1_umd_min_tn_resize": ".resize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._initialize(), d(), ke(), .notifyPlugins(), .render()]
- "vendor_chart_4_5_1_umd_min_tn_resolvetickfontoptions": "._resolveTickFontOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[._getLabelSize(), .computeTickLimit(), tn, ._computeLabelItems(), ._computeLabelSizes(), ._maxDigits()]
- "vendor_chart_4_5_1_umd_min_ui": "Ui()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, getCenterPoint(), inRange(), o(), r(), .isPointInArea()]
- "vendor_chart_4_5_1_umd_min_vo": "Vo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabelTimestamps(), .parse(), a(), n(), .startOf()]
- "vendor_chart_4_5_1_umd_min_wa_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, ki(), Si(), ._drawArgs(), .drawBody(), .drawFooter()]
- "vendor_chart_4_5_1_umd_min_wa_drawcolorbox": "._drawColorBox()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .drawBody(), Le(), o(), Si(), wi()]
- "vendor_chart_4_5_1_umd_min_ya_computetitleheight": "._computeTitleHeight()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, .adjustHitBoxes(), ki(), Si(), .draw(), .drawTitle()]
- "vendor_chart_4_5_1_umd_min_ys": "Ys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .update(), e(), n(), s(), ._tickSize()]
- "vendor_supabase_js_2_110_0_clonerequeststate": "cloneRequestState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, toString(), delete(), insert(), select(), update()]
- "vendor_supabase_js_2_110_0_disconnect": "disconnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _cancelPendingDisconnect(), isDisconnecting(), reset(), teardown(), removeAllChannels()]
- "vendor_supabase_js_2_110_0_exchangecodeforsession": "exchangeCodeForSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), m(), _notifyAllSubscribers(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_getsession": "getSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _getAccessToken(), _getAuthenticatorAssuranceLevel(), getClaims(), _acquireLock()]
- "vendor_supabase_js_2_110_0_getsessionfromurl": "_getSessionFromURL()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), delete(), _returnResult(), toString(), y()]
- "vendor_supabase_js_2_110_0_heartbeattimeout": "heartbeatTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), heartbeatCallback(), log(), teardown(), triggerChanError()]
- "vendor_supabase_js_2_110_0_onconnclose": "onConnClose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, clearHeartbeats(), hasLogger(), log(), scheduleTimeout(), triggerChanError()]
- "vendor_supabase_js_2_110_0_onvisibilitychanged": "_onVisibilityChanged()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _handleVisibilityChange(), _acquireLock(), _debug(), _recoverAndRefresh(), _startAutoRefresh()]
- "vendor_supabase_js_2_110_0_removesession": "_removeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), getUser(), __loadSession(), _recoverAndRefresh(), _debug()]
- "vendor_supabase_js_2_110_0_sendheartbeat": "sendHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatCallback(), heartbeatTimeout(), isConnected(), log(), makeRef()]
- "vendor_supabase_js_2_110_0_signout": "signOut()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _acquireLock(), join(), m(), _useSession()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-010.json

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
