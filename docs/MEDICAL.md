# Medical Emergencies Review — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **Medical Emergencies Review course reviewer** at `courses/medical/`, cloned from the completed **PALS reviewer** at `courses/pals/` (itself cloned from BLS), covering adult **medical, behavioral, and geriatric** emergencies — the disease/complaint-specific counterpart to the general assessment-skills course planned in `docs/EMPACT.md`.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/pals/` | **Primary reference implementation.** Six-tab reviewer (Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables), `build.py` → `data/bundle.js` (`window.PALS_DATA`), namespaced localStorage. | Copy this architecture exactly. |
| `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | The plan documents for the sibling AHA courses. | Same phase/gate discipline, adapted for a non-AHA, non-algorithm-heavy course (see §1). |
| `docs/EMPACT.md` | Sibling plan (may exist/be in progress) for a general patient-assessment & clinical-reasoning course. | Do **not** duplicate its scope — Medical owns disease-specific content (stroke, seizure, DKA, asthma, behavioral/psychiatric conditions, geriatric-specific presentations); EMPACT owns scene safety, history-taking technique, and differential-diagnosis *process*. Cross-reference rather than repeat. |
| `src/Medical/medical.json` | Existing Medical **exam** question bank, titled internally *"Medical - Prometric Medical/Behavioral/Geriatric Exam Questions"*, `"topic": "Medical/Behavioral/Geriatric"` on every question (28 questions present in the file at authoring time; `data/courses.json` lists `count: 45` — reconcile/re-count when you touch this, but do **not** modify the file). Used by `pages/medical.html`. | Do **not** modify or move. The reviewer is a separate product. Skim it for topic coverage: Cincinnati Prehospital Stroke Scale, asthma phases/bronchodilator response, COPD hypoxic-drive, seizure causes & postictal state, preeclampsia/eclampsia, SEA-3 behavioral assessment, delusions/hallucinations, personality disorders, delirium tremens, delirium-vs-dementia differential, panic disorder/PTSD, and an abandonment/duty-to-act legal item. |
| `pages/medical.html` | Existing Medical exam page. | Leave as-is. |
| `pages/medical-asm.html` | A *different* page ("SmartCare · Medical Assessment") — not the course this plan covers. | Do not confuse the two; do not touch it. |
| `data/courses.json` | Registry — `medical` exam entry exists (`link: "medical.html"`, `count: 45`); `pals-reviewer` shows the reviewer-entry pattern. | Add a `medical-reviewer` entry. |
| `pages/courses.html` | Course catalog; `REVIEWER_LINKS` map (search for it, ~line 1735) currently has `itls`, `bls`, `pals`, `acls`, `ecg-course`. | Add `medical: { review: '../courses/medical/index.html', exam: 'medical.html' }`. |
| `scripts/build_precache.py` (~lines 40–45) | PWA precache list; has `courses/bls`, `courses/acls`, `courses/pals` index+bundle pairs. | Add the Medical equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`, ~line 18–19) | Includes `courses/itls`, `courses/bls`, `courses/acls`, `courses/pals`. | Add `courses/medical`; regenerate `sitemap.xml`. |
| `tests/pals-reviewer.spec.js` | Playwright smoke-test pattern. | Clone as `tests/medical-reviewer.spec.js`. |
| `icons/courses/thumb/medical.png` | Branded thumbnail — already exists. | Reference from the sidebar brand and card. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules — notably: run `graphify query "<question>"` before Read/Bash/Grep on source files, and `graphify update .` after modifying code. | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/pals/` does.** Medical is a re-skin with new content: `window.MEDICAL_DATA`, `medical_` localStorage prefix, `data/medical/**` paths. Unlike BLS/ACLS/PALS, Medical is **not** a single-body AHA certification — treat §2 accordingly (multiple mainstream clinical sources, not one guideline document).

---

## 1. Product definition

A **Medical/Behavioral/Geriatric emergencies reviewer** for EMTs, paramedics, and nursing/allied-health students preparing for licensing-style cognitive exams (the bank's own title places it in a **Prometric-administered EMS/paramedic licensing exam** lineage — the pattern used by bodies such as the **Saudi Commission for Health Specialties (SCFHS)** for EMT/paramedic licensure — as well as **NREMT**-style cognitive exams, whose Paramedic test plan carries a combined **"Medical/Obstetrics/Gynecology" domain at ~24–28% of exam weight**, the closest published analog to this course's scope). Self-contained, offline-capable, pure data + one HTML file. Per chapter: summary (objectives, pearls, red flags, mistakes, memory aids, decision trees), flashcards, exam-style MCQs with rationales, case scenarios, and comparison tables. Medical is **complaint/diagnosis-heavy, not algorithm-heavy** — unlike BLS/ACLS/PALS, most chapters will have zero or one algorithm (e.g., a differential-diagnosis decision tree) and instead lean on **comparison tables** (stroke scale components, asthma severity staging, DKA vs. HHS, delirium vs. dementia, personality-disorder clusters) as the signature content type.

---

## 2. Clinical source of truth — no single governing body (CRITICAL)

Unlike BLS/ACLS/PALS, there is **no single AHA-style guideline document** for this course. Ground content in multiple current, mainstream, citable sources per topic area, and say so explicitly in the README rather than inventing a unified "Medical Guidelines" citation.

### 2.1 Verification protocol

- Before authoring, **web-verify every ⚠️ item in §2.3** against the specific source named for that topic. Do not author diagnostic criteria, scale components, or staging thresholds from memory.
- A public SCFHS/Prometric-specific content blueprint for this exam **could not be confirmed** as of this plan's authoring (2026-07) — Prometric's public pages describe delivery logistics, not clinical content outlines. Do not cite a "SCFHS blueprint" as if one is publicly documented; instead cite the NREMT Paramedic test plan's Medical/OB-GYN domain (public, at nremt.org) as the closest analog, and the disease-specific sources below for clinical facts.
- Every chapter JSON gets a `references[]` entry naming the specific source relied on (e.g. `"GINA 2025 Global Strategy for Asthma Management and Prevention"`, `"ADA Standards of Care in Diabetes—2026, Section 16"`, `"2026 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke"`, `"DSM-5-TR"` for behavioral-health definitions). No verbatim copying — **all wording must be original** (same policy as the AHA-course siblings).
- Add the standard disclaimer (README + app footer): educational reviewer, not a substitute for an official EMS/paramedic course, licensing exam prep, certification, or local protocols; behavioral-health content is for prehospital recognition only, not diagnosis.

### 2.2 Stable core facts (safe to use, still sanity-check)

- **Stroke recognition:** validated prehospital scales include Cincinnati Prehospital Stroke Scale (CPSS: facial droop, arm drift, speech), Los Angeles Prehospital Stroke Screen (LAPSS), RACE, and FAST-ED (adds eye deviation/denial-neglect for large-vessel-occlusion screening) — AHA/ASA guidelines endorse validated scales for prehospital use generally; exact endorsed-scale wording should be pulled from the current guideline (§2.3).
- **Seizures:** not all seizures are life-threatening; common causes include hypoglycemia, head trauma, intoxication/withdrawal, fever (pediatric), and idiopathic epilepsy; postictal state = transient post-seizure confusion/drowsiness (sometimes with agitation) that resolves without intervention in most cases.
- **COPD:** chronic bronchitis strongly associated with cigarette-smoke exposure; emphysema classically produces a thin, barrel-chested ("pink puffer") appearance; the "hypoxic drive" teaching point (chronic CO₂ retainers relying on hypoxia to drive respiration) is a long-taught EMS simplification — ⚠️ verify current teaching stance, since modern evidence de-emphasizes withholding oxygen from hypoxic COPD patients.
- **Preeclampsia/eclampsia:** hypertension + proteinuria in pregnancy = preeclampsia; addition of seizures or coma = eclampsia.
- **Behavioral emergencies:** best approached with open-ended questions, a calm/non-confrontational posture, and avoidance of premature physical restraint; abandonment = terminating care without ensuring an equal-or-higher level of care continues.
- **Geriatric delirium vs. dementia:** delirium = acute onset, fluctuating, often reversible (screen for hypoglycemia, infection, medication effects); dementia = chronic, progressive, baseline cognitive decline — a acutely-confused patient with a normal cognitive baseline should be treated as delirium until proven otherwise.

### 2.3 ⚠️ Items to VERIFY before authoring (source-specific, do not use memory)

1. **Stroke:** current AHA/ASA-endorsed prehospital stroke scale(s) and any 2025/2026 wording changes — verify against the **2026 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke** (replaces the 2018/2019 guideline; confirm exact prehospital-scale recommendations and LVO-screening thresholds, e.g. FAST-ED ≥4).
2. **Asthma:** current severity staging/classification language and stepwise management — verify against the **GINA 2025 Global Strategy for Asthma Management and Prevention** (note: GINA 2025 shifted away from "intermittent/mild" severity labels toward difficulty-to-treat framing; reconcile with the bank's legacy "phase 1–4" framing, which may be outdated terminology worth noting as historical/simplified rather than current guideline language).
3. **DKA/HHS:** current diagnostic criteria table — verify against **ADA Standards of Care in Diabetes—2026, Section 16 (Diabetes Care in the Hospital)** and Section 6 (Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises); note ~10% of DKA presents as euglycemic DKA (glucose <200 mg/dL).
4. **COPD oxygen/"hypoxic drive":** verify current EMS teaching consensus — many current sources caution against withholding supplemental O₂ from hypoxic COPD patients due to arrest risk, even while titrating to avoid over-oxygenation; reconcile the bank's binary "True/False" framing with nuanced current guidance.
5. **Behavioral/psychiatric definitions** (delusion vs. hallucination, personality-disorder clusters, panic disorder, DTs timing/features): verify against current **DSM-5-TR** definitions rather than older DSM editions.
6. **NREMT domain weighting:** the "Medical/Obstetrics/Gynecology" ~24–28% figure and the newer 6-domain structure (including a Clinical Judgment domain) should be confirmed against the current public **NREMT Paramedic test plan** at nremt.org before citing a specific percentage in README.
7. Any SCFHS-specific public content outline — re-check in case one has since been published; if still unavailable, keep the NREMT-analog framing.

Record what you verified (source + date) in `courses/medical/README.md` under a "Guideline provenance" heading.

---

## 3. Course structure — `manifest.json`

Mirror `courses/pals/data/pals/manifest.json` field-for-field. Key values: `"id": "medical"`, `"title": "Medical Emergencies Review — Medical, Behavioral & Geriatric"`, `"edition": "Aligned with current GINA, ADA, AHA/ASA stroke, and DSM-5-TR guidance; scoped to the NREMT Paramedic Medical/OB-GYN domain"`, `"certification": "EMT/Paramedic licensing exam preparation (Prometric-administered, NREMT-aligned)"`, `"difficulty": "Intermediate"`, `"estimatedHours": 10`, audience: EMTs, paramedics, nursing/allied-health students preparing for licensing cognitive exams; prerequisites: BLS provider competency, basic patient assessment (see `docs/EMPACT.md`).

### Chapter plan (12 chapters, `c01`–`c12`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Neurological Emergencies I — Stroke & TIA | Neurological | Intermediate |
| c02 | 2 | Neurological Emergencies II — Seizures & Altered Mental Status | Neurological | Intermediate |
| c03 | 3 | Endocrine Emergencies — Hypoglycemia, DKA & HHS | Endocrine | Advanced |
| c04 | 4 | Respiratory Medical Emergencies — Asthma & COPD | Respiratory | Intermediate |
| c05 | 5 | Obstetric Medical Emergencies — Preeclampsia & Eclampsia | Medical/OB | Intermediate |
| c06 | 6 | Behavioral Emergencies I — Assessment & De-escalation | Behavioral | Beginner to Intermediate |
| c07 | 7 | Behavioral Emergencies II — Psychotic & Mood Disorders | Behavioral | Intermediate |
| c08 | 8 | Behavioral Emergencies III — Personality, Substance-Related & High-Risk Presentations | Behavioral | Advanced |
| c09 | 9 | Geriatric Emergencies I — Delirium vs. Dementia & Atypical Presentations | Geriatric | Intermediate |
| c10 | 10 | Geriatric Emergencies II — Polypharmacy, Falls & Elder Abuse Recognition | Geriatric | Intermediate |
| c11 | 11 | Toxicological & Environmental Medical Presentations | Toxicology | Intermediate |
| c12 | 12 | Sepsis, GI/Renal Emergencies & General Medical Red Flags | Medical | Intermediate |

Notes: c05 stays narrow (medical OB complications only) rather than a full OB/GYN course. c06–c08 subdivide behavioral content by risk/complexity since the exam bank skews heavily behavioral (SEA-3, delusions, personality disorders, DTs, eating-disorder cardiac risk, PTSD/panic). c09–c10 keep geriatric content distinct from general dementia trivia — focus on prehospital-relevant atypical presentation and elder-abuse recognition. c11–c12 fill gaps not owned by any existing or planned sibling course (no current course covers toxicology or sepsis). Cross-reference ACLS (`docs/ACLS.md`) for any arrest-adjacent content rather than duplicating drug/algorithm detail.

---

## 4. Data schemas & content targets

Schemas are **identical** to PALS/BLS (see `courses/pals/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–9; pearls/flags/mistakes/aids 4–6 each; flashcards 12–16 (**≥ 150 total**); quiz questions 14–18 (**≥ 180 total**, ~40% Easy / 40% Medium / 20% Hard — this course skews slightly easier than ACLS/PALS since it's cognitive-recall rather than algorithm-execution); scenarios 2–3 (**≥ 30 total**); algorithms — optional per chapter, only where a real stepwise decision process exists (e.g., stroke-scale-to-transport-decision, DKA vs. HHS differentiation, delirium screening) (**≥ 4 total**, this course is table-heavy rather than algorithm-heavy); tables — mandatory: stroke-scale comparison table (c01), asthma severity/staging table (c04), DKA vs. HHS comparison table (c03), personality-disorder cluster table (c08), delirium vs. dementia comparison table (c09) (**≥ 8 total**).

Scenario vitals should look like realistic EMS medical dispatches (chief complaint, focused history, exam findings, relevant vitals) rather than resuscitation cases. Every quiz rationale teaches the *why* and names the source concept (e.g., "per GINA staging..." / "per the CAM criteria...").

---

## 5. App shell, build script, README

1. Copy `courses/pals/index.html` → `courses/medical/index.html`. Rename: `PALS_DATA` → `MEDICAL_DATA`, `data/pals/` → `data/medical/`, localStorage keys `pals_*` → `medical_`, title/brand "Medical Emergencies Reviewer — Behavioral & Geriatric", icon `../../icons/courses/thumb/medical.png`, `<meta>` description. Keep all six tabs even though Algorithms will be sparsely populated; add nothing in v1.
2. **Mobile-friendliness is a hard requirement**, inherited from the BLS shell fixes (`minmax(0, 1fr)` grid tracks, `min-width: 0` on the sidebar, tables inside `.table-wrap { overflow-x: auto }`). Preserve all of these when copying — this course's comparison tables (stroke scale, DKA vs. HHS) are wide and must scroll inside `.table-wrap`, never the page body.
3. Copy `courses/pals/build.py` → `courses/medical/build.py`; change `DATA` to `data/medical`, output global to `window.MEDICAL_DATA`, header comment. Must end `Validation OK.`
4. Write `courses/medical/README.md` mirroring the PALS one: layout, totals, run instructions, schema reference, **guideline provenance** (explicitly noting the multi-source nature of this course per §2), and disclaimer ("not a substitute for an official EMS/paramedic course, licensing exam prep, certification, or local protocols; behavioral-health content is for prehospital recognition only, not diagnosis").

## 6. Platform integration

1. `pages/courses.html` — add `medical` to the `REVIEWER_LINKS` map (one line; the renderer already handles the dual-button card). The `medical` entry already exists in the `COURSES` array.
2. `data/courses.json` — add `{ "id": "medical-reviewer", "shortTitle": "Medical Reviewer", "title": "Medical Emergencies Review — Course Reviewer", "link": "../courses/medical/index.html", "available": true, "icon": "💊", "count": <final quiz total> }` after the existing `medical` entry.
3. `scripts/build_precache.py` — add `courses/medical/index.html` and `courses/medical/data/bundle.js`; run it to regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/medical` to `SCAN_DIRS`; run it to regenerate `sitemap.xml`.
5. `grep -rn "courses/pals" --include='*.{html,js,py,json}' .` and mirror any registration point you find for Medical.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a source; write provenance notes; explicitly confirm (or rule out) any public SCFHS content blueprint. *Gate: all resolved.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/medical/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c03, c04–c06, c07–c09, c10–c12), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check 3 quiz answers per chapter against the verified source for that topic.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through 3 chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep (correct-index bounds, required fields); clone `tests/pals-reviewer.spec.js` → `tests/medical-reviewer.spec.js` and run it — including mobile no-horizontal-overflow tests (360px/320px viewports) on the widest table chapter (c03 or c01) — a hard gate; record final counts in README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter BLS/ACLS/PALS/ITLS reviewers, `src/Medical/medical.json`, `pages/medical.html`, or the unrelated `pages/medical-asm.html`.
- Do not present this course's clinical facts as a single unified "Medical Guidelines" — always cite the specific source (GINA / ADA / AHA-ASA stroke / DSM-5-TR / NREMT test plan) per topic in `references[]`.
- Behavioral-health content must stay at prehospital-recognition depth (signs/symptoms, safe approach) — do not present diagnostic criteria as something an EMT/paramedic applies clinically; frame as recognition/vocabulary for the exam and for safe scene management.
- No copyrighted verbatim text from DSM-5-TR, GINA, or ADA documents; original wording only.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where sources use both.
