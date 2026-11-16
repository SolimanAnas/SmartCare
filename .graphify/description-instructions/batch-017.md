# Node Description Batch 18 of 63

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

- "vendor_supabase_js_2_110_0_onvisibilitychanged": "_onVisibilityChanged()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _handleVisibilityChange(), _acquireLock(), _debug(), _recoverAndRefresh(), _startAutoRefresh()]
- "vendor_supabase_js_2_110_0_removesession": "_removeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), getUser(), __loadSession(), _recoverAndRefresh(), _debug()]
- "vendor_supabase_js_2_110_0_sendheartbeat": "sendHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatCallback(), heartbeatTimeout(), isConnected(), log(), makeRef()]
- "vendor_supabase_js_2_110_0_signout": "signOut()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _acquireLock(), join(), m(), _useSession()]
- "vendor_supabase_js_2_110_0_signup": "signUp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), re(), _returnResult(), _saveSession()]
- "vendor_supabase_js_2_110_0_starttimeout": "startTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, push(), send(), cancelTimeout(), makeRef(), on()]
- "vendor_supabase_js_2_110_0_teardown": "teardown()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), heartbeatTimeout(), removeChannel(), destroy(), reset()]
- "vendor_supabase_js_2_110_0_x": "x()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _initRealtimeClient(), _initSupabaseAuthClient(), bs(), ki()]
- "app_setmaincontent": "setMainContent()" | kind=code-symbol | source=app.js:L517 | neighbors=[app.js, renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav(), initScrollReveal()]
- "commit:repo:github.com/SolimanAnas/SmartCare@1ca0f6508d8af6649a9677b9f8c06b5735eced0d": "1ca0f65 Ship the High priority list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, d7008b7 Add the actual content changes …, 94235c6 Ship the critical hardening lis…, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@20fdfa2b700d60481bd2fc535e7bde91a55fa0b1": "20fdfa2 feat(itls): complete itls reviewer page, chapter routing, builder, and …" | kind=Commit | source=git | neighbors=[app.js, main, 1fc629e fix(app.js): handle DOMContentL…, build_courses.py, generate_all_itls_data.py, fe7449d docs: Update curriculum content…]
- "commit:repo:github.com/SolimanAnas/SmartCare@271b08b007d5509f793ee0b59543e58eea43554a": "271b08b Exams: Finish/Submit 🏁" | kind=Commit | source=git | neighbors=[main, 34eb824 Merge pull request #106 from MC…, 91ec300 Redesign the MCI START triage t…, precache-manifest.js, 6c92d35 Give the exam header room on ph…, 94865e6 PR #103, BDLS pre-test hints & …]
- "commit:repo:github.com/SolimanAnas/SmartCare@2e2f6056018760b1aee2b055cd6b8f3884af63ed": "2e2f605 Ship the Security section from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[app.js, main, 5f7c4f2 Merge pull request #12 Step 1&2…, exam.js, sw.js, eff053b Ship all six Critical Fixes fro…]
- "commit:repo:github.com/SolimanAnas/SmartCare@4736092d1c2167a039400455bd4315d024a51c1d": "4736092 Clean up the Prometric question bank" | kind=Commit | source=git | neighbors=[main, c8226f9 Resolve the 22 flagged Prometri…, precache-manifest.js, build-screenshots.js, prometric.spec.js, 4c061e2 Fix the explanation and hint fo…]
- "commit:repo:github.com/SolimanAnas/SmartCare@49c0810e9d22d09956cc346022ffc41425245ee8": "49c0810 Add a baseline Content-Security-Policy to every published page" | kind=Commit | source=git | neighbors=[4738132 Dependabot & Code Cleaning 🧽🫧, guide-images-best, main, 7c83637 CSP alignment 🛡️✅, precache-manifest.js, csp.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@4ccb8df39beb29a7be104defbab78a78df578875": "4ccb8df Merge pull request #9 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[main, 95f6363 Merge pull request #10 from Sol…, c4f8810 Wire admin.html to real app use…, sw.js, a4deb03 Merge pull request #8 from Soli…, b1f4385 Bump service worker cache to v2…]
- "commit:repo:github.com/SolimanAnas/SmartCare@6acd5dce49981e775cd75f9db8362011c0eba9c2": "6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data" | kind=Commit | source=git | neighbors=[65ac830 feat: restructure Chapter 1 — m…, app.js, main, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@70f6354406d52b979e6fcf2f455b5d75e1f5a67d": "70f6354 Add 92 Disaster questions to the Prometric bank from the MCI course" | kind=Commit | source=git | neighbors=[260450d Prometric question 721: protect…, main, c84b797 Question Bank Updated ✅✅, precache-manifest.js, build-screenshots.js, prometric.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@9f11cf92031a15112da390355999b87493b46576": "9f11cf9 MCI chapter 6: START and JumpSTART as visual decision flows" | kind=Commit | source=git | neighbors=[34eb824 Merge pull request #106 from MC…, main, 99f08df MCI chapter 6: START and JumpST…, bundle.js, precache-manifest.js, mci-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@a4df22b3015e72e7b31ed3d38a6ed3201412ac4f": "a4df22b fix: resolve CI lint failure and remove orphaned files" | kind=Commit | source=git | neighbors=[main, 04af7e8 fix: correct UTF-8 mojibake in …, build.py, build_courses.py, generate_all_itls_data.py, c6c0a5c chore: update core app - servic…]
- "commit:repo:github.com/SolimanAnas/SmartCare@aa3705ce2c482dd0e6d4138b26ebca7007daa232": "aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-priori…" | kind=Commit | source=git | neighbors=[83a1ea8 Ship the Offline & PWA section …, ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, 94235c6 Ship the critical hardening lis…, main]
- "commit:repo:github.com/SolimanAnas/SmartCare@ac21f1889d84e340c4c91148141145c6af150479": "ac21f18 Add Google Play / Add to Home Screen install toast to the course pages" | kind=Commit | source=git | neighbors=[0bbed6c Make exam hint and explanation …, main, 94865e6 PR #103, BDLS pre-test hints & …, f2a7e76 Let every exam be finished and …, precache-manifest.js, install-prompt.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@acb0328a04314c841d761f093fd6e90643fe1a75": "acb0328 About ✅ Merge pull request #11 from SolimanAnas/claude/chapters-html-su…" | kind=Commit | source=git | neighbors=[70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, main, 5b68bae docs: add comprehensive v2.0 up…, 5f7c4f2 Merge pull request #12 Step 1&2…, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@badddb6812d5caf1f073027f570bd55b5c469bb2": "badddb6 Harden static file serving, admin identity check and client IP handling" | kind=Commit | source=git | neighbors=[b40ee4a Add illustrations to the chapte…, ccr-b58d9c43-7az2tj, guide-images-best, main, 393a5b0 Drop ProxyFix: server.py is a l…, admin.ts]
- "commit:repo:github.com/SolimanAnas/SmartCare@c8226f9badadb97ef8c222b5460aa4125f60bd08": "c8226f9 Resolve the 22 flagged Prometric questions" | kind=Commit | source=git | neighbors=[4736092 Clean up the Prometric question…, main, 828970b Prometric Question Bank Updated…, precache-manifest.js, build-screenshots.js, prometric.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d00c567a0f375f4287d37c668d00ef9fb61e1394": "d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js" | kind=Commit | source=git | neighbors=[8541abe chore: Change index page title …, main, fe7449d docs: Update curriculum content…, c1.js, c6.js, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d7918ff93f973a6649510d7bf4ebeac6b20d0e70": "d7918ff fix: commit package-lock.json — CI's npm ci can't run without it" | kind=Commit | source=git | neighbors=[d7008b7 Add the actual content changes …, ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, 53ec4c1 Merge pull request #16 ✅, main]
- "mci_build": "build.py" | kind=code-symbol | source=courses/mci/build.py:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, e98b15c Merge PR #36 MCI Course, load(), main(), write_practice_bank()]
- "migrations_20260702000002_create_profiles": "20260702000002_create_profiles.sql" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, on_auth_user_created, public.handle_new_user(), public.profiles]
- "prometric_exam_examengine_applysettingstoui": ".applySettingsToUI()" | kind=code-symbol | source=src/prometric/exam.js:L223 | neighbors=[ExamEngine, .syncSettingButtons(), .syncTopicClasses(), .updateAvailableCount(), .updateModeUI(), .init()]
- "prometric_exam_examengine_filterquestions": ".filterQuestions()" | kind=code-symbol | source=src/prometric/exam.js:L363 | neighbors=[ExamEngine, .basePool(), .calculateTopicAccuracy(), .getSelectedTopics(), .startExam(), .updateAvailableCount()]
- "prometric_exam_examengine_nextorend": ".nextOrEnd()" | kind=code-symbol | source=src/prometric/exam.js:L863 | neighbors=[ExamEngine, .handleKeyboard(), .confirmEnd(), .endExam(), .renderQuestion(), .submitAnswer()]
- "prometric_exam_examengine_ontopicschanged": ".onTopicsChanged()" | kind=code-symbol | source=src/prometric/exam.js:L328 | neighbors=[ExamEngine, .getSelectedTopics(), .saveSetup(), .syncTopicClasses(), .updateAvailableCount(), .setAllTopics()]
- "prometric_exam_examengine_renderanalyticsdashboard": ".renderAnalyticsDashboard()" | kind=code-symbol | source=src/prometric/exam.js:L1407 | neighbors=[ExamEngine, .renderHeatmap(), .renderStrengthsWeaknesses(), formatNumber(), .showAnalytics(), .renderImprovementChart()]
- "prometric_exam_examengine_renderimprovementchart": ".renderImprovementChart()" | kind=code-symbol | source=src/prometric/exam.js:L1424 | neighbors=[ExamEngine, .applyTheme(), .setChartMessage(), prefersReducedMotion(), .showAnalytics(), .renderAnalyticsDashboard()]
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1367 | neighbors=[ExamEngine, .loadChartJS(), .renderAnalyticsDashboard(), .renderImprovementChart(), .setChartMessage(), .showScreen()]
- "prometric_exam_examengine_syncnavigatorstate": ".syncNavigatorState()" | kind=code-symbol | source=src/prometric/exam.js:L953 | neighbors=[ExamEngine, .beginSession(), .closeNavigator(), .openNavigator(), .setSheetInert(), .toggleNavigator()]
- "prometric_progress_write": "write()" | kind=code-symbol | source=src/prometric/progress.js:L41 | neighbors=[progress.js, addExam(), clear(), migrate(), saveHistory(), saveSetup()]
- "scripts_audio_voice_chain": "voice_chain()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L271 | neighbors=[audio.py, main(), Gentle broadcast chain for the TTS narr…, bp(), hp(), lp()]
- "scripts_build_ecg_reference_card": "card()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L163 | neighbors=[build_ecg_reference.js, actions(), esc(), record(), rhythmStrip(), twelveLead()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-017.json

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
