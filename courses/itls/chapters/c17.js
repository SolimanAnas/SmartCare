/* ========== ITLS Chapter 17: Pediatric Trauma Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c17",
    "title": "Pediatric Trauma",
    "shortTitle": "Ch 17: Pediatric Trauma",
    "sections": [
        {
            "id": "itls-c17s1",
            "shortTitle": "17.1 Pediatric Assessment Triangle (PAT)",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#baby\"/></svg> Pediatric Trauma</h3>\n    <p>Children have different anatomy and physiology than adults. Use the **Pediatric Assessment Triangle (PAT)** for general impression:</p>\n    <ul>\n        <li><strong>PAT Components:</strong> Appearance, Work of Breathing, Circulation to Skin.</li>\n        <li><strong>Physiology:</strong> Children compensate for shock extremely well by vasoconstriction, then deteriorate rapidly. Hypotension is a very late sign of pediatric shock.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Pediatrics",
            "question": "What is the PAT?",
            "answer": "Pediatric Assessment Triangle: Appearance, Work of Breathing, and Circulation to Skin."
        },
        {
            "category": "Pediatrics",
            "question": "Why is hypotension a late sign of shock in children?",
            "answer": "Children have strong compensatory mechanisms that maintain blood pressure until they have lost up to 30% of their blood volume, followed by sudden cardiovascular collapse."
        }
    ],
    "quiz": [
        {
            "q": "Which of the following indicates decompensated hemorrhagic shock in a pediatric patient?",
            "options": [
                "A heart rate of 140/minute",
                "Cool, pale extremities",
                "A systolic blood pressure of 60 mmHg",
                "Restlessness and crying"
            ],
            "correct": 2,
            "explanation": "Hypotension (systolic BP < 70 + 2*age) is a late, decompensated sign of shock in children, representing critical failure."
        }
    ],
    "critical": [
        {
            "id": "crit_17_1",
            "scenario": "A 5-year-old female was hit by a car. She is lethargic, tachycardic at 160/min, has cool extremities, and a blood pressure of 82/50.",
            "question": "How do you evaluate her shock status?",
            "options": [
                {
                    "t": "She is not in shock because her blood pressure is above 80.",
                    "f": "Incorrect. Tachycardia and cool skin in a trauma child represent compensated shock."
                },
                {
                    "t": "She is in shock; her mental status, tachycardia, and cool skin indicate perfusion failure.",
                    "f": "Correct. Perfusion signs (HR, skin, LOC) indicate shock before hypotension develops."
                }
            ],
            "correct": 1,
            "explanation": "Evaluate perfusion (skin, mental state, heart rate) to detect shock early in children; do not wait for hypotension.",
            "kpi": "Pediatric shock detection"
        }
    ]
};
