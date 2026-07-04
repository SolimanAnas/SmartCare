# Node Description Batch 10 of 48

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

- "vendor_chart_4_5_1_umd_min_z": "Z()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .initOffsets(), lo(), pt(), q(), ra()]
- "vendor_supabase_js_2_110_0_connectwithfallback": "connectWithFallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), getSession(), off(), onError(), onOpen()]
- "vendor_supabase_js_2_110_0_encode": "encode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, binaryEncode(), _binaryEncodeUserBroadcastPush(), _encodeJsonUserBroadcastPush(), fn(), ms()]
- "vendor_supabase_js_2_110_0_g": "G()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deleteFactor(), deleteUser(), getUserById()]
- "vendor_supabase_js_2_110_0_haslogger": "hasLogger()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatTimeout(), isMember(), leaveOpenTopic(), onConnClose(), onConnError()]
- "vendor_supabase_js_2_110_0_match": "match()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, appendParams(), Ci(), Ii(), add(), os()]
- "vendor_supabase_js_2_110_0_onconnopen": "onConnOpen()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _handleNodeJsRaceCondition(), flushSendBuffer(), hasLogger(), log(), reset()]
- "vendor_supabase_js_2_110_0_resend": "resend()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, rejoin(), m(), re(), reset(), _returnResult()]
- "vendor_supabase_js_2_110_0_reset": "reset()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), leave(), onConnOpen(), replaceTransport(), resend()]
- "vendor_supabase_js_2_110_0_setsession": "setSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _callRefreshToken(), _notifyAllSubscribers(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_subscribe": "subscribe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), isClosed(), isConnected(), join(), receive()]
- "vendor_supabase_js_2_110_0_te": "Te()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTable(), dropTable(), listTables(), loadTable(), tableExists()]
- "vendor_supabase_js_2_110_0_then": "then()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, constructor(), fetchRequest(), _register(), signInWithEthereum(), catch()]
- "vendor_supabase_js_2_110_0_verifypasskeyauthentication": "_verifyPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _notifyAllSubscribers(), _returnResult()]
- "admin_delete_user_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-delete-user/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…]
- "admin_list_users_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-list-users/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…]
- "admin_update_role_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-update-role/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…]
- "commit:repo:github.com/SolimanAnas/SmartCare@20fdfa2b700d60481bd2fc535e7bde91a55fa0b1": "20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and …" | kind=Commit | source=git | neighbors=[app.js, main, 1fc629e fix(app.js): handle DOMContentL…, build_courses.py, generate_all_itls_data.py, server.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@95f63633aba5ff9266a8145d45782fa66083ef6b": "95f6363 Merge pull request #10 from SolimanAnas/claude/chapters-html-summary-fi…" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, acb0328 About ✅ Merge pull request #11 …, server.py, sw.js, test_api.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@98557d8f2f10ce30a41dfbccf300f412c7b40860": "98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5" | kind=Commit | source=git | neighbors=[4663aec fix: Resolve unused variable an…, main, 92652ca feat: Update search placeholder…, c2.js, c3.js, c4.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@a4df22b3015e72e7b31ed3d38a6ed3201412ac4f": "a4df22b fix: resolve CI lint failure and remove orphaned files" | kind=Commit | source=git | neighbors=[main, 04af7e8 fix: correct UTF-8 mojibake in …, build.py, build_courses.py, generate_all_itls_data.py, server.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@bb5130804dd42ccbe4464b66778492692e8e1664": "bb51308 Merge pull request #19  Exam themes fix ✅" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, 5d2d46f Fix WCAG AA contrast failure in…, main, 2ab1c09 Fix invisible Show Hint/confide…, 9b12c84 Merge pull request #20, precache-manifest.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d7008b72d98ca2d1546e02189de5ec4ebfc00781": "d7008b7 Add the actual content changes for the High priority list" | kind=Commit | source=git | neighbors=[1ca0f65 Ship the High priority list fro…, main, d7918ff fix: commit package-lock.json —…, playwright.config.js, precache-manifest.js, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d708b15dd627b1b9bedd75d6b4a682baa612759e": "d708b15 Ship the UI/UX Improvements section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, app.js, main, 83a1ea8 Ship the Offline & PWA section …, render-state.js, theme.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ef31570c6f99e0b82b1cfbacb427c699ef60b82e": "ef31570 Fix offline precache gap, add content governance + validation, add clin…" | kind=Commit | source=git | neighbors=[main, 503d0e1 Fix 36 single-option questions …, precache-manifest.js, build_precache.py, validate_content.py, offline.spec.js]
- "content_c6": "c6.js" | kind=code-symbol | source=content/c6.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 7f26548 fix: UTF-8 mojibake across exam…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…, d00c567 feat: Remove Scope of Practice …]
- "prometric_exam_examengine_renderquestion": ".renderQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L514 | neighbors=[ExamEngine, .goToQuestion(), .navigate(), .nextOrEnd(), .updateNavigator(), .retryIncorrect()]
- "prometric_exam_examengine_retryincorrect": ".retryIncorrect()" | kind=code-symbol | source=src/prometric/exam.js:L987 | neighbors=[ExamEngine, .buildNavigator(), .removeTouchListeners(), .renderQuestion(), .showScreen(), .shuffleArray()]
- "scripts_check_contrast": "check_contrast.py" | kind=code-symbol | source=scripts/check_contrast.py:L1 | neighbors=[5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…, contrast(), hex_to_rgb(), luminance(), main()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-009.json

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
