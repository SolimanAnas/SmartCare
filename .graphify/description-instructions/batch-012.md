# Node Description Batch 13 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@6a16b9152f4c550ee94a520947d61899ba8ae505": "6a16b91 Add ACLS Megacode simulator with live monitor emulator" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, aed54cb PR #48 acls-megacode-scenarios, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6ad2e9fc17dd08a9c7e0f7c1c7a82908accdf3c0": "6ad2e9f Add category-specific colors, improve icon contrast and badge visibility" | kind=Commit | source=git | neighbors=[26da0f4 Add read-only question database…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@792897bb17591278098df24c63fb6d8496eeb07f": "792897b Remove unstyled tap ripple that rendered as a white square" | kind=Commit | source=git | neighbors=[1bd0a15 PR #38 medications-cleanup-xnuh…, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@79e641016c73f54f3c9bd312ca47304e00640be9": "79e6410 Scaffold Medical reviewer (courses/medical) with c01 content" | kind=Commit | source=git | neighbors=[20ed56a Integrate PEPP reviewer into pl…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 508b810 Author Medical chapters c02-c03…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81d920a4245b514a03f34f327988c3b2bbeb1278": "81d920a Fix reflected XSS in med-index.html, add Google Play production audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 817a4bf Merge pull request #23 Fixed: r…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@820392679da567a307b5888db0ac755490ab4c1e": "8203926 feat: redesign courses page with Surgical Precision aesthetic" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@82a7b904e12802a66894bf104a4dc953ea50508f": "82a7b90 fix: rebuild precache-manifest.js" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 467bf94 Restore full M1-38 medication f…, be729fd Merge pull request #29 from res…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@82ff8147054f4e897f78e7ef89d0a099aa4bdd69": "82ff814 Add Playwright smoke test for BLS reviewer" | kind=Commit | source=git | neighbors=[23060c0 Integrate BLS reviewer into pla…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 154f42d Merge pull request #25 BLS revi…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8ae8c29d4f2e0ed0d559ec390c52c9263ad9c9e7": "8ae8c29 refactor: compact course cards with search, filters, progress bars, and…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f44320b2d51de18bbcebcfaace8e63d74d8689e": "8f44320 Update exam-page tests for the BDLS pre-test bank" | kind=Commit | source=git | neighbors=[55997db ECG Simulator: easy mode, visib…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 66d3118 BDLS update ,ECG engine update ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@92528c56c41645348ceb465d296a3803b8cf8f12": "92528c5 Fix broken med-index links (m1-38.js, index.html)" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9485184fb6e017ccd294b8a26bffa7b3802197af": "9485184 courses: fix main padding values for mobile and desktop" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9724717e95640f9b1e5da7c765d5b733b6a628ef": "9724717 Add google-flow workspace and sync with remote" | kind=Commit | source=git | neighbors=[main, 564422f Sync graphify updates and unign…, generate-batches.js, run-all.mjs, run-batch.mjs, sheet.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4315031cd8e8a8ed35d615bf6803c7f08ed03db": "a431503 Create static.yml" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a75c4158aacb58e82200796ce98542adeafacd4b": "a75c415 Scaffold BLS reviewer (courses/bls) with c01 content" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7c0b047 Author BLS chapters c02-c03 (as…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a90c7235fd69775bfd14a6e019e38924f577f302": "a90c723 style: resize special-card icons to 20px inline beside headings" | kind=Commit | source=git | neighbors=[2521a89 style: resize action-button Luc…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ae06d27b93687add7c48c70ece474d81eb0017e9": "ae06d27 PALS illustrations ✅" | kind=Commit | source=git | neighbors=[6477974 BLS illustrations ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, fdbf310 Fix CI: regenerate precache-man…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b890616e8e35b0e9bc9d5fe3eaa4a53a38d682b8": "b890616 Add MCI Exam 1 (core MCI operations); current exam becomes Exam 2" | kind=Commit | source=git | neighbors=[5cfcb95 PR #55 fix Home ring, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6018c48 PR #57 MCI Exam 1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd1c53b4288d4f5d38797f4b910a1842871e9bff": "bd1c53b Thinner greeting card; key, tooltips and labels for the row action icons" | kind=Commit | source=git | neighbors=[6026b7a Redesign the home page: courses…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7208d8e Rewrite chapter 3 (Airway & Ven…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bdf7315f1488a89cf1ea12d35672b6dec1133ef7": "bdf7315 Add Emil Kowalski design engineering skills, direction-aware navigation…" | kind=Commit | source=git | neighbors=[9b12c84 Merge pull request #20, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c023da10b814205524843c75e7ec223d1b5b172d": "c023da1 courses: add mobile-friendly responsive optimizations for small screens…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2542511d7adcbe948825790273d2bd6730ce9a3": "c254251 Exam pages: one design for every course, on a shared engine" | kind=Commit | source=git | neighbors=[2e4d5a6 MCI: Officer roles with two-row…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, c5c0567 Exam pages: Practice / Exam mod…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c7f6894cab5cee8ccb8a7955dbe389756c6ae26d": "c7f6894 Add Google Play screenshot campaign built from real app captures" | kind=Commit | source=git | neighbors=[81f95d0 ⭐PR #60 Unified Course Design s…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 7dcb4bd Merge pull request #61 from Sol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cc4574d5ea44bc9ed2f303c92ca38c70bd43f70f": "cc4574d style: claymorphic redesign of courses page with Figtree/Noto Sans typo…" | kind=Commit | source=git | neighbors=[a90c723 style: resize special-card icon…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cee89970fb6aa9be41d15abede9ef919cce6b022": "cee8997 Courses page: opaque cards, polished buttons, unified progress, readabl…" | kind=Commit | source=git | neighbors=[62386af PR #51 Megacode 3, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, c8b8f6e PR #52 Improved UI/UX of Course…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d72ee1ed6094e0d1cd558e386b85504c968f1277": "d72ee1e MCI: new course home and exam screens, START/METHANE tools in the page" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, a8c0f40 PR #59 MCI UI update, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d93e86e78e55e2b3882174367e6e12d5ab262557": "d93e86e ECG Simulator: rebuild engine, rhythms and lab UI" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8cbf9e5 Add attribution rule to reposit…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de2fd505ef3b9c953495c1639c3ca6e9bf7a045d": "de2fd50 courses: redesign UI with grid layout, search, stats icons, colored chi…" | kind=Commit | source=git | neighbors=[4f69b7c Remove extra padding above sear…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e016fb656ebda822dd3680b640685b10131c20af": "e016fb6 fix: replace textContent with innerHTML for SVG icons across 9 exam pag…" | kind=Commit | source=git | neighbors=[2875fd1 feat: continue learning card, t…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e1be186ec2f3437fde9e9d8b0e054af17358b9e7": "e1be186 fix: make precache build deterministic across Windows/Linux" | kind=Commit | source=git | neighbors=[bc0cb4e Regenerate precache-manifest.js…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 301bb11 Fix NaN days ago — index.html r…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ec026bae8d6df1239eef9e29eb8b80b9977c77c3": "ec026ba fix: use innerHTML instead of innerText for SVG quote in index.html pop…" | kind=Commit | source=git | neighbors=[cacbb42 fix(sw): bump cache to v5.4 to …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ec0e85ec91b73666cdda22ccbe278bb78bef0b06": "ec0e85e fix(css): collapse multi-line SVG data URL in .cat-header::before acros…" | kind=Commit | source=git | neighbors=[05fc83d fix: re-disable auth guard on c…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ee58d7a078f2d5966721143e1f315f8d1a1308b2": "ee58d7a content: deploy chapters 1-5 with full NREMT-aligned EMT curriculum" | kind=Commit | source=git | neighbors=[b791fda content: deploy chapters 4-5 (C…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c0": "c0.js" | kind=code-symbol | source=content/c0.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 77d4355 Merge pull request #21 from Sol…, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "prometric_exam_examengine_init": ".init()" | kind=code-symbol | source=src/prometric/exam.js:L31 | neighbors=[ExamEngine, .constructor(), .bindEvents(), .initTheme(), .initWizard(), .loadChartJS()] | lang=en
- "prometric_exam_examengine_startexam": ".startExam()" | kind=code-symbol | source=src/prometric/exam.js:L366 | neighbors=[ExamEngine, .buildNavigator(), .filterQuestions(), .renderQuestion(), .showScreen(), .shuffleArray()] | lang=en
- "prometric_exam_examengine_updatenavigator": ".updateNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L462 | neighbors=[ExamEngine, .buildNavigator(), .renderQuestion(), .selectOption(), .submitAnswer(), .toggleFlag()] | lang=en
- "scripts_audio_app_sound": "app_sound()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L213 | neighbors=[audio.py, env(), lp(), saw(), square(), tl()] | lang=en
- "scripts_driver": "driver.js" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, { chromium }, open(), path, explore2.js] | lang=en
- "scripts_qa": "qa.py" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L1 | neighbors=[05dca1e Add Google Play preview cut of …, 2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, blacks(), loudness(), main()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-012.json

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
