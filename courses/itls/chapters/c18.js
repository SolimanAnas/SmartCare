/* ========== ITLS Chapter 18: Geriatric Trauma Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c18",
    "title": "Geriatric Trauma",
    "shortTitle": "Ch 18: Geriatric Trauma",
    "sections": [
        {
            "id": "itls-c18s1",
            "shortTitle": "18.1 Geriatric Trauma Physiology",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#users\"/></svg> Geriatric Trauma</h3>\n    <p>Aging reduces physiological reserve. Geriatric patients have a higher mortality rate for similar injury severities.</p>\n    <ul>\n        <li><strong>Cardiovascular:</strong> Beta-blockers can prevent tachycardia, masking shock. Hypertension is common, so a 'normal' blood pressure of 120/80 can represent shock for a hypertensive geriatric patient.</li>\n        <li><strong>Skeletal:</strong> Osteoporosis increases fracture risk from minor falls.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Geriatrics",
            "question": "Why can geriatric shock be masked?",
            "answer": "Beta-blockers or pacemakers prevent the heart rate from rising, masking the classic sign of tachycardia."
        },
        {
            "category": "Geriatrics",
            "question": "What is the significance of a BP of 110/70 in an elderly trauma patient?",
            "answer": "If their baseline systolic BP is 160-180 mmHg (chronic hypertension), a BP of 110 represents relative hypotension and potential shock."
        }
    ],
    "quiz": [
        {
            "q": "Why is an elderly trauma patient taking beta-blockers at higher risk during shock?",
            "options": [
                "Beta-blockers cause severe internal bleeding.",
                "They prevent the heart rate from increasing to compensate for blood loss.",
                "They cause sudden hypothermia.",
                "They interfere with oxygen administration."
            ],
            "correct": 1,
            "explanation": "Beta-blockers inhibit sympathetic stimulation, preventing the tachycardic response that compensates for hypovolemia."
        }
    ],
    "critical": [
        {
            "id": "crit_18_1",
            "scenario": "An 82-year-old male fell from a standing position. He is taking blood thinners (warfarin), is alert, has a normal heart rate of 70/min, and a blood pressure of 110/60.",
            "question": "What is your clinical concern?",
            "options": [
                {
                    "t": "He has no serious injuries since his heart rate is normal.",
                    "f": "Incorrect. Blood thinners increase risk of internal hemorrhage from minor falls."
                },
                {
                    "t": "He is at high risk for intracranial hemorrhage; evaluate GCS closely and transport.",
                    "f": "Correct. Elderly patients on anticoagulants require high index of suspicion for head trauma."
                }
            ],
            "correct": 1,
            "explanation": "Anticoagulated geriatric patients can bleed severely from minor head trauma, requiring rapid evaluation.",
            "kpi": "Anticoagulant risk management"
        }
    ]
};
