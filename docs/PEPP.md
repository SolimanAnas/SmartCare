# PEPP Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **PEPP (Pediatric Education for Prehospital Professionals) Course Reviewer** at `courses/pepp/`, cloned from the completed **PALS reviewer** at `courses/pals/`, with all clinical content aligned to the **AAP/Jones & Bartlett PEPP Fourth Edition (2020)** curriculum and cross-checked against the **2025 AHA/AAP Guidelines for CPR and ECC — Part 8: Pediatric Advanced Life Support** wherever resuscitation content overlaps.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/pals/` | **Primary reference implementation.** Six-tab reviewer (Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables), `build.py` → `data/bundle.js` (`window.PALS_DATA`), `pals_`-namespaced localStorage. | Copy this architecture exactly; it is the newest and most mature reviewer. |
| `courses/pals/README.md`, `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | Reference README, and the plan documents for the sibling AHA courses. | Mirror the README structure; follow the same phase/gate discipline. PEPP is the first *non-AHA* course in this family — read PALS closely so pediatric content doesn't contradict it. |
| `courses/bls/data/bls/chapters/c08.json`, `c09.json` (Child/Infant BLS) and the full `courses/pals/data/pals/**` tree | Existing pediatric clinical content already in the repo. | PEPP must cross-reference, not duplicate or contradict, PALS's pediatric assessment and resuscitation algorithms. Where PEPP content would restate PALS drug dosing/arrest algorithms, link to PALS instead of re-authoring it. |
| `src/PEPP/exam_a.json`, `exam_b.json`, `exam_c.json`, `exam_d.json` (25 questions each, 100 total quiz-bank items) and `src/PEPP/pearls.json` — existing PEPP **exam** question bank (200 total per `data/courses.json`) used by `pages/pepp.html`. | Do **not** modify or move. The reviewer is a separate product. Skim these for topic coverage (pediatric assessment triangle, respiratory distress/failure, shock, trauma, toxic exposures) to inform the chapter plan below. |
| `pages/pepp.html` | Existing PEPP exam page. | Leave as-is; optionally link to it from the reviewer README/UI as "exam practice", same convention as BLS/ACLS/PALS. |
| `data/courses.json` | Course registry — a `pepp` exam entry already exists (`link: "pepp.html"`, `count: 200`); `bls-reviewer`/`acls-reviewer`/`pals-reviewer` entries show the reviewer-entry pattern. | Add a `pepp-reviewer` entry pointing to `../courses/pepp/index.html`. |
| `pages/courses.html` | Course catalog; the card renderer has a `REVIEWER_LINKS` map (search for it) currently holding `itls`, `bls`, `pals`, `acls`. | Add `pepp: { review: '../courses/pepp/index.html', exam: 'pepp.html' }`. |
| `scripts/build_precache.py` | PWA precache list (has `courses/bls`, `courses/acls`, `courses/pals` index + bundle entries). | Add the PEPP equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`) | Currently `["", "pages", "chapters", "courses/itls", "courses/bls", "courses/acls", "courses/pals", "src/prometric"]`. | Add `courses/pepp`; regenerate `sitemap.xml`. |
| `tests/pals-reviewer.spec.js` (or `bls-reviewer.spec.js`) | Playwright smoke-test pattern, including mobile no-horizontal-overflow checks. | Clone as `tests/pepp-reviewer.spec.js`. |
| `icons/courses/thumb/pepp.png` | Branded thumbnail — already exists. | Reference from the sidebar brand and card. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules — notably: run `graphify update .` after modifying code (when available). | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/pals/` does.** PEPP is a re-skin with new content: `window.PEPP_DATA`, `pepp_` localStorage prefix, `data/pepp/**` paths.

---

## 1. Product definition

A **PEPP course reviewer** for EMTs, AEMTs, paramedics, and other prehospital providers preparing for the **AAP Pediatric Education for Prehospital Professionals** course. Self-contained, offline-capable, pure data + one HTML file. Unlike PALS (which targets ALS providers running a code with weight-based drug/energy dosing), PEPP is broader and assessment-first: it spans **both BLS- and ALS-level** prehospital pediatric care, is organized around the **Pediatric Assessment Triangle (PAT)** as its signature tool, and emphasizes recognition, primary/secondary assessment, transport decisions, and family-centered/developmental communication over deep resuscitation pharmacology.

Per chapter, same six content types as the sibling courses:

1. **Summary** — concise original-wording study notes with learning objectives, clinical pearls, red flags, common mistakes, memory aids, decision trees.
2. **Flashcards** — Q/A cards with categories.
3. **Quiz** — PEPP-exam-style MCQs with rationale + difficulty.
4. **Scenarios** — realistic pediatric case vignettes with age-appropriate vitals, one best answer, explanation, clinical pearl.
5. **Algorithms** — structured stepwise approaches (PAT → primary assessment → secondary assessment → transport decision is the spine; disease-specific algorithms — e.g., respiratory distress vs failure management — where PEPP defines its own stepwise approach distinct from a PALS arrest algorithm).
6. **Tables** — structured comparison tables (age-banded normal vitals is the signature PEPP table, alongside developmental-stage communication tips and BLS-vs-ALS scope-of-practice tables).

---

## 2. Clinical source of truth — AAP PEPP curriculum + AHA/AAP pediatric guidelines (CRITICAL)

### 2.1 Verification protocol for the implementing agent

- Before writing content, **verify curriculum specifics with web research** (aap.org/pedialink PEPP pages, the AAP PEPP Fact Sheet, Jones & Bartlett's PEPP product pages, and — for anything touching resuscitation — cpr.heart.org / *Circulation* Part 8). Do not rely on memory for anything marked ⚠️ below.
- Facts in §2.2 were verified via web search (dated **July 2026**) and are safe to use as a starting point; still sanity-check while authoring.
- Every chapter JSON gets a `references[]` entry naming the source relied on (e.g. `"AAP Pediatric Education for Prehospital Professionals (PEPP), 4th Edition"` or, for resuscitation cross-references, `"2025 AHA/AAP Guidelines for CPR and ECC — Part 8: Pediatric Advanced Life Support"`). No verbatim copying from AAP/Jones & Bartlett materials: **all wording must be original**, same policy as the AHA-course siblings.
- Add the standard disclaimer (README + app footer): educational reviewer, not a substitute for an official PEPP course, completion card, or local protocols.

### 2.2 Verified / stable facts (safe to use, still sanity-check)

**Verified via web search, July 2026:**
- The current published edition is **PEPP, Fourth Edition (2020)**, authored by the American Academy of Pediatrics and published by Jones & Bartlett Learning. A **Fifth Edition is announced to launch in September 2026** — after this doc's writing date, so treat the 4th edition as authoritative unless the 5th has since shipped (⚠️ re-check at authoring time; see §2.3).
- PEPP offers courses at two levels: a **BLS-level course** for EMRs/EMTs and an **ALS-level course** for AEMTs/paramedics, sharing the same assessment framework but with the ALS course adding advanced interventions.
- The course's signature tool is the **Pediatric Assessment Triangle (PAT)** — a rapid, hands-off, across-the-room visual assessment of **Appearance, Work of Breathing, and Circulation to Skin**, used to form a general impression of "sick vs. not sick," identify the likely physiologic category (e.g., respiratory, circulatory, neurologic), and gauge urgency — *before* hands-on primary assessment. The PAT has been part of PEPP for over two decades and is credited as one of the most widely adopted pediatric prehospital assessment tools in EMS education.
- PEPP course delivery is case-based and highly visual: lectures, video, hands-on skills stations, and small-group scenarios.
- PEPP's scope explicitly includes: pediatric assessment/PAT, respiratory emergencies, shock, cardiac/rhythm disturbances, neurologic emergencies, trauma, toxic exposures/environmental emergencies, neonatal care, child maltreatment recognition, children with special healthcare needs, family-centered care and developmental/communication considerations, and EMS operations including disaster/MCI triage involving children.

**Long-stable pediatric core (carried from the PALS/BLS reviewers — do not contradict):**
- Primary assessment sequence (after PAT): Airway, Breathing, Circulation, Disability, Exposure — same ABCDE spine as PALS, but PEPP frames it as a field assessment/transport-decision tool rather than a resuscitation-team algorithm.
- Age-banded normal vital sign ranges (infant/toddler/preschool/school-age/adolescent) — reuse the ranges already validated in `courses/pals/data/pals/**` rather than re-deriving them; PEPP's table should match PALS's numbers exactly.
- Weight-based drug dosing, defibrillation/cardioversion energies, and cardiac arrest algorithms are **PALS's job, not PEPP's** — PEPP chapters that touch resuscitation should describe the *recognition and initial stabilization* step, then explicitly defer/link to the PALS reviewer for arrest-algorithm depth.

### 2.3 ⚠️ Items to VERIFY before authoring

1. **Whether the PEPP Fifth Edition has shipped** by the time authoring begins (announced for September 2026). If it has, re-verify §2.2's edition-specific claims and module list against the 5th edition's actual table of contents; if not, the 4th edition (2020) remains authoritative.
2. **Exact current module/chapter list and terminology** used by the official PEPP course manual — the module names and structure above are a reasonable synthesis from public AAP/Jones & Bartlett materials, not a verbatim table of contents; verify against the actual course manual or instructor materials if accessible, and adjust the chapter plan in §3 accordingly rather than treating it as fixed.
3. **BLS-level vs ALS-level content boundaries** — confirm which topics/skills are ALS-only (e.g., IO access, advanced airway adjuncts, certain medications) so the reviewer can flag scope-of-practice differences accurately per chapter.
4. **Child maltreatment reporting requirements and documentation guidance** — confirm current AAP-recommended language (mandatory reporting varies by jurisdiction; keep content general/educational, not jurisdiction-specific legal advice).
5. **Any 2023–2025 updates to pediatric triage tools** (e.g., JumpSTART, pediatric MCI triage) referenced in PEPP's EMS-operations content, in case ILCOR/AAP guidance has shifted.
6. Confirm whether PEPP's shock/respiratory-failure "field management" steps have been updated to match any 2025 AHA/AAP Part 8 language changes, so the chapters that cross-reference PALS don't go stale relative to it.

Record what you verified (source + date) in `courses/pepp/README.md` under a "Curriculum & guideline provenance" heading.

---

## 3. Course structure — `manifest.json`

Create `courses/pepp/data/pepp/manifest.json` following the PALS/BLS manifest schema exactly. Key values: `"id": "pepp"`, `"title": "PEPP — Pediatric Education for Prehospital Professionals"`, `"edition": "Based on the AAP PEPP, 4th Edition"`, `"certification": "AAP PEPP Provider (BLS or ALS track)"`, `"difficulty": "Beginner to Advanced"` (spans both tracks), `"estimatedHours": 14`, audience: EMTs, AEMTs, paramedics, EMS students; prerequisites: current BLS provider competency; PALS knowledge helpful but not required.

### Chapter plan (14 chapters, `c01`–`c14`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Why Children Are Different: Developmental & Anatomic Considerations | Foundations | Beginner |
| c02 | 2 | The Pediatric Assessment Triangle | Foundations | Beginner |
| c03 | 3 | Primary Assessment (ABCDE) & Scene Size-Up | Foundations | Intermediate |
| c04 | 4 | History Taking, Secondary Assessment & Family-Centered Communication | Foundations | Intermediate |
| c05 | 5 | Respiratory Distress & Respiratory Failure | Respiratory | Intermediate |
| c06 | 6 | Shock Recognition & Field Management | Circulation | Intermediate |
| c07 | 7 | Cardiac Emergencies & Rhythm Recognition (field recognition; defer arrest algorithms to PALS) | Circulation | Intermediate |
| c08 | 8 | Neurologic Emergencies: Altered Mental Status & Seizures | Neurologic | Intermediate |
| c09 | 9 | Trauma: Assessment & Field Stabilization | Trauma | Advanced |
| c10 | 10 | Toxic Exposures & Environmental Emergencies | Medical | Intermediate |
| c11 | 11 | Neonatal Care & Resuscitation Basics | Neonatal | Advanced |
| c12 | 12 | Child Maltreatment Recognition | Special Populations | Intermediate |
| c13 | 13 | Children With Special Healthcare Needs & Technology Dependence | Special Populations | Intermediate |
| c14 | 14 | EMS Operations: Transport Decisions, Disaster & MCI Triage Involving Children | Operations | Intermediate |

Notes: c02 is the flagship PEPP chapter — give it the deepest treatment (PAT legs, "sick/not sick" gestalt, urgency triage). c05–c08 explicitly cross-reference PALS for anything beyond field recognition/initial stabilization (state this in each chapter's summary, don't restate PALS drug tables). c07 in particular should *not* duplicate the ACLS/PALS arrest-algorithm tables — link out instead. c11 covers neonatal transition/basic steps distinct from NRP-level resuscitation depth. c14 covers pediatric-specific MCI triage (e.g., JumpSTART) as its own table.

---

## 4. Data schemas & content targets

Schemas are **identical** to the PALS/BLS reviewers (see `courses/pals/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–9; pearls/flags/mistakes/aids 4–6 each; flashcards 14–18 (**≥ 200 total**, matching the existing PEPP exam bank's scale); quiz questions 14–18 (**≥ 200 total**, ~45 % Easy / 40 % Medium / 15 % Hard — PEPP skews slightly easier than ACLS/PALS since it's assessment-first rather than pharmacology-heavy); scenarios 3 (**42 total**); algorithms — every chapter has at least the PAT/primary-assessment spine represented once, plus disease-specific algorithms in c05, c06, c09, c11, c14 (**≥ 10 total**); tables — mandatory: age-banded normal vitals (c01/c03, must match PALS's numbers), PAT legs table (c02), BLS-vs-ALS scope-of-practice table (recurring where relevant), pediatric MCI/JumpSTART triage table (c14) (**≥ 10 total**).

Scenario vitals should look like PEPP field cases: brief scene context, PAT gestalt first ("appears lethargic, increased work of breathing, mottled skin"), then vitals, then one best next action with an explanation that teaches the *why* and names the PEPP/PAT concept — not a drug-dosing calculation (that's PALS's job).

---

## 5. App shell, build script, README

1. Copy `courses/pals/index.html` → `courses/pepp/index.html`. Rename: `PALS_DATA` → `PEPP_DATA`, `data/pals/` → `data/pepp/`, localStorage keys `pals_*` → `pepp_*`, title/brand "PEPP Reviewer — Pediatric Education for Prehospital Professionals", icon `../../icons/courses/thumb/pepp.png`, `<meta>` description. Keep all six tabs and every feature; add nothing in v1.
2. **Mobile-friendliness is a hard requirement**, same as every sibling reviewer — preserve the `minmax(0, 1fr)` grid tracks, `min-width: 0` on the sidebar, `.table-wrap { overflow-x: auto }` around every table, and the ≤820px media query overrides. Never reintroduce a bare `1fr` track.
3. Copy `courses/pals/build.py` → `courses/pepp/build.py`; change `DATA` to `data/pepp`, output global to `window.PEPP_DATA`, header comment. Must end `Validation OK.`
4. Write `courses/pepp/README.md` mirroring the PALS one: layout, totals, run instructions, schema reference, **curriculum & guideline provenance** (§2.3 resolutions), disclaimer ("not a substitute for an official AAP PEPP course, completion card, or local protocols").

## 6. Platform integration

1. `pages/courses.html` — add `pepp: { review: '../courses/pepp/index.html', exam: 'pepp.html' }` to the `REVIEWER_LINKS` map (one line; the renderer already handles the dual-button card). The `pepp` entry already exists in the `COURSES` array.
2. `data/courses.json` — add `{ "id": "pepp-reviewer", "shortTitle": "PEPP Reviewer", "title": "Pediatric Education for Prehospital Professionals — Course Reviewer", "link": "../courses/pepp/index.html", "available": true, "icon": "🧸", "count": <final quiz total> }` after the existing `pepp` entry.
3. `scripts/build_precache.py` — add `courses/pepp/index.html` and `courses/pepp/data/bundle.js`; run it to regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/pepp` to `SCAN_DIRS`; run it to regenerate `sitemap.xml`.
5. `grep -rn "courses/pals" --include='*.{html,js,py,json}' .` and mirror any registration point found for PEPP.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a source (especially the 5th-edition question); write provenance notes. *Gate: all resolved.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01–c02 content. *Gate: `python courses/pepp/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c04, c05–c08, c09–c11, c12–c14), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check that c05–c08 do not duplicate PALS arrest-algorithm/drug-dosing content, and that vitals tables match PALS's numbers.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through 3 chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep (correct-index bounds, required fields); clone `tests/pals-reviewer.spec.js` → `tests/pepp-reviewer.spec.js` and run it — **including mobile no-horizontal-overflow tests (360px and 320px viewports)** across all six tabs on a table-heavy chapter — hard gate; record final counts in README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter PALS/ACLS/BLS/ITLS reviewers, `src/PEPP/*`, or `pages/pepp.html`.
- **Do not re-author PALS's resuscitation content.** Where PEPP chapters touch cardiac arrest, drug dosing, or defibrillation energies, describe field recognition/initial stabilization only and explicitly point to the PALS reviewer for depth — this avoids two sources of truth drifting apart.
- No copyrighted AAP/Jones & Bartlett text reproduction; original wording; describe algorithms as steps, not verbatim course-manual flowcharts.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where the source material uses both.
