/* ========== Chapter 9 – Emergency Pharmacology ========== */
window.CPG_DATA = {
    id: "c9",
    title: "Emergency Pharmacology",
    shortTitle: "9. Emergency Pharmacology",
    sections: [
        {
            id: "c9s1",
            shortTitle: "9.1 Medication Safety & Calculations",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Pharmacology & Safety</h3>
                            <p>Safe medication administration is dependent on the 'Rights' of medication safety and correct dosage calculations.</p>
                            <h4>1. The Rights of Medication Safety</h4>
                            <ul>
                                <li>Right Patient, Right Drug, Right Dose, Right Route, Right Time, Right Documentation.</li>
                            </ul>
                            <h4>2. Common Drug Calculations</h4>
                            <ul>
                                <li><strong>Concentration:</strong> Amount of drug / Volume of fluid.</li>
                                <li><strong>Infusion Rates:</strong> (Desired Dose × Drip Factor × Volume) / (Total Drug Amount).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Safety', 'question': 'Name the 6 primary Rights of Medication safety.', 'answer': 'Right Patient, Right Drug, Right Dose, Right Route, Right Time, Right Documentation.'}, {'category': 'Calculations', 'question': 'Formula to calculate concentration?', 'answer': 'Concentration = Total Drug Amount / Total Volume.'}],
            quiz: [{'q': 'Which of the following is a high-alert drug safety step before administration?', 'options': ['Double-checking with a partner', 'Checking expiration date only', 'Verifying the dose once'], 'correct': 0, 'explanation': 'Double-checking high-alert drugs with a partner minimizes dose calculation errors.'}],
            critical: [{'id': 'crit_9_1_1', 'scenario': 'You are preparing to administer Epinephrine to an adult patient in cardiac arrest. The vial is labeled 1 mg in 10 mL (1:10,000).', 'question': 'What is the concentration of the drug?', 'options': [{'t': '0.1 mg/mL', 'f': 'Correct. 1 mg divided by 10 mL is 0.1 mg/mL.'}, {'t': '1.0 mg/mL', 'f': 'Incorrect. 1 mg in 1 mL would be 1.0 mg/mL.'}], 'correct': 0, 'explanation': '1 mg in 10 mL yields 0.1 mg per mL.', 'kpi': 'Drug concentration calculation'}]
        }
    ]
};
