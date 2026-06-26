/* ========== Chapter 10 – Clinical Procedures & Skills ========== */
window.CPG_DATA = {
    id: "c10",
    title: "Clinical Procedures & Skills",
    shortTitle: "10. Clinical Procedures & Skills",
    sections: [
        /* ──────────────────────────────────────────────────────────────────────────────
         * c10s1 – Airway & Breathing Skills
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c10s1",
            shortTitle: "10.1 Airway & Breathing Skills",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Airway & Breathing Skills</h3>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Priority:</strong> The most important airway skill is <strong>opening the airway</strong>. Before any advanced adjunct, before suctioning, before oxygen — open the airway. A patient who cannot breathe cannot be rescued by any other intervention.
                </div>

                <h4>Manual Airway Maneuvers</h4>
                <p>Every airway intervention begins with two foundational maneuvers. The <strong>head-tilt chin-lift</strong> is the primary method for opening the airway in an unresponsive patient with no suspected spinal injury. Place one hand on the forehead and apply firm backward pressure to tilt the head back; place the fingertips of the other hand under the bony part of the chin and lift the chin forward. This lifts the tongue and epiglottis away from the posterior pharyngeal wall, opening the airway.</p>
                <p>The <strong>jaw-thrust maneuver</strong> is used when a cervical spine injury is suspected. Kneel at the patient's head, place your elbows on the surface (or ground), grasp the angles of the lower jaw with both hands (index and middle fingers behind the mandibular rami), and lift the jaw forward <em>without</em> tilting the head or neck. The jaw-thrust is the <strong>only</strong> airway maneuver recommended for patients with suspected C-spine injury because it opens the airway without manipulating the cervical spine.</p>

                <table>
                    <thead>
                        <tr><th>Technique</th><th>Indication</th><th>Contraindication</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Head-tilt chin-lift</strong></td><td>Unresponsive patient, no suspected C-spine injury</td><td>Suspected cervical spine injury</td></tr>
                        <tr><td><strong>Jaw-thrust</strong></td><td>Suspected C-spine injury with any responsiveness concern</td><td>None in trauma setting — maintain manual stabilization throughout</td></tr>
                    </tbody>
                </table>

                <h4>Oropharyngeal Airway (OPA)</h4>
                <p>The <strong>OPA</strong> is a curved, rigid plastic device that holds the tongue and soft tissues away from the posterior pharyngeal wall. It is used <strong>only in unconscious patients with no gag reflex</strong>. If the patient has an intact gag reflex, an OPA will stimulate vomiting and laryngospasm, worsening the airway.</p>
                <p><strong>Sizing:</strong> Measure from the <strong>corner of the mouth to the earlobe</strong> (or from the central incisors to the angle of the jaw). An incorrectly sized OPA is dangerous: too small pushes the tongue back into the airway; too large may obstruct the larynx or cause trauma.</p>
                <p><strong>Insertion:</strong> For an adult, insert the OPA <strong>upside down</strong> (tip pointing toward the roof of the mouth) until you reach the soft palate, then rotate it 180° into the correct position as it slides into the oropharynx. For a child or infant, insert the OPA <strong>right-side up</strong> (in the anatomical position) using a tongue depressor to avoid damaging the delicate oral mucosa and palate.</p>

                <table>
                    <thead>
                        <tr><th>Feature</th><th>Adult OPA Insertion</th><th>Pediatric OPA Insertion</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Insertion orientation</td><td>Upside down (tip to palate), then rotate 180°</td><td>Right-side up (anatomical), use tongue depressor</td></tr>
                        <tr><td>Sizing landmark</td><td>Corner of mouth to earlobe</td><td>Same — corner of mouth to earlobe</td></tr>
                        <tr><td>Gag reflex</td><td>Must be absent — will induce vomiting if present</td><td>Must be absent — same principle</td></tr>
                        <tr><td>Patient position</td><td>Supine, head-tilt chin-lift or neutral (if C-spine)</td><td>Supine with neutral positioning; avoid hyperextension in infants (airway more anterior)</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> If the patient gags when you insert an OPA, <strong>remove it immediately</strong> and switch to an NPA or jaw-thrust. An OPA in a patient with an intact gag reflex will induce vomiting and aspiration — making the airway situation dramatically worse.
                </div>

                <h4>Nasopharyngeal Airway (NPA)</h4>
                <p>The <strong>NPA</strong> is a flexible, uncuffed tube made of soft rubber or silicone that is inserted through the nostril into the nasopharynx. It can be used in patients who are <strong>semi-conscious or have an intact gag reflex</strong>, making it a valuable alternative when an OPA is not tolerated.</p>
                <p><strong>Sizing:</strong> Measure from the <strong>nostril to the earlobe</strong> (or from the tip of the nose to the tragus of the ear). The diameter should approximate the patient's little finger or the nostril opening — use the largest diameter that fits comfortably.</p>
                <p><strong>Insertion:</strong> Lubricate the NPA with water-soluble lubricant. Insert into the <strong>right nostril</strong> with the <strong>bevel facing toward the septum</strong> (medially). Advance gently in a posterior direction, following the natural curve of the nasal passage. If resistance is met, do not force it — try the left nostril or a smaller size.</p>
                <p><strong>Contraindication:</strong> Suspected <strong>basilar skull fracture</strong> (signs: CSF rhinorrhea, raccoon eyes, Battle's sign). Inserting an NPA in a patient with a basilar skull fracture could allow the tube to pass through the fracture into the cranial vault — a catastrophic complication.</p>

                <h4>Suctioning</h4>
                <p>Suctioning clears the airway of blood, vomit, secretions, and other obstructions. <strong>Always have suction ready</strong> before beginning any airway procedure — vomit can appear without warning.</p>
                <p><strong>Suction catheters:</strong></p>
                <ul>
                    <li><strong>Rigid pharyngeal tip (Yankauer/tonsil tip):</strong> Used for suctioning the oropharynx. It is rigid, has a wide bore, and can quickly clear large volumes of fluid. The distal tip has a thumb port for controlling suction on/off. Do not insert deeper than you can see — approximately to the base of the tongue.</li>
                    <li><strong>Soft flexible catheter (whistle-tip):</strong> Used for suctioning the nasopharynx or through an OPA/NPA, and for suctioning around a tracheostomy or endotracheal tube. It is soft, flexible, and less traumatic to delicate tissues.</li>
                </ul>
                <p><strong>Suctioning technique:</strong></p>
                <ul>
                    <li>Measure depth: for oropharyngeal suctioning, measure from the corner of the mouth to the earlobe; for nasopharyngeal, measure from nostril to earlobe.</li>
                    <li><strong>Suction on the way out</strong> — do not plunge the catheter in with suction on; this drives secretions deeper and strips oxygen from the airway.</li>
                    <li>Maximum suction duration: <strong>15 seconds per attempt</strong> (10 seconds for infants/children).</li>
                    <li><strong>Pre-oxygenate and post-oxygenate</strong> the patient with 100% oxygen for at least 30 seconds before and after suctioning.</li>
                    <li>Monitor SpO₂ throughout — if it drops, stop suctioning and ventilate.</li>
                </ul>

                <h4>Oxygen Delivery Systems</h4>
                <p>Each oxygen delivery device has a specific flow range and FiO₂ delivery range. EMTs must select the right device for the patient's oxygenation needs.</p>
                <table>
                    <thead>
                        <tr><th>Device</th><th>Flow Rate</th><th>FiO₂ Delivered</th><th>Indications</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Nasal Cannula</strong></td><td>1-6 L/min</td><td>~24-44%</td><td>Mild hypoxia, patients who cannot tolerate a mask, postoperative, chronic hypoxia (COPD)</td></tr>
                        <tr><td><strong>Simple Face Mask</strong></td><td>6-10 L/min</td><td>~35-55%</td><td>Moderate hypoxia, patients who need higher FiO₂ than NC can provide</td></tr>
                        <tr><td><strong>Partial Rebreather</strong></td><td>10-12 L/min</td><td>~50-70%</td><td>Moderate-to-severe hypoxia; reservoir bag should collapse <sup>1</sup>/<sub>3</sub> on inspiration</td></tr>
                        <tr><td><strong>Non-Rebreather (NRB)</strong></td><td>12-15 L/min</td><td>~80-95%</td><td>Severe hypoxia, trauma, shock, respiratory distress (most common high-flow device used by EMTs)</td></tr>
                        <tr><td><strong>BVM with Reservoir</strong></td><td>15 L/min (at O₂ source)</td><td>~100%</td><td>Apnea, respiratory failure, during CPR, pre/post intubation</td></tr>
                    </tbody>
                </table>
                <p><strong>Rule of thumb:</strong> For a nasal cannula, each liter per minute of O₂ flow adds approximately <strong>3-4% FiO₂</strong> above room air (21%). So 2 L/min ≈ 28-29% FiO₂, 4 L/min ≈ 35-37%, 6 L/min ≈ 42-44%.</p>
                <p><strong>Flow minimums:</strong> A simple face mask requires <strong>at least 6 L/min</strong> to flush exhaled CO₂ from the mask. An NRB requires <strong>at least 12 L/min</strong> to keep the reservoir bag inflated. Running an NRB at lower flow rates causes CO₂ rebreathing and hypoxia.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Safety:</strong> A non-rebreather mask must be run at <strong>≥12 L/min</strong>. If the reservoir bag is not fully inflated before placing it on the patient, the patient will rebreathe their own CO₂ and become more hypoxic. Check the bag before applying the mask.
                </div>

                <h4>Bag-Valve-Mask (BVM) Ventilation</h4>
                <p>The BVM is a self-inflating bag with a one-way valve, mask, and oxygen reservoir. It is the primary device for providing positive pressure ventilation in the prehospital setting.</p>
                <p><strong>EC clamp technique:</strong> To achieve a seal with one hand, form a "C" with your thumb and index finger over the mask (pressing the mask against the face), and use your remaining three fingers (middle, ring, little — forming an "E") along the mandible to lift the jaw into the mask. This maintains a seal and opens the airway simultaneously.</p>
                <p><strong>Two-person BVM is superior to one-person BVM:</strong> One rescuer uses both hands to hold the mask seal (two-handed EC clamp, thumbs over the mask, fingers lifting the jaw from both sides) while the second rescuer squeezes the bag. This provides a better seal and more effective ventilation. Use two-person BVM whenever possible.</p>
                <p><strong>Ventilation rates:</strong></p>
                <ul>
                    <li><strong>Adult with advanced airway (ETT, supraglottic):</strong> 1 breath every 5-6 seconds (10-12 breaths/min)</li>
                    <li><strong>Adult without advanced airway:</strong> 1 breath every 5-6 seconds (10-12 breaths/min), with a pause for chest compressions during CPR (30:2 ratio)</li>
                    <li><strong>Child (1 year to puberty):</strong> 1 breath every 2-3 seconds (20-30 breaths/min)</li>
                    <li><strong>Infant (<1 year):</strong> 1 breath every 2-3 seconds (20-30 breaths/min)</li>
                </ul>
                <p><strong>Volume:</strong> Each breath should be delivered over <strong>1 second</strong> with enough volume to produce visible chest rise. Avoid over-ventilation (too fast or too large volume) — it causes gastric inflation, increases intrathoracic pressure, decreases venous return, and reduces cardiac output.</p>

                <h4>Stoma / Tracheostomy / Mastoid Ventilation</h4>
                <p>Patients with a <strong>stoma</strong> (surgical opening in the neck) or tracheostomy tube breathe through the neck, not the nose or mouth. Ventilate using a <strong>pediatric face mask</strong> placed directly over the stoma, or use a BVM adapter designed for tracheostomy tubes. If using a mask over the stoma, seal the patient's mouth and nose to prevent air leak. Suction the stoma or tube first if secretions are present. If the patient has a <strong>laryngectomy</strong> (complete removal of the larynx), the stoma is the <strong>only</strong> airway — there is no connection between the mouth/nose and the trachea. Mouth-to-stoma ventilation is also possible in emergencies.</p>
            </div>`,
            flashcards: [
                {
                    question: "What is the difference between head-tilt chin-lift and jaw-thrust? When is each used?",
                    answer: "Head-tilt chin-lift: used in unresponsive patients with NO suspected C-spine injury. Jaw-thrust: used when C-spine injury IS suspected — lifts the jaw forward without tilting the head or neck.",
                    category: "Airway — Manual Maneuvers"
                },
                {
                    question: "How do you size and insert an OPA? How does insertion differ between adults and children?",
                    answer: "Size from corner of mouth to earlobe. Adult: insert upside down (tip to palate) and rotate 180°. Child/infant: insert right-side up with a tongue depressor. Use ONLY in unconscious patients with no gag reflex.",
                    category: "Airway — OPA"
                },
                {
                    question: "How do you size and insert an NPA? What is the contraindication?",
                    answer: "Size from nostril to earlobe. Insert into the right nostril with bevel facing the septum. Contraindication: suspected basilar skull fracture (signs: CSF rhinorrhea, raccoon eyes, Battle's sign) due to risk of intracranial placement.",
                    category: "Airway — NPA"
                },
                {
                    question: "What are the rules for suctioning? How long per attempt?",
                    answer: "Measure depth, suction on the way OUT (not in), max 15 seconds per attempt (10 seconds for peds), pre- and post-oxygenate with 100% O₂ for 30 seconds, monitor SpO₂. Yankauer for oropharynx, soft catheter for nasopharynx.",
                    category: "Airway — Suctioning"
                },
                {
                    question: "What FiO₂ does each oxygen delivery device provide?",
                    answer: "Nasal cannula (1-6 L/min): 24-44%. Simple mask (6-10 L/min): 35-55%. Partial rebreather (10-12 L/min): 50-70%. Non-rebreather (12-15 L/min): 80-95%. BVM with reservoir (15 L/min): ~100%. Each L/min of NC = ~3-4% FiO₂.",
                    category: "Oxygen Therapy"
                },
                {
                    question: "Describe the EC clamp technique for BVM ventilation.",
                    answer: "Form a 'C' with thumb and index finger pressing the mask against the face. Form an 'E' with the remaining three fingers along the mandible lifting the jaw into the mask. Two-person BVM (one holds seal with both hands, one bags) is superior to one-person.",
                    category: "Ventilation — BVM"
                },
                {
                    question: "What are the correct ventilation rates for adults, children, and infants?",
                    answer: "Adult with advanced airway: 1 breath every 5-6 sec (10-12/min). Adult without advanced airway: same rate, 30:2 with CPR. Child/infant: 1 breath every 2-3 sec (20-30/min). Deliver each breath over 1 second until visible chest rise.",
                    category: "Ventilation — Rates"
                },
                {
                    question: "How do you ventilate a patient with a stoma or tracheostomy?",
                    answer: "Use a pediatric face mask placed directly over the stoma. Seal the mouth and nose to prevent air leak. Alternatively, use a BVM adapter for tracheostomy tubes. For laryngectomy patients, the stoma is the ONLY airway.",
                    category: "Ventilation — Stoma"
                }
            ],
            quiz: [
                {
                    q: "An EMT is preparing to insert an OPA in an unresponsive 45-year-old male. Which measurement determines the correct OPA size?",
                    options: [
                        "Nostril to earlobe",
                        "Corner of the mouth to earlobe",
                        "Tragus to the angle of the mandible",
                        "Tip of the nose to the xiphoid process"
                    ],
                    correct: 1,
                    explanation: "OPA size is determined by measuring from the corner of the mouth to the earlobe. NPA size is measured from nostril to earlobe — don't confuse the two."
                },
                {
                    q: "A 28-year-old male is found unresponsive after a high-speed MVC. He has suspected C-spine injury and vomited. After manually stabilizing his C-spine, what is the correct sequence for airway management?",
                    options: [
                        "Head-tilt chin-lift, then insert OPA, then suction",
                        "Jaw-thrust, suction the airway clear, then consider NPA (patient may have basilar skull fracture — assess for signs first)",
                        "Insert OPA immediately, then suction around it",
                        "Suction first, then head-tilt chin-lift, then OPA"
                    ],
                    correct: 1,
                    explanation: "For suspected C-spine injury, use jaw-thrust (not head-tilt). Suction is needed to clear vomit. Assess for basilar skull fracture before considering NPA. Always prioritize C-spine stabilization in trauma."
                },
                {
                    q: "[HARD] An EMT is ventilating an adult patient with a BVM at a rate of 20 breaths per minute. Each breath is delivered over 1.5 seconds with a large volume. What complications is this EMT MOST likely to cause?",
                    options: [
                        "Hyperoxia and oxygen toxicity",
                        "Gastric inflation, hypotension from decreased venous return, and possible barotrauma",
                        "Bronchospasm and worsening hypoxia",
                        "Increased heart rate and hypertension"
                    ],
                    correct: 1,
                    explanation: "Over-ventilation (too fast, too large volume) causes gastric inflation (→ vomiting/aspiration), increased intrathoracic pressure (→ decreased venous return → hypotension), and barotrauma (→ pneumothorax). Ventilate at 10-12/min, 1 second per breath, just enough for visible chest rise."
                },
                {
                    q: "A 66-year-old female with COPD is on 2 L/min nasal cannula at home. She presents with respiratory distress and an SpO₂ of 85%. You switch her to a non-rebreather at 15 L/min. Ten minutes later, she is drowsy with a respiratory rate of 8. What is the MOST likely explanation?",
                    options: [
                        "She is having a stroke from the oxygen therapy",
                        "The NRB is defective and she is rebreathing CO₂",
                        "Over-oxygenation has blunted her hypoxic respiratory drive (chronic CO₂ retainer)",
                        "She has developed acute anxiety from the mask"
                    ],
                    correct: 2,
                    explanation: "Chronic CO₂ retainers (severe COPD) rely on hypoxic drive to breathe. Excessive O₂ can suppress this drive, leading to hypoventilation and CO₂ narcosis. For known COPD patients, titrate O₂ to SpO₂ 88-92%, not 94%+."
                }
            ],
            critical: [
                {
                    id: "crit_10_1_1",
                    scenario: "You are called to a nursing home for an 82-year-old male found unresponsive in bed. Staff report he has a history of dementia, COPD, and hypertension. He has no suspected trauma. On arrival, he is unresponsive to voice or painful stimuli. You note gurgling respirations and visible oral secretions. His respiratory rate is 6, SpO₂ is 81%, and heart rate is 52. Staff reports he has dentures.",
                    question: "What is your sequence of airway interventions for this patient?",
                    options: [
                        {t: "Apply a non-rebreather at 15 L/min, transport immediately — the gurgling will clear with oxygen flow", f: "Incorrect. The patient has an obstructed airway with gurgling respirations. Oxygen alone will not clear the obstruction. You must open and clear the airway first."},
                        {t: "Open the airway with head-tilt chin-lift (no suspected C-spine injury), suction the oropharynx with a Yankauer (max 15 sec), remove dentures if loose, insert an OPA (no gag reflex present), begin BVM ventilation with O₂ at 15 L/min, and reassess", f: "Correct. This is the proper sequence: open airway → suction → clear obstruction → OPA → ventilate. The patient is in respiratory failure, not mild hypoxia, so he needs ventilation not just oxygenation."}
                    ],
                    correct: 1,
                    explanation: "Always open the airway first. He has no gag reflex (unresponsive), so an OPA is appropriate. Suction clears the gurgling. BVM is indicated for respiratory failure (RR 6, SpO₂ 81%, unresponsive).",
                    kpi: "Sequence of airway intervention in unresponsive patient"
                },
                {
                    id: "crit_10_1_2",
                    scenario: "You are treating a 52-year-old female in respiratory distress. She is awake and following commands but has an intact gag reflex and is unable to tolerate an OPA. Her SpO₂ is 90% on a non-rebreather. You need a more definitive airway adjunct to maintain patency during transport. She has no signs of head trauma. On nasal inspection, you note a deviated septum to the right with a narrow right nostril. Her left nostril appears patent.",
                    question: "What airway adjunct is appropriate and how should you insert it?",
                    options: [
                        {t: "OPA — force it past the gag reflex since the patient needs airway support; the gag will diminish as she tires", f: "Incorrect. An OPA in a patient with an intact gag reflex will induce vomiting and laryngospasm. Do not force it."},
                        {t: "NPA — size from nostril to earlobe, lubricate well, insert into the LEFT nostril with bevel toward the septum (since the right nostril is narrow due to deviated septum), advance gently following the nasal floor", f: "Correct. The NPA is the appropriate choice for a semiconscious patient with an intact gag reflex. Choose the more patent nostril. The bevel should face the septum."}
                    ],
                    correct: 1,
                    explanation: "The NPA is ideal for patients with an intact gag reflex. Choose the more patent nostril. Never force an NPA against resistance. Bevel toward septum, lubricate generously.",
                    kpi: "NPA selection and insertion technique"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c10s2 – Oxygen & Ventilation Skills
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c10s2",
            shortTitle: "10.2 Oxygen & Ventilation Skills",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Oxygen & Ventilation Skills</h3>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Priority:</strong> Pulse oximetry tells you <strong>oxygenation</strong>; capnography tells you <strong>ventilation</strong>. They are <strong>BOTH essential</strong>. An SpO₂ of 100% with an EtCO₂ of 70 mmHg means the patient is well-oxygenated but severely hypoventilating and retaining CO₂. Monitor both.
                </div>

                <h4>Medical Oxygen Cylinders</h4>
                <p>Medical oxygen is stored as a compressed gas in color-coded cylinders. The cylinders are painted <strong>green</strong> in the US (white in some international systems) and marked with "O₂" or "Oxygen — Medical" and a U.S.P. label. Cylinders must be handled with extreme care — oxygen supports combustion.</p>
                <table>
                    <thead>
                        <tr><th>Cylinder Size</th><th>Capacity</th><th>Height</th><th>Common Use</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>D</strong></td><td>350 L</td><td>~17 in</td><td>Small portable oxygen tanks for short transports, ambulatory patients</td></tr>
                        <tr><td><strong>E</strong></td><td>625 L</td><td>~26 in</td><td><strong>Most common on ambulances</strong> — portable O₂ cylinder carried on the stretcher</td></tr>
                        <tr><td><strong>M</strong></td><td>3,000 L</td><td>~36 in</td><td>Medium cylinder, some ambulance onboard systems</td></tr>
                        <tr><td><strong>H</strong></td><td>6,900 L</td><td>~52 in</td><td>Large stationary cylinders, hospital use, ambulance onboard supply</td></tr>
                    </tbody>
                </table>

                <h4>Cylinder Pressure and Duration Calculation</h4>
                <p>A full oxygen cylinder has a pressure of approximately <strong>2,000 psi</strong> (pounds per square inch). As oxygen is used, the pressure drops proportionally to the remaining volume. To calculate how many minutes of oxygen remain at a given flow rate, use this formula:</p>
                <p style="text-align:center; font-size:1.1em;"><strong>(Tank Pressure in psi × Cylinder Factor) ÷ Flow Rate in L/min = Minutes Remaining</strong></p>

                <table>
                    <thead>
                        <tr><th>Cylinder</th><th>Capacity</th><th>Cylinder Factor</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>D</td><td>350 L</td><td><strong>0.16</strong></td></tr>
                        <tr><td>E</td><td>625 L</td><td><strong>0.28</strong></td></tr>
                        <tr><td>M</td><td>3,000 L</td><td><strong>1.56</strong></td></tr>
                        <tr><td>H</td><td>6,900 L</td><td><strong>3.14</strong></td></tr>
                    </tbody>
                </table>
                <p><strong>Example:</strong> An E cylinder at 2,000 psi running a non-rebreather at 15 L/min: (2,000 × 0.28) ÷ 15 = 560 ÷ 15 = <strong>37.3 minutes</strong> of oxygen remaining.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> When a cylinder reads <strong>200 psi</strong>, it is considered "empty" for operational purposes and should be replaced. This reserve ensures you do not run out of oxygen during patient care and swap-out. Calculate: (200 × factor) ÷ flow = how many minutes you have left at the reserve threshold.
                </div>

                <h4>Safe Use of Oxygen</h4>
                <p>Oxygen is a safe but highly reactive gas that supports combustion. EMTs must follow these safety rules at all times:</p>
                <ul>
                    <li><strong>No smoking</strong> — Post "OXYGEN IN USE — NO SMOKING" signs. Ensure no patient, family, or provider smokes or uses any open flame within the treatment area.</li>
                    <li><strong>No petroleum-based products</strong> — Do not use petroleum jelly (Vaseline), oil-based lubricants, or alcohol-based hand sanitizers near oxygen equipment. Petroleum products can react violently with oxygen under pressure.</li>
                    <li><strong>Secure cylinders upright</strong> — Always secure oxygen cylinders in an upright position using a bracket, strap, or wheeled cart. An unsecured tank can become a projectile if the valve is knocked off (a dropped E cylinder can punch through a wall).</li>
                    <li><strong>No oil or grease on fittings</strong> — Never apply oil, grease, or any hydrocarbon to oxygen fittings, valves, or regulators. These can ignite spontaneously in the presence of high-pressure oxygen.</li>
                    <li><strong>Empty = 200 psi reserve</strong> — Replace or refill cylinders when pressure drops to 200 psi. Do not run a tank to zero in clinical use.</li>
                    <li><strong>Open cylinder valves slowly</strong> — Open the main cylinder valve fully (turn counterclockwise until it stops) to prevent leaks around the valve stem. Open slowly to avoid a rapid pressure surge that can damage the regulator.</li>
                    <li><strong>Store away from heat</strong> — Oxygen cylinders should be stored in a well-ventilated area away from direct sunlight, radiators, or other heat sources. Never store oxygen cylinders in a vehicle trunk or unventilated compartment.</li>
                </ul>

                <h4>Humidification</h4>
                <p>Medical oxygen is dry. For short-term use (prehospital transport), humidification is generally not necessary. For extended use (>1-2 hours) or patients with pre-existing respiratory conditions, a <strong>humidifier</strong> (bubble humidifier) can be attached to the flow meter to add moisture and prevent drying of the respiratory mucosa. Some patients on home oxygen already use humidification — continue it if they have it, but it is not a prehospital priority.</p>

                <h4>Pulse Oximetry (SpO₂)</h4>
                <p>Pulse oximetry is a non-invasive method of measuring the percentage of hemoglobin saturated with oxygen. The sensor uses two wavelengths of light (red and infrared) passed through a pulsatile vascular bed (fingertip, earlobe, toe) to determine SpO₂.</p>
                <p><strong>Normal range:</strong> 95-100% on room air. Values below 95% (on room air) warrant investigation. Values below 91% indicate significant hypoxemia requiring intervention.</p>
                <p><strong>Causes of inaccurate or unreliable readings:</strong></p>
                <ul>
                    <li><strong>Poor perfusion:</strong> Hypotension, hypothermia, vasoconstriction, or shock reduces the pulsatile signal → unreliable reading. Warm the extremity or use an earlobe probe.</li>
                    <li><strong>Carboxyhemoglobin (COHb):</strong> Carbon monoxide poisoning — CO binds to hemoglobin ~250x more strongly than O₂. Pulse oximetry cannot distinguish oxyhemoglobin from carboxyhemoglobin. SpO₂ will be falsely elevated (reads ~100% even though the patient is hypoxic). Use a <strong>CO-oximeter</strong> (which measures COHb specifically) when CO poisoning is suspected.</li>
                    <li><strong>Methemoglobin:</strong> Certain drugs (benzocaine, nitrites, dapsone) can cause methemoglobinemia, producing falsely low SpO₂ readings (typically reading around 85% regardless of actual oxygenation).</li>
                    <li><strong>Severe anemia:</strong> In severe anemia, there is less hemoglobin available to carry oxygen. The SpO₂ may read 100% because the <em>percentage</em> of saturated hemoglobin is normal, but the <em>total oxygen content</em> is low.</li>
                    <li><strong>Nail polish:</strong> Dark nail polish (blue, black, green, purple) can interfere with light transmission. Remove polish from the test finger or use a different site (earlobe, side of finger).</li>
                    <li><strong>Movement artifact:</strong> Shivering, seizure activity, or patient movement can cause erroneous readings. Wait for a stable waveform.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Concept:</strong> SpO₂ is NOT a measure of ventilation. A patient can have 100% SpO₂ on a non-rebreather but have an EtCO₂ of 70 mmHg from hypoventilation. Conversely, a patient can have a low SpO₂ from a PE but a normal EtCO₂. <strong>Oxygenation ≠ Ventilation.</strong>
                </div>

                <h4>Capnography / End-Tidal CO₂ (EtCO₂)</h4>
                <p>Capnography is the non-invasive measurement of exhaled CO₂ concentration, displayed both as a numeric value (EtCO₂) and a waveform (capnogram). Normal EtCO₂ is <strong>35-45 mmHg</strong>. Capnography provides critical real-time information about ventilation, metabolism, and circulation.</p>
                <p><strong>Clinical applications of capnography:</strong></p>
                <ul>
                    <li><strong>Confirms ETT/SGA placement:</strong> The most reliable method to verify correct endotracheal tube placement. A sustained waveform with CO₂ detection confirms tracheal (not esophageal) placement. Absent CO₂ after 6 ventilations = esophageal intubation until proven otherwise.</li>
                    <li><strong>Monitors CPR quality:</strong> EtCO₂ correlates with cardiac output during CPR. An EtCO₂ <10 mmHg during CPR indicates poor chest compression quality (too shallow, too slow, or inadequate recoil). Improving EtCO₂ during CPR indicates improving perfusion and compression effectiveness.</li>
                    <li><strong>Detects ROSC:</strong> A sudden, sustained rise in EtCO₂ (typically >40 mmHg) during CPR is the earliest indicator of return of spontaneous circulation (ROSC). When the heart restarts, CO₂ is flushed from the venous system and transported to the lungs, causing an abrupt increase in exhaled CO₂.</li>
                    <li><strong>Detects hypo- and hyperventilation:</strong> Low EtCO₂ (hypocapnia, <30 mmHg) suggests hyperventilation (too fast/deep). High EtCO₂ (hypercapnia, >50 mmHg) suggests hypoventilation (too slow/shallow) or inadequate perfusion.</li>
                    <li><strong>Monitors sedation:</strong> During procedural sedation, EtCO₂ may rise (airway obstruction, hypoventilation) before SpO₂ drops — providing early warning of respiratory depression.</li>
                </ul>

                <h4>Ventilation Indications</h4>
                <p>Positive pressure ventilation is indicated when the patient's own respiratory effort is absent or inadequate to maintain gas exchange. Indications include:</p>
                <ul>
                    <li><strong>Apnea</strong> — Absent respiratory effort (e.g., cardiac arrest, CNS depression, opioid overdose)</li>
                    <li><strong>Inadequate respiratory effort</strong> — Respiratory rate too low (<8/min in adults) or too shallow to maintain adequate minute ventilation</li>
                    <li><strong>Severe hypoxia despite high-flow O₂</strong> — SpO₂ <90% despite NRB at 15 L/min</li>
                    <li><strong>Severe altered mental status</strong> — GCS <8 (patient cannot protect their airway); begin ventilation and airway management</li>
                    <li><strong>Respiratory fatigue</strong> — Patient is working hard to breathe but is tiring; rising CO₂, dropping respiratory rate, and declining mental status indicate impending respiratory arrest</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> The decision to start assisted ventilation is based on the <strong>clinical picture</strong>, not just the SpO₂ number. A patient with a rising EtCO₂, declining mental status, and increasing work of breathing needs ventilation even if their SpO₂ is temporarily OK.
                </div>

                <h4>Complications of Positive Pressure Ventilation</h4>
                <p>Positive pressure ventilation is life-saving but carries three major complications that EMTs must recognize and prevent:</p>
                <ul>
                    <li><strong>Gastric inflation:</strong> When ventilation pressure exceeds the opening pressure of the lower esophageal sphincter, air enters the stomach instead of the lungs. This distends the abdomen, restricts diaphragmatic movement (worsening ventilation), and can cause vomiting with aspiration. <strong>Prevention:</strong> Use correct volumes, deliver over 1 second, use two-person BVM for better seal, apply cricoid pressure (Sellick maneuver) per local protocol.</li>
                    <li><strong>Decreased venous return (hypotension):</strong> Positive intrathoracic pressure compresses the vena cava, reducing preload to the heart, which reduces cardiac output and blood pressure. <strong>Prevention:</strong> Avoid over-ventilation (excessive rate or volume), use the lowest effective ventilation rate, monitor blood pressure closely.</li>
                    <li><strong>Barotrauma (pneumothorax):</strong> Excessive airway pressure can rupture alveoli, allowing air to leak into the pleural space, causing a tension pneumothorax. <strong>Prevention:</strong> Use appropriate tidal volumes (just enough for visible chest rise), avoid high peak pressures, be alert for sudden deterioration (worsening hypoxia, decreased breath sounds on one side, tracheal deviation, distended neck veins).</li>
                </ul>
            </div>`,
            flashcards: [
                {
                    question: "What are the common medical oxygen cylinder sizes and their capacities?",
                    answer: "D: 350 L (portable). E: 625 L (most common on ambulances). M: 3,000 L. H: 6,900 L (onboard supply). Full tank = ~2,000 psi.",
                    category: "Oxygen — Cylinders"
                },
                {
                    question: "How do you calculate oxygen cylinder duration?",
                    answer: "(Tank pressure × Cylinder factor) ÷ Flow rate = Minutes remaining. Factors: D=0.16, E=0.28, M=1.56, H=3.14. A 2,000 psi E cylinder at 15 L/min = (2000 × 0.28) ÷ 15 = 37.3 minutes.",
                    category: "Oxygen — Duration Calculation"
                },
                {
                    question: "What are the oxygen safety rules EMTs must follow?",
                    answer: "No smoking, no petroleum jelly/products near O₂ (can ignite), secure cylinders upright (projectile risk), no oil/grease on fittings, replace at 200 psi reserve, open valves slowly, store away from heat.",
                    category: "Oxygen — Safety"
                },
                {
                    question: "What factors cause inaccurate pulse oximetry readings?",
                    answer: "Poor perfusion (shock, hypothermia), carbon monoxide poisoning (falsely elevated SpO₂), methemoglobinemia (falsely low), severe anemia (normal % but low content), dark nail polish, and movement artifact.",
                    category: "Monitoring — Pulse Oximetry"
                },
                {
                    question: "What is the normal EtCO₂ range and what do abnormal values indicate?",
                    answer: "Normal: 35-45 mmHg. Low EtCO₂ (<30): hyperventilation, low cardiac output (CPR), PE, or hypothermia. High EtCO₂ (>50): hypoventilation, respiratory depression, ROSC (sudden rise), malignant hyperthermia.",
                    category: "Monitoring — Capnography"
                },
                {
                    question: "How does capnography confirm correct ETT placement and detect ROSC?",
                    answer: "A sustained waveform with CO₂ detection confirms tracheal (not esophageal) placement. No CO₂ after 6 breaths = esophageal intubation. A sudden sustained rise in EtCO₂ during CPR is the earliest sign of ROSC.",
                    category: "Monitoring — Capnography"
                },
                {
                    question: "What are the three major complications of positive pressure ventilation?",
                    answer: "1) Gastric inflation → vomiting/aspiration. 2) Decreased venous return → hypotension. 3) Barotrauma → pneumothorax. Prevention: avoid over-ventilation, use correct rate/volume, monitor for deterioration.",
                    category: "Ventilation — Complications"
                },
                {
                    question: "When is positive pressure ventilation indicated in an adult patient?",
                    answer: "Apnea, inadequate respiratory effort (RR <8/min), severe hypoxia despite high-flow O₂ (SpO₂ <90% on NRB), severe AMS (GCS <8), and respiratory fatigue with impending failure.",
                    category: "Ventilation — Indications"
                }
            ],
            quiz: [
                {
                    q: "An EMT is using an E cylinder with 1,600 psi to power a non-rebreather at 15 L/min. Approximately how many minutes of oxygen remain?",
                    options: [
                        "15 minutes",
                        "30 minutes",
                        "45 minutes",
                        "60 minutes"
                    ],
                    correct: 1,
                    explanation: "(1,600 psi × 0.28 factor) ÷ 15 L/min = 448 ÷ 15 = 29.9 minutes. The E cylinder factor is 0.28."
                },
                {
                    q: "During CPR, the EtCO₂ reading is consistently 8 mmHg despite what you believe are adequate chest compressions. What does this finding MOST likely indicate?",
                    options: [
                        "The patient is hyperventilating",
                        "Chest compressions are producing inadequate cardiac output — improve compression depth, rate, and recoil",
                        "The patient has a pulmonary embolism",
                        "The capnography monitor is malfunctioning"
                    ],
                    correct: 1,
                    explanation: "EtCO₂ <10 mmHg during CPR indicates poor cardiac output from inadequate chest compressions. Improve compression quality (depth ≥2 inches, rate 100-120/min, full chest recoil). EtCO₂ is a reliable indicator of CPR quality."
                },
                {
                    q: "A 58-year-old male with COPD is on a non-rebreather at 15 L/min. His SpO₂ is 100% and his EtCO₂ is 68 mmHg. He is drowsy but arousable. What does this combination of findings represent?",
                    options: [
                        "Adequate oxygenation and adequate ventilation — no intervention needed",
                        "Good oxygenation but severe hypoventilation with CO₂ retention — the patient needs assisted ventilation",
                        "The EtCO₂ is falsely elevated due to the high oxygen flow",
                        "The SpO₂ is falsely elevated due to COPD"
                    ],
                    correct: 1,
                    explanation: "SpO₂ 100% shows adequate oxygenation. EtCO₂ 68 mmHg shows severe hypoventilation (CO₂ retention). This patient is well-oxygenated but inadequately ventilated. He needs assisted ventilation to lower his CO₂ — not more oxygen.",
                    explanation: "SpO₂ tells you oxygenation; EtCO₂ tells you ventilation. An SpO₂ of 100% with an EtCO₂ of 68 mmHg is classic for CO₂ retention with adequate oxygenation. This patient needs ventilatory support, not more oxygen."
                },
                {
                    q: "[HARD] A 34-year-old female is pulled from a house fire. She is confused, tachycardic, and has a headache. Her SpO₂ reads 99% on room air. Despite her high SpO₂, clinical suspicion for carbon monoxide poisoning is high. Which statement is correct?",
                    options: [
                        "The high SpO₂ rules out CO poisoning — continue routine care",
                        "Pulse oximetry cannot distinguish oxyhemoglobin from carboxyhemoglobin — SpO₂ may be falsely elevated despite severe hypoxia. A CO-oximeter is needed",
                        "CO poisoning does not affect oxygen saturation — the SpO₂ reading is reliable",
                        "CO poisoning causes low SpO₂ — the reading is likely inaccurate due to smoke inhalation"
                    ],
                    correct: 1,
                    explanation: "Pulse oximetry cannot differentiate O₂Hb from COHb. A patient with CO poisoning can have a falsely normal or elevated SpO₂ despite being profoundly hypoxic. Use a CO-oximeter for accurate measurement. High-flow O₂ and transport to a hyperbaric facility are indicated.",
                    explanation: "Standard pulse oximetry is unreliable in carbon monoxide poisoning. A CO-oximeter is required. Treat with high-flow O₂ (or hyperbaric) regardless of the SpO₂ reading."
                }
            ],
            critical: [
                {
                    id: "crit_10_2_1",
                    scenario: "You are performing CPR on a 65-year-old male in cardiac arrest. You have placed an i-gel supraglottic airway and are ventilating at a rate of 10 breaths/min. EtCO₂ monitoring shows a waveform tracing with values between 8-12 mmHg. Your partner is performing chest compressions. On initial assessment, the chest compression quality appears adequate with visible chest recoil. After 5 minutes, the EtCO₂ suddenly rises from 10 mmHg to 48 mmHg over 30 seconds. The patient remains pulseless on your carotid check.",
                    question: "What does the sudden rise in EtCO₂ during CPR indicate and what should you do?",
                    options: [
                        {t: "The capnography monitor is malfunctioning — ignore the reading and continue CPR", f: "Incorrect. A sudden rise in EtCO₂ during CPR is a well-validated sign of ROSC, not a monitor malfunction."},
                        {t: "This sudden sustained rise in EtCO₂ is the earliest sign of return of spontaneous circulation (ROSC). Re-check the pulse carefully — you may have missed a perfusing rhythm. If pulse is present, begin post-ROSC care (ventilate, monitor BP, transport), but the sudden rise alone is strongly suspicious even if you cannot yet palpate a pulse", f: "Correct. A sudden rise in EtCO₂ >40 mmHg is the earliest indicator of ROSC. Check again for a pulse. If present, transition to post-resuscitation care. If truly pulseless, consider that this may precede a very brief ROSC that was missed."}
                    ],
                    correct: 1,
                    explanation: "A sudden sustained EtCO₂ rise from <15 to >40 mmHg during CPR is highly predictive of ROSC. It reflects the heart restarting and flushing accumulated CO₂ from the venous system to the lungs. Always re-check the pulse when EtCO₂ rises abruptly.",
                    kpi: "ROSC detection via capnography"
                },
                {
                    id: "crit_10_2_2",
                    scenario: "You are called to a 72-year-old female in respiratory distress. She has a history of COPD and is on 2 L/min home oxygen. On exam, she is using accessory muscles, has a respiratory rate of 28, SpO₂ 86% on her home O₂, and she is confused (new onset per family). Her breath sounds are distant with prolonged expiration. Your partner applies a non-rebreather at 15 L/min. Five minutes later, her SpO₂ has risen to 98% but her respiratory rate has dropped to 8, she is more difficult to arouse, and you note rising EtCO₂ on the monitor (now 62 mmHg).",
                    question: "What is the most likely cause of the deterioration and what should you do?",
                    options: [
                        {t: "The patient is having a COPD exacerbation that is worsening despite oxygen — continue NRB and expedite transport", f: "Incorrect. While she is having an exacerbation, the specific mechanism of deterioration is over-oxygenation blunting her hypoxic drive. Simply continuing the same O₂ rate will make it worse."},
                        {t: "The patient is a chronic CO₂ retainer. High-flow O₂ has blunted her hypoxic respiratory drive, leading to hypoventilation and CO₂ narcosis. Reduce O₂ to achieve SpO₂ 88-92% (not 94-100%), assist ventilation with BVM if she continues to deteriorate, and transport", f: "Correct. Chronic CO₂ retainers depend on hypoxic drive. Excessive O₂ removes that drive, causing hypoventilation. Target SpO₂ 88-92% in known COPD patients. If she continues to deteriorate, begin BVM ventilation."}
                    ],
                    correct: 1,
                    explanation: "In chronic CO₂ retainers (COPD), the respiratory drive is partially dependent on hypoxemia. Give too much O₂, and the respiratory drive decreases, causing CO₂ retention and narcosis. Target SpO₂ 88-92% for known COPD patients.",
                    kpi: "Oxygen titration in COPD — avoiding CO₂ retention"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c10s3 – Bleeding Control & Wound Care
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c10s3",
            shortTitle: "10.3 Bleeding Control & Wound Care",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Bleeding Control & Wound Care</h3>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Priority:</strong> Tourniquets save lives in extremity hemorrhage — <strong>apply early, apply tight</strong>. Do NOT release a tourniquet in the field — definitive care removes it. For non-extremity bleeding, direct pressure and wound packing are the primary interventions.
                </div>

                <h4>Direct Pressure — The First and Most Important Step</h4>
                <p><strong>Direct pressure</strong> is the most effective initial intervention for controlling hemorrhage. Apply firm pressure directly over the bleeding site using a sterile gauze pad or any clean cloth. If blood soaks through, <strong>add more layers on top</strong> — do not remove the original dressing, as this disrupts clot formation. Hold continuous pressure for at least <strong>10 minutes</strong> before reassessing (or until bleeding stops). For large wounds, the patient can assist by holding pressure if they are able.</p>

                <h4>Hemostatic Dressings</h4>
                <p>Hemostatic dressings are impregnated with agents that accelerate clot formation. They are used for <strong>severe bleeding</strong> not controlled by direct pressure alone, especially in <strong>junctional areas</strong> (groin, axilla, neck) where a tourniquet cannot be applied.</p>
                <ul>
                    <li><strong>Kaolin-impregnated gauze</strong> (e.g., QuikClot Combat Gauze): Kaolin is a mineral that activates the intrinsic clotting cascade (activates Factor XII). It is the most widely used hemostatic agent in military and civilian trauma.</li>
                    <li><strong>Chitosan-based</strong> (e.g., Celox): Chitosan is derived from crustacean shells. It works by electrostatic attraction to red blood cells and platelets, forming a gel-like barrier. It does not rely on the clotting cascade, so it works in coagulopathic patients.</li>
                </ul>
                <p><strong>Wound packing technique:</strong> Pack the hemostatic gauze <strong>deeply into the wound tract</strong>, directly over the source of bleeding. Use your index finger to push the gauze as deep as possible. Once the wound cavity is packed, hold firm <strong>direct pressure</strong> for a full <strong>3 minutes</strong> (by the clock) without peeking. This allows the hemostatic agent to activate and form a stable clot.</p>

                <h4>Tourniquet Application</h4>
                <p>Tourniquets are the definitive treatment for life-threatening extremity hemorrhage when direct pressure fails or is impractical (e.g., multiple casualties, active shooter, need to free both hands for other tasks).</p>
                <p><strong>Indications:</strong> Severe, life-threatening bleeding from an extremity (arm or leg) that is not controlled by direct pressure. Common scenarios: penetrating trauma (GSW, stab), severe laceration, crush injury with arterial hemorrhage, traumatic amputation.</p>
                <p><strong>Application technique (commercial tourniquet — CAT, SOFT-T):</strong></p>
                <ul>
                    <li>Place the tourniquet <strong>2-3 inches proximal</strong> to the wound (between the wound and the heart)</li>
                    <li>Do <strong>NOT</strong> place the tourniquet over a joint (elbow, knee) — move proximal to the joint</li>
                    <li>Apply directly to the skin or over minimal clothing; avoid placing over bulky items in pockets</li>
                    <li>Tighten the tourniquet by twisting the windlass rod until bleeding stops</li>
                    <li>Secure the windlass with the locking clip</li>
                    <li>Note the <strong>application time</strong> — write "TK + time" on a piece of tape and place it on the patient's forehead or document clearly</li>
                    <li><strong>Do NOT release the tourniquet</strong> once applied — even for reassessment. Release in the field is associated with worsening hemorrhage and metabolic washout (reperfusion syndrome)</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Critical Safety:</strong> A tourniquet must be tight enough to stop ALL arterial bleeding. If you can still see bleeding after applying the tourniquet, <strong>tighten it further</strong>. A partially applied tourniquet that occludes venous return but not arterial flow will worsen bleeding by causing passive congestion. "Tighten until the bleeding stops" — if it's still bleeding, it's not tight enough.
                </div>

                <p><strong>Anatomic tourniquet locations</strong> — where a tourniquet can be effectively placed:</p>
                <table>
                    <thead>
                        <tr><th>Bleeding Site</th><th>Tourniquet Location</th><th>Notes</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Upper arm (brachial artery)</td><td>Upper arm, proximal to wound</td><td>Apply 2-3" above wound; if wound is in upper 1/3 of arm, place as high as possible in axilla</td></tr>
                        <tr><td>Forearm</td><td>Upper arm, above elbow</td><td>Do NOT place over the forearm or wrist — the radius/ulna prevent compression of deep arteries; place on upper arm</td></tr>
                        <tr><td>Thigh (femoral artery)</td><td>Upper thigh, as proximal as possible</td><td>Apply 2-3" above wound; if junctional (groin level), wound packing + hemostatics may be needed</td></tr>
                        <tr><td>Lower leg</td><td>Above knee, on the thigh</td><td>Do NOT place over the lower leg — tibia/fibula prevent deep artery compression; place on the thigh</td></tr>
                    </tbody>
                </table>
                <p><strong>Improvised tourniquets:</strong> Use a bandana, cravat, triangular bandage, or belt at least 1-2 inches wide (narrow material like wire or string causes tissue damage). Apply with a windlass (stick or pen) to tighten. Improvised tourniquets are less effective than commercial devices — transport rapidly to definitive care.</p>

                <h4>Junctional Hemorrhage</h4>
                <p>Junctional hemorrhage occurs at the <strong>groin, axilla, or neck</strong> — areas where a tourniquet cannot be placed. These are the most challenging bleeding scenarios and carry high mortality. <strong>Management strategy:</strong></p>
                <ol>
                    <li><strong>Wound packing</strong> with hemostatic gauze — pack deeply into the wound tract, directly over the source</li>
                    <li><strong>Direct pressure</strong> — hold firm, sustained pressure for a full 3 minutes (minimum)</li>
                    <li><strong>Specialized junctional tourniquets</strong> (e.g., SAM Junctional Tourniquet, Combat Ready Clamp) — some services carry these for groin and axillary hemorrhage, but they require training and are not standard EMT equipment</li>
                    <li><strong>Rapid transport</strong> — these patients need surgical control of bleeding</li>
                </ol>

                <h4>Pelvic Binder</h4>
                <p>Suspected <strong>pelvic fracture</strong> with hemodynamic instability (tachycardia, hypotension) requires application of a pelvic binder. The pelvis can hold a large volume of blood (retroperitoneal space ≥ 1,500 mL), and an unstable pelvic fracture can cause fatal hemorrhage.</p>
                <p><strong>Application:</strong> Position the binder at the level of the <strong>greater trochanters</strong> (the bony prominences at the top of the femur). Tighten until the pelvis is stabilized. Do NOT overtighten — this can cause further fracture displacement. Apply in any patient with significant blunt trauma (MVC, fall) who has pelvic pain, instability, or hypotension without other obvious cause.</p>

                <h4>Wound Care and Irrigation</h4>
                <p>Wound care in the prehospital setting focuses on <strong>hemorrhage control</strong> and <strong>gross contamination removal</strong>. Definitive cleaning and closure occur in the emergency department.</p>
                <p><strong>Wound irrigation:</strong> Use <strong>sterile saline</strong> or clean water to irrigate wounds. <strong>High-pressure irrigation</strong> is preferred for contaminated wounds (e.g., road rash, animal bites, wounds with dirt/gravel) to reduce bacterial load. Use a 30-60 mL syringe with an 18-gauge catheter or splash shield to generate adequate pressure. Irrigation does NOT substitute for hemorrhage control — stop the bleeding first.</p>
                <p><strong>Wound closure:</strong> EMTs may apply <strong>steri-strips</strong> or butterfly bandages for <strong>superficial, clean, non-contaminated wounds</strong> under medical director approval. Do NOT close deep wounds, large wounds, contaminated wounds, or wounds at high risk for infection (puncture wounds, bites, crush injuries). Closing these wounds traps bacteria inside and promotes abscess formation.</p>

                <h4>Bite Wound Management</h4>
                <p>Animal and human bites have a <strong>high risk of infection</strong> due to the bacterial flora of the mouth. Management priorities:</p>
                <ul>
                    <li><strong>Copious irrigation</strong> with sterile saline or water — high-pressure irrigation reduces bacterial load</li>
                    <li>Control hemorrhage with direct pressure</li>
                    <li>Cover with a sterile, non-occlusive dressing</li>
                    <li><strong>Do NOT close</strong> bite wounds (high infection risk — leave open for drainage and delayed primary closure)</li>
                    <li><strong>Document rabies/vaccination status</strong> — For animal bites, document the animal type (domestic vs wild), whether the animal was provoked, vaccination status of the animal (if known), and the patient's tetanus immunization history</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> Bite wounds are not closed in the field. They are irrigated copiously, covered with a sterile dressing, and left open. The wound will be evaluated in the ED for delayed primary closure or antibiotic prophylaxis. Always document the animal type and rabies risk.
                </div>
            </div>`,
            flashcards: [
                {
                    question: "What is the most effective initial intervention for controlling external hemorrhage?",
                    answer: "Direct pressure — apply firm pressure over the bleeding site with sterile gauze, hold for at least 10 minutes. Add more layers on top if blood soaks through (do NOT remove the original dressing).",
                    category: "Bleeding Control — Direct Pressure"
                },
                {
                    question: "How do you properly apply a tourniquet and what are the critical rules?",
                    answer: "Place 2-3 inches proximal to the wound (not over a joint), tighten until bleeding stops, secure the windlass, note application time. Do NOT release once applied. Apply directly to skin if possible. Place on thigh for lower leg bleeds; place on upper arm for forearm bleeds.",
                    category: "Bleeding Control — Tourniquet"
                },
                {
                    question: "How do you pack a wound with hemostatic gauze?",
                    answer: "Pack the gauze deeply into the wound tract, directly over the source of bleeding. Use a finger to push it as deep as possible. Hold firm direct pressure for 3 full minutes without peeking. Common agents: Kaolin (QuikClot) and Chitosan (Celox).",
                    category: "Bleeding Control — Wound Packing"
                },
                {
                    question: "What is junctional hemorrhage and how is it managed?",
                    answer: "Junctional hemorrhage occurs in the groin, axilla, or neck — areas where a tourniquet cannot be applied. Management: wound packing with hemostatics, sustained direct pressure (3 min), and rapid transport for surgical control.",
                    category: "Bleeding Control — Junctional"
                },
                {
                    question: "When is a pelvic binder indicated and where is it placed?",
                    answer: "Indicated for suspected pelvic fracture with hemodynamic instability (tachycardia, hypotension). Placed at the level of the greater trochanters. Do not overtighten. The retroperitoneal space can hold ≥1,500 mL of blood.",
                    category: "Bleeding Control — Pelvic Binder"
                },
                {
                    question: "How should bite wounds be managed in the prehospital setting?",
                    answer: "Copious high-pressure irrigation, direct pressure for hemorrhage, sterile non-occlusive dressing. Do NOT close bite wounds (high infection risk). Document animal type, rabies risk, provocation status, and patient's tetanus history.",
                    category: "Wound Care — Bites"
                },
                {
                    question: "What wounds should NOT be closed with steri-strips in the field?",
                    answer: "Deep wounds, large wounds, contaminated wounds, puncture wounds, bite wounds, crush injuries, or any wound at high risk for infection. Closing these traps bacteria and promotes abscess formation.",
                    category: "Wound Care — Closure"
                }
            ],
            quiz: [
                {
                    q: "A 34-year-old male has a severe laceration to his left forearm with arterial bleeding. You applied a commercial tourniquet 3 inches above the wound, but after tightening, there is still slow oozing from the wound. What should you do?",
                    options: [
                        "Release the tourniquet and try direct pressure instead",
                        "Tighten the tourniquet further until ALL bleeding stops — a partially tightened tourniquet that only occludes venous flow will worsen bleeding",
                        "Apply a second tourniquet distal to the first one",
                        "Cover the wound and transport as-is"
                    ],
                    correct: 1,
                    explanation: "A tourniquet must be tight enough to stop ALL arterial bleeding. If you can still see bleeding, tighten it more. A partially occlusive tourniquet is worse than none at all — it blocks venous return while arterial flow continues, causing passive congestion and worsening hemorrhage."
                },
                {
                    q: "A 22-year-old male is shot in the right upper thigh. There is severe arterial bleeding from a wound in the proximal thigh, high in the groin area. You cannot place a tourniquet high enough to control the bleeding because the wound is too proximal (junctional). What is the best intervention?",
                    options: [
                        "Apply the tourniquet as high as possible on the thigh and hope for the best",
                        "Pack the wound deeply with hemostatic gauze, hold direct pressure for 3 minutes, then transport rapidly",
                        "Apply direct pressure only and transport",
                        "Do not touch the wound — transport immediately"
                    ],
                    correct: 1,
                    explanation: "Junctional hemorrhage in the groin (where the femoral artery enters the pelvis) cannot be controlled with a tourniquet. Wound packing with hemostatic gauze combined with sustained direct pressure (3 minutes) is the appropriate field intervention. Transport rapidly for surgical control.",
                    explanation: "Junctional hemorrhage (groin/axilla/neck) cannot be tourniqueted. Wound packing + hemostatic gauze + 3 minutes of direct pressure is the correct approach."
                },
                {
                    q: "A patient has a traumatic amputation of the left lower leg just below the knee with profuse bleeding. Where should the tourniquet be placed?",
                    options: [
                        "Directly over the knee joint",
                        "On the lower leg, 2 inches above the amputation site",
                        "Above the knee, on the thigh, 2-3 inches proximal to the wound",
                        "Around the ankle to control the distal bleeding"
                    ],
                    correct: 2,
                    explanation: "For lower leg injuries, the tourniquet is placed on the THIGH (above the knee), not on the lower leg. The tibia and fibula prevent effective compression of the deep arteries in the lower leg. The tourniquet must be proximal enough to compress the femoral artery branches. Do NOT place over a joint."
                },
                {
                    q: "[HARD] You applied a tourniquet to a patient's thigh 20 minutes ago for life-threatening hemorrhage. En route to the hospital, the bleeding has stopped and the patient is stable. The receiving physician radios asking you to release the tourniquet to assess the wound. What should you do?",
                    options: [
                        "Release the tourniquet as requested — the physician is in charge of patient care",
                        "Do NOT release the tourniquet — field release of a tourniquet can cause worsening hemorrhage and metabolic washout (reperfusion syndrome). Communicate that the tourniquet has been on for only 20 minutes and definitive removal should occur in the controlled hospital setting",
                        "Partially loosen the tourniquet to allow some blood flow but maintain some pressure",
                        "Release it but keep direct pressure on the wound as an alternative"
                    ],
                    correct: 1,
                    explanation: "Standard of care: tourniquets are NOT released in the field. Release can cause re-hemorrhage, metabolic washout (reperfusion of ischemic tissue releases potassium, lactic acid, and inflammatory mediators), air embolism, and hemodynamic collapse. Definitively remove only in the controlled hospital setting. Politely but firmly explain this to the physician.",
                    explanation: "Field release of a tourniquet is contraindicated. The risks (re-hemorrhage, reperfusion syndrome, air embolism) outweigh benefits. Communicate that the tourniquet has only been on 20 minutes and will be removed at the hospital."
                }
            ],
            critical: [
                {
                    id: "crit_10_3_1",
                    scenario: "You are called to a motor vehicle collision. A 28-year-old male driver has a severe laceration to his left forearm with bright red blood spurting from the wound. There is a large pool of blood on the ground. The patient is awake, anxious, and pale. His radial pulse is weak and thready at 124 bpm. You are alone with the patient, and ALS is 12 minutes away. You have a commercial CAT tourniquet in your kit.",
                    question: "What is the correct sequence of interventions?",
                    options: [
                        {t: "Apply direct pressure first for 10 minutes, then consider a tourniquet if still bleeding", f: "Incorrect. Direct pressure is valuable, but this is a life-threatening arterial hemorrhage with signs of shock. A tourniquet is the fastest and most effective intervention. Do not waste 10 minutes."},
                        {t: "Apply the CAT tourniquet 2-3 inches proximal to the wound on the upper arm (not on the forearm), tighten until the bleeding stops completely, secure the windlass, note the application time (TK + time), and transport rapidly. Direct pressure can be held by bystander or patient during application if needed", f: "Correct. Arterial hemorrhage + signs of shock = tourniquet time. Apply proximal to the wound, not over the forearm (radius/ulna prevent compression). Note the time. Do not release."}
                    ],
                    correct: 1,
                    explanation: "Arterial hemorrhage with shock requires immediate tourniquet application. For forearm wounds, place the tourniquet on the upper arm (not the forearm). Direct pressure is not appropriate here — it delays definitive control of a life-threatening hemorrhage.",
                    kpi: "Tourniquet decision-making in arterial hemorrhage"
                },
                {
                    id: "crit_10_3_2",
                    scenario: "You are treating a 45-year-old construction worker who fell onto a rebar. The rebar penetrated the medial aspect of his right upper thigh, just below the groin crease. There is moderate dark red bleeding that is steadily oozing. The patient is tachycardic (118 bpm) with a BP of 104/68. The bleeding appears venous, originating from a deep wound tract. A tourniquet placed as high as possible on the thigh has not stopped the bleeding because the wound is too proximal.",
                    question: "This appears to be a junctional hemorrhage and the tourniquet has failed to control it. What should you do now?",
                    options: [
                        {t: "Remove the tourniquet, as it is not working, and apply a second one higher — as close to the groin as possible", f: "Incorrect. The tourniquet is likely compressing the thigh vessels distal to the injury. A second tourniquet will not help if the bleeding source is above the level where a tourniquet can compress."},
                        {t: "Leave the tourniquet in place (it may be providing some venous compression), pack the wound tract deeply with hemostatic gauze, hold firm direct pressure for 3 full minutes, and transport rapidly. This is a junctional hemorrhage that requires wound packing + pressure, not a tourniquet", f: "Correct. Junctional hemorrhage at the groin level requires wound packing with hemostatic gauze and sustained direct pressure. The tourniquet alone cannot occlude the proximal femoral vessels. Transport for surgical control."}
                    ],
                    correct: 1,
                    explanation: "Junctional hemorrhage (groin/axilla/neck) cannot be controlled by a tourniquet alone. The combination of wound packing with hemostatic gauze + sustained direct pressure (3 minutes) is the definitive prehospital intervention for this type of bleeding.",
                    kpi: "Junctional hemorrhage management with wound packing"
                },
                {
                    id: "crit_10_3_3",
                    scenario: "You are called to a park for a 38-year-old female who was bitten on the right hand by what witnesses describe as a stray dog. The wound is a deep puncture wound on the thenar eminence with two smaller adjacent punctures. Bleeding is minimal and controlled with direct pressure. The dog ran away and cannot be located for rabies observation. The patient says it has been 6 years since her last tetanus shot. She has no other injuries and vital signs are normal.",
                    question: "What is the appropriate management of this bite wound?",
                    options: [
                        {t: "Irrigate the wound copiously, control any remaining bleeding, apply a sterile dressing, do NOT close the wound, document the dog's status (unavailable for rabies observation), note tetanus status, and transport for evaluation of rabies PEP and tetanus booster", f: "Correct. Bite wounds require copious irrigation, are not closed in the field, and need ED evaluation for rabies post-exposure prophylaxis and tetanus immunization."},
                        {t: "Clean the wound with alcohol wipes, apply steri-strips to close the puncture, and release the patient to follow up with her primary care doctor tomorrow", f: "Incorrect. Bite wounds must NOT be closed (high infection risk). A stray dog with unknown rabies status requires ED evaluation for possible rabies PEP. Tetanus booster is overdue (6 years)."}
                    ],
                    correct: 0,
                    explanation: "Bite wounds have high infection risk. They are irrigated copiously and left open (no closure). A stray dog that cannot be observed for rabies requires ED evaluation for rabies post-exposure prophylaxis. Tetanus booster is indicated (>5 years since last dose for a dirty wound).",
                    kpi: "Bite wound management and rabies risk assessment"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c10s4 – Splinting & Bandaging
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c10s4",
            shortTitle: "10.4 Splinting & Bandaging",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Splinting & Bandaging</h3>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Priority:</strong> The <strong>PMS check</strong> (Pulse, Motor, Sensation) must be performed and documented <strong>BEFORE and AFTER every splinting intervention</strong>. A splint that compromises neurovascular function is a splint that was applied incorrectly. Always reassess.
                </div>

                <h4>General Splinting Principles</h4>
                <p>Splinting immobilizes fractures and dislocations to prevent further injury, reduce pain, and protect neurovascular structures. These principles apply to <strong>every</strong> splinting intervention:</p>
                <ul>
                    <li><strong>Immobilize the joint above AND the joint below the fracture</strong> — a splint must cross the joints proximal and distal to the injury to prevent movement at the fracture site</li>
                    <li><strong>Splint in the position found</strong> — do NOT attempt to realign or reduce angulated fractures in the field (unless there is no distal pulse and medical direction is obtained)</li>
                    <li><strong>Pad bony prominences</strong> — use soft padding over the wrist, ankle, elbow, knee, and other bony areas to prevent pressure injury</li>
                    <li><strong>Check PMS before AND after</strong> — assess Pulse (distal to injury), Motor (distal movement), and Sensation (distal touch sensation) immediately before and after splinting. Document both assessments</li>
                    <li><strong>Secure above and below the injury</strong> — apply bandages or cravats above and below the fracture site (not directly over it) to secure the splint without causing pressure on the injury</li>
                    <li><strong>Elevate if possible</strong> — after splinting, elevate the injured extremity to reduce swelling (if no contraindication such as suspected compartment syndrome)</li>
                    <li><strong>Apply cold</strong> — ice or cold packs (wrapped in a cloth, not directly on skin) over the injury site to reduce swelling and pain</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> "Splint 'em where they lie, splint 'em how they lie." Unless there is a complete absence of distal pulses that cannot be corrected by gentle inline traction (under medical direction), do not attempt to straighten an angulated fracture. Moving bone ends can sever nerves and blood vessels.
                </div>

                <h4>Types of Splints</h4>
                <table>
                    <thead>
                        <tr><th>Splint Type</th><th>Examples</th><th>Best For</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Rigid splints</strong></td><td>Board splints, SAM splints ( padded aluminum), cardboard splints, padded boards</td><td>Forearm, wrist, ankle, lower leg fractures. Provide firm immobilization.</td></tr>
                        <tr><td><strong>Soft splints</strong></td><td>Pillow splint, sling, swath, blanket roll</td><td>Upper extremity injuries (clavicle, shoulder, humerus), ankle injuries (pillow splint)</td></tr>
                        <tr><td><strong>Traction splints</strong></td><td>Hare traction splint, Sager splint, CT-6</td><td><strong>Isolated midshaft femur fracture ONLY</strong> — not for hip, knee, pelvis, or open femur with bone ends protruding</td></tr>
                        <tr><td><strong>Vacuum splints</strong></td><td>Vacuum mattress splints</td><td>Any extremity fracture; conforms to the injury, provides even pressure distribution. Requires vacuum pump.</td></tr>
                        <tr><td><strong>Air splants</strong></td><td>Inflatable plastic splints</td><td>Forearm, wrist, ankle, lower leg. Provide pneumatic compression. Contraindicated in open fractures (cannot observe wound). Risk of over-inflation causing neurovascular compromise.</td></tr>
                        <tr><td><strong>Ladder splints</strong></td><td>Wire ladder splints (malleable metal with padding)</td><td>Can be bent to fit any body part. Versatile for wrist, ankle, arm, or even as a cervical collar substitute in resource-limited settings.</td></tr>
                    </tbody>
                </table>

                <h4>Traction Splint for Femur Fracture</h4>
                <p>A <strong>traction splint</strong> applies longitudinal traction to stabilize an isolated midshaft femur fracture, reducing pain, preventing bone ends from damaging neurovascular structures, and controlling hemorrhage (the femur can bleed up to 1,000-1,500 mL into the thigh).</p>
                <p><strong>Indications:</strong> Isolated, midshaft femur fracture</p>
                <p><strong>Contraindications — ABSOLUTE:</strong></p>
                <ul>
                    <li>Pelvic fracture (traction will displace the pelvic ring)</li>
                    <li>Hip dislocation (traction on a dislocated hip can cause avascular necrosis)</li>
                    <li>Knee injury (traction applies force across the knee joint)</li>
                    <li>Partial amputation with bone ends protruding (traction pulls the bone end back into the wound, introducing contamination)</li>
                    <li>Open fracture with bone ends protruding (same concern — pulling bone back in introduces bacteria)</li>
                    <li>Injury to the lower leg or ankle on the same extremity (traction splint applies force to the ankle hitch)</li>
                </ul>

                <p><strong>Application technique (Hare traction splint):</strong></p>
                <ol>
                    <li>Expose the injured leg — cut away clothing to visualize the entire limb</li>
                    <li>Check and document PMS (pulse at dorsalis pedis/posterior tibial, motor — toe movement, sensation — touch over foot)</li>
                    <li>Manually apply inline traction — one EMT grasps the ankle, another grasps the foot, and gently pulls to realign the limb and reduce muscle spasm</li>
                    <li>Secure the ankle hitch (use the provided ankle strap) and connect it to the splint's traction mechanism</li>
                    <li>Position the splint along the medial aspect of the injured leg (for Hare) or between the legs (for Sager)</li>
                    <li>Secure the ischial strap (pad for the groin/perineum) — this is the "counter-traction" anchor for the proximal end</li>
                    <li>Apply traction by turning the ratchet/windlass until the muscle spasm stops and the limb appears anatomically aligned (do NOT over-traction)</li>
                    <li>Secure the support straps (velcro straps) along the leg, above and below the fracture site</li>
                    <li>Reassess PMS — document distal pulse, motor, and sensation. If any deficit is new or worse, adjust traction and reassess</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Traction Splint Contraindications:</strong> A traction splint is for <strong>isolated midshaft femur fracture ONLY</strong>. If you suspect pelvic fracture, hip dislocation, knee injury, or if there is an open fracture with bone ends protruding — DO NOT apply a traction splint. Use a rigid splint (board splint) or vacuum splint to immobilize the leg in its current position instead.
                </div>

                <h4>Sling and Swath</h4>
                <p>The <strong>sling and swath</strong> is used for upper extremity injuries including clavicle fracture, shoulder dislocation/acromioclavicular separation, and humeral shaft fracture. The <strong>sling</strong> supports the forearm and wrist, holding the arm against the body. The <strong>swath</strong> is a band (or second triangular bandage) wrapped around the chest and over the sling to secure the arm firmly against the torso. Application: position the arm in the position found (typically slightly forward and across the chest), apply the sling to support the forearm, then apply the swath around the chest to immobilize the entire upper extremity. Check PMS before and after. For clavicle fractures, assess for distal neurovascular deficits (brachial plexus/axillary artery injury is rare but possible).</p>

                <h4>Anatomic Splinting</h4>
                <p><strong>Buddy taping</strong> is used for finger and toe fractures. Tape the injured digit to an adjacent uninjured digit, with padding (gauze or felt) between them to prevent skin maceration. This uses the uninjured digit as a natural splint. Check PMS before and after. For fingers, assess capillary refill and sensation distal to the injury.</p>
                <p>Other anatomic splinting uses the patient's own body as a splint: a leg can be tied to the uninjured leg (using padding between the knees and ankles), and an arm can be secured against the torso if no other splinting materials are available. These are improvised techniques for resource-limited settings.</p>

                <h4>Immobilization of Joint Injuries</h4>
                <p>Joint injuries (dislocations, subluxations) present with deformity, pain, and loss of function at the joint. The cardinal rule: <strong>DO NOT reduce dislocations in the field</strong>. Splint the joint in the position found, pad generously, and transport. Attempting to reduce a dislocation without knowledge of the specific anatomy and without post-reduction X-ray can cause:</p>
                <ul>
                    <li>Fracture of the adjacent bones (e.g., posterior shoulder dislocation — attempting reduction can fracture the humeral neck)</li>
                    <li>Neurovascular injury (e.g., attempting to reduce a hip dislocation without proper technique can injure the sciatic nerve or femoral vessels)</li>
                    <li>Joint capsule or ligament damage</li>
                    <li>Conversion of a simple dislocation into a fracture-dislocation</li>
                </ul>
                <p>The <strong>only</strong> exception to the "do not reduce" rule is if there is <strong>complete absence of distal pulses</strong> and the dislocation is obvious (e.g., obvious knee dislocation with no pedal pulse), and medical direction is obtained. In this case, gentle inline traction to align the joint may restore perfusion.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> Every dislocated joint has a pulse until proven otherwise. A joint dislocation with <strong>absent distal pulses</strong> is a vascular emergency — the vessel is compromised. If simple positioning does not restore pulses, the patient needs immediate surgical evaluation. Document the presence or absence of pulses meticulously, because the trauma surgeon will need to know the pre-reduction vascular status.
                </div>

                <h4>Spinal Motion Restriction Equipment</h4>
                <p>Spinal motion restriction (SMR) has evolved significantly in recent years. Current evidence emphasizes <strong>minimal movement, not maximal immobilization</strong>. The long backboard is now used primarily for <strong>extrication</strong> (not transport) — patients should be removed from the backboard as soon as practical (typically in the ED) to prevent pressure sores and aspiration risk.</p>
                <p><strong>Cervical collar sizing:</strong> Measure from the trapezius (shoulder) to the angle of the mandible. The chin must fit snugly into the chin piece without extending the neck. Apply the collar as part of a coordinated log roll — not before, not after, but simultaneously with the roll.</p>
                <p><strong>Extrication equipment:</strong></p>
                <ul>
                    <li><strong>KED vest (Kendrick Extrication Device):</strong> Used for seated patients in vehicles. Immobilizes the head, neck, and torso before extrication. Apply the KED around the patient, secure the leg straps, then the chest straps, then the head pads. The head should be the LAST part secured.</li>
                    <li><strong>Long backboard:</strong> Now primarily extrication, not transport. Transfer the patient via coordinated log roll (at least 3-4 rescuers: one managing C-spine, three for the roll). Secure with straps starting at the torso, then extremities, then head.</li>
                    <li><strong>Scoop stretcher:</strong> Splits into two halves that can be placed under the patient with minimal movement. Best for patients found supine on the ground. Do not use if spinal injury is highly unstable (the split design provides less rigid immobilization than a backboard).</li>
                    <li><strong>Vacuum mattress:</strong> Current best practice for transport — conforms to the patient's body contours, provides even pressure distribution, reduces pressure points, and can be used for both extrication and transport. Requires a vacuum pump to mold and harden.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Evidence-Based Update:</strong> The traditional "all trauma patients get collared and boarded" approach is no longer standard. Current guidelines from the American College of Surgeons (ACS) and CDC emphasize <strong>selective spinal motion restriction</strong> — not every fall or MVC patient needs SMR. Use validated criteria (NEXUS Criteria, Canadian C-Spine Rule) to determine who actually needs spinal immobilization.
                </div>
            </div>`,
            flashcards: [
                {
                    question: "What are the general principles of splinting?",
                    answer: "Immobilize joint above and below the fracture, splint in position found, pad bony prominences, check PMS before and after, secure above and below the injury (not directly over it), elevate, and apply cold.",
                    category: "Splinting — Principles"
                },
                {
                    question: "What are the contraindications to traction splint application?",
                    answer: "Pelvic fracture, hip dislocation, knee injury, partial amputation with protruding bone ends, open fracture with bone ends protruding, or injury to the lower leg/ankle on the same side. Traction splints are for isolated midshaft femur fracture ONLY.",
                    category: "Splinting — Traction"
                },
                {
                    question: "What is the rule about reducing dislocations in the field?",
                    answer: "DO NOT reduce dislocations in the field — splint in the position found, pad generously, check PMS, and transport. The ONLY exception is complete absence of distal pulses with obvious dislocation, and only after obtaining medical direction.",
                    category: "Splinting — Dislocations"
                },
                {
                    question: "How do you apply a sling and swath?",
                    answer: "Position the arm as found, apply a sling to support the forearm, then apply a swath (band across chest and over the sling) to secure the arm against the torso. Used for clavicle fracture, shoulder dislocation, humeral fracture.",
                    category: "Splinting — Sling/Swath"
                },
                {
                    question: "What is buddy taping and when is it used?",
                    answer: "Taping an injured finger or toe to an adjacent uninjured digit (with padding between). Uses the uninjured digit as a natural splint. Check capillary refill and sensation before and after.",
                    category: "Splinting — Anatomic"
                },
                {
                    question: "What equipment is used for spinal motion restriction and how has the standard evolved?",
                    answer: "Cervical collar, KED vest (extrication), long backboard (extrication only — not transport), scoop stretcher, vacuum mattress (current best practice for transport). Current evidence: minimal movement, selective SMR, remove from backboard promptly.",
                    category: "Splinting — Spinal"
                },
                {
                    question: "What are the NEXUS criteria for determining the need for spinal immobilization?",
                    answer: "Immobilization may NOT be needed if: no midline C-spine tenderness, normal level of alertness, no intoxication, no neurological deficit, and no distracting injury. If any criterion is present, apply SMR.",
                    category: "Splinting — Spinal Criteria"
                },
                {
                    question: "What is the PMS assessment that must be documented before and after every splint?",
                    answer: "Pulse (distal to injury — radial for arm, dorsalis pedis/posterior tibial for leg), Motor (distal movement — wiggle fingers/toes, move wrist/ankle), Sensation (touch sensation on distal skin). Document both pre- and post-splint findings.",
                    category: "Splinting — PMS Check"
                }
            ],
            quiz: [
                {
                    q: "An EMT is applying a splint to a 34-year-old male with a closed midshaft forearm fracture. Which of the following is CORRECT splinting technique?",
                    options: [
                        "Apply the splint directly over the fracture site and secure it tightly to prevent any movement",
                        "Immobilize the joint above (elbow) and the joint below (wrist), pad bony prominences, check PMS before and after, splint in the position found",
                        "Straighten the forearm first to ensure proper alignment, then apply the splint",
                        "Only immobilize the fracture site itself — the joints above and below do not need to be immobilized"
                    ],
                    correct: 1,
                    explanation: "Correct splinting technique: immobilize the joint above AND below the fracture, pad bony prominences, check PMS before and after, splint in the position found, and never attempt to realign angulated fractures in the field."
                },
                {
                    q: "A 22-year-old male is thrown from a motorcycle. He has significant deformity and swelling of the right mid-thigh. The leg appears shortened and the foot is externally rotated. Distal pulses are present. Which of the following conditions would contraindicate the use of a traction splint?",
                    options: [
                        "Isolated midshaft femur fracture",
                        "Femur fracture with concurrent pelvic fracture",
                        "Femur fracture with deformity and shortening",
                        "Closed femur fracture without open wound"
                    ],
                    correct: 1,
                    explanation: "A traction splint is contraindicated with concurrent pelvic fracture, hip dislocation, knee injury, or open fracture with bone ends protruding. Pelvic fracture is an absolute contraindication because traction will displace the pelvic ring and worsen hemorrhage."
                },
                {
                    q: "A 45-year-old male fell from a ladder and landed on his shoulder. He presents with his right arm held slightly away from his body, unable to bring it to his side. The shoulder has a 'squared-off' appearance with a prominent acromion. You suspect an anterior shoulder dislocation. The distal pulse is present and strong. What is the appropriate management?",
                    options: [
                        "Attempt to reduce the shoulder by gentle traction — the sooner it is reduced, the better the outcome",
                        "Splint the arm in the position found using a sling and swath (do NOT attempt reduction), pad generously, reassess PMS, and transport",
                        "Apply a traction splint to the arm to reduce the dislocation",
                        "Place the arm in a dependent position and apply an ice pack — reduction will occur naturally with gravity"
                    ],
                    correct: 1,
                    explanation: "Do NOT reduce dislocations in the field. Splint in the position found (sling and swath is appropriate for a shoulder dislocation), pad generously, check PMS, and transport. Attempting reduction without X-ray and proper knowledge can fracture the humeral head or injure the axillary nerve/artery."
                },
                {
                    q: "[HARD] You are called to a park for a 16-year-old male who fell from a tree. He has a visibly deformed left mid-thigh with shortening and external rotation. There is no open wound. Distal pulses are present. He has no other injuries and is otherwise stable. There is no pelvic tenderness on palpation. Vital signs are normal. Which splint is indicated and what is the key contraindication you must rule out?",
                    options: [
                        "Rigid board splint — no contraindications to consider",
                        "Traction splint — you must rule out pelvic fracture, hip dislocation, knee injury, and open fracture before applying. This patient appears to have an isolated midshaft femur fracture, so a traction splint is appropriate",
                        "Vacuum splint — traction splints are never appropriate for femur fractures",
                        "No splint needed — the femur is stable enough to transport without immobilization"
                    ],
                    correct: 1,
                    explanation: "This presentation (deformed mid-thigh, shortening, external rotation, no pelvic tenderness, no knee injury, no open wound) suggests an isolated midshaft femur fracture — the indication for a traction splint. Always rule out contraindications (pelvic fracture, hip dislocation, knee injury, open fracture) before applying.",
                    explanation: "Isolated midshaft femur fracture with no contraindications (no pelvic/knee injury, no open fracture) is the correct indication for a traction splint. Rule out contraindications before applying."
                }
            ],
            critical: [
                {
                    id: "crit_10_4_1",
                    scenario: "You are treating a 28-year-old male who was struck by a car while cycling. He has an obvious deformity of his right mid-thigh with shortening and external rotation. His vital signs are stable (BP 118/76, HR 96, RR 18, SpO₂ 98%). There is no pelvic tenderness on compression. The right knee is non-tender. The foot is warm with a palpable dorsalis pedis pulse. He has normal sensation and toe movement. There is no open wound. You suspect an isolated midshaft femur fracture.",
                    question: "What type of splint should you apply and what is the critical step before and after application?",
                    options: [
                        {t: "Apply a rigid board splint to the entire leg — it is safer than a traction splint for all femur fractures", f: "Incorrect. While a board splint is safer in uncertain cases, this patient has an isolated midshaft femur fracture with no contraindications. A traction splint provides better stabilization, reduces pain, and controls hemorrhage better than a board splint."},
                        {t: "Apply a traction splint (Hare or Sager) for this isolated midshaft femur fracture. Before applying: check and document PMS (pulse, motor, sensation). After applying: reassess and document PMS again. If any new deficit appears, adjust traction and reassess", f: "Correct. Isolated midshaft femur fracture with no contraindications is the classic indication for traction splinting. Document PMS before and after — the single most important documentation step in splinting."}
                    ],
                    correct: 1,
                    explanation: "This patient meets ALL criteria for traction splint (isolated midshaft femur fracture, no pelvic/hip/knee injury, no open fracture). PMS before and after is mandatory. The femur can bleed significantly into the thigh (1,000-1,500 mL) — apply the traction splint to reduce fracture movement and control hemorrhage.",
                    kpi: "Traction splint candidate selection with PMS documentation"
                },
                {
                    id: "crit_10_4_2",
                    scenario: "You arrive at a high school football game where a 17-year-old player was tackled and landed awkwardly on his right shoulder. He is sitting on the sideline holding his right arm with his left hand. His right shoulder appears 'squared off' with a prominent acromion. He complains of severe pain and cannot move his arm. His arm is held in slight abduction. His distal pulse is strong, his fingers move normally, and he has normal sensation to touch. He wants you to 'pop it back in' because he has dislocated this shoulder twice before and knows what it feels like.",
                    question: "Despite the patient's request, what is the appropriate management?",
                    options: [
                        {t: "He has dislocated this shoulder before and knows his body — attempt gentle traction to reduce the dislocation per his request", f: "Incorrect. Even for recurrent dislocations, field reduction is not standard EMT practice. Without X-ray, you cannot confirm there is not an associated fracture (Hill-Sachs lesion, Bankart lesion, or greater tuberosity fracture)."},
                        {t: "Explain that you cannot reduce the dislocation in the field. Apply a sling and swath to splint the shoulder in the position found, pad generously (axilla padding), reassess PMS, apply ice, and transport for X-ray and physician-assisted reduction", f: "Correct. Do NOT reduce dislocations in the field. Splint in position found, pad, ice, and transport. Document PMS carefully — the receiving physician will need pre-reduction neurovascular status."}
                    ],
                    correct: 1,
                    explanation: "EMTs do not reduce dislocations in the field — regardless of whether it is a first-time or recurrent injury. The risk of associated fracture (Hill-Sachs, Bankart, greater tuberosity) cannot be ruled out without X-ray. Splint, sling/swath, ice, transport, and document PMS.",
                    kpi: "Field management of shoulder dislocation — contraindication to reduction"
                },
                {
                    id: "crit_10_4_3",
                    scenario: "You are called to a construction site for a 42-year-old male who fell approximately 12 feet onto a pile of lumber. He is supine on the ground. He complains of severe lower back pain and bilateral leg weakness. On exam, he has tenderness over the mid-thoracic and upper lumbar spine. His legs have decreased motor strength (3/5 bilaterally) and he reports numbness in both feet. His BP is 108/70, HR is 102. There is no obvious external trauma or bleeding. He was not wearing a hard hat and struck his head on a beam on the way down — he has a 3 cm scalp laceration.",
                    question: "Given the fall from height, spinal tenderness, bilateral neurological deficits, and head injury, what spinal motion restriction equipment should you use?",
                    options: [
                        {t: "Apply a cervical collar only — he is awake and can self-splint his spine by lying still", f: "Incorrect. The patient has focal neurological deficits (bilateral leg weakness, sensory loss), spinal tenderness, and a mechanism that warrants full spinal motion restriction. A collar alone is insufficient."},
                        {t: "This patient meets criteria for full spinal motion restriction (neurological deficit + spinal tenderness + high-energy mechanism). Apply a cervical collar, log roll onto a long backboard or vacuum mattress for extrication, secure with straps (torso first, then legs, then head), and transport to a trauma center. Minimize movement throughout", f: "Correct. The patient has a neurological deficit (bilateral leg weakness + numbness), midline spinal tenderness, and a high-energy mechanism with head injury. Full SMR is indicated. The backboard is for extrication — the patient should be removed from it as soon as practical at the hospital."}
                    ],
                    correct: 1,
                    explanation: "Fall from height + midline spinal tenderness + bilateral neurological deficits + head injury = full spinal motion restriction. Use coordinated log roll (4+ rescuers, one dedicated to C-spine), backboard/vacuum mattress for extrication, minimize movement, expedite transport to a trauma center with neurosurgical capability.",
                    kpi: "Spinal motion restriction decision-making with neurological deficits"
                }
            ]
        },
        {
            id: "c10s5",
            shortTitle: "10.5 Spinal Motion Restriction Skills",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Spinal Motion Restriction Skills</h3>

                <h4>From Full Immobilization to Motion Restriction — The Paradigm Shift</h4>
                <p>EMS has evolved from routine full spinal immobilization (backboard, collar, straps, head blocks for everyone with any MOI) to a more nuanced, evidence-based approach called <strong>spinal motion restriction (SMR)</strong>. The change was driven by research showing: backboards cause pain, anxiety, respiratory restriction (especially in elderly), and pressure ulcers; they do NOT improve neurologic outcome for most patients; and unnecessary immobilization leads to increased imaging and hospital resource use. Current national guidelines emphasize that backboards are <strong>extrication devices</strong>, not transport devices.</p>

                <div class="highlight-box" style="background:#e8f4f8; border-left-color:#17a2b8;">
                    <strong>NREMT Update:</strong> While NREMT still tests backboard skills, the current standard of care emphasizes assessment-based decision-making. You will be tested on correct application technique, but also on <strong>when</strong> to apply SMR — and when it is not needed. Know the criteria for both.
                </div>

                <h4>NEXUS Criteria — Clinical Clearance of the Spine</h4>
                <p>The <strong>NEXUS (National Emergency X-Radiography Utilization Study)</strong> criteria are the most widely used decision rules for determining if spinal imaging is needed. <strong>If ALL NEXUS criteria are negative, SMR is not needed.</strong></p>
                <table>
                    <thead>
                        <tr><th>Criterion</th><th>When It Is Satisfied (No SMR Needed)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>No posterior midline tenderness</strong></td><td>Patient denies pain on palpation of spinous processes from C1 to sacrum. Palpate each spinous process.</td></tr>
                        <tr><td><strong>No focal neurologic deficit</strong></td><td>Patient has normal sensation and motor function in all 4 extremities (hand grip, foot push/pull, sensation to light touch).</td></tr>
                        <tr><td><strong>Normal level of alertness</strong></td><td>GCS 15. Patient is awake, oriented, and conversational. No head injury causing confusion.</td></tr>
                        <tr><td><strong>No intoxication</strong></td><td>No evidence of alcohol, drugs, or medication that impairs sensorium.</td></tr>
                        <tr><td><strong>No distracting injury</strong></td><td>No painful injury that distracts the patient from reporting spine pain (femur fracture, large laceration, significant burn, etc.).</td></tr>
                    </tbody>
                </table>

                <h4>Indications for Spinal Motion Restriction</h4>
                <ul>
                    <li>Any positive NEXUS criterion (tenderness, neuro deficit, altered LOC, intoxication, or distracting injury)</li>
                    <li>High-risk mechanism: high-speed MVC (&gt;40 mph), fall &gt;3 m (10 ft), axial load (diving, fall landing on feet), rollover MVC, ejection from vehicle, death of another occupant in same MVC</li>
                    <li>Significant head/facial trauma (concern for C-spine injury from mechanism)</li>
                    <li>If patient cannot be reliably assessed (intubated, severely altered, unconscious, severe distracting injury) — err on the side of SMR</li>
                </ul>

                <h4>Cervical Collar — Proper Sizing and Application</h4>
                <p>The cervical collar alone immobilizes <strong>&lt;10%</strong> of cervical motion. It serves as a <strong>reminder</strong> to the patient not to move, and as a <strong>platform</strong> for head blocks. Proper sizing: measure from the patient\'s trapezius (shoulder) to the angle of the mandible. The chin must sit in the correct cup. The collar must not hyperextend or flex the neck. For the correct size: the chin must rest in the concave chin support, the tracheal opening must be midline, and the chest plate must sit flat on the sternum. Too large: chin falls forward (flexion). Too small: chin pushed back (extension). Apply during manual stabilization — do not release stabilization until collar, head blocks, and straps are all in place.</p>

                <h4>Log Roll — Technique</h4>
                <p><strong>Step 1:</strong> One rescuer maintains inline stabilization at the head (C-spine neutral). <strong>Step 2:</strong> Place backboard alongside patient. <strong>Step 3:</strong> Three rescuers on opposite side: one at chest/shoulders, one at hips/pelvis, one at knees/ankles. <strong>Step 4:</strong> Leader counts: On three — one, two, three — roll! Roll patient as a <strong>single unit</strong> (shoulders and hips together, no twisting). <strong>Step 5:</strong> Assess posterior spine (palpate entire spine). <strong>Step 6:</strong> Slide backboard under patient. <strong>Step 7:</strong> On three — roll back onto board. <strong>Step 8:</strong> Position patient midline, pad voids (occiput, lumbar curve, knees), secure torso first (chest then pelvis), then head/head blocks, then extremity straps. Reassess distal neuro status after securing.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>DO NOT:</strong> Log roll suspected spine-injured patients with only 2 rescuers. The minimum is 4 (1 head + 3 body) or more for large patients. Inadequate log roll causes more spinal motion than no log roll at all.
                </div>

                <h4>Rapid Extrication — When Seconds Count</h4>
                <p>Indications for rapid extrication from a vehicle: unsafe scene (fire, fuel leak, electrical hazard, suspected explosion, active shooter, building collapse), patient in cardiac arrest where CPR cannot be effectively performed in vehicle, or deteriorating patient needing immediate life-saving care (cannot wait for controlled extrication). Steps: rescuer #1 enters from opposite side (or passenger door), applies collar, supports C-spine from behind. Rescuer #2 at driver door, slides backboard behind patient under buttocks. On command, patient is rotated onto board and slid out in one controlled motion. Rescuers lift board and carry to waiting stretcher.</p>

                <h4>Standing Take-Down (Sitting Patient to Board)</h4>
                <p>For ambulatory or sitting patients needing SMR: rescuer approaches from behind, applies manual stabilization from rear. Second rescuer applies appropriately sized cervical collar. Place backboard behind patient. Three-count guided lowering to supine position on backboard. Pad voids. Secure torso, then head, then extremities. Reassess distal neurovascular status.</p>

                <h4>Special Populations</h4>
                <ul>
                    <li><strong>Elderly:</strong> Osteoporosis, degenerative changes, higher risk from low-energy mechanisms. Pad generously (sacrum, occiput). Minimize time on backboard — use vacuum mattress if available.</li>
                    <li><strong>Children (&lt;8 years):</strong> Larger occiput causes neck flexion on flat surface. Pad under shoulders/torso to achieve neutral alignment. Use pediatric-sized collar. Use pediatric board with head recess if available.</li>
                    <li><strong>Obese patients:</strong> May need multiple backboards side by side or wider extrication device. Pad appropriately. Extra rescuers for log roll.</li>
                    <li><strong>Pregnancy:</strong> Pad under right hip to tilt uterus leftward (avoid supine hypotension). Minimize time supine.</li>
                </ul>
            </div>`,
            flashcards: [
                { question: "What are the 5 NEXUS criteria for clearing the spine without SMR?", answer: "1) No posterior midline tenderness. 2) No focal neuro deficit. 3) Normal alertness (GCS 15). 4) No intoxication. 5) No distracting injury.", category: "NEXUS Criteria" },
                { question: "How much cervical motion does a cervical collar immobilize?", answer: "Less than 10%. It is a reminder to the patient not to move and a platform for head blocks.", category: "Cervical Collar" },
                { question: "How should a cervical collar be sized?", answer: "Measure from trapezius (shoulder) to angle of mandible. Chin must sit correctly. Neck must be neutral (not flexed or extended).", category: "Cervical Collar" },
                { question: "What is the minimum number of rescuers for a log roll?", answer: "4 (1 head + 3 body). More for large patients. Never fewer.", category: "Log Roll" },
                { question: "What are indications for rapid extrication?", answer: "Unsafe scene, cardiac arrest (can't perform CPR in vehicle), or deteriorating patient needing immediate life-saving care.", category: "Rapid Extrication" },
                { question: "What special spinal consideration for children under 8?", answer: "Larger occiput causes neck flexion on flat board. Pad under shoulders/torso. Use pediatric collar and board with head recess.", category: "Special Populations" },
                { question: "What special spinal consideration for pregnancy?", answer: "Pad under right hip (left uterine tilt) to avoid supine hypotension. Minimize time supine.", category: "Special Populations" },
                { question: "What is the correct order of securing a patient to a backboard?", answer: "Pad voids, torso first (chest then pelvis), then head/head blocks, then extremities. Reassess distal neuro status after.", category: "Securing Order" }
            ],
            quiz: [
                { q: "42-year-old restrained driver, rear-ended at low speed, no loss of consciousness, GCS 15, no spine tenderness, neurologically intact, not intoxicated. What is the appropriate spinal care?", options: ["Full SMR: collar, backboard, straps, head blocks", "No SMR needed. Patient meets all NEXUS criteria. Document and transport seated position of comfort", "C-collar only, no backboard", "SMR with vacuum mattress instead of backboard"], correct: 1 },
                { q: "Which of the following mechanisms ALONE justifies spinal motion restriction regardless of NEXUS findings?", options: ["Low-speed MVC (< 20 mph), rear-end, no vehicle damage", "Fall from standing height on level ground", "None. SMR decision must be based on assessment, not mechanism alone. High-risk mechanism should lower threshold, but does not mandate SMR if NEXUS negative", "Any fall above 1 m"], correct: 2 },
                { q: "[HARD] 78-year-old female, ground-level fall, complains of neck pain. GCS 15, no neuro deficit. NEXUS positive (midline tenderness). For transport, what is the BEST approach?", options: ["Full backboard immobilization — standard of care", "C-collar + secure to stretcher in position of comfort with limited movement instruction (motion restriction). Minimize backboard time. Pad generously", "No immobilization — elderly patients have higher complication rates from backboards", "Only manual stabilization for transport"], correct: 1 },
                { q: "Patient log rolled onto backboard. During transport, patient becomes progressively SOB. What should you do?", options: ["Continue transport. Patient is secured. Do not remove from board", "Loosen torso straps. If breathing does not improve, remove from backboard onto stretcher. Backboards restrict respiratory mechanics", "Place patient supine on backboard — this helps breathing", "Intubate patient"], correct: 1 }
            ],
            critical: [
                {
                    id: "crit_10_5_1",
                    scenario: "22-year-old unrestrained driver involved in high-speed T-bone MVC at estimated 50 mph. Driver's side door collapsed inward. Patient is awake, GCS 15, no spine tenderness, no neuro deficit, no intoxication, but has obvious deformed femur and large facial laceration. Patient is hemodynamically stable. Vehicle has fuel leaking from engine compartment.",
                    question: "What is the correct sequence of actions?",
                    options: [
                        {t: "Perform rapid extrication due to fuel leak. Apply c-collar during extrication and backboard patient. Patient has distracting injury (femur) so NEXUS cannot be reliably applied", f: "Correct Fuel leak = unsafe scene indication for rapid extrication. Femur fracture is distracting injury — NEXUS unreliable. C-collar and motion restriction during extrication."},
                        {t: "Patient meets NEXUS criteria (GCS 15, no tenderness, no neuro deficit, no intoxication). No SMR needed. Extricate rapidly for fuel leak without spinal precautions", f: "Incorrect Femur fracture is a distracting injury (NEXUS positive). Patient needs SMR during rapid extrication due to unsafe scene."}
                    ],
                    correct: 0,
                    explanation: "Fuel leak = unsafe scene ? rapid extrication indicated. Femur fracture = distracting injury ? NEXUS positive ? SMR indicated. C-collar, backboard, manual stabilization during extrication. Address femur fracture after extrication (splint). Monitor for hemorrhagic shock. Rapid transport.",
                    kpi: "Recognizes unsafe scene requiring rapid extrication and identifies distracting injury invalidating NEXUS clearance"
                },
                {
                    id: "crit_10_5_2",
                    scenario: "26-year-old male, awake, talking, no spine pain, no focal deficit, no drugs/alcohol after fall from 4 m (13 ft) landing on feet. Complains of bilateral heel pain. You suspect calcaneal fractures. GCS 15.",
                    question: "Does this patient need spinal motion restriction?",
                    options: [
                        {t: "No SMR. NEXUS negative — no tenderness, no deficit, GCS 15, no intoxication. Distracting injury rule is about pain distracting from spine pain, but even so, mechanism alone does not mandate SMR when NEXUS is clearly negative", f: "Incorrect Fall from >3 m is high-risk mechanism warranting caution. However, NEXUS is designed for clinical decision-making. Current guidelines allow NEXUS-based clearance if all criteria negative, even with high mechanism."},
                        {t: "SMR is indicated. High-risk mechanism (fall >3 m) plus potentially distracting injury (bilateral heel pain). While NEXUS may be negative, the combination of high-risk mechanism and multi-system injury pattern warrants SMR until imaging clears the spine", f: "Correct Fall >3 m is high-risk mechanism. Bilateral calcaneal fractures are significant distracting injuries. Axial-load mechanism (feet-first landing) is associated with lumbar spine fractures (L1 burst fractures). NEXUS may be unreliable in this context. SMR is appropriate."}
                    ],
                    correct: 1,
                    explanation: "Fall >3 m landing on feet = axial load mechanism. Axial loading causes calcaneus fractures AND lumbar spine burst fractures (L1 is most common). The heel pain may distract from subtle back pain. NEXUS in pure axial-load mechanisms has been questioned — safest approach is SMR with vacuum mattress (preserves lumbar lordosis better than rigid backboard). Full spinal assessment in ED including lumbar spine imaging.",
                    kpi: "Recognizes axial-load mechanism as high-risk for thoracolumbar spine injury and applies SMR despite clinically negative NEXUS"
                },
                {
                    id: "crit_10_5_3",
                    scenario: "5-year-old child restrained in back seat, rear-ended at moderate speed. Child is crying, GCS 15, no obvious injury, no spine tenderness on palpation. Sitting in car seat which remained intact. Parents ask if child needs to be taken in on a backboard.",
                    question: "What is the best approach?",
                    options: [
                        {t: "Remove child from car seat, apply c-collar, full backboard immobilization. Child is small and cannot reliably report symptoms", f: "Incorrect Removing from car seat that remained intact increases risk. Car seats provide excellent spinal support. NEXUS negative child with minor mechanism does not warrant full SMR."},
                        {t: "No SMR needed. Child meets NEXUS criteria. Leave child in car seat (car seat provides motion restriction). Secure car seat to stretcher for transport. Explain to parents why backboard is not indicated", f: "Correct Car seat provides excellent spinal support. Removing child increases motion risk. NEXUS-negative low-risk child. Transport in car seat secured to stretcher. Family education is key."}
                    ],
                    correct: 1,
                    explanation: "Pediatric SMR: NEXUS criteria apply to children. Low-risk mechanism, no tenderness, GCS 15, no neuro deficit. Car seats provide excellent spinal support. Removing child from car seat increases risk of motion. Secure car seat to stretcher with straps. Educate parents. If NEXUS-positive or higher mechanism: use pediatric backboard with head recess or pad under shoulders for neutral alignment.",
                    kpi: "Applies pediatric-specific SMR decision-making, leaves child in car seat, and educates family appropriately"
                }
            ]
        },
        {
            id: "c10s6",
            shortTitle: "10.6 Patient Movement & Lifting",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Patient Movement & Lifting</h3>

                <h4>Body Mechanics for EMTs — Protecting Your Most Important Tool</h4>
                <p>Musculoskeletal injuries are the <strong>most common occupational injury</strong> among EMS providers. Lifting, moving, and carrying patients — often in awkward positions, confined spaces, or with heavy patients — puts immense strain on the spine. Proper body mechanics are not optional; they are essential for a long, injury-free career. The principles are simple but must be practiced until automatic:</p>
                <ul>
                    <li><strong>Lift with your legs, not your back:</strong> The powerful quadriceps and gluteal muscles are designed for lifting. The lower back muscles are not. Let your legs do the work.</li>
                    <li><strong>Keep your back straight (neutral spine):</strong> Maintain the natural S-curve of your spine. Do not hunch, arch, or twist. A straight back distributes the load evenly.</li>
                    <li><strong>Feet shoulder-width apart:</strong> A wide base of support provides stability. Being too narrow can cause loss of balance.</li>
                    <li><strong>Keep the load close to your body:</strong> The farther the load extends from your center of gravity, the greater the torque on your spine. Holding 75 kg at arms length creates 10x the spinal load of holding it close.</li>
                    <li><strong>Pivot, do not twist:</strong> When turning with a load, move your feet — do not twist your torso. Twisting while lifting is one of the fastest ways to herniate a disc.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning:</strong> Over 50% of EMS providers will experience a career-ending back injury if they do not practice proper lifting mechanics. If a patient is too heavy to lift safely with available resources, <strong>wait for additional help</strong> — do not attempt to lift beyond your physical capacity. No call is worth a career-ending injury.
                </div>

                <h4>Power Lift (Squat Lift)</h4>
                <p>The <strong>power lift</strong> is the standard lifting technique for stretchers, backboards, and equipment. It maximizes use of leg muscles and minimizes spinal stress: stand feet shoulder-width apart, one foot slightly ahead; squat by bending at hips and knees (NOT at waist); keep back straight; grip with palms facing up (<strong>power grip</strong>); bring load close to body; lift by extending hips and legs; breathe out during the lift (exhale on exertion to prevent Valsalva).</p>

                <h4>Power Grip</h4>
                <p>The <strong>power grip</strong> uses the <strong>entire hand</strong> rather than just fingers. Palms face up (supinated), fingers and thumb wrap around the handle or frame. Wrists stay straight (neutral alignment). This provides significantly more grip strength than a pinch grip and ensures better control of the load.</p>

                <h4>Team Lifting Communication</h4>
                <ul>
                    <li><strong>Designate a leader</strong> — typically the EMT at the head of the stretcher.</li>
                    <li><strong>Use a countdown:</strong> On three — one, two, three — <strong>lift</strong>! Everyone lifts on lift, not three.</li>
                    <li><strong>Confirm readiness</strong> before the count — each rescuer responds ready.</li>
                    <li><strong>Lower together</strong> using the same countdown pattern.</li>
                    <li><strong>Verbalize the plan</strong> — destination, obstacles, who calls commands.</li>
                </ul>

                <h4>Equipment for Lifting and Moving</h4>
                <table>
                    <thead>
                        <tr><th>Device</th><th>Best Use</th><th>Special Considerations</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Wheeled Stretcher</strong></td><td>Primary transport device</td><td>Load capacity 350-650 lb. Lock wheels before transfer. Secure with straps.</td></tr>
                        <tr><td><strong>Scoop Stretcher</strong></td><td>Patients on ground, splits to slide under</td><td>Good for suspected spinal injury. Lacks lateral stability — secure to backboard.</td></tr>
                        <tr><td><strong>Basket Stretcher (Stokes)</strong></td><td>Technical rescue, rough terrain</td><td>Use with patient harness for vertical lifts. Foot end first in steep terrain.</td></tr>
                        <tr><td><strong>Reeves Sleeve</strong></td><td>Confined spaces, narrow hallways</td><td>Full-body wrap. Multiple handles. Can be dragged in emergency.</td></tr>
                        <tr><td><strong>Stair Chair</strong></td><td>Moving up/down stairs</td><td>Patient must sit upright. Secure all straps. Never bariatric with only 2 rescuers.</td></tr>
                        <tr><td><strong>Long Backboard</strong></td><td>Spinal immobilization, extrication</td><td>Now used less for transport (pressure points, respiratory restriction). Pad generously.</td></tr>
                    </tbody>
                </table>

                <h4>Stair Chair — Proper Technique</h4>
                <p>Moving patients up or down stairs is one of the most physically demanding and hazardous EMS operations. Going <strong>DOWN</strong> stairs: patient goes <strong>feet first</strong>, the rescuer at the foot bears the majority of the weight, the rescuer at the head controls the descent, both keep backs straight and use legs. Going <strong>UP</strong> stairs: patient goes <strong>head first</strong>, the head rescuer bears more weight. Coordinate every step: Next step — ready, step. Never attempt bariatric stair transport with only two rescuers.</p>

                <h4>Helicopter / Air Medical Landing Zone</h4>
                <table>
                    <thead>
                        <tr><th>Requirement</th><th>Specification</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Minimum LZ size</td><td>100 ft x 100 ft (30 m x 30 m), clear of trees, wires, poles, debris</td></tr>
                        <tr><td>Surface</td><td>Firm, level, dry. Avoid loose gravel (rotor wash creates blinding dust). Slopes &lt; 5-10°</td></tr>
                        <tr><td>Marking</td><td>Weighted cones with lights at all 4 corners. Weights prevent rotor wash from blowing them.</td></tr>
                        <tr><td>Approach direction</td><td>Approaches and departs INTO the wind. Communicate wind direction to pilot.</td></tr>
                        <tr><td>Night operations</td><td>Mark LZ with lights. Do NOT point flashlights at helicopter. Turn off vehicle headlights if directed.</td></tr>
                        <tr><td>Ground personnel</td><td>Stay clear during landing/takeoff. Approach only when signaled. Approach from FRONT at 45° toward pilot.</td></tr>
                        <tr><td>Sloped terrain</td><td>Approach from downhill side. Pilot can see you better from uphill side.</td></tr>
                        <tr><td>Patient handoff</td><td>Bring patient only when signaled. Never walk under tail boom. Follow pilot directions.</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Helicopter Safety:</strong> <strong>NEVER approach a helicopter from behind.</strong> The tail rotor is nearly invisible when spinning, especially at night. It has no guard. It will kill you. Always approach from the front at a 45° angle toward the pilot, making eye contact. Crouch low when approaching. Do not carry anything above your head. Secure all loose equipment.
                </div>

                <h4>Bariatric Patient Movement</h4>
                <p>Additional rescuers (4+), bariatric-rated equipment (wider stretchers, higher capacity cots up to 800+ lb, reinforced backboards), mechanical lift equipment when available, careful assessment of environment, and recognition of personal lifting limits. If the patient cannot be safely moved, call the fire department for additional personnel. Never attempt alone.</p>

                <h4>Ongoing Lift Assessment</h4>
                <p>Before any lift, ask yourself: Can I safely lift this patient with available help? Am I fatigued? Is the environment safe (floor condition, space, terrain)? If the answer to any is no — <strong>call for additional resources</strong>. It is better to wait 5 minutes for help than to spend 6 months recovering from a herniated disc.</p>
            </div>`,
            flashcards: [
                { question: "What are the key principles of proper body mechanics?", answer: "1) Lift with legs, not back. 2) Back straight (neutral spine). 3) Feet shoulder-width apart. 4) Load close to body. 5) Pivot, don't twist.", category: "Body Mechanics" },
                { question: "What is the power lift (squat lift) technique?", answer: "Squat at hips/knees (not waist), back straight, palms-up power grip, load close, extend legs to lift, exhale on exertion.", category: "Lifting Technique" },
                { question: "What is the power grip and why use it?", answer: "Palms up, entire hand around object. Provides maximum grip strength and control vs finger-only grip.", category: "Power Grip" },
                { question: "How should a stair chair carry be performed going down stairs?", answer: "Patient feet first. Foot rescuer bears most weight. Head rescuer controls descent. Both keep backs straight, use legs. Coordinate each step.", category: "Stair Chair" },
                { question: "What are the minimum landing zone requirements for a helicopter?", answer: "100x100 ft minimum, firm, level, clear of debris. Weighted lighted cones at corners. Approach from front at 45°, NEVER from behind.", category: "Helicopter LZ" },
                { question: "What is the difference between predetermined and direct carry?", answer: "Predetermined: stretcher pre-raised, less bending. Direct: stretcher at ground level, full squat lift. Predetermined preferred when possible.", category: "Carry Techniques" },
                { question: "What special considerations for bariatric patient movement?", answer: "4+ rescuers, bariatric-rated equipment, mechanical lifts, careful environment assessment, recognize personal limits. Call fire department early.", category: "Bariatric Movement" },
                { question: "What is correct team lifting communication?", answer: "Designate leader. Confirm readiness. Countdown: On three — one, two, three — lift! Lift on lift. Same pattern for lowering.", category: "Team Communication" }
            ],
            quiz: [
                { q: "An EMT lifts a backboard bending at the waist, legs straight, palm-down finger grip. Which injury prevention principles is he violating?", options: ["All three: not using legs, not straight back, not power grip", "Only the power grip principle", "Bending at waist is acceptable if back is straight", "None this is proper technique"], correct: 0 },
                { q: "Transporting 90 kg patient down three flights of narrow stairs in stair chair. Which statement is MOST accurate?", options: ["Going down, patient head first so head rescuer can see", "Going down, patient feet first. Foot rescuer bears most weight. Both use leg-driven lifting", "Both rescuers face same direction toward patient", "Only two rescuers needed regardless of patient weight"], correct: 1 },
                { q: "[HARD] Night helicopter LZ. Wind shifts 180 degrees from original direction. Pilot needs to approach into wind. What should the EMT do?", options: ["Leave cones, pilot can see LZ regardless of wind", "Relocate cones if needed, radio current wind direction. Step clear of LZ during landing", "Run to center of LZ with flashlight to guide pilot", "Turn on all vehicle headlights pointed at LZ"], correct: 1 },
                { q: "A bariatric patient weighing 180 kg needs supine transport down narrow stairs. Patient cannot sit upright. What is the BEST approach?", options: ["Stair chair with 4 rescuers", "Reeves sleeve or bariatric dragging device with 4-6 rescuers. Stair chair not appropriate for supine patient. Call fire department", "Patient can walk downstairs with assistance", "Two rescuers can manage with reinforced backboard"], correct: 1 }
            ],
            critical: [
                {
                    id: "crit_10_6_1",
                    scenario: "Third-floor walk-up. 68-year-old 100 kg female with CHF exacerbation. SpO2 89% on room air. Cannot walk due to dyspnea. Narrow stairs with turn. You and your smaller partner are both fatigued from carrying equipment up. Partner says just us in the stair chair, it is only three floors.",
                    question: "What is the MOST appropriate plan?",
                    options: [
                        {t: "Proceed with stair chair. Patient needs rapid transport for CHF. Two rescuers can handle 100 kg with proper body mechanics", f: "Incorrect Two fatigued rescuers with 100 kg patient on narrow stairs with turn is high-risk. Fatigue significantly increases injury risk."},
                        {t: "Call for additional manpower (fire department). While waiting, provide O2, position of comfort, monitor. If patient deteriorates to life-threatening, use dragging device for emergency evacuation", f: "Correct Provider fatigue, patient weight (100 kg), narrow stairs with turn, smaller partner. Factors arguing for extra help. Patient condition serious but not immediately life-threatening. Call fire department for lift assistance."}
                    ],
                    correct: 1,
                    explanation: "Factors for extra help: provider fatigue from stair climb, patient weight (100 kg), narrow stairs with turn, smaller partner. CHF with hypoxia is time-sensitive but not immediately life-threatening (alert, O2 responsive). Calling fire department for lift assistance is standard practice. Always err on side of calling for help when unsure about lift safety.",
                    kpi: "Recognizes when additional lifting resources are needed based on patient weight, environmental constraints, and provider fatigue"
                },
                {
                    id: "crit_10_6_2",
                    scenario: "Night LZ established for helicopter trauma transport. 120x120 ft field with gentle 8-10° slope downward to south. Wind from north at 10 mph. Power line runs along one fence line.",
                    question: "How should the LZ be set up and approach made?",
                    options: [
                        {t: "Mark all four corners with cones. Helicopter approaches from north INTO wind. Note power line hazard. After landing, approach from front at 45°, NEVER from behind", f: "Correct Approach into wind (north). LZ adequate size. Power line is significant hazard. After landing: approach from front 45°, never behind tail rotor."},
                        {t: "Mark only two corners facing wind. Helicopters can land any direction. Power line at edge is not a concern. Approach from whichever side is closest", f: "Incorrect Must land into wind. Mark all four corners. Power lines significant hazard especially at night. Never approach from behind."}
                    ],
                    correct: 0,
                    explanation: "LZ safety rules: minimum 100x100 ft, approach INTO wind, power lines major hazard mark or reposition, mark all four corners with weighted lighted cones, after landing wait for pilot signal and approach from front at 45° making eye contact, never walk behind tail boom, secure all loose equipment.",
                    kpi: "Correctly establishes night helicopter LZ with wind direction, marking, hazard awareness, and approach safety"
                },
                {
                    id: "crit_10_6_3",
                    scenario: "Third floor. 72-year-old male fell, no trauma, stable vitals, ~75 kg. Building has elevator. Halfway to elevator with stair chair, your partner feels sharp back pain and cannot continue lifting.",
                    question: "What should the EMT do?",
                    options: [
                        {t: "Continue alone carefully lower stair chair and drag patient to elevator. Partner can rest and recover", f: "Incorrect Continuing alone puts both you and patient at risk. Cannot safely manage 100+ kg patient+chair alone in narrow hallway."},
                        {t: "Stop immediately. Lower stair chair to stabilize it. Assess partner injury. Call dispatch for additional resources. Reassure patient help is coming. Wait for additional personnel", f: "Correct When lifting partner becomes injured mid-transport: stop unsafe lift, lower and stabilize chair, assess partner, call for resources, reassure patient, wait for additional crew."}
                    ],
                    correct: 1,
                    explanation: "Partner injuries during lifts are a known risk in EMS. Correct response: 1) Stop the unsafe lift immediately lower and stabilize stair chair. 2) Assess partner back injury. 3) Call dispatch for additional resources. 4) Reassure patient. 5) Wait for additional crew. Do NOT attempt to complete lift alone. Document the partner injury per service protocol.",
                    kpi: "Responds appropriately to partner lifting injury by stabilizing patient, calling for resources, and avoiding further injury"
                }
            ]
        },
        {
            id: "c10s7",
            shortTitle: "10.7 ECG Acquisition — 12-Lead",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> ECG Acquisition — 12-Lead</h3>

                <h4>Why 12-Lead ECG Matters for EMTs</h4>
                <p>Acquiring a <strong>diagnostic-quality 12-lead ECG</strong> is a foundational EMT skill. While interpretation is typically a paramedic/physician responsibility, the EMT who obtains a clean, artifact-free tracing enables accurate STEMI recognition, timely cath lab activation, and better patient outcomes. A poor-quality ECG delays care.</p>

                <div class="highlight-box" style="background:#e8f4f8; border-left-color:#17a2b8;">
                    <strong>NREMT Tip:</strong> You will not be asked to interpret 12-lead ECGs at the EMT level. You WILL be expected to know: correct lead placement, skin preparation, artifact reduction, and when to obtain a 12-lead (chest pain, SOB, syncope, suspected ACS).
                </div>

                <h4>12-Lead Overview — What the Leads See</h4>
                <p>The 12-lead provides 12 different electrical views of the heart from 10 electrodes (4 limb + 6 precordial):</p>
                <ul>
                    <li><strong>Limb leads (I, II, III):</strong> Frontal plane — inferior (II, III, aVF), left lateral (I, aVL)</li>
                    <li><strong>Augmented leads (aVR, aVL, aVF):</strong> Derived from limb electrodes</li>
                    <li><strong>Precordial leads (V1-V6):</strong> Horizontal plane — septal (V1-V2), anterior (V3-V4), lateral (V5-V6)</li>
                </ul>

                <h4>Lead Placement — Anatomical Landmarks (Critical)</h4>
                <table>
                    <thead>
                        <tr><th>Lead</th><th>Placement</th><th>Bony/Landmark Reference</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>RA (Right Arm)</strong></td><td>Right arm, anywhere on arm</td><td>Proximal to wrist or shoulder. Avoid muscle mass.</td></tr>
                        <tr><td><strong>LA (Left Arm)</strong></td><td>Left arm, anywhere on arm</td><td>Same as RA, contralateral side.</td></tr>
                        <tr><td><strong>RL (Right Leg)</strong></td><td>Right leg, anywhere on leg</td><td>Ground/reference electrode.</td></tr>
                        <tr><td><strong>LL (Left Leg)</strong></td><td>Left leg, anywhere on leg</td><td>Same as RL, contralateral side.</td></tr>
                        <tr><td><strong>V1</strong></td><td>4th intercostal space, RIGHT of sternum</td><td>Angle of Louis (sternal angle) marks 2nd rib; count down 2 spaces.</td></tr>
                        <tr><td><strong>V2</strong></td><td>4th intercostal space, LEFT of sternum</td><td>Mirror of V1, left side.</td></tr>
                        <tr><td><strong>V3</strong></td><td>Midway between V2 and V4</td><td>On the line between V2 and V4 — NOT on a rib.</td></tr>
                        <tr><td><strong>V4</strong></td><td>5th intercostal space, midclavicular line</td><td>Midclavicular line (imaginary vertical line through midpoint of clavicle).</td></tr>
                        <tr><td><strong>V5</strong></td><td>Anterior axillary line, same horizontal level as V4</td><td>Same horizontal plane as V4 — follow the intercostal space laterally.</td></tr>
                        <tr><td><strong>V6</strong></td><td>Midaxillary line, same horizontal level as V4 and V5</td><td>Same plane — continue lateral to midaxillary line.</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#ffc107;">
                    <strong>Critically Common Error — V1 and V2:</strong> The #1 most common 12-lead placement error is placing V1 and V2 <strong>too high</strong> (in the 2nd or 3rd intercostal space instead of the 4th). Use the <strong>Angle of Louis</strong> (sternal angle at 2nd rib) — feel it at the top of the sternum where the manubrium meets the body. The 2nd rib is there. Count down <strong>two more</strong> intercostal spaces. V1 goes in the 4th space, right of sternum.
                </div>

                <h4>Skin Preparation — The Key to Diagnostic Quality</h4>
                <p>Poor skin prep is the #1 cause of artifact and tracing that cannot be interpreted by the receiving physician. Steps: shave hair if it prevents electrode adhesion; clean skin with alcohol or abrasive prep pad to remove oils and dead skin; allow to dry completely (alcohol is conductive when wet); apply electrode with gentle pressure and rub firmly for 10 seconds to ensure gel contact and adhesion. Good skin prep is the single most important factor in obtaining a diagnostic-quality 12-lead.</p>

                <h4>Artifact — Types and Troubleshooting</h4>
                <table>
                    <thead>
                        <tr><th>Artifact Type</th><th>Appearance</th><th>Common Cause</th><th>Fix</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Wandering baseline</strong></td><td>Baseline drifts up/down slowly</td><td>Poor electrode adhesion, patient movement, respiratory variation</td><td>Re-prep skin, reapply electrodes, reduce movement</td></tr>
                        <tr><td><strong>AC interference (60Hz)</strong></td><td>Fine regular oscillations (60/sec)</td><td>Electrical interference from nearby equipment, poor grounding</td><td>Move away from electrical devices, check electrode contact, use notch filter</td></tr>
                        <tr><td><strong>Muscle tremor / somatic tremor</strong></td><td>Irregular, coarse, chaotic pattern</td><td>Patient shivering, tense, Parkinsonian tremor, cold</td><td>Warm patient, reassure, have patient relax arms, place electrodes away from major muscles</td></tr>
                        <tr><td><strong>Lead off / Lead fail</strong></td><td>Flatline or straight line on one lead</td><td>Electrode fell off or lead wire disconnected</td><td>Check connections, reapply electrode</td></tr>
                    </tbody>
                </table>

                <h4>Right-Sided ECG and Posterior Leads</h4>
                <p><strong>Right-sided ECG (V1R-V6R):</strong> Mirror placement of precordial leads onto right chest (V1R 4th ICS left of sternum, V2R 4th ICS right of sternum, V3R-R, V4R midclavicular 5th ICS right, V5R/V6R right anterior/midaxillary). Indicated for <strong>inferior STEMI</strong> (ST elevation in II, III, aVF) to evaluate for <strong>right ventricular involvement</strong>. <strong>Posterior leads (V7-V9):</strong> V7 posterior axillary line, V8 mid-scapular line, V9 paraspinal. Indicated when anterior leads show <strong>ST depression</strong> (reciprocal change suggesting posterior infarction). Check local protocol — these may be paramedic-level skills.</p>

                <h4>EMT Scope — When to Obtain a 12-Lead</h4>
                <ul>
                    <li>Chest pain or discomfort (pressure, squeezing, burning)</li>
                    <li>Shortness of breath without clear respiratory cause</li>
                    <li>Suspected ACS (autonomic symptoms: diaphoresis, nausea, pallor)</li>
                    <li>Syncope or near-syncope in older adults / cardiac risk profile</li>
                    <li>Upper abdominal pain (may be cardiac in origin — inferior wall)</li>
                    <li>Any patient with cardiac history and unexplained symptoms</li>
                    <li>Per local protocol or online medical direction request</li>
                </ul>
                <p><strong>Goal time from patient contact to 12-lead acquisition:</strong> &le;10 minutes per AHA guidelines (door-to-ECG metric when in ED, but same urgency applies prehospital).</p>
            </div>`,
            flashcards: [
                { question: "Where is V1 placed?", answer: "4th intercostal space, RIGHT of sternum. Find Angle of Louis (2nd rib), count down 2 spaces.", category: "Lead Placement" },
                { question: "Where is V4 placed?", answer: "5th intercostal space, midclavicular line. Same horizontal level as V5 and V6.", category: "Lead Placement" },
                { question: "What are the 4 limb leads and their positions?", answer: "RA (right arm), LA (left arm), RL (right leg/ground), LL (left leg).", category: "Limb Leads" },
                { question: "What is the #1 most common 12-lead placement error?", answer: "Placing V1 and V2 too high (2nd or 3rd ICS instead of 4th ICS).", category: "Common Errors" },
                { question: "What is the most important step for diagnostic-quality ECG?", answer: "Proper skin preparation — shave hair, clean with alcohol, dry completely, rub electrode firmly for 10 seconds.", category: "Skin Preparation" },
                { question: "What are the 4 types of artifact and their causes?", answer: "1) Wandering baseline (poor adhesion/movement). 2) AC 60Hz interference (electrical devices). 3) Muscle tremor (shivering/Parkinson's). 4) Lead off (electrode detached).", category: "Artifact" },
                { question: "When is a right-sided (V4R) ECG indicated?", answer: "Inferior STEMI (ST elevation II/III/aVF) to evaluate for right ventricular involvement.", category: "Right-Sided ECG" },
                { question: "When are posterior leads (V7-V9) indicated?", answer: "When anterior leads show ST depression (possible posterior MI — reciprocal change).", category: "Posterior Leads" }
            ],
            quiz: [
                { q: "EMT obtains 12-lead. Tracing shows wandering baseline on multiple leads. What is the BEST first step?", options: ["Replace monitor battery", "Re-prepare skin, reapply electrodes with firm adhesion. Also reduce patient movement", "Change lead select filter to diagnostic mode", "Reposition patient flat"], correct: 1 },
                { q: "Patient V1 placed at left 2nd intercostal space, V2 at left 4th intercostal space. What error occurred?", options: ["None. V1 is correctly in 2nd ICS left", "V1 placed at 2nd ICS instead of 4th ICS right of sternum. V2 placement correct. Also V1 must be right of sternum", "Both V1 and V2 must be in 5th ICS", "V1 and V2 are both correct. Only precordial leads need intercostal counting"], correct: 1 },
                { q: "[HARD] 55-year-old with crushing substernal chest pain and diaphoresis. Inferior leads II, III, aVF show ST elevation. V3-V4 show ST depression. What additional leads should be considered?", options: ["No additional leads needed — standard 12-lead sufficient", "Right-sided V4R for RV involvement (due to inferior STEMI). Posterior V7-V9 for posterior involvement (due to ST depression in V3-V4)", "Only V7 is needed. V8-V9 are not used prehospital", "Posterior leads only. V4R is not indicated"], correct: 1 },
                { q: "AHA guideline for 12-lead acquisition time in suspected STEMI?", options: ["Within 30 minutes of patient contact", "Within 10 minutes of patient contact (door-to-ECG or first medical contact-to-ECG)", "Within 5 minutes only if chest pain present", "No specific time goal exists for prehospital acquisition"], correct: 1 }
            ],
            critical: [
                {
                    id: "crit_10_7_1",
                    scenario: "58-year-old male with chest pressure radiating to jaw, diaphoretic, nauseated. You attempt 12-lead. Patient is shivering (cold ambulance), has visible tremors, and keeps lifting his arms to talk. Tracing shows coarse irregular artifact on all leads making analysis impossible.",
                    question: "What is the BEST sequence of actions?",
                    options: [
                        {t: "Tell patient to stop moving. Attempt to acquire tracing with filter on. Send to receiving hospital despite artifact", f: "Incorrect Telling patient to stop moving is ineffective for shivering/tremor. Tracing nondiagnostic. Filter may hide key findings."},
                        {t: "Warm patient (raise heat, blanket). Have patient relax arms at sides. Re-prep skin firmly. Ensure arms are supported (pillows). If shivering persists, ask patient to take deep breaths. Reattempt tracing explaining why quality matters. If still suboptimal, note artifact on strip and send with disclaimer", f: "Correct Systematic troubleshooting: warm patient, support arms, recheck prep, deep breaths. If cannot eliminate artifact, document presence and type on tracing. Better suboptimal tracing than none."}
                    ],
                    correct: 1,
                    explanation: "Key steps: 1) Address cause of artifact (cold, muscle tension). 2) Re-prep skin. 3) Support arms. 4) Explain importance to patient for cooperation. 5) If artifact persists, document and note on tracing. A suboptimal tracing with artifact noted is better than no tracing. Shivering tremor vs Parkinsonian tremor vs somatic tremor all have different troubleshooting approaches.",
                    kpi: "Systematically troubleshoots ECG artifact by addressing cause, re-prepping skin, supporting patient, documenting limitations"
                },
                {
                    id: "crit_10_7_2",
                    scenario: "72-year-old female with syncope, no chest pain. Normal sinus rhythm by monitor. Vital signs stable. You decide to obtain 12-lead per syncope protocol. On exam: bilateral mastectomy with breast prostheses. V3 and V4 landmarks are unclear.",
                    question: "How should the EMT adjust lead placement?",
                    options: [
                        {t: "Place V3 and V4 where the inframammary fold would be. Use scar lines as anatomic guides. Document alternative placement on the tracing. Notify receiving hospital", f: "Correct In patients with mastectomy, use inframammary fold, scar lines, and remaining tissue to approximate standard interspaces. Do NOT place electrodes on prostheses (distorts tracing). Document that placement was modified."},
                        {t: "Skip precordial leads. Only limb leads can be accurately placed. Receiving hospital can obtain full 12-lead", f: "Incorrect Modified placement with documentation is standard. A 12-lead with documented modified placement is valuable and preferred."}
                    ],
                    correct: 0,
                    explanation: "Mastectomy: use remaining anatomy, scar line, inframammary fold to estimate. Avoid prostheses (they distort the tracing because the electrode is not over tissue). Document all placement modifications on the ECG strip and report to hospital. In pectus excavatum, barrel chest, or chest wall deformities — place leads on best available landmarks and document.",
                    kpi: "Adapts ECG lead placement for post-mastectomy anatomy and documents modifications appropriately"
                },
                {
                    id: "crit_10_7_3",
                    scenario: "Dispatch: 65-year-old male with chest pain. En route, partner suggests you should get 12-lead on scene within 10 minutes of patient contact per AHA guidelines. On arrival: patient sitting up, talking, in mild distress. He asks you to wait for ECG. His wife hands you a list of medications. The home is cluttered.",
                    question: "What is the MOST efficient approach to meet the 10-minute ECG goal?",
                    options: [
                        {t: "Do not start ECG until you complete history and physical exam to ensure patient stability", f: "Incorrect While history/exam is essential, it does not need to delay ECG. Best practice integrates both."},
                        {t: "Ask partner to set up monitor and prepare leads while you obtain history. Expose chest efficiently maintaining privacy. Prep skin as you talk to patient. Goal: 12-lead acquired within 10 min of patient contact. Defer detailed history questions that are not immediately relevant", f: "Correct Parallel processing: partner preps gear, EMT takes focused history simultaneously, lead placement during secondary assessment. 10-min goal is achievable with teamwork."}
                    ],
                    correct: 1,
                    explanation: "Meet 10-min goal by parallel processing: partner preps monitor, focused history and lead placement simultaneous. Defer non-urgent history until after tracing. Bundle questions with actions. If environment is cold/unsafe for ECG (patient on metal surface), move to stretcher first. Document time of acquisition.",
                    kpi: "Obtains 12-lead ECG within 10 minutes of patient contact using parallel processing and team coordination"
                }
            ]
        },
        {
            id: "c10s8",
            shortTitle: "10.8 Medication Administration Skills",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wrench"/></svg> Medication Administration Skills</h3>

                <h4>EMT Medication Administration — Scope and Responsibility</h4>
                <p>Medication administration is one of the highest-risk skills EMTs perform. The <strong>Six Rights</strong> of medication administration apply regardless of practice level. EMTs must know: which medications they can administer per state protocol, correct dose/route/indications/contraindications, proper administration technique, and how to document. Errors are the most common cause of EMS malpractice claims.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Never give a medication you cannot identify.</strong> If the vial/packaging is unclear, the label is damaged, or the medication is not what you expected — <strong>do not administer</strong>. Verify with your partner, consult medical direction, or use the medication package insert. When in doubt, leave it out.
                </div>

                <h4>The Six Rights (6 Rs) — Verified Every Time</h4>
                <ol>
                    <li><strong>Right Patient:</strong> Confirm patient identity — verbal confirmation if conscious, check ID band if available, verify with family if needed.</li>
                    <li><strong>Right Medication:</strong> Read label THREE times — when removing from storage, when preparing the dose, before administering. Compare against protocol/order.</li>
                    <li><strong>Right Dose:</strong> Verify against weight-based protocol (mg/kg). Double-check calculations. Have partner independently verify pediatric doses.</li>
                    <li><strong>Right Route:</strong> Oral (PO), sublingual (SL), intramuscular (IM), intravenous (IV), intraosseous (IO), inhalation, intranasal (IN), buccal, rectal. Confirm route matches medication and protocol.</li>
                    <li><strong>Right Time:</strong> Verify medication is due now (not already given). Check timing per protocol. Document time of administration.</li>
                    <li><strong>Right Documentation:</strong> Record: medication name, dose, route, time, site of administration, patient response (including any adverse effects), and the name of the authorizing physician/online medical control if protocol requires.</li>
                </ol>

                <h4>Common EMT-Authorized Medications</h4>
                <table>
                    <thead>
                        <tr><th>Medication</th><th>Class</th><th>Route</th><th>Indication</th><th>Key Contraindications</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Oxygen</strong></td><td>Medical gas</td><td>Inhalation (NRB, NC, BVM)</td><td>Hypoxia (SpO<sub>2</sub> &lt;94%), respiratory distress, shock, trauma, cardiac arrest</td><td>CO<sub>2</sub> retainers — titrate carefully. Fire risk near open flame.</td></tr>
                        <tr><td><strong>Activated Charcoal</strong></td><td>Adsorbent</td><td>Oral (PO)</td><td>Recent (within 1 hr) oral overdose of adsorbable toxin</td><td>Decreased LOC, unable to protect airway, caustic ingestion, hydrocarbon ingestion. Contraindicated without medical direction.</td></tr>
                        <tr><td><strong>Oral Glucose</strong></td><td>Simple sugar</td><td>Buccal (between cheek and gum)</td><td>Hypoglycemia (altered LOC + low BGL) with intact swallow/gag reflex</td><td>Unable to swallow, decreased LOC, suspected stroke with dysphagia. Do NOT give if patient cannot protect airway.</td></tr>
                        <tr><td><strong>Aspirin</strong></td><td>Antiplatelet (NSAID)</td><td>Oral (chewed)</td><td>Suspected ACS — chest pain, crushing substernal pressure, radiating pain</td><td>Allergy to ASA, active GI bleeding, recent head injury (bleeding), hemorrhagic stroke suspicion. Pediatric (Reye syndrome risk).</td></tr>
                        <tr><td><strong>Nitroglycerin</strong></td><td>Vasodilator (nitrate)</td><td>Sublingual (SL) tablet or spray</td><td>Angina / suspected ACS with chest pain</td><td>Systolic BP &lt;100 mmHg, HR &lt;50 or &gt;100 bpm, inferior STEMI with suspected RV involvement, recent PDE-5 inhibitor use (Viagra/Cialis within 24-48 hr). Contraindicated with these meds.</td></tr>
                        <tr><td><strong>Epinephrine (auto-injector)</strong></td><td>Sympathomimetic</td><td>IM (lateral thigh vastus lateralis)</td><td>Anaphylaxis with respiratory compromise and/or hypotension</td><td>Trauma (not indicated for traumatic shock). No absolute contraindications in life-threatening anaphylaxis.</td></tr>
                        <tr><td><strong>Naloxone (Narcan)</strong></td><td>Opioid antagonist</td><td>IN or IM</td><td>Opioid overdose with respiratory depression</td><td>Known opioid dependence (precipitates withdrawal). No contraindication if respiratory compromise is life-threatening.</td></tr>
                        <tr><td><strong>Albuterol</strong></td><td>Beta-agonist bronchodilator</td><td>Inhalation (nebulized or MDI)</td><td>Wheezing, asthma exacerbation, COPD exacerbation, anaphylaxis with bronchospasm</td><td>Tachycardia (use caution — can worsen HR). Not first-line for cardiac wheezes. Use spacer with MDI if available.</td></tr>
                        <tr><td><strong>MDI (Metered Dose Inhaler)</strong></td><td>Bronchodilator</td><td>Inhalation (MDI + spacer)</td><td>Patient own inhaler, asthma/COPD exacerbation</td><td>Assist patient with own inhaler per protocol. Ensure correct technique (slow deep inhalation, breath hold 10 sec).</td></tr>
                        <tr><td><strong>CPAP/BiPAP</strong></td><td>Non-invasive ventilation</td><td>Mask inhalation</td><td>Pulmonary edema, severe COPD, respiratory distress with adequate respiratory drive</td><td>Decreased LOC, unable to protect airway, hypotension, facial trauma, pneumothorax (suspect). Monitor for vomiting.</td></tr>
                    </tbody>
                </table>

                <h4>Routes of Administration for EMTs</h4>
                <ul>
                    <li><strong>Oral (PO):</strong> Swallowed. Slowest onset. Patient must have intact gag and swallow.</li>
                    <li><strong>Buccal:</strong> Between cheek and gum. Absorbed through oral mucosa (oral glucose).</li>
                    <li><strong>Sublingual (SL):</strong> Under tongue. Rapid absorption. Avoid water — let dissolve (NTG).</li>
                    <li><strong>Intramuscular (IM):</strong> Into muscle (vastus lateralis, deltoid). Moderate speed. Use correct needle length.</li>
                    <li><strong>Intranasal (IN):</strong> Atomized into nostril. Rapid absorption. Skip liver (gains access to bloodstream via nasal mucosa).</li>
                    <li><strong>Inhalation:</strong> Through lungs. Very rapid (alveoli absorb into blood). Nebulizer or MDI.</li>
                </ul>

                <h4>Pediatric Medication Considerations</h4>
                <p>Pediatric doses are typically <strong>weight-based</strong> (mg/kg). If actual weight unknown: use length-based tape (Broselow) for dosing. <strong>Have partner independently verify all pediatric doses.</strong> Use Broselow tape for weight/dose/equipment size. Use small-volume nebulizers for pediatrics. For epinephrine auto-injector: 0.15 mg (junior) for &lt;25 kg, 0.3 mg (adult) for &gt;25 kg. Naloxone IN dose 0.4-2 mg (per protocol). Always use weight-based tape if available.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#ffc107;">
                    <strong>Weight-Based Dosing Rule:</strong> Always double-check math. If you calculate 0.5 mL and your partner calculates 5 mL — someone is wrong. Stop and recalculate. <strong>Never guess.</strong> If unsure of the correct dose, call medical direction.
                </div>

                <h4>Documentation Requirements</h4>
                <p>Per standard EMS documentation: time of administration, name of medication (generic + brand if applicable), dose (mg, mcg, g, mL), route, site of administration (for IM/IN: which thigh/nostril), patient response pre- and post-medication (vital signs, symptoms, side effects), any adverse effects, name of authorizing physician or medical director (for medications requiring order). If medication was refused by patient: document reason for refusal, education provided, and medical direction notified (per protocol).</p>
            </div>`,
            flashcards: [
                { question: "What are the Six Rights of medication administration?", answer: "1) Right patient. 2) Right medication. 3) Right dose. 4) Right route. 5) Right time. 6) Right documentation.", category: "Six Rights" },
                { question: "What are the 3-label checks?", answer: "Read label when: 1) Removing from storage. 2) Preparing the dose. 3) Before administering.", category: "Medication Safety" },
                { question: "What is the dose and route of epinephrine auto-injector?", answer: "IM lateral thigh (vastus lateralis). Adult: 0.3 mg. Junior (&lt;25 kg): 0.15 mg.", category: "Epinephrine" },
                { question: "What are contraindications for nitroglycerin?", answer: "SBP &lt;100 mmHg, HR &lt;50 or &gt;100, inferior STEMI w/ RV involvement, recent PDE-5 inhibitor (Viagra/Cialis within 24-48 hr).", category: "Nitroglycerin" },
                { question: "What are contraindications for activated charcoal?", answer: "Decreased LOC, unable to protect airway, caustic ingestion, hydrocarbon ingestion. Not given without medical direction.", category: "Activated Charcoal" },
                { question: "What are the routes of administration EMTs commonly use?", answer: "Oral (PO), buccal, sublingual (SL), intramuscular (IM), intranasal (IN), inhalation.", category: "Routes" },
                { question: "What special considerations for pediatric medication dosing?", answer: "Weight-based (mg/kg). Use Broselow tape for weight/dose/equipment size. Have partner independently verify all pediatric doses.", category: "Pediatric" },
                { question: "What documentation is required for medication administration?", answer: "Time, medication name, dose, route, site, patient response (pre/post), adverse effects, authorizing physician name.", category: "Documentation" }
            ],
            quiz: [
                { q: "EMT preparing to give NTG. Patient reports Viagra use 12 hours ago. What should the EMT do?", options: ["Give NTG. Viagra is only a contraindication within 4 hours", "Hold NTG. PDE-5 inhibitor within 24-48 hours is contraindicated with NTG. Contact medical direction for alternative", "Give half-dose NTG to reduce risk", "Give NTG but monitor BP every 2 minutes"], correct: 1 },
                { q: "Unresponsive hypoglycemic patient with BGL 42 mg/dL. Patient cannot swallow. What is the next step?", options: ["Place oral glucose inside cheek. Risk of aspiration acceptable given severe hypoglycemia", "Do NOT administer oral glucose (aspiration risk). Administer IM glucagon if available per protocol, or transport rapidly", "Give oral glucose under tongue — sublingual route bypasses swallow", "Administer D50 IV if IV access protocol"], correct: 1 },
                { q: "[HARD] Pediatric patient (estimated 20 kg) with anaphylaxis (urticaria, stridor, hypotension). Which epinephrine dose?", options: ["0.3 mg IM (adult auto-injector) regardless of weight", "0.15 mg IM (junior auto-injector, &lt;25 kg) vastus lateralis", "0.15 mg IM deltoid", "0.3 mg IM (junior). Deltoid preferred in pediatrics"], correct: 1 },
                { q: "EMT administers 324 mg aspirin to 62-year-old with chest pain, diaphoresis, nausea. What is the MOST important follow-up action?", options: ["Document time, dose, and patient response to ASA. Reassess for chest pain relief and side effects (GI upset, bleeding)", "Give NTG next regardless of BP", "Place patient supine", "Obtain 12-lead only after medication"], correct: 0 }
            ],
            critical: [
                {
                    id: "crit_10_8_1",
                    scenario: "55-year-old with crushing chest pressure, diaphoresis, nausea. SBP 92 mmHg, HR 104. Patient states he took Viagra 36 hours ago. Partner suggests giving NTG anyway because patient is clearly having an MI and BP is borderline. There is no physician order on scene.",
                    question: "What is the correct action?",
                    options: [
                        {t: "Give NTG. Patient is having obvious STEMI. Risk of not treating is greater than risk of hypotension", f: "Incorrect NTG is contraindicated with SBP &lt;100, PDE-5 use within 24-48 hr, and without physician order (unless standing order covers it with correct parameters). All three contraindications present."},
                        {t: "Hold NTG. Contraindicated: SBP &lt;100 mmHg + Viagra within 48 hr + no physician order. Administer ASA (162-324 mg chewed) if no contraindications. Place patient in position of comfort. Obtain 12-lead. Transport. Notify receiving hospital and contact medical direction for further orders", f: "Correct Holding NTG is correct (triple contraindication). ASA still indicated (chewed). 12-lead, transport, notify hospital, contact medical direction."}
                    ],
                    correct: 1,
                    explanation: "NTG contraindicated due to SBP &lt;100 (hypotension risk), PDE-5 inhibitor use within 48 hours (life-threatening hypotension risk), and lack of online medical direction. ASA 162-324 mg chewed is appropriate. Position of comfort (semi-Fowler\'s). 12-lead. Transport with lights/sirens if hemodynamically unstable. Contact medical direction for further orders.",
                    kpi: "Correctly identifies triple contraindication to NTG and administers appropriate alternative therapy (ASA)"
                },
                {
                    id: "crit_10_8_2",
                    scenario: "3-year-old (estimated 14 kg) found by mother with bottle of grandmother\'s oxycodone empty next to child. Child is lethargic, respiratory rate 6, SpO2 82% on room air. You have naloxone 2 mg/2 mL vial, atomizer, and 1 mL syringe.",
                    question: "What is the correct naloxone dose and administration?",
                    options: [
                        {t: "Administer 2 mg IN (full vial). Child is 14 kg. Standard adult dose is appropriate for opioid-induced respiratory depression", f: "Incorrect Despite severity, pediatric dosing should be based on weight. 2 mg could precipitate severe withdrawal."},
                        {t: "Draw up 0.1 mg/kg = 1.4 mg naloxone. Attach atomizer to syringe. Administer 0.7 mg IN each nostril (total 1.4 mg). Ventilate with BVM + O2 first. Reassess respiratory rate and SpO2. Transport. Monitor for withdrawal", f: "Correct Weight-based dosing: 0.1 mg/kg x 14 kg = 1.4 mg. Administer 0.7 mg IN each nostril. BVM ventilation and O2 are priority before med. Reassess response."}
                    ],
                    correct: 1,
                    explanation: "Pediatric naloxone dosing: 0.1 mg/kg IN or IM. For 14 kg = 1.4 mg. Administer divided between nostrils (0.7 mg each). BVM ventilation + high-flow O2 is primary treatment. Naloxone reverses respiratory depression but ventilation is what saves the brain. Monitor for precipitated withdrawal (agitation, vomiting, seizures). Titrate to effect — you want the child breathing, not necessarily fully awake.",
                    kpi: "Correctly calculates weight-based naloxone dose for pediatric patient and prioritizes ventilation"
                },
                {
                    id: "crit_10_8_3",
                    scenario: "68-year-old female with COPD exacerbation. Respiratory rate 28, SpO2 85% on room air, wheezing diffusely. Patient has home nebulizer and albuterol vials. She asks you to administer her own albuterol nebulizer treatment. You have never used this specific nebulizer model. Additionally her oxygen saturation is critically low.",
                    question: "What is the correct sequence?",
                    options: [
                        {t: "Administer patient\'s own albuterol via her nebulizer. It is the same medication regardless of device model", f: "Incorrect While medication may be same, unfamiliarity with device could lead to incorrect delivery. Also must address hypoxia simultaneously."},
                        {t: "Apply O2 (NRB 12-15 L/min) first to correct hypoxia. Use your own nebulizer setup (standard EMS nebulizer) with albuterol 2.5 mg if patient\'s vials are appropriate concentration. Administer simultaneously with O2. If unfamiliar with patient\'s device, use equipment you know. Reassess SpO2, breath sounds, respiratory effort. Transport", f: "Correct Address hypoxia first with O2. Use familiar EMS nebulizer equipment with patient\'s albuterol if verified. Simultaneous O2 + nebulizer treatment. Monitor response. Transport."}
                    ],
                    correct: 1,
                    explanation: "Priority: hypoxia correction first (O2 NRB). Simultaneously administer albuterol via nebulizer using equipment you are trained on. If patient\'s albuterol vials are correct concentration, you can use them — but only if you can verify the concentration. If unsure, use your own supply. Continuous monitoring of SpO2, respiratory rate, breath sounds, and mental status. CPAP/BiPAP if no improvement per protocol.",
                    kpi: "Prioritizes hypoxia correction, uses familiar equipment, verifies medication concentration, simultaneously addresses hypoxia and bronchospasm"
                }
            ]
        }
    ]
};
