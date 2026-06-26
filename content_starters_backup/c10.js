/* ========== Chapter 10 – Clinical Procedures ========== */
window.CPG_DATA = {
    id: "c10",
    title: "Clinical Procedures",
    shortTitle: "10. Clinical Procedures",
    sections: [
        {
            id: "c10s1",
            shortTitle: "10.1 Clinical Skills & Procedures",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#activity"/></svg> Clinical Procedures</h3>
                            <p>Technical procedures must be performed systematically to minimize complications.</p>
                            <h4>1. Vascular Access</h4>
                            <ul>
                                <li><strong>Intravenous (IV) Access:</strong> Select site, apply tourniquet, clean with alcohol/chlorhexidine, insert catheter at 15-30 degrees, check flash, advance, secure, and flush.</li>
                                <li><strong>Intraosseous (IO) Access:</strong> Indicated in critical emergencies when IV access cannot be established within 90 seconds. Sites: Proximal tibia, humeral head.</li>
                            </ul>
                            <h4>2. Skill Highlights</h4>
                            <ul>
                                <li><strong>ECG Electrode Placement:</strong> V1 (4th ICS right sternal border), V2 (4th ICS left sternal border), V4 (5th ICS midclavicular line).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Vascular', 'question': 'Indication for Intraosseous (IO) access?', 'answer': 'Unstable patient requiring fluids/medications where IV access is unsuccessful after 2 attempts or 90 seconds.'}, {'category': 'ECG', 'question': 'Where is V1 placed?', 'answer': '4th intercostal space at the right border of the sternum.'}],
            quiz: [{'q': 'What is the primary indication to establish IO access?', 'options': ['Routine blood draws', 'Critical patient with collapsed veins where IV access fails', 'Patient preference'], 'correct': 1, 'explanation': 'IO access is indicated for emergency resuscitation when rapid IV access is impossible.'}],
            critical: [{'id': 'crit_10_1_1', 'scenario': 'You are treating a patient in severe shock. You have attempted peripheral IV access twice without success. Time elapsed is 2 minutes.', 'question': 'What is your next access decision?', 'options': [{'t': 'Attempt a third peripheral IV in the external jugular', 'f': 'Incorrect. Avoid excessive IV attempts in resuscitation.'}, {'t': 'Establish intraosseous (IO) access immediately', 'f': 'Correct. IO is indicated after failed IV attempts in shock.'}], 'correct': 1, 'explanation': 'IO access provides a rapid, non-collapsible route for resuscitation fluids.', 'kpi': 'IO access escalation decision'}]
        }
    ]
};
