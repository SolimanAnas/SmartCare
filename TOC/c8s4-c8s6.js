/* ========== Chapter 8 – Environmental & Disaster (Sections 4-6) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [

/* ──────────────────────────────────────────────────────────────────────────────
 * c8s4 – Diving & Altitude Emergencies
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c8s4",
    shortTitle: "8.4 Diving & Altitude Emergencies",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Diving & Altitude Emergencies</h3>

        <p>Diving and altitude emergencies arise from the physics of gas behaviour under pressure. <strong>Boyle's Law</strong> (pressure × volume = constant at a fixed temperature) and <strong>Henry's Law</strong> (the amount of gas dissolved in a liquid is proportional to its partial pressure) govern most injury mechanisms. As an EMT, you must recognise dysbarism injuries (barotrauma, decompression sickness, arterial gas embolism) and altitude-related illness (acute mountain sickness, HACE, HAPE) — all of which can progress rapidly and require specific prehospital interventions.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Key Physics for Diving Emergencies:</strong> For every 33 feet (10 m) of sea water (fsw), pressure increases by 1 atmosphere (atm). At 33 fsw, the diver experiences 2 atm total pressure; at 66 fsw, 3 atm. Boyle's Law means that a given volume of gas at the surface occupies half the volume at 33 fsw and one-third at 66 fsw. During ascent, the reverse occurs — expanding gas can cause barotrauma if not vented. Henry's Law explains decompression sickness: under pressure, nitrogen dissolves into tissues; during rapid ascent, nitrogen comes out of solution forming bubbles.
        </div>

        <h4>Barotrauma (Squeeze)</h4>
        <p><strong>Barotrauma</strong> is tissue injury caused by the failure of an air-filled space to equalise pressure during descent or ascent. The most common sites are the middle ear, sinuses, and lungs.</p>

        <h5>Middle Ear Barotrauma (Ear Squeeze)</h5>
        <p>The most common diving injury. During descent, external pressure increases — the diver must equalise by opening the Eustachian tubes (yawning, swallowing, Valsalva). If unable to equalise, the tympanic membrane is forced inward, causing pain, vascular engorgement, haemorrhage, and possible perforation.</p>
        <ul>
            <li><strong>Presentation:</strong> Pain in one or both ears during descent (barotitis media), sensation of fullness, hearing loss (conductive), tinnitus, and — if the tympanic membrane ruptures — vertigo, nausea, and cold water entering the middle ear (caloric stimulation of the vestibular system).</li>
            <li><strong>Signs:</strong> On otoscopy, the tympanic membrane appears red, retracted, or bulging. Haemotympanum (blood behind the TM) may be visible. Perforation appears as a slit-like or round defect.</li>
            <li><strong>Management:</strong> No diving until healed. Analgesia as needed. Refer for ENT evaluation. Antibiotics only if perforation with contamination. Most heal spontaneously within weeks.</li>
        </ul>

        <h5>Sinus Barotrauma</h5>
        <p>Occurs when a sinus opening (ostium) is blocked by mucosal swelling (allergies, URI, polyps). During descent, the vacuum effect causes mucosal tearing and bleeding.</p>
        <ul>
            <li><strong>Presentation:</strong> Sharp pain over the affected sinus (frontal, maxillary) during descent. Epistaxis may occur on ascent. Pain may persist for hours after surfacing.</li>
            <li><strong>Management:</strong> Decongestants, analgesics. Avoid diving until sinusitis resolves. No specific prehospital emergency treatment required beyond pain management.</li>
        </ul>

        <h5>Pulmonary Barotrauma (Lung Overexpansion Injury)</h5>
        <p>The most dangerous barotrauma. During ascent, gas in the lungs expands (Boyle's Law). If the diver holds their breath during ascent (panic, running out of air, rapid emergency ascent), the expanding gas cannot escape — it overinflates the alveoli, which rupture. Pulmonary barotrauma is the <strong>second leading cause of death in recreational scuba diving</strong> (after drowning). There are three manifestations:</p>
        <table>
            <thead>
                <tr><th>Injury</th><th>Mechanism</th><th>Presentation</th><th>Key Feature</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Arterial Gas Embolism (AGE)</strong></td><td>Alveolar rupture forces gas into pulmonary veins → left heart → systemic arterial circulation. Bubble emboli occlude cerebral vessels.</td><td>Sudden onset of neurologic symptoms <strong>within minutes of surfacing</strong> (often within 1–5 minutes): confusion, dizziness, visual disturbances, loss of consciousness, seizure, stroke-like deficits (hemiparesis, aphasia), cardiac arrest.</td><td><strong>RAPID onset after surfacing</strong> — the hallmark distinguishing feature from DCS (which takes longer to develop)</td></tr>
                <tr><td><strong>Pneumothorax</strong></td><td>Alveolar rupture into the pleural space. Can be simple or tension.</td><td>Pleuritic chest pain, dyspnoea, decreased breath sounds on the affected side, hyperresonance to percussion, tracheal deviation (if tension).</td><td>May occur alone or with AGE. Suspect whenever a diver surfaces with chest pain and respiratory distress.</td></tr>
                <tr><td><strong>Mediastinal / Subcutaneous Emphysema</strong></td><td>Gas tracks along bronchovascular sheaths into the mediastinum and subcutaneous tissues of the neck.</td><td>Chest pressure or fullness, hoarseness, dysphagia, crepitus on palpation of the neck and supraclavicular areas, Hamman's sign (mediastinal crunch — a precordial crackling sound synchronous with the heartbeat).</td><td>Usually self-limiting but signals that lung overexpansion occurred — the patient is at risk for coexisting AGE.</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — AGE vs DCS Timing:</strong> Arterial gas embolism presents <strong>within 1–10 minutes of surfacing</strong> (often immediately). Decompression sickness typically presents <strong>30 minutes to 24 hours</strong> after surfacing (most within 1–6 hours). Rapid onset after surfacing = AGE until proven otherwise.
        </div>

        <h4>Decompression Sickness (DCS / "The Bends")</h4>
        <p><strong>Decompression sickness</strong> results from nitrogen bubbles forming in tissues and blood when a diver ascends too rapidly or stays at depth too long (violating dive tables or computer limits). Under pressure (depth), nitrogen dissolves into body tissues according to Henry's Law. During ascent, if decompression is too rapid, the nitrogen comes out of solution as gas bubbles — like opening a carbonated drink. These bubbles cause mechanical distortion of tissues, inflammation, endothelial damage, activation of complement and coagulation cascades, and venous gas emboli.</p>

        <h5>Type I DCS (Mild / Musculoskeletal)</h5>
        <ul>
            <li><strong>"The Bends"</strong> — deep, aching pain in the large joints (shoulders, elbows, knees, hips). The pain is dull, gnawing, and may be relieved slightly by flexing the joint. Pain increases with movement. No visible swelling or erythema. This is the most common DCS manifestation (60–70% of cases).</li>
            <li><strong>Cutaneous DCS</strong> — itching, mottling (cutis marmorata), a red rash, or subcutaneous swelling. The classic 'skin bends' presents with a pruritic, marbled appearance on the trunk and upper arms.</li>
            <li><strong>Lymphatic DCS</strong> — painless swelling of lymph nodes (usually axillary or inguinal). Uncommon.</li>
        </ul>

        <h5>Type II DCS (Serious / Neurologic, Cardiopulmonary)</h5>
        <ul>
            <li><strong>Neurologic DCS</strong> — spinal cord involvement is most characteristic: ascending paraesthesias (tingling), weakness, paralysis (typically lower extremity > upper), bowel/bladder dysfunction (urinary retention, faecal incontinence). The spinal cord is particularly susceptible because nitrogen diffuses slowly from fatty myelin and the cord's vascular anatomy predisposes to bubble formation in the epidural venous plexus. Cerebral DCS: headache, visual disturbances, vertigo, ataxia, confusion, personality changes.</li>
            <li><strong>Inner Ear DCS</strong> — severe vertigo, nystagmus, nausea/vomiting, hearing loss, tinnitus. Also called "the staggers." Difficult to distinguish from inner ear barotrauma — history of dive profile is critical.</li>
            <li><strong>Pulmonary DCS ("the Chokes")</strong> — a life-threatening form caused by extensive pulmonary gas embolisation. Presentation: substernal chest pain, non-productive cough, dyspnoea, cyanosis, tachypnoea, and — in severe cases — cardiovascular collapse. Onset is usually within minutes of surfacing but can be delayed.</li>
        </ul>

        <h5>DCS Risk Factors</h5>
        <ul>
            <li><strong>Dive profile violations:</strong> Exceeding depth/time limits, rapid ascent, omitted decompression stops, repetitive dives without adequate surface interval.</li>
            <li><strong>Flying after diving:</strong> Ascending to altitude (pressurised cabin ~8,000 ft) reduces ambient pressure further, exacerbating bubble formation. Guidelines: wait at least 12 hours after a single no-decompression dive, 18–24 hours after repetitive dives, and 24–48 hours after a dive requiring decompression stops.</li>
            <li><strong>Dehydration:</strong> Reduces blood volume, slowing nitrogen elimination. Divers are often dehydrated from sweating (exposure suits), immersion diuresis (central blood shift → atrial natriuretic peptide release), and inadequate fluid intake.</li>
            <li><strong>Cold water:</strong> Reduces tissue perfusion, slowing nitrogen elimination. <strong>Obesity</strong> (nitrogen is 5× more soluble in fat than blood — adipose tissue acts as a nitrogen reservoir), <strong>patent foramen ovale</strong> (PFO — allows bubbles to bypass the pulmonary filter), and <strong>alcohol</strong> after diving (vasodilation, dehydration, impaired judgement).</li>
        </ul>

        <h4>Management of Diving Emergencies (AGE and DCS)</h4>
        <p>The definitive treatment for both AGE and DCS is <strong>hyperbaric oxygen therapy (HBO)</strong> — recompression in a hyperbaric chamber. Prehospital management focuses on recognition, basic life support, and arranging transport to a facility with a hyperbaric chamber:</p>
        <ol>
            <li><strong>Scene safety and assessment:</strong> Remove the diver from the water. Assess ABCs. Administer <strong>high-flow oxygen</strong> (15 L/min via non-rebreather mask) — the single most important prehospital intervention. Oxygen creates a diffusion gradient that helps eliminate nitrogen and reduces bubble size.</li>
            <li><strong>Positioning:</strong> Place the patient in the <strong>left lateral recumbent position</strong> (Durant's manoeuvre for AGE) — historical teaching, though current evidence does NOT strongly support this over supine. The priority is high-flow O₂ and rapid transport. Do NOT delay transport for positioning.</li>
            <li><strong>Hydration:</strong> If conscious and not nauseated, give oral fluids (water or electrolyte drinks). If IV access is available, administer isotonic crystalloids (NS or LR). Dehydration worsens DCS.</li>
            <li><strong>Monitor for deterioration:</strong> AGE can cause sudden LOC, seizure, or cardiac arrest. DCS can progress from mild joint pain to paraplegia. Reassess neurologic status frequently.</li>
            <li><strong>Emergency transport:</strong> Transport to the nearest ED with a hyperbaric chamber. Notify receiving facility. Consider helicopter transport if ground transport exceeds 2–3 hours — but do NOT fly above 1,000 ft cabin altitude if possible.</li>
            <li><strong>Aspirin:</strong> May be given (if no contraindications) for its antiplatelet effect in AGE — 160–325 mg orally. Do NOT give NSAIDs (may mask symptoms).</li>
        </ol>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>CONTRAINDICATIONS in Diving Emergencies:</strong> Do NOT use nitrous oxide (can expand gas-filled spaces). Do NOT use positive pressure ventilation with a mask (risk of forcing air into the stomach and lungs). If the patient requires intubation, use high-flow O₂ and gentle ventilation. Do NOT place the patient flat supine (may worsen cerebral oedema in severe DCS). Do NOT delay transport for hyperbaric O₂ — administer high-flow O₂ en route.
        </div>

        <h4>Altitude-Related Illness</h4>
        <p>Altitude illness occurs when the body fails to acclimatise to the hypobaric hypoxia at high altitude. Risk begins above 8,000 ft (2,500 m). The fundamental problem is <strong>decreased barometric pressure → decreased partial pressure of inspired oxygen (PiO₂)</strong>. At 14,000 ft (4,300 m), PiO₂ is approximately half of sea-level value. The body compensates through hyperventilation (hypoxic ventilatory response), increased heart rate, increased erythropoietin (RBC production over days-weeks), and increased 2,3-DPG (enhances O₂ unloading to tissues).</p>

        <h5>Acute Mountain Sickness (AMS)</h5>
        <p><strong>AMS</strong> is the most common form of altitude illness — essentially a high-altitude "hangover." It typically develops 6–12 hours after arrival at altitude and resolves with acclimatisation over 1–3 days. The hallmark is <strong>headache PLUS one or more of:</strong> anorexia/nausea/vomiting, fatigue/weakness, dizziness/lightheadedness, and sleep disturbance (periodic breathing — Cheyne-Stokes respirations at altitude is normal).</p>
        <ul>
            <li><strong>Lake Louise Score (LLS):</strong> A clinical scoring system for AMS severity based on headache, GI symptoms, fatigue/weakness, dizziness/lightheadedness, and sleep difficulty. Each symptom is rated 0–3. LLS ≥ 3 with headache = AMS.</li>
            <li><strong>Management:</strong> Stop ascent, rest, acclimatise. Symptomatic treatment: acetaminophen or ibuprofen for headache, antiemetics for nausea. Acetazolamide (Diamox) 125–250 mg BID speeds acclimatisation by causing metabolic acidosis (stimulating ventilation). Do NOT ascend higher until symptoms resolve. Descend if worsening.</li>
            <li><strong>Descent criteria:</strong> Any progression of symptoms despite rest, development of ataxia, change in mental status, or symptoms of HACE/HAPE mandate immediate descent of at least 1,000–3,000 ft (300–1,000 m).</li>
        </ul>

        <h5>High-Altitude Cerebral Edema (HACE)</h5>
        <p><strong>HACE</strong> is a life-threatening progression of AMS — AMS with neurologic deterioration. Caused by vasogenic cerebral oedema from increased cerebral blood flow (hypoxic vasodilation) and impaired autoregulation. Usually develops 1–3 days after arrival at altitude.</p>
        <ul>
            <li><strong>Presentation:</strong> Severe headache (unresponsive to analgesics), <strong>ataxia</strong> (the most consistent objective sign — cannot tandem walk, wide-based gait), confusion, altered mental status, drowsiness, hallucinations, seizures, and ultimately coma. Papilledema and retinal haemorrhages may be present.</li>
            <li><strong>Management:</strong> <strong>IMMEDIATE DESCENT is the only definitive treatment.</strong> Descent of at least 2,000–3,000 ft (600–1,000 m) or until symptoms resolve. Supplemental O₂ (2–4 L/min if available — can temporise). Dexamethasone 8 mg IM/IV/PO initially then 4 mg q6h reduces cerebral oedema. Portable hyperbaric chamber (Gamow bag) if descent impossible. Acetazolamide as adjunct.</li>
        </ul>

        <h5>High-Altitude Pulmonary Edema (HAPE)</h5>
        <p><strong>HAPE</strong> is a non-cardiogenic pulmonary oedema caused by hypoxic pulmonary vasoconstriction leading to uneven perfusion, overperfusion of some capillary beds, and increased capillary pressure → leakage of protein-rich fluid into the alveoli. HAPE is the most common cause of death from altitude illness. Typically develops 2–4 days after arrival above 8,000–10,000 ft (2,500–3,000 m). More common in cold temperatures, males, prior HAPE history, and rapid ascent.</p>
        <ul>
            <li><strong>Presentation:</strong> Dyspnoea on exertion → dyspnoea at rest, dry cough → <strong>pink, frothy sputum</strong> (classic sign of severe pulmonary oedema), decreased exercise tolerance (earliest sign), cyanosis, tachypnoea, tachycardia, rales/crackles on auscultation (initially right middle lobe → bibasilar → diffuse), low SpO₂ (often <70% at altitude). <strong>Key distinguishing feature from cardiogenic pulmonary oedema:</strong> patient is comfortable lying flat (no orthopnoea, no PND).</li>
            <li><strong>Management:</strong> <strong>IMMEDIATE DESCENT IS THE PRIORITY.</strong> Even 1,000–2,000 ft (300–600 m) can produce dramatic improvement. If descent impossible, use Gamow bag. Supplemental O₂ (4–6 L/min, target SpO₂ >90%). Nifedipine ER 30 mg orally reduces pulmonary artery pressure — drug of choice for HAPE treatment. Keep warm (cold worsens HAPE). Dexamethasone less effective for HAPE but used if HACE coexists.</li>
        </ul>

        <table>
            <thead>
                <tr><th>Condition</th><th>Onset</th><th>Key Feature</th><th>Definitive Treatment</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>AMS</strong></td><td>6–12 hrs</td><td>Headache + nausea/fatigue/dizziness/sleep disturbance. Normal neuro exam except mild ataxia possible</td><td>Stop ascent, rest, acclimatise. Symptomatic treatment. Descend if worsening.</td></tr>
                <tr><td><strong>HACE</strong></td><td>1–3 days</td><td>AMS + ataxia (WIDE-BASED GAIT / CANNOT TANDEM WALK) + AMS/changed mental status. Papilledema possible</td><td><strong>IMMEDIATE DESCENT.</strong> Dexamethasone, O₂, Gamow bag if descent impossible</td></tr>
                <tr><td><strong>HAPE</strong></td><td>2–4 days</td><td>Dyspnoea at rest, cough (dry → pink frothy sputum), rales/crackles, low SpO₂. Comfortable lying flat</td><td><strong>IMMEDIATE DESCENT.</strong> O₂, nifedipine ER, Gamow bag if descent impossible. Keep warm.</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>NREMT Focus — Key Takeaways:</strong><br>
            • Arterial gas embolism = rapid onset (within 10 min of surfacing), stroke-like symptoms or cardiac arrest — high-flow O₂ and transport to hyperbaric chamber<br>
            • DCS = delayed onset (30 min – 24 hrs), joint pain ("the bends"), neurologic symptoms (spinal cord first), rash ("skin bends")<br>
            • High-flow O₂ is the single most important prehospital intervention for ALL diving emergencies<br>
            • AGE and DCS both require hyperbaric oxygen therapy — transport to a facility with a hyperbaric chamber<br>
            • HACE = ataxia + confusion — IMMEDIATE DESCENT + dexamethasone + O₂<br>
            • HAPE = dyspnoea at rest, pink frothy sputum, crackles — IMMEDIATE DESCENT + O₂ + nifedipine ER<br>
            • AMS = headache + nausea/sleep disturbance — stop ascent, rest, symptomatic treatment
        </div>
    </div>`,
    flashcards: [
        {
            question: "What is the difference between arterial gas embolism (AGE) and decompression sickness (DCS) in terms of onset time?",
            answer: "AGE presents within 1–10 minutes of surfacing (often immediately — the diver may lose consciousness before being pulled from the water). DCS typically presents 30 minutes to 24 hours after surfacing (most within 1–6 hours). Rapid onset after surfacing = AGE until proven otherwise.",
            category: "Environmental — Diving"
        },
        {
            question: "What is the single most important prehospital intervention for all diving emergencies (AGE and DCS)?",
            answer: "High-flow oxygen (15 L/min via non-rebreather mask). Oxygen creates a diffusion gradient that helps eliminate nitrogen and reduces bubble size. It is the single most important intervention you can perform before reaching a hyperbaric chamber.",
            category: "Environmental — Diving"
        },
        {
            question: "What is the mechanism of pulmonary barotrauma and what are its three manifestations?",
            answer: "During ascent, expanding gas in the lungs causes alveolar rupture if the diver holds their breath (breath-holding, panic, rapid ascent). Three manifestations: 1) Arterial gas embolism (gas enters pulmonary veins → systemic circulation → brain), 2) Pneumothorax, 3) Mediastinal/subcutaneous emphysema (gas tracks into neck tissues — Hamman's sign).",
            category: "Environmental — Diving"
        },
        {
            question: "What is the definitive treatment for decompression sickness and arterial gas embolism?",
            answer: "Hyperbaric oxygen therapy (HBO) — recompression in a hyperbaric chamber. Prehospital: high-flow O₂, IV fluids, left-lateral position, treat associated injuries (pneumothorax), rapid transport to a facility with a hyperbaric chamber.",
            category: "Environmental — Diving"
        },
        {
            question: "What are the three altitude-related illnesses and their distinguishing features?",
            answer: "1) AMS — headache + nausea/fatigue/dizziness/sleep disturbance, normal neuro exam, onset 6–12 hrs. 2) HACE — AMS + ataxia (cannot tandem walk) + confusion, onset 1–3 days. 3) HAPE — dyspnoea at rest, cough (dry → pink frothy sputum), crackles, low SpO₂, onset 2–4 days. HACE and HAPE require IMMEDIATE DESCENT.",
            category: "Environmental — Altitude"
        },
        {
            question: "What is the definitive treatment for HACE and HAPE?",
            answer: "IMMEDIATE DESCENT of at least 2,000–3,000 ft (600–1,000 m) or until symptoms resolve. Adjuncts: HACE — dexamethasone 8 mg initially + O₂; HAPE — O₂ + nifedipine ER 30 mg. Portable hyperbaric chamber (Gamow bag) if descent is impossible. Keep HAPE patients warm.",
            category: "Environmental — Altitude"
        },
        {
            question: "What drug is used to treat HAPE and why does it work?",
            answer: "Nifedipine ER (extended release) 30 mg. It is a calcium channel blocker that reduces pulmonary artery pressure — the key pathophysiologic mechanism in HAPE (hypoxic pulmonary vasoconstriction → overperfusion → capillary leak). It does NOT treat the hypoxia itself but reduces the pressure driving fluid into the alveoli.",
            category: "Environmental — Altitude"
        },
        {
            question: "What is the 'Lake Louise Score' and what is the diagnosis threshold for AMS?",
            answer: "The Lake Louise Score (LLS) is a clinical scoring system for AMS based on five symptoms: headache, GI symptoms, fatigue/weakness, dizziness/lightheadedness, and sleep difficulty. Each rated 0–3. AMS is diagnosed with LLS ≥ 3 AND the presence of headache.",
            category: "Environmental — Altitude"
        }
    ],
    quiz: [
        {
            q: "A 32-year-old scuba diver surfaces after a 45-minute dive to 85 feet and collapses on the boat deck within 2 minutes. He is confused, has right-sided weakness (face, arm, leg), and cannot speak clearly. Vital signs: HR 112, BP 130/80, RR 24, SpO₂ 91% on room air. What is the MOST likely diagnosis and your priority interventions?",
            options: [
                "Decompression sickness — give high-flow O₂, IV fluids, and transport to a hyperbaric chamber",
                "Arterial gas embolism — high-flow O₂ (15 L/min NRB), left lateral recumbent position, monitor ABCs, and emergency transport to a hyperbaric chamber",
                "Heart attack — give aspirin, nitroglycerin, and transport to the nearest ED",
                "Simple fatigue and hypoxia from the dive — rest and monitor"
            ],
            correct: 1,
            explanation: "Rapid onset (within 2 minutes of surfacing) with focal neurologic deficits (right-sided weakness, aphasia) is classic for arterial gas embolism (AGE). Gas bubbles have entered the arterial circulation and occluded cerebral vessels. Priority: high-flow O₂ (most important prehospital step), left lateral recumbent position (Durant's manoeuvre), monitor ABCs (seizures and cardiac arrest possible), and rapid transport to a hyperbaric chamber. DCS has a slower onset (30 min – 24 hrs) and typically presents with joint pain or spinal cord symptoms."
        },
        {
            q: "A 28-year-old woman develops a headache, nausea, and extreme fatigue 8 hours after arriving at a ski resort at 10,000 ft. She rates her headache 4/10. She has no ataxia and no cough or dyspnoea at rest. SpO₂ is 86% (normal for this altitude). What is your diagnosis and management?",
            options: [
                "Acute Mountain Sickness — stop ascent, rest, symptomatic treatment (acetaminophen/ibuprofen, antiemetics). Consider acetazolamide if symptoms persist. Descend if worsening",
                "High-Altitude Cerebral Edema — immediate descent and dexamethasone",
                "High-Altitude Pulmonary Edema — immediate descent, O₂, and nifedipine",
                "Viral illness — rest and fluids"
            ],
            correct: 0,
            explanation: "Classic AMS: headache + GI symptoms (nausea), fatigue, dizziness. Absence of ataxia rules out HACE. Absence of dyspnoea, cough, crackles rules out HAPE. SpO₂ 86% at 10,000 ft is normal. Management: stop further ascent, rest, symptomatic treatment, monitor for progression. Descend if worsening."
        },
        {
            q: "[HARD] A 45-year-old male diver has deep pain in his left shoulder and right elbow starting 20 minutes after surfacing from a repetitive dive. He also has an itching, marbled rash on his trunk. Neuro exam is normal. He has a history of PFO and is moderately obese. What type of DCS and management?",
            options: [
                "Type I DCS (mild, musculoskeletal + cutaneous) — high-flow O₂, IV fluids, transport for hyperbaric evaluation. His PFO + obesity + dehydration risk progression. Monitor neuro status closely",
                "This is not DCS — joint pain after diving is from overexertion. Rest and NSAIDs",
                "Type II DCS (neurologic) — immediate evacuation to hyperbaric chamber",
                "Arterial gas embolism — high-flow O₂, left lateral position, emergent hyperbaric transport"
            ],
            correct: 0,
            explanation: "This is Type I DCS: musculoskeletal pain (the 'bends' — shoulder and elbow are most common sites) + cutaneous DCS (cutis marmorata). The delayed onset (20 minutes) and lack of focal neuro deficits differentiate it from AGE. However, this patient has multiple risk factors for progression to Type II: PFO (paradoxical emboli), obesity (nitrogen reservoir), and likely dehydration. Management: high-flow O₂, IV fluids (NS/LR), transport for hyperbaric evaluation. Monitor neuro status carefully — Type I can progress to Type II."
        },
        {
            q: "A hiker at 14,000 ft has severe headache, vomiting, and cannot walk a straight line. He is confused and somnolent. No cough or dyspnoea at rest. SpO₂ 75%. Lung sounds clear. Most likely diagnosis and priority action?",
            options: [
                "Acute Mountain Sickness — acetazolamide and rest",
                "High-Altitude Cerebral Edema (HACE) — IMMEDIATE DESCENT, dexamethasone 8 mg, supplemental O₂",
                "High-Altitude Pulmonary Edema (HAPE) — descent, O₂, nifedipine",
                "Carbon monoxide poisoning — remove from tent and give O₂"
            ],
            correct: 1,
            explanation: "HACE: AMS symptoms (headache, vomiting) + ataxia (cannot walk straight — the most consistent objective sign) + AMS/changed mental status (confusion, somnolence). Absence of cough, dyspnoea, and crackles rules out HAPE. Ataxia + AMS at high altitude = HACE. Priority: IMMEDIATE DESCENT (at least 2,000–3,000 ft). Dexamethasone 8 mg initially, supplemental O₂."
        }
    ],
    critical: [
        {
            id: "crit_8_4_1",
            scenario: "A 38-year-old male recreational diver surfaces from a 50-minute dive to 60 fsw in 68°F water. He performed a 3-minute safety stop at 15 fsw. As he climbs the boat ladder, he reports feeling 'not right.' Within 3 minutes on deck, he suddenly loses consciousness. He is supine on deck, breathing shallowly (RR 8), with a pulse of 110. The boat captain says they are 45 minutes from shore. The nearest hospital with a hyperbaric chamber is 90 minutes from shore by ambulance. A second hospital (no hyperbaric chamber) is 20 minutes from shore by ambulance.",
            question: "What is the most likely diagnosis and what is your transport decision? What are your priority interventions on the boat?",
            options: [
                {t: "Arterial gas embolism — rapid onset (<5 min) with LOC is classic for AGE. Transport to the hyperbaric-capable hospital even though it is farther. During transport: high-flow O₂ (15 L/min NRB), left lateral recumbent, monitor ABCs, IV access with NS, be prepared for seizure and cardiac arrest. HBO is the definitive treatment", f: "Correct — Rapid onset (<5 minutes) of neurologic symptoms in a diver = AGE until proven otherwise. Definitive treatment is hyperbaric oxygen therapy. Transporting to a non-hyperbaric hospital wastes time — they would stabilise and transfer, delaying definitive care. High-flow O₂ is the priority."},
                {t: "Decompression sickness — transport to the closest hospital (20 min). The ED can evaluate and transfer if needed. Air transport from the closest hospital would be faster", f: "Incorrect — Onset <5 minutes after surfacing is too rapid for DCS (which typically takes 30 min – 24 hrs). Sudden LOC within minutes of surfacing is characteristic of AGE. Transport to the closest hospital adds a transfer delay."}
            ],
            correct: 0,
            explanation: "AGE is a life-threatening emergency requiring hyperbaric oxygen therapy. The key decision: a hospital without a hyperbaric chamber cannot provide definitive care — they will simply transfer, adding critical delays. The 135-minute transport time is acceptable if high-flow O₂ is maintained throughout. On the boat: high-flow O₂ (most important intervention), left lateral recumbent, monitor ABCs closely — AGE can deteriorate rapidly. Treat seizures with benzodiazepines. If cardiac arrest, start CPR. Notify the hyperbaric team in advance.",
            kpi: "Recognises AGE by rapid symptom onset and prioritises direct transport to hyperbaric facility"
        },
        {
            id: "crit_8_4_2",
            scenario: "You are called to a backcountry hut at 12,500 ft for a 29-year-old male who has been at altitude for 3 days. He reports shortness of breath with minimal exertion since yesterday. Today he is short of breath at rest. He has a dry cough that has become productive of pink, frothy sputum. He is awake and alert but anxious. HR 124, BP 110/70, RR 32, SpO₂ 68%. On auscultation, crackles in both lung bases extending to mid-lung fields. No peripheral oedema, no JVD, comfortable lying flat. No headache, no ataxia, normal mental status. The hut guardian has a Gamow bag and nifedipine ER. The nearest road access is a 4-hour hike down.",
            question: "What is your assessment and plan?",
            options: [
                {t: "HAPE (High-Altitude Pulmonary Edema) — immediate descent is the priority. If descent is impossible or delayed (4-hour hike), place in Gamow bag, provide supplemental O₂, administer nifedipine ER 30 mg orally. Begin descent as soon as patient stabilises. Keep patient warm", f: "Correct — Classic HAPE: dyspnoea at rest, pink frothy sputum, crackles, low SpO₂, comfortable lying flat. Immediate descent is the only definitive treatment. Gamow bag provides temporising bridge. Nifedipine ER reduces pulmonary artery pressure. Keep warm (cold worsens HAPE)."},
                {t: "HACE — there is fluid in the lungs from increased ICP. Give dexamethasone and start descent", f: "Incorrect — No signs of HACE (normal mental status, no ataxia, no headache). HAPE can occur without HACE. Pink frothy sputum and crackles are classic for pulmonary oedema, not cerebral oedema. Dexamethasone is much less effective for HAPE."}
            ],
            correct: 0,
            explanation: "HAPE is a non-cardiogenic pulmonary oedema from hypoxic pulmonary vasoconstriction. Key distinguishing feature from cardiogenic pulmonary oedema: patient is comfortable lying flat, no JVD, no peripheral oedema. Management: immediate descent is the priority — even 1,000–2,000 ft can produce dramatic improvement. If descent impossible (4-hour hike), use Gamow bag (simulates descent of ~5,000–8,000 ft). Nifedipine ER 30 mg reduces pulmonary artery pressure. Supplemental O₂ (target SpO₂ >90%). Keep warm (cold exacerbates pulmonary vasoconstriction).",
            kpi: "Correctly diagnoses HAPE and initiates descent + nifedipine + Gamow bag"
        }
    ]
},

/* ──────────────────────────────────────────────────────────────────────────────
 * c8s5 – Bites, Stings & Envenomation
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c8s5",
    shortTitle: "8.5 Bites, Stings & Envenomation",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Bites, Stings & Envenomation</h3>

        <p>Bites and stings from venomous animals are relatively uncommon but potentially life-threatening emergencies. The EMT's priorities are: <strong>scene safety</strong> (identify the animal, avoid additional bites), <strong>recognition of envenomation signs</strong>, <strong>basic wound care</strong>, and <strong>rapid transport</strong> when systemic toxicity is suspected. The key principle across all envenomations is that <strong>most "traditional" first-aid measures (cutting, sucking, tourniquets, ice) are harmful and should NOT be performed.</strong> This section covers snakebites, spider bites, scorpion stings, Hymenoptera (bee/wasp) stings, and marine envenomations.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical — Scene Safety First:</strong> Do NOT become a victim yourself. The same snake or animal that bit the patient can bite you. Maintain a safe distance. Do not attempt to capture, kill, or handle the animal. A photograph taken from a safe distance is helpful for identification but never risk a second bite. If the animal is dead, do NOT touch it — some snakes can envenomate reflexively even after death (bite reflex persists for up to an hour post-mortem).
        </div>

        <h4>Snakebites</h4>
        <p>Approximately 7,000–8,000 venomous snakebites occur annually in the United States, resulting in ~5–10 deaths. The vast majority of venomous bites in North America are from <strong>pit vipers</strong> (rattlesnakes, copperheads, cottonmouths/water moccasins — family Crotalinae). Coral snakes (family Elapidae) account for <1% of bites. The single most important determinant of outcome is how quickly the patient receives antivenom.</p>

        <h5>Pit Viper (Crotaline) Envenomation</h5>
        <p><strong>Identification:</strong> Pit vipers have a triangular (arrow-shaped) head, elliptical (cat-like) pupils, and a heat-sensing pit between the eye and nostril (hence "pit" viper). Rattlesnakes have rattles on the tail; copperheads and cottonmouths do not. Colour patterns vary by species.</p>
        <ul>
            <li><strong>Dry bites:</strong> Up to 25% of pit viper bites are "dry" — no venom is injected. The presence of fang marks does NOT confirm envenomation. The absence of progressive local tissue effects and systemic symptoms over 6–8 hours suggests a dry bite.</li>
            <li><strong>Local effects (hallmark of pit viper envenomation):</strong> Immediate pain and burning at the bite site. Within minutes to hours: progressive swelling, erythema, ecchymosis (bruising), haemorrhagic bullae (blood-filled blisters), and tissue necrosis. Lymphangitic streaking (red lines tracking up the extremity) may be present. The swelling can be rapid and severe — measure the circumference of the affected extremity at the bite site and 10 cm above and below; repeat every 15–30 minutes to track progression.</li>
            <li><strong>Systemic effects (severe envenomation):</strong> Nausea/vomiting, metallic taste in the mouth, perioral paraesthesias (tingling around the mouth — a classic early systemic sign), muscle fasciculations, hypotension (from vasodilation and third-spacing of fluid into the affected extremity), coagulopathy (venom contains thrombin-like enzymes that consume clotting factors — leading to a clinical picture of disseminated intravascular coagulation [DIC]-like state with bleeding from the bite site, venipuncture sites, and mucous membranes). In severe cases: compartment syndrome (rare but real — from massive swelling within fascial compartments), renal failure (from rhabdomyolysis and hypotension), and cardiovascular collapse.</li>
        </ul>

        <h5>Coral Snake (Elapid) Envenomation</h5>
        <p><strong>Identification:</strong> "Red touches yellow, kills a fellow; red touches black, venom lack" — coral snakes have red bands bordered by yellow bands (black bands separate the red and yellow in non-venomous mimics). Coral snakes have round pupils and small, fixed front fangs. They are shy and rarely bite, but their venom is a potent <strong>neurotoxin</strong>.</p>
        <ul>
            <li><strong>Presentation:</strong> Unlike pit vipers, coral snake bites have <strong>minimal local findings</strong> — little pain, swelling, or tissue damage at the bite site. The venom is primarily neurotoxic, causing a descending paralysis that can be delayed hours to 12+ hours. Symptoms: euphoria or drowsiness, nausea/vomiting, <strong>bulbar palsy</strong> (ptosis, diplopia, dysphagia, dysarthria, drooling — cranial nerve findings are EARLY and characteristic), followed by respiratory muscle paralysis and respiratory arrest. The onset can be insidious — a patient with a coral snake bite may appear well for hours then deteriorate rapidly.</li>
            <li><strong>Key point:</strong> Do NOT be reassured by minimal local findings. The absence of pain/swelling does NOT rule out coral snake envenomation. Any patient with a known or suspected coral snake bite requires <strong>prolonged observation (at least 12–24 hours)</strong> and antivenom if signs of envenomation develop.</li>
        </ul>

        <h5>Snakebite Emergency Care</h5>
        <p><strong>Do:</strong></p>
        <ul>
            <li>Transport immediately to the nearest ED (preferably one that stocks antivenom — CroFab or Anavip for pit vipers, M. fulvius antivenom for coral snakes).</li>
            <li>Keep the patient calm and still — activity increases venom absorption via lymphatic and venous return. Carry the patient if possible.</li>
            <li>Remove rings, watches, and constrictive clothing from the affected extremity before swelling progresses (this is time-critical).</li>
            <li>Splint the affected extremity in a neutral position at or slightly below heart level (do NOT elevate — this may increase systemic absorption).</li>
            <li>Mark the leading edge of swelling and the time every 15–30 minutes to track progression.</li>
            <li>Monitor ABCs and vital signs frequently. Be prepared for hypotension (IV fluids) and respiratory compromise (especially coral snake).</li>
            <li>Note the time of bite, species/description, and any first aid already performed.</li>
        </ul>
        <p><strong>Do NOT:</strong></p>
        <ul>
            <li><strong>Do NOT cut the wound and suck out venom</strong> — this is ineffective and causes additional tissue damage and infection risk.</li>
            <li><strong>Do NOT apply a tourniquet or constriction band</strong> — this can cause ischaemia, increased tissue damage, and compartment syndrome. There is NO role for tourniquets in snakebite management.</li>
            <li><strong>Do NOT apply ice or cold packs</strong> — cryotherapy increases tissue damage and has no benefit.</li>
            <li><strong>Do NOT use electric shock</strong> — this is dangerous, ineffective, and has caused deaths.</li>
            <li><strong>Do NOT give the patient alcohol or stimulants</strong> — these worsen outcomes.</li>
            <li><strong>Do NOT attempt to capture or kill the snake</strong> — risk of a second bite. A photograph from a safe distance is sufficient.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>NREMT Focus — Snakebite Do's and Don'ts:</strong><br>
            • DO: Immobilise extremity, mark swelling, remove jewellery, transport calmly<br>
            • DO: Keep the bite at or below heart level<br>
            • DO: Monitor ABCs and be ready for anaphylaxis/hypotension<br>
            • DO NOT: Cut, suck, tourniquet, ice, or electric shock — these are ALL harmful<br>
            • DO NOT: Elevate the extremity (increases systemic absorption)<br>
            • DO NOT: Give the patient anything by mouth (NPO for possible antivenom reaction)
        </div>

        <h4>Spider Bites</h4>
        <p>Only two spiders in North America are medically significant: the <strong>black widow (Latrodectus)</strong> and the <strong>brown recluse (Loxosceles)</strong>. Both are shy and bite only when trapped against the skin (in clothing, shoes, bedding).</p>

        <h5>Black Widow Spider</h5>
        <p><strong>Appearance:</strong> Shiny black with a red hourglass marking on the ventral abdomen. Only the female envenomates (the male is too small to penetrate human skin).</p>
        <ul>
            <li><strong>Venom action:</strong> The venom contains <strong>α-latrotoxin</strong>, which causes massive release of acetylcholine and norepinephrine from nerve terminals, resulting in excessive neuromuscular stimulation.</li>
            <li><strong>Presentation:</strong> The bite itself may be painless or feel like a pinprick. Within 30 minutes to a few hours, local pain and muscle cramping develop at the bite site, then spread to involve the large muscle groups of the back, abdomen, and thighs. The <strong>classic presentation is severe abdominal cramping with board-like abdominal rigidity</strong> — can mimic acute surgical abdomen (but the patient has no peritoneal signs). Other symptoms: hypertension, tachycardia, diaphoresis, piloerection, facial swelling, nausea/vomiting, headache, and — rarely — priapism. Severe envenomations can cause hypertensive crisis, seizures, and respiratory arrest (especially in children and the elderly).</li>
            <li><strong>Management:</strong> Clean the wound. Apply cold packs to the bite site for pain relief. Transport to an ED. Antivenom (Latrodectus immune globulin — Analatro) is available for severe cases (significant pain unresponsive to opioids, hypertension, pregnancy with distress, respiratory compromise). Most cases are managed with supportive care: pain management (opioids), benzodiazepines (for muscle spasms), IV fluids, and antihypertensives as needed. Tetanus prophylaxis.</li>
        </ul>

        <h5>Brown Recluse Spider</h5>
        <p><strong>Appearance:</strong> Brown/tan with a violin-shaped marking on the cephalothorax (hence "fiddleback spider"). The violin neck points toward the abdomen. Has six eyes arranged in pairs (most spiders have eight). Found in the central and southern United States.</p>
        <ul>
            <li><strong>Venom action:</strong> The venom contains <strong>sphingomyelinase D</strong>, which causes direct tissue necrosis, haemolysis, and platelet aggregation. The venom is cytotoxic and haemolytic.</li>
            <li><strong>Presentation:</strong> The bite may go unnoticed initially or feel like a mild sting. Over 2–8 hours, pain, erythema, and a central vesicle develop. The classic lesion: a <strong>central bleb (blister) surrounded by a zone of ischaemia (pale/cyanotic), surrounded by a rim of erythema</strong> — the "red, white, and blue" sign. Over days, the central area becomes necrotic and may form an <strong>eschar</strong> (a dry, black, leathery scab) that sloughs, leaving an ulcer that can take weeks to months to heal. Systemic loxoscelism (rare, more common in children): fever, chills, malaise, nausea/vomiting, arthralgias, and — most dangerously — <strong>massive intravascular haemolysis</strong> leading to haemolytic anaemia, haemoglobinuria, acute kidney injury, and DIC. This typically occurs within 24–72 hours of the bite.</li>
            <li><strong>Management:</strong> Clean the wound. Apply cold packs (not ice — reduces enzyme activity). Elevate the affected extremity. Transport for evaluation. Do NOT apply heat (increases enzyme activity and necrosis). There is no widely available antivenom in the US. Treatment is supportive: wound care, tetanus prophylaxis, pain management, and — if systemic loxoscelism develops — transfusion, corticosteroids (controversial), and management of haemolysis and AKI. Surgical debridement is delayed until the necrotic area is well-demarcated (weeks — early excision worsens outcomes).</li>
        </ul>

        <h4>Scorpion Stings</h4>
        <p>In the United States, only the <strong>bark scorpion (Centruroides sculpturatus/exilicauda)</strong> found in Arizona, New Mexico, Nevada, Utah, California, and Texas is medically significant. Its venom is a neurotoxin that causes excessive neuronal firing.</p>
        <ul>
            <li><strong>Presentation:</strong> Immediate, intense local pain at the sting site (a sharp burning sensation) with minimal swelling or erythema. The classic finding: <strong>extreme local tenderness to touch at the sting site</strong> — the patient will not allow you to touch it. Systemic neurotoxicity (more common in children < 5 years and the elderly): cranial nerve dysfunction (roving eye movements, nystagmus, blurred vision, excessive salivation, tongue fasciculations, dysphagia), neuromuscular hyperactivity (muscle twitching, jerking — may resemble seizure), autonomic storm (tachycardia, hypertension, diaphoresis, piloerection), and respiratory distress (from excessive secretions and laryngeal spasm). Children may present with inconsolable crying, opsoclonus (rapid irregular eye movements), and loss of motor coordination.</li>
            <li><strong>Management:</strong> Clean the wound. Apply cold packs. Transport to an ED. Antivenom (Anascorp — Centruroides immune F(ab)₂) is available and highly effective at reversing neurotoxicity, particularly in children. Most adult cases are self-limiting (symptoms resolve within 24–48 hours) and may only require supportive care. Severe cases: benzodiazepines for neuromuscular hyperactivity, airway management for excessive secretions, IV fluids.</li>
        </ul>

        <h4>Hymenoptera Stings (Bees, Wasps, Hornets, Fire Ants)</h4>
        <p>Hymenoptera stings are the most common cause of anaphylaxis in the United States. Most people experience only local reactions, but 1–2% of the population is at risk for life-threatening anaphylaxis. <strong>Africanised honeybees ("killer bees")</strong> are a hybrid strain in the southern US that are more aggressive and attack in swarms — they can deliver hundreds to thousands of stings, causing direct toxicity from the venom mass even in non-allergic individuals.</p>

        <h5>Local Reaction</h5>
        <ul>
            <li><strong>Presentation:</strong> Immediate sharp pain, followed by erythema, swelling, and pruritus at the sting site. The stinger (if a honeybee — only honeybees leave a barbed stinger embedded in the skin) appears as a black dot in the centre of the wheal. The venom sac may still be attached and pumping venom — remove it promptly.</li>
            <li><strong>Stinger removal:</strong> <strong>Scrape the stinger out with a fingernail, credit card, or knife blade — do NOT use tweezers or pinch the venom sac.</strong> Grasping the venom sac with tweezers can inject additional venom into the skin.</li>
            <li><strong>Management:</strong> Clean the area with soap and water. Cold compress to reduce swelling. Oral antihistamines (diphenhydramine 25–50 mg) for pruritus. Topical calamine or hydrocortisone cream. Elevate the affected extremity.</li>
        </ul>

        <h5>Large Local Reaction</h5>
        <ul>
            <li><strong>Presentation:</strong> Extensive swelling that extends beyond the immediate sting site, often peaking at 24–48 hours. Can involve an entire limb. Accompanied by warmth, erythema, and pruritus. This is an IgE-mediated late-phase reaction, not an infection — it does NOT warrant antibiotics unless there are signs of cellulitis.</li>
            <li><strong>Management:</strong> Cold packs, elevation, oral antihistamines, NSAIDs for pain/swelling. Consider a short course of oral corticosteroids (prednisone 40–60 mg daily for 3–5 days) for severe large local reactions (after consultation with medical direction).</li>
        </ul>

        <h5>Anaphylaxis (Systemic Allergic Reaction)</h5>
        <p>Anaphylaxis from Hymenoptera stings is a life-threatening emergency. It typically develops within minutes of the sting (up to 30 minutes). <strong>Faster onset = more severe reaction.</strong></p>
        <ul>
            <li><strong>Presentation:</strong> Generalised urticaria (hives) and flushing, angioedema (swelling of the lips, tongue, uvula, throat), dyspnoea (from laryngeal oedema or bronchospasm), wheezing, stridor, hypotension, tachycardia, nausea/vomiting/diarrhoea, sense of impending doom, and ultimately loss of consciousness and cardiovascular collapse.</li>
            <li><strong>Management (NREMT):</strong> <strong>Epinephrine is the FIRST-LINE treatment — there is NO contraindication to epinephrine in anaphylaxis.</strong> Administer epinephrine 0.3 mg IM (0.15 mg for children < 30 kg) in the anterolateral thigh (vastus lateralis muscle). The thigh is preferred over the deltoid because IM absorption is faster and more reliable. Repeat every 5–15 minutes as needed. Adjuncts: high-flow O₂, IV fluids (bolus 20 mL/kg NS for hypotension), antihistamines (diphenhydramine 25–50 mg IV/IM/PO), corticosteroids (methylprednisolone 125 mg IV or prednisone 40–60 mg PO — prevents biphasic reaction), inhaled beta-agonists (albuterol) for bronchospasm. Transport to an ED. Monitor for biphasic anaphylaxis (recurrence of symptoms 4–8 hours after initial resolution).</li>
        </ul>

        <h5>Mass Envenomation (Africanised Honeybees)</h5>
        <p>Massive numbers of stings (>50–100 in adults, fewer in children) can cause direct venom toxicity even without IgE-mediated allergy. The venom load can cause: rhabdomyolysis, acute kidney injury, haemolysis, DIC, hepatotoxicity, and myocardial injury. <strong>Management:</strong> Remove stingers (scrape — do not pluck), supportive care, IV fluids, monitor end-organ injury, and transport for critical care. Antihistamines and corticosteroids may help with the inflammatory response but do NOT neutralise the venom.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical — Epinephrine in Anaphylaxis:</strong> Epinephrine is the ONLY first-line treatment for anaphylaxis. It works within minutes: α-1 agonism reverses vasodilation and hypotension and reduces oedema; β-1 agonism increases heart rate and contractility; β-2 agonism causes bronchodilation and stabilises mast cells (inhibits further mediator release). Delayed administration of epinephrine is the single most common cause of fatal anaphylaxis. Do NOT withhold epinephrine due to tachycardia or hypertension — these are effects of anaphylaxis, not contraindications.
        </div>

        <h4>Marine Envenomations</h4>
        <p>Marine envenomations include stings from jellyfish (nematocysts), stingrays, lionfish, stonefish, and sea urchins. Most cause local pain and tissue damage; a few (box jellyfish, stonefish) can cause life-threatening systemic effects.</p>

        <h5>Jellyfish Stings</h5>
        <p>Jellyfish stings occur when nematocysts (stinging cells) on the tentacles inject venom into the skin. Severity varies by species: most cause local pain and urticaria; the <strong>box jellyfish (Chironex fleckeri)</strong> — found in the Indo-Pacific, not US waters — can cause cardiac arrest within minutes. In US waters, the Portuguese man-o'war (Physalia physalis) causes severe local pain and welts.</p>
        <ul>
            <li><strong>Management:</strong> <strong>Rinse with vinegar (5% acetic acid)</strong> — this inactivates undischarged nematocysts. Do NOT rinse with fresh water (causes osmotic discharge of remaining nematocysts). Do NOT rub the area (rubs nematocysts deeper). Remove tentacles with tweezers (wear gloves). Apply heat (hot water immersion at 110–115°F / 43–46°C for 20–40 minutes or hot packs) — heat denatures the venom proteins. This is more effective than cold therapy for most species. For box jellyfish in Australian waters: apply vinegar, then pressure bandage the affected limb (immobilisation bandage to slow venom spread) and transport immediately. Antivenom is available for box jellyfish (Chironex) in Australia.</li>
        </ul>

        <h5>Stingray Injuries</h5>
        <p>Stingrays have a barbed tail spine that can cause a severe puncture wound. The venom is heat-labile (destroyed by heat). The wound itself is caused by the sharp, serrated barb — which can leave behind fragments in the wound.</p>
        <ul>
            <li><strong>Presentation:</strong> Immediate, intense, excruciating pain at the wound site (often out of proportion to the visible injury). The wound is a puncture or laceration, typically on the foot or leg (from stepping on the ray in shallow water). Bleeding can be profuse (the barb lacerates vessels). Retained barb fragments are common. Systemic effects: nausea, vomiting, muscle cramps, weakness, hypotension, and — rarely — cardiac dysrhythmias.</li>
            <li><strong>Management:</strong> <strong>Hot water immersion</strong> (110–115°F / 43–46°C for 30–90 minutes or until pain resolves) — this denatures the venom and is dramatically effective. Irrigate the wound copiously. Remove visible barb fragments if possible. Do NOT close the wound primarily (high infection risk — the wound is contaminated with marine bacteria including Vibrio species). Leave open, pack if needed, and treat with antibiotics (fluoroquinolones or third-generation cephalosporins + doxycycline for Vibrio coverage). Tetanus prophylaxis. X-ray the wound to check for retained fragments. Transport if there is significant bleeding, retained fragments, or signs of infection.</li>
        </ul>

        <h5>Lionfish / Stonefish</h5>
        <p><strong>Lionfish</strong> (an invasive species in the Atlantic/Caribbean/Gulf of Mexico) have venomous fin spines that cause intense local pain, swelling, erythema, and — rarely — systemic symptoms (nausea, headache, dizziness). <strong>Stonefish</strong> (found in the Indo-Pacific) are the most venomous fish in the world — their dorsal spines deliver a potent neurotoxin that can cause paralysis, cardiac dysrhythmias, and death. <strong>Management for both:</strong> Hot water immersion (heat denatures the venom). Remove visible spines. Clean the wound. Transport for evaluation. Stonefish antivenom is available in Australia and the Indo-Pacific.</p>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — Hot Water for Marine Envenomations:</strong> Heat (110–115°F / 43–46°C) denatures the protein-based venom in jellyfish stings, stingray injuries, lionfish punctures, and sea urchin injuries. Hot water immersion is the single most effective first aid for these injuries. Immerse the affected area for 20–90 minutes or until pain resolves. Test the water on your own wrist first to ensure it is hot but not scalding. Cold therapy is NOT indicated for marine envenomations (may worsen tissue damage).
        </div>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>NREMT Focus — Key Takeaways:</strong><br>
            • Snakebite: transport, immobilise, remove jewellery, NO cutting/sucking/tourniquet/ice<br>
            • Pit viper: local swelling + coagulopathy + perioral paraesthesias<br>
            • Coral snake: minimal local findings, delayed neurotoxicity (bulbar palsy → respiratory paralysis) — observe 12–24 hrs<br>
            • Black widow: muscle cramps + abdominal rigidity (mimics surgical abdomen) + hypertension<br>
            • Brown recluse: necrotic ulcer + "red, white, and blue" sign + risk of haemolysis<br>
            • Hymenoptera anaphylaxis: EPINEPHRINE IM is first-line — no contraindications<br>
            • Marine stings: HOT WATER immersion (110–115°F) — denatures venom; vinegar for jellyfish nematocysts<br>
            • Fire ants: sterile pustules at sting site (24 hrs), risk of anaphylaxis
        </div>
    </div>`,
    flashcards: [
        {
            question: "What are the three categories of snakebite in North America based on venom type?",
            answer: "1) Pit vipers (rattlesnakes, copperheads, cottonmouths) — haemotoxic venom causing local tissue destruction, coagulopathy, and swelling. 2) Coral snakes — neurotoxic venom causing descending paralysis with minimal local findings. 3) Non-venomous snakes — no venom, but still require wound care and tetanus prophylaxis.",
            category: "Environmental — Envenomation"
        },
        {
            question: "List the DO NOTs of snakebite first aid (at least 5).",
            answer: "Do NOT: 1) Cut and suck venom, 2) Apply a tourniquet or constriction band, 3) Apply ice or cold packs, 4) Use electric shock, 5) Give alcohol or stimulants, 6) Attempt to capture or kill the snake. The correct management: immobilise the extremity at or below heart level, remove jewellery, mark swelling, transport calmly.",
            category: "Environmental — Envenomation"
        },
        {
            question: "How does a black widow spider bite present and what is the classic diagnostic challenge?",
            answer: "Black widow venom (α-latrotoxin) causes excessive neuromuscular stimulation. Presentation: severe muscle cramping and board-like abdominal rigidity that can mimic an acute surgical abdomen (but NO peritoneal signs). Also: hypertension, tachycardia, diaphoresis, piloerection. Treat with pain management, benzodiazepines for spasms, antivenom (Analatro) for severe cases.",
            category: "Environmental — Envenomation"
        },
        {
            question: "What is the 'red, white, and blue' sign in brown recluse spider bite?",
            answer: "The classic lesion of a brown recluse bite: a central bleb/blister (blue/purple — ischaemia), surrounded by a pale/white zone (vasoconstriction), surrounded by a rim of erythema (red). This progresses to an eschar (black, leathery scab) that sloughs, leaving a necrotic ulcer. Systemic loxoscelism can cause massive haemolysis → haemoglobinuria → acute kidney injury.",
            category: "Environmental — Envenomation"
        },
        {
            question: "What is the first-line treatment for anaphylaxis from a bee sting and why is the thigh the preferred injection site?",
            answer: "Epinephrine 0.3 mg IM (0.15 mg for children < 30 kg) in the ANTEROLATERAL THIGH (vastus lateralis). The thigh is preferred over the deltoid because IM absorption is faster and more reliable — the vastus lateralis is a large, well-vascularised muscle. There is NO contraindication to epinephrine in anaphylaxis. Repeat every 5–15 minutes as needed.",
            category: "Environmental — Envenomation"
        },
        {
            question: "How should a honeybee stinger be removed and why?",
            answer: "SCRAPE the stinger out with a fingernail, credit card, or knife blade. Do NOT use tweezers — grasping the venom sac can inject additional venom into the skin. Honeybees are the only Hymenoptera that leave a barbed stinger embedded in the skin (wasps, hornets, and fire ants do not). The venom sac may continue to pump venom for up to 60 seconds after the sting.",
            category: "Environmental — Envenomation"
        },
        {
            question: "What is the first-line treatment for jellyfish stings and stingray injuries and how are they different?",
            answer: "Jellyfish: rinse with VINEGAR (5% acetic acid) to inactivate undischarged nematocysts, then HOT WATER immersion (110–115°F). Stingray: HOT WATER immersion is the primary treatment (heat denatures the venom — dramatically effective). Do NOT rinse jellyfish stings with fresh water (causes nematocyst discharge). Do NOT rub either injury.",
            category: "Environmental — Envenomation"
        },
        {
            question: "What is the difference between pit viper and coral snake envenomation presentation?",
            answer: "Pit viper: immediate pain + progressive swelling, ecchymosis, haemorrhagic bullae at the bite site + systemic coagulopathy. Coral snake: MINIMAL local findings (little pain or swelling), delayed neurotoxicity (hours to 12+ hours) with descending paralysis starting with bulbar signs (ptosis, diplopia, dysphagia, drooling) → respiratory paralysis. Absence of local findings does NOT rule out coral snake envenomation.",
            category: "Environmental — Envenomation"
        }
    ],
    quiz: [
        {
            q: "A 45-year-old male is bitten on the right hand by a snake while hiking. On exam, you see two small puncture wounds on the dorsum of his hand. There is minimal swelling, mild pain, and no ecchymosis. He reports the snake had a triangular head and elliptical pupils. He has no systemic symptoms. What is your management?",
            options: [
                "Apply a constriction band proximal to the bite, cut the wound, and attempt to suck out venom",
                "Immobilise the hand at or below heart level, remove rings, mark the leading edge of swelling, transport to an ED. Up to 25% of pit viper bites are 'dry' — no venom injected. Observe for progression over 6–8 hours",
                "Apply ice packs to the wound to slow venom absorption",
                "Administer epinephrine 0.3 mg IM for possible anaphylaxis"
            ],
            correct: 1,
            explanation: "This is a pit viper bite (triangular head, elliptical pupils — classic crotaline features) with no signs of envenomation so far (minimal swelling, no ecchymosis, no systemic symptoms). Up to 25% of pit viper bites are 'dry.' Management: immobilise the extremity at or below heart level, remove rings and jewellery immediately (before swelling progresses), mark the leading edge of swelling and time, transport to an ED (preferably one that stocks antivenom). Do NOT apply tourniquets, cut/suck, or ice."
        },
        {
            q: "A 30-year-old woman is stung by a bee and develops generalised hives, swelling of her lips and tongue, wheezing, and hypotension within 10 minutes. BP 80/50, HR 130, RR 28, SpO₂ 89%. What is your priority intervention?",
            options: [
                "Give diphenhydramine 50 mg IV — antihistamines are the first-line treatment for anaphylaxis",
                "Administer epinephrine 0.3 mg IM in the anterolateral thigh — this is the FIRST-LINE treatment for anaphylaxis. Then give high-flow O₂, IV fluids, and antihistamines as adjuncts",
                "Start high-flow O₂ and transport — supportive care is sufficient",
                "Give albuterol nebulised for the wheezing — this will treat the bronchospasm"
            ],
            correct: 1,
            explanation: "Epinephrine is the FIRST-LINE and ONLY definitive treatment for anaphylaxis. Delayed administration of epinephrine is the single most common cause of fatal anaphylaxis. There is NO contraindication to epinephrine in anaphylaxis — tachycardia and hypertension are signs of anaphylaxis, not contraindications. Epinephrine works within minutes: α-1 agonism reverses vasodilation/hypotension and reduces oedema; β-1 agonism increases contractility; β-2 agonism causes bronchodilation and stabilises mast cells. Adjuncts (antihistamines, steroids, O₂, fluids) are supportive but do NOT replace epinephrine."
        },
        {
            q: "[HARD] A 22-year-old surfer steps on something in shallow saltwater and presents with a 2 cm puncture wound on the sole of his left foot. He reports excruciating pain that is out of proportion to the visible injury. The wound is bleeding moderately. He is nauseated and diaphoretic. What is the most likely cause and appropriate treatment?",
            options: [
                "Jellyfish sting — rinse with vinegar and apply cold packs",
                "Stingray injury — hot water immersion (110–115°F for 30–90 minutes), irrigate the wound, do NOT close primarily, remove visible barb fragments, tetanus prophylaxis, and transport for X-ray (rule out retained fragments) and antibiotics (Vibrio coverage)",
                "Sea urchin puncture — remove spines and apply topical corticosteroids",
                "Lionfish sting — the pain will resolve on its own, clean wound and discharge"
            ],
            correct: 1,
            explanation: "Stingray injury: the classic presentation is a surfer/swimmer stepping on a ray in shallow water, causing a puncture wound (the barbed tail spine) with excruciating pain. Hot water immersion is dramatically effective — it denatures the heat-labile venom. Soak for 30–90 minutes or until pain resolves. The wound should NOT be closed primarily (high infection risk from marine bacteria including Vibrio). X-ray is needed to check for retained barb fragments. Antibiotics with Vibrio coverage (doxycycline + ceftazidime or a fluoroquinolone) are indicated. Tetanus prophylaxis."
        },
        {
            q: "A child is brought in after being bitten on the ankle by a snake. You cannot identify the species. The bite site has minimal swelling and no pain. The child is alert and playing normally. Two hours later, the child develops drooling, difficulty swallowing, and blurred vision. What type of snake was most likely responsible and what is the critical management priority?",
            options: [
                "Pit viper — apply a tourniquet and transport immediately",
                "Coral snake — neurotoxic venom causing descending paralysis. The minimal local findings are characteristic. The patient requires immediate transport to an ED with antivenom (M. fulvius antivenom) and prolonged observation (12–24 hours). Bulbar palsy (drooling, dysphagia, blurred vision) is the EARLY sign of neurotoxicity. Be prepared for respiratory paralysis",
                "Non-venomous snake — the delayed symptoms are from anxiety, not venom",
                "Pit viper with dry bite — no treatment needed"
            ],
            correct: 1,
            explanation: "Coral snake envenomation is characterised by MINIMAL local findings (little pain, swelling, or tissue damage) followed by DELAYED neurotoxicity (hours to 12+ hours). The classic presentation: bulbar palsy signs first (ptosis, diplopia, dysphagia, dysarthria, drooling — cranial nerve findings), then descending paralysis → respiratory arrest. Any patient with suspected coral snake bite requires prolonged observation (12–24 hours minimum) and antivenom if signs develop. The critical management priority: monitor respiratory function closely and be prepared to ventilate if respiratory muscle paralysis occurs."
        }
    ],
    critical: [
        {
            id: "crit_8_5_1",
            scenario: "You are dispatched to a hiking trail for a 38-year-old male with a snakebite to the left lower leg. On arrival, the patient is sitting on a rock, anxious and in moderate pain. He states he was bitten approximately 20 minutes ago by a snake he describes as 'brown with diamond patterns on its back' — consistent with a rattlesnake (a pit viper). He is wearing shorts and hiking boots. The bite site is on the lateral aspect of his left calf. You observe two distinct puncture wounds approximately 1 cm apart. There is moderate swelling around the bite site extending to the ankle, with mild erythema. He has removed his boot and sock. He reports tingling around his mouth and a metallic taste. Vital signs: HR 104, BP 118/76, RR 18, SpO₂ 97%. There is no bleeding from the wound, no ecchymosis, and he has no other symptoms. His hiking partner says the trailhead is 2 miles away and they have a car. The nearest ED is 30 minutes from the trailhead.",
            question: "This patient has signs of systemic envenomation (perioral paraesthesias, metallic taste). Describe your complete prehospital management — what do you do immediately, what do you do during transport, and what do you avoid?",
            options: [
                {t: "Immediate actions: remove any remaining jewellery (watch, rings), splint the leg at or slightly below heart level, mark leading edge of swelling and time. DO NOT cut/suck, DO NOT tourniquet, DO NOT ice. Carry him to the car (do NOT let him walk — activity increases venom absorption). Transport calmly to the ED. Monitor ABCs and vitals en route. Notify the ED of a rattlesnake envenomation with early systemic symptoms (perioral paraesthesias). Give nothing by mouth (NPO for possible antivenom reaction). Be prepared for hypotension (IV fluids) and progressive swelling", f: "Correct — This is a pit viper envenomation with early systemic signs (perioral paraesthesias and metallic taste are CLASSIC early systemic signs of crotaline envenomation — they indicate the venom has entered the systemic circulation, not just the local tissue). The swelling is still localised to the calf/ankle at 20 minutes but can progress rapidly. The patient should be carried, not walked, to minimise lymphatic and venous return. Jewellery removal is time-critical. NPO is essential. Notifying the ED allows them to prepare CroFab or Anavip antivenom."},
                {t: "Apply a tourniquet above the knee to prevent venom from reaching the torso. Cut the wound and attempt to suck out as much venom as possible. Apply ice to slow swelling. Have the patient walk to the car to save time", f: "Incorrect — All of these actions are CONTRAINDICATED in snakebite management. Tourniquets cause ischaemia and increased tissue damage. Cutting/sucking is ineffective and introduces infection. Ice increases tissue damage. Walking increases venom absorption via lymphatic and venous return (the patient should be carried). These are all NREMT-critical 'do NOTs.'"}
            ],
            correct: 0,
            explanation: "Systemic envenomation from a pit viper is indicated by perioral paraesthesias (tingling around the mouth), metallic taste, nausea, or muscle fasciculations. These symptoms mean the venom has entered the systemic circulation and the patient requires antivenom. Prehospital management: 1) Remove all jewellery and constrictive clothing from the affected extremity NOW — swelling will make removal impossible later; 2) Splint the extremity in a neutral position at or slightly below heart level; 3) Mark the proximal extent of swelling and the time — recheck every 15 minutes; 4) Carry the patient — do NOT let them walk; 5) Transport to the nearest ED (preferably with antivenom); 6) Monitor ABCs, vitals, and the progression of swelling en route; 7) Keep the patient calm and NPO; 8) Notify the receiving facility of a rattlesnake envenomation with systemic symptoms. Do NOT apply a tourniquet, cut/suck, ice, or use electric shock. Do NOT give pain medications that could mask progression (consult medical direction). Document the time of bite, species description, and progression of symptoms.",
            kpi: "Correctly identifies systemic envenomation and applies evidence-based snakebite management (no tourniquet/cut/ice, immobilise, transport)"
        },
        {
            id: "crit_8_5_2",
            scenario: "You respond to a home for a 7-year-old girl who was stung by a bee in the backyard 15 minutes ago. Her mother states she has no known allergies. On arrival, the child is sitting on the couch, crying. She has generalised urticaria (hives) covering her trunk and arms. Her lips are swollen and she is breathing rapidly. She is drooling and has difficulty swallowing her saliva. Auscultation reveals diffuse wheezing. Vital signs: HR 150, BP 74/42, RR 36, SpO₂ 88% on room air. There is no stridor. The mother has a neighbour's EpiPen (adult dose 0.3 mg) and asks if she should use it.",
            question: "What is your assessment and management plan?",
            options: [
                {t: "This is anaphylaxis — give epinephrine 0.15 mg IM (use the child's weight-based dose if available, otherwise splitting the adult EpiPen may be necessary). The thigh is the preferred site. Then: high-flow O₂, IV access with 20 mL/kg NS bolus, diphenhydramine 25 mg IM/IV, albuterol nebulised, and transport emergently. Monitor for biphasic reaction. Do NOT delay epinephrine — there are no contraindications in anaphylaxis", f: "Correct — Anaphylaxis in a child: epinephrine is the first-line treatment. Weight-based dose: 0.15 mg IM for children < 30 kg (approximately < 10 years old; this child is 7, likely ~22–25 kg). If only an adult EpiPen (0.3 mg) is available, the 2020 AHA guidelines state that using an adult EpiPen is safer than not giving epinephrine at all. Administer in the anterolateral thigh. Epinephrine works within minutes and is the ONLY medication that addresses the life-threatening airway, breathing, and circulatory components of anaphylaxis simultaneously."},
                {t: "The child does not need epinephrine — antihistamines (diphenhydramine) are the first-line treatment. Give diphenhydramine, albuterol, and transport. The EpiPen is only for patients with known severe allergies", f: "Incorrect — Antihistamines take 30–60 minutes to work and do NOT reverse hypotension, laryngeal oedema, or bronchospasm. Epinephrine is the FIRST-LINE treatment for anaphylaxis in ALL patients regardless of prior allergy history. Anaphylaxis can occur as a first exposure. Delayed epinephrine administration is the leading cause of fatal anaphylaxis."}
            ],
            correct: 0,
            explanation: "This child is in anaphylactic shock: urticaria, angioedema (lip swelling, drooling — indicating oropharyngeal involvement), wheezing (bronchospasm), hypotension (BP 74/42), tachycardia, and hypoxia. Epinephrine IM is the ONLY first-line treatment. The anterolateral thigh is the preferred site (fastest IM absorption). Dose: 0.15 mg IM for children < 30 kg (typically age ~10 and under). If a paediatric EpiPen is unavailable, using an adult EpiPen (0.3 mg) is acceptable in a life-threatening situation — the risk of NOT giving epinephrine far exceeds the risk of giving an extra 0.15 mg. Adjuncts: high-flow O₂ (hypoxia), IV NS 20 mL/kg bolus (hypotension), diphenhydramine 1 mg/kg IV/IM (H1 blocker — treats hives and pruritus, does NOT treat hypotension or bronchospasm), albuterol nebulised (bronchospasm), and corticosteroids (methylprednisolone 2 mg/kg IV). Transport to the ED. Monitor for biphasic anaphylaxis (recurrence 4–8 hours later). Document the time of epinephrine administration to guide the ED's next dose timing.",
            kpi: "Recognises paediatric anaphylaxis and administers epinephrine IM immediately without delay"
        }
    ]
},

/* ──────────────────────────────────────────────────────────────────────────────
 * c8s6 – Hazardous Materials & Radiation Emergencies
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c8s6",
    shortTitle: "8.6 Hazardous Materials & Radiation",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Hazardous Materials & Radiation Emergencies</h3>

        <p>Hazardous materials (HAZMAT) emergencies involve the release of substances that pose a risk to health, safety, or the environment. As an EMT, your primary role is <strong>scene safety, recognition, isolation, and decontamination</strong> — not active chemical mitigation. The <strong>Hazardous Materials/Weapons of Mass Destruction (HAZMAT/WMD) response framework</strong> guides your approach: recognise the hazard, establish scene safety, don appropriate PPE, perform decontamination, and provide medical care. <strong>Your safety and the safety of your crew is the top priority.</strong> A dead rescuer saves no one.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Fundamental Rule — Scene Safety:</strong> In any suspected HAZMAT incident: <strong>STOP</strong> before entering. Survey the scene from a safe distance (at least 500 ft upwind/uphill). Look for placards, labels, containers, vapour clouds, unusual odours, multiple patients with similar symptoms, or dead animals/birds. If you cannot identify the substance or are unsure about the hazard — <strong>do NOT enter.</strong> Wait for a HAZMAT team. Your responsibility is to identify the hazard from a safe distance and communicate it to incoming resources.
        </div>

        <h4>HAZMAT Recognition — Placards, Labels, and Markings</h4>
        <p>The <strong>DOT placard system</strong> (diamond-shaped, 10¾" × 10¾") uses a colour-coded numbering system to identify hazardous materials:</p>
        <table>
            <thead>
                <tr><th>Colour</th><th>Division</th><th>Examples</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Red</strong></td><td>Class 1 — Explosives</td><td>Dynamite, fireworks, ammunition (1.1–1.6)</td></tr>
                <tr><td><strong>Red</strong></td><td>Class 2.1 — Flammable Gases</td><td>Propane, butane, acetylene</td></tr>
                <tr><td><strong>Green</strong></td><td>Class 2.2 — Non-Flammable Gases</td><td>Oxygen, nitrogen, carbon dioxide</td></tr>
                <tr><td><strong>Red/White</strong></td><td>Class 2.3 — Toxic Gases</td><td>Chlorine, ammonia, phosgene</td></tr>
                <tr><td><strong>Red</strong></td><td>Class 3 — Flammable Liquids</td><td>Gasoline, ethanol, acetone, benzene</td></tr>
                <tr><td><strong>Yellow</strong></td><td>Class 4 — Flammable Solids</td><td>Magnesium, phosphorus, matches</td></tr>
                <tr><td><strong>White/Red</strong></td><td>Class 5 — Oxidisers & Organic Peroxides</td><td>Hydrogen peroxide, ammonium nitrate</td></tr>
                <tr><td><strong>White</strong></td><td>Class 6 — Toxic/Infectious Substances</td><td>Pesticides, cyanide, medical waste</td></tr>
                <tr><td><strong>Yellow/White</strong></td><td>Class 7 — Radioactive Materials</td><td>Uranium, medical isotopes, Cobalt-60</td></tr>
                <tr><td><strong>White/Black</strong></td><td>Class 8 — Corrosives</td><td>Sulfuric acid, hydrochloric acid, sodium hydroxide</td></tr>
                <tr><td><strong>Black/White</strong></td><td>Class 9 — Miscellaneous</td><td>Asbestos, dry ice, lithium batteries</td></tr>
            </tbody>
        </table>
        <p>The <strong>UN/NA number</strong> (4-digit number on placards or orange panels) identifies the specific substance. The <strong>ERG (Emergency Response Guidebook)</strong> — available as a paper guide in the apparatus and as a mobile app — cross-references the UN/NA number or substance name to provide: initial isolation distances, protective action zones, fire/explosion hazards, health effects, and first aid. <strong>Every EMT should know how to use the ERG.</strong></p>

        <h4>HAZMAT Zones</h4>
        <p>HAZMAT incidents are divided into three operational zones:</p>
        <ul>
            <li><strong>HOT ZONE (Exclusion Zone / Red):</strong> The area immediately surrounding the release. Highest level of contamination. Only personnel in Level A or B PPE with appropriate training may enter. <strong>EMTs do NOT enter the hot zone</strong> unless they are part of a trained HAZMAT team with appropriate PPE. Medical care in the hot zone is limited to life-saving interventions (tourniquet, airway) — or the patient is removed to the warm zone.</li>
            <li><strong>WARM ZONE (Contamination Reduction Zone / Yellow):</strong> Where decontamination occurs. Personnel in Level C or B PPE (depending on the substance) perform decontamination. The EMT may work here with appropriate PPE and training. Patients are decontaminated before leaving the warm zone.</li>
            <li><strong>COLD ZONE (Support Zone / Green):</strong> The safe area where medical treatment and transport occur. <strong>This is where EMTs typically operate</strong> — receiving decontaminated patients and providing medical care. No contamination should reach the cold zone.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — Decontamination Before Transport:</strong> A contaminated patient does NOT enter the ambulance or the ED until decontaminated. The ambulance becomes a secondary contamination site, the ED becomes contaminated and must close, and the crew becomes exposed. Emergency decontamination (gross decon — removal of clothing + water rinse) can be performed in the warm zone and reduces contamination by 90%. <strong>If the patient is unstable (cardiac arrest, severe trauma), perform gross decon first, then treat and transport.</strong>
        </div>

        <h4>Routes of Exposure</h4>
        <p>Hazardous materials enter the body through four routes of exposure:</p>
        <ul>
            <li><strong>Inhalation (most common in HAZMAT incidents):</strong> Gases, vapours, dusts, and fumes are inhaled into the respiratory tract. Rapid onset. The most dangerous route because absorption is immediate and bypasses most protective barriers.</li>
            <li><strong>Absorption (cutaneous):</strong> Chemicals penetrate the skin or eyes. Some agents (nerve agents VX, organophosphates) are readily absorbed through intact skin. Skin absorption can be local (burns, blisters) or systemic.</li>
            <li><strong>Ingestion:</strong> Swallowing contaminated food, water, or from hand-to-mouth contact. Less common in acute HAZMAT incidents. Often secondary to poor decontamination hygiene.</li>
            <li><strong>Injection:</strong> Penetration of the skin by contaminated objects (shrapnel, needles, broken glass). Uncommon but possible in explosions or violent chemical reactions.</li>
        </ul>

        <h4>Levels of PPE</h4>
        <p>The EPA defines four levels of personal protective equipment:</p>
        <table>
            <thead>
                <tr><th>Level</th><th>Respiratory Protection</th><th>Skin Protection</th><th>When Used</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Level A</strong></td><td>SCBA (positive pressure, self-contained)</td><td>Fully encapsulating, vapour-tight chemical-resistant suit (splash and vapour protection)</td><td>Highest respiratory and skin hazard; when the substance is unknown or known to be highly toxic by skin contact; when IDLH conditions are present</td></tr>
                <tr><td><strong>Level B</strong></td><td>SCBA (positive pressure, self-contained)</td><td>Chemical-resistant clothing (hooded, one-piece, or two-piece splash suit), boots, gloves (not vapour-tight)</td><td>High respiratory hazard but lower skin hazard; splash protection is adequate; when the substance is not absorbed through skin but is dangerously airborne</td></tr>
                <tr><td><strong>Level C</strong></td><td>Air-purifying respirator (APR — full-face or half-face with appropriate cartridge)</td><td>Splash-protective chemical-resistant clothing (Tyvek suit), boots, gloves</td><td>When the substance is known AND the concentration is below IDLH AND the oxygen level is ≥19.5% AND the appropriate filter cartridge exists. An EMT working in the warm zone decontaminating patients might use Level C</td></tr>
                <tr><td><strong>Level D</strong></td><td>None (no respiratory protection)</td><td>Standard work uniform (station wear, turnout gear)</td><td>No hazard present; routine operations; cold zone only</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical — IDLH (Immediately Dangerous to Life and Health):</strong> An atmosphere is IDLH if it poses an immediate threat to life, would cause irreversible adverse health effects, or would interfere with an individual's ability to escape unaided. Examples: oxygen <19.5% or >23.5%, hydrogen cyanide >50 ppm, hydrogen sulfide >100 ppm, carbon monoxide >1,200 ppm. In IDLH atmospheres, ONLY Level A or B PPE with SCBA is acceptable — cartridge respirators (Level C) are NOT sufficient.
        </div>

        <h4>Decontamination</h4>
        <p>Decontamination (decon) is the process of removing or neutralising hazardous substances from patients, personnel, and equipment. There are two types:</p>

        <h5>Emergency (Gross) Decontamination</h5>
        <p>Rapid removal of contamination to rescue a critical patient. Performed in the warm zone. Steps:</p>
        <ol>
            <li><strong>Remove ALL clothing</strong> — clothing absorbs and retains 80–90% of contaminants. Cut away clothing carefully (avoid spreading contamination). Place clothing in sealed double-bags.</li>
            <li><strong>Rinse with copious amounts of water</strong> — water is the universal decontamination solution for most agents. Use a low-pressure hose (60–80 psi) or bucket. Start at the head and work down, ensuring runoff water is contained and does not contaminate clean areas. For oily substances, use mild detergent (Dawn dish soap is the standard field decon agent).</li>
            <li><strong>Dry the patient</strong> — prevents hypothermia (wet decontaminated patients are at high risk, especially in cold weather).</li>
            <li><strong>Transfer to the cold zone</strong> — for further medical care.</li>
        </ol>

        <h5>Technical Decontamination</h5>
        <p>Systematic, formal decontamination process conducted by the HAZMAT team. Includes a decontamination corridor with multiple stations (drop zone, primary wash, secondary wash, rinse, monitoring, dressing). The EMT is not typically involved in technical decon beyond assisting with patient transfer.</p>

        <h4>Specific Chemical Agents</h4>

        <h5>Nerve Agents (Organophosphates)</h5>
        <p>Nerve agents (sarin, VX, tabun, soman) and organophosphate pesticides (malathion, parathion) inhibit <strong>acetylcholinesterase</strong> — the enzyme that breaks down acetylcholine at the synaptic junction. This causes an <strong>excess of acetylcholine</strong>, leading to a cholinergic crisis. Military/terrorism nerve agents are odourless, colourless, and rapidly lethal. Agricultural organophosphates are more common in civilian practice.</p>
        <p><strong>SLUDGE-MD</strong> mnemonic for cholinergic symptoms: <strong>S</strong>alivation, <strong>L</strong>acrimation, <strong>U</strong>rination, <strong>D</strong>efecation, <strong>G</strong>I upset (nausea/vomiting/cramping), <strong>E</strong>mesis, <strong>M</strong>iosis (pinpoint pupils), <strong>D</strong>iaphoresis. Also: <strong>DUMBBELSS</strong> (Diarrhea, Urination, Miosis, Bronchorrhoea/Bradycardia, Emesis, Lacrimation, Salivation, Seizures).</p>
        <p><strong>Management:</strong> 1) Scene safety — these agents are dermal and respiratory hazards; full PPE (Level A/B) required. 2) Decontamination — remove clothing, copious water/soap wash. 3) Antidotes: <strong>Atropine</strong> (blocks muscarinic receptors — dries secretions, reverses SLUDGE) and <strong>2-PAM (Pralidoxime)</strong> (reactivates acetylcholinesterase — given for nicotinic effects [muscle weakness, fasciculations, paralysis]). Atropine dosing: 2 mg IV/IM initially, repeated every 5–10 min until secretions dry. 2-PAM: 1–2 g IV over 15–30 min. 4) Supportive care: airway management, suction (copious secretions are the hallmark), ventilation, seizure management (benzodiazepines).</p>

        <h5>Cyanide</h5>
        <p>Cyanide (hydrogen cyanide gas, cyanide salts) is a <strong>cellular asphyxiant</strong> — it binds to cytochrome oxidase in the mitochondria, preventing cells from using oxygen. The result: <strong>histotoxic hypoxia</strong> — the cells suffocate despite adequate oxygen in the blood. Cyanide may be released in industrial accidents (gold mining, electroplating, fumigation), structural fires (combustion of wool, silk, polyurethane), or terrorist attacks.</p>
        <p><strong>Presentation:</strong> Rapid onset of dizziness, headache, dyspnoea, confusion, seizures, and cardiac arrest. Classic signs: <strong>cherry-red skin</strong> (because venous blood is highly oxygenated — the cells cannot use oxygen), <strong>almond odour</strong> on the breath (not detectable by everyone — 40% of the population cannot smell it), severe metabolic acidosis with elevated lactate (the hallmark lab abnormality).</p>
        <p><strong>Management:</strong> 1) Scene safety — gas is rapidly lethal; SCBA required. 2) Decontamination if dermal exposure (cyanide salts on skin). 3) Antidote kit: <strong>Amyl nitrite</strong> (inhalation — administer by crushing a pearl and placing in the patient's mask/BVM circuit for 30 seconds each minute), <strong>Sodium nitrite</strong> (IV — induces methemoglobinemia to bind cyanide), <strong>Sodium thiosulfate</strong> (IV — converts cyanide to thiocyanate, which is renally excreted). The Cyanokit® (hydroxocobalamin — vitamin B12a) is an alternative: it binds cyanide directly to form cyanocobalamin, which is excreted in urine. It does NOT cause methemoglobinemia or hypotension and is preferred in smoke inhalation victims. 4) Supportive care: 100% O₂, treat seizures (benzodiazepines), treat cardiac arrest per ACLS.</p>

        <h5>Pulmonary Irritants (Choking Agents)</h5>
        <p>Chlorine, ammonia, phosgene, and other pulmonary irritants cause damage to the respiratory tract on contact. Chlorine is widely transported (swimming pools, water treatment, industrial bleach) and is the most common HAZMAT respiratory irritant encountered by EMS. Phosgene (produced when chlorine-containing compounds are heated) was used as a chemical weapon in WWI and can be released in structural fires.</p>
        <p><strong>Presentation:</strong> Immediate: coughing, choking, burning sensation in the throat and chest, lacrimation, rhinorrhoea, dyspnoea. Delayed (phosgene): symptoms may be delayed 4–24 hours — then sudden onset of severe pulmonary oedema ("dry drowning"). Chlorine is greenish-yellow with a bleach-like odour; ammonia has a pungent, sharp odour; phosgene smells like freshly mown hay.</p>
        <p><strong>Management:</strong> 1) Scene safety — SCBA required. 2) Remove from exposure — move to fresh air. 3) Decontaminate if liquid/dermal exposure (copious water). 4) Supportive care: 100% O₂, bronchodilators for bronchospasm, CPAP for pulmonary oedema, monitor for airway compromise. 5) Transport — respiratory status may deteriorate over hours.</p>

        <h5>Blisters (Vesicants)</h5>
        <p>Mustard gas (sulfur mustard) and lewisite cause chemical burns on contact with skin and mucous membranes. Mustard gas is an oily liquid that penetrates clothing and skin rapidly. Symptoms are <strong>delayed</strong> (2–24 hours after exposure): erythema, large blisters, conjunctivitis, cough, and bone marrow suppression (late). Lewisite causes immediate pain and blistering.</p>
        <p><strong>Management:</strong> Decontamination with copious water (mustard gas is not water-soluble — soap and water, or 0.5% hypochlorite solution, is better). No specific antidote for mustard gas. British Anti-Lewisite (BAL, dimercaprol) is the antidote for lewisite. Supportive care for burns. Do NOT debride blisters in the field.</p>

        <h5>Riot Control Agents (Tear Gas)</h5>
        <p>CS gas, OC (pepper spray), and CN (Mace) are used by law enforcement. These cause intense eye pain, lacrimation, blepharospasm, rhinorrhoea, coughing, and skin burning. <strong>Management:</strong> Remove from exposure; remove contaminated clothing; flush eyes and skin with copious water; use a fan to clear the air; most patients recover within 30–60 minutes. Do NOT use milk, oil, or butter — water is the best decontaminant.</p>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — Nerve Agent Antidote Kits (MARK-1 / DuoDote):</strong> Military and some EMS services carry auto-injectors containing atropine and 2-PAM. The MARK-1 kit has two separate auto-injectors: atropine 2 mg and 2-PAM 600 mg. DuoDote combines both in a single auto-injector (atropine 2.1 mg + 2-PAM 600 mg). Protocol: administer IM into the anterolateral thigh (through clothing if necessary). Severe cases may require 3+ sets. The goal of atropine is to dry bronchial secretions (not to achieve a target heart rate — these patients may remain tachycardic despite adequate atropinisation).
        </div>

        <h4>Radiation Emergencies</h4>
        <p>Radiation emergencies involve the release of <strong>ionising radiation</strong> — alpha particles, beta particles, gamma rays, or neutrons. The most common radiation emergency an EMT will encounter is a <strong>transportation accident</strong> involving radioactive materials (medical isotopes, industrial sources). A <strong>radiation dispersal device (RDD, "dirty bomb")</strong> — a conventional explosive wrapped in radioactive material — is a terrorism concern. An actual nuclear detonation is a mass casualty event requiring a federal response.</p>

        <h5>Key Radiation Concepts</h5>
        <ul>
            <li><strong>Irradiation vs Contamination:</strong> <strong>Irradiation</strong> is exposure to radiation without physical contact with the radioactive material — the patient does NOT emit radiation and is not a hazard to rescuers. <strong>Contamination</strong> means radioactive material is on (external) or inside (internal) the patient's body — the patient IS a hazard and requires decontamination.</li>
            <li><strong>Time, Distance, Shielding:</strong> The three principles of radiation safety: minimise time near the source, maximise distance from the source (inverse square law — doubling distance reduces exposure to ¼), and use shielding (lead, concrete, water).</li>
            <li><strong>CBRN (Chemical, Biological, Radiological, Nuclear):</strong> A broader category. Radiological emergencies typically require decontamination by removing clothing (removes 90% of contamination) and washing with soap and water. Biological agents require isolation and infection control. Nuclear detonation injuries are primarily thermal and blast — not radiation-specific management in the prehospital setting.</li>
        </ul>

        <h5>Acute Radiation Syndrome (ARS)</h5>
        <p>ARS occurs when the whole body receives a high dose of radiation (>0.5–1 Gy) over a short period. It has four phases:</p>
        <ol>
            <li><strong>Prodromal phase</strong> (minutes to hours): Nausea, vomiting, diarrhoea, fatigue — the earlier the onset, the higher the dose. Onset <1 hour = lethal dose likely.</li>
            <li><strong>Latent phase</strong> (hours to weeks): Symptoms improve, but cellular damage is progressing. The shorter the latent phase, the worse the prognosis.</li>
            <li><strong>Manifest illness phase:</strong> Depending on the dose: haematopoietic (bone marrow suppression → infection, bleeding), GI (sloughing of gut mucosa → severe diarrhoea, dehydration, sepsis), or CNS (confusion, seizures, coma — invariably fatal at high doses).</li>
            <li><strong>Recovery or death:</strong> If the haematopoietic system recovers, survival is possible.</li>
        </ol>
        <p><strong>EMT management of radiation patients:</strong> 1) Scene safety — do NOT enter a known radiation area without a radiological monitor and training. 2) The radiation source (sealed container) is the hazard — not the irradiated patient. 3) Contaminated patients require decontamination (remove clothing, gentle soap/water wash). 4) Treat life threats first — a contaminated cardiac arrest patient still needs CPR (with appropriate PPE). 5) Transport to a hospital designated for radiation emergencies. 6) Document the patient's estimated exposure, time of exposure, and any symptoms (especially time of first vomiting — a critical triage tool).</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical — The 'Time to Vomiting' Triage Tool:</strong> In radiation mass casualty triage, the time from exposure to first vomiting is the most useful field triage tool:
            • Vomiting within <10 min = lethal dose (>8 Gy) — expectant (black tag)
            • Vomiting within 10–30 min = severe dose (4–8 Gy) — immediate (red tag, if resources permit)
            • Vomiting within 1–2 hours = moderate dose (2–4 Gy) — delayed (yellow tag)
            • Vomiting >2 hours or no vomiting = low dose (<2 Gy) — minimal (green tag)
        </div>

        <h4>Mass Casualty Incident (MCI) Triage in HAZMAT/WMD Events</h4>
        <p>The <strong>START (Simple Triage and Rapid Treatment)</strong> system is used for most MCIs, but <strong>triage in a HAZMAT/WMD event must account for contamination</strong>:</p>
        <ul>
            <li><strong>DECON triage:</strong> Patients are triaged BEFORE decontamination based on the severity of their condition. Priority 1 (immediate/red) patients need decontamination AND life-saving treatment on site. Priority 2 (delayed/yellow) — decontaminate and then treat. Priority 3 (minimal/green) — decontaminate and observe. Priority 4 (expectant/black) — comfort care, decontaminate only if resources allow.</li>
            <li><strong>Scene organisation:</strong> EMS operates in the cold zone only. Decontamination occurs in the warm zone. Rescue operations occur in the hot zone by HAZMAT personnel.</li>
            <li><strong>Hospital notification:</strong> Notify the receiving facility of the substance involved (if known), the number of patients, contamination status, and decontamination performed. Many hospitals have decontamination facilities — they may direct you to a specific entrance.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>NREMT Focus — Key Takeaways:</strong><br>
            • <strong>Scene safety is #1</strong> — do NOT enter a HAZMAT scene without training and PPE<br>
            • <strong>Know the ERG</strong> — the orange ERG guidebook cross-references UN/NA numbers with response info<br>
            • <strong>Three zones:</strong> HOT (exclusion, no entry), WARM (decontamination), COLD (medical treatment)<br>
            • <strong>Removing clothing removes 80–90% of contamination</strong> — the most effective decon step<br>
            • <strong>Nerve agents (SLUDGE-MD)</strong> — atropine + 2-PAM; treat secretions, not heart rate<br>
            • <strong>Cyanide</strong> — cellular asphyxiant; hydroxocobalamin (Cyanokit) preferred for smoke inhalation<br>
            • <strong>Irradiation ≠ contamination</strong> — irradiated patients are NOT radioactive hazards<br>
            • <strong>Time to vomiting</strong> is the field triage tool for radiation exposure severity
        </div>
    </div>`,
    flashcards: [
        {
            question: "What are the three operational zones in a HAZMAT incident?",
            answer: "Hot zone (exclusion/red) — contamination present, only Level A/B personnel enter; Warm zone (contamination reduction/yellow) — decontamination occurs; Cold zone (support/green) — safe area for medical treatment. EMTs typically operate in the cold zone only.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What is the most effective step in emergency decontamination?",
            answer: "Removing the patient's clothing — this removes 80–90% of contaminants. Followed by copious water rinse (low pressure) and drying. Clothing should be double-bagged and sealed.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What is the difference between irradiation and contamination?",
            answer: "Irradiation is exposure to radiation waves/particles without physical contact — the patient does NOT emit radiation. Contamination means radioactive material is ON or IN the patient — they ARE a hazard and require decontamination.",
            category: "Environmental — Radiation"
        },
        {
            question: "What is the SLUDGE-MD mnemonic for nerve agent poisoning?",
            answer: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis (pinpoint pupils), Diaphoresis. These are cholinergic crisis symptoms from acetylcholinesterase inhibition.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What are the antidotes for nerve agent poisoning?",
            answer: "Atropine (blocks muscarinic receptors, dries secretions) and 2-PAM/Pralidoxime (reactivates acetylcholinesterase, treats nicotinic effects like muscle weakness and paralysis). Given IM (auto-injector) or IV.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "How does cyanide cause toxicity and what is the antidote?",
            answer: "Cyanide binds to cytochrome oxidase in mitochondria, blocking cellular oxygen use (histotoxic hypoxia). Antidote: hydroxocobalamin (Cyanokit) binds cyanide directly to form cyanocobalamin. Alternative: amyl nitrite + sodium nitrite + sodium thiosulfate (induces methemoglobinemia to bind cyanide).",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What colour is a Class 2.3 (Toxic Gas) DOT placard?",
            answer: "Red and white striped. Examples: chlorine, ammonia, phosgene. Flammable gases (2.1) are red; non-flammable gases (2.2) are green.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What are the four levels of PPE in HAZMAT response?",
            answer: "Level A — fully encapsulated, SCBA (vapour-tight); Level B — SCBA + splash suit (not vapour-tight); Level C — APR + splash suit (requires known agent, O₂ ≥19.5%, <IDLH); Level D — standard uniform, no respiratory protection.",
            category: "Environmental — HAZMAT"
        },
        {
            question: "What is the START triage system's 'time to vomiting' tool for radiation exposure?",
            answer: "<10 min = lethal dose (>8 Gy, expectant); 10–30 min = severe (4–8 Gy, immediate); 1–2 hours = moderate (2–4 Gy, delayed); >2 hr or none = low dose (<2 Gy, minimal). Earlier vomiting = higher radiation dose.",
            category: "Environmental — Radiation"
        },
        {
            question: "What is the ERG (Emergency Response Guidebook)?",
            answer: "The orange guidebook carried on emergency apparatus that cross-references UN/NA numbers or substance names to provide isolation distances, protective action zones, health effects, fire/explosion hazards, and first aid for HAZMAT incidents. Also available as a mobile app.",
            category: "Environmental — HAZMAT"
        }
    ],
    quiz: [
        {
            q: "You arrive at a truck crash on the highway. The truck has a red and white striped diamond placard with the number 1005. You smell a strong bleach-like odour and see a greenish-yellow vapour cloud forming near the overturned tanker. The driver is walking away from the truck, coughing and holding his eyes. What should the EMT do FIRST?",
            options: [
                "Run toward the truck driver to help him — he is clearly injured and needs medical attention",
                "Park the ambulance upwind and uphill at least 500 feet away, don appropriate PPE, and assess the situation from a safe distance. The placard indicates a toxic gas (chlorine, UN 1005). The greenish-yellow colour and bleach odour confirm chlorine. Do NOT enter the vapour cloud",
                "Approach the truck from downwind to identify the placard more clearly",
                "Begin treating the driver immediately — his symptoms are likely from anxiety, not the chemical"
            ],
            correct: 1,
            explanation: "Chlorine gas (UN 1005, Class 2.3 toxic gas) is greenish-yellow with a bleach-like odour. It is a pulmonary irritant that causes coughing, eye irritation, and respiratory distress. The EMT's first priority is SCENE SAFETY: park upwind and uphill (the vapour cloud will move downwind), don appropriate PPE (SCBA at minimum), and approach from a safe direction. Do NOT enter the vapour cloud without respiratory protection. Chlorine is heavier than air and will settle in low-lying areas. Once safe, assess the driver, provide high-flow O₂, bronchodilators if wheezing, and transport."
        },
        {
            q: "During a HAZMAT incident, you are assigned to work in the warm zone assisting with decontamination. Several patients have been removed from the hot zone. They are walking and talking but covered in an oily liquid. What is the minimum level of PPE you should be wearing?",
            options: [
                "Level A — fully encapsulating suit with SCBA",
                "Level C — chemical-resistant suit (Tyvek) with air-purifying respirator (APR) with appropriate cartridges",
                "Level D — standard work uniform with gloves only",
                "No PPE is needed since the patients have been removed from the hot zone"
            ],
            correct: 1,
            explanation: "In the warm zone (contamination reduction zone), Level C PPE is typically the minimum: chemical-resistant (Tyvek or similar) splash suit, gloves, boots, and an APR with appropriate chemical cartridges. This assumes: (1) the substance is known, (2) the concentration is below IDLH, (3) oxygen is ≥19.5%, and (4) an appropriate filter cartridge exists for the substance. If any of these conditions are not met, Level B (SCBA + splash suit) is required. Level A is for hot zone entry. Level D has no respiratory protection and is insufficient for the warm zone."
        },
        {
            q: "You are called to a warehouse where a worker was sprayed in the face with an agricultural pesticide. The patient has copious oral and respiratory secretions, frequent urination and diarrhoea, vomiting, and his pupils are constricted to pinpoints. He is also experiencing muscle fasciculations (twitching) in his arms and chest. His co-worker says the container label says 'organophosphate.' What is the most appropriate management?",
            options: [
                "Supportive care only — the patient just needs oxygen and transport; the symptoms will resolve on their own",
                "This is a cholinergic crisis from organophosphate poisoning. Immediately: scene safety (PPE — this agent is absorbed through skin), decontaminate (remove clothing, copious water/soap), administer atropine (2 mg IM/IV) to dry secretions, give 2-PAM for fasciculations, suction airway, ventilate if needed, and transport emergently",
                "Administer naloxone — this looks like an opioid overdose with respiratory depression",
                "Flush his eyes with milk and apply a cooling gel to his face — the spray is probably just an irritant"
            ],
            correct: 1,
            explanation: "Organophosphate poisoning causes a cholinergic crisis by inhibiting acetylcholinesterase. The classic presentation (SLUDGE-MD): Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis, Diaphoresis, plus muscle fasciculations (nicotinic effect). Management: 1) Scene safety — organophosphates are absorbed through skin; wear Level C PPE at minimum (gloves, splash suit, APR with organic vapour cartridge); 2) Decontamination — remove clothing, copious soap and water; 3) Atropine — 2 mg IV/IM initially, repeat every 5–10 min until secretions are dry (pulmonary secretions are the major threat — 'drying the lungs' is the atropine endpoint); 4) 2-PAM (pralidoxime) — 1–2 g IV for nicotinic effects (fasciculations, muscle paralysis); 5) Airway management — aggressive suctioning of secretions; 6) High-flow O₂, ventilation support if needed; 7) Monitor for seizures — treat with benzodiazepines."
        },
        {
            q: "A firefighter is brought to the cold zone after being removed from a structure fire. He is confused, has a headache, and his skin appears cherry-red. His vital signs are: HR 118, BP 98/62, RR 28, SpO₂ 98% on 15 L NRB (paradoxically normal O₂ sat despite severe symptoms). He has soot in his nares and carbonaceous sputum. What is the most likely cause of his symptoms and the appropriate treatment?",
            options: [
                "Carbon monoxide poisoning — give high-flow O₂ and transport. CO poisoning causes cherry-red skin and normal SpO₂ (pulse ox cannot distinguish COHb from O₂Hb)",
                "Cyanide poisoning from smoke inhalation — cellular asphyxiant causing histotoxic hypoxia. Cherry-red skin (high venous O₂), normal SpO₂ (cells can't use O₂), metabolic acidosis. Give hydroxocobalamin (Cyanokit) IV. Oxygen and transport",
                "Simple heat exhaustion — cool him down and give fluids",
                "Anxiety reaction from the stress of the fire — reassure him and observe"
            ],
            correct: 1,
            explanation: "Smoke inhalation victims often have BOTH CO poisoning and cyanide poisoning (from combustion of synthetic materials). This patient's cherry-red skin, normal SpO₂ despite severe symptoms, confusion, and hypotension point to cyanide (cellular asphyxiant — cells cannot use oxygen, so venous blood remains highly oxygenated, causing the cherry-red colour). While CO also causes cherry-red skin, the severity of this patient's symptoms (hypotension, confusion) with normal O₂ sat is more consistent with cyanide. Hydroxocobalamin (Cyanokit) 5 g IV is the preferred antidote — it does not cause methemoglobinemia or hypotension and is safe in smoke inhalation. High-flow O₂ should also be given. Cyanide + CO poisoning together are a lethal combination ('CO-cyanide syndrome'). Transport to a burn centre with hyperbaric capability if available."
        },
        {
            q: "[HARD] An overturned tanker truck is leaking an unknown substance. The placard is yellow with the number 1971 in the bottom corner. You are positioned upwind at 800 feet. Multiple patients are walking toward you from the scene, complaining of burning eyes and throat, coughing, and difficulty breathing. Some are vomiting. The vapour cloud is settling in low-lying areas. What does the placard indicate and what is your primary concern?",
            options: [
                "Class 3 (Flammable liquid) — evacuate 500 feet, no respiratory hazard",
                "The yellow placard indicates Class 4 (Flammable solid) — the fire risk is the primary concern",
                "Yellow placards are Class 4 (Flammable solids/reactive) — UN 1971 is not a valid UN number in current ERG. This means the placard may be misleading or the substance requires immediate lookup in the ERG. Regardless, multiple patients with respiratory symptoms = a respiratory hazard exists. Maintain safe position, consult the ERG, and do NOT enter until the substance is identified and appropriate PPE is donned",
                "The placard is yellow with a 1971 number — that indicates Class 7 (Radioactive). Evacuate 1 mile immediately"
            ],
            correct: 2,
            explanation: "This is a trick question testing ERG knowledge. Yellow placards indicate Class 4 (Flammable Solids / Spontaneously Combustible / Dangerous When Wet). UN 1971 does not correspond to a known substance in the ERG (1971 is not an assigned number for a common hazmat — the closest common numbers are 1972 [Methane/LNG] and 1977 [Nitrogen]). The key point: an unknown placard with an invalid/unknown UN number requires the EMT to: 1) Maintain safe position upwind/uphill; 2) Consult the ERG with the placard class colour and any legible information; 3) NOT enter or approach; 4) Wait for the HAZMAT team to identify the substance. The multiple patients with respiratory symptoms confirm an inhalation hazard exists regardless of what the placard seems to indicate."
        },
        {
            q: "You are at a mass casualty incident involving a suspected chemical release in a subway station. Multiple patients are streaming out of the station, coughing and complaining of eye irritation. Some are vomiting and have difficulty breathing. You see several patients collapsed near the exit. What is the correct approach to triage and treatment?",
            options: [
                "Enter the subway station immediately to rescue the collapsed patients — they are the highest priority",
                "Set up a triage and decontamination station outside the station (warm zone) in the upwind direction. Have patients remove clothing, rinse with water, and then be triaged by severity. The collapsed patients near the exit should be removed by trained HAZMAT personnel in Level A/B PPE, decontaminated, and brought to the treatment area. EMTs operate in the cold zone only",
                "Triage all patients inside the station to avoid spreading contamination",
                "Direct all patients to the nearest hospital — the hospital will handle decontamination and treatment"
            ],
            correct: 1,
            explanation: "In a HAZMAT MCI: 1) EMTs do NOT enter the hot zone (contaminated area); 2) A decontamination corridor (warm zone) should be set up upwind of the hot zone; 3) Patients remove their own clothing (if able) in the warm zone and are rinsed with water; 4) After decontamination, patients enter the cold zone for medical triage and treatment; 5) Collapsed/unable patients require HAZMAT team extraction; 6) Hospitals must be notified in advance — they cannot receive contaminated patients. A patient who arrives at the ED without decontamination will contaminate the entire ED and force it to close. The decontamination corridor should be set up with patient privacy in mind (privacy screens, separate areas for men/women if possible)."
        },
        {
            q: "A worker at a manufacturing plant was exposed to a metal drum labelled 'Hydrogen Cyanide.' He was splashed on his arm and face. On your arrival, he is unconscious, seizing, and his skin is cherry-red. He has a strong odour of bitter almonds. What is the correct sequence of interventions?",
            options: [
                "Wait for the HAZMAT team to arrive — EMTs cannot treat cyanide poisoning",
                "Scene safety first: don Level B PPE (SCBA + splash suit) — cyanide is rapidly lethal by inhalation and dermal absorption. Decontaminate: remove clothing, copious water rinse. Administer hydroxocobalamin (Cyanokit) 5 g IV over 15 minutes. Treat seizures with benzodiazepines. Support ABCs. Transport emergently to a hospital with cyanide antidote capability",
                "Administer activated charcoal — it will absorb the cyanide in his stomach",
                "Dilute the cyanide by giving the patient large amounts of water to drink"
            ],
            correct: 1,
            explanation: "Hydrogen cyanide is a rapidly lethal cellular asphyxiant. It is toxic by inhalation (the gas) and dermal absorption (the liquid). Scene safety is priority: SCBA is mandatory (the gas is deadly to rescuers), and splash protection prevents dermal absorption. Decontamination (remove clothing + water) is essential. Antidote: hydroxocobalamin (Cyanokit) 5 g IV over 15 minutes — it binds cyanide to form cyanocobalamin (vitamin B12), which is excreted harmlessly in urine. Alternative: sodium nitrite + sodium thiosulfate (amyl nitrite pearls can be used initially if IV access is delayed). Seizures are treated with benzodiazepines. The bitter almond odour and cherry-red skin are classic signs. Note: do NOT use activated charcoal — cyanide acts too rapidly for charcoal to be effective, and the patient is seizing/unconscious which increases aspiration risk."
        },
        {
            q: "A patient was working in a lab and dropped a vial of radioactive iodine-131, which shattered on the floor. The patient has no visible contamination on his skin or clothing but was in the room when the vial broke. He is anxious and asking about his risk of cancer. He has no symptoms. What should the EMT do?",
            options: [
                "This is a contamination event — the patient needs full decontamination with soap and water, and his clothing must be bagged",
                "The vial broke but the patient has no visible contamination — this is likely irradiation (exposure to radiation without physical contamination). The patient is NOT a radiation hazard to rescuers. Provide reassurance, monitor for symptoms, and transport for medical evaluation. Document the exposure. No decontamination is needed unless a contamination survey with a Geiger counter shows otherwise",
                "Evacuate everyone within a 1-mile radius — this is a nuclear emergency",
                "The patient must be isolated in a lead-lined room — he is now radioactive and dangerous to everyone around him"
            ],
            correct: 1,
            explanation: "Breaking a vial of medical radioisotope is an irradiation event (exposure to radiation without physical contamination) unless the material physically contacted the patient's skin or was ingested/inhaled. Irradiated patients are NOT radioactive — they do not pose a hazard to rescuers. Key distinction: irradiation ≠ contamination. A patient who has been X-rayed is irradiated — they are not radioactive. Unless the radioisotope is on or inside the patient, decontamination is not indicated. This patient needs: 1) Reassurance — his cancer risk from a single acute low-level exposure is minimal; 2) Medical evaluation to rule out internal contamination (which can be assessed with a Geiger counter or bioassay); 3) Documentation of the exposure for occupational health follow-up. If the liquid had splashed on his skin, that would be contamination requiring decontamination."
        }
    ],
    critical: [
        {
            id: "crit_8_6_1",
            scenario: "You respond to a reported 'chemical exposure' at a small factory. Dispatch advises that a worker was exposed to an unknown chemical while cleaning industrial equipment. On arrival, you see a single-story building with no visible vapour clouds, no odours, and no other patients outside. A man is standing at the open loading dock door, waving you over. He is holding a chemical container and appears to be wearing a contaminated, unbuttoned Tyvek suit over his clothes. No other workers are visible. There are no placards on the building or on the container he is holding. He says 'my buddy got some chemical on himself — I think it's eating through his shirt. Come quick! I'll show you where he is.' He gestures for you to follow him inside.",
            question: "This is a potential HAZMAT scene with multiple red flags. What should the EMT do?",
            options: [
                {t: "STOP. Do NOT enter. The scene has multiple red flags: 1) Unknown substance — the chemical could be anything; 2) The worker approaching you is potentially contaminated (holding the container, wearing a contaminated Tyvek suit); 3) No PPE on the EMT — you are not protected; 4) The container is unlabeled — no placard, no UN number, no information; 5) The patient is inside the building — you cannot assess him from outside. Maintain a safe distance (at least 500 ft upwind). Request HAZMAT response. Tell the worker to leave the container outside and move away from the building to a safe area. Do NOT enter until the substance is identified, the scene is assessed by a HAZMAT team, and you are in appropriate PPE with decontamination set up", f: "Correct — This scene screams HAZMAT. The rescuer (the worker approaching you) may be contaminated. The substance is unknown. The EMT has NO PPE for chemical exposure. The absolute priority is scene safety. Do NOT enter the building. Do NOT approach the worker who may be contaminated. Maintain distance, request HAZMAT response, and establish a hot/warm/cold zone from a safe position."},
                {t: "The worker is asking for help and his friend is injured inside — go in quickly, find the patient, drag him out, and then worry about decontamination outside. Seconds matter in a chemical exposure", f: "Incorrect — A dead or contaminated rescuer cannot help anyone. Entering a HAZMAT scene without: (1) knowing the substance, (2) having appropriate PPE, and (3) having a decontamination plan is one of the most common and most deadly EMS errors. The worker approaching you is potentially contaminated — being near him could expose you and your ambulance. Scene safety is the #1 priority in EMS, especially in HAZMAT incidents. Wait for the HAZMAT team."}
            ],
            correct: 0,
            explanation: "HAZMAT incidents are one of the few emergencies where the EMT's first action is to NOT act — but to assess from a safe distance and call for resources. Red flags in this scenario: 1) Unknown substance — no placard, no label, no MSDS (Safety Data Sheet) available; 2) The worker approaching you is potentially contaminated — he is holding the container and wearing a soiled Tyvek suit; 3) The EMT has no chemical PPE — no SCBA, no splash suit, no gloves capable of chemical protection; 4) The patient is inside a building you cannot see into — you have no information about the environment (air quality, vapour, spills); 5) No decontamination setup — there is no decon corridor, no water source, no containment. Correct actions: 1) Maintain a safe upwind/uphill distance (at least 500 ft); 2) Request HAZMAT team response (fire department HAZMAT unit, regional HAZMAT team); 3) Tell the worker to leave the container in a safe place away from the building, move to your location, and remove his contaminated outer clothing; 4) Set up decontamination if you have the training and equipment; 5) Do NOT enter until scene is declared safe by the HAZMAT team; 6) Contact dispatch to obtain the Safety Data Sheet (SDS) for any chemical used at that facility if the substance can be identified.",
            kpi: "Prioritises scene safety and refuses to enter an unknown HAZMAT scene without appropriate PPE and information"
        },
        {
            id: "crit_8_6_2",
            scenario: "You are dispatched to a 'person down' at a city park. On arrival, you find approximately 20 people sitting or lying on the grass near a playground. Several are vomiting, many are coughing and complaining of watery eyes and 'something in the air.' A few are seizing. You see no visible vapour cloud, no unusual containers, and no obvious source. The weather is calm (no wind). Bystanders tell you it started about 10 minutes ago — 'everyone just started getting sick all at once.' Some victims are wearing exercise clothing (this is a popular jogging path). You smell a faint 'fruity' or 'garlic-like' odour in the air. As you watch, several more people collapse. An elderly woman approaches you, sobbing, saying 'my granddaughter can't breathe — please help her.'",
            question: "This appears to be a mass casualty chemical exposure (possible nerve agent). You have no HAZMAT PPE. What is your plan?",
            options: [
                {t: "This is a MCI with a chemical exposure (possibly a nerve agent based on the rapid onset of vomiting, seizures, respiratory distress, and the garlic-like odour — which can be associated with organophosphates). Maintain a safe upwind position. DO NOT enter the contaminated area. Call for HAZMAT response, additional ambulances, and law enforcement. Direct unaffected/ambulatory victims to walk to a designated clean area (upwind) for decontamination. Instruct victims to remove their clothing and rinse with available water (park water fountain, hoses). Set up a triage station in the cold zone. Provide medical care only to victims who have been decontaminated or who reach the cold zone", f: "Correct — This is a suspected nerve agent/chemical MCI. Scene safety is paramount: do NOT enter the affected area without appropriate HAZMAT PPE (SCBA + Level A/B suit). The garlic/fruity odour can be associated with organophosphates (sarin is odourless, but some organophosphates have a distinct odour). Rapid collapse, seizures, vomiting, respiratory distress are classic cholinergic crisis signs. Actions: 1) Stay upwind; 2) Call for HAZMAT, more resources; 3) Direct ambulatory patients to self-evacuate upwind and remove clothing; 4) Set up decon and treatment in cold zone; 5) Treat life threats only after decon."},
                {t: "Go directly to the seizing patients — they are the highest priority and need immediate airway management and treatment. The seizures could be from any cause, and you cannot assume it is a chemical attack. Start assessing patients and providing care", f: "Incorrect — The sudden onset of identical symptoms (vomiting, eye irritation, coughing, seizures) in multiple patients with no obvious environmental cause is a RED FLAG for a chemical exposure, bioterrorism agent, or environmental toxin. Entering the affected area without respiratory and dermal protection could incapacitate you, adding to the casualty count and depleting resources. The garlic-like odour is concerning for a chemical agent. The calm weather means the agent may still be present in the area (no wind to disperse it). A 'fruity'/garlic odour has been reported with some organophosphates (however, sarin — GB — is described as odourless). This scene needs HAZMAT, law enforcement (potential crime scene/terrorism), and an MCI response. Do NOT enter."}
            ],
            correct: 0,
            explanation: "This scenario describes a probable mass casualty chemical exposure — the rapid, simultaneous onset of cholinergic signs (vomiting, seizures, respiratory distress, excessive secretions) in multiple patients is highly suspicious. Key actions: 1) Immediately establish an upwind command post and declare an MCI; 2) Do NOT enter the affected area without HAZMAT PPE; 3) Request HAZMAT team, additional ambulances, law enforcement (potential terrorism), and notify hospitals; 4) Instruct ambulatory patients to walk upwind to a designated collection point, remove clothing (this removes 90% of contamination), and rinse with available water; 5) Set up a decontamination corridor in the warm zone; 6) Triage patients after decontamination; 7) If nerve agent is suspected and if available under medical direction and with appropriate PPE, administer atropine/2-PAM auto-injectors to patients with severe cholinergic symptoms; 8) Document the timeline ('everyone got sick at once' suggests a point-source release); 9) Preserve the scene as a potential crime scene — do not disturb potential evidence unnecessarily. The faint garlic/fruity odour could be significant — report this to the HAZMAT team.",
            kpi: "Recognises a MCI with probable chemical exposure, maintains scene safety, and initiates an appropriate multi-agency response"
        },
        {
            id: "crit_8_6_3",
            scenario: "You are in the cold zone of a HAZMAT incident where multiple patients have been decontaminated after exposure to an unknown white powder at a postal facility. The patients have been stripped, rinsed with water and soap, and are now wrapped in blankets in the treatment area. Your patient is a 35-year-old female who was in the room when a package burst, releasing a white powder into the air. She has no symptoms but is extremely anxious, crying, and asking if she is going to die. She has already been decontaminated (clothing removed, washed). Her vital signs are normal. The HAZMAT team has not yet identified the powder. Other patients from the same room are reporting similar lack of symptoms. A news crew is broadcasting live from the police perimeter 200 yards away.",
            question: "How should the EMT manage this patient and the situation?",
            options: [
                {t: "Provide reassurance. This patient is decontaminated and asymptomatic. The most likely explanation is a hoax or non-toxic substance (flour, sugar, talcum powder, or a harmless prank) — the majority of 'white powder' incidents are false alarms. Reassure her that she is safe, has been decontaminated, and medical evaluation will confirm. Monitor for any delayed symptoms. Transport to hospital for medical clearance. Manage the media carefully — do not speculate about the substance on camera, refer all media inquiries to the incident commander/PAO", f: "Correct — Most white powder incidents are hoaxes or non-toxic substances (the US Postal Service sees hundreds annually, nearly all harmless). The patient has been decontaminated and is asymptomatic. Her anxiety is understandable and should be addressed with calm reassurance. Do NOT dismiss her fears — acknowledge them and provide factual information. Transport to hospital for medical evaluation and clearance. For media: refer all inquiries to the Public Information Officer (PIO) — do not speculate or comment on camera."},
                {t: "Tell her she is probably going to be fine but that she needs to be quarantined for 2 weeks to make sure she doesn't develop symptoms. The white powder could be anthrax, and she should prepare for the worst", f: "Incorrect — While anthrax was a concern after the 2001 mail attacks, the vast majority of white powder incidents are harmless. Causing undue fear is harmful and unprofessional. Quarantine is not indicated — she has been decontaminated (removal of clothing + soap and water removes >99% of surface contamination). She needs medical evaluation and reassurance. Do not speculate about anthrax or other bioterror agents without evidence. If anthrax is confirmed, post-exposure prophylaxis with antibiotics is available — but this is not information for the EMT to provide without official confirmation."}
            ],
            correct: 0,
            explanation: "White powder incidents are common and almost always non-toxic. The HAZMAT decontamination process (clothing removal + soap/water wash) effectively removes any surface contamination. This patient is asymptomatic after decontamination — a reassuring sign. Management: 1) Reassurance — calmly explain that she has been decontaminated and is being evaluated; 2) Empathy — her anxiety is a normal response to a frightening event; validate, don't dismiss; 3) Monitor — watch for any delayed symptoms during transport; 4) Transport to hospital for medical evaluation (even asymptomatic patients exposed to an unknown substance need medical clearance); 5) Documentation — document the type of exposure (white powder, airborne), decontamination performed, time of exposure, and any symptoms; 6) Media management — EMS personnel should not speculate or comment on the substance. Refer all media inquiries to the designated Public Information Officer. Never say 'it's probably harmless' on camera — the news will report that the substance was 'unknown.' Ethical principle: do no harm, including psychological harm from unnecessary fear or dismissive attitudes.",
            kpi: "Manages patient anxiety appropriately after decontamination and avoids media speculation about an unknown substance"
        }
    ]
},
];

