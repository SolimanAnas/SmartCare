#!/usr/bin/env python3
"""Build the SmartCare prehospital (EMT) curriculum skeleton from a single TOC.

Generates, for each chapter, content/cX.js with window.CPG_DATA and one placeholder
section per TOC topic (id, shortTitle, placeholder summary, empty flashcards/quiz/
critical). Content is added later. Also writes data/toc.json as the machine-readable
source of truth.

PRESERVES already-authored chapters listed in KEEP (e.g. c3). Run from repo root:
    python scripts/build_toc.py
"""
from __future__ import annotations

import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
KEEP = {"c3"}  # already authored — do not overwrite

ICONS = {
    "c1": "book-open", "c2": "stethoscope", "c4": "heart-pulse", "c5": "pill",
    "c6": "bone", "c7": "baby", "c8": "cloud-lightning", "c9": "flask-conical", "c10": "wrench",
}

# ── Prehospital (EMT) curriculum: chapter -> (title, group, [topics]) ──────────
TOC = {
    "c1": ("Foundations of Care", "foundations", [
        "EMS & Healthcare Systems", "Roles, Responsibilities & Professionalism",
        "Workforce Safety & Wellness", "Infection Prevention & PPE",
        "Medical, Legal & Ethical Issues", "Consent, Refusal & Advance Directives",
        "Communication & Handoff", "Documentation & the Patient Care Report",
        "Medical Terminology", "Lifting, Moving & Positioning",
        "Evidence-Based Practice & Quality Improvement",
    ]),
    "c2": ("Patient Assessment", "assessment", [
        "Anatomy & Physiology Essentials", "Pathophysiology of Perfusion & Shock",
        "Scene Size-up & Safety", "Primary Assessment (XABCDE)", "Vital Signs",
        "Monitoring Devices", "History Taking (SAMPLE / OPQRST)",
        "Secondary Assessment", "Reassessment & Trending", "Clinical Decision Making",
        "Field Triage (START / SALT)",
    ]),
    "c4": ("Cardiovascular & Resuscitation", "cardio", [
        "Cardiac Anatomy & Physiology", "Chest Pain / Acute Coronary Syndrome",
        "Heart Failure & Pulmonary Edema", "Hypertensive Emergencies",
        "Dysrhythmia Recognition", "ECG Basics & 12-Lead / STEMI",
        "Cardiac Arrest & High-Quality CPR", "AED & Defibrillation",
        "Post-Cardiac-Arrest (ROSC) Care", "Shock & Hemorrhage", "Fluid Resuscitation",
    ]),
    "c5": ("Medical Emergencies", "medical", [
        "Respiratory Emergencies", "Neurological Emergencies", "Endocrine Emergencies",
        "Allergy & Anaphylaxis", "Toxicology & Overdose", "Gastrointestinal & Abdominal",
        "Genitourinary & Renal", "Hematologic Emergencies", "Infectious Disease & Sepsis",
        "Behavioral & Psychiatric", "Pain Management",
    ]),
    "c6": ("Trauma Emergencies", "trauma", [
        "Trauma Systems & Kinematics", "Bleeding Control", "Shock in Trauma",
        "Soft-Tissue Injuries & Wound Care", "Burns", "Head & Brain Injury (GCS)",
        "Spine & Motion Restriction", "Chest Trauma", "Abdominal & Pelvic Trauma",
        "Musculoskeletal Injuries & Splinting", "Multisystem Trauma & Trauma in Pregnancy",
    ]),
    "c7": ("Special Populations", "special", [
        "Obstetrics & Childbirth", "Gynecologic Emergencies", "Neonatal Resuscitation",
        "Pediatric Assessment & Emergencies", "Child Abuse & Neglect Recognition",
        "Geriatrics", "Patients with Special Challenges", "Bariatric Considerations",
    ]),
    "c8": ("Environmental & Disaster", "environmental", [
        "Heat-Related Illness", "Cold Exposure & Hypothermia", "Drowning & Submersion",
        "Diving & Altitude Emergencies", "Bites, Stings & Envenomation",
        "Hazardous Materials Awareness", "CBRNE & Terrorism Response",
        "Mass-Casualty Incidents & Triage", "Incident Command System (ICS)",
    ]),
    "c9": ("Emergency Pharmacology", "pharmacology", [
        "Principles of Pharmacology & Drug Classes", "Routes of Administration",
        "The Rights of Medication Administration", "Dose & Simple Calculations",
        "Emergency Drug Formulary", "Medication-Assisted Treatment",
        "Medication Safety & Error Prevention",
    ]),
    "c10": ("Clinical Procedures & Skills", "procedures", [
        "Airway & Breathing Skills", "Oxygen & Ventilation Skills",
        "Bleeding Control & Wound Care", "Splinting & Bandaging",
        "Spinal Motion Restriction Skills", "Patient Movement & Lifting",
        "ECG Acquisition (12-Lead)", "Medication Administration Skills",
    ]),
}


def esc(s):
    return s.replace("\\", "\\\\").replace("`", "\\`")


def gen_chapter(cid, title, group, topics):
    num = cid[1:]  # "1".."10"
    icon = ICONS.get(cid, "file-text")
    sections = []
    for i, topic in enumerate(topics, 1):
        sid = f"{cid}s{i}"
        short = f"{num}.{i} {topic}"
        summary = (
            '<div class="sum-card">'
            f'<h3 style="color:var(--primary-accent);">'
            f'<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false">'
            f'<use href="../icons/sprite.svg#{icon}"/></svg> {esc(topic)}</h3>'
            '<p style="opacity:.6;font-style:italic;">Content coming soon — '
            'part of the SmartCare EMT curriculum.</p></div>'
        )
        sections.append(
            "        {\n"
            f'            id: "{sid}",\n'
            f'            shortTitle: "{esc(short)}",\n'
            f"            summary: `{summary}`,\n"
            "            flashcards: [],\n"
            "            quiz: [],\n"
            "            critical: []\n"
            "        }"
        )
    body = ",\n".join(sections)
    return (
        f"/* ========== Chapter {num} – {title} ========== */\n"
        "window.CPG_DATA = {\n"
        f'    id: "{cid}",\n'
        f'    title: "{esc(title)}",\n'
        f'    shortTitle: "{num}. {esc(title)}",\n'
        "    sections: [\n"
        f"{body}\n"
        "    ]\n"
        "};\n"
    )


def main():
    toc_json = {"version": "1.0-prehospital", "audience": ["emt"], "chapters": []}
    written = 0
    for cid, (title, group, topics) in TOC.items():
        toc_json["chapters"].append({
            "id": cid, "title": title, "group": group,
            "sections": [{"id": f"{cid}s{i}", "title": t} for i, t in enumerate(topics, 1)],
        })
        if cid in KEEP:
            print(f"  {cid}: preserved (already authored) — {title}")
            continue
        with open(os.path.join(CONTENT, f"{cid}.js"), "w", encoding="utf-8") as fh:
            fh.write(gen_chapter(cid, title, group, topics))
        written += 1
        print(f"  {cid}: {len(topics)} sections — {title}")

    with open(os.path.join(ROOT, "data", "toc.json"), "w", encoding="utf-8") as fh:
        json.dump(toc_json, fh, indent=2, ensure_ascii=False)

    total = sum(len(t[2]) for t in TOC.values())
    print(f"\nWrote {written} chapter skeletons + data/toc.json "
          f"({len(TOC)} chapters, {total} sections; {len(KEEP)} preserved).")


if __name__ == "__main__":
    main()
