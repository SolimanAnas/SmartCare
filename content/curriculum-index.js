/* ========== curriculum-index.js – shared chapter/sub-chapter data ==========
   Single source of truth for "which chapters exist and what topics live
   inside each one" — used by chapters/c-index.html's Full Index accordion
   AND by index.html's homepage search (so searching "STEMI" or "tourniquet"
   surfaces the chapter that actually covers it, not just chapters whose
   top-level title happens to match). Previously this array lived only
   inside content/c-index.js's generateIndexHTML(), so index.html had no
   way to search sub-chapter topics at all — it could only match a
   chapter's own shortTitle/title/id. */
window.CURRICULUM_INDEX = [
    { id:"c1",  num:"1",  file:"c1",  title:"Foundations of Emergency Care", icon:"shield",      accent:"var(--accent-universal)", sections:[
        ["c1s1","1.1 EMS, Systems & Professionalism"],
        ["c1s3","1.2 Workforce Safety & Wellness"],
        ["c1s4","1.3 Infection Prevention & PPE"],
        ["c1s5","1.4 Medical, Legal & Ethical Issues"],
        ["c1s6","1.5 Consent, Refusal & Advance Directives"],
        ["c1s7","1.6 Communication & Handoff"],
        ["c1s8","1.7 Documentation & the Patient Care Report"],
        ["c1s9","1.8 Medical Terminology"],
        ["c1s10","1.9 Lifting, Moving & Positioning"]
    ]},
    { id:"c2",  num:"2",  file:"c2",  title:"Patient Assessment", icon:"search",          accent:"var(--accent-universal)", sections:[
        ["c2s1","2.1 Anatomy & Physiology Essentials"],
        ["c2s2","2.2 Pathophysiology of Perfusion & Shock"],
        ["c2s3","2.3 Scene Size-up & Safety"],
        ["c2s4","2.4 Primary Assessment (XABCDE)"],
        ["c2s5","2.5 Vital Signs"],
        ["c2s6","2.6 Monitoring Devices"],
        ["c2s7","2.7 History Taking (SAMPLE / OPQRST)"],
        ["c2s8","2.8 Secondary Assessment"],
        ["c2s9","2.9 Reassessment & Trending"],
        ["c2s10","2.10 Clinical Decision Making"],
        ["c2s11","2.11 Field Triage (START / SALT)"]
    ]},
    { id:"c3",  num:"3",  file:"c3",  title:"Airway & Ventilation", icon:"wind",          accent:"var(--accent-airway)", sections:[
        ["c3s1","3.1 Airway Anatomy & Physiology"],
        ["c3s2","3.2 Airway Assessment"],
        ["c3s3","3.3 Foreign Body Airway Obstruction (FBAO)"],
        ["c3s4","3.4 Airway Adjuncts"],
        ["c3s5","3.5 Oxygen Therapy"],
        ["c3s6","3.6 Ventilation"],
        ["c3s7","3.7 Suction"],
        ["c3s8","3.8 Advanced Airways"],
        ["c3s9","3.9 Respiratory Failure"]
    ]},
    { id:"c4",  num:"4",  file:"c4",  title:"Cardiovascular & Resuscitation", icon:"heart", accent:"var(--accent-cardio)", sections:[
        ["c4s1","4.1 Cardiac Anatomy & Physiology"],
        ["c4s2","4.2 Chest Pain / Acute Coronary Syndrome"],
        ["c4s3","4.3 Heart Failure & Pulmonary Edema"],
        ["c4s4","4.4 Hypertensive Emergencies"],
        ["c4s5","4.5 Dysrhythmia Recognition"],
        ["c4s6","4.6 ECG Basics & 12-Lead / STEMI"],
        ["c4s7","4.7 Cardiac Arrest & High-Quality CPR"],
        ["c4s8","4.8 AED & Defibrillation"],
        ["c4s9","4.9 Post-Cardiac-Arrest (ROSC) Care"],
        ["c4s10","4.10 Shock & Hemorrhage"],
        ["c4s11","4.11 Fluid Resuscitation"],
        ["c4s12","4.12 Pediatric Cardiac Arrest & BLS"],
        ["c4s13","4.13 Termination of Resuscitation & Verification of Death"]
    ]},
    { id:"c5",  num:"5",  file:"c5",  title:"Medical Emergencies", icon:"stethoscope",    accent:"var(--accent-medical)", sections:[
        ["c5s1","5.1 Respiratory Emergencies"],
        ["c5s2","5.2 Neurological Emergencies"],
        ["c5s3","5.3 Endocrine Emergencies"],
        ["c5s4","5.4 Allergy & Anaphylaxis"],
        ["c5s5","5.5 Toxicology & Overdose"],
        ["c5s6","5.6 Gastrointestinal & Abdominal"],
        ["c5s7","5.7 Genitourinary & Renal"],
        ["c5s8","5.8 Hematologic Emergencies"],
        ["c5s9","5.9 Infectious Disease & Sepsis"],
        ["c5s10","5.10 Behavioral & Psychiatric"],
        ["c5s11","5.11 Pain Management"]
    ]},
    { id:"c6",  num:"6",  file:"c6",  title:"Trauma Emergencies", icon:"bandage",         accent:"var(--accent-cardio)", sections:[
        ["c6s1","6.1 Trauma Systems & Kinematics"],
        ["c6s2","6.2 Bleeding Control"],
        ["c6s3","6.3 Shock in Trauma"],
        ["c6s4","6.4 Soft-Tissue Injuries & Wound Care"],
        ["c6s5","6.5 Burns"],
        ["c6s6","6.6 Head & Brain Injury"],
        ["c6s7","6.7 Spine & Motion Restriction"],
        ["c6s8","6.8 Chest Trauma"],
        ["c6s9","6.9 Abdominal & Pelvic Trauma"],
        ["c6s10","6.10 Musculoskeletal Injuries & Splinting"],
        ["c6s11","6.11 Multisystem Trauma & Pregnancy"]
    ]},
    { id:"c7",  num:"7",  file:"c7",  title:"Special Populations", icon:"heart-pulse",     accent:"var(--accent-pediatric)", sections:[
        ["c7s1","7.1 Obstetrics & Childbirth"],
        ["c7s2","7.2 Gynecologic Emergencies"],
        ["c7s3","7.3 Neonatal Resuscitation"],
        ["c7s4","7.4 Pediatric Assessment & Emergencies"],
        ["c7s5","7.5 Child Abuse & Neglect Recognition"],
        ["c7s6","7.6 Geriatrics"],
        ["c7s7","7.7 Patients with Special Challenges"],
        ["c7s8","7.8 Bariatric Considerations"]
    ]},
    { id:"c8",  num:"8",  file:"c8",  title:"Environmental & Disaster Medicine", icon:"thermometer", accent:"var(--accent-environmental)", sections:[
        ["c8s1","8.1 Heat-Related Illness"],
        ["c8s2","8.2 Cold Exposure & Hypothermia"],
        ["c8s3","8.3 Drowning & Submersion Injury"],
        ["c8s4","8.4 Diving & Altitude Emergencies"],
        ["c8s5","8.5 Bites, Stings & Envenomation"],
        ["c8s6","8.6 Hazardous Materials & Radiation"],
        ["c8s7","8.7 CBRNE & Terrorism Response"],
        ["c8s8","8.8 Mass-Casualty Incidents & Triage"],
        ["c8s9","8.9 Incident Command System (ICS)"]
    ]},
    { id:"c9",  num:"9",  file:"c9",  title:"Emergency Pharmacology", icon:"pill",         accent:"var(--accent-medical)", sections:[
        ["c9s1","9.1 Principles of Pharmacology & Drug Classes"],
        ["c9s2","9.2 Routes of Administration"],
        ["c9s3","9.3 Rights of Medication Administration"],
        ["c9s4","9.4 Dose & Simple Calculations"],
        ["c9s5","9.5 Emergency Drug Formulary"],
        ["c9s6","9.6 Medication-Assisted Treatment"],
        ["c9s7","9.7 Medication Safety & Error Prevention"]
    ]},
    { id:"c10", num:"10", file:"c10", title:"Clinical Procedures & Skills", icon:"syringe", accent:"var(--accent-resus)", sections:[
        ["c10s1","10.1 Airway & Breathing Skills"],
        ["c10s2","10.2 Oxygen & Ventilation Skills"],
        ["c10s3","10.3 Bleeding Control & Wound Care"],
        ["c10s4","10.4 Splinting & Bandaging"],
        ["c10s5","10.5 Spinal Motion Restriction Skills"],
        ["c10s6","10.6 Patient Movement & Lifting"],
        ["c10s7","10.7 ECG Acquisition — 12-Lead"],
        ["c10s8","10.8 Medication Administration Skills"]
    ]},
    { id:"m1-38", num:"11", file:"m1-38", title:"Emergency Drug Reference", icon:"book", accent:"var(--accent-scope)", sections:[
        ["m1-38s1","Drug Formulary (M1–38)"]
    ]}
];
