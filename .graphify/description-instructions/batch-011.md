# Node Description Batch 12 of 62

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

- "vendor_supabase_js_2_110_0_subscribe": "subscribe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), isClosed(), isConnected(), join(), receive()] | lang=en
- "vendor_supabase_js_2_110_0_te": "Te()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTable(), dropTable(), listTables(), loadTable(), tableExists()] | lang=en
- "vendor_supabase_js_2_110_0_then": "then()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, constructor(), fetchRequest(), _register(), signInWithEthereum(), catch()] | lang=en
- "vendor_supabase_js_2_110_0_verifypasskeyauthentication": "_verifyPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _notifyAllSubscribers(), _returnResult()] | lang=en
- "admin_delete_user_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-delete-user/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…] | lang=en
- "admin_list_users_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-list-users/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…] | lang=en
- "admin_update_role_index": "index.ts" | kind=code-symbol | source=supabase/functions/admin-update-role/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireAdmin(), 7c821ae Merge pull request #14 Admin da…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0673752ad75866bec4eec8512f863e809ab73873": "0673752 PR #67 Homepage Redesigned ✨" | kind=Commit | source=git | neighbors=[main, 582a9d8 Chapter 3 rewrite  ✅, precache-manifest.js, home.spec.js, homepage-search.spec.js, 437e8d4 Merge pull request #66  ECG] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@106f20048776f64596d2902d09a49e2e52eaf92c": "106f200 Add MCI exam page with final exam and generated practice bank" | kind=Commit | source=git | neighbors=[main, e98b15c Merge PR #36 MCI Course, build.py, precache-manifest.js, _check_exam_flow.spec.js, mci-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@20ed56a79d717b7e6d4c98d22a80a4a52f99878c": "20ed56a Integrate PEPP reviewer into platform, add Playwright coverage" | kind=Commit | source=git | neighbors=[main, 79e6410 Scaffold Medical reviewer (cour…, precache-manifest.js, build_precache.py, generate_sitemap.py, pepp-reviewer.spec.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@20fdfa2b700d60481bd2fc535e7bde91a55fa0b1": "20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and …" | kind=Commit | source=git | neighbors=[app.js, main, 1fc629e fix(app.js): handle DOMContentL…, build_courses.py, generate_all_itls_data.py, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3a000d0e58f2c386151985770f31fb45caff9822": "3a000d0 Integrate Medical reviewer into platform, add Playwright coverage" | kind=Commit | source=git | neighbors=[main, 877d856 Medical-bdls-empact-pepp-review…, precache-manifest.js, build_precache.py, generate_sitemap.py, medical-reviewer.spec.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@6018c486290643178ef98d49670eebe488de10df": "6018c48 PR #57 MCI Exam 1" | kind=Commit | source=git | neighbors=[5cfcb95 PR #55 fix Home ring, main, 94cae40 Courses page: stop filter-chip …, e713100 PR #58 Courses page layout fix, precache-manifest.js, mci-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6026b7a9c97039ae6f109e0d6de20c9543a47f7c": "6026b7a Redesign the home page: courses and exams first, quick tools, chapter g…" | kind=Commit | source=git | neighbors=[437e8d4 Merge pull request #66  ECG, main, 0673752 PR #67 Homepage Redesigned ✨, bd1c53b Thinner greeting card; key, too…, precache-manifest.js, home.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@639f5a4ef4f52c1fdca5c69417fcc52802929827": "639f5a4 PR #39 medications-cleanup-xnuh0i" | kind=Commit | source=git | neighbors=[1bd0a15 PR #38 medications-cleanup-xnuh…, app.js, main, 70e6861 Redesign Medication Index for m…, 8fa52dc  PR #40 Redesign Medication Ind…, precache-manifest.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@80805769d56ab15f1b5de308cf5744af5ab6ef81": "8080576 PR #30, Redesign drug monograph pages and wire the formulary into Chapt…" | kind=Commit | source=git | neighbors=[main, f73818b Adding respiratory patterns, curriculum-index.js, formulary.js, precache-manifest.js, be729fd Merge pull request #29 from res…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@817a4bf03d2a73456df2cdecc65ce024ca5a18bc": "817a4bf Merge pull request #23 Fixed: reflected XSS" | kind=Commit | source=git | neighbors=[main, 154f42d Merge pull request #25 BLS revi…, f3382e1 Add agentic implementation plan…, precache-manifest.js, med-index-xss.spec.js, 81d920a Fix reflected XSS in med-index.…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@95f63633aba5ff9266a8145d45782fa66083ef6b": "95f6363 Merge pull request #10 from SolimanAnas/claude/chapters-html-summary-fi…" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, acb0328 About ✅ Merge pull request #11 …, server.py, sw.js, test_api.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@98557d8f2f10ce30a41dfbccf300f412c7b40860": "98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5" | kind=Commit | source=git | neighbors=[4663aec fix: Resolve unused variable an…, main, 92652ca feat: Update search placeholder…, c2.js, c3.js, c4.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4df22b3015e72e7b31ed3d38a6ed3201412ac4f": "a4df22b fix: resolve CI lint failure and remove orphaned files" | kind=Commit | source=git | neighbors=[main, 04af7e8 fix: correct UTF-8 mojibake in …, build.py, build_courses.py, generate_all_itls_data.py, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a8c0f4070c0c42ce99cfdc01a9837463ee193856": "a8c0f40 PR #59 MCI UI update" | kind=Commit | source=git | neighbors=[main, 2e4d5a6 MCI: Officer roles with two-row…, 81f95d0 ⭐PR #60 Unified Course Design s…, precache-manifest.js, mci-reviewer.spec.js, d72ee1e MCI: new course home and exam s…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@aed54cba6f6b669811fb513fa2e3bf070542dc1c": "aed54cb PR #48 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[6a16b91 Add ACLS Megacode simulator wit…, 7b23e68 PR #47 Update Question bank, main, 700555c #49_2 acls-megacode-scenarios, cb54779 Megacode: add Quick Code lite m…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b2fa6465c0c79fa2a654cbef90b1ff4b7858db5e": "b2fa646 Formulary group A: cardiac and resuscitation drugs as guides" | kind=Commit | source=git | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, main, 5f4c3e6 Formulary group A: cardiac & re…, formulary.js, precache-manifest.js, content-guides.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bb5130804dd42ccbe4464b66778492692e8e1664": "bb51308 Merge pull request #19  Exam themes fix ✅" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, 5d2d46f Fix WCAG AA contrast failure in…, main, 2ab1c09 Fix invisible Show Hint/confide…, 9b12c84 Merge pull request #20, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd7b1a92049634d6568c39d6c949ed847ca7c5a9": "bd7b1a9 Completing ACLS Course Reviewer" | kind=Commit | source=git | neighbors=[2e859ad Adding PALS Course, build.py, main, 521060d BLS , ACLS, PALS added ✅, bundle.js, precache-manifest.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@c8b8f6e5cd3be8c45bfd0b2c38384fac2098eba2": "c8b8f6e PR #52 Improved UI/UX of Courses page" | kind=Commit | source=git | neighbors=[62386af PR #51 Megacode 3, main, 66b6296 Home: add a NEW corner ribbon t…, 7605a9f PR #53 New ribbon to the MEGACO…, precache-manifest.js, courses-page.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d01251f918b6992b204ae001307edda2c939de14": "d01251f Formulary group D (fluids, glucose, antidotes, obstetric) and overview …" | kind=Commit | source=git | neighbors=[6bb10e4 Formulary group D: fluids, gluc…, 8ac7ca0 Formulary group C: sedation, se…, main, d35441e Add google-flow workspace and s…, formulary.js, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d35441ed2d251619eabaacf3f89d863b2d49a33b": "d35441e Add google-flow workspace and sync with remote" | kind=Commit | source=git | neighbors=[d01251f Formulary group D (fluids, gluc…, main, generate-batches.js, run-all.mjs, run-batch.mjs, sheet.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d7008b72d98ca2d1546e02189de5ec4ebfc00781": "d7008b7 Add the actual content changes for the High priority list" | kind=Commit | source=git | neighbors=[1ca0f65 Ship the High priority list fro…, main, d7918ff fix: commit package-lock.json —…, playwright.config.js, precache-manifest.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d708b15dd627b1b9bedd75d6b4a682baa612759e": "d708b15 Ship the UI/UX Improvements section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[7c821ae Merge pull request #14 Admin da…, app.js, main, 83a1ea8 Ship the Offline & PWA section …, render-state.js, theme.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ef31570c6f99e0b82b1cfbacb427c699ef60b82e": "ef31570 Fix offline precache gap, add content governance + validation, add clin…" | kind=Commit | source=git | neighbors=[main, 503d0e1 Fix 36 single-option questions …, precache-manifest.js, build_precache.py, validate_content.py, offline.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff03b3dffddee4bc2eea6bc861d0bc57d10c2bc4": "ff03b3d Formulary group B: respiratory and allergy drugs as guides" | kind=Commit | source=git | neighbors=[5f4c3e6 Formulary group A: cardiac & re…, main, 8f65c40 Formulary group C: sedation, se…, 992b393 Drug Formulary group B: respira…, formulary.js, precache-manifest.js] | lang=en
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[5e168b5 Chapter 7 Update : Special Popu…, d6c133e Rewrite chapter 7 (Special Popu…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, fb463cf Rewrite chapter 8 (Environmenta…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "prometric_exam_examengine_renderquestion": ".renderQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L518 | neighbors=[ExamEngine, .goToQuestion(), .navigate(), .nextOrEnd(), .updateNavigator(), .retryIncorrect()] | lang=en
- "prometric_exam_examengine_retryincorrect": ".retryIncorrect()" | kind=code-symbol | source=src/prometric/exam.js:L991 | neighbors=[ExamEngine, .buildNavigator(), .removeTouchListeners(), .renderQuestion(), .showScreen(), .shuffleArray()] | lang=en
- "scripts_audio_lp": "lp()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L80 | neighbors=[audio.py, app_sound(), impact(), main(), reverb(), score()] | lang=en
- "scripts_audio_tl": "tl()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L27 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), main(), score()] | lang=en
- "scripts_check_contrast": "check_contrast.py" | kind=code-symbol | source=scripts/check_contrast.py:L1 | neighbors=[5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…, contrast(), hex_to_rgb(), luminance(), main()] | lang=en
- "scripts_compose_src_index": "src_index()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L273 | neighbors=[compose.py, app_events(), debrief_card(), render_full(), render_macro(), render_open()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-011.json

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
