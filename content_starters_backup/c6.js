/* ========== Chapter 6 – Trauma Emergencies ========== */
window.CPG_DATA = {
    id: "c6",
    title: "Trauma Emergencies",
    shortTitle: "6. Trauma Emergencies",
    sections: [
        {
            id: "c6s1",
            shortTitle: "6.1 Trauma & Bleeding",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#shield-alert"/></svg> Hemorrhage Control & Trauma</h3>
                            <p>Controlling external bleeding and establishing spinal precautions are core trauma skills.</p>
                            <h4>1. External Hemorrhage Control</h4>
                            <ul>
                                <li><strong>Direct Pressure:</strong> Apply firm, steady pressure directly over the wound.</li>
                                <li><strong>Tourniquet:</strong> If direct pressure fails on extremity bleeding, apply a tourniquet 2-3 inches proximal to the injury. Mark application time.</li>
                                <li><strong>Wound Packing:</strong> Pack junctional wounds (e.g., groin, axilla) with hemostatic gauze.</li>
                            </ul>
                            <h4>2. Spine Management</h4>
                            <ul>
                                <li><strong>Spinal Motion Restriction (SMR):</strong> Indicated for traumatic mechanisms with neck pain, midline spine tenderness, or focal neurological deficits.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Hemorrhage', 'question': 'Where should a tourniquet be placed?', 'answer': '2-3 inches proximal to the bleeding site, directly on the skin (never over a joint).'}, {'category': 'Trauma', 'question': 'What is the initial step for bleeding control?', 'answer': 'Direct pressure with sterile dressings.'}],
            quiz: [{'q': 'When direct pressure fails to control arterial bleeding on an arm, what is the next step?', 'options': ['Apply a tourniquet', 'Elevate the limb', 'Use a pressure point'], 'correct': 0, 'explanation': 'If direct pressure fails to control severe extremity bleeding, apply a tourniquet immediately.'}],
            critical: [{'id': 'crit_6_1_1', 'scenario': 'A patient has a deep thigh laceration from a chainsaw. Dark red blood is spurting from the wound. Direct pressure with a dressing does not control the bleeding.', 'question': 'What is the best next step?', 'options': [{'t': 'Add more dressings on top and apply a pressure bandage', 'f': 'Incorrect. If direct pressure fails, escalate to a tourniquet immediately.'}, {'t': 'Apply a commercial tourniquet 2-3 inches above the wound', 'f': 'Correct. Extremity bleeding not controlled by pressure requires a tourniquet.'}], 'correct': 1, 'explanation': 'Do not delay tourniquet placement in severe extremity hemorrhage.', 'kpi': 'Hemorrhage control escalation'}]
        }
    ]
};
