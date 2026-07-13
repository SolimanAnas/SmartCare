# Node Description Batch 13 of 49

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

- "vendor_chart_4_5_1_umd_min_m": "m()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, g(), o(), p(), v(), x()]
- "vendor_chart_4_5_1_umd_min_n_getrotationextents": "._getRotationExtents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._getCircumference(), ._getRotation(), .getDatasetMeta(), .isDatasetVisible(), .update()]
- "vendor_chart_4_5_1_umd_min_parse": "parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), l(), po(), s(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_re": "Re()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), hi(), .isPointInArea(), to(), Yi()]
- "vendor_chart_4_5_1_umd_min_ri": "ri()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, hi(), a(), l(), r(), v()]
- "vendor_chart_4_5_1_umd_min_ro_getpointpositionforvalue": ".getPointPositionForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), ro(), .getBasePosition(), .getDistanceFromCenterForValue(), .getPointPosition(), updateElements()]
- "vendor_chart_4_5_1_umd_min_t": "_t()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .greyscale(), kt(), mt(), vt(), wt()]
- "vendor_chart_4_5_1_umd_min_ta": "Ta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ki(), Si(), u(), .update(), ._updateAnimationTarget()]
- "vendor_chart_4_5_1_umd_min_tn_calculatelabelrotation": ".calculateLabelRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._getLabelSizes(), ._isVisible(), Y(), Z(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_computelabelsizes": "._computeLabelSizes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, n(), s(), ._resolveTickFontOptions(), u(), ._getLabelSizes()]
- "vendor_chart_4_5_1_umd_min_tn_drawdataset": "._drawDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ie(), Ni(), .notifyPlugins(), ze(), ._drawDatasets()]
- "vendor_chart_4_5_1_umd_min_tn_eventhandler": "._eventHandler()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._handleEvent(), .isPointInArea(), .notifyPlugins(), .render(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_getdatavisibility": ".getDataVisibility()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), .calculateTotal(), ._circumference(), tn, ._computeAngle(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_tn_initialize": "._initialize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .constructor(), ke(), .bindEvents(), .notifyPlugins(), .resize()]
- "vendor_chart_4_5_1_umd_min_tn_ispointinarea": ".isPointInArea()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._eventHandler(), Re(), Ui(), Xi(), Yi()]
- "vendor_chart_4_5_1_umd_min_tn_updatehoverstyles": "._updateHoverStyles()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._handleEvent(), .setActiveElements(), .update(), n(), .updateHoverStyle()]
- "vendor_chart_4_5_1_umd_min_vi": "vi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, mi(), a(), o(), wi(), xn()]
- "vendor_chart_4_5_1_umd_min_wt": "wt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .hslString(), .interpolate(), .rgb(), .rgbString(), _t()]
- "vendor_chart_4_5_1_umd_min_ya_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, Ie(), Oi(), Si(), ._computeTitleHeight(), ze()]
- "vendor_chart_4_5_1_umd_min_yi": "Yi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), inRange(), Re(), .isPointInArea()]
- "vendor_chart_4_5_1_umd_min_ze": "ze()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._drawDataset(), .drawLabels(), ua(), .draw(), je()]
- "vendor_chart_4_5_1_umd_min_zn": "zn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _getRuler(), .getAllParsedValues(), l(), lt(), .getMatchingVisibleMetas()]
- "vendor_supabase_js_2_110_0_ajax": "ajax()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, add(), endpointURL(), request(), batchSend(), poll()]
- "vendor_supabase_js_2_110_0_binarydecode": "_binaryDecode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, decodeBroadcast(), decodePush(), decodeReply(), _decodeUserBroadcast(), decode()]
- "vendor_supabase_js_2_110_0_canpush": "canPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), isJoined(), leave(), push(), send()]
- "vendor_supabase_js_2_110_0_ct": "ct()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, join(), dropNamespace(), listNamespaces(), loadNamespaceMetadata(), namespaceExists()]
- "vendor_supabase_js_2_110_0_fn": "fn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, encode(), from(), join(), Me(), pn()]
- "vendor_supabase_js_2_110_0_getauthenticatorassurancelevel": "_getAuthenticatorAssuranceLevel()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, getSession(), getUser(), _returnResult(), y(), Ye()]
- "vendor_supabase_js_2_110_0_getfinalpath": "_getFinalPath()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, download(), exists(), getPublicUrl(), info(), uploadToSignedUrl()]
- "vendor_supabase_js_2_110_0_geturlforprovider": "_getUrlForProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, join(), push(), re(), toString(), _handleProviderSignIn()]
- "vendor_supabase_js_2_110_0_listfactors": "_listFactors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), getUser(), m(), push(), y()]
- "vendor_supabase_js_2_110_0_onclose": "onClose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), makeRef(), on(), push(), _setupConnectionHandlers()]
- "vendor_supabase_js_2_110_0_onerror": "onError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), constructor(), makeRef(), on(), push()]
- "vendor_supabase_js_2_110_0_onmessage": "onMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, makeRef(), push(), ping(), _setupConnectionHandlers(), trigger()]
- "vendor_supabase_js_2_110_0_onopen": "onOpen()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), constructor(), makeRef(), push(), _setupConnectionHandlers()]
- "vendor_supabase_js_2_110_0_q": "Q()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, join(), Qr(), rr(), signInWithSolana(), sr()]
- "vendor_supabase_js_2_110_0_receive": "receive()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), leave(), hasReceived(), push(), subscribe()]
- "vendor_supabase_js_2_110_0_register": "_register()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _enroll(), then(), _verify(), y()]
- "vendor_supabase_js_2_110_0_signinanonymously": "signInAnonymously()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()]
- "vendor_supabase_js_2_110_0_signinwithidtoken": "signInWithIdToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-012.json

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
