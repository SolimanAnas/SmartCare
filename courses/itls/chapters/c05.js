/* ========== ITLS Chapter 05: Airway Skills Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c05",
    "title": "Airway Skills",
    "shortTitle": "Ch 5: Airway Skills",
    "sections": [
        {
            "id": "itls-c05s1",
            "shortTitle": "5.1 Airway Management Skills",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#wind\"/></svg> Airway Skills</h3>\n    <p>Practice-based airway procedures including basic suctioning, supraglottic device placement, and confirmation techniques.</p>\n    <ul>\n        <li><strong>Suctioning:</strong> Max 15 seconds. Suction only on withdrawal of the catheter.</li>\n        <li><strong>Device Confirmation:</strong> Auscultate epigastrium and lungs bilaterally, monitor waveform capnography (EtCO2). Waveform capnography is the gold standard.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Skills",
            "question": "What is the gold standard for verifying ETT placement?",
            "answer": "Continuous waveform capnography (measuring exhaled carbon dioxide)."
        },
        {
            "category": "Skills",
            "question": "How long should you suction a patient's airway?",
            "answer": "No longer than 15 seconds at a time to prevent hypoxia."
        }
    ],
    "quiz": [
        {
            "q": "Which of the following is the most reliable method to confirm and monitor the placement of an endotracheal tube?",
            "options": [
                "Auscultation of breath sounds",
                "Chest rise and fall",
                "Continuous waveform capnography",
                "Checking for condensation in the tube"
            ],
            "correct": 2,
            "explanation": "Continuous waveform capnography is the gold standard. Auscultation is secondary and can be misleading in noisy environments."
        }
    ],
    "critical": [
        {
            "id": "crit_5_1",
            "scenario": "You have just placed a supraglottic airway. Waveform capnography shows a flat line, and you hear gurgling over the epigastrium.",
            "question": "What is the most likely problem?",
            "options": [
                {
                    "t": "The tube is placed correctly, start hyperventilating.",
                    "f": "Incorrect. Epigastric gurgling and flat capnography indicate esophageal placement."
                },
                {
                    "t": "The device is in the esophagus; deflate cuffs, remove the device, and ventilate with BVM.",
                    "f": "Correct. Esophageal placement must be corrected immediately."
                }
            ],
            "correct": 1,
            "explanation": "Esophageal placement must be corrected by removing the device and returning to basic BVM ventilations before attempting placement again.",
            "kpi": "Esophageal device detection"
        }
    ]
};
