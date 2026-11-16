# Node Description Batch 20 of 63

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

- "vendor_chart_4_5_1_umd_min_tn_ispointinarea": ".isPointInArea()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._eventHandler(), Re(), Ui(), Xi(), Yi()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_updatehoverstyles": "._updateHoverStyles()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._handleEvent(), .setActiveElements(), .update(), n(), .updateHoverStyle()] | lang=en
- "vendor_chart_4_5_1_umd_min_vi": "vi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, mi(), a(), o(), wi(), xn()] | lang=en
- "vendor_chart_4_5_1_umd_min_wt": "wt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .hslString(), .interpolate(), .rgb(), .rgbString(), _t()] | lang=en
- "vendor_chart_4_5_1_umd_min_ya_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, Ie(), Oi(), Si(), ._computeTitleHeight(), ze()] | lang=en
- "vendor_chart_4_5_1_umd_min_yi": "Yi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), inRange(), Re(), .isPointInArea()] | lang=en
- "vendor_chart_4_5_1_umd_min_ze": "ze()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._drawDataset(), .drawLabels(), ua(), .draw(), je()] | lang=en
- "vendor_chart_4_5_1_umd_min_zn": "zn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _getRuler(), .getAllParsedValues(), l(), lt(), .getMatchingVisibleMetas()] | lang=en
- "vendor_supabase_js_2_110_0_ajax": "ajax()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, add(), endpointURL(), request(), batchSend(), poll()] | lang=en
- "vendor_supabase_js_2_110_0_binarydecode": "_binaryDecode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, decodeBroadcast(), decodePush(), decodeReply(), _decodeUserBroadcast(), decode()] | lang=en
- "vendor_supabase_js_2_110_0_canpush": "canPush()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), isJoined(), leave(), push(), send()] | lang=en
- "vendor_supabase_js_2_110_0_ct": "ct()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, join(), dropNamespace(), listNamespaces(), loadNamespaceMetadata(), namespaceExists()] | lang=en
- "vendor_supabase_js_2_110_0_fn": "fn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, encode(), from(), join(), Me(), pn()] | lang=en
- "vendor_supabase_js_2_110_0_getauthenticatorassurancelevel": "_getAuthenticatorAssuranceLevel()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, getSession(), getUser(), _returnResult(), y(), Ye()] | lang=en
- "vendor_supabase_js_2_110_0_getfinalpath": "_getFinalPath()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, download(), exists(), getPublicUrl(), info(), uploadToSignedUrl()] | lang=en
- "vendor_supabase_js_2_110_0_geturlforprovider": "_getUrlForProvider()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, join(), push(), re(), toString(), _handleProviderSignIn()] | lang=en
- "vendor_supabase_js_2_110_0_listfactors": "_listFactors()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), getUser(), m(), push(), y()] | lang=en
- "vendor_supabase_js_2_110_0_onclose": "onClose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), makeRef(), on(), push(), _setupConnectionHandlers()] | lang=en
- "vendor_supabase_js_2_110_0_onerror": "onError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), constructor(), makeRef(), on(), push()] | lang=en
- "vendor_supabase_js_2_110_0_onmessage": "onMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, makeRef(), push(), ping(), _setupConnectionHandlers(), trigger()] | lang=en
- "vendor_supabase_js_2_110_0_onopen": "onOpen()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), constructor(), makeRef(), push(), _setupConnectionHandlers()] | lang=en
- "vendor_supabase_js_2_110_0_q": "Q()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, join(), Qr(), rr(), signInWithSolana(), sr()] | lang=en
- "vendor_supabase_js_2_110_0_receive": "receive()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), leave(), hasReceived(), push(), subscribe()] | lang=en
- "vendor_supabase_js_2_110_0_register": "_register()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _enroll(), then(), _verify(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinanonymously": "signInAnonymously()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithidtoken": "signInWithIdToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithpassword": "signInWithPassword()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyauthentication": "_startPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyregistration": "_startPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_stopautorefresh": "_stopAutoRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, dispose(), _onVisibilityChanged(), _startAutoRefresh(), _debug(), _removeVisibilityChangedCallback()] | lang=en
- "vendor_supabase_js_2_110_0_verifyotp": "verifyOtp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_verifypasskeyregistration": "_verifyPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "app_switchsection": "switchSection()" | kind=code-symbol | source=app.js:L456 | neighbors=[app.js, bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03f6898862ab5b7297cba7df54116f3ce9035b9d": "03f6898 Update sw.js" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c2479e9 Adding ECG & Drug calc 👍❤️💊, sw.js, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a00316819db35a82adaf7032ff8dccf28b57ecc": "1a00316 feat(itls): restructure itls course - replace static chapters with buil…" | kind=Commit | source=git | neighbors=[main, d641fa0 feat: improve SEO, Open Graph m…, bundle.js, build.py, c9276ae chore: update graphify knowledg…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a56d75fd8f004df1227b903f4968fce222bd55f": "1a56d75 feat: graphify rebuild with descriptions + interactive file map view" | kind=Commit | source=git | neighbors=[main, b0748c1 feat: Supabase integration, c-index.js, sw.js, 5b988aa Create .nojekyll] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@236ac266e44dc9ad03abd77ae10b7c21d5715dcd": "236ac26 local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 061bcae local hashed authentication (SH…, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@393a5b03a5ff0a48da07588c899ce158c6a4b4db": "393a5b0 Drop ProxyFix: server.py is a local dev server, not deployed behind a p…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images-best, main, 2c020d4 Remove the Flask server; move a…, badddb6 Harden static file serving, adm…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@4251add1f265410f2201a2f802521359891be099": "4251add Close remaining low-severity review findings" | kind=Commit | source=git | neighbors=[2c020d4 Remove the Flask server; move a…, guide-images-best, main, dc07016 Merge main into ccr-b58d9c43-7a…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4663aec108b93ea7468094e61a901e18575e5cd2": "4663aec fix: Resolve unused variable and import lint errors in scripts/assemble…" | kind=Commit | source=git | neighbors=[main, 98557d8 docs: Update curriculum content…, c3.js, assemble_chapters.py, de0dcb2 feat: Add Open Graph metadata, …] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-019.json

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
