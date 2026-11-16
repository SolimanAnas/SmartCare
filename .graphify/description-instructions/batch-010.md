# Node Description Batch 11 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@a497e1f84516bd0facac114a3d66e7055ea88113": "a497e1f Rewrite chapter 6 (Trauma Emergencies) as guides" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e5cb445 Herniation signs: any one sign …, c6.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@aa88f007c6ebedcde7fac67b435b8dc9a2d01834": "aa88f00 Update EMS Essentials card with additional links 👌" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ae7e23ef60eff3d44104567cf6d4fae7de61b2b1": "ae7e23e Fix Table of Contents chapters not expanding and white-square artifacts" | kind=Commit | source=git | neighbors=[773db00 Update remaining formulary coun…, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@afeb5dc2f14de51d1103881fbc05d5ac536344e5": "afeb5dc feat: Run Playwright tests in parallel⭐" | kind=Commit | source=git | neighbors=[1fa9c3a Run Playwright tests in parallel, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 123b1c0 Chapter 10 rewrite: Clinical Pr…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@be729fd04efa9f48b6fae009accd2a837f298e16": "be729fd Merge pull request #29 from restore-medications" | kind=Commit | source=git | neighbors=[7d02ca2 Rename drug formulary numbering…, 82a7b90 fix: rebuild precache-manifest.…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c0536bd44b562e270641e383ea8bc930bd1a26d3": "c0536bd Create Carevent.html 🚑" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c5c05673fdfe84ce3190d71397c8f32dd2b3df83": "c5c0567 Exam pages: Practice / Exam modes; MCI's third bank is Exam 3" | kind=Commit | source=git | neighbors=[c254251 Exam pages: one design for ever…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 81f95d0 ⭐PR #60 Unified Course Design s…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9e85ef04b6b81ccf3aea9853b5843c8aafc62ef": "c9e85ef Deduplicate the 8 standalone exam-review pages into a shared engine" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 69ad055 Merge pull request #17 html Cle…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cacbb42c28683ecad2789588b27a313f85de8851": "cacbb42 fix(sw): bump cache to v5.4 to evict stale CSS after exp-label::before …" | kind=Commit | source=git | neighbors=[7fa4355 fix: resolve JS syntax errors i…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cb4bd6458d98a117b115d428146ad1970853837b": "cb4bd64 Redesign drug monograph pages and wire the formulary into Chapter 11" | kind=Commit | source=git | neighbors=[7d02ca2 Rename drug formulary numbering…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 8080576 PR #30, Redesign drug monograph…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cb54779d521f4ea6263770989d5af714ec258bf9": "cb54779 Megacode: add Quick Code lite mode (now the default)" | kind=Commit | source=git | neighbors=[aed54cb PR #48 acls-megacode-scenarios, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 700555c #49_2 acls-megacode-scenarios] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ce11d74b6ab584ea2bc7a2bf64aab9515cdef4e5": "ce11d74 Rewrite chapter 10 (Clinical Procedures & Skills) as guides" | kind=Commit | source=git | neighbors=[cae9224 Chapter 9 rewrite: Emergency Ph…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, e3854cc Drop endotracheal drug delivery…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d1c82f1295abd63dc36a10bec81906d6fb92a055": "d1c82f1 fix(sw): bump cache to v5.3 to force client refresh after Lucide migrat…" | kind=Commit | source=git | neighbors=[2fabb59 fix(exam): use innerHTML for SV…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d3c384340b974b079e168631b3f1d6f7af358a90": "d3c3843 Update medication list" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2550192 PR #37 Medications update, curriculum-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d6c133efce4bb7fb0d116f5e881d4d0561d898f6": "d6c133e Rewrite chapter 7 (Special Populations) as guides" | kind=Commit | source=git | neighbors=[a7f8828 Chapter 6 update : Trauma Emerg…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 5e168b5 Chapter 7 Update : Special Popu…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de5c27269a2cc5486896a90ad989cc617e411312": "de5c272 Added AHA Algorithms 💗" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=nl
- "commit:repo:github.com/SolimanAnas/SmartCare@dede3d836434b2a5be7cdde89e4569f0ae9516de": "dede3d8 AHA Algorithms" | kind=Commit | source=git | neighbors=[aa88f00 Update EMS Essentials card with…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e56e5254233dfc1593145d05a3ba37f5fd4df5a3": "e56e525 Create GCS.html" | kind=Commit | source=git | neighbors=[0b92e14 Create ems-tools.html ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e7131006c6e9c7c4e51b27507faa9217ce7a7780": "e713100 PR #58 Courses page layout fix" | kind=Commit | source=git | neighbors=[6018c48 PR #57 MCI Exam 1, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, a8c0f40 PR #59 MCI UI update] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@eb1ff626a688911b1f020353cea66edcfd6e6f21": "eb1ff62 Rewrite chapter 1 (Foundations of Care) as guides" | kind=Commit | source=git | neighbors=[5e168b5 Chapter 7 Update : Special Popu…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 54bf4f2 Chapter 1 rewrite: Foundations …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f272ce6dbdd19c08361ef52fdcbf7da2a6f262bc": "f272ce6 Courses page: compact, collapsible layout with real progress" | kind=Commit | source=git | neighbors=[6ee3cd6 PR #50 acls-megacode-scenarios, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 62386af PR #51 Megacode 3] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f953366624005ffe9ab6d60808a50dfb0d22b4da": "f953366 PR #26 BLS-reviewer" | kind=Commit | source=git | neighbors=[154f42d Merge pull request #25 BLS revi…, 5157b39 Fix horizontal overflow on phon…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fa0335e98562bad624985ede1c0a908db6542b3d": "fa0335e Add 190 paramedic-level (ALS) questions to the Prometric exam" | kind=Commit | source=git | neighbors=[734b6ca Prometric exam: add an Exam Lev…, app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@fb463cfa3b4a0857dc1a11ef10170467e7cb796a": "fb463cf Rewrite chapter 8 (Environmental & Disaster) as guides" | kind=Commit | source=git | neighbors=[54bf4f2 Chapter 1 rewrite: Foundations …, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1116a68 Chapter 8 rewrite: Environmenta…] | lang=en
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[5e168b5 Chapter 7 Update : Special Popu…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, d6c133e Rewrite chapter 7 (Special Popu…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…] | lang=en
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, fb463cf Rewrite chapter 8 (Environmenta…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…] | lang=en
- "content_curriculum_index": "curriculum-index.js" | kind=code-symbol | source=content/curriculum-index.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 2550192 PR #37 Medications update, 467bf94 Restore full M1-38 medication f…, 7d02ca2 Rename drug formulary numbering…, 8080576 PR #30, Redesign drug monograph…, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "prometric_exam_examengine_showscreen": ".showScreen()" | kind=code-symbol | source=src/prometric/exam.js:L1043 | neighbors=[ExamEngine, .calculateResults(), .endExam(), .init(), .newExam(), .retryIncorrect()] | lang=en
- "scripts_compose_render_frame": "render_frame()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L671 | neighbors=[compose.py, main(), render_full(), render_macro(), render_open(), render_play_overlays()] | lang=en
- "vendor_chart_4_5_1_umd_min_as": "as()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .active(), .cancel(), .constructor(), ._notify(), .tick()] | lang=en
- "vendor_chart_4_5_1_umd_min_bo": "bo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .computeTickLimit(), .configure(), .constructor(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_calculatebarvaluepixels": "_calculateBarValuePixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), .applyStack(), .getParsed(), s(), .getDataVisibility()] | lang=en
- "vendor_chart_4_5_1_umd_min_de": "de" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .apply(), .constructor(), .describe(), .get(), .override()] | lang=en
- "vendor_chart_4_5_1_umd_min_draw": "draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), fo(), ho(), .getParsed(), Le()] | lang=en
- "vendor_chart_4_5_1_umd_min_hs": "hs" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .acquireContext(), .addEventListener(), .getDevicePixelRatio(), .getMaximumSize(), .isAttached()] | lang=en
- "vendor_chart_4_5_1_umd_min_n_createresolver": ".createResolver()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.configure(), ._resolveAnimations(), n(), o(), yn(), .resolveNamedOptions()] | lang=en
- "vendor_chart_4_5_1_umd_min_ne": "ne()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabelForValue(), .getLabelAndValue(), Be(), .rotate(), n()] | lang=en
- "vendor_chart_4_5_1_umd_min_on_createdescriptors": "._createDescriptors()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, an(), e(), l(), o(), rn()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_computelabelitems": "._computeLabelItems()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ki(), n(), o(), ._getLabelSizes(), ._getXAxisLabelAlignment()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_getmatchingvisiblemetas": ".getMatchingVisibleMetas()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), Fs(), _getStacks(), .getDataTimestamps(), tn, .getSortedVisibleDatasetMetas()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-010.json

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
