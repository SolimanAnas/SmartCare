# Node Description Batch 21 of 49

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

- "vendor_chart_4_5_1_umd_min_start": "start()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, addBox(), wa, ya]
- "vendor_chart_4_5_1_umd_min_te": "te()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .darken(), .hexString(), .saturate()]
- "vendor_chart_4_5_1_umd_min_tn_bindresponsiveevents": ".bindResponsiveEvents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .bindEvents(), a(), o()]
- "vendor_chart_4_5_1_umd_min_tn_checkeventbindings": "._checkEventBindings()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .bindEvents(), .unbindEvents(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_destroy": ".destroy()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .clearCache(), .notifyPlugins(), .unbindEvents()]
- "vendor_chart_4_5_1_umd_min_tn_getbasevalue": ".getBaseValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), .getBasePosition(), tn, .getBasePixel()]
- "vendor_chart_4_5_1_umd_min_tn_getelementsateventformode": ".getElementsAtEventForMode()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getActiveElements(), n(), .getActiveElements()]
- "vendor_chart_4_5_1_umd_min_tn_getminmax": ".getMinMax()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, r(), .getMatchingVisibleMetas(), .getUserBounds()]
- "vendor_chart_4_5_1_umd_min_tn_getsorteddatasetmetas": "._getSortedDatasetMetas()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[es(), generateLabels(), tn, .getSortedVisibleDatasetMetas()]
- "vendor_chart_4_5_1_umd_min_tn_unbindevents": ".unbindEvents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._checkEventBindings(), .destroy(), u()]
- "vendor_chart_4_5_1_umd_min_tn_updatedataset": "._updateDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getDatasetMeta(), .notifyPlugins(), ._updateDatasets()]
- "vendor_chart_4_5_1_umd_min_tn_updatehoverstyle": ".updateHoverStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, s(), .getDatasetMeta(), ._updateHoverStyles()]
- "vendor_chart_4_5_1_umd_min_tn_updatelayout": "._updateLayout()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), .notifyPlugins(), u()]
- "vendor_chart_4_5_1_umd_min_tn_updatemetasets": "._updateMetasets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .buildOrUpdateControllers(), kn(), ._destroyDatasetMeta()]
- "vendor_chart_4_5_1_umd_min_ts_animateoptions": "._animateOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts(), .active(), .wait(), ._createAnimations()]
- "vendor_chart_4_5_1_umd_min_vn": "Vn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, parseArrayData(), parsePrimitiveData(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_vs": "vs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Fs(), zs(), ws()]
- "vendor_chart_4_5_1_umd_min_vt": "vt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bt(), Gt(), _t()]
- "vendor_chart_4_5_1_umd_min_wa_drawtitle": ".drawTitle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Oi(), Si(), x()]
- "vendor_chart_4_5_1_umd_min_wa_getafterbody": ".getAfterBody()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Ba(), za(), .update()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-020.json

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
