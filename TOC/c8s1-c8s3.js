/* ========== Chapter 8 – Environmental & Disaster (Sections 1-3) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [

/* ──────────────────────────────────────────────────────────────────────────────
 * c8s1 – Heat-Related Illness
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c8s1",
    shortTitle: "8.1 Heat-Related Illness",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#cloud-lightning"/></svg> Heat-Related Illness</h3>

        <p>Heat-related illnesses occur along a continuum — from minor heat cramps to life-threatening heat stroke. Understanding thermoregulation and recognizing when a patient has moved along this spectrum is critical for the EMT. <strong>Environmental hyperthermia is fundamentally different from fever:</strong> fever is a hypothalamic set-point elevation mediated by pyrogens, while hyperthermia is uncontrolled heat gain exceeding the body's ability to dissipate heat. <strong>Antipyretics do NOT work for environmental hyperthermia.</strong></p>

        <h4>Thermoregulation Mechanisms</h4>
        <p>The human body maintains core temperature within a narrow range (36.5–37.5°C / 97.7–99.5°F) through a balance of heat production and heat loss. The hypothalamus acts as the body's thermostat. Heat is lost through four primary mechanisms:</p>
        <table>
            <thead>
                <tr><th>Mechanism</th><th>Definition</th><th>Example</th><th>Efficiency</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Conduction</strong></td><td>Direct transfer of heat from the body to a cooler object through physical contact</td><td>Sitting on a cold rock; immersion in cold water</td><td>Minor under normal conditions; significant in cold water immersion</td></tr>
                <tr><td><strong>Convection</strong></td><td>Heat transfer to moving air or water molecules that pass over the body</td><td>Wind blowing across bare skin; a fan; swimming in cool water</td><td>Variable — depends on temperature gradient and air/water movement (wind chill factor)</td></tr>
                <tr><td><strong>Radiation</strong></td><td>Emission of infrared electromagnetic energy from the body to cooler objects in the environment (without physical contact)</td><td>Body heat radiating to a cold room; standing near a cold wall</td><td>Accounts for ~60% of heat loss at rest in a cool environment; the dominant mechanism at normal room temperature</td></tr>
                <tr><td><strong>Evaporation</strong></td><td>Heat loss through the conversion of sweat (liquid) to water vapor (gas) on the skin surface</td><td>Sweating; misting the skin with water followed by fanning</td><td>The <strong>primary cooling mechanism during exercise and in hot environments</strong>. Becomes ineffective at high humidity (>75%) because air is already saturated with water vapor</td></tr>
            </tbody>
        </table>
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
        <table>
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
        </table>

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
        <p>While NOT classic environmental emergencies, these two conditions cause severe hyperthermia that an EMT may encounter:</p>
        <ul>
            <li><strong>Malignant hyperthermia (MH):</strong> A life-threatening genetic disorder triggered by depolarizing neuromuscular blocking agents (succinylcholine) and volatile anaesthetics (halothane, sevoflurane, desflurane, isoflurane). Presents with: masseter muscle rigidity, generalized rigidity, hyperthermia (rapid rise), tachycardia, hypercapnia (rising end-tidal CO₂), metabolic acidosis, and rhabdomyolysis. <strong>Treatment:</strong> Dantrolene (the specific antidote), aggressive cooling, and supportive care. <strong>Key for EMTs:</strong> ABCs, aggressive cooling, and rapid transport. Obtain a history of anaesthetic complications in the family.</li>
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
            question: "Why should an EMT not give antipyretics for heat stroke?",
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
        <table>
            <thead>
                <tr><th>Stage</th><th>Core Temp</th><th>Clinical Findings</th><th>Key Features</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Mild</strong></td><td>90–95°F (32–35°C)</td><td>Shivering (vigorous — a key compensatory mechanism), apathy, lethargy, social withdrawal, impaired fine motor coordination, cold diuresis (vasoconstriction increases central blood volume → increased urine output → volume depletion), tachypnoea, tachycardia. The patient is still generating heat through shivering and may present with slurred speech and mild ataxia (the 'cold drunk' appearance — often mistaken for intoxication).</td><td>Patient is shivering — this is a GOOD sign (intact thermoregulation). Shivering can increase heat production by 2–5× baseline.</td></tr>
                <tr><td><strong>Moderate</strong></td><td>82–90°F (28–32°C)</td><td><strong>Shivering stops</strong> — this is a critical transition point; the body can no longer generate heat through muscle activity. Progressive decline in mental status (confusion, disorientation, paradoxical undressing — the patient feels warm and removes clothing, worsening exposure). Bradycardia, bradypnoea, dilated pupils, hyporeflexia, and loss of motor function. Atrial fibrillation (AFib) is common — do not treat the AFib, treat the hypothermia. The patient may appear obtunded or stuporous.</td><td>Shivering stops = the body has exhausted its primary heat-generating mechanism. The patient can no longer compensate. This marks the transition to severe physiologic compromise.</td></tr>
                <tr><td><strong>Severe</strong></td><td>&lt;82°F (&lt;28°C)</td><td><strong>Coma, areflexia, pulseless, apneic.</strong> The classic signs of life may be absent. The patient appears dead (fixed and dilated pupils, no reflexes, no palpable pulse, no audible heart tones). Ventricular fibrillation (V-fib) is highly prone — the cold myocardium is irritable. All enzyme systems slow dramatically, decreasing oxygen demand. <strong>Prolonged CPR is warranted</strong> — successful resuscitations with good neurologic outcomes have been reported after >60 minutes of CPR with ECMO rewarming.</td><td>The patient may appear dead — ASSUME THEY ARE ALIVE. "You're not dead until you're warm and dead." Assess pulse for 30–45 seconds before starting CPR. Handle GENTLY — rough movement can precipitate V-fib.</td></tr>
            </tbody>
        </table>

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

        <h4>EMT Assessment Pearls for Cold Exposure</h4>
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
            q: "A 45-year-old homeless male is found in an alley on a 28°F night. He is unresponsive with no visible shivering. His skin is cold and his pupils are fixed and dilated. You palpate his carotid artery for 30 seconds and feel a weak, slow pulse at approximately 12 beats per minute. His respirations are shallow at 4–6 breaths per minute. What should the EMT do FIRST?",
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
            q: "A ski patrol brings you a 32-year-old male found unresponsive on the mountain. He is not wearing a jacket. Core temperature is 78°F (25.6°C). He has no pulse and is apnoeic. You begin CPR and attempt defibrillation for V-fib — no response after 2 shocks. The estimated transport time to the hospital is 45 minutes. What should the EMT do regarding further defibrillation attempts?",
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
        <p>The drowning process follows a predictable sequence that, if uninterrupted, leads to cardiac arrest. Understanding this sequence helps the EMT understand the priority of interventions:</p>

        <ol>
            <li><strong>Panic and breath-holding:</strong> The victim submerges and instinctively holds their breath. During this phase, the patient may struggle at the surface, gasping and swallowing water. Breath-holding can last 30–90 seconds.</li>
            <li><strong>Laryngospasm:</strong> As the diaphragm contracts against a closed glottis, water enters the oropharynx and triggers laryngospasm — a protective reflex closure of the vocal cords. This prevents water from entering the lungs initially. The patient becomes hypoxic from prolonged breath-holding plus laryngospasm (this phase was formerly called "dry drowning" — but it is simply a phase of the drowning process).</li>
            <li><strong>Relaxation and aspiration:</strong> As hypoxia worsens, the laryngospasm relaxes, and the patient reflexively gasps underwater. <strong>Water is aspirated into the lungs at this point.</strong> The type of water (fresh vs salt) determines some of the pathophysiology, but <strong>both cause severe hypoxemia</strong>.</li>
            <li><strong>Pulmonary injury and hypoxemia:</strong> Aspirated water damages the pulmonary surfactant and alveolar-capillary membrane, leading to: <strong>(a) surfactant washout/dilution</strong> → alveolar collapse (atelectasis) → ventilation-perfusion (V/Q) mismatch; <strong>(b) pulmonary oedema</strong> → impaired gas exchange; <strong>(c) bronchospasm</strong> → increased airway resistance.</li>
            <li><strong>Cardiac arrest:</strong> Progressive hypoxemia leads to bradycardia, then pulseless electrical activity (PEA) or asystole. Ventricular fibrillation is uncommon in drowning compared to primary cardiac causes.</li>
        </ol>

        <h4>Fresh Water vs Salt Water Drowning</h4>
        <p>The classic teaching that fresh water and salt water drowning are fundamentally different conditions with different treatments is <strong>outdated and clinically irrelevant for prehospital care</strong>. While the initial pathophysiology differs slightly, <strong>the clinical management is IDENTICAL</strong>:</p>
        <table>
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
        </table>
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
        <p>The diving reflex is most pronounced in <strong>children</strong> — their larger surface area-to-mass ratio cools more rapidly, and the reflex is stronger in the young. This is why children have survived prolonged ice-water submersion (up to 60 minutes or more in rare cases) with good neurologic outcomes. <strong>Key EMT takeaway:</strong> In cold water drowning, especially in children, <strong>initiate resuscitation even if the submersion time seems impossibly long</strong>. Do not assume the patient is dead. Begin CPR, actively rewarm, and transport to a centre with ECMO/CPB rewarming capability. "You're not dead until you're warm and dead" applies to cold water drowning as much as to primary hypothermia.</p>

        <h4>Drowning Prevention Education</h4>
        <p>Drowning is the <strong>leading cause of death in children aged 1–4 years</strong> and the second leading cause of unintentional injury death in children 1–14 years. EMTs are in a unique position to provide drowning prevention education to the community:</p>
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
            q: "A 55-year-old male is rescued from a lake after being submerged for approximately 2 minutes. He is awake, alert, coughing, and producing frothy sputum. His SpO₂ is 91% on room air, HR 112, RR 26, BP 136/84. He says he is 'fine' and wants to go home and 'not make a big deal out of this.' What should the EMT do?",
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
            q: "[HARD] A 6-year-old child was pulled from an icy pond after approximately 20 minutes of submersion. Water temperature is estimated at 38°F (3°C). The child is unresponsive, apnoeic, and pulseless. Bystanders have started CPR. The nearest hospital is 25 minutes away. What should the EMT consider regarding the prognosis and management?",
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
}

];

console.log("✅ c8s1-c8s3 generated");
