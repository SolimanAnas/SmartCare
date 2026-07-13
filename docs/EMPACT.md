# EMPACT Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **EMPACT (Emergency Medical Patients: Assessment, Care & Transport)** course reviewer at `courses/empact/`, cloned from the completed **PALS reviewer** at `courses/pals/` (itself descended from `courses/bls/` and `courses/acls/`), with clinical content aligned to **current evidence-based differential-diagnosis practice for the acute medical patient**, refreshed against the **2025 AHA Guidelines for CPR and ECC** wherever EMPACT content touches resuscitation-adjacent topics (shock, dysrhythmia recognition, arrest-adjacent decompensation).
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/pals/` | **Primary reference implementation.** Six-tab reviewer (Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables), `build.py` → `data/bundle.js` (`window.PALS_DATA`), namespaced localStorage. | Copy this architecture exactly. |
| `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | The plan documents for the sibling AHA courses. | Follow the same phase/gate discipline; keep tone and section structure identical. |
| `docs/MEDICAL.md` (sibling plan, may exist/be in progress) | Covers general adult medical-emergency disease content by body system. | **Do not duplicate disease-specific pathophysiology/treatment chapters that belong to Medical.** EMPACT's differentiator is the *assessment-and-differential-reasoning process itself* (case-based, Socratic), not an encyclopedia of diseases. |
| `src/EMPACT/exam1.json` (50 case-based MCQs), `src/EMPACT/pearls.json`, `pages/empact.html` | Existing EMPACT **exam** page and question bank. Skim these — the existing bank is heavily case-vignette-driven (vitals + presentation → best next differential/action), covering chest pain/PE/tamponade, dyspnea/COPD/asthma/anaphylaxis, altered mental status (stroke, DKA, hyperkalemia, sepsis), abdominal pain, and therapeutic-communication/scene-safety items. | Do **not** modify or move. The reviewer is a separate product. |
| `data/courses.json` | Course registry. Has an `"empact"` exam entry (`link: "empact.html"`, `count: 50`); a `"pals-reviewer"` entry shows the reviewer-entry pattern. | Add an `"empact-reviewer"` entry. |
| `pages/courses.html` | Course catalog; `REVIEWER_LINKS` map (search for it, currently `itls`, `bls`, `pals`, `acls`) gives a course dual **Review/Exam** buttons. | Add `empact: { review: '../courses/empact/index.html', exam: 'empact.html' }`. |
| `scripts/build_precache.py` | PWA precache list (has the `bls`/`acls`/`pals` reviewer entries). | Add the EMPACT equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`) | Includes `courses/itls`, `courses/bls`, `courses/acls`, `courses/pals`. | Add `courses/empact`; regenerate `sitemap.xml`. |
| `tests/pals-reviewer.spec.js` | Playwright smoke-test pattern. | Clone as `tests/empact-reviewer.spec.js`. |
| `icons/courses/thumb/empact.png` | Branded thumbnail — already exists. | Reference from the sidebar brand and card. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules — run `graphify query "<question>"` before reading/grepping source, `graphify update .` after modifying code. | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/pals/` does.** EMPACT is a re-skin with new content: `window.EMPACT_DATA`, `empact_` localStorage prefix, `data/empact/**` paths.

---

## 1. Product definition

An **EMPACT course reviewer** for paramedics, nurses, PAs, and physicians preparing for (or refreshing under) **EMPACT — Emergency Medical Patients: Assessment, Care & Transport**, a real, currently-taught 16-hour NREMT-accepted paramedic-recertification / CAPCE-approved CE course built on case-driven Socratic discussion of the acute medical patient. EMPACT's textbook lineage (Dalton, Limmer, Mistovich, Werman; Pearson/Brady, with NAEMSP and the San Francisco Paramedic Association) descends from **AMLS (Advanced Medical Life Support)**. Its identity is the **differential-diagnosis process** — taking a presentation + assessment findings and reasoning to the most likely cause and next best action — not a systems-by-systems disease textbook (that belongs to `docs/MEDICAL.md`/`courses/medical/`).

Per chapter, the same six content types as the other reviewers, reframed around assessment/reasoning:

