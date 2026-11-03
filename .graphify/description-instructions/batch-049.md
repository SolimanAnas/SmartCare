# Node Description Batch 50 of 62

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
- "app_initindexsearch": "initIndexSearch()" | kind=code-symbol | source=app.js:L1042 | neighbors=[app.js]
- "app_initswupdatetoast": "initSWUpdateToast()" | kind=code-symbol | source=app.js:L90 | neighbors=[app.js]
- "app_refreshstatsbadge": "refreshStatsBadge()" | kind=code-symbol | source=app.js:L1437 | neighbors=[app.js]
- "app_registerserviceworker": "registerServiceWorker()" | kind=code-symbol | source=app.js:L68 | neighbors=[app.js]
- "app_renderbottomnav": "renderBottomNav()" | kind=code-symbol | source=app.js:L319 | neighbors=[app.js]
- "app_rendersectionnavigation": "renderSectionNavigation()" | kind=code-symbol | source=app.js:L338 | neighbors=[app.js]
- "app_rendersectiontabs": "renderSectionTabs()" | kind=code-symbol | source=app.js:L304 | neighbors=[app.js]
- "app_timeago": "timeAgo()" | kind=code-symbol | source=app.js:L54 | neighbors=[app.js]
- "app_updatebottomnavvisibility": "updateBottomNavVisibility()" | kind=code-symbol | source=app.js:L395 | neighbors=[app.js]
- "app_updatefooternavposition": "updateFooterNavPosition()" | kind=code-symbol | source=app.js:L406 | neighbors=[app.js]
- "app_updateheadervisibility": "updateHeaderVisibility()" | kind=code-symbol | source=app.js:L372 | neighbors=[app.js]
- "app_updateprogressbarposition": "updateProgressBarPosition()" | kind=code-symbol | source=app.js:L385 | neighbors=[app.js]
- "app_updatescrollprogress": "updateScrollProgress()" | kind=code-symbol | source=app.js:L415 | neighbors=[app.js]
- "cpg_guide_list": "list()" | kind=code-symbol | source=cpg-guide.js:L37 | neighbors=[cpg-guide.js]
- "cpg_guide_stackedtable": "stackedTable()" | kind=code-symbol | source=cpg-guide.js:L56 | neighbors=[cpg-guide.js]
- "google_flow_generate_batches_anatomy": "ANATOMY" | kind=code-symbol | source=.google-flow/generate-batches.js:L12 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_batches": "batches" | kind=code-symbol | source=.google-flow/generate-batches.js:L159 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_byid": "byId" | kind=code-symbol | source=.google-flow/generate-batches.js:L106 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_chapters": "chapters" | kind=code-symbol | source=.google-flow/generate-batches.js:L157 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_count": "count()" | kind=code-symbol | source=.google-flow/generate-batches.js:L180 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_counted": "counted" | kind=code-symbol | source=.google-flow/generate-batches.js:L173 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_csv": "csv" | kind=code-symbol | source=.google-flow/generate-batches.js:L210 | neighbors=[generate-batches.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-049.json

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
