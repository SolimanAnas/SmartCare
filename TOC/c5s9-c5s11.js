/* ========== Chapter 5 – Medical Emergencies (Sections 9-11) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [
    /* ──────────────────────────────────────────────────────────────────
     * c5s9 – Infectious Disease & Sepsis
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c5s9",
        shortTitle: "5.9 Infectious Disease & Sepsis",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Infectious Disease & Sepsis</h3>

            <p>Infectious diseases are caused by pathogenic microorganisms — bacteria, viruses, fungi, or parasites — that invade the body and cause illness. EMTs must recognise both the systemic response to infection (sepsis) and protect themselves and others from transmission through standard precautions.</p>

            <h4>Sepsis — Definition and Recognition</h4>
            <p><strong>Sepsis</strong> is a life-threatening organ dysfunction caused by a dysregulated host response to infection. Early recognition by EMTs is critical — sepsis is a time-sensitive emergency where every hour of delayed treatment increases mortality by 4–8%. The <strong>qSOFA (quick Sequential Organ Failure Assessment)</strong> is a bedside screening tool that identifies patients at high risk of poor outcomes. A positive qSOFA screen requires <strong>2 or more</strong> of the following three criteria:</p>
            <ul>
                <li><strong>Altered mental status</strong> — Glasgow Coma Scale (GCS) <15 or any new confusion, disorientation, or decreased level of consciousness</li>
                <li><strong>Respiratory rate ≥22 breaths per minute</strong> — Tachypnoea is a compensatory response to metabolic acidosis from tissue hypoperfusion</li>
                <li><strong>Systolic blood pressure ≤100 mmHg</strong> — Hypotension indicating inadequate perfusion pressure</li>
            </ul>
            <p>A qSOFA score ≥2 in a patient with suspected infection identifies those at high risk for prolonged ICU stay, mechanical ventilation, or death. qSOFA is quick and does not require laboratory tests, making it ideal for prehospital use.</p>

            <h4>SIRS Criteria (Systemic Inflammatory Response Syndrome)</h4>
            <p>While qSOFA is now preferred for prehospital sepsis screening, understanding the <strong>SIRS criteria</strong> provides context for recognising systemic inflammation. SIRS is diagnosed when two or more of the following are present:</p>
            <table>
                <thead>
                    <tr><th>Parameter</th><th>Criterion</th></tr>
                </thead>
                <tbody>
                    <tr><td>Temperature</td><td>&gt;38°C (100.4°F) or &lt;36°C (96.8°F)</td></tr>
                    <tr><td>Heart rate</td><td>&gt;90 beats per minute (tachycardia)</td></tr>
                    <tr><td>Respiratory rate</td><td>&gt;20 breaths per minute OR PaCO₂ &lt;32 mmHg</td></tr>
                    <tr><td>White blood cell count</td><td>&gt;12,000/mm³ or &lt;4,000/mm³ or &gt;10% bands (immature forms)</td></tr>
                </tbody>
            </table>
            <p>SIRS can be triggered by infection (sepsis) or non-infectious causes (trauma, burns, pancreatitis, autoimmune disease). The presence of SIRS criteria plus a suspected infection defines <strong>sepsis</strong>.</p>

            <h4>Septic Shock</h4>
            <p><strong>Septic shock</strong> is sepsis with persisting hypotension despite adequate fluid resuscitation, requiring vasopressors to maintain mean arterial pressure ≥65 mmHg, and with a serum lactate level &gt;2 mmol/L. In the prehospital setting, septic shock is identified by:</p>
            <ul>
                <li>Sepsis (suspected infection + qSOFA ≥2 or SIRS criteria) PLUS:</li>
                <li><strong>Hypotension (SBP &lt;90 mmHg or MAP &lt;65 mmHg)</strong> that does not improve after fluid resuscitation (typically 20–30 mL/kg crystalloid)</li>
                <li><strong>Signs of end-organ hypoperfusion:</strong> Altered mental status, decreased urine output, cool/ mottled extremities, delayed cap refill</li>
                <li><strong>Elevated lactate:</strong> &gt;2 mmol/L (measured in the hospital; suspect in patients with severe metabolic acidosis)</li>
            </ul>
            <p>Septic shock carries a mortality rate of 40% or higher. EMTs must identify these patients and transport rapidly to a facility capable of early goal-directed therapy (IV fluids, antibiotics, vasopressors, source control).</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Sepsis can progress to septic shock rapidly — within hours. Do not be falsely reassured by a normal blood pressure in the presence of infection with tachycardia, tachypnoea, or altered mental status. Hypotension is a LATE sign in sepsis, just as in haemorrhagic shock.
            </div>

            <h4>Common Sources of Infection Leading to Sepsis</h4>
            <table>
                <thead>
                    <tr><th>Source</th><th>Signs to Identify</th><th>High-Risk Populations</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pneumonia</strong></td><td>Cough (productive), fever, crackles, hypoxia, pleuritic chest pain</td><td>Elderly, COPD, immunocompromised, post-operative</td></tr>
                    <tr><td><strong>Urinary Tract Infection (UTI)</strong></td><td>Dysuria, frequency, suprapubic/flank pain, fever, confusion in elderly</td><td>Elderly, catheterised patients, pregnant women, diabetics</td></tr>
                    <tr><td><strong>Skin / Soft Tissue</strong></td><td>Cellulitis: erythema, warmth, swelling, purulent drainage; necrotising fasciitis: severe pain out of proportion, crepitus, rapid spread</td><td>Diabetics, IV drug users, immunocompromised, post-surgical</td></tr>
                    <tr><td><strong>Abdominal</strong></td><td>Abdominal pain, guarding, rigidity, nausea/vomiting, fever</td><td>Elderly, post-operative, cirrhosis, immunocompromised</td></tr>
                </tbody>
            </table>

            <h4>Fever Management</h4>
            <p>Fever is the body's natural response to infection — it enhances immune function and inhibits pathogen growth. In most patients, fever does not require aggressive prehospital treatment. However, consider cooling measures (remove excessive clothing, tepid sponging, cool packs to the neck/axillae/groin) in:</p>
            <ul>
                <li><strong>Extreme hyperthermia (temperature >40°C / 104°F)</strong> — Risk of heat stroke, seizures, and end-organ damage</li>
                <li><strong>Paediatric patients with febrile seizures</strong> — Especially ages 6 months to 5 years</li>
                <li><strong>Patients with known cardiovascular compromise</strong> — Fever increases metabolic demand and heart rate</li>
                <li><strong>Patients with altered mental status and hyperthermia</strong> — To distinguish sepsis-associated encephalopathy from heat stroke</li>
            </ul>
            <p>Avoid aggressive cooling that causes shivering — shivering increases metabolic demand and core temperature. Antipyretic medications (acetaminophen, ibuprofen) are not typically administered by EMTs in the prehospital setting but should be documented if the patient has taken them prior to arrival.</p>

            <h4>Standard Precautions and PPE</h4>
            <p><strong>Body Substance Isolation (BSI)</strong> precautions are the foundation of infection prevention in EMS. EMTs must assume that <strong>all patients and all body substances are potentially infectious</strong>. Standard precautions include:</p>
            <ul>
                <li><strong>Hand hygiene:</strong> Wash with soap and water or use alcohol-based hand rub before and after every patient contact</li>
                <li><strong>Gloves:</strong> Wear non-sterile examination gloves for any contact with blood, body fluids, mucous membranes, or non-intact skin. Change gloves between patients and between different procedures on the same patient.</li>
                <li><strong>Eye protection:</strong> Wear goggles or face shield when there is risk of splash or spray (suctioning, intubation, wound irrigation, uncontrolled bleeding)</li>
                <li><strong>Masks and respirators:</strong> Surgical mask for droplet precautions (meningitis, influenza, COVID-19); N95 or higher respirator for airborne precautions (suspected TB, measles, chickenpox)</li>
                <li><strong>Gowns:</strong> Wear fluid-resistant or impermeable gowns when there is risk of extensive blood or body fluid exposure</li>
                <li><strong>Sharps disposal:</strong> Dispose of all needles and sharp objects immediately in designated sharps containers — never recap needles</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The single most important infection-prevention measure is <strong>hand hygiene</strong>. Hand washing or alcohol-based hand rub before and after patient contact significantly reduces transmission of healthcare-associated infections. Soap and water are required for C. difficile (alcohol does not kill spores).
            </div>

            <h4>Additional Transmission-Based Precautions</h4>
            <table>
                <thead>
                    <tr><th>Precaution Type</th><th>When to Use</th><th>Examples</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Contact</strong></td><td>Known or suspected infections transmitted by direct contact</td><td>MRSA (wounds), C. difficile (diarrhoea), scabies, VRE, RSV</td></tr>
                    <tr><td><strong>Droplet</strong></td><td>Infections transmitted by large respiratory droplets (&gt;5 microns, travel &le;3–6 feet)</td><td>Meningococcal meningitis, influenza, COVID-19, pertussis, mumps, rubella</td></tr>
                    <tr><td><strong>Airborne</strong></td><td>Infections transmitted by small droplet nuclei (&lt;5 microns, remain suspended in air)</td><td>Tuberculosis (TB), measles (rubeola), chickenpox (varicella), disseminated zoster</td></tr>
                </tbody>
            </table>

            <h4>Transport to Appropriate Facility</h4>
            <p>Patients with suspected sepsis or septic shock should be transported to a hospital capable of providing early goal-directed therapy: IV fluids, broad-spectrum antibiotics, lactate measurement, blood cultures, and intensive care. Consider the following when making destination decisions:</p>
            <ul>
                <li><strong>qSOFA ≥2 with hypotension:</strong> Transport to the closest appropriate ED with ICU capability — do not bypass for a facility with "better" sepsis care if it significantly prolongs transport time</li>
                <li><strong>Immunocompromised patients:</strong> May require transport to a facility with specialist infectious disease support and oncology services</li>
                <li><strong>Paediatric sepsis:</strong> Transport to a children's hospital or paediatric-capable ED when possible</li>
                <li><strong>Notify the receiving hospital early</strong> with a "sepsis alert" — pre-notification allows the ED to prepare antibiotics, IV fluids, and critical care resources before your arrival</li>
            </ul>

            <h4>Common Infectious Diseases</h4>

            <h5>Meningococcal Meningitis</h5>
            <p>Bacterial infection of the meninges caused by <em>Neisseria meningitidis</em>. Presents with the classic triad of <strong>fever, nuchal rigidity (neck stiffness), and altered mental status</strong>, often accompanied by a <strong>non-blanching petechial or purpuric rash</strong>. It is highly contagious via respiratory droplets and can progress from healthy to dead within hours. <strong>Droplet precautions are essential</strong> — place a mask on the patient and wear a mask yourself.</p>

            <h5>MRSA (Methicillin-Resistant <em>Staphylococcus aureus</em>)</h5>
            <p>A strain of <em>S. aureus</em> resistant to beta-lactam antibiotics (methicillin, oxacillin, cephalosporins). MRSA causes skin and soft tissue infections (abscesses, cellulitis, wound infections) and can cause invasive disease (pneumonia, bloodstream infection, endocarditis). <strong>Contact precautions</strong> are required — wear gloves and gown when touching wounds or draining lesions. In healthcare settings, MRSA is a common cause of line-associated and post-surgical infections.</p>

            <h5><em>Clostridioides difficile</em> (C. diff)</h5>
            <p>A spore-forming bacterium that causes antibiotic-associated diarrhoea and colitis. C. diff is transmitted via the faecal-oral route and spores persist on environmental surfaces for months. <strong>Contact precautions</strong> are required. <strong>Alcohol-based hand rubs do NOT kill C. diff spores</strong> — wash hands with soap and water after contact with a suspected C. diff patient. Key risk factor: recent antibiotic use (especially broad-spectrum antibiotics like fluoroquinolones, clindamycin, and cephalosporins).</p>

            <h5>Tuberculosis (TB)</h5>
            <p>An airborne bacterial infection caused by <em>Mycobacterium tuberculosis</em>, primarily affecting the lungs. Active TB presents with <strong>chronic cough (≥3 weeks), night sweats, weight loss, haemoptysis, and fever</strong>. <strong>Airborne precautions</strong> are required — wear an N95 respirator (or higher), place a surgical mask on the patient, and transport with the ambulance ventilation system set to non-recirculating mode if possible. High-risk populations include homeless, incarcerated, and immunocompromised individuals.</p>

            <h5>COVID-19 (SARS-CoV-2)</h5>
            <p>A viral respiratory illness with a wide spectrum of severity — from asymptomatic infection to severe pneumonia, acute respiratory distress syndrome (ARDS), and death. Typical symptoms include <strong>fever, cough, shortness of breath, fatigue, loss of taste/smell (anosmia), and myalgias</strong>. Transmission is primarily through respiratory droplets and aerosols. Use <strong>droplet + contact precautions</strong> (surgical mask, eye protection, gloves, gown). N95 respirators are recommended for aerosol-generating procedures (nebulised treatments, BVM ventilation, suctioning, intubation). Transport patients with oxygen as needed and monitor for respiratory deterioration.</p>
        </div>`,
        flashcards: [
            { question: "What are the three qSOFA criteria used for prehospital sepsis screening?", answer: "Altered mental status (GCS <15), respiratory rate ≥22 breaths/min, and systolic blood pressure ≤100 mmHg. A score ≥2 indicates high risk of poor outcomes.", category: "Sepsis Screening" },
            { question: "What are the four SIRS criteria?", answer: "Temperature >38°C or <36°C, heart rate >90 bpm, respiratory rate >20/min or PaCO₂ <32 mmHg, and WBC >12,000 or <4,000/mm³ or >10% bands.", category: "Sepsis — SIRS" },
            { question: "What distinguishes septic shock from sepsis?", answer: "Septic shock is sepsis with persisting hypotension despite adequate fluid resuscitation, requiring vasopressors to maintain MAP ≥65 mmHg, and with serum lactate >2 mmol/L.", category: "Septic Shock" },
            { question: "What are the three most common sources of infection leading to sepsis?", answer: "Pneumonia (respiratory), urinary tract infections (genitourinary), and skin/soft tissue infections (cellulitis, wound infections).", category: "Sepsis Sources" },
            { question: "Which infectious disease requires airborne precautions (N95 respirator)?", answer: "Tuberculosis (TB), measles (rubeola), and chickenpox (varicella) require airborne precautions with an N95 or higher respirator.", category: "Infection Control" },
            { question: "Why is hand washing with soap and water required instead of alcohol-based hand rub for C. difficile?", answer: "C. difficile spores are not killed by alcohol-based hand rubs. Soap and water physically remove the spores from the hands.", category: "Infection Control" },
            { question: "What are the classic signs of meningococcal meningitis?", answer: "Fever, nuchal rigidity (neck stiffness), altered mental status, severe headache, photophobia, and a non-blanching petechial/purpuric rash. Droplet precautions are essential.", category: "Infectious Diseases" },
            { question: "What is the EMT's role in managing a patient with suspected sepsis?", answer: "Early recognition using qSOFA, supporting ABCs (oxygen, IV access if in scope), fluid resuscitation per protocol, monitoring for deterioration, and rapid transport with early hospital notification.", category: "Sepsis Management" }
        ],
        quiz: [
            {
                q: "A 74-year-old female from a nursing home presents with confusion, respiratory rate 24, and blood pressure 98/62. Staff report she has been urinating more frequently and has a foul smell to her urine. Her temperature is 38.9°C. What is the BEST interpretation of these findings?",
                options: [
                    "The patient has a simple UTI with age-related confusion — treat supportively",
                    "qSOFA = 2 (altered mental status + RR ≥22 + SBP ≤100) — this patient has suspected sepsis requiring rapid transport and early notification",
                    "The vital signs are within normal limits for a patient of her age",
                    "The patient likely has dementia and the UTI is incidental"
                ],
                correct: 1,
                explanation: "With infection (UTI) plus qSOFA ≥2 (altered mental status, RR 24, SBP 98/62), this patient meets criteria for suspected sepsis requiring emergent transport and early hospital notification."
            },
            {
                q: "Which transmission-based precaution is required for a patient with suspected active tuberculosis?",
                options: [
                    "Standard precautions only",
                    "Droplet precautions (surgical mask)",
                    "Airborne precautions (N95 respirator)",
                    "Contact precautions (gloves and gown)"
                ],
                correct: 2,
                explanation: "TB is transmitted via airborne droplet nuclei that remain suspended in the air. An N95 or higher respirator is required. The patient should also wear a surgical mask."
            },
            {
                q: "[HARD] A 62-year-old male with diabetes presents with fever, tachycardia, and a red, swollen, warm area on his lower leg that has been spreading over 24 hours. His BP is 104/68, RR 22, HR 108, and he is confused — his wife states this is new. You start an IV and begin fluid resuscitation. After 500 mL of normal saline, his BP drops to 92/56. What does this change MOST likely indicate?",
                options: [
                    "The fluid bolus is causing an allergic reaction",
                    "The patient is progressing from sepsis to septic shock — refractory hypotension despite fluid resuscitation is a hallmark of septic shock",
                    "The BP drop is expected and will resolve with additional fluids",
                    "The patient is having a vasovagal response to the IV insertion"
                ],
                correct: 1,
                explanation: "Persisting or worsening hypotension despite adequate fluid resuscitation in a patient with suspected infection indicates progression to septic shock. This is a high-mortality emergency requiring rapid transport, continued fluid resuscitation, and early hospital notification for ICU level care."
            }
        ],
        critical: [
            {
                id: "crit_5_9_1",
                scenario: "You are dispatched to a private residence for a 68-year-old male with weakness and confusion. His wife reports he has been feeling unwell for 3 days with a cough producing green sputum, and has been increasingly confused over the past 6 hours. He has a history of hypertension, COPD, and type 2 diabetes. Vital signs: HR 118, BP 104/70, RR 26, SpO₂ 89% on room air, temperature 39.4°C. Lung auscultation reveals crackles in the right lower lobe. He is unable to tell you what year it is and does not recognise his wife of 40 years. His blood glucose is 142 mg/dL.",
                question: "What is the most likely diagnosis and what is the priority management?",
                options: [
                    {t: "Acute exacerbation of COPD — administer nebulised bronchodilator and transport with oxygen", f: "Incorrect — While the patient has COPD and crackles, the constellation of high fever, productive cough, new confusion, and tachycardia suggests pneumonia with sepsis, not a simple COPD exacerbation. The confusion and qSOFA ≥2 are red flags for sepsis-associated encephalopathy."},
                    {t: "Pneumonia with suspected sepsis — this patient has an infection (crackles, fever, productive cough) plus qSOFA ≥2 (altered mental status + RR 26 + SBP 104 borderline). Apply high-flow O₂, initiate fluid resuscitation per protocol, monitor vitals every 5 minutes, and transport with early hospital notification", f: "Correct — qSOFA = 2 (altered mental status + RR ≥22). The presentation is classic for pneumonia progressing to sepsis. The patient has multiple risk factors (age >65, diabetes, COPD). Apply oxygen to target SpO₂ ≥94%, establish IV access, give fluid bolus 20 mL/kg if hypotensive, and request a sepsis alert to the receiving ED."}
                ],
                correct: 1,
                explanation: "This patient has pneumonia with sepsis (infection + qSOFA ≥2). Altered mental status in the elderly with infection is often due to sepsis-associated encephalopathy, not dementia or age-related changes. Management focuses on oxygenation, fluid resuscitation, close monitoring for septic shock, and rapid transport with early hospital notification. Patients with sepsis benefit from ED preparedness — a 'sepsis alert' can mobilise resources before arrival.",
                kpi: "Recognises sepsis using qSOFA in a patient with pneumonia"
            },
            {
                id: "crit_5_9_2",
                scenario: "You are called to a college dormitory for a 19-year-old female with severe headache, fever, and confusion. Her roommate states she has been vomiting and complaining of a stiff neck for the past 8 hours. On exam, the patient is lethargic and irritable. Temperature is 40.1°C (104.2°F), HR 124, BP 100/66, RR 22. When you ask her to touch her chin to her chest, she cries out in pain and cannot do so. As you examine her, you notice scattered purplish-red spots on her trunk and legs that do not blanch when pressed.",
                question: "What is the most likely diagnosis and what precautions must you take?",
                options: [
                    {t: "Viral meningitis — this is less serious than bacterial. Provide supportive care, standard precautions, and transport routinely", f: "Incorrect — The combination of fever, nuchal rigidity, altered mental status, and a non-blanching petechial/purpuric rash is meningococcal meningitis until proven otherwise. Viral meningitis does not produce a petechial rash and is far less likely to cause this rapid onset and high fever."},
                    {t: "Bacterial meningitis (likely meningococcal) — this is a life-threatening emergency requiring immediate droplet precautions (mask the patient and yourself), high-flow oxygen, rapid transport, and early hospital notification. The petechial rash is an ominous sign of meningococcaemia", f: "Correct — Meningococcal meningitis can kill a healthy young adult within hours of symptom onset. The classic triad (fever, nuchal rigidity, altered mental status) plus a non-blanching petechial rash is virtually diagnostic. Droplet precautions are critical — the bacteria spread via respiratory droplets. Notify the receiving ED of a suspected meningococcal meningitis case so they can prepare isolation and antibiotics."}
                ],
                correct: 1,
                explanation: "This is meningococcal meningitis until proven otherwise — a rapidly fatal infection. The classic presentation includes: 1) Fever, 2) Nuchal rigidity (cannot touch chin to chest), 3) Altered mental status, and 4) A non-blanching petechial/purpuric rash (meningococcaemia). Droplet precautions are essential: place a surgical mask on the patient and wear a mask + eye protection. Transport with urgency — this patient needs IV antibiotics (ceftriaxone) within minutes to hours of ED arrival. Close contacts (including EMS crew with unprotected exposure) may require prophylactic antibiotics.",
                kpi: "Identifies meningococcal meningitis and applies appropriate droplet precautions"
            },
            {
                id: "crit_5_9_3",
                scenario: "You are called to a homeless shelter for a 55-year-old male with a chronic cough and difficulty breathing. The shelter manager states he has been coughing for approximately 6 weeks with night sweats and has lost a significant amount of weight. The patient appears thin and pale, coughing frequently with scant blood-tinged sputum. He is using a tissue to cover his mouth. His temperature is 38.5°C (101.3°F), HR 104, RR 22, SpO₂ 92% on room air, BP 118/74. He has no known medical history and has been living at the shelter for 3 months.",
                question: "What is the most likely diagnosis and what precautions should the EMT take?",
                options: [
                    {t: "This is likely pneumonia from poor living conditions — apply oxygen, standard precautions, and transport", f: "Incorrect — While pneumonia is possible, the 6-week duration of cough, night sweats, weight loss, and haemoptysis are classic for active tuberculosis. TB requires airborne precautions, not just standard or droplet precautions."},
                    {t: "Suspected active tuberculosis — apply an N95 respirator on yourself, place a surgical mask on the patient, apply supplemental oxygen to target SpO₂ ≥94%, limit time in the enclosed ambulance compartment, and transport to a respiratory isolation-capable facility", f: "Correct — The classic TB presentation includes: chronic cough (≥3 weeks), night sweats, weight loss, haemoptysis, and low-grade fever. This patient has multiple risk factors (homeless shelter, poor nutrition). Airborne precautions are essential: N95 respirator for provider, surgical mask on patient, maximise ventilation in the patient compartment."}
                ],
                correct: 1,
                explanation: "Active pulmonary TB is an airborne infection requiring N95 or higher respirator protection. The classic presentation of cough >3 weeks, night sweats, weight loss, haemoptysis, and fever should trigger a high index of suspicion. Management: apply high-flow oxygen, place a surgical mask on the patient to reduce droplet nuclei, wear an N95 respirator, drive with the patient compartment ventilation on non-recirculating mode if possible, and notify the receiving hospital for airborne isolation room preparation. Close contacts require TB skin testing or IGRA screening.",
                kpi: "Recognises tuberculosis and applies appropriate airborne precautions"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────
     * c5s10 – Behavioral & Psychiatric Emergencies
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c5s10",
        shortTitle: "5.10 Behavioral & Psychiatric",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Behavioral & Psychiatric Emergencies</h3>

            <p>A <strong>behavioural emergency</strong> is a situation in which a patient's behaviour is so unusual, bizarre, threatening, or dangerous that it interferes with their ability to function safely or presents a risk to themselves or others. Behavioural emergencies can have <strong>primary psychiatric causes</strong> (mental illness) or <strong>secondary medical causes</strong> (an underlying medical condition presenting with psychiatric symptoms). As an EMT, your first priority is to rule out life-threatening medical causes before assuming a psychiatric aetiology.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Rule:</strong> <em>"There is no such thing as a psychiatric patient until you have ruled out medical causes."</em> Hypoglycaemia, hypoxia, intoxication, head injury, and infection can all present with agitated, confused, or psychotic behaviour. Always check blood glucose, SpO₂, vital signs, and perform a focused physical exam.
            </div>

            <h4>Medical Causes of Psychiatric Symptoms (The "Must Not Miss" Differential)</h4>
            <p>Before labelling a patient's behaviour as psychiatric, consider and rule out these medical causes — often recalled by the mnemonic <strong>NEW MOP</strong> or similar frameworks:</p>
            <table>
                <thead>
                    <tr><th>Cause</th><th>Key Features</th><th>Screening Tool</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hypoglycaemia</strong></td><td>Confusion, agitation, combativeness, diaphoresis, tachycardia</td><td>Blood glucose check — treat if &lt;70 mg/dL</td></tr>
                    <tr><td><strong>Hypoxia</strong></td><td>Confusion, restlessness, agitation, cyanosis (late)</td><td>Pulse oximetry — SpO₂ &lt;94% is concerning</td></tr>
                    <tr><td><strong>Intoxication / Overdose</strong></td><td>Agitation or sedation, slurred speech, pupils abnormal, odours</td><td>Toxidrome recognition; check for paraphernalia</td></tr>
                    <tr><td><strong>Head Injury (Trauma)</strong></td><td>Altered mental status, headache, unequal pupils, vomiting</td><td>Focused neurological exam, signs of trauma</td></tr>
                    <tr><td><strong>Infection (CNS/Sepsis)</strong></td><td>Fever, confusion, nuchal rigidity (meningitis), rash</td><td>Temperature, neck exam, skin assessment</td></tr>
                    <tr><td><strong>Electrolyte imbalance</strong></td><td>Weakness, confusion, seizures, cardiac dysrhythmia</td><td>History (renal disease, diuretics), ECG if available</td></tr>
                    <tr><td><strong>Seizure (postictal)</strong></td><td>Confusion, drowsiness, incontinence, tongue biting</td><td>History from bystanders, check for injury</td></tr>
                    <tr><td><strong>Stroke</strong></td><td>Acute focal neurological deficit, confusion, aphasia</td><td>BEFAST / CPSS screening</td></tr>
                </tbody>
            </table>

            <h4>Mental Status Assessment</h4>
            <p>A systematic assessment of a patient's mental status helps differentiate psychiatric from medical causes and establishes a baseline for monitoring. The <strong>AVPU</strong> scale (Alert, Verbal, Painful, Unresponsive) is a quick screening tool, but a more thorough mental status exam should include:</p>
            <ul>
                <li><strong>Appearance:</strong> Grooming, hygiene, dress appropriate for weather and setting? Signs of self-neglect?</li>
                <li><strong>Behaviour:</strong> Calm, agitated, withdrawn, restless? Eye contact? Cooperative or hostile?</li>
                <li><strong>Speech:</strong> Rate (slow/rapid/pressured), volume, clarity, coherence? Rambling or tangential?</li>
                <li><strong>Orientation:</strong> Person (who are you?), Place (where are you?), Time (what day/year is it?), Event (what happened?) — the "four W's"</li>
                <li><strong>Mood and affect:</strong> Depressed, euphoric, anxious, flat, labile?</li>
                <li><strong>Thought content:</strong> Paranoid ideation, delusions (fixed false beliefs), hallucinations (seeing or hearing things that are not there)?</li>
                <li><strong>Cognition:</strong> Can the patient follow simple commands (e.g., "squeeze my hand")? Memory (recent and remote)?</li>
                <li><strong>Insight and judgment:</strong> Does the patient understand that they need help? Can they make safe decisions?</li>
            </ul>

            <h4>Danger to Self or Others — Suicidal Ideation</h4>
            <p>Assessing the risk of self-harm is a critical EMT responsibility. Suicidal ideation ranges from passive thoughts of death to active plans with lethal means. Use a direct, non-judgemental approach:</p>
            <ul>
                <li><strong>Ask directly:</strong> "Are you thinking about hurting yourself or killing yourself?" Research shows asking about suicide does NOT plant the idea — it opens communication.</li>
                <li><strong>Assess lethality:</strong> Do you have a plan? What is the method? Do you have access to the means? When do you plan to do it?</li>
                <li><strong>Identify protective factors:</strong> Family, friends, pets, religious faith, future plans, reason to live</li>
                <li><strong>Identify risk factors:</strong> Previous suicide attempt (strongest predictor), male gender, age >65, access to firearms, recent loss, chronic pain, substance use, social isolation</li>
                <li><strong>Never leave the patient alone</strong> — constant observation is essential. Remove potentially dangerous objects (belts, shoelaces, medications, sharp objects) from the patient's environment</li>
                <li><strong>Transport</strong> for psychiatric evaluation — the emergency department is the safest destination</li>
            </ul>

            <h4>Psychosis</h4>
            <p><strong>Psychosis</strong> is a break from reality characterised by <strong>hallucinations</strong> (sensory perceptions without external stimuli — most commonly auditory) and <strong>delusions</strong> (fixed, false beliefs not based in reality — e.g., belief that they are being followed, watched, or controlled by external forces). The patient may be paranoid, frightened, or withdrawn. Approach calmly:</p>
            <ul>
                <li>Speak slowly, clearly, and respectfully — do not argue with delusions or challenge hallucinations</li>
                <li>Acknowledge the patient's feelings without validating false content: "I can see you are very scared right now. I am here to help you."</li>
                <li>Do not lie or make promises you cannot keep</li>
                <li>Maintain a safe distance and keep an exit path clear</li>
                <li>Rule out medical causes — psychosis can be caused by intoxication (methamphetamine, PCP, LSD), tumours, metabolic disorders, and infections</li>
            </ul>

            <h4>Agitation and Excited Delirium</h4>
            <p><strong>Agitation</strong> is a state of extreme physical or verbal activity characterised by restlessness, pacing, shouting, or threatening behaviour. It exists on a spectrum from mild anxiety to violent aggression. <strong>Excited delirium (hyperactive delirium with autonomic dysregulation)</strong> is a severe, life-threatening medical emergency that presents with:</p>
            <ul>
                <li>Extreme agitation and aggression</li>
                <li>Superhuman strength and pain tolerance</li>
                <li>Tachycardia, hypertension, hyperthermia</li>
                <li>Profuse diaphoresis (sweating)</li>
                <li>Incoherent speech, screaming, stripping off clothing</li>
                <li>Paranoid or bizarre behaviour (e.g., crawling on the ground, breaking glass)</li>
                <li><strong>Rapid progression to cardiorespiratory arrest</strong> if not recognised and treated</li>
            </ul>
            <p>Excited delirium is most commonly associated with stimulant drug use (cocaine, methamphetamine), psychiatric illness, and improper restraint. The combination of hyperthermia, acidosis, and catecholamine excess creates a perfect storm for sudden death. Management: request law enforcement and ALS backup, attempt verbal de-escalation, consider sedation (ALS), aggressive cooling, and rapid transport.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning — Positional Asphyxia:</strong> Never restrain a patient in a prone position (face down) or "hog-tie" (knees bent back toward handcuffs). Restraint in these positions restricts diaphragmatic movement, impairs ventilation, and can cause sudden death from positional asphyxia — even in patients who seemed to be "calming down." If restraints are necessary, place the patient on their <strong>side (lateral recumbent)</strong> and monitor their breathing continuously. Once restrained, patients should never be left unattended.
            </div>

            <h4>Panic Attack</h4>
            <p>A <strong>panic attack</strong> is an abrupt surge of intense fear or discomfort that peaks within minutes. Symptoms include: palpitations, sweating, trembling, shortness of breath, chest pain or tightness, choking sensation, nausea, dizziness, derealisation (feeling unreal), fear of losing control or dying, paresthesias, and chills or hot flushes. Panic attacks are extremely frightening for the patient — they often believe they are having a heart attack, stroke, or "going crazy."</p>
            <p><strong>Critical:</strong> Panic attack is a <strong>diagnosis of exclusion</strong> in the prehospital setting. You must first rule out life-threatening conditions that mimic panic (especially <strong>pulmonary embolism, acute coronary syndrome, asthma exacerbation, anaphylaxis, hyperthyroidism, and hypoglycaemia</strong>) before attributing symptoms to anxiety. Management includes: calm reassurance, encouraging slow breathing, ruling out medical causes, and transport if symptoms persist or the diagnosis is uncertain.</p>

            <h4>De-escalation Techniques</h4>
            <p>Verbal de-escalation is the safest and most effective tool for managing agitated patients. It avoids physical confrontation, reduces the risk of injury to all parties, and preserves patient dignity. The following approach — summarised as <strong>DE-ESCALATE</strong> — is recommended:</p>
            <table>
                <thead>
                    <tr><th>Step</th><th>Action</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>D</strong> — Distance</td><td>Maintain personal space (at least arm's length); position yourself at an angle, not directly face-to-face</td><td>"I'm going to stay right here so we can talk."</td></tr>
                    <tr><td><strong>E</strong> — Eye contact</td><td>Non-threatening, intermittent eye contact (avoid staring)</td><td>Make brief eye contact, then look to the side</td></tr>
                    <tr><td><strong>E</strong> — Empathy</td><td>Validate feelings without agreeing with distortions</td><td>"I can see you are really frustrated. Let's work through this."</td></tr>
                    <tr><td><strong>S</strong> — Slow down</td><td>Speak slowly, calmly, with a low pitch; allow pauses</td><td>"Take your time. There's no rush."</td></tr>
                    <tr><td><strong>C</strong> — Choices</td><td>Offer simple, safe choices to restore a sense of control</td><td>"Would you like to sit in the chair or on the stretcher?"</td></tr>
                    <tr><td><strong>A</strong> — Active listening</td><td>Listen to the patient's concerns; paraphrase back what you hear</td><td>"So I hear you saying you feel people are following you."</td></tr>
                    <tr><td><strong>L</strong> — Low stimulation</td><td>Reduce lights, noise, and number of people around the patient</td><td>Turn off the siren, dim lights in the patient compartment</td></tr>
                    <tr><td><strong>A</strong> — Ask for help</td><td>Call for additional resources before the situation escalates</td><td>Request law enforcement or ALS backup early</td></tr>
                    <tr><td><strong>T</strong> — Transport</td><td>Transport to an appropriate facility even if symptoms resolve</td><td>"Let's go together to the hospital to make sure you're safe."</td></tr>
                    <tr><td><strong>E</strong> — Exit strategy</td><td>Always maintain a clear path to the exit for yourself</td><td>Position yourself between the patient and the door</td></tr>
                </tbody>
            </table>

            <h4>Involuntary Holds and Transport Considerations</h4>
            <p>When a patient poses a danger to themselves or others due to a mental health condition, they may be placed on an <strong>involuntary hold</strong> (also called a psychiatric hold, 5150, Section 12, etc. — the name varies by jurisdiction). Key points:</p>
            <ul>
                <li><strong>Criteria</strong> for involuntary hold typically include: danger to self, danger to others, or grave disability (unable to provide for basic needs — food, shelter, safety)</li>
                <li><strong>EMT-initiated holds:</strong> In some jurisdictions, an EMT may initiate an emergency hold to transport a patient against their will for psychiatric evaluation. Know your local protocols.</li>
                <li><strong>Law enforcement:</strong> If a patient is violent or refuses transport despite meeting hold criteria, law enforcement should be involved. EMTs should not physically force a patient into an ambulance unless trained and authorised.</li>
                <li><strong>Documentation:</strong> Meticulously document the patient's behaviour, statements (verbatim quotes are powerful), your assessment, the rationale for the hold/transport, and the receiving facility (if known).</li>
                <li><strong>Transport destination:</strong> Most emergency departments can initiate a psychiatric hold and provide a medical clearance evaluation before transfer to a psychiatric facility. Alternatively, transport directly to a psychiatric receiving centre if your system has one and the patient is medically cleared.</li>
            </ul>

            <h4>Restraint Considerations — Preventing Positional Asphyxia</h4>
            <p>Physical restraints are a last resort and carry significant risk. If restraints are necessary:</p>
            <ul>
                <li><strong>Position the patient on their side (lateral recumbent)</strong> — NEVER prone (face down). Prone positioning restricts chest wall expansion and diaphragmatic movement, leading to hypoventilation, respiratory acidosis, and cardiac arrest.</li>
                <li><strong>Never use "hog-tie" restraints</strong> (tying wrists to ankles behind the back) — this position severely impairs respiration and is associated with sudden death.</li>
                <li><strong>Monitor continuously:</strong> Check pulse oximetry, respiratory rate, and level of consciousness. Any decrease in SpO₂ or change in mental status requires immediate repositioning.</li>
                <li><strong>Apply soft restraints</strong> (not metal handcuffs — these are law enforcement's role) and secure them to the stretcher frame, not the side rails (so side rails can be lowered without releasing the patient).</li>
                <li><strong>Document:</strong> The indication for restraints, the type applied, the position, the time applied, and frequent reassessments (every 5–15 minutes).</li>
                <li><strong>Remove as soon as safely possible</strong> — restraints are not a treatment; they are a temporary safety measure.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The best restraint is <strong>verbal de-escalation</strong>. Most agitated patients can be calmed with a respectful, patient-centred approach. Request additional resources early — it is better to have law enforcement present and not need them than to need them and not have them. Scene safety is always the highest priority.
            </div>
        </div>`,
        flashcards: [
            { question: "What medical causes must be ruled out before assuming a behavioural emergency is psychiatric?", answer: "Hypoglycaemia, hypoxia, intoxication/overdose, head injury, infection (CNS/sepsis), electrolyte imbalance, postictal state, and stroke. Always check blood glucose, SpO₂, and vital signs.", category: "Medical Causes" },
            { question: "What is excited delirium and why is it a medical emergency?", answer: "A severe state of agitation with hyperthermia, tachycardia, hypertension, diaphoresis, and bizarre behaviour. It can rapidly progress to cardiorespiratory arrest due to hyperthermia, acidosis, and catecholamine excess.", category: "Excited Delirium" },
            { question: "What is the MOST important safety consideration when restraining a patient?", answer: "NEVER restrain in a prone (face-down) position — this causes positional asphyxia. Always place the patient on their side (lateral recumbent) and monitor breathing continuously.", category: "Restraints" },
            { question: "What questions should an EMT ask when assessing suicidal ideation?", answer: "Ask directly: 'Are you thinking about hurting yourself?' Assess plan, method, access to means, and timing. Identify risk factors (prior attempts, male, >65, access to firearms) and protective factors.", category: "Suicidal Ideation" },
            { question: "How should an EMT approach a patient experiencing psychosis?", answer: "Speak calmly and respectfully, acknowledge feelings without arguing with delusions, do not validate false content, maintain safe distance, keep an exit path clear, and rule out medical causes.", category: "Psychosis" },
            { question: "What is the difference between a panic attack and a life-threatening medical emergency?", answer: "Panic attack is a diagnosis of exclusion — PE, ACS, asthma, anaphylaxis, and hypoglycaemia can all mimic panic. Rule out medical causes before attributing symptoms to anxiety.", category: "Panic Attack" },
            { question: "What is the DE-ESCALATE framework for managing agitated patients?", answer: "Distance, Eye contact, Empathy, Slow down, Choices, Active listening, Low stimulation, Ask for help, Transport, Exit strategy.", category: "De-escalation" },
            { question: "What are the criteria for an involuntary psychiatric hold?", answer: "Typically: danger to self, danger to others, or grave disability (unable to provide for basic needs like food, shelter, safety). Criteria vary by jurisdiction.", category: "Involuntary Holds" }
        ],
        quiz: [
            {
                q: "A 45-year-old male is found wandering in the street, agitated and shouting at unseen people. He is diaphoretic, tachycardic (HR 124), and his skin is warm and flushed. He pulls off his shirt despite the cold weather. His blood glucose is 82 mg/dL and SpO₂ is 96% on room air. What condition should the EMT suspect as the HIGHEST priority?",
                options: [
                    "Acute psychosis from schizophrenia — transport for psychiatric evaluation",
                    "Hypoglycaemia — despite the normal reading, symptoms suggest low blood sugar",
                    "Excited delirium with possible stimulant intoxication — this is a medical emergency requiring aggressive cooling, de-escalation, and rapid transport",
                    "Panic attack — provide reassurance and calm the patient"
                ],
                correct: 2,
                explanation: "Agitation, hyperthermia, tachycardia, diaphoresis, and bizarre behaviour (stripping off clothes, shouting at unseen people) with normal glucose and SpO₂ is classic for excited delirium. This is a medical emergency, not a primary psychiatric condition, and can progress to cardiorespiratory arrest."
            },
            {
                q: "You are called to assess a 22-year-old female who suddenly developed chest tightness, shortness of breath, palpitations, tingling in her hands, and a feeling that she is 'going to die.' She has no significant medical history. Vital signs: HR 118, BP 132/84, RR 26, SpO₂ 99%, temperature 36.8°C. Her symptoms started 15 minutes ago during a final exam. What is the MOST appropriate next step?",
                options: [
                    "Reassure the patient that she is having a panic attack and have her breathe into a paper bag",
                    "Rule out life-threatening medical causes (PE, ACS, asthma, anaphylaxis) by focused assessment, then provide calm reassurance and encourage slow breathing",
                    "Administer oxygen via non-rebreather — the tachypnoea and tachycardia indicate hypoxia",
                    "Transport emergently with lights and sirens — this sounds like a pulmonary embolism"
                ],
                correct: 1,
                explanation: "Panic attack is a diagnosis of exclusion. Before attributing symptoms to anxiety, systematically rule out PE (sudden dyspnoea, pleuritic pain), ACS (chest pain, risk factors), asthma (wheezes, cough), and anaphylaxis (rash, oedema). The paper bag technique is dangerous and should NEVER be used. If medical causes are excluded, calm reassurance and slow breathing are appropriate."
            },
            {
                q: "[HARD] An EMT crew and law enforcement are managing a highly agitated 32-year-old male suspected of methamphetamine intoxication. He is combative, profusely diaphoretic, and has pulled off his shirt. Law enforcement has subdued him and placed him prone on the ground with handcuffs. He is still struggling against the restraints. What is the EMT's MOST important immediate concern and action?",
                options: [
                    "The patient needs chemical sedation — request ALS for benzodiazepine administration; this is the only way to safely calm a methamphetamine-intoxicated patient",
                    "The patient is at imminent risk of positional asphyxia from the prone restraint — request immediate repositioning to a side-lying (lateral recumbent) position, and monitor breathing and SpO₂ continuously",
                    "The patient is fighting the restraints, indicating he still has adequate respiratory effort — no immediate action is needed as long as he is handcuffed",
                    "Apply cold packs to reduce hyperthermia; the restraint position does not affect respiratory status"
                ],
                correct: 1,
                explanation: "Prone restraint is dangerous and potentially fatal. When a patient is restrained prone, the ability to breathe is compromised by: 1) Restricted chest wall expansion, 2) Restricted diaphragmatic movement from abdominal compression, 3) Increased oxygen demand from struggling against restraints. The combination of prone positioning + stimulant intoxication + hyperthermia + struggling creates a high risk of sudden death from positional asphyxia. The patient must be repositioned to a side-lying (lateral recumbent) position immediately. SpO₂, respiratory rate, and level of consciousness must be monitored continuously."
            }
        ],
        critical: [
            {
                id: "crit_5_10_1",
                scenario: "You are called to a community centre for a 38-year-old male who is yelling at staff and other patrons. On arrival, he is standing in the middle of the room, gesturing wildly, and shouting that 'the government is watching me through the lights.' He is pacing back and forth and will not let any staff approach him. A crowd of approximately 15 people is watching. He is well-known to the centre's staff as having a history of paranoid schizophrenia but has not taken his medication in several weeks. The centre manager asks you to 'come and calm him down' so he can be removed from the premises.",
                question: "What is the safest initial approach for the EMT?",
                options: [
                    {t: "Approach the patient directly with your partner, speaking firmly and telling him he needs to leave the premises or the police will be called", f: "Incorrect — A direct, confrontational approach with a paranoid patient can escalate the situation rapidly. The patient perceives authority figures as threatening. Speaking firmly and issuing ultimatums is likely to increase his agitation."},
                    {t: "Clear the room of bystanders to reduce stimulation, maintain a safe distance, position yourself between the patient and the exit, speak with a calm low voice, introduce yourself, acknowledge his distress without challenging his delusions, and offer choices (such as sitting down or walking to a quieter area). Request law enforcement as a safety backup before engaging", f: "Correct — This is a textbook application of de-escalation principles: 1) Reduce stimulation (clear bystanders, dim/noise reduction), 2) Maintain safe distance and exit path, 3) Calm, non-threatening tone, 4) Acknowledge feelings without arguing about delusions, 5) Offer choices to restore a sense of control, 6) Have law enforcement staged nearby in case the situation escalates."}
                ],
                correct: 1,
                explanation: "De-escalation is the priority in managing this patient. Paranoid psychosis requires a non-threatening approach. Key steps: clear the room to reduce stimulation, maintain distance, speak calmly, acknowledge feelings without validating delusions ('I can see you are very scared. No one here wants to hurt you.'), offer choices, and have law enforcement ready as backup — not as the first approach. Never argue with delusions or use a confrontational tone. The goal is to build enough trust to assess the patient and determine if transport is needed.",
                kpi: "Applies de-escalation principles in a patient with paranoid psychosis"
            },
            {
                id: "crit_5_10_2",
                scenario: "You are called to a private residence where a 55-year-old female is found sitting on her bed crying. She tells you she 'just can't do this anymore' and that she has been thinking about 'ending it all.' She states she has a plan — she has been saving her blood pressure pills to take all at once, and there are 30 tablets in her bedside drawer. Her husband died 6 months ago and she lives alone. She has no family nearby. Her vital signs are stable and she is alert and oriented. She is willing to come to the hospital 'if you think it will help.' Her son lives in another state and she does not want to call him.",
                question: "What are the EMT's priorities in managing this suicidal patient?",
                options: [
                    {t: "The patient is willing to come to the hospital voluntarily — there is no immediate danger. Place her in the ambulance and transport without further intervention. No need to involve the son or remove the pills since she is coming voluntarily", f: "Incorrect — Voluntary cooperation does not eliminate the need for safety precautions. The patient has a clear plan (overdose), the means (30 tablets), and significant risk factors (recent loss, social isolation, living alone). She must be under constant observation, dangerous items must be removed, and family should be notified."},
                    {t: "This patient is at high risk for suicide — she has a plan and the means, significant risk factors (widow, isolated, living alone), and expressed intent. Do not leave her alone. Remove the pills from her environment with her permission. Maintain constant observation during transport. Notify her son as a protective contact. Document her verbatim statements", f: "Correct — This patient has multiple high-risk features: suicidal ideation with a clear plan, access to means (30 tablets), recent loss (husband), social isolation, and living alone. Management includes: 1) Constant observation — never leave her alone, 2) Remove means (the pills) with her permission or by involving law enforcement if needed, 3) Notify family (son) as a protective resource, 4) Transport for psychiatric evaluation, 5) Document her verbatim statements — this is critical medical-legal documentation."}
                ],
                correct: 1,
                explanation: "Suicidal patients with a plan and means represent a high acute risk. The strongest predictor of completed suicide is a previous attempt, but the presence of a specific plan with access to lethal means is the next highest risk. Never leave the patient alone — even for a moment. Remove dangerous items from the environment (medications, sharp objects, belts, shoelaces). Notify family or close contacts when possible. Transport for ED evaluation. Document verbatim patient statements — quotes are essential for the psychiatric assessment and legal documentation.",
                kpi: "Recognises high suicide risk and implements safety precautions including constant observation and means removal"
            },
            {
                id: "crit_5_10_3",
                scenario: "You respond to a grocery store parking lot for a 'man down.' Upon arrival, you find a 28-year-old male lying supine on the pavement, confused and disoriented. His pupils are constricted (1–2 mm), he is bradycardic (HR 54), and his breathing is shallow at 8 breaths per minute. His SpO₂ is 88% on room air. Bystanders report they saw him staggering and acting 'strange' before collapsing. There is a small blue pill on the ground next to him that you cannot identify. His skin is cool and pale. A medical alert bracelet reads 'Seizure Disorder — takes Dilantin.'",
                question: "What is the priority assessment and management for this patient, considering the differential diagnosis?",
                options: [
                    {t: "The medical alert bracelet indicates a seizure disorder — this is likely a postictal state. Provide supportive care, apply oxygen, and transport. The pill on the ground is unrelated", f: "Incorrect — While the bracelet is important information, a postictal state does not typically produce pinpoint pupils, bradycardia, and respiratory depression. The combination of pinpoint pupils, bradycardia, hypoventilation, and confusion strongly suggests opioid overdose. Medical alert bracelets tell you about the patient's history, not their current presentation. Opioid overdose can occur in any patient, regardless of their medical history."},
                    {t: "The presenting signs (pinpoint pupils, bradycardia, respiratory depression, altered mental status) are classic for opioid overdose, despite the seizure history. Open the airway, begin BVM ventilation at 10–12 breaths/min with high-flow oxygen attached, and administer naloxone 0.4–2 mg IM/IN per protocol while ventilating. Transport for ongoing monitoring", f: "Correct — This is a case where the presenting signs override the medical history. The toxidrome (opioid triad: respiratory depression, CNS depression, pinpoint pupils) is unmistakable. The medical alert bracelet may be a red herring, or the patient may have both conditions. Follow the ABC approach: airway/BVM first (the patient is hypoventilating at 8/min with SpO₂ 88%), then administer naloxone. Transport is mandatory even if he awakens — naloxone's half-life is shorter than most opioids."}
                ],
                correct: 1,
                explanation: "Never let the medical history override the presenting clinical picture. The classic opioid toxidrome is present. The seizure history may be coincidental or the patient may have taken opioids recreationally or accidentally. The EMT's priority is managing the ABC threat — the hypoventilation is immediately life-threatening. BVM ventilation with high-flow oxygen provides immediate support. Naloxone is administered while ventilating. The pill on the ground should be brought to the hospital for identification. After naloxone, monitor for return of spontaneous breathing and prepare for possible agitation during withdrawal.",
                kpi: "Prioritises presenting toxidrome over medical history when managing altered mental status"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────
     * c5s11 – Pain Management
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c5s11",
        shortTitle: "5.11 Pain Management",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Pain Management</h3>

            <p>Pain is one of the most common reasons patients seek emergency care. It is a complex, subjective experience that involves both sensory and emotional components. Effective pain management is a core EMT responsibility — unrelieved pain causes unnecessary suffering, increases physiological stress (tachycardia, hypertension, increased oxygen demand), impairs immune function, and can prolong recovery. The EMT's goal is to assess pain systematically, provide appropriate interventions within the scope of practice, and reassess the patient's response.</p>

            <p>Pain is often described as the <strong>"fifth vital sign"</strong> — along with temperature, pulse, respiration, and blood pressure — and should be assessed and documented in every patient encounter where pain is present.</p>

            <h4>Pain Assessment Tools</h4>
            <p>Pain is subjective — you cannot measure it with a monitor. Reliable assessment depends on using validated tools appropriate to the patient's age, developmental level, and clinical status.</p>

            <h5>Numeric Rating Scale (NRS) — Ages 8 and Up</h5>
            <p>The patient rates their pain from 0 to 10, where 0 = no pain and 10 = the worst pain imaginable. This is the most commonly used pain scale in prehospital and emergency care. Categories:</p>
            <ul>
                <li><strong>0:</strong> No pain</li>
                <li><strong>1–3:</strong> Mild pain (interferes minimally with function)</li>
                <li><strong>4–6:</strong> Moderate pain (interferes significantly with function)</li>
                <li><strong>7–10:</strong> Severe pain (incapacitating, unable to function)</li>
            </ul>
            <p>A reduction of 2 or more points on the NRS after an intervention is considered clinically meaningful. Many protocols use a target of NRS ≤4 or a reduction of ≥2 points as the goal for pain management.</p>

            <h5>Wong-Baker FACES Pain Rating Scale — Children Ages 3–8</h5>
            <p>The FACES scale uses six cartoon faces ranging from a smiling face (0 = no hurt) to a crying face (10 = hurts worst). The child points to the face that best represents their pain. It is validated for children aged 3–8 years and is also useful for patients with limited language or cognitive impairment. Each face has a corresponding number (0, 2, 4, 6, 8, 10) for documentation.</p>

            <h5>FLACC Scale — Non-Verbal Patients (Infants, Dementia, Intubated)</h5>
            <p>The <strong>FLACC</strong> scale assesses pain in patients who cannot self-report. It evaluates five categories, each scored 0–2, for a total of 0–10:</p>
            <table>
                <thead>
                    <tr><th>Category</th><th>0</th><th>1</th><th>2</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>F</strong> — Face</td><td>No particular expression or smile</td><td>Occasional grimace or frown, withdrawn</td><td>Frequent to constant quivering chin, clenched jaw</td></tr>
                    <tr><td><strong>L</strong> — Legs</td><td>Normal position or relaxed</td><td>Uneasy, restless, tense</td><td>Kicking, or legs drawn up</td></tr>
                    <tr><td><strong>A</strong> — Activity</td><td>Lying quietly, normal position, moves easily</td><td>Squirming, shifting back and forth, tense</td><td>Arched, rigid, or jerking</td></tr>
                    <tr><td><strong>C</strong> — Cry</td><td>No cry (awake or asleep)</td><td>Moans or whimpers, occasional complaint</td><td>Crying steadily, screams or sobs, frequent complaints</td></tr>
                    <tr><td><strong>CC</strong> — Consolability</td><td>Content, relaxed</td><td>Reassured by occasional touching, hugging, or being talked to; distractible</td><td>Difficult to console or comfort</td></tr>
                </tbody>
            </table>
            <p>FLACC is widely used in paediatric, geriatric, and critical care settings. A score ≥4 indicates moderate-to-severe pain requiring intervention.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> If a patient can report their pain, use the Numeric Rating Scale or FACES (self-report is the gold standard). Use FLACC only when the patient <em>cannot</em> self-report — for example, infants, patients with advanced dementia, or intubated/sedated patients.
            </div>

            <h4>Non-Pharmacological Pain Management</h4>
            <p>Before or alongside medication, the EMT has several powerful non-pharmacological tools to reduce pain. These interventions are within every EMT's scope and should not be overlooked:</p>
            <ul>
                <li><strong>Splinting and immobilisation:</strong> Immobilising a fractured or injured extremity reduces pain by preventing movement at the injury site. Use rigid splints, vacuum splints, traction splints (for femur fractures), or board splints. A well-applied splint can reduce pain by 2–4 points on the NRS.</li>
                <li><strong>Ice (cold therapy):</strong> Apply cold packs to acute injuries (fractures, sprains, burns) for 15–20 minutes to reduce swelling and provide analgesic effect by slowing nerve conduction velocity. Always place a barrier (e.g., cloth or towel) between the cold pack and the skin to prevent frostbite or ice burn.</li>
                <li><strong>Position of comfort:</strong> Allow the patient to find the position that minimises their pain. For example, a patient with peritonitis will prefer lying still with knees drawn up; a patient with COPD will prefer sitting upright (tripod position).</li>
                <li><strong>Reassurance and calm communication:</strong> Fear and anxiety amplify the perception of pain. Explaining what you are doing, being honest about what will hurt, and providing calm, confident reassurance can significantly reduce a patient's pain experience.</li>
                <li><strong>Distraction:</strong> Engaging the patient in conversation, asking about their family or interests, or having them focus on slow, deep breathing can reduce pain perception, especially in paediatric patients.</li>
                <li><strong>Smooth transport:</strong> Avoiding sudden acceleration, braking, and sharp turns reduces pain from fractures, abdominal conditions, and spinal injuries.</li>
            </ul>

            <h4>EMT-Level Pain Medications</h4>
            <p>The specific medications available to EMTs for pain management vary by jurisdiction and local protocol. The following are common EMT-level analgesics:</p>

            <h5>Penthrox (Methoxyflurane) — Inhalational Analgesic</h5>
            <p>Penthrox is a self-administered, inhalational analgesic approved for pain relief in trauma patients. The patient inhales the vapour through a handheld inhaler (the "green whistle"). Key facts:</p>
            <ul>
                <li><strong>Indications:</strong> Moderate-to-severe acute pain from trauma (fractures, burns, lacerations, dislocations) in conscious, spontaneously breathing patients</li>
                <li><strong>Dose:</strong> Self-administered via the Penthrox inhaler — the patient inhales intermittently as needed. Max cumulative dose: 3 inhalers (6 mL) per week, 2 inhalers (4 mL) per day, 1 inhaler (3 mL) per single event.</li>
                <li><strong>Onset:</strong> Rapid — within 2–5 inhalations (60–90 seconds)</li>
                <li><strong>Duration:</strong> Short — 3–5 minutes after the last inhalation (titratable)</li>
                <li><strong>Contraindications:</strong> Known hypersensitivity; patients with clinically significant renal impairment; history of malignant hyperthermia; concurrent use of tetracycline antibiotics; patients who are unconscious or unable to follow commands (requires patient cooperation to self-administer)</li>
                <li><strong>Side effects:</strong> Drowsiness, dizziness, metallic taste, headache. Less common: nausea/vomiting.</li>
                <li><strong>EMT responsibility:</strong> Explain use to the patient, supervise self-administration, monitor for side effects, document pain scores before and after.</li>
            </ul>

            <h5>Paracetamol (Acetaminophen) — Oral Analgesic</h5>
            <p>Paracetamol is a non-opioid analgesic commonly given orally for mild-to-moderate pain. It can be administered by EMTs under standing orders in many systems:</p>
            <ul>
                <li><strong>Indications:</strong> Mild-to-moderate pain (NRS 1–6), headache, musculoskeletal pain, as an adjunct to other analgesics</li>
                <li><strong>Dose (adult):</strong> 500–1000 mg orally (tablets or liquid suspension)</li>
                <li><strong>Onset:</strong> 30–60 minutes after ingestion</li>
                <li><strong>Duration:</strong> 4–6 hours</li>
                <li><strong>Maximum daily dose:</strong> 4,000 mg in adults (lower in patients with liver disease, chronic alcohol use, or malnutrition)</li>
                <li><strong>Contraindications:</strong> Known hypersensitivity, known liver disease or failure, concurrent paracetamol-containing medications already taken by the patient (always ask what the patient has taken before arrival)</li>
                <li><strong>Caution:</strong> Many over-the-counter cold and flu medications contain paracetamol — inadvertent stacking can lead to hepatotoxicity</li>
            </ul>

            <h5>Nitrous Oxide (Entonox / "Gas and Air") — Inhalational Analgesic</h5>
            <p>Nitrous oxide (N₂O) is a gas with analgesic and anxiolytic properties, self-administered via a demand-valve mask or mouthpiece. It is typically delivered as a 50:50 mixture with oxygen (Entonox). Key facts:</p>
            <ul>
                <li><strong>Indications:</strong> Moderate pain, procedural pain, anxiety associated with pain (especially useful for childbirth, burns, dressing changes, fracture reduction)</li>
                <li><strong>Dose:</strong> Self-administered by the patient via demand valve (the patient must be able to understand and follow instructions — the demand valve only opens when the patient inhales)</li>
                <li><strong>Onset:</strong> Very rapid — 30–60 seconds</li>
                <li><strong>Duration:</strong> 2–3 minutes after cessation (rapid elimination)</li>
                <li><strong>Contraindications:</strong> Altered mental status / inability to self-administer; pneumothorax (N₂O can expand a pneumothorax); bowel obstruction; decompression sickness; head injury with altered consciousness; maxillofacial injuries (cannot create a seal)</li>
                <li><strong>Safety:</strong> Demand-valve design prevents overdose — if the patient becomes drowsy and releases the mask, flow stops. Scavenging systems should be used to reduce occupational exposure. Chronic exposure is associated with vitamin B₁₂ depletion (bone marrow suppression, neuropathy).</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Important:</strong> Penthrox and nitrous oxide are self-administered by the patient — this is a safety feature. The patient controls the dose based on their pain level. If the patient becomes too drowsy to hold the inhaler or mask, they release it and the drug administration stops. <strong>Never force or hold a mask over a patient's face</strong> — this bypasses the safety feature and can lead to over-sedation.
            </div>

            <h4>Contraindications to EMT-Level Analgesics</h4>
            <table>
                <thead>
                    <tr><th>Medication</th><th>Contraindications / Cautions</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Penthrox</strong></td><td>Renal impairment, malignant hyperthermia history, tetracycline use, unconscious/uncooperative patient, cumulative dose limits</td></tr>
                    <tr><td><strong>Paracetamol</strong></td><td>Known liver disease, allergy, already taken paracetamol-containing medications, caution with chronic alcohol use</td></tr>
                    <tr><td><strong>Nitrous Oxide</strong></td><td>Altered mental status, pneumothorax, bowel obstruction, decompression sickness, head injury, maxillofacial injury (cannot seal), inability to self-administer</td></tr>
                </tbody>
            </table>

            <h4>Reassessment After Intervention</h4>
            <p>After any pain management intervention — pharmacological or non-pharmacological — the EMT must <strong>reassess</strong> the patient's pain level and vital signs. This is not optional; it is standard of care. The reassessment should include:</p>
            <ul>
                <li><strong>Pain score:</strong> Re-assess using the same scale as the initial assessment. A reduction of ≥2 points (or to NRS ≤4) is a typical target.</li>
                <li><strong>Qualitative change:</strong> "Is the pain better, worse, or the same?" "What is your pain level now?"</li>
                <li><strong>Location and quality:</strong> Has the pain changed location or character? (New pain could signal a change in pathology.)</li>
                <li><strong>Vital signs:</strong> Heart rate and blood pressure may decrease as pain is relieved. A persistently tachycardic or hypertensive patient may have inadequate pain relief or an ongoing pathological process.</li>
                <li><strong>Side effects:</strong> Nausea, drowsiness, dizziness, or respiratory depression (especially if nitrous oxide or other agents were used)</li>
                <li><strong>Documentation:</strong> Record the initial pain score, the intervention, the time, and the re-assessed pain score in the patient care report (PCR)</li>
            </ul>

            <h4>Documentation of Pain Scores</h4>
            <p>Pain assessment and management must be documented in the PCR. Key elements to document:</p>
            <ul>
                <li><strong>Initial pain assessment:</strong> Scale used (NRS, FACES, FLACC), score obtained, location, quality, radiation, aggravating/relieving factors (OPQRST)</li>
                <li><strong>Intervention:</strong> Non-pharmacological (splinting, ice, positioning) and/or pharmacological (medication name, dose, route, time, batch number for controlled drugs)</li>
                <li><strong>Reassessment:</strong> Pain score after intervention, time of reassessment, any side effects or adverse reactions</li>
                <li><strong>Patient response:</strong> Verbatim quotes are powerful — "Patient stated, 'My pain went from an 8 to a 4 after the splint was applied'"</li>
                <li><strong>Ongoing plan:</strong> Continue monitoring during transport, report to receiving facility</li>
            </ul>
            <p>Pain documentation is not just good clinical practice — it matters for quality improvement, regulatory compliance, and medical-legal protection. Inadequate pain documentation is one of the most common deficiencies found in EMS chart audits.</p>

            <h4>Barriers to Adequate Pain Management</h4>
            <p>Despite the availability of effective interventions, pain is frequently undertreated in the prehospital setting. Common barriers include:</p>
            <ul>
                <li><strong>Oligoanalgesia (under-treatment of pain):</strong> The most common barrier — pain is often dismissed, minimised, or not treated because providers are focused on other priorities (ABCs, transport). Treating pain is treating the patient.</li>
                <li><strong>Age-related disparities:</strong> Both the very young (infants and children) and the very old (elderly) are systematically undertreated. Children may not be asked about pain, and elderly patients may be assumed to have less pain or be unable to benefit from treatment.</li>
                <li><strong>Cultural and language barriers:</strong> Patients from different cultural backgrounds may express pain differently (some cultures encourage stoicism, others encourage vocal expression). Language barriers can prevent accurate assessment. Use interpreter services when available.</li>
                <li><strong>Substance use history:</strong> Patients with a history of substance use disorder are often undertreated due to concerns about drug-seeking behaviour or addiction. All patients deserve appropriate pain management regardless of their history.</li>
                <li><strong>Provider bias:</strong> Unconscious bias related to race, ethnicity, gender, age, or socioeconomic status can affect pain assessment and treatment decisions. Awareness of these biases is the first step to overcoming them.</li>
                <li><strong>Logistical barriers:</strong> Protocol restrictions, medication availability, lack of appropriate pain assessment tools, and short transport times may limit pain management options.</li>
                <li><strong>Knowledge and training gaps:</strong> Some EMTs may not be trained in available pain management options or may not know how to use pain assessment scales effectively.</li>
            </ul>
            <p>Overcoming these barriers requires a systematic approach: assess pain in every patient, use validated tools, provide both pharmacological and non-pharmacological interventions, reassess, and document. Every patient deserves adequate pain management.</p>
        </div>`,
        flashcards: [
            { question: "What is the Numeric Rating Scale (NRS) for pain and how is it interpreted?", answer: "Patient rates pain 0–10 (0 = no pain, 10 = worst imaginable). Mild = 1–3, Moderate = 4–6, Severe = 7–10. A reduction of ≥2 points is clinically meaningful.", category: "Pain Assessment" },
            { question: "What is the Wong-Baker FACES scale and when is it used?", answer: "A pain scale using six cartoon faces (0–10) for children aged 3–8 or patients with limited language/cognitive ability. The child points to the face that matches their pain.", category: "Pain Assessment" },
            { question: "What does the FLACC scale assess and when should it be used?", answer: "FLACC assesses Face, Legs, Activity, Cry, Consolability — each scored 0–2 (total 0–10). Used for non-verbal patients: infants, advanced dementia, or intubated/sedated patients.", category: "Pain Assessment" },
            { question: "What non-pharmacological pain management techniques are available to EMTs?", answer: "Splinting/immobilisation, ice (cold therapy with barrier), position of comfort, calm reassurance, distraction, and smooth transport technique.", category: "Non-Pharmacological" },
            { question: "What is Penthrox (methoxyflurane) and what are its contraindications?", answer: "A self-administered inhalational analgesic ('green whistle') for moderate-to-severe trauma pain. Contraindications: renal impairment, malignant hyperthermia, tetracycline use, unconscious patients.", category: "Penthrox" },
            { question: "What are the contraindications to nitrous oxide (Entonox) administration?", answer: "Altered mental status, inability to self-administer, pneumothorax, bowel obstruction, decompression sickness, head injury, and maxillofacial injuries preventing a mask seal.", category: "Nitrous Oxide" },
            { question: "What are common barriers to adequate pain management in the prehospital setting?", answer: "Oligoanalgesia (under-treatment), age disparities (children/elderly undertreated), cultural/language barriers, provider bias, substance use stigma, protocol restrictions, and knowledge gaps.", category: "Barriers" },
            { question: "What must be documented after a pain management intervention?", answer: "Initial pain score and scale used, the intervention (type, medication/dose/route/time), reassessed pain score, side effects, and patient response (including verbatim quotes).", category: "Documentation" }
        ],
        quiz: [
            {
                q: "A 6-year-old child with a forearm fracture is crying and holding her arm. She cannot describe her pain in numbers. What is the MOST appropriate pain assessment tool for this patient?",
                options: [
                    "Numeric Rating Scale (0–10)",
                    "Wong-Baker FACES Pain Rating Scale — point to the face that shows how much it hurts",
                    "FLACC scale — assess face, legs, activity, cry, consolability",
                    "Adult verbal numeric scale with caregiver proxy report"
                ],
                correct: 1,
                explanation: "The Wong-Baker FACES scale is validated for children aged 3–8. It uses cartoon faces to help children communicate their pain level without needing to understand numbers. Numeric scales are appropriate for age ≥8. FLACC is for non-verbal patients who cannot self-report at all."
            },
            {
                q: "An EMT applies a rigid splint to a patient's fractured forearm. Before splinting, the patient rated their pain as 8/10. After splinting, the patient reports the pain is now 5/10. What does this change indicate?",
                options: [
                    "The splint was applied incorrectly — a properly applied splint should eliminate all pain",
                    "The patient's pain has reduced by 3 points, which is a clinically meaningful improvement — the splint is effective",
                    "The pain score is still >4, so the splint is not working and should be removed",
                    "The patient is exaggerating their pain level — a fracture cannot decrease by 3 points from splinting alone"
                ],
                correct: 1,
                explanation: "A reduction of ≥2 points on the NRS is considered a clinically meaningful improvement. Splinting reduces pain by immobilising the fracture and preventing movement at the injury site. A 3-point reduction (8 → 5) is an excellent response. Continue to monitor and consider additional interventions (ice, pharmacological) if indicated."
            },
            {
                q: "[HARD] Which of the following patients is an appropriate candidate for nitrous oxide (Entonox) administration by an EMT?",
                options: [
                    "A 32-year-old male with a pneumothorax after a stabbing who needs pain relief for transport",
                    "A 24-year-old female in active labour with severe pain who is alert, oriented, and able to follow commands",
                    "An 18-year-old male with a head injury and GCS 12 who is confused and combative",
                    "A 7-year-old child with a deformed forearm who is crying and cannot hold the mask on their own"
                ],
                correct: 1,
                explanation: "Nitrous oxide (Entonox) is appropriate for the labouring patient who is alert, following commands, and can self-administer via the demand-valve mask. It is contraindicated in: pneumothorax (N₂O can expand the gas pocket), head injury with altered consciousness (N₂O increases intracranial pressure), and patients who cannot self-administer (child needs to hold the mask themselves — the demand-valve design requires the patient's inspiratory effort)."
            }
        ],
        critical: [
            {
                id: "crit_5_11_1",
                scenario: "You are called to a playground for a 4-year-old girl who fell from the monkey bars and is holding her left arm. She is crying and will not let anyone touch her arm. Her mother is present and very anxious. The arm appears angulated at the mid-forearm, suggesting a fracture of the radius and ulna. The child cannot describe her pain using numbers. Your partner suggests 'just splinting it quickly while she's distracted.' The mother asks you to 'do something for the pain.'",
                question: "How should the EMT assess this child's pain and manage the injury?",
                options: [
                    {t: "Assess pain using the Wong-Baker FACES scale by showing the child the faces and asking her to point to one. Use calm reassurance and distraction (let her hold a stuffed toy or phone with a video). Apply a well-padded rigid splint with gentle handling. Apply a cold pack (with a barrier) to the fracture site. Reassess pain using FACES after splinting", f: "Correct — Pain assessment in a 4-year-old should use the FACES scale (validated for ages 3–8). Management combines pharmacological and non-pharmacological approaches: distraction (toy, video), calm reassurance, gentle handling during splint application, cold therapy for pain and swelling, and reassessment using the same scale. If available and per protocol, consider Penthrox (self-administered inhalational analgesic) for procedural pain during splinting."},
                    {t: "The child is too young for pain assessment — paediatric pain is difficult to measure. Apply the splint quickly and transport. The pain will stop once the arm is immobilised", f: "Incorrect — Children at age 4 CAN self-report pain using the FACES scale. Paediatric pain is systematically undertreated ('oligoanalgesia'), and this child deserves appropriate assessment and management. 'Splinting quickly' without preparation, distraction, or pain control causes unnecessary suffering and may make the child uncooperative for the rest of the assessment."}
                ],
                correct: 0,
                explanation: "Children as young as 3 years can self-report pain using the FACES scale — age is not a reason to skip pain assessment. Management for this paediatric fracture: 1) Assess with FACES (establish baseline), 2) Distract and calm the child (toy, phone video, calm voice), 3) Apply a well-padded rigid splint with gentle handling (a second person to help is ideal), 4) Apply a cold pack (with cloth barrier) for 15–20 minutes, 5) Reassess pain with FACES, 6) Document all assessments and interventions. Consider Penthrox per protocol for procedural analgesia during splinting if the child is old enough to cooperate with self-administration (typically ≥5–6 years).",
                kpi: "Appropriate paediatric pain assessment using age-validated tool with multi-modal management"
            },
            {
                id: "crit_5_11_2",
                scenario: "You are called to a nursing home for an 82-year-old female with a suspected hip fracture after a fall. She is lying on the floor, alert but in obvious distress, moaning, and unable to move her right leg, which is shortened and externally rotated. The staff has not given her any pain medication. Her vital signs are: HR 104, BP 148/88, RR 20, SpO₂ 95%. She has a history of dementia and is unable to reliably use the Numeric Rating Scale. She flinches and groans when anyone approaches her right hip. The nursing home has a long, narrow hallway and you need to move her to the ambulance.",
                question: "What pain management approach is most appropriate for this patient?",
                options: [
                    {t: "Pain assessment is not reliable in this patient due to her dementia — the hip fracture is obvious. Splint the leg with a traction splint or long board splint, apply a cold pack to the hip area, pad the stretcher, handle gently, and transport smoothly. Use the FLACC scale to assess pain non-verbally before and after splinting", f: "Correct — This patient cannot self-report due to dementia, so the FLACC scale is the appropriate assessment tool (score based on face, legs, activity, cry, consolability). Management priorities: 1) Immobilise the suspected hip fracture with a traction splint (if no contraindications) or long spine board with padding, 2) Apply cold pack to the hip, 3) Use a scoop stretcher or log-roll for minimal movement, 4) Pad the stretcher well, 5) Transport with gentle, smooth driving, 6) Reassess pain using FLACC after immobilisation."},
                    {t: "The patient has dementia and cannot report pain — there is no reliable way to assess or manage her pain. Focus on immobilisation and transport. Pain medication cannot be given without a pain score", f: "Incorrect — The FLACC scale is specifically designed for non-verbal patients, including those with dementia. Pain is assessable and treatable in this population. Assuming a patient with dementia cannot benefit from pain management is a form of age-related oligoanalgesia. The flinching and groaning are signs of significant pain and should be treated."}
                ],
                correct: 0,
                explanation: "Patients with dementia are frequently undertreated for pain because they cannot self-report using standard scales. The FLACC scale provides a validated observational assessment. This patient's FLACC score would likely be high (flinching = face 2, leg externally rotated/tense = legs 2, moaning = cry 2, guarding = activity 2, not consoled by staff = consolability 2). Management: 1) Traction splint (for mid-shaft femur fracture) or padded immobilisation (for suspected hip fracture), 2) Cold therapy, 3) Gentle handling (scoop stretcher, log roll), 4) Smooth transport, 5) Reassess FLACC, 6) Document all findings and interventions. Consider pharmacological analgesia per protocol.",
                kpi: "Uses FLACC scale for pain assessment in a non-verbal elderly patient with dementia"
            },
            {
                id: "crit_5_11_3",
                scenario: "You are treating a 28-year-old male with an isolated, closed mid-shaft femur fracture from a motorcycle crash. He is alert, oriented, and in severe pain (NRS 9/10). Vital signs: HR 118, BP 138/84, RR 22, SpO₂ 97%. He has no other injuries, no known allergies, and no significant medical history. He is asking for pain relief. Your protocol allows Penthrox (methoxyflurane) via self-administered inhaler for trauma pain. You explain the device and he understands how to use it. He takes several inhalations and after 3 minutes reports his pain is now 6/10. He asks if he can 'use it more.' His vital signs are unchanged.",
                question: "What is the appropriate next step in managing this patient's pain?",
                options: [
                    {t: "The patient has already received the maximum benefit from Penthrox — tell him the pain will not improve further and he must wait for hospital analgesia", f: "Incorrect — Penthrox is titratable; the patient can continue to self-administer as needed up to cumulative dose limits (1 inhaler per event, 2 per day). The patient-controlled nature means he can increase his dose by taking more frequent or deeper inhalations. A reduction from 9 to 6 is a good start, but further improvement may be possible. Additionally, non-pharmacological measures should be employed."},
                    {t: "Encourage the patient to continue using the Penthrox inhaler as needed (it is self-titrating), apply a traction splint to immobilise the femur fracture (this may significantly reduce pain), apply a cold pack to the thigh, position him comfortably for transport, and reassess pain and vital signs every 5 minutes. Document initial NRS, intervention, and reassessment scores", f: "Correct — Penthrox is self-titrated by the patient based on their pain level. He can continue to use it as needed (up to 1 inhaler per event). The most powerful non-pharmacological intervention for a femur fracture is a traction splint — which provides inline traction, reduces muscle spasm, and can dramatically reduce pain (often by 3–5 points). Combining pharmacological (Penthrox) and non-pharmacological (traction splint, ice, positioning) approaches provides the best pain relief."}
                ],
                correct: 1,
                explanation: "Multi-modal analgesia is the standard of care — combining pharmacological and non-pharmacological interventions provides better pain relief than either alone. For this patient: 1) Continue Penthrox as needed (self-titrated, patient-controlled), 2) Apply a traction splint — this is the single most effective pain intervention for a femur fracture as it provides inline traction, reduces muscle spasm, and immobilises the fracture fragments, 3) Cold pack to the thigh for analgesia and swelling reduction, 4) Position of comfort and smooth transport, 5) Reassess NRS and vital signs every 5 minutes, 6) Document all assessments and interventions. The patient's vital signs (mild tachycardia) may improve as pain is better controlled.",
                kpi: "Combines pharmacological and non-pharmacological interventions for multi-modal pain management"
            }
        ]
    }
];
