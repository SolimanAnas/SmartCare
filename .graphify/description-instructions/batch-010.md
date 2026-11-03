# Node Description Batch 11 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@ec0e85ec91b73666cdda22ccbe278bb78bef0b06": "ec0e85e fix(css): collapse multi-line SVG data URL in .cat-header::before acros…" | kind=Commit | source=git | neighbors=[05fc83d fix: re-disable auth guard on c…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@ed28729ef8c6d7ca7b5f72131616750faddd8648": "ed28729 Chapter 2 rewrite: Patient Assessment ✅" | kind=Commit | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 7d4e283 Falling consciousness in respir…, main, a497e1f Rewrite chapter 6 (Trauma Emerg…, a7f8828 Chapter 6 update : Trauma Emerg…, c2.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ee58d7a078f2d5966721143e1f315f8d1a1308b2": "ee58d7a content: deploy chapters 1-5 with full NREMT-aligned EMT curriculum" | kind=Commit | source=git | neighbors=[b791fda content: deploy chapters 4-5 (C…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "content_c0": "c0.js" | kind=code-symbol | source=content/c0.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 77d4355 Merge pull request #21 from Sol…, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…]
- "content_c10": "c10.js" | kind=code-symbol | source=content/c10.js:L1 | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, ce11d74 Rewrite chapter 10 (Clinical Pr…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…]
- "content_c3": "c3.js" | kind=code-symbol | source=content/c3.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 6bcfae8 Infant choking: chest thrusts w…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 4663aec fix: Resolve unused variable an…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…]
- "content_c5": "c5.js" | kind=code-symbol | source=content/c5.js:L1 | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 35ac666 Rewrite chapter 5 (Medical Emer…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 98557d8 docs: Update curriculum content…, a4deb03 Merge pull request #8 from Soli…]
- "content_c9": "c9.js" | kind=code-symbol | source=content/c9.js:L1 | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, 14bac52 Rewrite chapter 9 (Emergency Ph…, cae9224 Chapter 9 rewrite: Emergency Ph…, e3854cc Drop endotracheal drug delivery…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…]
- "prometric_exam_examengine_init": ".init()" | kind=code-symbol | source=src/prometric/exam.js:L31 | neighbors=[ExamEngine, .constructor(), .bindEvents(), .initTheme(), .initWizard(), .loadChartJS()]
- "prometric_exam_examengine_startexam": ".startExam()" | kind=code-symbol | source=src/prometric/exam.js:L366 | neighbors=[ExamEngine, .buildNavigator(), .filterQuestions(), .renderQuestion(), .showScreen(), .shuffleArray()]
- "prometric_exam_examengine_updatenavigator": ".updateNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L462 | neighbors=[ExamEngine, .buildNavigator(), .renderQuestion(), .selectOption(), .submitAnswer(), .toggleFlag()]
- "scripts_audio_app_sound": "app_sound()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L213 | neighbors=[audio.py, env(), lp(), saw(), square(), tl()]
- "scripts_driver": "driver.js" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, { chromium }, open(), path, explore2.js]
- "scripts_qa": "qa.py" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L1 | neighbors=[05dca1e Add Google Play preview cut of …, 2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, blacks(), loudness(), main()]
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