1. **Summary** — concise original-wording study notes: assessment framework, key differentiating findings, clinical pearls, red flags, common mistakes, memory aids, decision trees ("if X finding → favor A over B").
2. **Flashcards** — Q/A cards drilling differentiating signs/symptoms between look-alike conditions (e.g., anaphylaxis vs. allergic reaction, cardiac vs. pleuritic chest pain, DKA vs. hypoglycemia).
3. **Quiz** — EMPACT-exam-style case-vignette MCQs (vitals + history + exam finding → best next step or most likely diagnosis) with rationale + difficulty, mirroring the style already in `src/EMPACT/exam1.json`.
4. **Scenarios** — realistic, longer case vignettes with serial reassessment, one best answer, explanation, clinical pearl.
5. **Algorithms** — structured stepwise **assessment/decision** algorithms (primary survey → differential branch points → transport decision), not resuscitation drug algorithms (those live in BLS/ACLS/PALS).
6. **Tables** — comparison tables that are EMPACT's signature: look-alike-condition differentiators (e.g., PE vs. tamponade vs. pneumothorax vs. pericarditis; stroke vs. hypoglycemia vs. migraine; sepsis vs. cardiogenic vs. hypovolemic vs. distributive shock).

---

## 2. Clinical source of truth — current differential-diagnosis practice (CRITICAL)

### 2.1 Verification protocol for the implementing agent

- EMPACT does not have a single annually-revised guideline document the way AHA courses do. Ground content in: (a) the **current National EMS Education Standards (NHTSA)** and the **NREMT Paramedic cognitive exam blueprint's Assessment/Medical domains**, (b) **current disease-specific guidelines** for whatever condition a chapter covers (e.g., current ACC/AHA chest-pain guideline, GOLD COPD report, ADA standards of care for DKA/hypoglycemia, Surviving Sepsis Campaign, current stroke recognition/triage guidance), and (c) the **2025 AHA Guidelines for CPR and ECC** wherever a topic borders resuscitation (shock progressing to arrest, unstable dysrhythmia).
- Before writing content, **web-verify every ⚠️ item in §2.3**. The source textbook (1st edition, ~2013, originally aligned to 2010 AHA guidelines per publisher listings) is over a decade old — do not port any dated drug dose, vital-sign threshold, or diagnostic criterion from it without checking against a current source.
- Every chapter JSON gets a `references[]` entry naming the framework/guideline relied on. **Original wording only** — no verbatim textbook or NREMT text.
- Add the standard disclaimer (README + app footer): educational reviewer modeled on the EMPACT continuing-education course, not a substitute for the official EMPACT course, a certificate of completion, or local protocols.

### 2.2 Stable / low-risk core framework (safe to use as scaffolding, still sanity-check specifics)

- **Assessment sequence:** scene safety/size-up → primary survey (impression, airway, breathing, circulation, disability, expose) → identify life threats → focused history (SAMPLE) and OPQRST for the chief complaint → secondary assessment/focused exam → vitals + monitoring (SpO₂, ETCO₂ where used, glucose, ECG) → ongoing/serial reassessment → differential narrowing → treatment + transport decision.
- **Shock recognition/classification** (hypovolemic, distributive [septic/anaphylactic/neurogenic], cardiogenic, obstructive [tamponade/tension pneumothorax/massive PE]) as an organizing framework — a first-class EMPACT table topic.
- **Chest-pain/dyspnea differential clues** that are exam-finding-level and long-stable: JVD + muffled heart sounds + hypotension → Beck's triad/tamponade; absent unilateral breath sounds + hypotension + tracheal deviation → tension pneumothorax; pleuritic pain reproducible by palpation → musculoskeletal/pericarditis; sudden dyspnea post-immobilization/surgery/travel → PE; positional/exertional pattern → cardiac.
- **Altered mental status framework** (AEIOU-TIPS or equivalent original mnemonic) and the discipline of checking glucose early.
- **Anaphylaxis vs. allergic reaction:** the differentiator is systemic involvement (respiratory/cardiovascular/GI) vs. localized skin findings; epinephrine IM is first-line for anaphylaxis — verify current dose/route specifics against current anaphylaxis guidelines before authoring (⚠️ below).
- **Therapeutic communication and special-population techniques** (hearing-impaired, pediatric, geriatric, non-English-speaking, altered-competency patients), and documentation/legal basics — carried from the existing question bank's assessment-technique items.

### 2.3 ⚠️ Items that must be VERIFIED before authoring (dated source, evolving evidence, or dose-critical)

