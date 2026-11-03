# Node Description Batch 28 of 62

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

- "vendor_supabase_js_2_110_0_listoauthclients": "_listOAuthClients()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), toString(), y()]
- "vendor_supabase_js_2_110_0_listoauthgrants": "_listOAuthGrants()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_listusers": "listUsers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, m(), toString(), y()]
- "vendor_supabase_js_2_110_0_loadtable": "loadTable()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTableIfNotExists(), request(), Te()]
- "vendor_supabase_js_2_110_0_mn": "Mn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, from(), join(), re()]
- "vendor_supabase_js_2_110_0_off": "off()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, cancelRefEvent(), connectWithFallback(), remove()]
- "vendor_supabase_js_2_110_0_onauthstatechange": "onAuthStateChange()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _listenForAuthEvents(), _debug(), rs()]
- "vendor_supabase_js_2_110_0_pn": "pn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, gn(), fn(), Me()]
- "vendor_supabase_js_2_110_0_ps": "Ps()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, js(), Cs(), Pe()]
- "vendor_supabase_js_2_110_0_reconnectauth": "_reconnectAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), isConnected(), _waitForAuthIfNeeded()]
- "vendor_supabase_js_2_110_0_revokeoauthgrant": "_revokeOAuthGrant()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_ri": "Ri()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, mi(), vi(), yi()]
- "vendor_supabase_js_2_110_0_rr": "rr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), Q(), toJSON()]
- "vendor_supabase_js_2_110_0_serialize": "serialize()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, appendParams(), join(), push()]
- "vendor_supabase_js_2_110_0_setauth": "setAuth()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _performAuth(), _setAuthSafely()]
- "vendor_supabase_js_2_110_0_si": "Si()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, ki(), bi(), tt()]
- "vendor_supabase_js_2_110_0_sr": "sr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), Q(), toJSON()]
- "vendor_supabase_js_2_110_0_tojson": "toJSON()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, rr(), sr(), S()]
- "vendor_supabase_js_2_110_0_transportconnect": "transportConnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), connectWithFallback(), transport()]
- "vendor_supabase_js_2_110_0_trigger": "trigger()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, leave(), joinRef(), onMessage()]
- "vendor_supabase_js_2_110_0_triggerchanerror": "triggerChanError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatTimeout(), onConnClose(), onConnError()]
- "vendor_supabase_js_2_110_0_u": "U()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, gt(), ts(), zn()]
- "vendor_supabase_js_2_110_0_unenroll": "_unenroll()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_unlinkidentity": "unlinkIdentity()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _returnResult(), _useSession(), y()]
- "vendor_supabase_js_2_110_0_unsubscribe": "unsubscribe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, removeChannel(), leave(), _updatePostgresBindings()]
- "vendor_supabase_js_2_110_0_updatefiltermessage": "_updateFilterMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, on(), subscribe(), updateFilterBindings()]
- "vendor_supabase_js_2_110_0_updatepostgresbindings": "_updatePostgresBindings()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isFilterValueEqual(), push(), unsubscribe()]
- "vendor_supabase_js_2_110_0_updateuserbyid": "updateUserById()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, G(), m(), y()]
- "vendor_supabase_js_2_110_0_uploadorupdate": "uploadOrUpdate()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, update(), upload(), handleOperation()]
- "vendor_supabase_js_2_110_0_uploadtosignedurl": "uploadToSignedUrl()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, _getFinalPath(), handleOperation(), _removeEmptyFolders()]
- "vendor_supabase_js_2_110_0_xn": "Xn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, log(), request(), then()]
- "vendor_supabase_js_2_110_0_yi": "yi()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, Ri(), fi(), gi()]
- "acls_build": "build.py" | kind=code-symbol | source=courses/acls/build.py:L1 | neighbors=[load(), main(), bd7b1a9 Completing ACLS Course Reviewer]
- "app_bootapp": "bootApp()" | kind=code-symbol | source=app.js:L1455 | neighbors=[app.js, renderComingSoon(), switchSection()]
- "app_handlescroll": "handleScroll()" | kind=code-symbol | source=app.js:L425 | neighbors=[app.js, setMainContent(), switchSection()]
- "app_initbottomnav": "initBottomNav()" | kind=code-symbol | source=app.js:L440 | neighbors=[app.js, setMainContent(), switchSection()]
- "app_initchapterpage": "initChapterPage()" | kind=code-symbol | source=app.js:L137 | neighbors=[app.js, initBatteryIndicator(), recordLastVisited()]
- "app_initfooterawarenav": "initFooterAwareNav()" | kind=code-symbol | source=app.js:L447 | neighbors=[app.js, setMainContent(), switchSection()]
- "commit:repo:github.com/SolimanAnas/SmartCare@0245fabcf0c44243e22efc59abc50b6787cfa680": "0245fab update: refresh PWA icons and favicon from new source image" | kind=Commit | source=git | neighbors=[main, 411adfd update: refresh PWA icons from …, 6c55b58 fix: sync section-header & cont…]
- "commit:repo:github.com/SolimanAnas/SmartCare@046577457e52193415e80f6327b6799d0722cf51": "0465774 feat: Google Identity Services popup sign-in (shows SmartCare brand) + …" | kind=Commit | source=git | neighbors=[main, 39cc6bb fix: remove extra '})' causing …, 7c988c0 chore: commit graphify auto-upd…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-027.json

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
