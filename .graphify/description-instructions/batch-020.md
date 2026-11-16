# Node Description Batch 21 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@65ac83070cccc7cd7444423f185168b346e61b5d": "65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC" | kind=Commit | source=git | neighbors=[5d23c19 fix: improve heading and index-…, main, 6acd5dc feat: add SVT rhythm, improve P…, c1.js, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@6c15c3c2cad2b28fde9b04bb81d920b6726d77e6": "6c15c3c Bump CACHE_VERSION to v5.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a2d7309 💊👍, sw.js, de383e7 Add new files to service worker…]
- "commit:repo:github.com/SolimanAnas/SmartCare@718cde2e8302dccc085948c22020bf198151e79a": "718cde2 Major update has been implemented ✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, b042359 Reduced image SIZE ✅, 8deb40e Completed the content]
- "commit:repo:github.com/SolimanAnas/SmartCare@91ec300284683861a35b2050b3c63c110fdd15bd": "91ec300 Redesign the MCI START triage tool and add a flowchart quick reference" | kind=Commit | source=git | neighbors=[271b08b Exams: Finish/Submit 🏁, main, 34eb824 Merge pull request #106 from MC…, precache-manifest.js, mci-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@95f63633aba5ff9266a8145d45782fa66083ef6b": "95f6363 Merge pull request #10 from SolimanAnas/claude/chapters-html-summary-fi…" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, acb0328 About ✅ Merge pull request #11 …, sw.js, ee41524 fix: wrap long line in test_adm…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d55c93dcf7b0c3ae14f610c549fdb2c0fef2f40c": "d55c93d Update sw.js" | kind=Commit | source=git | neighbors=[c9f0400 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 03f6898 Update sw.js, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@dc0701651f7b3004e1d9e65d0fa08ad4abe1aaf2": "dc07016 Merge main into ccr-b58d9c43-7az2tj" | kind=Commit | source=git | neighbors=[4251add Close remaining low-severity re…, 5bc6eff Security review: Remove the Fla…, guide-images-best, main, 4c17ee2 Security fix #2 🛡️]
- "commit:repo:github.com/SolimanAnas/SmartCare@de0dcb23bc50e1bac63072ac92b0c6cf50064a03": "de0dcb2 feat: Add Open Graph metadata, SEO improvements, and favicons across al…" | kind=Commit | source=git | neighbors=[60c1782 chore: stop tracking TOC/ direc…, main, 4663aec fix: Resolve unused variable an…, c1.js, c10.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@de383e747d6f97e5aa226bfa8b03215ee7a26d35": "de383e7 Add new files to service worker cache" | kind=Commit | source=git | neighbors=[c2479e9 Adding ECG & Drug calc 👍❤️💊, feat/lucide-svg-migration, fix/lucide-quote-consistency, 6c15c3c Bump CACHE_VERSION to v5.1, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@edb1e1dbda5ffca730d259d0b805ba477fd8a1c2": "edb1e1d Version 4.0.1" | kind=Commit | source=git | neighbors=[213cb39 NEW CHAPTERS ADDED V 4.0.1, app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 69889e8 Delete chapters/c3.html]
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[1fa9c3a Run Playwright tests in parallel, 53ec4c1 Merge pull request #16 ✅, afeb5dc feat: Run Playwright tests in p…, d7008b7 Add the actual content changes …, beb9c47 fix(ui): swap CSS to 0dad921 gl…]
- "prometric_exam_examengine_adjustcatdifficulty": ".adjustCatDifficulty()" | kind=code-symbol | source=src/prometric/exam.js:L828 | neighbors=[ExamEngine, .retargetUpcoming(), .showToast(), .updateCatIndicator(), .submitAnswer()]
- "prometric_exam_examengine_buildnavigator": ".buildNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L585 | neighbors=[ExamEngine, .beginSession(), .updateNavigator(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_confirmend": ".confirmEnd()" | kind=code-symbol | source=src/prometric/exam.js:L1096 | neighbors=[ExamEngine, .closeNavigator(), .showModal(), plural(), .nextOrEnd()]
- "prometric_exam_examengine_constructor": ".constructor()" | kind=code-symbol | source=src/prometric/exam.js:L57 | neighbors=[ExamEngine, .init(), .loadSetup(), .loadQuestionHistory(), .loadStats()]
- "prometric_exam_examengine_gotosetup": ".goToSetup()" | kind=code-symbol | source=src/prometric/exam.js:L452 | neighbors=[ExamEngine, .renderProgressSummary(), .showScreen(), .updateAvailableCount(), .newExam()]
- "prometric_exam_examengine_newexam": ".newExam()" | kind=code-symbol | source=src/prometric/exam.js:L1129 | neighbors=[ExamEngine, .goToSetup(), .goToStep(), .removeTouchListeners(), .showScreen()]
- "prometric_exam_examengine_renderfeedback": ".renderFeedback()" | kind=code-symbol | source=src/prometric/exam.js:L710 | neighbors=[ExamEngine, escapeHtml(), icon(), .renderQuestion(), .submitAnswer()]
- "prometric_exam_examengine_shufflearray": ".shuffleArray()" | kind=code-symbol | source=src/prometric/exam.js:L484 | neighbors=[ExamEngine, .orderPool(), .retryIncorrect(), .shuffleOptions(), .startExam()]
- "prometric_exam_examengine_starttimer": ".startTimer()" | kind=code-symbol | source=src/prometric/exam.js:L1040 | neighbors=[ExamEngine, .beginSession(), .resumeExam(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_toggleflag": ".toggleFlag()" | kind=code-symbol | source=src/prometric/exam.js:L876 | neighbors=[ExamEngine, .handleKeyboard(), .showToast(), .updateFlagButton(), .updateNavigator()]
- "prometric_progress_migrate": "migrate()" | kind=code-symbol | source=src/prometric/progress.js:L90 | neighbors=[progress.js, compactHistory(), read(), remove(), write()]
- "prometric_progress_read": "read()" | kind=code-symbol | source=src/prometric/progress.js:L32 | neighbors=[progress.js, loadExams(), loadHistory(), loadSetup(), migrate()]
- "scripts_assemble_chapters": "assemble_chapters.py" | kind=code-symbol | source=scripts/assemble_chapters.py:L1 | neighbors=[assemble(), extract_sections(), main(), 4663aec fix: Resolve unused variable an…, 9b0bbbb content: deploy chapters 6-10 w…]
- "scripts_build_toc": "build_toc.py" | kind=code-symbol | source=scripts/build_toc.py:L1 | neighbors=[esc(), gen_chapter(), main(), 0bee1e7 fix(ci): resolve ruff linting e…, 59a9f95 toc: implement prehospital (EMT…]
- "scripts_compose_build_edit_play": "build_edit_play()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L174 | neighbors=[compose.py, clk(), mk(), shot(), 33 s store-listing cut: the real app on…]
- "scripts_compose_cap_of": "cap_of()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L70 | neighbors=[compose.py, app_events(), debrief_card(), render_macro(), render_open()]
- "scripts_compose_debrief_card": "debrief_card()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L500 | neighbors=[compose.py, cap_of(), src_index(), The genuine debrief sheet as a floating…, render_reveal()]
- "scripts_compose_lib_chip": "chip()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L284 | neighbors=[compose_lib.py, draw_tracked(), font(), text_size(), Persistent corner label over footage: d…]
- "scripts_compose_render_full": "render_full()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L397 | neighbors=[compose.py, render_frame(), cam_at(), src_index(), to_out()]
- "scripts_compose_render_open": "render_open()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L447 | neighbors=[compose.py, Cold open: dark bay, alarm light, the r…, render_frame(), cap_of(), src_index()]
- "scripts_explore2": "explore2.js" | kind=code-symbol | source=promo/megacode/scripts/explore2.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, driver.js, open(), { open }]
- "scripts_peek_vert": "peek_vert.js" | kind=code-symbol | source=promo/megacode/scripts/peek_vert.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, driver.js, open(), { open }]
- "scripts_poster": "poster.py" | kind=code-symbol | source=promo/megacode/scripts/poster.py:L1 | neighbors=[17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo, main()]
- "scripts_qa_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L62 | neighbors=[qa.py, blacks(), loudness(), probe(), sheet()]
- "scripts_record_frame": "frame()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L51 | neighbors=[record.js, advance(), hold(), scrollTo(), waitFor()]
- "scripts_validate_content_validate_bank_content": "validate_bank_content()" | kind=code-symbol | source=scripts/validate_content.py:L157 | neighbors=[validate_content.py, main(), load_json_lenient(), validate_pearl(), validate_question()]
- "shared_admin_requireuser": "requireUser()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L71 | neighbors=[index.ts, admin.ts, requireAdmin(), json(), serviceClient()]
- "src_install_prompt_autoshow": "autoShow()" | kind=code-symbol | source=src/install-prompt.js:L210 | neighbors=[install-prompt.js, busy(), inApp(), show(), snoozed()]
- "src_install_prompt_show": "show()" | kind=code-symbol | source=src/install-prompt.js:L195 | neighbors=[install-prompt.js, autoShow(), open(), build(), ensureHomeScreenMeta()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-020.json

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
