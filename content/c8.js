/* ========== Chapter 8 – Environmental & Disaster ========== */
window.CPG_DATA = {
    id: "c8",
    title: "Environmental & Disaster",
    shortTitle: "8. Environmental & Disaster",
    sections: [
        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s1 – Heat-Related Illness
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s1",
            shortTitle: "8.1 Heat-Related Illness",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Heat-Related Illness</h3>

                <p>Heat-related illnesses occur along a continuum — from minor heat cramps to life-threatening heat stroke. Understanding thermoregulation and recognizing when a patient has moved along this spectrum is critical for the EMS provider. <strong>Environmental hyperthermia is fundamentally different from fever:</strong> fever is a hypothalamic set-point elevation mediated by pyrogens, while hyperthermia is uncontrolled heat gain exceeding the body's ability to dissipate heat. <strong>Antipyretics do NOT work for environmental hyperthermia.</strong></p>

                <h4>Thermoregulation Mechanisms</h4>
                <p>The human body maintains core temperature within a narrow range (36.5–37.5°C / 97.7–99.5°F) through a balance of heat production and heat loss. The hypothalamus acts as the body's thermostat. Heat is lost through four primary mechanisms:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Mechanism</th><th>Definition</th><th>Example</th><th>Efficiency</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Conduction</strong></td><td>Direct transfer of heat from the body to a cooler object through physical contact</td><td>Sitting on a cold rock; immersion in cold water</td><td>Minor under normal conditions; significant in cold water immersion</td></tr>
                        <tr><td><strong>Convection</strong></td><td>Heat transfer to moving air or water molecules that pass over the body</td><td>Wind blowing across bare skin; a fan; swimming in cool water</td><td>Variable — depends on temperature gradient and air/water movement (wind chill factor)</td></tr>
                        <tr><td><strong>Radiation</strong></td><td>Emission of infrared electromagnetic energy from the body to cooler objects in the environment (without physical contact)</td><td>Body heat radiating to a cold room; standing near a cold wall</td><td>Accounts for ~60% of heat loss at rest in a cool environment; the dominant mechanism at normal room temperature</td></tr>
                        <tr><td><strong>Evaporation</strong></td><td>Heat loss through the conversion of sweat (liquid) to water vapor (gas) on the skin surface</td><td>Sweating; misting the skin with water followed by fanning</td><td>The <strong>primary cooling mechanism during exercise and in hot environments</strong>. Becomes ineffective at high humidity (>75%) because air is already saturated with water vapor</td></tr>
                    </tbody>
                </table></div>
                <p><strong>Key concept:</strong> When environmental temperature exceeds skin temperature (~35°C / 95°F), evaporation is the <em>only</em> effective cooling mechanism. High humidity dramatically reduces evaporative cooling — this is why humid heat is more dangerous than dry heat at the same temperature.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Humidity Matters:</strong> The <strong>Heat Index</strong> (or "feels-like" temperature) combines air temperature and relative humidity to reflect the true physiologic heat stress. At 95°F with 80% humidity, the heat index is 132°F — evaporation is nearly impossible, and the body cannot cool itself. Always consider humidity when assessing environmental heat risk.
                </div>

                <h4>Heat Cramps</h4>
                <p><strong>Heat cramps</strong> are the mildest form of heat illness — painful, involuntary muscle spasms that occur during or after intense physical activity in a hot environment. They result from <strong>hyponatremia (dilutional) and electrolyte depletion</strong> caused by heavy sweating with inadequate salt/electrolyte replacement. Large-volume sweat losses (1–2 L/hour) contain significant sodium, chloride, and potassium — replacing with plain water alone dilutes extracellular sodium, precipitating cramps.</p>
                <ul>
                    <li><strong>Presentation:</strong> Painful muscle spasms — most commonly in the calves, thighs, hamstrings, and abdominal muscles. The muscles are hard and tender to palpation. The patient is alert with normal vital signs and a normal core temperature. Skin is typically warm and moist.</li>
                    <li><strong>Risk factors:</strong> Profuse sweating, inadequate electrolyte intake, salt-restricted diets, recent acclimatization to heat, and certain medications (diuretics, ACE inhibitors).</li>
                    <li><strong>Management:</strong> Rest in a cool environment, passive stretching of the affected muscles, and oral rehydration with <strong>electrolyte-containing fluids</strong> (sports drinks, oral rehydration solution, or salted water). Do NOT use salt tablets — they cause gastric irritation and osmotic fluid shifts. If oral fluids cannot be tolerated, transport for IV isotonic fluids. Most heat cramps resolve within 30–60 minutes of rest and rehydration.</li>
                </ul>

                <h4>Heat Exhaustion</h4>
                <p><strong>Heat exhaustion</strong> is a volume-depletion state caused by the body's inability to maintain cardiac output during sustained heat stress. It represents a <strong>failure of cardiovascular compensation</strong> for heat-induced fluid and electrolyte losses. Unlike heat stroke, the CNS is intact — the patient has an altered mental status but is <em>arousable and coherent</em> (though may be irritable or anxious). Core temperature is typically <strong>normal to slightly elevated</strong> (37–40°C / 98.6–104°F) — not the extreme temperatures of heat stroke.</p>
                <p><strong>Presentation:</strong></p>
                <ul>
                    <li><strong>Heavy sweating</strong> — The hallmark of heat exhaustion; the patient is profusely diaphoretic</li>
                    <li><strong>Headache, nausea, vomiting, and dizziness</strong> — Common early symptoms</li>
                    <li><strong>Tachycardia and orthostatic hypotension</strong> — Compensatory responses to volume depletion; standing the patient may precipitate syncope</li>
                    <li><strong>Thirst, fatigue, and generalized weakness</strong> — Dehydration symptoms</li>
                    <li><strong>Muscle cramps</strong> — May accompany heat exhaustion</li>
                    <li><strong>Normal or slightly elevated temperature</strong> — Core temp < 104°F (40°C)</li>
                    <li><strong>Skin is cool and clammy</strong> — From profuse sweating; NOT hot and dry</li>
                </ul>
                <p><strong>Management:</strong></p>
                <ul>
                    <li>Move the patient to a cool or shaded environment</li>
                    <li>Remove excess clothing and apply cool compresses or mist the patient with a fan</li>
                    <li>Position the patient supine with legs elevated (Trendelenburg or shock position) to improve venous return</li>
                    <li>Administer oral electrolyte-containing fluids if the patient is alert and can swallow without nausea</li>
                    <li>If IV access is available per local protocol, administer isotonic fluids (normal saline) — 1–2 L may be needed</li>
                    <li>Monitor vital signs and core temperature closely — <strong>if temperature continues to rise or mental status deteriorates, suspect progression to heat stroke</strong></li>
                    <li>Transport for evaluation — heat exhaustion can progress to heat stroke if cooling measures are delayed or inadequate</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Key Distinction — Heat Exhaustion vs Heat Stroke:</strong> The single most important differentiating factor is <strong>MENTAL STATUS</strong>. Heat exhaustion = intact CNS (may be anxious or irritable but is alert, coherent, and appropriate). Heat stroke = CNS dysfunction (confusion, disorientation, seizures, coma). <em>Temperature alone does NOT differentiate</em> — some heat stroke patients may have a temperature of only 104°F (40°C) at time of EMS contact, especially if cooling has been initiated.
                </div>

                <h4>Heat Stroke — TRUE EMERGENCY</h4>
                <p><strong>Heat stroke</strong> is a life-threatening medical emergency characterized by a core temperature >104°F (40°C) with <strong>CNS dysfunction</strong>. It is a systemic inflammatory response triggered by severe hyperthermia that causes cellular damage, multi-organ failure, and death if not promptly recognized and treated. Mortality ranges from 10–50% and increases with every minute of delayed cooling.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning — Heat Stroke:</strong> Heat stroke is a TRUE LIFE-THREATENING EMERGENCY. Core temperature >104°F with CNS dysfunction = immediate aggressive cooling and rapid transport. <strong>Do NOT give antipyretics (Tylenol, NSAIDs)</strong> — they do not work for environmental hyperthermia and may worsen outcomes (liver toxicity, coagulopathy). Cool first, transport second.
                </div>

                <p><strong>Presentation:</strong></p>
                <ul>
                    <li><strong>CNS dysfunction (REQUIRED for diagnosis):</strong> Confusion, disorientation, irrational behaviour, aggressive/combative behaviour, slurred speech, hallucinations, seizures, or coma. <strong>The neurologic signs distinguish heat stroke from heat exhaustion.</strong></li>
                    <li><strong>Core temperature > 104°F (40°C)</strong> — measured rectally or tympanically (temporal, oral, and axillary readings may underestimate core temperature in hyperthermia)</li>
                    <li><strong>HOT DRY SKIN is a late sign</strong> — Classically taught as "hot, dry, red skin" but this occurs when the body's sweating mechanism fails (anhidrosis), which is a <strong>late and ominous finding</strong>. Many heat stroke patients <strong>continue to sweat profusely</strong> in the early stages.</li>
                    <li><strong>Tachycardia and hypotension</strong> — High-output cardiac failure may develop; the heart cannot keep up with the massive demand for cutaneous blood flow</li>
                    <li><strong>Tachypnea (hyperventilation)</strong> — Compensatory response to metabolic acidosis from cellular damage and lactic acidosis</li>
                    <li><strong>Nausea, vomiting, and diarrhoea</strong> — Gastrointestinal symptoms are common from splanchnic vasoconstriction and mucosal ischaemia</li>
                    <li><strong>Seizures</strong> — Indicate severe CNS irritation; may be focal or generalized</li>
                </ul>

                <h5>Exertional vs Classic Heat Stroke</h5>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Feature</th><th>Exertional Heat Stroke</th><th>Classic (Non-Exertional) Heat Stroke</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Population</strong></td><td>Young, active individuals (athletes, military recruits, labourers, hikers)</td><td>Elderly, infants, chronically ill, socially isolated (those without air conditioning)</td></tr>
                        <tr><td><strong>Onset</strong></td><td>Rapid — develops over hours during strenuous activity</td><td>Slow — develops over days during heat waves</td></tr>
                        <tr><td><strong>Sweating</strong></td><td>Often <strong>still sweating</strong> (profuse diaphoresis)</td><td>Anhidrosis (dry skin) is more common — a late sign</td></tr>
                        <tr><td><strong>Rhabdomyolysis</strong></td><td>Very common — muscle breakdown from exertion and hyperthermia can cause acute kidney injury</td><td>Less common</td></tr>
                        <tr><td><strong>Acidosis</strong></td><td>Severe metabolic and lactic acidosis from muscle activity</td><td>Milder acidosis</td></tr>
                        <tr><td><strong>DIC</strong></td><td>More common — disseminated intravascular coagulation from systemic inflammation</td><td>Less common but still occurs</td></tr>
                        <tr><td><strong>Best cooling method</strong></td><td><strong>Cold water immersion</strong> — the gold standard (ice water tub, 35–59°F / 2–15°C)</td><td>Evaporative cooling (mist + fan), ice packs to groin/axillae/neck, cold IV fluids</td></tr>
                    </tbody>
                </table></div>

                <h4>Cooling Methods</h4>
                <p>Rapid cooling is the cornerstone of heat stroke management. The goal is to reduce core temperature to <102°F (39°C) as quickly as possible. The method chosen depends on available resources, patient stability, and transport considerations:</p>
                <ul>
                    <li><strong>Cold water immersion (CWI):</strong> The gold standard for exertional heat stroke. Immerse the patient (with head out of water) in cold or ice water (35–59°F / 2–15°C). Vigorously stir the water to prevent a warm boundary layer around the skin. CWI can lower core temperature by 0.09–0.35°C per minute — significantly faster than any other method. <strong>Controversial in prehospital setting</strong> due to practical concerns (immobilisation, monitoring, shivering causing afterdrop), but increasingly recommended for field use with appropriate precautions.</li>
                    <li><strong>Evaporative cooling:</strong> Mist the patient with lukewarm or tepid water while simultaneously fanning vigorously. This is the most practical prehospital method. The combined mist + fan technique (NOT alcohol — which is toxic when absorbed) mimics the body's natural cooling mechanism and is effective even in high-humidity environments if the fan moves enough air.</li>
                    <li><strong>Ice packs / cold packs:</strong> Place chemical ice packs or ice bags wrapped in a thin cloth in areas of high heat transfer — the <strong>groin, axillae (armpits), and neck (carotid region)</strong>. These sites have superficial large vessels that conduct heat efficiently. Replace them as they thaw or warm. This is a <strong>supplemental</strong> cooling method, not a primary one.</li>
                    <li><strong>Cold IV fluids:</strong> Administer 1–2 L of cold (4°C) normal saline or Ringer's lactate IV. This provides internal cooling and volume repletion simultaneously. Cold IV fluids are particularly useful when combined with evaporative cooling. Do NOT administer chilled fluids so rapidly that they cause shivering (shivering generates heat and counteracts cooling).</li>
                    <li><strong>Cooled gastric or peritoneal lavage:</strong> Advanced techniques for refractory cases; not typically available in the prehospital setting.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Cooling First, Transport Second:</strong> Heat stroke mortality is directly related to the <strong>duration</strong> of hyperthermia, not the peak temperature. "Cool first, transport second" is the mantra — initiate aggressive cooling at the scene before loading the patient. Continue cooling during transport. Cooling should NOT delay transport by more than 10–15 minutes, but scene cooling is essential. Target: core temp < 102°F (39°C).
                </div>

                <h4>Malignant Hyperthermia & Neuroleptic Malignant Syndrome</h4>
                <p>While NOT classic environmental emergencies, these two conditions cause severe hyperthermia that an EMS provider may encounter:</p>
                <ul>
                    <li><strong>Malignant hyperthermia (MH):</strong> A life-threatening genetic disorder triggered by depolarizing neuromuscular blocking agents (succinylcholine) and volatile anaesthetics (halothane, sevoflurane, desflurane, isoflurane). Presents with: masseter muscle rigidity, generalized rigidity, hyperthermia (rapid rise), tachycardia, hypercapnia (rising end-tidal CO₂), metabolic acidosis, and rhabdomyolysis. <strong>Treatment:</strong> Dantrolene (the specific antidote), aggressive cooling, and supportive care. <strong>Key for EMS providers:</strong> ABCs, aggressive cooling, and rapid transport. Obtain a history of anaesthetic complications in the family.</li>
                    <li><strong>Neuroleptic malignant syndrome (NMS):</strong> A rare but life-threatening reaction to antipsychotic medications (haloperidol, fluphenazine, risperidone) characterized by <strong>muscle rigidity, hyperthermia, altered mental status, and autonomic instability</strong> (labile BP, tachycardia, diaphoresis). Onset is slower than MH (days to weeks after starting or increasing the dose of an antipsychotic). <strong>Treatment:</strong> Discontinue the offending agent, aggressive cooling, hydration, and medications (bromocriptine, dantrolene) in the hospital. Recognise the difference: NMS has a slower onset and is associated with antipsychotic use; MH has a rapid onset and is associated with anaesthesia.</li>
                </ul>

                <h4>Risk Factors for Heat Illness</h4>
                <p>Certain patient populations and conditions increase the risk of heat-related illness:</p>
                <ul>
                    <li><strong>Obesity:</strong> Increased body mass generates more metabolic heat and insulates against heat loss</li>
                    <li><strong>Dehydration:</strong> Reduces plasma volume, impairing the body's ability to shunt blood to the skin for cooling</li>
                    <li><strong>Alcohol use:</strong> Impairs thermoregulation, causes dehydration (diuretic), and impairs judgement</li>
                    <li><strong>Extremes of age:</strong> Infants have immature thermoregulatory systems; the elderly have decreased sweating capacity, reduced cardiovascular reserve, and often have co-morbidities</li>
                    <li><strong>Medications:</strong>
                        <ul>
                            <li><strong>Anticholinergics</strong> (antihistamines, tricyclic antidepressants, atropine, benztropine) — impair sweating by blocking cholinergic stimulation of sweat glands</li>
                            <li><strong>Beta-blockers</strong> — blunt the cardiovascular response to heat (reduce ability to increase cardiac output)</li>
                            <li><strong>Diuretics</strong> — cause volume depletion and electrolyte abnormalities</li>
                            <li><strong>Antihistamines</strong> — anticholinergic properties impair sweating</li>
                            <li><strong>Antipsychotics</strong> — can cause NMS; also have anticholinergic effects</li>
                            <li><strong>Stimulants</strong> (cocaine, amphetamines, MDMA/"ecstasy") — increase metabolic heat production and impair thermoregulation; MDMA is particularly dangerous (hyponatremia + hyperthermia)</li>
                        </ul>
                    </li>
                    <li><strong>Acclimatization:</strong> It takes 7–14 days of progressive heat exposure for the body to adapt (increased sweat production, earlier onset of sweating, lower salt concentration in sweat, increased plasma volume). Unacclimatized individuals are at significantly higher risk.</li>
                    <li><strong>Sleep deprivation and illness:</strong> Both impair thermoregulatory capacity.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Focus — Key Takeaways:</strong><br>
                    • Heat stroke is a TRUE life-threatening emergency — CNS dysfunction + hyperthermia<br>
                    • "Cool first, transport second" — scene cooling saves lives<br>
                    • Do NOT give antipyretics (Tylenol, NSAIDs) — they do not work for environmental hyperthermia<br>
                    • Hot dry skin is a LATE sign — many heat stroke patients still sweat<br>
                    • Differentiate heat exhaustion (intact CNS) from heat stroke (CNS dysfunction) — mental status is the key<br>
                    • Cold water immersion is the gold standard for exertional heat stroke; evaporative cooling (mist + fan) is the most practical prehospital method
                </div>
            </div>`,
            flashcards: [
                {
                    question: "What are the four mechanisms of heat loss from the body?",
                    answer: "Conduction (direct contact), Convection (moving air/water over skin), Radiation (infrared emission), Evaporation (sweat → vapour). Evaporation is the primary mechanism during exercise and in hot environments and becomes ineffective at high humidity.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What differentiates heat exhaustion from heat stroke?",
                    answer: "MENTAL STATUS is the key differentiating factor. Heat exhaustion = intact CNS (alert, coherent, appropriate) with heavy sweating and normal or slightly elevated temperature. Heat stroke = CNS dysfunction (confusion, seizures, coma) with core temp >104°F (40°C). Hot dry skin is a LATE sign of heat stroke.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What are the management priorities for heat stroke?",
                    answer: "TRUE EMERGENCY. Cool first, transport second: 1) Move to cool area, remove clothing; 2) Aggressive cooling — cold water immersion (exertional) or evaporative cooling (mist + fan, ice packs to groin/axillae/neck, cold IV fluids); 3) Monitor ABCs; 4) Transport rapidly. Do NOT give antipyretics — they do not work for environmental hyperthermia.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What is the difference between exertional and classic heat stroke?",
                    answer: "Exertional: young active individuals, rapid onset, often still sweating, cold water immersion is gold standard. Classic: elderly/infants, slow onset over heat wave days, more likely to have anhidrosis (dry skin), evaporative cooling preferred. Both are life-threatening.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What are heat cramps and how are they managed?",
                    answer: "Painful muscle spasms from electrolyte depletion (hyponatremia) due to heavy sweating. Most common in calves, thighs, abdomen. Management: rest in cool environment, passive stretching, oral electrolyte-containing fluids (sports drinks). Do NOT use salt tablets.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What medications increase the risk of heat illness?",
                    answer: "Anticholinergics (impair sweating), beta-blockers (blunt cardiac response), diuretics (volume/electrolyte depletion), antipsychotics (can cause NMS), stimulants (cocaine, MDMA — increase heat production). Acclimatization takes 7–14 days.",
                    category: "Environmental — Heat"
                },
                {
                    question: "What is the difference between malignant hyperthermia (MH) and neuroleptic malignant syndrome (NMS)?",
                    answer: "MH: rapid onset, triggered by anaesthetics (succinylcholine, volatile agents), treated with dantrolene. NMS: slower onset (days-weeks), triggered by antipsychotics, features muscle rigidity + hyperthermia + AMS + autonomic instability. Both cause severe hyperthermia requiring aggressive cooling.",
                    category: "Environmental — Heat"
                },
                {
                    question: "Why should an EMS provider not give antipyretics for heat stroke?",
                    answer: "Antipyretics (acetaminophen, NSAIDs) work by lowering the hypothalamic set point in fever. In environmental hyperthermia, the set point is normal — the body is simply overwhelmed by heat. Antipyretics have no physiologic effect and may worsen outcomes (liver toxicity, coagulopathy).",
                    category: "Environmental — Heat"
                }
            ],
            quiz: [
                {
                    q: "A 22-year-old football player collapses during practice on a hot, humid day. He is confused, combative, and does not follow commands. His skin is hot and moist (sweating). His core temperature is 106.2°F (41.2°C). What is the most likely diagnosis and what is your priority intervention?",
                    options: [
                        "Heat exhaustion — move to shade and give oral fluids",
                        "Heat stroke — initiate aggressive cooling (cold water immersion or mist + fan), monitor ABCs, and transport emergently. Do NOT give antipyretics",
                        "Simple dehydration — provide water and rest",
                        "Seizure disorder — manage airway and transport for neurologic evaluation"
                    ],
                    correct: 1,
                    explanation: "CNS dysfunction (confusion, combativeness) with core temperature >104°F defines heat stroke, even though the patient is still sweating (hot moist skin — sweating is common in exertional heat stroke). Aggressive cooling is the priority. Antipyretics are ineffective for environmental hyperthermia."
                },
                {
                    q: "A 68-year-old female is found in her apartment during a heat wave. She has no air conditioning and her apartment is 98°F. She is confused, lethargic, and has hot, dry, red skin. Her core temperature is 107.1°F (41.7°C). She has a history of hypertension and takes a beta-blocker and a diuretic. Which of the following is the most important factor contributing to her heat stroke?",
                    options: [
                        "She is elderly with impaired thermoregulation and her medications (beta-blocker blunts cardiac output; diuretic causes volume depletion) significantly increase her risk — plus the lack of air conditioning created a dangerous environment",
                        "She should have taken her medications with food to prevent heat stroke",
                        "The dry skin is a good sign — it means she is not dehydrated",
                        "Heat stroke in the elderly is less dangerous than in young athletes"
                    ],
                    correct: 0,
                    explanation: "Classic heat stroke in the elderly is caused by a combination of: impaired thermoregulation (age-related decreased sweating, reduced cardiovascular reserve), medications that impair heat loss (beta-blockers, diuretics, anticholinergics), environmental exposure (lack of air conditioning), and often underlying chronic illness. Hot dry skin in this context is a LATE sign of anhidrosis. Mortality in elderly classic heat stroke is significantly higher than in young exertional heat stroke."
                },
                {
                    q: "[HARD] You are treating a 28-year-old marathon runner with suspected heat stroke. On arrival, she is confused with a core temperature of 105.8°F. She is still sweating profusely. You begin evaporative cooling with a spray bottle and fan while your partner applies ice packs to her groin, axillae, and neck. Her mental status improves during transport and her temperature drops to 100.4°F. What is the MOST important ongoing monitoring priority for this patient?",
                    options: [
                        "She is now normothermic and can be discharged from the ambulance — no further monitoring is needed",
                        "Continue monitoring core temperature closely — stop active cooling when core temp reaches ~102°F (39°C) to prevent overshoot hypothermia. Monitor for rebound hyperthermia, seizures, dysrhythmias, and signs of DIC or rhabdomyolysis",
                        "Rewarm her now — her temperature dropped too quickly",
                        "Give acetaminophen to prevent the fever from returning"
                    ],
                    correct: 1,
                    explanation: "Aggressive cooling should be discontinued at ~102°F (39°C) to prevent overshoot hypothermia (the body's thermoregulatory system may be sluggish, causing continued cooling below normal). Ongoing monitoring is essential: rebound hyperthermia can occur, and systemic complications (rhabdomyolysis → acute kidney injury, DIC, electrolyte abnormalities, dysrhythmias, cerebral oedema) may require hours to days to manifest. Antipyretics have no role. This patient requires hospital evaluation even though she improved."
                },
                {
                    q: "Which of the following statements about cooling methods for heat stroke is correct?",
                    options: [
                        "Alcohol rubdowns are the most effective evaporative cooling method",
                        "Cold water immersion is the gold standard for exertional heat stroke — it lowers core temperature fastest and reduces mortality",
                        "Ice packs should be placed on the patient's back and chest for maximum heat transfer",
                        "Antipyretics (acetaminophen, ibuprofen) should be given immediately to lower the core temperature"
                    ],
                    correct: 1,
                    explanation: "Cold water immersion is the gold standard for exertional heat stroke, reducing core temperature by 0.09–0.35°C/min. Ice packs are best placed in the groin, axillae, and neck (areas with superficial large vessels). Alcohol should NOT be used (toxic when absorbed, and it evaporates too quickly). Antipyretics are ineffective for environmental hyperthermia."
                }
            ],
            critical: [
                {
                    id: "crit_8_1_1",
                    scenario: "You are dispatched to a local high school football field on a hot August afternoon. The temperature is 96°F with 75% humidity (heat index 132°F). A 17-year-old offensive lineman collapsed during the third hour of practice. On arrival, teammates have moved him to the sideline in the shade. He is confused, agitated, and does not recognize his coach. He is attempting to get up and wander away. His skin is hot and MOIST (profusely sweating). His shirt is soaked. Vital signs: HR 142, BP 96/58, RR 28, SpO₂ 96% on room air. His teammates have given him a water bottle and he has drunk about 16 oz of plain water. A rectal temperature obtained by the athletic trainer is 106.5°F (41.4°C).",
                    question: "The athletic trainer asks if they should put him in the cold-water immersion tub they have on the sideline. What is your assessment and management plan?",
                    options: [
                        {t: "This is exertional heat stroke — a TRUE emergency. YES, cold water immersion is the gold standard. Immerse him (head out) in ice water immediately, stir the water to prevent a warm boundary layer, monitor airway, and cool to target of ~102°F before transport. Do NOT delay cooling for transport", f: "Correct — Core temp 106.5°F + CNS dysfunction (confusion, agitation, not recognizing coach) + hot moist skin (still sweating) = exertional heat stroke. Cold water immersion is the gold standard and can reduce mortality from ~50% to near zero when applied promptly. Cool first, transport second. Transport after cooling target is reached, continuing cooling en route if needed."},
                        {t: "This is heat exhaustion from dehydration — give him more water and have him rest. Cold water immersion is too extreme and could cause shock", f: "Incorrect — A core temperature of 106.5°F with CNS dysfunction defines heat stroke, not heat exhaustion. Cold water immersion is the indicated treatment for exertional heat stroke. Plain water alone (without electrolytes) may worsen hyponatremia. Delay in cooling increases mortality."}
                    ],
                    correct: 0,
                    explanation: "Exertional heat stroke is a life-threatening emergency with mortality directly related to the duration of hyperthermia. Cold water immersion is the gold standard and should be initiated at the scene before transport. Key steps: 1) Remove equipment and clothing; 2) Immerse in cold/ice water (head out, stir water); 3) Protect the airway — these patients can be combative; 4) Monitor for seizures and dysrhythmias; 5) Transport to a hospital capable of managing multi-organ failure (rhabdomyolysis, AKI, DIC, electrolyte abnormalities). The patient's confusion and combativeness are from CNS dysfunction, not 'toughness' or dehydration. Antipyretics should NOT be given. Document the scene temperature, humidity, activity level, and duration of cooling.",
                    kpi: "Recognises exertional heat stroke and immediately initiates cold water immersion before transport"
                },
                {
                    id: "crit_8_1_2",
                    scenario: "You respond to a private residence for a 75-year-old female with altered mental status. The apartment is stuffy and hot — the family reports the air conditioner has been broken for 3 days during a heat wave with temperatures of 98–102°F daily. The patient has a history of hypertension, diabetes, and Alzheimer's disease. She takes hydrochlorothiazide (a diuretic), lisinopril, metformin, and diphenhydramine (Benadryl) for allergies. On exam, she is confused and lethargic — she withdraws from painful stimuli but does not follow commands. Her skin is HOT, DRY, and flushed. No sweating is noted. Vital signs: HR 134, BP 88/54, RR 26, SpO₂ 94%. Core temperature (tympanic) is 107.8°F (42.1°C).",
                    question: "What type of heat stroke is this, what factors contributed to it, and how should you manage this patient differently from the exertional heat stroke patient?",
                    options: [
                        {t: "Classic (non-exertional) heat stroke in an elderly patient with multiple contributing factors (age, no AC, diuretic causing volume depletion, diphenhydramine impairing sweating, chronic disease). Evaporative cooling (mist + fan) is more practical than immersion — avoid aggressive cold water immersion in elderly patients due to risk of cardiac dysrhythmias and shivering. Apply ice packs to groin/axillae/neck. Monitor for dysrhythmias. Transport rapidly with cooling ongoing", f: "Correct — Classic heat stroke develops over days in vulnerable populations. The anticholinergic effects of diphenhydramine impair sweating (hence the hot dry skin). Evaporative cooling is preferred over immersion in the elderly due to higher risk of cardiac complications from rapid temperature change. Cold IV fluids (4°C NS) can be given. Monitor core temperature closely to avoid overshoot hypothermia."},
                        {t: "This is simply a worsening of her Alzheimer's disease — the hot environment is a coincidence. Give her oxygen and transport for neurologic evaluation", f: "Incorrect — Core temperature of 107.8°F with hot dry skin and CNS depression in an elderly person without AC during a heat wave is classic (non-exertional) heat stroke. Alzheimer's may explain baseline confusion but the acute change with extreme hyperthermia is heat stroke. This is a life-threatening emergency requiring aggressive cooling and rapid transport."}
                    ],
                    correct: 0,
                    explanation: "Classic heat stroke has a slower onset than exertional, typically affects the elderly and chronically ill, and the skin is more often hot and dry (anhidrosis). Management differs: evaporative cooling (mist + fan) is preferred over full-body cold water immersion in elderly patients because rapid temperature changes can precipitate dysrhythmias. Ice packs to high-heat-transfer areas (groin, axillae, neck) and cold IV fluids are valuable adjuncts. This patient also has significant volume depletion from her diuretic — IV fluids are essential. She is at high risk for multi-organ failure (AKI from rhabdomyolysis, DIC, hepatic failure, ARDS) and should be transported to a critical care-capable facility. Discontinue or hold her diuretic and antihistamine in the field per protocol once the diagnosis is established, as both worsen heat illness.",
                    kpi: "Differentiates classic from exertional heat stroke and applies age-appropriate cooling strategies"
                },
                {
                    id: "crit_8_1_3",
                    scenario: "During a community 10K race on a warm morning (85°F, 60% humidity), a 34-year-old male collapses at the 8-mile mark. Bystanders report he was running aggressively and appeared to be struggling for the last mile. On your arrival, he is sitting on the ground, supported by a friend. He is awake but confused — he keeps asking 'where am I?' and cannot remember the race he was running. He is nauseous and vomits clear fluid. His skin is pale, cool, and clammy (profusely sweating). Vital signs: HR 128, BP 92/60, RR 26, SpO₂ 97%. His core temperature is 101.8°F (38.8°C). He has no medical alert jewellery and no known history of seizures or diabetes. Blood glucose is 112 mg/dL.",
                    question: "Given the confusion, nausea, vomiting, low-normal temperature, and tachycardia, is this heat exhaustion, heat stroke, or something else? What is your management?",
                    options: [
                        {t: "This is heat exhaustion — the core temperature is <104°F, the patient has intact but altered cognition (confused but no seizure/coma), and is still sweating profusely (clammy skin). However, the confusion raises concern. Manage as heat exhaustion with close monitoring: move to shade, remove excess clothing, mist + fan, oral electrolyte fluids if tolerated, supine with legs elevated. Reassess mental status frequently — if confusion worsens or temperature rises, upgrade to heat stroke management", f: "Correct — This patient has heat exhaustion with the key distinguishing feature that his core temperature is only 101.8°F (<104°F) and his confusion is mild (disoriented but not combative or unconscious). However, ANY confusion in a heat illness patient warrants close monitoring because it can signal progression to heat stroke. The vomiting and nausea suggest significant volume depletion. Treat as heat exhaustion but have a low threshold to escalate."},
                        {t: "This is clearly heat stroke because he is confused — confusion is CNS dysfunction. Initiate cold water immersion immediately", f: "Incorrect — While confusion is a CNS sign, the core temperature of 101.8°F does NOT meet the diagnostic threshold for heat stroke (>104°F). Heat stroke requires hyperthermia (>104°F) WITH CNS dysfunction. This patient likely has heat exhaustion exacerbated by exertion. However, the presence of confusion means he must be watched very closely for deterioration. Labeling this as heat stroke and performing aggressive cooling carries risks (shivering, afterdrop, patient combativeness) and is not indicated when the core temp is only 101.8°F."}
                    ],
                    correct: 0,
                    explanation: "This is a borderline presentation that favours heat exhaustion with significant volume depletion. The key finding is a core temperature of 101.8°F — below the 104°F threshold for heat stroke. However, ANY confusion is atypical for simple heat exhaustion and warrants close monitoring. Management: 1) Remove from heat, 2) Evaporative cooling (mist + fan — may prevent progression), 3) Position supine with legs elevated, 4) Provide oral electrolyte fluids if not nauseated (he is vomiting, so IV fluids may be needed), 5) Recheck core temperature every 5 minutes, 6) If temperature rises above 104°F or confusion worsens (seizure, coma), escalate immediately to heat stroke protocol. Transport for evaluation — he may need IV fluids and electrolyte repletion in the emergency department. This scenario illustrates the importance of monitoring the TREND rather than relying on a single temperature reading.",
                    kpi: "Differentiates heat exhaustion from heat stroke using both temperature and mental status, with appropriate escalation plan"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s2 – Cold Exposure & Hypothermia
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s2",
            shortTitle: "8.2 Cold Exposure & Hypothermia",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#snowflake"/></svg> Cold Exposure & Hypothermia</h3>

                <p><strong>Hypothermia</strong> is defined as a core body temperature below 95°F (35°C). It occurs when heat loss exceeds heat production, overwhelming the body's thermoregulatory capacity. Hypothermia can be <strong>primary</strong> (environmental exposure in an otherwise healthy person) or <strong>secondary</strong> (underlying illness impairs thermoregulation — e.g., sepsis, hypoglycaemia, hypothyroidism, trauma, intoxication, spinal cord injury). Secondary hypothermia is more common in the elderly and chronically ill. The classic teaching — <strong>"You're not dead until you're warm and dead"</strong> — reflects the remarkable potential for successful resuscitation even in severe hypothermia with prolonged cardiac arrest.</p>

                <h4>Stages of Hypothermia</h4>
                <p>Hypothermia is staged by core temperature, with progressively worsening physiologic effects:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Stage</th><th>Core Temp</th><th>Clinical Findings</th><th>Key Features</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Mild</strong></td><td>90–95°F (32–35°C)</td><td>Shivering (vigorous — a key compensatory mechanism), apathy, lethargy, social withdrawal, impaired fine motor coordination, cold diuresis (vasoconstriction increases central blood volume → increased urine output → volume depletion), tachypnoea, tachycardia. The patient is still generating heat through shivering and may present with slurred speech and mild ataxia (the 'cold drunk' appearance — often mistaken for intoxication).</td><td>Patient is shivering — this is a GOOD sign (intact thermoregulation). Shivering can increase heat production by 2–5× baseline.</td></tr>
                        <tr><td><strong>Moderate</strong></td><td>82–90°F (28–32°C)</td><td><strong>Shivering stops</strong> — this is a critical transition point; the body can no longer generate heat through muscle activity. Progressive decline in mental status (confusion, disorientation, paradoxical undressing — the patient feels warm and removes clothing, worsening exposure). Bradycardia, bradypnoea, dilated pupils, hyporeflexia, and loss of motor function. Atrial fibrillation (AFib) is common — do not treat the AFib, treat the hypothermia. The patient may appear obtunded or stuporous.</td><td>Shivering stops = the body has exhausted its primary heat-generating mechanism. The patient can no longer compensate. This marks the transition to severe physiologic compromise.</td></tr>
                        <tr><td><strong>Severe</strong></td><td>&lt;82°F (&lt;28°C)</td><td><strong>Coma, areflexia, pulseless, apneic.</strong> The classic signs of life may be absent. The patient appears dead (fixed and dilated pupils, no reflexes, no palpable pulse, no audible heart tones). Ventricular fibrillation (V-fib) is highly prone — the cold myocardium is irritable. All enzyme systems slow dramatically, decreasing oxygen demand. <strong>Prolonged CPR is warranted</strong> — successful resuscitations with good neurologic outcomes have been reported after >60 minutes of CPR with ECMO rewarming.</td><td>The patient may appear dead — ASSUME THEY ARE ALIVE. "You're not dead until you're warm and dead." Assess pulse for 30–45 seconds before starting CPR. Handle GENTLY — rough movement can precipitate V-fib.</td></tr>
                    </tbody>
                </table></div>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning — "You're Not Dead Until You're Warm and Dead":</strong> Patients with severe hypothermia (core temp &lt;82°F) can appear dead — no pulse, no respirations, fixed/dilated pupils, areflexia — but may be successfully resuscitated. The cold dramatically decreases metabolic oxygen demand, protecting vital organs from ischaemic injury. Death can only be declared after the patient has been rewarmed to near-normal core temperature and is still asystolic and apnoeic. <strong>Never pronounce death in a hypothermic patient until they have been rewarmed.</strong>
                </div>

                <h4>Rewarming Methods</h4>
                <p>Rewarming strategies are selected based on the severity of hypothermia, patient stability, and available resources. The fundamental principle: <strong>in mild hypothermia, passive rewarming suffices. In moderate-to-severe hypothermia, active rewarming is needed.</strong></p>

                <h5>1. Passive External Rewarming</h5>
                <ul>
                    <li><strong>Mechanism:</strong> Allow the patient to rewarm using their own metabolic heat production while minimising further heat loss</li>
                    <li><strong>Techniques:</strong> Remove wet clothing, move to a warm environment, cover with blankets (including reflective "space blankets"), cover the head (major heat loss site), provide warm oral fluids (if patient is alert and can swallow).</li>
                    <li><strong>Indication:</strong> Mild hypothermia (90–95°F) in a shivering patient who can generate their own heat</li>
                    <li><strong>Limitation:</strong> Ineffective if the patient has stopped shivering (moderate-severe hypothermia) — they cannot generate enough metabolic heat</li>
                </ul>

                <h5>2. Active External Rewarming</h5>
                <ul>
                    <li><strong>Mechanism:</strong> Apply external heat sources to transfer heat into the patient</li>
                    <li><strong>Techniques:</strong> Heat packs, warm water bottles, warm blankets, forced-air warming (Bair Hugger), warm water immersion (truncal immersion only — do NOT immerse extremities separately before the core is rewarmed, as this causes peripheral vasodilation and afterdrop). <strong>Apply heat sources to TRUNCAL areas only</strong> — chest, back, groin, axillae.</li>
                    <li><strong>Indication:</strong> Moderate hypothermia (82–90°F) — shivering has stopped and external heat is needed</li>
                    <li><strong>Contraindications/Precautions:</strong> Do NOT apply heat packs directly to bare skin (burns can occur in patients with impaired sensation). Do NOT warm the extremities before the core — this causes vasodilation, shunting cold peripheral blood to the core (afterdrop), and can precipitate cardiovascular collapse.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Afterdrop Phenomenon:</strong> Afterdrop is the continued decline in core temperature AFTER the patient has been removed from the cold environment and rewarming has begun. It is caused by: (1) cold blood from the periphery returning to the core as peripheral vasodilation occurs, and (2) the temperature gradient between warm core and cold periphery (heat continues to conduct to the periphery). Afterdrop can be minimized by: (1) handling the patient gently (minimise movement → minimise peripheral vasodilation), (2) applying heat to the trunk FIRST (not the extremities), and (3) keeping the patient horizontal (vertical position → orthostatic hypotension from vasodilation).
                </div>

                <h5>3. Active Internal Rewarming</h5>
                <ul>
                    <li><strong>Mechanism:</strong> Deliver heat directly to the core through the vascular system, airway, or body cavities</li>
                    <li><strong>Techniques:</strong>
                        <ul>
                            <li><strong>Warm humidified oxygen:</strong> Administer oxygen heated to 42–46°C via a standard face mask or advanced airway. Provides a modest but steady heat transfer to the core through the respiratory tract.</li>
                            <li><strong>Warm IV fluids:</strong> Administer normal saline heated to 42°C (slightly above body temperature). Standard IV fluid warmers heat to this range. Each litre of warm IV fluid raises core temperature by approximately 0.25°C.</li>
                            <li><strong>Warm gastric/peritoneal/pleural lavage:</strong> Advanced techniques (ALS/per hospital) using warm saline instilled into body cavities for direct heat transfer to the core.</li>
                            <li><strong>ECMO (Extracorporeal Membrane Oxygenation) or CPB (Cardiopulmonary Bypass):</strong> Definitive rewarming for severe hypothermia with cardiac arrest. Blood is drained from the body, warmed through a heat exchanger, and returned. This is the gold standard for severe hypothermic cardiac arrest and can rewarm at 1–5°C per 15 minutes.</li>
                        </ul>
                    </li>
                    <li><strong>Indication:</strong> Moderate-severe hypothermia, especially when the patient is in cardiac arrest or haemodynamically unstable</li>
                </ul>

                <h4>Hypothermia and Cardiac Arrest</h4>
                <p>Cardiac arrest in the setting of severe hypothermia presents unique management challenges. The cold myocardium is prone to <strong>ventricular fibrillation (V-fib)</strong>, which can be precipitated by any sudden movement or stimulus — including endotracheal intubation, central line placement, rough handling, or even moving the patient from the stretcher to the bed.</p>

                <p><strong>Key management principles:</strong></p>
                <ul>
                    <li><strong>Assess pulse for 30–45 seconds</strong> before starting CPR — a severely hypothermic patient may have a heart rate of 10–15 bpm with a barely palpable pulse. Palpate the carotid or femoral pulse for a full 30–45 seconds. Checking for a shorter period may lead to the false impression of cardiac arrest and unnecessary chest compressions (which can itself precipitate V-fib).</li>
                    <li><strong>Handle patients GENTLY</strong> — avoid rough movement, unnecessary repositioning, and any sudden jarring of the stretcher. Rough handling can precipitate V-fib in the irritable, cold myocardium.</li>
                    <li><strong>Prolonged CPR is warranted</strong> — the cold-protected brain and heart can tolerate longer periods of arrest. Continue CPR while actively rewarming the patient. Successful resuscitations have been reported after >60 minutes of CPR when ECMO rewarming was available.</li>
                    <li><strong>Defibrillation:</strong> May be <strong>ineffective below 86°F (30°C)</strong>. The cold myocardium is electrically unstable and resistant to defibrillation. Limit shock attempts — follow ACLS for the first 3 shocks; if core temp <86°F and the patient remains in V-fib/pulseless VT after 3 shocks, <strong>withhold further defibrillation attempts</strong> until the core temperature is raised above 86°F. Resume defibrillation attempts at 86°F (30°C) increments.</li>
                    <li><strong>Antiarrhythmics:</strong> May not work until core temp >86°F (30°C). Drug metabolism and receptor binding are slowed by cold. Medications may accumulate without effect and then become suddenly active as the patient warms — use reduced dosing intervals (e.g., extended intervals between lidocaine or amiodarone doses).</li>
                    <li><strong>ECMO/CPB rewarming:</strong> The definitive treatment for severe hypothermia with cardiac arrest. Transport to an ECMO-capable centre if possible.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Rule — GENTLE Handling:</strong> Severe hypothermia makes the myocardium exquisitely irritable and prone to V-fib. <strong>Treat the patient like a "Fabergé egg"</strong> — move gently, use slow smooth movements, avoid jarring the stretcher, minimise repositioning. Even minor stimuli (OT suctioning, moving from a wet to dry stretcher) can trigger V-fib. The difference between a viable and a non-viable patient may be how gently you handle them.
                </div>

                <h4>Frostbite</h4>
                <p><strong>Frostbite</strong> is a freezing injury to tissues caused by exposure to temperatures below the freezing point of water (32°F / 0°C). Ice crystals form in the extracellular space, causing cell dehydration, membrane damage, and microvascular thrombosis. Severity ranges from superficial (reversible) to deep (tissue loss requiring amputation).</p>

                <p><strong>Degrees of frostbite:</strong></p>
                <ul>
                    <li><strong>First-degree (frostnip):</strong> Numbness, erythema, and a white or yellow plaque on the skin surface. No blistering. Reversible with gentle rewarming.</li>
                    <li><strong>Second-degree:</strong> Blistering (clear or milky fluid) with surrounding erythema and oedema. Deep pain may persist. Blisters should be left intact — do NOT drain them in the field.</li>
                    <li><strong>Third-degree:</strong> Haemorrhagic (blood-filled) blisters, full-thickness skin necrosis, and a hard, wood-like texture. The skin turns black (mummification) over days to weeks. Deep pain may be followed by persistent numbness.</li>
                    <li><strong>Fourth-degree:</strong> Involvement of deeper structures (muscle, tendon, bone). Complete tissue loss is inevitable — amputation is usually required.</li>
                </ul>

                <p><strong>Management:</strong></p>
                <ul>
                    <li><strong>DO NOT rub or massage the affected area</strong> — this causes mechanical damage to frostbitten tissue and worsens injury. The old teaching of 'rubbing snow on frostbite' is DANGEROUS and causes further damage.</li>
                    <li><strong>DO NOT thaw if there is any risk of refreezing</strong> — partial thawing followed by refreezing causes exponentially worse tissue damage. If the patient must walk out on frozen feet, keep them frozen until definitive care is reached. Once thawing begins, the tissue must remain thawed.</li>
                    <li><strong>Rapid rewarming in water:</strong> Immerse the affected part in circulating water at 37–40°C (98.6–104°F) — warm to the touch but not hot. Continue until the tissue is pliable and flushed (usually 15–30 minutes). Do NOT use dry heat (heating pads, hair dryers, open fires) — the tissue is insensate and will burn easily.</li>
                    <li><strong>Analgesia:</strong> Rewarming is <strong>excruciatingly painful</strong>. Administer analgesia per protocol (morphine, fentanyl, or NSAIDs like ibuprofen, which also provides anti-inflammatory effects).</li>
                    <li><strong>Ibuprofen:</strong> 400–600 mg PO has been shown to improve outcomes in frostbite by reducing inflammation and microvascular thrombosis. Administer per local protocol.</li>
                    <li><strong>Protect the tissue:</strong> After rewarming, place sterile cotton or gauze between toes/fingers (to prevent maceration), elevate the extremity to reduce oedema, and avoid pressure on affected areas. Do NOT puncture blisters.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Frostbite vs Hypothermia:</strong> A patient with frostbite of the extremities may have a normal core temperature — or may have severe hypothermia. Always assess the core temperature <em>first</em>. Frostbite in a hypothermic patient should not be rewarmed until the core temperature is above 95°F (35°C) — peripheral rewarming before core rewarming causes afterdrop. In hypothermia with frostbite: <strong>core rewarming first, then extremity rewarming.</strong>
                </div>

                <h4>Non-Freezing Cold Injuries</h4>
                <p><strong>Trench foot (immersion foot):</strong> Caused by prolonged exposure of the feet to cold, wet conditions (typically 32–50°F / 0–10°C) without freezing. Common in soldiers, homeless individuals, and outdoor workers. Moisture and cold cause vasoconstriction and neurovascular damage. Presentation: the foot is initially cold, pale, and numb (the <strong>vasoconstrictive phase</strong>). After rewarming, the foot becomes hyperaemic (red, hot, painful, and swollen with severe burning pain — the <strong>hyperaemic phase</strong>). Management: gently dry and warm the feet, elevate to reduce oedema, protect from trauma, and transport. Do NOT massage or apply direct heat. The pain can be severe and may require analgesia.</p>

                <p><strong>Chilblains (pernio):</strong> A milder cold injury caused by repeated exposure to cold (above freezing) with high humidity. Presents as tender, red-purple plaques, papules, or nodules on the fingers, toes, ears, or nose. Itching and burning are common. The lesions appear 12–24 hours after cold exposure and may last 1–3 weeks. Management: gentle rewarming, elevation, protect from further cold exposure. The condition is self-limiting but can be recurrent in susceptible individuals.</p>

                <h4>EMS Provider Assessment Pearls for Cold Exposure</h4>
                <ul>
                    <li><strong>History:</strong> Duration of cold exposure, environmental conditions (temperature, wind speed, wetness), clothing worn, alcohol or drug use, underlying medical conditions (hypothyroidism, diabetes, spinal cord injury), medications (sedatives, antipsychotics, beta-blockers).</li>
                    <li><strong>Vital signs:</strong> Use a low-reading thermometer — standard thermometers may not register below 94°F (34.4°C). Rectal temperature is the gold standard for core temperature measurement in hypothermia.</li>
                    <li><strong>ECG changes:</strong> In moderate-severe hypothermia, the ECG may show <strong>Osborne (J) waves</strong> — a positive deflection at the J-point (between QRS and ST segment), best seen in the precordial leads. Also: bradycardia, prolonged PR/QRS/QT intervals, and atrial fibrillation. The presence of Osborne waves is pathognomonic for hypothermia.</li>
                    <li><strong>Blood glucose:</strong> Hypoglycaemia commonly accompanies hypothermia (impaired gluconeogenesis, increased glucose consumption from shivering). Check blood glucose in ALL hypothermic patients — treat hypoglycaemia if present.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Focus — Key Takeaways:</strong><br>
                    • Assess pulse for 30–45 seconds before starting CPR in suspected hypothermic cardiac arrest<br>
                    • "You're not dead until you're warm and dead" — never pronounce death until rewarmed<br>
                    • Handle hypothermic patients GENTLY — rough handling precipitates V-fib<br>
                    • Do NOT thaw frostbite if there is a risk of refreezing; do NOT rub frostbitten tissue<br>
                    • In moderate-severe hypothermia, apply heat only to the TRUNK — warming extremities first causes afterdrop<br>
                    • Defibrillation and antiarrhythmics may be ineffective below 86°F (30°C)
                </div>
            </div>`,
            flashcards: [
                {
                    question: "What are the three stages of hypothermia by core temperature and their key features?",
                    answer: "Mild (90–95°F): shivering, apathy, cold diuresis. Moderate (82–90°F): shivering STOPS, AMS, paradoxical undressing, dilated pupils, bradycardia. Severe (<82°F): coma, areflexia, pulseless/apneic, V-fib prone. 'Not dead until warm and dead.'",
                    category: "Environmental — Cold"
                },
                {
                    question: "Why should you handle a hypothermic patient gently?",
                    answer: "The cold myocardium is irritable and prone to V-fib. Rough movement, jarring the stretcher, or aggressive suctioning can precipitate ventricular fibrillation — a life-threatening dysrhythmia that may be refractory to defibrillation until the core temperature rises above 86°F (30°C).",
                    category: "Environmental — Cold"
                },
                {
                    question: "What is the afterdrop phenomenon and how is it prevented?",
                    answer: "The continued decline in core temperature after removal from cold — caused by cold peripheral blood returning to the core as vasodilation occurs. Prevention: handle gently, apply heat to the TRUNK first (not extremities), keep the patient horizontal, minimise movement.",
                    category: "Environmental — Cold"
                },
                {
                    question: "How should frostbite be managed in the prehospital setting?",
                    answer: "DO NOT rub or massage. DO NOT thaw if risk of refreezing. Rewarm in 37–40°C water (not dry heat). Give ibuprofen for pain/inflammation and analgesia (rewarming is extremely painful). Protect blisters — do NOT drain. In hypothermic patients with frostbite: rewarm the CORE first, then the extremities.",
                    category: "Environmental — Cold"
                },
                {
                    question: "What are the special considerations for defibrillation and medications in severe hypothermia?",
                    answer: "Defibrillation may be ineffective below 86°F (30°C) — limit shocks; withhold further attempts if no response after 3 shocks until core temp >86°F. Antiarrhythmics may not work until core temp >86°F. Use extended dosing intervals. Prolonged CPR is warranted — cold protects the brain.",
                    category: "Environmental — Cold"
                },
                {
                    question: "How should you assess for a pulse in a hypothermic patient?",
                    answer: "Palpate the carotid or femoral pulse for 30–45 seconds before starting CPR. Severe hypothermia can cause extreme bradycardia (10–15 bpm) with barely palpable pulses. A shorter pulse check may falsely diagnose cardiac arrest, leading to unnecessary compressions that can precipitate V-fib.",
                    category: "Environmental — Cold"
                },
                {
                    question: "What are the rewarming methods for each stage of hypothermia?",
                    answer: "Mild (shivering): passive external (warm environment, blankets, reflective barriers, warm fluids PO). Moderate: active external (heat packs to trunk only, warm blankets, forced-air warming). Severe: active internal (warm humidified O₂, warm IV fluids 42°C, warm lavage, ECMO/CPB for cardiac arrest).",
                    category: "Environmental — Cold"
                },
                {
                    question: "What is trench foot and how is it managed?",
                    answer: "A non-freezing cold injury from prolonged exposure to cold, wet conditions (32–50°F). Vasoconstrictive phase (cold, pale, numb) → hyperaemic phase (red, hot, painful, swollen) upon rewarming. Management: gently dry and warm, elevate, protect from trauma, analgesia. Do NOT massage or apply direct heat.",
                    category: "Environmental — Cold"
                }
            ],
            quiz: [
                {
                    q: "A 45-year-old homeless male is found in an alley on a 28°F night. He is unresponsive with no visible shivering. His skin is cold and his pupils are fixed and dilated. You palpate his carotid artery for 30 seconds and feel a weak, slow pulse at approximately 12 beats per minute. His respirations are shallow at 4–6 breaths per minute. What should the EMS provider do FIRST?",
                    options: [
                        "Immediately begin CPR — the patient is in cardiac arrest with a slow pulse rate that will likely stop",
                        "Do not start CPR — a pulse is present. Begin gentle handling, passive external rewarming (remove wet clothes, warm blankets, heat packs to trunk), warm humidified oxygen, warm IV fluids, and transport. Handle EXTREMELY gently to avoid precipitating V-fib",
                        "Defibrillate immediately — the slow pulse indicates a shockable rhythm",
                        "Administer atropine to increase the heart rate"
                    ],
                    correct: 1,
                    explanation: "A palpable pulse, even at 10–15 bpm, means the patient is NOT in cardiac arrest. CPR is contraindicated. Severe hypothermia causes extreme bradycardia as a protective mechanism (decreased metabolic demand). Key management: gentle handling (risk of V-fib), passive and active external rewarming (trunk only), warm humidified O₂, warm IV fluids, and rapid transport to a centre capable of active internal rewarming. Do NOT rough-handle or aggressively stimulate the patient."
                },
                {
                    q: "A ski patrol brings you a 32-year-old male found unresponsive on the mountain. He is not wearing a jacket. Core temperature is 78°F (25.6°C). He has no pulse and is apnoeic. You begin CPR and attempt defibrillation for V-fib — no response after 2 shocks. The estimated transport time to the hospital is 45 minutes. What should the EMS provider do regarding further defibrillation attempts?",
                    options: [
                        "Continue defibrillation attempts every 2 minutes — persistent efforts may eventually work",
                        "Withhold further defibrillation — the core temp is <86°F (30°C), making defibrillation ineffective. Continue CPR, actively rewarm, and transport to an ECMO-capable centre. Rewarming is the priority — arrange for ECMO/CPB rewarming at the receiving hospital",
                        "Administer amiodarone — antiarrhythmics work even in deep hypothermia",
                        "Transport the patient without CPR — the hypothermia is protective and the patient doesn't need chest compressions"
                    ],
                    correct: 1,
                    explanation: "Defibrillation is typically ineffective below 86°F (30°C). After 3 failed shocks, withhold further defibrillation until the core temperature is raised above 86°F. Continue CPR (prolonged resuscitation is warranted — hypothermia protects the brain), actively rewarm (warm humidified O₂, warm IV fluids, heat packs to trunk, and arrange for ECMO/CPB rewarming at the destination). Antiarrhythmics are also ineffective below 86°F. Do NOT stop CPR — the patient requires ongoing circulation support."
                },
                {
                    q: "[HARD] A 55-year-old male is found in his home after a power outage during a winter storm. The indoor temperature is 45°F. He has been without power for 3 days. He is confused and lethargic with a core temperature of 86.5°F (30.3°C). He is not shivering. His hands are white, hard, and insensate — consistent with deep frostbite. The transport time to the hospital is 30 minutes. Which rewarming strategy is MOST appropriate for this patient in the prehospital setting?",
                    options: [
                        "Begin rewarming both the hands and core simultaneously — immerse the hands in warm water while applying heat packs to the trunk",
                        "Rewarm the CORE first (warm blankets, heat packs to trunk, warm humidified O₂, warm IV fluids) and leave the frostbitten hands alone (do not thaw if there is any risk of refreezing, and peripheral rewarming before core rewarming will worsen afterdrop and can cause cardiovascular collapse)",
                        "Rewarm the hands first — the frostbite is the most serious threat and needs immediate treatment",
                        "Rub the hands vigorously to restore circulation, then apply warm packs to the trunk"
                    ],
                    correct: 1,
                    explanation: "In a patient with BOTH hypothermia and frostbite, the core must be rewarmed FIRST. Peripheral rewarming (hands) before core rewarming causes vasodilation of the extremity, shunting cold, acidotic blood from the periphery back to the core (afterdrop), which can worsen core hypothermia and precipitate V-fib or asystole. The frostbitten hands should be left frozen (not thawed) during transport — partial thawing followed by refreezing causes exponentially worse tissue damage. The frostbite will be definitively managed at the hospital after core temperature is normalized. Do NOT rub frostbitten tissue."
                },
                {
                    q: "Which of the following statements about hypothermic cardiac arrest management is correct according to NREMT guidelines?",
                    options: [
                        "Hypothermic patients in cardiac arrest should be defibrillated up to 10 times if needed to convert V-fib",
                        "Antiarrhythmic medications should be given at standard dosing intervals throughout resuscitation regardless of temperature",
                        "Assess pulse for 30–45 seconds before starting CPR; prolonged CPR with active rewarming is warranted; defibrillation may be ineffective below 86°F",
                        "Hypothermic cardiac arrest patients should be treated identically to normothermic cardiac arrest patients"
                    ],
                    correct: 2,
                    explanation: "Key differences in hypothermic cardiac arrest: (1) Check pulse for 30–45 sec (severe bradycardia may mimic arrest); (2) Prolonged CPR is warranted (cold-protected brain); (3) Defibrillation limited to 3 shocks if core temp <86°F; (4) Antiarrhythmics delayed until core >86°F; (5) ECMO/CPB is the definitive treatment. Rough handling can precipitate V-fib."
                }
            ],
            critical: [
                {
                    id: "crit_8_2_1",
                    scenario: "You are called to a hiking trail for a 38-year-old male who became separated from his group during a winter hike. He was found by search and rescue approximately 4 hours after he was reported missing. Ambient temperature is 18°F with 25 mph winds (wind chill: -5°F). The patient is lying on the ground, unresponsive. He is wearing a thin jacket that is not waterproof and his clothing is wet from snow. He is not shivering. His skin is cold and pale. You palpate for a carotid pulse — after 20 seconds you are unsure if you feel a pulse or not. The patient has agonal respirations at approximately 3 breaths per minute. A core temperature is attempted but the standard thermometer reads 'LO' (below 94°F).",
                    question: "The patient has a very low core temperature (likely severe hypothermia <82°F). You are uncertain about the presence of a pulse after 20 seconds. What is the correct action regarding pulse assessment and initiation of CPR?",
                    options: [
                        {t: "You checked for a pulse for 20 seconds and are unsure — continue checking for a FULL 30–45 seconds. Severe hypothermia can cause extreme bradycardia (10–15 bpm) with a barely palpable pulse. If after 45 seconds you still cannot definitely feel a pulse, begin CPR. Handle EXTREMELY gently during the pulse check and all subsequent care — rough movement can precipitate V-fib", f: "Correct — In severe hypothermia, a full 30–45 second pulse check is mandatory. The cold, slow heart may generate a palpable pulse only every 4–6 seconds. If a pulse is confirmed, do NOT start CPR. If no pulse after 45 seconds, begin CPR. Gentle handling throughout to avoid triggering V-fib from the irritable myocardium."},
                        {t: "The patient clearly has no pulse — begin CPR immediately. In a cardiac arrest, every second counts, and a 45-second pulse check is too long", f: "Incorrect — In severe hypothermia, the bradycardia is so extreme that a standard 5–10 second pulse check will miss it. Starting CPR on a patient who still has a pulse can: (1) cause unnecessary injuries (rib fractures, organ damage), (2) convert a perfusing rhythm to V-fib, and (3) waste resources. A 30–45 second pulse check is the NREMT standard for hypothermia."}
                    ],
                    correct: 0,
                    explanation: "This patient has severe hypothermia with a potentially perfusing rhythm at an extremely slow rate. The 30–45 second pulse check is essential to differentiate severe bradycardia from cardiac arrest. If a slow but definite pulse is confirmed: 1) Do NOT start CPR; 2) Handle GENTLY — even the pulse check and moving to the stretcher can trigger V-fib; 3) Begin passive and active rewarming (remove wet clothes, warm blankets, heat packs to trunk, warm humidified O₂, warm IV fluids); 4) Position HORIZONTALLY (minimise afterdrop); 5) Transport to a hospital capable of active internal rewarming (ECMO/CPB if available). If the patient loses the pulse en route, begin CPR, limit defibrillation attempts (3 max if core <86°F), and continue rewarming during transport. Do NOT pronounce death until the patient has been rewarmed.",
                    kpi: "Appropriately extends pulse check to 30–45 seconds in severe hypothermia before initiating CPR"
                },
                {
                    id: "crit_8_2_2",
                    scenario: "You respond to a 68-year-old female found by her neighbour in an unheated apartment during a winter power outage. The indoor temperature is 38°F. The patient is awake but confused and lethargic. She is shivering mildly. Her skin is cold and pale. She is able to speak but her speech is slurred — she says she 'just feels really tired and cold.' Her hands are cold and she has difficulty removing her gloves due to poor coordination. Vital signs: HR 52 (regular), BP 104/68, RR 14, SpO₂ 94% on room air. Core temperature is 90.7°F (32.6°C). She has no obvious frostbite of the fingers or toes — they are cold but pink with intact sensation. She is a poor historian and cannot recall her medical history. Her neighbour thinks she takes 'blood pressure pills' but does not know the names.",
                    question: "What stage of hypothermia is this patient in, and what is the appropriate rewarming strategy?",
                    options: [
                        {t: "Mild hypothermia (90–95°F) — she is shivering, which is a good sign indicating intact thermoregulation. Passive external rewarming is appropriate: remove wet clothing, cover with warm blankets including a reflective blanket, cover her head, provide warm oral fluids if she can swallow safely, and transport in a warm environment. Monitor for worsening", f: "Correct — This patient has mild hypothermia. The presence of shivering is the key indicator that she can generate her own heat. Passive external rewarming with blankets and a warm environment is sufficient. Active external rewarming (heat packs) is not yet needed but should be ready if she worsens. The slurred speech and confusion are consistent with mild hypothermia and should improve with rewarming."},
                        {t: "This is severe hypothermia — the confusion and lethargy indicate CNS dysfunction. Begin active internal rewarming immediately with warm humidified O₂, warm IV fluids, and heat packs to the trunk", f: "Incorrect — The patient's core temperature is 90.7°F (mild hypothermia range, 90–95°F) and she is still shivering. These are reassuring findings. While she has some confusion and lethargy, these are consistent with mild hypothermia. The cold diuresis and vasoconstriction of mild hypothermia can cause orthostatic hypotension and lethargy. Active internal rewarming is indicated for moderate-severe hypothermia (core temp < 90°F or shivering stopped). Over-treating her with aggressive active rewarming carries risks (afterdrop, burns from heat packs on sedated skin, fluid overload)."}
                    ],
                    correct: 0,
                    explanation: "Mild hypothermia (90–95°F) with intact shivering is managed with passive external rewarming. Key steps: 1) Gentle handling (always, regardless of stage); 2) Remove wet clothing; 3) Apply warm blankets (and a reflective 'space' blanket); 4) Cover the head; 5) Warm the environment (ambulance heat to 75–80°F); 6) Provide warm oral fluids if the patient is alert and can swallow safely; 7) Monitor core temperature and mental status. The patient's slurred speech and lethargy should improve as she warms. If her temperature drops <90°F or shivering stops, escalate to active external rewarming (heat packs to trunk). Check blood glucose — hypothermia frequently accompanies hypoglycaemia, especially in elderly patients on medications. Check for medications that impair thermoregulation (beta-blockers, sedatives, antipsychotics). This patient may have contributing secondary hypothermia from her underlying health conditions and possible medication effects.",
                    kpi: "Correctly stages hypothermia and selects passive external rewarming for mild hypothermia with intact shivering"
                },
                {
                    id: "crit_8_2_3",
                    scenario: "You are called to a homeless shelter for a 52-year-old male who was found sleeping outside in 22°F weather overnight. He is awake but confused and has difficulty speaking. His hands are white, hard, and insensate — the fingers are waxy and frozen solid. He also has similar findings on both feet up to the midfoot. He managed to walk to the shelter before collapsing. His core temperature is 94.2°F (34.6°C) — mild hypothermia. The shelter is warm and you have a 20-minute transport time to the hospital. The patient asks you to 'warm up my hands because they really hurt.' He admits to smoking a cigarette and drinking 'a few beers' to stay warm last night.",
                    question: "This patient has deep frostbite of the hands and feet with mild hypothermia. What are the correct management steps for the frostbitten extremities?",
                    options: [
                        {t: "Do NOT thaw the hands or feet in the field — he had to walk on frozen feet to reach shelter, which means the tissue may be partially thawed and refrozen. Since there is no guarantee he can keep the tissue thawed during transport, leaving them frozen is safer. Additionally: do NOT rub, protect from pressure, apply loose sterile dressings between digits, administer ibuprofen for pain/inflammation, and transport. The hospital will perform controlled rewarming in 37–40°C water", f: "Correct — In the presence of possible freeze-thaw-refreeze injury (walking on frozen feet) and a short transport time, field thawing is NOT indicated. The risk of refreezing during transport causing exponentially worse tissue damage outweighs the benefit. Rubbing is contraindicated. Protect the tissue, give analgesia and ibuprofen, and transport for controlled rewarming."},
                        {t: "Immerse his hands and feet in warm water (37–40°C) immediately — the tissue needs to be thawed as soon as possible to prevent permanent damage. The pain means the tissue is still viable", f: "Incorrect — Thawing frostbitten tissue in the field is only appropriate when: (1) there is NO risk of refreezing, (2) definitive medical care is >2 hours away, and (3) the patient can keep the affected part thawed. In this case: he walked on frozen feet (may have partially thawed and refrozen), and transport is only 20 minutes — too short to warrant field thawing. The pain is actually from rewarming the frozen tissue in the shelter environment, not a sign of viability. Rewarming frostbite is EXCRUCIATINGLY painful."}
                    ],
                    correct: 0,
                    explanation: "Frostbite management rules: 1) Do NOT thaw if there is any risk of refreezing during transport or evacuation — partial thawing followed by refreezing causes severe, irreversible tissue damage. 2) Do NOT rub or massage frostbitten tissue (mechanical damage to frozen cells). 3) Protect the tissue during transport — apply loose, dry, sterile gauze between fingers/toes, cover with a blanket, avoid pressure on the affected areas. 4) Give ibuprofen (reduces inflammation and microvascular thrombosis) and analgesia (frostbite pain is severe, and rewarming is excruciating). 5) Transport for controlled rewarming in 37–40°C circulating water at the hospital. This patient's alcohol consumption is concerning — alcohol causes peripheral vasodilation (increases heat loss) and impairs judgement, contributing to the severity of his frostbite. The cigarette smoking also causes peripheral vasoconstriction, worsening cold injury.",
                    kpi: "Appropriately withholds field rewarming of frostbite due to risk of refreezing during short transport"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s3 – Drowning & Submersion Injury
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s3",
            shortTitle: "8.3 Drowning & Submersion Injury",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Drowning & Submersion Injury</h3>

                <p><strong>Drowning</strong> is defined as the process of experiencing respiratory impairment from submersion or immersion in a liquid medium (typically water). The key word is <strong>respiratory impairment</strong> — drowning is fundamentally a <strong>respiratory emergency</strong> caused by liquid entering the airway. Drowning outcomes are classified as <strong>fatal</strong> (death from drowning) or <strong>non-fatal</strong> (the patient survives, with or without morbidity). The outdated terms "dry drowning" and "wet drowning" have been abandoned — the current consensus classifies all drowning as a single process that either results in death or survival.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Rule — Rescue Breathing is the Priority:</strong> In drowning, the primary problem is HYPOXIA from respiratory impairment. <strong>Rescue breathing should be started as soon as it is safe to do so — even in the water if conditions permit.</strong> A drowning patient in respiratory arrest with a pulse needs ventilation, not chest compressions. The first intervention for a drowning patient who is not breathing is 2 rescue breaths, followed by CPR if no pulse.
                </div>

                <h4>Pathophysiology of Drowning</h4>
                <p>The drowning process follows a predictable sequence that, if uninterrupted, leads to cardiac arrest. Understanding this sequence helps the EMS provider understand the priority of interventions:</p>

                <ol>
                    <li><strong>Panic and breath-holding:</strong> The victim submerges and instinctively holds their breath. During this phase, the patient may struggle at the surface, gasping and swallowing water. Breath-holding can last 30–90 seconds.</li>
                    <li><strong>Laryngospasm:</strong> As the diaphragm contracts against a closed glottis, water enters the oropharynx and triggers laryngospasm — a protective reflex closure of the vocal cords. This prevents water from entering the lungs initially. The patient becomes hypoxic from prolonged breath-holding plus laryngospasm (this phase was formerly called "dry drowning" — but it is simply a phase of the drowning process).</li>
                    <li><strong>Relaxation and aspiration:</strong> As hypoxia worsens, the laryngospasm relaxes, and the patient reflexively gasps underwater. <strong>Water is aspirated into the lungs at this point.</strong> The type of water (fresh vs salt) determines some of the pathophysiology, but <strong>both cause severe hypoxemia</strong>.</li>
                    <li><strong>Pulmonary injury and hypoxemia:</strong> Aspirated water damages the pulmonary surfactant and alveolar-capillary membrane, leading to: <strong>(a) surfactant washout/dilution</strong> → alveolar collapse (atelectasis) → ventilation-perfusion (V/Q) mismatch; <strong>(b) pulmonary oedema</strong> → impaired gas exchange; <strong>(c) bronchospasm</strong> → increased airway resistance.</li>
                    <li><strong>Cardiac arrest:</strong> Progressive hypoxemia leads to bradycardia, then pulseless electrical activity (PEA) or asystole. Ventricular fibrillation is uncommon in drowning compared to primary cardiac causes.</li>
                </ol>

                <h4>Fresh Water vs Salt Water Drowning</h4>
                <p>The classic teaching that fresh water and salt water drowning are fundamentally different conditions with different treatments is <strong>outdated and clinically irrelevant for prehospital care</strong>. While the initial pathophysiology differs slightly, <strong>the clinical management is IDENTICAL</strong>:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Feature</th><th>Fresh Water</th><th>Salt Water</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Osmolality</strong></td><td>Hypotonic (dilute) — moves from alveoli into the bloodstream</td><td>Hypertonic (concentrated) — draws fluid from the bloodstream into the alveoli</td></tr>
                        <tr><td><strong>Surfactant effect</strong></td><td>Washes surfactant out of the alveoli → widespread atelectasis (alveolar collapse)</td><td>Dilutes and disrupts surfactant → foam formation and alveolar instability</td></tr>
                        <tr><td><strong>Pulmonary oedema</strong></td><td>Less direct — oedema from inflammation and capillary leak (ARDS-like) develops over hours</td><td>Direct — osmotic gradient pulls fluid into the alveoli; pulmonary oedema develops rapidly</td></tr>
                        <tr><td><strong>Haemodilution/haemoconcentration</strong></td><td>Haemodilution (dilution of blood) — may cause hyponatraemia, haemolysis (if large volume)</td><td>Haemoconcentration (thickening of blood) — may cause hypernatraemia, hyperchloraemia</td></tr>
                        <tr><td><strong>Electrolyte changes</strong></td><td>Clinically insignificant — would require >11 mL/kg of aspirated fresh water</td><td>Clinically insignificant — would require >22 mL/kg of aspirated salt water</td></tr>
                        <tr><td><strong>End result</strong></td><td colspan="2" style="text-align:center;"><strong>Both cause: hypoxemia, pulmonary oedema, V/Q mismatch, and metabolic acidosis</strong></td></tr>
                    </tbody>
                </table></div>
                <p><strong>The bottom line:</strong> The type of water does NOT change prehospital management. In both cases, the primary problem is HYPOXEMIA from pulmonary injury. The treatment is: oxygen, ventilation, and transport. Do NOT waste time determining whether the water was fresh or salt — treat the hypoxemia.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Surfactant:</strong> Pulmonary surfactant is a phospholipid-protein complex that reduces surface tension in the alveoli, preventing alveolar collapse at end-expiration. Both fresh and salt water disrupt surfactant function. Fresh water physically washes surfactant away; salt water dilutes and disrupts it. The result is the same — alveolar collapse, atelectasis, and severe V/Q mismatch. This is why all drowning victims need oxygen and often positive pressure ventilation (CPAP or PPV).
                </div>

                <h4>Secondary Drowning (Delayed Deterioration)</h4>
                <p><strong>Secondary drowning</strong> (also called <strong>post-immersion syndrome</strong> or <strong>delayed pulmonary oedema</strong>) refers to the progressive respiratory deterioration that can occur <em>hours</em> after the initial submersion event. The patient may appear completely normal immediately after rescue but develops worsening cough, dyspnoea, tachypnoea, and hypoxaemia over the next 4–6 hours as pulmonary oedema and inflammation evolve. This is the reason why <strong>ALL drowning victims must be transported to hospital for evaluation, even if they appear asymptomatic</strong>. A patient who looks fine at the scene may present to the ED in respiratory distress hours later. This is especially dangerous in children, who may initially appear well and then decompensate rapidly.</p>

                <h4>Submersion Injury Management — Step by Step</h4>
                <p>The management of a drowning victim follows a systematic approach that prioritises oxygenation and ventilation above all else:</p>

                <ol>
                    <li><strong>Scene safety and rescue:</strong> Do NOT become a victim yourself. Rescue the patient from the water using a reach, throw, row, go approach (in that order). Do not enter the water if you are not trained and equipped for water rescue. Once the patient is removed from the water, assess the scene for safety and mechanism of injury. If the submersion occurred in a pool, lake, river, or bathtub, consider the possibility of trauma (especially cervical spine injury from diving, sliding, or a fall).</li>
                    <li><strong>C-spine precautions:</strong> If the mechanism suggests trauma (diving, water slide, motor vehicle crash into water, fall from height, or unknown mechanism in a patient with altered mental status), maintain manual inline spinal stabilisation and apply a cervical collar. <strong>However, do NOT delay rescue breathing to apply a cervical collar</strong> — airway and breathing take priority. The incidence of C-spine injury in drowning is low (<0.5%) and only indicated when there is a clear traumatic mechanism.</li>
                    <li><strong>Rescue breathing (PRIORITY):</strong> Start rescue breathing as soon as it is safe — even in the water if feasible (trained rescuers in shallow water). In the water: use a pocket mask or bag-valve-mask if available. Deliver 2 rescue breaths, then check for a pulse. If no pulse, begin CPR (compressions and ventilations). <strong>In drowning, the cardiac arrest is hypoxic in origin — ventilation is even more critical than in primary cardiac arrest.</strong></li>
                    <li><strong>CPR:</strong> If the patient is pulseless, begin CPR. In drowning, the compression-to-ventilation ratio should follow standard BLS/ALS protocols. For a single rescuer: 30:2. For two rescuers: 15:2 (child/infant) or 30:2 (adult). <strong>Emphasise effective ventilations</strong> — gastric inflation is common (from swallowing water) and may require an advanced airway (ET tube or supraglottic airway) to deliver effective ventilations without insufflating the stomach.</li>
                    <li><strong>Remove wet clothing:</strong> Wet clothing conducts heat away from the body 25× faster than dry clothing. Remove wet garments and dry the patient as much as possible. Cover with warm blankets, apply external heat sources (heat packs to trunk), and warm the transport environment.</li>
                    <li><strong>Warm the patient:</strong> Drowning victims are at high risk for hypothermia (even in warm water, evaporative heat loss from wet skin is significant). Active external rewarming with blankets, heat packs to the trunk, and a warm transport environment is essential. Check core temperature — if the patient is hypothermic (<95°F), manage per hypothermia protocols (see c8s2).</li>
                    <li><strong>Transport ALL drowning victims to hospital:</strong> Every patient who experienced submersion — even those who appear completely asymptomatic after rescue — requires hospital evaluation for the risk of delayed deterioration (secondary drowning). Asymptomatic patients should be evaluated in an ED and observed for 4–6 hours for signs of respiratory deterioration. Patients with any signs of respiratory distress, hypoxia, or altered mental status require hospital admission.</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Transport ALL Submersion Patients:</strong> A patient who appears fine after a drowning episode may develop severe pulmonary oedema hours later (secondary drowning). This is especially true in children and in salt water drowning (where osmotic oedema develops over hours). <strong>NEVER allow a drowning victim to refuse transport or be released at the scene without medical evaluation.</strong> Every submersion patient needs hospital assessment and observation.
                </div>

                <h4>ABCs in Drowning — Special Priorities</h4>
                <p>The drowning resuscitation differs from standard cardiac arrest in important ways:</p>
                <ul>
                    <li><strong>AIRWAY is the priority:</strong> The drowning patient's airway may be filled with water, vomit, debris, or foam. Suction the airway as needed, but do NOT waste time trying to drain water from the lungs — the body's natural absorptive capacity (particularly for fresh water) will handle small amounts, and aggressive abdominal thrusts to expel water only cause vomiting and aspiration.</li>
                    <li><strong>Do NOT perform abdominal thrusts (Heimlich) to expel water:</strong> The outdated recommendation to perform abdominal thrusts to 'drain water from the lungs' has been abandoned. Abdominal thrusts cause: (1) vomiting (which then can be aspirated), (2) aspiration of stomach contents into the airway, (3) delay in oxygenation. The water in the lungs will be absorbed by the circulation. <strong>Just ventilate.</strong></li>
                    <li><strong>Rescue breathing before chest compressions:</strong> In drowning-related cardiac arrest, the hypoxic-ischaemic cause means that oxygenation must be restored before the heart can perfuse. If the patient is in respiratory arrest with a pulse, provide rescue breathing at a rate of 1 breath every 5–6 seconds (10–12 breaths/min). If the patient is in cardiac arrest, start CPR but emphasise effective ventilations.</li>
                    <li><strong>Consider an advanced airway early:</strong> Gastric distention from swallowed water and air makes BVM ventilation difficult and increases the risk of aspiration. A supraglottic airway (King LT, i-gel, LMA) or endotracheal tube can isolate the airway, facilitate ventilation, and reduce gastric insufflation.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — The 'Heimlich for Drowning' Myth:</strong> The recommended "Heimlich maneuver for drowning" (abdominal thrusts to remove water) was popularised in the 1970s but has been proven to be harmful. Studies show that abdominal thrusts: (1) cause vomiting in >80% of patients, (2) lead to aspiration of stomach contents, (3) delay the initiation of effective ventilation, and (4) do NOT improve outcomes. The American Heart Association, American Red Cross, and International Liaison Committee on Resuscitation (ILCOR) all recommend: <strong>If the patient is not breathing, start rescue breathing immediately. Do NOT attempt to drain water from the lungs.</strong>
                </div>

                <h4>Ice-Water Submersion and the Diving Reflex</h4>
                <p><strong>Ice-water submersion</strong> (water temperature < 50°F / 10°C) presents a unique scenario with potential for remarkable survival, even after prolonged submersion. The <strong>diving reflex</strong> (mammalian dive reflex) is a physiologic response triggered by cold water contacting the face (especially the trigeminal nerve distribution) and by breath-holding/apnoea. The reflex consists of:</p>
                <ul>
                    <li><strong>Apnoea:</strong> The breath is held involuntarily</li>
                    <li><strong>Profound bradycardia:</strong> Heart rate drops dramatically to conserve oxygen</li>
                    <li><strong>Peripheral vasoconstriction:</strong> Blood is shunted from the extremities and non-essential organs to the brain and heart (central circulation)</li>
                    <li><strong>Decreased metabolic rate:</strong> The cold body temperature rapidly slows all metabolic processes, reducing oxygen demand</li>
                </ul>
                <p>The diving reflex is most pronounced in <strong>children</strong> — their larger surface area-to-mass ratio cools more rapidly, and the reflex is stronger in the young. This is why children have survived prolonged ice-water submersion (up to 60 minutes or more in rare cases) with good neurologic outcomes. <strong>Key EMS provider takeaway:</strong> In cold water drowning, especially in children, <strong>initiate resuscitation even if the submersion time seems impossibly long</strong>. Do not assume the patient is dead. Begin CPR, actively rewarm, and transport to a centre with ECMO/CPB rewarming capability. "You're not dead until you're warm and dead" applies to cold water drowning as much as to primary hypothermia.</p>

                <h4>Drowning Prevention Education</h4>
                <p>Drowning is the <strong>leading cause of death in children aged 1–4 years</strong> and the second leading cause of unintentional injury death in children 1–14 years. EMS providers are in a unique position to provide drowning prevention education to the community:</p>
                <ul>
                    <li><strong>Supervision:</strong> Constant, focused adult supervision is the single most important prevention measure. Children can drown in seconds and in as little as 2 inches of water (bathtubs, buckets, toilets, wading pools). Drowning is SILENT — there is no splashing or calling for help (contrary to Hollywood depictions).</li>
                    <li><strong>Barriers:</strong> Four-sided isolation fencing around pools (separate from the house and yard) reduces drowning risk by 83%. Pool gates should be self-closing and self-latching.</li>
                    <li><strong>Life jackets:</strong> Wear US Coast Guard-approved life jackets during any boating or water sports activity. Air-filled flotation devices (water wings, inflatable rings) are toys, NOT safety devices.</li>
                    <li><strong>Alcohol:</strong> Alcohol is involved in 30–50% of adult drowning deaths. Never drink alcohol while swimming, boating, or supervising children around water.</li>
                    <li><strong>Swim lessons:</strong> Formal swimming lessons reduce drowning risk in children 1–4 years. The American Academy of Pediatrics recommends swim lessons as early as age 1.</li>
                    <li><strong>Learn CPR:</strong> Bystander CPR significantly improves survival in drowning. Encouraging community CPR training is one of the most effective prevention strategies.</li>
                </ul>

                <h4>Special Populations and Drowning</h4>
                <ul>
                    <li><strong>Toddlers (1–4 years):</strong> Most drown in swimming pools (residential) and buckets/bathtubs. Curious, mobile, and attracted to water — with no concept of danger. They drown silently within seconds of wandering away from supervision.</li>
                    <li><strong>Adolescents and young adults:</strong> Most drown in natural bodies of water (rivers, lakes, oceans). Risk-taking behaviour (swimming beyond ability, diving into unknown water, alcohol use) is the primary factor.</li>
                    <li><strong>Elderly:</strong> Most drown in bathtubs or while swimming. Underlying medical events (syncope, dysrhythmia, seizure, hypoglycaemia) often precipitate the submersion.</li>
                    <li><strong>Seizure disorder:</strong> Drowning risk is 15–20× higher in people with epilepsy. Even well-controlled seizures can occur during water activities. Showers are safer than baths.</li>
                    <li><strong>Alcohol:</strong> Single greatest modifiable risk factor for drowning in adults.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Focus — Key Takeaways:</strong><br>
                    • Rescue breathing is the PRIORITY — start ASAP, even in the water if safe<br>
                    • Do NOT perform abdominal thrusts to expel water — this causes vomiting and aspiration<br>
                    • ALL drowning victims need hospital evaluation — risk of delayed deterioration (secondary drowning)<br>
                    • Fresh vs salt water does NOT change prehospital management — both cause hypoxemia<br>
                    • Ice-water submersion (especially children) can have miraculous outcomes — resuscitate aggressively<br>
                    • C-spine precautions only if traumatic mechanism (diving, MVC, fall) — do NOT delay rescue breathing<br>
                    • Remove wet clothing and warm the patient — drowning victims are at high risk of hypothermia
                </div>
            </div>`,
            flashcards: [
                {
                    question: "What is the definition of drowning?",
                    answer: "The process of experiencing respiratory impairment from submersion or immersion in a liquid medium. Outcomes are classified as fatal (death) or non-fatal (survival). The terms 'dry drowning' and 'wet drowning' are outdated and no longer used.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "What is the priority intervention for a drowning patient?",
                    answer: "RESCUE BREATHING. The primary problem is hypoxemia from respiratory impairment. Start rescue breathing as soon as it is safe — even in shallow water if possible. Do NOT perform abdominal thrusts to expel water (this causes vomiting and aspiration). Ventilate first, then assess circulation.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "Why must ALL drowning victims be transported to hospital even if they appear asymptomatic?",
                    answer: "Risk of secondary drowning (post-immersion syndrome) — delayed respiratory deterioration from pulmonary oedema that can develop hours after the event. A patient who looks fine at the scene may present to the ED in respiratory distress hours later. Never allow a drowning victim to refuse transport.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "What is the difference between fresh water and salt water drowning from a prehospital perspective?",
                    answer: "Fresh water washes out surfactant → atelectasis; salt water draws fluid into alveoli → pulmonary oedema. However, the clinical management is IDENTICAL: both cause hypoxemia and V/Q mismatch. Do NOT waste time determining water type — treat the hypoxemia with oxygen and ventilation.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "What is the diving reflex and why is it relevant to ice-water drowning?",
                    answer: "A physiologic response to cold water facial immersion: apnoea, bradycardia, peripheral vasoconstriction (shunting blood to brain/heart), and decreased metabolic rate. Most pronounced in children. This is why prolonged ice-water submersion (up to 60 min) can have good outcomes — resuscitate aggressively.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "What is the correct sequence of drowning pathophysiology?",
                    answer: "1) Panic and breath-holding (30–90 sec), 2) Laryngospasm (protective — prevents water entry but causes hypoxia), 3) Relaxation and aspiration (hypoxia overcomes laryngospasm → water enters lungs), 4) Pulmonary injury (surfactant disruption, atelectasis, oedema), 5) Cardiac arrest (hypoxic PEA/asystole).",
                    category: "Environmental — Drowning"
                },
                {
                    question: "Should abdominal thrusts (Heimlich maneuver) be performed on a drowning victim?",
                    answer: "NO. Abdominal thrusts cause vomiting in >80% of patients, lead to aspiration, delay oxygenation, and do NOT improve outcomes. The water in the lungs will be absorbed by the circulation. The correct management is: if not breathing → start rescue breathing immediately.",
                    category: "Environmental — Drowning"
                },
                {
                    question: "What are the key steps in managing a submersion injury?",
                    answer: "1) Scene safety and rescue; 2) C-spine only if traumatic mechanism; 3) Rescue breathing (PRIORITY); 4) CPR if no pulse (emphasise ventilations); 5) Remove wet clothing; 6) Warm the patient; 7) Transport ALL to hospital — even asymptomatic patients need evaluation for secondary drowning.",
                    category: "Environmental — Drowning"
                }
            ],
            quiz: [
                {
                    q: "A 3-year-old child was found floating face-down in a swimming pool. The estimated submersion time is 3–4 minutes. On your arrival, the child has been removed from the water by a bystander. The child is not breathing and has no pulse. Bystander CPR is in progress. The water was fresh (chlorinated pool). What is the MOST important initial intervention when you take over patient care?",
                    options: [
                        "Begin chest compressions immediately — the child is in cardiac arrest",
                        "Perform abdominal thrusts to expel water from the lungs before starting CPR",
                        "Open the airway, deliver 2 rescue breaths, then continue CPR with a 15:2 ratio. Emphasise effective ventilations — drowning arrest is hypoxic in origin",
                        "Apply a cervical collar and immobilise the spine before doing anything else — pool drownings often involve spinal injury"
                    ],
                    correct: 2,
                    explanation: "In drowning-related cardiac arrest, the priority is ventilation. Open the airway, give 2 rescue breaths (look for chest rise), then begin CPR (15:2 for a child if two rescuers). The arrest is caused by hypoxia, not a primary cardiac event — effective ventilation is critical for ROSC. Do NOT perform abdominal thrusts. C-spine is only indicated if there is a clear traumatic mechanism (diving, fall, water slide) — pool drownings in a 3-year-old are usually from wandering into the pool, not from diving."
                },
                {
                    q: "A 55-year-old male is rescued from a lake after being submerged for approximately 2 minutes. He is awake, alert, coughing, and producing frothy sputum. His SpO₂ is 91% on room air, HR 112, RR 26, BP 136/84. He says he is 'fine' and wants to go home and 'not make a big deal out of this.' What should the EMS provider do?",
                    options: [
                        "Allow him to refuse transport — he is awake, alert, and his vital signs are stable",
                        "Explain that ALL drowning victims require hospital evaluation due to the risk of secondary drowning (delayed pulmonary oedema). He has signs of respiratory distress already (tachypnoea, tachycardia, low SpO₂, frothy sputum). Administer oxygen, monitor closely, and transport emergently",
                        "Give him oral fluids and observe for 30 minutes — if his SpO₂ improves, he can be released",
                        "Perform abdominal thrusts to clear the water from his lungs — this will help his oxygenation"
                    ],
                    correct: 1,
                    explanation: "Every drowning victim requires hospital evaluation. This patient already has signs of pulmonary injury (tachypnoea, tachycardia, hypoxaemia, frothy sputum — a sign of pulmonary oedema). He is at high risk for secondary drowning with progressive respiratory deterioration. Management: high-flow oxygen (titrate to SpO₂ ≥94%), position of comfort (semi-Fowler's or upright), monitor SpO₂ and respiratory effort continuously, and transport. Do NOT allow him to refuse transport. Do NOT perform abdominal thrusts. Notify the receiving hospital of a potential drowning with pulmonary oedema."
                },
                {
                    q: "[HARD] A 6-year-old child was pulled from an icy pond after approximately 20 minutes of submersion. Water temperature is estimated at 38°F (3°C). The child is unresponsive, apnoeic, and pulseless. Bystanders have started CPR. The nearest hospital is 25 minutes away. What should the EMS provider consider regarding the prognosis and management?",
                    options: [
                        "The submersion time is far too long — the child is not survivable. Only provide comfort care and transport",
                        "Ice-water submersion with the diving reflex can produce remarkable outcomes even after prolonged submersion. Continue full resuscitation (CPR, advanced airway, vascular access, active rewarming). Transport to a hospital with ECMO/CPB rewarming capability if available. Do NOT pronounce death until the child has been rewarmed",
                        "Focus on rewarming the extremities first — the cold injury is the main threat",
                        "The child should be defibrillated immediately — cold water drowning typically causes V-fib"
                    ],
                    correct: 1,
                    explanation: "The mammalian diving reflex triggered by ice-cold water dramatically decreases metabolic oxygen demand, protecting the brain and vital organs. Children have a more pronounced reflex and cool more rapidly due to their larger surface area-to-mass ratio. Survival with good neurologic outcome has been reported after 60+ minutes of ice-water submersion in children. Management: 1) Full CPR (emphasise ventilations); 2) Active rewarming (warm humidified O₂, warm IV fluids, heat packs to trunk, warm blankets); 3) Transport to a centre capable of ECMO/CPB rewarming; 4) Follow the hypothermia mantra: 'You're not dead until you're warm and dead.' Defibrillation may be ineffective if core temp <86°F."
                },
                {
                    q: "Which of the following statements about drowning management is correct according to current NREMT guidelines?",
                    options: [
                        "Abdominal thrusts should be performed immediately to remove water from the lungs before starting rescue breathing",
                        "Rescue breathing is the priority — start as soon as it is safe; do NOT perform abdominal thrusts; transport ALL victims to hospital; C-spine only if traumatic mechanism",
                        "Fresh water drowning requires different treatment than salt water drowning",
                        "If the patient appears fine after rescue, they can be released at the scene after 30 minutes of observation"
                    ],
                    correct: 1,
                    explanation: "Current NREMT/ILCOR guidelines: (1) Rescue breathing is the priority in drowning — start ASAP; (2) Abdominal thrusts are contraindicated (cause vomiting, aspiration, and delay oxygenation); (3) Transport all drowning victims — secondary drowning can develop hours later; (4) C-spine only if a clear traumatic mechanism is present; (5) Fresh vs salt water makes no difference to prehospital management — both are treated with oxygen and ventilation. A patient who appears fine cannot be released at the scene."
                }
            ],
            critical: [
                {
                    id: "crit_8_3_1",
                    scenario: "You are called to a backyard pool party for a 4-year-old boy who was found floating face-down in the pool. Bystanders pulled him out approximately 2 minutes ago. The water is fresh (chlorinated pool) and the temperature is approximately 80°F. On your arrival, the child is lying on the pool deck. He is limp, cyanotic, and not breathing. Bystanders tell you they did not start CPR because they 'didn't want to hurt him.' You note no obvious signs of trauma. The pool has no diving board and the child was wearing water wings. The parents are hysterical and begging you to 'save my baby.'",
                    question: "The child is in respiratory arrest with a pulse (you palpate a weak carotid pulse at approximately 50 bpm). What is your priority intervention and what common misconception about drowning management must you avoid?",
                    options: [
                        {t: "Begin rescue breathing immediately — 1 breath every 3–5 seconds (12–20 breaths/min for a child). Reassess pulse every 2 minutes. Do NOT perform abdominal thrusts. Transport rapidly once the child is oxygenated and ventilated. The parents' anxiety is understandable — provide calm, clear communication while working", f: "Correct — The child has a pulse but is not breathing (respiratory arrest). Rescue breathing is the priority. Give 1 breath every 3–5 seconds, ensuring chest rise with each breath. Do NOT waste time with abdominal thrusts (the Heimlich myth) — they would cause vomiting and aspiration and delay oxygenation. Once breathing is supported, transport. The water wings (inflatable arm bands) are a toy, not a safety device — a key prevention message for the family."},
                        {t: "The child clearly has water in his lungs — perform abdominal thrusts forcefully to expel the water, then begin CPR. The Heimlich maneuver for drowning is the standard of care for drowning patients", f: "Incorrect — Abdominal thrusts for drowning have been abandoned by every major resuscitation organisation (AHA, ARC, ILCOR). They cause vomiting in >80% of patients, aspiration, delay in oxygenation, and do NOT improve survival. The small amount of water in the lungs will be absorbed into the circulation. The correct management is: if not breathing → start rescue breathing. If no pulse → start CPR with rescue breaths. Do NOT attempt to drain water."}
                    ],
                    correct: 0,
                    explanation: "This child has respiratory arrest with a pulse — rescue breathing is the definitive intervention. Deliver 1 breath every 3–5 seconds (12–20 breaths/min for a child). Use a BVM with high-flow O₂. Reassess pulse every 2 minutes. Do NOT perform abdominal thrusts — water in the drowning lung is absorbed by the pulmonary circulation, and thrusts only cause emesis and aspiration. Key points for the family (after the crisis): 1) Water wings are not safety devices; 2) Pool should have four-sided isolation fencing; 3) Constant adult supervision is essential; 4) Learn CPR. The scene should also be managed for the parents' emotional state — drowning events are traumatic and the parents' cooperation is essential for effective care.",
                    kpi: "Prioritises rescue breathing over abdominal thrusts for a drowning patient with respiratory arrest and a pulse"
                },
                {
                    id: "crit_8_3_2",
                    scenario: "You respond to a 22-year-old male who was pulled from a river after an unknown submersion time. Friends report they were drinking alcohol and swimming — he 'went under and didn't come back up.' He was submerged for approximately 5–7 minutes before they found him. On your arrival, he is unresponsive, apnoeic, and pulseless. Bystanders have not started CPR. The river water is cold (approximately 55°F / 13°C). You note mud and debris in his mouth. His clothing is wet, heavy, and cold. His skin is pale and cyanotic. The scene is a rocky riverbank requiring a 10-minute carry to the ambulance.",
                    question: "This patient is in cardiac arrest from drowning. What is the correct sequence of interventions AND what special considerations apply to drowning-related cardiac arrest?",
                    options: [
                        {t: "Begin CPR: open airway (suction visible debris), deliver 2 rescue breaths (look for chest rise), then start chest compressions (30:2). Emphasise effective ventilations — this is hypoxic arrest. Consider an advanced airway early (gastric distention from swallowed water makes BVM difficult). Remove wet clothing, dry the patient, and actively rewarm during transport. Transport to a hospital capable of managing hypothermic arrest. Do NOT perform abdominal thrusts", f: "Correct — Drowning cardiac arrest is hypoxic in origin, so ventilations are even more critical than in primary cardiac arrest. The priority sequence: 1) Open airway and suction visible debris (not blindly); 2) 2 rescue breaths; 3) Start CPR (30:2 adult); 4) Early advanced airway (water in stomach causes gastric distention, regurgitation, and ineffective BVM ventilations); 5) Remove wet clothing and warm (hypothermia risk even in 55°F water); 6) Transport. Do NOT perform abdominal thrusts."},
                        {t: "This patient has been down too long — 5–7 minutes of submersion in cold water has a poor prognosis. Perform 2 minutes of CPR, then transport. Focus on rewarming during transport", f: "Incorrect — While 5–7 minutes of submersion in 55°F water is grave, cold water provides some protection (especially as the core cools). There is a chance of survival with aggressive resuscitation. Additionally, the water is cold enough (55°F) that the patient may have some degree of hypothermic protection. Follow standard drowning cardiac arrest protocol with emphasis on ventilations. Prolonged resuscitation is warranted if the patient is hypothermic. The 10-minute carry to the ambulance makes early high-quality CPR on scene even more important."}
                    ],
                    correct: 0,
                    explanation: "Drowning cardiac arrest management: 1) Rescue breaths FIRST (2 breaths before starting compressions) — this is hypoxic arrest. 2) CPR 30:2 (adult) with emphasis on effective ventilations — gastric distention from swallowed water will make BVM ventilation difficult; consider an early supraglottic airway or ET tube. 3) Suction visible debris from the airway but do NOT blind finger-sweep (may push debris deeper). 4) Remove wet clothing immediately — wet clothes conduct heat away from the body 25× faster than dry. 5) Dry the patient and apply warm blankets and heat packs to the trunk. 6) The cold river water (55°F) may have induced some hypothermia, which provides organ protection — 'not dead until warm and dead' may apply. 7) Transport to a centre capable of managing both drowning-related respiratory failure and potential hypothermia. The alcohol consumption is a significant contributing factor and may complicate assessment (CNS depression, impaired thermoregulation, increased risk of aspiration). Document the estimated submersion time, water temperature, type of water (river = fresh), and scene findings.",
                    kpi: "Prioritises ventilation and avoids abdominal thrusts in drowning cardiac arrest; manages hypothermia risk from cold water"
                },
                {
                    id: "crit_8_3_3",
                    scenario: "You are called to a 7-year-old girl who was found unresponsive in a neighbour's swimming pool. The estimated submersion time is unknown but believed to be 4–6 minutes. A neighbour started CPR immediately after pulling her out. On your arrival, the neighbour is performing chest compressions (not giving rescue breaths — compression-only CPR). The child is intubated with a properly placed endotracheal tube that the neighbour (a paramedic from another jurisdiction) placed. The neighbour says she has been doing CPR for approximately 3 minutes. The child's mother arrives and is distraught. The water was fresh (chlorinated). The child has a history of well-controlled asthma. The neighbour stops CPR as you take over. You assess: the child has no pulse and is not breathing. The ET tube is taped at 18 cm at the lip (appropriate for a 7-year-old — typically age/4 + 4 = 5.75, so ~5.5 ET tube with depth ~17–19 cm). Breath sounds are diminished on the left side. The neck veins are distended. The trachea is deviated to the right.",
                    question: "The patient is in cardiac arrest on the scene with an ET tube in place. However, you note absent left breath sounds, distended neck veins, and rightward tracheal deviation. What life-threatening condition do these signs suggest and what is your immediate action?",
                    options: [
                        {t: "The ET tube is malpositioned (right mainstem intubation) — the absent left breath sounds and distended neck veins point to this. Pull the ET tube back 2–3 cm and reassess breath sounds. If breath sounds are equal bilaterally, the tube was too deep", f: "Incorrect — While right mainstem intubation is always a consideration with diminished left-sided breath sounds, the combination of distended neck veins AND tracheal deviation away from the side of absent breath sounds is diagnostic of TENSION PNEUMOTHORAX. An ET tube malposition would not cause tracheal deviation or distended neck veins (unless it caused tension pneumothorax from barotrauma). Additionally, chest compressions and BVM ventilation can cause barotrauma and pneumothorax, especially in a child with asthma."},
                        {t: "Tension pneumothorax on the LEFT side — the absent left breath sounds + distended neck veins + tracheal deviation to the RIGHT point to a left tension pneumothorax. This is a life-threatening condition requiring immediate needle decompression. Perform needle thoracostomy on the LEFT side, 2nd intercostal space, midclavicular line (or 4th–5th intercostal space, mid-axillary line). This must be done before or simultaneously with continuing CPR", f: "Correct — Tension pneumothorax is a reversible cause of cardiac arrest. In the setting of drowning with CPR, a pneumothorax can develop from: barotrauma from BVM/ET ventilation, asthma (air trapping), or chest compressions causing rib fracture → lung laceration. Needle decompression: use a 14G or 16G angiocatheter, 2nd ICS midclavicular line (or 4th–5th ICS mid-axillary line). Insert just above the rib (to avoid the intercostal neurovascular bundle). A rush of air confirms the diagnosis. Then continue CPR and transport."}
                    ],
                    correct: 1,
                    explanation: "Tension pneumothorax is a reversible cause of cardiac arrest ('H's and T's' — Tension pneumothorax). The presentation is classic: absent breath sounds on the affected side (left), distended neck veins (from decreased venous return), and tracheal deviation AWAY from the affected side (to the right). Management: immediate needle decompression (thoracostomy) on the left side. Use a large-bore angiocatheter (14G or 16G). The 2nd intercostal space, midclavicular line is the classic site; the 4th–5th intercostal space, mid-axillary line is an alternative that may be safer in children (less risk of vascular injury). After decompression, continue CPR, confirm ET tube position with end-tidal CO₂ if available, and transport. This case also highlights the importance of ventilation in drowning — compression-only CPR is not appropriate for drowning cardiac arrest (which is hypoxic in origin). The neighbour-paramedic's placement of an ET tube without confirming position or recognising the developing tension pneumothorax underscores the importance of systematic reassessment after every intervention. Document the events carefully — this is a complex scene with multiple providers.",
                    kpi: "Recognises tension pneumothorax as a reversible cause of drowning-related cardiac arrest and performs needle decompression"
                }
            ]
        },
        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s4 – Diving & Altitude Emergencies
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s4",
            shortTitle: "8.4 Diving & Altitude Emergencies",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Diving & Altitude Emergencies</h3>

                <p>Diving and altitude emergencies arise from the physics of gas behaviour under pressure. <strong>Boyle's Law</strong> (pressure × volume = constant at a fixed temperature) and <strong>Henry's Law</strong> (the amount of gas dissolved in a liquid is proportional to its partial pressure) govern most injury mechanisms. As an EMS provider, you must recognise dysbarism injuries (barotrauma, decompression sickness, arterial gas embolism) and altitude-related illness (acute mountain sickness, HACE, HAPE) — all of which can progress rapidly and require specific prehospital interventions.</p>

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
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Injury</th><th>Mechanism</th><th>Presentation</th><th>Key Feature</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Arterial Gas Embolism (AGE)</strong></td><td>Alveolar rupture forces gas into pulmonary veins → left heart → systemic arterial circulation. Bubble emboli occlude cerebral vessels.</td><td>Sudden onset of neurologic symptoms <strong>within minutes of surfacing</strong> (often within 1–5 minutes): confusion, dizziness, visual disturbances, loss of consciousness, seizure, stroke-like deficits (hemiparesis, aphasia), cardiac arrest.</td><td><strong>RAPID onset after surfacing</strong> — the hallmark distinguishing feature from DCS (which takes longer to develop)</td></tr>
                        <tr><td><strong>Pneumothorax</strong></td><td>Alveolar rupture into the pleural space. Can be simple or tension.</td><td>Pleuritic chest pain, dyspnoea, decreased breath sounds on the affected side, hyperresonance to percussion, tracheal deviation (if tension).</td><td>May occur alone or with AGE. Suspect whenever a diver surfaces with chest pain and respiratory distress.</td></tr>
                        <tr><td><strong>Mediastinal / Subcutaneous Emphysema</strong></td><td>Gas tracks along bronchovascular sheaths into the mediastinum and subcutaneous tissues of the neck.</td><td>Chest pressure or fullness, hoarseness, dysphagia, crepitus on palpation of the neck and supraclavicular areas, Hamman's sign (mediastinal crunch — a precordial crackling sound synchronous with the heartbeat).</td><td>Usually self-limiting but signals that lung overexpansion occurred — the patient is at risk for coexisting AGE.</td></tr>
                    </tbody>
                </table></div>

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

                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Condition</th><th>Onset</th><th>Key Feature</th><th>Definitive Treatment</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>AMS</strong></td><td>6–12 hrs</td><td>Headache + nausea/fatigue/dizziness/sleep disturbance. Normal neuro exam except mild ataxia possible</td><td>Stop ascent, rest, acclimatise. Symptomatic treatment. Descend if worsening.</td></tr>
                        <tr><td><strong>HACE</strong></td><td>1–3 days</td><td>AMS + ataxia (WIDE-BASED GAIT / CANNOT TANDEM WALK) + AMS/changed mental status. Papilledema possible</td><td><strong>IMMEDIATE DESCENT.</strong> Dexamethasone, O₂, Gamow bag if descent impossible</td></tr>
                        <tr><td><strong>HAPE</strong></td><td>2–4 days</td><td>Dyspnoea at rest, cough (dry → pink frothy sputum), rales/crackles, low SpO₂. Comfortable lying flat</td><td><strong>IMMEDIATE DESCENT.</strong> O₂, nifedipine ER, Gamow bag if descent impossible. Keep warm.</td></tr>
                    </tbody>
                </table></div>

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

                <p>Bites and stings from venomous animals are relatively uncommon but potentially life-threatening emergencies. The EMS provider's priorities are: <strong>scene safety</strong> (identify the animal, avoid additional bites), <strong>recognition of envenomation signs</strong>, <strong>basic wound care</strong>, and <strong>rapid transport</strong> when systemic toxicity is suspected. The key principle across all envenomations is that <strong>most "traditional" first-aid measures (cutting, sucking, tourniquets, ice) are harmful and should NOT be performed.</strong> This section covers snakebites, spider bites, scorpion stings, Hymenoptera (bee/wasp) stings, and marine envenomations.</p>

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

                <p>Hazardous materials (HAZMAT) emergencies involve the release of substances that pose a risk to health, safety, or the environment. As an EMS provider, your primary role is <strong>scene safety, recognition, isolation, and decontamination</strong> — not active chemical mitigation. The <strong>Hazardous Materials/Weapons of Mass Destruction (HAZMAT/WMD) response framework</strong> guides your approach: recognise the hazard, establish scene safety, don appropriate PPE, perform decontamination, and provide medical care. <strong>Your safety and the safety of your crew is the top priority.</strong> A dead rescuer saves no one.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Fundamental Rule — Scene Safety:</strong> In any suspected HAZMAT incident: <strong>STOP</strong> before entering. Survey the scene from a safe distance (at least 500 ft upwind/uphill). Look for placards, labels, containers, vapour clouds, unusual odours, multiple patients with similar symptoms, or dead animals/birds. If you cannot identify the substance or are unsure about the hazard — <strong>do NOT enter.</strong> Wait for a HAZMAT team. Your responsibility is to identify the hazard from a safe distance and communicate it to incoming resources.
                </div>

                <h4>HAZMAT Recognition — Placards, Labels, and Markings</h4>
                <p>The <strong>DOT placard system</strong> (diamond-shaped, 10¾" × 10¾") uses a colour-coded numbering system to identify hazardous materials:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Colour</th><th>Division</th><th>Examples</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Orange</strong></td><td>Class 1 — Explosives</td><td>Dynamite, fireworks, ammunition (1.1–1.6)</td></tr>
                        <tr><td><strong>Red</strong></td><td>Class 2.1 — Flammable Gases</td><td>Propane, butane, acetylene</td></tr>
                        <tr><td><strong>Green</strong></td><td>Class 2.2 — Non-Flammable Gases</td><td>Oxygen, nitrogen, carbon dioxide</td></tr>
                        <tr><td><strong>White</strong></td><td>Class 2.3 — Toxic Gases</td><td>Chlorine, ammonia, phosgene</td></tr>
                        <tr><td><strong>Red</strong></td><td>Class 3 — Flammable Liquids</td><td>Gasoline, ethanol, acetone, benzene</td></tr>
                        <tr><td><strong>Red/White Striped</strong></td><td>Class 4.1 — Flammable Solids</td><td>Magnesium, phosphorus, matches</td></tr>
                        <tr><td><strong>Yellow</strong></td><td>Class 5 — Oxidisers & Organic Peroxides</td><td>Hydrogen peroxide, ammonium nitrate</td></tr>
                        <tr><td><strong>White</strong></td><td>Class 6 — Toxic/Infectious Substances</td><td>Pesticides, cyanide, medical waste</td></tr>
                        <tr><td><strong>Yellow/White</strong></td><td>Class 7 — Radioactive Materials</td><td>Uranium, medical isotopes, Cobalt-60</td></tr>
                        <tr><td><strong>White/Black</strong></td><td>Class 8 — Corrosives</td><td>Sulfuric acid, hydrochloric acid, sodium hydroxide</td></tr>
                        <tr><td><strong>Black/White</strong></td><td>Class 9 — Miscellaneous</td><td>Asbestos, dry ice, lithium batteries</td></tr>
                    </tbody>
                </table></div>
                <p>The <strong>UN/NA number</strong> (4-digit number on placards or orange panels) identifies the specific substance. The <strong>ERG (Emergency Response Guidebook)</strong> — available as a paper guide in the apparatus and as a mobile app — cross-references the UN/NA number or substance name to provide: initial isolation distances, protective action zones, fire/explosion hazards, health effects, and first aid. <strong>Every EMS provider should know how to use the ERG.</strong></p>

                <h4>HAZMAT Zones</h4>
                <p>HAZMAT incidents are divided into three operational zones:</p>
                <ul>
                    <li><strong>HOT ZONE (Exclusion Zone / Red):</strong> The area immediately surrounding the release. Highest level of contamination. Only personnel in Level A or B PPE with appropriate training may enter. <strong>EMS providers do NOT enter the hot zone</strong> unless they are part of a trained HAZMAT team with appropriate PPE. Medical care in the hot zone is limited to life-saving interventions (tourniquet, airway) — or the patient is removed to the warm zone.</li>
                    <li><strong>WARM ZONE (Contamination Reduction Zone / Yellow):</strong> Where decontamination occurs. Personnel in Level C or B PPE (depending on the substance) perform decontamination. The EMS provider may work here with appropriate PPE and training. Patients are decontaminated before leaving the warm zone.</li>
                    <li><strong>COLD ZONE (Support Zone / Green):</strong> The safe area where medical treatment and transport occur. <strong>This is where EMS providers typically operate</strong> — receiving decontaminated patients and providing medical care. No contamination should reach the cold zone.</li>
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
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Level</th><th>Respiratory Protection</th><th>Skin Protection</th><th>When Used</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Level A</strong></td><td>SCBA (positive pressure, self-contained)</td><td>Fully encapsulating, vapour-tight chemical-resistant suit (splash and vapour protection)</td><td>Highest respiratory and skin hazard; when the substance is unknown or known to be highly toxic by skin contact; when IDLH conditions are present</td></tr>
                        <tr><td><strong>Level B</strong></td><td>SCBA (positive pressure, self-contained)</td><td>Chemical-resistant clothing (hooded, one-piece, or two-piece splash suit), boots, gloves (not vapour-tight)</td><td>High respiratory hazard but lower skin hazard; splash protection is adequate; when the substance is not absorbed through skin but is dangerously airborne</td></tr>
                        <tr><td><strong>Level C</strong></td><td>Air-purifying respirator (APR — full-face or half-face with appropriate cartridge)</td><td>Splash-protective chemical-resistant clothing (Tyvek suit), boots, gloves</td><td>When the substance is known AND the concentration is below IDLH AND the oxygen level is ≥19.5% AND the appropriate filter cartridge exists. An EMS provider working in the warm zone decontaminating patients might use Level C</td></tr>
                        <tr><td><strong>Level D</strong></td><td>None (no respiratory protection)</td><td>Standard work uniform (station wear, turnout gear)</td><td>No hazard present; routine operations; cold zone only</td></tr>
                    </tbody>
                </table></div>

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
                <p>Systematic, formal decontamination process conducted by the HAZMAT team. Includes a decontamination corridor with multiple stations (drop zone, primary wash, secondary wash, rinse, monitoring, dressing). The EMS provider is not typically involved in technical decon beyond assisting with patient transfer.</p>

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
                <p>Radiation emergencies involve the release of <strong>ionising radiation</strong> — alpha particles, beta particles, gamma rays, or neutrons. The most common radiation emergency an EMS provider will encounter is a <strong>transportation accident</strong> involving radioactive materials (medical isotopes, industrial sources). A <strong>radiation dispersal device (RDD, "dirty bomb")</strong> — a conventional explosive wrapped in radioactive material — is a terrorism concern. An actual nuclear detonation is a mass casualty event requiring a federal response.</p>

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
                <p><strong>EMS provider management of radiation patients:</strong> 1) Scene safety — do NOT enter a known radiation area without a radiological monitor and training. 2) The radiation source (sealed container) is the hazard — not the irradiated patient. 3) Contaminated patients require decontamination (remove clothing, gentle soap/water wash). 4) Treat life threats first — a contaminated cardiac arrest patient still needs CPR (with appropriate PPE). 5) Transport to a hospital designated for radiation emergencies. 6) Document the patient's estimated exposure, time of exposure, and any symptoms (especially time of first vomiting — a critical triage tool).</p>

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
                    answer: "Hot zone (exclusion/red) — contamination present, only Level A/B personnel enter; Warm zone (contamination reduction/yellow) — decontamination occurs; Cold zone (support/green) — safe area for medical treatment. EMS providers typically operate in the cold zone only.",
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
                    q: "You arrive at a truck crash on the highway. The truck has a red and white striped diamond placard with the number 1005. You smell a strong bleach-like odour and see a greenish-yellow vapour cloud forming near the overturned tanker. The driver is walking away from the truck, coughing and holding his eyes. What should the EMS provider do FIRST?",
                    options: [
                        "Run toward the truck driver to help him — he is clearly injured and needs medical attention",
                        "Park the ambulance upwind and uphill at least 500 feet away, don appropriate PPE, and assess the situation from a safe distance. The placard indicates a toxic gas (chlorine, UN 1005). The greenish-yellow colour and bleach odour confirm chlorine. Do NOT enter the vapour cloud",
                        "Approach the truck from downwind to identify the placard more clearly",
                        "Begin treating the driver immediately — his symptoms are likely from anxiety, not the chemical"
                    ],
                    correct: 1,
                    explanation: "Chlorine gas (UN 1005, Class 2.3 toxic gas) is greenish-yellow with a bleach-like odour. It is a pulmonary irritant that causes coughing, eye irritation, and respiratory distress. The EMS provider's first priority is SCENE SAFETY: park upwind and uphill (the vapour cloud will move downwind), don appropriate PPE (SCBA at minimum), and approach from a safe direction. Do NOT enter the vapour cloud without respiratory protection. Chlorine is heavier than air and will settle in low-lying areas. Once safe, assess the driver, provide high-flow O₂, bronchodilators if wheezing, and transport."
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
                        "Yellow placards indicate an OXIDIZER (Class 5). UN 1971 is methane / compressed natural gas (a Class 2.1 flammable gas), so the colour and UN number are mismatched and the placard is unreliable. This means the placard may be misleading or the substance requires immediate lookup in the ERG. Regardless, multiple patients with respiratory symptoms = a respiratory hazard exists. Maintain safe position, consult the ERG, and do NOT enter until the substance is identified and appropriate PPE is donned",
                        "The placard is yellow with a 1971 number — that indicates Class 7 (Radioactive). Evacuate 1 mile immediately"
                    ],
                    correct: 2,
                    explanation: "This is a trick question testing ERG knowledge. Yellow placards indicate an OXIDIZER (Class 5.1) or Organic Peroxide (5.2). UN 1971 is methane / compressed natural gas (a Class 2.1 flammable gas), so the placard colour and the UN number do not match — treat the placard as unreliable and verify with the ERG. The key point: an unknown placard with an invalid/unknown UN number requires the EMS provider to: 1) Maintain safe position upwind/uphill; 2) Consult the ERG with the placard class colour and any legible information; 3) NOT enter or approach; 4) Wait for the HAZMAT team to identify the substance. The multiple patients with respiratory symptoms confirm an inhalation hazard exists regardless of what the placard seems to indicate."
                },
                {
                    q: "You are at a mass casualty incident involving a suspected chemical release in a subway station. Multiple patients are streaming out of the station, coughing and complaining of eye irritation. Some are vomiting and have difficulty breathing. You see several patients collapsed near the exit. What is the correct approach to triage and treatment?",
                    options: [
                        "Enter the subway station immediately to rescue the collapsed patients — they are the highest priority",
                        "Set up a triage and decontamination station outside the station (warm zone) in the upwind direction. Have patients remove clothing, rinse with water, and then be triaged by severity. The collapsed patients near the exit should be removed by trained HAZMAT personnel in Level A/B PPE, decontaminated, and brought to the treatment area. EMS providers operate in the cold zone only",
                        "Triage all patients inside the station to avoid spreading contamination",
                        "Direct all patients to the nearest hospital — the hospital will handle decontamination and treatment"
                    ],
                    correct: 1,
                    explanation: "In a HAZMAT MCI: 1) EMS providers do NOT enter the hot zone (contaminated area); 2) A decontamination corridor (warm zone) should be set up upwind of the hot zone; 3) Patients remove their own clothing (if able) in the warm zone and are rinsed with water; 4) After decontamination, patients enter the cold zone for medical triage and treatment; 5) Collapsed/unable patients require HAZMAT team extraction; 6) Hospitals must be notified in advance — they cannot receive contaminated patients. A patient who arrives at the ED without decontamination will contaminate the entire ED and force it to close. The decontamination corridor should be set up with patient privacy in mind (privacy screens, separate areas for men/women if possible)."
                },
                {
                    q: "A worker at a manufacturing plant was exposed to a metal drum labelled 'Hydrogen Cyanide.' He was splashed on his arm and face. On your arrival, he is unconscious, seizing, and his skin is cherry-red. He has a strong odour of bitter almonds. What is the correct sequence of interventions?",
                    options: [
                        "Wait for the HAZMAT team to arrive — EMS providers cannot treat cyanide poisoning",
                        "Scene safety first: don Level B PPE (SCBA + splash suit) — cyanide is rapidly lethal by inhalation and dermal absorption. Decontaminate: remove clothing, copious water rinse. Administer hydroxocobalamin (Cyanokit) 5 g IV over 15 minutes. Treat seizures with benzodiazepines. Support ABCs. Transport emergently to a hospital with cyanide antidote capability",
                        "Administer activated charcoal — it will absorb the cyanide in his stomach",
                        "Dilute the cyanide by giving the patient large amounts of water to drink"
                    ],
                    correct: 1,
                    explanation: "Hydrogen cyanide is a rapidly lethal cellular asphyxiant. It is toxic by inhalation (the gas) and dermal absorption (the liquid). Scene safety is priority: SCBA is mandatory (the gas is deadly to rescuers), and splash protection prevents dermal absorption. Decontamination (remove clothing + water) is essential. Antidote: hydroxocobalamin (Cyanokit) 5 g IV over 15 minutes — it binds cyanide to form cyanocobalamin (vitamin B12), which is excreted harmlessly in urine. Alternative: sodium nitrite + sodium thiosulfate (amyl nitrite pearls can be used initially if IV access is delayed). Seizures are treated with benzodiazepines. The bitter almond odour and cherry-red skin are classic signs. Note: do NOT use activated charcoal — cyanide acts too rapidly for charcoal to be effective, and the patient is seizing/unconscious which increases aspiration risk."
                },
                {
                    q: "A patient was working in a lab and dropped a vial of radioactive iodine-131, which shattered on the floor. The patient has no visible contamination on his skin or clothing but was in the room when the vial broke. He is anxious and asking about his risk of cancer. He has no symptoms. What should the EMS provider do?",
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
                    question: "This is a potential HAZMAT scene with multiple red flags. What should the EMS provider do?",
                    options: [
                        {t: "STOP. Do NOT enter. The scene has multiple red flags: 1) Unknown substance — the chemical could be anything; 2) The worker approaching you is potentially contaminated (holding the container, wearing a contaminated Tyvek suit); 3) No PPE on the EMS provider — you are not protected; 4) The container is unlabeled — no placard, no UN number, no information; 5) The patient is inside the building — you cannot assess him from outside. Maintain a safe distance (at least 500 ft upwind). Request HAZMAT response. Tell the worker to leave the container outside and move away from the building to a safe area. Do NOT enter until the substance is identified, the scene is assessed by a HAZMAT team, and you are in appropriate PPE with decontamination set up", f: "Correct — This scene screams HAZMAT. The rescuer (the worker approaching you) may be contaminated. The substance is unknown. The EMS provider has NO PPE for chemical exposure. The absolute priority is scene safety. Do NOT enter the building. Do NOT approach the worker who may be contaminated. Maintain distance, request HAZMAT response, and establish a hot/warm/cold zone from a safe position."},
                        {t: "The worker is asking for help and his friend is injured inside — go in quickly, find the patient, drag him out, and then worry about decontamination outside. Seconds matter in a chemical exposure", f: "Incorrect — A dead or contaminated rescuer cannot help anyone. Entering a HAZMAT scene without: (1) knowing the substance, (2) having appropriate PPE, and (3) having a decontamination plan is one of the most common and most deadly EMS errors. The worker approaching you is potentially contaminated — being near him could expose you and your ambulance. Scene safety is the #1 priority in EMS, especially in HAZMAT incidents. Wait for the HAZMAT team."}
                    ],
                    correct: 0,
                    explanation: "HAZMAT incidents are one of the few emergencies where the EMS provider's first action is to NOT act — but to assess from a safe distance and call for resources. Red flags in this scenario: 1) Unknown substance — no placard, no label, no MSDS (Safety Data Sheet) available; 2) The worker approaching you is potentially contaminated — he is holding the container and wearing a soiled Tyvek suit; 3) The EMS provider has no chemical PPE — no SCBA, no splash suit, no gloves capable of chemical protection; 4) The patient is inside a building you cannot see into — you have no information about the environment (air quality, vapour, spills); 5) No decontamination setup — there is no decon corridor, no water source, no containment. Correct actions: 1) Maintain a safe upwind/uphill distance (at least 500 ft); 2) Request HAZMAT team response (fire department HAZMAT unit, regional HAZMAT team); 3) Tell the worker to leave the container in a safe place away from the building, move to your location, and remove his contaminated outer clothing; 4) Set up decontamination if you have the training and equipment; 5) Do NOT enter until scene is declared safe by the HAZMAT team; 6) Contact dispatch to obtain the Safety Data Sheet (SDS) for any chemical used at that facility if the substance can be identified.",
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
                    question: "How should the EMS provider manage this patient and the situation?",
                    options: [
                        {t: "Provide reassurance. This patient is decontaminated and asymptomatic. The most likely explanation is a hoax or non-toxic substance (flour, sugar, talcum powder, or a harmless prank) — the majority of 'white powder' incidents are false alarms. Reassure her that she is safe, has been decontaminated, and medical evaluation will confirm. Monitor for any delayed symptoms. Transport to hospital for medical clearance. Manage the media carefully — do not speculate about the substance on camera, refer all media inquiries to the incident commander/PAO", f: "Correct — Most white powder incidents are hoaxes or non-toxic substances (the US Postal Service sees hundreds annually, nearly all harmless). The patient has been decontaminated and is asymptomatic. Her anxiety is understandable and should be addressed with calm reassurance. Do NOT dismiss her fears — acknowledge them and provide factual information. Transport to hospital for medical evaluation and clearance. For media: refer all inquiries to the Public Information Officer (PIO) — do not speculate or comment on camera."},
                        {t: "Tell her she is probably going to be fine but that she needs to be quarantined for 2 weeks to make sure she doesn't develop symptoms. The white powder could be anthrax, and she should prepare for the worst", f: "Incorrect — While anthrax was a concern after the 2001 mail attacks, the vast majority of white powder incidents are harmless. Causing undue fear is harmful and unprofessional. Quarantine is not indicated — she has been decontaminated (removal of clothing + soap and water removes >99% of surface contamination). She needs medical evaluation and reassurance. Do not speculate about anthrax or other bioterror agents without evidence. If anthrax is confirmed, post-exposure prophylaxis with antibiotics is available — but this is not information for the EMS provider to provide without official confirmation."}
                    ],
                    correct: 0,
                    explanation: "White powder incidents are common and almost always non-toxic. The HAZMAT decontamination process (clothing removal + soap/water wash) effectively removes any surface contamination. This patient is asymptomatic after decontamination — a reassuring sign. Management: 1) Reassurance — calmly explain that she has been decontaminated and is being evaluated; 2) Empathy — her anxiety is a normal response to a frightening event; validate, don't dismiss; 3) Monitor — watch for any delayed symptoms during transport; 4) Transport to hospital for medical evaluation (even asymptomatic patients exposed to an unknown substance need medical clearance); 5) Documentation — document the type of exposure (white powder, airborne), decontamination performed, time of exposure, and any symptoms; 6) Media management — EMS personnel should not speculate or comment on the substance. Refer all media inquiries to the designated Public Information Officer. Never say 'it's probably harmless' on camera — the news will report that the substance was 'unknown.' Ethical principle: do no harm, including psychological harm from unnecessary fear or dismissive attitudes.",
                    kpi: "Manages patient anxiety appropriately after decontamination and avoids media speculation about an unknown substance"
                }
            ]
        },
        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s7 – CBRNE & Terrorism Response
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s7",
            shortTitle: "8.7 CBRNE & Terrorism Response",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> CBRNE & Terrorism Response</h3>

                <p>CBRNE is an acronym for <strong>Chemical, Biological, Radiological, Nuclear, and Explosive</strong> agents — the five categories of weapons of mass destruction (WMD) that EMS providers may encounter in a terrorist attack or industrial accident. The EMS provider's guiding principle in any suspected CBRNE event is: <strong>scene safety is paramount — do NOT become a victim yourself.</strong> Hazard identification, appropriate PPE, decontamination, and life-saving interventions must proceed in the correct order to protect both the rescuer and the patient.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Scene Safety in CBRNE:</strong> The single most important principle in CBRNE response is that you cannot help anyone if you become a victim yourself. Approach all suspected CBRNE scenes with extreme caution. Identify the agent (if possible), don appropriate PPE BEFORE entering the hot zone, and establish decontamination (decon) corridors before patient contact. If you smell something unusual, see dead animals, or encounter multiple patients with similar symptoms — STOP and reassess before proceeding.
                </div>

                <h4>CBRNE Categories — Overview</h4>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Category</th><th>Examples</th><th>Key Characteristics</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Chemical</strong></td><td>Nerve agents (sarin, VX, tabun), vesicants (mustard gas), cyanide, pulmonary agents (chlorine, phosgene)</td><td>Rapid onset (minutes to hours); produces predictable toxidrome based on agent class; decontamination essential</td></tr>
                        <tr><td><strong>Biological</strong></td><td>Anthrax, botulism, plague, smallpox, viral hemorrhagic fevers (Ebola, Marburg)</td><td>Delayed onset (days to weeks); person-to-person transmission varies; isolation and PPE critical for infectious agents</td></tr>
                        <tr><td><strong>Radiological</strong></td><td>Radiation dispersal devices ("dirty bombs"), industrial sources (Co-60, Cs-137)</td><td>Ionizing radiation; primary hazard is blast + contamination, not nuclear yield; time-distance-shielding principle</td></tr>
                        <tr><td><strong>Nuclear</strong></td><td>Improvised nuclear device (IND), nuclear weapon detonation</td><td>Massive blast, thermal, and radiation effects; acute radiation syndrome; catastrophic infrastructure damage</td></tr>
                        <tr><td><strong>Explosive</strong></td><td>Conventional bombs (TNT, ammonium nitrate fuel oil), suicide bombers, IEDs</td><td>Most common terrorist weapon; blast, penetrating, blunt, and burn injuries; secondary devices target responders</td></tr>
                    </tbody>
                </table></div>

                <h4>Chemical Agents</h4>

                <h5>Nerve Agents — Organophosphate Poisoning</h5>
                <p>Nerve agents (sarin, VX, tabun, soman) are organophosphate compounds that inhibit acetylcholinesterase, the enzyme that breaks down acetylcholine at the synaptic cleft. The resulting <strong>acetylcholine accumulation</strong> causes uncontrolled cholinergic stimulation, leading to the classic <strong>SLUDGEM syndrome</strong> — an acronym for the muscarinic effects:</p>
                <ul>
                    <li><strong>S</strong>alivation — excessive drooling, frothing at the mouth</li>
                    <li><strong>L</strong>acrimation — excessive tearing</li>
                    <li><strong>U</strong>rination — involuntary urination</li>
                    <li><strong>D</strong>efecation — involuntary defecation</li>
                    <li><strong>G</strong>I upset — abdominal cramping, nausea, vomiting</li>
                    <li><strong>E</strong>mesis — vomiting</li>
                    <li><strong>M</strong>iosis — pinpoint pupils (a hallmark sign)</li>
                </ul>
                <p>Additional effects include: <strong>bradycardia, bronchospasm, bronchorrhea (excessive pulmonary secretions), muscle fasciculations, weakness, seizures, and respiratory arrest</strong>. The cause of death is typically respiratory failure from a combination of bronchorrhea, bronchospasm, and paralysis of the respiratory muscles. Nerve agents can be absorbed through the skin (VX is particularly dermally active) or inhaled (sarin is primarily a respiratory threat).</p>

                <h5>Nerve Agent Antidotes</h5>
                <p>The standard treatment for nerve agent poisoning follows the <strong>MARK-1 kit</strong> (military autoinjector) protocol, which contains:</p>
                <ul>
                    <li><strong>Atropine</strong> — blocks the muscarinic effects of acetylcholine (dries secretions, dilates pupils, increases heart rate). Given in 2 mg increments every 5-10 minutes until muscarinic signs (secretions) resolve. Atropine does NOT work at the nicotinic receptor, so it does NOT reverse muscle weakness or paralysis.</li>
                    <li><strong>Pralidoxime (2-PAM, Protopam)</strong> — reactivates the inhibited acetylcholinesterase enzyme. It is most effective if given within minutes to hours of exposure (before the bond "ages" and becomes irreversible). Pralidoxime works at the nicotinic receptor and can restore muscle function.</li>
                    <li><strong>Diazepam</strong> — an anticonvulsant for seizure control — some MARK-1 kits contain or are supplemented with diazepam autoinjectors (CANA kits).</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> The endpoint of atropine therapy is <strong>drying of pulmonary secretions</strong>, not pupil dilation. The presence of clear lungs on auscultation and decreased oral secretions indicates adequate atropinization. A patient may still have pinpoint pupils despite adequate atropine — do NOT continue giving atropine based on pupil size alone. In the prehospital setting, if nerve agent exposure is suspected, administer atropine and pralidoxime per protocol and transport rapidly.
                </div>

                <h5>Vesicants — Blister Agents (Mustard Gas)</h5>
                <p>Vesicants such as <strong>sulfur mustard (mustard gas)</strong> and lewisite cause chemical burns to the skin, eyes, and respiratory tract. Mustard gas is an oily liquid that persists in the environment for days (persistent agent). Key features:</p>
                <ul>
                    <li><strong>Delayed onset:</strong> Symptoms appear 2-24 hours after exposure — this delay is a hallmark of mustard exposure. The patient may not know they were exposed until blistering begins.</li>
                    <li><strong>Erythema → vesication:</strong> Redness of the skin (erythema) progresses to large, fluid-filled blisters (vesicles/bullae) that are extremely painful.</li>
                    <li><strong>Pulmonary damage:</strong> Airway irritation, cough, pseudomembrane formation (sloughing of airway lining), and secondary pneumonia. Respiratory failure is the most common cause of death in mustard exposure.</li>
                    <li><strong>Ocular effects:</strong> Conjunctivitis, photophobia, corneal damage, and blepharospasm (involuntary eye closure).</li>
                    <li><strong>Bone marrow suppression:</strong> Severe exposures can cause leukopenia (low white blood cell count) days after exposure, increasing infection risk.</li>
                </ul>
                <p><strong>Management:</strong> Immediate decontamination with soap and water (within minutes to prevent or reduce injury). Contaminated clothing must be removed and bagged. Blisters should be covered with dry, sterile dressings. Do NOT intentionally rupture blisters — the intact blister roof provides a natural barrier against infection. Lewisite has an antidote (British Anti-Lewisite, BAL), but it is not in the EMT scope.</p>

                <h5>Cyanide</h5>
                <p>Cyanide is a rapid-acting cellular toxin that inhibits cytochrome c oxidase in the mitochondria, blocking cellular respiration (the cell cannot use oxygen). It can be released as a gas (hydrogen cyanide) or a salt (potassium/sodium cyanide). Cyanide may be released in industrial accidents (metal plating, mining, fumigation) or as a terrorist agent. Key features:</p>
                <ul>
                    <li><strong>Bitter almond smell:</strong> Approximately 50% of the population can detect this characteristic odour — if you cannot smell it, it does NOT rule out cyanide exposure (genetic inability to smell cyanide is common).</li>
                    <li><strong>Rapid onset:</strong> Symptoms occur within seconds to minutes after inhalation of hydrogen cyanide gas. Ingested cyanide salts take slightly longer (minutes).</li>
                    <li><strong>Classic presentation:</strong> Sudden onset of <strong>headache, dyspnea, altered mental status, seizures, and cardiovascular collapse</strong>. The patient may appear "red" (flushed skin) because venous blood remains oxygen-rich (the cells cannot extract oxygen) — this is called <strong>arterialization of venous blood</strong>.</li>
                    <li><strong>Profound metabolic acidosis:</strong> Because cells shift to anaerobic metabolism, massive lactic acidosis develops.</li>
                </ul>

                <h5>Cyanide Antidote</h5>
                <p><strong>Hydroxocobalamin (Cyanokit)</strong> is a form of vitamin B₁₂ that binds cyanide to form cyanocobalamin, which is then excreted in the urine. It is the preferred antidote in the prehospital setting because it has a favourable safety profile (it does not cause hypotension like the older cyanide antidote kit containing amyl nitrite and sodium thiosulfate). Hydroxocobalamin is given as a 5 g IV infusion over 15 minutes. It causes <strong>harmless red discolouration of the skin, urine, and mucous membranes</strong> — the patient's skin and urine will turn bright red for up to several days. <strong>This is expected and benign.</strong></p>

                <h5>Pulmonary Agents — Chlorine and Phosgene</h5>
                <p>Pulmonary agents (also called choking agents) primarily damage the respiratory tract. They are widely available in industrial settings and are a credible terrorist threat:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Agent</th><th>Source</th><th>Onset</th><th>Key Features</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Chlorine (Cl₂)</strong></td><td>Water treatment, industrial bleaching, swimming pools</td><td>Immediate</td><td>Greenish-yellow gas; bleach-like odour; immediate burning of eyes, nose, throat; coughing; chest tightness; dyspnea; pulmonary oedema can develop rapidly</td></tr>
                        <tr><td><strong>Phosgene (COCl₂)</strong></td><td>Industrial chemical (polyurethane, pesticides, dyes); also produced when chlorinated compounds burn</td><td>Delayed (6-24 hours)</td><td>Odour of freshly mown hay or corn; mild initial irritation followed by silent period; then sudden onset of fulminant <strong>pulmonary oedema</strong> (ARDS) hours later. This delayed onset is a TRAP — apparently well patients can deteriorate suddenly</td></tr>
                    </tbody>
                </table></div>
                <p><strong>Management:</strong> Remove from exposure, administer high-flow oxygen, monitor for respiratory distress, transport. Patients with phosgene exposure require observation even if asymptomatic — pulmonary oedema can develop hours later. Aggressive airway management may be needed for severe pulmonary oedema (CPAP, intubation).</p>

                <h4>Biological Agents</h4>
                <p>Biological agents are living organisms (bacteria, viruses, toxins) used to cause disease. Unlike chemical agents, biological agents typically have a <strong>delayed onset</strong> (days to weeks) because there is an incubation period before symptoms develop. Detection is difficult — the first sign of a bioterrorism attack may be an unusual cluster of patients presenting to emergency departments.</p>

                <h5>Anthrax (Bacillus anthracis)</h5>
                <p>Anthrax is a spore-forming bacterium that is the most common biological weapon. Spores are highly stable in the environment and can be aerosolized for inhalation. Three forms of anthrax disease:</p>
                <ul>
                    <li><strong>Cutaneous anthrax (most common):</strong> Spores enter through a break in the skin. A small, pruritic (itchy) papule develops within 1-7 days, progressing to a <strong>painless, black eschar (necrotic ulcer)</strong> surrounded by oedema. Cutaneous anthrax is treatable with antibiotics (ciprofloxacin, doxycycline) and has a low mortality rate (<1% with treatment).</li>
                    <li><strong>Inhalation anthrax (most lethal):</strong> Spores are inhaled into the lungs. Initial symptoms are non-specific (fever, malaise, cough, chest discomfort) — resembling influenza. After 1-3 days, rapid deterioration occurs with <strong>severe dyspnea, hypoxaemia, mediastinal widening (on chest X-ray), and haemorrhagic mediastinitis</strong>. The classic chest X-ray finding is a <strong>wide mediastinum</strong> from enlarged lymph nodes. Mortality approaches 90% even with treatment, emphasising the need for early recognition and prophylaxis.</li>
                    <li><strong>GI anthrax:</strong> Ingestion of contaminated meat causes fever, abdominal pain, nausea, vomiting, bloody diarrhoea, and sepsis. Mortality is 40-60%.</li>
                </ul>
                <p><strong>Management:</strong> Supportive care, antibiotics (ciprofloxacin or doxycycline) as per medical direction. Anthrax is <strong>NOT contagious person-to-person</strong> — standard precautions are adequate.</p>

                <h5>Botulism (Clostridium botulinum toxin)</h5>
                <p>Botulinum toxin is the most potent toxin known to humans. It blocks the release of acetylcholine at the neuromuscular junction, causing a <strong>flaccid descending paralysis</strong> that begins with cranial nerves and progresses downward. Key features:</p>
                <ul>
                    <li>Early signs: <strong>Blurred vision, diplopia (double vision), ptosis (drooping eyelids), dysphagia (difficulty swallowing), and dysarthria (slurred speech)</strong></li>
                    <li>Descending paralysis progresses to involve the neck, arms, trunk, and legs</li>
                    <li>Respiratory muscle paralysis leads to respiratory failure — this is the cause of death</li>
                    <li>Sensation is intact — the patient is fully aware but cannot move (this is psychologically devastating)</li>
                    <li>The patient is afebrile (no fever), and mental status is normal</li>
                </ul>
                <p>Botulism antitoxin is available but must be given early. Supportive care (respiratory support, ICU admission) is the mainstay. Botulism is <strong>not contagious person-to-person</strong>.</p>

                <h5>Plague (Yersinia pestis)</h5>
                <p>Plague is a bacterial infection transmitted by fleas in nature, but as a bioweapon it would likely be aerosolized to cause <strong>pneumonic plague</strong> — the most dangerous form. Two forms:</p>
                <ul>
                    <li><strong>Bubonic plague:</strong> Swollen, painful lymph nodes (buboes) after a flea bite. Incubation 2-6 days. Mortality 50-60% without treatment, <5% with antibiotics.</li>
                    <li><strong>Pneumonic plague:</strong> Aerosol exposure causes severe pneumonia with haemoptysis (coughing blood), high fever, dyspnea, and rapid progression to sepsis and respiratory failure. Incubation 1-3 days. <strong>Pneumonic plague is highly contagious</strong> via respiratory droplets — isolate the patient and use droplet/airborne precautions. Mortality approaches 100% without treatment within 24 hours.</li>
                </ul>

                <h5>Smallpox (Variola virus)</h5>
                <p>Smallpox was declared eradicated in 1980, but the virus exists in secure laboratories (US and Russia). A bioterrorism release would be catastrophic because the population has NO immunity (routine vaccination stopped in 1972). Key features:</p>
                <ul>
                    <li>Incubation: 7-17 days (average 12 days)</li>
                    <li>Prodrome: High fever, malaise, headache, severe back pain for 2-4 days</li>
                    <li>Rash: <strong>Synchronous (all lesions at the same stage) centrifugal distribution</strong> — meaning the rash is densest on the face, arms, and legs (centrifugal) and ALL lesions are the same stage of development (vesicles → pustules → scabs). This differs from chickenpox, which has lesions in different stages (asynchronous) concentrated on the trunk (centripetal).</li>
                    <li>Lesions are deep, firm, and well-circumscribed — "bullets under the skin"</li>
                </ul>
                <p>Smallpox is <strong>highly contagious</strong> via respiratory droplets and contact. Vaccination within 3-4 days of exposure can prevent or attenuate disease. Management: strict airborne and contact isolation, supportive care, vaccination of contacts (ring vaccination strategy). As an EMS provider, you would notify public health immediately and use airborne PPE (N95 or higher, gown, gloves, eye protection) for any suspected case.</p>

                <h5>Viral Hemorrhagic Fevers (Ebola, Marburg)</h5>
                <p>Viral hemorrhagic fevers (VHFs) are severe multi-system illnesses caused by RNA viruses (filoviruses, arenaviruses, bunyaviruses). Ebola virus disease (EVD) is the prototypical VHF:</p>
                <ul>
                    <li>Incubation: 2-21 days (average 8-10 days)</li>
                    <li>Initial symptoms: Sudden onset of fever, severe headache, myalgia, malaise, sore throat — non-specific "flu-like" illness</li>
                    <li>Progression: Vomiting, diarrhoea, abdominal pain, impaired liver and kidney function</li>
                    <li>Haemorrhagic phase: <strong>Internal and external bleeding</strong> (petechiae, ecchymosis, bleeding from venipuncture sites, mucosal haemorrhage) in approximately 30-50% of patients</li>
                    <li>Shock and multi-organ failure in fatal cases</li>
                </ul>
                <p>Ebola is transmitted through direct contact with blood, body fluids, and contaminated surfaces. It is <strong>not airborne</strong>. Strict isolation, full PPE (Tyvek suit, N95 or PAPR, double gloves, boot covers), and meticulous decontamination are essential. EMS should coordinate with public health and receiving hospitals before transport.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> For most biological agents, the EMS provider's role is recognition (unusual clusters of illness, rapid progression), notification (public health, receiving facility), and supportive care with appropriate PPE. Decontamination of biological agents is less urgent than chemical agents — focus on infection control (hand hygiene, masks, gloves, isolation) rather than soap-and-water decon.
                </div>

                <h4>Radiological & Nuclear Agents</h4>
                <p>Radiological emergencies involve exposure to ionizing radiation. The effects depend on the <strong>type of radiation, dose, duration of exposure, and whether contamination (radioactive material on or in the body) is present.</strong></p>

                <h5>Types of Ionizing Radiation</h5>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Type</th><th>Penetration</th><th>Shielding</th><th>Hazard</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Alpha (α)</strong></td><td>Stopped by a sheet of paper or the dead layer of skin</td><td>Clothing, skin</td><td>Only hazardous if <strong>ingested, inhaled, or absorbed through a wound</strong> — internal contamination. Minimal external hazard.</td></tr>
                        <tr><td><strong>Beta (β)</strong></td><td>Stops in plastic or a few cm of tissue</td><td>Plexiglass, aluminium, thick clothing</td><td>Can cause skin burns (beta burns). Hazardous if internalised. Can penetrate to the basal layer of the skin.</td></tr>
                        <tr><td><strong>Gamma (γ)</strong></td><td>Highly penetrating — passes through the body</td><td>Lead, thick concrete, water</td><td>External exposure is the primary hazard. Whole-body exposure causes acute radiation syndrome. Gamma radiation is the primary concern in most radiological incidents.</td></tr>
                    </tbody>
                </table></div>

                <h5>Acute Radiation Syndrome (ARS)</h5>
                <p>ARS occurs after a high-dose, whole-body radiation exposure (typically >1 Gray). It has three classic phases:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Phase</th><th>Timing</th><th>Manifestations</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Prodrome</strong></td><td>Minutes to hours after exposure</td><td>Nausea, vomiting, diarrhoea, anorexia, fatigue. The speed of onset and severity correlate with dose — vomiting within 1-2 hours suggests a very high dose (>4 Gray) with poor prognosis.</td></tr>
                        <tr><td><strong>Latent phase</strong></td><td>Hours to weeks (depending on dose)</td><td>The patient appears to improve — symptoms resolve. This is a FALSE recovery. The duration of the latent phase is inversely proportional to dose. At very high doses (>10 Gray), the latent phase may be absent entirely.</td></tr>
                        <tr><td><strong>Manifest illness</strong></td><td>Days to weeks after exposure</td><td>Sub-syndromes depending on which organ system is affected: <strong>Hematopoietic</strong> (bone marrow suppression → infection, bleeding), <strong>GI</strong> (severe nausea, vomiting, diarrhoea, mucosal sloughing, dehydration), <strong>Neurovascular</strong> (confusion, ataxia, seizures, coma — seen only with very high doses >10-20 Gray, universally fatal).</td></tr>
                    </tbody>
                </table></div>

                <h5>Radiological Principles — Time, Distance, Shielding</h5>
                <p>The fundamental principles of radiation protection are:</p>
                <ul>
                    <li><strong>Time:</strong> Minimise time spent in the radiation area. The dose is directly proportional to the duration of exposure. Work efficiently — every second counts.</li>
                    <li><strong>Distance:</strong> Maximise distance from the source. Radiation follows the <strong>inverse square law</strong> — doubling the distance reduces the dose by a factor of four (1/d²).</li>
                    <li><strong>Shielding:</strong> Place shielding (lead, concrete, or even distance + mass) between yourself and the source. For gamma radiation, dense materials (lead, concrete) are most effective.</li>
                </ul>
                <p>The mantra is simple: <strong>Get in, get the patient, get out — and don't stay longer than necessary.</strong></p>

                <h5>Potassium Iodide (KI)</h5>
                <p>Potassium iodide (KI) is <strong>NOT a general radiation antidote</strong> — it protects only the thyroid gland from <strong>radioactive iodine</strong> uptake. KI saturates the thyroid with stable iodine, preventing the uptake of radioactive iodine-131 (a common fission product released in nuclear reactor accidents or nuclear weapon detonations). KI does NOT protect against external radiation, other radioactive isotopes, or any other organ. It must be taken within hours of exposure to be effective. <strong>KI is not routinely carried by EMS</strong> but may be distributed by public health authorities in a nuclear event.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Treat Life Threats First:</strong> In a radiological event, <strong>do NOT refuse to treat a contaminated patient because of radiation concerns</strong>. Treat life-threatening injuries (ABCs) FIRST — trauma kills faster than radiation. The radiation dose to providers from a contaminated patient is typically LOW and can be managed with simple precautions (gloves, mask, coverall, distance, time limits). Decontamination (remove clothing, irrigate wounds, wash exposed skin with soap and water) should occur AFTER the patient is medically stabilised.
                </div>

                <h4>Explosive/Blast Injuries</h4>
                <p>Explosives are the most commonly used terrorist weapon worldwide. Blast injuries are classified into four categories based on the mechanism of injury:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Category</th><th>Mechanism</th><th>Injuries</th><th>Notes</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Primary blast injury</strong></td><td>Overpressure wave (blast wave) passing through the body</td><td><strong>Barotrauma to air-filled organs:</strong> Tympanic membrane rupture (most common), pulmonary blast injury (contusion, pneumothorax, air embolism), bowel perforation</td><td>Tympanic membrane rupture is a MARKER for significant blast exposure — if the eardrums are ruptured, suspect lung and bowel injury even if asymptomatic</td></tr>
                        <tr><td><strong>Secondary blast injury</strong></td><td>Fragments (shrapnel) propelled by the blast</td><td><strong>Penetrating trauma:</strong> Lacerations, puncture wounds, embedded foreign bodies, eye injuries</td><td>Fragments may include nails, ball bearings, glass, or any material in the bomb or environment</td></tr>
                        <tr><td><strong>Tertiary blast injury</strong></td><td>Victim is thrown by the blast wind</td><td><strong>Blunt trauma:</strong> Head injury (TBI, concussion), spinal injury, fractures, amputation, internal organ injury</td><td>Victim may strike stationary objects or be crushed by collapsing structures</td></tr>
                        <tr><td><strong>Quaternary blast injury</strong></td><td>All other blast effects</td><td><strong>Burns, crush injuries, inhalational injury, toxic exposure, psychological trauma</strong></td><td>Includes exacerbation of pre-existing conditions (e.g., exacerbation of COPD, MI from stress)</td></tr>
                    </tbody>
                </table></div>

                <h5>Secondary Devices</h5>
                <p>Terrorists frequently place a <strong>secondary device</strong> (a second bomb) timed to detonate after the initial explosion — specifically targeting the responders (police, fire, EMS) who arrive to help. The <strong>secondary device is the most dangerous threat to EMS at a bombing scene.</strong> Never approach a blast scene until law enforcement has declared it safe. Staging areas must be positioned at a safe distance and continuously reassessed.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Secondary Devices:</strong> In any suspected bombing or terrorist event, <strong>do NOT enter the blast zone until law enforcement has cleared it</strong>. Stage at a safe distance (minimum 1,000 feet from the blast site for a medium-sized device; farther for large vehicles). Be vigilant for suspicious objects, vehicles, or persons in the staging area. The secondary device is the primary cause of EMS casualties in bombing incidents. <strong>If there is one explosion, there may be more.</strong>
                </div>

                <h4>Decontamination Principles</h4>
                <p>Decontamination (decon) is the process of removing or neutralising hazardous material from patients and providers. The basic principles:</p>
                <ul>
                    <li><strong>Gross decon:</strong> Remove ALL clothing (removes 80-90% of contamination). Have the patient shower with soap and warm water. Brush and rinse vigorously. Collect runoff if possible. Do NOT use bleach on skin — it can cause chemical burns and increases the absorption of some agents.</li>
                    <li><strong>Clothing removal is the single most effective decon step</strong> — cutting off clothing reduces contamination by 80-90%. Place all clothing in sealed, labelled bags (hazardous waste).</li>
                    <li><strong>Wound decon:</strong> Irrigate open wounds with copious amounts of saline or water. Cover with sterile dressings after irrigation.</li>
                    <li><strong>Eye decon:</strong> If eyes are exposed to chemical agents or radioactive material, irrigate copiously with water or saline for 15-20 minutes (remove contact lenses first).</li>
                    <li><strong>Warm vs. cold water:</strong> Use warm water if available — cold water causes shivering and vasoconstriction, which can slow decon. Hot water increases absorption of some chemicals (vasodilation).</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> <strong>Scene safety is paramount in any suspected CBRNE event — do NOT become a victim.</strong> Decontamination is essential but life threats come first. Use appropriate PPE for the agent. The hierarchy of response in any CBRNE incident is: 1) Scene safety / establish command, 2) Zone identification (hot/warm/cold), 3) PPE for the anticipated hazard, 4) Rescue and life-saving interventions, 5) Decontamination, 6) Medical treatment and transport. Memorise this sequence — it may be tested on the NREMT.
                </div>
            </div>`,
            flashcards: [
                { question: "What does CBRNE stand for?", answer: "Chemical, Biological, Radiological, Nuclear, Explosive — the five categories of weapons of mass destruction.", category: "CBRNE Overview" },
                { question: "What is SLUDGEM syndrome in nerve agent poisoning?", answer: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis — caused by acetylcholine accumulation from acetylcholinesterase inhibition.", category: "Chemical — Nerve Agents" },
                { question: "What are the components of a MARK-1 kit and what does each do?", answer: "Atropine (blocks muscarinic effects — dries secretions), Pralidoxime/2-PAM (reactivates acetylcholinesterase enzyme), plus Diazepam (anticonvulsant).", category: "Chemical — Nerve Agents" },
                { question: "What is the key characteristic of mustard gas (vesicant) exposure?", answer: "Delayed onset — erythema and blistering develop 2-24 hours after exposure. Also causes pulmonary damage, ocular injury, and bone marrow suppression in severe cases.", category: "Chemical — Vesicants" },
                { question: "What is the antidote for cyanide poisoning and what side effect does it cause?", answer: "Hydroxocobalamin (Cyanokit) — 5 g IV. Causes harmless red discolouration of skin, urine, and mucous membranes for up to several days.", category: "Chemical — Cyanide" },
                { question: "What is the key difference between phosgene and chlorine as pulmonary agents?", answer: "Chlorine causes IMMEDIATE irritation (green gas, bleach smell). Phosgene causes MILD initial irritation followed by a silent period of 6-24 hours, then sudden fulminant pulmonary oedema.", category: "Chemical — Pulmonary Agents" },
                { question: "What are the three forms of anthrax and which is most lethal?", answer: "Cutaneous (painless black eschar, <1% mortality), Inhalation (wide mediastinum, ~90% mortality even with treatment), and GI (40-60% mortality). Anthrax is NOT contagious.", category: "Biological — Anthrax" },
                { question: "What are the three principles of radiation protection?", answer: "Time (minimise exposure duration), Distance (maximise distance — inverse square law), Shielding (dense materials between source and person).", category: "Radiological/Nuclear" }
            ],
            quiz: [
                {
                    q: "An EMS provider arrives at a suspected chemical exposure incident. Multiple patients are lying on the ground with excessive secretions, drooling, urinating, and defecating involuntarily. Their pupils are pinpoint. The scene smells faintly of something like 'sweet fruit.' What class of agent is most likely involved and what is the priority intervention?",
                    options: [
                        "Sarin (nerve agent) — initiate BLS decontamination, remove clothing, and administer atropine and pralidoxime per protocol",
                        "Mustard gas (vesicant) — apply burn dressings and transport",
                        "Cyanide — administer hydroxocobalamin immediately",
                        "Chlorine gas — place on high-flow oxygen and transport"
                    ],
                    correct: 0,
                    explanation: "The presentation of SLUDGEM syndrome (excessive secretions, drooling, involuntary urination/defecation, pinpoint pupils) is classic for nerve agent (organophosphate) poisoning, most likely sarin. The management priority: 1) Scene safety — ensure PPE (SCBA or N95 with chemical-resistant suit and gloves), 2) Rapid decontamination (remove clothing, soap and water), 3) Antidote administration — atropine (2 mg increments until secretions dry) and pralidoxime, 4) Diazepam if seizing, 5) Airway support and transport."
                },
                {
                    q: "A 35-year-old male presents with sudden onset of headache, dyspnea, altered mental status, and a single seizure. His skin is flushed red. His coworkers report he was working in a metal plating facility where a tank of 'cleaning solution' was spilled. Vital signs: HR 122, BP 88/56, RR 28, SpO₂ 98% on room air. What is the most likely cause and treatment?",
                    options: [
                        "Carbon monoxide poisoning — high-flow oxygen via NRB at 15 L/min",
                        "Cyanide poisoning — administer hydroxocobalamin (Cyanokit) 5 g IV",
                        "Phosgene exposure — observe for pulmonary oedema",
                        "Nerve agent exposure — administer atropine and pralidoxime"
                    ],
                    correct: 1,
                    explanation: "This is a classic presentation of cyanide poisoning: rapid onset after industrial exposure, headache, dyspnea, seizures, flushed skin (arterialization of venous blood — the cells cannot extract oxygen), and a normal SpO₂ (pulse oximetry is falsely normal because it measures oxygen bound to haemoglobin, not oxygen extraction at the tissue level). Cyanide is used in metal plating. Hydroxocobalamin is the antidote. The patient will develop profound metabolic acidosis. The normal SpO₂ with severe symptoms is a clue — in cyanide poisoning, the blood is oxygenated but the cells cannot use it."
                },
                {
                    q: "[HARD] An EMS crew responds to a blast at a public market. On arrival, law enforcement has not yet cleared the scene. A woman with traumatic amputation of her right leg is lying 50 feet from the blast site, bleeding profusely. Several other victims are scattered around. What is the MOST appropriate initial action?",
                    options: [
                        "Immediately enter the blast zone to apply a tourniquet to the woman with the amputation — she is the most critical patient",
                        "Stage at a safe distance, wait for law enforcement to confirm the scene is secure and there are no secondary devices, then enter with full scene safety protocols",
                        "Start with the closest patient and work your way to the farthest — the scene must be safe since law enforcement is present nearby",
                        "Treat patients only if they come to you — do not enter the blast zone at all"
                    ],
                    correct: 1,
                    explanation: "The number one threat to EMS in a bombing incident is the secondary device — a second bomb timed to detonate when responders arrive. Until law enforcement has declared the scene safe, EMS must stage at a safe distance (minimum 1,000 feet). Entering the blast zone prematurely risks the lives of the entire crew. The woman with the amputation is a critical patient, but the EMS provider cannot help anyone if killed or injured by a secondary explosion. Scene safety is the FIRST priority in CBRNE and terrorism response. This is a key NREMT principle."
                },
                {
                    q: "After a suspected smallpox outbreak, a patient presents with a high fever, severe headache, and a rash that is most concentrated on the face, arms, and legs. All the rash lesions appear to be in the same stage of development (all pustules). What distinguishes this from chickenpox?",
                    options: [
                        "Smallpox lesions are centrifugal (face/extremities) and synchronous (all same stage); chickenpox lesions are centripetal (trunk) and asynchronous (different stages)",
                        "There is no difference — both present identically",
                        "Smallpox causes a centripetal rash while chickenpox causes a centrifugal rash",
                        "Smallpox lesions are always on the palms and soles only"
                    ],
                    correct: 0,
                    explanation: "The classic differentiating feature between smallpox and chickenpox: Smallpox has a centrifugal distribution (rash is densest on face, arms, legs) with synchronous development (all lesions at the same stage — all vesicles, or all pustules). Chickenpox has a centripetal distribution (rash is densest on the trunk) with asynchronous development (lesions in different stages simultaneously — some vesicles, some scabs, some fresh lesions). Smallpox is highly contagious and requires airborne and contact isolation. Notify public health immediately."
                }
            ],
            critical: [
                {
                    id: "crit_8_7_1",
                    scenario: "You are dispatched to a community centre where approximately 30 people have suddenly become ill during a large gathering. On arrival, you find multiple patients with excessive drooling, tearing, involuntary urination and defecation, vomiting, and what appear to be very small pupils. Some patients are seizing. Several people are lying on the ground not moving. A bystander reports that a man wearing heavy clothing walked through the crowd approximately 10 minutes ago and then left through a side exit. The room has a faintly sweet, fruity odour. Your partner is reaching for her jump bag and starting toward the nearest patient.",
                    question: "What should the EMS provider do first, and what is the sequence of actions for managing this event?",
                    options: [
                        {t: "Immediately start treating the nearest patient — open the airway, check breathing, and administer atropine for nerve agent poisoning. The sweet odour and SLUDGEM symptoms are classic for a nerve agent release. Every minute counts", f: "Incorrect — The sweet fruity odour and SLUDGEM symptoms strongly suggest a nerve agent (sarin). However, rushing into the scene without PPE is dangerous. The agent may still be in the air (sarin is volatile and inhalational). The first priority is scene safety — ensure the area is ventilated (open windows, evacuate if possible) and don appropriate PPE (SCBA or at minimum a chemical-resistant suit with N95/P100 respirator and nitrile gloves). Only THEN begin patient care. Also, consider that the perpetrator may still be on scene or a secondary device may be present."},
                        {t: "Stop your partner — scene safety first. The presentation is consistent with a nerve agent release. Ensure the area is well-ventilated (open doors/windows if safe), have all responders don appropriate PPE (chemical-resistant suits, SCBA if available, nitrile gloves). Establish incident command and call for HAZMAT resources, additional EMS units, and law enforcement. Set up a decontamination corridor (remove clothing, soap and water). Only then begin triage and treatment — administer atropine and pralidoxime to symptomatic patients, diazepam for seizures, and provide airway support", f: "Correct — This is a suspected chemical terrorism event with a nerve agent (sarin). The number one priority is provider safety — do NOT enter the hot zone without appropriate PPE. Sarin is a volatile liquid that evaporates into a vapour — it can be inhaled or absorbed through the skin. The sequence: 1) Scene safety — ventilate area, don PPE, 2) Establish command and call for resources, 3) Set up decon corridor, 4) Triage and treat — atropine, pralidoxime, diazepam, airway support, 5) Transport."}
                    ],
                    correct: 1,
                    explanation: "This is a mass-casualty nerve agent exposure. The priorities in order: (1) PROTECT YOURSELF — do NOT enter without PPE. Sarin is a volatile nerve agent that can be inhaled or absorbed through the skin. SCBA is ideal; if unavailable, a chemical-resistant suit with P100 respirator and double nitrile gloves is the minimum. (2) PROTECT OTHERS — call for HAZMAT, EMS backup, law enforcement. (3) DECONTAMINATE — remove all clothing (80-90% of contamination), wash with soap and water. (4) TREAT — atropine (2 mg increments until secretions dry), pralidoxime (1 g IV/IM), diazepam for seizures, aggressive airway management. (5) TRANSPORT — distribute patients to multiple hospitals. Remember: the fruity/sweet odour is a clue for nerve agents — but some nerve agents (VX) are odourless.",
                    kpi: "Prioritises scene safety and appropriate PPE in suspected chemical terrorism event"
                },
                {
                    id: "crit_8_7_2",
                    scenario: "You respond to a suburban home where a family of three is ill. The 45-year-old father, 42-year-old mother, and 8-year-old son all developed symptoms over the past 24 hours: fever, severe headache, muscle aches, and a non-productive cough. The father is now in severe respiratory distress with SpO₂ 82% on room air and is coughing up blood-tinged sputum. The mother is febrile to 104°F and also has cough and dyspnea. The son has fever and cough but is less severely affected. The family has no recent travel history but lives near a research laboratory. On your way to the scene, dispatch mentions that two other nearby homes have called 911 with similar symptoms in the past 4 hours. The father tells you he 'feels like he's dying' and that the cough came on 'like nothing I've ever felt before.' There are no dead animals, no unusual odours, and no signs of trauma or exposure.",
                    question: "This rapidly progressive respiratory illness with haemoptysis in multiple members of different households suggests a possible biological attack. What agent is most likely and what actions should the EMS provider take?",
                    options: [
                        {t: "This appears to be a severe influenza outbreak — give symptomatic care, oxygen, and transport. Notify the hospital of multiple patients with flu-like symptoms", f: "Incorrect — While the initial symptoms are flu-like, the rapid progression to haemoptysis and severe respiratory distress in otherwise healthy individuals (especially in multiple households simultaneously) is highly suspicious for a bioterrorism agent. Influenza rarely causes this degree of haemoptysis and rapid deterioration in adults. The most likely agents are pneumonic plague or inhalational anthrax. The clustering in multiple nearby homes suggests an aerosol release."},
                        {t: "Suspect pneumonic plague or inhalational anthrax — both can present with rapid-onset severe pneumonia and haemoptysis. Apply airborne and droplet precautions (N95 or higher, gown, gloves, eye protection), administer high-flow oxygen, support respirations, transport to a facility capable of managing highly infectious diseases, and immediately notify public health authorities, the receiving hospital, and local law enforcement of a potential biological attack", f: "Correct — The presentation of rapidly progressive pneumonia with haemoptysis in multiple households simultaneously is a bioterrorism 'red flag.' Pneumonic plague and inhalational anthrax are the two most likely aerosolised biological weapons causing this syndrome. Critical actions: 1) PPE — airborne and contact precautions minimum, 2) Notify dispatch, hospital, and public health, 3) Supportive care, 4) Limit exposures — do not transport multiple patients in the same ambulance unless absolutely necessary, 5) Decontamination is less urgent — focus on infection control."}
                    ],
                    correct: 1,
                    explanation: "This presentation should trigger a bioterrorism response: rapidly progressive respiratory failure with haemoptysis in multiple patients across multiple households. This is NOT seasonal influenza. The two most likely agents are: (1) Pneumonic plague — highly contagious via respiratory droplets, haemoptysis is common, and mortality approaches 100% without treatment within 24 hours. (2) Inhalational anthrax — non-contagious, but presents with severe haemoptysis, mediastinal widening, and high mortality. The EMS provider must use airborne/droplet PPE, notify public health and the receiving hospital immediately, and provide aggressive supportive care. Do NOT use nebulizer treatments (aerosolizes respiratory secretions and may increase transmission risk).",
                    kpi: "Recognises cluster of severe respiratory illness as potential biological attack and activates public health notification"
                },
                {
                    id: "crit_8_7_3",
                    scenario: "A 9-year-old boy is brought to a first aid station at a public event after a small 'explosion' in a trash can nearby. He has sustained a deep laceration to his left thigh from flying debris and is bleeding briskly. He is awake, crying, and in pain. There is no respiratory distress, his pulse is 110, and his skin is pink and warm. However, there is a grey-white powdery substance on his clothing and exposed skin. Several adults nearby also have the same substance on their clothing. Police have not yet cleared the scene, and the trash can is approximately 75 feet away with smoke rising from it. The boy's mother is frantic and begging you to 'do something.'",
                    question: "How should the EMS provider manage this patient — balancing the wound, the unknown powder, scene safety concerns, and the mother's distress?",
                    options: [
                        {t: "The powder is likely harmless — focus on the bleeding leg wound. Apply direct pressure and a pressure dressing, reassure the mother, and transport the child to the hospital", f: "Incorrect — You cannot assume the powder is harmless. In a suspected bombing/terrorist event, any unknown powder or substance on patients must be treated as potentially hazardous (chemical or biological agent). Additionally, the scene has not been cleared by law enforcement — there may be a secondary device. Rushing into an uncleared zone to treat one patient risks the entire crew."},
                        {t: "Do NOT enter the scene until law enforcement clears it. Once cleared, don appropriate PPE (gloves, mask, eye protection, coverall). Before entering the patient care area, perform gross decontamination: remove the child's contaminated clothing (bag and label as hazardous waste), gently brush visible powder from his skin, then irrigate the leg wound with copious saline. Cover the wound with sterile dressings and control bleeding with pressure. Transport while monitoring for any signs of chemical or biological illness", f: "Correct — The sequence is: 1) Scene safety — wait for law enforcement to clear the scene and rule out a secondary device, 2) PPE — at minimum gloves, N95 mask, eye protection; HAZMAT suit if available, 3) Decontamination BEFORE patient care — remove contaminated clothing (cuts contamination by 80-90%), brush off visible powder, 4) THEN treat the leg wound — control haemorrhage with direct pressure, 5) Transport and monitor for symptoms. The powder could be anything from flour (intentional distractant) to anthrax spores to a chemical agent — treat it as hazardous until proven otherwise."}
                    ],
                    correct: 1,
                    explanation: "This scenario combines multiple threats: scene safety (uncleared blast scene with potential secondary device), unknown hazardous substance (powder on multiple patients), and a treatable injury (bleeding leg wound). The correct management sequence: 1) WAIT for law enforcement clearance — do not enter the blast zone, 2) Once cleared, DON appropriate PPE before approaching patients, 3) GROSS DECON — remove all contaminated clothing and bag it, brush off visible powder, 4) THEN treat life threats — control haemorrhage from the leg wound, 5) TRANSPORT and monitor for any symptoms of chemical/biological exposure. Remember: removing clothing removes 80-90% of surface contamination. The powder could be anything — handle it as hazardous until proven benign.",
                    kpi: "Balances scene safety, decontamination, and life-saving interventions in a suspected CBRNE event"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s8 – Mass-Casualty Incidents & Triage
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s8",
            shortTitle: "8.8 Mass-Casualty Incidents & Triage",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Mass-Casualty Incidents & Triage</h3>

                <p>A <strong>mass-casualty incident (MCI)</strong> is any event in which the number of patients exceeds the available resources — personnel, equipment, and transport capacity. In an MCI, the goal shifts from providing maximal care to each individual patient (the usual standard) to <strong>doing the greatest good for the greatest number of patients</strong>. This fundamental shift in approach is called <strong>disaster triage</strong>, and the tool used to achieve it is the <strong>START triage system</strong> (Simple Triage and Rapid Treatment).</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — MCI Mindset:</strong> In an MCI, your duty is NOT to provide comprehensive care to every patient. Your duty is to sort patients rapidly by severity, identify those who can be saved with immediate intervention, and allocate limited resources to achieve the best outcome for the group. This is emotionally difficult — you will have to walk past patients who are dying to treat others who can be saved. This is the reality of disaster medicine.
                </div>

                <h4>START Triage System</h4>
                <p>The <strong>START triage system</strong> (Simple Triage and Rapid Treatment) was developed in 1983 by the Newport Beach (CA) Fire Department and the Hoag Hospital Emergency Department. It is the most widely used triage system in the United States for adult patients. Triage is performed using the <strong>RPM</strong> assessment sequence: <strong>R</strong>espirations → <strong>P</strong>erfusion → <strong>M</strong>ental Status.</p>

                <h5>Triage Categories — The Four Colours</h5>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Colour</th><th>Category</th><th>Tag Label</th><th>Definition</th><th>Time Goal</th></tr>
                    </thead>
                    <tbody>
                        <tr><td style="background:#dc3545; color:white;"><strong>RED</strong></td><td><strong>Immediate</strong></td><td>P1 / Priority 1</td><td>Life-threatening injury or condition; patient can be saved with immediate intervention. Requires treatment within <strong>60 minutes</strong>.</td><td>< 60 min</td></tr>
                        <tr><td style="background:#ffc107; color:black;"><strong>YELLOW</strong></td><td><strong>Delayed</strong></td><td>P2 / Priority 2</td><td>Serious injury but stable for a short period. Can wait <strong>60 minutes to 2 hours</strong> for treatment without immediate threat to life or limb.</td><td>60 min – 2 hrs</td></tr>
                        <tr><td style="background:#28a745; color:white;"><strong>GREEN</strong></td><td><strong>Minor</strong></td><td>P3 / Priority 3</td><td>"Walking wounded" — minor injuries that do not require immediate attention. Can wait <strong>hours</strong> for treatment. These patients can also assist with light tasks (directing traffic, carrying supplies).</td><td>Hours</td></tr>
                        <tr><td style="background:#343a40; color:white;"><strong>BLACK</strong></td><td><strong>Deceased / Expectant</strong></td><td>P4 / Priority 4</td><td>Dead or injuries so severe that survival is impossible given available resources (e.g., cardiac arrest in an MCI, massive head trauma with brain matter exposed, decapitation). These patients receive <strong>comfort care only</strong> — do NOT expend resources on patients who cannot survive.</td><td>N/A</td></tr>
                    </tbody>
                </table></div>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> In an MCI, <strong>the greatest good for the greatest number</strong> is the guiding principle. Triage is <strong>dynamic</strong> — a patient who is YELLOW now may decompensate to RED later. Reassess patients regularly. Your first duty is to establish command and request additional resources. Do NOT stop to provide prolonged care to any single patient during the primary triage pass.
                </div>

                <h5>The START Algorithm (RPM)</h5>
                <p>Triage is performed in <strong>30 seconds or less per patient</strong> using a systematic stepwise approach. The mnemonic <strong>RPM</strong> (Respirations, Perfusion, Mental Status) guides the assessment:</p>

                <h6>Step 1: Respirations</h6>
                <ul>
                    <li><strong>Is the patient breathing?</strong> If NO — open the airway. If still NOT breathing, tag <strong>BLACK</strong> (deceased/expectant).</li>
                    <li><strong>If breathing, what is the rate?</strong> Count for 5-10 seconds and multiply.
                        <ul>
                            <li><strong>>30 breaths/min</strong> (tachypneic) → tag <strong>RED</strong> — respiratory distress indicates life-threatening injury</li>
                            <li><strong><30 breaths/min</strong> (normal or slow) → proceed to Perfusion assessment</li>
                        </ul>
                    </li>
                </ul>

                <h6>Step 2: Perfusion</h6>
                <ul>
                    <li>Check for a <strong>radial pulse</strong> (at the wrist). A radial pulse indicates a systolic BP of at least 80 mmHg.</li>
                    <li><strong>NO radial pulse</strong> → tag <strong>RED</strong> — the patient is in shock and needs immediate intervention</li>
                    <li><strong>Radial pulse present</strong> → proceed to Mental Status assessment</li>
                </ul>

                <h6>Step 3: Mental Status</h6>
                <ul>
                    <li>Assess the patient's ability to follow simple commands: <strong>"Can you squeeze my hand? Can you open your eyes?"</strong></li>
                    <li><strong>Unable to follow commands</strong> (or altered mental status) → tag <strong>RED</strong></li>
                    <li><strong>Able to follow commands</strong> → tag <strong>YELLOW</strong> (delayed) — provided the patient does NOT meet any RED criteria</li>
                </ul>

                <h6>Walking Wounded — The First Triage Step</h6>
                <p>Before starting RPM, direct all patients who can walk to a designated <strong>collection area</strong>. These patients are tagged <strong>GREEN</strong> (minor). This simple step instantly reduces the pool of patients who need individual RPM assessment, allowing you to focus on the more critical patients. Patients who initially appear GREEN but later develop symptoms should be reassessed — triage is dynamic.</p>

                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Step</th><th>Assessment</th><th>Finding</th><th>Tag</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>0 — Ambulation</td><td>"Everyone who can walk, move to the green area."</td><td>Walking independently</td><td><strong>GREEN</strong></td></tr>
                        <tr><td>1 — Respirations</td><td>Open airway if apneic. Assess rate.</td><td>Apneic after airway opening<br>Respiratory rate > 30</td><td><strong>BLACK</strong><br><strong>RED</strong></td></tr>
                        <tr><td>2 — Perfusion</td><td>Check radial pulse</td><td>No radial pulse</td><td><strong>RED</strong></td></tr>
                        <tr><td>3 — Mental Status</td><td>"Squeeze my hand."</td><td>Unable to follow commands</td><td><strong>RED</strong></td></tr>
                        <tr><td>Passes all RPM</td><td>All three normal</td><td>Resp < 30, radial pulse +, follows commands</td><td><strong>YELLOW</strong></td></tr>
                    </tbody>
                </table></div>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — RPM Tips:</strong> Count respirations for 5-10 seconds. A rate of >30 in an adult is the single most sensitive indicator of shock and life-threatening injury — do not miss this. If you cannot find a radial pulse, check the carotid. If the carotid is absent, the patient is BLACK (apneic) or RED (needs immediate haemorrhage control). Use the sternal rub as a standardised painful stimulus for mental status assessment — it is reproducible and consistent across providers.
                </div>

                <h4>JumpSTART — Paediatric Triage</h4>
                <p>The <strong>JumpSTART</strong> triage system is a modification of START designed for children <strong>under 8 years of age or weighing less than 100 lbs (45 kg)</strong>. Children differ from adults in several important ways: they have faster normal respiratory rates, they are more likely to have respiratory arrest (rather than cardiac arrest) as the primary event, and they have higher physiologic reserve. JumpSTART adds the following modifications:</p>
                <ul>
                    <li><strong>Apnoea with a pulse:</strong> In START, an apneic patient is tagged BLACK. In JumpSTART, give <strong>5 rescue breaths</strong>. If breathing starts, tag <strong>RED</strong> (immediate). If still apneic, tag <strong>BLACK</strong>. Children often have primary respiratory arrest — they can sometimes be revived with ventilation alone.</li>
                    <li><strong>Respiratory rate thresholds:</strong> In START, the threshold is 30 breaths/min. In JumpSTART, the threshold is <strong>15–45 breaths/min</strong> — children normally breathe faster. A rate < 15 or > 45 in a child is indicative of severe distress and triggers a RED tag.</li>
                    <li><strong>Mental status:</strong> Use the <strong>AVPU scale</strong> — if the child is <strong>"V" (responds to Voice) or "P" (responds to Pain) or "U" (unresponsive)</strong> and does not meet RED criteria for respiratory rate or perfusion, tag <strong>RED</strong>. If the child is alert ("A") and interactive, proceed to YELLOW.</li>
                    <li><strong>Palpable pulse:</strong> Same as START — no palpable peripheral pulse → RED.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — JumpSTART Rescue Breathing:</strong> An apneic child with a pulse in an MCI is NOT automatically BLACK. The JumpSTART modification recognises that children in respiratory arrest from trauma can sometimes be revived with 5 rescue breaths. If breathing resumes, tag RED and move on — you just saved a life in 15 seconds. If still apneic after 5 rescue breaths, tag BLACK. This is a CRITICAL difference from adult START.
                </div>

                <h4>SALT Triage</h4>
                <p><strong>SALT triage</strong> (Sort, Assess, Lifesaving interventions, Treatment/Transport) is a newer triage system developed by the CDC in 2008 as a national standard for mass-casualty triage. It incorporates elements of START, JumpSTART, and other systems into a unified framework:</p>
                <ul>
                    <li><strong>Sort:</strong> Direct patients to walk (GREEN). Wave and assess — patients who do not respond need individual assessment.</li>
                    <li><strong>Assess:</strong> Use a modified RPM with the same general thresholds as START.</li>
                    <li><strong>Lifesaving interventions:</strong> In SALT, the triage officer performs <strong>immediate life-saving interventions</strong> during the triage pass (not after, as in START): opening the airway, controlling major haemorrhage with tourniquets, needle decompression of tension pneumothorax, and auto-injector antidotes. These are <strong>only interventions that take < 60 seconds</strong>.</li>
                    <li><strong>Treatment/Transport:</strong> Assign colour category based on the assessment.</li>
                </ul>
                <p>SALT uses the same colour categories as START: RED (immediate), YELLOW (delayed), GREEN (minor), BLACK (deceased/expectant). The NREMT currently focuses on <strong>START triage</strong>, but familiarity with SALT is expected.</p>

                <h4>Triage Tagging Systems</h4>
                <p>Once a triage category is assigned, the patient should be <strong>tagged</strong> with the appropriate colour code so that treatment and transport teams can identify the priority without re-triaging. Common tagging systems include:</p>
                <ul>
                    <li><strong>Paper triage tags:</strong> Physical tags (e.g., SMART tag, METTAG) with tear-off colour strips. The triage officer tears off the top colour to reveal the assigned priority. These tags have space for patient information, vital signs, treatments, and tracking numbers.</li>
                    <li><strong>Triage tape:</strong> Colour-coded ribbon or tape tied around the patient's wrist or ankle. Simpler and faster than tags but less information-rich.</li>
                    <li><strong>Electronic triage tags:</strong> Barcode or RFID-based systems that allow real-time patient tracking and data integration with hospital systems. Increasingly used in large-scale events but still less common than paper.</li>
                    <li><strong>Improvised tags:</strong> In a true MCI with limited equipment, any marking system (lipstick, marker on forehead or tape, labelled body parts) can be used — the key is <strong>clear communication of the triage category</strong>.</li>
                </ul>

                <h4>Incident Command System Structure (Overview)</h4>
                <p>The <strong>Incident Command System (ICS)</strong> is a standardised management framework used for all emergencies, including MCIs. Within ICS, the MCI response is organised under five functional sections:</p>
                <ul>
                    <li><strong>Incident Commander (IC):</strong> The overall person in charge of the response. The first arriving EMS unit should establish command. The IC is responsible for developing the incident action plan and allocating resources.</li>
                    <li><strong>Operations Section:</strong> Manages the tactical response — triage, treatment, transport, and extrication. The Operations Section Chief reports to the IC.</li>
                    <li><strong>Planning Section:</strong> Collects, evaluates, and disseminates information. Tracks resource status and develops the incident action plan.</li>
                    <li><strong>Logistics Section:</strong> Provides facilities, transportation, supplies, equipment, and personnel support (food, shelter, fuel).</li>
                    <li><strong>Finance/Administration Section:</strong> Tracks costs, processes claims, and manages procurement.</li>
                </ul>
                <p>As an EMS provider in an MCI, you will most likely report to the <strong>Medical Branch Director</strong>, <strong>Triage Officer</strong>, <strong>Treatment Unit Leader</strong>, or <strong>Staging Manager</strong> within the Operations Section. Always know who your supervisor is.</p>

                <h4>The Disaster Management Cycle</h4>
                <p>Disasters are managed through a continuous four-phase cycle:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Phase</th><th>Definition</th><th>EMS Examples</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Mitigation</strong></td><td>Actions taken to reduce the severity or impact of a disaster</td><td>Seismic retrofitting of stations; floodplain mapping; public education campaigns; vaccination programs</td></tr>
                        <tr><td><strong>Preparedness</strong></td><td>Planning, training, and equipping for effective response</td><td>MCI drills; stockpiling supplies; mutual aid agreements; NIMS training (ICS 100, 200, 700, 800); tabletop exercises</td></tr>
                        <tr><td><strong>Response</strong></td><td>Immediate actions taken to save lives and property during the disaster</td><td>Activation of the EOC; MCI triage; medical treatment; shelter operations; resource mobilisation</td></tr>
                        <tr><td><strong>Recovery</strong></td><td>Long-term restoration of the community and infrastructure</td><td>Stress debriefing (CISD); equipment replacement; after-action reviews; rebuilding</td></tr>
                    </tbody>
                </table></div>

                <h4>Hospital Surge Capacity & Mutual Aid</h4>
                <p><strong>Surge capacity</strong> is a hospital's ability to expand its resources (beds, staff, equipment) to handle a sudden influx of patients. In an MCI, the EMS system must distribute patients across multiple receiving hospitals to avoid overwhelming any single facility. <strong>Mutual aid agreements</strong> are pre-existing arrangements between neighbouring jurisdictions (cities, counties, states) to share resources — personnel, equipment, ambulances, and hospital beds — during a disaster. These agreements are essential for managing large-scale MCIs.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> In an MCI, <strong>triage is dynamic</strong> — a patient who is YELLOW can become RED if they deteriorate, and a GREEN patient can develop internal injuries and become YELLOW or RED. Continuous reassessment is essential. The first arriving unit's priority is to establish command and request additional resources — NOT to begin treating individual patients. The mantra of MCI management: <strong>"The greatest good for the greatest number."</strong>
                </div>
            </div>`,
            flashcards: [
                { question: "What is the definition of a mass-casualty incident (MCI)?", answer: "Any event where the number of patients exceeds the available resources (personnel, equipment, transport capacity).", category: "MCI Overview" },
                { question: "What does the acronym RPM stand for in START triage?", answer: "Respirations (rate > 30 = RED), Perfusion (no radial pulse = RED), Mental Status (unable to follow commands = RED).", category: "START Triage" },
                { question: "What are the four triage colour codes and their meanings in START triage?", answer: "RED (immediate — < 60 min), YELLOW (delayed — 60 min–2 hrs), GREEN (minor — walking wounded, can wait hours), BLACK (deceased/expectant — comfort care only).", category: "START Triage" },
                { question: "What is the first step in START triage that helps rapidly reduce the patient pool?", answer: "Direct all patients who can walk to a collection area — tag them GREEN. This instantly removes the walking wounded from the RPM assessment.", category: "START Triage" },
                { question: "What is JumpSTART and how does it differ from START?", answer: "JumpSTART is paediatric triage for children < 8 years or < 100 lbs. Key differences: 5 rescue breaths for apneic child with pulse (if breathing resumes, tag RED, not BLACK); respiratory rate thresholds 15-45 (not < 30); uses AVPU for mental status.", category: "JumpSTART" },
                { question: "In START triage, what finding in the Respiration assessment triggers a RED tag?", answer: "Respiratory rate > 30 breaths per minute — this is the single most sensitive indicator of shock and life-threatening injury.", category: "START Triage" },
                { question: "What is the guiding principle of disaster triage?", answer: "'The greatest good for the greatest number' — the allocation of limited resources to achieve the best outcome for the group, rather than maximal care for each individual.", category: "MCI Overview" },
                { question: "What are the four phases of the disaster management cycle?", answer: "Mitigation (reduce impact), Preparedness (plan/train), Response (immediate action), Recovery (long-term restoration).", category: "Disaster Management" }
            ],
            quiz: [
                {
                    q: "The first-arriving EMS unit at an MCI should do which of the following FIRST?",
                    options: [
                        "Begin triaging the nearest patient using RPM",
                        "Establish command, declare an MCI, and request additional resources",
                        "Set up the treatment area",
                        "Load the most critical patient for immediate transport"
                    ],
                    correct: 1,
                    explanation: "The FIRST priority of the first-arriving unit at an MCI is to establish command and request additional resources. The Incident Commander must size up the scene, determine the scope of the incident, activate the MCI plan, and call for needed resources. The IC does NOT begin triaging individual patients — that duty is delegated to triage officers once command is established. This is a fundamental NREMT concept: command first, triage second."
                },
                {
                    q: "During START triage, a 35-year-old male is found lying on the ground. He is not walking. His respiratory rate is 28/min. He has a radial pulse. When you ask him to squeeze your hand, he does not respond. What triage category should he receive?",
                    options: [
                        "GREEN — he is breathing and has a pulse",
                        "YELLOW — he is stable and can wait for delayed treatment",
                        "RED — he has altered mental status (unable to follow commands) which meets a RED criterion",
                        "BLACK — he is unresponsive, so he must be deceased"
                    ],
                    correct: 2,
                    explanation: "Following the RPM algorithm: Respirations (28 — below 30, so proceed), Perfusion (radial pulse present, so proceed), Mental Status (unable to follow commands) → RED. An altered mental status in START triage automatically triggers a RED tag regardless of respiratory rate and perfusion status. The patient may have a head injury, shock, or another cause of altered mentation. An unresponsive patient in an MCI is NOT automatically BLACK — BLACK is reserved for patients who are apneic after airway opening or have injuries incompatible with life."
                },
                {
                    q: "[HARD] During JumpSTART triage, a 6-year-old child is found apneic with a palpable radial pulse. What should the triage officer do?",
                    options: [
                        "Tag the child BLACK — apnoea in any MCI patient is a BLACK tag",
                        "Give 5 rescue breaths. If breathing resumes, tag RED. If still apneic, tag BLACK",
                        "Start chest compressions immediately",
                        "Tag the child RED and move to the next patient"
                    ],
                    correct: 1,
                    explanation: "JumpSTART modifies the approach to apnoea in children. An apneic child with a pulse may have primary respiratory arrest (common in children) that can be reversed with ventilation. Give 5 rescue breaths — if the child starts breathing, tag RED (immediate) and move on. If still apneic, tag BLACK. This is a critical difference from adult START where an apneic patient is tagged BLACK without any attempt at rescue breathing. This reflects the paediatric physiology — children arrest from respiratory causes first, and their hearts may still be beating."
                },
                {
                    q: "At a bus crash MCI, a 45-year-old female is walking around, asking where her daughter is. She has a small laceration on her forearm with minimal bleeding. What is the appropriate triage category and action?",
                    options: [
                        "RED — any patient in an MCI who is asking questions is clearly conscious, but the mechanism warrants a RED designation",
                        "GREEN — she is ambulatory with minor injuries. Direct her to the green collection area. Reassess later if symptoms change",
                        "YELLOW — any patient with a laceration needs treatment within 60 minutes",
                        "BLACK — she is in denial of her injuries and needs psychiatric assessment"
                    ],
                    correct: 1,
                    explanation: "Any patient who can walk is triaged GREEN ('walking wounded') in the first step of START triage. She has a minor injury (small laceration) and is ambulatory. Direct her to the designated green collection area and ask her to wait for treatment. However, triage is DYNAMIC — reassess GREEN patients periodically as some may deteriorate (internal injuries may become apparent over time). A patient who initially appears GREEN but later develops respiratory distress, shock, or altered mental status must be re-triaged to a higher category."
                }
            ],
            critical: [
                {
                    id: "crit_8_8_1",
                    scenario: "You are the first EMS unit to arrive at a multi-vehicle collision on a highway involving a school bus and two passenger vehicles. The scene is chaotic — approximately 30 patients are involved. People are screaming, some are lying on the ground, and others are walking around. Smoke is rising from one of the vehicles. Law enforcement has not yet arrived. Your partner looks at you and asks, 'Where do we start?'",
                    question: "As the first-arriving unit, what is the sequence of actions you should take for this MCI?",
                    options: [
                        {t: "Start with the nearest patient — a woman who is screaming in pain from an obvious leg fracture. She needs immediate attention and splinting. Your partner can begin triage while you treat", f: "Incorrect — The first-arriving unit in an MCI does NOT begin treating individual patients. The first priority is to establish command, declare an MCI, and request additional resources. There are ~30 patients and only one ambulance — you will be quickly overwhelmed if you begin patient care. The Incident Commander must establish scene control before any triage or treatment begins."},
                        {t: "1) Radio dispatch: 'Delta-23 is on scene — we have a mass-casualty incident involving approximately 30 patients. Requesting additional EMS units, fire rescue, law enforcement, and aeromedical if available. Delta-23 establishing command.' 2) Size up the scene: identify hazards (smoke, fuel leak, traffic), determine safe zones. 3) Designate a triage officer (you or your partner) and begin START triage: 'Everyone who can walk, move to the green area over here!' 4) Begin RPM triage on non-ambulatory patients. 5) Set up treatment, transport, and staging areas as additional resources arrive", f: "Correct — This is the standard MCI response sequence for the first-arriving unit. The IC must: establish command, give an initial scene report, request resources, and then begin triage. The walking wounded are directed to a collection area first (immediately reduces the triage burden), followed by RPM assessment of non-ambulatory patients. Treatment and transport are priority zones to set up as resources arrive."}
                    ],
                    correct: 1,
                    explanation: "The first-arriving EMS unit is the Incident Commander until command is transferred. The sequence: (1) Initial radio report: declare MCI, approximate number of patients, resources needed. (2) Scene size-up: identify hazards, establish safe zones. (3) Appoint a triage officer. (4) Direct walking wounded to GREEN area. (5) Perform RPM triage on remaining patients — 30 seconds per patient. (6) As resources arrive, assign roles: treatment officer, transport officer, staging manager. (7) Begin treatment of RED patients first. (8) Coordinate transport distribution to multiple hospitals. Do NOT become absorbed in treating one patient while the scene remains unmanaged.",
                    kpi: "Establishes command and requests resources before beginning individual patient care in an MCI"
                },
                {
                    id: "crit_8_8_2",
                    scenario: "You are the triage officer at a building collapse. You have completed primary triage of 22 patients. Your triage counts are: RED = 5, YELLOW = 8, GREEN = 7, BLACK = 2. An ambulance crew arrives to begin treatment and transport. As you hand over the triage report, you notice that one of the patients you tagged YELLOW (a 50-year-old male with an open tibia fracture, radial pulse present, alert and oriented) now has a respiratory rate of 32 and is becoming confused. He was initially breathing at 24/min, with a radial pulse, and following commands.",
                    question: "What should the triage officer do about this patient, and what does this illustrate about triage?",
                    options: [
                        {t: "The patient was already triaged — leave him as YELLOW since he was stable at the time of primary triage. Changing his tag would cause confusion and set a bad precedent", f: "Incorrect — Triage is DYNAMIC. A patient who deteriorates must be re-triaged to a higher category. This patient now has a respiratory rate > 30 (RED criterion) AND altered mental status (RED criterion). His open tibia fracture may have caused enough blood loss to now be in decompensated shock. Leaving him as YELLOW means he will not receive care in the immediate priority group, which could cost him his life."},
                        {t: "Re-triage this patient from YELLOW to RED immediately — his respiratory rate is now > 30 and he is confused, both RED criteria. Move him to the RED treatment area. This illustrates that triage is a dynamic, ongoing process — patients must be reassessed continuously. The initial triage category is not permanent", f: "Correct — Triage is NOT a one-time event. Patients can deteriorate (or improve) over time. The triage officer should continuously reassess patients, especially those in the YELLOW and GREEN categories who may deteriorate. This patient now meets two RED criteria and needs immediate intervention — likely fluid resuscitation and haemorrhage control for his open tibia fracture."}
                    ],
                    correct: 1,
                    explanation: "Triage categories are dynamic, not static. The triage officer must continuously reassess patients — this is a core NREMT concept. This patient has deteriorated from compensated shock (tachycardia, narrowed pulse pressure) to decompensated shock (tachypnea, altered mental status). His re-triage to RED means he now gets moved to the immediate treatment area for life-saving interventions (haemorrhage control, IV fluids, splinting). Documentation: note the time and reason for re-triage on the patient's tag.",
                    kpi: "Demonstrates that triage is dynamic — reassesses and re-categories patients who deteriorate"
                },
                {
                    id: "crit_8_8_3",
                    scenario: "You are the treatment officer at a multiple shooting scene with 15 victims. Law enforcement has secured the scene. You have 3 RED patients, 5 YELLOW, 5 GREEN, and 2 BLACK. A RED patient has a gunshot wound to the chest with a sucking chest wound, is in respiratory distress, and has a respiratory rate of 36. Another RED patient has a gunshot wound to the right thigh with a tourniquet in place that was applied 20 minutes ago by bystanders — he is awake and alert with a radial pulse. Your third RED patient is a 35-year-old male with an abdominal gunshot wound, HR 130, BP 88/56, who is confused and has a respiratory rate of 32. You have one ambulance that can transport ONE patient at a time. A second ambulance is 10 minutes away. You have only one physician at the treatment area.",
                    question: "Which RED patient should be transported FIRST and why? How should the other RED patients be prioritised?",
                    options: [
                        {t: "Transport the thigh wound patient first — he has a tourniquet that needs to be converted to a pressure dressing at the hospital, and the faster he gets there, the better his limb salvage chances", f: "Incorrect — While tourniquet time is important, the other two RED patients have more immediately life-threatening conditions. The chest wound patient has a tension physiology that could deteriorate into cardiac arrest at any moment. The abdominal GSW patient is already in decompensated haemorrhagic shock. The thigh wound patient, while RED, is relatively stable with a tourniquet in place and can wait for the next transport."},
                        {t: "Transport the chest wound patient FIRST — a sucking chest wound with respiratory distress can deteriorate rapidly (tension pneumothorax, cardiac arrest). Cover with an occlusive dressing (three-sided or commercial), needle decompress if tension develops, and transport. NEXT — the abdominal GSW is in haemorrhagic shock and needs surgery; transport when the second ambulance arrives. THIRD — the thigh GSW with tourniquet is stable enough to wait for the next transport available. This is resource-constrained triage prioritizing by immediacy of threat to life", f: "Correct — In an MCI with limited transport, you must prioritise within the RED category based on who will die fastest without intervention. The chest wound can cause tension pneumothorax and cardiac arrest within minutes. The abdominal GSW in shock is also critical but slightly more stable (awaiting OR). The tourniquet patient is RED (needs < 60 min care) but can wait for the third transport. This is the difficult reality of MCI decision-making."}
                    ],
                    correct: 1,
                    explanation: "When transport resources are limited, you must prioritise within the RED category based on the immediacy of the threat to life. First transport: chest wound (sucking chest wound → tension pneumothorax → cardiac arrest — preventable with intervention but time-critical). Second transport: abdominal GSW in haemorrhagic shock (needs surgery but can be temporised with fluids). Third transport: thigh GSW with tourniquet (RED because he needs treatment < 60 min for limb salvage, but his life is not immediately threatened while the tourniquet is in place). This illustrates the principle of 'greatest good for the greatest number' applied within the immediate category.",
                    kpi: "Prioritises transport order within RED category based on immediacy of life threat during resource-limited MCI"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c8s9 – Incident Command System (ICS)
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c8s9",
            shortTitle: "8.9 Incident Command System (ICS)",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Incident Command System (ICS)</h3>

                <p>The <strong>Incident Command System (ICS)</strong> is a standardised, on-scene, all-hazards incident management framework. It provides a predictable organisational structure that can expand or contract as needed, ensuring effective coordination between multiple agencies and jurisdictions during any emergency — from a single-vehicle collision to a catastrophic natural disaster. As an EMS provider, understanding ICS is essential because <strong>you will operate within this framework during every significant incident</strong>.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> ICS provides a predictable structure in chaos. As an EMS provider, you will report to the <strong>Operations Section Chief</strong> or a designated <strong>Branch Director</strong> during an MCI. Always know who your supervisor is. If you don't know who you report to, you are not effectively integrated into the ICS structure — stop and ask.
                </div>

                <h4>History of ICS</h4>
                <p>ICS was developed in the 1970s after a series of catastrophic wildfires in Southern California (the <strong>FIRESCOPE</strong> project — Firefighting Resources of California Organized for Potential Emergencies). These fires exposed critical problems with multi-agency response: different agencies used different terminology, communication frequencies, and organisational structures; there was no unified command; and resources were mismanaged. ICS was created to solve these problems. In 2004, ICS was incorporated into the <strong>National Incident Management System (NIMS)</strong> as the standard incident management framework for all US federal, state, and local agencies. NIMS compliance is a requirement for receiving federal emergency preparedness funding.</p>

                <h4>ICS Principles — The Foundation</h4>
                <p>ICS is built on a set of core principles that ensure consistency and effectiveness across all incident types:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Principle</th><th>Definition</th><th>Why It Matters</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Span of Control</strong></td><td>A supervisor should manage <strong>3–7 subordinates</strong> (optimal ratio is 1:5). When the ratio exceeds 1:7, the supervisor must create subordinate sections, branches, or divisions</td><td>Prevents any single person from being overwhelmed; ensures effective supervision and communication</td></tr>
                        <tr><td><strong>Unity of Command</strong></td><td>Each individual reports to <strong>ONE and only one designated supervisor</strong></td><td>Prevents conflicting orders and confusion; establishes clear accountability</td></tr>
                        <tr><td><strong>Common Terminology</strong></td><td>All agencies use the same terminology for positions, resources, and facilities</td><td>Eliminates ambiguity when multiple agencies work together (e.g., "Medical Branch" means the same thing to fire, EMS, and law enforcement)</td></tr>
                        <tr><td><strong>Modular Organisation</strong></td><td>The ICS structure is <strong>scalable</strong> — it can expand or contract based on the size and complexity of the incident</td><td>A small incident may only need an Incident Commander; a complex incident may need all five sections with multiple branches</td></tr>
                        <tr><td><strong>Incident Action Plan (IAP)</strong></td><td>Every incident operates under a written or verbal plan that specifies objectives, strategies, resources, and safety measures for each operational period</td><td>Provides clear direction and measurable objectives; aligns all responders toward common goals</td></tr>
                        <tr><td><strong>Comprehensive Resource Management</strong></td><td>All resources (personnel, equipment, supplies) are tracked using standardised classification, ordering, and status systems</td><td>Prevents resource duplication or shortage; ensures the right resources arrive at the right place</td></tr>
                        <tr><td><strong>Management by Objectives</strong></td><td>The IC defines specific, measurable objectives for each operational period (typically 12–24 hours)</td><td>Keeps the response focused and outcome-oriented; allows for assessment of progress</td></tr>
                        <tr><td><strong>Chain of Command</strong></td><td>Clear, unbroken line of authority from the IC down to every responder</td><td>Ensures orders flow through proper channels; prevents bypassing of supervisors</td></tr>
                    </tbody>
                </table></div>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Span of Control:</strong> The 1:5 span of control ratio is a crucial ICS concept. If a supervisor has more than 7 people reporting to them, the ICS structure must be expanded (add branches, divisions, or groups). Effective span of control is maintained by <strong>delegation</strong> — the IC should NOT directly manage more than 3–7 people. If the IC finds themselves overwhelmed, they must delegate subordinate positions.
                </div>

                <h4>ICS Command Staff</h4>
                <p>The Command Staff reports directly to the Incident Commander and provides specialised support in key functional areas:</p>
                <div class="table-scroll"><table>
                    <thead>
                        <tr><th>Position</th><th>Abbreviation</th><th>Responsibilities</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Incident Commander</strong></td><td>IC</td><td>Overall responsibility for the incident. Sets objectives, establishes priorities, approves the IAP, and manages resources. The IC is the single person in charge — there is only ONE IC at any time.</td></tr>
                        <tr><td><strong>Safety Officer</strong></td><td>SOFR</td><td>Monitors all incident operations for safety hazards. Has the <strong>authority to STOP any operation that presents an imminent life-threatening hazard</strong> ("stop-work authority"). Reports directly to the IC and is INDEPENDENT of the Operations chain of command (ensuring objectivity in safety assessments).</td></tr>
                        <tr><td><strong>Public Information Officer</strong></td><td>PIO</td><td>Develops and releases accurate, coordinated information about the incident to the media and the public. All media releases are coordinated through the PIO — individual responders do NOT speak to the media without authorisation.</td></tr>
                        <tr><td><strong>Liaison Officer</strong></td><td>LOFR</td><td>Primary point of contact for assisting and coordinating agencies (e.g., Red Cross, Public Health, National Guard) not directly part of the incident command structure.</td></tr>
                    </tbody>
                </table></div>

                <h4>ICS General Staff — The Five Sections</h4>
                <p>When the incident becomes complex enough that the IC cannot manage all functions directly, the four General Staff Sections are activated. Each section has a <strong>Chief</strong> who reports to the IC:</p>

                <h5>Operations Section</h5>
                <p>The <strong>Operations Section</strong> is the 'doers' — it manages the tactical response directly related to the incident objectives. This is the section where most EMS providers will be assigned during an MCI. The Operations Section Chief (OSC) oversees:</p>
                <ul>
                    <li><strong>Medical Branch</strong> — further divided into:
                        <ul>
                            <li><strong>Triage Unit:</strong> Performs primary and secondary triage of patients</li>
                            <li><strong>Treatment Unit:</strong> Provides medical treatment to triaged patients</li>
                            <li><strong>Transport Unit:</strong> Coordinates ambulance transport and patient distribution to hospitals</li>
                            <li><strong>Morgue Unit:</strong> Handles deceased patients (in coordination with the coroner)</li>
                        </ul>
                    </li>
                    <li><strong>Staging Areas:</strong> Locations where resources (ambulances, supplies, personnel) are held in reserve, ready for deployment. Resources in staging are in a 'stand-by' status — they are immediately available.</li>
                    <li><strong>Extrication/Rescue:</strong> Fire/rescue personnel who extract patients from entrapment.</li>
                </ul>

                <p>As an EMS provider, your most likely assignment in an MCI is within the <strong>Treatment Unit</strong> (providing care to triaged patients) or the <strong>Transport Unit</strong> (driving ambulances to hospitals). You may also be assigned to <strong>Staging</strong> — waiting for assignment. Always report to the person in charge of your assigned unit or group.</p>

                <h5>Planning Section</h5>
                <p>The <strong>Planning Section</strong> collects, evaluates, and disseminates information about the incident. It develops the <strong>Incident Action Plan (IAP)</strong> for each operational period. Key positions include:</p>
                <ul>
                    <li><strong>Resources Unit:</strong> Tracks the status of all personnel and equipment (assigned, available, out of service)</li>
                    <li><strong>Situation Unit:</strong> Collects and analyses incident data (weather, patient counts, hazard status)</li>
                    <li><strong>Documentation Unit:</strong> Maintains all incident documentation (logs, reports, IAPs)</li>
                    <li><strong>Demobilisation Unit:</strong> Develops the plan for orderly release of resources when they are no longer needed</li>
                </ul>

                <h5>Logistics Section</h5>
                <p>The <strong>Logistics Section</strong> provides the resources and support needed by the Operations Section to achieve the incident objectives. Logistics 'feeds and fuels' the response:</p>
                <ul>
                    <li><strong>Supply Unit:</strong> Orders, receives, and distributes supplies (medical equipment, food, water, fuel)</li>
                    <li><strong>Facilities Unit:</strong> Sets up and maintains incident facilities (command post, base camp, medical treatment areas)</li>
                    <li><strong>Ground Support Unit:</strong> Maintains vehicles and equipment; provides transportation for personnel</li>
                    <li><strong>Communications Unit:</strong> Establishes and maintains reliable communications across all incident personnel</li>
                    <li><strong>Medical Unit:</strong> Provides medical care for incident personnel (NOT for patients — that is Operations)</li>
                    <li><strong>Food Unit:</strong> Provides food and hydration for all incident personnel</li>
                </ul>

                <h5>Finance/Administration Section</h5>
                <p>The <strong>Finance/Admin Section</strong> tracks all incident costs, processes claims, and manages procurement. This section is essential for cost recovery, especially in large disasters where resources are mobilised from multiple jurisdictions. Key positions include:</p>
                <ul>
                    <li><strong>Time Unit:</strong> Tracks personnel time for payroll and reimbursement</li>
                    <li><strong>Procurement Unit:</strong> Manages contracts and purchases of supplies/equipment</li>
                    <li><strong>Compensation/Claims Unit:</strong> Processes injury claims and property damage claims</li>
                    <li><strong>Cost Unit:</strong> Tracks and projects incident costs</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — ICS Structure:</strong> Memorise the five sections: <strong>Operations</strong> (the doers), <strong>Planning</strong> (the thinkers), <strong>Logistics</strong> (the getters — supplies, food, fuel), <strong>Finance/Admin</strong> (the payers), and <strong>Command Staff</strong> (IC, Safety, PIO, Liaison). The mnemonic <strong>"O-P-L-F"</strong> in descending order of priority — Operations is ALWAYS the largest section in a response. As an EMS provider, you will almost always work under Operations.
                </div>

                <h4>Common Terms — EMS Branch</h4>
                <p>Within the Operations Section, the <strong>EMS Branch</strong> manages all medical aspects of the incident. The EMS Branch Director reports to the Operations Section Chief and oversees:</p>
                <ul>
                    <li><strong>Medical Supply Coordinator:</strong> Ensures resupply of medications, bandages, and equipment to treatment areas</li>
                    <li><strong>Triage Unit Leader:</strong> Oversees triage operations — ensures all patients are triaged and tagged</li>
                    <li><strong>Treatment Unit Leader:</strong> Manages the treatment areas (RED, YELLOW, GREEN zones) and supervises treatment personnel</li>
                    <li><strong>Transport Unit Leader:</strong> Coordinates ambulance transport, patient tracking, and hospital destination decisions; maintains communication with receiving hospitals for diversion status</li>
                    <li><strong>Morgue Unit Leader:</strong> Manages the deceased, in coordination with the coroner/medical examiner</li>
                </ul>

                <h4>Command Transfer Process</h4>
                <p>The initial Incident Commander is typically the first arriving unit officer (e.g., the EMS provider or paramedic in the first ambulance, the captain of the first fire engine). As higher-ranking or more qualified personnel arrive, command is <strong>transferred</strong> through a formal process:</p>
                <ol>
                    <li>The current IC briefs the incoming IC on the incident status: what has been done, current objectives, resource status, and safety concerns</li>
                    <li>The incoming IC acknowledges the transfer — the transfer is announced to all personnel on the assigned tactical channel</li>
                    <li>The former IC may be reassigned to a subordinate role (e.g., Operations Section Chief, Staging Manager, or released from the incident)</li>
                </ol>
                <p><strong>Key point:</strong> Command transfer must be CLEARLY announced to all personnel. Everyone must know who the IC is at all times. The IC's name and location should be included in every radio report.</p>

                <h4>Area Command vs. Unified Command</h4>
                <p>Two advanced ICS concepts that EMS providers should understand:</p>
                <ul>
                    <li><strong>Area Command:</strong> Used when there are multiple large incidents in a geographic area (e.g., multiple wildfires across a region) that each have their own IC. Area Command provides overall coordination but does NOT directly manage individual incidents — each incident retains its own IC.</li>
                    <li><strong>Unified Command:</strong> Used when an incident involves multiple jurisdictions or agencies with legal or functional responsibilities (e.g., a hazardous material spill that crosses a state line, a terrorist attack involving local, state, and federal agencies). In Unified Command, representative officials from each jurisdiction share command authority and jointly develop a single Incident Action Plan. There is still ONE plan — but multiple agencies contribute to it collaboratively.</li>
                </ul>

                <h4>Hospital Command Center (HEICS)</h4>
                <p>The <strong>Hospital Emergency Incident Command System (HEICS)</strong> adapts ICS principles to the hospital environment. In an MCI, the hospital's command structure mirrors the field ICS, with positions such as:</p>
                <ul>
                    <li><strong>Hospital Incident Commander (HIC):</strong> Overall hospital response leader</li>
                    <li><strong>Operations Chief (Clinical):</strong> Manages emergency department, triage, treatment, and bed management</li>
                    <li><strong>Logistics Chief:</strong> Manages staff, supplies, and facility expansion (surge capacity)</li>
                    <li><strong>Public Information Officer:</strong> Manages media inquiries and family reunification</li>
                    <li><strong>Medical Staff Director:</strong> Coordinates physician and nursing assignments</li>
                    <li><strong>EMS Liaison:</strong> Point of contact between the hospital and the EMS transport units arriving from the field</li>
                </ul>
                <p>As an EMS provider transporting a patient to a hospital during an MCI, you should report to the <strong>EMS Liaison</strong> or the <strong>Hospital Incident Commander</strong> for patient offloading instructions. Do NOT simply go to the ED — the ED may be overwhelmed and there may be a designated patient receiving area.</p>

                <h4>Resource Tracking — T-Card System</h4>
                <p>The <strong>T-card system</strong> is a visual resource-tracking tool used in the Planning Section to track the status of all resources assigned to the incident. Resources are listed on colour-coded cards (T-cards) arranged on a magnetic or Velcro board. The status categories are:</p>
                <ul>
                    <li><strong>Available (green):</strong> Resource is ready for assignment</li>
                    <li><strong>Assigned (red):</strong> Resource is currently deployed and working</li>
                    <li><strong>Out of Service (yellow):</strong> Resource is unavailable (maintenance, rest, personnel fatigue)</li>
                </ul>
                <p>As an EMS provider, you will 'check in' at the incident, and your resource status will be tracked. When you complete your assignment, you 'check out' through the Demobilisation Unit.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> ICS provides a <strong>predictable structure in chaos</strong>. As an EMS provider during an MCI, you will always know:
                    <ul>
                        <li><strong>Who you report to</strong> (your direct supervisor within ICS)</li>
                        <li><strong>What your role is</strong> (based on your assignment within Operations, Logistics, etc.)</li>
                        <li><strong>Who to communicate with</strong> (follow the chain of command — do not radio the IC directly unless it is an emergency)</li>
                    </ul>
                    Memorise the five sections (Operations, Planning, Logistics, Finance/Admin) and the Command Staff. Know that Operations does the work, Plans the thinking, Logistics the supplies, and Finance the money.
                </div>

                <h4>Demobilisation & After-Action Reviews</h4>
                <p><strong>Demobilisation</strong> is the orderly, safe, and efficient release of resources from the incident. The Demobilisation Unit develops a demobilisation plan that specifies: which resources are released first, travel routes, rest requirements, and equipment return procedures. No resource leaves the incident without proper demobilisation authorisation.</p>
                <p><strong>After-action reviews (AARs)</strong> are structured debriefings conducted after the incident to identify what worked, what did not, and what should be improved for future responses. AARs are <strong>not punitive</strong> — they are learning opportunities. All responders, including EMS providers, are encouraged to provide honest feedback. AARs are essential for continuous quality improvement in disaster response.</p>
            </div>`,
            flashcards: [
                { question: "What is the Incident Command System (ICS)?", answer: "A standardised, on-scene, all-hazards incident management framework that provides a predictable organisational structure for emergencies of any size.", category: "ICS Overview" },
                { question: "What is the optimal span of control in ICS?", answer: "3–7 subordinates per supervisor (optimal 1:5). If a supervisor has more than 7 direct reports, the ICS structure must be expanded with additional branches or divisions.", category: "ICS Principles" },
                { question: "Who are the four Command Staff positions that report directly to the Incident Commander?", answer: "Safety Officer (SOFR — has stop-work authority), Public Information Officer (PIO — manages media), Liaison Officer (LOFR — coordinates with assisting agencies).", category: "ICS Command Staff" },
                { question: "What are the five General Staff Sections of ICS?", answer: "Operations (the doers), Planning (the thinkers — develops the IAP), Logistics (the getters — supplies, food, fuel), Finance/Admin (the payers — cost tracking, procurement). Mnemonic: O-P-L-F.", category: "ICS General Staff" },
                { question: "As an EMS provider in an MCI, which ICS Section will you most likely be assigned to?", answer: "Operations Section — specifically the Medical Branch (Triage, Treatment, Transport, or Morgue Units) within the Operations Section.", category: "ICS in Practice" },
                { question: "What is the difference between Area Command and Unified Command?", answer: "Area Command oversees multiple separate incidents in a region (each with its own IC). Unified Command involves multiple agencies/jurisdictions sharing command authority over a SINGLE incident with one joint IAP.", category: "ICS Advanced" },
                { question: "What is the Safety Officer's unique authority within ICS?", answer: "The Safety Officer has STOP-WORK AUTHORITY — they can halt any operation that presents an imminent life-threatening hazard, independent of the Operations chain of command.", category: "ICS Command Staff" },
                { question: "What is the purpose of the Demobilisation Unit?", answer: "Develops a plan for the orderly, safe, and efficient release of resources from the incident. No resource leaves without proper demobilisation authorisation.", category: "ICS Demobilisation" }
            ],
            quiz: [
                {
                    q: "The first-arriving engine company officer establishes command at a building collapse. Approximately 30 minutes later, a battalion chief with more ICS training and experience arrives. What should happen next?",
                    options: [
                        "The battalion chief takes command immediately — higher rank automatically transfers command",
                        "The current IC briefs the battalion chief on incident status, objectives, and resources. Command is formally transferred with a clear announcement over the tactical channel to all personnel",
                        "The battalion chief should create a separate command post — two ICs are better than one",
                        "The original IC remains in command — command transfers only happen at the end of an operational period"
                    ],
                    correct: 1,
                    explanation: "Command transfer is a FORMAL process: (1) The current IC briefs the incoming IC (situation, actions taken, objectives, resource status, safety issues). (2) The incoming IC accepts command. (3) The transfer is announced to ALL personnel on the tactical radio channel: 'Attention all units, command of this incident has been transferred from Engine 23 IC to Battalion Chief Smith. Battalion Chief Smith is now IC.' (4) The former IC is reassigned (e.g., to Operations Section Chief, Staging, or released). Command is NOT automatically transferred by rank — it is transferred through a deliberate process."
                },
                {
                    q: "During an MCI, which ICS position is responsible for tracking the status of all ambulances and coordinating which hospitals receive patients?",
                    options: [
                        "Logistics Section Chief",
                        "Transport Unit Leader (within the Operations Section Medical Branch)",
                        "Planning Section Chief",
                        "Incident Commander"
                    ],
                    correct: 1,
                    explanation: "The Transport Unit Leader, within the Medical Branch of the Operations Section, is specifically responsible for: coordinating ambulance transport, tracking patient destinations, communicating with receiving hospitals (diversion status, capacity), and ensuring patients are distributed appropriately (not overloading any single facility). This is a critical role in any MCI — poor transport coordination leads to one hospital being overwhelmed while others have capacity."
                },
                {
                    q: "[HARD] A multi-jurisdictional hazardous material spill occurs at the border between two counties. The spill threatens a residential area in County A and a water supply in County B. Both counties have HAZMAT teams, and the state environmental agency is responding. What command structure is most appropriate?",
                    options: [
                        "County A takes command since the spill originated in their jurisdiction",
                        "Both counties and the state agency establish a Unified Command — each has legal authority and responsibility, so they share command and jointly develop a single Incident Action Plan",
                        "The state agency takes command since environmental issues are a state matter — local agencies may assist",
                        "Area Command should be established to manage the two separate responses"
                    ],
                    correct: 1,
                    explanation: "A Unified Command is appropriate when an incident involves multiple jurisdictions or agencies with legal or functional authority. In this case: County A (residential threat), County B (water supply threat), and the state environmental agency all have legitimate authority and responsibility. Unified Command allows all three to share command authority, develop one Incident Action Plan collaboratively, and speak with one voice. This prevents the 'tower of Babel' problem where multiple agencies issue conflicting directives. The key is ONE plan developed jointly, not multiple separate plans."
                },
                {
                    q: "An EMS provider is assigned to the Staging Area during an MCI. What is the status of resources in staging and what should the EMS provider do while waiting?",
                    options: [
                        "Resources in staging are 'out of service' — the EMS provider should rest and sleep while waiting for assignment",
                        "Resources in staging are 'available' and ready for immediate deployment. The EMS provider should remain with their vehicle, maintain radio contact, and await assignment from the Staging Manager or Operations Section",
                        "Resources in staging are 'assigned' — the EMS provider should proceed to the treatment area and begin working",
                        "Resources in staging are demobilising — the EMS provider should leave the scene"
                    ],
                    correct: 1,
                    explanation: "Staging is where resources (ambulances, personnel, equipment) are held in a state of readiness (AVAILABLE status), awaiting assignment. Resources in staging are not yet assigned to a specific task. The EMS provider should: (1) Report to the Staging Manager, (2) Stay with their vehicle/equipment, (3) Maintain readiness — ensure equipment is ready, vehicle is fuelled, (4) Monitor the radio for assignment, (5) When called, proceed to the assigned location and function. Staging ensures that resources are pre-positioned and can be deployed rapidly when needed, rather than having them arrive randomly and create congestion."
                }
            ],
            critical: [
                {
                    id: "crit_8_9_1",
                    scenario: "You are an EMS provider assigned to the Treatment Unit in an MCI following a tornado that has damaged a large residential area. The treatment area is set up in a triage tent in a nearby school parking lot. You are working in the RED treatment zone, providing care to 5 critical patients. A volunteer firefighter who is not part of your chain of command approaches you and tells you to 'move all the RED patients to the other side of the parking lot because the Incident Commander wants the tent for logistics.' Neither you nor the Treatment Unit Leader have received any such order through the chain of command. You look around and see no Logistics personnel setting up in the tent.",
                    question: "How should the EMS provider respond to this request, and what does this illustrate about ICS principles?",
                    options: [
                        {t: "Comply with the volunteer firefighter's request — he is a first responder and may have direct communication with the IC. Moving the patients will only take a few minutes, and it is better to cooperate than cause conflict", f: "Incorrect — This violates multiple ICS principles. The volunteer is not in the EMS provider's chain of command (violation of Unity of Command). The order has not been communicated through the proper ICS channels (Treatment Unit Leader → Medical Branch Director → Operations Section Chief). Moving critical patients without a proper order and clinical assessment could harm them. The EMS provider should FOLLOW THE CHAIN OF COMMAND."},
                        {t: "Do NOT comply with the unofficial order. Follow the chain of command: ask the volunteer which IC gave that order (to determine if it is legitimate), then confirm the order through your direct supervisor (Treatment Unit Leader). If the Treatment Unit Leader confirms the order, coordinate an orderly, safe movement of patients with clinical priority given to the most critical. This illustrates the ICS principles of Unity of Command (one supervisor) and Chain of Command (orders flow through proper channels)", f: "Correct — This scenario illustrates WHY Unity of Command and Chain of Command are essential ICS principles. An EMS provider must have ONE designated supervisor and receive orders only through the proper chain. Accepting orders from someone outside your chain creates chaos, conflicting priorities, and potential patient harm. The proper response is to politely decline and confirm through the established chain of command."}
                    ],
                    correct: 1,
                    explanation: "This scenario demonstrates the importance of Unity of Command and Chain of Command in ICS. Key points: (1) The EMS provider's direct supervisor is the Treatment Unit Leader — no one else should be giving orders for treatment area operations. (2) Even a legitimate IC order would flow through the chain: IC → Operations Chief → Medical Branch Director → Treatment Unit Leader. (3) If the Treatment Unit Leader confirms the order, the move should be planned carefully — RED patients are critical and movement must be clinically coordinated. (4) If the order is not confirmed, the EMS provider should continue their assigned duties. Don't let anyone pressure you into bypassing the chain of command.",
                    kpi: "Demonstrates adherence to Unity of Command and Chain of Command in ICS"
                },
                {
                    id: "crit_8_9_2",
                    scenario: "You are the Staging Manager at a large MCI involving a factory explosion. You have 8 ambulances in Staging, all in AVAILABLE status — their crews are standing by, ready for assignment. The Operations Section Chief calls you on the radio: 'Staging, we need 4 ambulances to the RED treatment area for transport now.' You dispatch 4 ambulances. Five minutes later, the Medical Branch Director calls: 'Staging, send 3 more ambulances to the YELLOW treatment area.' You dispatch 3. Two minutes later, the Transport Unit Leader calls: 'Staging, I need 2 of those ambulances you sent to RED reassigned to me — I'm holding them at the transport loading point.' You now have 0 ambulances in Staging. Three RED patients are still waiting for transport. A fire captain walks up to your staging area and says, 'I need 4 ambulances right now — my crew has found 12 more victims in the collapsed section.'",
                    question: "What is the EMS provider Staging Manager's appropriate response, and what ICS problem does this reveal?",
                    options: [
                        {t: "Tell the fire captain you have no ambulances available. This reveals that Staging has insufficient resources for the incident — the IC should have requested more ambulances. It is not the Staging Manager's problem to solve", f: "Incorrect — While it is true that more resources are needed (Operations should request more through Logistics), the Staging Manager should not simply refuse. The Staging Manager should communicate the resource shortage through proper channels: notify the Operations Section Chief that Staging is depleted and that additional resources are urgently needed. The fire captain's request must be processed through the chain of command — the fire captain reports to the Operations Section Chief, who would then task Staging with assigned resources."},
                        {t: "Inform the fire captain that staging is depleted. Immediately notify the Operations Section Chief: 'Operations, Staging — zero ambulances available. We have an additional 12 patients needing transport. Requesting 4+ additional ambulances immediately.' Also note the potential ICS communication issue — the Transport Unit Leader should not be contradicting the Operations Chief's assignments; this should be resolved at the Operations or Medical Branch level. This reveals a Resource Management and Coordination problem within Operations", f: "Correct — The Staging Manager's role is to track available resources and deploy them when ordered. When Staging is depleted, the Staging Manager must immediately notify Operations so more resources can be ordered. Additionally, the Transport Unit Leader reassigning ambulances already sent by Operations Chief's order reveals a coordination gap — this should be resolved by the Medical Branch Director or Operations Chief, not by the Staging Manager. The Staging Manager's job is to report, not to solve resource conflicts."}
                    ],
                    correct: 1,
                    explanation: "This scenario reveals several ICS principles in action: (1) Staging Manager tracks resource status and deployment. (2) When staging is depleted, the Staging Manager must notify Operations immediately so more resources can be ordered through Logistics. (3) The Transport Unit Leader reassigning ambulances without coordinating through the chain creates a conflict — the Medical Branch Director should resolve this. (4) The fire captain's request must go through the chain of command (Operations Section Chief), not directly to Staging. The Staging Manager should never refuse a request that hasn't gone through proper channels — but the request should come through the proper ICS structure.",
                    kpi: "Properly communicates resource shortages through ICS chain of command"
                },
                {
                    id: "crit_8_9_3",
                    scenario: "You are an EMS provider assigned to the Treatment Unit in an MCI after a large apartment fire. The Incident Commander has established a Unified Command with the Fire Department, Police Department, and Red Cross. The Operations Section Chief has assigned you to work in the YELLOW (delayed) treatment area under the Treatment Unit Leader. Approximately 45 minutes into the incident, a person who identifies themselves as a 'deputy chief from the city' approaches you and tries to give you orders to 'prioritize transporting the elderly residents first because the mayor is concerned about vulnerable populations.' The person does not appear to be part of the incident command structure — they are not wearing an ICS vest, and they do not have a radio. The Treatment Unit Leader is occupied with a critically ill patient nearby.",
                    question: "How should the EMS provider handle this situation, and what ICS principle does it illustrate?",
                    options: [
                        {t: "Follow the deputy chief's orders — he is a high-ranking city official and clearly has authority. The mayor's concern is valid, and prioritizing elderly patients is ethically appropriate", f: "Incorrect — This person is NOT part of the ICS structure (no vest, no radio, not in the chain of command). In ICS, authority comes from your position within the structure, not from your rank or title outside the incident. A person who is not integrated into the ICS has NO authority to give tactical orders. Additionally, implementing a 'prioritise elderly' order contradicts the triage system (which prioritises by medical acuity, not by age or social status). Taking orders from an unauthorised person violates Unity of Command."},
                        {t: "Politely but firmly decline the order: 'Sir, I am not able to take orders from outside the ICS chain of command. My direct supervisor is the Treatment Unit Leader. If you have operational concerns, please direct them to the Incident Commander through the Liaison Officer or the Public Information Officer — they are part of the Unified Command structure and can address the mayor's concerns without compromising our triage and treatment operations.' This illustrates the ICS principle that during an incident, ALL authority flows through the ICS structure — external officials (even high-ranking ones) must work through the Liaison Officer or Unified Command rather than issuing direct orders to field personnel", f: "Correct — This is a classic ICS scenario. During a declared incident, the ICS structure is the ONLY legitimate command and control framework. External officials (deputy chiefs, politicians, VIPs) must route their concerns through the Liaison Officer (who is the Command Staff position designed specifically for external coordination) or through their designated representative in a Unified Command structure. They CANNOT give orders directly to field personnel. Politely redirecting them to the Liaison Officer or Unified Command respects their position while maintaining ICS integrity."}
                    ],
                    correct: 1,
                    explanation: "This scenario illustrates several critical ICS concepts: (1) Unity of Command — each person has ONE supervisor; taking orders from unauthorized personnel violates this. (2) Chain of Command — external officials must work through the Liaison Officer or Unified Command structure. (3) ICS Authority — authority comes from your ICS role, not from your title outside the incident. (4) The Liaison Officer is the Command Staff position specifically responsible for coordinating with external agencies and officials. Politely but firmly redirecting the deputy chief to the proper channel maintains both professionalism and operational integrity. The Safety Officer should be notified if the external official persists or interferes with operations.",
                    kpi: "Correctly refuses orders from outside the ICS chain of command and knows the role of the Liaison Officer for external coordination"
                }
            ]
        }
    ]
};
