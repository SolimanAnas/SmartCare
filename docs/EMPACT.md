# EMPACT Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent implementing this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **EMPACT (Emergency Medical Patients: Assessment, Care & Transport) Course Reviewer** at `courses/empact/`, cloned from the completed **BLS/BDLS reviewers**, expanding the existing `src/EMPACT/pearls.json` and `src/EMPACT/exam1.json` content into a full six-tab reviewer.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists

| Path | What it is | How to use it |
|---|---|---|
| `courses/bls/`, `courses/bdls/` | **Primary reference implementations** — six-tab reviewer, `build.py` → `window.<X>_DATA`, namespaced localStorage, mobile-safe CSS (`minmax(0, 1fr)` + `min-width: 0`). | Copy exactly: `window.EMPACT_DATA`, `empact_` prefix, `data/empact/**`. |
| `docs/BLS.md`, `docs/BDLS.md` | Sibling plans. | Same phase/gate discipline, including the mobile-overflow test gate. |
| `src/EMPACT/pearls.json` (47 pearls) | Existing clinical pearls, categorized (Assessment, Respiratory, Cardiology, Endocrine, Neurology, Shock, GI, Infectious Disease, Anaphylaxis, Airway, Renal/Metabolic, Oncology, Pharmacology). | **Primary content seed** — every pearl's fact must be preserved and expanded into the relevant chapter's `clinicalPearls[]` and used to ground quiz rationales. |
| `src/EMPACT/exam1.json` (50 MCQs with rationale + hint) | Existing exam bank. | Do **not** modify or delete; the reviewer is a separate product. Reuse its clinical scenarios as inspiration for `scenarios/` cases (rewritten, not copied verbatim) so the two products reinforce each other without duplicating exact question text. |
| `pages/empact.html` | Existing EMPACT **exam/pearls** page. | Do **not** modify. |
| `pages/courses.html` (`REVIEWER_LINKS` map) | Dual Review/Exam card renderer (`itls`, `bls`, `bdls`). | Add `empact: { review: '../courses/empact/index.html', exam: 'empact.html' }`. |
| `data/courses.json`, `scripts/build_precache.py`, `scripts/generate_sitemap.py` | Registry, precache, sitemap. | Add `empact-reviewer` entry / `courses/empact` paths; regenerate outputs. |
| `tests/bdls-reviewer.spec.js` | Playwright spec incl. **mobile no-overflow gate** (360/320px, all six tabs). | Clone as `tests/empact-reviewer.spec.js`. |
| `icons/courses/thumb/empact.png` | Branded thumbnail — exists. | Use for brand + card. |

**⚠️ Naming discrepancy to resolve, not silently pick:** `data/courses.json` titles this course "Emergency Medical Patients: Assessment, Care & Transport," while `pages/empact.html`'s `<meta>` tags describe it as "Emergency Medicine Physician Assistant Certification Test" prep. These are two different things. The actual content (`src/EMPACT/pearls.json`, `exam1.json`) is unambiguously **EMS/paramedic medical-patient assessment** (differential diagnosis, systematic assessment, body-system emergencies) — it matches the courses.json framing, not a PA certification exam. **Use the courses.json title** ("Emergency Medical Patients: Assessment, Care & Transport") as the reviewer's identity and do not invent or imply a specific outside certifying body/edition for EMPACT. If asked, flag the `pages/empact.html` meta-tag mismatch to the user rather than silently editing that file (it is out of scope for this plan).

**Mobile-friendliness is a hard requirement** — preserve `minmax(0, 1fr)` grid tracks, `min-width: 0` sidebar, `.table-wrap` scrolling; cloned mobile tests are a shipping gate.

---

## 1. Product definition & source of truth