1. **Anaphylaxis management specifics** (epinephrine dose/route/repeat interval, second-line antihistamine/steroid role) — verify against current (post-2020) anaphylaxis management guidance, not the 2013-era textbook.
2. **Sepsis recognition criteria** — verify current criteria/terminology (qSOFA/SIRS status has shifted since 2013) and current prehospital sepsis-alert practice.
3. **Stroke recognition and triage** — verify current large-vessel-occlusion screening tools (e.g., current field stroke scales) and thrombectomy/thrombolysis time-window guidance in current use; do not reuse a stale window.
4. **DKA vs. HHS vs. hypoglycemia differentiation and field glucose management** — verify current ADA-aligned thresholds and prehospital dextrose/glucagon practice.
5. **Hyperkalemia field recognition and treatment options** (ECG changes, calcium/insulin-glucose/beta-agonist/bicarbonate roles) — verify current scope-of-practice-appropriate framing; do not over-specify ALS interventions beyond what a field differential course would cover.
6. **COPD/asthma differentiation and field management specifics** — verify current GOLD/GINA-aligned guidance.
7. **Shock classification terminology** — confirm current preferred terminology (e.g., "distributive" vs. older category names) matches current NREMT/education-standards usage.
8. Any content bordering cardiac arrest/peri-arrest dysrhythmia management must match, not contradict, the numbers already verified in `courses/acls/` and `courses/bls/` — cross-check rather than re-deriving.

Record what you verified (source + date) in `courses/empact/README.md` under a "Guideline/evidence provenance" heading.

---

## 3. Course structure — `manifest.json`

Mirror `courses/pals/data/pals/manifest.json` field-for-field. Key values: `"id": "empact"`, `"title": "EMPACT — Emergency Medical Patients: Assessment, Care & Transport"`, `"edition": "Modeled on the EMPACT continuing-education course (NAEMSP / San Francisco Paramedic Association lineage), refreshed against current evidence-based guidelines"`, `"certification": "EMPACT Continuing Education (NREMT-accepted, CAPCE-approved)"`, `"difficulty": "Intermediate to Advanced"`, `"estimatedHours": 10`, audience: paramedics, nurses, PAs, physicians; prerequisites: BLS/ACLS-level foundational knowledge, basic pathophysiology.

### Chapter plan (12 chapters, `c01`–`c12`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | The Assessment-Based Approach & Critical Thinking | Foundations | Intermediate |
| c02 | 2 | Scene Safety, History-Taking & Therapeutic Communication | Foundations | Intermediate |
| c03 | 3 | Special Populations: Pediatric, Geriatric & Communication Barriers | Foundations | Intermediate |
| c04 | 4 | The Difficult Airway in the Medical Patient | Airway | Advanced |
| c05 | 5 | Shock Recognition & Classification | Perfusion | Advanced |
| c06 | 6 | Dyspnea: The Differential Approach | Respiratory | Advanced |
| c07 | 7 | Chest Discomfort: The Differential Approach | Cardiovascular | Advanced |
| c08 | 8 | Altered Mental Status: The Differential Approach | Neuro/Metabolic | Advanced |
| c09 | 9 | Abdominal Pain & GI Emergencies: The Differential Approach | Abdominal | Intermediate |
| c10 | 10 | Anaphylaxis & Immunologic Emergencies | Immune | Intermediate |
| c11 | 11 | Endocrine & Metabolic Emergencies | Endocrine | Advanced |
| c12 | 12 | Putting It Together: Serial Reassessment, Documentation & Transport Decisions | Integration | Intermediate |

Notes: c01–c03 are process/soft-skills chapters unique to EMPACT's identity (do not skip these for pure disease content). c05–c11 are organized **by presentation/differential**, not by disease name, matching the case-vignette style already in `src/EMPACT/exam1.json` — each should culminate in a "differentiator table" (§1, content type 6). c12 closes the loop on documentation/legal and transport decision-making, echoing the existing bank's communication/legal items.

---

## 4. Data schemas & content targets

