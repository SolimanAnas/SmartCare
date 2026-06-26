/* ========== ITLS Chapter 20: The Impaired Patient Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c20",
    "title": "The Impaired Patient",
    "shortTitle": "Ch 20: Impaired Patient",
    "sections": [
        {
            "id": "itls-c20s1",
            "shortTitle": "20.1 Assessing Impaired Patients",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#users\"/></svg> Impaired Patients</h3>\n    <p>Alcohol, drugs, or medical conditions (hypoglycemia, hypoxia) can impair a patient's mental status, making pain reporting unreliable.</p>\n    <ul>\n        <li><strong>Rule:</strong> Never assume altered mental status is due solely to alcohol or drugs. Always rule out head injury, hypoxia, hypoglycemia, and shock first.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Impaired",
            "question": "What is the primary danger when assessing an intoxicated trauma patient?",
            "answer": "The patient may not perceive or report pain from serious internal injuries (like cervical spine fractures or abdominal bleeding)."
        },
        {
            "category": "Impaired",
            "question": "What must be ruled out before attributing altered LOC to alcohol?",
            "answer": "Hypoxia, hypoglycemia, shock, carbon monoxide poisoning, and traumatic brain injury."
        }
    ],
    "quiz": [
        {
            "q": "You are treating an intoxicated patient who fell down a flight of stairs. He is combative and refuses to cooperate. Your physical exam must assume:",
            "options": [
                "The patient has no serious injuries.",
                "The patient has a cervical spine injury and internal injuries until proven otherwise.",
                "The patient is only seeking attention.",
                "The patient can be cleared of spinal restrictions immediately."
            ],
            "correct": 1,
            "explanation": "Intoxication masks pain signals. You must assume serious injuries (especially cervical spine fractures) are present and implement appropriate SMR."
        }
    ],
    "critical": [
        {
            "id": "crit_20_1",
            "scenario": "A patient smells of alcohol and has a minor head laceration from a fall. He is aggressive and says he is fine.",
            "question": "How do you proceed?",
            "options": [
                {
                    "t": "Let the patient go since he is alert and refusing care.",
                    "f": "Incorrect. Intoxicated patients lack capacity to refuse care for head injuries."
                },
                {
                    "t": "Assess airway, breathing, circulation, test blood glucose, and maintain SMR due to unreliable exam.",
                    "f": "Correct. Assess for organic causes of alteration and protect the spine."
                }
            ],
            "correct": 1,
            "explanation": "Intoxication makes physical assessment unreliable. Assess ABCs, check glucose, and maintain spinal motion restriction.",
            "kpi": "Impaired capacity management"
        }
    ]
};
