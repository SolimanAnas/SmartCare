# Node Description Batch 17 of 49

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

- "vendor_supabase_js_2_110_0_ms": "ms()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, encode(), from(), join(), signInWithEthereum()] | lang=en
- "vendor_supabase_js_2_110_0_onconnerror": "onConnError()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), log(), triggerChanError(), triggerStateCallbacks()] | lang=en
- "vendor_supabase_js_2_110_0_ping": "ping()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, isConnected(), makeRef(), onMessage(), push()] | lang=en
- "vendor_supabase_js_2_110_0_reauthenticate": "reauthenticate()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_refreshaccesstoken": "_refreshAccessToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), _debug(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_refreshsession": "refreshSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_rejoin": "rejoin()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, join(), isLeaving(), leaveOpenTopic(), resend()] | lang=en
- "vendor_supabase_js_2_110_0_remove": "remove()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, handleOperation(), log(), off(), _schedulePendingDisconnect()] | lang=en
- "vendor_supabase_js_2_110_0_removevisibilitychangedcallback": "_removeVisibilityChangedCallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, dispose(), _debug(), _startAutoRefresh(), _stopAutoRefresh()] | lang=en
- "vendor_supabase_js_2_110_0_resetpasswordforemail": "resetPasswordForEmail()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), re(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_schedulependingdisconnect": "_schedulePendingDisconnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, remove(), _cancelPendingDisconnect(), disconnect(), log()] | lang=en
- "vendor_supabase_js_2_110_0_setauthsafely": "_setAuthSafely()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), catch(), _isManualToken(), setAuth()] | lang=en
- "vendor_supabase_js_2_110_0_setupconnectionhandlers": "_setupConnectionHandlers()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, connect(), onClose(), onMessage(), onOpen()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithotp": "signInWithOtp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), re(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithsso": "signInWithSSO()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), re(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startautorefresh": "_startAutoRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _onVisibilityChanged(), _debug(), _removeVisibilityChangedCallback(), _stopAutoRefresh()] | lang=en
- "vendor_supabase_js_2_110_0_triggerstatecallbacks": "triggerStateCallbacks()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, onConnClose(), onConnError(), onConnOpen(), log()] | lang=en
- "vendor_supabase_js_2_110_0_updatepasskey": "_updatePasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, L(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_updateuser": "updateUser()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_verify": "_verify()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _authenticate(), _challengeAndVerify(), _register(), _acquireLock()] | lang=en
- "vendor_supabase_js_2_110_0_ye": "Ye()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _getAuthenticatorAssuranceLevel(), getClaims(), setSession(), Wt()] | lang=en
- "app_rendercomingsoon": "renderComingSoon()" | kind=code-symbol | source=app.js:L250 | neighbors=[app.js, bootApp(), setMainContent(), updateHeader()] | lang=en
- "bls_build": "build.py" | kind=code-symbol | source=courses/bls/build.py:L1 | neighbors=[load(), main(), 154f42d Merge pull request #25 BLS revi…, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@006f9af1ad1a1bbcd287dc250a76824c22388f19": "006f9af Update requirements.txt" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, e8be921 Remove leading slash from login…, bfe43fb Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@061bcaea764dbcdde05eff0ec5f6d1311114d9bc": "061bcae local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9d96839 Added Login pages, 236ac26 local hashed authentication (SH…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07ec89d204627921b78d499e08f2571bcbc9bee2": "07ec89d Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c9f0400 Update index.html, 9ed5dd4 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0801c559b31cf09ddc0994cae7077465833ac82b": "0801c55 Update styles.css" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 508e087 Update index.html, 730ad49 BLS] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fc629ed8067812d2115ce0199634b321a6a231d": "1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically inj…" | kind=Commit | source=git | neighbors=[app.js, main, c9276ae chore: update graphify knowledg…, 20fdfa2 feat(itls): complete itls revie…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@30733863a7d00ae86a2ada463d90a25c6ef25149": "3073386 Update login.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 35a1e71 Update login.html, a9eb59e Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@33c9dd7bb174acb9ced8ec3f37508895a6f4c4ac": "33c9dd7 Author BLS chapters c04-c06 (2-rescuer/teams, AED, ventilation)" | kind=Commit | source=git | neighbors=[main, f4356e0 Author BLS chapters c07-c09 (br…, bundle.js, 7c0b047 Author BLS chapters c02-c03 (as…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@349d35ae67680ca2ad186a9ca1811b9454fd3c2a": "349d35a Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 3f5e261 Revise README to enhance projec…, afa5eb0 Add files via upload] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@35a1e71c5c2ffd02e382b436b2f7eee1be57d954": "35a1e71 Update login.html" | kind=Commit | source=git | neighbors=[3073386 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, c75db55 Update index.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@3ecc147b35eb3e6948ba67c859c489066222418c": "3ecc147 Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9ed5dd4 Update index.html, c75db55 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f5e26121b7d69f098e5dd4d1204d495c1eca664": "3f5e261 Revise README to enhance project documentation" | kind=Commit | source=git | neighbors=[349d35a Add files via upload, feat/lucide-svg-migration, fix/lucide-quote-consistency, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fb7ba040a790e01ce1b9ce07446c7ffd4603b53": "4fb7ba0 Fix formatting in README for Live Demo link" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a9eb59e Update README.md, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@503d0e1699bdadb4f7175ecb92717550c1770eb6": "503d0e1 Fix 36 single-option questions across BLS, PEPP, and prometric banks" | kind=Commit | source=git | neighbors=[main, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js, ef31570 Fix offline precache gap, add c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508e08701627fbfd39a37fe6c0f5ff394ac4e414": "508e087 Update index.html" | kind=Commit | source=git | neighbors=[0801c55 Update styles.css, feat/lucide-svg-migration, fix/lucide-quote-consistency, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@521060d9852ec14d305937c0cc2041c59ef27d50": "521060d BLS , ACLS, PALS added ✅" | kind=Commit | source=git | neighbors=[main, d9844d1 Fix CI: break long line in gene…, bundle.js, bd7b1a9 Completing ACLS Course Reviewer] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d23c19f55908df5132630da585963ba2940e065": "5d23c19 fix: improve heading and index-count visibility in dark/amoled themes" | kind=Commit | source=git | neighbors=[main, 65ac830 feat: restructure Chapter 1 — m…, c-index.js, 5dddc2f feat: update ECG-study.html foo…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@680d70693d693c7dbadddb4ecbac5fbc6e194561": "680d706 Browslow tape" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 730ad49 BLS, 69889e8 Delete chapters/c3.html] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-016.json

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