Schemas are **identical** to PALS/BLS (see `courses/pals/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–8; pearls/flags/mistakes/aids 4–6 each; flashcards 14–18 (**≥ 180 total**); quiz questions 14–18 (**≥ 180 total**, weighted toward case-vignette stems like the existing bank, ~35 % Easy / 45 % Medium / 20 % Hard); scenarios 3 per chapter (**36 total**), each with serial-reassessment vitals (an initial set, an intervention, a follow-up set); algorithms — every chapter c04–c11 has at least one assessment/decision algorithm (**≥ 8 total**); tables — mandatory differentiator tables for shock classes (c05), dyspnea causes (c06), chest-discomfort causes (c07), AMS causes (c08), anaphylaxis-vs-allergic-reaction (c10), and DKA/HHS/hypoglycemia (c11) (**≥ 8 total**).

Scenario and quiz stems should mirror the existing bank's style: age/sex, chief complaint, brief history, vitals, one or two exam findings, then "most likely cause" or "best next action" — never a rote fact-recall stem when a case stem will do. Every rationale must explain *why* the correct answer beats each distractor by naming the differentiating finding, matching the existing bank's explanation style.

---

## 5. App shell, build script, README

1. Copy `courses/pals/index.html` → `courses/empact/index.html`. Rename: `PALS_DATA` → `EMPACT_DATA`, `data/pals/` → `data/empact/`, localStorage keys `pals_*` → `empact_*`, title/brand "EMPACT Reviewer — Assessment, Care & Transport", icon `../../icons/courses/thumb/empact.png`, `<meta>` description. Keep all six tabs; add nothing new in v1.
2. **Mobile-friendliness is a hard requirement** — preserve the `minmax(0, 1fr)` grid tracks, `min-width: 0` sidebar, `.table-wrap { overflow-x: auto }` for the differentiator tables (these are often wide, multi-column comparisons — they must scroll inside their wrapper, never the page body), and the ≤820px media-query overrides exactly as they exist in the source reviewer.
3. Copy `courses/pals/build.py` → `courses/empact/build.py`; change `DATA` to `data/empact`, output global to `window.EMPACT_DATA`, header comment. Must end `Validation OK.`
4. Write `courses/empact/README.md` mirroring the PALS one: layout, totals, run instructions, schema reference, **guideline/evidence provenance**, disclaimer ("modeled on the EMPACT continuing-education course; not a substitute for the official EMPACT course, a certificate of completion, or local protocols").

## 6. Platform integration

1. `pages/courses.html` — add `empact` to the `REVIEWER_LINKS` map (one line; the renderer already handles the dual-button card). The `empact` entry already exists in the `COURSES` array.
2. `data/courses.json` — add `{ "id": "empact-reviewer", "shortTitle": "EMPACT Reviewer", "title": "Emergency Medical Patients: Assessment, Care & Transport — Course Reviewer", "link": "../courses/empact/index.html", "available": true, "icon": "⚕️", "count": <final quiz total> }` after the existing `empact` entry.
3. `scripts/build_precache.py` — add `courses/empact/index.html` and `courses/empact/data/bundle.js`; run it to regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/empact` to `SCAN_DIRS`; run it to regenerate `sitemap.xml`.
5. `grep -rn "courses/pals" --include='*.{html,js,py,json}' .` and mirror any registration point found for EMPACT.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a current source; write provenance notes. *Gate: all resolved.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/empact/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c03, c04–c06, c07–c09, c10–c12), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check 3 quiz answers per chapter against verified evidence — every differentiator claim double-checked against a current source.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through 3 chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep (correct-index bounds, required fields); clinical-consistency grep against ACLS/BLS numbers for any overlapping dysrhythmia/shock content; clone `tests/pals-reviewer.spec.js` → `tests/empact-reviewer.spec.js` and run it — **including mobile no-horizontal-overflow tests (360px/320px) on the widest differentiator table**, a hard gate; record final counts in README + `data/courses.json`; `graphify update .`.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter PALS/ACLS/BLS/ITLS reviewers, `src/EMPACT/*`, or `pages/empact.html`.
- **Do not re-author resuscitation drug doses or arrest algorithms already owned by BLS/ACLS/PALS** — cross-reference them, don't duplicate or risk contradicting them.
- **Do not duplicate `courses/medical/`'s disease-by-disease content** — EMPACT chapters are organized by presentation/differential and assessment process, not disease encyclopedia entries.
- No copyrighted textbook or NREMT text; original wording; describe algorithms as steps, not reproductions of any publisher's flowcharts.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where relevant.
