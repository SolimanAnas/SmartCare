# Node Description Batch 16 of 63

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

- "vendor_supabase_js_2_110_0_connectwithfallback": "connectWithFallback()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), getSession(), off(), onError(), onOpen()]
- "vendor_supabase_js_2_110_0_encode": "encode()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, binaryEncode(), _binaryEncodeUserBroadcastPush(), _encodeJsonUserBroadcastPush(), fn(), ms()]
- "vendor_supabase_js_2_110_0_g": "G()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deleteFactor(), deleteUser(), getUserById()]
- "vendor_supabase_js_2_110_0_haslogger": "hasLogger()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatTimeout(), isMember(), leaveOpenTopic(), onConnClose(), onConnError()]
- "vendor_supabase_js_2_110_0_match": "match()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, appendParams(), Ci(), Ii(), add(), os()]
- "vendor_supabase_js_2_110_0_onconnopen": "onConnOpen()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _handleNodeJsRaceCondition(), flushSendBuffer(), hasLogger(), log(), reset()]
- "vendor_supabase_js_2_110_0_resend": "resend()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, rejoin(), m(), re(), reset(), _returnResult()]
- "vendor_supabase_js_2_110_0_reset": "reset()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), leave(), onConnOpen(), replaceTransport(), resend()]
- "vendor_supabase_js_2_110_0_setsession": "setSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), _callRefreshToken(), _notifyAllSubscribers(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_subscribe": "subscribe()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connect(), isClosed(), isConnected(), join(), receive()]
- "vendor_supabase_js_2_110_0_te": "Te()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, createTable(), dropTable(), listTables(), loadTable(), tableExists()]
- "vendor_supabase_js_2_110_0_then": "then()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs, constructor(), fetchRequest(), _register(), signInWithEthereum(), catch()]
- "vendor_supabase_js_2_110_0_verifypasskeyauthentication": "_verifyPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _notifyAllSubscribers(), _returnResult()]
- "account_delete_index": "index.ts" | kind=code-symbol | source=supabase/functions/account-delete/index.ts:L1 | neighbors=[admin.ts, audit(), corsHeaders(), json(), requireUser(), 2c020d4 Remove the Flask server; move a…]
- "commit:repo:github.com/SolimanAnas/SmartCare@34eb82408114ee7a8be9f15d7c9ff96a46f40c2f": "34eb824 Merge pull request #106 from MCI ✅" | kind=Commit | source=git | neighbors=[271b08b Exams: Finish/Submit 🏁, main, 99f08df MCI chapter 6: START and JumpST…, 9f11cf9 MCI chapter 6: START and JumpST…, precache-manifest.js, mci-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@396b4ed5ef40675d7e883c83cf1713803df56808": "396b4ed fix: remove all DCAS branding, fix license ISC→MIT, update package.json…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, ccbb5d2 license: switch from MIT to All…]
- "commit:repo:github.com/SolimanAnas/SmartCare@4c17ee293a4fc518c8fc0f5b346a20a1fd6502fc": "4c17ee2 Security fix #2 🛡️" | kind=Commit | source=git | neighbors=[guide-images-best, main, 7a36fde Tighten Edge Function CORS and …, a409382 Tighten Edge Function CORS and …, precache-manifest.js, 5bc6eff Security review: Remove the Fla…]
- "commit:repo:github.com/SolimanAnas/SmartCare@5afab59a713f78f13cd865d9d4fb836a56f701f8": "5afab59 Add npm to Dependabot and remove dead ITLS and /api/ code" | kind=Commit | source=git | neighbors=[guide-images-best, main, 4738132 Dependabot & Code Cleaning 🧽🫧, precache-manifest.js, generate_sitemap.py, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@7a36fde5857cb6d18bc034a99a15df93807e08fa": "7a36fde Tighten Edge Function CORS and cap user_state size" | kind=Commit | source=git | neighbors=[4c17ee2 Security fix #2 🛡️, guide-images-best, main, a409382 Tighten Edge Function CORS and …, 20261103000001_tighten_user_state_grant…, 20261103000002_cap_user_state_size.sql]
- "commit:repo:github.com/SolimanAnas/SmartCare@7d6035c5436e22994a3860684af7677dafcb21a8": "7d6035c Regenerate all PWA/app icons from icon3.png - 16 PNGs + favicon.ico" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, d6f12c6 Add course documentation: BDLS,…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8abc85096112407be3748a456212a0cb4493eb6c": "8abc850 Fix CI: restore server.py — tests depend on Flask app module" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, bc0cb4e Regenerate precache-manifest.js…, bdf7315 Add Emil Kowalski design engine…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8cbf9e5a66c9cfba634ae3b463e02d6f33d0275e": "8cbf9e5 Add attribution rule to repository assistant instructions" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 17232c9 Fix Ruff lint failure in Megaco…]
- "commit:repo:github.com/SolimanAnas/SmartCare@94865e60670e9ed3c8bd0c95edb2d9077bca644f": "94865e6 PR #103, BDLS pre-test hints & explanations✅" | kind=Commit | source=git | neighbors=[main, 271b08b Exams: Finish/Submit 🏁, afd9a67 Merge remote-tracking branch 'o…, precache-manifest.js, install-prompt.js, ac21f18 Add Google Play / Add to Home S…]
- "commit:repo:github.com/SolimanAnas/SmartCare@94cae4048dc29d7a89a13a52378f77dc8ac59cb6": "94cae40 Courses page: stop filter-chip flicker, slimmer fixed-height header" | kind=Commit | source=git | neighbors=[6018c48 PR #57 MCI Exam 1, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@954bb064a268334230a9296e410fd5ab4a9ad516": "954bb06 docs: rewrite README with professional structure, course catalog, archi…" | kind=Commit | source=git | neighbors=[877d856 Medical-bdls-empact-pepp-review…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@98557d8f2f10ce30a41dfbccf300f412c7b40860": "98557d8 docs: Update curriculum content database for chapters 2, 3, 4, and 5" | kind=Commit | source=git | neighbors=[4663aec fix: Resolve unused variable an…, main, 92652ca feat: Update search placeholder…, c2.js, c3.js, c4.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@99f08df748742790d8e4a6b92fd4b87a0f17278d": "99f08df MCI chapter 6: START and JumpSTART" | kind=Commit | source=git | neighbors=[34eb824 Merge pull request #106 from MC…, main, dc19fef Add google-flow workspace and s…, bundle.js, precache-manifest.js, mci-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ccbb5d2d97f41a4247bc568437690533412774b7": "ccbb5d2 license: switch from MIT to All Rights Reserved (proprietary)" | kind=Commit | source=git | neighbors=[396b4ed fix: remove all DCAS branding, …, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@d35441ed2d251619eabaacf3f89d863b2d49a33b": "d35441e Add google-flow workspace and sync with remote" | kind=Commit | source=git | neighbors=[d01251f Formulary group D (fluids, gluc…, main, generate-batches.js, run-all.mjs, run-batch.mjs, sheet.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@dd8f4c77fbd3de36596880d1c75f8e37f9089e3b": "dd8f4c7 Bump Werkzeug to 3.1.9 for CVE-2026-102598" | kind=Commit | source=git | neighbors=[2550192 PR #37 Medications update, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@e340cb21f477d6d33a77b5d4014786e76ad3daf2": "e340cb2 Reorganize the Prometric exam page and make it mobile friendly" | kind=Commit | source=git | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, main, 3cde249 Improved the prometric exam pag…, precache-manifest.js, exam.js, capture-screenshots.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@e9a2970ac4d468aa16c5f6977b0d134651b8fd56": "e9a2970 Add agentic implementation plans for ACLS and PALS reviewers" | kind=Commit | source=git | neighbors=[82ff814 Add Playwright smoke test for B…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@f3382e1e94cfa0b78d93256a3c9dbd64dc054bfa": "f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)" | kind=Commit | source=git | neighbors=[817a4bf Merge pull request #23 Fixed: r…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, a75c415 Scaffold BLS reviewer (courses/…]
- "commit:repo:github.com/SolimanAnas/SmartCare@feedaf7c27886f8816012f5856135349bf1a1366": "feedaf7 Add fresh production-readiness audit (July 2026)" | kind=Commit | source=git | neighbors=[c9e85ef Deduplicate the 8 standalone ex…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, ef31570 Fix offline precache gap, add c…]
- "google_flow_run_all": "run-all.mjs" | kind=code-symbol | source=.google-flow/run-all.mjs:L1 | neighbors=[dc19fef Add google-flow workspace and s…, [from, to], limited, MODELS, names, 9724717 Add google-flow workspace and s…]
- "prometric_exam_examengine_endexam": ".endExam()" | kind=code-symbol | source=src/prometric/exam.js:L1115 | neighbors=[ExamEngine, .calculateResults(), .closeModal(), .closeNavigator(), .showScreen(), .nextOrEnd()]
- "scripts_audio_lp": "lp()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L80 | neighbors=[audio.py, app_sound(), impact(), main(), reverb(), score()]
- "scripts_audio_tl": "tl()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L27 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), main(), score()]
- "scripts_check_contrast": "check_contrast.py" | kind=code-symbol | source=scripts/check_contrast.py:L1 | neighbors=[5d2d46f Fix WCAG AA contrast failure in…, bb51308 Merge pull request #19  Exam th…, contrast(), hex_to_rgb(), luminance(), main()]
- "scripts_compose_src_index": "src_index()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L273 | neighbors=[compose.py, app_events(), debrief_card(), render_full(), render_macro(), render_open()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-015.json

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
