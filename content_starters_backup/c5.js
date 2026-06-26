/* ========== Chapter 5 – Medical Emergencies ========== */
window.CPG_DATA = {
    id: "c5",
    title: "Medical Emergencies",
    shortTitle: "5. Medical Emergencies",
    sections: [
        {
            id: "c5s1",
            shortTitle: "5.1 Medical Assessment",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Medical Emergencies</h3>
                            <p>Systemic medical conditions require targeted assessment and rapid treatment.</p>
                            <h4>1. Key Medical Presentations</h4>
                            <ul>
                                <li><strong>Anaphylaxis:</strong> Systemic allergic reaction with respiratory compromise or shock. Epinephrine IM is the first-line treatment.</li>
                                <li><strong>Stroke:</strong> F-A-S-T assessment (Face, Arm, Speech, Time). Early hospital pre-arrival notification is essential.</li>
                                <li><strong>Sepsis:</strong> Systemic infection with organ dysfunction (altered mental status, RR >=22, SBP <100).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Allergy', 'question': 'First-line drug for anaphylaxis?', 'answer': 'Epinephrine IM (1:1,000 solution) administered in the anterolateral thigh.'}, {'category': 'Stroke', 'question': 'What does FAST stand for?', 'answer': 'Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.'}],
            quiz: [{'q': 'Which medication is the primary treatment for severe anaphylaxis?', 'options': ['Diphenhydramine IV', 'Epinephrine IM', 'Methylprednisolone IV'], 'correct': 1, 'explanation': 'Epinephrine IM is the first-line and most critical treatment for anaphylaxis.'}],
            critical: [{'id': 'crit_5_1_1', 'scenario': 'A 45-year-old female complains of throat tightness and wheezing after eating shellfish. She is pale, sweating, and has a blood pressure of 82/50 mmHg.', 'question': 'What is your immediate intervention?', 'options': [{'t': 'Administer Albuterol nebulizer and Benadryl IV.', 'f': 'Incorrect. These are adjunctive therapies only.'}, {'t': 'Administer Epinephrine 0.3 mg (1:1,000) IM immediately.', 'f': 'Correct. Epinephrine IM must be given first for anaphylactic shock.'}], 'correct': 1, 'explanation': 'Epinephrine IM reverses systemic vasodilation and bronchoconstriction in anaphylaxis.', 'kpi': 'Anaphylaxis drug selection'}]
        }
    ]
};
