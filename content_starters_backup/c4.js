/* ========== Chapter 4 – Cardiovascular & Shock ========== */
window.CPG_DATA = {
    id: "c4",
    title: "Cardiovascular & Shock",
    shortTitle: "4. Cardiovascular & Shock",
    sections: [
        {
            id: "c4s1",
            shortTitle: "4.1 Cardiac Care & Arrest",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg> Resuscitation & Chest Pain</h3>
                            <p>Early identification of Acute Coronary Syndrome (ACS) and high-quality CPR save lives.</p>
                            <h4>1. High-Quality CPR</h4>
                            <ul>
                                <li><strong>Compression Rate:</strong> 100 to 120 compressions per minute.</li>
                                <li><strong>Compression Depth:</strong> 5–6 cm (2–2.4 inches) for adults; 1/3 chest depth for pediatrics.</li>
                                <li><strong>Recoil & Interruptions:</strong> Allow complete chest recoil; minimize interruptions in chest compressions.</li>
                            </ul>
                            <h4>2. Shockable vs Non-Shockable Rhythms</h4>
                            <ul>
                                <li><strong>Shockable:</strong> Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (VT).</li>
                                <li><strong>Non-Shockable:</strong> Asystole and Pulseless Electrical Activity (PEA).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'CPR', 'question': 'Adult CPR compression-to-ventilation ratio?', 'answer': '30:2 (for single or double rescuers without advanced airway).'}, {'category': 'Rhythms', 'question': 'Name the shockable cardiac arrest rhythms.', 'answer': 'Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (VT).'}],
            quiz: [{'q': 'What is the correct depth of adult chest compressions?', 'options': ['3 to 4 cm', '5 to 6 cm', '7 to 8 cm'], 'correct': 1, 'explanation': 'Adult compression depth must be between 5 and 6 cm.'}],
            critical: [{'id': 'crit_4_1_1', 'scenario': "You attach the AED to a cardiac arrest patient. The AED prompts 'Shock advised' and begins charging.", 'question': 'What is the correct action while the device is charging?', 'options': [{'t': 'Ensure everyone is clear of the patient and stop compressions immediately', 'f': 'Incorrect. Compressions should continue during charging until ready to shock.'}, {'t': 'Continue chest compressions until the AED warns to stand clear', 'f': 'Correct. Minimize hands-off time to maximize perfusion.'}], 'correct': 1, 'explanation': 'Compressions should be continued during AED charging to reduce hands-off time.', 'kpi': 'AED management & CPR continuity'}]
        }
    ]
};
