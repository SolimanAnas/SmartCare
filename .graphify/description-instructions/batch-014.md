# Node Description Batch 15 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@dc19fef60aceaaa4f70b6565ac879bd4fc7ab2a0": "dc19fef Add google-flow workspace and sync with remote" | kind=Commit | source=git | neighbors=[99f08df MCI chapter 6: START and JumpST…, main, 4e4aac7 Sync graphify updates and unign…, generate-batches.js, run-all.mjs, run-batch.mjs]
- "commit:repo:github.com/SolimanAnas/SmartCare@de2fd505ef3b9c953495c1639c3ca6e9bf7a045d": "de2fd50 courses: redesign UI with grid layout, search, stats icons, colored chi…" | kind=Commit | source=git | neighbors=[4f69b7c Remove extra padding above sear…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e016fb656ebda822dd3680b640685b10131c20af": "e016fb6 fix: replace textContent with innerHTML for SVG icons across 9 exam pag…" | kind=Commit | source=git | neighbors=[2875fd1 feat: continue learning card, t…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@e3854ccf355ecbd73ae6e064eb1be96eca546f34": "e3854cc Drop endotracheal drug delivery from adult cardiac arrest (AHA 2025)" | kind=Commit | source=git | neighbors=[ce11d74 Rewrite chapter 10 (Clinical Pr…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@e5cb445781709f6a7461030071bec2d6723f556d": "e5cb445 Herniation signs: any one sign triggers bridge hyperventilation (BTF)" | kind=Commit | source=git | neighbors=[a497e1f Rewrite chapter 6 (Trauma Emerg…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@e630fb6e26745ad32a5c63a3c0a5e7638c14054c": "e630fb6 Author PEPP chapters c12-c14, complete all 14 chapters" | kind=Commit | source=git | neighbors=[0555934 Author PEPP chapters c09-c11 (t…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@e956daa7e11eb23e0cacfabeb308604efa37ef43": "e956daa Author BLS chapters c10-c12 (choking, opioids, special circumstances)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 23060c0 Integrate BLS reviewer into pla…, bundle.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@e984ef6a3ff83f30ab59b0234957cf465e813f5a": "e984ef6 Courses page: re-check chip state when the scroll lock ends" | kind=Commit | source=git | neighbors=[8fedbbf Regenerate precache-manifest.js…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@ec026bae8d6df1239eef9e29eb8b80b9977c77c3": "ec026ba fix: use innerHTML instead of innerText for SVG quote in index.html pop…" | kind=Commit | source=git | neighbors=[cacbb42 fix(sw): bump cache to v5.4 to …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@ec0e85ec91b73666cdda22ccbe278bb78bef0b06": "ec0e85e fix(css): collapse multi-line SVG data URL in .cat-header::before acros…" | kind=Commit | source=git | neighbors=[05fc83d fix: re-disable auth guard on c…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@ee58d7a078f2d5966721143e1f315f8d1a1308b2": "ee58d7a content: deploy chapters 1-5 with full NREMT-aligned EMT curriculum" | kind=Commit | source=git | neighbors=[b791fda content: deploy chapters 4-5 (C…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@f4356e02ffa9879da4ad050311e8dc37ab81af2e": "f4356e0 Author BLS chapters c07-c09 (breaths, child BLS, infant BLS)" | kind=Commit | source=git | neighbors=[33c9dd7 Author BLS chapters c04-c06 (2-…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, e956daa Author BLS chapters c10-c12 (ch…]
- "commit:repo:github.com/SolimanAnas/SmartCare@f73818bc3d472f6843700f7dcdc563d388d4560f": "f73818b Adding respiratory patterns" | kind=Commit | source=git | neighbors=[8080576 PR #30, Redesign drug monograph…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "commit:repo:github.com/SolimanAnas/SmartCare@fdbf3108e2f6372c2b88c121a2c93dc6adfc685a": "fdbf310 Fix CI: regenerate precache-manifest.js" | kind=Commit | source=git | neighbors=[ae06d27 PALS illustrations ✅, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy]
- "content_c0": "c0.js" | kind=code-symbol | source=content/c0.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 77d4355 Merge pull request #21 from Sol…, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…]
- "prometric_exam_examengine_calculateresults": ".calculateResults()" | kind=code-symbol | source=src/prometric/exam.js:L1138 | neighbors=[ExamEngine, .formatTime(), .renderInsights(), .renderTopicPerformance(), .saveStats(), icon()]
- "prometric_exam_examengine_handlekeyboard": ".handleKeyboard()" | kind=code-symbol | source=src/prometric/exam.js:L970 | neighbors=[ExamEngine, .closeNavigator(), .navigate(), .nextOrEnd(), .selectOption(), .showHint()]
- "prometric_exam_examengine_retryincorrect": ".retryIncorrect()" | kind=code-symbol | source=src/prometric/exam.js:L1275 | neighbors=[ExamEngine, .beginSession(), .shuffleArray(), .buildNavigator(), .removeTouchListeners(), .renderQuestion()]
- "prometric_exam_examengine_updatenavigator": ".updateNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L603 | neighbors=[ExamEngine, .renderQuestion(), .selectOption(), .submitAnswer(), .toggleFlag(), .updateLiveScore()]
- "prometric_exam_plural": "plural()" | kind=code-symbol | source=src/prometric/exam.js:L41 | neighbors=[exam.js, .confirmEnd(), .renderInsights(), .renderProgressSummary(), .updateAvailableCount(), .updateTimerHint()]
- "scripts_audio_app_sound": "app_sound()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L213 | neighbors=[audio.py, env(), lp(), saw(), square(), tl()]
- "scripts_driver": "driver.js" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, { chromium }, open(), path, explore2.js]
- "scripts_qa": "qa.py" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L1 | neighbors=[05dca1e Add Google Play preview cut of …, 2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, blacks(), loudness(), main()]
- "shared_admin_json": "json()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L34 | neighbors=[index.ts, index.ts, index.ts, index.ts, admin.ts, corsHeaders()]
- "tests_ecg_simulator_spec": "ecg-simulator.spec.js" | kind=code-symbol | source=tests/ecg-simulator.spec.js:L1 | neighbors=[2b928c2 ECG Simulator: downloadable rhy…, 437e8d4 Merge pull request #66  ECG, 55997db ECG Simulator: easy mode, visib…, 6663113 PR #63 Update ECG simulator, 66d3118 BDLS update ,ECG engine update ✅, d93e86e ECG Simulator: rebuild engine, …]
- "vendor_chart_4_5_1_umd_min_js_datacheck": "._dataCheck()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .addElements(), .buildOrUpdateElements(), at(), .getDataset(), o()]
- "vendor_chart_4_5_1_umd_min_no": "no()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), io(), n(), .path()]
- "vendor_chart_4_5_1_umd_min_oi": "Oi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), .drawBody(), .drawFooter(), .drawTitle(), .adjustHitBoxes()]
- "vendor_chart_4_5_1_umd_min_on": "on" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), ._createDescriptors(), ._descriptors(), .invalidate(), .notify()]
- "vendor_chart_4_5_1_umd_min_pa": "pa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), ea(), ia(), ma(), sa()]
- "vendor_chart_4_5_1_umd_min_ra": "ra()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, afterDatasetsUpdate(), a(), l(), o(), s()]
- "vendor_chart_4_5_1_umd_min_s_getprops": ".getProps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ao(), getCenterPoint(), ho(), inRange(), ro(), s()]
- "vendor_chart_4_5_1_umd_min_tn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, dt(), n(), .chartOptionScopes(), .createResolver(), on]
- "vendor_chart_4_5_1_umd_min_tn_getpixelfordecimal": ".getPixelForDecimal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), getPixelForValue(), .getPixelForValue(), .getPixelForValue(), .getPixelForValue(), tn]
- "vendor_chart_4_5_1_umd_min_ts": "ts()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), ._animateOptions(), .configure(), .constructor(), ._createAnimations()]
- "vendor_chart_4_5_1_umd_min_wa_drawbody": ".drawBody()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw(), Oi(), p(), Si(), u()]
- "vendor_chart_4_5_1_umd_min_wi": "wi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ho(), lo(), ra(), .drawBackground(), ._drawColorBox()]
- "vendor_chart_4_5_1_umd_min_xi": "Xi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), nearest(), n(), .getProps()]
- "vendor_chart_4_5_1_umd_min_yn_updateelements": ".updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .getParsed(), .updateElement(), .getDistanceFromCenterForValue(), .getIndexAngle(), .getDataVisibility()]
- "vendor_chart_4_5_1_umd_min_z": "Z()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .initOffsets(), lo(), pt(), q(), ra()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-014.json

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
