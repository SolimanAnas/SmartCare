# Node Description Batch 16 of 62

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/SolimanAnas/SmartCare@fdbf3108e2f6372c2b88c121a2c93dc6adfc685a": "fdbf310 Fix CI: regenerate precache-manifest.js" | kind=Commit | source=git | neighbors=[ae06d27 PALS illustrations ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7d6035c Regenerate all PWA/app icons fr…]
- "prometric_exam_examengine_renderquestion": ".renderQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L518 | neighbors=[ExamEngine, .goToQuestion(), .navigate(), .nextOrEnd(), .updateNavigator(), .retryIncorrect()]
- "prometric_exam_examengine_retryincorrect": ".retryIncorrect()" | kind=code-symbol | source=src/prometric/exam.js:L991 | neighbors=[ExamEngine, .buildNavigator(), .removeTouchListeners(), .renderQuestion(), .showScreen(), .shuffleArray()]
- "scripts_audio_lp": "lp()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L80 | neighbors=[audio.py, app_sound(), impact(), main(), reverb(), score()]
- "scripts_audio_tl": "tl()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L27 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), main(), score()]
- "scripts_check_contrast": "check_contrast.py" | kind=code-symbol | source=scripts/check_contrast.py:L1 | neighbors=[5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…, contrast(), hex_to_rgb(), luminance(), main()]
- "scripts_compose_src_index": "src_index()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L273 | neighbors=[compose.py, app_events(), debrief_card(), render_full(), render_macro(), render_open()]
- "src_render_state": "render-state.js" | kind=code-symbol | source=src/render-state.js:L1 | neighbors=[d1b235f Merge pull request #15 Offline …, d708b15 Ship the UI/UX Improvements sec…, escapeHtml(), icon(), renderEmptyOrError(), renderLoading()]
- "tests_offline_spec": "offline.spec.js" | kind=code-symbol | source=tests/offline.spec.js:L1 | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, 53ec4c1 Merge pull request #16 ✅, d7008b7 Add the actual content changes …, ef31570 Fix offline precache gap, add c…, EXAM_CONTENT_ASSETS, KEY_PAGES]
- "tests_test_api_testadminusers": "TestAdminUsers" | kind=code-symbol | source=tests/test_api.py:L134 | neighbors=[test_api.py, .test_admin_can_list_users(), .test_admin_delete_user(), .test_admin_role_update(), .test_admin_users_forbidden_for_regular…, .test_admin_users_requires_auth()]
- "tests_test_api_testcsrfguard": "TestCsrfGuard" | kind=code-symbol | source=tests/test_api.py:L176 | neighbors=[test_api.py, .test_delete_without_xrw_header_rejecte…, .test_get_requests_not_blocked(), .test_post_without_json_content_type_re…, .test_valid_delete_request_allowed(), .test_post_without_xrw_header_rejected()]
- "vendor_chart_4_5_1_umd_min_bo_buildticks": ".buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, .getTickLimit(), H(), j(), s(), ._maxDigits()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-015.json

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
