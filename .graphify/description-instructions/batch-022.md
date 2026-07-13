# Node Description Batch 23 of 49

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
- "acls_build": "build.py" | kind=code-symbol | source=courses/acls/build.py:L1 | neighbors=[load(), main(), bd7b1a9 Completing ACLS Course Reviewer] | lang=en
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
- "commit:repo:github.com/SolimanAnas/SmartCare@4389d53bda9ae06f02d07ca5f034c22dff5a839d": "4389d53 Improve drawer toggle panel identification on index.html" | kind=Commit | source=git | neighbors=[main, b1f4385 Bump service worker cache to v2…, 90c10bb Make hero greeting on index.htm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4561a63df1296ad06c0f1a7ab9a7034c72d30cd1": "4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co)" | kind=Commit | source=git | neighbors=[main, 24d0345 fix: correct SUPABASE_URL typo …, aa81a0c fix: set SUPABASE_URL in supaba…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@5b68bae00b78a61ac933c7fb7c18299e78178303": "5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit" | kind=Commit | source=git | neighbors=[main, eff053b Ship all six Critical Fixes fro…, acb0328 About ✅ Merge pull request #11 …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b988aa93af5c5e028873d87c0cbd12b0379784f": "5b988aa Create .nojekyll" | kind=Commit | source=git | neighbors=[40d423a Remove unused admin/login/signu…, main, 1a56d75 feat: graphify rebuild with des…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5dddc2fc156b7d7c32e9a543f909731384dafe25": "5dddc2f feat: update ECG-study.html footer to match index.html branding" | kind=Commit | source=git | neighbors=[main, 5d23c19 fix: improve heading and index-…, bae7406 chore: graphify auto-update, EC…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@60c17820d11ca70af36e0dffe44414c34a7b9672": "60c1782 chore: stop tracking TOC/ directory (now gitignored)" | kind=Commit | source=git | neighbors=[main, de0dcb2 feat: Add Open Graph metadata, …, 9b0bbbb content: deploy chapters 6-10 w…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6477974342f4903a0866c4e1eb4d05e398d97732": "6477974 BLS illustrations ✅" | kind=Commit | source=git | neighbors=[main, bundle.js, d9844d1 Fix CI: break long line in gene…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cd1ebdd38c3b3a718d12f11d183faaa761dfd6": "67cd1eb fix: update contact email and all URLs in privacy policy" | kind=Commit | source=git | neighbors=[main, 18fb7dc Added ├── .well-known/, d5777e9 feat: comprehensive privacy pol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c55b58a08f87310c2157a2ecec18a123b5f5594": "6c55b58 fix: sync section-header & continue-label colors with index.html sectio…" | kind=Commit | source=git | neighbors=[main, 0245fab update: refresh PWA icons and f…, ff409d5 fix: match section-header style…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c988c004c1065d2ba9e8065b9e0cdd475988565": "7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supaba…" | kind=Commit | source=git | neighbors=[24d0345 fix: correct SUPABASE_URL typo …, main, 0465774 feat: Google Identity Services …] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-022.json

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
