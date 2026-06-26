/* ========== Chapter 2 – Patient Assessment ========== */
window.CPG_DATA = {
    id: "c2",
    title: "Patient Assessment",
    shortTitle: "2. Patient Assessment",
    sections: [
        {
            id: "c2s1",
            shortTitle: "2.1 Scene Size-up & Primary Assessment",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Primary Survey & Vitals</h3>
                            <p>Systematic evaluation is critical to discover life-threatening issues early.</p>
                            <h4>1. Primary Survey (ABCDE)</h4>
                            <ul>
                                <li><strong>Airway:</strong> Patency, secretions, airway protection (C-spine control for trauma).</li>
                                <li><strong>Breathing:</strong> Rate, depth, lung sounds, effort, oxygen saturation (SpO₂).</li>
                                <li><strong>Circulation:</strong> Pulse rate, strength, rhythm, skin perfusion (CRT), and control of hemorrhage.</li>
                                <li><strong>Disability:</strong> Neurological status using GCS and AVPU scales. Check blood glucose.</li>
                                <li><strong>Exposure:</strong> Environmental control while maintaining normal body temperature.</li>
                            </ul>
                            <h4>2. Vital Sign Benchmarks</h4>
                            <ul>
                                <li><strong>Normal Adult Vitals:</strong> HR 60-100 bpm, RR 12-20 bpm, SBP >=90 mmHg, Temp 36.5–37.5°C, Glucose >=70 mg/dL.</li>
                                <li><strong>Reassessment Frequency:</strong> Red/Critical Priority: Every 5 minutes; Green/Stable Priority: Every 15 minutes.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Vitals', 'question': 'What defines adult hypotension?', 'answer': 'Systolic Blood Pressure (SBP) < 90 mmHg.'}, {'category': 'Assessment', 'question': 'What is the AVPU scale?', 'answer': 'Alert, Verbal, Pain, Unresponsive. Used for rapid neurological assessment.'}],
            quiz: [{'q': 'How often should you reassess a critical patient?', 'options': ['Every 5 minutes', 'Every 15 minutes', 'Only once before transport'], 'correct': 0, 'explanation': 'Critical patients require reassessment every 5 minutes.'}],
            critical: [{'id': 'crit_2_1_1', 'scenario': 'You are assessing a patient who appears confused, sweat-soaked, and pale. The primary survey indicates: airway patent, breathing adequate, pulse 96 bpm (weak). Blood glucose is 54 mg/dL.', 'question': 'What should you address first?', 'options': [{'t': 'Give 15L oxygen via Non-Rebreather Mask', 'f': 'Incorrect. Oxygen is not indicated if breathing is adequate and SpO2 normal.'}, {'t': 'Treat the hypoglycemia immediately', 'f': 'Correct. Glucose < 70 mg/dL with altered mental status requires immediate treatment.'}], 'correct': 1, 'explanation': 'Symptomatic hypoglycemia is an immediate life threat that must be addressed.', 'kpi': 'Hypoglycemia management in primary survey'}]
        }
    ]
};
