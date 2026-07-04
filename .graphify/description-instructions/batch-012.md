# Node Description Batch 13 of 48

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
- "vendor_supabase_js_2_110_0_signinwithpassword": "signInWithPassword()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()]
- "vendor_supabase_js_2_110_0_startpasskeyauthentication": "_startPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _returnResult(), y()]
- "vendor_supabase_js_2_110_0_startpasskeyregistration": "_startPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_stopautorefresh": "_stopAutoRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, dispose(), _onVisibilityChanged(), _startAutoRefresh(), _debug(), _removeVisibilityChangedCallback()]
- "vendor_supabase_js_2_110_0_verifyotp": "verifyOtp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()]
- "vendor_supabase_js_2_110_0_verifypasskeyregistration": "_verifyPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()]
- "app_switchsection": "switchSection()" | kind=code-symbol | source=app.js:L437 | neighbors=[app.js, bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav()]
- "commit:repo:github.com/SolimanAnas/SmartCare@03f6898862ab5b7297cba7df54116f3ce9035b9d": "03f6898 Update sw.js" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c2479e9 Adding ECG & Drug calc 👍❤️💊, sw.js, d55c93d Update sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@1a00316819db35a82adaf7032ff8dccf28b57ecc": "1a00316 feat(itls): restructure itls course - replace static chapters with buil…" | kind=Commit | source=git | neighbors=[main, d641fa0 feat: improve SEO, Open Graph m…, bundle.js, build.py, c9276ae chore: update graphify knowledg…]
- "commit:repo:github.com/SolimanAnas/SmartCare@1a56d75fd8f004df1227b903f4968fce222bd55f": "1a56d75 feat: graphify rebuild with descriptions + interactive file map view" | kind=Commit | source=git | neighbors=[main, b0748c1 feat: Supabase integration, c-index.js, sw.js, 5b988aa Create .nojekyll]
- "commit:repo:github.com/SolimanAnas/SmartCare@236ac266e44dc9ad03abd77ae10b7c21d5715dcd": "236ac26 local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 061bcae local hashed authentication (SH…, 707c033 Major Updates ✅]

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
