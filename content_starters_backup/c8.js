/* ========== Chapter 8 – Environmental & Disaster ========== */
window.CPG_DATA = {
    id: "c8",
    title: "Environmental & Disaster",
    shortTitle: "8. Environmental & Disaster",
    sections: [
        {
            id: "c8s1",
            shortTitle: "8.1 Environmental & Disaster Medicine",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#shield"/></svg> Environmental Injuries & MCI</h3>
                            <p>Managing heat illness, hypothermia, hazardous exposures, and mass casualty triage.</p>
                            <h4>1. Temperature Extremes</h4>
                            <ul>
                                <li><strong>Heat Stroke:</strong> Core temperature >40°C with altered mental status. Initiate rapid cooling (ice water immersion or evaporative cooling).</li>
                                <li><strong>Hypothermia:</strong> Prevent further heat loss; passive and active rewarming based on severity.</li>
                            </ul>
                            <h4>2. Mass Casualty Incidents (MCIs)</h4>
                            <ul>
                                <li><strong>Triage Systems (START):</strong> Classify patients using respiratory status, perfusion, and neurological command checks. Categories: Red (Immediate), Yellow (Delayed), Green (Minor), Black (Deceased).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'MCI', 'question': 'START triage: Patient not breathing, after opening airway still not breathing?', 'answer': 'Categorized as BLACK (Deceased).'}, {'category': 'Thermal', 'question': 'Key indicator distinguishing heat stroke from heat exhaustion?', 'answer': 'Altered mental status / neurological dysfunction.'}],
            quiz: [{'q': 'In START triage, a patient has a respiratory rate of 34 breaths/min. What color category do they get?', 'options': ['Green', 'Yellow', 'Red'], 'correct': 2, 'explanation': 'Respirations > 30 breaths/min indicates a RED (Immediate) priority.'}],
            critical: [{'id': 'crit_8_1_1', 'scenario': 'During a multi-car accident, you assess a patient who is walking around the scene with a small scalp laceration. He is talking normally.', 'question': 'What is his triage category?', 'options': [{'t': 'Green (Minor)', 'f': 'Correct. Walking wounded are classified as Green.'}, {'t': 'Yellow (Delayed)', 'f': 'Incorrect. Walking wounded should be sorted to Green.'}], 'correct': 0, 'explanation': 'Any patient who is able to walk on command is categorized as Green in the initial sort.', 'kpi': 'MCI triage sorting'}]
        }
    ]
};
