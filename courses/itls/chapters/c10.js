/* ========== ITLS Chapter 10: Head Trauma and Traumatic Brain Injury Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c10",
    "title": "Head Trauma and Traumatic Brain Injury",
    "shortTitle": "Ch 10: Head Trauma",
    "sections": [
        {
            "id": "itls-c10s1",
            "shortTitle": "10.1 Traumatic Brain Injury (TBI)",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#activity\"/></svg> TBI & ICP</h3>\n    <p>Managing head trauma focuses on preventing **Secondary Brain Injury** (hypoxia and hypotension).</p>\n    <ul>\n        <li><strong>Cushing's Triad (Increasing ICP):</strong> Hypertension (widening pulse pressure), bradycardia, and irregular respirations (Cheyne-Stokes).</li>\n        <li><strong>Hyperventilation Rules:</strong> Only hyperventilate (rate 20/min for adults) if there are active signs of herniation (blown pupil, decerebrate posturing, sudden GCS drop). Otherwise, maintain normal ventilation (10-12/min).</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Head Trauma",
            "question": "What is Cushing's Triad?",
            "answer": "Bradycardia, hypertension (widening pulse pressure), and irregular respirations, indicating increased intracranial pressure (ICP)."
        },
        {
            "category": "Head Trauma",
            "question": "What is the danger of hyperventilating a head-injured patient?",
            "answer": "Hyperventilation causes cerebral vasoconstriction, which reduces cerebral blood flow and worsens brain ischemia."
        }
    ],
    "quiz": [
        {
            "q": "Which of the following sets of vital signs is classic for Cushing's Triad?",
            "options": [
                "BP 90/60, HR 120/min, RR 24/min",
                "BP 180/90, HR 48/min, RR 10/min (irregular)",
                "BP 120/80, HR 72/min, RR 16/min",
                "BP 70/40, HR 50/min, RR 8/min"
            ],
            "correct": 1,
            "explanation": "Cushing's triad involves hypertension (usually with a widening pulse pressure), bradycardia, and irregular/slow breathing, indicating high ICP."
        }
    ],
    "critical": [
        {
            "id": "crit_10_1",
            "scenario": "A patient with a head injury has a GCS of 7, a blown right pupil, and is posturing. Oxygen saturations are 92%.",
            "question": "What is your immediate respiratory strategy?",
            "options": [
                {
                    "t": "Hyperventilate the patient at 30 breaths/minute using room air.",
                    "f": "Incorrect. Hyperventilation is too fast and room air is inadequate."
                },
                {
                    "t": "Administer high-flow oxygen, assist ventilations with BVM at 10-12/min, and only hyperventilate (20/min) if active herniation signs persist.",
                    "f": "Correct. Ensure oxygenation first. Mild hyperventilation (20/min) is only reserved for active brain herniation."
                }
            ],
            "correct": 1,
            "explanation": "Provide high-flow oxygen and normal ventilation rates. Avoid aggressive hyperventilation unless active herniation is present.",
            "kpi": "TBI ventilation control"
        }
    ]
};
