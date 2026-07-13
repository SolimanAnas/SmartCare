# BDLS Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent implementing this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **BDLS (Basic Disaster Life Support) Course Reviewer** at `courses/bdls/`, cloned from the completed **BLS reviewer** at `courses/bls/`, with content aligned to the **NDLSF BDLS v4.0 curriculum** (National Disaster Life Support Foundation, released 2020 — the current edition).
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists

| Path | What it is | How to use it |
|---|---|---|
| `courses/bls/` | **Primary reference implementation** — six-tab reviewer, `build.py` → `window.BLS_DATA`, namespaced localStorage, mobile-safe CSS. | Copy exactly: `window.BDLS_DATA`, `bdls_` prefix, `data/bdls/**`. |
| `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | Sibling plans. | Same phase/gate discipline. |
| `src/BDLS/BDLS.json` (40 exam MCQs), `pages/bdls.html` | Existing BDLS **exam** page + bank. | Do **not** modify; the reviewer is separate. |
| `pages/courses.html` (`REVIEWER_LINKS` map) | Dual Review/Exam card renderer (`itls`, `bls`). | Add `bdls: { review: '../courses/bdls/index.html', exam: 'bdls.html' }`. |
| `data/courses.json`, `scripts/build_precache.py`, `scripts/generate_sitemap.py` | Registry, precache, sitemap. | Add `bdls-reviewer` entry / `courses/bdls` paths; regenerate outputs. |
| `tests/bls-reviewer.spec.js` | Playwright spec incl. **mobile no-overflow gate** (360/320px, all six tabs). | Clone as `tests/bdls-reviewer.spec.js`. |
| `icons/courses/thumb/bdls.png` | Branded thumbnail — exists. | Use for brand + card. |

**Mobile-friendliness is a hard requirement** — preserve the `minmax(0, 1fr)` grid tracks, `min-width: 0` sidebar, and `.table-wrap` scrolling from the BLS shell; the cloned mobile tests are a shipping gate.

---

## 1. Product definition & source of truth

An awareness-level reviewer for the **NDLSF BDLS v4.0** course (7.5-hour, all-hazards, competency-based) for EMS providers, nurses, physicians, and public-health professionals. **BDLS is an NDLSF course, not an AHA course** — the clinical anchor is the BDLS v4.0 curriculum: the **PRE-DISASTER Paradigm** (mitigation/preparedness) and **DISASTER Paradigm** (response framework), **SALT mass-casualty triage** (CDC-sponsored national standard), and all-hazards management (natural, traumatic/explosive, chemical, biological, radiological/nuclear). Where resuscitation intersects (e.g., CPR in triage context), stay consistent with the AHA-2025-aligned `courses/bls` content.

Verification protocol: verified October-2025-era sources confirm v4.0 is current (ndlsf.org/bdls). ⚠️ Verify before authoring: exact PRE-DISASTER mnemonic wording in v4.0; SALT lifesaving-intervention list wording; current CDC bioterrorism category-A agent list; crisis-standards-of-care terminology; CMIST framework wording for at-risk populations. Original wording only — no verbatim NDLSF text or figure reproductions. Record provenance + disclaimer in `courses/bdls/README.md` ("not a substitute for the official NDLSF BDLS course or certification").

---

## 2. Course structure (10 chapters)

| id | # | Title | Section |
|---|---|---|---|
| c01 | 1 | Disaster Medicine Foundations & the PRE-DISASTER Paradigm | Foundations |
| c02 | 2 | The DISASTER Paradigm | Foundations |
| c03 | 3 | Incident Command & Emergency Management (ICS/NIMS) | Foundations |
| c04 | 4 | Mass-Casualty Triage: SALT | Response Core |
| c05 | 5 | Natural Disasters | All-Hazards |
| c06 | 6 | Traumatic & Explosive Events | All-Hazards |
| c07 | 7 | Chemical Events & Decontamination | All-Hazards |
| c08 | 8 | Biological Events & Pandemics | All-Hazards |
| c09 | 9 | Nuclear & Radiological Events | All-Hazards |
| c10 | 10 | Surge Capacity, Psychosocial Care & Vulnerable Populations | Response Core |

Manifest values: `"id": "bdls"`, `"title": "BDLS — Basic Disaster Life Support"`, `"edition": "Based on the NDLSF BDLS v4.0 curriculum"`, `"certification": "NDLSF BDLS"`, `"examLink": "https://www.ndlsf.org/bdls"`, `"difficulty": "Beginner to Intermediate"`, `"estimatedHours": 10`.

## 3. Schemas, targets, execution

Schemas identical to BLS (`courses/bls/README.md`); IDs `cNN_qMM`/`cNN_fcMM`/`cNN_sMM` etc., globally unique. Targets: flashcards 14–16/ch (**≥ 140**); quiz 15–16/ch (**≥ 150**, ~40/40/20 Easy/Medium/Hard); scenarios 3/ch (**30**); ≥1 algorithm per chapter (**≥ 10** — DISASTER paradigm, SALT flow, decon sequence, exposure-vs-contamination, blast-injury assessment…); tables (**≥ 12** — SALT categories, disaster phases, ICS sections, blast-injury classes, chemical-agent classes with antidotes, category-A agents, time/distance/shielding, conventional/contingency/crisis surge, CMIST).

Phases (commit each): plan doc → scaffold + c01 (build clean) → author in batches of ~3 chapters (build clean per batch) → integrate (REVIEWER_LINKS, courses.json, precache, sitemap regenerated) → QA (answer-integrity sweep, Playwright spec incl. mobile gate) → push. Guardrails: never alter other reviewers or `pages/bdls.html`/`src/BDLS/*`; no invented specifics (antidote doses only at awareness level and verified); frozen schema; pure-data JSON.
