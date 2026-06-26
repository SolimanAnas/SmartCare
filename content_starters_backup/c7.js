/* ========== Chapter 7 – Special Populations ========== */
window.CPG_DATA = {
    id: "c7",
    title: "Special Populations",
    shortTitle: "7. Special Populations",
    sections: [
        {
            id: "c7s1",
            shortTitle: "7.1 Pediatric & Obstetric Basics",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Special Population Care</h3>
                            <p>Neonates, children, and pregnant patients have distinct anatomical and physiological requirements.</p>
                            <h4>1. Pediatric Assessment Triangle (PAT)</h4>
                            <ul>
                                <li><strong>Appearance:</strong> Mental status, muscle tone, interactivity.</li>
                                <li><strong>Work of Breathing:</strong> Retractions, nasal flaring, grunting, positioning.</li>
                                <li><strong>Circulation to Skin:</strong> Pallor, mottling, cyanosis.</li>
                            </ul>
                            <h4>2. Obstetric Emergencies</h4>
                            <ul>
                                <li><strong>Eclampsia:</strong> Seizure activity in a pregnant patient. Treat with Magnesium Sulfate.</li>
                                <li><strong>Aortocaval Compression:</strong> Manually displace the uterus to the left in late-stage pregnant patients to prevent supine hypotension.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Pediatrics', 'question': 'What are the components of the PAT?', 'answer': 'Appearance, Work of Breathing, Circulation to Skin.'}, {'category': 'Obstetrics', 'question': 'How do you relieve supine hypotensive syndrome in pregnancy?', 'answer': 'Perform manual left uterine displacement (LUD) or tilt the patient to the left.'}],
            quiz: [{'q': 'What medication is indicated to control seizures in eclampsia?', 'options': ['Diazepam IV', 'Magnesium Sulfate IV/IO', 'Phenytoin IV'], 'correct': 1, 'explanation': 'Magnesium Sulfate is the drug of choice for eclamptic seizures.'}],
            critical: [{'id': 'crit_7_1_1', 'scenario': 'You are caring for a patient in her third trimester of pregnancy who is immobilized on a backboard. She becomes dizzy and hypotensive.', 'question': 'How should you manage this?', 'options': [{'t': 'Tilt the backboard 15–30 degrees to the left or displace the uterus manually', 'f': 'Correct. Relieves aortocaval compression.'}, {'t': 'Administer an IV fluid bolus immediately and keep her flat', 'f': 'Incorrect. Fluid will not address the mechanical vena cava compression.'}], 'correct': 0, 'explanation': 'Tilting the patient or manually displacing the uterus restores venous return to the heart.', 'kpi': 'Maternal positioning for hypotension'}]
        }
    ]
};
