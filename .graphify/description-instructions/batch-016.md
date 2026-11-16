# Node Description Batch 17 of 62

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

- "vendor_chart_4_5_1_umd_min_ys": "Ys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .update(), e(), n(), s(), ._tickSize()]
- "vendor_supabase_js_2_110_0_clonerequeststate": "cloneRequestState()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs, toString(), delete(), insert(), select(), update()]
- "vendor_supabase_js_2_110_0_disconnect": "disconnect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, _cancelPendingDisconnect(), isDisconnecting(), reset(), teardown(), removeAllChannels()]
- "vendor_supabase_js_2_110_0_exchangecodeforsession": "exchangeCodeForSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _acquireLock(), m(), _notifyAllSubscribers(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_getsession": "getSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _getAccessToken(), _getAuthenticatorAssuranceLevel(), getClaims(), _acquireLock()]
- "vendor_supabase_js_2_110_0_getsessionfromurl": "_getSessionFromURL()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), delete(), _returnResult(), toString(), y()]
- "vendor_supabase_js_2_110_0_heartbeattimeout": "heartbeatTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, hasLogger(), heartbeatCallback(), log(), teardown(), triggerChanError()]
- "vendor_supabase_js_2_110_0_onconnclose": "onConnClose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, clearHeartbeats(), hasLogger(), log(), scheduleTimeout(), triggerChanError()]
- "vendor_supabase_js_2_110_0_onvisibilitychanged": "_onVisibilityChanged()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _handleVisibilityChange(), _acquireLock(), _debug(), _recoverAndRefresh(), _startAutoRefresh()]
- "vendor_supabase_js_2_110_0_removesession": "_removeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), getUser(), __loadSession(), _recoverAndRefresh(), _debug()]
- "vendor_supabase_js_2_110_0_sendheartbeat": "sendHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatCallback(), heartbeatTimeout(), isConnected(), log(), makeRef()]
- "vendor_supabase_js_2_110_0_signout": "signOut()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _acquireLock(), join(), m(), _useSession()]
- "vendor_supabase_js_2_110_0_signup": "signUp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), re(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_starttimeout": "startTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, push(), send(), cancelTimeout(), makeRef(), on()]
- "vendor_supabase_js_2_110_0_teardown": "teardown()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), heartbeatTimeout(), removeChannel(), destroy(), reset()]
- "vendor_supabase_js_2_110_0_x": "x()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _initRealtimeClient(), _initSupabaseAuthClient(), bs(), ki()]
- "app_setmaincontent": "setMainContent()" | kind=code-symbol | source=app.js:L517 | neighbors=[app.js, renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav(), initScrollReveal()]
- "commit:repo:github.com/SolimanAnas/SmartCare@1ca0f6508d8af6649a9677b9f8c06b5735eced0d": "1ca0f65 Ship the High priority list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, d7008b7 Add the actual content changes …, 94235c6 Ship the critical hardening lis…]
- "commit:repo:github.com/SolimanAnas/SmartCare@396b4ed5ef40675d7e883c83cf1713803df56808": "396b4ed fix: remove all DCAS branding, fix license ISC→MIT, update package.json…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, ccbb5d2 license: switch from MIT to All…, 954bb06 docs: rewrite README with profe…]
- "commit:repo:github.com/SolimanAnas/SmartCare@4ccb8df39beb29a7be104defbab78a78df578875": "4ccb8df Merge pull request #9 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[main, 95f6363 Merge pull request #10 from Sol…, c4f8810 Wire admin.html to real app use…, sw.js, a4deb03 Merge pull request #8 from Soli…, b1f4385 Bump service worker cache to v2…]
- "commit:repo:github.com/SolimanAnas/SmartCare@6acd5dce49981e775cd75f9db8362011c0eba9c2": "6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data" | kind=Commit | source=git | neighbors=[65ac830 feat: restructure Chapter 1 — m…, app.js, main, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@7d6035c5436e22994a3860684af7677dafcb21a8": "7d6035c Regenerate all PWA/app icons from icon3.png - 16 PNGs + favicon.ico" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, d6f12c6 Add course documentation: BDLS,…, fdbf310 Fix CI: regenerate precache-man…]
- "commit:repo:github.com/SolimanAnas/SmartCare@8cbf9e5a66c9cfba634ae3b463e02d6f33d0275e": "8cbf9e5 Add attribution rule to repository assistant instructions" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 17232c9 Fix Ruff lint failure in Megaco…, d93e86e ECG Simulator: rebuild engine, …]
- "commit:repo:github.com/SolimanAnas/SmartCare@94cae4048dc29d7a89a13a52378f77dc8ac59cb6": "94cae40 Courses page: stop filter-chip flicker, slimmer fixed-height header" | kind=Commit | source=git | neighbors=[6018c48 PR #57 MCI Exam 1, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8fedbbf Regenerate precache-manifest.js…]
- "commit:repo:github.com/SolimanAnas/SmartCare@954bb064a268334230a9296e410fd5ab4a9ad516": "954bb06 docs: rewrite README with professional structure, course catalog, archi…" | kind=Commit | source=git | neighbors=[877d856 Medical-bdls-empact-pepp-review…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 396b4ed fix: remove all DCAS branding, …]
- "commit:repo:github.com/SolimanAnas/SmartCare@aa3705ce2c482dd0e6d4138b26ebca7007daa232": "aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-priori…" | kind=Commit | source=git | neighbors=[83a1ea8 Ship the Offline & PWA section …, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 94235c6 Ship the critical hardening lis…]
- "commit:repo:github.com/SolimanAnas/SmartCare@acb0328a04314c841d761f093fd6e90643fe1a75": "acb0328 About ✅ Merge pull request #11 from SolimanAnas/claude/chapters-html-su…" | kind=Commit | source=git | neighbors=[70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, main, 5b68bae docs: add comprehensive v2.0 up…, 5f7c4f2 Merge pull request #12 Step 1&2…, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@badddb6812d5caf1f073027f570bd55b5c469bb2": "badddb6 Harden static file serving, admin identity check and client IP handling" | kind=Commit | source=git | neighbors=[b40ee4a Add illustrations to the chapte…, ccr-b58d9c43-7az2tj, 393a5b0 Drop ProxyFix: server.py is a l…, server.py, admin.ts, test_api.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@ccbb5d2d97f41a4247bc568437690533412774b7": "ccbb5d2 license: switch from MIT to All Rights Reserved (proprietary)" | kind=Commit | source=git | neighbors=[396b4ed fix: remove all DCAS branding, …, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 82a7b90 fix: rebuild precache-manifest.…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d00c567a0f375f4287d37c668d00ef9fb61e1394": "d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js" | kind=Commit | source=git | neighbors=[8541abe chore: Change index page title …, main, fe7449d docs: Update curriculum content…, c1.js, c6.js, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d7918ff93f973a6649510d7bf4ebeac6b20d0e70": "d7918ff fix: commit package-lock.json — CI's npm ci can't run without it" | kind=Commit | source=git | neighbors=[d7008b7 Add the actual content changes …, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 53ec4c1 Merge pull request #16 ✅]
- "commit:repo:github.com/SolimanAnas/SmartCare@dd8f4c77fbd3de36596880d1c75f8e37f9089e3b": "dd8f4c7 Bump Werkzeug to 3.1.9 for CVE-2026-102598" | kind=Commit | source=git | neighbors=[2550192 PR #37 Medications update, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 773db00 Update remaining formulary coun…]
- "commit:repo:github.com/SolimanAnas/SmartCare@e9a2970ac4d468aa16c5f6977b0d134651b8fd56": "e9a2970 Add agentic implementation plans for ACLS and PALS reviewers" | kind=Commit | source=git | neighbors=[82ff814 Add Playwright smoke test for B…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5157b39 Fix horizontal overflow on phon…]
- "commit:repo:github.com/SolimanAnas/SmartCare@f3382e1e94cfa0b78d93256a3c9dbd64dc054bfa": "f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)" | kind=Commit | source=git | neighbors=[817a4bf Merge pull request #23 Fixed: r…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, a75c415 Scaffold BLS reviewer (courses/…]
- "commit:repo:github.com/SolimanAnas/SmartCare@feedaf7c27886f8816012f5856135349bf1a1366": "feedaf7 Add fresh production-readiness audit (July 2026)" | kind=Commit | source=git | neighbors=[c9e85ef Deduplicate the 8 standalone ex…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, ef31570 Fix offline precache gap, add c…]
- "google_flow_run_all": "run-all.mjs" | kind=code-symbol | source=.google-flow/run-all.mjs:L1 | neighbors=[9724717 Add google-flow workspace and s…, [from, to], limited, MODELS, names, d35441e Add google-flow workspace and s…]
- "mci_build": "build.py" | kind=code-symbol | source=courses/mci/build.py:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, e98b15c Merge PR #36 MCI Course, load(), main(), write_practice_bank()]
- "migrations_20260702000002_create_profiles": "20260702000002_create_profiles.sql" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, on_auth_user_created, public.handle_new_user(), public.profiles]
- "prometric_exam_examengine_calculateresults": ".calculateResults()" | kind=code-symbol | source=src/prometric/exam.js:L833 | neighbors=[ExamEngine, .renderInsights(), .renderTopicPerformance(), .saveStats(), .showScreen(), .endExam()]
- "prometric_exam_examengine_endexam": ".endExam()" | kind=code-symbol | source=src/prometric/exam.js:L801 | neighbors=[ExamEngine, .calculateResults(), .closeModal(), .removeTouchListeners(), .showScreen(), .nextOrEnd()]

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
