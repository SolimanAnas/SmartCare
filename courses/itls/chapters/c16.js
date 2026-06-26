/* ========== ITLS Chapter 16: Burns Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c16",
    "title": "Burns",
    "shortTitle": "Ch 16: Burns",
    "sections": [
        {
            "id": "itls-c16s1",
            "shortTitle": "16.1 Burn Severity & Treatment",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#fire\"/></svg> Burn Management</h3>\n    <p>Burns are classified by depth (Superficial, Partial-Thickness, Full-Thickness) and size (using the **Rule of Nines**).</p>\n    <ul>\n        <li><strong>Airway Burns (Inhalation):</strong> Watch for soot around the mouth/nose, singed nasal hairs, hoarseness, stridor. Proactive intubation is critical before edema closes the airway.</li>\n        <li><strong>Rule of Nines (Adult):</strong> Head 9%, Chest/Abdomen 18%, Back 18%, Each Arm 9%, Each Leg 18%, Genitalia 1%.</li>\n        <li><strong>Fluid Resuscitation (Parkland Formula):</strong> \\(4 \text{ mL} \times \text{weight (kg)} \times \\% \text{ TBSA (Partial/Full thickness)}\\). Give half in the first 8 hours.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Burns",
            "question": "What is the Parkland formula for burn fluids?",
            "answer": "4 mL * weight (kg) * % TBSA burned, with half given in the first 8 hours."
        },
        {
            "category": "Burns",
            "question": "What are the indicators of an inhalation injury?",
            "answer": "Soot in airway, singed nasal hairs, hoarse voice, stridor, wheezing, or facial burns."
        }
    ],
    "quiz": [
        {
            "q": "Using the Rule of Nines, what is the estimated burn size for an adult patient with partial-thickness burns covering the entire anterior chest, abdomen, and the front of one leg?",
            "options": [
                "18%",
                "27%",
                "36%",
                "45%"
            ],
            "correct": 1,
            "explanation": "Anterior chest and abdomen = 18%. Front of one leg = 9%. Total = 18 + 9 = 27% TBSA."
        }
    ],
    "critical": [
        {
            "id": "crit_16_1",
            "scenario": "A patient was pulled from a house fire. He has facial burns, soot in his spit, and a hoarse, raspy voice.",
            "question": "What is your priority?",
            "options": [
                {
                    "t": "Apply wet dressings to the face and start an IV.",
                    "f": "Incorrect. Airway compromise is imminent; address the airway first."
                },
                {
                    "t": "Administer 100% oxygen and prepare for early advanced airway management (intubation).",
                    "f": "Correct. Early intubation is indicated for inhalation injury signs before airway edema blocks access."
                }
            ],
            "correct": 1,
            "explanation": "Early advanced airway placement is vital for airway burns to prevent total occlusion from edema.",
            "kpi": "Inhalation injury priority"
        }
    ]
};
