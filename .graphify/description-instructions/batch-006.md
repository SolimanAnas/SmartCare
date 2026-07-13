# Node Description Batch 7 of 49

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

- "commit:repo:github.com/SolimanAnas/SmartCare@b2ca502caa44f9dbaf9822b1f3191000e25e3bdb": "b2ca502 fix(ci): quote DATABASE_URL to fix YAML parse error breaking all CI runs" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b359745fe2b4a73aad800a2e1962adfa0612117e": "b359745 Update courses.html" | kind=Commit | source=git | neighbors=[05bf1a8 Update courses.html 👍, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b44accfc766d84823ef45a62ccd67464631af679": "b44accf Update c7-3.js" | kind=Commit | source=git | neighbors=[395d37d Update ems-tools.html ▶️, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b5d9b211af8a7ad8046add3d9ab5ac026e9a06ce": "b5d9b21 Add files via upload" | kind=Commit | source=git | neighbors=[3d93108 Delete server.py, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bb6bd377b1c633710c1edcc615c57e6c1f9689c9": "bb6bd37 Add files via upload" | kind=Commit | source=git | neighbors=[9beafed Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bcaf88153e9558b0ac7da4877852b0626fe8c624": "bcaf881  Updated the exam engine" | kind=Commit | source=git | neighbors=[7dfcee8 Updated the exam engine ❤️✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c388c6c2f415eb41f6687916f89b997de5c6d4cc": "c388c6c fix(ci): add eslint override for playwright.config.js ESM syntax" | kind=Commit | source=git | neighbors=[bd49bc7 feat: shuffle pool, prioritize …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c56c024aa986dbc09285b5d2fd159b57fc49dec5": "c56c024 Drug formulary fully added💊✅" | kind=Commit | source=git | neighbors=[6c6b19b Drug formulary fully added ✅💊, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c6aaaefa1b57da3a04e273606b5d5bae7b24c1f5": "c6aaaef Add Secure SDLC compliance plan (upgrades.md) and requirements spec" | kind=Commit | source=git | neighbors=[46e3cd1 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cb58bc205ba56eaf64db8a086650f6daae9f8d6e": "cb58bc2 Update styles.css ✅" | kind=Commit | source=git | neighbors=[0588b95 Update styles.css ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ccc4d612acc667a6929e52daac7c8146e734f236": "ccc4d61 fix 404.html: absolute /CPG-2025/ paths for all links and assets" | kind=Commit | source=git | neighbors=[5dada8e replace exams.html with exam.ht…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ccc75ec687874fd4a7898c876323bfc0db8ad0a8": "ccc75ec Update index-new.html" | kind=Commit | source=git | neighbors=[b359745 Update courses.html, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cf5ea7431e68771353687366e1d4b887a1649a54": "cf5ea74 adding pdf sections ❤️✅📖" | kind=Commit | source=git | neighbors=[6bae1b4 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d3a004c628a16734e1ad04ac0b8d3eb268df9233": "d3a004c New Layout" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@d5a3fed4158b506c78077eb654705b976b7622a7": "d5a3fed deps(deps): bump google-auth from 2.35.0 to 2.53.0 (#4)" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d6168072becb6000b7e3682b3f162f876a8f3585": "d616807 👍" | kind=Commit | source=git | neighbors=[54ba860 👍, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d628270fc050cc0d535062981c24a8d39ff0b098": "d628270 pdf" | kind=Commit | source=git | neighbors=[a21609c pdf 📖✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d731275720913c3d1dac0942d34218d0b4568c69": "d731275 Update ecg.html" | kind=Commit | source=git | neighbors=[6bf75a2 Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d886b0d9bbdf115d783f46276e3e5f121ec15fc1": "d886b0d CI pipeline" | kind=Commit | source=git | neighbors=[676c33f CI pipeline, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dac3401633bdcda30a3219aeb826af02e94ed564": "dac3401 Refactor styles and improve theme toggle functionality" | kind=Commit | source=git | neighbors=[8139059 Update exam and study mode hint…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e0dd133c85efd84ca03e8e0bc547b60fe524a12a": "e0dd133 deps(deps): bump gunicorn from 23.0.0 to 26.0.0 (#5)" | kind=Commit | source=git | neighbors=[1312361 deps(deps): bump flask-limiter …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e4109df7f3dc3e26a2ad817d0016d3b3dafd532d": "e4109df Answers Corrected ✅" | kind=Commit | source=git | neighbors=[7e4b129 Answers Corrected ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@eb466fe718cfbaefe6a8485dc7c1cc1ffb17de12": "eb466fe Add files via upload" | kind=Commit | source=git | neighbors=[1571a9d Assessment  Added ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ede51d4168cfa534de261fd07c0fcb3e924b36cd": "ede51d4 Added more tools 👍" | kind=Commit | source=git | neighbors=[2455787 Update index.html 💊, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f224adf3f24054c6581fc51f14ea191cd28f3d66": "f224adf Secure SDLC Phase 3 cont.: CODEOWNERS, Dependabot, HLD/LLD, updated sta…" | kind=Commit | source=git | neighbors=[65d9e73 Secure SDLC Phase 3: mandatory …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f3fe308e82bf6b500275494c63e8b12e4cb47f97": "f3fe308 👍" | kind=Commit | source=git | neighbors=[d616807 👍, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fba5606c24443fb60956c3fa267b6d4405963b64": "fba5606 Update drug-calculator.html" | kind=Commit | source=git | neighbors=[7356ef5 Update ems-tools.html, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fe7449d2732faaa3abcba42fc0b71cec6ce5f59d": "fe7449d docs: Update curriculum content databases and medical-review summary" | kind=Commit | source=git | neighbors=[d00c567 feat: Remove Scope of Practice …, main, 20fdfa2 feat(itls): complete itls revie…, c1.js, c10.js, c4.js] | lang=en
- "content_c2": "c2.js" | kind=code-symbol | source=content/c2.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 59a9f95 toc: implement prehospital (EMT…, 77d4355 Merge pull request #21 from Sol…, 8a6ee0b Fix invisible table borders and…] | lang=en
- "scripts_split_content": "split_content.js" | kind=code-symbol | source=scripts/split_content.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …, CHAPTER_IDS, CONTENT_DIR, fs, loadChapterData()] | lang=en
- "vendor_chart_4_5_1_umd_min_so": "So" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .configure(), .constructor(), .determineDataLimits(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getuserbounds": ".getUserBounds()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.handleTickRangeOptions(), determineDataLimits(), .determineDataLimits(), .getMinMax(), pt(), .handleTickRangeOptions()] | lang=en
- "vendor_supabase_js_2_110_0_challenge": "_challenge()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), createNewAbortSignal(), ei(), getUser(), ir()] | lang=en
- "vendor_supabase_js_2_110_0_from": "from()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, binaryEncode(), _encodeUserBroadcastPush(), fn(), in(), Mn()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithpasskey": "signInWithPasskey()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, createNewAbortSignal(), ir(), L(), _returnResult(), sr()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0b92e146be6cc500460dd1590a52cafb1192bf53": "0b92e14 Create ems-tools.html ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@20dc3734df2f7ab34c4b67d7ba0a0c11f81f5cbf": "20dc373 Update ecg.html ❤️" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@26a1bc43ffa0ebc9412c5c8d9e615630a0b155a3": "26a1bc4 Adding O2 Cylinder Calculator ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@2e2f6056018760b1aee2b055cd6b8f3884af63ed": "2e2f605 Ship the Security section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[app.js, main, 5f7c4f2 Merge pull request #12 Step 1&2…, exam.js, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e859ad198c315bd6eba15414659842980235039": "2e859ad Adding PALS Course" | kind=Commit | source=git | neighbors=[main, bd7b1a9 Completing ACLS Course Reviewer, bundle.js, build.py, precache-manifest.js, build_precache.py] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-006.json

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
