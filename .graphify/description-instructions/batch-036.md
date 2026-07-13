# Node Description Batch 37 of 49

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

- "vendor_chart_4_5_1_umd_min_qn": "qn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, kn()]
- "vendor_chart_4_5_1_umd_min_qs": "Qs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .drawTitle()]
- "vendor_chart_4_5_1_umd_min_removebox": "removeBox()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, stop()]
- "vendor_chart_4_5_1_umd_min_rn_endof": ".endOf()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.determineDataLimits(), rn()]
- "vendor_chart_4_5_1_umd_min_rn_formats": ".formats()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.init(), rn()]
- "vendor_chart_4_5_1_umd_min_ro_determinedatalimits": ".determineDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), a()]
- "vendor_chart_4_5_1_umd_min_ro_drawbackground": ".drawBackground()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .getDistanceFromCenterForValue()]
- "vendor_chart_4_5_1_umd_min_ro_fit": ".fit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .setCenterPoint()]
- "vendor_chart_4_5_1_umd_min_ro_generateticklabels": ".generateTickLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_ro_getvaluefordistancefromcenter": ".getValueForDistanceFromCenter()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), s()]
- "vendor_chart_4_5_1_umd_min_ro_setdimensions": ".setDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), ki()]
- "vendor_chart_4_5_1_umd_min_s_tooltipposition": ".tooltipPosition()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[s(), .getProps()]
- "vendor_chart_4_5_1_umd_min_sn_add": ".add()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_addcontrollers": ".addControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_addelements": ".addElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_addplugins": ".addPlugins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_addscales": ".addScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, en]
- "vendor_chart_4_5_1_umd_min_sn_getregistryfortype": "._getRegistryForType()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, .isForType()]
- "vendor_chart_4_5_1_umd_min_sn_getscale": ".getScale()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._get()]
- "vendor_chart_4_5_1_umd_min_sn_remove": ".remove()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_removecontrollers": ".removeControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_removeelements": ".removeElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_removeplugins": ".removePlugins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_sn_removescales": ".removeScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._each()]
- "vendor_chart_4_5_1_umd_min_so_determinedatalimits": ".determineDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, a()]
- "vendor_chart_4_5_1_umd_min_so_getlabelforvalue": ".getLabelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, ne()]
- "vendor_chart_4_5_1_umd_min_so_getpixelforvalue": ".getPixelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_so_getvalueforpixel": ".getValueForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, .getDecimalForPixel()]
- "vendor_chart_4_5_1_umd_min_ss_acquirecontext": ".acquireContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), e()]
- "vendor_chart_4_5_1_umd_min_ss_addeventlistener": ".addEventListener()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), n()]
- "vendor_chart_4_5_1_umd_min_ss_getmaximumsize": ".getMaximumSize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), we()]
- "vendor_chart_4_5_1_umd_min_ss_isattached": ".isAttached()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), ge()]
- "vendor_chart_4_5_1_umd_min_ss_removeeventlistener": ".removeEventListener()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), ps()]
- "vendor_chart_4_5_1_umd_min_stop": "stop()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, removeBox()]
- "vendor_chart_4_5_1_umd_min_ti": "ti()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, je()]
- "vendor_chart_4_5_1_umd_min_tn_afterupdate": ".afterUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d()]
- "vendor_chart_4_5_1_umd_min_tn_aspectratio": ".aspectRatio()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, s()]
- "vendor_chart_4_5_1_umd_min_tn_beforeupdate": ".beforeUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d()]
- "vendor_chart_4_5_1_umd_min_tn_calculatepadding": "._calculatePadding()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .fit()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-036.json

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
