# Node Description Batch 14 of 62

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

- "shared_admin_requireadmin": "requireAdmin()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L66 | neighbors=[index.ts, index.ts, index.ts, admin.ts, adminEmails(), audit()]
- "tests_ecg_simulator_spec": "ecg-simulator.spec.js" | kind=code-symbol | source=tests/ecg-simulator.spec.js:L1 | neighbors=[2b928c2 ECG Simulator: downloadable rhy…, 437e8d4 Merge pull request #66  ECG, 55997db ECG Simulator: easy mode, visib…, 6663113 PR #63 Update ECG simulator, 66d3118 BDLS update ,ECG engine update ✅, d93e86e ECG Simulator: rebuild engine, …]
- "vendor_chart_4_5_1_umd_min_js_datacheck": "._dataCheck()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .addElements(), .buildOrUpdateElements(), at(), .getDataset(), o()]
- "vendor_chart_4_5_1_umd_min_no": "no()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), io(), n(), .path()]
- "vendor_chart_4_5_1_umd_min_oi": "Oi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), .drawBody(), .drawFooter(), .drawTitle(), .adjustHitBoxes()]
- "vendor_chart_4_5_1_umd_min_on": "on" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), ._createDescriptors(), ._descriptors(), .invalidate(), .notify()]
- "vendor_chart_4_5_1_umd_min_pa": "pa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), ea(), ia(), ma(), sa()]
- "vendor_chart_4_5_1_umd_min_ra": "ra()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, afterDatasetsUpdate(), a(), l(), o(), s()]
- "vendor_chart_4_5_1_umd_min_s_getprops": ".getProps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ao(), getCenterPoint(), ho(), inRange(), ro(), s()]
- "vendor_chart_4_5_1_umd_min_tn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, dt(), n(), .chartOptionScopes(), .createResolver(), on]
- "vendor_chart_4_5_1_umd_min_tn_getpixelfordecimal": ".getPixelForDecimal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), getPixelForValue(), .getPixelForValue(), .getPixelForValue(), .getPixelForValue(), tn]
- "vendor_chart_4_5_1_umd_min_ts": "ts()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), ._animateOptions(), .configure(), .constructor(), ._createAnimations()]
- "vendor_chart_4_5_1_umd_min_wa_drawbody": ".drawBody()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw(), Oi(), p(), Si(), u()]
- "vendor_chart_4_5_1_umd_min_wi": "wi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ho(), lo(), ra(), .drawBackground(), ._drawColorBox()]
- "vendor_chart_4_5_1_umd_min_xi": "Xi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), nearest(), n(), .getProps()]
- "vendor_chart_4_5_1_umd_min_yn_updateelements": ".updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .getParsed(), .updateElement(), .getDistanceFromCenterForValue(), .getIndexAngle(), .getDataVisibility()]
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
- "commit:repo:github.com/SolimanAnas/SmartCare@0555934e2b6e5e9f59ba4bb24065645c854d0506": "0555934 Author PEPP chapters c09-c11 (trauma, toxic/environmental, neonatal)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e630fb6 Author PEPP chapters c12-c14, c…, bundle.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@13785086b08d151bf6b027032d7ab8d37cc15a9f": "1378508 Add BDLS v3.0 pre-test question bank" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 07b8707 Show BDLS pre-test first in exa…, precache-manifest.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@18ca925cc61b3852ead75191f1ed905f059e6066": "18ca925 Wrap a long line in the guide content test (ruff E501)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6bcfae8 Infant choking: chest thrusts w…, test_content_guides.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@1c052319b55d91fb7aa2ec0f9e2a16d8daf892cc": "1c05231 Fix layout issues found in a mobile audit of all pages" | kind=Commit | source=git | neighbors=[1b4fd7d PR #42 Add animated dose-calcul…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, a572e0a Redesign Global Statistics as a…]
- "commit:repo:github.com/SolimanAnas/SmartCare@20fdfa2b700d60481bd2fc535e7bde91a55fa0b1": "20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and …" | kind=Commit | source=git | neighbors=[app.js, main, 1fc629e fix(app.js): handle DOMContentL…, build_courses.py, generate_all_itls_data.py, server.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@27fd0d1773775a89c199c582747618213d909de5": "27fd0d1 Author PEPP chapters c03-c04 (primary assessment, history/secondary ass…" | kind=Commit | source=git | neighbors=[179984f Scaffold PEPP reviewer (courses…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, b88a05e Author PEPP chapters c05-c08 (r…]
- "commit:repo:github.com/SolimanAnas/SmartCare@2ac796c44aeef3174e8afa28f5ad23d8548c3b39": "2ac796c Pulmonary edema gate: CPAP only when awake, protecting the airway and n…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 63e2100 Chapter 4 rewrite: Cardiovascul…, c4.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@33c9dd7bb174acb9ced8ec3f37508895a6f4c4ac": "33c9dd7 Author BLS chapters c04-c06 (2-rescuer/teams, AED, ventilation)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, f4356e0 Author BLS chapters c07-c09 (br…, bundle.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@3e50ecde28aeeb0f121e4c5cc69418a913b88d72": "3e50ecd Merge remote-tracking branch 'origin/main' into ccr-81fddd6b-wx4wsm" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 05afd15 Cap IV diazepam and midazolam s…, 8f65c40 Formulary group C: sedation, se…]
- "commit:repo:github.com/SolimanAnas/SmartCare@3f751adb5c9bc978e26f667056a07e8aa2027ca8": "3f751ad Regenerate precache-manifest.js after final page edits" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5cfcb95 PR #55 fix Home ring, precache-manifest.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-013.json

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
