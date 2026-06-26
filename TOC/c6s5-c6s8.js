/* ========== Chapter 6 – Trauma Emergencies (Sections 5-8) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [

    /* ──────────────────────────────────────────────────────────────────────────────
     * c6s5 – Burns
     * ────────────────────────────────────────────────────────────────────────────── */
    {
        id: "c6s5",
        shortTitle: "6.5 Burns",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Burns</h3>

            <p>Burn injuries are among the most devastating traumatic injuries an EMT will encounter. The severity of a burn is determined by the depth of tissue destruction, the percentage of total body surface area (%TBSA) involved, the location of the burn, the patient's age, and the presence of inhalation injury or other comorbidities. Burns require systematic assessment of both local tissue damage and systemic effects.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Scene Safety First:</strong> Before approaching any burn patient, ensure the scene is safe. For electrical burns, confirm the power source is de-energized. For chemical burns, wear appropriate PPE. For fires, ensure the fire department has declared the scene safe. Do not become a patient yourself.
            </div>

            <h4>Burn Depth Classification</h4>
            <p>Burn depth is classified by the layers of skin and underlying tissue involved. Depth determines healing potential, pain level, and treatment approach:</p>
            <table>
                <thead>
                    <tr><th>Depth</th><th>Former Name</th><th>Tissue Involved</th><th>Appearance</th><th>Sensation</th><th>Healing</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Superficial</strong></td><td>First-degree</td><td>Epidermis only</td><td>Red, dry, no blistering</td><td>Painful, hypersensitive</td><td>3–6 days; no scarring</td></tr>
                    <tr><td><strong>Superficial Partial-Thickness</strong></td><td>Second-degree</td><td>Epidermis + upper dermis</td><td>Red, moist, blisters, weeping</td><td>Very painful (exposed nerve endings)</td><td>7–21 days; may scar</td></tr>
                    <tr><td><strong>Deep Partial-Thickness</strong></td><td>Second-degree</td><td>Epidermis + deep dermis</td><td>Red to pale white, dry, blisters may be absent</td><td>Painful to pressure only</td><td>>21 days; significant scarring; often requires grafting</td></tr>
                    <tr><td><strong>Full-Thickness</strong></td><td>Third-degree</td><td>All skin layers (epidermis + dermis + subcutaneous)</td><td>White, waxy, leathery, charred, or translucent</td><td>Insensate (nerve endings destroyed)</td><td>Requires skin grafting; does not heal spontaneously</td></tr>
                    <tr><td><strong>Fourth-Degree</strong></td><td>Fourth-degree</td><td>All skin + muscle, fascia, tendon, bone</td><td>Charred, blackened, possibly exposing bone</td><td>Insensate</td><td>Requires surgical debridement, amputation likely</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> A patient in severe pain from a burn is actually a positive sign — it indicates the burn is partial-thickness with intact nerve endings. A painless, full-thickness burn that is surrounded by a very painful partial-thickness burn is more dangerous but the patient may not complain of the worst area.
            </div>

            <h4>Burn Size Estimation — Rule of Nines</h4>
            <p>The <strong>Rule of Nines</strong> is a rapid method to estimate %TBSA in adults. Each body region represents 9% (or a multiple of 9%). <strong>Important pediatric differences:</strong> the head and neck account for a larger proportion (18% in infants vs 9% in adults), and the legs account for less (13.5% each in infants vs 18% each in adults).</p>
            <table>
                <thead>
                    <tr><th>Body Region</th><th>Adult (%)</th><th>Infant/Child (%)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Head and neck</td><td>9%</td><td>18%</td></tr>
                    <tr><td>Anterior trunk</td><td>18%</td><td>18%</td></tr>
                    <tr><td>Posterior trunk</td><td>18%</td><td>18%</td></tr>
                    <tr><td>Each arm</td><td>9%</td><td>9%</td></tr>
                    <tr><td>Each leg</td><td>18%</td><td>13.5%</td></tr>
                    <tr><td>Genitalia/perineum</td><td>1%</td><td>1%</td></tr>
                </tbody>
            </table>
            <p><strong>Lund-Browder Chart:</strong> A more precise method that accounts for age-related changes in body proportions. Preferred for pediatric burns and in-hospital use. The chart adjusts the head and lower extremity percentages by age.</p>
            <p><strong>Palmer Method:</strong> The patient's palm (including fingers) represents approximately <strong>1% TBSA</strong>. Useful for estimating scattered, irregularly shaped burns. The palm of the patient (not the rescuer) should be used.</p>

            <h4>Burn Severity Criteria — Critical vs Moderate vs Minor</h4>
            <p>NREMT requires EMTs to classify burn severity to guide transport decisions. Severity is based on depth, %TBSA, location, age, inhalation injury, and comorbidities:</p>
            <table>
                <thead>
                    <tr><th>Severity</th><th>Criteria (Any One)</th><th>Transport</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Critical (Major) Burn</strong></td><td>• Partial-thickness >25% TBSA (adult) or >20% (child)<br>• Full-thickness >10% TBSA<br>• Burns involving face, hands, feet, genitalia, perineum, or major joints<br>• Circumferential burns (any location)<br>• Inhalation injury<br>• Electrical burns (including lightning)<br>• Chemical burns with significant injury<br>• Burns complicated by major trauma or pre-existing conditions (diabetes, heart disease, COPD)</td><td>Trauma/burn center</td></tr>
                    <tr><td><strong>Moderate Burn</strong></td><td>• Partial-thickness 15–25% TBSA (adult) or 10–20% (child)<br>• Full-thickness 2–10% TBSA<br>• Burns not involving critical areas<br>• No inhalation injury</td><td>Burn center or ED capable of burn management</td></tr>
                    <tr><td><strong>Minor Burn</strong></td><td>• Partial-thickness <15% TBSA (adult) or <10% (child)<br>• Full-thickness <2% TBSA<br>• No critical area involvement<br>• No inhalation injury</td><td>May be treated as outpatient; transport if needed</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Burn Center Referral Criteria (American Burn Association):</strong> Partial-thickness burns >10% TBSA any age; full-thickness burns; burns to face, hands, feet, genitalia, perineum, or over joints; circumferential burns; electrical or chemical burns; inhalation injury; burns with concomitant trauma; burns in patients with pre-existing conditions that complicate management; burns in patients who require special psychosocial support (suspected abuse, neglect). These patients should be transported to a verified burn center.
            </div>

            <h4>Inhalation Injury Assessment</h4>
            <p>Inhalation injury significantly increases morbidity and mortality in burn patients. It should be suspected in any patient burned in an enclosed space. Key assessment findings:</p>
            <ul>
                <li><strong>Facial burns</strong> — burns to the face, especially around the nose and mouth</li>
                <li><strong>Singed nasal hairs</strong> — indicates the patient inhaled hot gases or flames</li>
                <li><strong>Carbonaceous sputum</strong> — black or gray-tinged material in the mouth or sputum</li>
                <li><strong>Hoarseness</strong> — vocal cord edema causing voice changes</li>
                <li><strong>Stridor</strong> — a high-pitched inspiratory sound indicating upper airway edema — this is a <strong>pre-arrest sign</strong> requiring immediate airway intervention</li>
                <li><strong>Dyspnea, tachypnea, hypoxia</strong> — may be delayed; develops as airway edema progresses</li>
                <li><strong>Carbon monoxide (CO) poisoning</strong> — always co-exists with smoke inhalation; see c5s5 for CO management</li>
            </ul>
            <p><strong>Management:</strong> High-flow oxygen via non-rebreather at 15 L/min. Prepare for airway compromise — airway edema can progress rapidly, making intubation progressively more difficult. Early definitive airway management (before edema peaks) is the standard of care for significant inhalation injury.</p>

            <h4>Circumferential Burns</h4>
            <p>Burns that encircle an extremity, the neck, or the chest are <strong>circumferential burns</strong>. As edema forms under the non-elastic eschar (dead burned tissue), pressure increases within the compartment, potentially compromising circulation (compartment syndrome) or ventilation (chest). Signs include:</p>
            <ul>
                <li><strong>Extremity:</strong> Loss of distal pulses, increased pain with passive motion, paresthesias, pallor, paralysis (late signs)</li>
                <li><strong>Chest:</strong> Difficulty ventilating, high airway pressures if intubated, inadequate chest rise</li>
            </ul>
            <p><strong>Escharotomy</strong> — a surgical incision through the eschar to relieve pressure — is the definitive treatment. This is performed by a physician. The EMT should recognize the need, document distal neurovascular status, and transport emergently.</p>

            <h4>Burn Management — General Principles</h4>
            <ol>
                <li><strong>Stop the burning process:</strong> Remove the patient from the source. Extinguish flames (stop, drop, and roll). Remove smoldering clothing and jewelry (which can act as a tourniquet as swelling develops).</li>
                <li><strong>ABCs first:</strong> Assess and manage airway, breathing, and circulation. Airway compromise from inhalation injury is the #1 killer in burn patients.</li>
                <li><strong>Dry sterile dressing:</strong> Cover burn wounds with clean, dry, sterile dressings. Do NOT apply ointments, butter, toothpaste, ice, or any home remedies.</li>
                <li><strong>Cooling:</strong> Small burns (<10% TBSA) can be cooled with cool (not cold) water for 10–15 minutes — this reduces pain and limits tissue damage. For large burns, avoid aggressive cooling — it causes hypothermia and shivering, which increases metabolic demand.</li>
                <li><strong>Pain management:</strong> Burn pain is severe. Manage per protocol (usually cold packs on small burns, analgesia if in scope).</li>
                <li><strong>Fluid resuscitation:</strong> EMTs do not initiate fluid resuscitation for burns, but recognition of burn shock is important. Large burns (>20% TBSA) cause massive fluid shifts (third-spacing) leading to hypovolemic shock.</li>
                <li><strong>Transport:</strong> To the appropriate facility — burn center for major burns.</li>
            </ol>

            <h4>Electrical Burns</h4>
            <p>Electrical burns are deceptive — the visible skin injury (entry and exit wounds) often underrepresents the extent of deep tissue damage. The current travels through nerves, blood vessels, and muscles (path of least resistance), causing damage along the entire path.</p>
            <ul>
                <li><strong>Entry wound:</strong> Usually small, well-circumscribed, charred — where current enters the body</li>
                <li><strong>Exit wound:</strong> Often larger and more explosive-looking — where current exits</li>
                <li><strong>Hidden damage:</strong> Deep tissue necrosis, muscle damage, compartment syndrome, vascular injury</li>
                <li><strong>Cardiac effects:</strong> Cardiac arrhythmias (V-fib, asystole, heart block) are common — ALL electrical burn patients require <strong>cardiac monitoring</strong> during transport. Even patients who initially appear well can develop delayed arrhythmias.</li>
                <li><strong>Rhabdomyolysis:</strong> Muscle breakdown releases myoglobin, which can cause acute renal failure. Look for dark (cola-colored) urine.</li>
                <li><strong>Fractures:</strong> Violent muscle contractions from the current can cause vertebral or long bone fractures. Immobilize as indicated.</li>
            </ul>
            <p><strong>Special concern:</strong> Low-voltage household current (110–120V AC) can still cause V-fib if the path crosses the heart (e.g., hand-to-hand or hand-to-foot). Lightning strikes can cause cardiac arrest without significant external injury.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The amount of tissue damage from electrical current is determined by: Voltage (higher = more damage), Amperage (current flow — the actual destructive force), Resistance (bone = high resistance → heat generation; nerves/vessels = low resistance → current pathway), Type of current (AC more dangerous than DC for cardiac effects), Duration of contact (longer = more damage), and Pathway (hand-to-hand crosses the heart).
            </div>

            <h4>Chemical Burns</h4>
            <p>Chemical burns continue to damage tissue until the chemical is removed or neutralized. Management depends on the type of chemical:</p>
            <ul>
                <li><strong>Dry chemicals (powders):</strong> Brush off <strong>dry</strong> before irrigating — mixing dry chemicals with water can create an exothermic reaction causing thermal burns. Use a brush or gloved hand to remove visible powder, then irrigate copiously.</li>
                <li><strong>Liquid chemicals:</strong> Irrigate copiously with running water for at least 20 minutes. Remove contaminated clothing. Protect yourself from exposure (appropriate PPE).</li>
                <li><strong>Hydrofluoric acid (HF):</strong> Found in rust removers, glass etching compounds, and industrial cleaners. HF causes severe, progressive pain and deep tissue necrosis. The fluoride ion binds calcium and magnesium, potentially causing life-threatening hypocalcemia. <strong>Treatment:</strong> Calcium gluconate gel applied topically or injected subcutaneously (by physician). Transport urgently — systemic toxicity can cause cardiac arrest from hypocalcemia.</li>
                <li><strong>Alkali burns (lye, drain cleaner):</strong> More dangerous than acid burns — alkalis cause liquefaction necrosis and penetrate deeper. Require prolonged irrigation (30–60+ minutes).</li>
                <li><strong>Eye exposures:</strong> Irrigate from the medial canthus outward, directing water away from the unaffected eye. Remove contact lenses if present. Continue irrigation during transport.</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> HCl and HF — be alert to the difference. HF (hydrofluoric acid) is a <strong>calcium scavenger</strong> — it binds calcium and magnesium, causing potentially fatal hypocalcemia. Patients may present with severe pain out of proportion to the visible injury, and may develop tetany, arrhythmias (prolonged QT, torsades), and cardiac arrest. Transport immediately with cardiac monitoring.
            </div>

            <h4>NREMT Focus — Burn Center Criteria Summary</h4>
            <p>You will be tested on when a burn patient should be transported to a specialized burn center. Memorize these criteria:</p>
            <ul>
                <li>Partial-thickness burns > <strong>10% TBSA</strong> (any age)</li>
                <li>Full-thickness burns of <strong>any size</strong> (any age)</li>
                <li>Burns involving <strong>face, hands, feet, genitalia, perineum, or over major joints</strong></li>
                <li><strong>Circumferential</strong> burns (any location)</li>
                <li><strong>Electrical</strong> burns (including lightning)</li>
                <li><strong>Chemical</strong> burns with significant injury</li>
                <li><strong>Inhalation injury</strong></li>
                <li>Burns with <strong>concomitant trauma</strong> (where burn poses the greater risk)</li>
                <li>Burns in patients with <strong>pre-existing conditions</strong> that complicate management (diabetes, CAD, COPD, pregnancy)</li>
                <li>Suspected <strong>abuse or neglect</strong> (especially in children or elderly)</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "Describe the appearance and sensation of superficial (first-degree), partial-thickness (second-degree), and full-thickness (third-degree) burns.", answer: "Superficial (epidermis only): red, dry, no blistering, painful. Partial-thickness (epidermis + dermis): red, moist, blisters, very painful. Full-thickness (all skin layers): white/waxy/leathery/charred, insensate (nerve endings destroyed).", category: "Burn Depth" },
            { question: "What is the Rule of Nines in an adult? How does it differ in an infant?", answer: "Adult: head/neck 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%. Infant: head/neck 18%, each leg 13.5% (larger head, smaller legs relative to body surface area).", category: "Burn Size Estimation" },
            { question: "What %TBSA does the patient's palm (including fingers) represent?", answer: "Approximately 1% TBSA. The Palmer Method is used for estimating scattered or irregularly shaped burns using the patient's own palm (not the rescuer's).", category: "Burn Size Estimation" },
            { question: "List the American Burn Association burn center referral criteria.", answer: "Partial-thickness >10% TBSA; full-thickness any size; burns to face/hands/feet/genitalia/perineum/joints; circumferential; electrical/chemical; inhalation injury; concomitant trauma; pre-existing complicating conditions; suspected abuse.", category: "Burn Severity" },
            { question: "What are the signs of inhalation injury in a burn patient?", answer: "Facial burns, singed nasal hairs, carbonaceous sputum, hoarseness, stridor (pre-arrest sign — impending airway obstruction), dyspnea, and hypoxia. High-flow O₂ and early definitive airway management.", category: "Inhalation Injury" },
            { question: "Why is a circumferential burn on an extremity dangerous?", answer: "As edema forms under the non-elastic eschar, pressure increases (compartment syndrome), compromising distal circulation. Loss of pulses, pain with passive motion, paresthesias indicate need for escharotomy.", category: "Circumferential Burns" },
            { question: "How should an EMT manage an electrical burn patient differently from a thermal burn patient?", answer: "Electrical burns have hidden deep tissue damage. ALL electrical burn patients require cardiac monitoring due to risk of arrhythmias. Assess for entry/exit wounds, rhabdomyolysis (cola urine), and fractures from violent muscle contractions.", category: "Electrical Burns" },
            { question: "How do you manage a dry chemical (powder) burn vs a liquid chemical burn?", answer: "Dry chemicals: BRUSH OFF first, then irrigate — mixing with water can cause exothermic reaction (thermal burn). Liquid chemicals: irrigate copiously for ≥20 minutes. Remove contaminated clothing. Use appropriate PPE.", category: "Chemical Burns" }
        ],
        quiz: [
            {
                q: "A 35-year-old male sustains partial-thickness burns to his entire anterior chest and abdomen (anterior trunk), his right arm, and the anterior surface of his right leg. Using the Rule of Nines, what is his estimated %TBSA?",
                options: [
                    "27%",
                    "36%",
                    "40.5%",
                    "45%"
                ],
                correct: 1
            },
            {
                q: "A 4-year-old child is pulled from a house fire with burns to the entire head/neck and anterior trunk. Which burn size estimation method is MOST appropriate, and why?",
                options: [
                    "Rule of Nines — it is the same for adults and children",
                    "Lund-Browder chart or age-adjusted Rule of Nines — children have proportionally larger head/neck surface area (18%) than adults (9%)",
                    "Palmer method — it is the most accurate for children",
                    "The Wallace Rule of Nines does not apply to children — use the patient's height and weight instead"
                ],
                correct: 1
            },
            {
                q: "[HARD] A construction worker is found after contacting a high-voltage power line. He has a small, charred wound on his right hand and a larger explosive wound on his left foot. He is awake and confused, with a pulse of 110, BP 102/68, and respirations 22. His ECG shows sinus tachycardia with frequent premature ventricular contractions (PVCs). What is the EMT's priority concern?",
                options: [
                    "The visible burns on the hand and foot need immediate cooling and dressing",
                    "This is an electrical burn with entry and exit wounds; there may be extensive deep tissue damage along the current path. The PVCs indicate cardiac irritability — the patient requires cardiac monitoring, IV access, and rapid transport to a burn center",
                    "The patient is confused from the shock — reorient him and allow him to refuse transport if he wishes",
                    "The foot wound is the priority — it is larger and more likely to become infected"
                ],
                correct: 1
            },
            {
                q: "A 28-year-old female with partial-thickness burns to both hands (palmar and dorsal surfaces) and the perineum from a chemical spill at work. Total estimated TBSA is 8%. What is the appropriate transport destination?",
                options: [
                    "Any emergency department — the burns are minor (<10% TBSA)",
                    "A burn center — burns to the hands and perineum meet burn center referral criteria regardless of %TBSA",
                    "Treat at the scene and discharge — the %TBSA is too small for hospital evaluation",
                    "Transport to a primary care clinic for wound care"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_6_5_1",
                scenario: "You are dispatched to a residential structure fire. Firefighters bring out a 52-year-old male who was found in the kitchen, unconscious, with burns on his face, arms, and anterior chest. The patient is awake now but confused. He has obvious facial burns, singed nasal hairs, and soot visible in his mouth. His voice is hoarse. Vital signs: BP 130/84, P 118, R 26, SpO₂ 91% on room air. Estimated burns: face (full-thickness on nose/cheeks), anterior chest (partial-thickness, ~9%), and both arms (partial-thickness, ~9% each) for an estimated 27% TBSA partial-thickness plus facial full-thickness.",
                question: "What is the most immediate threat to this patient's life, and what should the EMT prioritize?",
                options: [
                    {t: "Pain management — burn pain is excruciating; apply cold packs and administer analgesia before transport", f: "Incorrect — while pain is significant, this patient has clear signs of inhalation injury (facial burns, singed nasal hairs, carbonaceous sputum, hoarseness) and is hypoxic (91%). Airway edema can progress rapidly, making intubation impossible. Pain management is secondary to securing the airway."},
                    {t: "Inhalation injury with impending airway obstruction — the hoarseness, facial burns, carbonaceous sputum, and hypoxia indicate upper airway edema. Apply high-flow O₂ via NRB at 15 L/min, position sitting upright, prepare suction and airway equipment, expedite transport, and request ALS for advanced airway if needed", f: "Correct — airway compromise is the #1 cause of death in burn patients within the first hours. Hoarseness progressing to stridor signals critical narrowing of the upper airway. High-flow oxygen is essential, but the patient must be transported to a facility capable of definitive airway management before the airway closes completely. Early intubation (before edema peaks) is the standard of care for significant inhalation injury."}
                ],
                correct: 1,
                explanation: "Inhalation injury with airway edema is the most immediate life threat in this patient. The classic signs (facial burns, singed nasal hairs, carbonaceous sputum, hoarseness) are all present. Stridor would indicate a critical airway. Management priorities: high-flow oxygen (100%), sitting upright position, rapid transport to a burn center with airway management capability, and notification to the receiving facility that this patient has signs of inhalation injury. The window for successful intubation is narrow — as airway edema progresses, the anatomy distorts and intubation becomes extremely difficult or impossible. CO poisoning should also be suspected (common in enclosed space fires) — continue high-flow oxygen.",
                kpi: "Recognizes inhalation injury as the most immediate life threat in burn patients"
            },
            {
                id: "crit_6_5_2",
                scenario: "You are called to a maintenance shed where a 45-year-old male has spilled an unknown liquid on his left forearm and hand. He is in severe pain. On arrival, you see a clear liquid on his arm, and the skin underneath appears red, blistering, and mottled. He tells you he was using 'heavy duty rust remover' and accidentally splashed himself. He immediately rinsed with cold water for about 2 minutes but the pain has been getting worse, not better. He rates his pain as 10/10, and the affected area is becoming increasingly white and firm. His vital signs are: BP 128/74, P 104 (irregular), R 20, SpO₂ 98%.",
                question: "What type of chemical exposure is most likely, and what is the appropriate management?",
                options: [
                    {t: "This is likely an acid burn from the rust remover — continue irrigation with water, apply a dry sterile dressing, and transport. The irregular pulse is from pain and anxiety", f: "Incorrect — rust removers often contain hydrofluoric acid (HF), not just standard acids. HF burns are characterized by severe progressive pain, tissue whitening/firmness, and potential systemic toxicity (hypocalcemia). The irregular pulse is concerning for a hypocalcemia-induced arrhythmia (prolonged QT, torsades de pointes)."},
                    {t: "This is likely hydrofluoric acid (HF) burn — the severe progressive pain, white/firm tissue, and irregular pulse suggest hypocalcemia from systemic fluoride absorption. Continue copious irrigation, apply calcium gluconate gel if available (per protocol), initiate cardiac monitoring, and transport emergently. Be prepared for cardiac arrest from hypocalcemia", f: "Correct — HF exposure is a true emergency. The fluoride ion penetrates deeply, chelates calcium and magnesium, and can cause life-threatening hypocalcemia and hyperkalemia. Pain out of proportion to visible injury is classic. Cardiac monitoring is essential. Calcium gluconate gel neutralizes the fluoride ion topically. Transport to a burn center or ED capable of managing HF toxicity."}
                ],
                correct: 1,
                explanation: "Hydrofluoric acid (HF) is found in rust removers, aluminum brighteners, and glass etchants. Unlike strong mineral acids that cause immediate visible tissue destruction, HF can cause minimal surface injury but deep, ongoing tissue necrosis with severe pain. The fluoride ion is a calcium and magnesium chelator — systemic toxicity causes hypocalcemia (which can present with tetany, prolonged QT, and ventricular arrhythmias) and hyperkalemia. Management: remove contaminated clothing, copious irrigation (30+ minutes), topical calcium gluconate gel (massaged into the affected area with gloved hands), cardiac monitoring, and emergent transport. The estimated lethal dose from skin exposure is 2.5% TBSA of anhydrous HF. Do not delay transport for prolonged irrigation — irrigate en route.",
                kpi: "Recognizes hydrofluoric acid burn and the risk of systemic hypocalcemia with cardiac arrhythmia"
            },
            {
                id: "crit_6_5_3",
                scenario: "You respond to a garage for a 30-year-old male who was working on an electrical panel and received a shock. He was thrown backward approximately 4 feet and is now sitting on the floor, awake, and confused. He has a small, charred, depressed wound on the palmar surface of his right hand (entry) and a larger, irregular wound on the back of his left shoulder (exit). Vital signs: BP 106/66, P 124 (irregularly irregular), R 22, SpO₂ 97%. He complains of severe pain in his right arm and left shoulder. His urine, which he voided spontaneously, is dark brown (cola-colored). He has no other visible injuries but is unable to move his right arm due to pain.",
                question: "What are the THREE primary concerns in this electrical burn patient?",
                options: [
                    {t: "(1) The visible entry/exit wounds need cleaning and dressing; (2) the arm pain suggests a fracture; (3) the confusion is from hitting his head when thrown back — treat as concussion", f: "Incorrect — while these are considerations, the three MOST critical concerns in electrical burns are: cardiac arrhythmias (irregularly irregular pulse suggests new-onset atrial fibrillation or other arrhythmia), deep tissue damage (entry/exit wounds underestimate internal injury), and rhabdomyolysis (cola-colored urine = myoglobinuria = risk of renal failure). The arm injury may be compartment syndrome, not a simple fracture."},
                    {t: "(1) Cardiac monitoring and management of arrhythmia — the irregular pulse may be atrial fibrillation or other dysrhythmia from the current path through the heart; (2) Deep tissue injury assessment — the small entry wound belies massive internal damage; assess for compartment syndrome in affected extremities; (3) Rhabdomyolysis — cola-colored urine indicates myoglobin release from muscle necrosis; transport for IV fluids to prevent renal failure", f: "Correct — electrical burns are multisystem injuries. The heart is vulnerable to arrhythmias (V-fib, heart block, atrial fibrillation) that can develop or recur hours later. Deep muscle necrosis under small skin wounds requires surgical evaluation for compartment syndrome. Rhabdomyolysis with myoglobinuria causes acute renal failure if not treated aggressively with IV fluids. All three require burn center management."}
                ],
                correct: 1,
                explanation: "Electrical burn management involves three hidden killers: (1) Cardiac — the current disrupts the heart's electrical conduction system. Continuous ECG monitoring is mandatory even if the initial rhythm is normal, as delayed arrhythmias can occur. (2) Hidden tissue destruction — electrical current travels along the path of least resistance (nerves, blood vessels), causing deep tissue necrosis that far exceeds visible skin injury. Compartment syndrome is common. (3) Rhabdomyolysis — muscle breakdown releases myoglobin, potassium, and other intracellular contents. Myoglobin precipitates in the renal tubules causing acute kidney injury. The classic triad of electrical burn + dark urine + oliguria/anuria suggests significant rhabdomyolysis requiring aggressive IV fluid resuscitation at the hospital. Transport to a burn center with cardiac monitoring en route. Do not be deceived by small entry wounds.",
                kpi: "Prioritizes cardiac monitoring, deep tissue assessment, and rhabdomyolysis recognition in electrical burns"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────────────────
     * c6s6 – Head & Brain Injury (GCS)
     * ────────────────────────────────────────────────────────────────────────────── */
    {
        id: "c6s6",
        shortTitle: "6.6 Head & Brain Injury",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Head & Brain Injury</h3>

            <p>Head injuries range from minor scalp lacerations to catastrophic traumatic brain injury (TBI). The EMT's goal is to identify life-threatening intracranial pathology early, prevent secondary brain injury, and transport to the appropriate facility. Head injury is the leading cause of traumatic death and disability in patients under 45 years old.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Concept:</strong> The brain has no energy reserves. It depends entirely on continuous delivery of oxygen and glucose. Hypotension (SBP <90 mmHg) and hypoxia (SpO₂ <90%) are the two most important preventable causes of secondary brain injury. Even a brief episode of hypotension or hypoxia can permanently worsen neurological outcomes in a TBI patient.
            </div>

            <h4>Scalp Lacerations</h4>
            <p>The scalp is highly vascular — even small lacerations can bleed profusely. A scalp laceration can produce enough blood loss to cause hypovolemic shock in children. However, scalp lacerations are rarely life-threatening in isolation in adults. <strong>Management:</strong> Apply direct pressure with a sterile dressing. Do not remove impaled objects. Assess for underlying skull fracture (swelling, crepitus, deformity) before applying firm pressure.</p>

            <h4>Skull Fractures</h4>
            <table>
                <thead>
                    <tr><th>Type</th><th>Description</th><th>Key Signs</th><th>Concern</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Linear</strong></td><td>Simple crack in the skull bone — most common</td><td>May have localized swelling, tenderness</td><td>May or may not cause brain injury — underlying epidural hematoma possible if fracture crosses a vascular groove (middle meningeal artery)</td></tr>
                    <tr><td><strong>Depressed</strong></td><td>Bone fragment pushed inward toward the brain</td><td>Visible depression on palpation, possible focal neurological deficits</td><td>Direct brain compression; increased risk of underlying contusion and hemorrhage; may require surgical elevation</td></tr>
                    <tr><td><strong>Basilar</strong></td><td>Fracture of the skull base (floor of cranium)</td><td>Battle's sign (ecchymosis over mastoid process, usually delayed hours to days), Raccoon eyes (periorbital ecchymosis), CSF rhinorrhea (clear fluid from nose — check for halo sign), CSF otorrhea (clear fluid from ear), Hemotympanum (blood behind tympanic membrane)</td><td>High-energy mechanism; associated with significant brain injury; risk of meningitis from CSF leak; do NOT insert anything into the nose or ear</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl — Halo Sign:</strong> When clear fluid is draining from the nose or ear (suspected CSF), test it with a piece of gauze or a bed sheet. CSF separates from blood and forms a clear halo or ring around the blood stain. This is the "halo sign" and suggests a basilar skull fracture with CSF leak. If a basilar skull fracture is suspected, do NOT insert nasogastric tubes, nasal airways, or suction catheters through the nose — they can pass through the fracture into the brain.
            </div>

            <h4>Traumatic Brain Injury (TBI) Pathophysiology</h4>
            <p><strong>Primary brain injury</strong> occurs at the moment of impact — it is the direct mechanical damage to brain tissue (contusion, laceration, diffuse axonal injury). This is irreversible and cannot be treated by the EMT — it can only be prevented (through helmets, seat belts, fall prevention).</p>
            <p><strong>Secondary brain injury</strong> evolves over hours to days after the initial injury. It is caused by physiologic insults that worsen the primary injury:</p>
            <ul>
                <li><strong>Hypotension</strong> (SBP <90 mmHg) — reduced cerebral perfusion pressure leading to cerebral ischemia</li>
                <li><strong>Hypoxia</strong> (SpO₂ <90%) — reduced oxygen delivery to injured brain tissue</li>
                <li><strong>Hypercarbia</strong> (↑ PaCO₂) — causes cerebral vasodilation → increased intracranial pressure (ICP)</li>
                <li><strong>Hypocarbia</strong> (↓ PaCO₂ from hyperventilation) — causes cerebral vasoconstriction → reduced cerebral blood flow → ischemia</li>
                <li><strong>Hyperglycemia / Hypoglycemia</strong> — both worsen neurological outcomes</li>
                <li><strong>Hyperthermia</strong> — increases metabolic demand of injured brain tissue</li>
                <li><strong>Seizures</strong> — increase metabolic demand and ICP; can cause additional brain injury</li>
            </ul>
            <p><strong>The EMT's job: minimize secondary brain injury.</strong> Maintain SBP ≥90 mmHg, SpO₂ ≥94%, avoid hyperventilation (except for herniation), protect the airway, and provide rapid transport.</p>

            <h4>Increased Intracranial Pressure (ICP) & Cushing's Triad</h4>
            <p>The skull is a fixed-volume container (Monro-Kellie doctrine). As the brain swells (cerebral edema), blood accumulates (hematoma), or CSF accumulates, pressure inside the skull increases. When compensatory mechanisms are exhausted, ICP rises, reducing cerebral perfusion pressure (CPP = MAP − ICP). <strong>Cushing's triad</strong> is the body's attempt to maintain cerebral perfusion:</p>
            <ol>
                <li><strong>Hypertension</strong> (with widening pulse pressure) — the body increases blood pressure to push blood into the brain against the elevated ICP</li>
                <li><strong>Bradycardia</strong> — reflexive slowing of the heart rate in response to hypertension</li>
                <li><strong>Irregular respirations</strong> — patterns from Cheyne-Stokes to ataxic/Biot breathing as the brainstem is compressed</li>
            </ol>
            <p><strong>Cushing's triad is a LATE sign of severe intracranial hypertension and impending brain herniation.</strong> Once it appears, the patient is minutes away from catastrophic deterioration. This is a neurosurgical emergency requiring immediate intervention.</p>

            <h4>Cerebral Herniation</h4>
            <p>When ICP exceeds the brain's ability to compensate, brain tissue shifts from one compartment to another, compressing vital brainstem structures. Signs of herniation include:</p>
            <ul>
                <li><strong>Cushing's triad</strong> (HTN + bradycardia + irregular respirations)</li>
                <li><strong>Unilateral fixed and dilated pupil</strong> (blown pupil) — compression of cranial nerve III (oculomotor) by the uncus of the temporal lobe herniating over the tentorium cerebelli. <strong>This is a lateralizing sign indicating the SIDE of the lesion.</strong></li>
                <li><strong>Posturing:</strong> Decorticate (flexion of arms, extension of legs — indicates cortical/spinal tract injury above the brainstem) then Decerebrate (extension of all four extremities — indicates deeper brainstem injury, worse prognosis)</li>
                <li><strong>Decreased level of consciousness</strong> — progressive decline in GCS</li>
                <li><strong>Respiratory arrest</strong> — from brainstem compression</li>
            </ul>
            <p><strong>Management:</strong> If herniation is suspected, the EMT may need to <strong>hyperventilate</strong> at a rate of 20–25 breaths per minute (adult) to reduce PaCO₂, which causes cerebral vasoconstriction and reduces ICP. This is a <strong>BRIDGE therapy</strong> — prolonged hyperventilation can cause cerebral ischemia. Only use it when there are clear signs of herniation (unilateral blown pupil, posturing, Cushing's triad).</p>

            <h4>Glasgow Coma Scale (GCS) Scoring</h4>
            <p>The GCS is a standardized, objective measure of a patient's level of consciousness. It is used to assess severity of brain injury and track changes over time. <strong>Score range: 3 (worst) to 15 (best).</strong></p>
            <table>
                <thead>
                    <tr><th>Component</th><th>Response</th><th>Score</th></tr>
                </thead>
                <tbody>
                    <tr><td rowspan="4"><strong>Eye Opening (E)</strong></td><td>Spontaneous — eyes open without stimulation</td><td>4</td></tr>
                    <tr><td>To voice — opens eyes when spoken to (loud or normal voice)</td><td>3</td></tr>
                    <tr><td>To pain — opens eyes only with painful stimulus (nail bed pressure, trapezius squeeze)</td><td>2</td></tr>
                    <tr><td>None — does not open eyes with any stimulus</td><td>1</td></tr>
                    <tr><td rowspan="5"><strong>Verbal Response (V)</strong></td><td>Oriented — knows who/where/when, able to carry a conversation</td><td>5</td></tr>
                    <tr><td>Confused — converses but disoriented; answers questions inaccurately</td><td>4</td></tr>
                    <tr><td>Inappropriate words — random words, no conversational exchange</td><td>3</td></tr>
                    <tr><td>Incomprehensible sounds — moaning, grunting, no recognizable words</td><td>2</td></tr>
                    <tr><td>None — no vocalization</td><td>1</td></tr>
                    <tr><td rowspan="6"><strong>Motor Response (M)</strong></td><td>Obeys commands — follows instructions ("hold up two fingers," "squeeze my hand")</td><td>6</td></tr>
                    <tr><td>Localizes pain — reaches toward painful stimulus in an attempt to remove it</td><td>5</td></tr>
                    <tr><td>Withdraws from pain — pulls away from painful stimulus (normal withdrawal reflex)</td><td>4</td></tr>
                    <tr><td>Decorticate (abnormal flexion) — flexes arms at elbows, clenches fists, extends legs</td><td>3</td></tr>
                    <tr><td>Decerebrate (abnormal extension) — extends all four extremities, arches back (opisthotonos)</td><td>2</td></tr>
                    <tr><td>None — no motor response to pain (flaccid)</td><td>1</td></tr>
                </tbody>
            </table>
            <p><strong>GCS Scoring by Component:</strong> Write as E___ V___ M___ = total (e.g., E3 V4 M5 = GCS 12).</p>

            <h4>GCS Severity Categories</h4>
            <table>
                <thead>
                    <tr><th>GCS Score</th><th>Severity</th><th>Airway Management</th><th>Transport</th></tr>
                </thead>
                <tbody>
                    <tr><td>13–15</td><td><strong>Mild</strong> TBI (concussion)</td><td>No definitive airway needed unless deteriorating</td><td>Transport for evaluation; CT may be indicated</td></tr>
                    <tr><td>9–12</td><td><strong>Moderate</strong> TBI</td><td>May need airway support; close monitoring</td><td>Transport to trauma center; CT and neurosurgical evaluation</td></tr>
                    <tr><td>3–8</td><td><strong>Severe</strong> TBI</td><td><strong>GCS ≤8 = intubate</strong> — the patient cannot protect their airway; consider definitive airway management</td><td>Transport to Level I or II trauma center with neurosurgery capability</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Rule:</strong> GCS ≤ 8 = the patient cannot protect their airway. Establish a definitive airway (endotracheal intubation if in scope, or aggressive BVM ventilation with airway adjuncts) and transport to a trauma center with neurosurgical capability. The GCS motor score is the strongest predictor of outcomes — a motor score of ≤5 (not obeying commands) is significant.
            </div>

            <h4>Intracranial Hemorrhage Types — Comparison</h4>
            <p>Differentiating intracranial hemorrhage types is critical for appropriate neurosurgical management:</p>
            <table>
                <thead>
                    <tr><th>Type</th><th>Location</th><th>Vessel</th><th>Blood Source</th><th>Key Feature</th><th>CT Appearance</th><th>Typical Presentation</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Epidural Hematoma (EDH)</strong></td><td>Between skull and dura</td><td>Arterial (middle meningeal artery)</td><td>High-pressure arterial bleed</td><td><strong>Lucid interval</strong> — patient is conscious after injury, then rapidly deteriorates as the hematoma expands</td><td>Lentiform (convex, lens-shaped)</td><td>Headache, vomiting, then rapid GCS decline, Cushing's triad, blown pupil on same side as bleed</td></tr>
                    <tr><td><strong>Subdural Hematoma (SDH)</strong></td><td>Between dura and arachnoid (beneath dura)</td><td>Venous (bridging veins)</td><td>Low-pressure venous bleed</td><td><strong>Slow onset</strong> — symptoms evolve over hours to days (acute) or weeks (chronic SDH in elderly)</td><td>Crescent-shaped along brain surface</td><td>More gradual deterioration; fluctuating consciousness; common in elderly, alcoholics, anticoagulated patients</td></tr>
                    <tr><td><strong>Subarachnoid Hemorrhage (SAH)</strong></td><td>Subarachnoid space (between arachnoid and pia)</td><td>Arterial (circle of Willis aneurysm)</td><td>Arterial bleed into CSF</td><td><strong>Thunderclap headache</strong> — worst headache of life, sudden onset</td><td>Sulcal hyperdensity (blood fills cortical sulci)</td><td>Sudden severe headache, neck stiffness, photophobia, vomiting, possible loss of consciousness</td></tr>
                    <tr><td><strong>Intracerebral Hemorrhage (ICH)</strong></td><td>Within brain parenchyma</td><td>Small intraparenchymal vessels</td><td>Bleeding into brain tissue itself</td><td>Associated with hypertension and trauma</td><td>Round/irregular dense mass within brain</td><td>Sudden focal neurological deficit; may mimic ischemic stroke but with more rapid progression</td></tr>
                </tbody>
            </table>

            <h4>Seizure After Head Injury</h4>
            <p>Post-traumatic seizures (PTS) can occur immediately after head injury or hours/days later. Immediate post-traumatic seizures (within 24 hours) do not necessarily mean the patient has epilepsy but require investigation for the underlying cause of the seizure (expanding bleed, increasing ICP). Management: protect the airway, administer oxygen, check blood glucose, and transport. Status epilepticus after head injury is a neurosurgical emergency — the seizure increases ICP and metabolic demand, worsening secondary brain injury.</p>

            <h4>NREMT Focus — ABCDE Approach to Head Injury</h4>
            <p>The NREMT requires a systematic approach to the head-injured patient:</p>
            <ol>
                <li><strong>A</strong> — Airway with cervical spine protection (assume spine injury in any significant head trauma)</li>
                <li><strong>B</strong> — Breathing (maintain SpO₂ ≥94%, assist ventilations if needed)</li>
                <li><strong>C</strong> — Circulation (maintain SBP ≥90 mmHg; treat hypotension aggressively)</li>
                <li><strong>D</strong> — Disability (GCS, pupil exam, motor assessment, glucose check)</li>
                <li><strong>E</strong> — Exposure (full body exam; assess for other injuries that may contribute to hypotension)</li>
            </ol>
            <p><strong style="color:var(--danger);">Key NREMT point:</strong> In head injury, hypotension is NEVER from the head injury alone (except in infants where the scalp can hold significant blood). If a head-injured patient is hypotensive, look for a source of bleeding elsewhere (chest, abdomen, pelvis, long bones) or consider spinal shock.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The brain is the one organ you CANNOT rest, repair, or replace. Everything the EMT does — or fails to do — in the first hour after TBI has a direct impact on the patient's long-term neurological outcome. Every episode of hypotension and hypoxia is a permanent insult to an already-injured brain.
            </div>
        </div>`,
        flashcards: [
            { question: "What are the three types of skull fractures and the key signs of a basilar skull fracture?", answer: "Linear (simple crack), Depressed (bone pushed inward), Basilar (skull base). Basilar signs: Battle's sign (mastoid ecchymosis), raccoon eyes (periorbital ecchymosis), CSF rhinorrhea/otorrhea (halo sign), hemotympanum.", category: "Skull Fractures" },
            { question: "What is the difference between primary and secondary brain injury?", answer: "Primary: direct mechanical damage at the moment of impact (irreversible). Secondary: evolving damage from hypotension, hypoxia, increased ICP, seizures, etc. — the EMT can PREVENT this.", category: "TBI Pathophysiology" },
            { question: "What is Cushing's triad and what does it indicate?", answer: "Hypertension (widening pulse pressure) + Bradycardia + Irregular respirations. It is a LATE sign of severely increased ICP and impending brain herniation — a neurosurgical emergency.", category: "Increased ICP" },
            { question: "How do you calculate and interpret the GCS score? What is the severe TBI threshold?", answer: "GCS = Eye (1-4) + Verbal (1-5) + Motor (1-6) = 3 to 15. Severe TBI = GCS 3-8 (cannot protect airway — intubate). Moderate = 9-12. Mild = 13-15.", category: "GCS Scoring" },
            { question: "Describe the 'lucid interval' and what intracranial hemorrhage type it is associated with.", answer: "A period of normal consciousness after head injury followed by rapid deterioration. Classic for epidural hematoma (arterial bleed from middle meningeal artery). The patient seems fine initially, then crashes as the hematoma expands.", category: "Intracranial Hemorrhage" },
            { question: "How does an epidural hematoma differ from a subdural hematoma on CT and in presentation?", answer: "Epidural: lentiform (lens-shaped), arterial, rapid deterioration ± lucid interval. Subdural: crescent-shaped, venous, slower onset (hours-days). SDH is more common in elderly, alcoholics, and anticoagulated patients.", category: "Intracranial Hemorrhage" },
            { question: "What are the signs of brain herniation?", answer: "Cushing's triad, unilateral fixed/dilated pupil (blown pupil — indicates the SIDE of the lesion), posturing (decorticate → decerebrate, worsening), decreasing GCS, and respiratory arrest.", category: "Herniation" },
            { question: "What is the proper ventilation strategy for a severe TBI patient with vs without signs of herniation?", answer: "Without herniation: target normal ventilation (10-12 breaths/min, ETCO₂ 35-40 mmHg). With herniation signs: brief HYPERVENTILATION (20-25 breaths/min) to reduce PaCO₂ → cerebral vasoconstriction → ↓ ICP. This is a BRIDGE therapy only.", category: "Ventilation Management" }
        ],
        quiz: [
            {
                q: "A 24-year-old male is found after a high-speed motorcycle crash. He is intubated by EMS and transported. His GCS in the field was E1 V1 M2 = 4. What is the correct interpretation and what patient care priority does this dictate?",
                options: [
                    "GCS 4 indicates moderate TBI — transport to any ED for evaluation",
                    "GCS 4 indicates severe TBI with abnormal extension (decerebrate posturing) and no eye opening or verbal response. This patient requires transport to a Level I trauma center with neurosurgery capability. Aggressive prevention of secondary brain injury is critical",
                    "GCS 4 is consistent with a concussion — observe and discharge",
                    "GCS 4 indicates the patient is sedated and cannot be accurately assessed"
                ],
                correct: 1
            },
            {
                q: "A 55-year-old male falls from a ladder and strikes his head on concrete. He is initially unconscious for 2 minutes, then wakes up and is conversant. His family brings him to the clinic where you are stationed. While you are assessing him, he becomes progressively drowsy, vomits, and his right pupil becomes dilated and fixed. What is the most likely diagnosis?",
                options: [
                    "Concussion with post-concussive syndrome",
                    "Epidural hematoma — the lucid interval followed by rapid deterioration with unilateral blown pupil is classic. This is a neurosurgical emergency requiring immediate transport",
                    "Subdural hematoma from the fall — this is a slow, chronic process",
                    "Migraine headache triggered by the fall"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 72-year-old female on warfarin for atrial fibrillation slips and falls in her bathroom, hitting her head on the sink. She did not lose consciousness and is alert and oriented. Her son calls 9-1-1 because she seems 'a little confused, which is not like her.' Her GCS is 14 (E4 V4 M6). What is the EMT's management?",
                options: [
                    "The patient appears well — allow refusal of transport if she wishes since she is awake and talking",
                    "This is likely a minor head injury — no transport needed; have her son watch for symptoms overnight",
                    "Any head trauma in an anticoagulated patient is high-risk for delayed intracranial hemorrhage. The fluctuating confusion is concerning. Transport for CT evaluation even with a GCS of 14. Do not delay",
                    "The confusion is from pre-existing dementia — the fall was unrelated to her head injury"
                ],
                correct: 2
            },
            {
                q: "A patient with head trauma has a GCS of 6. He has stable vital signs with no signs of herniation. What is the correct respiratory rate for BVM ventilation?",
                options: [
                    "20–25 breaths per minute to reduce ICP by hyperventilation",
                    "4–6 breaths per minute to minimize the risk of aspiration",
                    "10–12 breaths per minute to maintain normal PaCO₂ and avoid cerebral vasoconstriction from hyperventilation",
                    "Breath every 5 seconds regardless of rate as long as SpO₂ is normal"
                ],
                correct: 2
            }
        ],
        critical: [
            {
                id: "crit_6_6_1",
                scenario: "You are dispatched to a construction site for a 34-year-old male who fell approximately 20 feet from scaffolding, landing on his back. He is supine on the ground, awake, and confused. Coworkers state he was wearing a hard hat but it fell off during the fall. Initial vital signs: BP 108/72, P 104, R 22, SpO₂ 95% on room air. GCS is 12 (E3 V4 M5). During your assessment, he becomes progressively less responsive over 10 minutes. His BP rises to 168/82, his pulse drops to 56, and his respirations become irregular at 8/min. His right pupil is now 6 mm and fixed, while his left pupil is 3 mm and reactive. He is now localizing pain on the left but extending his right arm and leg when you apply painful stimulus.",
                question: "What is happening to this patient and what immediate interventions are indicated?",
                options: [
                    {t: "The patient is having a seizure — protect the airway, check blood glucose, and transport", f: "Incorrect — the progressive GCS decline, hypertension with bradycardia (Cushing's triad), irregular respirations, unilateral fixed/dilated pupil, and asymmetric posturing are classic signs of increased ICP with brain herniation, not seizure. Seizure would involve rhythmic jerking movements."},
                    {t: "This patient has signs of transtentorial brain herniation — Cushing's triad (HTN, bradycardia, irregular respirations), unilateral blown pupil (right side — indicates right-sided mass), and asymmetric posturing (right-sided extension = left brain injury). Immediate interventions: maintain airway (intubate if able), hyperventilate at 20-25/min as a BRIDGE therapy to reduce ICP, elevate head of stretcher 30°, and transport emergently to a trauma center with neurosurgery", f: "Correct — the patient is herniating. The right blown pupil localizes the lesion to the right side of the brain (CN III compression). The right-sided posturing (extension) indicates injury to the left side of the brain (motor tracts cross). Cushing's triad confirms severe intracranial hypertension. Hyperventilation should be used ONLY as a bridge to surgery — it reduces PaCO₂, causing cerebral vasoconstriction and transient ICP reduction, but prolonged use causes cerebral ischemia."}
                ],
                correct: 1,
                explanation: "This patient has a life-threatening intracranial mass lesion causing transtentorial herniation. The progression from GCS 12 to signs of herniation over minutes is classic for an expanding epidural hematoma (arterial bleed with rapid deterioration). The blown pupil on the right indicates the right CN III is compressed — this is the SIDE of the lesion. The contralateral (left-sided) motor findings confirm the lesion is on the right side. Immediate management: secure the airway (GCS is declining and the patient cannot protect it), brief hyperventilation (20-25/min) as a bridge to surgery, elevate the head of the stretcher 30 degrees (if not in spinal shock), and maximum urgency transport to a neurosurgical center. The goal is to get the patient to a surgeon who can evacuate the hematoma and relieve the pressure. Every minute of herniation causes irreversible brainstem damage.",
                kpi: "Recognizes progressive brain herniation by Cushing's triad, unilateral blown pupil, and asymmetric posturing"
            },
            {
                id: "crit_6_6_2",
                scenario: "You are transporting a 28-year-old male restrained driver involved in a high-speed T-bone collision. He was initially alert and oriented at the scene, GCS 15, with apparent isolated right leg fracture. En route to the trauma center, his GCS drops from 15 to 10 (E3 V3 M4) over approximately 8 minutes. His BP is 84/56, P 124, R 24. He has no external signs of head injury. The leg fracture was splinted and is not actively bleeding. His SpO₂ is 94% on a non-rebreather. His skin is pale, cool, and diaphoretic. His pupils are 3 mm and equal bilaterally.",
                question: "This patient has an altered mental status and hypotension after blunt trauma. What is the differential diagnosis and the correct management priority?",
                options: [
                    {t: "The GCS decline is from the head injury he must have sustained in the crash. Treat for TBI — hyperventilate to reduce ICP, elevate the head, and continue transport", f: "Incorrect — while TBI could cause GCS decline, this patient is HYPOTENSIVE (84/56). TBI alone does NOT cause hypotension (except in infants or terminal herniation). Hypotension + altered mental status after trauma = hemorrhagic shock until proven otherwise. The declining GCS is likely from CEREBRAL HYPOPERFUSION due to blood loss, not from a primary brain injury. The patient needs fluid resuscitation and bleeding control, not hyperventilation."},
                    {t: "Hypotension (84/56) in a trauma patient is NEVER from head injury alone. The declining GCS is likely due to cerebral hypoperfusion from hemorrhagic shock — the brain is not getting enough blood flow. Priority: identify the source of bleeding (chest, abdomen, pelvis, retroperitoneum), treat for shock (high-flow O₂, IV access, fluid per protocol, pelvic binder if indicated), and expedite transport to a trauma center. Do NOT hyperventilate — the brain needs oxygen and perfusion, not vasoconstriction", f: "Correct — this is a classic EMT trap: a patient with both head injury and hemorrhagic shock. The hypotension MUST be assumed to be from bleeding until proven otherwise. The brain is suffering from low perfusion pressure (CPP = MAP − ICP). If MAP is low, CPP is low even if ICP is normal. The treatment is to restore perfusion, not reduce ICP. Hyperventilation would further reduce cerebral blood flow and worsen the brain injury. Look for chest, abdominal, pelvic, or long-bone sources of blood loss."}
                ],
                correct: 1,
                explanation: "This is a critical concept for NREMT: Head injury alone does not cause hypotension (except in infants with significant scalp bleeding, or in the terminal stages of brainstem failure). Hypotension in a multi-trauma patient with altered mental status is HEMORRHAGIC SHOCK until proven otherwise. The altered mental status is from inadequate cerebral perfusion (the brain is not receiving enough oxygenated blood), not from intracranial pathology. Management: (1) Identify and control external bleeding, (2) Maintain SBP ≥90 mmHg with fluid per protocol, (3) Apply a pelvic binder if pelvic fracture is suspected (common in T-bone MVCs), (4) High-flow oxygen, (5) Rapid transport to a trauma center. Do NOT hyperventilate — this patient needs cerebral PERFUSION, not vasoconstriction. The GCS may improve once blood pressure is restored.",
                kpi: "Recognizes that hypotension in trauma is hemorrhagic shock until proven otherwise — even with altered mental status"
            },
            {
                id: "crit_6_6_3",
                scenario: "You are called to a high school football field for a 17-year-old male who collided with another player during a tackle. He was helmet-to-helmet and was down on the field for about 30 seconds before getting up with assistance. He is now sitting on the sideline with trainers. He is confused, asking repetitive questions ('What happened? Did we score?'), and cannot remember the play. His GCS is 14 (E4 V4 M6). He has no focal neurological deficits, pupils are equal and reactive, and vital signs are normal. His helmet is still on. The coach says he wants to 'walk it off and go back in the game.'",
                question: "How should the EMT manage this athlete with a suspected concussion?",
                options: [
                    {t: "He looks fine — no loss of consciousness, normal vitals, and the confusion is improving. Allow him to return to play with trainer observation", f: "Incorrect — any athlete with suspected concussion should be REMOVED FROM PLAY immediately. Second-impact syndrome (catastrophic brain swelling from a second concussion before the first has resolved) can be fatal. A GCS of 14 with confusion and amnesia is a concussion that requires medical evaluation. The helmet must remain on until cleared for removal by trained personnel."},
                    {t: "This athlete has a suspected concussion: confusion, retrograde amnesia (no memory of the play), and repetitive questioning. Remove from play IMMEDIATELY — do NOT allow return to play. Perform a focused neurological exam (pupils, motor function, GCS, balance), monitor for deterioration, and transport for medical evaluation. Keep the helmet in place; do not remove it unless absolutely necessary for airway management. Follow your specific sport concussion protocol", f: "Correct — any athlete with signs of concussion must be removed from play and evaluated by a physician before returning. Second-impact syndrome is a rare but catastrophic complication where a second head injury before the first has resolved causes massive cerebral edema and herniation. The helmet should remain on — removing it improperly can worsen an undiagnosed cervical spine injury. Transport for medical clearance and neurocognitive testing."}
                ],
                correct: 1,
                explanation: "Concussion management has evolved significantly. Key points: (1) Any suspected concussion = remove from play — 'when in doubt, sit them out.' (2) Second-impact syndrome can occur if an athlete returns to play before the first concussion has resolved — it is often fatal. (3) Helmet removal: leave in place unless airway access is needed. A player with a suspected concussion plus neck pain or tenderness requires full spinal motion restriction with the helmet on. Helmet removal requires training (face mask removal is preferred over full helmet removal). (4) Serial GCS assessments are essential — even 'mild' concussions can deteriorate. (5) Transport for medical evaluation — no same-day return to play. (6) Provide a concussion education sheet to the responsible adult. Documentation of the incident and assessment is critical for medicolegal purposes.",
                kpi: "Applies current concussion management guidelines — remove from play, no same-day return, helmet management, and transport for evaluation"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────────────────
     * c6s7 – Spine & Motion Restriction
     * ────────────────────────────────────────────────────────────────────────────── */
    {
        id: "c6s7",
        shortTitle: "6.7 Spine & Motion Restriction",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Spine & Motion Restriction</h3>

            <p>Spinal injuries are among the most devastating survivable injuries. The goals of spinal motion restriction (SMR) are to prevent movement of an unstable spinal column that could cause or worsen a spinal cord injury. Current evidence has shifted from universal spinal immobilization to <strong>selective spinal immobilization</strong> based on mechanism, patient assessment, and specific criteria.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Shift in Practice:</strong> Modern guidelines emphasize that not every trauma patient needs a cervical collar and long backboard. Unnecessary spinal immobilization causes pain, anxiety, pressure sores, respiratory compromise, and can delay transport. Use validated criteria (NEXUS or Canadian C-Spine Rule) to determine who needs SMR.
            </div>

            <h4>Mechanisms of Spinal Injury</h4>
            <p>The spine can be injured by forces applied in any plane. Understanding the mechanism helps predict injury patterns:</p>
            <ul>
                <li><strong>Axial loading:</strong> Force applied along the vertical axis of the spine (e.g., diving into shallow water, falling and landing on feet/buttocks, a heavy object striking the top of the head). Common cause of <strong>burst fractures</strong> of the cervical and lumbar spine.</li>
                <li><strong>Flexion:</strong> Forward bending of the spine (e.g., head-on MVC, rear-end collision whiplash). Can cause <strong>wedge/compression fractures</strong> of the vertebral body and <strong>teardrop fractures</strong> of the cervical spine.</li>
                <li><strong>Extension:</strong> Backward bending of the spine (e.g., rear-end MVC, fall striking the face/chin). Can cause <strong>hangman's fracture</strong> (C2 pars interarticularis), often from hyperextension.</li>
                <li><strong>Rotation:</strong> Twisting of the spine (e.g., side-impact MVC, fall with rotation). Associated with <strong>fracture-dislocations</strong> which are highly unstable.</li>
                <li><strong>Distraction:</strong> Stretching of the spinal column (e.g., hanging, lap belt-only MVC where the torso flexes forward over the belt). Can cause <strong>Chance fractures</strong> (horizontal splitting of the vertebra) — commonly seen in pediatric lap-belt injuries.</li>
            </ul>

            <h4>Spinal Anatomy</h4>
            <p>The vertebral column consists of <strong>33 vertebrae</strong> divided into five sections:</p>
            <ul>
                <li><strong>Cervical (C1–C7):</strong> C1 (atlas) supports the skull; C2 (axis) has the odontoid process (dens) that allows head rotation. The most mobile and most commonly injured section. C3–C7 are typical cervical vertebrae.</li>
                <li><strong>Thoracic (T1–T12):</strong> Articulate with ribs. Less mobile due to the rib cage — requires high force to injure. Thoracic spine injuries often involve significant associated chest trauma.</li>
                <li><strong>Lumbar (L1–L5):</strong> Bear the most weight. Injuries occur from high-energy mechanisms (falls, MVCs). Lumbar fractures can be associated with retroperitoneal injuries.</li>
                <li><strong>Sacral (S1–S5, fused):</strong> Form the posterior pelvis. Sacral fractures are associated with pelvic ring injuries.</li>
                <li><strong>Coccygeal (Co1–Co4, fused):</strong> Tailbone — injury causes pain but rarely neurologic deficits.</li>
            </ul>
            <p>The <strong>spinal cord</strong> runs through the spinal canal and ends around L1–L2 (conus medullaris). Below L2, the nerve roots form the <strong>cauda equina</strong> (horsetail). The cord is surrounded by meninges (dura, arachnoid, pia) and bathed in CSF.</p>

            <h4>Complete vs Incomplete Spinal Cord Syndromes</h4>
            <table>
                <thead>
                    <tr><th>Syndrome</th><th>Description</th><th>Mechanism</th><th>Key Findings</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Complete Cord Transection</strong></td><td>Total loss of motor and sensory function below the level of injury</td><td>Severe compression, transection, or ischemia of the entire cord</td><td>Paralysis (quadriplegia or paraplegia), loss of all sensation below the level (anesthesia), loss of bowel/bladder control, loss of reflexes below level (initially areflexic — spinal shock)</td></tr>
                    <tr><td><strong>Central Cord Syndrome</strong></td><td>Injury to the center of the cord — most common incomplete syndrome</td><td>Hyperextension injury in patients with pre-existing spinal stenosis (cervical spondylosis); common in elderly falls</td><td>Motor weakness greater in UPPER extremities than lower extremities ('central cord = upper extremities affected more'); variable sensory loss; may retain some sacral function</td></tr>
                    <tr><td><strong>Anterior Cord Syndrome</strong></td><td>Injury to the anterior 2/3 of the cord (spinothalamic and corticospinal tracts)</td><td>Flexion injury with cord compression, or ischemia from anterior spinal artery occlusion</td><td>Loss of motor function (corticospinal tracts) AND loss of pain/temperature sensation (spinothalamic tracts) BELOW the level of injury. PRESERVED proprioception/vibration (dorsal columns are spared)</td></tr>
                    <tr><td><strong>Brown-Séquard Syndrome</strong></td><td>Hemisection of one side of the cord</td><td>Penetrating trauma, tumor, disc herniation</td><td><strong>Ipsilateral:</strong> loss of motor function (corticospinal tract) and vibration/proprioception (dorsal columns) at/ below the level. <strong>Contralateral:</strong> loss of pain/temperature sensation (spinothalamic tract) ~2 segments below the lesion. This is a <strong>dissociated sensory loss</strong></td></tr>
                </tbody>
            </table>

            <h4>Spinal Shock vs Neurogenic Shock</h4>
            <p>These are two DIFFERENT conditions that are frequently confused. Know the difference for NREMT:</p>
            <table>
                <thead>
                    <tr><th>Feature</th><th>Spinal Shock</th><th>Neurogenic Shock</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Definition</strong></td><td>Temporary loss of all spinal cord function below the level of injury — a neurological phenomenon, not circulatory</td><td>Distributive shock caused by loss of sympathetic tone after spinal cord injury — a CARDIOVASCULAR phenomenon</td></tr>
                    <tr><td><strong>Duration</strong></td><td>Days to weeks (until spinal reflexes return)</td><td>Hours to days (resolves as spinal shock resolves or with treatment)</td></tr>
                    <tr><td><strong>Motor function</strong></td><td>Flaccid paralysis below injury level</td><td>Flaccid paralysis below injury level (same as spinal shock — they often coexist initially)</td></tr>
                    <tr><td><strong>Sensation</strong></td><td>Loss of all sensation below injury</td><td>Loss of sensation below injury</td></tr>
                    <tr><td><strong>Reflexes</strong></td><td>Absent (areflexia) — areflexia defines spinal shock</td><td>Variable</td></tr>
                    <tr><td><strong>Heart rate</strong></td><td>Normal (if no neurogenic shock)</td><td><strong>Bradycardia</strong> (unopposed vagal tone — loss of sympathetic cardiac accelerator fibers T1–T4)</td></tr>
                    <tr><td><strong>Blood pressure</strong></td><td>Normal (if no neurogenic shock)</td><td><strong>Hypotension</strong> (loss of vascular tone — massive vasodilation)</td></tr>
                    <tr><td><strong>Skin</strong></td><td>Normal</td><td><strong>Warm, dry, pink</strong> (vasodilation — blood pools in periphery, does not reach vital organs)</td></tr>
                    <tr><td><strong>Differentiation from hypovolemic shock</strong></td><td>N/A — it is not a shock state</td><td>In hypovolemic shock: patient is tachycardic, cool/clammy, pale. In neurogenic shock: patient is BRADYCARDIC, warm/dry/pink. This is the key distinguishing feature</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept — Hypovolemic vs Neurogenic Shock:</strong> Both have hypotension. The difference: Hypovolemic = tachycardia + cool/pale/diaphoretic skin. Neurogenic = bradycardia + warm/dry/pink skin. Spinal cord injury above T1 causes loss of sympathetic tone, leaving unopposed vagal tone → bradycardia + vasodilation. This is a DISTRIBUTIVE shock, not a HYPOVOLEMIC shock.
            </div>

            <h4>Indications for Spinal Motion Restriction (SMR) — Current Evidence</h4>
            <p>The decision to apply SMR (c-collar + backboard/device) should be based on <strong>clinical criteria</strong>, not mechanism alone. Current guidelines from the American College of Surgeons and Centers for Disease Control support <strong>selective spinal immobilization</strong>.</p>

            <h5>NEXUS Criteria (National Emergency X-Radiography Utilization Study)</h5>
            <p>A patient does NOT need SMR if they meet ALL of these criteria:</p>
            <ol>
                <li>No posterior midline cervical spine tenderness</li>
                <li>No evidence of intoxication (alcohol, drugs, altered mental status)</li>
                <li>Normal level of alertness (GCS 15, oriented to person/place/time)</li>
                <li>No focal neurological deficit (no weakness, numbness, or paralysis)</li>
                <li>No painful distracting injury (any injury that could mask spinal pain — e.g., long bone fracture, large laceration, burn)</li>
            </ol>

            <h5>Canadian C-Spine Rule (for alert, stable patients)</h5>
            <p>More specific than NEXUS but requires the patient to be alert (GCS 15), stable vital signs, and able to answer questions. Determines who needs X-ray vs can be cleared clinically. Key criteria include:</p>
            <ul>
                <li>Age ≥65 years = higher risk → imaging needed</li>
                <li>Dangerous mechanism (fall from >3 feet/5 stairs, axial loading to head, high-speed MVC, bicycle collision, off-road vehicle)</li>
                <li>Paresthesias in extremities = neurological symptom → imaging needed</li>
                <li>If none of above: can the patient rotate neck 45° left and right? If yes and no pain → no imaging needed (cleared)</li>
            </ul>

            <h4>SMR Techniques</h4>
            <ul>
                <li><strong>Cervical collar sizing:</strong> Measure from the angle of the jaw (mandible) to the top of the shoulder (trapezius). The chin piece should fit snugly with the neck in neutral alignment. Too large = ineffective (allows flexion). Too small = causes hyperextension and airway obstruction.</li>
                <li><strong>C-collar application:</strong> Apply with manual in-line stabilization (MILS) maintained by a second rescuer throughout. Slide the collar in from the front or back per manufacturer instructions. The collar alone does NOT adequately immobilize the spine — it is a reminder and a support, not a definitive immobilization device.</li>
                <li><strong>Head blocks:</strong> Placed on both sides of the head to prevent lateral rotation. Secured with tape across the forehead (over the collar) and chin (below the collar).</li>
                <li><strong>Long backboard:</strong> Indications are now LIMITED per evidence. The backboard is primarily an EXTRICATION device, not a transport device. Prolonged backboard use (>30-60 minutes) causes pain, skin breakdown, respiratory compromise (especially in children), and increased anxiety. Use for: (1) Extrication from difficult positions, (2) Transfer of patients who cannot self-extricate, (3) Patients with an unstable spine who need a rigid surface for transport. Remove the backboard as soon as the patient is transferred to a hospital stretcher.</li>
                <li><strong>Taping/securing:</strong> Patient should be secured to the board with straps across the chest (shoulders), pelvis (iliac crests), upper legs, and lower legs. Commercial restraint systems are preferred over tape. Padding under the head is essential — the backboard is hard, and pressure necrosis can develop quickly.</li>
            </ul>

            <h4>Log Roll Procedure</h4>
            <p>The log roll is a technique to turn a patient from supine to lateral (or vice versa) while maintaining spinal alignment. Steps:</p>
            <ol>
                <li>One rescuer maintains manual in-line stabilization at the head (the leader gives commands).</li>
                <li>Second rescuer at the shoulders/chest, third at hips/thighs, fourth at the legs.</li>
                <li>On command, roll the patient as a single unit — keep the spine in neutral alignment. The rescuer at the head counts: "On three: 1, 2, 3 — ROLL."</li>
                <li>The backboard is placed against the patient's back while rolled.</li>
                <li>On command, roll the patient back onto the board.</li>
                <li>The rescuer at the head maintains alignment until the patient is fully secured.</li>
            </ol>

            <h4>Helmet Removal</h4>
            <p>Removing a helmet from a patient with suspected spinal injury requires two rescuers and careful coordination:</p>
            <ol>
                <li>One rescuer maintains MILS from the head, reaching through the helmet opening to hold the patient's occiput and neck.</li>
                <li>The second rescuer removes the face mask (if present) first, then unstraps the helmet.</li>
                <li>The second rescuer supports the patient's neck from below while the first rescuer slides the helmet off — spreading the cheek pads outward to clear the ears.</li>
                <li>The second rescuer takes over MILS once the helmet is removed.</li>
                <li>Apply a cervical collar after the helmet is removed.</li>
            </ol>

            <h4>KED (Kendrick Extrication Device) / Vest-Type Extrication Device</h4>
            <p>A vest-style extrication device is used to immobilize and remove a patient from a confined space (e.g., a crashed vehicle) before placing them on a long backboard. It provides cervical immobilization and support for the torso. It is NOT a transport device — the patient must be transferred to a long backboard after extrication.</p>

            <h4>Special Populations</h4>
            <ul>
                <li><strong>Pediatric:</strong> Children have a larger head-to-body ratio, so they require special positioning — either a backboard with a recessed occiput or padding under the torso to prevent cervical flexion. Do NOT force the head into a neutral position that causes flexion; pad appropriately.</li>
                <li><strong>Obese:</strong> May not fit standard c-collars; require special sizing. The torso may be too large for standard backboard width.</li>
                <li><strong>Elderly:</strong> Pre-existing kyphosis/spinal degeneration makes neutral alignment different. Pad behind the head to accommodate the forward head posture.</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>NREMT High-Yield:</strong> SMR in penetrating trauma (gunshot wounds, stab wounds) is controversial and generally NOT recommended. Studies show that spinal immobilization in penetrating trauma does not improve neurological outcomes but DOES increase mortality by delaying transport and interfering with resuscitation. In isolated penetrating trauma to the head/neck/torso WITHOUT signs of spinal cord injury — do NOT collar/board. Transport rapidly for surgical care.
            </div>

            <h4>NREMT Focus — Selective Spinal Immobilization Decision-Making</h4>
            <ul>
                <li><strong>High-risk mechanisms</strong> that warrant SMR: High-speed MVC (≥35 mph), fall from >10 feet (or >3 feet in elderly/child), diving accidents, ejection from vehicle, rollover MVC, bicycle vs car, axial loading (diving, football spearing), and any patient with altered mental status and mechanism for spinal injury.</li>
                <li><strong>Do NOT apply SMR if:</strong> No high-risk mechanism, patient is alert and oriented (GCS 15), no intoxication, no neck pain or tenderness, no neurological deficits, no distracting injuries.</li>
                <li><strong>Always apply SMR if:</strong> Any positive finding on the NEXUS criteria OR high-risk mechanism + inability to assess (intoxicated, unconscious, distracted by other injuries).</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "What are the NEXUS criteria for determining who does NOT need spinal motion restriction?", answer: "A patient can be cleared if ALL are negative: (1) No posterior midline C-spine tenderness, (2) No intoxication, (3) Normal alertness (GCS 15), (4) No focal neurological deficit, (5) No painful distracting injury.", category: "SMR Indications" },
            { question: "What is the difference between spinal shock and neurogenic shock?", answer: "Spinal shock = TEMPORARY loss of cord function below injury (flaccid paralysis, areflexia). Neurogenic shock = HYPOTENSION + BRADYCARDIA + warm/dry skin from loss of sympathetic tone (distributive shock). They often coexist but are different phenomena.", category: "Spinal Shock vs Neurogenic Shock" },
            { question: "How do you differentiate neurogenic shock from hypovolemic shock?", answer: "Neurogenic: bradycardia + warm/dry/pink skin (vasodilation). Hypovolemic: tachycardia + cool/pale/diaphoretic skin. Both are hypotensive. The heart rate and skin findings are the key differentiators.", category: "Spinal Shock vs Neurogenic Shock" },
            { question: "Describe the motor findings in each incomplete spinal cord syndrome.", answer: "Central cord: UPPER extremities weaker than lower. Anterior cord: loss of motor + pain/temp BELOW injury; preserved proprioception/vibration. Brown-Séquard: ipsilateral motor loss + contralateral pain/temp loss (dissociated sensory loss).", category: "Spinal Cord Syndromes" },
            { question: "What is the concern with placing a patient on a long backboard for a prolonged period?", answer: "Pain, pressure sores/skin breakdown (especially over occiput, sacrum, heels), respiratory compromise (restricts chest wall movement), anxiety, and increased intracranial pressure. The backboard is an extrication device, not a transport device.", category: "SMR Techniques" },
            { question: "How does the approach to spinal immobilization differ in penetrating trauma vs blunt trauma?", answer: "In penetrating trauma (GSW, stab), SMR is generally NOT recommended — it increases mortality by delaying transport and does not improve neurological outcomes. Only apply SMR if there are clear signs of spinal cord injury.", category: "SMR Special Populations" },
            { question: "Describe the log roll procedure for placing a patient on a long backboard.", answer: "One rescuer maintains MILS at the head. Three additional rescuers position at shoulders/chest, hips, and legs. On command ('1, 2, 3 — roll'), the patient is rolled as a single unit. Backboard is placed, then patient is rolled back onto it. MILS is maintained until patient is secured.", category: "SMR Techniques" },
            { question: "What is the proper cervical collar sizing technique?", answer: "Measure from the angle of the jaw (mandible) to the top of the shoulder (trapezius). The chin piece should fit snugly with the neck in neutral alignment. Too large → allows flexion. Too small → causes hyperextension and airway compromise.", category: "C-Collar" }
        ],
        quiz: [
            {
                q: "A 28-year-old male is involved in a low-speed rear-end collision (<10 mph). He is alert and oriented (GCS 15), denies neck pain or tenderness, has no neurological symptoms, and has no distracting injuries. He has not been drinking. According to NEXUS criteria, what should the EMT do?",
                options: [
                    "Apply a cervical collar and long backboard since he was in a motor vehicle collision",
                    "No spinal motion restriction is needed — all NEXUS criteria are negative. He can be clinically cleared without spinal immobilization",
                    "Apply a cervical collar only but no backboard — he does not meet the criteria for a full board",
                    "Transport on a long backboard regardless — all MVC patients require spinal immobilization"
                ],
                correct: 1
            },
            {
                q: "A 38-year-old male is ejected from a vehicle during a rollover MVC at highway speed. He is unconscious with a GCS of 6. A large bore of steel rebar penetrated his left chest and exited through his back. Vital signs: BP 76/50, P 132, R 28, SpO₂ 88%. What is the priority intervention?",
                options: [
                    "Apply a c-collar and long backboard for full spinal immobilization before transport — the rollover MVC with ejection is a high-risk mechanism",
                    "This is a penetrating chest trauma with hemorrhagic shock. SMR (collar/board) would delay transport and worsen outcomes. Do NOT immobilize. Control the rebar (do NOT remove), cover the wound, provide high-flow O₂, and transport emergently to a trauma center",
                    "Remove the rebar immediately, then apply spinal immobilization and transport",
                    "Apply a c-collar only, do not use a backboard, and transport"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 45-year-old male is involved in a high-speed MVC. He is awake and alert with a GCS of 15. He complains of severe neck pain and has numbness and tingling in both hands. Vital signs: BP 86/52, P 56, R 20, SpO₂ 98%. His skin is warm and dry. There is no visible bleeding or obvious fractures. What is the most likely cause of his hypotension?",
                options: [
                    "Hemorrhagic shock from internal bleeding — start fluid resuscitation",
                    "Neurogenic shock from spinal cord injury — the bradycardia (P 56) with hypotension and warm/dry skin in the setting of neck pain and neurological symptoms is classic. This is a distributive shock from loss of sympathetic tone. Maintain perfusion, apply SMR, and transport to a trauma center",
                    "Cardiogenic shock — the patient is having a heart attack from the stress of the crash",
                    "Dehydration — the patient likely missed meals before driving"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_6_7_1",
                scenario: "You respond to a single-vehicle MVC on the highway. A 35-year-old male restrained driver struck a guardrail at approximately 45 mph. He is awake, alert, and oriented ×3. He denies neck pain, back pain, or any neurological symptoms. He has a superficial laceration on his forehead from hitting the steering wheel (minor, bleeding controlled), and airbag deployment occurred. His vital signs are stable. He has no distracting injuries, is not intoxicated, and has no midline spinal tenderness on palpation. He asks, 'Do I really need to be strapped to a board? A guy at work said they don't do that anymore.'",
                question: "How should the EMT apply current evidence-based guidelines to this patient?",
                options: [
                    {t: "Protocol is protocol — everyone in an MVC at highway speed gets a collar and a board. The patient's opinion is irrelevant", f: "Incorrect — modern guidelines support selective spinal immobilization based on validated criteria. NEXUS-negative patients (no tenderness, no intoxication, normal alertness, no neuro deficits, no distracting injuries) do NOT require SMR. Applying unnecessary SMR causes pain, anxiety, and respiratory compromise without benefit."},
                    {t: "This patient meets ALL NEXUS criteria for clinical clearance: GCS 15, no intoxication, no midline tenderness, no neurological deficits, and no distracting injury. According to current evidence, spinal motion restriction is NOT indicated. Document the NEXUS assessment and transport without collar/board. The patient's concern about unnecessary immobilization is valid and reflects current best practices", f: "Correct — this patient is NEXUS-negative and can be clinically cleared. The distracting injury criterion requires a truly painful injury (long bone fracture, large burn, etc.) — a superficial forehead laceration does not qualify. Selective spinal immobilization is the standard of care. Explaining this to the patient demonstrates competence and builds trust."}
                ],
                correct: 1,
                explanation: "Current evidence supports selective spinal immobilization using validated criteria. The NEXUS criteria (or Canadian C-Spine Rule) should guide decision-making, not mechanism alone. This patient is NEXUS-negative — he does not require SMR. Key points for the EMT: (1) Document the NEXUS assessment on the PCR — this shows that a clinical decision was made, not an omission. (2) If in doubt or if protocols require SMR for certain mechanisms, follow your local protocols. (3) Painful distracting injury is defined as a condition that could distract the patient from reporting spinal pain — a superficial forehead laceration does not meet this threshold. (4) The patient should still be transported for evaluation (airbag deployment + frontal impact may still have caused internal injuries, and the forehead laceration needs assessment).",
                kpi: "Applies NEXUS criteria for selective spinal immobilization in a low-risk patient"
            },
            {
                id: "crit_6_7_2",
                scenario: "You are dispatched to a 22-year-old male who dove into a lake and struck his head on the bottom. He was pulled from the water by bystanders and is floating face-up. He is awake but appears frightened. He says 'I can't feel my legs or move my arms.' On assessment, he has no motor function in any extremity and no sensation below the shoulders. His breathing is diaphragmatic (abdominal breathing with minimal chest wall movement). Vital signs: BP 84/58, P 52, R 18 (shallow), SpO₂ 92% on room air. His skin is warm and dry. He is incontinent of urine.",
                question: "What spinal cord injury level does this presentation suggest, and what are the critical management priorities?",
                options: [
                    {t: "This is a lumbar spine injury causing paraplegia — immobilize and transport. The low blood pressure is from fear and anxiety", f: "Incorrect — the patient has loss of ALL extremity function (quadriplegia) and diaphragmatic breathing with inability to move the chest wall. This indicates a HIGH cervical injury (C3–C5), which affects the phrenic nerve (C3–5) innervating the diaphragm and causes quadriplegia. Hypotension + bradycardia + warm/dry skin = neurogenic shock from loss of sympathetic outflow (T1–L2). A lumbar injury would leave the arms intact and breathing unaffected."},
                    {t: "This is a high cervical spine injury (likely C3–C5) causing complete cord transection with neurogenic shock. Management priorities: (1) Spinal motion restriction — MILS and c-collar, careful log roll onto backboard; (2) Respiratory support — the patient has diaphragmatic breathing only (phrenic nerve is partially functioning at C3–5); prepare for possible respiratory failure — assist with BVM if SpO₂ drops or breathing becomes inadequate; (3) Neurogenic shock management — treat the bradycardia (consider atropine per protocol) and hypotension (fluids and/or vasopressors per ALS), keep warm; (4) Rapid transport to a Level I trauma center", f: "Correct — the level is C3–C5 based on quadriplegia + diaphragmatic breathing (phrenic nerve C3–5). The neurogenic shock is from interruption of sympathetic outflow (T1–L2). The patient is at high risk for respiratory failure — the diaphragm can fatigue, and the intercostal muscles are paralyzed. Assisted ventilation may be needed. The backboard should be padded to accommodate the cervical alignment (no forced flexion). Transport with maximum urgency to a trauma center with neurosurgery and spinal cord injury expertise."}
                ],
                correct: 1,
                explanation: "This diver has a catastrophic cervical spine injury. Level determination: C3–C5 injury spares the diaphragm (phrenic nerve originates C3–5) but paralyzes all other respiratory muscles (intercostals, abdominals) and all four extremities. Injuries above C3 cause apnea (phrenic nerve paralyzed). Injuries below C5 spare some upper extremity function. Respiratory management is critical — the patient's tidal volume is reduced because only the diaphragm is working. He will hypoventilate and fatigue. Neurogenic shock management: the loss of sympathetic tone (T1–L2) causes vasodilation and unopposed vagal tone (bradycardia). Treatment: careful fluid administration (the patient is vasodilated, not hypovolemic), atropine for bradycardia (if symptomatic), and vasopressors if available through ALS. Keep the patient warm — loss of sympathetic tone impairs thermoregulation. Spinal precautions: the backboard may need padding under the shoulders/head due to the cervical spine injury. Transport to a center capable of managing acute spinal cord injury.",
                kpi: "Determines the anatomic level of spinal cord injury from clinical findings and manages neurogenic shock and respiratory compromise"
            },
            {
                id: "crit_6_7_3",
                scenario: "You are at a motor vehicle crash scene where a 55-year-old female was the restrained driver in a frontal impact at approximately 35 mph. She is awake and alert (GCS 15), complains of moderate neck pain without radiation, and has no neurological symptoms. She has a deformed left ankle (obvious fracture/dislocation) with distal pulses intact. She denies other injuries. On palpation, she has midline cervical spine tenderness at C5–C6. She has no other spinal tenderness. She is not intoxicated.",
                question: "This patient has a distracting injury (ankle fracture) and midline C-spine tenderness. What is the appropriate spinal motion restriction approach?",
                options: [
                    {t: "She has two positive NEXUS criteria: midline tenderness and a distracting injury. She requires full spinal motion restriction: correctly sized c-collar, head blocks, and long backboard. Pad behind the head as needed for neutral alignment. Log roll or use a scoop stretcher for transfer", f: "Correct — the patient meets criteria for SMR. She has both midline tenderness (the most specific NEXUS criterion for cervical spine fracture) and a distracting painful injury (ankle fracture). The c-collar should be measured and applied with MILS maintained. The log roll must be coordinated to avoid spinal movement. Padding behind the head may be needed — older patients often have kyphosis requiring occipital padding."},
                    {t: "The ankle fracture is distracting her from the neck pain — once the ankle is splinted and pain is controlled, reassess the neck. She may not need a collar if the neck pain resolves", f: "Incorrect — the NEXUS criteria consider a distracting injury as a positive criterion for SMR, not as a reason to defer. The presence of a painful distracting injury means you cannot rely on the patient's subjective neck pain report — they may have a cervical spine fracture and be unaware of the severity because the ankle hurts more. The ankle fracture should be splinted (realigned and splinted to reduce pain), but this does not negate the need for SMR."}
                ],
                correct: 0,
                explanation: "This patient has two indications for SMR: midline C-spine tenderness (the most sensitive NEXUS criterion for identifying cervical spine injury) and a distracting painful injury (ankle fracture). She cannot be clinically cleared. The c-collar should be sized from the angle of the mandible to the top of the trapezius, applied with MILS maintained by a second rescuer. The patient should be log-rolled onto a long backboard (or lifted via scoop stretcher if available) with the head secured with blocks and tape. The ankle should be splinted after spinal immobilization is complete, or during if the ankle injury is life-threatening (it is not — distal pulses are intact). The ankle is a distracting injury for purposes of spine assessment but still needs appropriate management. Transport to a trauma center. Document all findings and the decision to immobilize.",
                kpi: "Correctly applies SMR for a patient with positive NEXUS criteria (midline tenderness + distracting injury)"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────────────────
     * c6s8 – Chest Trauma
     * ────────────────────────────────────────────────────────────────────────────── */
    {
        id: "c6s8",
        shortTitle: "6.8 Chest Trauma",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Chest Trauma</h3>

            <p>Chest trauma is second only to head trauma as a cause of traumatic death. It can be blunt (MVCs, falls, assaults) or penetrating (gunshot wounds, stab wounds, impalement). Many chest injuries are immediately life-threatening and must be recognized and treated during the primary survey. The <strong>lethal six</strong> chest injuries that can kill within minutes must be identified during the EMT assessment.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>The Lethal Six — Immediate Life-Threatening Chest Injuries:</strong> (1) Tension pneumothorax, (2) Open pneumothorax (sucking chest wound), (3) Massive hemothorax, (4) Cardiac tamponade, (5) Flail chest, and (6) Traumatic asphyxia. The first three are treatable by needle decompression and occlusive dressings — interventions within the EMT scope.
            </div>

            <h4>Blunt vs Penetrating Chest Trauma</h4>
            <table>
                <thead>
                    <tr><th>Feature</th><th>Blunt Trauma</th><th>Penetrating Trauma</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Mechanism</strong></td><td>MVC, fall, assault, blast</td><td>GSW, stab wound, impalement</td></tr>
                    <tr><td><strong>Injury pattern</strong></td><td>Rib fractures, pulmonary contusion, flail chest, myocardial contusion</td><td>Pneumothorax, hemothorax, cardiac tamponade, great vessel injury</td></tr>
                    <tr><td><strong>Energy transfer</strong></td><td>Diffuse — injury may be in areas remote from the point of impact</td><td>Focal — injury follows the tract of the penetrating object</td></tr>
                    <tr><td><strong>Assessment</strong></td><td>External signs may not reflect internal injury severity</td><td>Wound location helps predict internal injuries</td></tr>
                    <tr><td><strong>Management</strong></td><td>Supportive, transport to trauma center</td><td>Wound management (occlusive dressing, wound sealing), rapid transport</td></tr>
                </tbody>
            </table>

            <h4>Rib Fractures</h4>
            <p>Rib fractures are the <strong>most common chest injury</strong>. They are painful but rarely life-threatening in isolation. The danger is not the fracture itself — it is the <strong>physiologic consequences</strong>:</p>
            <ul>
                <li>Pain → splinting (shallow breathing to avoid pain) → hypoventilation → atelectasis (alveolar collapse) → pneumonia (especially over 2–3 days)</li>
                <li>Upper rib fractures (ribs 1–3) indicate high-energy trauma — associated with great vessel injury (aorta, subclavian vessels)</li>
                <li>Lower rib fractures (ribs 8–12) can injure the liver (right), spleen (left), or kidneys (posterior)</li>
                <li>Multiple rib fractures (≥3) increase morbidity and mortality significantly</li>
            </ul>
            <p><strong>Management:</strong> Pain control (if in scope), position of comfort (sitting upright), supplemental oxygen, and transport. Do NOT bind or tape the chest — this restricts chest wall movement and worsens hypoventilation.</p>

            <h4>Flail Chest</h4>
            <p>Flail chest occurs when <strong>≥2 adjacent ribs are fractured in ≥2 places</strong> (segment of the chest wall is detached from the rest of the thoracic cage). The flail segment moves <strong>paradoxically</strong> — it moves IN during inspiration (negative intrathoracic pressure sucks it inward) and OUT during expiration (positive pressure pushes it outward). This is the opposite of normal chest wall motion.</p>
            <ul>
                <li><strong>Paradoxical movement</strong> — the hallmark sign. May not be visible in the first minutes after injury due to splinting; it becomes more apparent as the patient tires.</li>
                <li><strong>Underlying pulmonary contusion</strong> — always present with flail chest. The contusion is often more dangerous than the mechanical instability. Pulmonary contusion causes intrapulmonary shunting, hypoxemia, and can progress to ARDS.</li>
                <li><strong>Management:</strong> High-flow oxygen, positive pressure ventilation (BVM or CPAP) which splints the flail segment internally, pain management, and transport. Position the patient with the flail side down (if no other contraindications). Do NOT tape or splint the flail segment externally — this can worsen underlying lung injury.</li>
            </ul>

            <h4>Pulmonary Contusion</h4>
            <p>Pulmonary contusion is <strong>bruising of the lung tissue</strong> — blood and fluid accumulate in the alveoli and interstitium, impairing gas exchange. It is the <strong>most common potentially lethal chest injury</strong> often missed in the prehospital setting. Hypoxia may develop gradually over hours after the injury. The contusion causes V/Q mismatch (ventilation-perfusion mismatch), intrapulmonary shunting, decreased lung compliance, and increased work of breathing. Management: high-flow oxygen, positive pressure ventilation if deteriorating, CPAP may be beneficial, and transport. Pulmonary contusion is a major cause of late death from chest trauma (days after injury).</p>

            <h4>Pneumothorax — Simple</h4>
            <p>A simple pneumothorax occurs when air enters the pleural space (between the visceral and parietal pleura), causing partial lung collapse. Signs and symptoms:</p>
            <ul>
                <li><strong>Pleuritic chest pain</strong> — sharp, worsens with inspiration</li>
                <li><strong>Dyspnea</strong> — proportional to the size of the pneumothorax</li>
                <li><strong>Decreased or absent breath sounds</strong> on the affected side</li>
                <li><strong>Hyperresonance to percussion</strong> — air in the pleural space sounds tympanic</li>
                <li><strong>Tachypnea, tachycardia</strong> — compensatory responses</li>
                <li>Trachea is MIDLINE (unlike tension pneumothorax where it deviates)</li>
            </ul>
            <p>EMT management: high-flow oxygen, position of comfort, monitor for tension physiology (tracheal deviation, JVD, hypotension), and transport. Small pneumothoraces may not require tube thoracostomy but all require hospital evaluation.</p>

            <h4>Open Pneumothorax (Sucking Chest Wound)</h4>
            <p>An open pneumothorax occurs when a penetrating injury creates a defect in the chest wall, allowing air to enter the pleural space directly through the wound. The classic finding is a <strong>sucking chest wound</strong> — you can hear air moving in and out through the wound with each breath.</p>
            <p><strong>Management — Three-Sided Occlusive Dressing:</strong></p>
            <ol>
                <li>Cover the wound with a sterile occlusive dressing (commercial chest seal, petroleum gauze, or plastic wrap taped on THREE sides).</li>
                <li>The three-sided dressing acts as a <strong>flutter valve</strong> — it prevents air from entering through the wound during inspiration (the dressing is sucked against the wound) but allows air to escape during expiration (the untaped side lifts).</li>
                <li>If the patient develops tension pneumothorax (worsening respiratory distress, tracheal deviation, hypotension), <strong>burp the dressing</strong> — lift one corner to release trapped air, then reapply.</li>
                <li>Monitor for development of tension pneumothorax — occlusive dressings can convert a simple open pneumothorax into a tension pneumothorax if air cannot escape.</li>
            </ol>

            <h4>Tension Pneumothorax — A Clinical Diagnosis (DO NOT WAIT FOR IMAGING)</h4>
            <p>Tension pneumothorax is a <strong>TRUE LIFE-THREATENING EMERGENCY</strong> requiring immediate intervention. It occurs when air enters the pleural space but cannot escape (ball-valve mechanism), progressively increasing intrapleural pressure. This pressure shifts the mediastinum to the opposite side, compressing the heart, great vessels, and the contralateral lung. <strong>It is a clinical diagnosis — do not wait for a chest X-ray.</strong></p>

            <p><strong>Signs and Symptoms (Progressive):</strong></p>
            <table>
                <thead>
                    <tr><th>Sign</th><th>Mechanism</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Tracheal deviation AWAY from the affected side</strong></td><td>Mediastinal shift pushes the trachea to the opposite side — this is a LATE but specific sign</td></tr>
                    <tr><td><strong>Jugular venous distention (JVD)</strong></td><td>Increased intrathoracic pressure impedes venous return to the heart → distended neck veins</td></tr>
                    <tr><td><strong>Hypotension</strong></td><td>Decreased venous return → decreased cardiac output → obstructive shock</td></tr>
                    <tr><td><strong>Absent breath sounds</strong> on affected side</td><td>The lung is completely collapsed</td></tr>
                    <tr><td><strong>Hyperresonance to percussion</strong></td><td>Air under pressure in the pleural space</td></tr>
                    <tr><td><strong>Tachypnea → respiratory distress → respiratory failure</strong></td><td>Progressive hypoxia and hypercarbia</td></tr>
                    <tr><td><strong>Tachycardia → bradycardia (pre-arrest)</strong></td><td>Initial compensation → then decompensation as cardiac output falls</td></tr>
                    <tr><td><strong>Cyanosis</strong></td><td>Late sign of severe hypoxia</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Intervention — Needle Decompression:</strong> Tension pneumothorax requires immediate <strong>needle decompression</strong>. The EMT must recognize the signs and perform this life-saving intervention (per protocol). Sites: <strong>2nd intercostal space, midclavicular line</strong> (traditional site) OR <strong>5th intercostal space, anterior axillary line</strong> (alternative — may be safer in obese patients and reduces risk of great vessel injury). Use a large-bore (14g or 16g) angiocatheter, insert just above the rib (to avoid the intercostal nerve and artery that run below each rib), and listen for a rush of air. The catheter is left in place (open to air or with a flutter valve). If the tension re-accumulates, repeat the procedure.
            </div>

            <h4>Hemothorax</h4>
            <p>Hemothorax is the accumulation of blood in the pleural space. It is usually from injury to the lung parenchyma, intercostal vessels, or internal mammary artery. A massive hemothorax is defined as >1500 mL of blood in the pleural space.</p>
            <ul>
                <li><strong>Dullness to percussion</strong> — blood in the pleural space (vs hyperresonance of pneumothorax) — this is the KEY differentiating sign between hemothorax and pneumothorax</li>
                <li><strong>Decreased or absent breath sounds</strong> — on the affected side</li>
                <li><strong>Hypovolemic shock</strong> — the pleural space can hold 2–3 liters of blood (the entire blood volume can be lost into one hemothorax)</li>
                <li><strong>JVD is usually ABSENT</strong> (unlike tension pneumothorax) — blood is being lost, not compressing the heart</li>
            </ul>
            <p><strong>Management:</strong> High-flow oxygen, IV access, fluid resuscitation per protocol, and rapid transport to a trauma center for definitive management (tube thoracostomy ± surgery).</p>

            <h4>Cardiac Tamponade</h4>
            <p>Cardiac tamponade is compression of the heart by fluid (usually blood) accumulating in the pericardial sac. It is most commonly caused by <strong>penetrating trauma</strong> (stab wounds, GSWs) to the chest or upper abdomen.</p>
            <p><strong>Beck's Triad (the classic finding):</strong></p>
            <ol>
                <li><strong>Jugular Venous Distention (JVD)</strong> — increased central venous pressure from compression of the right heart</li>
                <li><strong>Hypotension</strong> — decreased cardiac output from impaired ventricular filling</li>
                <li><strong>Muffled heart sounds</strong> — the heart is surrounded by fluid, dampening the sounds</li>
            </ol>
            <p><strong>Additional signs:</strong> Pulsus paradoxus (exaggerated drop in BP during inspiration >10 mmHg), electrical alternans on ECG (alternating QRS amplitude — caused by the heart swinging in a fluid-filled pericardium), narrowing pulse pressure, Kussmaul's sign (JVD INCREASES with inspiration — normally JVD decreases).</p>
            <p><strong>Differentiation from tension pneumothorax:</strong> Both cause JVD + hypotension. In tension pneumothorax, you will find absent breath sounds, hyperresonance, and tracheal deviation on ONE side. In cardiac tamponade, breath sounds are PRESENT and equal bilaterally, and the trachea is midline.</p>
            <p><strong>Management:</strong> High-flow oxygen, rapid transport to a trauma center. The definitive treatment is <strong>pericardiocentesis</strong> (needle drainage of the pericardial sac), performed by a physician. Some ALS systems may perform pericardiocentesis, but the EMT's role is recognition and rapid transport.</p>

            <h4>Traumatic Asphyxia</h4>
            <p>Traumatic asphyxia occurs from <strong>severe, sudden compression of the chest</strong> (e.g., crushing injury, heavy object falling on the chest, crowd crush). The sudden compression forces blood from the right heart and great veins retrograde into the veins of the head, neck, and upper chest, causing:</p>
            <ul>
                <li><strong>Deep purple/blue discoloration</strong> of the face, neck, and upper chest (ecchymosis/cyanosis)</li>
                <li><strong>Petechiae</strong> in the conjunctiva and skin of the face/neck</li>
                <li><strong>JVD</strong> from the venous backup</li>
                <li><strong>Swollen tongue and lips</strong> (edema from venous engorgement)</li>
                <li><strong>Neurological symptoms</strong> — confusion, seizures, or loss of consciousness from cerebral venous congestion</li>
                <li>The <strong>sharp demarcation</strong> between the discolored upper body and normal lower chest/abdomen is a classic feature</li>
            </ul>
            <p><strong>Management:</strong> High-flow oxygen, treat associated injuries (often significant thoracic and abdominal trauma), and rapid transport. The cutaneous findings resolve over days to weeks but indicate significant underlying thoracic crush injury.</p>

            <h4>Commotio Cordis</h4>
            <p>Commotio cordis is a <strong>cardiac arrest caused by a blunt, non-penetrating blow to the chest</strong> during a vulnerable phase of the cardiac cycle (the T-wave — the repolarization phase). The impact triggers <strong>ventricular fibrillation</strong> (V-fib). It is most common in <strong>young male athletes</strong> (baseball, hockey, lacrosse) when a ball or puck strikes the chest with precise timing.</p>
            <ul>
                <li>Immediate collapse after chest impact</li>
                <li>Cardiac arrest with V-fib (or pulseless VT) on monitor</li>
                <li>No structural damage to the heart, ribs, or sternum (the chest wall is intact)</li>
                <li><strong>Management:</strong> Immediate CPR, defibrillation (AED or manual), and ALS care. Survival drops ~10% per minute without defibrillation. Use of chest protectors in high-risk sports is preventive.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept — Differentiation at a Glance:</strong> Tension pneumothorax: absent breath sounds + hyperresonance + tracheal deviation + JVD + hypotension. Cardiac tamponade: equal breath sounds + JVD + hypotension + muffled heart sounds (Beck's triad) + midline trachea. Massive hemothorax: absent breath sounds + DULLNESS to percussion + hypovolemic shock (no JVD). Needle decompression vs pericardiocentesis — know which is which.
            </div>

            <h4>NREMT Focus — Chest Trauma Management Summary</h4>
            <ul>
                <li><strong>Rib fractures:</strong> Pain control, O₂, do NOT bind the chest</li>
                <li><strong>Flail chest:</strong> Positive pressure ventilation (splints the flail segment internally), O₂, transport</li>
                <li><strong>Simple pneumothorax:</strong> O₂, monitor for tension, transport</li>
                <li><strong>Open pneumothorax:</strong> Three-sided occlusive dressing, monitor for tension (burp if needed)</li>
                <li><strong>Tension pneumothorax:</strong> <strong>CLINICAL DIAGNOSIS — NEEDLE DECOMPRESSION</strong>. Do not wait for X-ray. 2nd ICS MCL or 5th ICS AAL. Listen for air rush.</li>
                <li><strong>Hemothorax:</strong> Dull to percussion (vs resonant in pneumothorax), treat for hypovolemic shock, transport</li>
                <li><strong>Cardiac tamponade:</strong> Beck's triad (JVD + hypotension + muffled hearts), midline trachea, equal breath sounds — transport for pericardiocentesis</li>
                <li><strong>Traumatic asphyxia:</strong> Crush mechanism, upper body cyanosis/petechiae, treat associated injuries, transport</li>
                <li><strong>Commotio cordis:</strong> Blow to chest → V-fib → immediate CPR + defibrillation</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical NREMT Warning:</strong> Tension pneumothorax is a CLINICAL diagnosis. Do NOT wait for a chest X-ray, CT scan, or any imaging. In a trauma patient with respiratory distress, hypotension, and absent breath sounds on one side — you have a tension pneumothorax until proven otherwise. If you suspect it, TREAT IT. Needle decompression is a life-saving intervention that can be performed by an EMT.
            </div>
        </div>`,
        flashcards: [
            { question: "What are the 'lethal six' immediately life-threatening chest injuries?", answer: "(1) Tension pneumothorax, (2) Open pneumothorax (sucking chest wound), (3) Massive hemothorax, (4) Cardiac tamponade, (5) Flail chest, (6) Traumatic asphyxia. The first three are treatable by needle decompression and occlusive dressings.", category: "Chest Trauma Overview" },
            { question: "How do you differentiate a tension pneumothorax from a massive hemothorax?", answer: "Tension: HYPERRESONANCE to percussion, tracheal deviation away, JVD, hypotension. Hemothorax: DULLNESS to percussion (blood vs air), trachea midline, signs of hypovolemic shock (usually NO JVD). Both have absent breath sounds.", category: "Pneumothorax vs Hemothorax" },
            { question: "Describe the three-sided occlusive dressing for an open pneumothorax.", answer: "Cover the wound with a sterile occlusive dressing. Tape THREE sides, leaving one side untaped. This creates a flutter valve — prevents air entry during inspiration, allows air escape during expiration. Monitor for tension (burp the dressing if needed).", category: "Open Pneumothorax" },
            { question: "What are the signs of tension pneumothorax and the immediate intervention?", answer: "Tracheal deviation away, JVD, hypotension, absent breath sounds, hyperresonance, respiratory distress. CLINICAL diagnosis — do NOT wait for imaging. Needle decompression: 2nd ICS MCL or 5th ICS AAL, 14g/16g angiocatheter, above the rib.", category: "Tension Pneumothorax" },
            { question: "What is Beck's triad and what condition does it indicate?", answer: "JVD (jugular venous distention) + Hypotension + Muffled heart sounds = cardiac tamponade. Caused by blood accumulating in the pericardial sac compressing the heart. Differentiate from tension ptx by checking breath sounds (equal in tamponade) and trachea (midline).", category: "Cardiac Tamponade" },
            { question: "How can the EMT differentiate cardiac tamponade from tension pneumothorax at the bedside?", answer: "Both have JVD + hypotension. KEY difference: Tension ptx = absent breath sounds + hyperresonance + tracheal deviation on one side. Tamponade = breath sounds EQUAL bilaterally + trachea MIDLINE + muffled heart sounds. Both need rapid transport, but the treatment differs (needle decompression vs pericardiocentesis).", category: "Cardiac Tamponade vs Tension Ptx" },
            { question: "What is flail chest and what is the pathophysiologic significance?", answer: "Flail chest = ≥2 adjacent ribs fractured in ≥2 places → paradoxical movement of the chest wall segment. The underlying pulmonary contusion is often more dangerous than the mechanical instability. Management: positive pressure ventilation (splints the segment internally), O₂, transport.", category: "Flail Chest" },
            { question: "What is commotio cordis and how is it managed?", answer: "Cardiac arrest from a blunt blow to the chest during the T-wave of the cardiac cycle, causing V-fib. Most common in young male athletes (baseball, hockey). Management: immediate CPR and defibrillation. No structural heart damage — the rhythm is the problem.", category: "Commotio Cordis" }
        ],
        quiz: [
            {
                q: "A 30-year-old male is stabbed in the left chest. On exam, he has an open wound that is sucking air with each breath. He is in respiratory distress, SpO₂ 88%, BP 110/70, P 108. What is the correct management?",
                options: [
                    "Cover the wound completely with an airtight dressing taped on all four sides",
                    "Apply a three-sided occlusive dressing, monitor for tension, administer high-flow O₂, and transport",
                    "Insert a gloved finger into the wound to assess depth",
                    "Leave the wound open to the air — it will decompress naturally"
                ],
                correct: 1
            },
            {
                q: "A 22-year-old male is struck in the chest by a line drive baseball. He collapses immediately and is unresponsive, pulseless, and not breathing. The AED analyzes and advises 'shock advised.' What is the most likely cause of this cardiac arrest?",
                options: [
                    "Myocardial infarction — the stress of being hit caused a heart attack",
                    "Commotio cordis — a blunt blow to the chest timed with the T-wave of the cardiac cycle caused ventricular fibrillation. Immediate CPR and defibrillation are the priority",
                    "Pulmonary contusion from the impact",
                    "The patient had a pre-existing arrhythmia unrelated to the baseball"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 40-year-old male is involved in a high-speed frontal collision. He complains of severe chest pain and dyspnea. On exam, you note a 6×8 cm segment of the left lateral chest wall that moves IN when he inspires and OUT when he expires. He has an SpO₂ of 86% on a non-rebreather. BP is 102/68, P 118, R 30. What is the primary problem and what intervention addresses it?",
                options: [
                    "Flail chest with underlying pulmonary contusion — apply positive pressure ventilation (BVM or CPAP) to splint the flail segment internally, provide high-flow O₂, and transport",
                    "Simple pneumothorax — insert a needle into the 2nd ICS MCL to decompress",
                    "Rib fracture — bind the chest tightly with tape to stabilize the segment",
                    "The paradoxical movement is not significant — focus on the pulmonary contusion which requires needle decompression"
                ],
                correct: 0
            },
            {
                q: "A 28-year-old female sustains a stab wound to the left chest. She presents with JVD, hypotension (BP 82/54), and tachycardia. Breath sounds are present and equal bilaterally. Trachea is midline. What is the most likely diagnosis?",
                options: [
                    "Tension pneumothorax — the JVD and hypotension are classic",
                    "Cardiac tamponade — Beck's triad (JVD + hypotension + muffled hearts) with equal breath sounds and midline trachea differentiates it from tension pneumothorax",
                    "Massive hemothorax — the JVD is from blood loss; the equal breath sounds are confusing",
                    "Simple pneumothorax — it will progress to tension if not treated"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_6_8_1",
                scenario: "You respond to a 35-year-old male who was stabbed in the left lateral chest at the 5th intercostal space, midaxillary line. On arrival, he is sitting upright, in severe respiratory distress, using accessory muscles, and is only able to speak 1–2 words at a time. He is diaphoretic and cyanotic. Vital signs: BP 78/50, P 132 (thready), R 36 (shallow), SpO₂ 82%. His left chest has decreased expansion, and you note the trachea is deviated to the RIGHT. Left breath sounds are absent, and the left chest is hyperresonant to percussion. Neck veins are distended. The stab wound itself is small and there is no active bleeding from the wound site.",
                question: "What is the immediate diagnosis and intervention?",
                options: [
                    {t: "This is a hemothorax — the hypotension and absent breath sounds are classic. Apply a pressure dressing to the wound, high-flow oxygen, and rapid transport for chest tube insertion", f: "Incorrect — hemothorax has DULLNESS to percussion (not hyperresonance), the trachea is midline (not deviated), and JVD is usually absent (blood is being lost, not compressing). This patient has HYPERresonance, tracheal DEVIATION, and JVD — all signs of tension pneumothorax."},
                    {t: "This is a TENSION PNEUMOTHORAX — the clinical signs are all present: hyperresonance, absent breath sounds, tracheal deviation to the RIGHT (away from the LEFT injury), JVD, and hypotension (obstructive shock). Immediate needle decompression at the 2nd ICS midclavicular line OR 5th ICS anterior axillary line on the LEFT side. Listen for a rush of air. Leave the catheter in place. Apply high-flow O₂ and transport emergently to a trauma center", f: "Correct — this patient has a classic tension pneumothorax. The stab wound allowed air into the pleural space, and a one-way valve mechanism has trapped air under pressure, collapsing the left lung and shifting the mediastinum to the right. Needle decompression is the definitive prehospital intervention. The 5th ICS AAL site may be preferred for this injury (the wound is at the 5th ICS lateral) and may be safer in patients with large body habitus. After decompression, apply an occlusive dressing to the stab wound to prevent re-accumulation of air."}
                ],
                correct: 1,
                explanation: "This is a classic tension pneumothorax requiring immediate needle decompression. Key findings confirming the diagnosis: (1) Respiratory distress out of proportion to the visible injury, (2) Absent breath sounds on the left, (3) HYPERresonance (air, not blood), (4) Tracheal deviation to the RIGHT (away from the injury), (5) JVD (impeded venous return from increased intrathoracic pressure), (6) Hypotension (obstructive shock from decreased cardiac output). This is a CLINICAL diagnosis — do not wait for imaging. Needle decompression technique: identify the 2nd ICS in the MCL or 5th ICS in the AAL; insert the 14g or 16g angiocatheter just ABOVE the rib (to avoid the intercostal nerve, artery, and vein that run in the costal groove below each rib); advance until a rush of air is heard; remove the needle and leave the catheter in place (open to air or with a one-way valve). The patient will have immediate improvement in respiratory status and blood pressure if the diagnosis is correct.",
                kpi: "Recognizes tension pneumothorax as a clinical diagnosis and performs immediate needle decompression"
            },
            {
                id: "crit_6_8_2",
                scenario: "You are called to a shooting scene. A 32-year-old male has a single gunshot wound to the left anterior chest at the 4th intercostal space, parasternally. He is awake but anxious, in respiratory distress. Vital signs: BP 86/58, P 124, R 28, SpO₂ 91%. On exam, you note distended neck veins, a midline trachea, and breath sounds that are present but diminished EQUALLY bilaterally with no focal area of absence. Heart sounds are very difficult to hear, almost muffled. There is no tracheal deviation. The chest wall moves symmetrically. There is no air movement from the wound itself.",
                question: "What injury is most likely, and what key finding differentiates it from a tension pneumothorax?",
                options: [
                    {t: "The patient has a tension pneumothorax — JVD and hypotension are present. Perform needle decompression immediately", f: "Incorrect — tension pneumothorax has absent breath sounds on ONE side (not equal), HYPERresonance on the affected side, and tracheal deviation AWAY from the affected side. This patient has EQUAL breath sounds bilaterally and a MIDLINE trachea — these findings are NOT consistent with tension pneumothorax."},
                    {t: "This is cardiac tamponade — the penetrating wound near the cardiac box (anterior chest, parasternal), Beck's triad (JVD + hypotension + muffled heart sounds), equal breath sounds, and midline trachea are classic. Tension pneumothorax was ruled out by the equal breath sounds and midline trachea. Transport emergently for pericardiocentesis. High-flow O₂, IV access en route, and notify the trauma center", f: "Correct — the parasternal location of the GSW entry is over the cardiac box (the area of the chest overlying the heart). Beck's triad is present. The preserved equal breath sounds and midline trachea differentiate tamponade from tension pneumothorax. Cardiac tamponade causes obstructive shock by compressing the heart within the fluid-filled pericardial sac, preventing adequate ventricular filling. Transport to a trauma center capable of emergency thoracotomy or pericardiocentesis."}
                ],
                correct: 1,
                explanation: "Cardiac tamponade from penetrating chest trauma. The cardiac box is the area of the chest bounded by the sternum, the midclavicular lines bilaterally, the clavicles superiorly, and the xiphoid process inferiorly. Wounds in this area carry the highest risk of cardiac injury. Beck's triad (JVD + hypotension + muffled heart sounds) is the classic finding, but all three components are only present in about 30% of patients. The key differentiator from tension pneumothorax is: in tamponade, breath sounds are EQUAL bilaterally and the trachea is MIDLINE. In tension pneumothorax, breath sounds are ABSENT on one side and the trachea DEVIATES away from the injury. Management priorities: high-flow oxygen, rapid transport to a trauma center with cardiothoracic surgery capability, and IV access en route. Do NOT perform needle decompression on a patient with cardiac tamponade — it will not help and can cause additional injury. Pericardiocentesis (or emergency thoracotomy with pericardial window) is the definitive treatment.",
                kpi: "Differentiates cardiac tamponade from tension pneumothorax using breath sounds and tracheal position"
            },
            {
                id: "crit_6_8_3",
                scenario: "You are at the scene of a serious MVC. A 45-year-old male restrained driver struck a tree at approximately 50 mph. He has significant damage to the driver's side door and dashboard. He is awake and complaining of severe chest pain and difficulty breathing. On exam, you note a 4-rib segment on his left lateral chest wall that is moving paradoxically (in during inspiration, out during expiration). Underneath the flail segment, you auscultate coarse crackles. His SpO₂ is 84% on a non-rebreather mask at 15 L/min. BP is 106/70, P 118, R 32 and shallow. He has no obvious external bleeding. Breath sounds are diminished on the left but not absent. There is no tracheal deviation. Neck veins are flat.",
                question: "What is the primary pathophysiology causing this patient's hypoxia, and what is the appropriate ventilatory management?",
                options: [
                    {t: "The patient has a tension pneumothorax from the rib fractures — perform needle decompression immediately", f: "Incorrect — this patient has no tracheal deviation, no JVD, breath sounds are diminished but present on the left (not absent), and the chest is not hyperresonant. These findings rule out tension pneumothorax. The hypoxia is from the pulmonary contusion and the mechanical inefficiency of the flail segment."},
                    {t: "This patient has flail chest with underlying pulmonary contusion. The primary cause of hypoxia is the pulmonary contusion (intrapulmonary shunting from blood and fluid in the alveoli), NOT the mechanical flail. The mechanical instability of the flail segment is a secondary concern. Apply POSITIVE PRESSURE VENTILATION (BVM or CPAP) — this splints the flail segment internally, improves oxygenation by recruiting alveoli, and reduces work of breathing. Transport emergently to a trauma center. Do NOT tape or bind the chest externally", f: "Correct — the pulmonary contusion is the more dangerous component of flail chest. The contused lung cannot oxygenate blood effectively (intrapulmonary shunt), causing hypoxia that may worsen over 6–24 hours. Positive pressure ventilation (BVM with supplemental O₂, CPAP, or PEEP) improves oxygenation by recruiting collapsed alveoli and pneumatically splints the flail segment. External binding of the chest is contraindicated — it restricts chest wall movement and worsens underlying lung injury."}
                ],
                correct: 1,
                explanation: "Flail chest is defined by ≥2 adjacent ribs broken in ≥2 places, creating a free-floating segment of the chest wall. The hallmark is paradoxical movement. However, the most dangerous aspect is the ALWAYS-present underlying pulmonary contusion — the lung tissue is bruised, causing alveolar hemorrhage and edema that impairs gas exchange. The contusion causes V/Q mismatch and intrapulmonary shunting, resulting in hypoxia. Management: (1) Positive pressure ventilation — BVM with O₂ for severe hypoxia, or CPAP if the patient is spontaneously breathing and able to protect the airway. Positive pressure internally splints the flail segment, improving both ventilation and oxygenation. (2) Pain management (if in scope) — inadequate pain control leads to splinting, atelectasis, and pneumonia. (3) Position of comfort — sitting upright if possible. (4) Transport to a trauma center — flail chest with pulmonary contusion has significant morbidity and mortality (10–25%). (5) Do NOT use external binders or tape — this was historical practice and is now contraindicated. (6) Monitor for deterioration — the contusion can expand over hours, causing progressive respiratory failure.",
                kpi: "Prioritizes pulmonary contusion over mechanical flail segment and applies positive pressure ventilation"
            }
        ]
    }
];

console.log("✅ c6s5-c6s8 generated");
