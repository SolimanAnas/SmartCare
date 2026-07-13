# Node Description Batch 9 of 49

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

- "commit:repo:github.com/SolimanAnas/SmartCare@05fc83d2e47f1b864e8248891326212642bfe399": "05fc83d fix: re-disable auth guard on courses page (was accidentally uncommente…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@11207b469453f62b79397d9f0287b64664aca701": "11207b4 chore: add playwright-report and test-results to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2146843fa7789f566266d1e8f68117e049ec4413": "2146843 chore: untrack playwright-report and test-results artifacts" | kind=Commit | source=git | neighbors=[11207b4 chore: add playwright-report an…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2521a89396aa1120fac9807949e1c0969d2f00b9": "2521a89 style: resize action-button Lucide icons to 1.5em inline accent size" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@26da0f4742a4dd8bcbbcbad4de6634e1b5b0d865": "26da0f4 Add read-only question database audit report" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@273600ccdbcd63b668fe861156fb74bf307686eb": "273600c chore: ignore run-debug.mjs scratch script" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2875fd1a0c08a5946a3b04042371cbb90034e978": "2875fd1 feat: continue learning card, thicker progress bars, meaningful progres…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@39ba2028bcd67279de8a7be079316c8ac45119cd": "39ba202 fix: restore encoding and apply textContent→innerHTML in all 9 exam pag…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3c6f528f5edff89e65b4304cad3b822c77cac75c": "3c6f528 fix: replace textContent with innerHTML across 8 files for PWA banner a…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4f69b7cf1d05ccbc37def03b0723928adf5e3d52": "4f69b7c Remove extra padding above search bar" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@58e37c8577e994de16646d9e3b921b5b96da4f7f": "58e37c8 fix(css): collapse second multi-line SVG data URL in .exp-label::before…" | kind=Commit | source=git | neighbors=[273600c chore: ignore run-debug.mjs scr…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@602ffdf28f1716f08636a655b10911c66170f676": "602ffdf chore: gitignore copyrighted source PDFs/epubs in TOC/" | kind=Commit | source=git | neighbors=[59a9f95 toc: implement prehospital (EMT…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6ad2e9fc17dd08a9c7e0f7c1c7a82908accdf3c0": "6ad2e9f Add category-specific colors, improve icon contrast and badge visibility" | kind=Commit | source=git | neighbors=[26da0f4 Add read-only question database…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@820392679da567a307b5888db0ac755490ab4c1e": "8203926 feat: redesign courses page with Surgical Precision aesthetic" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8ae8c29d4f2e0ed0d559ec390c52c9263ad9c9e7": "8ae8c29 refactor: compact course cards with search, filters, progress bars, and…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9485184fb6e017ccd294b8a26bffa7b3802197af": "9485184 courses: fix main padding values for mobile and desktop" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4315031cd8e8a8ed35d615bf6803c7f08ed03db": "a431503 Create static.yml" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a90c7235fd69775bfd14a6e019e38924f577f302": "a90c723 style: resize special-card icons to 20px inline beside headings" | kind=Commit | source=git | neighbors=[2521a89 style: resize action-button Luc…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c023da10b814205524843c75e7ec223d1b5b172d": "c023da1 courses: add mobile-friendly responsive optimizations for small screens…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cc4574d5ea44bc9ed2f303c92ca38c70bd43f70f": "cc4574d style: claymorphic redesign of courses page with Figtree/Noto Sans typo…" | kind=Commit | source=git | neighbors=[a90c723 style: resize special-card icon…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de2fd505ef3b9c953495c1639c3ca6e9bf7a045d": "de2fd50 courses: redesign UI with grid layout, search, stats icons, colored chi…" | kind=Commit | source=git | neighbors=[4f69b7c Remove extra padding above sear…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e016fb656ebda822dd3680b640685b10131c20af": "e016fb6 fix: replace textContent with innerHTML for SVG icons across 9 exam pag…" | kind=Commit | source=git | neighbors=[2875fd1 feat: continue learning card, t…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ec026bae8d6df1239eef9e29eb8b80b9977c77c3": "ec026ba fix: use innerHTML instead of innerText for SVG quote in index.html pop…" | kind=Commit | source=git | neighbors=[cacbb42 fix(sw): bump cache to v5.4 to …, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ec0e85ec91b73666cdda22ccbe278bb78bef0b06": "ec0e85e fix(css): collapse multi-line SVG data URL in .cat-header::before acros…" | kind=Commit | source=git | neighbors=[05fc83d fix: re-disable auth guard on c…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ee58d7a078f2d5966721143e1f315f8d1a1308b2": "ee58d7a content: deploy chapters 1-5 with full NREMT-aligned EMT curriculum" | kind=Commit | source=git | neighbors=[b791fda content: deploy chapters 4-5 (C…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c0": "c0.js" | kind=code-symbol | source=content/c0.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 77d4355 Merge pull request #21 from Sol…, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "content_m1_38": "m1-38.js" | kind=code-symbol | source=content/m1-38.js:L1 | neighbors=[02bf7e6 fix: replace single-quoted SVG …, 292c5bc Major Updates ✅❤️🔥, 323b8fc feat: migrate to Lucide SVG spr…, 4e04344 feat: migrate to Lucide SVG spr…, 77d4355 Merge pull request #21 from Sol…, 92528c5 Fix broken med-index links (m1-…] | lang=en
- "prometric_exam_examengine_init": ".init()" | kind=code-symbol | source=src/prometric/exam.js:L31 | neighbors=[ExamEngine, .constructor(), .bindEvents(), .initTheme(), .initWizard(), .loadChartJS()] | lang=en
- "prometric_exam_examengine_startexam": ".startExam()" | kind=code-symbol | source=src/prometric/exam.js:L362 | neighbors=[ExamEngine, .buildNavigator(), .filterQuestions(), .renderQuestion(), .showScreen(), .shuffleArray()] | lang=en
- "prometric_exam_examengine_updatenavigator": ".updateNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L458 | neighbors=[ExamEngine, .buildNavigator(), .renderQuestion(), .selectOption(), .submitAnswer(), .toggleFlag()] | lang=en
- "shared_admin_requireadmin": "requireAdmin()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L66 | neighbors=[index.ts, index.ts, index.ts, admin.ts, adminEmails(), audit()] | lang=en
- "vendor_chart_4_5_1_umd_min_js_datacheck": "._dataCheck()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .addElements(), .buildOrUpdateElements(), at(), .getDataset(), o()] | lang=en
- "vendor_chart_4_5_1_umd_min_no": "no()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), io(), n(), .path()] | lang=en
- "vendor_chart_4_5_1_umd_min_oi": "Oi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), .drawBody(), .drawFooter(), .drawTitle(), .adjustHitBoxes()] | lang=en
- "vendor_chart_4_5_1_umd_min_on": "on" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), ._createDescriptors(), ._descriptors(), .invalidate(), .notify()] | lang=en
- "vendor_chart_4_5_1_umd_min_pa": "pa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), ea(), ia(), ma(), sa()] | lang=en
- "vendor_chart_4_5_1_umd_min_ra": "ra()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, afterDatasetsUpdate(), a(), l(), o(), s()] | lang=en
- "vendor_chart_4_5_1_umd_min_s_getprops": ".getProps()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ao(), getCenterPoint(), ho(), inRange(), ro(), s()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, dt(), n(), .chartOptionScopes(), .createResolver(), on] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getpixelfordecimal": ".getPixelForDecimal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), getPixelForValue(), .getPixelForValue(), .getPixelForValue(), .getPixelForValue(), tn] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-008.json

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
