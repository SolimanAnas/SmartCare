# SmartCare Project Reboot — Plan & Progress

This document tracks the reboot of the **DCAS CPG 2025** review application into **SmartCare – Clinical Learning Platform**, a generic, content-agnostic educational platform for emergency nurses, EMTs, paramedics, ER physicians, and nursing students.

---

## 1. Project Vision

SmartCare is designed as a reusable clinical education platform where content modules can be added or replaced without modifying the core codebase. 

### Core Components Preserved
- Exam Engine & Quiz Engine
- Flashcard Engine & Clinical Scenarios
- Clinical Tools, Medical Calculators, and Drug Reference
- Progress Tracking & Statistics
- Multi-theme styling system (Dark, Light, Sepia, Forest, AMOLED)
- PWA/Offline capabilities

---

## 2. Intellectual Property Safeguards

To ensure Dubai Corporation for Ambulance Services (DCAS) copyrighted guideline content is completely removed from the live application while preserving data structure templates locally:
1. Renamed `/chapters` to `/chapters_dcas_archive` and `/content` to `/content_dcas_archive`.
2. Appended both archive folders to `.gitignore` to prevent any remote repository exposure.
3. Created new, empty `/chapters` and `/content` folders for generic curriculum files.

---

## 3. Ultimate Clinical Table of Contents (TOC)

The reboot maps the new generic clinical learning curriculum onto the existing chapter architecture:

| Chapter ID | Group Name | Title | Description / Sections |
| :--- | :--- | :--- | :--- |
| **c0** | `special` | Platform Updates | Changelog and release notes |
| **c-index** | `special` | Table of Contents | Root navigation index |
| **c1** | `foundations` | Foundations of Care | EMS & Health Systems, Ethics, Safety, PPE |
| **c2** | `assessment` | Patient Assessment | Scene Size-up, ABCDE, SAMPLE/OPQRST, Vitals |
| **c3** | `airway` | Airway & Ventilation | Anatomy, Adjuncts, Oxygen, Ventilation, Advanced Airways |
| **c4** | `cardio` | Cardiovascular & Shock | Physiology, Chest Pain, ACS, Arrest, Shock, Fluids |
| **c5** | `medical` | Medical Emergencies | Respiratory, Neuro, Endocrine, Toxicology, Infection, Psych |
| **c6** | `trauma` | Trauma Emergencies | Principles, Bleeding, Chest/Abdomen, Head/Spine, Burns |
| **c7** | `special` | Special Populations | Pediatrics, Obstetrics, Neonatal, Geriatrics, Bariatrics |
| **c8** | `environmental` | Environmental & Disaster | Heat/Cold, Drowning, HazMat, MCIs, Incident Command |
| **c9** | `pharmacology` | Emergency Pharmacology | Drug Safety, Calculations, Routes, Emergency Drugs |
| **c10** | `procedures` | Clinical Procedures & Skills | IV, Wound Care, Splinting, Airway Skills, ECG Basics |
| **s1** | `scope` | Clinical Scope Matrix | Generic clinical authorization matrices |
| **m1-38** | `scope` | Emergency Drug Reference | Generic medication reference database |

---

## 4. LocalStorage & PWA Migrations

To transition application identifiers and local cache configurations:
* **Cache Name:** Updated from `dcas-cpg-v5.5` to `smartcare-v1.0` in `sw.js`.
* **LocalStorage Key Renames:**
  - `dcas_local_auth` $\rightarrow$ `smartcare_local_auth`
  - `dcas_cpg_stats` $\rightarrow$ `smartcare_cpg_stats`
  - `dcas_font_size` $\rightarrow$ `smartcare_font_size`
  - `dcas_last_visited` $\rightarrow$ `smartcare_last_visited`
  - `dcas_cpg_completion` $\rightarrow$ `smartcare_cpg_completion`
  - `dcas_course_progress` $\rightarrow$ `smartcare_course_progress`

---

## 5. Phased Reboot Progress

### Phase Checklist
- `[x]` **Phase 1: Archiving & Git Configurations**
- `[x]` **Phase 2: Curriculum Metadata Setup**
- `[ ]` **Phase 3: Generic Educational Content Creation** (In Progress)
- `[ ]` **Phase 4: Global De-branding & Storage Renaming**
- `[ ]` **Phase 5: Verification & Testing**
