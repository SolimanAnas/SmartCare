# Node Description Batch 22 of 48

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

- "vendor_supabase_js_2_110_0_ps": "Ps()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, js(), Cs(), Pe()] | lang=en
- "vendor_supabase_js_2_110_0_reconnectauth": "_reconnectAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), isConnected(), _waitForAuthIfNeeded()] | lang=en
- "vendor_supabase_js_2_110_0_revokeoauthgrant": "_revokeOAuthGrant()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_ri": "Ri()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, mi(), vi(), yi()] | lang=en
- "vendor_supabase_js_2_110_0_rr": "rr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), Q(), toJSON()] | lang=en
- "vendor_supabase_js_2_110_0_serialize": "serialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, appendParams(), join(), push()] | lang=en
- "vendor_supabase_js_2_110_0_setauth": "setAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _performAuth(), _setAuthSafely()] | lang=en
- "vendor_supabase_js_2_110_0_si": "Si()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, ki(), bi(), tt()] | lang=en
- "vendor_supabase_js_2_110_0_sr": "sr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), Q(), toJSON()] | lang=en
- "vendor_supabase_js_2_110_0_tojson": "toJSON()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, rr(), sr(), S()] | lang=en
- "vendor_supabase_js_2_110_0_transportconnect": "transportConnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), connectWithFallback(), transport()] | lang=en
- "vendor_supabase_js_2_110_0_trigger": "trigger()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, leave(), joinRef(), onMessage()] | lang=en
- "vendor_supabase_js_2_110_0_triggerchanerror": "triggerChanError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatTimeout(), onConnClose(), onConnError()] | lang=en
- "vendor_supabase_js_2_110_0_u": "U()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, gt(), ts(), zn()] | lang=en
- "vendor_supabase_js_2_110_0_unenroll": "_unenroll()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_unlinkidentity": "unlinkIdentity()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_unsubscribe": "unsubscribe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, removeChannel(), leave(), _updatePostgresBindings()] | lang=en
- "vendor_supabase_js_2_110_0_updatefiltermessage": "_updateFilterMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, on(), subscribe(), updateFilterBindings()] | lang=en
- "vendor_supabase_js_2_110_0_updatepostgresbindings": "_updatePostgresBindings()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isFilterValueEqual(), push(), unsubscribe()] | lang=en
- "vendor_supabase_js_2_110_0_updateuserbyid": "updateUserById()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), m(), y()] | lang=en
- "vendor_supabase_js_2_110_0_uploadorupdate": "uploadOrUpdate()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, update(), upload(), handleOperation()] | lang=en
- "vendor_supabase_js_2_110_0_uploadtosignedurl": "uploadToSignedUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _getFinalPath(), handleOperation(), _removeEmptyFolders()] | lang=en
- "vendor_supabase_js_2_110_0_xn": "Xn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, log(), request(), then()] | lang=en
- "vendor_supabase_js_2_110_0_yi": "yi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Ri(), fi(), gi()] | lang=en
- "app_bootapp": "bootApp()" | kind=code-symbol | source=app.js:L1452 | neighbors=[app.js, renderComingSoon(), switchSection()] | lang=en
- "app_handlescroll": "handleScroll()" | kind=code-symbol | source=app.js:L406 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "app_initbottomnav": "initBottomNav()" | kind=code-symbol | source=app.js:L421 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "app_initchapterpage": "initChapterPage()" | kind=code-symbol | source=app.js:L137 | neighbors=[app.js, initBatteryIndicator(), recordLastVisited()] | lang=en
- "app_initfooterawarenav": "initFooterAwareNav()" | kind=code-symbol | source=app.js:L428 | neighbors=[app.js, setMainContent(), switchSection()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0245fabcf0c44243e22efc59abc50b6787cfa680": "0245fab update: refresh PWA icons and favicon from new source image" | kind=Commit | source=git | neighbors=[main, 411adfd update: refresh PWA icons from …, 6c55b58 fix: sync section-header & cont…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@046577457e52193415e80f6327b6799d0722cf51": "0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + …" | kind=Commit | source=git | neighbors=[main, 39cc6bb fix: remove extra '})' causing …, 7c988c0 chore: commit graphify auto-upd…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@04af7e8a04b95def18cba3521ef83cb3d46d09bf": "04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, sy…" | kind=Commit | source=git | neighbors=[main, 7f26548 fix: UTF-8 mojibake across exam…, a4df22b fix: resolve CI lint failure an…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@074617fb80abc2dfd95727de3b786f490098ea7e": "074617f feat: update chapter files with SEO and accessibility improvements" | kind=Commit | source=git | neighbors=[main, c6c0a5c chore: update core app - servic…, d641fa0 feat: improve SEO, Open Graph m…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@18fb7dc6b575d168d26a094106448fc9450c7ce1": "18fb7dc Added ├── .well-known/" | kind=Commit | source=git | neighbors=[main, d546791 feat: add screenshots, orientat…, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1ca0f6508d8af6649a9677b9f8c06b5735eced0d": "1ca0f65 Ship the High priority list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[main, d7008b7 Add the actual content changes …, 94235c6 Ship the critical hardening lis…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@213cb39f0d6e9525ba772b3c13089eed29d72086": "213cb39 NEW CHAPTERS ADDED V 4.0.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, edb1e1d Version 4.0.1, 98be90d Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@24d03450954f61f2a9c9ddc507ddcac3342d7716": "24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr)" | kind=Commit | source=git | neighbors=[main, 7c988c0 chore: commit graphify auto-upd…, 4561a63 fix: correct SUPABASE_URL typo …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@39cc6bba95ea026c09c42c0f51d4637430307b0a": "39cc6bb fix: remove extra '})' causing syntax error in login.html" | kind=Commit | source=git | neighbors=[0465774 feat: Google Identity Services …, main, bae7406 chore: graphify auto-update, EC…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@40d423a44d417ace48a649708990f8a719c1eb22": "40d423a Remove unused admin/login/signup pages" | kind=Commit | source=git | neighbors=[main, 5b988aa Create .nojekyll, fefe4cd chore: bump SW to v2.2 for init…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@411adfde74e797e1ca7a7b580827cd87c17075b6": "411adfd update: refresh PWA icons from updated source image" | kind=Commit | source=git | neighbors=[0245fab update: refresh PWA icons and f…, main, 86a3d5c update PWA icons] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-021.json

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
