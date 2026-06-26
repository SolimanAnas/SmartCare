/* ========== Chapter 6 – Trauma Emergencies ========== */
window.CPG_DATA = {
    id: "c6",
    title: "Trauma Emergencies",
    shortTitle: "6. Trauma Emergencies",
    sections: [
        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s1 – Trauma Systems & Kinematics
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s1",
            shortTitle: "6.1 Trauma Systems & Kinematics",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Trauma Systems &amp; Kinematics</h3>
                <h4>Trauma System Overview</h4>
                <p>A <strong>trauma system</strong> is an organized, coordinated effort in a defined geographic area to deliver the full spectrum of care to injured patients — from prevention and prehospital care through definitive rehabilitation. The trauma system is anchored by <strong>trauma centers</strong>, which are hospitals verified by the American College of Surgeons (ACS) and designated by state or local authorities to provide specific levels of trauma care.</p>
                <h4>Trauma Center Levels</h4>
                <table>
                    <thead>
                        <tr><th>Level</th><th>Resources &amp; Capabilities</th><th>Key Requirements</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Level I</strong></td><td>Comprehensive regional resource — the highest level; provides total care from prevention through rehabilitation</td><td>24/7 in-house general surgery, ortho, neuro, anesthesia; OR teams, ICU, research &amp; teaching; ≥1,200 trauma patients/year or ≥240 ISS >15</td></tr>
                        <tr><td><strong>Level II</strong></td><td>Definitive trauma care similar to Level I, without research/teaching requirements</td><td>24/7 availability of specialists (may be on-call); definitive care for 90%+ of trauma patients</td></tr>
                        <tr><td><strong>Level III</strong></td><td>Assessment, resuscitation, emergency surgery, stabilization &amp; transfer to Level I/II</td><td>24/7 ED coverage; general surgery available; transfer agreements with higher-level centers</td></tr>
                        <tr><td><strong>Level IV</strong></td><td>ATLS stabilization and transfer; typically in rural/remote areas</td><td>24/7 emergency provider coverage; ATLS-trained; transfer protocols</td></tr>
                    </tbody>
                </table>
                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Exam Pearl:</strong> You will NOT be asked to distinguish Level I vs Level II in detail. However, you MUST know the <strong>trauma center criteria</strong> — the "when to transport to a trauma center" decision based on physiology, anatomy, mechanism of injury, and special considerations. This is high-yield for the NREMT cognitive exam.
                </div>
                <h4>Trauma Center Transport Decision Criteria</h4>
                <p>The decision to transport to a trauma center is based on <strong>four categories</strong>. Meeting <strong>ANY ONE</strong> criterion in the physiologic or anatomic category warrants transport to the highest-level trauma center within the system.</p>
                <h5>1. Physiologic Criteria</h5>
                <ul>
                    <li><strong>GCS ≤13</strong></li>
                    <li><strong>SBP <90 mmHg</strong></li>
                    <li><strong>RR <10 or >29</strong> (<20 in infants <1 year)</li>
                    <li><strong>Need for ventilatory support</strong></li>
                </ul>
                <h5>2. Anatomic Criteria</h5>
                <ul>
                    <li>Penetrating injury to head, neck, torso, or extremities proximal to elbow/knee</li>
                    <li>Flail chest</li>
                    <li>Two or more proximal long-bone fractures</li>
                    <li>Crushed, degloved, or mangled extremity</li>
                    <li>Amputation proximal to wrist or ankle</li>
                    <li>Pelvic fracture</li>
                    <li>Open or depressed skull fracture</li>
                    <li>Paralysis (suspected spinal cord injury)</li>
                </ul>
                <h5>3. Mechanism of Injury (MOI) Criteria</h5>
                <ul>
                    <li><strong>Falls:</strong> Adult >20 ft (≈2 stories); Child >10 ft or 2-3× child's height</li>
                    <li><strong>High-risk auto crash:</strong> Intrusion >12 in occupant compartment or >18 in any site; Ejection; Death in same compartment</li>
                    <li><strong>Auto vs pedestrian/bicyclist:</strong> Thrown, run over, or >20 mph impact</li>
                    <li><strong>Motorcycle crash >20 mph</strong> or separation from bike</li>
                </ul>
                <h5>4. Special Considerations</h5>
                <ul>
                    <li><strong>Age:</strong> Adults >55 with hypotension or AMS; children — consider pediatric trauma center</li>
                    <li><strong>Anticoagulant/antiplatelet use</strong></li>
                    <li><strong>Pregnancy >20 weeks</strong></li>
                    <li><strong>Burns</strong> with trauma</li>
                    <li><strong>Provider judgment</strong></li>
                </ul>
                <div class="highlight-box" style="background:#d4edda; border-left-color:#155724;">
                    <strong>Key Concept:</strong> Any ONE criterion in physiologic OR anatomic = transport to highest-level trauma center. MOI and special considerations may trigger transport based on local protocols.
                </div>
                <h4>Kinematics of Trauma</h4>
                <p><strong>Kinematics</strong> describes how energy is transferred to the body during injury. The core principle: <strong>if the mechanism fits, assume the injury until proven otherwise.</strong></p>
                <h4>The Three Collisions of an MVC</h4>
                <ol>
                    <li><strong>Vehicle hits object</strong> — crumple zones absorb energy; intrusion >12 in = high-energy event</li>
                    <li><strong>Body hits interior</strong> — steering wheel, dashboard, windshield, seat belt cause blunt trauma</li>
                    <li><strong>Organs hit body structures</strong> — brain hits skull (TBI, subdural), heart shears at great vessels (aortic transection), liver/spleen tear at attachments (intra-abdominal hemorrhage)</li>
                </ol>
                <h4>Laws of Physics in Trauma</h4>
                <p>KE = ½mv² — velocity dominates. Doubling speed <strong>quadruples</strong> energy. Rapid deceleration (<0.1 s) = massive force. Airbags and crumple zones extend deceleration time.</p>
                <h4>Blunt vs Penetrating Trauma</h4>
                <table>
                    <thead><tr><th>Feature</th><th>Blunt</th><th>Penetrating</th></tr></thead>
                    <tbody>
                        <tr><td>Mechanism</td><td>Force over broad area (MVC, fall)</td><td>Force concentrated at entry (GSW, stab)</td></tr>
                        <tr><td>External findings</td><td>Subtle — "tip of the iceberg"</td><td>Obvious wound(s), extent hidden</td></tr>
                        <tr><td>Common injuries</td><td>Solid organ laceration, pelvic fx, TBI</td><td>Vascular injury, hollow viscus perf, hemo/pneumothorax</td></tr>
                        <tr><td>EMT approach</td><td>High suspicion based on MOI; assume hidden injuries</td><td>Wound assessment (entrance AND exit); control hemorrhage; do not remove impaled objects</td></tr>
                    </tbody>
                </table>
                <h4>Predicting Injury Patterns by MOI</h4>
                <p><strong>Frontal MVC:</strong> Up-and-over (head→chest→abdomen) vs down-and-under (knees→lumbar→viscus). Restrained: seat belt syndrome (clavicle/rib fx, hollow viscus injury).<br/>
                <strong>Lateral MVC:</strong> Less crumple zone → more energy. Spleen (left) / liver (right) compressed against spine. Pelvic fracture common.<br/>
                <strong>Rear MVC:</strong> Whiplash — acceleration-deceleration cervical spine injury.<br/>
                <strong>Rollover:</strong> Ejection = death or severe injury. Multiple force vectors.<br/>
                <strong>Motorcycle:</strong> No protective shell. Waddell's triad: femur/tibia fx + facial/head + upper extremity injury.<br/>
                <strong>Pedestrian vs auto:</strong> Adult: leg bumper → hood (pelvis, chest, head). Child: pelvis/thigh → thrown forward. Waddell's triad: head + chest/abdomen + femur.</p>
                <h4>Wound Ballistics</h4>
                <p>Low-energy (knife): injury along blade track. Medium-energy (handgun): permanent + temporary cavity. High-energy (rifle): massive cavitation, fragment wounds. Shotgun: close range = single devastating projectile; longer range = dispersed pellets.</p>
                <h4>Blast Injury Patterns</h4>
                <p><strong>Primary:</strong> Over-pressurization wave — tympanic membrane rupture, lung injury, bowel perforation.<br/>
                <strong>Secondary:</strong> Fragments — penetrating trauma.<br/>
                <strong>Tertiary:</strong> Victim thrown — blunt trauma, fractures.<br/>
                <strong>Quaternary:</strong> Burns, crush, inhalation.<br/>
                <strong>Quinary:</strong> Delayed effects from contamination.</p>
                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical Warning:</strong> Penetrating torso trauma with instability or peritonitis = immediate transport. "Scoop and run" — not "stay and play."
                </div>
            </div>`,

            flashcards: [
                {
                    question: "What are the four levels of trauma centers and their basic roles?",
                    answer: "Level I: Comprehensive regional resource, 24/7 in-house specialists, research & teaching. Level II: Similar care without research, on-call specialists. Level III: Assessment, resuscitation, stabilization & transfer. Level IV: ATLS stabilization in remote areas before transfer.",
                    category: "Trauma Systems"
                },
                {
                    question: "List the FOUR categories of trauma center transport criteria.",
                    answer: "(1) Physiologic — GCS ≤13, SBP <90, RR <10 or >29, need ventilatory support. (2) Anatomic — specific injury patterns. (3) Mechanism — falls >20 ft, high-risk auto crash, pedestrian struck. (4) Special considerations — age >55, anticoagulants, pregnancy >20 weeks, burns + trauma.",
                    category: "Trauma Systems — Transport Criteria"
                },
                {
                    question: "What are the three collisions in an MVC?",
                    answer: "(1) Vehicle collides with object — crumple zones absorb energy. (2) Body collides with interior — blunt trauma from steering wheel, dashboard, windshield. (3) Organs collide with body structures — brain hits skull, heart shears at great vessels, liver/spleen tear.",
                    category: "Kinematics — MVC"
                },
                {
                    question: "Why does doubling speed quadruple injury severity?",
                    answer: "KE = ½mv². Velocity is squared, so doubling speed increases crash energy by 4×. A 60 mph crash releases 4× more energy than a 30 mph crash.",
                    category: "Kinematics — Physics"
                },
                {
                    question: "What injury patterns are associated with frontal impact MVC?",
                    answer: "Up-and-over: Head hits windshield (TBI) → chest hits steering wheel (sternal fx, cardiac contusion) → abdomen (liver/spleen). Down-and-under: Knees hit dash (femur fx) → lap belt loads lumbar spine (Chance fracture) → hollow viscus rupture.",
                    category: "Kinematics — Injury Patterns"
                },
                {
                    question: "Distinguish blunt vs penetrating trauma energy transfer.",
                    answer: "Blunt: Energy dissipates over broad area — widespread but less obvious injury. Penetrating: Energy concentrated at entry point — injury tracks deep; external wound is the 'tip of the iceberg.'",
                    category: "Trauma — Blunt vs Penetrating"
                },
                {
                    question: "What are the five blast injury phases?",
                    answer: "Primary (over-pressurization wave), Secondary (fragments), Tertiary (victim thrown), Quaternary (burns, crush, inhalation), Quinary (delayed contamination effects).",
                    category: "Kinematics — Blast"
                },
                {
                    question: "What is Waddell's triad?",
                    answer: "Motorcycle vs car (30+ mph): femur/tibia fracture + facial/head injury + upper extremity injury. Pediatric pedestrian: head injury + chest/abdominal injury + femur fracture.",
                    category: "Kinematics — Specific MOI"
                }
            ],

            quiz: [
                {
                    q: "A 28-year-old male was in a high-speed T-bone MVC on the driver's side. He complains of severe LUQ pain and left hip pain. Based on MOI, which organ is at HIGHEST risk?",
                    options: ["Liver laceration", "Spleen laceration", "Pancreatic transection", "Kidney contusion"],
                    correct: 1,
                    explanation: "In a left-sided lateral impact, the spleen is compressed against the spine — the most vulnerable left-sided solid organ."
                },
                {
                    q: "Which physiologic criterion alone warrants transport to the highest-level trauma center?",
                    options: ["HR >100 bpm", "GCS of 14", "RR of 28", "SBP <90 mmHg"],
                    correct: 3,
                    explanation: "SBP <90 mmHg is an independent physiologic criterion. GCS ≤13 (not 14), RR <10 or >29 (28 is under the threshold)."
                },
                {
                    q: "[HARD] An unrestrained driver struck a tree at 50 mph. The steering wheel is bent and the patient has a contusion across his chest in the shape of the wheel. His vitals are stable. Which injury should you have the HIGHEST suspicion for?",
                    options: ["Isolated clavicle fracture", "Cardiac contusion and pulmonary contusion", "Lower extremity fracture only", "Cervical strain"],
                    correct: 1,
                    explanation: "Steering wheel deformity + chest wall imprint = high-energy transfer to chest. Suspect cardiac contusion, pulmonary contusion, possible great-vessel injury — regardless of stable vitals."
                },
                {
                    q: "An adult patient falls from an 25-foot window. He is awake with no visible injuries and stable vitals. What is the appropriate transport decision?",
                    options: [
                        "No trauma center — fall was not >20 ft",
                        "Transport to trauma center — fall >20 ft is a mechanism criterion",
                        "Transport — any fall >10 ft warrants trauma evaluation",
                        "Refuse transport"
                    ],
                    correct: 1,
                    explanation: "The adult fall criterion is >20 ft. At 18 ft, this is borderline — but clinical judgment should still prompt strong consideration for a trauma center."
                }
            ],

            critical: [
                {
                    id: "crit_6_1_1",
                    scenario: "You are at a single-vehicle MVC. A 34-year-old unrestrained driver struck a concrete barrier at 55 mph. The front end is severely deformed with engine compartment intrusion. The patient has a large ecchymotic steering wheel imprint on his chest. Vitals: BP 106/74, HR 116, RR 26, SpOâ‚‚ 93%, GCS 15. Auscultation reveals diminished breath sounds on the left with crackles on the right.",
                    question: "Based on the three-collision model and MOI, what injuries must you suspect and what is your transport priority?",
                    options: [
                        {t: "Treat for simple rib contusion — apply oxygen, transport non-emergently; the steering wheel contusion is likely superficial", f: "Incorrect. A steering-wheel deformity at 55 mph indicates massive energy transfer to the chest. Suspect cardiac contusion, pulmonary contusion, and possible aortic injury."},
                        {t: "Suspect cardiac contusion, bilateral pulmonary contusion, possible left hemothorax/pneumothorax, and possible aortic injury — apply high-flow oxygen, rapid trauma assessment, expedite transport to a Level I trauma center", f: "Correct. This patient meets both anatomic (chest wall injury) and physiologic (tachypnea, hypoxia) criteria for a trauma center."}
                    ],
                    correct: 1,
                    explanation: "Frontal impact with steering wheel deformity at 55 mph transmits massive force. Cardiac contusion → dysrhythmias. Pulmonary contusion → hypoxia worsening over 6-24 hours. Diminished breath sounds → hemothorax/pneumothorax. Aortic transection is the 'silent killer' in high-speed deceleration.",
                    kpi: "High-risk MOI identification and trauma center triage"
                },
                {
                    id: "crit_6_1_2",
                    scenario: "A 42-year-old male fell 25 feet from scaffolding onto gravel, landing feet-first then backward. He is awake (GCS 15), complains of severe low back pain, bilateral heel pain, and difficulty moving his legs. Vitals: BP 118/74, HR 104. Tenderness over lumbar spine, swelling in both heels. Sensation intact, motor strength 3/5 bilaterally.",
                    question: "What injury pattern do you suspect from this axial loading mechanism?",
                    options: [
                        {t: "Bilateral calcaneal fractures only — immobilize lower extremities, transport to closest hospital; back pain is muscular", f: "Incorrect. Axial loading from 25 ft transmits force up the skeleton. Lumbar spine fracture is highly probable. Motor weakness is a red flag for spinal cord compromise."},
                        {t: "Axial loading injury: bilateral calcaneal fractures + possible lumbar burst fracture + possible spinal cord injury — full spinal immobilization, rapid trauma assessment, transport to trauma center", f: "Correct. This meets MOI criterion (fall >20 ft). Motor weakness despite intact sensation suggests spinal cord compression."}
                    ],
                    correct: 1,
                    explanation: "Feet-first landing from >20 ft causes axial loading through calcanei, tibia/fibula, pelvis, into lumbar spine (burst fracture). Motor weakness suggests spinal cord edema/compression. Immobilize entire spine and transport to trauma center.",
                    kpi: "Axial loading injury recognition and spinal precautions"
                },
                {
                    id: "crit_6_1_3",
                    scenario: "A 7-year-old male was struck by a car at 25 mph. He has a deformed right thigh (mid-shaft), left chest contusion, 3 cm chin laceration, and is holding his abdomen. Vitals: BP 98/62, HR 130, RR 28. Weight ~22 kg.",
                    question: "What injury pattern (Waddell's triad) do you suspect in this pediatric pedestrian?",
                    options: [
                        {t: "The femur fracture is the priority — splint and transport to the closest hospital", f: "Incorrect. Waddell's triad in pediatric pedestrians includes head injury + chest/abdominal injury + femur fracture. Abdominal tenderness could indicate life-threatening internal injuries."},
                        {t: "Suspect Waddell's triad: head injury (chin laceration, possible TBI) + chest/abdominal injury + femur fracture — spinal precautions, rapid assessment, traction splint for femur, transport to a pediatric trauma center", f: "Correct. Abdominal tenderness and chest contusion raise concern for intra-abdominal and intrathoracic injury. The femur fracture may have caused significant blood loss."}
                    ],
                    correct: 1,
                    explanation: "Waddell's triad in pediatric pedestrians: head injury + chest/abdominal injury (liver/spleen) + femur fracture (500-1000 mL blood loss). The child requires a pediatric trauma center for multi-system evaluation.",
                    kpi: "Pediatric pedestrian — Waddell's triad"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s2 – Bleeding Control
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s2",
            shortTitle: "6.2 Bleeding Control",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Bleeding Control</h3>

                <h4>Types of Hemorrhage</h4>
                <table>
                    <thead><tr><th>Type</th><th>Vessel</th><th>Character</th><th>Severity</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Arterial</strong></td><td>Artery (high-pressure, oxygenated blood away from heart)</td><td>Bright red, <strong>spurts/pulsates</strong> with pulse; difficult to control</td><td>Life-threatening — can exsanguinate in minutes from femoral, brachial, carotid, or aorta</td></tr>
                        <tr><td><strong>Venous</strong></td><td>Vein (low-pressure, deoxygenated blood toward heart)</td><td>Dark red/maroon, <strong>steady flow</strong> (not spurting); controlled with direct pressure typically</td><td>Can be life-threatening from large veins; air embolism risk in neck veins</td></tr>
                        <tr><td><strong>Capillary</strong></td><td>Capillaries (microscopic gas/nutrient exchange)</td><td>Dark red, <strong>oozes slowly</strong>; self-limiting or minimal direct pressure</td><td>Generally minor unless coagulopathy (anticoagulants, hemophilia, liver disease)</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> Bright red + spurting = arterial. Dark red + steady flow = venous. Oozing = capillary. However, bright red can appear in well-oxygenated venous bleeding (e.g., pulmonary vein). Treat the severity, not just the color.
                </div>

                <h4>External Hemorrhage Control (Sequential Approach)</h4>
                <ol>
                    <li><strong>Direct pressure</strong> — Firm pressure directly over the bleeding site with sterile gauze. Maintain uninterrupted pressure for at least 10 minutes. Do NOT periodically "check" — this disrupts clot formation.</li>
                    <li><strong>Elevation</strong> — Elevate extremity above heart level (ONLY with direct pressure; elevation alone is ineffective).</li>
                    <li><strong>Pressure dressing</strong> — Tight roller bandage over the wound after direct pressure slows bleeding. Tight enough to maintain pressure, not so tight as to act as a tourniquet.</li>
                    <li><strong>Wound packing</strong> — Pack wound tightly with hemostatic or standard gauze, then direct pressure over packing. For deep/narrow wounds or junctional areas (groin, axilla, neck) where tourniquet cannot be applied.</li>
                    <li><strong>Hemostatic dressings</strong> — Gauze with kaolin/chitosan that accelerate clotting. Pack into wound, hold pressure for 3 minutes.</li>
                    <li><strong>Tourniquet</strong> — For life-threatening extremity hemorrhage not controlled by direct pressure. Apply proximal, tighten until bleeding stops.</li>
                </ol>

                <h4>Tourniquet Application</h4>
                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>NREMT Critical Point:</strong> Tourniquet for life-threatening extremity hemorrhage should be applied <strong>BEFORE checking distal pulses</strong>. Apply, tighten until bleeding stops, then reassess. Do NOT remove once applied — even if bleeding appears controlled — unless directed by a physician in the hospital.
                </div>

                <h5>Indications</h5>
                <ul>
                    <li>Life-threatening extremity hemorrhage not controlled by direct pressure</li>
                    <li>Mass casualty incident / tactical environment</li>
                    <li>Traumatic amputation (proximal to amputation, not over joint)</li>
                    <li>Crush injury with active hemorrhage</li>
                    <li>Multiple bleeding sources on one extremity</li>
                </ul>

                <h5>Types of Tourniquets</h5>
                <p><strong>Commercial (windlass):</strong> CAT, SOFT-T, SAM XT — proven in combat, one-hand application, consistent pressure.<br/>
                <strong>Ratchet-style:</strong> RMT — precise tightening, no windlass.<br/>
                <strong>Pneumatic:</strong> BP cuff — even pressure, adjustable, but may lose pressure.<br/>
                <strong>Improvised:</strong> Cravat + rigid object — less effective, higher failure risk.</p>

                <h5>Application Technique (Commercial Windlass)</h5>
                <ol>
                    <li>Expose limb, cut away clothing</li>
                    <li>Position 2-3 inches <strong>proximal</strong> to bleeding site (between wound and heart). NOT over a joint.</li>
                    <li>Secure strap, then turn windlass until bleeding STOPS. Patient will experience significant pain — this is expected.</li>
                    <li>Secure windlass in clip. Document time — write "TQ" and time on patient's forehead.</li>
                    <li>Reassess: if bleeding continues, tighten further. If still bleeding, apply a <strong>second tourniquet side-by-side</strong> proximal to the first.</li>
                    <li><strong>DO NOT REMOVE</strong> once applied.</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical Warning:</strong> Do NOT apply tourniquet over a wound — apply proximal. Do NOT apply over a joint. If bleeding continues after initial application, tighten further — do not remove and reapply. Life over limb — never remove prehospitally.
                </div>

                <h4>Hemostatic Dressings</h4>
                <p><strong>Kaolin-based (QuikClot Combat Gauze):</strong> Activates Factor XII (Hageman factor) — intrinsic coagulation pathway. Current tactical standard. Pack into wound, hold pressure 3 minutes.<br/>
                <strong>Chitosan-based (HemCon, Celox):</strong> Positively charged polymer attracts RBCs and platelets. Works well in cooler environments.<br/>
                <strong>Technique:</strong> Expose wound → pack gauze deep into wound directly onto bleeder → pack tight layer after layer → hold direct pressure for 3 full minutes → apply pressure dressing over packing.</p>

                <h4>Internal Bleeding Assessment</h4>
                <p>Internal bleeding is a <strong>hidden killer</strong> — cannot be seen, measured directly, or packed. High index of suspicion based on mechanism, anatomy, and subtle signs.</p>

                <table>
                    <thead><tr><th>Sign/Symptom</th><th>Relevance</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Abdominal distention</strong></td><td>Abdomen can hold 3-4 L before distention is obvious. Progressive distention + hypotension = massive hemorrhage</td></tr>
                        <tr><td><strong>Ecchymosis</strong></td><td>Grey Turner sign (flank) = retroperitoneal hemorrhage. Cullen sign (periumbilical) = intra-abdominal bleed. Both are LATE signs</td></tr>
                        <tr><td><strong>Guarding / Rigidity / Rebound</strong></td><td>Involuntary guarding over bleeding organ; board-like rigidity = peritoneal irritation; rebound = peritoneal inflammation</td></tr>
                        <tr><td><strong>Kehr's Sign</strong></td><td>LUQ pain referred to <strong>left shoulder</strong> — blood irritates the diaphragm's phrenic nerve (C3-5). Classic sign of <strong>splenic rupture</strong></td></tr>
                        <tr><td><strong>Tachycardia</strong></td><td>Earliest sign of hemodynamic compromise — heart increases rate to maintain cardiac output</td></tr>
                        <tr><td><strong>Narrow pulse pressure</strong></td><td>&lt;30-40 mmHg suggests decompensation (SBP falling, DBP rising from vasoconstriction)</td></tr>
                        <tr><td><strong>Pallor / Cool clammy skin</strong></td><td>Peripheral vasoconstriction shunts blood to core — catecholamine-mediated</td></tr>
                        <tr><td><strong>Thirst / Anxiety / AMS</strong></td><td>Cerebral hypoperfusion causes restlessness, confusion, lethargy</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl: Kehr's Sign</strong> — In blunt abdominal trauma (especially left-sided), left shoulder pain = splenic injury until proven otherwise. Blood tracks to left hemidiaphragm, irritating phrenic nerve. High-yield NREMT topic.
                </div>

                <h4>Specific Internal Bleeding Patterns</h4>
                <p><strong>Hemothorax:</strong> Blood in pleural space (1.5-2 L capacity). Diminished/absent breath sounds, dullness to percussion, shock. From lung laceration, intercostal artery, great vessel injury.<br/>
                <strong>Hemoperitoneum:</strong> Blood in peritoneal cavity (3-4+ L capacity). Distention, guarding, rigidity, Kehr's sign. From liver, spleen, mesenteric tear.<br/>
                <strong>Retroperitoneal bleed:</strong> Bleeding behind posterior parietal peritoneum (2-3 L capacity). Flank ecchymosis (Grey Turner sign), back/flank pain, unexplained hypotension. From pelvic fracture, renal injury, aortic rupture.<br/>
                <strong>Fracture-related bleeding:</strong> Closed femur = 1,000-1,500 mL. Pelvic fracture = 2,000-3,000+ mL. Closed tibia = 500-750 mL. Closed humerus = 500-750 mL.</p>

                <div class="highlight-box" style="background:#d4edda; border-left-color:#155724;">
                    <strong>Key Concept:</strong> A femur fracture + pelvic fracture can lose 3,000-4,500 mL — essentially the entire adult blood volume. Recognize the mechanism, anticipate shock, and transport rapidly.
                </div>

                <h4>Pelvic Fracture Hemorrhage Control</h4>
                <p>Unstable pelvic ring disruptions (open-book, vertical shear) → massive bleeding from presacral venous plexus and iliac vessels. Apply <strong>pelvic binder</strong> at greater trochanters (not iliac crest). If no commercial binder, wrap a sheet tightly at trochanter level. Do NOT repeatedly compress and release — each movement disrupts clot formation.</p>

                <h4>Wound Packing Technique</h4>
                <p>For <strong>junctional zones</strong> (groin, axilla, neck, shoulder) where tourniquets cannot be applied: (1) Locate bleeding source. (2) Push hemostatic gauze deep into wound directly onto bleeder. (3) Pack layer by layer until wound is filled — creating a tight plug. (4) Hold direct pressure for 3 full minutes. (5) Apply pressure dressing over packing.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical Warning:</strong> NEVER blindly clamp a bleeding vessel with a hemostat prehospitally — you can clamp a nerve or damage adjacent structures. Direct pressure and wound packing are safer and more effective.
                </div>
            </div>`,

            flashcards: [
                {
                    question: "What are the three types of hemorrhage by vessel, with their characteristics?",
                    answer: "Arterial: Bright red, spurting/pulsating, life-threatening. Venous: Dark red/maroon, steady flow, controlled with direct pressure. Capillary: Dark red, oozing, generally self-limiting.",
                    category: "Bleeding — Types"
                },
                {
                    question: "What is the proper sequence of external hemorrhage control (least to most invasive)?",
                    answer: "(1) Direct pressure, (2) Elevation (only with direct pressure), (3) Pressure dressing, (4) Wound packing, (5) Hemostatic dressings (pack + 3 min pressure), (6) Tourniquet.",
                    category: "Bleeding — External Control"
                },
                {
                    question: "What are the steps for applying a commercial windlass tourniquet?",
                    answer: "Expose → place 2-3 in proximal to wound (not over joint) → secure strap → turn windlass until bleeding stops → secure windlass → document TQ time on forehead → NEVER remove once applied.",
                    category: "Bleeding — Tourniquet"
                },
                {
                    question: "What is Kehr's sign and what does it indicate?",
                    answer: "LUQ pain referred to left shoulder — blood irritates phrenic nerve (C3-5). Classic sign of splenic rupture. Any left shoulder pain after abdominal trauma = splenic injury until proven otherwise.",
                    category: "Bleeding — Internal"
                },
                {
                    question: "How much blood can each fracture type lose?",
                    answer: "Closed femur: 1,000-1,500 mL. Pelvic: 2,000-3,000+ mL. Tibia: 500-750 mL. Humerus: 500-750 mL. Femur + pelvis combined: 3,000-4,500 mL — entire adult blood volume.",
                    category: "Bleeding — Fracture-related"
                },
                {
                    question: "What are the signs of internal bleeding?",
                    answer: "Abdominal distention, ecchymosis (Grey Turner flank / Cullen periumbilical), guarding/rigidity, Kehr's sign, unexplained tachycardia, narrow pulse pressure, pallor/cool skin, thirst/anxiety/AMS.",
                    category: "Bleeding — Internal Signs"
                },
                {
                    question: "Differentiate hemothorax, hemoperitoneum, and retroperitoneal bleed.",
                    answer: "Hemothorax: Pleural space (diminished breath sounds, dullness, 1.5-2 L). Hemoperitoneum: Peritoneal cavity (distention, guarding, Kehr's, 3-4 L). Retroperitoneal: Behind peritoneum (Grey Turner sign, back pain, 2-3 L).",
                    category: "Bleeding — Internal Patterns"
                },
                {
                    question: "How do you properly pack a wound with hemostatic gauze?",
                    answer: "Locate bleeder → push gauze deep into wound onto bleeder → pack tight layer by layer until filled → hold direct pressure 3 minutes → apply pressure dressing. Used for junctional zones (groin, axilla, neck).",
                    category: "Bleeding — Wound Packing"
                }
            ],

            quiz: [
                {
                    q: "A 38-year-old male has a deep forearm laceration with bright red spurting blood. Direct pressure fails after 5 minutes. What is the NEXT step?",
                    options: [
                        "Continue direct pressure another 5 minutes",
                        "Apply tourniquet proximal to wound, 2-3 inches above the bleeding site",
                        "Apply tourniquet directly over the wound",
                        "Elevate and apply ice"
                    ],
                    correct: 1,
                    explanation: "Direct pressure failure with arterial bleeding = tourniquet indicated. Apply 2-3 inches proximal to the wound, never over the wound or a joint."
                },
                {
                    q: "A 22-year-old male was struck in the LUQ during soccer. He now complains of left shoulder pain with mild LUQ tenderness. BP 112/70, HR 104. What does the referred shoulder pain MOST likely indicate?",
                    options: ["Diaphragm muscle spasm", "Kehr's sign — splenic injury", "Cervical spine injury", "Anxiety hyperventilation"],
                    correct: 1,
                    explanation: "Kehr's sign: left shoulder pain after LUQ trauma = splenic injury. Blood irritates the phrenic nerve (C3-5) which shares dermatomes with the shoulder."
                },
                {
                    q: "Which statement about tourniquet use is TRUE per NREMT standards?",
                    options: [
                        "Check distal pulses before applying",
                        "Loosen every 15 minutes to allow blood flow",
                        "Apply BEFORE checking distal pulses for life-threatening extremity hemorrhage",
                        "Apply over a joint to compress the proximal artery"
                    ],
                    correct: 2,
                    explanation: "NREMT: tourniquets for life-threatening extremity hemorrhage are applied BEFORE checking distal pulses. Do NOT loosen prehospitally — this can cause fatal re-bleeding."
                },
                {
                    q: "[HARD] A 45-year-old male fell 15 feet onto his right side. He has a deformed right femur, tender pelvis, BP 88/60, HR 130, and abdominal distention. What is the estimated total blood loss?",
                    options: ["500-750 mL", "1,000-1,500 mL", "3,000-4,500 mL", "500 mL — minimal loss"],
                    correct: 2,
                    explanation: "Femur fracture (up to 1,500 mL) + pelvic fracture (up to 3,000 mL) + possible intra-abdominal bleed = 3,000-4,500 mL — essentially the entire adult blood volume."
                }
            ],

            critical: [
                {
                    id: "crit_6_2_1",
                    scenario: "A 29-year-old construction worker has a severe laceration to his right lower leg from a saw. Active arterial bleeding — bright red blood spurting 12 inches. You apply direct pressure for 5 minutes but the gauze is saturated and bleeding continues. Vitals: BP 96/62, HR 124, RR 24. The scene is 35 minutes from the nearest trauma center.",
                    question: "Direct pressure has failed after 5 minutes and the patient shows signs of hemorrhagic shock. What is your next step?",
                    options: [
                        {t: "Apply additional gauze and continue direct pressure another 10 minutes — the clot needs more time", f: "Incorrect. Arterial bleeding not controlled after 5 minutes of direct pressure is unlikely to stop without more aggressive intervention. The patient is actively hemorrhaging into shock."},
                        {t: "Apply a commercial tourniquet 2-3 inches proximal to the wound (above the knee), tighten until bleeding stops, document time, and transport immediately", f: "Correct. Life-threatening extremity hemorrhage not controlled by direct pressure + signs of hemorrhagic shock = tourniquet indicated. Apply proximal, tighten until bleeding ceases."}
                    ],
                    correct: 1,
                    explanation: "Clear indications for tourniquet use: life-threatening extremity hemorrhage not controlled by direct pressure + signs of hemorrhagic shock. Apply proximal to the wound (above the knee since wound is on calf). Tighten until bleeding stops completely. Document time and transport rapidly.",
                    kpi: "Decision to escalate from direct pressure to tourniquet"
                },
                {
                    id: "crit_6_2_2",
                    scenario: "You are transporting a 52-year-old unrestrained driver from a high-speed MVC. He has seat belt ecchymosis across chest/abdomen, deformed left femur (distal pulse present), and tender pelvis. Initial BP 104/68, HR 112. During transport, BP drops to 86/54, HR 132, confusion and agitation develop. You are 18 minutes from the Level I trauma center.",
                    question: "What is the most likely source of decompensation and your priority?",
                    options: [
                        {t: "The femur fracture is causing the blood loss — apply a traction splint and increase the fluid rate", f: "Incorrect. While the femur contributes, pelvic tenderness + high-risk mechanism suggest pelvic fracture hemorrhage is the primary driver. A traction splint alone will not address pelvic bleeding."},
                        {t: "Suspect retroperitoneal and intra-abdominal hemorrhage from pelvic fracture and solid organ injury — apply pelvic binder at trochanters, give second 500 mL NS bolus (permissive hypotension, target SBP ~80-90), expedite transport", f: "Correct. Pelvic fracture + femur fracture + seat belt sign = massive hemorrhage risk. Pelvic binder reduces pelvic volume and tamponades venous bleeding. Permissive hypotension avoids disrupting clots."}
                    ],
                    correct: 1,
                    explanation: "High-energy mechanism with multiple injuries. Pelvic fracture bleeding is the most immediately life-threatening — not controllable in the field. Pelvic binder (or sheet at trochanters) reduces pelvic volume. Permissive hypotension (SBP 80-90) — do not raise pressure high enough to disrupt clots.",
                    kpi: "Pelvic fracture hemorrhage recognition and management"
                },
                {
                    id: "crit_6_2_3",
                    scenario: "A 35-year-old male with a traumatic amputation of his right arm at mid-humerus from a farming accident. A bystander applied a tourniquet, but it appears loose — brisk bleeding continues from the stump. BP 84/50, HR 138, RR 30, barely responsive. He also has a 4 cm forearm laceration oozing dark blood.",
                    question: "The tourniquet is not controlling the bleeding from the amputation. What is your next action?",
                    options: [
                        {t: "Leave the existing tourniquet in place, apply a pressure dressing over the stump, and start aggressive fluid resuscitation to raise SBP above 100", f: "Incorrect. The tourniquet is not working. Leaving an ineffective tourniquet gives false reassurance. Aggressive fluids raising SBP >90-100 is wrong — permissive hypotension is preferred."},
                        {t: "Tighten the existing tourniquet further — if bleeding continues, apply a second tourniquet side-by-side proximal to the first. Control forearm laceration with pressure. Give 500 mL NS bolus (target SBP 80-90) and expedite transport", f: "Correct. An ineffective tourniquet must be tightened. If bleeding persists, apply a second side-by-side. Use permissive hypotension — enough for cerebral perfusion but not enough to disrupt clots."}
                    ],
                    correct: 1,
                    explanation: "Traumatic amputation with continued bleeding = ineffective tourniquet. Tighten further (windlass may need more turns). If bleeding persists, apply a second tourniquet side-by-side proximal to the first. Do not remove the first one. Add direct pressure for the forearm laceration. Permissive hypotension (SBP ~80-90). Transport for surgical repair.",
                    kpi: "Tourniquet failure assessment and correction"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s3 – Shock in Trauma
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s3",
            shortTitle: "6.3 Shock in Trauma",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Shock in Trauma</h3>

                <h4>Shock: Definition</h4>
                <p><strong>Shock</strong> is a state of inadequate tissue perfusion and oxygen delivery to meet cellular metabolic demands. It is <strong>not</strong> simply low blood pressure — it is circulatory failure at the cellular level. By the time hypotension develops, the patient has exhausted compensatory mechanisms and is in <strong>decompensated shock</strong>.</p>

                <h4>Four Types of Shock</h4>
                <table>
                    <thead><tr><th>Type</th><th>Primary Defect</th><th>Trauma Causes</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Hypovolemic</strong></td><td>Loss of circulating blood volume</td><td>Hemorrhage (most common in trauma), burns (fluid shift)</td></tr>
                        <tr><td><strong>Distributive</strong></td><td>Loss of vascular tone (vasodilation)</td><td>Spinal cord injury (neurogenic shock), sepsis, anaphylaxis</td></tr>
                        <tr><td><strong>Cardiogenic</strong></td><td>Pump failure</td><td>Cardiac contusion, MI, tension pneumothorax, cardiac tamponade</td></tr>
                        <tr><td><strong>Obstructive</strong></td><td>Physical obstruction of blood flow</td><td>Tension pneumothorax, cardiac tamponade</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#d4edda; border-left-color:#155724;">
                    <strong>Key Concept:</strong> In trauma, <strong>hypovolemic shock from hemorrhage</strong> is most common. But always consider tension pneumothorax (obstructive) and spinal cord injury (neurogenic) — their treatment is completely different.
                </div>

                <h4>Hemorrhagic Shock Classification (ATLS)</h4>
                <p>Average adult blood volume ≈ 5 L (70 mL/kg). Classification by % blood loss:</p>
                <table>
                    <thead>
                        <tr><th>Parameter</th><th>Class I</th><th>Class II</th><th>Class III</th><th>Class IV</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>% Loss</strong></td><td>≤15% (&lt;750 mL)</td><td>15-30% (750-1,500 mL)</td><td>30-40% (1,500-2,000 mL)</td><td>&gt;40% (&gt;2,000 mL)</td></tr>
                        <tr><td><strong>HR</strong></td><td>&lt;100</td><td>&gt;100-120</td><td>120-140, thready</td><td>&gt;140 or bradycardia (ominous)</td></tr>
                        <tr><td><strong>BP</strong></td><td>Normal</td><td>Normal (narrowed pulse pressure)</td><td>Hypotension (SBP &lt;90)</td><td>Profound hypotension (SBP &lt;70-80)</td></tr>
                        <tr><td><strong>RR</strong></td><td>14-20</td><td>20-28</td><td>28-35</td><td>&gt;35 or agonal</td></tr>
                        <tr><td><strong>Mental Status</strong></td><td>Anxious, alert</td><td>Anxious, agitated</td><td>Confused, anxious</td><td>Lethargic, obtunded, unconscious</td></tr>
                        <tr><td><strong>Skin</strong></td><td>Pink, warm, dry</td><td>Cool, pale, diaphoretic</td><td>Cool, pale, clammy, mottled</td><td>Cold, ashen, cyanotic, waxy</td></tr>
                        <tr><td><strong>Cap Refill</strong></td><td>&lt;2 sec</td><td>2-3 sec</td><td>&gt;3 sec</td><td>Absent</td></tr>
                        <tr><td><strong>Urine Output</strong></td><td>&gt;30 mL/hr</td><td>20-30 mL/hr</td><td>5-15 mL/hr</td><td>&lt;5 mL/hr</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Exam Pearl:</strong> Know <strong>Class III</strong> (30-40% loss, 1,500-2,000 mL) — the threshold where compensation fails and <strong>hypotension develops</strong>. Class I and II = compensated shock. Class III = decompensated shock.
                </div>

                <h4>Compensated vs Decompensated vs Irreversible Shock</h4>
                <p><strong>Compensated (Class I-II):</strong> Body uses neuroendocrine mechanisms — baroreceptor reflex (↑ HR, ↑ contractility, ↑ vasoconstriction), hormonal responses (ADH, RAAS, catecholamines). Key feature: <strong>SBP is maintained</strong>. Patient may have normal BP but is tachycardic, pale, cool, diaphoretic.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical NREMT Point:</strong> A trauma patient can have <strong>normal vital signs</strong> while in compensated shock. <strong>Treat the mechanism, not just the vitals.</strong> A femur + pelvic fracture patient with normal BP but tachycardia and pallor is in compensated shock. Do not be falsely reassured.
                </div>

                <p><strong>Decompensated (Class III):</strong> >30% loss. Compensatory mechanisms overwhelmed. SBP <90, worsening tachycardia, confusion/agitation, marked vasoconstriction, narrow pulse pressure (<30 mmHg), oliguria.<br/>
                <strong>Irreversible (Class IV):</strong> >40% loss. Profound hypotension, preterminal bradycardia, unconscious, agonal respirations, PEA. Cellular damage is so severe that resuscitation is unlikely to succeed.</p>

                <h4>Fluid Resuscitation</h4>
                <h5>Permissive Hypotension (Balanced Resuscitation)</h5>
                <p>Goal: maintain adequate perfusion (SBP ~80-90 or palpable radial pulse) without raising BP enough to disrupt clots. Aggressive fluids → dilute clotting factors, worsen coagulopathy, and can "pop the clot."<br/>
                <strong>Contraindicated in TBI:</strong> TBI patients need SBP ≥100-110 mmHg to maintain cerebral perfusion pressure (CPP) and prevent secondary brain injury.<br/>
                <strong>Fluid:</strong> 500 mL NS bolus over 10-15 minutes. Reassess. Repeat once if needed. Limit to 2 L total crystalloid.</p>

                <div class="highlight-box" style="background:#d4edda; border-left-color:#155724;">
                    <strong>NREMT Fluid Bolus Guideline:</strong> 500 mL NS if SBP <90 OR signs of shock (tachycardia + pallor/diaphoresis/AMS). Reassess. Repeat once if needed. Limit 2 L crystalloid. Warm fluids preferred.
                </div>

                <h4>Shock Differential in Trauma</h4>
                <table>
                    <thead><tr><th>Feature</th><th>Hypovolemic</th><th>Neurogenic</th><th>Tension PTX</th><th>Tamponade</th></tr></thead>
                    <tbody>
                        <tr><td>Skin</td><td>Pale, cool, clammy</td><td>Warm, dry, flushed</td><td>Pale, cool</td><td>Pale, cool</td></tr>
                        <tr><td>HR</td><td>Tachy</td><td>Bradycardia</td><td>Tachy</td><td>Tachy</td></tr>
                        <tr><td>Pulse Pressure</td><td>Narrow</td><td>Wide</td><td>Narrow</td><td>Narrow (pulsus paradoxus)</td></tr>
                        <tr><td>Breath Sounds</td><td>Normal</td><td>Normal</td><td>Decreased unilateral</td><td>Normal</td></tr>
                        <tr><td>Trachea</td><td>Midline</td><td>Midline</td><td>Deviated away</td><td>Midline</td></tr>
                        <tr><td>JVD</td><td>Flat</td><td>Flat</td><td>Distended</td><td>Distended</td></tr>
                        <tr><td>Key</td><td>Bleeding source</td><td>SCI + brady + warm skin</td><td>Tracheal deviation + unilateral BS + JVD</td><td>Muffled hearts + JVD + hypotension (Beck's triad)</td></tr>
                    </tbody>
                </table>

                <h4>EMT Management of Shock</h4>
                <ol>
                    <li>Hemorrhage control FIRST — tourniquets, pressure dressings, wound packing before anything else</li>
                    <li>High-flow Oâ‚‚ — titrate to SpOâ‚‚ ≥94%</li>
                    <li>Large-bore IV × 2 (14-16G) or IO if unable</li>
                    <li>500 mL NS bolus if SBP <90 or shock signs — reassess, repeat once, limit 2 L</li>
                    <li>Permissive hypotension — unless TBI (target SBP ≥100-110)</li>
                    <li>Keep warm — hypothermia worsens coagulopathy</li>
                    <li>Scoop and run — definitive treatment is in the OR</li>
                    <li>Notify trauma center with mechanism, vitals, interventions</li>
                </ol>
            </div>`,

            flashcards: [
                {
                    question: "What are the four types of shock and which is most common in trauma?",
                    answer: "(1) Hypovolemic — loss of volume (MOST COMMON). (2) Distributive — loss of vascular tone (neurogenic, sepsis). (3) Cardiogenic — pump failure. (4) Obstructive — physical obstruction (tension PTX, tamponade).",
                    category: "Shock — Types"
                },
                {
                    question: "Differentiate compensated vs decompensated shock.",
                    answer: "Compensated (Class I-II, <30% loss): SBP maintained through tachycardia, vasoconstriction, increased contractility. Decompensated (Class III, >30%): Hypotension develops, worsening tachycardia, altered mental status.",
                    category: "Shock — Compensated vs Decompensated"
                },
                {
                    question: "Describe the four ATLS hemorrhagic shock classes.",
                    answer: "Class I: ≤15% (<750 mL), HR <100, normal BP. Class II: 15-30% (750-1,500 mL), HR >100-120, normal BP, narrowed pulse pressure. Class III: 30-40% (1,500-2,000 mL), HR 120-140, HYPOTENSION (SBP <90). Class IV: >40% (>2,000 mL), HR >140 or brady, profound hypotension.",
                    category: "Shock — Classification"
                },
                {
                    question: "What is permissive hypotension and when is it contraindicated?",
                    answer: "Target SBP ~80-90 mmHg to maintain perfusion without disrupting clots. CONTRAINDICATED in TBI — TBI patients need SBP ≥100-110 mmHg to maintain cerebral perfusion pressure.",
                    category: "Shock — Fluid Resuscitation"
                },
                {
                    question: "Differentiate neurogenic from hemorrhagic shock.",
                    answer: "Neurogenic: Bradycardia, warm/dry/flushed skin, wide pulse pressure, spinal cord injury. Hemorrhagic: Tachycardia, pale/cool/clammy skin, narrow pulse pressure, evidence of bleeding.",
                    category: "Shock — Differential"
                },
                {
                    question: "What is the NREMT fluid bolus guideline?",
                    answer: "500 mL NS if SBP <90 OR signs of shock (tachycardia + pallor/diaphoresis/AMS). Reassess. Repeat once if needed. Limit 2 L crystalloid. Permissive hypotension (SBP 80-90) unless TBI.",
                    category: "Shock — Fluid Bolus"
                },
                {
                    question: "Differentiate tension pneumothorax from cardiac tamponade.",
                    answer: "Tension PTX: Unilateral decreased BS, tracheal deviation AWAY, JVD, hypotension. Tamponade: Muffled heart tones + JVD + hypotension (Beck's triad), pulsus paradoxus, trachea midline, normal BS.",
                    category: "Shock — Tension vs Tamponade"
                },
                {
                    question: "What are the key prehospital interventions for shock?",
                    answer: "(1) Hemorrhage control first. (2) High-flow Oâ‚‚. (3) Large-bore IV × 2. (4) 500 mL NS if SBP <90. (5) Prevent hypothermia. (6) Scoop and run. (7) Notify trauma center.",
                    category: "Shock — Management"
                }
            ],

            quiz: [
                {
                    q: "A 24-year-old male with a stab wound to the RUQ has BP 106/70, HR 118, RR 24, pale diaphoretic skin. He is anxious. What class of hemorrhagic shock is this?",
                    options: ["Class I — <15% loss", "Class II — 15-30% loss (compensated)", "Class III — 30-40% loss (decompensated)", "Class IV — >40% loss"],
                    correct: 1,
                    explanation: "Class II: HR 118 (tachy), normal BP, narrowed pulse pressure, pale/diaphoretic skin. Normal BP with these findings indicates compensated shock."
                },
                {
                    q: "A 45-year-old in an MVC has GCS 10, SBP 120/70, HR 104, deformed left thigh. What should guide your fluid management?",
                    options: ["No fluids — BP is normal", "Permissive hypotension — SBP 80-90", "Aggressive fluids for SBP ≥100 due to head injury", "One 500 mL bolus regardless of vitals"],
                    correct: 2,
                    explanation: "GCS ≤13 indicates possible TBI. TBI requires SBP ≥100-110 to maintain CPP. Permissive hypotension is contraindicated in TBI."
                },
                {
                    q: "[HARD] A 32-year-old female fell and has BP 86/54, HR 112, warm dry skin on legs but cool pale skin on arms. She has decreased sensation and motor function below the nipple line. What shock type is most likely?",
                    options: ["Hypovolemic", "Neurogenic from thoracic SCI", "Cardiogenic", "Psychogenic vasovagal"],
                    correct: 1,
                    explanation: "Warm dry skin below injury level + hypotension + spinal cord deficit at T4 = neurogenic shock. Warm/dry skin is the key differentiator from hemorrhagic shock (cool/pale/clammy)."
                }
            ],

            critical: [
                {
                    id: "crit_6_3_1",
                    scenario: "A 35-year-old male was shot once in the right upper chest. Initial: BP 102/74, HR 116, RR 26, SpOâ‚‚ 95%, breath sounds clear bilaterally, no tracheal deviation, neck veins flat. Over 10 minutes, BP drops to 88/60, HR 130, confused, SpOâ‚‚ 89%. Neck veins now distended, trachea midline but right chest hyperresonant to percussion.",
                    question: "What is the most likely cause of this rapid decompensation?",
                    options: [
                        {t: "Hemorrhagic shock from internal chest bleed — increase IV fluids, give second bolus, expedite transport", f: "Incorrect. Distended neck veins + hyperresonance + hypotension from penetrating chest wound = tension pneumothorax, not just hemorrhagic shock. Fluids alone will not resolve it."},
                        {t: "Tension pneumothorax from one-way valve mechanism — immediate needle decompression (14G, 2nd ICS MCL or 4th-5th ICS MAL) needed before or during transport", f: "Correct. Penetrating chest wound + progressive hypotension + distended neck veins + tympany = tension pneumothorax. Needle decompression is life-saving."}
                    ],
                    correct: 1,
                    explanation: "Tension pneumothorax: trapped air compresses vena cava (↓ preload → hypotension), heart (↓ CO), and contralateral lung (↓ ventilation → hypoxia). Needle decompression (14G angiocath) at 2nd ICS MCL or 4th-5th ICS MAL. Rush of air confirms diagnosis.",
                    kpi: "Tension pneumothorax recognition and needle decompression"
                },
                {
                    id: "crit_6_3_2",
                    scenario: "A 58-year-old female, restrained driver in a 35 mph frontal MVC. Seat belt contusion across chest/abdomen. Initial: BP 100/68, HR 108, pale/diaphoretic, mild epigastric tenderness, GCS 15. 15 min into transport: BP 84/52, HR 126, confused, vomiting, visible abdominal distention.",
                    question: "What is the source of her decompensation and how should you adjust management?",
                    options: [
                        {t: "Seat belt contusion is soft-tissue only — vomiting is from pain; give second bolus and continue", f: "Incorrect. Seat belt sign across abdomen is a known marker for intra-abdominal injury. Progressive distention + hypotension + vomiting = abdominal hemorrhage."},
                        {t: "Suspect intra-abdominal hemorrhage from liver/spleen/mesenteric tear — give second 500 mL NS bolus (permissive hypotension, SBP 80-90), prevent hypothermia, update trauma center", f: "Correct. Seat belt sign + progressive distention + falling BP = intra-abdominal hemorrhage. Permissive hypotension unless TBI. Warm the patient, limit crystalloid to 2L."}
                    ],
                    correct: 1,
                    explanation: "Seat belt sign is a well-known marker for intra-abdominal injury — energy through the belt can lacerate liver/spleen or tear mesenteric vessels. Deterioration from compensated to decompensated shock = ongoing hemorrhage. Permissive hypotension (SBP 80-90) prevents clot disruption.",
                    kpi: "Recognition of compensated-to-decompensated shock transition"
                },
                {
                    id: "crit_6_3_3",
                    scenario: "A 26-year-old restrained passenger in a rollover MVC (3 rolls, no ejection). Complains of neck and back pain. BP 88/56, HR 100, RR 20, SpOâ‚‚ 99%. Skin is warm and dry. Thoracic spine tenderness (T4-T6). Cannot feel anything below nipples, no leg movement, minimal arm movement. Hands are warm and well-perfused.",
                    question: "How do you differentiate neurogenic from hemorrhagic shock, and what is the appropriate management?",
                    options: [
                        {t: "Hemorrhagic shock from internal bleeding — aggressive fluids, PASG/MAST if available", f: "Incorrect. Warm dry skin + relative bradycardia (HR 100 with SBP 88) + spinal cord deficit = neurogenic shock. Aggressive fluids alone may not correct neurogenic shock."},
                        {t: "Neurogenic shock from thoracic SCI — loss of sympathetic tone below T4 causes vasodilation. 500 mL NS bolus, spinal precautions, recognize possible concurrent hemorrhagic shock (MVC mechanism). ALS vasopressors may be needed", f: "Correct. Neurogenic shock: hypotension + warm/dry skin + bradycardia + SCI. But concurrent hemorrhagic shock cannot be ruled out. Cautious fluids, spinal immobilization, ALS for vasopressors."}
                    ],
                    correct: 1,
                    explanation: "Neurogenic shock: disruption of sympathetic outflow → unopposed vagal tone (bradycardia) + loss of vasoconstriction (warm/dry skin, hypotension). Key differentiators from hemorrhagic: warm/dry skin (not cool/pale), bradycardia (not tachy), wide pulse pressure (not narrow), known SCI. Manage with fluids + vasopressors. Concurrent hemorrhagic shock possible.",
                    kpi: "Neurogenic vs hemorrhagic shock differentiation"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s4 – Soft-Tissue Injuries & Wound Care
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s4",
            shortTitle: "6.4 Soft-Tissue Injuries & Wound Care",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Soft-Tissue Injuries & Wound Care</h3>

                <h4>Wound Classification</h4>
                <p>Soft-tissue injuries are classified by the condition of the overlying skin and the mechanism of injury.</p>
                <table>
                    <thead><tr><th>Type</th><th>Description</th><th>Common Causes</th><th>EMT Priority</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Closed Wound</strong></td><td>Skin intact; damage beneath surface</td><td>Blunt trauma (MVC, fall, assault)</td><td>Assess for internal bleeding, compartment syndrome, injury to underlying organs</td></tr>
                        <tr><td><strong>Contusion (Bruise)</strong></td><td>Capillary rupture → ecchymosis</td><td>Blunt impact</td><td>Ice, monitor for expanding hematoma</td></tr>
                        <tr><td><strong>Hematoma</strong></td><td>Collection of blood under skin / within tissue</td><td>Blunt trauma, anticoagulated patient</td><td>Monitor size; large hematomas can indicate significant blood loss</td></tr>
                        <tr><td><strong>Crush Injury</strong></td><td>Tissue compressed (often for prolonged period)</td><td>Building collapse, machinery</td><td>High risk of crush syndrome (rhabdomyolysis) after release</td></tr>
                        <tr><td><strong>Abrasion</strong></td><td>Superficial scraping of epidermis</td><td>Road rash, falls, friction burns</td><td>Clean, cover, prophylactic antibiotics if large</td></tr>
                        <tr><td><strong>Laceration</strong></td><td>Jagged or irregular tearing of tissue</td><td>Blunt shear forces (glass, metal)</td><td>Control bleeding, assess depth, wound care</td></tr>
                        <tr><td><strong>Incision</strong></td><td>Clean, straight cut through tissue</td><td>Knife, scalpel, sharp edge</td><td>Control bleeding, assess for foreign bodies, wound closure</td></tr>
                        <tr><td><strong>Puncture</strong></td><td>Small entry wound, deep penetration</td><td>Nail, needle, bite, stabbing</td><td>High infection risk; do NOT remove impaled objects</td></tr>
                        <tr><td><strong>Avulsion</strong></td><td>Tissue torn away or pulled off (flap or full loss)</td><td>Bites, degloving injuries, machinery</td><td>Preserve avulsed tissue (moist, cool); do NOT remove if still attached by pedicle</td></tr>
                        <tr><td><strong>Amputation</strong></td><td>Complete severing of a body part</td><td>Trauma, machinery, explosion</td><td>Control bleeding; preserve severed part (dry/cool method)</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Exam Pearl:</strong> Know the difference between <strong>abrasion</strong> (superficial, scraped skin), <strong>laceration</strong> (jagged tear), <strong>incision</strong> (clean cut), <strong>puncture</strong> (small entry, deep), <strong>avulsion</strong> (torn flap or complete loss), and <strong>amputation</strong> (complete severing).
                </div>

                <h4>Evisceration</h4>
                <p>Open abdominal wound with protrusion of abdominal organs. <strong>Management:</strong></p>
                <ol>
                    <li>DO NOT push organs back into the abdomen (risk of strangulation, perforation, infection)</li>
                    <li>Cover with sterile gauze or saline-moistened dressing (moist, sterile)</li>
                    <li>Cover with occlusive dressing (plastic wrap or foil) to keep moist</li>
                    <li>Flex patient's knees to relax abdominal muscles</li>
                    <li>Transport to trauma center</li>
                    <li>If organs are dry, moisten with sterile saline</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical Warning:</strong> Do NOT replace eviscerated organs back into the abdomen. Do NOT apply dry dressings directly (they will adhere to exposed tissue). Do NOT apply direct pressure if organs are protruding.
                </div>

                <h4>Impaled Objects</h4>
                <p><strong>Rule:</strong> Do NOT remove impaled objects unless they obstruct the airway or a sealed pressure dressing cannot be placed due to the object's position (chest).<br/>
                <strong>Management:</strong> Stabilize with bulky dressings, secure with tape. Transport. If the object is in the cheek and passes through both sides, you may remove to protect airway — document thoroughly.</p>

                <div class="highlight-box" style="background:#d4edda; border-left-color:#155724;">
                    <strong>Key Concept:</strong> Impaled objects tamponade bleeding vessels. Removing the object releases the tamponade and can cause fatal hemorrhage. Exception: object through both cheeks (may obstruct airway) — remove if necessary.
                </div>

                <h4>Amputation Care</h4>
                <p><strong>Complete Amputation:</strong> Severed part completely detached. <strong>Partial Amputation:</strong> Partially attached (do not complete the amputation).</p>
                <p><strong>Preserving the Severed Part:</strong></p>
                <ol>
                    <li>Wrap in sterile gauze <strong>moistened with sterile saline</strong></li>
                    <li>Place in a sealed plastic bag or waterproof container</li>
                    <li>Place bag in a container with <strong>ice water</strong> (NOT dry ice, NOT direct contact with ice)</li>
                    <li>Label with patient name, date/time of amputation</li>
                    <li>Transport with patient (do not delay transport to find the part)</li>
                    <li>Do <strong>not</strong> submerge directly in water or saline</li>
                </ol>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Exam Pearl:</strong> The severed part should be <strong>moist-wrapped in saline gauze, sealed in a bag, then placed in ice water</strong> (not on ice, not in dry ice). Do not allow direct ice contact — causes frostbite and cell death. Maximum preservation time: ~18-24 hours for digits, 6-12 hours for larger parts.
                </div>

                <h4>Wound Dressing Types</h4>
                <table>
                    <thead><tr><th>Type</th><th>Use</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td>Non-adherent (Telfa)</td><td>Low-exudate wounds, donor sites</td><td>Minor abrasions, clean laceration covering</td></tr>
                        <tr><td>Absorptive (ABD pads)</td><td>Moderate-heavy exudate</td><td>Moderate bleeding wounds</td></tr>
                        <tr><td>Occlusive</td><td>Moist wound healing; prevents air/water entry</td><td>Evisceration, tension PTX (ASAP), burns</td></tr>
                        <tr><td>Hydrocolloid (Comfeel, DuoDERM)</td><td>Autolytic debridement; moderate exudate</td><td>Pressure sores, shallow ulcers</td></tr>
                        <tr><td>Alginate (SeaSorb, Kaltostat)</td><td>High exudate, hemostatic</td><td>Bleeding wounds, heavy-drainage wounds</td></tr>
                        <tr><td>Foam (Mepilex, Allevyn)</td><td>Moderate exudate, cushioning</td><td>Pressure ulcers, skin tears</td></tr>
                        <tr><td>Sterile Gauze</td><td>Cleaning, packing, pressure dressing</td><td>General wound care, pressure dressings</td></tr>
                        <tr><td>Hemostatic (QuikClot, Combat Gauze)</td><td>Life-threatening hemorrhage</td><td>Severe arterial bleeding, tourniquet-inaccessible areas</td></tr>
                        <tr><td>Pressure Dressing</td><td>Control bleeding; maintain compression</td><td>Lacerations, after suture removal, overpressure bandage</td></tr>
                        <tr><td>Burn Dressing</td><td>Cool, relieve pain, prevent infection</td><td>Partial-thickness burns; never use occlusive/plastic for burns</td></tr>
                    </tbody>
                </table>

                <h4>Tetanus (Lockjaw)</h4>
                <p><strong>Clostridium tetani</strong> — toxin travels via motor nerve axons to CNS, blocks glycine/GABA release in spinal cord, causing <strong>unopposed muscle spasm</strong>.<br/>
                <strong>Risk factors:</strong> Puncture wounds, contaminated wounds (dirt, manure, saliva), tissue necrosis, delayed wound care.<br/>
                <strong>Signs:</strong> Trismus (lockjaw = masseter spasm), risus sardonicus (fixed smile), opisthotonos (back arching), autonomic instability (HTN, tachyarrythmias).<br/>
                <strong>Tdap vaccine:</strong> Every 10 years adults; wound management: if last dose >5 years and wound is high-risk → give booster. Clean minor wounds: >10 years = booster.<br/>
                <strong>EMT role:</strong> Clean wound, document vaccination history, transport for Tdap/TIG as needed.</p>

                <h4>Wound Infection Signs</h4>
                <p><strong>Early (cellulitis):</strong> Erythema, warmth, swelling, tenderness, purulent drainage.<br/>
                <strong>Late (abscess/fasciitis):</strong> Necrosis, crepitus, systemic signs (fever, ↑ WBC, malaise, tachycardia).<br/>
                <strong>Necrotizing fasciitis:</strong> Rapid spread, severe pain out of proportion to exam, bullae (fluid-filled blisters), gas in tissues, septic shock — surgical emergency.</p>

                <h4>Compartment Syndrome</h4>
                <p>Increased pressure within a closed fascial compartment → reduced capillary perfusion → muscle/nerve ischemia.<br/>
                <strong>Causes:</strong> Crush injury, prolonged compression, tight casts/splints, hemorrhage into compartment, reperfusion after ischemia.<br/>
                <strong>Signs (6 P's):</strong> Pain (disproportionate, with passive stretch), Paresthesia (tingling/numbness), Pallor, Paralysis (late), Poikilothermia (cold), Pulselessness (very late — irreversible damage).<br/>
                <strong>EMT management:</strong> Remove constrictive dressings/casts, keep limb at heart level (not elevated), expedite transport for fasciotomy.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
                    <strong>Critical NREMT Point:</strong> <strong>Pain with passive stretch</strong> is the earliest and most reliable sign of compartment syndrome. <strong>Pulselessness</strong> is a LATE sign (irreversible damage). Do not wait for pulse loss to intervene.
                </div>

                <h4>Skin Tear Care (Elderly/Thin Skin)</h4>
                <ol>
                    <li>Gently clean with saline (do not scrub)</li>
                    <li>Realign flap to original position (if present)</li>
                    <li>Cover with non-adherent dressing (Telfa)</li>
                    <li>No tape directly on fragile skin — use wrap/stockinette instead</li>
                    <li>Do not use adhesive strips on thin skin</li>
                </ol>
            </div>`,

            flashcards: [
                {
                    question: "What is the difference between a laceration, incision, and avulsion?",
                    answer: "Laceration = jagged/irregular tear. Incision = clean straight cut (knife). Avulsion = tissue torn away (flap or complete loss). All are open wounds requiring bleeding control and assessment.",
                    category: "Wound Types"
                },
                {
                    question: "How do you manage an evisceration?",
                    answer: "DO NOT replace organs. Cover with sterile saline-moistened gauze. Cover with occlusive dressing. Flex patient's knees. Transport to trauma center. Keep organs moist.",
                    category: "Evisceration"
                },
                {
                    question: "How do you properly preserve a severed amputated part?",
                    answer: "Wrap in sterile saline-moistened gauze → place in sealed plastic bag → place bag in ice water. Label with patient name and time. Do NOT use dry ice or place directly on ice. Transport with patient.",
                    category: "Amputation"
                },
                {
                    question: "When can you remove an impaled object?",
                    answer: "Exceptionally: if it obstructs the airway OR if in the cheek and prevents a pressure dressing. Otherwise NEVER remove — it tamponades bleeding. Stabilize with bulky dressings and transport.",
                    category: "Impaled Objects"
                },
                {
                    question: "What are the 6 P's of compartment syndrome?",
                    answer: "Pain (with passive stretch — earliest sign), Paresthesia, Pallor, Paralysis, Poikilothermia (cold), Pulselessness (very late — irreversible damage).",
                    category: "Compartment Syndrome"
                },
                {
                    question: "What is tetanus and what wound types increase risk?",
                    answer: "Caused by Clostridium tetani toxin → unopposed muscle spasm (trismus/lockjaw, risus sardonicus, opisthotonos). High-risk wounds: puncture, contaminated (dirt/manure/saliva), necrotic tissue, delayed care.",
                    category: "Tetanus"
                },
                {
                    question: "What is the Tdap booster schedule for wound management?",
                    answer: "Clean minor wounds: booster if >10 years since last tetanus shot. High-risk wounds: booster if >5 years. If incomplete or unknown series: give Tdap + tetanus immune globulin (TIG).",
                    category: "Tetanus Vaccine"
                },
                {
                    question: "Describe crush syndrome (rhabdomyolysis) after prolonged entrapment. What is the main risk?",
                    answer: "Muscle damage → release of myoglobin, K+, phosphate, uric acid into circulation after extrication. Main risk: acute kidney injury (AKI) from myoglobin nephrotoxicity. Treatment: aggressive IV fluids, sodium bicarbonate (alkalinizes urine), mannitol.",
                    category: "Crush Syndrome"
                }
            ],

            quiz: [
                {
                    q: "A patient has a 3 cm jagged wound on the forearm from broken glass with pink muscle visible. What type of wound is this?",
                    options: ["Incision", "Abrasion", "Laceration", "Puncture"],
                    correct: 2,
                    explanation: "Laceration = jagged/irregular tearing of tissue with depth. Glass creates lacerations (jagged). Knives create incisions (clean cuts)."
                },
                {
                    q: "A nurse tells you a patient with a crush injury has 'pain out of proportion' and pain with passive stretch of the fingers. What do you suspect?",
                    options: ["Simple contusion — apply ice and elevate", "Nerve damage — assess sensation and motor", "Compartment syndrome — remove tight dressings, expedite transport for fasciotomy", "Bone fracture — splint and transport"],
                    correct: 2,
                    explanation: "Pain out of proportion + pain with passive stretch = earliest signs of compartment syndrome. This is a surgical emergency requiring fasciotomy. Pulselessness is a LATE sign."
                },
                {
                    q: "[HARD] A 22-year-old patient has a complete finger amputation from a table saw. The severed digit was found on the shop floor. How should you preserve it?",
                    options: ["Place directly in ice water for transport", "Wrap in dry gauze and place in a plastic bag on ice", "Wrap in saline-moistened gauze, place in sealed bag, then in ice water", "Submerge in sterile saline and keep cool"],
                    correct: 2,
                    explanation: "Moist-saline-gauze → sealed bag → ice water (NOT direct ice). Direct ice causes frostbite. Submersion in saline causes maceration. Dry gauze causes desiccation."
                }
            ],

            critical: [
                {
                    id: "crit_6_4_1",
                    scenario: "A 45-year-old construction worker has a 24-inch piece of rebar impaled through his left lower lateral abdomen, protruding 12 inches anteriorly. He is supine, BP 98/64, HR 118, pale and diaphoretic. The rebar is still embedded in concrete debris and cannot be cut at the scene.",
                    question: "What is the best approach for managing this impaled object?",
                    options: [
                        {t: "Remove the rebar to reduce the weight for transport, then apply a pressure dressing. The patient will need surgery anyway", f: "Incorrect. Removing the rebar will release tamponade of injured abdominal vessels → massive hemorrhage. Never remove impaled objects."},
                        {t: "Stabilize the rebar with bulky dressings on both sides, secure with tape/cravats, minimize movement during transport. Cut the concrete debris around it without disturbing the penetration angle. Transport to trauma center", f: "Correct. Impaled objects tamponade bleeding vessels. Removing them = fatal hemorrhage. Stabilize in place: bulky dressings or a cut cup/cone on each side, tape everything securely, transport supine with knees flexed."}
                    ],
                    correct: 1,
                    explanation: "Impaled objects act as a tamponade against injured vessels. Removing the object releases this pressure → massive hemorrhage. Stabilization with bulky dressings prevents further movement and tissue damage. Never remove impaled objects (with rare airway/cheek exceptions).",
                    kpi: "Impaled object management — never remove unless airway obstruction"
                },
                {
                    id: "crit_6_4_2",
                    scenario: "A 60-year-old male diabetic with a foot wound caught in a farming auger 2 hours ago. The wound is contaminated with soil. BP 148/90, HR 96, GCS 15. He cannot recall his last tetanus shot. The crew asks you about tetanus risk and prophylaxis.",
                    question: "What is the appropriate approach to tetanus management?",
                    options: [
                        {t: "Clean wound with saline, apply dry sterile dressing, transport. Tetanus is a hospital concern, not prehospital", f: "Incorrect. Tetanus is a life-threatening emergency (50% mortality in elderly). The wound is high-risk (contaminated, diabetic foot, delayed care). The EMT should document the wound as high-risk and advise the hospital about vaccination urgency."},
                        {t: "Clean wound thoroughly, cover with sterile dressing, document wound as high-risk (contaminated + diabetic + delay), advise transport staff of Tdap urgency. Since >5 years since last booster (unknown), this patient needs Tdap booster in the ED. Document vaccination history carefully. Monitor for trismus/opisthotonos en route", f: "Correct. High-risk wound + unknown vaccination status = Tdap + TIG. Prehospital: clean/document, note high-risk features, expedite transport. Do not delay transport for vaccine administration — that is an ED function."}
                    ],
                    correct: 1,
                    explanation: "Tetanus prophylaxis: high-risk wounds (contaminated, puncture, crush, delayed >6h, devitalized tissue) require Tdap booster if last dose >5 years ago or unknown. Patient with uncertain history + contaminated wound = indicated. Prehospital role: clean, document, transport; vaccination is an ED/medical responsibility but documenting risk factors is critical.",
                    kpi: "Tetanus risk assessment and wound management"
                },
                {
                    id: "crit_6_4_3",
                    scenario: "A 35-year-old motorcyclist with a large degloving avulsion of the lower right leg from the knee down. An 8×10 cm skin flap is hanging by a pedicle. There is active bleeding, exposed muscle, and significant contamination. BP 88/60, HR 130, RR 28.",
                    question: "What is the correct management of this avulsion?",
                    options: [
                        {t: "Cut off the hanging skin flap (it will not survive anyway), apply a tourniquet above the knee, transport", f: "Incorrect. Do NOT complete a partial avulsion. The pedicle may contain vital blood supply — that flap may survive. Tourniquet is too proximal for a below-knee wound; direct pressure or pressure dressing is preferred."},
                        {t: "Control bleeding with gentle direct pressure and pressure dressing (not on the pedicle), gently replace the flap in anatomical position, cover with sterile saline-moistened dressing, wrap with soft bandage, elevate lower leg (if no fracture), treat for shock, transport to trauma center", f: "Correct. Partial avulsion with pedicle: do not sever. Replace flap gently, moisten, cover. Control hemorrhage with pressure dressing. Treat shock. Trauma center for surgical debridement and reconstruction."}
                    ],
                    correct: 1,
                    explanation: "Partial avulsion with viable pedicle: the flap may survive. Gently realign, keep moist, cover. Do not complete the amputation. Tourniquet is reserved for massive hemorrhage not controlled by pressure. Multisystem trauma — treat for shock and transport to trauma center for surgical wound care.",
                    kpi: "Avulsion management — preserve pedicled flaps"
                }
            ]
        },
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
            },
        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s9 – Abdominal & Pelvic Trauma
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s9",
            shortTitle: "6.9 Abdominal & Pelvic Trauma",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Abdominal & Pelvic Trauma</h3>

                <p>Abdominal trauma is a high-risk injury pattern because bleeding and organ damage can be concealed within the abdominal cavity — the EMT cannot "see" inside. The abdominal examination in trauma is notoriously unreliable; therefore, the EMT must maintain a <strong>high index of suspicion based on the mechanism of injury (MOI)</strong> rather than relying solely on physical findings. Abdominal injuries are classified by mechanism (blunt vs. penetrating) and by the organs involved (solid vs. hollow).</p>

                <h4>Solid Organ vs. Hollow Organ Injury — A Critical Distinction</h4>
                <p>The abdominal organs are divided into two categories, each with a distinct injury pattern, pathophysiology, and clinical presentation:</p>
                <table>
                    <thead>
                        <tr><th>Feature</th><th>Solid Organs</th><th>Hollow Organs</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Examples</strong></td><td>Liver, spleen, kidneys, pancreas</td><td>Stomach, small bowel, colon, gallbladder, urinary bladder</td></tr>
                        <tr><td><strong>Primary injury</strong></td><td>Laceration (tear) → haemorrhage (bleeding)</td><td>Rupture or perforation → spillage of contents → peritonitis</td></tr>
                        <tr><td><strong>Primary threat</strong></td><td>Haemorrhagic shock from blood loss — can be rapid and massive</td><td>Chemical peritonitis (initially) followed by bacterial peritonitis — develops over hours</td></tr>
                        <tr><td><strong>Time course</strong></td><td>Signs of shock develop within minutes to hours (depending on the vessel injured)</td><td>Signs of peritonitis develop over hours (perforation leads to gradual spillage; gastric ruptures are faster due to acidity)</td></tr>
                        <tr><td><strong>Key findings</strong></td><td>Distended, rigid abdomen; signs of shock; Kehr's sign (spleen); Grey Turner sign (retroperitoneal); Cullen's sign (intra-abdominal bleed)</td><td>Board-like rigidity; rebound tenderness; guarding; absent bowel sounds; referred pain; eventually fever and sepsis</td></tr>
                    </tbody>
                </table>

                <h4>Specific Solid Organ Injuries</h4>

                <h5>Liver — The Most Commonly Injured Solid Organ</h5>
                <p>The liver is the largest solid organ in the abdomen and the <strong>most commonly injured solid organ in blunt abdominal trauma</strong>. It is located in the right upper quadrant (RUQ), partially protected by the lower rib cage. The liver is highly vascular (receives ~25% of cardiac output), so lacerations can cause rapid, massive haemorrhage. A patient with a significant liver laceration may present with RUQ tenderness, abdominal distension, and signs of hypovolaemic shock. Because the liver has a dual blood supply (hepatic artery + portal vein), bleeding can be difficult to control without surgical intervention. The liver also synthesises clotting factors — severe liver injury can exacerbate coagulopathy.</p>

                <h5>Spleen — Vascular and Fragile</h5>
                <p>The spleen is the most commonly injured organ in blunt abdominal trauma after the liver. It sits in the left upper quadrant (LUQ) and is highly vascular and fragile. Even a seemingly minor blow to the left upper quadrant — especially in the presence of rib fractures — can cause splenic laceration or rupture. The spleen can bleed profusely into the peritoneal cavity without immediate signs other than LUQ tenderness. <strong>Kehr's sign</strong> is referred pain to the left shoulder caused by blood irritating the diaphragm (phrenic nerve irritation). Kehr's sign is highly suggestive of splenic injury but is present in only a minority of cases — its absence does NOT rule out splenic injury. Splenic injuries are graded I–V, with higher grades requiring splenectomy (surgical removal). The spleen also plays an important role in immune function; splenectomised patients are at increased risk for encapsulated bacterial infections (e.g., pneumococcus, meningococcus).</p>

                <h5>Kidneys</h5>
                <p>The kidneys are retroperitoneal organs (behind the peritoneum), located in the flanks. They are well-protected by the back muscles and lower rib cage, but significant blunt force (flank strike, fall onto the back, motor vehicle collision) can cause renal contusion, laceration, or avulsion (tearing of the renal pedicle). The classic presentation is <strong>flank pain, ecchymosis (flank bruising), and haematuria (blood in the urine)</strong>. In penetrating trauma (especially back or flank wounds), the kidneys are at risk. Significant renal lacerations can cause retroperitoneal haemorrhage — blood loss into the retroperitoneal space can be substantial and is often concealed because the peritoneum does not distend.</p>

                <h5>Pancreas</h5>
                <p>The pancreas is a retroperitoneal organ lying across the upper abdomen. It is relatively protected by its position, but it can be injured in high-energy blunt trauma (e.g., steering wheel impact, bicycle handlebar injury in children). Pancreatic injury is particularly dangerous because: 1) The pancreas contains digestive enzymes that, when released, digest surrounding tissues (autodigestion), 2) Pancreatic injury is difficult to detect — pain may be vague and delayed for 6–24 hours, 3) Diagnosis requires CT scan, and 4) Complications include pancreatitis, pseudocyst formation, and fistula. The EMT should suspect pancreatic injury in any patient with upper abdominal pain after a high-energy blunt mechanism, especially with epigastric tenderness and bruising.</p>

                <h5>Bowel (Hollow Viscus Injury)</h5>
                <p>Bowel perforation from blunt trauma typically results from a sudden rise in intraluminal pressure (like bursting a balloon) or a shearing injury at points of fixation (e.g., the duodenum at the ligament of Treitz, the jejunum near the ileocaecal valve). The small bowel is the most commonly injured hollow organ in both blunt and penetrating trauma. Initially, bowel contents (which are relatively sterile in the small bowel) leak into the peritoneal cavity, causing chemical peritonitis. Over hours, bacterial contamination leads to bacterial peritonitis, sepsis, and septic shock. The abdominal exam may initially be unremarkable — this is why <strong>serial abdominal exams</strong> (reassessment every 5–15 minutes) are critical in trauma patients with a significant MOI. Classic signs of peritonitis include: board-like rigidity (the abdomen feels as hard as a board), guarding (voluntary or involuntary), rebound tenderness (pain when the examiner's hand is released rapidly), referred pain (pain at the umbilicus or shoulder from diaphragmatic irritation), and absent bowel sounds.</p>

                <h5>Diaphragm Rupture</h5>
                <p>Diaphragm rupture occurs when a sudden increase in intra-abdominal pressure (blunt trauma) or a penetrating injury (stab or gunshot) tears the diaphragm — the muscle separating the thoracic and abdominal cavities. Blunt diaphragm rupture is more common on the <strong>left side</strong> because the liver protects the right side. The negative intrathoracic pressure during inspiration can pull abdominal organs (most commonly the stomach, omentum, colon, or small bowel) into the chest cavity — this is called <strong>herniation</strong>. This can cause: 1) Respiratory compromise (the herniated organs compress the lung), 2) Bowel obstruction or strangulation, and 3) A confusing clinical picture (breath sounds may be absent on the affected side — mimicking a pneumothorax). Suspect diaphragm rupture in any patient with: blunt torso trauma plus respiratory distress, penetrating trauma to the lower chest or upper abdomen, or auscultation of bowel sounds in the chest (rare but pathognomonic).</p>

                <h4>Abdominal Assessment in Trauma</h4>
                <p>The EMT's abdominal assessment follows the sequence: <strong>Inspect → Auscultate → Palpate</strong>. Auscultating before palpation is important because palpation can change bowel sounds. The steps of the abdominal assessment:</p>
                <table>
                    <thead>
                        <tr><th>Step</th><th>What to Look For</th><th>Clinical Significance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Inspect</strong></td><td>Distension, bruising, abrasions, seat belt sign, penetrating wounds, evisceration</td><td>Seat belt sign (ecchymosis across the abdomen) indicates high risk of intra-abdominal injury. Distension suggests haemorrhage or ileus.</td></tr>
                        <tr><td><strong>Auscultate</strong></td><td>Bowel sounds (present, absent, hyperactive)</td><td>Absent bowel sounds suggest peritonitis, ileus, or ischaemia. Hyperactive sounds suggest early obstruction or gastroenteritis.</td></tr>
                        <tr><td><strong>Palpate</strong></td><td>Tenderness, guarding, rigidity, rebound tenderness</td><td>Gentle palpation in all four quadrants. Palpate the painful area LAST. Rigidity + tenderness + guarding = peritonitis until proven otherwise.</td></tr>
                    </tbody>
                </table>

                <h4>Classic Signs of Specific Injuries</h4>
                <table>
                    <thead>
                        <tr><th>Sign</th><th>Description</th><th>Suggests</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Kehr's sign</strong></td><td>Left shoulder pain when lying supine (referred pain from phrenic nerve irritation by blood)</td><td>Splenic injury / rupture</td></tr>
                        <tr><td><strong>Cullen's sign</strong></td><td>Periumbilical ecchymosis (bruising around the belly button)</td><td>Intra-abdominal haemorrhage (pancreatitis, ruptured ectopic, liver injury) — usually a LATE sign</td></tr>
                        <tr><td><strong>Grey Turner sign</strong></td><td>Flank ecchymosis (bruising on the sides of the abdomen)</td><td>Retroperitoneal haemorrhage (pancreatic injury, ruptured kidney, ruptured AAA) — also a LATE sign</td></tr>
                        <tr><td><strong>Seat belt sign</strong></td><td>Linear ecchymosis across the abdomen or chest from the seat belt</td><td>High risk of intra-abdominal injury (bowel perforation, liver/spleen laceration) and lumbar spine fractures (Chance fracture)</td></tr>
                        <tr><td><strong>Ballance's sign</strong></td><td>Dullness to percussion in the left flank with a palpable mass; shifting dullness</td><td>Splenic rupture with surrounding haematoma</td></tr>
                    </tbody>
                </table>

                <h4>Penetrating Abdominal Trauma</h4>
                <p>Penetrating trauma (stabbings, gunshot wounds, impalements) creates a wound track from the skin into the abdominal cavity. The management differs by location and wound characteristics:</p>
                <ul>
                    <li><strong>Anterior abdominal wounds:</strong> Bounded by the costal margins (top), the inguinal ligaments/groin (bottom), and the anterior axillary lines (sides). Any penetrating wound in this area can enter the peritoneal cavity and injure any abdominal organ. A stab wound to the anterior abdomen may or may not penetrate the peritoneum — but the EMT must assume it does until proven otherwise.</li>
                    <li><strong>Flank wounds:</strong> The flank lies between the anterior and posterior axillary lines. Wounds here can penetrate the retroperitoneum (kidneys, ureters, pancreas, duodenum, colon). Flank wounds are challenging to assess because retroperitoneal injuries can be clinically silent for hours.</li>
                    <li><strong>Back wounds:</strong> Penetrating wounds to the back can injure the kidneys, spine, spinal cord, and the posterior portions of the colon and diaphragm. Always check the back in penetrating trauma — exit wounds are commonly missed.</li>
                    <li><strong>Thoracoabdominal wounds:</strong> Penetrating wounds at or below the nipple line (anteriorly) or the tip of the scapula (posteriorly) can injure both thoracic and abdominal organs. The diaphragm rises to the level of the nipple during expiration — a wound at this level can enter the abdomen.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Wound Location:</strong> A stab wound to the lower left chest can injure the spleen, stomach, colon, diaphragm, and possibly the left kidney. Never assume that a wound's entry point limits the injury to a single organ. The wound track is unpredictable — especially with gunshot wounds where bullet path can change direction when hitting bone or dense tissue.
                </div>

                <h5>Evisceration — A Surgical Emergency</h5>
                <p><strong>Evisceration</strong> occurs when abdominal organs (typically loops of bowel) protrude through an open wound in the abdominal wall. This is a surgical emergency. The EMT's management is simple and specific:</p>
                <ul>
                    <li><strong>DO NOT attempt to replace (push back) the organs</strong> — this increases the risk of infection and can cause further injury to the bowel</li>
                    <li><strong>Cover the organs with a moist, sterile dressing</strong> — use sterile gauze soaked in normal saline (or sterile water if NS is unavailable). The moisture prevents the organs from drying out, which can cause tissue death (necrosis)</li>
                    <li><strong>Cover the moist dressing with an occlusive dressing</strong> (e.g., plastic wrap, foil, or a self-adhesive dressing) to retain moisture and maintain temperature</li>
                    <li><strong>Do not apply direct pressure</strong> to the protruding organs — this can compromise their blood supply</li>
                    <li><strong>Flex the patient's knees</strong> (if no spinal injury suspected) to reduce abdominal tension and make the patient more comfortable</li>
                    <li><strong>Transport immediately</strong> — the patient requires emergency surgery</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Evisceration Do NOTs:</strong> NEVER push organs back into the abdominal cavity. NEVER apply dry dressings directly to the organs (they will stick and cause further injury when removed). NEVER apply direct pressure to the protruding organs. The goal is to keep the organs moist, warm, and protected until a surgeon can address the injury.
                </div>

                <h4>Pelvic Fractures — High Mortality Injury</h4>
                <p>Pelvic fractures carry a <strong>high mortality rate (10–20%)</strong> due to massive haemorrhage. The pelvis is a ring-shaped structure containing major vascular structures (the iliac arteries and veins, the presacral venous plexus). When the pelvic ring is disrupted (especially in "open book" or vertical shear fractures), these vessels can tear, causing life-threatening bleeding into the <strong>retroperitoneal space</strong>. The retroperitoneum can hold <strong>2–3 litres of blood</strong> before tamponade occurs — enough to cause fatal haemorrhagic shock. Suspect a pelvic fracture in any patient with:</p>
                <ul>
                    <li><strong>Mechanism:</strong> High-energy blunt trauma — motor vehicle collision (especially ped vs. auto), fall from height, crush injury, motorcycle crash</li>
                    <li><strong>Pain:</strong> Pelvic, hip, groin, or lower back pain; inability to bear weight or move the legs</li>
                    <li><strong>Physical findings:</strong> Bruising over the pelvis, iliac crests, perineum, or proximal thighs; leg length discrepancy; rotational deformity of the leg (external rotation suggests disruption of the pelvic ring); crepitus or instability on gentle compression</li>
                    <li><strong>GU findings:</strong> Blood at the urethral meatus, scrotal/perineal ecchymosis, high-riding prostate (in males) — these suggest urethral injury often associated with pelvic fractures</li>
                </ul>

                <h5>Pelvic Binder Application</h5>
                <p>If a pelvic fracture is suspected, apply a <strong>pelvic binder</strong> (or improvised sheet) around the pelvis at the level of the greater trochanters. The pelvic binder:</p>
                <ul>
                    <li><strong>Reduces pelvic volume</strong> by bringing the disrupted pelvic ring back together, which <strong>may tamponade (compress) the bleeding vessels</strong></li>
                    <li><strong>Stabilises the fracture</strong>, reducing pain and preventing further injury during transport</li>
                    <li><strong>Is applied BEFORE log-rolling or moving the patient</strong> — the binder stabilises the pelvic ring and reduces the risk of additional vascular injury during movement</li>
                    <li><strong>Should NOT be positioned over the iliac crests</strong> — it must be centred over the greater trochanters (the widest part of the pelvis) to provide effective compression</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning — Log-Rolling:</strong> If you suspect a pelvic fracture based on MOI, pain, or physical findings, <strong>DO NOT repeatedly log-roll the patient</strong>. Each log roll can disrupt pelvic clots and worsen haemorrhage. If you must roll the patient (for back assessment or to place on a long board), use a scoop stretcher or a multi-person lift instead. Once the pelvic binder is applied, the goal is to move the patient as little as possible.
                </div>

                <h4>Pregnancy and Abdominal Trauma</h4>
                <p>Trauma in pregnancy presents unique challenges because the EMT is managing <strong>two patients</strong> — the mother and the foetus. The mother's physiology changes throughout pregnancy, affecting the assessment and management of trauma:</p>
                <ul>
                    <li><strong>First and second trimester:</strong> The uterus is protected by the bony pelvis and is relatively small. The foetus is well-cushioned by amniotic fluid. Abdominal trauma in early pregnancy often does not directly injure the foetus, but maternal shock (hypoperfusion) can harm foetal oxygenation.</li>
                    <li><strong>Third trimester:</strong> The uterus rises out of the pelvis and becomes an abdominal organ. It is now vulnerable to direct blunt or penetrating trauma. The foetus is less protected and more vulnerable to injury. The uterus also compresses the maternal vena cava when the mother lies supine — causing <strong>supine hypotensive syndrome</strong>.</li>
                    <li><strong>Placental abruption:</strong> The most common cause of foetal death after trauma. The placenta separates from the uterine wall, disrupting oxygen and nutrient delivery to the foetus. Signs include vaginal bleeding (may be concealed), abdominal pain, uterine tenderness or rigidity, and foetal distress (bradycardia). Abruption can occur with relatively minor trauma — <strong>any pregnant patient with a significant MOI should be evaluated for placental abruption</strong>.</li>
                    <li><strong>Uterine rupture:</strong> A rare but catastrophic injury — the uterus tears, expelling the foetus into the abdominal cavity. Both mother and foetus will die without immediate surgical intervention. Signs include severe abdominal pain, loss of uterine contour, easily palpable foetal parts, and maternal shock out of proportion to apparent injury.</li>
                    <li><strong>Foetal assessment:</strong> The EMT should assess foetal heart tones (if a Doppler is available and within scope), the presence and frequency of contractions, vaginal bleeding, and the mother's perception of foetal movement. Report all findings to the receiving hospital.</li>
                </ul>

                <h5>Supine Hypotensive Syndrome</h5>
                <p>After approximately 20 weeks of gestation, the gravid uterus can compress the inferior vena cava when the mother lies supine, reducing venous return to the heart by up to 30%. This causes <strong>supine hypotensive syndrome</strong> — characterised by hypotension, pallor, dizziness, nausea, and tachycardia that resolves when the mother is repositioned. In a trauma setting, this can be confused with haemorrhagic shock. The management is:</p>
                <ul>
                    <li><strong>Left uterine displacement:</strong> Place the patient supine and manually displace the uterus to the left (either by placing a wedge under the right hip or by manually pushing the uterus to the left). This relieves IVC compression and restores venous return.</li>
                    <li><strong>Alternatively:</strong> Place the patient in a left lateral recumbent position if spinal injury is not suspected.</li>
                    <li><strong>If spinal motion restriction is needed:</strong> Place a wedge (rolled blanket, pillow, or commercial device) under the right hip, tilting the patient 15–30° to the left while maintaining spinal alignment.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> Abdominal assessment in trauma is <strong>notoriously unreliable</strong> — maintain high suspicion based on MOI, not physical findings alone. A patient with a significant mechanism (e.g., high-speed MVC, fall >15 feet) who has a non-tender abdomen may still have life-threatening intra-abdominal injuries. Serial exams (reassessment every 5 minutes) are essential. Pelvic binding for suspected pelvic fracture reduces pelvic volume and <strong>may tamponade</strong> (compress) bleeding vessels — apply early, apply correctly (at the greater trochanters, not the iliac crests).
                </div>
            </div>`,
            flashcards: [
                { question: "What is the difference between solid organ injury and hollow organ injury in abdominal trauma?", answer: "Solid organs (liver, spleen, kidney, pancreas) → laceration → haemorrhage (shock). Hollow organs (bowel, stomach, bladder) → rupture/perforation → spillage of contents → peritonitis (develops over hours).", category: "Abdominal Injury Patterns" },
                { question: "What is Kehr's sign and what does it indicate?", answer: "Left shoulder pain (referred) when lying supine, caused by blood irritating the phrenic nerve under the diaphragm. Highly suggestive of splenic injury.", category: "Abdominal Assessment" },
                { question: "How should an EMT manage an evisceration (protruding abdominal organs)?", answer: "DO NOT replace organs. Cover with a moist sterile dressing (NS-soaked gauze), then cover with an occlusive dressing to retain moisture. Transport immediately for emergency surgery.", category: "Penetrating Abdominal Trauma" },
                { question: "Why are pelvic fractures high-mortality injuries?", answer: "The pelvis contains major vascular structures. Disruption can cause massive haemorrhage into the retroperitoneal space, which can hold 2–3 litres of blood before tamponade occurs.", category: "Pelvic Trauma" },
                { question: "What is the correct position for the pelvic binder?", answer: "Centred over the greater trochanters (the widest part of the pelvis), NOT over the iliac crests. It reduces pelvic volume and may tamponade bleeding.", category: "Pelvic Trauma" },
                { question: "What is supine hypotensive syndrome and how is it managed in a pregnant trauma patient?", answer: "After ~20 weeks, the gravid uterus compresses the IVC when supine, reducing venous return. Manage with left uterine displacement (wedge under right hip or manual displacement of uterus to the left).", category: "Trauma in Pregnancy" },
                { question: "What is the most common cause of foetal death after trauma in pregnancy?", answer: "Placental abruption — the placenta separates from the uterine wall, disrupting foetal oxygenation. Can occur with relatively minor trauma.", category: "Trauma in Pregnancy" },
                { question: "Why should log-rolling be avoided in patients with suspected pelvic fractures?", answer: "Each log roll can disrupt pelvic clots and worsen haemorrhage. Use a scoop stretcher or multi-person lift instead. Apply pelvic binder before moving the patient.", category: "Pelvic Trauma" }
            ],
            quiz: [
                {
                    q: "A 34-year-old male was involved in a high-speed motor vehicle collision. He has a seat belt sign across his abdomen and complains of diffuse abdominal pain. His BP is 96/60, HR 124, and he is diaphoretic and confused. The abdomen is distended but not rigid. What is the MOST likely injury pattern?",
                    options: [
                        "Isolated abdominal wall contusion — the seat belt caused bruising but internal organs are likely intact given the absence of rigidity",
                        "Solid organ injury (likely liver or spleen laceration) causing intra-abdominal haemorrhage — the distension, tachycardia, and hypotension with a seat belt sign are highly concerning for internal bleeding",
                        "Hollow organ perforation with early peritonitis — rigidity will develop soon",
                        "Pelvic fracture causing retroperitoneal bleeding — the distension is from blood in the retroperitoneal space"
                    ],
                    correct: 1,
                    explanation: "This patient has a classic presentation of intra-abdominal haemorrhage from solid organ injury: tachycardia, hypotension, abdominal distension, and altered mental status (cerebral hypoperfusion). The seat belt sign is a red flag for intra-abdominal injury. Rigidity may not be present with bleeding alone (it is more associated with peritonitis from hollow organ perforation). This patient needs rapid transport to a trauma centre with a trauma alert."
                },
                {
                    q: "A 22-year-old male is stabbed in the left lower chest at the anterior axillary line. He has absent breath sounds on the left and is hypotensive. What injuries should the EMT suspect?",
                    options: [
                        "The wound is in the chest — the EMT should consider only a pneumothorax or haemothorax",
                        "The wound is thoracoabdominal — it can injure the lung, diaphragm, spleen, stomach, colon, and left kidney. Assume both chest and abdominal injuries until proven otherwise",
                        "The wound only injured the diaphragm because the rib cage protects the abdominal organs",
                        "The wound is above the abdomen, so no abdominal organs are at risk"
                    ],
                    correct: 1,
                    explanation: "A wound at or below the nipple line (anteriorly) or the tip of the scapula (posteriorly) is a thoracoabdominal wound — it can injure both thoracic AND abdominal organs. The diaphragm rises to the level of the nipple during expiration. This patient may have a haemopneumothorax (absent breath sounds, hypotension) AND abdominal injuries (spleen, stomach, colon). Management: manage the chest injury (occlusive dressing, needle decompression per protocol) and transport for surgical evaluation of both cavities."
                },
                {
                    q: "[HARD] A 28-year-old pregnant female at 32 weeks gestation is involved in a minor rear-end collision at low speed. She has no visible injuries and normal vital signs. Her abdomen is non-tender. Foetal heart tones are 140 bpm. She reports no vaginal bleeding, contractions, or loss of fluid. Which of the following is the MOST appropriate management?",
                    options: [
                        "The patient is low risk and can be discharged at the scene — she has no tenderness, normal vitals, and no vaginal bleeding",
                        "Transport to hospital for evaluation — placental abruption can occur with relatively minor trauma in the third trimester, and foetal assessment (ultrasound, monitoring) is indicated even with a benign presentation",
                        "Reassess in 15 minutes and transport only if symptoms develop",
                        "Transport to hospital only if she develops abdominal pain or vaginal bleeding en route"
                    ],
                    correct: 1,
                    explanation: "Pregnant patients >20 weeks gestation who are involved in ANY trauma — even minor — should be transported for evaluation. Placental abruption can occur with minor mechanisms, and the initial presentation can be deceptive (no pain, no bleeding). Foetal heart tones of 140 bpm are normal, but this does not rule out abruption. The foetus cannot be definitively assessed in the field. Transport for ultrasound and foetal monitoring (typically 4–6 hours of observation). Err on the side of transporting pregnant trauma patients."
                },
                {
                    q: "A 45-year-old male was crushed between a forklift and a wall. He has severe pelvic pain, blood at the urethral meatus, and a deformed pelvis. Vital signs: HR 132, BP 78/50, RR 28. What is the priority intervention?",
                    options: [
                        "Insert a urinary catheter to assess for urethral injury",
                        "Apply a pelvic binder centred over the greater trochanters, administer high-flow oxygen, start fluid resuscitation (permissive hypotension), and transport immediately to a trauma centre",
                        "Log-roll the patient to assess the back for additional injuries",
                        "Apply a traction splint to stabilise the suspected pelvic fracture"
                    ],
                    correct: 1,
                    explanation: "This patient has a severe pelvic fracture with haemorrhagic shock. The priority is pelvic binding to reduce volume and tamponade bleeding. Do NOT insert a urinary catheter (blood at the meatus suggests urethral injury — catheterisation can complete a partial tear). Do NOT log-roll. Do NOT apply a traction splint (contraindicated in pelvic fracture). Manage ABCs, apply binder, fluid resuscitate per protocol (permissive hypotension — target SBP ~80–90), and transport to a trauma centre. Notify the receiving hospital of the pelvic fracture and haemodynamic instability."
                }
            ],
            critical: [
                {
                    id: "crit_6_9_1",
                    scenario: "You are called to a construction site where a 40-year-old male fell approximately 15 feet, landing on a protruding piece of rebar that entered his right lower abdomen. The rebar is still impaled, with approximately 6 inches of metal visible outside the abdomen. There is moderate bleeding around the penetration site. The patient is awake, anxious, and in severe pain. Vital signs: HR 124, BP 106/68, RR 24, SpO₂ 96%. The construction foreman is asking if you should 'pull the bar out.'",
                    question: "What is the appropriate management of this impaled object and how should the EMT manage this patient's abdominal injury?",
                    options: [
                        {t: "Secure the rebar in place with bulky dressings to prevent movement — do NOT remove it. Apply high-flow oxygen, establish IV access, start fluid resuscitation for signs of shock, cover the wound around the rebar with sterile dressings, and transport immediately to a trauma centre", f: "Correct — Impaled objects are NEVER removed in the prehospital setting (unless they obstruct the airway or interfere with CPR). The rebar is likely tamponading (plugging) bleeding vessels — removing it could cause exsanguination. The management: 1) Manually stabilise the rebar, 2) Secure it in place with bulky dressings, 3) Do not attempt to cut the rebar unless it prevents transport, 4) Cover the wound site with sterile dressings, 5) Administer high-flow oxygen, 6) IV access and fluids as indicated, 7) Transport to a trauma centre. The patient is showing early signs of shock (tachycardia, borderline BP, anxiety)."},
                        {t: "Remove the rebar immediately — the bleeding needs to be controlled and the wound needs direct pressure. Removing the object allows you to apply a pressure dressing to the wound", f: "Incorrect — Removing an impaled object can cause torrential haemorrhage from vessels that are currently compressed by the object itself. This is especially true in the abdomen where major vessels (aorta, IVC, iliac vessels) may be involved. The impaled object should be left in place, stabilised, and the patient transported for surgical removal in a controlled operative setting."}
                    ],
                    correct: 0,
                    explanation: "The management of impaled objects in the abdomen is straightforward: stabilise, do NOT remove, and transport. The rebar may be tamponading bleeding from the iliac vessels or other retroperitoneal structures. The patient is already showing signs of early shock (tachycardia, anxiety). Management priorities: 1) Manually stabilise the rebar to prevent movement during transport, 2) Secure with bulky dressings/tape, 3) Cover the wound site with sterile gauze (do not pack around the rebar — this could push it deeper), 4) Administer high-flow oxygen, 5) IV access and fluid resuscitation per protocol (permissive hypotension), 6) Rapid transport to a Level I trauma centre, 7) Notify the receiving hospital of the impaled object and mechanism so a trauma surgeon is ready. Monitor for signs of worsening haemorrhage en route.",
                    kpi: "Appropriately manages impaled object in abdominal trauma — does NOT remove"
                },
                {
                    id: "crit_6_9_2",
                    scenario: "You respond to a motor vehicle collision involving a 35-year-old female who was the unrestrained driver in a head-on collision at approximately 50 mph. The steering wheel is deformed. She is complaining of severe lower abdominal and pelvic pain. Her vital signs: HR 118, BP 102/72, RR 22, SpO₂ 96%. Visual inspection reveals a seat belt sign across the lower abdomen and ecchymosis over the left flank. Her left leg is shortened and externally rotated. She has not yet been moved from the vehicle. Fire/rescue is extricating the vehicle.",
                    question: "What injuries should the EMT suspect and in what order should assessment and interventions be performed?",
                    options: [
                        {t: "Suspect pelvic fracture, left femur fracture or hip dislocation, and possible intra-abdominal solid organ injury. Before moving the patient: apply a cervical collar, apply a pelvic binder (at the greater trochanters), apply a traction splint to the left leg, then coordinate with fire/rescue for extrication using a scoop stretcher or long spine board with minimal movement", f: "Correct — This patient has a classic dashboard injury pattern: knee strikes the dashboard → femoral shaft fracture or posterior hip dislocation → force transmitted through the femur to the pelvis → pelvic fracture. The seat belt sign and flank ecchymosis suggest intra-abdominal injury (spleen or kidney on the left). Management sequence: 1) C-spine immobilisation, 2) Pelvic binder (BEFORE movement — this reduces haemorrhage risk during extrication), 3) Assess the left leg — is it a femur fracture (traction splint) or hip dislocation (splint in position found)? 4) Coordinate extrication with minimal movement, 5) Scoop stretcher or log roll with adequate personnel, 6). Transport to trauma centre. Note: a traction splint is contraindicated if there is a pelvic fracture or hip dislocation — assess carefully."},
                        {t: "Suspect only a femur fracture — the shortened, externally rotated leg is classic. Apply a traction splint and transport. The pelvic pain is likely referred from the femur fracture. No pelvic binder is needed if the pelvis is stable on exam", f: "Incorrect — The mechanism (unrestrained head-on with deformed steering wheel, leg shortened/externally rotated) plus pelvic pain, seat belt sign, and flank ecchymosis suggests a multisystem injury pattern. Relying on pelvic 'stability' exam is dangerous — in an awake patient with pelvic pain, you do NOT need to compress the pelvis to confirm a fracture. The mechanism alone warrants a pelvic binder. Also, a traction splint may be contraindicated if there is a pelvic fracture or hip dislocation — always assess for these contraindications first."}
                    ],
                    correct: 0,
                    explanation: "This patient has a classic high-energy trauma pattern with multiple potential injuries. The sequence matters: 1) C-spine immobilisation (always first in blunt trauma with significant MOI), 2) Pelvic binder — apply early, before extrication, as movement can worsen pelvic haemorrhage, 3) Assess the left leg — a shortened, ER'd leg could be a femur fracture (traction splint candidate) OR a posterior hip dislocation (do NOT traction — splint in position), 4) Extricate using a scoop stretcher with coordinated minimal movement, 5) Ongoing assessment en route. Key: do NOT perform a pelvic compression exam if you already suspect a pelvic fracture based on MOI and symptoms — it is painful and can worsen bleeding.",
                    kpi: "Recognises multisystem injury pattern with pelvic fracture and applies pelvic binder before extrication"
                },
                {
                    id: "crit_6_9_3",
                    scenario: "You are called to a domestic violence incident where a 26-year-old female at 28 weeks gestation reports being punched in the abdomen by her partner. She is crying and holding her abdomen. She denies vaginal bleeding or loss of fluid. Vital signs: HR 104, BP 108/70, RR 18, SpO₂ 98%. Her abdomen is tender in the left upper quadrant and the uterus is firm and tender to palpation. She states she has not felt the baby move 'as much' since the assault, which occurred approximately 30 minutes ago. Foetal heart tones are 174 bpm (when you can hear them — the monitor is picking up the maternal heart rate intermittently).",
                    question: "What is the most likely complication and what is the priority management?",
                    options: [
                        {t: "The patient likely has a urinary tract infection causing abdominal pain — the foetal heart rate is normal and the minor abdominal pain is from the assault. Transport routinely for evaluation", f: "Incorrect — Foetal tachycardia (baseline >160 bpm) is a sign of foetal distress. A firm, tender uterus with decreased foetal movement after blunt abdominal trauma in the third trimester is highly concerning for placental abruption — even without vaginal bleeding. The maternal heart rate may be interfering with the foetal monitor; the foetal heart rate of 174 is elevated and concerning."},
                        {t: "Suspected placental abruption — the firm, tender uterus, foetal tachycardia, and decreased foetal movement after blunt abdominal trauma are classic. Place the patient supine with left uterine displacement (wedge under right hip), administer high-flow oxygen, establish IV access, and transport emergently with foetal heart tones monitored en route", f: "Correct — This patient has a classic presentation for placental abruption after blunt abdominal trauma: 1) Direct blow to the pregnant abdomen, 2) Firm, tender uterus ('wooden' or 'board-like' consistency), 3) Decreased foetal movement, 4) Foetal tachycardia (174 bpm is foetal distress), 5) Gestational age >20 weeks (uterus is an abdominal organ and vulnerable). Management priorities: left uterine displacement, high-flow oxygen (to maximise foetal oxygenation), IV access, rapid transport, and continuous monitoring of maternal vitals and foetal heart tones. Notify the receiving hospital of a trauma in pregnancy with suspected placental abruption so obstetrics and paediatrics teams can be ready."}
                    ],
                    correct: 1,
                    explanation: "Placental abruption is the most common cause of foetal death after maternal trauma. The classic findings are: uterine tenderness/rigidity ('wooden' uterus), vaginal bleeding (may be concealed — up to 20% have NO visible bleeding), foetal distress (tachycardia initially, then bradycardia as abruption worsens), and decreased foetal movement. Foetal tachycardia (>160 bpm) is an early sign of foetal distress — the foetus is compensating for reduced oxygenation. Abruption can progress rapidly — the placenta can separate completely, causing foetal death within minutes. Management: left uterine displacement (critical — prevents aortocaval compression), high-flow oxygen (maximises foetal O₂ delivery), IV access, rapid transport, and notification of the receiving hospital. The patient should go to a facility with obstetrics and neonatal capabilities.",
                    kpi: "Recognises placental abruption after blunt abdominal trauma in pregnancy"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s10 – Musculoskeletal Injuries & Splinting
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s10",
            shortTitle: "6.10 Musculoskeletal Injuries & Splinting",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Musculoskeletal Injuries & Splinting</h3>

                <p>Musculoskeletal injuries are among the most common reasons patients call EMS. While rarely immediately life-threatening (with the notable exception of exsanguinating haemorrhage from open fractures or pelvic fractures), these injuries cause significant pain, disability, and morbidity if mismanaged. The EMT's role is to <strong>assess, immobilise, and transport</strong> — splinting an injured extremity reduces pain, prevents further injury to surrounding tissues (nerves, blood vessels), and minimises the risk of converting a closed fracture to an open fracture.</p>

                <h4>Types of Musculoskeletal Injuries</h4>
                <table>
                    <thead>
                        <tr><th>Injury Type</th><th>Definition</th><th>Common Examples</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Fracture</strong></td><td>A break in the continuity of a bone</td><td>Closed (skin intact), open (bone protrudes or wound communicates with fracture), comminuted (multiple fragments), greenstick (incomplete — paediatric), transverse, oblique, spiral</td></tr>
                        <tr><td><strong>Dislocation</strong></td><td>Complete displacement of a bone from its normal joint position</td><td>Anterior shoulder (most common), posterior hip (most common), elbow, finger, patella, knee</td></tr>
                        <tr><td><strong>Sprain</strong></td><td>Injury to a ligament (bone-to-bone connective tissue)</td><td>Ankle inversion sprain (most common), knee (ACL, MCL, LCL), wrist (TFCC)</td></tr>
                        <tr><td><strong>Strain</strong></td><td>Injury to a muscle or tendon (muscle-to-bone connective tissue)</td><td>Hamstring strain, lower back strain (lumbar paraspinal muscles), rotator cuff strain</td></tr>
                        <tr><td><strong>Contusion</strong></td><td>Bruise — blunt trauma causing bleeding into soft tissue without a break in the skin</td><td>Direct blow to a muscle, bone contusion</td></tr>
                    </tbody>
                </table>

                <h4>Signs of a Fracture — The "Fracture Signs"</h4>
                <p>The presence of one or more of these signs suggests a fracture. The more signs present, the greater the likelihood:</p>
                <table>
                    <thead>
                        <tr><th>Sign</th><th>Description</th><th>Reliability</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Deformity</strong></td><td>Visible abnormal shape — angulation, shortening, rotation of the limb compared to the uninjured side</td><td>Highly reliable — deformity alone is enough to suspect a fracture</td></tr>
                        <tr><td><strong>Crepitus</strong></td><td>Grating or grinding sensation felt when bone ends rub together (do NOT intentionally elicit this — it is painful and can cause further injury)</td><td>Highly reliable for fracture</td></tr>
                        <tr><td><strong>Ecchymosis</strong></td><td>Bruising/discolouration from bleeding into the soft tissues surrounding the fracture</td><td>Moderately reliable — may take time to develop</td></tr>
                        <tr><td><strong>Swelling</strong></td><td>Localised oedema from bleeding and inflammation at the fracture site</td><td>Moderately reliable — present in most fractures</td></tr>
                        <tr><td><strong>Point tenderness</strong></td><td>Pain that is sharply localised to one specific spot when palpated</td><td>Highly sensitive — point tenderness over a bone is strongly suggestive of fracture, even without deformity</td></tr>
                        <tr><td><strong>Loss of function</strong></td><td>Inability or unwillingness to use the injured extremity (guarding)</td><td>Moderately reliable — functional impairment is common but not universal</td></tr>
                        <tr><td><strong>PMS changes</strong></td><td>Abnormal pulse, motor function, or sensation distal to the injury</td><td>Critical — indicates nerve or vascular compromise requiring urgent reduction</td></tr>
                    </tbody>
                </table>

                <h4>Closed vs. Open Fractures</h4>
                <p>A <strong>closed fracture</strong> is one in which the skin overlying the fracture is intact. An <strong>open fracture</strong> (formerly called a "compound fracture") is one in which the bone has broken through the skin OR there is a wound that communicates with the fracture site. The distinction is critical because open fractures carry a high risk of infection (osteomyelitis), are frequently associated with greater blood loss, and require urgent surgical irrigation and debridement. Management of an open fracture:</p>
                <ul>
                    <li><strong>Cover the wound with a sterile dressing</strong> — this protects the exposed bone and deeper tissues from environmental contamination</li>
                    <li><strong>DO NOT push the bone back into the wound</strong> — this introduces surface bacteria into the deeper tissues and can cause osteomyelitis (bone infection). The bone may also retract on its own as swelling increases — this is acceptable</li>
                    <li><strong>Splint the extremity in the position found</strong> — immobilisation prevents further injury and reduces pain</li>
                    <li><strong>Monitor PMS (pulse, motor, sensation) distal to the fracture</strong> before and after splinting — document any changes</li>
                    <li><strong>Apply a cold pack (with a barrier) to reduce swelling</strong> — 15–20 minutes on, then reassess</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> A fracture does not need to be visibly deformed to be present. Non-displaced fractures (hairline fractures) may show only point tenderness and swelling. If the mechanism is significant and the patient has point tenderness over a bone, treat it as a fracture — splint it. "Better to splint a sprain that isn't broken than to not splint a fracture that is."
                </div>

                <h4>Splinting Principles — The Golden Rules</h4>
                <p>Proper splinting is both an art and a science. These principles apply to all splinting, regardless of the type of splint used:</p>
                <ol>
                    <li><strong>Splint in the position found</strong> — do NOT attempt to realign or straighten a deformed extremity (unless there is no distal pulse — then gentle inline traction to restore circulation is appropriate per protocol)</li>
                    <li><strong>Immobilise the joint above and the joint below the fracture</strong> — this prevents movement at the fracture site. For example, a tibia fracture requires immobilisation of the ankle (below) and the knee (above)</li>
                    <li><strong>Pad the splint adequately</strong> — fill all voids between the splint and the patient's body with soft padding (gauze, towels, commercial padding). This distributes pressure, prevents pressure injuries, and improves patient comfort</li>
                    <li><strong>Check PMS before and after splinting</strong> — this is non-negotiable. Document pulse (present/absent, strength), motor function (movement), and sensation (touch sensation) distal to the injury. If PMS worsens after splinting, the splint may be too tight or the injury may need realignment</li>
                    <li><strong>Secure the splint with bandages or tape</strong> — apply from distal to proximal. Do not secure directly over the fracture site (this can cause pain and further injury)</li>
                    <li><strong>Apply a cold pack to the injury</strong> — wrap in a towel or cloth barrier; apply for 15–20 minutes to reduce swelling and provide analgesia</li>
                    <li><strong>Elevate the injured extremity if possible</strong> — this reduces swelling (provided it does not cause pain or compromise the splint)</li>
                    <li><strong>Reassess PMS after any movement or change in patient position</strong> — every time the patient is moved, recheck the distal extremity</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — PMS Documentation:</strong> The PMS check (Pulse, Motor, Sensation) before and after EVERY intervention is a medicolegal standard. If a patient develops compartment syndrome or neurovascular compromise after your splint application, your documented PMS checks will be the primary evidence of whether your care was appropriate. <strong>Document the presence or absence of each component at each time point.</strong> Example: "PMS intact distal to injury prior to splinting. PMS reassessed immediately after splinting — radial pulse 2+, finger movement full, sensation intact to light touch. No change from pre-splinting assessment."
                </div>

                <h4>Types of Splints</h4>
                <table>
                    <thead>
                        <tr><th>Splint Type</th><th>Best For</th><th>Key Considerations</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Rigid splint</strong></td><td>Forearm, lower leg, ankle</td><td>Board, SAM splint, cardboard, magazine — padded and taped in place; immobilises joint above and below</td></tr>
                        <tr><td><strong>Vacuum splint</strong></td><td>Irregularly shaped injuries, multi-site fractures</td><td>Moulds to the shape of the injury; air is evacuated to create rigidity; excellent for patient comfort but can lose rigidity if punctured</td></tr>
                        <tr><td><strong>Air splint</strong></td><td>Lower extremity fractures (prehospital)</td><td>Inflatable sleeve; provides compression and immobilisation; can be used to control bleeding; caution: changes temperature with altitude (air expands)</td></tr>
                        <tr><td><strong>Traction splint</strong></td><td>Isolated mid-shaft femur fractures ONLY</td><td>Hare traction splint, Sager splint — provides inline traction to reduce muscle spasm, pain, and bleeding; has specific contraindications</td></tr>
                        <tr><td><strong>Long spine board</strong></td><td>Full body immobilisation; hip/pelvis fractures</td><td>Provides full-body support; used when spinal injury or pelvic fracture is suspected; pad all voids</td></tr>
                        <tr><td><strong>Sling and swathe</strong></td><td>Shoulder injuries, clavicle fractures, upper humerus fractures</td><td>Sling supports the arm; swathe secures the arm to the chest wall. Triangular bandage or commercial sling</td></tr>
                        <tr><td><strong>Pillow/soft splint</strong></td><td>Ankle injuries, distal extremity injuries</td><td>Pillow wrapped around the injury and taped; provides comfort and mild immobilisation</td></tr>
                        <tr><td><strong>Buddy taping</strong></td><td>Finger or toe fractures/dislocations</td><td>Tap the injured digit to an adjacent uninjured digit; padding between digits to prevent maceration</td></tr>
                    </tbody>
                </table>

                <h4>Traction Splinting — Femur Fractures</h4>
                <p>The femur is the largest bone in the body, and a mid-shaft femur fracture is a significant injury. The femoral artery can be torn by sharp bone fragments, and the thigh can sequester 1–2 litres of blood. Traction splinting provides inline traction that reduces muscle spasm (the powerful quadriceps and hamstring muscles pull the bone fragments into overlapping positions), aligns the bone, reduces pain, and may reduce bleeding. The two most common traction splints are the <strong>Hare traction splint</strong> (used by one rescuer) and the <strong>Sager splint</strong> (bilateral, can be used on one or both legs). Indications for traction splinting: <strong>isolated, closed, mid-shaft femur fracture</strong>.</p>

                <h5>Contraindications to Traction Splinting</h5>
                <p>Before applying a traction splint, assess for these contraindications. Applying traction to any of these injuries can cause severe harm:</p>
                <ul>
                    <li><strong>Pelvic fracture</strong> — traction on the leg can disrupt pelvic clots and worsen haemorrhage</li>
                    <li><strong>Hip dislocation or fracture</strong> — traction on a dislocated hip can cause femoral head avascular necrosis, fracture the femoral neck, or convert a dislocation into a fracture-dislocation</li>
                    <li><strong>Knee injury</strong> — traction splints apply force across the knee; a knee injury (fracture, dislocation, severe ligament injury) can be worsened by traction</li>
                    <li><strong>Partial amputation</strong> — traction can worsen soft tissue injury or disrupt remaining attachments</li>
                    <li><strong>Open femur fracture with bone protruding</strong> — gentle inline manual traction may be used, but traction splint application may cause further injury to soft tissues; use a rigid splint or vacuum splint instead</li>
                    <li><strong>Fracture of the distal femur or proximal tibia</strong> — the traction splint's ankle hitch and traction mechanism apply force to these areas</li>
                    <li><strong>Injury to the lower leg, ankle, or foot on the same extremity</strong> — the ankle hitch may be contraindicated</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Don't Traction a Hip Dislocation:</strong> A posterior hip dislocation presents with the leg shortened and internally rotated (the foot turns inward). A femur fracture presents with the leg shortened and externally rotated (the foot falls outward). If you cannot confidently distinguish between the two — especially when there is an equivocal presentation — do NOT apply a traction splint. Immobilise the leg in the position found with rigid splints and transport. Traction on a dislocated hip can cause avascular necrosis of the femoral head.
                </div>

                <h4>PASG / MAST (Historical)</h4>
                <p>The <strong>Pneumatic Anti-Shock Garment (PASG)</strong>, also known as Military Anti-Shock Trousers (MAST), is a historical device that was once used to treat haemorrhagic shock by wrapping the legs and abdomen in inflatable compartments, thereby increasing peripheral vascular resistance and autotransfusing blood to the core. <strong>PASG/MAST is generally no longer recommended for trauma patients in modern EMS practice</strong>. Evidence has shown that PASG increases mortality in some patient populations (thoracic trauma, cardiac tamponade) and does not improve outcomes in haemorrhagic shock. However, it may still have limited applications in some protocols for: stabilising pelvic fractures (as a temporary measure), and treating profound hypotension refractory to other measures (rare). EMTs should know what PASG/MAST is for historical and examination purposes but follow their local protocol regarding its use.</p>

                <h4>Compartment Syndrome — A True Emergency</h4>
                <p><strong>Compartment syndrome</strong> occurs when increased pressure within a closed anatomical compartment (a group of muscles, nerves, and blood vessels surrounded by fascia) compromises circulation and tissue perfusion. Without prompt treatment (fasciotomy — surgical release of the fascia), compartment syndrome leads to muscle necrosis, nerve damage, and permanent loss of limb function. Compartment syndrome can develop after: fractures (especially tibial, forearm), crush injuries, prolonged compression of a limb, reperfusion after ischaemia, burns, or tight splints/casts. The classic signs are remembered by the <strong>5 P's</strong>:</p>
                <table>
                    <thead>
                        <tr><th>Sign</th><th>Description</th><th>Clinical Significance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Pain</strong></td><td>Severe pain OUT OF PROPORTION to the apparent injury; pain with passive stretch of the muscles in the compartment</td><td><strong>EARLIEST and most reliable sign</strong> — the hallmark of compartment syndrome</td></tr>
                        <tr><td><strong>Paresthesia</strong></td><td>Abnormal sensation — tingling, "pins and needles," or numbness in the distribution of the nerves passing through the compartment</td><td>Early to moderate sign — indicates nerve ischaemia</td></tr>
                        <tr><td><strong>Pallor</strong></td><td>Pale skin colour distal to the compartment</td><td>Sign of reduced capillary perfusion</td></tr>
                        <tr><td><strong>Poikilothermia</strong></td><td>The affected limb feels cool or cold compared to the uninjured side (takes on the temperature of the environment)</td><td>Sign of reduced perfusion</td></tr>
                        <tr><td><strong>Pulselessness</strong></td><td>Loss of distal pulse</td><td><strong>LATE and ominous sign</strong> — irreversible tissue damage is likely imminent. Do NOT wait for pulselessness to diagnose compartment syndrome</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning:</strong> Pulselessness is a <strong>LATE sign</strong> of compartment syndrome — by the time the pulse is lost, irreversible tissue damage (muscle necrosis, nerve damage) has likely already occurred. The earliest and most important sign is <strong>pain out of proportion</strong> to the injury combined with <strong>pain on passive stretch</strong>. If a patient with a splinted extremity complains of increasing pain despite adequate analgesia, suspect compartment syndrome. <strong>Loosen or remove the splint</strong> and reassess. Do NOT elevate the extremity above heart level — this reduces perfusion pressure to the compartment.
                </div>

                <h4>Common Dislocations</h4>

                <h5>Shoulder Dislocation — Anterior (Most Common)</h5>
                <p>Anterior shoulder dislocations account for >95% of all shoulder dislocations. The humeral head is displaced anteriorly and inferiorly relative to the glenoid fossa. The classic presentation: the patient holds the arm slightly abducted and externally rotated, with the humeral head palpable anteriorly (below the clavicle). There is a loss of the normal rounded deltoid contour — a "squared-off" appearance. The patient cannot bring the arm to their side (adduction). Associated injuries include: axillary nerve injury (check sensation over the deltoid — the "regimental badge" area), rotator cuff tear, and fracture of the greater tuberosity. Management: sling and swathe, do NOT attempt reduction, transport, check PMS (especially axillary nerve — sensation over the lateral shoulder).</p>

                <h5>Hip Dislocation — Posterior (Most Common)</h5>
                <p>Posterior hip dislocations account for ~90% of hip dislocations. The classic mechanism is a dashboard injury in a motor vehicle collision — the knee strikes the dashboard, driving the femoral head posteriorly out of the acetabulum. The classic presentation: the leg is <strong>shortened and internally rotated</strong> (the foot turns inward). The patient cannot move the leg. Associated injuries include: sciatic nerve injury (check sensation on the dorsum of the foot and ability to dorsiflex), femoral head avascular necrosis (risk increases with time to reduction — ideally reduced within 6 hours), and fracture of the posterior acetabulum. Management: do NOT attempt reduction, immobilise the leg in the position found (use pillows, blankets, or a rigid splint), check PMS before and after immobilisation (document especially the sciatic nerve distribution), and transport. Do NOT apply a traction splint — the mechanism may resemble a femur fracture (shortened leg) but the internal rotation (vs. external rotation in femur fracture) is the distinguishing feature.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> <strong>PMS check (Pulse, Motor, Sensation) BEFORE and AFTER every intervention</strong> — this is the single most important medicolegal and clinical standard in musculoskeletal care. Traction splint for <strong>isolated mid-shaft femur fracture only</strong> — contraindicated in pelvic fracture, hip dislocation, knee injury, and partial amputation. Distinguish posterior hip dislocation (leg shortened + internally rotated) from femur fracture (leg shortened + externally rotated) — this determines whether traction splinting is appropriate.
                </div>
            </div>`,
            flashcards: [
                { question: "What are the 8 splinting principles?", answer: "1) Splint in position found, 2) Immobilise joint above and below, 3) Pad adequately, 4) Check PMS before and after, 5) Secure distal to proximal, 6) Apply cold pack, 7) Elevate if possible, 8) Reassess PMS after any movement.", category: "Splinting Principles" },
                { question: "What are the signs of a fracture?", answer: "Deformity, crepitus, ecchymosis, swelling, point tenderness, loss of function, and PMS changes distal to the injury.", category: "Fracture Recognition" },
                { question: "What is the difference between a closed and open fracture?", answer: "Closed: skin over the fracture is intact. Open: bone protrudes through the skin OR a wound communicates with the fracture site. Open fractures require sterile dressing and urgent surgical debridement.", category: "Fracture Types" },
                { question: "What are the contraindications to traction splinting?", answer: "Pelvic fracture, hip dislocation/fracture, knee injury, partial amputation, distal femur/proximal tibia fracture, ipsilateral lower leg/ankle/foot injury, and open femur fracture (relative contraindication).", category: "Traction Splinting" },
                { question: "What are the 5 P's of compartment syndrome?", answer: "Pain (out of proportion — earliest sign), Paresthesia, Pallor, Poikilothermia, Pulselessness (LATE sign).", category: "Compartment Syndrome" },
                { question: "How does a posterior hip dislocation present versus a femur fracture?", answer: "Posterior hip dislocation: leg shortened + INTERNALLY rotated (foot turns in). Femur fracture: leg shortened + EXTERNALLY rotated (foot falls out). Do NOT apply traction to a hip dislocation.", category: "Dislocations" },
                { question: "How does an anterior shoulder dislocation typically present?", answer: "Arm held slightly abducted and externally rotated, humeral head palpable anteriorly, 'squared-off' deltoid contour, loss of normal rounded shoulder appearance. Manage with sling and swathe.", category: "Dislocations" },
                { question: "What is fasciotomy and when is it required?", answer: "A surgical incision through the fascia to release pressure in compartment syndrome. It is required emergently when intracompartmental pressure compromises tissue perfusion — pulselessness is a late sign.", category: "Compartment Syndrome" }
            ],
            quiz: [
                {
                    q: "A 30-year-old male fell off a ladder and landed on his right leg. The leg is shortened and externally rotated. He has severe thigh pain and cannot bear weight. Distal PMS is intact. What is the MOST appropriate management?",
                    options: [
                        "Apply rigid splints to the entire leg and transport — this is likely a hip dislocation and traction splinting is contraindicated",
                        "Apply a traction splint — this is likely an isolated mid-shaft femur fracture (shortened + externally rotated leg) with no contraindications present. Check PMS before and after",
                        "Apply a pelvic binder — the leg deformity suggests a pelvic fracture",
                        "Do not splint — transport the patient in the position of comfort and let the hospital manage the reduction"
                    ],
                    correct: 1,
                    explanation: "A shortened, externally rotated leg after a fall is classic for a femur fracture. With no contraindications (no pelvic fracture, hip dislocation, knee injury) and intact distal PMS, a traction splint is the appropriate choice. The traction reduces muscle spasm, aligns the bone, reduces pain, and controls bleeding. Follow the steps: manual inline traction, apply ankle hitch, apply mechanical traction, secure support straps, reassess PMS."
                },
                {
                    q: "A 22-year-old female was struck by a car while crossing the street. She has a deformed, angulated left lower leg with bone protruding through the skin. There is moderate bleeding from the wound. What is the correct sequence of management?",
                    options: [
                        "Straighten the leg to realign the bone, apply a rigid splint, and transport",
                        "Cover the protruding bone with a sterile dressing, splint the leg in the position found, apply a cold pack, administer oxygen, transport. Do NOT push the bone back in",
                        "Push the bone back into the wound to prevent infection, then apply a pressure dressing and splint",
                        "Apply a tourniquet to control bleeding, then splint the leg in anatomical position"
                    ],
                    correct: 1,
                    explanation: "For an open fracture: 1) Cover the wound with a sterile dressing (protects the bone and wound from contamination), 2) DO NOT push the bone back in (introduces bacteria into deep tissues and risks osteomyelitis), 3) Splint the extremity in the position found (do NOT attempt to straighten — this can worsen neurovascular injury), 4) Apply cold pack (with barrier) for 15–20 minutes, 5) Check PMS before and after splinting, 6) Administer oxygen, 7) Transport. The bone may retract on its own as swelling increases — this is acceptable."
                },
                {
                    q: "[HARD] A 35-year-old male was extricated from a crashed vehicle with a deformed, shortened left thigh. His left foot is turned outward. He has severe pain in the left groin and cannot move the leg. The pelvis is stable to gentle compression but there is tenderness over the left pubic ramus. There is bruising over the left flank. Vital signs: HR 118, BP 100/68. The crew is considering a traction splint. Which action is MOST appropriate?",
                    options: [
                        "Apply a traction splint — the patient has an isolated femur fracture and no contraindications (the pelvis feels stable on exam)",
                        "Do NOT apply a traction splint — the tenderness over the pubic ramus, flank bruising, and groin pain suggest a pelvic ring injury, even if the pelvis feels 'stable.' Pelvic fracture is a contraindication to traction splinting. Apply a pelvic binder, immobilise the leg with a long rigid splint, and transport to a trauma centre",
                        "Apply both a pelvic binder and a traction splint — the pelvic tenderness suggests a minor pelvic injury but the femur fracture needs traction",
                        "Transport without splinting — the patient needs hospital evaluation before any traction is applied"
                    ],
                    correct: 1,
                    explanation: "This is a classic case where a pelvic fracture mimics a femur fracture (or coexists with one). The tenderness over the pubic ramus, flank ecchymosis (Grey Turner sign), groin pain, and haemodynamic instability (tachycardia, borderline hypotension) suggest a pelvic fracture with retroperitoneal haemorrhage. A 'stable' pelvic exam does NOT rule out a pelvic fracture — especially in an awake patient with pelvic pain. Applying traction to a pelvis that may have a fracture could worsen haemorrhage. Management: pelvic binder, immobilise the leg in the position found with a rigid splint (or pillow splint), and transport to a trauma centre. Do not use a traction splint."
                },
                {
                    q: "A 45-year-old male with a tibial fracture that was splinted 2 hours ago now reports rapidly worsening pain in his lower leg that he describes as 'deep, intense pressure.' His pain is 10/10 despite having received analgesia. The splint looks appropriately applied. Passive toe movement causes excruciating pain. The toes are pale and the patient reports tingling. The dorsalis pedis pulse is weak but present. What is the MOST likely diagnosis and the EMT's immediate action?",
                    options: [
                        "The patient is experiencing normal fracture pain — administer additional analgesia and reassure the patient",
                        "Compartment syndrome — loosen or remove the splint immediately, reassess PMS every 5 minutes, and transport emergently with hospital notification for possible fasciotomy",
                        "The splint is too tight — adjust the splint and recheck in 5 minutes; if pulses improve, continue transport",
                        "Deep vein thrombosis — the leg is swollen from a clot; elevate and apply a warm pack"
                    ],
                    correct: 1,
                    explanation: "This is a classic presentation of compartment syndrome: 1) Pain out of proportion to the injury (10/10, described as 'deep intense pressure'), 2) Pain with passive stretch (passive toe movement causes excruciating pain — this is the hallmark sign), 3) Paresthesia (tingling), 4) Pallor (pale toes), and importantly, 5) The pulse is still present (pulselessness is a LATE sign — do NOT wait for it). Immediate management: loosen or remove the splint, keep the extremity at heart level (do NOT elevate — this reduces perfusion pressure), reassess every 5 minutes, transport emergently, and notify the receiving hospital so the surgical team can prepare for fasciotomy."
                }
            ],
            critical: [
                {
                    id: "crit_6_10_1",
                    scenario: "You are called to a football field for a 16-year-old male who was tackled and immediately had severe left thigh pain. His leg is visibly shortened and externally rotated. There is no open wound. He is in significant pain (8/10) but has intact distal PMS. Vital signs: HR 104, BP 128/74, RR 18, SpO₂ 98%. He has no other injuries and no significant medical history. Your partner prepares the Hare traction splint while you assess.",
                    question: "What are the steps to apply the traction splint and what must be verified before and after application?",
                    options: [
                        {t: "Before application: verify that the injury is an isolated mid-shaft femur fracture with no pelvic fracture, hip dislocation, knee injury, or lower leg injury. Manually apply gentle inline traction to align the leg. Apply the ankle hitch, position the splint, apply mechanical traction until the tension is comfortable and the leg is aligned (not necessarily fully reduced). Secure support straps, then reassess PMS. Document all findings", f: "Correct — The steps are: 1) Confirm indication (isolated mid-shaft femur fracture) and rule out contraindications (pelvic fracture, hip dislocation, knee injury, etc.), 2) Check PMS and document, 3) Manually apply gentle inline traction (this reduces pain and aligns the bone), 4) Apply the ankle hitch (with padding over bony prominences), 5) Position the splint and connect the ankle hitch, 6) Apply mechanical traction — turn the ratchet/tension device until the leg is aligned and the patient reports reduced pain (do NOT over-traction), 7) Secure support straps (proximal thigh first, then every 6–8 inches down the leg), 8) Reassess PMS and document. Monitor traction tension en route — muscle spasms may require adjustment."},
                        {t: "Apply the splint as quickly as possible — a traction splint is always indicated for any leg deformity. No need to check for hip dislocation — that is a hospital diagnosis. Apply traction until the leg length is fully restored, then secure and transport", f: "Incorrect — Traction splinting requires careful assessment before application. Applying traction to a hip dislocation can cause avascular necrosis. The 'shortened + externally rotated' leg is classic for femur fracture, but you must assess for the less common hip dislocation (shortened + internally rotated) and for pelvic tenderness. Traction should align the leg, not over-distract. Over-traction can cause neurovascular injury and pain."}
                    ],
                    correct: 0,
                    explanation: "Traction splint application is a step-by-step process that requires careful verification before and after. The most common prehospital error is failing to recognise a contraindication (especially a subtle hip dislocation or pelvic fracture). The distinguishing exam: femur fracture = shortened + externally rotated; hip dislocation = shortened + internally rotated. Manual inline traction before mechanical splint application is critical — it reduces pain from muscle spasm and allows the EMT to feel if there is resistance that suggests a dislocation. After splinting, reassess PMS and document. The patient should be transported to a trauma centre (femur fractures can bleed significantly — 1–2 L into the thigh).",
                    kpi: "Correctly applies traction splint with appropriate pre- and post-PMS assessment and contraindication screening"
                },
                {
                    id: "crit_6_10_2",
                    scenario: "You are called to a basketball game for an 18-year-old male who fell on an outstretched hand and now has severe right shoulder pain. He is holding his right arm slightly away from his body with his left hand. The right shoulder looks 'squared off' — the normal rounded contour is missing. You can palpate the humeral head anteriorly below the clavicle. He has normal sensation over the lateral aspect of his shoulder (the 'regimental badge' area) and can move his fingers and wrist. His radial pulse is strong.",
                    question: "What is the most likely injury and how should the EMT manage this patient?",
                    options: [
                        {t: "Anterior shoulder dislocation — apply a sling and swathe to immobilise the arm in the position found, check PMS (specifically the axillary nerve: sensation over the lateral shoulder/deltoid), apply a cold pack to the shoulder, transport, and do NOT attempt reduction", f: "Correct — This is a classic anterior shoulder dislocation. The management is: 1) Assess and document PMS — specifically the axillary nerve (sensation over the deltoid in the 'regimental badge' area — the patient in this case has normal axillary nerve function, which is a good prognostic sign), 2) Apply a sling to support the arm and a swathe to secure it to the chest, 3) Apply a cold pack to the shoulder for analgesia and swelling reduction, 4) Transport for reduction (usually closed reduction in the ED, often with procedural sedation), 5) Do NOT attempt to reduce the dislocation — this requires specific training and is outside the EMT scope."},
                        {t: "Apply a traction splint to the arm to reduce the humeral head back into the glenoid — this is an orthopaedic emergency that needs immediate reduction in the field", f: "Incorrect — Shoulder dislocations are not reduced in the prehospital setting by EMTs (though some paramedics may perform reduction under medical direction). A traction splint is for femur fractures — not shoulders. The correct management is immobilisation (sling and swathe), cold therapy, and transport. Axillary nerve function (lateral shoulder sensation) should always be documented — nerve injury is the most common complication."}
                    ],
                    correct: 0,
                    explanation: "Anterior shoulder dislocation is common in young athletes and can be recurrent. The hallmark physical findings are: squared-off shoulder appearance, palpable humeral head anteriorly, and the patient holding the arm abducted and externally rotated. The EMT's role: immobilise (sling and swathe), apply cold, perform and document a thorough PMS exam (especially the axillary nerve — sensation over the deltoid muscle), and transport. Do NOT attempt reduction. Recurrent dislocators may be able to self-reduce — do not stop them, but document their self-reduction carefully. Transport is still warranted to confirm reduction, assess for fractures, and evaluate for rotator cuff injury.",
                    kpi: "Correctly identifies anterior shoulder dislocation and manages with sling/swathe/PMS assessment"
                },
                {
                    id: "crit_6_10_3",
                    scenario: "You respond to a construction site for a 42-year-old male who was pinned between a concrete wall and a forklift for approximately 20 minutes before being freed. His right lower leg is swollen, tense, and very painful. He is awake and in extreme distress, rating his pain as 10/10. The leg is deformed at the mid-tibia level and there is an open wound 3 cm long over the deformity with bone visible. A rigid splint was applied by a first responder 30 minutes ago. Since then, the patient reports his pain has gone from 'bad' to 'unbearable.' The toes on the right foot are now pale and the patient reports tingling and numbness. The dorsalis pedis pulse is absent. The patient is screaming when anyone touches his foot or moves his toes even slightly.",
                    question: "What is the most likely complication and what must the EMT do immediately?",
                    options: [
                        {t: "This is likely normal fracture pain and vascular spasm from the initial injury — the splint is appropriate. Administer analgesia, elevate the leg, and transport emergently", f: "Incorrect — The combination of rapidly escalating pain (out of proportion), pain on passive stretch, paresthesia, pallor, and now pulselessness is a classic and advanced presentation of compartment syndrome. This patient has progressed through the 5 P's and now has pulselessness, which indicates imminent irreversible tissue damage. This is NOT 'normal fracture pain.' The splint that was appropriate when applied may now be contributing to the compartment syndrome if swelling has increased."},
                        {t: "Suspect acute compartment syndrome — immediately remove or loosen the splint and all circumferential dressings. Reassess the extremity — if the pulse does not return, note the time of pulselessness onset. Keep the extremity at heart level (do NOT elevate or lower). Transport emergently with hospital notification for possible fasciotomy. Document the sequence of PMS findings", f: "Correct — This patient has compartment syndrome that has progressed to the late stage (pulselessness). Immediate actions: 1) Remove the splint and ALL circumferential dressings/bandages — swelling may have made the splint too tight, 2) Reassess PMS — if the pulse returns after loosening, the compartment pressure may be relieved enough to restore perfusion, 3) Keep the leg at heart level — do NOT elevate (this reduces perfusion pressure) and do NOT lower (this increases oedema), 4) Note the time of pulselessness onset — this is critical for surgical decision-making, 5) Transport emergently to a trauma centre capable of fasciotomy, 6) Notify the receiving hospital that you have a compartment syndrome patient with pulselessness — the surgical team needs to be ready to perform fasciotomy immediately."}
                    ],
                    correct: 1,
                    explanation: "This patient has acute compartment syndrome following a severe tibial fracture with crush mechanism. The progression through the 5 P's is textbook: pain out of proportion → paresthesia → pallor → poikilothermia → pulselessness. The absence of the dorsalis pedis pulse is a LATE sign — irreversible muscle and nerve damage is occurring. The EMT must: 1) Remove the splint and ALL dressings immediately, 2) Reassess PMS, 3) Position at heart level, 4) Note the time of pulselessness, 5) Transport emergently to a facility with orthopaedic surgery capabilities, 6) The receiving hospital needs to prepare for emergent fasciotomy — the surgical release of the fascial compartments to restore perfusion. Fasciotomy is the definitive treatment and must be performed within 4–6 hours of symptom onset to prevent permanent damage. Every minute counts.",
                    kpi: "Recognises advanced compartment syndrome and implements emergency interventions including splint removal and emergent transport for fasciotomy"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c6s11 – Multisystem Trauma & Trauma in Pregnancy
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c6s11",
            shortTitle: "6.11 Multisystem Trauma & Pregnancy",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bone"/></svg> Multisystem Trauma & Trauma in Pregnancy</h3>

                <p><strong>Multisystem trauma</strong> refers to injury involving more than one body system — for example, a patient with both a head injury and intra-abdominal bleeding, or a patient with a chest injury, a pelvic fracture, and a leg fracture. These patients are at high risk for rapid deterioration because the physiological burden of multiple injuries is synergistic (the sum is greater than the parts). Managing multisystem trauma requires a disciplined, systematic approach — the <strong>ABCDE assessment with simultaneous interventions</strong> — where life threats are addressed as they are identified, not sequentially.</p>

                <h4>ABCDE Assessment with Simultaneous Interventions</h4>
                <p>In the single-system trauma patient, the ABCDE assessment is typically performed sequentially: assess A, then address A, then assess B, then address B, etc. In multisystem trauma — especially the unstable patient — this linear approach is too slow. The EMT must be prepared to <strong>assess and intervene simultaneously</strong>:</p>
                <table>
                    <thead>
                        <tr><th>Step</th><th>Assessment</th><th>Simultaneous Intervention</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>A</strong> — Airway</td><td>Assess patency — is the patient talking? Stridor? Gurgling? Obstruction?</td><td>Chin lift/jaw thrust, suction, OPA/NPA, manual airway manoeuvres</td></tr>
                        <tr><td><strong>B</strong> — Breathing</td><td>Assess rate, depth, symmetry, breath sounds, SpO₂, EtCO₂</td><td>High-flow oxygen, BVM ventilation, occlusive dressing for open pneumothorax, needle decompression for tension pneumothorax (ALS), assist ventilation</td></tr>
                        <tr><td><strong>C</strong> — Circulation</td><td>Assess pulses (central vs. peripheral), skin signs, BP, cap refill, haemorrhage (external and suspected internal)</td><td>Haemorrhage control (direct pressure, tourniquet, haemostatic gauze, pelvic binder), IV/IO access, fluid resuscitation (permissive hypotension)</td></tr>
                        <tr><td><strong>D</strong> — Disability</td><td>AVPU, GCS, pupil exam, motor/sensory assessment</td><td>Spinal motion restriction, blood glucose check, seizure management</td></tr>
                        <tr><td><strong>E</strong> — Exposure / Environment</td><td>Remove clothing to fully assess the patient; log roll to assess back</td><td>Maintain spinal precautions, prevent hypothermia (cover patient, warm ambulance, warm fluids)</td></tr>
                    </tbody>
                </table>

                <p>The key to simultaneous interventions is <strong>team coordination</strong>. While one EMT manages the airway, another controls haemorrhage, a third obtains vital signs, and a fourth prepares the stretcher and notifies the hospital. The team leader (usually the most experienced EMT) coordinates these parallel efforts and ensures nothing is missed.</p>

                <h4>Trauma Arrest Management</h4>
                <p>A <strong>traumatic cardiac arrest</strong> is a cardiac arrest caused by trauma (blunt or penetrating), not by a primary cardiac cause. The survival rate for traumatic arrest is low (approximately 5–15% for penetrating trauma to the torso, lower for blunt trauma), but immediate, aggressive intervention can save some patients. The key difference from medical cardiac arrest: traumatic arrest has <strong>reversible causes</strong> that can be treated in the field. The mnemonic for the reversible causes of traumatic arrest is:</p>
                <ul>
                    <li><strong>Tension pneumothorax</strong> — Needle decompression (ALS) or finger thoracostomy (surgeon/advanced provider). Breath sounds absent on one side, tracheal deviation, JVD, hypotension</li>
                    <li><strong>Cardiac tamponade</strong> — Blood in the pericardial sac compressing the heart. Muffled heart sounds, JVD, hypotension — Beck's triad. Pericardiocentesis (ALS/surgeon) or resuscitative thoracotomy (surgeon)</li>
                    <li><strong>Haemorrhagic shock (hypovolaemia)</strong> — Exsanguination from any source. Haemorrhage control, volume resuscitation, surgical haemorrhage control</li>
                    <li><strong>Hypoxia</strong> — Airway obstruction, tension pneumothorax, open pneumothorax, haemothorax. Airway management, ventilation, needle decompression, chest tube (hospital)</li>
                </ul>

                <p>The management of traumatic arrest follows the <strong>TCA (Traumatic Cardiac Arrest) algorithm</strong> in most systems: 1) Simultaneously address all reversible causes, 2) Bilateral needle decompression (if tension pneumothorax is suspected), 3) Haemorrhage control, 4) Volume resuscitation (warmed blood products in hospital, crystalloid in the field), 5) CPR (although chest compressions are less effective in haemorrhagic arrest because there is no volume to pump — focus on treating the cause). <strong>Defibrillation is generally not useful</strong> in traumatic arrest (the rhythm is usually PEA or asystole, not VF/VT — unless the trauma triggered a primary cardiac event).</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Concept:</strong> In traumatic cardiac arrest, the heart is often empty (from haemorrhage) or compressed (tension pneumothorax/tamponade). Chest compressions alone will not generate adequate perfusion. The priority is to <strong>identify and treat the reversible cause</strong>. If the patient is in PEA (pulseless electrical activity — the most common rhythm in traumatic arrest), the question is not "shock or no shock" — it is "what is causing the PEA?" Treat the cause.
                </div>

                <h4>Resuscitative Thoracotomy (Not an EMT Procedure)</h4>
                <p><strong>Resuscitative thoracotomy</strong> (also called "emergency department thoracotomy" or "ED thoracotomy") is a surgical procedure in which the chest is opened to directly access the heart and thoracic aorta. Indications include: penetrating cardiac injury with signs of life within the past 15 minutes, and blunt trauma with witnessed arrest with signs of life within the past 10 minutes (rare/controversial). The goal is to: 1) Relieve cardiac tamponade (by opening the pericardium), 2) Control intrathoracic haemorrhage, 3) Cross-clamp the descending aorta (to redirect blood to the heart and brain), and 4) Perform internal cardiac massage. This is a <strong>hospital procedure</strong> — not within the EMT scope. However, the EMT must understand the indications so you can: recognise which patients may benefit from this heroic intervention, minimise scene time and transport rapidly for patients who meet criteria, and notify the receiving ED so the surgical team is prepared.</p>

                <h4>Secondary Survey — Head-to-Toe After ABCs Stabilised</h4>
                <p>After the primary assessment has identified and managed all immediate life threats, the EMT performs a <strong>secondary survey</strong> — a systematic head-to-toe physical examination. The secondary survey should not interrupt ongoing resuscitation and may be performed en route. Key components:</p>
                <ul>
                    <li><strong>Head and face:</strong> DCAP-BTLS; pupils (PERRL); periorbital ecchymosis (raccoon eyes — basilar skull fracture); Battle's sign (mastoid ecchymosis — basilar skull fracture); CSF leak from nose (rhinorrhea) or ears (otorrhea); facial instability or step-offs</li>
                    <li><strong>Neck:</strong> Midline cervical spine tenderness; tracheal deviation; JVD; subcutaneous emphysema; medical alert tags; stoma</li>
                    <li><strong>Chest:</strong> Symmetry of movement; paradoxical motion (flail segment); breath sounds bilaterally; palpation for crepitus, tenderness, step-offs</li>
                    <li><strong>Abdomen:</strong> Four-quadrant palpation — tenderness, guarding, rigidity, distension; seat belt sign; evisceration; penetrating wounds</li>
                    <li><strong>Pelvis:</strong> Gentle compression for tenderness/crepitus (painful = suspect fracture — do not repeat); perineal ecchymosis; blood at urethral meatus</li>
                    <li><strong>Extremities:</strong> DCAP-BTLS; PMS in all four limbs; deformity, crepitus, swelling; splint as needed</li>
                    <li><strong>Back:</strong> Log roll (with adequate personnel) to assess posterior torso, spine, and buttocks — commonly missed injuries</li>
                </ul>

                <h4>SAMPLE / OPQRST / AMPLE History</h4>
                <p>History gathering follows the ABCDEs and is done en route or during the secondary survey. Three mnemonics are used:</p>
                <table>
                    <thead>
                        <tr><th>Mnemonic</th><th>Stands For</th><th>Clinical Application</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>SAMPLE</strong></td><td>Signs/Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to injury/illness</td><td>Standard medical history for all patients; used for both trauma and medical</td></tr>
                        <tr><td><strong>OPQRST</strong></td><td>Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time</td><td>Pain assessment specifically — used to characterise the nature of painful complaints</td></tr>
                        <tr><td><strong>AMPLE</strong></td><td>Allergies, Medications, Past medical history, Last oral intake, Events leading to injury/illness</td><td>Abbreviated version of SAMPLE (no Signs/Symptoms — those are from the physical exam). Often preferred in trauma because it is faster</td></tr>
                    </tbody>
                </table>

                <h4>Trauma in Pregnancy — Unique Considerations</h4>
                <p>Trauma affects approximately 6–8% of all pregnancies and is the <strong>leading cause of non-obstetric maternal death</strong>. The EMT must understand the anatomic and physiologic changes of pregnancy that alter the assessment and management of trauma:</p>

                <h5>Anatomic Changes relevant to trauma</h5>
                <table>
                    <thead>
                        <tr><th>Change</th><th>Clinical Implication</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Uterus enlarges</strong> — rises out of pelvis at ~12–14 weeks; becomes an abdominal organ by ~20 weeks</td><td>Direct uterine trauma becomes possible in the second and third trimesters; the uterus also displaces abdominal organs upward, altering the location and pattern of referred pain</td></tr>
                        <tr><td><strong>Blood volume increases</strong> by 40–50% (maternal plasma volume expansion)</td><td>A pregnant patient can lose 30–35% of her blood volume before showing signs of shock — she compensates for longer, then decompensates more rapidly. 'Normal' vital signs do NOT rule out haemorrhage</td></tr>
                        <tr><td><strong>Cardiac output increases</strong> by 30–50%</td><td>Tachycardia is more common at baseline; a HR of 90–100 may be normal. A HR >110 in the setting of trauma is more concerning</td></tr>
                        <tr><td><strong>Diaphragm is elevated</strong> by the enlarging uterus</td><td>Functional residual capacity decreases — pregnant patients desaturate more rapidly during apnoea. Breath sounds may sound 'different' because the lung bases are compressed</td></tr>
                        <tr><td><strong>Ligaments relax</strong> (hormonal changes — relaxin)</td><td>Joint laxity can make musculoskeletal injury more likely; pelvic pain may be from ligament relaxation rather than fracture — but assume the worst</td></tr>
                        <tr><td><strong>IVC compression</strong> in the supine position (supine hypotensive syndrome)</td><td>After ~20 weeks, the gravid uterus compresses the IVC when supine, reducing venous return by up to 30%. Left uterine displacement is essential</td></tr>
                    </tbody>
                </table>

                <h5>Supine Hypotensive Syndrome — Left Uterine Displacement</h5>
                <p>This is one of the most important trauma considerations in pregnancy. When a pregnant patient >20 weeks lies supine, the uterus compresses the inferior vena cava (IVC), reducing venous return, stroke volume, and cardiac output. This causes hypotension that can be mistaken for haemorrhagic shock. The management is simple and effective:</p>
                <ul>
                    <li><strong>Manual left uterine displacement:</strong> While the patient is supine (which she usually is for spinal precautions), place your hands on the right side of the uterus and gently push it to the left. This lifts the uterus off the IVC</li>
                    <li><strong>Wedge technique:</strong> Place a rolled blanket, pillow, or commercial wedge under the patient's right hip, tilting the pelvis 15–30° to the left. This shifts the uterus away from the IVC while maintaining spinal alignment (if spinal motion restriction is needed)</li>
                    <li><strong>Left lateral recumbent position:</strong> If no spinal injury is suspected, place the patient on her left side. This is the most effective position for relieving aortocaval compression</li>
                </ul>

                <h5>Placental Abruption — Leading Cause of Foetal Death After Trauma</h5>
                <p>Placental abruption is the premature separation of the placenta from the uterine wall. It is the <strong>leading cause of foetal death after maternal trauma</strong>. The mechanism: shearing forces between the elastic uterus and the inelastic placenta cause the placenta to detach. Abruption can occur after relatively minor trauma (a fall, a punch, a minor MVC) — the EMT should maintain a high index of suspicion in ANY pregnant trauma patient. Signs and symptoms include:</p>
                <ul>
                    <li><strong>Vaginal bleeding</strong> — may be present, but ~20% of abruptions are concealed (no visible bleeding — blood is trapped behind the placenta)</li>
                    <li><strong>Abdominal or uterine pain</strong> — the uterus is tender, firm, or 'board-like' (woody) to palpation</li>
                    <li><strong>Uterine contractions</strong> — frequent, low-amplitude contractions may be present</li>
                    <li><strong>Foetal distress</strong> — foetal tachycardia (>160 bpm) initially, progressing to bradycardia (<110 bpm) as abruption worsens. Decreased foetal movement</li>
                    <li><strong>Maternal shock</strong> — may be out of proportion to visible blood loss if the abruption is concealed and a large retroplacental clot has formed</li>
                </ul>

                <h5>Uterine Rupture</h5>
                <p>A rare but catastrophic injury — the uterus tears, expelling the foetus into the abdominal cavity. Both mother and foetus will die without immediate surgical intervention. It is most commonly associated with high-energy blunt trauma (MVC, fall from height) in the third trimester. Signs: severe abdominal pain, easily palpable foetal parts (the foetus is no longer contained within the uterus), loss of uterine contour, maternal shock out of proportion to apparent injuries, and vaginal bleeding (variable). This is a <strong>surgical emergency</strong> requiring immediate transport to a facility capable of emergency obstetric surgery and neonatal resuscitation.</p>

                <h5>Amniotic Fluid Embolism</h5>
                <p>A rare, catastrophic complication where amniotic fluid enters the maternal bloodstream (usually during labour or delivery, or after trauma to the uterus), causing an anaphylactic-like reaction, disseminated intravascular coagulation (DIC), and cardiorespiratory collapse. Signs: sudden onset of respiratory distress, cyanosis, hypotension, seizures, and cardiac arrest. Management: supportive — high-flow oxygen, CPR, and rapid transport. The condition has a mortality rate of 20–60% and requires intensive care.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point — Pregnant Trauma:</strong> In a pregnant trauma patient >20 weeks, <strong>manually displace the uterus to the left</strong> to prevent aortocaval compression (supine hypotensive syndrome). Blood loss is poorly tolerated by the foetus — maternal compensation (increased blood volume) can mask haemorrhage. A pregnant patient may lose 30% of her volume before her vital signs change — by then, uterine/foetal perfusion is significantly compromised. <strong>Perimortem C-section</strong> is a last-resort delivery performed to save the foetus when a pregnant patient is in cardiac arrest — if no ROSC after 4 minutes of arrest in a visibly pregnant uterus, immediate C-section (by a physician/surgeon) may be considered. The EMT's role is to recognise the situation, perform CPR, maintain left uterine displacement, and transport rapidly to a facility capable of perimortem C-section.
                </div>

                <h4>Trauma in the Elderly</h4>
                <p>Elderly patients (age ≥65) are the fastest-growing segment of the trauma population and have significantly worse outcomes than younger patients with equivalent injuries. The EMT must understand the physiologic changes of aging that increase vulnerability:</p>
                <table>
                    <thead>
                        <tr><th>Change</th><th>Clinical Implications in Trauma</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Decreased physiologic reserve</strong> — heart, lungs, kidneys, and liver have reduced functional capacity</td><td>A seemingly 'moderate' injury can overwhelm compensatory mechanisms. An elderly patient may not mount a tachycardia even when in shock (due to beta-blockers or decreased adrenergic response). A 'normal' heart rate does NOT rule out shock</td></tr>
                        <tr><td><strong>Anticoagulation</strong> — many elderly patients take warfarin, apixaban, rivaroxaban, dabigatran, or antiplatelet agents (aspirin, clopidogrel)</td><td>Minor trauma can cause life-threatening bleeding (especially intracranial haemorrhage). Elderly patients on anticoagulation who fall, even from standing height, are at high risk for subdural haematoma. <strong>Any head strike in an anticoagulated patient is a high-risk mechanism</strong> — transport for CT regardless of initial mental status</td></tr>
                        <tr><td><strong>Osteoporosis / brittle bones</strong></td><td>Low-energy falls (from standing or sitting height) can cause fractures — especially hip, pelvic, and vertebral compression fractures. A simple fall from standing is a 'significant mechanism' in an elderly patient</td></tr>
                        <tr><td><strong>Altered presentation</strong> — elderly patients may not present with 'classic' findings</td><td>An elderly patient with an acute abdomen may have minimal tenderness. A patient with a hip fracture may only complain of vague groin or knee pain (referred pain). An infection may present as confusion without fever. Assume the worst until proven otherwise</td></tr>
                        <tr><td><strong>Polypharmacy</strong> — multiple medications can mask or mimic injury</td><td>Beta-blockers mask tachycardia (a key sign of shock). Antihypertensives can worsen hypotension. Opioids can cause respiratory depression and sedation that mimics head injury. Always obtain a medication list and bring medications to the hospital</td></tr>
                        <tr><td><strong>Skin fragility</strong> — thinning, fragile skin</td><td>Shearing injuries from tape, bandages, and spinal immobilisation can cause significant skin tears. Pad all straps and bandages carefully. Handle the patient gently to avoid iatrogenic injury</td></tr>
                        <tr><td><strong>Pre-existing cognitive impairment</strong> (dementia, delirium)</td><td>History and assessment may be unreliable. Collateral information from family, caregivers, and nursing home staff is essential. Baseline mental status must be established — a patient with dementia may have altered mental status that is 'normal' for them</td></tr>
                    </tbody>
                </table>

                <h4>Trauma Scoring</h4>
                <p>Trauma scoring systems help quantify injury severity, predict outcomes, and guide triage decisions. While these scores are typically calculated in the hospital, understanding them helps the EMT recognise which patients have the highest risk:</p>
                <ul>
                    <li><strong>Revised Trauma Score (RTS):</strong> The RTS uses three physiologic parameters: Glasgow Coma Scale (GCS), systolic blood pressure (SBP), and respiratory rate (RR). Each parameter is scored from 0–4, and the sum (RTS) predicts survival. An RTS <12 is considered high risk and warrants transport to a trauma centre. Components:
                        <ul>
                            <li>GCS: 13–15 = 4, 9–12 = 3, 6–8 = 2, 4–5 = 1, 3 = 0</li>
                            <li>SBP: >89 = 4, 76–89 = 3, 50–75 = 2, 1–49 = 1, 0 = 0</li>
                            <li>RR: 10–29 = 4, >29 = 3, 6–9 = 2, 1–5 = 1, 0 = 0</li>
                        </ul>
                    </li>
                    <li><strong>Glasgow Coma Scale (GCS):</strong> The GCS assesses neurological status on a scale of 3–15. It evaluates three components: Eye opening (1–4), Verbal response (1–5), and Motor response (1–6). A GCS of 13–15 indicates mild injury, 9–12 moderate injury, and ≤8 severe injury (typically indicating the need for definitive airway management). GCS is a critical component of trauma triage and outcome prediction.</li>
                    <li><strong>Injury Severity Score (ISS):</strong> An anatomic scoring system calculated in the hospital. An ISS >15 is considered major trauma and generally warrants trauma centre care. Not calculated prehospitally but useful for understanding trauma outcomes.</li>
                </ul>

                <h4>Transport Decision-Making — Trauma Centre Criteria</h4>
                <p>The decision to transport a trauma patient to a trauma centre (rather than the closest ED) is guided by the <strong>CDC Field Triage Guidelines</strong> (updated periodically). These guidelines help EMTs identify patients who will benefit from trauma centre care. The criteria are organised in a stepwise manner — if ANY criterion in a step is positive, the patient should be transported to a trauma centre:</p>
                <table>
                    <thead>
                        <tr><th>Step</th><th>Criteria</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Step 1 — Physiologic</strong></td><td>GCS <14, SBP ≤90 mmHg, RR <10 or >29 (or need for ventilatory support)</td><td>Unresponsive patient with a BP of 78/40 after a fall</td></tr>
                        <tr><td><strong>Step 2 — Anatomic</strong></td><td>Penetrating injury to head/neck/torso/extremities proximal to elbow/knee; flail chest; two or more proximal long bone fractures; crushed, degloved, or mangled extremity; amputation proximal to wrist/ankle; pelvic fracture; open or depressed skull fracture; paralysis</td><td>Gunshot wound to the chest; open femur fracture; flail chest from steering wheel impact</td></tr>
                        <tr><td><strong>Step 3 — Mechanism of Injury</strong></td><td>Falls >20 ft (adult) or >10 ft (paediatric) or 2–3× height of child; high-risk auto crash (intrusion >12 in. occupant site or >18 in. any site; ejection; death in same passenger compartment; vehicle telemetry data consistent with high risk); auto vs. pedestrian/bicyclist thrown or run over; motorcycle crash >20 mph</td><td>Ejection from vehicle; fall from 25 feet; pedestrian struck and thrown 15 feet</td></tr>
                        <tr><td><strong>Step 4 — Special Considerations</strong></td><td>Age >55 (higher risk of death from same injury); anticoagulation (bleeding disorder or taking blood thinners); burns (without other trauma → burn centre, with other trauma → trauma centre); pregnancy >20 weeks; EMS provider judgment</td><td>Fall from standing in an 80-year-old on warfarin; pregnant trauma patient at 30 weeks; burns with associated blunt trauma</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#e2f0d9; border-left-color:#28a745;">
                    <strong>Clinical Pearl:</strong> <strong>EMS provider judgment</strong> (Step 4) is an official criterion for trauma centre transport. If you feel that a patient needs a trauma centre — even if they do not meet any of the other criteria — your clinical judgment is a valid reason to bypass the closest ED and transport to a trauma centre. Do not override your gut feeling.
                </div>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point — CDC Triage:</strong> The stepwise approach means you start at Step 1 (physiologic) and proceed through Step 4. If a patient meets ANY criterion at ANY step, transport to a trauma centre. The criteria are designed to be highly sensitive (catch all potentially severely injured patients) at the cost of being less specific (some patients will be 'overtriaged' — this is acceptable). <strong>You can always downgrade a trauma alert; you can never upgrade a patient who was not transported to a trauma centre.</strong> When in doubt, err on the side of trauma centre transport. For patients meeting only Step 3 (mechanism) criteria without physiologic or anatomic abnormality, transport to the closest appropriate trauma centre — they have potentially severe but currently occult injuries.
                </div>
            </div>`,
            flashcards: [
                { question: "What is the difference between sequential and simultaneous ABCDE assessment?", answer: "Sequential: assess and treat each step one at a time. Simultaneous: multiple team members assess and intervene in parallel — used in multisystem trauma where the patient is unstable and needs rapid, coordinated intervention.", category: "Multisystem Trauma" },
                { question: "What are the four reversible causes of traumatic cardiac arrest?", answer: "Tension pneumothorax, cardiac tamponade, haemorrhagic shock (hypovolaemia), and hypoxia. The heart is often empty or compressed — address the cause, not just the rhythm.", category: "Trauma Arrest" },
                { question: "Why is the pregnant trauma patient at risk for supine hypotensive syndrome?", answer: "After ~20 weeks, the gravid uterus compresses the IVC when supine, reducing venous return by up to 30%. Manage with left uterine displacement (manual or wedge under right hip).", category: "Trauma in Pregnancy" },
                { question: "What is the leading cause of foetal death after maternal trauma?", answer: "Placental abruption — premature separation of the placenta from the uterine wall. Can occur with even minor trauma. Signs: uterine tenderness, firm uterus, vaginal bleeding (may be concealed), foetal distress.", category: "Trauma in Pregnancy" },
                { question: "What is perimortem C-section and when is it considered?", answer: "A last-resort delivery to save the foetus when a pregnant patient is in cardiac arrest. If no ROSC after 4 minutes of arrest in a visibly gravid uterus, immediate C-section may be considered by a physician.", category: "Trauma in Pregnancy" },
                { question: "Why is anticoagulation a critical consideration in elderly trauma patients?", answer: "Anticoagulants (warfarin, DOACs, antiplatelets) increase bleeding risk. Minor trauma can cause life-threatening haemorrhage — especially intracranial bleeding after a head strike. Any fall with head strike in an anticoagulated patient warrants CT evaluation.", category: "Trauma in Elderly" },
                { question: "What are the four steps of the CDC Field Triage Guidelines?", answer: "Step 1 (Physiologic): GCS, SBP, RR. Step 2 (Anatomic): specific injury patterns. Step 3 (Mechanism): high-energy mechanisms. Step 4 (Special): age, anticoagulation, pregnancy, burns, EMS judgment.", category: "Transport Decisions" },
                { question: "What is the Revised Trauma Score and what three parameters does it use?", answer: "A physiologic scoring system using GCS, systolic blood pressure, and respiratory rate. An RTS <12 indicates high risk and warrants trauma centre transport.", category: "Trauma Scoring" }
            ],
            quiz: [
                {
                    q: "A 28-year-old pregnant female at 32 weeks gestation is involved in a head-on MVC at 45 mph. She is complaining of abdominal pain and reports decreased foetal movement. Vital signs: HR 108, BP 100/68, RR 22, SpO₂ 97%. The uterus is firm and tender. There is no vaginal bleeding. What is the MOST likely diagnosis and the priority intervention?",
                    options: [
                        "Uterine rupture — the patient needs immediate surgery; transport with lights and sirens",
                        "Placental abruption with concealed haemorrhage — the firm, tender uterus and decreased foetal movement are classic signs. Apply left uterine displacement, administer high-flow oxygen, transport to a trauma centre with obstetrics capability, and notify the hospital",
                        "Normal pregnancy — the firm uterus is Braxton-Hicks contractions from the stress of the crash; foetal movement is variable",
                        "Amniotic fluid embolism — transport urgently for ICU care"
                    ],
                    correct: 1,
                    explanation: "This is a classic presentation of placental abruption: firm/tender ('wooden') uterus, decreased foetal movement, and maternal signs of early shock (mild tachycardia, borderline low BP) after blunt trauma in the third trimester. The absence of vaginal bleeding does NOT rule out abruption — approximately 20% are concealed. Management: 1) Left uterine displacement (wedge under right hip or manual displacement), 2) High-flow oxygen (maximises foetal O₂ delivery), 3) IV access, 4) Fluid resuscitation per protocol, 5) Transport to a facility with obstetrics and neonatal intensive care capabilities, 6) Hospital notification for a combined trauma/obstetrics response."
                },
                {
                    q: "A 75-year-old female on warfarin for atrial fibrillation fell from standing height and struck her head on a coffee table. She has a 3 cm scalp laceration and a small haematoma. She is awake and alert, GCS 15, with no loss of consciousness. Her vital signs are normal. She has no other complaints. The family asks if she can be treated at home. What is the MOST appropriate decision?",
                    options: [
                        "The patient appears well and GCS is normal — she can be treated at the scene with wound care and left at home if the family will monitor her",
                        "Transport to hospital — any head strike in an anticoagulated patient is high risk for intracranial haemorrhage (even without loss of consciousness or altered mental status). Warfarin use combined with a fall and a head strike meets Step 4 of the CDC Field Triage Guidelines",
                        "Transport only if the patient develops symptoms like headache, nausea, or confusion",
                        "Transfer to the family doctor's office in the morning for wound care"
                    ],
                    correct: 1,
                    explanation: "Anticoagulation (warfarin, DOACs, antiplatelet agents) is a Step 4 CDC Field Triage criterion. A seemingly minor head strike in an anticoagulated patient can cause a life-threatening subdural haematoma. The patient may have a 'lucid interval' — appearing normal initially, then deteriorating as the haematoma expands. Transport to an ED with CT capability is mandatory. The scalp laceration should be covered with a sterile dressing. No, the patient cannot stay home — even for observation by the family, because they cannot perform a CT scan."
                },
                {
                    q: "[HARD] A trauma patient arrives at a rural EMS station via private vehicle. He is a 22-year-old male who was stabbed once in the left chest at the anterior axillary line, approximately 5 cm below the nipple. He is awake and anxious but his breathing is laboured. Breath sounds are absent on the left. BP is 90/68, HR 128, RR 28. He has a visible sucking chest wound that is bubbling with each breath. There are no other injuries. The closest hospital is 12 minutes away (no trauma centre). A Level I trauma centre is 32 minutes away by ground. What is the MOST appropriate transport decision?",
                    options: [
                        "Transport to the closest hospital (12 min) — this patient has an open pneumothorax and possible haemorrhage; he needs immediate stabilization before a longer transport",
                        "Apply an occlusive dressing to the chest wound (three-sided, or a commercial chest seal), perform needle decompression per ALS protocol if tension develops, and transport to the trauma centre (32 min) — he meets Step 1 (physiologic: SBP ≤90, RR >29) and Step 2 (anatomic: penetrating torso injury) trauma criteria and will ultimately need a surgeon for the wound track",
                        "Transport to the closest hospital — the patient has a sucking chest wound but can be stabilised at any ED; the trauma centre is too far",
                        "Request a helicopter — ground transport to either facility is inappropriate for a penetrating chest trauma patient"
                    ],
                    correct: 1,
                    explanation: "This patient meets trauma centre criteria at multiple levels: Step 1 (physiologic: SBP ≤90, RR >29) and Step 2 (anatomic: penetrating torso injury). A patient with a penetrating chest wound and haemodynamic instability needs a trauma surgeon — not just any ED. The management priorities: 1) Apply an occlusive chest seal (commercial or three-sided taped dressing) to the sucking chest wound, 2) Monitor for tension pneumothorax — if signs develop (increasing dyspnoea, hypotension, tracheal deviation, JVD), request ALS for needle decompression, 3) High-flow oxygen, 4) IV access and fluid resuscitation per protocol, 5) Transport to the trauma centre — 32 minutes is reasonable with appropriate en route care. A 12-minute transport to a non-trauma centre would delay surgical care and likely require a second transfer."
                },
                {
                    q: "Which of the following patients meets Step 1 (physiologic) criteria for trauma centre transport per the CDC Field Triage Guidelines?",
                    options: [
                        "A patient with a GCS of 15, SBP 120, and RR 18 after a fall from 10 feet",
                        "A patient with a GCS of 13, SBP 88, and RR 16 after a motor vehicle collision",
                        "A patient with a GCS of 15, SBP 140, and RR 22 after a gunshot wound to the forearm",
                        "A patient with a GCS of 14, SBP 130, and RR 20 after a bicycle fall"
                    ],
                    correct: 1,
                    explanation: "Step 1 (physiologic) criteria: GCS <14 OR SBP ≤90 mmHg OR RR <10 or >29. Option B has GCS 13 (<14) AND SBP 88 (≤90) — both are positive criteria. Option A has no physiologic abnormalities (and mechanism alone — fall 10 ft — is Step 3, not Step 1). Option C has a normal exam but meets Step 2 (anatomic: penetrating injury proximal to elbow). Option D has GCS 14 (not <14) and normal vitals. Remember: if a patient meets ANY criterion at any step, transport to a trauma centre."
                }
            ],
            critical: [
                {
                    id: "crit_6_11_1",
                    scenario: "You are called to the scene of a head-on motor vehicle collision. A 34-year-old unrestrained male driver has been extricated by fire/rescue. He is unresponsive, with a GCS of 6 (E1 V2 M3). He has a large contusion to his sternum from the steering wheel, paradoxical chest wall movement on the right (flail segment), and a distended, rigid abdomen. Vital signs: HR 136, BP 74/40, RR 6 (agonal respirations), SpO₂ 82%. His right leg is shortened and externally rotated. A tourniquet has been applied to his left arm for a near-complete amputation at the mid-forearm. On-scene time is already 12 minutes. The closest trauma centre is 18 minutes away.",
                    question: "What is the priority sequence of simultaneous assessment and interventions for this multisystem trauma patient?",
                    options: [
                        {t: "This patient has multiple life threats and needs simultaneous team interventions: 1) Airway — intubate or BVM ventilate at 10–12/min (RR 6 is critically low), 2) Breathing — apply occlusive dressing/chest seal if any open wound, assist ventilation with BVM, 3) Circulation — confirm the tourniquet is effective, apply pelvic binder (suspected pelvic fracture from the shortened/ER'd leg and high-energy mechanism), start IV/IO access and fluid resuscitation, 4) Disability — maintain spinal motion restriction, 5) Exposure — prevent hypothermia. Minimise scene time — transport within 10 minutes with ongoing care en route", f: "Correct — This is a critical multisystem trauma patient with ABC threats from airway/breathing (flail chest, agonal respirations, hypoxia), circulation (haemorrhagic shock from multiple sources — flail chest can cause pulmonary contusion/bleeding, distended/rigid abdomen suggests intra-abdominal haemorrhage, pelvic fracture, and amputation). The team must work simultaneously: one provider manages airway/breathing (BVM with O₂, seal sucking wounds), another manages circulation (confirm tourniquet, apply pelvic binder, start IV fluids), a third obtains ongoing vital signs. Scene time should be minimised — load and go after critical interventions (airway, haemorrhage control) are initiated."},
                        {t: "This patient has too many injuries to manage in the field — perform a complete head-to-toe assessment and apply all appropriate splints before moving the patient. Full immobilisation on a long spine board with cervical collar, all fractures splinted, and a complete set of vital signs must be obtained before transport", f: "Incorrect — In a critical multisystem trauma patient, a prolonged scene time for complete immobilisation and detailed assessment is dangerous. The patient has an unprotected airway, inadequate breathing, and haemorrhagic shock — he may die on scene if you spend time on full immobilisation and splinting. The priority is to address immediate life threats (airway, breathing, circulation), perform a rapid trauma assessment en route, and transport. Studies show that prolonged scene time in hypotensive trauma patients increases mortality."}
                    ],
                    correct: 0,
                    explanation: "This patient has the highest possible acuity — multisystem trauma with haemorrhagic shock, compromised airway and breathing, and multiple injury sources. The approach is: 1) Rapid ABC assessment with simultaneous interventions — BVM ventilation (airway/breathing), haemorrhage control (tourniquet check, pelvic binder, start fluids), 2) Minimise scene time — the definitive care is in the operating room; the field role is to keep the patient alive during transport, 3) Transport to a Level I trauma centre (Step 1 and 2 criteria clearly met), 4) Notify the hospital with a trauma alert — this patient needs a full trauma team (surgeons from multiple specialties) waiting on arrival, 5) Continue assessment and interventions en route (secondary survey, vital signs every 5 minutes, ongoing haemorrhage control).",
                    kpi: "Prioritises simultaneous ABC interventions with minimal scene time in critical multisystem trauma"
                },
                {
                    id: "crit_6_11_2",
                    scenario: "You are called to a private residence for a 78-year-old female who fell from standing height while walking to the bathroom. She is on the floor and cannot get up. She has a history of hypertension, atrial fibrillation (on warfarin), and osteoporosis. She is alert and oriented to person, place, and time, but cannot remember exactly what happened. Her husband states she 'just fell' and did not hit her head. There is no visible head injury. Vital signs: HR 92 (irregularly irregular — known A-fib), BP 144/88, RR 16, SpO₂ 96%. She complains of pain in her left hip and groin. The left leg is shortened and externally rotated. PMS is intact distally.",
                    question: "What injuries should the EMT suspect and what is the appropriate transport decision?",
                    options: [
                        {t: "Suspect a left hip fracture (likely femoral neck or intertrochanteric) based on the shortened, externally rotated leg after a low-energy fall. The patient has had no head strike and is neurologically intact — the fall was mechanical (tripped). However, anticoagulation (warfarin) is a Step 4 special consideration. Manage: immobilise the left leg with a pillow or long spine board splint, apply a cold pack, gentle handling, and transport to a trauma centre (or closest ED capable of managing anticoagulated patients with hip fractures — some require a 'hip fracture protocol')", f: "Correct — This patient likely has a hip fracture (shortened, externally rotated leg after a fall in an elderly patient with osteoporosis). The fact that she is on warfarin with any fall — even without a clear head strike — requires careful consideration. Per CDC Step 4, anticoagulation is a special consideration that warrants transport to a facility that can manage both the fracture and the anticoagulation (haematology/orthopaedic co-management). Even without meeting Step 1–3 criteria, her age (>55) and anticoagulation use together make a strong case for trauma centre evaluation. Immobilise the leg, pad all areas well, handle gently (fragile skin), and transport."},
                        {t: "The patient is stable, alert, and has a simple hip fracture — transport to the closest ED for X-ray and orthopaedic referral. The warfarin is not an emergency concern — the hospital will manage it. No need for a trauma centre or special precautions", f: "Incorrect — Anticoagulation in an elderly trauma patient is a significant concern. While this patient appears stable, the combination of age >55, anticoagulation use, and a fall with fracture meets Step 4 special considerations. Additionally, the patient cannot remember if she hit her head (her memory of the event is unclear) — a brief loss of consciousness or amnesia for the event cannot be ruled out. Anticoagulated patients can develop delayed intracranial haemorrhage. This patient warrants transport to a facility capable of managing both orthopaedic trauma and anticoagulation-related complications."}
                    ],
                    correct: 0,
                    explanation: "Elderly patients with low-energy falls represent a significant trauma population. In this case: 1) The hip fracture is likely — shortened, externally rotated leg after a fall in a patient with osteoporosis, 2) Anticoagulation (warfarin) elevates the risk — the patient needs a trauma evaluation, not just an orthopaedic consult, 3) The patient's memory of the fall is unclear — a head CT may be warranted even without obvious head injury (a 'mechanical fall' may have been caused by a syncopal episode or a brief dysrhythmia — the A-fib is relevant here), 4) Management: immobilise the leg (pillow splint or long spine board splint — gentle handling), apply cold pack, pad all contact areas (fragile skin), obtain a medication list (bring the warfarin bottle to the hospital), and transport. Notify the receiving hospital of the fall, hip fracture, and anticoagulant use.",
                    kpi: "Recognises the significance of low-energy falls in anticoagulated elderly patients and applies trauma centre criteria appropriately"
                },
                {
                    id: "crit_6_11_3",
                    scenario: "You are called to a restaurant for a 30-year-old pregnant female at approximately 34 weeks gestation who choked on food and became unresponsive. Bystanders performed abdominal thrusts and dislodged the food, but the patient is now in cardiac arrest. She is on the floor, unresponsive, not breathing, and pulseless. Bystander CPR is in progress. The patient is visibly pregnant (large gravid abdomen). Your team arrives with an AED, BVM, and cardiac monitor. The estimated time from collapse is approximately 3 minutes.",
                    question: "What is the priority management sequence for this patient, and what special considerations apply?",
                    options: [
                        {t: "Manage as standard cardiac arrest: start CPR, apply AED (shock if indicated), establish IV/IO access, administer epinephrine per protocol, and consider reversible causes. Additionally, manually displace the uterus to the left (or wedge under the right hip) to relieve aortocaval compression during CPR. If no ROSC after 4 minutes, prepare for possible perimortem C-section", f: "Correct — This is a cardiac arrest in a visibly pregnant patient. The management follows standard ACLS with critical modifications: 1) High-quality CPR with left uterine displacement (manual displacement of the uterus to the left, or wedge under the right hip) — this relieves IVC compression and improves venous return during chest compressions, 2) Airway management — BVM with 100% O₂, intubate early if possible (pregnant patients desaturate rapidly due to decreased FRC), 3) Defibrillation — standard energy levels are safe in pregnancy, 4) Epinephrine per protocol (vasopressin is not recommended), 5) Identify and treat reversible causes (the 4 H's and T's, plus pregnancy-specific causes: amniotic fluid embolism, eclampsia, haemorrhage), 6) If no ROSC after 4 minutes of high-quality CPR with left uterine displacement, the foetus should be delivered emergently (perimortem C-section by a physician) — this relieves aortocaval compression and improves the mother's chance of ROSC while also potentially saving the foetus."},
                        {t: "Treat as a standard cardiac arrest — CPR and defibrillation. There is no need for special positioning or consideration for pregnancy — the AED does not need modification and pregnancy does not change the resuscitation algorithm", f: "Incorrect — Pregnancy significantly alters cardiac arrest management. The gravid uterus compresses the IVC, reducing the effectiveness of chest compressions (which already produce only 20–30% of normal cardiac output). Without left uterine displacement, CPR may be ineffective. Additionally, after 4 minutes of arrest without ROSC in a visibly pregnant uterus, perimortem C-section is a critical intervention that improves maternal and foetal survival chances. The standard ACLS algorithm applies, but these pregnancy-specific modifications are essential."}
                    ],
                    correct: 0,
                    explanation: "Cardiac arrest in pregnancy requires a modified approach. The key principles: 1) Left uterine displacement is essential — manual displacement or a wedge under the right hip relieves IVC compression, allowing chest compressions to generate meaningful cardiac output. 2) Early intubation — pregnant patients have decreased functional residual capacity and increased oxygen consumption, causing rapid desaturation. 3) Defibrillation is safe — standard energy levels do not harm the foetus. 4) After 4 minutes of arrest without ROSC, perimortem C-section should be performed at the site of arrest (hospital or ED) — this improves maternal survival (relieves aortocaval compression, allowing ROSC) and provides an opportunity to save the foetus. The EMT's role: perform high-quality CPR with left uterine displacement, defibrillate as indicated, ventilate with 100% O₂, establish IV access, administer epinephrine per protocol, and transport rapidly to a facility capable of perimortem C-section. If a physician is available on scene, the C-section should be initiated after 4 minutes of arrest.",
                    kpi: "Manages cardiac arrest in pregnancy with left uterine displacement and understands perimortem C-section indications"
                }
            ]
        }
    ]
};
