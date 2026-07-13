# Node Description Batch 4 of 49

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

- "vendor_supabase_js_2_110_0_connect": "connect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _handleNodeJsRaceCondition(), isConnected(), isConnecting(), isDisconnecting()]
- "vendor_supabase_js_2_110_0_l": "L()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deletePasskey(), _listPasskeys(), registerPasskey()]
- "commit:repo:github.com/SolimanAnas/SmartCare@0277cd528b810324f3641c4fe6e1c1d68d55411f": "0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aest…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@0ac5f99358c3f93109576216ff93f6f2f30fba98": "0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS f…" | kind=Commit | source=git | neighbors=[0277cd5 feat(ui): redesign prometric pa…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@0e6242c2c1d329897a7e19a444029cce13c3abf7": "0e6242c Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@1eee11b7334ff1e088cf071c8f48f2ecb735ece1": "1eee11b create exam-2.html — redesigned exam page using CPG-2025 style" | kind=Commit | source=git | neighbors=[093fcc2 fix(ui): remove auto-advance, s…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@266c2ed570387416999830d96487f11d2830d266": "266c2ed Add server.py and server.bat to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@26ac1b00eb98e145aa83b91cf1b197816c78b3ea": "26ac1b0 new index with pdf" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@28f8e2f6779bb201ccb4b92f7ee2449f1cd256fc": "28f8e2f docs: add Secure SDLC validation reports from security review" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@354c93e156c8d4542484d91a39703a494bfa6455": "354c93e fix: restore server.py to repo (CI needs it for tests and Bandit)" | kind=Commit | source=git | neighbors=[266c2ed Add server.py and server.bat to…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@3d93108d2b7a6c57d72c49b002b0e0712e5f26dd": "3d93108 Delete server.py" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@46e3cd18d996a13eac5c05f88d8664e9c2dc8f00": "46e3cd1 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@557325c525978b1ee3c395cdb41c34b2e9fa1000": "557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as s…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@5b49a0fb9fab9a3ad27becbe0764b8403a39f08b": "5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for …" | kind=Commit | source=git | neighbors=[2f06b84 fix text contrast: bump text-se…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@5dada8ede88ace10f37589dd1aef6e1a89def489": "5dada8e replace exams.html with exam.html; update all references" | kind=Commit | source=git | neighbors=[1eee11b create exam-2.html — redesigned…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@5f7c4f281330866857f93fac3b12e6c961db87e5": "5f7c4f2 Merge pull request #12 Step 1&2 of V2 plan" | kind=Commit | source=git | neighbors=[2e2f605 Ship the Security section from …, app.js, main, 662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …, exam.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@6dced57d06aaec2218e8c845bef0b6d7c097c2b5": "6dced57 chore(ci): remove claude/** branch trigger from CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@7c821aed82020dcd71e48c31e7068945a05c8c8b": "7c821ae Merge pull request #14 Admin dashboard ✅" | kind=Commit | source=git | neighbors=[index.ts, index.ts, index.ts, main, d1b235f Merge pull request #15 Offline …, d708b15 Ship the UI/UX Improvements sec…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8bcf3b43612588c4702a142f1ffdedb292352304": "8bcf3b4 updated the index with drug formulary 💊✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@99f095bb1bd3a484b8ea01fe604e4134e977e584": "99f095b fix: resolve mixed SVG quote mismatches in 3 content JS files" | kind=Commit | source=git | neighbors=[39ba202 fix: restore encoding and apply…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@9beafed833955099764549ba0194caf10a351273": "9beafed Add files via upload" | kind=Commit | source=git | neighbors=[0e6242c Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@b7eceb5f731a62f737aebda9472b6fe561be1959": "b7eceb5 Delete server.py" | kind=Commit | source=git | neighbors=[3f23517 Delete instance/users.db, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@bd49bc7e641b6005687f299826864a5a6d5d1578": "bd49bc7 feat: shuffle pool, prioritize unseen questions, show available count" | kind=Commit | source=git | neighbors=[a6cda1e fix(ui): hide kbd-hint on mobil…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@c5d90aabbe122211d0a696b25fd99efc6f42c0ab": "c5d90aa Updated the exam engine" | kind=Commit | source=git | neighbors=[7e5c153 Updated the exam engine ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@c72292fa1ec0759c13f3423902a4493d87a9f0bf": "c72292f Merge branch 'main' into ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@cc66485854a2a64618c79eec19ce634274d37b81": "cc66485 Update sw.js" | kind=Commit | source=git | neighbors=[959f4cd Create courses.html 🚑, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@ded2017d33b0dca77eb14fbca9f14b016b0c6c8f": "ded2017 Update sw.js" | kind=Commit | source=git | neighbors=[cc66485 Update sw.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "data_bundle": "bundle.js" | kind=code-symbol | source=courses/pals/data/bundle.js:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 1a00316 feat(itls): restructure itls co…, 2e859ad Adding PALS Course, 33c9dd7 Author BLS chapters c04-c06 (2-…, 521060d BLS , ACLS, PALS added ✅, 6477974 BLS illustrations ✅]
- "tests_prometric_spec": "prometric.spec.js" | kind=code-symbol | source=tests/prometric.spec.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 093fcc2 fix(ui): remove auto-advance, s…, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 5dada8e replace exams.html with exam.ht…, 5f461d4 feat(ui): mobile-friendly respo…]
- "tests_test_api_testregister": "TestRegister" | kind=code-symbol | source=tests/test_api.py:L31 | neighbors=[test_api.py, .test_common_password_blocked(), .test_invalid_email_rejected(), .test_invalid_professional_level_reject…, .test_password_no_digit(), .test_password_no_lowercase()]
- "vendor_chart_4_5_1_umd_min_sn_each": "._each()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, .add(), .addControllers(), .addElements(), .addPlugins(), .addScales()]
- "vendor_chart_4_5_1_umd_min_wa_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, ki(), n(), Si(), Ta(), ._createItems()]
- "vendor_supabase_js_2_110_0_callrefreshtoken": "_callRefreshToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), Kt(), _notifyAllSubscribers(), _refreshAccessToken(), _removeSession()]
- "vendor_supabase_js_2_110_0_isconnected": "isConnected()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, canPush(), connect(), flushSendBuffer(), _handleNodeJsRaceCondition(), connectionState()]
- "vendor_supabase_js_2_110_0_on": "on()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), build(), isJoined(), isJoining(), log()]
- "vendor_supabase_js_2_110_0_recoverandrefresh": "_recoverAndRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, initialize(), _onVisibilityChanged(), bt(), _callRefreshToken(), _debug()]
- "vendor_supabase_js_2_110_0_signinwithsolana": "signInWithSolana()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, decode(), encode(), join(), m(), _notifyAllSubscribers()]
- "commit:repo:github.com/SolimanAnas/SmartCare@0275018a2a311d203486773a2d00f1991e1aa1c8": "0275018 layout fix 🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@03d0cadfaed45183a2e1a802c603b879d6d3ec02": "03d0cad Update ecg.html" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]
- "commit:repo:github.com/SolimanAnas/SmartCare@0588b953be3cd9290956d8ad72efa143890dec1b": "0588b95 Update styles.css ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-003.json

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
