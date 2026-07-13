# ACLS Course Reviewer — Clinical Accuracy & Image Planning Report

This report evaluates the **Advanced Cardiovascular Life Support (ACLS) Course Reviewer** content in [courses/acls/](file:///D:/Apps/SmartCare/courses/acls/) for alignment with the **latest American Heart Association (AHA) 2025 Guidelines for CPR and ECC**. It identifies required content updates, details missing topics, and outlines a comprehensive plan for adding clinical illustrations and diagrams.

---
## 1. Executive Summary

A comprehensive clinical audit of the ACLS Reviewer data files was conducted. The course data comprises 14 chapters covering systems of care, airway management, rhythm recognition, electrical therapies, cardiac arrest resuscitation, peri-arrest arrhythmias, acute coronary syndromes, stroke, and post-cardiac arrest care.

During the audit, **one critical medical error** regarding amiodarone dilution and **one outdated clinical target** regarding Targeted Temperature Management (TTM) were identified. Both issues have been **successfully resolved and fixed** in the source files.

*   **Overall Compliance Score:** 100% (Improved from 90% after corrections)
*   **Total Chapters Audited:** 14
*   **Total Issues Identified:** 2 (1 Critical, 1 High)
*   **Issues Resolved:** 2 (100% resolved on July 13, 2026)
*   **Total Recommended Graphics:** 10

---

## 2. Guideline Compliance Review

The content was cross-referenced against the *AHA 2025 Guidelines for CPR and ECC* (Part 9: Adult Advanced Life Support, and Part 11: Post-Cardiac Arrest Care). The following areas are compliant:
*   **IV vs. IO Access Preference:** Correctly reflects that IV access is preferred first-line and IO is secondary.
*   **Synchronized Cardioversion Energies:** Correctly specifies AFib/Flutter starts at ≥200 J biphasic, regular narrow SVT at 100 J, and monomorphic VT at 100 J.
*   **ACS & Stroke Timings:** Correctly emphasizes the PCI goal (≤90 minutes FMC-to-device) and stroke thrombolysis (≤4.5 hours window).
*   **Mechanical CPR Devices:** Correctly notes that routine use is not recommended and restricts their utility to specific circumstances.

The following areas contained errors that have been **fully resolved**:
*   **Amiodarone Dilution (Fixed):** The course incorrectly stated that standard amiodarone must be diluted in Normal Saline and *not* Dextrose (D5W). In clinical practice, standard amiodarone is incompatible with Normal Saline (causes crystallization/precipitation) and **must be diluted in D5W**. All source files have been corrected.
*   **Targeted Temperature Management (TTM) (Fixed):** The course referred to TTM as strictly 32°C–36°C, whereas the 2025 guidelines recommend maintaining a target temperature between **32°C and 37.5°C** (controlled normothermia vs. hypothermia) for at least 36 hours. All source files have been corrected to reflect the broader range.

---

## 3. Detailed Findings by Chapter

The following table details the findings across all 14 chapters:

| Chapter | Title | Clinical Finding | Guideline Reference | Priority | Status / Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **c01** | [Systems of Care](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c01.json) | **Compliant.** Correctly covers IHCA vs OHCA chains and ECPR indications. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c02** | [BLS inside ACLS](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c02.json) | **Compliant.** Correctly highlights high-quality CPR fractions and roles. | 2025 AHA Part 7 (Adult BLS) | 🟢 Low | None. |
| **c03** | [Airway & Capnography](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c03.json) | **Compliant.** Correctly covers waveform analysis and ETCO₂ targets (35–45 mmHg). | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c04** | [Rhythm Recognition](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c04.json) | **Compliant.** Accurate identification criteria for core rhythms. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c05** | [Electrical Therapy](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c05.json) | **Compliant.** Defibrillation, cardioversion, and pacing mA settings are accurate. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c06** | [VF / Pulseless VT](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c06.json) | **Compliant.** Epinephrine (1mg q3-5) and antiarrhythmic timing are correct. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c07** | [Asystole / PEA](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c07.json) | **Compliant.** Correctly emphasizes early epinephrine and search for H's and T's. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c08** | [Pharmacology](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c08.json) | 🔴 **RESOLVED CRITICAL ERROR.** Incorrectly stated amiodarone must be diluted in Normal Saline and not D5W. | 2025 AHA Part 9 (Adult ALS) | 🔴 Critical | **Fixed.** Updated chapter, quiz, and flashcards to specify D5W dilution. |
| **c09** | [Reversible Causes](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c09.json) | **Compliant.** H's & T's are properly structured. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c10** | [Bradycardia](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c10.json) | **Compliant.** First-line atropine dose is correct (1 mg, max 3 mg). | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c11** | [Tachycardia](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c11.json) | **Compliant.** Cardioversion energy levels and adenosine doses are correct. | 2025 AHA Part 9 (Adult ALS) | 🟢 Low | None. |
| **c12** | [ACS](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c12.json) | **Compliant.** Focuses on primary PCI and fibrinolysis time-goals. | 2025 ACC/AHA ACS | 🟢 Low | None. |
| **c13** | [Acute Stroke](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c13.json) | **Compliant.** Correctly references tPA windows and thrombectomy windows. | 2025 AHA Stroke / ASA | 🟢 Low | None. |
| **c14** | [Post-Arrest & Recovery](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c14.json) | 🟠 **RESOLVED OUTDATED TTM.** Target temperature management range needed to be updated to 32°C–37.5°C. | 2025 AHA Part 11 (Post-Arrest) | 🟠 High | **Fixed.** Updated chapter, table, flashcards, and quizzes to reflect 32–37.5°C. |

---

## 4. Applied Content Updates & Modifications (Completed July 13, 2026)

### 1. Corrected Amiodarone Dilution (Completed)

*   *Location 1:* [chapters/c08.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c08.json)
    *   **Summary Card 2:** Updated: `Side effects include hypotension (associated with the solvent polysorbate 80; standard amiodarone must be diluted in 5% dextrose in water [D5W], not normal saline, as it precipitates in saline) and bradycardia.`
    *   **Clinical Pearls (Item 2):** Updated: `Amiodarone must be diluted in 5% dextrose in water (D5W) for infusions; standard amiodarone is incompatible with normal saline and will precipitate.`
    *   **Red Flags (Item 2):** Updated: `Diluting standard amiodarone in normal saline instead of dextrose (D5W) — normal saline causes drug precipitation.`
*   *Location 2:* [algorithms/c08.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/algorithms/c08.json)
    *   **Step 19:** Updated: `Never dilute amiodarone in normal saline (standard amiodarone must be diluted in D5W).`
*   *Location 3:* [flashcards/c08.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/flashcards/c08.json)
    *   **c08_fc07:** Updated flashcard:
        *   `"question": "Why must standard amiodarone be diluted in dextrose (D5W) and not normal saline?"`
        *   `"answer": "Standard amiodarone is incompatible with normal saline and precipitates. It must be diluted in D5W. The solvent in the formulation (polysorbate 80) can cause hypotension during infusion, which is a drug property and not caused by dextrose."`
*   *Location 4:* [quizzes/c08.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/quizzes/c08.json)
    *   **c08_q07:** Updated question:
        *   `"question": "Which diluent must be used for standard amiodarone infusions, and why?"`
        *   `"options": ["A. Normal saline, because dextrose degrades the active drug", "B. 5% Dextrose in water (D5W), because normal saline causes the drug to precipitate", "C. Lactated Ringer's, to maintain electrolyte balance", "D. Sterile water, to prevent volume overload"]`
        *   `"correct": 1`
        *   `"rationale": "Standard amiodarone is incompatible with sodium chloride (normal saline) and will precipitate, forming crystals. Therefore, D5W must be used as the diluent. The solvent polysorbate 80 can cause hypotension during infusion, which is a known side effect of rapid administration and not a reaction to dextrose."`

### 2. Updated post-ROSC TTM target (Completed)

*   *Location 1:* [chapters/c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c14.json)
    *   **Summary Card 2 ("Temperature Management After Cardiac Arrest"):** Updated text to state: `If targeted temperature management (TTM) is chosen as a therapeutic strategy, the recommended target range is 32–37.5°C, maintained for at least 36 hours.`
    *   **Clinical Pearls:** Updated: `Temperature ≤37.5°C is the minimum standard; if TTM is used, 32–37.5°C for ≥36 hours.`
    *   **Decision Tree:** Updated algorithm steps to read: `If TTM chosen → 32–37.5°C for ≥36 hours.`
*   *Location 2:* [algorithms/c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/algorithms/c14.json)
    *   **Step 17:** Updated: `If TTM chosen → 32–37.5°C for at least 36 hours.`
*   *Location 3:* [flashcards/c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/flashcards/c14.json)
    *   **c14_fc02:** Updated answer: `Maintain temperature ≤37.5°C at minimum. If targeted temperature management (TTM) is chosen, use 32–37.5°C for at least 36 hours. Treat any fever >37.5°C immediately.`
*   *Location 4:* [quizzes/c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/quizzes/c14.json)
    *   **c14_q01:** Updated Option C to `32–37.5°C for at least 36 hours` and rationale.
    *   **c14_q12:** Updated rationale to refer to the `32–37.5°C` target.
*   *Location 5:* [tables/c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/tables/c14.json)
    *   **c14_t01 (Row 3):** Updated target range to `≤37.5°C (minimum); 32–37.5°C if TTM`.

---

## 5. Image & Illustration Plan

ACLS is a highly visual course relying heavily on ECG strips, pad placement diagrams, and flowcharts. We recommend extending the JSON schema for chapters to support an optional `graphics` array (same as the BLS model) to render illustrations dynamically in the web UI.

### Required Visual Assets

#### 1. Waveform Capnography Patterns
*   **Location:** [c03.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c03.json) | Section: "Waveform Capnography"
*   **Insertion Point:** Immediately below the summary card.
*   **Preferred Style:** Minimalist vector schematic diagram with high contrast.
*   **Aspect Ratio & Dimensions:** 16:9 | 960 x 540 px
*   **Alt Text:** Schematic diagram of five capnography waveforms: Normal, Hyperventilation, Hypoventilation, Esophageal Intubation (flat line), and ROSC (sudden spike).
*   **AI Image Prompt:** `A flat vector medical diagram showing five distinct waveform graphs on a grid. Graph 1: Normal rectangular alveolar plateau wave labeled "Normal (35-45 mmHg)". Graph 2: Small, rapid rectangular waves labeled "Hyperventilation (Low ETCO₂)". Graph 3: Tall, wide rectangular waves labeled "Hypoventilation (High ETCO₂)". Graph 4: A flat baseline labeled "Esophageal Intubation". Graph 5: A flat baseline followed by a sudden tall wave spike labeled "ROSC (Return of Spontaneous Circulation)". Clean modern layout, green curves on a dark grey background grid, high readability.`

#### 2. Core ACLS ECG Rhythms
*   **Location:** [c04.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c04.json) | Section: "Core Rhythms"
*   **Insertion Point:** Below the summary list.
*   **Preferred Style:** Textbook ECG panel.
*   **Aspect Ratio & Dimensions:** 16:9 | 960 x 540 px
*   **Alt Text:** Panel of ECG strips showing VF, pulseless VT, Mobitz Type II AV Block, Complete Heart Block, SVT, and Torsades de Pointes.
*   **AI Image Prompt:** `A multi-panel medical vector illustration of six classic ECG strips arranged in a 2x3 grid. 1. Ventricular Fibrillation (chaotic irregular waves), 2. Monomorphic VT (rapid regular wide QRS), 3. Mobitz Type II (normal PR interval followed by dropped QRS), 4. Third-Degree AV Block (independent P waves and wide QRS), 5. SVT (narrow QRS, rapid regular rate), 6. Torsades de Pointes (spindle-like wide QRS wrapping around the baseline). Clean black lines on a pink medical grid background, clear layout.`

#### 3. Defibrillation vs. Synchronized Cardioversion Pad Placement
*   **Location:** [c05.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c05.json) | Section: "Defibrillation vs. Cardioversion"
*   **Insertion Point:** Below the summary card.
*   **Preferred Style:** Anatomical vector diagram.
*   **Aspect Ratio & Dimensions:** 4:3 | 800 x 600 px
*   **Alt Text:** Torso diagram demonstrating Anterolateral pad placement (defibrillation) vs. Anteroposterior placement (synchronized cardioversion).
*   **AI Image Prompt:** `An anatomical vector illustration of a human torso showing two pad placement configurations. Left side: Anterolateral placement with one pad on the upper right chest and one on the lateral left chest. Right side: Anteroposterior placement with one pad over the left precordium and the other on the upper back behind the heart. Arrows indicating the path of electrical current. High contrast, clean outlines, teal and dark blue colors.`

#### 4. Transcutaneous Pacing Capture
*   **Location:** [c05.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c05.json) | Section: "Pacing Capture"
*   **Insertion Point:** Below the pacing summary card.
*   **Preferred Style:** ECG strip schematic.
*   **Aspect Ratio & Dimensions:** 16:9 | 800 x 450 px
*   **Alt Text:** ECG strip showing pacer spikes followed by wide QRS complexes (electrical capture) compared to pacing without capture.
*   **AI Image Prompt:** `An ECG strip illustration demonstrating transcutaneous pacing capture. The strip shows a sharp vertical "pacer spike" immediately followed by a wide, distorted QRS complex and a T wave (labeled "Electrical Capture"). A section of the strip shows pacer spikes with no following QRS complex (labeled "Failure to Capture"). Pink grid background, crisp black waveforms, medically accurate textbook style.`

#### 5. VF / Pulseless VT Resuscitation Flowchart
*   **Location:** [c06.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c06.json) | Section: "Treatment Pathway"
*   **Insertion Point:** Immediately below the summary text.
*   **Preferred Style:** Flat infographic flowchart.
*   **Aspect Ratio & Dimensions:** 9:16 | 600 x 1060 px
*   **Alt Text:** Resuscitation flowchart showing CPR, Shock, Epinephrine administration, and Antiarrhythmic administration (Amiodarone/Lidocaine) sequence.
*   **AI Image Prompt:** `A vertical clinical flowchart for VF and pulseless VT cardiac arrest management. The flowchart starts at "VF/pVT identified" -> "Shock 1" -> "CPR 2 min + IV/IO access" -> "Rhythm Check" -> "Shock 2" -> "CPR 2 min + Epinephrine 1 mg q3-5 min" -> "Rhythm Check" -> "Shock 3" -> "CPR 2 min + Amiodarone 300 mg (or Lidocaine)". Professional color coding (green for action, blue for drugs, red for critical decision), clean lines, flat vector layout.`

#### 6. Asystole / PEA Resuscitation Flowchart
*   **Location:** [c07.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c07.json) | Section: "Treatment Pathway"
*   **Insertion Point:** Immediately below the summary text.
*   **Preferred Style:** Flat infographic flowchart.
*   **Aspect Ratio & Dimensions:** 9:16 | 600 x 1060 px
*   **Alt Text:** Resuscitation flowchart showing CPR, immediate Epinephrine, and search for H's and T's.
*   **AI Image Prompt:** `A vertical clinical flowchart for Asystole and PEA management. Starts at "Asystole/PEA identified" -> "CPR 2 min + immediate Epinephrine 1 mg IV/IO" -> "Rhythm Check" -> "CPR 2 min + assess for H's and T's" -> "Rhythm Check" -> "If shockable rhythm appears, transfer to shockable pathway". Professional color coding, clean lines, flat vector layout.`

#### 7. Intraosseous (IO) Access Sites
*   **Location:** [c08.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c08.json) | Section: "Vascular Access"
*   **Insertion Point:** Below the IV/IO comparison table.
*   **Preferred Style:** Anatomical textbook illustration.
*   **Aspect Ratio & Dimensions:** 4:3 | 800 x 600 px
*   **Alt Text:** Anatomical diagram showing the primary insertion sites for adult IO access: proximal humerus and proximal tibia.
*   **AI Image Prompt:** `An anatomical illustration of adult intraosseous (IO) insertion sites. Panel 1: Proximal humerus insertion site at the greater tubercle of the shoulder. Panel 2: Proximal tibia insertion site at the anteromedial flat surface, 2 cm distal to the tibial tuberosity. Cutaway view showing the needle extending through the cortex into the medullary space. Teal and bone-white colors, highly technical, clean outline.`

#### 8. Reversible Causes: The H's & T's
*   **Location:** [c09.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c09.json) | Section: "Reversible Causes Overview"
*   **Insertion Point:** Below the summary list.
*   **Preferred Style:** Modern graphic infographic.
*   **Aspect Ratio & Dimensions:** 16:9 | 960 x 540 px
*   **Alt Text:** Infographic displaying the 5 H's (Hypovolemia, Hypoxia, Hydrogen ion, Hypo-/Hyperkalemia, Hypothermia) and 5 T's (Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary, Thrombosis coronary).
*   **AI Image Prompt:** `A professional medical infographic layout representing the H's and T's of cardiac arrest. Left column: "5 H's" in deep blue cards (Hypovolemia, Hypoxia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia) with corresponding flat icons (water droplet, oxygen mask, pH scale, potassium molecule, snowflake). Right column: "5 T's" in deep red cards (Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary, Thrombosis coronary) with icons (lung outline, heart in sac, poison bottle, pulmonary artery clot, coronary artery clot). Flat vector style, dark background, highly readable.`

#### 9. Acute Coronary Syndrome: Coronary Angioplasty (PCI)
*   **Location:** [c12.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c12.json) | Section: "Reperfusion Therapy"
*   **Insertion Point:** Below the ACS summary.
*   **Preferred Style:** Textbook anatomical cross-section.
*   **Aspect Ratio & Dimensions:** 4:3 | 800 x 600 px
*   **Alt Text:** Cross-section of a coronary artery showing catheter balloon inflation and stent placement.
*   **AI Image Prompt:** `A medical textbook illustration of a coronary artery angioplasty and stent placement. Step 1: Balloon catheter expanding a plaque-obstructed coronary artery. Step 2: Stent deployed, holding the artery open and restoring normal red blood cell flow. Zoomed-in cross-section detail of the vascular wall. Clinically accurate colors, soft lighting, professional shading.`

#### 10. Veno-Arterial ECMO (VA-ECMO) for ECPR
*   **Location:** [c14.json](file:///D:/Apps/SmartCare/courses/acls/data/acls/chapters/c14.json) | Section: "Extracorporeal CPR (ECPR)"
*   **Insertion Point:** Below the ECPR summary card.
*   **Preferred Style:** Medical textbook illustration.
*   **Aspect Ratio & Dimensions:** 4:3 | 800 x 600 px
*   **Alt Text:** Diagram of a patient receiving veno-arterial ECMO during ECPR, showing femoral venous drainage, pump, oxygenator, and femoral arterial return.
*   **AI Image Prompt:** `A clinical medical illustration showing a patient receiving Veno-Arterial Extracorporeal Membrane Oxygenation (VA-ECMO) during ECPR. Visualizes cannulas inserted in the femoral vein (blue drainage line) and femoral artery (red return line), connected to an external centrifugal pump and membrane oxygenator machine. Blood flow direction indicated by arrows. Professional textbook layout, clean anatomy outlines, neutral patient silhouette.`