A **systematic medical-patient assessment reviewer** for EMTs, paramedics, and nursing/PA students — NOT tied to a single dated guideline edition (unlike the AHA/NDLSF courses). The clinical anchor is **current, mainstream EMS assessment-based patient management practice** (the National EMS Education Standards' "Medical" domain, general ACEP/AHA-aligned differential-diagnosis approaches for the specific conditions covered, e.g., anaphylaxis IM epinephrine first-line, stroke FAST/BEFAST recognition, sepsis screening, ACS 12-lead patterns). Every fact already present in `src/EMPACT/pearls.json` is treated as verified ground truth to preserve; new content added beyond those 47 pearls should be cross-checked against current standard EMS/emergency-medicine references before authoring (⚠️ verify: any specific drug doses not already stated in pearls.json, e.g., glucose/naloxone/albuterol dosing if introduced). Original wording only — rewrite, don't copy verbatim from `exam1.json` or `pearls.json`. Record provenance in `courses/empact/README.md`, noting the title-discrepancy resolution and that this is a general assessment-based reviewer, not a single-body certification course.

---

## 2. Course structure (10 chapters)

Chapters are organized by the assessment approach first, then by body-system/complaint chapters that route the existing pearl categories into logical clinical groupings:

| id | # | Title | Section | Maps existing pearl categories |
|---|---|---|---|---|
| c01 | 1 | The Systematic Approach & Differential Diagnosis | Foundations | Core Concepts, Assessment, Clinical Pearls, Safety/Scene |
| c02 | 2 | Airway Management in the Medical Patient | Airway & Breathing | Airway |
| c03 | 3 | Respiratory Emergencies | Airway & Breathing | Respiratory, Respiratory/Cardio |
| c04 | 4 | Cardiovascular Emergencies | Cardiovascular | Cardiology, Cardiology/ECG |
| c05 | 5 | Shock Recognition & Management | Cardiovascular | Shock, Pharmacology/Shock |
| c06 | 6 | Neurological Emergencies | Neurological | Neurology |
| c07 | 7 | Endocrine Emergencies | Metabolic | Endocrine/Diabetes |
| c08 | 8 | Abdominal & Gastrointestinal Emergencies | Abdominal | Gastrointestinal, Metabolic/Renal, Dehydration |
| c09 | 9 | Infectious Disease, Sepsis & Anaphylaxis | Immune & Infectious | Infectious Disease, Anaphylaxis, Pharmacology |
| c10 | 10 | Oncologic & Special Medical Considerations | Special Topics | Oncology, remaining Clinical Pearls |

Manifest values: `"id": "empact"`, `"title": "EMPACT — Emergency Medical Patients: Assessment, Care & Transport"`, `"edition": "Systematic medical-patient assessment for EMS providers"` (no dated-guideline claim), `"certification": null` or omit the field, `"examLink"` → local `pages/empact.html`, `"difficulty": "Intermediate"`, `"estimatedHours": 10`, audience: EMT, AEMT, Paramedic, Nursing Student, PA Student.

---

## 3. Schemas, targets, execution

Schemas identical to BLS/BDLS; IDs `cNN_qMM`/`cNN_fcMM`/`cNN_sMM` etc., globally unique. Targets: flashcards 14–16/ch (**≥ 140**); quiz 15–16/ch (**≥ 150**, ~40/40/20 Easy/Medium/Hard — reuse every fact from the 47 seed pearls at least once across the quiz bank, rewritten as original questions); scenarios 3/ch (**30**, written in the vitals+question+explanation+pearl schema used by BLS/BDLS, drawing on `exam1.json` case vignettes for realism but rewritten); ≥1 algorithm per chapter (**≥ 10** — e.g., systematic assessment sequence, BVM indications, anaphylaxis recognition/treatment sequence, stroke FAST/BEFAST, shock staging); tables (**≥ 10** — compensated vs decompensated shock, MI territories/ECG leads, diabetic emergency comparison (DKA/HHNS/hypoglycemia), airway adjunct selection (OPA/NPA), sepsis red flags).

Phases (commit each): plan doc → scaffold + c01 (build clean, verify every pearls.json fact is traceable to a chapter) → author in batches of ~3 chapters (build clean per batch) → integrate (REVIEWER_LINKS, courses.json, precache, sitemap regenerated) → QA (answer-integrity sweep, Playwright spec incl. mobile gate) → push. Guardrails: never alter other reviewers or `pages/empact.html`/`src/EMPACT/*`; never invent a specific outside certifying body or "latest edition" for EMPACT — it is a general assessment-based reviewer; frozen schema; pure-data JSON.
