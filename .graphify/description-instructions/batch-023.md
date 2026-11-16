# Node Description Batch 24 of 63

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
- "app_rendercomingsoon": "renderComingSoon()" | kind=code-symbol | source=app.js:L269 | neighbors=[app.js, bootApp(), setMainContent(), updateHeader()] | lang=en
- "bdls_build": "build.py" | kind=code-symbol | source=courses/bdls/build.py:L1 | neighbors=[load(), main(), 2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…] | lang=en
- "bls_build": "build.py" | kind=code-symbol | source=courses/bls/build.py:L1 | neighbors=[load(), main(), 154f42d Merge pull request #25 BLS revi…, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@006f9af1ad1a1bbcd287dc250a76824c22388f19": "006f9af Update requirements.txt" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, e8be921 Remove leading slash from login…, bfe43fb Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@061bcaea764dbcdde05eff0ec5f6d1311114d9bc": "061bcae local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9d96839 Added Login pages, 236ac26 local hashed authentication (SH…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07ec89d204627921b78d499e08f2571bcbc9bee2": "07ec89d Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c9f0400 Update index.html, 9ed5dd4 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0801c559b31cf09ddc0994cae7077465833ac82b": "0801c55 Update styles.css" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 508e087 Update index.html, 730ad49 BLS] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0bbed6c153b013931006f3ed902dee715872e222": "0bbed6c Make exam hint and explanation labels readable in every theme" | kind=Commit | source=git | neighbors=[main, ac21f18 Add Google Play / Add to Home S…, precache-manifest.js, 1aa1e5e Add hints and explanations to e…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1aa1e5e3527f22010e771d8e5afd63179f645507": "1aa1e5e Add hints and explanations to every BDLS pre-test question" | kind=Commit | source=git | neighbors=[main, 0bbed6c Make exam hint and explanation …, precache-manifest.js, c84b797 Question Bank Updated ✅✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fc629ed8067812d2115ce0199634b321a6a231d": "1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically inj…" | kind=Commit | source=git | neighbors=[app.js, main, c9276ae chore: update graphify knowledg…, 20fdfa2 feat(itls): complete itls revie…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@260450d8c1d079ba61118cd2926cd95eb99cf98d": "260450d Prometric question 721: protect the airway first, glucose second" | kind=Commit | source=git | neighbors=[main, 70f6354 Add 92 Disaster questions to th…, precache-manifest.js, 828970b Prometric Question Bank Updated…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@30733863a7d00ae86a2ada463d90a25c6ef25149": "3073386 Update login.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 35a1e71 Update login.html, a9eb59e Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@349d35ae67680ca2ad186a9ca1811b9454fd3c2a": "349d35a Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 3f5e261 Revise README to enhance projec…, afa5eb0 Add files via upload] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@35a1e71c5c2ffd02e382b436b2f7eee1be57d954": "35a1e71 Update login.html" | kind=Commit | source=git | neighbors=[3073386 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, c75db55 Update index.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@3ecc147b35eb3e6948ba67c859c489066222418c": "3ecc147 Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9ed5dd4 Update index.html, c75db55 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f5e26121b7d69f098e5dd4d1204d495c1eca664": "3f5e261 Revise README to enhance project documentation" | kind=Commit | source=git | neighbors=[349d35a Add files via upload, feat/lucide-svg-migration, fix/lucide-quote-consistency, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4c061e24475cfa92eb897994046ddb867729df45": "4c061e2 Fix the explanation and hint for Prometric question 55" | kind=Commit | source=git | neighbors=[main, 4736092 Clean up the Prometric question…, precache-manifest.js, 4fc5e35 Sync Prometric progress, follow…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fb7ba040a790e01ce1b9ce07446c7ffd4603b53": "4fb7ba0 Fix formatting in README for Live Demo link" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a9eb59e Update README.md, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508e08701627fbfd39a37fe6c0f5ff394ac4e414": "508e087 Update index.html" | kind=Commit | source=git | neighbors=[0801c55 Update styles.css, feat/lucide-svg-migration, fix/lucide-quote-consistency, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d23c19f55908df5132630da585963ba2940e065": "5d23c19 fix: improve heading and index-count visibility in dark/amoled themes" | kind=Commit | source=git | neighbors=[main, 65ac830 feat: restructure Chapter 1 — m…, c-index.js, 5dddc2f feat: update ECG-study.html foo…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@668149a45ae5b9ebb527f2f7c89a48b2016e2620": "668149a Log in & sign up 👍" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bfe43fb Update requirements.txt, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@680d70693d693c7dbadddb4ecbac5fbc6e194561": "680d706 Browslow tape" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 730ad49 BLS, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69889e8c8c739569db5fa221249f0c802ce0d30c": "69889e8 Delete chapters/c3.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 680d706 Browslow tape, edb1e1d Version 4.0.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6a7c398ed7d998ca34de34685aa4472dfab3d834": "6a7c398 Update login page subhead and button width" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bc75ac8 Update email placeholder in log…, d183462 Fix redirect URL for login page] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c92d359fc8fd1206ca0ac8fc460ac4c1aff937c": "6c92d35 Give the exam header room on phones" | kind=Commit | source=git | neighbors=[main, 271b08b Exams: Finish/Submit 🏁, precache-manifest.js, afd9a67 Merge remote-tracking branch 'o…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@707c0339a55de4be93f4915021d977cdaa023b8e": "707c033 Major Updates ✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 236ac26 local hashed authentication (SH…, b042359 Reduced image SIZE ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70a3f4da8cfd80498ebe52b7e562ef977cffc974": "70a3f4d Clean up about.html copy and relocate MIT license to privacy.html" | kind=Commit | source=git | neighbors=[main, acb0328 About ✅ Merge pull request #11 …, sw.js, ee41524 fix: wrap long line in test_adm…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-023.json

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
