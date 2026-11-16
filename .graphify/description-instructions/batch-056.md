# Node Description Batch 57 of 62

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "tests_test_api_testregister_test_register_missing_password": ".test_register_missing_password()" | kind=code-symbol | source=tests/test_api.py:L43 | neighbors=[TestRegister] | lang=en
- "tests_test_api_testsecurityheaders_test_csp_blocks_framing": ".test_csp_blocks_framing()" | kind=code-symbol | source=tests/test_api.py:L138 | neighbors=[TestSecurityHeaders] | lang=en
- "tests_test_api_testsecurityheaders_test_security_headers_present": ".test_security_headers_present()" | kind=code-symbol | source=tests/test_api.py:L133 | neighbors=[TestSecurityHeaders] | lang=en
- "tests_test_api_teststaticfiles_test_manifest_json": ".test_manifest_json()" | kind=code-symbol | source=tests/test_api.py:L216 | neighbors=[TestStaticFiles] | lang=en
- "tests_test_api_teststaticfiles_test_nonexistent_file_returns_404": ".test_nonexistent_file_returns_404()" | kind=code-symbol | source=tests/test_api.py:L221 | neighbors=[TestStaticFiles] | lang=en
- "tests_test_api_teststaticfiles_test_style_css": ".test_style_css()" | kind=code-symbol | source=tests/test_api.py:L211 | neighbors=[TestStaticFiles] | lang=en
- "tests_test_content_guides_rationale_1": "Rewritten SmartCare topics must match their chapter's reference notes.\r \r A rewr" | kind=entity | source=tests/test_content_guides.py:L1 | neighbors=[test_content_guides.py] | lang=pt
- "tests_test_content_guides_rationale_55": "A page string without its inline tags (<b>, <sub>) and entities." | kind=entity | source=tests/test_content_guides.py:L55 | neighbors=[page_text()] | lang=en
- "tests_test_content_guides_rationale_78": "Right answers and explanations state facts; wrong options and\r     scenario stem" | kind=entity | source=tests/test_content_guides.py:L78 | neighbors=[study_strings()] | lang=en
- "tests_test_content_guides_rewritten_topics": "rewritten_topics()" | kind=code-symbol | source=tests/test_content_guides.py:L90 | neighbors=[test_content_guides.py] | lang=en
- "tests_test_content_guides_test_study_sets_meet_the_minimums": "test_study_sets_meet_the_minimums()" | kind=code-symbol | source=tests/test_content_guides.py:L110 | neighbors=[test_content_guides.py] | lang=en
- "tests_test_courses_page_rationale_1": "pages/courses.html progress bars divide chapters viewed by a hard-coded\r chapter" | kind=entity | source=tests/test_courses_page.py:L1 | neighbors=[test_courses_page.py] | lang=en
- "usermixin": "UserMixin" | kind=code-symbol | neighbors=[User] | lang=en
- "vendor_chart_4_5_1_umd_min_afterevent": "afterEvent()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_afterinit": "afterInit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_as_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as()] | lang=en
- "vendor_chart_4_5_1_umd_min_as_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as()] | lang=en
- "vendor_chart_4_5_1_umd_min_beforeupdate": "beforeUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_bo_computeticklimit": ".computeTickLimit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo] | lang=en
- "vendor_chart_4_5_1_umd_min_bo_configure": ".configure()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo] | lang=en
- "vendor_chart_4_5_1_umd_min_bo_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo] | lang=en
- "vendor_chart_4_5_1_umd_min_bs": "bs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_ca_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ca] | lang=en
- "vendor_chart_4_5_1_umd_min_ca_interpolate": ".interpolate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ca] | lang=en
- "vendor_chart_4_5_1_umd_min_ca_pathsegment": ".pathSegment()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ca] | lang=en
- "vendor_chart_4_5_1_umd_min_colors": "Colors()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_configure": "configure()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_constructor": "constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_cs_acquirecontext": ".acquireContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[cs] | lang=en
- "vendor_chart_4_5_1_umd_min_cs_updateconfig": ".updateConfig()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[cs] | lang=en
- "vendor_chart_4_5_1_umd_min_decimation": "Decimation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_destroy": "destroy()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_en_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en] | lang=en
- "vendor_chart_4_5_1_umd_min_en_get": ".get()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en] | lang=en
- "vendor_chart_4_5_1_umd_min_en_unregister": ".unregister()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en] | lang=en
- "vendor_chart_4_5_1_umd_min_filler": "Filler()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_getbasepixel": "getBasePixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_getlabelforvalue": "getLabelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_getpixelfortick": "getPixelForTick()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js] | lang=en
- "vendor_chart_4_5_1_umd_min_ho_afterautoskip": ".afterAutoSkip()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-056.json

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
