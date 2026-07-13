# Node Description Batch 27 of 49

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

- "vendor_chart_4_5_1_umd_min_oa": "oa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeDatasetDraw(), beforeDatasetsDraw()]
- "vendor_chart_4_5_1_umd_min_oe": "Oe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co(), n()]
- "vendor_chart_4_5_1_umd_min_on_invalidate": ".invalidate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, s(), .update()]
- "vendor_chart_4_5_1_umd_min_on_notifystatechanges": "._notifyStateChanges()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, ._descriptors(), s()]
- "vendor_chart_4_5_1_umd_min_oo_first": ".first()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[fa(), ga(), oo]
- "vendor_chart_4_5_1_umd_min_oo_interpolate": ".interpolate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo, gi(), r()]
- "vendor_chart_4_5_1_umd_min_parsearraydata": "parseArrayData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, l(), Vn()]
- "vendor_chart_4_5_1_umd_min_pe": "pe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, xe(), we()]
- "vendor_chart_4_5_1_umd_min_pi": "pi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, n(), r()]
- "vendor_chart_4_5_1_umd_min_ps": "ps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, fe(), .removeEventListener()]
- "vendor_chart_4_5_1_umd_min_q": "q()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ai(), Z()]
- "vendor_chart_4_5_1_umd_min_qt": "qt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .rgb(), kt()]
- "vendor_chart_4_5_1_umd_min_resolvedataelementoptions": "resolveDataElementOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getParsed(), l()]
- "vendor_chart_4_5_1_umd_min_rn_diff": ".diff()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.buildTicks(), ._generate(), rn()]
- "vendor_chart_4_5_1_umd_min_ro_drawlabels": ".drawLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .rotate(), .getIndexAngle()]
- "vendor_chart_4_5_1_umd_min_ro_getbaseposition": ".getBasePosition()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .getPointPositionForValue(), .getBaseValue()]
- "vendor_chart_4_5_1_umd_min_ro_setcenterpoint": ".setCenterPoint()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[co(), ro(), .fit()]
- "vendor_chart_4_5_1_umd_min_rt": "rt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ._dataCheck(), ._destroy()]
- "vendor_chart_4_5_1_umd_min_sa": "sa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, pa(), s()]
- "vendor_chart_4_5_1_umd_min_size": "size()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), getMaxOverflow()]
- "vendor_chart_4_5_1_umd_min_sn_exec": "._exec()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, d(), w()]
- "vendor_chart_4_5_1_umd_min_sn_getcontroller": ".getController()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, ._get(), .buildOrUpdateControllers()]
- "vendor_chart_4_5_1_umd_min_sn_getplugin": ".getPlugin()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[._createDescriptors(), sn, ._get()]
- "vendor_chart_4_5_1_umd_min_so_buildticks": ".buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, j(), ko()]
- "vendor_chart_4_5_1_umd_min_so_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[So, a(), .apply()]
- "vendor_chart_4_5_1_umd_min_tn_afterbuildticks": ".afterBuildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._callHooks(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_aftercalculatelabelrotation": ".afterCalculateLabelRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_afterdatalimits": ".afterDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._callHooks(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_afterfit": ".afterFit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_aftersetdimensions": ".afterSetDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_afterticktolabelconversion": ".afterTickToLabelConversion()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), ._convertTicksToLabels()]
- "vendor_chart_4_5_1_umd_min_tn_beforebuildticks": ".beforeBuildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._callHooks(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforecalculatelabelrotation": ".beforeCalculateLabelRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforedatalimits": ".beforeDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._callHooks(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforefit": ".beforeFit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforesetdimensions": ".beforeSetDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforeticktolabelconversion": ".beforeTickToLabelConversion()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), ._convertTicksToLabels()]
- "vendor_chart_4_5_1_umd_min_tn_binduserevents": ".bindUserEvents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .bindEvents(), u()]
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatescales": ".buildOrUpdateScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, u(), ._updateScales()]
- "vendor_chart_4_5_1_umd_min_tn_clear": ".clear()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.clearCache(), tn, .draw()]

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
