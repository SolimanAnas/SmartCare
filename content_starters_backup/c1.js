/* ========== Chapter 1 – Foundations of Care ========== */
window.CPG_DATA = {
    id: "c1",
    title: "Foundations of Care",
    shortTitle: "1. Foundations of Care",
    sections: [
        {
            id: "c1s1",
            shortTitle: "1.1 Clinical Foundations",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#library"/></svg> Foundations of Clinical Practice</h3>
                            <p>Excellent clinical outcomes depend on evidence-based practice, safety systems, and professionalism.</p>
                            <h4>1. Primary Tenets of Care</h4>
                            <ul>
                                <li><strong>Evidence-Based Practice:</strong> Integrating scientific evidence, clinical judgment, and patient preferences.</li>
                                <li><strong>Standard Precautions:</strong> Hand hygiene, PPE, and proper disposal of biohazards.</li>
                                <li><strong>Critical Decision Making:</strong> Systematically weighing risk factors, resources, and clinical indicators.</li>
                            </ul>
                            <h4>2. Provider and Patient Safety</h4>
                            <ul>
                                <li><strong>Scene Safety:</strong> Assessing situational hazards before starting patient contact.</li>
                                <li><strong>Communication:</strong> Standard handovers (e.g., SBAR, IMIST-AMBO) to limit medical errors.</li>
                                <li><strong>Quality Assurance:</strong> Continuous monitoring of key performance indicators (KPIs) to drive care quality.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Safety', 'question': 'What is standard precautions?', 'answer': 'Treating all blood and body fluids as potentially infectious; utilizing hand hygiene and risk-based PPE.'}, {'category': 'Quality', 'question': 'What is the goal of clinical KPIs?', 'answer': 'To monitor service delivery quality, audit protocol adherence, and identify areas for education.'}],
            quiz: [{'q': 'What is the first priority at any medical emergency scene?', 'options': ['Administering oxygen', 'Assessing patient airway', 'Ensuring scene safety'], 'correct': 2, 'explanation': 'Scene safety must always be established before beginning patient care.'}],
            critical: [{'id': 'crit_1_1_1', 'scenario': 'You arrive at a residential construction site where a worker fell from a 12-foot scaffolding and is lying unconscious. The scaffolding appears unstable.', 'question': 'What is your immediate course of action?', 'options': [{'t': "Rush in with a C-collar to immobilize the patient's spine.", 'f': 'Incorrect. Running into an unstable scene puts you at risk.'}, {'t': 'Wait until the scene is secured and hazards are mitigated.', 'f': 'Correct. Personal safety is always the first priority.'}], 'correct': 1, 'explanation': 'Do not enter an unstable scene. Personal safety must be established first.', 'kpi': 'Scene safety prioritization'}]
        }
    ]
};
