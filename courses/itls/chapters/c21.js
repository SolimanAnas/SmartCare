/* ========== ITLS Chapter 21: Trauma Arrest Reviewer Dataset ========== */
window.CPG_DATA = {
    "id": "itls-c21",
    "title": "Trauma Arrest",
    "shortTitle": "Ch 21: Trauma Arrest",
    "sections": [
        {
            "id": "itls-c21s1",
            "shortTitle": "21.1 Traumatic Cardiac Arrest",
            "summary": "<div class=\"sum-card\">\n    <h3 style=\"color:var(--primary-accent);\"><svg class=\"lucide\" width=\"1em\" height=\"1em\"><use href=\"../icons/sprite.svg#siren\"/></svg> Trauma Arrest</h3>\n    <p>Traumatic cardiac arrest has an extremely low survival rate. Focus on **reversible causes** immediately on scene before transport.</p>\n    <ul>\n        <li><strong>Reversible Causes (H&Ts):</strong> Hypovolemia (control bleeding), Hypoxia (oxygen/intubation), Tension Pneumothorax (needle decompression), Cardiac Tamponade.</li>\n        <li><strong>CPR:</strong> Perform CPR but prioritize airway control and bilateral chest decompression if tension pneumothorax is suspected.</li>\n    </ul>\n</div>"
        }
    ],
    "flashcards": [
        {
            "category": "Arrest",
            "question": "What are the primary reversible causes of traumatic cardiac arrest?",
            "answer": "Hypoxia, hypovolemia, tension pneumothorax, and cardiac tamponade."
        },
        {
            "category": "Arrest",
            "question": "What is the priority in traumatic cardiac arrest compared to medical arrest?",
            "answer": "Address mechanical causes immediately (control hemorrhage, decompress the chest, open the airway) rather than focusing solely on chest compressions."
        }
    ],
    "quiz": [
        {
            "q": "Which of the following interventions is the highest priority in a patient in traumatic cardiac arrest from a chest crush injury?",
            "options": [
                "Administering IV epinephrine",
                "Performing immediate bilateral needle chest decompression",
                "Defibrillating the patient",
                "Performing continuous chest compressions for 10 minutes"
            ],
            "correct": 1,
            "explanation": "In traumatic arrest from chest injuries, tension pneumothorax or airway obstruction is highly likely. Bilateral chest decompression addresses this mechanical cause immediately."
        }
    ],
    "critical": [
        {
            "id": "crit_21_1",
            "scenario": "A patient becomes pulseless and apneic immediately after extrication from a vehicle. You note flat neck veins and tracheal deviation.",
            "question": "What is your immediate intervention?",
            "options": [
                {
                    "t": "Start chest compressions and prepare to administer epinephrine.",
                    "f": "Incorrect. epineprhine does not fix a mechanical tension pneumothorax."
                },
                {
                    "t": "Open the airway, perform bilateral needle chest decompression, and control any major bleeding.",
                    "f": "Correct. Resolve mechanical causes first in traumatic arrest."
                }
            ],
            "correct": 1,
            "explanation": "In traumatic arrest, correct airway obstruction and perform chest decompression to address reversible causes.",
            "kpi": "Trauma arrest reversible cause"
        }
    ]
};
