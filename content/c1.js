/* ========== Chapter 1 – Foundations of Care ========== */
window.CPG_DATA = {
    id: "c1",
    title: "Foundations of Care",
    shortTitle: "1. Foundations of Care",
    sections: [
        {
            id: "c1s1",
            shortTitle: "1.1 EMS, Systems & Professionalism",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> EMS, Systems &amp; Professionalism</h3>

                <p><strong>EMS is a coordinated system, not just an ambulance ride.</strong> You are the front door to emergency care and the link between the community and the hospital — providing prehospital care, stabilization, and transport to definitive care.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Scene safety is always your first action</strong> — protect yourself, your partner, the patient, then bystanders. An unsafe scene just creates a second patient.
                </div>

                <h4>The EMS chain</h4>
                <table>
                    <thead>
                        <tr><th>Component</th><th>Function</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Public Access</td><td>Citizens recognize an emergency and activate the system</td><td>9-1-1 call from a bystander</td></tr>
                        <tr><td>Emergency Dispatch</td><td>Trained dispatchers gather information and assign resources</td><td>EMD-certified dispatcher provides pre-arrival instructions</td></tr>
                        <tr><td>First Responders</td><td>Initial trained personnel arrive to assess and begin care</td><td>Police, fire department, or EMRs</td></tr>
                        <tr><td>EMS Ambulance Response</td><td>EMTs or paramedics arrive with transport capability</td><td>Ambulance crew with BLS or ALS equipment</td></tr>
                        <tr><td>Hospital Care</td><td>Definitive care at an appropriate receiving facility</td><td>ER, trauma center, stroke center</td></tr>
                        <tr><td>Specialty Centers</td><td>Designated facilities for specific emergencies</td><td>Burn center, pediatric critical care, STEMI center</td></tr>
                    </tbody>
                </table>
                
                <h4>Levels of EMS training</h4>
                <table>
                    <thead><tr><th>Level</th><th>Key skills it adds</th></tr></thead>
                    <tbody>
                        <tr><td><strong>EMR</strong></td><td>CPR, AED, oxygen, basic airway, bleeding control</td></tr>
                        <tr><td><strong>EMT</strong></td><td>Assessment, splinting, spinal care, supraglottic airway + epinephrine, naloxone, aspirin, oral glucose</td></tr>
                        <tr><td><strong>AEMT</strong></td><td>EMT skills + IV/IO access, advanced airway adjuncts, more meds</td></tr>
                        <tr><td><strong>Paramedic</strong></td><td>ALS: intubation, manual defib, cardioversion, pacing, chest decompression, cardiac drugs</td></tr>
                    </tbody>
                </table>

                <h4>Medical direction</h4>
                <ul>
                    <li><strong>Online (direct):</strong> real-time physician contact (radio/phone) to approve a treatment.</li>
                    <li><strong>Offline (indirect):</strong> written <strong>protocols</strong> and <strong>standing orders</strong> that let you act <em>without</em> calling first.</li>
                </ul>
                <p>Every system runs under a <strong>physician medical director</strong>; <strong>CQI</strong> (run reviews, chart audits) reviews calls to improve care. Dispatch (EMD) gathers info and gives pre-arrival instructions — your <strong>dispatch narrative</strong> previews the call.</p>

                <h4>Scope, standard &amp; duty — the legal triangle</h4>
                <ul>
                    <li><strong>Scope of practice:</strong> what your certification level legally lets you do. Outside it = practicing medicine without a license.</li>
                    <li><strong>Standard of care:</strong> what a reasonable EMT of your level would do in the same situation.</li>
                    <li><strong>Duty to act:</strong> while on duty you must respond and provide care; quitting care mid-call is abandonment.</li>
                </ul>

                <h4>Acting like a professional</h4>
                <p>It's behaviour, not just the uniform: <strong>integrity, empathy, teamwork, clear communication, fitness, composure under stress,</strong> and <strong>lifelong learning.</strong> Protect every patient's dignity and confidentiality (HIPAA).</p>
                <p style="font-size:.92em;"><strong>Credentials:</strong> the <strong>NREMT</strong> sets national competency (written + skills exams); your <strong>state license</strong> grants legal authority to practice. Recertify every 2 years via continuing education.</p>
            </div>`,
            flashcards: [
                { question: "What landmark 1966 document exposed deficiencies in prehospital care and led to EMS reform?", answer: "The White Paper: 'Accidental Death and Disability: The Neglected Disease of Modern Society'", category: "EMS History" },
                { question: "What are the four nationally recognized levels of EMS practitioner?", answer: "EMR (Emergency Medical Responder), EMT (Emergency Medical Technician), AEMT (Advanced EMT), and Paramedic", category: "EMS Training Levels" },
                { question: "What is the difference between online and offline medical direction?", answer: "Online direction involves real-time communication with a physician (radio/phone); offline direction uses written protocols and standing orders that authorize care without direct contact", category: "Medical Direction" },
                { question: "What does enhanced 9-1-1 (E-911) provide to dispatchers?", answer: "Automatic location information and the caller's callback number, even if the caller cannot speak", category: "EMS Systems" },
                { question: "What is Continuous Quality Improvement (CQI) in EMS?", answer: "A cyclical process of reviewing patient care, identifying improvement opportunities, providing feedback, and implementing system changes to enhance care quality", category: "Quality Improvement" },
                { question: "What federal legislation passed in 1966 that helped establish EMS systems across the U.S.?", answer: "The Highway Safety Act, which created the DOT and required states to implement highway safety programs including EMS", category: "EMS History" },
                { question: "What is the role of an Emergency Medical Dispatcher (EMD)?", answer: "To answer 9-1-1 calls, gather information, assign appropriate resources, and provide pre-arrival instructions to callers", category: "EMS Systems" },
                { question: "How does the EMT scope differ from the paramedic scope?", answer: "EMTs provide basic life support (BLS): patient assessment, spinal immobilization, bleeding control, supraglottic airways, and limited meds. Paramedics provide advanced life support (ALS) including ET intubation, IV/IO access, manual defibrillation, and advanced cardiac medications.", category: "EMS Training Levels" },
                { question: "What is the difference between scope of practice and standard of care?", answer: "Scope of practice is what you are legally authorized to do by state law; standard of care is what a reasonably prudent EMT with similar training would do under similar circumstances.", category: "Legal Concepts" },
                { question: "What legal principle requires an on-duty EMT to respond and provide care?", answer: "Duty to act — a legal obligation to provide care within your scope while on duty; quitting care mid-call is abandonment.", category: "Legal Concepts" },
                { question: "What organization provides national certification for EMTs?", answer: "The National Registry of Emergency Medical Technicians (NREMT)", category: "Certification" },
                { question: "What is the EMT's first action on every scene?", answer: "Scene safety — ensure the scene is safe for you, your partner, the patient, and bystanders before providing care.", category: "Scene Operations" },
                { question: "Name five traits of a professional EMT.", answer: "Integrity, empathy/compassion, teamwork, clear communication, and physical fitness (also: composure under stress, lifelong learning).", category: "Professionalism" }
            ],
            quiz: [
                { q: "What landmark publication in 1966 led to the modernization of EMS in the United States?", options: ["The Highway Safety Act", "Accidental Death and Disability: The Neglected Disease of Modern Society", "The National EMS Scope of Practice Model", "The EMS Systems Act of 1973"], correct: 1 },
                { q: "Which of the following is the highest level of EMS practitioner?", options: ["Emergency Medical Technician", "Advanced EMT", "Emergency Medical Responder", "Paramedic"], correct: 3 },
                { q: "What term describes written medical protocols that authorize an EMT to perform specific treatments without contacting a physician first?", options: ["Online medical direction", "Standing orders", "Protocol waivers", "Standard of care"], correct: 1 },
                { q: "Enhanced 9-1-1 systems provide dispatchers with:", options: ["The caller's medical history", "The caller's location and callback number automatically", "Live video from the caller's phone", "Direct access to hospital bed availability"], correct: 1 },
                { q: "Which EMS system component is responsible for recognizing an emergency and activating the system?", options: ["Emergency dispatch", "Public access", "First responders", "Medical direction"], correct: 1 },
                { q: "The physician responsible for clinical oversight of an EMS system is called the:", options: ["Chief medical officer", "EMS director", "Medical director", "Attending physician"], correct: 2 },
                { q: "At which EMT training level do providers gain the ability to establish IV and IO access?", options: ["EMT", "EMR", "AEMT", "First responder"], correct: 2 },
                { q: "A protocol that requires an EMT to call a physician before administering a specific medication is an example of:", options: ["Offline medical direction", "Standard of care", "Online medical direction", "Standing orders"], correct: 2 },
                { q: "[HARD] According to the National EMS Scope of Practice Model, which medication is within the EMT scope of practice to administer?", options: ["Adenosine for supraventricular tachycardia", "Naloxone for suspected opioid overdose", "Fentanyl for severe pain", "Lorazepam for seizure cessation"], correct: 1 },
                { q: "[HARD] The 1966 Highway Safety Act impacted EMS primarily by:", options: ["Creating the first paramedic training program", "Requiring states to implement highway safety programs including EMS systems", "Establishing the National Registry of EMTs", "Funding the first helicopter EMS programs"], correct: 1 },
                { q: "Which of the following is a function of Continuous Quality Improvement (CQI) in an EMS system?", options: ["Disciplining EMTs for protocol violations", "Reviewing patient care to identify opportunities for improvement", "Increasing ambulance response times", "Replacing all volunteer EMTs with paid staff"], correct: 1 },
                { q: "[HARD] A community paramedicine program would most likely involve an EMT in which activity?", options: ["Performing emergency appendectomy in the field", "Conducting home visits for medication reconciliation and chronic disease follow-up", "Dispensing prescription medications from an ambulance", "Performing CT scans in a mobile unit"], correct: 1 },
                { q: "The EMT's first priority on arriving at any scene is:", options: ["Starting patient assessment", "Donning gloves", "Ensuring scene safety", "Contacting medical direction"], correct: 2 },
                { q: "A legal principle that requires an on-duty EMT to provide emergency care is called:", options: ["Standard of care", "Good Samaritan law", "Duty to act", "Scope of practice"], correct: 2 },
                { q: "The range of duties and skills an EMT is legally authorized to perform is the:", options: ["Standard of care", "Scope of practice", "Protocol set", "Medical direction"], correct: 1 },
                { q: "[HARD] An EMT performs a skill outside their state-defined scope of practice. This is legally considered:", options: ["A protocol variance needing extra documentation", "Negligence only if the patient is harmed", "Practicing medicine without a license", "Acceptable if no paramedic was available"], correct: 2 },
                { q: "[HARD] Which BEST illustrates the difference between scope of practice and standard of care?", options: ["An EMT performs CPR — within scope and meeting standard of care", "An EMT gives a drug in their scope but at the wrong dose — within scope but below standard of care", "A paramedic intubates — outside EMT scope", "An EMT refuses to treat a violent patient — breach of duty"], correct: 1 },
                { q: "How often must an EMT recertify with the NREMT?", options: ["Every year", "Every two years", "Every five years", "Never — it is lifetime"], correct: 1 }
            ],
            critical: [
                {
                    scenario: "You are an EMT dispatched to a motor vehicle collision on a rural state highway. Dispatch advises that a 45-year-old male driver was found unconscious by a passerby who called 9-1-1. The dispatcher stayed on the line and provided instructions to the bystander to open the airway and control bleeding from a laceration on the arm. As you approach the scene in the ambulance, you note that you are approximately 20 minutes from the nearest community hospital and 45 minutes from the nearest Level II trauma center. Law enforcement is on scene but fire rescue is 10 minutes out.",
                    question: "Given this scenario, which component of the EMS system is BEST demonstrated by the dispatcher staying on the line and providing care instructions to the bystander?",
                    options: ["Online medical direction", "Emergency Medical Dispatch providing pre-arrival instructions", "Offline medical direction through standing orders", "Continuous Quality Improvement in action"], correct: 1
                },
                {
                    scenario: "You are an EMT working for a suburban EMS agency. Your medical director has implemented a new protocol allowing EMTs to administer CPAP (Continuous Positive Airway Pressure) to patients in respiratory distress without calling for permission. The protocol was developed based on current evidence showing improved outcomes for congestive heart failure patients. During your shift, you respond to a 68-year-old female with difficulty breathing. She has crackles in both lung bases, an SpO2 of 88%, and is using accessory muscles. You apply CPAP per the new protocol and her oxygen saturation improves to 94% en route to the hospital.",
                    question: "The CPAP protocol that allows you to treat this patient without contacting the physician is BEST described as:",
                    options: ["Online medical direction requiring radio consultation", "An EMT expanding their scope of practice independently", "Offline medical direction through standing orders", "A deviation from the standard of care requiring documentation"], correct: 2
                },
                {
                    scenario: "During a monthly CQI meeting, your agency's medical director reviews a cardiac arrest call you ran three weeks ago. The review shows that while CPR was started promptly and defibrillation occurred within 3 minutes, the door-to-needle time at the receiving hospital was delayed because the patient was taken to a facility without percutaneous coronary intervention (PCI) capabilities and had to be transferred. The medical director notes that your agency's protocols did not specify a destination protocol for post-arrest patients. A new protocol is drafted requiring transport of all ROSC (Return of Spontaneous Circulation) patients to the nearest PCI-capable center, which adds 8 minutes of transport time but significantly reduces overall time to definitive cardiac care.",
                    question: "This CQI process demonstrates which important principle of EMS quality improvement?",
                    options: ["CQI is focused on individual punishment for protocol violations", "CQI identifies system-level problems and implements evidence-based changes to improve patient outcomes", "CQI is primarily concerned with reducing transport times at all costs", "CQI eliminates the need for physician medical direction in EMS systems"], correct: 1
                },
                {
                    scenario: "During an interfacility transfer, you are transporting a stable patient from a nursing home to a dialysis center. The patient has a valid do-not-resuscitate (DNR) order on file, signed by their physician. During transport the patient becomes unresponsive, stops breathing, and has no pulse. Your partner, an EMT of 15 years, says 'just start CPR — nobody will check the paperwork.' You have seen the valid DNR order.",
                    question: "What is the MOST appropriate professional decision?",
                    options: ["Follow your partner since they have more experience", "Honor the valid DNR order and do not start resuscitation, explaining your decision to your partner", "Start CPR to protect yourself legally, then check the DNR later", "Call the dialysis center for guidance first"], correct: 1
                },
                {
                    scenario: "You respond to a minor two-car collision. One driver, a 35-year-old female, is walking around, denies injury, is upset and crying, and says she must leave for work. She refuses evaluation, transport, and refuses to sign anything, then starts walking away. Your protocols require a signed refusal from a competent, informed patient.",
                    question: "What is the MOST appropriate way to manage this while staying professional?",
                    options: ["Physically stop her and assess her", "Document the refusal — including that she was informed of the risks of refusing care and left against medical advice", "Call law enforcement to detain her for evaluation", "Follow her and keep trying to convince her"], correct: 1
                }
            ]
        },
        {
            id: "c1s3",
            shortTitle: "1.2 Workforce Safety & Wellness",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#shield"/></svg> Workforce Safety &amp; Wellness</h3>
                <p><strong>An injured or burned-out EMT can't help anyone.</strong> Protecting yourself &mdash; physically, mentally, emotionally &mdash; is part of the job.</p>

                <h4>Three types of stress</h4>
                <ul>
                    <li><strong>Acute:</strong> the fight-or-flight surge during and right after a bad call.</li>
                    <li><strong>Delayed:</strong> reactions appearing weeks to years later (PTSD &mdash; flashbacks, nightmares, avoidance).</li>
                    <li><strong>Cumulative:</strong> slow build-up over a career &rarr; <strong>burnout / compassion fatigue</strong> (exhaustion, cynicism, lost empathy) &mdash; a leading reason EMTs quit.</li>
                </ul>

                <h4>Warning signs of stress</h4>
                <table>
                    <thead><tr><th>Type</th><th>Signs</th></tr></thead>
                    <tbody>
                        <tr><td>Physical</td><td>Headache, fatigue, muscle tension, poor sleep, appetite change, GI upset</td></tr>
                        <tr><td>Cognitive</td><td>Poor concentration/memory, bad decisions, intrusive thoughts</td></tr>
                        <tr><td>Emotional</td><td>Irritability, anxiety, depression, numbing, guilt</td></tr>
                        <tr><td>Behavioral</td><td>Withdrawal, substance use, absenteeism, conflict</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>You're human, not weak.</strong> The most resilient EMTs spot stress early and ask for help. <strong>CISM</strong> supports crews after a <em>critical incident</em> (death of a child or colleague, an MCI): <strong>defusing</strong> (informal, within hours) and <strong>CISD</strong> (structured, 24&ndash;72 h). It is confidential support, NOT a performance review.
                </div>

                <h4>Scene safety &mdash; the big hazards</h4>
                <ul>
                    <li><strong>Being struck by traffic is the #1 cause of EMS line-of-duty death</strong> &mdash; position the truck as a barrier, wear hi-vis, stay alert on roadways.</li>
                    <li><strong>HazMat:</strong> isolate, deny entry, call resources. Never enter the hot zone without training and PPE.</li>
                    <li><strong>Violence:</strong> size up before entering, keep an escape route, wait for law enforcement to secure the scene.</li>
                    <li><strong>Environmental:</strong> weather, fire, downed power lines, unstable structures &mdash; wait for the right resources.</li>
                </ul>

                <h4>Staying well</h4>
                <p>Protect <strong>sleep (7&ndash;9 h), nutrition, hydration, and fitness</strong>; build support inside and outside EMS (peer support, EAP/counseling); keep a life beyond the job. Stay current on immunizations (HBV, flu, Tdap, MMR, varicella, COVID-19).</p>
            </div>`,
            flashcards: [
                { question: "What are the three types of stress experienced by EMS providers?", answer: "Acute stress (immediate reaction to a critical incident), delayed stress (reactions that emerge later, like PTSD), and cumulative stress (gradual burnout from prolonged exposure)", category: "Stress Management" },
                { question: "What does CISM stand for and what is its purpose?", answer: "Critical Incident Stress Management — a comprehensive system of interventions designed to mitigate the psychological impact of critical incidents on emergency personnel", category: "Stress Management" },
                { question: "What is the difference between a defusing and a CISD?", answer: "A defusing is brief, informal, and held within hours of an incident. CISD is a structured 7-phase session held 24-72 hours after the incident.", category: "Stress Management" },
                { question: "What is the leading cause of death among on-duty EMS providers?", answer: "Struck-by incidents — being hit by a vehicle while working on a roadway", category: "Scene Safety" },
                { question: "List four signs of cumulative stress (burnout).", answer: "Emotional exhaustion, cynicism, reduced empathy for patients (compassion fatigue), and decreased sense of personal accomplishment", category: "Stress Management" },
                { question: "What should an EMT do if they suspect a hazardous materials scene?", answer: "Isolate the area, deny entry, and notify appropriate HazMat resources — do not enter without proper training and PPE", category: "Scene Safety" },
                { question: "What are the three domains of EMT wellness?", answer: "Physical wellness, emotional wellness, and mental wellness — all interconnected", category: "Wellness" },
                { question: "How many phases does a formal CISD session have?", answer: "Seven phases — including introduction, fact, thought, reaction, symptom, teaching, and re-entry phases", category: "Stress Management" }
            ],
            quiz: [
                { q: "Which type of stress is characterized by gradual burnout occurring over months or years of EMS work?", options: ["Acute stress", "Delayed stress", "Cumulative stress", "Critical incident stress"], correct: 2 },
                { q: "What does CISM stand for?", options: ["Critical Incident Stress Management", "Critical Injury Scene Management", "Crisis Intervention for Stressed Medics", "Coordinated Incident Safety Measures"], correct: 0 },
                { q: "What is the first thing an EMT should do upon suspecting a hazardous materials scene?", options: ["Approach cautiously to identify the substance", "Isolate the area and deny entry", "Don a HazMat suit and enter", "Begin treating any visible patients"], correct: 1 },
                { q: "Within what timeframe is a Critical Incident Stress Debriefing (CISD) typically conducted?", options: ["Immediately on scene", "Within 2-4 hours", "24 to 72 hours after the incident", "One week after the incident"], correct: 2 },
                { q: "Which of the following is NOT a sign of cumulative stress in an EMT?", options: ["Emotional exhaustion", "Increased empathy and compassion", "Cynicism and negativity", "Decreased sense of personal accomplishment"], correct: 1 },
                { q: "The leading cause of on-duty death among EMS providers is:", options: ["Heart attack", "Struck by a vehicle", "Violence from patients", "Needlestick injury"], correct: 1 },
                { q: "At a roadway incident, which vehicle positioning strategy enhances scene safety?", options: ["Parking behind the incident with warning lights only", "Positioning the ambulance as a barrier between the scene and oncoming traffic", "Parking on the opposite side of the road", "Turning off all emergency lights to avoid distracting drivers"], correct: 1 },
                { q: "[HARD] An EMT who has been in the field for 8 years finds themselves feeling emotionally numb, dreading going to work, and snapping at family members regularly. They have started drinking more after shifts to 'unwind.' These symptoms MOST likely suggest:", options: ["Normal adjustment to EMS work that will resolve on its own", "Cumulative stress / burnout that requires active intervention", "A personality disorder unrelated to EMS work", "Simple fatigue from lack of sleep"], correct: 1 },
                { q: "[HARD] After a particularly traumatic pediatric cardiac arrest call, what is the MOST appropriate timing for a formal CISD session?", options: ["Immediately after the call on scene", "Later the same shift or the next day", "24-72 hours after the incident", "CISD is not indicated for pediatric calls"], correct: 2 },
                { q: "Which of the following is an appropriate on-duty nutrition strategy for an EMT?", options: ["Skip meals to save time between calls", "Pack healthy meals and snacks and stay hydrated", "Rely on caffeinated energy drinks for nutrition", "Eat one large meal at the end of shift"], correct: 1 },
                { q: "The 'fight or flight' response during and immediately after a critical incident is characteristic of which type of stress?", options: ["Cumulative stress", "Delayed stress", "Acute stress", "Chronic stress"], correct: 2 },
                { q: "[HARD] An EMT responds to a shooting at a school where multiple children are injured. The scene is chaotic with law enforcement actively searching for the suspect. The EMT should:", options: ["Rush in immediately to treat the injured children", "Wait in the ambulance until it is quiet", "Stage at a safe location until law enforcement declares the scene secure", "Don ballistic vest and proceed to the nearest injured child"], correct: 2 }
            ],
            critical: [
                {
                    scenario: "You are an EMT responding to a report of a 'person down' in an alley behind a convenience store at 2:00 AM. Dispatch advises that the caller hung up and did not provide additional details. As you approach the alley, you see a person lying on the ground, but you also notice several other individuals standing in the shadows at the far end of the alley. The lighting is poor and you cannot see clearly what they are doing. The nearest law enforcement unit is 8 minutes out. Your partner wants to proceed into the alley with the portable oxygen bag and jump kit.",
                    question: "What is the BEST decision regarding scene safety in this situation?",
                    options: ["Proceed into the alley with caution since the patient may be critical", "Have your partner go ahead while you stay near the ambulance", "Stage at a safe distance and wait for law enforcement to secure the scene before entering", "Turn on the ambulance's floodlights and announce your presence before entering"], correct: 2
                },
                {
                    scenario: "You and your partner have just finished a 14-hour shift in a busy urban 9-1-1 system. Your last call of the shift was a particularly difficult one: a 3-year-old drowning victim that did not survive despite prolonged resuscitation efforts. The child was approximately the same age as your own child. After the call, your medical director tells you to take some time and offers the services of the CISM team. Your partner says, 'I'm fine, I just want to go home, have a beer, and forget about it.' However, you notice your partner's hands are still shaking, they haven't made eye contact with anyone since the call ended, and their voice is unsteady.",
                    question: "What is the MOST appropriate action regarding this situation?",
                    options: ["Respect your partner's wishes and go home — everyone copes differently", "Encourage your partner to participate in a defusing session now or a CISD in the next 24-72 hours, noting that acute stress reactions are normal and CISM is designed specifically for situations like this", "Tell your partner to 'man up' and move on", "Report your partner to the supervisor as emotionally unfit for duty"], correct: 1
                },
                {
                    scenario: "You are called to a motor vehicle collision on a rural two-lane highway at dusk. As you approach from the east, you can see a single vehicle has struck a tree. There is light smoke coming from the engine compartment. Traffic is passing in both directions at approximately 55 mph. No law enforcement or fire department has arrived yet. Your patient is a 22-year-old male who appears to have a deformed right femur and is complaining of difficulty breathing. He is still in the vehicle.",
                    question: "In addition to beginning patient assessment and care, which of the following scene safety measures is MOST critical at this moment?",
                    options: ["Calling the patient's family to notify them of the accident", "Positioning the ambulance to block the lane of travel and create a protected work area, and having all personnel wear high-visibility vests", "Starting IV fluids since the patient may be in shock", "Removing the patient from the vehicle immediately due to the smoke"], correct: 1
                }
            ]
        },
        {
            id: "c1s4",
            shortTitle: "1.3 Infection Prevention & PPE",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#shield-alert"/></svg> Infection Prevention &amp; PPE</h3>
                <p><strong>You can't tell who's infectious by looking</strong> &mdash; use <strong>Standard Precautions</strong> on every patient as your baseline (hand hygiene, PPE by task, safe sharps, surface cleaning).</p>

                <h4>Transmission-based precautions (added to Standard)</h4>
                <table>
                    <thead><tr><th>Type</th><th>Spread</th><th>PPE</th><th>Examples</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Contact</strong></td><td>Touch / surfaces</td><td>Gloves + gown</td><td>MRSA, C. diff, scabies</td></tr>
                        <tr><td><strong>Droplet</strong></td><td>Large droplets (~6 ft)</td><td>Surgical mask + gloves</td><td>Influenza, COVID-19, pertussis</td></tr>
                        <tr><td><strong>Airborne</strong></td><td>Tiny particles that stay suspended</td><td><strong>N95</strong> + eye protection; mask the patient</td><td>TB, measles, varicella</td></tr>
                    </tbody>
                </table>

                <h4>PPE essentials</h4>
                <ul>
                    <li><strong>Gloves:</strong> any contact with blood/fluids/mucous membranes; change between patients; hand hygiene after removal.</li>
                    <li><strong>Mask / N95:</strong> surgical mask for droplets; <strong>N95 (fit-tested annually)</strong> for airborne.</li>
                    <li><strong>Eye protection &amp; gown:</strong> whenever splash is possible (childbirth, suctioning, arterial bleeding).</li>
                    <li>Remove PPE dirtiest-first, then hand hygiene immediately.</li>
                </ul>

                <h4>Hand hygiene &mdash; the #1 measure</h4>
                <p><strong>Alcohol rub (&ge;60%)</strong> when hands aren't visibly soiled; <strong>soap &amp; water (&ge;20 s)</strong> when soiled, after C. diff/norovirus (alcohol doesn't kill spores), and after the restroom.</p>

                <h4>Diseases EMS worries about</h4>
                <table>
                    <thead><tr><th>Disease</th><th>Spread</th><th>Key point</th></tr></thead>
                    <tbody>
                        <tr><td>Hepatitis B</td><td>Blood/fluids</td><td>Very infectious; <strong>vaccine highly effective</strong> (employer offers free)</td></tr>
                        <tr><td>Hepatitis C</td><td>Blood</td><td>Most common chronic bloodborne infection; <strong>no vaccine</strong></td></tr>
                        <tr><td>HIV</td><td>Blood/sexual</td><td>~0.3% risk per needlestick; <strong>PEP within 2 h</strong> (up to 72 h)</td></tr>
                        <tr><td>TB</td><td>Airborne</td><td>N95 + annual screening</td></tr>
                        <tr><td>MRSA</td><td>Contact</td><td>Resistant staph; contact precautions</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>After a needlestick / exposure &mdash; act NOW:</strong> wash the area (flush mucous membranes 15 min) &rarr; report immediately &rarr; go to the designated facility &rarr; <strong>HIV PEP ideally within 2 hours</strong> (&le;72 h) &rarr; file the exposure report and follow up. Never recap needles by hand; sharps go straight into the container.
                </div>

                <p style="font-size:.92em;"><strong>OSHA Bloodborne Pathogens Standard:</strong> your employer must provide PPE and the HBV vaccine free, an exposure-control plan, annual training, and post-exposure follow-up. Stay current on HBV, flu, Tdap, MMR, varicella, COVID-19.</p>
            </div>`,
            flashcards: [
                { question: "What is the difference between Standard Precautions and Transmission-Based Precautions?", answer: "Standard Precautions apply to ALL patient care regardless of infection status. Transmission-Based Precautions are additional measures for patients with known/suspected specific infections spread by contact, droplet, or airborne routes.", category: "Infection Control" },
                { question: "What are the three categories of Transmission-Based Precautions?", answer: "Contact Precautions (gloves, gown), Droplet Precautions (surgical mask), and Airborne Precautions (N95 respirator)", category: "Infection Control" },
                { question: "When should hand hygiene be performed with soap and water instead of alcohol-based hand rub?", answer: "When hands are visibly soiled, after caring for patients with C. difficile or norovirus, and after using the restroom", category: "Hand Hygiene" },
                { question: "What is the proper order for removing PPE to avoid self-contamination?", answer: "Gloves → gown → mask/respirator → eye protection, with hand hygiene after each step if possible and always after all PPE is removed", category: "PPE" },
                { question: "How soon should post-exposure prophylaxis (PEP) for HIV be initiated after a needlestick injury?", answer: "Ideally within 2 hours, and no later than 72 hours after exposure", category: "Needlestick Safety" },
                { question: "Which federal regulation requires employers to protect workers from bloodborne pathogen exposure?", answer: "OSHA Bloodborne Pathogens Standard (29 CFR 1910.1030)", category: "Regulations" },
                { question: "What are examples of diseases requiring airborne precautions?", answer: "Tuberculosis (TB), measles (rubeola), chickenpox (varicella), and disseminated shingles (herpes zoster)", category: "Transmission-Based Precautions" },
                { question: "What type of respirator is required for airborne precautions and what must be done annually to ensure its effectiveness?", answer: "N95 respirator (or higher). Fit testing must be performed annually to ensure an adequate facial seal.", category: "PPE" }
            ],
            quiz: [
                { q: "Standard Precautions apply to:", options: ["Only patients known to have an infectious disease", "Only patients in the hospital setting", "All patients regardless of their suspected or confirmed infection status", "Only patients who are actively symptomatic"], correct: 2 },
                { q: "Which disease requires airborne precautions in addition to standard precautions?", options: ["Influenza", "Tuberculosis", "MRSA skin infection", "C. difficile"], correct: 1 },
                { q: "What is the minimum alcohol concentration required for an effective alcohol-based hand rub?", options: ["40%", "60%", "80%", "95%"], correct: 1 },
                { q: "After a needlestick injury, when should HIV post-exposure prophylaxis (PEP) ideally be initiated?", options: ["Within 24 hours", "Within 2 hours", "Within 7 days", "Only if the source patient tests positive for HIV"], correct: 1 },
                { q: "Which OSHA standard requires employers to provide the Hepatitis B vaccine free of charge to at-risk employees?", options: ["Hazard Communication Standard", "Bloodborne Pathogens Standard", "Respiratory Protection Standard", "General Duty Clause"], correct: 1 },
                { q: "What should an EMT do immediately after a needlestick exposure?", options: ["Wait until the end of shift to report it", "Wash the area thoroughly with soap and water, then report immediately to a supervisor", "Apply a bandage and continue working", "Soak the wound in bleach"], correct: 1 },
                { q: "Which of the following diseases can survive on environmental surfaces for up to 7 days?", options: ["HIV", "Hepatitis B virus", "Influenza", "COVID-19"], correct: 1 },
                { q: "[HARD] An EMT is caring for a patient with a persistent productive cough, night sweats, and unintentional weight loss. The EMT notices a surgical mask on the patient's face but has only brought standard PPE. The EMT should:", options: ["Continue care with standard gloves since the patient is already masked", "Don an N95 respirator, place a surgical mask on the patient if not already done, and maximize ambulance ventilation", "Refuse to transport the patient until a HazMat team arrives", "Ask the patient to hold their breath during transport"], correct: 1 },
                { q: "Contact precautions would be indicated for which of the following patients?", options: ["A patient with influenza", "A patient with a known MRSA wound infection", "A patient with active tuberculosis", "A patient with COVID-19"], correct: 1 },
                { q: "[HARD] Which of the following statements about Hepatitis C is correct?", options: ["A vaccine is available to prevent Hepatitis C infection", "Hepatitis C is primarily transmitted through the airborne route", "Most acute Hepatitis C infections become chronic, and no vaccine is available", "Hepatitis C cannot survive outside the human body"], correct: 2 },
                { q: "How long should you wash your hands with soap and water to effectively remove pathogens?", options: ["5 seconds", "At least 20 seconds", "1 minute", "2 minutes"], correct: 1 },
                { q: "[HARD] An EMT is transporting a patient with suspected meningococcal meningitis. The EMT is wearing gloves and a surgical mask. Based on recommended precautions, what additional PPE is required for optimal protection?", options: ["None — gloves and mask are sufficient", "An N95 respirator instead of a surgical mask", "Eye protection should be added — droplet precautions require a mask plus eye protection (a gown is not required)", "A face shield only"], correct: 2 }
            ],
            critical: [
                {
                    scenario: "You and your partner are dispatched to a skilled nursing facility for a 78-year-old female with a fever and altered mental status. Upon arrival, the charge nurse informs you that the patient has been on contact precautions for a positive MRSA wound culture from a pressure ulcer on her sacrum. The patient is incontinent of urine, has dried emesis on her gown, and requires full assistance with repositioning. As you enter the room, you see the contact precaution sign on the door with a supply cart containing gloves, gowns, and a face shield. Your partner starts to enter the room with just gloves on, saying 'We're just here to pick her up and go.'",
                    question: "What is the MOST appropriate action regarding infection prevention in this scenario?",
                    options: ["Follow your partner's lead — a brief patient contact for transport does not require full PPE", "Don full contact precautions including gloves and gown before entering the room, and clean and disinfect the stretcher and ambulance after transport", "Only wear a mask since MRSA is not airborne", "Ask the nursing staff to clean the patient and change her gown before you transport"], correct: 1
                },
                {
                    scenario: "While starting an IV line on a 45-year-old male patient with dehydration in the back of the ambulance, the patient suddenly moves his arm as the ambulance goes over a bump. The used IV catheter — which has just been withdrawn — accidentally punctures your gloved hand. The patient has a history of intravenous drug use and his Hepatitis B and HIV status are unknown. Your partner is driving and cannot assist. You are 15 minutes from the hospital.",
                    question: "What is the MOST appropriate sequence of actions following this needlestick injury?",
                    options: ["Finish the IV attempt and complete patient care, then report the exposure after arriving at the hospital", "Remove your glove, squeeze the wound to make it bleed, wash the area thoroughly with soap and water, inform your partner, and request immediate evaluation at the receiving hospital for PEP consideration", "Apply a bandage and continue — the risk of transmission is very low", "Use an alcohol wipe on the wound and continue with patient care"], correct: 1
                },
                {
                    scenario: "You are called to a private residence for a 30-year-old male with a fever, sore throat, and a rash. The patient has a temperature of 102.8°F, a red throat with exudate, and a fine red rash on his torso that feels like sandpaper. He is coughing frequently. The patient's roommate mentions that several other people at their workplace have been sick with 'something going around.' The patient says he feels like he is 'barely able to breathe.' His oxygen saturation is 94% on room air, and his respiratory rate is 22. You suspect this could be a contagious respiratory infection, possibly measles, given the rash and fever pattern. Measles requires airborne precautions.",
                    question: "Given the uncertainty of the diagnosis and the potential for an airborne infectious disease, what PPE and infection control approach should the EMT take?",
                    options: ["Wear gloves and a surgical mask since the patient is coughing", "Don an N95 respirator, eye protection, gloves, and a gown, place a surgical mask on the patient, and maximize ventilation in the patient care compartment", "Wear only gloves since the rash is not likely to be infectious", "Wait at the door until the patient's roommate provides a doctor's note with a diagnosis"], correct: 1
                }
            ]
        },
    {
        id: "c1s5",
        shortTitle: "1.4 Medical, Legal & Ethical Issues",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> Medical, Legal &amp; Ethical Issues</h3>

            <h4>Scope vs standard</h4>
            <ul>
                <li><strong>Scope of practice:</strong> what state law (and your medical director) lets you do.</li>
                <li><strong>Standard of care:</strong> what a reasonable EMT of your level would do in the same situation (a national standard).</li>
            </ul>

            <h4>Duty, negligence &amp; abandonment</h4>
            <p><strong>Duty to act:</strong> on duty, you must respond and provide care. Once you start, you can't stop until equal or higher care takes over &mdash; leaving early is <strong>abandonment</strong>.</p>
            <p><strong>Negligence = all four "D's":</strong> <strong>Duty</strong> &rarr; <strong>Dereliction</strong> (breach of the standard) &rarr; <strong>Damages</strong> (real harm) &rarr; <strong>Direct cause</strong>. Miss one and there is no negligence &mdash; which is why your PCR matters.</p>

            <h4>Good Samaritan laws</h4>
            <p>Protect <em>off-duty / volunteer</em> aid given in <strong>good faith, within your training, without gross negligence, and unpaid</strong>. They do <strong>not</strong> cover recklessness, acting outside your scope, or (usually) on-duty paid work.</p>

            <h4>Confidentiality &amp; HIPAA</h4>
            <p>Protect all patient health information (PHI). Share only with those caring for the patient, the patient or their representative, law enforcement with a warrant/legal requirement, or public health. Never discuss patients in public or on social media. <strong>Mandatory reporting overrides confidentiality:</strong> child/elder abuse, certain domestic violence, gunshot/stab wounds, dog bites, and specified infectious diseases.</p>

            <h4>The four ethical principles</h4>
            <ul>
                <li><strong>Autonomy</strong> &mdash; respect the patient's own decisions (including refusal).</li>
                <li><strong>Beneficence</strong> &mdash; act in their best interest.</li>
                <li><strong>Non-maleficence</strong> &mdash; "first, do no harm."</li>
                <li><strong>Justice</strong> &mdash; treat everyone fairly, regardless of who they are.</li>
            </ul>

            <h4>Advance directives &amp; DNR</h4>
            <ul>
                <li><strong>Valid DNR present:</strong> follow it &mdash; no CPR/intubation/defib; give comfort care.</li>
                <li><strong>DNR claimed but not produced:</strong> begin resuscitation and contact medical direction &mdash; err toward care.</li>
                <li><strong>No directive:</strong> full resuscitation.</li>
            </ul>
            <p>Living wills, healthcare POA, and <strong>POLST/MOLST</strong> portable orders also direct care. <strong>Organ donors receive the same aggressive care</strong> &mdash; donor status never changes your treatment. (Consent &amp; refusal in detail: section 1.6.)</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Crime scene:</strong> scene safety first, then <strong>patient care over evidence</strong> &mdash; but disturb as little as possible, cut around bullet/stab holes, and document anything you move.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What is the difference between scope of practice and standard of care?",
                answer: "Scope of practice is defined by state law and outlines what procedures an EMT is legally authorized to perform. Standard of care is a national standard asking what a reasonable, prudent EMT would do under similar circumstances.",
                category: "Legal Concepts"
            },
            {
                question: "What are the four elements required to prove negligence (the four D's)?",
                answer: "Duty (legal obligation to act), Breach (failed to meet standard of care), Damages (patient suffered harm), and Causation (breach directly caused the damages). All four must be present.",
                category: "Legal Concepts"
            },
            {
                question: "Under what conditions do Good Samaritan laws protect an EMT?",
                answer: "When acting in good faith, within scope of training, without gross negligence, and without receiving compensation for that specific act. They generally apply to off-duty care, not on-duty employment.",
                category: "Legal Concepts"
            },
            {
                question: "What patient information must be reported even without the patient's consent?",
                answer: "Child abuse/neglect, elder abuse, certain infectious diseases, gunshot/stab wounds, animal bites, drug-related injuries, and domestic violence involving serious injury (varies by state).",
                category: "Confidentiality"
            },
            {
                question: "What are the four core principles of medical ethics?",
                answer: "Autonomy (patient's right to decide), Beneficence (acting in patient's best interest), Non-maleficence (do no harm), and Justice (fair treatment for all patients).",
                category: "Ethics"
            },
            {
                question: "What should an EMT do if family reports a DNR exists but cannot produce the document?",
                answer: "Begin resuscitation and contact medical direction. Err on the side of providing care when no valid legal documentation is immediately available. Document attempts to locate the DNR.",
                category: "Advance Directives"
            },
            {
                question: "When you are first on scene at a crime scene as an EMT, what is your priority?",
                answer: "Scene safety first — do not enter until law enforcement has secured the scene. Then patient care takes priority over evidence preservation. Document any items moved during care.",
                category: "Crime Scenes"
            },
            {
                question: "What does HIPAA protect and what are the penalties for violation?",
                answer: "HIPAA protects all patient health information (PHI) including name, medical details, and insurance info. Penalties include fines up to $50,000 per violation and potential imprisonment.",
                category: "Confidentiality"
            }
        ],
        quiz: [
            {
                q: "Which of the following BEST defines scope of practice for an EMT?",
                options: [
                    "What a reasonable EMT would do under similar circumstances",
                    "The legal range of duties authorized by state law and medical direction",
                    "The ethical obligations every EMT has to their patients",
                    "The minimum training hours required for state certification"
                ],
                correct: 1
            },
            {
                q: "A plaintiff suing an EMT for negligence must prove all of the following EXCEPT:",
                options: [
                    "The EMT had a duty to act",
                    "The EMT breached the standard of care",
                    "The EMT acted with malicious intent",
                    "The breach caused actual damages to the patient"
                ],
                correct: 2
            },
            {
                q: "You are off-duty at a grocery store when a shopper collapses. Under most state Good Samaritan laws, which of the following would NOT protect you from liability?",
                options: [
                    "Rendering care within your EMT scope of training",
                    "Stopping to help without accepting payment",
                    "Intentionally performing a procedure you are not trained for",
                    "Acting in good faith to provide emergency care"
                ],
                correct: 2
            },
            {
                q: "An EMT discusses a patient's medical condition with friends in a public restaurant without using the patient's name. This is:",
                options: [
                    "Acceptable because no name was used",
                    "Acceptable if the friends are healthcare providers",
                    "A HIPAA violation if the patient could be identified from the context",
                    "Always legal under free speech protections"
                ],
                correct: 2
            },
            {
                q: "Which of the following situations is NOT a mandatory reporting requirement for an EMT?",
                options: [
                    "A suspected case of child abuse",
                    "An elderly patient with unexplained bruises and neglect",
                    "A patient with a history of hypertension who stopped taking medication",
                    "A gunshot wound to the abdomen"
                ],
                correct: 2
            },
            {
                q: "An EMT is called to a home where a patient in cardiac arrest has a signed, valid out-of-hospital DNR order on the refrigerator. The family is distraught and begs the EMT to 'do something.' What should the EMT do?",
                options: [
                    "Begin CPR because the family is requesting it",
                    "Follow the DNR order and provide comfort care only",
                    "Call medical direction for permission to start resuscitation",
                    "Start resuscitation and sort out the paperwork at the hospital"
                ],
                correct: 1
            },
            {
                q: "Which ethical principle is MOST directly violated when an EMT refuses to treat a patient because of the patient's race?",
                options: [
                    "Autonomy",
                    "Beneficence",
                    "Non-maleficence",
                    "Justice"
                ],
                correct: 3
            },
            {
                q: "At a crime scene, an EMT must cut a patient's shirt to expose a wound. The shirt has a bullet hole. What is the BEST approach?",
                options: [
                    "Cut directly through the bullet hole to save time",
                    "Cut around the bullet hole to avoid damaging potential evidence",
                    "Remove the shirt by pulling it over the patient's head",
                    "Leave the shirt on and work around it"
                ],
                correct: 1
            },
            {
                q: "A patient with a valid donor designation on their driver's license is in cardiac arrest. How should the EMT manage this patient?",
                options: [
                    "Withhold resuscitation since the patient is an organ donor",
                    "Provide full resuscitative efforts as with any other patient",
                    "Transport to a transplant center only",
                    "Call medical direction before starting any treatment"
                ],
                correct: 1
            },
            {
                q: "HARD: An EMT arrives to find a 78-year-old patient in cardiac arrest. The patient's spouse produces a living will that states 'no heroic measures.' There is no DNR order signed by a physician. What should the EMT do?",
                options: [
                    "Honor the living will and do not start CPR",
                    "Start CPR and contact medical direction for guidance",
                    "Start CPR and transport immediately without contacting anyone",
                    "Call the patient's primary care physician for permission"
                ],
                correct: 1
            },
            {
                q: "HARD: An EMT is called to a suspected child abuse situation. The parent refuses to allow the EMT to assess the child. Which of the following is TRUE?",
                options: [
                    "The EMT cannot assess without parental consent",
                    "The EMT should call law enforcement immediately and document the situation",
                    "The EMT should respect the parent's decision and leave",
                    "Implied consent allows the EMT to assess the child without parental permission"
                ],
                correct: 1
            },
            {
                q: "HARD: Which of the following scenarios BEST describes an ethical dilemma involving the conflict between autonomy and beneficence?",
                options: [
                    "A patient with a valid DNR arrests, and the family requests resuscitation",
                    "A competent, alert patient with chest pain refuses transport despite clear signs of an acute MI",
                    "An EMT must decide whether to transport a patient with minor injuries or stay for a multi-casualty scene",
                    "A paramedic performs a procedure that is outside their scope of practice"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                scenario: "You and your partner are dispatched to a residence for a 9-1-1 call reporting an unconscious female. Upon arrival, law enforcement is already on scene securing the area. You find a 34-year-old woman with a gunshot wound to the lower abdomen. She is conscious, breathing, and has a weak radial pulse. The police need to collect evidence including the firearm on the kitchen counter and the patient's clothing. As you begin assessing and treating the patient, you realize you need to cut away her shirt to fully visualize the wound and apply a dressing. Meanwhile, a neighbor who witnessed the incident is outside giving a statement to police, and the patient keeps asking you, 'Am I going to die? Please don't tell my husband I was here with someone else.'",
                question: "How should the EMT balance evidence preservation, patient care, and the patient's request for confidentiality?",
                options: [
                    "Refuse to cut the clothing and transport the patient fully clothed to preserve all evidence",
                    "Cut around the bullet hole in the shirt, document what was done, provide full care, and inform the patient that confidentiality has limits — the police and hospital will need relevant information for her treatment",
                    "Cut through the bullet hole to save time, tell the patient you will keep her secret, and transport without documenting the shirt damage",
                    "Wait for the police to photograph and document the clothing before beginning any patient care"
                ],
                correct: 1
            },
            {
                scenario: "You respond to a nursing home for an 82-year-old male patient who is confused and has a fever of 102.5°F. The nursing staff reports he has a DNR order on file but cannot produce the actual document because 'it's in the administrator's office and she went home for the day.' The patient is breathing but his respiratory rate is 28 and shallow, and his oxygen saturation is 88% on room air. His daughter arrives and insists, 'My father would never want to be kept alive by machines — he signed that DNR for a reason. Do not put him on oxygen or take him to the hospital.' The patient's son, who arrives a few minutes later, yells, 'My father needs help! Do everything you can! The DNR only means no CPR, not no treatment at all!'",
                question: "What is the EMT's BEST course of action given the conflicting information and unavailable DNR documentation?",
                options: [
                    "Follow the daughter's wishes because the DNR was mentioned, withhold oxygen, and do not transport",
                    "Begin oxygen therapy, explain that a DNR cannot be confirmed without the document, transport the patient to the hospital, and provide all appropriate care short of CPR if he arrests en route",
                    "Call medical direction to ask whether you should ignore the DNR and treat the patient based on the son's request",
                    "Initiate transport without oxygen since the DNR may apply, and let the emergency department sort out the legal issues"
                ],
                correct: 1
            },
            {
                scenario: "You are transporting a 19-year-old college student who was found unconscious in her dorm room after ingesting an unknown quantity of pills in an apparent suicide attempt. She is now awake and crying. During transport, she tells you, 'I took the pills because my boyfriend broke up with me, but I didn't really want to die — I just wanted the pain to stop.' She then grabs your arm and whispers, 'Please don't tell my parents. They're strict Muslims — they will disown me if they find out I tried to kill myself. If you tell them, I'll deny everything and say I just got sick from food poisoning.' Her parents are waiting at the hospital and you know they will ask you what happened. You also know that suicidal ideation with a plan and attempt represents a mandatory mental health hold in your state, and the emergency department will need to evaluate her for inpatient psychiatric care.",
                question: "How should the EMT handle this situation regarding the patient's request for confidentiality and the parents' expected questions?",
                options: [
                    "Promise the patient you will keep her secret and tell the parents she had food poisoning to protect her relationship with her family",
                    "Explain to the patient that while you respect her privacy, you are required to report the truth to the hospital staff for her safety, and that the hospital team will determine what to share with her parents — you will not discuss details with the family yourself but will document the accurate clinical presentation",
                    "Contact law enforcement to report the suicide attempt and have them inform the parents",
                    "Tell the patient that since she is over 18, you are legally bound to follow her wishes and will not write anything in your report about the suicide attempt"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "c1s6",
        shortTitle: "1.5 Consent, Refusal & Advance Directives",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#scale"/></svg> Consent, Refusal &amp; Advance Directives</h3>
            <p><strong>No valid consent = battery.</strong> Get permission before you assess or treat.</p>

            <h4>Types of consent</h4>
            <ul>
                <li><strong>Expressed (informed):</strong> a competent adult agrees after you explain who you are, what you'll do, the risks/benefits, alternatives, and the risk of refusing. Can be withdrawn anytime.</li>
                <li><strong>Implied:</strong> for the unconscious/altered patient in a true emergency, the law assumes they would consent. Ends once they regain capacity.</li>
                <li><strong>Minors:</strong> need a parent/guardian (or in loco parentis). Exceptions: emancipated and mature minors, and the emergency exception (treat under implied consent if no guardian and a life threat).</li>
                <li><strong>Involuntary:</strong> court orders, mental-health holds, and police custody can authorize care without the patient's agreement.</li>
            </ul>

            <h4>Refusal of care</h4>
            <p>A valid refusal requires the patient to be <strong>competent, informed, and acting voluntarily.</strong></p>
            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>A refusal from an impaired patient is NOT valid.</strong> Altered, intoxicated, suicidal, hypoxic, hypoglycemic, or head-injured patients <em>cannot</em> legally refuse &mdash; treat under implied consent or a mental-health hold. Letting an incompetent patient refuse is a top cause of EMS liability.
            </div>
            <p><strong>Documenting an AMA refusal:</strong> record your assessment/vitals, what you recommended, the <strong>specific risks of refusing</strong> you explained, the patient's acknowledgement, their signature (or note refusal to sign), a witness (law enforcement ideally), and any medical-direction contact. Offer to call a family member. When in doubt, contact <strong>online medical direction</strong>.</p>

            <h4>Advance directives &mdash; quick decision tree</h4>
            <ol>
                <li><strong>Valid DNR / POLST present?</strong> Follow it &mdash; comfort care as specified.</li>
                <li><strong>DNR reported but not produced?</strong> Start resuscitation, contact medical direction.</li>
                <li><strong>Living will only (no DNR)?</strong> Full resuscitation; contact medical direction.</li>
                <li><strong>Family disputes a valid DNR?</strong> Honor the DNR &mdash; it is the patient's documented wish.</li>
                <li><strong>Arrest, no info?</strong> Full resuscitation &mdash; you're never penalized for caring when no directive exists.</li>
            </ol>
            <p><strong>POLST/MOLST</strong> are bright-colored physician orders (CPR status + level of intervention) honored across all settings; a <strong>healthcare POA</strong> decides for an incapacitated patient. <strong>Document everything.</strong></p>

            <h4>Mental-health holds &amp; custody</h4>
            <ul>
                <li>Always rule out medical causes of altered behaviour first (glucose, oxygen, overdose, head injury).</li>
                <li>A patient on a valid hold <strong>cannot refuse transport.</strong> Don't restrain without law enforcement directing the scene.</li>
                <li>Prisoners/arrestees still get medical care; police handle security, you handle medicine &mdash; document objectively.</li>
            </ul>
        </div>`,
        flashcards: [
            {
                question: "What is the difference between expressed consent and implied consent?",
                answer: "Expressed consent is verbally or non-verbally given by a competent, informed adult. Implied consent applies when a patient is unconscious or unable to consent and a life-threatening emergency exists — the law assumes they would consent if able.",
                category: "Consent"
            },
            {
                question: "What four elements must be met for a patient's refusal of care to be valid?",
                answer: "The patient must be (1) competent (not impaired by alcohol, drugs, head injury, or illness), (2) informed (understands risks and consequences), (3) voluntary (not coerced), and (4) the refusal must be documented thoroughly.",
                category: "Refusal of Care"
            },
            {
                question: "Who can give consent for a minor patient?",
                answer: "A parent, legal guardian, or person acting in loco parentis. Emancipated minors (married, military, financially independent) can consent for themselves. In life-threatening emergencies when no parent is available, implied consent applies.",
                category: "Consent"
            },
            {
                question: "What is a POLST form and how does it differ from a DNR?",
                answer: "A POLST (Physician Orders for Life-Sustaining Treatment) is a medical order covering CPR status, medical interventions, antibiotics, and artificial nutrition. A DNR only addresses resuscitation status. POLST forms provide more comprehensive treatment guidance for EMS.",
                category: "Advance Directives"
            },
            {
                question: "What should an EMT document on a refusal-of-care form?",
                answer: "Patient info, assessment findings, vital signs, recommended treatment, risks of refusal explained, patient's acknowledgment, patient signature (or refusal to sign), witness signature, law enforcement involvement, and any contact with medical direction.",
                category: "Refusal of Care"
            },
            {
                question: "Can a patient on an involuntary mental health hold refuse transport?",
                answer: "No. A patient on a valid mental health hold has been deemed a danger to themselves or others and cannot legally refuse care or transport. The EMT should document assessment and transport to the designated facility.",
                category: "Consent"
            },
            {
                question: "What does EMTALA require of EMS providers regarding patient treatment?",
                answer: "EMTALA requires that patients receive a medical screening examination and stabilizing treatment regardless of insurance status, ability to pay, or any discriminatory factor. EMS cannot refuse to treat or transport based on these factors.",
                category: "Legal Concepts"
            },
            {
                question: "What is the role of a Healthcare Power of Attorney (POA) in an EMS setting?",
                answer: "A POA is a person designated by the patient to make healthcare decisions when the patient cannot. If the patient is incapacitated and a valid POA is present, the EMT should follow the POA's decisions regarding treatment and transport.",
                category: "Advance Directives"
            }
        ],
        quiz: [
            {
                q: "An EMT arrives to find a 45-year-old unconscious male who was involved in a single-car crash with obvious head trauma. The patient has no identification and no family is present. Which type of consent allows the EMT to treat this patient?",
                options: [
                    "Expressed consent",
                    "Implied consent",
                    "Involuntary consent",
                    "Court-ordered consent"
                ],
                correct: 1
            },
            {
                q: "Which of the following patients is legally capable of giving informed consent for their own medical care?",
                options: [
                    "A 16-year-old living with his parents",
                    "A 17-year-old who is married and financially independent",
                    "A 10-year-old who appears mature for her age",
                    "A 15-year-old at school with a signed permission slip for field trips"
                ],
                correct: 1
            },
            {
                q: "A patient who initially consented to treatment now says, 'Stop, I changed my mind. I don't want your help.' The patient is alert, oriented, and appears competent. What should the EMT do?",
                options: [
                    "Continue treatment because the patient initially consented",
                    "Stop treatment and attempt to explain the risks of refusing care",
                    "Call law enforcement to force the patient to accept care",
                    "Continue treatment under implied consent since the patient is making a bad decision"
                ],
                correct: 1
            },
            {
                q: "Which of the following is TRUE regarding a patient on an involuntary mental health hold?",
                options: [
                    "They can refuse transport if they sign an AMA form",
                    "They cannot legally refuse transport for the psychiatric evaluation",
                    "They must be transported to a medical hospital first for clearance",
                    "They do not require medical assessment by the EMT"
                ],
                correct: 1
            },
            {
                q: "An EMT responds to a nursing home for a 90-year-old patient in cardiac arrest. The nurse produces a valid out-of-hospital DNR order. Which action is appropriate?",
                options: [
                    "Begin chest compressions while verifying the document",
                    "Withhold CPR and provide comfort care as outlined by protocol",
                    "Transport the patient to the hospital without any interventions",
                    "Call medical direction for permission to honor the DNR"
                ],
                correct: 1
            },
            {
                q: "A 55-year-old patient with chest pain refuses transport. He is alert, oriented, and has a GCS of 15. After you explain the risks of refusing care — including the possibility of a heart attack — he still refuses and signs the AMA form. Two hours later, you are dispatched to the same address for a cardiac arrest. The patient died. Which statement is MOST accurate?",
                options: [
                    "The EMT will be found negligent for not transporting the patient",
                    "The EMT properly documented the refusal and is protected if the patient was competent, informed, and the refusal was voluntary",
                    "The EMT should have called law enforcement to force transport",
                    "The EMT cannot be protected because the patient died"
                ],
                correct: 1
            },
            {
                q: "A 75-year-old patient has a living will stating she does not want 'heroic measures.' She is in respiratory distress with an oxygen saturation of 82%. There is no DNR order or POLST form. What should the EMT do?",
                options: [
                    "Withhold oxygen because the living will says no heroic measures",
                    "Provide full treatment including oxygen and transport, and contact medical direction for guidance",
                    "Provide oxygen only but do not transport since the patient wants limited care",
                    "Read the living will and follow its instructions as written"
                ],
                correct: 1
            },
            {
                q: "Under the Uniform Anatomical Gift Act (UAGA), an EMT should:",
                options: [
                    "Not start CPR on a known organ donor to preserve organs",
                    "Provide the same full resuscitative care to all patients regardless of donor status",
                    "Contact the organ procurement organization before starting treatment",
                    "Transport organ donors directly to a transplant center"
                ],
                correct: 1
            },
            {
                q: "An EMT is called to a home where a 30-year-old male is acutely psychotic, threatening self-harm, and has a history of schizophrenia. Police are on scene and have placed him on a 72-hour mental health hold. The patient is physically combative and refuses to get on the stretcher. What is the EMT's role?",
                options: [
                    "Physically restrain the patient without police assistance",
                    "Allow police to manage safety and restraint; the EMT provides medical assessment, treats any injuries, and transports under the legal authority of the hold",
                    "Refuse to transport since the patient is combative",
                    "Talk the patient into voluntarily agreeing to transport"
                ],
                correct: 1
            },
            {
                q: "HARD: Which of the following BEST describes the legal relationship between a DNR order and a POLST form?",
                options: [
                    "A DNR and POLST are the same document with different names",
                    "A DNR only addresses CPR status, while a POLST covers CPR plus other interventions like intubation, antibiotics, and artificial nutrition",
                    "A POLST replaces a DNR and only applies in hospitals",
                    "A DNR applies in all states, but POLST forms are only valid in nursing homes"
                ],
                correct: 1
            },
            {
                q: "HARD: A 40-year-old female is alert and oriented following a motor vehicle collision. She has minor abrasions but refuses transport. During your assessment, you notice her breath smells of alcohol and she admits to having 'a couple of drinks.' She wants to sign out AMA. What should the EMT do?",
                options: [
                    "Allow her to sign the AMA since she is alert and oriented",
                    "Carefully assess her mental status — intoxication may impair her ability to make an informed refusal. Consult medical direction and consider transportation for evaluation of both the collision injuries and the intoxication",
                    "Call law enforcement and have them force her to go to the hospital",
                    "Explain the risks, let her sign, and document the alcohol use"
                ],
                correct: 1
            },
            {
                q: "HARD: An EMT is called to a home where a 92-year-old female with advanced dementia is unresponsive with agonal respirations. The family produces a valid DNR but also says, 'She would never want to be in a hospital — please let her die at home.' The nursing notes indicate she has a fever and possible sepsis. The DNR says 'No CPR' but does not address treatment for non-arrest conditions. What should the EMT do?",
                options: [
                    "Leave the patient at home since she has a DNR and the family wants her to die in peace",
                    "Provide comfort care, oxygen, and transport for evaluation and treatment of the underlying condition (sepsis). The DNR only means no resuscitation if she arrests — it does not mean withhold all medical care",
                    "Provide full ACLS care including IV medications and intubation despite the DNR",
                    "Contact medical direction to ask whether to honor or ignore the DNR"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                scenario: "You are dispatched to a private residence for a 68-year-old male with chest pain. Upon arrival, you find the patient sitting in a chair, pale, diaphoretic, and clutching his chest. He tells you the pain started about 45 minutes ago and rates it as 8/10, radiating to his left arm. He has a history of hypertension and type 2 diabetes. His vital signs are: BP 100/68, HR 104, RR 22, SpO2 95% on room air. After your assessment, you recommend immediate transport to the hospital. The patient says, 'I know I'm having a heart attack — my father died from one. But I don't want to go. I've had a good life and I'm ready to go whenever it's my time. I'm not signing anything, I'm just staying here.' His wife is crying and begging him to go. His son, who is a nurse, tells you, 'He has decision-making capacity — he's not confused, he's just made a choice. You have to respect that.' You suspect the patient may be experiencing an acute STEMI based on his presentation and risk factors.",
                question: "Should the EMT respect the patient's refusal of transport, and how should the situation be managed?",
                options: [
                    "The patient clearly has decision-making capacity — explain the risks one more time, have him sign a refusal (or document his refusal to sign), have the son and wife witness, and clear the scene",
                    "The patient may have decision-making capacity, but the chest pain and diaphoresis could indicate a cardiac event that is compromising his perfusion and thus his competence. Attempt transport, involve medical direction, and if he continues to refuse despite a physician speaking to him, document thoroughly with law enforcement or family witnesses",
                    "Forcibly transport the patient since chest pain is a life-threatening emergency and implied consent applies",
                    "Call law enforcement to place the patient on a mental health hold since refusing life-saving care is not rational"
                ],
                correct: 1
            },
            {
                scenario: "You are dispatched to a long-term care facility for an 85-year-old female with a sudden change in mental status. The nurse reports the patient has advanced Alzheimer's disease and was found this morning with a blood glucose of 42 mg/dL. The patient is awake but confused, unable to follow commands, and does not recognize her daughter who is at the bedside. There is no advance directive on file at the facility. The daughter tells you, 'My mother signed a living will five years ago that says no extraordinary measures. She has Alzheimer's — she wouldn't want to be treated for this. Please just let her go.' The nurse says she cannot locate the living will and is not sure a current copy exists. While you are assessing the patient, she becomes increasingly lethargic and her blood glucose is now 38 mg/dL. You have standing orders to administer oral glucose or IM glucagon for altered mental status with hypoglycemia.",
                question: "How should the EMT proceed given the reported (but absent) advance directive and the daughter's request?",
                options: [
                    "Follow the daughter's request and withhold treatment since the patient has a living will",
                    "Treat the hypoglycemia immediately with IM glucagon since the patient is altered and no valid advance directive is present. Explain to the daughter that without a signed DNR or POLST form, you must provide emergency care. Contact medical direction if the daughter continues to object",
                    "Transport the patient without treatment to the emergency department where they can sort out the legal issues",
                    "Administer oral glucose only since IM glucagon might be considered an extraordinary measure"
                ],
                correct: 1
            },
            {
                scenario: "You are called to a college dormitory at 2:00 AM for a 19-year-old female who is intoxicated and was reportedly 'acting strangely' by her roommate. Upon arrival, you find the patient slurring her speech, unsteady on her feet, and reeking of alcohol. She tells you she is from Saudi Arabia, is studying engineering on a full scholarship, and had 'two beers' at a party (her BAC is later estimated to be approximately 0.15%). She has no visible injuries, vital signs are stable, and her pupils are equal and reactive. When you recommend transport to the hospital for evaluation, she becomes extremely upset. 'You cannot take me to the hospital! If the university finds out I was drinking, I will lose my scholarship and my visa. My family will disown me. I'm an adult — I'm 19 and I have the right to refuse.' Her roommate confirms the patient has no history of mental illness but is terrified of the consequences of a hospital visit. You know that in your state, the legal drinking age is 21 and that an intoxicated patient may not have the capacity to make an informed refusal.",
                question: "How should the EMT handle this patient's refusal given the cultural considerations, her intoxication status, and her stated fears?",
                options: [
                    "Allow her to sign a refusal since she is 19, alert, and able to verbally articulate her reasoning, despite the alcohol",
                    "The patient's judgment is likely impaired by alcohol. Not all intoxicated patients lack capacity, but a BAC of 0.15% with slurred speech and unsteady gait raises significant concern. Attempt to contact medical direction for guidance. If medical direction supports transport, explain to the patient that her safety comes first and that you will document only the medical necessity — not the drinking — in the report. If she continues to refuse, have law enforcement evaluate her capacity and document everything",
                    "Call law enforcement to place her on a mental health hold since her refusal is irrational",
                    "Transport her regardless of her wishes because she is under 21 and under the influence"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "c1s7",
        shortTitle: "1.6 Communication & Handoff",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#radio"/></svg> Communication &amp; Handoff</h3>
            <p><strong>Communication failures cause errors.</strong> From dispatch to handoff, keep it clear, concise, and professional.</p>

            <h4>Radio report &mdash; what to say</h4>
            <p>Unit ID &rarr; receiving hospital &rarr; patient age/sex &rarr; chief complaint &rarr; brief history &rarr; key exam findings &rarr; vitals &rarr; treatment given and response &rarr; ETA.</p>
            <div class="highlight-box" style="background:#e8f4fd; border-left-color:#0d6efd;">
                <em>"Mount Sinai, Medic 7 &mdash; transporting a 67-year-old male with chest pain about one hour. History of HTN and diabetes. Awake, alert, pale, diaphoretic; lungs clear. BP 110/68, HR 102, RR 20, SpO2 97% on room air. Gave 324 mg aspirin and O2 at 4 L; pain down from 8/10 to 5/10. ETA 8 minutes. Medic 7."</em>
            </div>
            <p><strong>Radio etiquette:</strong> listen before keying; press PTT and wait a beat; keep it under ~30 s; plain language, no profanity; <strong>never use the patient's name</strong> (HIPAA); acknowledge with "copy."</p>

            <h4>Team communication</h4>
            <ul>
                <li><strong>Closed-loop:</strong> order &rarr; repeat-back &rarr; confirm ("10 mg albuterol." &mdash; "10 mg albuterol." &mdash; "Correct.").</li>
                <li><strong>Speak up</strong> when something is unsafe. <strong>CUS</strong> words signal it: "I'm <strong>C</strong>oncerned / <strong>U</strong>ncomfortable / this is a <strong>S</strong>afety issue."</li>
            </ul>

            <h4>Talking with patients</h4>
            <p>Use <strong>active listening</strong>, <strong>open-ended questions</strong>, empathy, and plain language (say "trouble breathing," not "dyspnea"). Adapt to barriers: use a <strong>certified interpreter</strong> (never a child); face hearing-impaired patients; get to a child's eye level; give geriatric patients time and dignity; for combative patients keep distance, an exit, and a calm voice.</p>

            <h4>Handoff &mdash; SBAR</h4>
            <ul>
                <li><strong>S</strong>ituation &mdash; what's happening now.</li>
                <li><strong>B</strong>ackground &mdash; relevant history and events.</li>
                <li><strong>A</strong>ssessment &mdash; your findings and vitals.</li>
                <li><strong>R</strong>ecommendation &mdash; what you need / your treatment so far.</li>
            </ul>
            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Tell the story, don't just read the PCR.</strong> Add the patient's response to treatment, the vital-sign trend, scene findings/MOI, pertinent negatives, and where their belongings are. Finish with "Any questions?" and stay until care is formally accepted.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What are the components of an effective radio report to the hospital?",
                answer: "Unit ID, location, patient age/sex, chief complaint, brief history, assessment findings, vital signs, treatment given, response to treatment, and ETA. Always end with your unit number.",
                category: "Radio Communication"
            },
            {
                question: "What does SBAR stand for and when is it used?",
                answer: "Situation, Background, Assessment, Recommendation. It is used during patient handoff to structure the transfer of care at the hospital.",
                category: "Handoff"
            },
            {
                question: "What is closed-loop communication?",
                answer: "A communication technique where the sender gives a message, the receiver acknowledges it, and the sender confirms the acknowledgment. This ensures critical information is not lost, especially during procedures.",
                category: "Team Communication"
            },
            {
                question: "Why should an EMT never use a patient's name over the radio?",
                answer: "To protect patient confidentiality under HIPAA. Radio transmissions can be intercepted by scanners and unauthorized listeners. Patient identifiers should be minimized on broadcast channels.",
                category: "Confidentiality"
            },
            {
                question: "What are three therapeutic communication techniques an EMT should use with patients?",
                answer: "(1) Active listening — giving full attention and using verbal affirmations. (2) Open-ended questions — questions that cannot be answered with yes/no. (3) Empathy — acknowledging the patient's feelings without judgment.",
                category: "Therapeutic Communication"
            },
            {
                question: "How should an EMT communicate with a patient who has a language barrier?",
                answer: "Use a certified medical interpreter (in-person or phone). Do not use family members, especially minors, as interpreters. Speak to the patient, use simple words, and speak slowly. Avoid medical jargon.",
                category: "Communication Barriers"
            },
            {
                question: "What are CUS words and when should an EMT use them?",
                answer: "CUS stands for Concerned, Uncomfortable, Safety issue. These are structured keywords used to signal to the team that there is a safety concern that needs immediate attention.",
                category: "Team Communication"
            },
            {
                question: "What information should be included during the transfer of care at the hospital beyond the SBAR?",
                answer: "Response to treatments, trends in vital signs, changes in mental status during transport, relevant patient/family statements, scene details (position found, mechanism), pertinent negatives, and location of patient belongings.",
                category: "Handoff"
            }
        ],
        quiz: [
            {
                q: "When calling in a radio report to the hospital, an EMT should include all of the following EXCEPT:",
                options: [
                    "The patient's chief complaint",
                    "Vital signs and assessment findings",
                    "The patient's full name and Social Security number",
                    "Treatment provided and response to treatment"
                ],
                correct: 2
            },
            {
                q: "What is the CORRECT order of the SBAR communication framework?",
                options: [
                    "Situation, Background, Assessment, Recommendation",
                    "Situation, Assessment, Background, Recommendation",
                    "Background, Situation, Assessment, Recommendation",
                    "Situation, Background, Recommendation, Assessment"
                ],
                correct: 0
            },
            {
                q: "A paramedic asks you to administer 0.3 mg of epinephrine. You repeat back, '0.3 mg of epinephrine.' The paramedic confirms, 'Correct.' This is an example of:",
                options: [
                    "Open-ended communication",
                    "Closed-loop communication",
                    "SBAR communication",
                    "Therapeutic communication"
                ],
                correct: 1
            },
            {
                q: "Which of the following is an example of an open-ended question?",
                options: [
                    "\"Did you take your medication today?\"",
                    "\"Does your chest hurt?\"",
                    "\"Are you allergic to anything?\"",
                    "\"Can you tell me what happened leading up to the pain?\""
                ],
                correct: 3
            },
            {
                q: "An EMT is assessing a 7-year-old child who fell off a bicycle. What is the BEST communication approach for this patient?",
                options: [
                    "Speak only to the parent since the child is too young to understand",
                    "Get down to the child's eye level, use simple language, and explain what you are doing",
                    "Use medical terminology to sound professional and authoritative",
                    "Ignore the child's tears — children need to learn that medical care is not optional"
                ],
                correct: 1
            },
            {
                q: "During transport, a team member notices the patient's blood pressure is dropping. Using CUS words, they should say:",
                options: [
                    "\"Hey, the BP is dropping.\"",
                    "\"I'm concerned about the dropping blood pressure. I'm uncomfortable continuing without intervening. This is a safety issue.\"",
                    "\"Should we do something about the blood pressure?\"",
                    "\"The patient's BP is 88/50. I'm not sure if that matters.\""
                ],
                correct: 1
            },
            {
                q: "Which of the following is TRUE regarding radio communication in EMS?",
                options: [
                    "It is acceptable to use codes and abbreviations to shorten transmission time",
                    "Transmissions should be as brief as possible — typically under 30 seconds",
                    "Patient names should be included so the hospital can prepare the correct chart",
                    "Using profanity is acceptable in stressful situations"
                ],
                correct: 1
            },
            {
                q: "During a handoff, the EMT tells the nurse: 'She has a history of COPD and CHF. Her oxygen was 88% on room air and we started her on 4 LPM via nasal cannula with improvement to 94%.' This element of SBAR is the:",
                options: [
                    "Situation",
                    "Background",
                    "Assessment",
                    "Recommendation"
                ],
                correct: 2
            },
            {
                q: "What is the BEST way for an EMT to communicate with a patient who has a severe hearing impairment?",
                options: [
                    "Speak loudly into the patient's ear",
                    "Face the patient so they can read lips, write down key questions, and use gestures",
                    "Use a family member to interpret everything",
                    "Speak normally — hearing-impaired patients are used to lip reading"
                ],
                correct: 1
            },
            {
                q: "HARD: An EMT gives a radio report that includes the patient's age, chief complaint, vital signs, and treatment. The receiving physician asks, 'Why did you give aspirin if the patient has no cardiac history?' The EMT had not included the patient's cardiac risk factors (hypertension, family history of MI, smoking) in the report. The EMT's radio report omitted which key element?",
                options: [
                    "Assessment findings",
                    "Treatment response",
                    "Relevant history",
                    "ETA"
                ],
                correct: 2
            },
            {
                q: "HARD: During a mass casualty incident, an EMT needs to communicate with the incident commander. Which of the following communication practices should be used?",
                options: [
                    "Transmit on whatever channel is open",
                    "Provide a detailed report on each patient being transported",
                    "Use Incident Command System terminology and keep transmissions to essential information only",
                    "Use the patient's name so the command post can track victims"
                ],
                correct: 2
            },
            {
                q: "HARD: An EMT is handing off a patient with a suspected stroke to the emergency department nurse. The EMT says, 'Patient is a 68-year-old female with left-sided weakness starting two hours ago. She has a history of atrial fibrillation. Her NIHSS is 12 and she meets stroke alert criteria. We need a CT scan and stroke team activation.' This handoff exemplifies which SBAR component being used across multiple elements?",
                options: [
                    "S — Situation (what's happening now) and R — Recommendation (what is needed)",
                    "Only Assessment",
                    "Only Background",
                    "Situation only"
                ],
                correct: 0
            }
        ],
        critical: [
            {
                scenario: "You and your partner are transporting a 58-year-old male with acute chest pain to the regional cardiac center. He is on 4 LPM oxygen, has received aspirin, and his pain has decreased from 9/10 to 4/10 after nitroglycerin. En route, his condition deteriorates — his blood pressure drops from 128/78 to 82/50, his heart rate goes from 94 to 46, and he becomes diaphoretic and confused. Your partner is driving. You need to call the hospital to update them, but you also need to initiate the protocol for hypotension (fluid bolus, calling medical direction for further orders). The patient is becoming restless and trying to pull off his oxygen mask. You are the only EMT in the back of the ambulance.",
                question: "How should you prioritize and manage your communication with the hospital given this rapidly changing situation?",
                options: [
                    "Wait until you arrive at the hospital to give the full report since it's only a few more minutes",
                    "Call the hospital immediately, give a brief update on the critical change in condition and treatment being initiated, then focus on patient care. Use closed-loop communication. If possible, ask dispatch to notify the hospital of a 'critical patient, STEMI alert with hypotension' so the ED team is ready",
                    "Focus exclusively on patient care and let your partner handle the radio when they arrive",
                    "Administer the fluid bolus first, then call the hospital with a complete update once the patient is stable"
                ],
                correct: 1
            },
            {
                scenario: "You are called to a home for a 72-year-old female with acute onset of confusion. Her husband meets you at the door and says in a heavy accent, 'She doesn't know where she is. She was fine this morning, then after lunch she started talking nonsense.' The patient is sitting on the couch, agitated, pulling at her clothes, and speaking rapidly in what sounds like a mix of English and another language you do not recognize. Her husband explains that her primary language is Mandarin Chinese — English is her second language and she uses it less when she is stressed or confused. The patient clearly needs transport for evaluation of a potential stroke or metabolic emergency, but she is terrified and keeps saying, 'No hospital, no hospital.' She has no phone or tablet to access an interpreter service, and the husband's English is functional but limited for medical concepts. Your protocols require you to obtain a baseline neurological assessment including orientation questions and a Cincinnati Stroke Scale, but you cannot communicate effectively enough to complete it.",
                question: "How should the EMT manage this communication barrier to ensure an adequate assessment and safe transport?",
                options: [
                    "Use the husband as an interpreter since he is the only available resource — ask him to translate your questions and the patient's responses",
                    "Activate a language interpreter service by phone (most dispatch centers have access to over-the-phone interpretation in hundreds of languages). While waiting, use gestures, a translation app on your phone, and simple English words to assess the patient. The husband can assist with basic translation but explain that a professional interpreter is needed for medical accuracy. Transport and continue using the interpreter service en route",
                    "Skip the detailed neurological assessment and transport immediately since communication is impossible",
                    "Do not transport until a Mandarin-speaking paramedic can be dispatched from another station"
                ],
                correct: 1
            },
            {
                scenario: "You and your partner respond to a motor vehicle collision. A 35-year-old female was the restrained driver of a car that was rear-ended at moderate speed. She initially refused EMS at the scene, stating she was 'fine.' Her airbag did not deploy, and she got out of the car on her own. The police officer on scene convinced her to be evaluated, and she now reluctantly agrees to assessment. Your partner is obtaining vital signs while you ask questions. A bystander approaches you and says, 'I saw the whole thing — she was texting just before the crash. I told the police already.' When you ask the patient what happened, she says, 'I looked down to change the radio station for one second, and then I got hit.' You note she has a small bruise on her forehead from hitting the steering wheel and some mild midline cervical spine tenderness. She is alert and oriented with no distracting injuries. You want to place a cervical collar and transport for evaluation, but the patient says, 'Look, I agreed to let you check me, but I'm not wearing that collar and I'm definitely not going to the hospital. My kids are at home with a babysitter and I have to pick them up in an hour.'",
                question: "Given the mechanism of injury, the distracting environment of the scene, the conflicting information about the crash (texting vs. radio), and the patient's refusal to be collared or transported, how should you manage communication with this patient to achieve the best outcome?",
                options: [
                    "Tell the patient she has no choice — she was in a car crash and needs to be evaluated at the hospital. Apply the collar by explaining it is for her safety",
                    "Use therapeutic communication: explain your specific concerns (the bruise on her forehead suggests flexion-extension of the neck, and the midline tenderness could indicate a spine injury). Explain the risks of refusing in concrete terms ('If there is an injury to your spine and you move the wrong way, you could become paralyzed'). Offer to contact the babysitter on her behalf. If she still refuses, involve the police officer as a witness, document thoroughly, and have her sign a refusal",
                    "Agree not to apply the collar since she has no neurological symptoms and transport her without it",
                    "Call medical direction and request that the patient be placed on an involuntary hold since refusing a collar is an unsafe decision"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "c1s8",
        shortTitle: "1.7 Documentation & the Patient Care Report",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#file-text"/></svg> Documentation &amp; the Patient Care Report</h3>
            <p>The <strong>PCR</strong> is your most important document: it drives <strong>continuity of care</strong>, is a <strong>legal record</strong>, and supports billing, research, and QI.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>"If it wasn't documented, it wasn't done."</strong> Write the PCR as if you'll defend every word in court. Documenting care you didn't give is falsification &mdash; a fireable, chargeable offense.
            </div>

            <h4>Fixing an error</h4>
            <p>Never erase, white-out, or alter a submitted PCR. Draw a <strong>single line</strong> through the error, <strong>initial and date</strong> it, and add the correction or a late-entry supplement.</p>

            <h4>What goes in it</h4>
            <p>Dispatch/times, demographics, chief complaint <em>in the patient's words</em>, history/MOI, past history-meds-allergies, <strong>baseline + serial vitals</strong>, exam findings, interventions and the patient's response, and transport details &mdash; woven into a narrative from dispatch to handoff.</p>

            <h4>Narrative formats</h4>
            <ul>
                <li><strong>SOAP</strong> &mdash; Subjective, Objective, Assessment, Plan.</li>
                <li><strong>CHART</strong> &mdash; Chief complaint, History, Assessment, Rx (treatment), Transport.</li>
            </ul>
            <p>Stay <strong>objective</strong>: write findings ("smelled of alcohol, slurred speech, unsteady gait"), not opinions ("appeared drunk"). Leave no blank fields &mdash; note "unable to obtain." Most services use <strong>ePCR</strong>; review for completeness before finalizing.</p>
        </div>`,
        flashcards: [
            { question: "What does PCR stand for?", answer: "Patient Care Report", category: "Documentation Basics" },
            { question: "What is the legal maxim regarding documentation in EMS?", answer: "\"If it wasn't documented, it wasn't done.\"", category: "Legal Issues" },
            { question: "What does the 'S' in SOAP narrative format stand for?", answer: "Subjective — the patient's chief complaint and history in their own words.", category: "Narrative Formats" },
            { question: "How should you correct an error on a written PCR?", answer: "Draw a single line through the error, initial and date it, then write the correct information. Never use white-out or erase.", category: "Legal Issues" },
            { question: "What are the five functions of the PCR?", answer: "Continuity of care, legal document, billing/reimbursement, research data, and quality improvement.", category: "Documentation Basics" },
            { question: "What does CHART stand for in narrative documentation?", answer: "Chief complaint, History, Assessment, Rx (treatment), Transport.", category: "Narrative Formats" },
            { question: "What should you document when a patient refuses care?", answer: "Their competence (orientation), the risks explained (AMA form explained), their signature (or refusal to sign), and that ALS was not needed per protocol.", category: "Special Situations" },
            { question: "Why is objective language important in a PCR?", answer: "Because subjective or judgmental language (e.g., 'patient was drunk') is unprofessional, inaccurate, and can be harmful in legal proceedings. Document objective findings instead.", category: "Legal Issues" }
        ],
        quiz: [
            { q: "Which of the following is NOT a function of the Patient Care Report?", options: ["Continuity of care", "Legal documentation", "Determining hospital discharge diagnosis", "Quality improvement"], correct: 2 },
            { q: "A PCR has been subpoenaed for a lawsuit. Which principle should guide your documentation practice?", options: ["It is acceptable to omit minor details", "If it wasn't documented, it wasn't done", "Only ALS interventions need to be documented", "The PCR is not admissible in court"], correct: 1 },
            { q: "In the SOAP narrative format, what does the 'A' represent?", options: ["Actions taken", "Assessment — your impression of the patient's condition", "Administrative data", "Arrival time"], correct: 1 },
            { q: "You notice an error in a written PCR you just completed. How should you correct it?", options: ["Use white-out and rewrite", "Erase the error and write over it", "Draw a single line through the error, initial and date it", "Rewrite the entire PCR and discard the original"], correct: 2 },
            { q: "A patient is alert and oriented but refuses transport after a minor fall. What is the MOST important element to document?", options: ["That the patient was being difficult", "That the patient understood the risks and was competent to refuse", "Your opinion that the patient needed transport", "That law enforcement was contacted"], correct: 1 },
            { q: "Which statement demonstrates objective documentation?", options: ["The patient was completely intoxicated", "The patient is a frequent flyer who abuses the system", "The patient had slurred speech and a strong odor of ethanol on his breath", "The patient was a drunk mess"], correct: 2 },
            { q: "What is the PRIMARY advantage of electronic PCR (ePCR) over written PCR?", options: ["It allows you to document less information", "It enforces mandatory fields and reduces omissions", "It automatically completes the narrative for you", "It cannot be used in court"], correct: 1 },
            { q: "A patient with chest pain is transported to the hospital. When should the PCR be completed?", options: ["Within 72 hours", "Before the end of shift", "As soon as possible after the call, ideally before taking the next call", "Only if the patient requests it"], correct: 2 },
            { q: "Which field should be included in the minimum data set of every PCR?", options: ["Patient's insurance information", "Patient's home address", "Serial vital signs", "Next of kin contact information"], correct: 2, difficulty: "hard" },
            { q: "You are documenting a call involving a combative patient who required physical restraint. What should be included in your documentation?", options: ["Only that the patient was restrained", "Detailed justification, type of restraints applied, duration, and serial assessment of neurovascular status", "A statement that the patient was dangerous", "The patient's criminal history"], correct: 1 },
            { q: "What does the 'H' in CHART narrative format stand for?", options: ["Patient history", "Plan of care", "Primary impression", "Protocol used"], correct: 0, difficulty: "hard" },
            { q: "A crew member asks if they can document a treatment they did not perform because 'it sounds better for the record.' What is your BEST response?", options: ["Agree, because the hospital will not check", "Refuse — falsifying a PCR is illegal and unethical", "Document it but note it was not performed", "Document it only if they were too busy to perform it"], correct: 1, difficulty: "hard" }
        ],
        critical: [
            {
                scenario: "You and your partner respond to a 72-year-old male with chest pain. The patient is alert, oriented, and has a history of hypertension and diabetes. You perform a 12-lead ECG showing ST-elevation in leads II, III, and aVF. You administer oxygen, aspirin, and nitroglycerin en route to the hospital, with relief of pain from 8/10 to 4/10. Upon arrival at the ED, you give a verbal report to the nurse and transfer care. Later, back at the station, your partner starts writing the PCR and says, 'I don't remember the exact vitals from en route — I'll just make up something close enough.'",
                question: "What is the correct course of action regarding the missing vital signs?",
                options: [
                    "Allow your partner to estimate the vitals since you both agree they were 'normal'",
                    "Leave the vital signs blank and submit the PCR as is",
                    "Document only the vital signs you are certain of and note that en route vitals were not recorded; then discuss the importance of accurate documentation with your partner and consider reporting the issue to your supervisor",
                    "Do not submit any PCR until you both can remember the exact numbers"
                ],
                correct: 2
            },
            {
                scenario: "You are called to a single-vehicle MVC. The driver, a 34-year-old female, is ambulatory at the scene with minor abrasions and complains of neck pain. She refuses cervical collar and insists she is fine. She is alert and oriented × 3. She refuses transport and signs an AMA form. Two days later, you learn that the same patient was transported by another ambulance after developing severe neck pain and was diagnosed with a C5 fracture. Your supervisor asks to review your PCR for the original call.",
                question: "What element of documentation will be MOST critical in defending your care on the original call?",
                options: [
                    "That you notified law enforcement of the refusal",
                    "Detailed documentation of the patient's mental status, the refusal risks explained, the patient's signature on the AMA form, and your assessment findings including the absence of neurological deficits",
                    "A note that the patient was 'difficult and uncooperative'",
                    "A statement that you recommended transport but the patient declined"
                ],
                correct: 1
            },
            {
                scenario: "You respond to a motor vehicle collision with three patients: a 4-year-old child with a scalp laceration, a 35-year-old male with chest pain from airbag deployment, and a 70-year-old female complaining of hip pain. You are alone with one partner. You triage all three, call for additional resources, and begin care. After transport, you have three PCRs to complete. Another crew member asks if you can combine all three patients onto one PCR to save time.",
                question: "What is the most appropriate response?",
                options: [
                    "Combine them since they were all from the same incident",
                    "Complete a separate PCR for each patient, ensuring patient identifiers match the correct assessment and treatment data",
                    "Document the child only since pediatric patients are highest priority",
                    "Skip documentation for the least injured patient"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "c1s9",
        shortTitle: "1.8 Medical Terminology",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> Medical Terminology</h3>

            <h4>Why Medical Terminology Matters</h4>
            <p>Medical terminology is the language of healthcare. As an EMT, you must be able to communicate accurately and concisely with physicians, nurses, and other healthcare professionals. A single misunderstood term can lead to incorrect treatment. Conversely, when speaking with patients and their families, you must translate complex medical terms into plain language. Mastering medical terminology allows you to document more efficiently, understand radio reports, interpret protocols, and pass the NREMT exam.</p>

            <h4>Building Medical Terms</h4>
            <p>Most medical terms are built from three components: the <strong>root word</strong> (the core meaning, usually referring to a body part or system), the <strong>prefix</strong> (one or more letters placed before the root that modifies its meaning), and the <strong>suffix</strong> (one or more letters at the end of the word that modifies its meaning). A <strong>combining vowel</strong> (usually "o" or "i") is added between roots or between a root and a suffix when the suffix begins with a consonant. For example, in <em>cardiology</em>: <em>cardi/o</em> (heart) + <em>logy</em> (study of) = the study of the heart.</p>

            <h4>Common Prefixes</h4>
            <table style="width:100%; border-collapse:collapse; margin:1em 0;">
                <thead style="background:var(--primary-accent); color:#fff;">
                    <tr><th style="padding:8px; border:1px solid #ccc;">Prefix</th><th style="padding:8px; border:1px solid #ccc;">Meaning</th><th style="padding:8px; border:1px solid #ccc;">Example</th></tr>
                </thead>
                <tbody>
                    <tr><td style="padding:6px; border:1px solid #ccc;">hypo-</td><td style="padding:6px; border:1px solid #ccc;">Below, deficient</td><td style="padding:6px; border:1px solid #ccc;">Hypotension (low blood pressure)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">hyper-</td><td style="padding:6px; border:1px solid #ccc;">Above, excessive</td><td style="padding:6px; border:1px solid #ccc;">Hyperglycemia (high blood glucose)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">tachy-</td><td style="padding:6px; border:1px solid #ccc;">Fast</td><td style="padding:6px; border:1px solid #ccc;">Tachycardia (fast heart rate)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">brady-</td><td style="padding:6px; border:1px solid #ccc;">Slow</td><td style="padding:6px; border:1px solid #ccc;">Bradypnea (slow respiratory rate)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">a-/an-</td><td style="padding:6px; border:1px solid #ccc;">Without, absence of</td><td style="padding:6px; border:1px solid #ccc;">Apnea (without breathing)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">dys-</td><td style="padding:6px; border:1px solid #ccc;">Abnormal, difficult</td><td style="padding:6px; border:1px solid #ccc;">Dyspnea (difficulty breathing)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">pre-</td><td style="padding:6px; border:1px solid #ccc;">Before</td><td style="padding:6px; border:1px solid #ccc;">Premature (before full development)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">post-</td><td style="padding:6px; border:1px solid #ccc;">After</td><td style="padding:6px; border:1px solid #ccc;">Postoperative (after surgery)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">epi-</td><td style="padding:6px; border:1px solid #ccc;">Upon, above</td><td style="padding:6px; border:1px solid #ccc;">Epidural (upon the dura mater)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">sub-</td><td style="padding:6px; border:1px solid #ccc;">Under, below</td><td style="padding:6px; border:1px solid #ccc;">Subcutaneous (under the skin)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">intra-</td><td style="padding:6px; border:1px solid #ccc;">Within, inside</td><td style="padding:6px; border:1px solid #ccc;">Intravenous (within a vein)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">contra-</td><td style="padding:6px; border:1px solid #ccc;">Against, opposite</td><td style="padding:6px; border:1px solid #ccc;">Contraindication (reason against a treatment)</td></tr>
                </tbody>
            </table>

            <h4>Common Suffixes</h4>
            <table style="width:100%; border-collapse:collapse; margin:1em 0;">
                <thead style="background:var(--primary-accent); color:#fff;">
                    <tr><th style="padding:8px; border:1px solid #ccc;">Suffix</th><th style="padding:8px; border:1px solid #ccc;">Meaning</th><th style="padding:8px; border:1px solid #ccc;">Example</th></tr>
                </thead>
                <tbody>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-itis</td><td style="padding:6px; border:1px solid #ccc;">Inflammation</td><td style="padding:6px; border:1px solid #ccc;">Bronchitis (inflammation of the bronchi)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-ectomy</td><td style="padding:6px; border:1px solid #ccc;">Surgical removal</td><td style="padding:6px; border:1px solid #ccc;">Appendectomy (removal of the appendix)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-ostomy</td><td style="padding:6px; border:1px solid #ccc;">Creating an opening</td><td style="padding:6px; border:1px solid #ccc;">Tracheostomy (opening in the trachea)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-otomy</td><td style="padding:6px; border:1px solid #ccc;">Cutting into</td><td style="padding:6px; border:1px solid #ccc;">Cricothyrotomy (incision through the cricothyroid membrane)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-algia</td><td style="padding:6px; border:1px solid #ccc;">Pain</td><td style="padding:6px; border:1px solid #ccc;">Cephalalgia (headache)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-emia</td><td style="padding:6px; border:1px solid #ccc;">Blood condition</td><td style="padding:6px; border:1px solid #ccc;">Hypoglycemia (low blood sugar)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-oma</td><td style="padding:6px; border:1px solid #ccc;">Tumor, mass</td><td style="padding:6px; border:1px solid #ccc;">Hematoma (collection of blood)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-megaly</td><td style="padding:6px; border:1px solid #ccc;">Enlargement</td><td style="padding:6px; border:1px solid #ccc;">Cardiomegaly (enlarged heart)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-pathy</td><td style="padding:6px; border:1px solid #ccc;">Disease</td><td style="padding:6px; border:1px solid #ccc;">Neuropathy (nerve disease)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-osis</td><td style="padding:6px; border:1px solid #ccc;">Condition, often abnormal</td><td style="padding:6px; border:1px solid #ccc;">Cyanosis (blue discoloration from low oxygen)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-plasty</td><td style="padding:6px; border:1px solid #ccc;">Surgical repair</td><td style="padding:6px; border:1px solid #ccc;">Angioplasty (repair of a blood vessel)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">-rrhage</td><td style="padding:6px; border:1px solid #ccc;">Bursting forth, bleeding</td><td style="padding:6px; border:1px solid #ccc;">Hemorrhage (heavy bleeding)</td></tr>
                </tbody>
            </table>

            <h4>Common Root Words</h4>
            <table style="width:100%; border-collapse:collapse; margin:1em 0;">
                <thead style="background:var(--primary-accent); color:#fff;">
                    <tr><th style="padding:8px; border:1px solid #ccc;">Root</th><th style="padding:8px; border:1px solid #ccc;">Meaning</th><th style="padding:8px; border:1px solid #ccc;">Example</th></tr>
                </thead>
                <tbody>
                    <tr><td style="padding:6px; border:1px solid #ccc;">cardi/o</td><td style="padding:6px; border:1px solid #ccc;">Heart</td><td style="padding:6px; border:1px solid #ccc;">Cardiac arrest (heart stops)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">pulm/o</td><td style="padding:6px; border:1px solid #ccc;">Lung</td><td style="padding:6px; border:1px solid #ccc;">Pulmonary edema (fluid in the lungs)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">gastr/o</td><td style="padding:6px; border:1px solid #ccc;">Stomach</td><td style="padding:6px; border:1px solid #ccc;">Gastrointestinal (pertaining to stomach and intestines)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">hepat/o</td><td style="padding:6px; border:1px solid #ccc;">Liver</td><td style="padding:6px; border:1px solid #ccc;">Hepatomegaly (enlarged liver)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">nephr/o</td><td style="padding:6px; border:1px solid #ccc;">Kidney</td><td style="padding:6px; border:1px solid #ccc;">Nephrolithiasis (kidney stones)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">neur/o</td><td style="padding:6px; border:1px solid #ccc;">Nerve</td><td style="padding:6px; border:1px solid #ccc;">Neurological (pertaining to the nervous system)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">oste/o</td><td style="padding:6px; border:1px solid #ccc;">Bone</td><td style="padding:6px; border:1px solid #ccc;">Osteoporosis (porous bone condition)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">derm/o</td><td style="padding:6px; border:1px solid #ccc;">Skin</td><td style="padding:6px; border:1px solid #ccc;">Subdermal (under the skin)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">hemat/o</td><td style="padding:6px; border:1px solid #ccc;">Blood</td><td style="padding:6px; border:1px solid #ccc;">Hematemesis (vomiting blood)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">encephal/o</td><td style="padding:6px; border:1px solid #ccc;">Brain</td><td style="padding:6px; border:1px solid #ccc;">Encephalopathy (brain disease)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">rhin/o</td><td style="padding:6px; border:1px solid #ccc;">Nose</td><td style="padding:6px; border:1px solid #ccc;">Rhinorrhea (runny nose)</td></tr>
                    <tr><td style="padding:6px; border:1px solid #ccc;">thorac/o</td><td style="padding:6px; border:1px solid #ccc;">Chest</td><td style="padding:6px; border:1px solid #ccc;">Thoracostomy (chest tube placement)</td></tr>
                </tbody>
            </table>

            <h4>Common EMS Abbreviations</h4>
            <p>You will encounter abbreviations daily in EMS. Common ones include: <strong>VS</strong> (vital signs), <strong>BP</strong> (blood pressure), <strong>HR</strong> (heart rate), <strong>RR</strong> (respiratory rate), <strong>SpO2</strong> (oxygen saturation), <strong>ETCO2</strong> (end-tidal carbon dioxide), <strong>LOC</strong> (level of consciousness), <strong>GCS</strong> (Glasgow Coma Scale), <strong>AMS</strong> (altered mental status), <strong>SOB</strong> (shortness of breath), <strong>CP</strong> (chest pain), <strong>MVC</strong> (motor vehicle collision), <strong>MVA</strong> (motor vehicle accident), <strong>ETOH</strong> (alcohol), <strong>NKDA</strong> (no known drug allergies), <strong>POC</strong> (point of care), and <strong>AMS</strong> (altered mental status). While abbreviations save time, use them cautiously — some agencies maintain a "do not abbreviate" list (e.g., never abbreviate "right" and "left" as they can be misread). When in doubt, write the full term.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Caution:</strong> Never use medical terminology when speaking directly to patients or their families. A patient who hears "you have dyspnea" may not understand they are being told they have difficulty breathing. Say "you are having trouble breathing." Clear communication builds trust and ensures informed decision-making.
            </div>

            <h4>Directional Terms</h4>
            <p>Anatomical directional terms describe the position of one body part relative to another. <strong>Anterior</strong> (front) vs. <strong>posterior</strong> (back); <strong>superior</strong> (toward the head) vs. <strong>inferior</strong> (toward the feet); <strong>medial</strong> (toward the midline) vs. <strong>lateral</strong> (away from midline); <strong>proximal</strong> (closer to the trunk) vs. <strong>distal</strong> (farther from the trunk); <strong>supine</strong> (lying face up); <strong>prone</strong> (lying face down); <strong>Trendelenburg</strong> (head lower than feet); and <strong>Fowler's</strong> (sitting upright at 45-90 degrees). These terms allow precise communication about patient positioning and injury location.</p>

            <h4>Anatomic Planes</h4>
            <p>The body is divided by three major planes. The <strong>sagittal plane</strong> divides the body vertically into left and right portions — the midsagittal plane runs exactly through the midline. The <strong>transverse (axial) plane</strong> divides the body horizontally into superior (upper) and inferior (lower) portions. The <strong>frontal (coronal) plane</strong> divides the body vertically into anterior (front) and posterior (back) portions. Understanding these planes helps you accurately describe injury locations and relate findings during radio reports to the hospital. For example, "a stab wound to the left anterior chest at the midclavicular line, approximately the 4th intercostal space" paints a precise picture of the injury.</p>
        </div>`,
        flashcards: [
            { question: "What three components typically make up a medical term?", answer: "Prefix, root word, and suffix.", category: "Word Building" },
            { question: "What does the prefix 'tachy-' mean?", answer: "Fast — as in tachycardia (fast heart rate) or tachypnea (fast respiratory rate).", category: "Prefixes" },
            { question: "What does the suffix '-ectomy' mean?", answer: "Surgical removal — as in appendectomy (removal of the appendix).", category: "Suffixes" },
            { question: "What does 'cardio-' refer to?", answer: "The heart — as in cardiac, cardiology, or cardiomegaly.", category: "Root Words" },
            { question: "What is the difference between '-otomy' and '-ostomy'?", answer: " -otomy means cutting into (incision), while -ostomy means creating an opening (stoma).", category: "Suffixes" },
            { question: "What does the directional term 'proximal' mean?", answer: "Closer to the trunk or point of attachment — the elbow is proximal to the wrist.", category: "Directional Terms" },
            { question: "What plane divides the body into front and back portions?", answer: "The frontal (coronal) plane.", category: "Anatomic Planes" },
            { question: "What does 'dys-' mean as a prefix?", answer: "Abnormal, difficult, or painful — as in dyspnea (difficulty breathing) or dysphagia (difficulty swallowing).", category: "Prefixes" }
        ],
        quiz: [
            { q: "What does the prefix 'brady-' indicate?", options: ["Fast", "Slow", "Painful", "Without"], correct: 1 },
            { q: "Which suffix means 'inflammation'?", options: ["-osis", "-algia", "-itis", "-oma"], correct: 2 },
            { q: "What does 'hepatomegaly' mean?", options: ["Liver disease", "Enlarged liver", "Liver pain", "Liver inflammation"], correct: 1 },
            { q: "A patient with 'rhinorrhea' has:", options: ["A nosebleed", "Runny nose/nasal discharge", "Difficulty breathing through the nose", "Nasal congestion"], correct: 1 },
            { q: "Which directional term means 'toward the midline'?", options: ["Lateral", "Distal", "Medial", "Posterior"], correct: 2 },
            { q: "The transverse plane divides the body into:", options: ["Front and back", "Left and right", "Superior and inferior", "Proximal and distal"], correct: 2 },
            { q: "What does the suffix '-algia' mean?", options: ["Inflammation", "Pain", "Enlargement", "Surgical repair"], correct: 1 },
            { q: "A patient presenting with 'cyanosis' would have:", options: ["Fever", "Bluish discoloration of the skin due to low oxygen", "Jaundice", "Pale skin"], correct: 1 },
            { q: "Which position describes lying face up?", options: ["Prone", "Supine", "Trendelenburg", "Lateral recumbent"], correct: 1, difficulty: "hard" },
            { q: "What does the root word 'pulm/o' refer to?", options: ["Pulse", "Pulmonary/Lungs", "Pump (heart)", "Pus/infection"], correct: 1 },
            { q: "The prefix 'a-' (as in 'apnea') means:", options: ["Above", "Against", "Without or absence of", "Abnormal"], correct: 2, difficulty: "hard" },
            { q: "A cricothyrotomy is best described as:", options: ["Surgical removal of the cricoid cartilage", "Creating an opening in the trachea", "An incision into the cricothyroid membrane to establish an airway", "Repair of a damaged trachea"], correct: 2, difficulty: "hard" }
        ],
        critical: [
            {
                scenario: "You are called to a nursing home for an 82-year-old female with altered mental status. The nurse gives you a report using extensive medical terminology: 'The patient has had a two-day history of dysuria, pyrexia to 101.2\u00b0F, and她现在 is exhibiting acute confusion. She has a past medical history of CKD stage 3, CHF, and DM type 2. Her med list includes Lasix, metformin, and lisinopril.' Your partner, a new EMT, looks confused and whispers, 'I didn't understand half of that.'",
                question: "What is the most appropriate action?",
                options: [
                    "Nod and pretend you understood, then look it up later",
                    "Ask the nurse to repeat everything in plain language, then document her report verbatim",
                    "Ask clarifying questions on the terms you do not fully understand so you can provide accurate care; you should recognize key terms like CKD (chronic kidney disease), CHF (congestive heart failure), and DM (diabetes mellitus) and understand how they affect your assessment",
                    "Tell your partner to write down the terms and study them later"
                ],
                correct: 2
            },
            {
                scenario: "You are assessing a 45-year-old male who fell from a ladder. He is complaining of severe pain in his left arm. You note that the injury is at the mid-forearm area. When you radio the hospital, you need to describe the exact location of a possible deformity.",
                question: "Which description most accurately communicates the injury location?",
                options: [
                    "\"He has a left arm injury\"",
                    "\"There is a deformity to the patient's left upper extremity, distal to the elbow and proximal to the wrist, on the anterior aspect of the forearm\"",
                    "\"His left arm looks broken about halfway between his elbow and wrist\"",
                    "\"He has a deformity of the left radial region\""
                ],
                correct: 1
            },
            {
                scenario: "You are documenting a call for a 68-year-old female with difficulty breathing. You wrote: 'Patient is a 68 y/o F c/o SOB x 2 days. Hx of COPD, HTN. VS: HR 112, RR 28, BP 148/92, SpO2 88% RA. Lungs: bilateral wheezing. Tx: O2 @ 4 LPM NC, assisted ventilation with BVM.' Another EMT reads your PCR and cannot interpret several abbreviations.",
                question: "Which principle of medical abbreviation use does this situation highlight?",
                options: [
                    "Abbreviations should always be used because they save time",
                    "Abbreviations should be used sparingly, and only those approved by your agency's do-not-abbreviate list; some abbreviations can be misinterpreted",
                    "All abbreviations are universally understood in healthcare",
                    "It is acceptable to make up abbreviations as long as you know what they mean"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "c1s10",
        shortTitle: "1.9 Lifting, Moving & Positioning",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#users"/></svg> Lifting, Moving &amp; Positioning</h3>
            <p><strong>Back injuries end EMS careers.</strong> Body mechanics that protect you:</p>
            <ul>
                <li><strong>Lift with your legs, back straight</strong> &mdash; never bend at the waist.</li>
                <li><strong>Keep the weight close</strong> &mdash; at arm's length it loads the spine ~10&times;.</li>
                <li><strong>Wide base</strong> (feet shoulder-width); <strong>never twist</strong> &mdash; pivot your whole body.</li>
                <li>Call "ready, lift" to move together; get more help rather than overload.</li>
            </ul>

            <h4>Types of move</h4>
            <ul>
                <li><strong>Emergency move</strong> (fire, explosion, HazMat, unsafe scene): drag them to safety NOW &mdash; <strong>spinal precautions are abandoned.</strong> Clothes drag, blanket drag, firefighter's carry.</li>
                <li><strong>Urgent move</strong> (critical patient, possible spine injury, no scene danger): <strong>rapid extrication</strong> with <em>manual spinal stabilization maintained</em> throughout (&lt;1 min).</li>
                <li><strong>Non-urgent move</strong> (no threat): controlled handling with full precautions as indicated.</li>
            </ul>

            <h4>Devices</h4>
            <p><strong>Wheeled cot</strong> (always strap the patient), <strong>stair chair</strong> (stairs/narrow halls, 2+ EMTs), <strong>scoop stretcher</strong> (splits to slide under &mdash; great for awkward positions), <strong>long board</strong> (full spinal immobilization with collar + head blocks), <strong>basket/Stokes</strong> (rough-terrain rescue). Strap chest, hips, knees; pad voids.</p>

            <h4>Positions</h4>
            <ul>
                <li><strong>Supine</strong> &mdash; default assessment / CPR.</li>
                <li><strong>Fowler's / semi-Fowler's</strong> (sitting up) &mdash; respiratory distress.</li>
                <li><strong>Recovery (left lateral)</strong> &mdash; unconscious, breathing, with a pulse: lets fluids drain.</li>
                <li><strong>Pregnancy (3rd trimester):</strong> tilt left (wedge under the right hip) to keep the uterus off the vena cava.</li>
            </ul>
            <p style="font-size:.92em;">Trendelenburg is no longer routine for shock. <strong>Bariatric</strong> patients need rated equipment and extra hands; <strong>pediatric</strong> and <strong>geriatric</strong> patients need padding and gentle handling.</p>
        </div>`,
        flashcards: [
            { question: "What is the most important rule of body mechanics when lifting?", answer: "Lift with your legs, not your back — use the large muscle groups of the legs to do the work.", category: "Body Mechanics" },
            { question: "When are emergency moves indicated?", answer: "When the patient or rescuer is in immediate danger (fire, hazardous environment, unsafe scene). Spinal precautions are temporarily abandoned.", category: "Emergency Moves" },
            { question: "What is an example of an emergency move?", answer: "The clothes drag — grasping the patient's clothing at the neck and dragging them to safety.", category: "Emergency Moves" },
            { question: "What is the difference between urgent and non-urgent moves?", answer: "Urgent moves are for serious conditions without immediate danger (rapid extrication with spinal precautions). Non-urgent moves are for stable patients with no threat.", category: "Patient Movement" },
            { question: "What position is best for a patient in respiratory distress?", answer: "Fowler's or semi-Fowler's position (sitting upright 45-90 degrees) to maximize diaphragmatic excursion.", category: "Positioning" },
            { question: "What position should an unconscious patient with adequate breathing be placed in?", answer: "Left lateral recumbent (recovery position) to protect the airway and allow fluids to drain.", category: "Positioning" },
            { question: "How should a pregnant patient in the third trimester be positioned?", answer: "Supine with a wedge under the right hip to displace the uterus off the inferior vena cava (left lateral displacement).", category: "Special Considerations" },
            { question: "What is the power lift?", answer: "A lifting technique from a squatting position with a straight back, feet flat, and arms close to the body, using leg muscles to lift.", category: "Body Mechanics" }
        ],
        quiz: [
            { q: "Which of the following is the PRIMARY cause of career-ending injuries in EMS?", options: ["Needle sticks", "Back injuries from improper lifting", "Exposure to infectious diseases", "Stress-related illness"], correct: 1 },
            { q: "When performing an emergency move, what is the priority?", options: ["Maintain spinal immobilization at all costs", "Remove the patient from immediate danger as quickly as possible", "Wait for additional personnel", "Apply a cervical collar first"], correct: 1 },
            { q: "What is the correct body position when lifting a patient?", options: ["Keep your legs straight and bend at the waist", "Keep your back straight, feet shoulder-width apart, and lift with your legs", "Twist at the waist to reach the patient", "Keep your feet together to maintain balance"], correct: 1 },
            { q: "What position should a patient with severe shortness of breath be placed in?", options: ["Supine", "Prone", "Fowler's (upright sitting)", "Trendelenburg"], correct: 2 },
            { q: "Rapid extrication from a vehicle is an example of what type of move?", options: ["Emergency move", "Urgent move", "Non-urgent move", "Elective move"], correct: 1 },
            { q: "Which device is designed to split into two halves to be placed under a patient with minimal movement?", options: ["Long spine board", "Stair chair", "Scoop stretcher", "Basket stretcher"], correct: 2 },
            { q: "When moving a patient down a flight of stairs, which device is most appropriate?", options: ["Wheeled stretcher", "Scoop stretcher", "Stair chair", "Long spine board"], correct: 2 },
            { q: "The recovery position (left lateral recumbent) is indicated for:", options: ["Patients in cardiac arrest", "Unconscious patients who are breathing with a pulse", "Patients with suspected spinal injury", "Patients with respiratory distress"], correct: 1 },
            { q: "How should a bariatric patient be lifted?", options: ["With two EMTs using standard equipment", "With additional personnel, bariatric-rated equipment, and mechanical lifts if available", "With a sheet drag only", "By the patient's family members"], correct: 1, difficulty: "hard" },
            { q: "What is the proper position for a pregnant patient in the third trimester, and why?", options: ["Prone, to protect the fetus", "Supine with a wedge under the right hip, to prevent supine hypotensive syndrome", "Fowler's, to improve maternal breathing", "Left lateral recumbent, to reduce back pain"], correct: 1, difficulty: "hard" },
            { q: "What is the most important safety consideration when using a wheeled stretcher?", options: ["Keeping the stretcher clean", "Always securing the patient with safety straps", "Using the stretcher only for critical patients", "Ensuring the stretcher is folded before loading"], correct: 1 },
            { q: "If you need to twist while carrying a patient, what should you do?", options: ["Twist slowly at the waist", "Pivot with your entire body — do not twist your spine", "Twist quickly to minimize time in an awkward position", "Twist only if you are the stronger EMT"], correct: 1, difficulty: "hard" }
        ],
        critical: [
            {
                scenario: "You and your partner respond to a single-vehicle rollover MVC. The car is resting on its roof, and smoke is coming from the engine compartment. The driver, a 45-year-old male, is conscious, confused, and still buckled in, hanging upside down. He has a visible scalp laceration with moderate bleeding. The smoke is starting to thicken.",
                question: "What type of move should be performed, and why?",
                options: [
                    "Non-urgent move — take time to apply a cervical collar and log-roll the patient onto a backboard",
                    "Emergency move — there is an immediate fire risk; rapidly remove the patient from the vehicle using a clothes drag or similar technique, abandoning spinal precautions",
                    "Wait for the fire department to extinguish any potential fire before moving the patient",
                    "Perform rapid extrication (urgent move) with spinal precautions since the bleeding is only moderate"
                ],
                correct: 1
            },
            {
                scenario: "You are treating a 72-year-old female with a history of COPD who called 911 for severe respiratory distress. She is sitting in a chair at home, gasping for air, with an SpO2 of 82% on room air. She is awake but can only speak in 2-word sentences. Her breathing is labored with accessory muscle use. You need to move her to the ambulance for transport.",
                question: "Which position and move are most appropriate for this patient?",
                options: [
                    "Place her supine on the stretcher for spinal precautions",
                    "Have her walk to the ambulance to maintain her dignity",
                    "Assist her into a Fowler's position on the stair chair, keep her upright during transport on the stretcher, and administer oxygen continuously",
                    "Place her in Trendelenburg to improve blood flow to the brain"
                ],
                correct: 2
            },
            {
                scenario: "You are called to a second-floor apartment for a 58-year-old male who fell and cannot get up. He is alert, oriented, and complains of right hip pain. He cannot bear weight. You suspect a hip fracture. The apartment hallway is narrow, and there are two flights of stairs to the ambulance. The patient is approximately 250 lbs.",
                question: "What is your safest plan for moving this patient?",
                options: [
                    "Have him hop down the stairs with your assistance",
                    "Use a stair chair with two EMTs, secure the patient, pad the injured hip, and use a track system if available; call for additional personnel if needed",
                    "Use a long spine board and slide him down the stairs",
                    "Have him sit on the stairs and scoot down one step at a time"
                ],
                correct: 1
            }
        ]
    }
    ]
};

