# Node Description Batch 12 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@6a16b9152f4c550ee94a520947d61899ba8ae505": "6a16b91 Add ACLS Megacode simulator with live monitor emulator" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, aed54cb PR #48 acls-megacode-scenarios] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@792897bb17591278098df24c63fb6d8496eeb07f": "792897b Remove unstyled tap ripple that rendered as a white square" | kind=Commit | source=git | neighbors=[1bd0a15 PR #38 medications-cleanup-xnuh…, app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@79e641016c73f54f3c9bd312ca47304e00640be9": "79e6410 Scaffold Medical reviewer (courses/medical) with c01 content" | kind=Commit | source=git | neighbors=[20ed56a Integrate PEPP reviewer into pl…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7fa435524c339a552bcbe6b5de2cc2a05e714bcb": "7fa4355 fix: resolve JS syntax errors in 5 content files (template literals, en…" | kind=Commit | source=git | neighbors=[58e37c8 fix(css): collapse second multi…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81d920a4245b514a03f34f327988c3b2bbeb1278": "81d920a Fix reflected XSS in med-index.html, add Google Play production audit" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 817a4bf Merge pull request #23 Fixed: r…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@82a7b904e12802a66894bf104a4dc953ea50508f": "82a7b90 fix: rebuild precache-manifest.js" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 467bf94 Restore full M1-38 medication f…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@82ff8147054f4e897f78e7ef89d0a099aa4bdd69": "82ff814 Add Playwright smoke test for BLS reviewer" | kind=Commit | source=git | neighbors=[23060c0 Integrate BLS reviewer into pla…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 154f42d Merge pull request #25 BLS revi…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@85f0dc5e9b198389d296aeb8006e43cc16e91555": "85f0dc5 Rebuild the admin console on Supabase Edge Functions, redesign the UI" | kind=Commit | source=git | neighbors=[662adfb Ship the Performance section fr…, index.ts, index.ts, index.ts, guide-images, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f44320b2d51de18bbcebcfaace8e63d74d8689e": "8f44320 Update exam-page tests for the BDLS pre-test bank" | kind=Commit | source=git | neighbors=[55997db ECG Simulator: easy mode, visib…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992e51c574ed2600dd92d0cd968872902ec74b89": "992e51c Enhance courses.html UI/UX with category colors, stats strip, and anima…" | kind=Commit | source=git | neighbors=[92528c5 Fix broken med-index links (m1-…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b0bbbb3fa1c06a898e2f8a92685c8fba0802e49": "9b0bbbb content: deploy chapters 6-10 with assembled NREMT-aligned EMT curricul…" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, main, 60c1782 chore: stop tracking TOC/ direc…, c10.js, c6.js, c7.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a4093824c3e0e60448b44de83115683a7d173aa0": "a409382 Tighten Edge Function CORS and Size cap 1MB ✅🛡️" | kind=Commit | source=git | neighbors=[4c17ee2 Security fix #2 🛡️, 7a36fde Tighten Edge Function CORS and …, guide-images-best, main, 4738132 Dependabot & Code Cleaning 🧽🫧, 5afab59 Add npm to Dependabot and remov…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a75c4158aacb58e82200796ce98542adeafacd4b": "a75c415 Scaffold BLS reviewer (courses/bls) with c01 content" | kind=Commit | source=git | neighbors=[build.py, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 7c0b047 Author BLS chapters c02-c03 (as…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa88f007c6ebedcde7fac67b435b8dc9a2d01834": "aa88f00 Update EMS Essentials card with additional links 👌" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ae06d27b93687add7c48c70ece474d81eb0017e9": "ae06d27 PALS illustrations ✅" | kind=Commit | source=git | neighbors=[6477974 BLS illustrations ✅, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b890616e8e35b0e9bc9d5fe3eaa4a53a38d682b8": "b890616 Add MCI Exam 1 (core MCI operations); current exam becomes Exam 2" | kind=Commit | source=git | neighbors=[5cfcb95 PR #55 fix Home ring, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd1c53b4288d4f5d38797f4b910a1842871e9bff": "bd1c53b Thinner greeting card; key, tooltips and labels for the row action icons" | kind=Commit | source=git | neighbors=[6026b7a Redesign the home page: courses…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c0536bd44b562e270641e383ea8bc930bd1a26d3": "c0536bd Create Carevent.html 🚑" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2542511d7adcbe948825790273d2bd6730ce9a3": "c254251 Exam pages: one design for every course, on a shared engine" | kind=Commit | source=git | neighbors=[2e4d5a6 MCI: Officer roles with two-row…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c7f6894cab5cee8ccb8a7955dbe389756c6ae26d": "c7f6894 Add Google Play screenshot campaign built from real app captures" | kind=Commit | source=git | neighbors=[81f95d0 ⭐PR #60 Unified Course Design s…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9e85ef04b6b81ccf3aea9853b5843c8aafc62ef": "c9e85ef Deduplicate the 8 standalone exam-review pages into a shared engine" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, ccr-b58d9c43-7az2tj, guide-images, worktree-pr85-supabase-deploy, 69ad055 Merge pull request #17 html Cle…, feedaf7 Add fresh production-readiness …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cacbb42c28683ecad2789588b27a313f85de8851": "cacbb42 fix(sw): bump cache to v5.4 to evict stale CSS after exp-label::before …" | kind=Commit | source=git | neighbors=[7fa4355 fix: resolve JS syntax errors i…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cee89970fb6aa9be41d15abede9ef919cce6b022": "cee8997 Courses page: opaque cards, polished buttons, unified progress, readabl…" | kind=Commit | source=git | neighbors=[62386af PR #51 Megacode 3, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d1c82f1295abd63dc36a10bec81906d6fb92a055": "d1c82f1 fix(sw): bump cache to v5.3 to force client refresh after Lucide migrat…" | kind=Commit | source=git | neighbors=[2fabb59 fix(exam): use innerHTML for SV…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d72ee1ed6094e0d1cd558e386b85504c968f1277": "d72ee1e MCI: new course home and exam screens, START/METHANE tools in the page" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, a8c0f40 PR #59 MCI UI update] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d93e86e78e55e2b3882174367e6e12d5ab262557": "d93e86e ECG Simulator: rebuild engine, rhythms and lab UI" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de5c27269a2cc5486896a90ad989cc617e411312": "de5c272 Added AHA Algorithms 💗" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=nl
- "commit:repo:github.com/SolimanAnas/SmartCare@dede3d836434b2a5be7cdde89e4569f0ae9516de": "dede3d8 AHA Algorithms" | kind=Commit | source=git | neighbors=[aa88f00 Update EMS Essentials card with…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e1be186ec2f3437fde9e9d8b0e054af17358b9e7": "e1be186 fix: make precache build deterministic across Windows/Linux" | kind=Commit | source=git | neighbors=[bc0cb4e Regenerate precache-manifest.js…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 301bb11 Fix NaN days ago — index.html r…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e56e5254233dfc1593145d05a3ba37f5fd4df5a3": "e56e525 Create GCS.html" | kind=Commit | source=git | neighbors=[0b92e14 Create ems-tools.html ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_curriculum_index": "curriculum-index.js" | kind=code-symbol | source=content/curriculum-index.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 2550192 PR #37 Medications update, 467bf94 Restore full M1-38 medication f…, 7d02ca2 Rename drug formulary numbering…, 8080576 PR #30, Redesign drug monograph…, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "prometric_exam_examengine_beginsession": ".beginSession()" | kind=code-symbol | source=src/prometric/exam.js:L550 | neighbors=[ExamEngine, .buildNavigator(), .formatTime(), .renderQuestion(), .showScreen(), .startTimer()] | lang=en
- "prometric_exam_examengine_closenavigator": ".closeNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L930 | neighbors=[ExamEngine, .setSheetInert(), .syncNavigatorState(), .confirmEnd(), .endExam(), .goToQuestion()] | lang=en
- "scripts_compose_render_frame": "render_frame()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L671 | neighbors=[compose.py, main(), render_full(), render_macro(), render_open(), render_play_overlays()] | lang=en
- "shared_admin_requireadmin": "requireAdmin()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L85 | neighbors=[index.ts, index.ts, index.ts, admin.ts, adminEmails(), audit()] | lang=en
- "vendor_chart_4_5_1_umd_min_as": "as()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .active(), .cancel(), .constructor(), ._notify(), .tick()] | lang=en
- "vendor_chart_4_5_1_umd_min_bo": "bo" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .computeTickLimit(), .configure(), .constructor(), .getLabelForValue()] | lang=en
- "vendor_chart_4_5_1_umd_min_calculatebarvaluepixels": "_calculateBarValuePixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), .applyStack(), .getParsed(), s(), .getDataVisibility()] | lang=en
- "vendor_chart_4_5_1_umd_min_de": "de" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .apply(), .constructor(), .describe(), .get(), .override()] | lang=en
- "vendor_chart_4_5_1_umd_min_draw": "draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), fo(), ho(), .getParsed(), Le()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-011.json

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
