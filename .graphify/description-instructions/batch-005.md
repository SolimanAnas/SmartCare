# Node Description Batch 6 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@85f0dc5e9b198389d296aeb8006e43cc16e91555": "85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI" | kind=Commit | source=git | neighbors=[662adfb Ship the Performance section fr…, index.ts, index.ts, index.ts, guide-images, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8ac7ca0f3c856538cd265046c4962b786f691ccc": "8ac7ca0 Formulary group C: sedation, seizure, airway, pain & nausea drugs ✅" | kind=Commit | source=git | neighbors=[05afd15 Cap IV diazepam and midazolam s…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6bb10e4 Formulary group D: fluids, gluc…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8bcf3b43612588c4702a142f1ffdedb292352304": "8bcf3b4 updated the index with drug formulary 💊✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992b39336a8044fda9f948e9d23a75fd2a442501": "992b393 Drug Formulary group B: respiratory & allergy drugs ✅" | kind=Commit | source=git | neighbors=[5f4c3e6 Formulary group A: cardiac & re…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 3e50ecd Merge remote-tracking branch 'o…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@99f095bb1bd3a484b8ea01fe604e4134e977e584": "99f095b fix: resolve mixed SVG quote mismatches in 3 content JS files" | kind=Commit | source=git | neighbors=[39ba202 fix: restore encoding and apply…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9beafed833955099764549ba0194caf10a351273": "9beafed Add files via upload" | kind=Commit | source=git | neighbors=[0e6242c Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a7f8828c04f15180e4dcd979bb5380ef4325d412": "a7f8828 Chapter 6 update : Trauma Emergencies ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5e168b5 Chapter 7 Update : Special Popu…, d6c133e Rewrite chapter 7 (Special Popu…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b5294ba6eec453e98d1323e4e57fd8f97b43c483": "b5294ba PR #41 Redesign formulary overview card; fix card titles never revealing" | kind=Commit | source=git | neighbors=[8389b95 Redesign formulary overview car…, 8fa52dc  PR #40 Redesign Medication Ind…, app.js, ccr-b58d9c43-7az2tj, guide-images, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b7eceb5f731a62f737aebda9472b6fe561be1959": "b7eceb5 Delete server.py" | kind=Commit | source=git | neighbors=[3f23517 Delete instance/users.db, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd49bc7e641b6005687f299826864a5a6d5d1578": "bd49bc7 feat: shuffle pool, prioritize unseen questions, show available count" | kind=Commit | source=git | neighbors=[a6cda1e fix(ui): hide kbd-hint on mobil…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c5d90aabbe122211d0a696b25fd99efc6f42c0ab": "c5d90aa Updated the exam engine" | kind=Commit | source=git | neighbors=[7e5c153 Updated the exam engine ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c72292fa1ec0759c13f3423902a4493d87a9f0bf": "c72292f Merge branch 'main' into ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cae9224244ed50785b12091b7a642a9d56a702c1": "cae9224 Chapter 9 rewrite: Emergency Pharmacology ✅" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, 14bac52 Rewrite chapter 9 (Emergency Ph…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cc66485854a2a64618c79eec19ce634274d37b81": "cc66485 Update sw.js" | kind=Commit | source=git | neighbors=[959f4cd Create courses.html 🚑, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ded2017d33b0dca77eb14fbca9f14b016b0c6c8f": "ded2017 Update sw.js" | kind=Commit | source=git | neighbors=[cc66485 Update sw.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dfc25ad82adfbf65cff63cdec1bed0b0a862419f": "dfc25ad Merge pull request #83 from Hypertonic saline: separate hyponatraemic s…" | kind=Commit | source=git | neighbors=[500f1a7 Hypertonic saline: dose for mod…, d01251f Formulary group D (fluids, gluc…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ed28729ef8c6d7ca7b5f72131616750faddd8648": "ed28729 Chapter 2 rewrite: Patient Assessment ✅" | kind=Commit | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 7d4e283 Falling consciousness in respir…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "content_c4": "c4.js" | kind=code-symbol | source=content/c4.js:L1 | neighbors=[2ac796c Pulmonary edema gate: CPAP only…, 63e2100 Chapter 4 rewrite: Cardiovascul…, 6f6a46e Rewrite chapter 4 (Cardiovascul…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, 59a9f95 toc: implement prehospital (EMT…] | lang=en
- "tests_test_api_testregister": "TestRegister" | kind=code-symbol | source=tests/test_api.py:L31 | neighbors=[test_api.py, .test_common_password_blocked(), .test_invalid_email_rejected(), .test_invalid_professional_level_reject…, .test_password_no_digit(), .test_password_no_lowercase()] | lang=en
- "vendor_chart_4_5_1_umd_min_sn_each": "._each()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, .add(), .addControllers(), .addElements(), .addPlugins(), .addScales()] | lang=en
- "vendor_chart_4_5_1_umd_min_wa_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, ki(), n(), Si(), Ta(), ._createItems()] | lang=en
- "vendor_supabase_js_2_110_0_callrefreshtoken": "_callRefreshToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), Kt(), _notifyAllSubscribers(), _refreshAccessToken(), _removeSession()] | lang=en
- "vendor_supabase_js_2_110_0_isconnected": "isConnected()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, canPush(), connect(), flushSendBuffer(), _handleNodeJsRaceCondition(), connectionState()] | lang=en
- "vendor_supabase_js_2_110_0_on": "on()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), build(), isJoined(), isJoining(), log()] | lang=en
- "vendor_supabase_js_2_110_0_recoverandrefresh": "_recoverAndRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, initialize(), _onVisibilityChanged(), bt(), _callRefreshToken(), _debug()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithsolana": "signInWithSolana()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, decode(), encode(), join(), m(), _notifyAllSubscribers()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0275018a2a311d203486773a2d00f1991e1aa1c8": "0275018 layout fix 🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03d0cadfaed45183a2e1a802c603b879d6d3ec02": "03d0cad Update ecg.html" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0588b953be3cd9290956d8ad72efa143890dec1b": "0588b95 Update styles.css ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@059df1ba6a204ca8f88626bb10d274ad8e218394": "059df1b SOP updated 🔥✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05bf1a891fec8750d495833c18b6ba4d181690ff": "05bf1a8 Update courses.html 👍" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@0673752ad75866bec4eec8512f863e809ab73873": "0673752 PR #67 Homepage Redesigned ✨" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 582a9d8 Chapter 3 rewrite  ✅, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@095f95c88d1d8546f9490396fed3753d9add2491": "095f95c Update ecg.html" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0a261809777131229afe724574981fcd785ba76e": "0a26180 Update ecg-engine.js" | kind=Commit | source=git | neighbors=[095f95c Update ecg.html, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@106f20048776f64596d2902d09a49e2e52eaf92c": "106f200 Add MCI exam page with final exam and generated practice bank" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e98b15c Merge PR #36 MCI Course, build.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1312361be7217426b985e81599ca71121a1cd3af": "1312361 deps(deps): bump flask-limiter from 3.9.0 to 4.1.1 (#6)" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@13162ef816cc130a27aa5872a5624d36179c18e7": "13162ef Unified Style✅⭐" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1571a9df05c662fa8c333a95455af7dc1bf8b002": "1571a9d Assessment  Added ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@15cf55dcf1383e430a199006bdf1d080e85336cb": "15cf55d Update ecg-engine.js" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@176d26407954ee009039e3984b6b452adab4de71": "176d264 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-005.json

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
