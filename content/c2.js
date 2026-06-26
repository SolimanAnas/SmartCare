/* ========== Chapter 2 – Patient Assessment ========== */
window.CPG_DATA = {
    id: "c2",
    title: "Patient Assessment",
    shortTitle: "2. Patient Assessment",
    sections: [
    {
        id: "c2s1",
        shortTitle: "2.1 Anatomy & Physiology Essentials",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Anatomy & Physiology Essentials</h3>

            <h4>Anatomical Position</h4>
            <p>The <strong>anatomical position</strong> is the universal reference posture used to describe the location and relationship of body structures. In this position, the patient stands upright, facing forward, with arms at the sides and palms facing forward. All directional terms — superior, inferior, anterior, posterior, medial, lateral, proximal, distal — are defined relative to this position. Mastering these terms is essential for clear communication with other healthcare providers and for accurate documentation of assessment findings.</p>

            <table>
                <thead>
                    <tr><th>Directional Term</th><th>Definition</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td>Superior (Cephalad)</td><td>Toward the head</td><td>The chest is superior to the abdomen</td></tr>
                    <tr><td>Inferior (Caudad)</td><td>Toward the feet</td><td>The pelvis is inferior to the rib cage</td></tr>
                    <tr><td>Anterior (Ventral)</td><td>Toward the front of the body</td><td>The sternum is anterior to the heart</td></tr>
                    <tr><td>Posterior (Dorsal)</td><td>Toward the back of the body</td><td>The spine is posterior to the trachea</td></tr>
                    <tr><td>Medial</td><td>Toward the midline of the body</td><td>The nose is medial to the eyes</td></tr>
                    <tr><td>Lateral</td><td>Away from the midline</td><td>The arms are lateral to the torso</td></tr>
                    <tr><td>Proximal</td><td>Closer to the point of attachment or trunk</td><td>The shoulder is proximal to the elbow</td></tr>
                    <tr><td>Distal</td><td>Farther from the point of attachment or trunk</td><td>The wrist is distal to the elbow</td></tr>
                </tbody>
            </table>

            <h4>Body Planes</h4>
            <p>Body planes are imaginary flat surfaces used to divide the body for anatomical description. Three major planes are essential in EMS assessment:</p>
            <ul>
                <li><strong>Mid-sagittal (Median) Plane:</strong> Divides the body vertically into equal left and right halves. Any plane parallel to this is called a <strong>sagittal plane</strong>.</li>
                <li><strong>Frontal (Coronal) Plane:</strong> Divides the body vertically into anterior (front) and posterior (back) portions. Used to describe injuries that affect the front or back of the body.</li>
                <li><strong>Transverse (Horizontal/Axial) Plane:</strong> Divides the body horizontally into superior (upper) and inferior (lower) portions. Critical for describing the location of injuries such as spinal cord lesions.</li>
            </ul>

            <h4>Body Cavities</h4>
            <p>The body is organized into cavities — fluid-filled spaces that house and protect internal organs. Understanding these cavities helps you localize injuries and anticipate which organ systems may be affected:</p>
            <table>
                <thead>
                    <tr><th>Cavity</th><th>Boundaries</th><th>Major Organs</th></tr>
                </thead>
                <tbody>
                    <tr><td>Cranial Cavity</td><td>Inside the skull</td><td>Brain, meninges, cerebrospinal fluid</td></tr>
                    <tr><td>Spinal (Vertebral) Canal</td><td>Within the vertebral column</td><td>Spinal cord, nerve roots, cerebrospinal fluid</td></tr>
                    <tr><td>Thoracic Cavity</td><td>Between the diaphragm and the rib cage</td><td>Heart, lungs, great vessels, esophagus, trachea</td></tr>
                    <tr><td>Abdominal Cavity</td><td>Below the diaphragm, above the pelvis</td><td>Stomach, liver, spleen, pancreas, intestines, kidneys</td></tr>
                    <tr><td>Pelvic Cavity</td><td>Within the bony pelvis</td><td>Bladder, rectum, reproductive organs</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The thoracic and abdominal cavities are separated by the diaphragm — a dome-shaped muscle essential for breathing. Injury to the diaphragm can allow abdominal organs to herniate into the chest, compromising ventilation and circulation. Always consider diaphragmatic injury in penetrating trauma to the lower chest or upper abdomen.
            </div>

            <h4>Levels of Structural Organization</h4>
            <p>The human body is organized hierarchically from simple to complex. This hierarchy is fundamental to understanding how disease and injury affect the body at different levels:</p>
            <ul>
                <li><strong>Atoms and Molecules:</strong> The chemical building blocks. Oxygen, carbon, hydrogen, nitrogen form the basis of all biological molecules including proteins, carbohydrates, lipids, and nucleic acids (DNA/RNA).</li>
                <li><strong>Cells:</strong> The basic unit of life. The human body contains trillions of cells, each specialized for a particular function — nerve cells (neurons) conduct electrical impulses, muscle cells contract, red blood cells carry oxygen.</li>
                <li><strong>Tissues:</strong> Groups of similar cells working together to perform a specific function. The four primary tissue types are: <strong>epithelial</strong> (covering/lining), <strong>connective</strong> (support/connection), <strong>muscle</strong> (movement), and <strong>nervous</strong> (communication/control).</li>
                <li><strong>Organs:</strong> Structures composed of two or more tissue types working together to perform a specific function. Examples: heart, lungs, liver, kidneys, brain.</li>
                <li><strong>Organ Systems:</strong> Groups of organs that work together to perform major body functions. The human body has 11 organ systems.</li>
                <li><strong>Organism:</strong> The complete living individual — all organ systems functioning together as a whole.</li>
            </ul>

            <h4>Major Organ Systems</h4>
            <table>
                <thead>
                    <tr><th>System</th><th>Major Components</th><th>Primary Functions</th></tr>
                </thead>
                <tbody>
                    <tr><td>Cardiovascular</td><td>Heart, blood vessels, blood</td><td>Pump and circulate blood; deliver O₂ and nutrients; remove waste</td></tr>
                    <tr><td>Respiratory</td><td>Lungs, airways (trachea, bronchi), diaphragm</td><td>Gas exchange — O₂ in, CO₂ out; pH regulation</td></tr>
                    <tr><td>Nervous</td><td>Brain, spinal cord, peripheral nerves</td><td>Control and coordination; sensory input, motor output, cognition</td></tr>
                    <tr><td>Musculoskeletal</td><td>Bones, muscles, joints, tendons, ligaments</td><td>Support, movement, protection of vital organs, calcium storage</td></tr>
                    <tr><td>Integumentary</td><td>Skin, hair, nails, sweat glands</td><td>Barrier protection, temperature regulation, sensation</td></tr>
                    <tr><td>Digestive</td><td>Mouth, esophagus, stomach, intestines, liver, pancreas</td><td>Break down food, absorb nutrients, eliminate waste</td></tr>
                    <tr><td>Endocrine</td><td>Glands (pituitary, thyroid, adrenal, pancreas)</td><td>Hormone-mediated regulation of metabolism, growth, stress response</td></tr>
                    <tr><td>Urinary</td><td>Kidneys, ureters, bladder, urethra</td><td>Filter blood, produce urine, regulate fluid/electrolyte balance</td></tr>
                    <tr><td>Reproductive</td><td>Ovaries/testes, associated structures</td><td>Production of gametes and sex hormones</td></tr>
                    <tr><td>Lymphatic/Immune</td><td>Lymph nodes, spleen, thymus, lymph vessels</td><td>Immune defense, fluid balance, waste removal from tissues</td></tr>
                </tbody>
            </table>

            <h4>Abdominopelvic Regions (Quadrants)</h4>
            <p>In the prehospital setting, we use <strong>four quadrants</strong> to describe the location of abdominal findings. The quadrants are formed by two imaginary lines — one vertical (midline) and one horizontal (at the umbilicus) — dividing the abdomen into four sections:</p>
            <ul>
                <li><strong>Right Upper Quadrant (RUQ):</strong> Liver, gallbladder, duodenum, head of pancreas, right kidney, hepatic flexure of colon. Tenderness here may indicate cholecystitis, hepatitis, or renal colic.</li>
                <li><strong>Left Upper Quadrant (LUQ):</strong> Stomach, spleen, tail of pancreas, left kidney, splenic flexure of colon. Spleen is the most commonly injured organ in blunt left upper quadrant trauma.</li>
                <li><strong>Right Lower Quadrant (RLQ):</strong> Appendix, cecum, ascending colon, right ovary (female), right ureter. Tenderness here is classic for appendicitis.</li>
                <li><strong>Left Lower Quadrant (LLQ):</strong> Sigmoid colon, descending colon, left ovary (female), left ureter. Common site of diverticulitis pain.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> In the prehospital setting, precise anatomical terminology enables clear, concise communication with receiving physicians and accurate documentation on the PCR. Use directional terms (e.g., "tenderness in the RLQ") rather than vague descriptions (e.g., "pain on the right side of the belly").
            </div>
        </div>`,
        flashcards: [
            { question: "What is the anatomical position?", answer: "Standing upright, facing forward, arms at sides with palms facing forward. All directional terms are defined relative to this position.", category: "Anatomy Basics" },
            { question: "What directional term means 'closer to the point of attachment or trunk'?", answer: "Proximal — e.g., the shoulder is proximal to the elbow.", category: "Directional Terms" },
            { question: "Which body plane divides the body into equal left and right halves?", answer: "The mid-sagittal (median) plane.", category: "Body Planes" },
            { question: "Name the four abdominal quadrants and list one major organ in each.", answer: "RUQ (liver/gallbladder), LUQ (stomach/spleen), RLQ (appendix/cecum), LLQ (sigmoid colon).", category: "Abdominal Anatomy" },
            { question: "What are the four primary tissue types in the human body?", answer: "Epithelial (covering), connective (support), muscle (movement), and nervous (communication/control).", category: "Structural Organization" },
            { question: "What body cavity contains the heart and lungs?", answer: "The thoracic cavity, bounded by the rib cage and diaphragm.", category: "Body Cavities" },
            { question: "What organ system is responsible for gas exchange and pH regulation?", answer: "The respiratory system (lungs, airways, diaphragm).", category: "Organ Systems" },
            { question: "What is the difference between 'anterior' and 'posterior'?", answer: "Anterior (ventral) means toward the front of the body; posterior (dorsal) means toward the back.", category: "Directional Terms" }
        ],
        quiz: [
            { q: "In the anatomical position, the palms of the hands face:", options: ["Backward", "Forward", "Medially toward the body", "Downward"], correct: 1 },
            { q: "Which directional term describes a structure that is closer to the midline?", options: ["Lateral", "Distal", "Medial", "Superior"], correct: 2 },
            { q: "The transverse plane divides the body into:", options: ["Left and right portions", "Anterior and posterior portions", "Superior and inferior portions", "Medial and lateral portions"], correct: 2 },
            { q: "The spleen is located in which abdominal quadrant?", options: ["Right Upper Quadrant", "Left Upper Quadrant", "Right Lower Quadrant", "Left Lower Quadrant"], correct: 1 },
            { q: "The correct hierarchy of structural organization from simplest to most complex is:", options: ["Cells → Tissues → Organs → Systems → Organism", "Cells → Organs → Tissues → Systems → Organism", "Tissues → Cells → Organs → Systems → Organism", "Cells → Tissues → Systems → Organs → Organism"], correct: 0 },
            { q: "Which organ system includes the brain and spinal cord?", options: ["Cardiovascular", "Endocrine", "Nervous", "Musculoskeletal"], correct: 2 },
            { q: "[HARD] An EMT documents a wound as being 'proximal to the left wrist.' Where is the wound located?", options: ["On the left hand", "Between the left wrist and the shoulder", "On the left wrist itself", "Distal to the left elbow but closer to the trunk than the wrist"], correct: 1 },
            { q: "[HARD] A patient sustained blunt trauma to the left upper quadrant. Which organ is at HIGHEST risk for injury?", options: ["The appendix", "The liver", "The spleen", "The sigmoid colon"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_2_1_1",
                scenario: "You are documenting a patient care report after transporting a 45-year-old male involved in a motor vehicle collision. The patient struck the steering wheel with his chest and complains of pain in the upper abdomen. On examination, you noted tenderness in the left upper quadrant and bruising over the lower sternum. The patient also has a laceration on his right forearm approximately 4 inches below the elbow. The emergency department physician asks you to clarify the location of the forearm laceration using precise anatomical terminology.",
                question: "How should you describe the location of the forearm laceration in your documentation?",
                options: [
                    {t: "4 inches distal to the right elbow on the anterior forearm", f: "Correct — 'distal' means farther from the trunk, and 'anterior' describes the front surface."},
                    {t: "4 inches proximal to the right elbow on the lateral forearm", f: "Incorrect — 'proximal' means closer to the trunk, but the laceration is below the elbow, making it distal, not proximal."}
                ],
                correct: 0,
                explanation: "The laceration is below (farther from) the elbow joint, making it distal to the elbow. The anterior surface of the forearm faces forward in the anatomical position. Precise documentation using correct directional terminology ensures clear communication with other healthcare providers.",
                kpi: "Uses correct directional terminology (distal, proximal, anterior, posterior, medial, lateral) in documentation"
            },
            {
                id: "crit_2_1_2",
                scenario: "You are called to a construction site where a 32-year-old male worker fell from a ladder, landing on his right side. He is alert and oriented with a patent airway and adequate breathing. He complains of severe pain in the right upper quadrant of his abdomen and point tenderness over the lower right rib cage. His vital signs are: BP 100/68, P 112, R 20, SpO₂ 97%. The patient has no visible external bleeding. Your partner suspects potential liver injury given the mechanism and location of pain.",
                question: "Based on the anatomical location of the injury and the patient's vital signs, which assessment priority is MOST appropriate?",
                options: [
                    {t: "Transport rapidly with high-index suspicion for intra-abdominal bleeding — the liver in the RUQ is highly vascular, and tachycardia with borderline BP suggests early shock", f: "Correct — The liver is located in the RUQ and is a highly vascular organ. Blunt trauma can cause liver laceration with significant internal bleeding. Tachycardia with borderline hypotension suggests early hypovolemic shock."},
                    {t: "Apply a cervical collar and immobilize the patient — spinal injury is the only concern from a fall", f: "Incorrect — While spinal precautions are indicated after a fall, the RUQ pain and vital sign changes suggest intra-abdominal injury that requires immediate attention. Spinal immobilization alone does not address the potential for hemorrhagic shock."}
                ],
                correct: 0,
                explanation: "The liver occupies most of the right upper quadrant and is the largest solid organ in the abdomen. It is highly vascular and prone to laceration from blunt trauma to the right lower ribs or upper abdomen. The patient's tachycardia (P 112) and borderline low blood pressure (100/68) are early signs of hypovolemic shock. Transport to a trauma center and rapid assessment for intra-abdominal bleeding are the priorities. Spinal precautions should still be maintained given the fall mechanism.",
                kpi: "Accurately correlates organ location (RUQ=liver) with mechanism of injury to anticipate internal injuries"
            },
            {
                id: "crit_2_1_3",
                scenario: "During your shift, you respond to a 66-year-old female with severe diffuse abdominal pain, nausea, and vomiting. The patient is unable to lie still and is curled on her side. She points to her entire abdomen when asked where it hurts. Her vital signs are: BP 148/92, P 98, R 18, SpO₂ 96%, temperature 101.2°F. She has a history of hypertension, type 2 diabetes, and gallstones. She states the pain started about 6 hours after a large meal. Upon palpation, you note the greatest tenderness in the right upper quadrant with guarding. The patient says the pain sometimes radiates to her right shoulder blade.",
                question: "Based on the anatomical distribution of pain and tenderness, which organ system is MOST likely involved?",
                options: [
                    {t: "The biliary system — RUQ tenderness with radiation to the right shoulder (Kehr's sign equivalent) and postprandial onset is classic for cholecystitis", f: "Correct — The gallbladder is located in the RUQ. Pain that occurs after a fatty meal, radiates to the right shoulder/scapula, and is associated with guarding suggests acute cholecystitis (gallbladder inflammation). The low-grade fever supports an inflammatory process."},
                    {t: "The urinary system — flank pain radiating to the back suggests a kidney stone or pyelonephritis", f: "Incorrect — While the right kidney is also in the RUQ, kidney pain typically presents as flank pain (posterior/lateral), not right shoulder radiation. Postprandial onset is more consistent with biliary disease than renal colic."}
                ],
                correct: 0,
                explanation: "The gallbladder sits in the right upper quadrant beneath the liver. Acute cholecystitis typically presents with severe RUQ pain that may radiate to the right shoulder or scapula (referred pain via the phrenic nerve), often occurring after a fatty meal. Guarding (involuntary muscle contraction) indicates peritoneal irritation. The patient's fever, tachycardia, and history of gallstones further support this diagnosis. Understanding referred pain patterns helps EMTs differentiate between abdominal emergencies.",
                kpi: "Applies knowledge of referred pain patterns and organ location to differential assessment"
            }
        ]
    },
    {
        id: "c2s2",
        shortTitle: "2.2 Pathophysiology of Perfusion & Shock",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Pathophysiology of Perfusion & Shock</h3>

            <h4>Definition of Perfusion</h4>
            <p><strong>Perfusion</strong> is the delivery of oxygen and nutrients to the cells of the body via the bloodstream and the removal of cellular waste products (primarily carbon dioxide). Adequate perfusion requires three components working together — often called the <strong>perfusion triangle</strong>:</p>
            <ol>
                <li><strong>The Pump (Heart):</strong> Must contract effectively to generate blood flow. Pump failure leads to cardiogenic shock.</li>
                <li><strong>The Fluid (Blood Volume):</strong> Must be sufficient to fill the vascular system. Volume loss leads to hypovolemic shock.</li>
                <li><strong>The Container (Blood Vessels):</strong> Must maintain appropriate diameter and integrity to distribute blood to vital organs. Vessel dilation or leakage leads to distributive shock.</li>
            </ol>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Signs of adequate perfusion include: normal mental status, warm and dry skin, pink mucous membranes, capillary refill under 2 seconds, strong peripheral pulses, adequate urine output (30-60 mL/hour), and normal vital signs appropriate for the patient's age.
            </div>

            <h4>Hypoxia and Hypoperfusion</h4>
            <p><strong>Hypoxia</strong> is a deficiency in the amount of oxygen reaching the tissues. It can result from inadequate oxygenation in the lungs (hypoxic hypoxia), inadequate oxygen-carrying capacity of the blood (anemic hypoxia), poor cardiac output (stagnant/ischemic hypoxia), or cellular inability to use oxygen (histotoxic hypoxia). Signs of hypoxia include: altered mental status, dyspnea, cyanosis (late sign), tachycardia, and restlessness.</p>
            <p><strong>Hypoperfusion</strong> — more commonly known as <strong>shock</strong> — is the inability of the cardiovascular system to deliver enough oxygen and nutrients to meet the metabolic demands of the body's tissues. Inadequate perfusion, if uncorrected, leads to cellular hypoxia, anaerobic metabolism, lactic acidosis, organ dysfunction, and ultimately cell death and organ failure.</p>

            <h4>Stages of Shock</h4>
            <p>Shock is a progressive condition. Recognizing the stage of shock is critical for determining the urgency of intervention:</p>

            <table>
                <thead>
                    <tr><th>Stage</th><th>Pathophysiology</th><th>Clinical Findings</th><th>Outlook</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Compensated Shock</strong></td><td>The body activates compensatory mechanisms (sympathetic nervous system: increased heart rate, vasoconstriction, increased contractility) to maintain perfusion to vital organs. Blood pressure is <strong>maintained</strong>.</td><td>Tachycardia, pale/cool skin, delayed capillary refill, diaphoresis, anxiety/restlessness, normal blood pressure. This is the EARLIEST stage — detection and intervention here is critical.</td><td>Excellent if recognized and treated promptly. The window for intervention is narrow.</td></tr>
                    <tr><td><strong>Decompensated Shock</strong></td><td>Compensatory mechanisms are overwhelmed. Blood pressure drops as perfusion to vital organs fails. Anaerobic metabolism produces lactic acidosis.</td><td><strong>Hypotension</strong> (systolic BP < 90 mmHg or drop of > 30 mmHg), tachycardia, tachypnea, weak/thready pulses, altered mental status (confusion → unresponsiveness), shallow breathing, oliguria.</td><td>Guarded — aggressive intervention required. End-organ damage begins. The body can no longer compensate.</td></tr>
                    <tr><td><strong>Irreversible Shock</strong></td><td>Prolonged hypoperfusion causes widespread cell death, multi-organ dysfunction, and failure. The damage is no longer reversible even with aggressive medical intervention.</td><td>Profound hypotension unresponsive to treatment, severe acidosis, anuria, unconsciousness, agonal breathing, pulselessness, cardiac arrest.</td><td>Nearly always fatal. Irreversible organ damage has occurred.</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> <strong>Blood pressure is a LATE sign of shock.</strong> In compensated shock, the body maintains a normal BP through tachycardia and vasoconstriction. Do not wait for hypotension to recognize shock. Tachycardia, cool/pale skin, and anxiety are EARLY warning signs that must be reported and treated immediately.
            </div>

            <h4>Types of Shock</h4>
            <p>Shock is classified by its underlying cause. The NREMT curriculum emphasizes these categories:</p>

            <h5>1. Hypovolemic Shock (Most Common)</h5>
            <p>Cause: Loss of intravascular volume — hemorrhage (trauma, GI bleed, ruptured aneurysm) or fluid loss (dehydration, burns, vomiting, diarrhea). The reduced blood volume decreases preload, reducing stroke volume and cardiac output. <strong>Hemorrhagic shock</strong> is the most common cause in trauma patients. Class I (≤15% loss) may show only mild tachycardia; Class IV (>40% loss) is immediately life-threatening with severe hypotension and altered mental status.</p>

            <h5>2. Cardiogenic Shock</h5>
            <p>Cause: Pump failure — the heart cannot generate sufficient cardiac output to perfuse the body. Most commonly due to myocardial infarction (heart attack), but also caused by cardiomyopathy, valve failure, arrhythmias, or myocardial contusion. Hallmarks: pulmonary edema (crackles in lung fields), jugular venous distention (JVD), severe hypotension, and cool/clammy skin — the classic "wet and cold" presentation.</p>

            <h5>3. Distributive Shock</h5>
            <p>Cause: Widespread vasodilation and increased capillary permeability — the "container" becomes too large for the fluid volume. Subtypes include:</p>
            <ul>
                <li><strong>Septic Shock:</strong> Caused by severe systemic infection. Bacteria release toxins that trigger massive vasodilation and capillary leak. Initially presents with warm, flushed skin (the "warm shock" phase) before progressing to cool, clammy skin. Fever or hypothermia, tachycardia, and hypotension are hallmarks.</li>
                <li><strong>Neurogenic Shock:</strong> Caused by spinal cord injury above the T6 level. Loss of sympathetic nervous system tone leads to unopposed vagal activity: profound vasodilation, bradycardia (the KEY difference from other shock types), and hypotension. The skin is warm and dry — not cool — because vasodilation prevents heat retention.</li>
                <li><strong>Anaphylactic Shock:</strong> Caused by a severe allergic reaction (IgE-mediated hypersensitivity). Histamine and other mediators cause widespread vasodilation, bronchoconstriction, and airway edema. Presents with urticaria (hives), angioedema (swelling of the face, lips, tongue, airway), wheezing, stridor, hypotension, and tachycardia.</li>
            </ul>

            <h5>4. Obstructive Shock</h5>
            <p>Cause: A physical obstruction prevents adequate blood flow, despite a functioning heart and adequate volume. The most common prehospital examples are <strong>tension pneumothorax</strong> (air trapped in the pleural space shifts the mediastinum, compressing the heart and great vessels) and <strong>cardiac tamponade</strong> (fluid accumulates in the pericardial sac, compressing the heart and preventing filling). Both present with hypotension, JVD, and muffled heart sounds — though in tension pneumothorax you will also find absent breath sounds and tracheal deviation away from the affected side.</p>

            <h4>Summary: Differentiating Shock Types</h4>
            <table>
                <thead>
                    <tr><th>Shock Type</th><th>Skin</th><th>Heart Rate</th><th>JVD</th><th>Lungs</th><th>Key Differentiator</th></tr>
                </thead>
                <tbody>
                    <tr><td>Hypovolemic</td><td>Cool, pale, diaphoretic</td><td>Tachycardia</td><td>Flat (↓)</td><td>Clear</td><td>Obvious fluid loss or dehydration</td></tr>
                    <tr><td>Cardiogenic</td><td>Cool, pale, diaphoretic</td><td>Tachycardia (or brady in severe)</td><td>↑ Distended</td><td>Crackles/rales</td><td>"Wet and cold" — pulmonary congestion</td></tr>
                    <tr><td>Distributive — Septic</td><td>Warm/flushed early; cool late</td><td>Tachycardia</td><td>Variable</td><td>Variable</td><td>History of infection, fever</td></tr>
                    <tr><td>Distributive — Neurogenic</td><td>Warm, dry, flushed</td><td><strong>Bradycardia</strong></td><td>Variable</td><td>Clear</td><td>Spinal injury above T6 + bradycardia</td></tr>
                    <tr><td>Distributive — Anaphylactic</td><td>Warm, flushed, hives</td><td>Tachycardia</td><td>Variable</td><td>Wheezing/stridor</td><td>Allergen exposure + respiratory involvement</td></tr>
                    <tr><td>Obstructive</td><td>Cool, pale</td><td>Tachycardia</td><td>↑ Distended</td><td>↓ or absent breath sounds</td><td>Unilateral breath sounds + tracheal shift</td></tr>
                </tbody>
            </table>
        </div>`,
        flashcards: [
            { question: "What are the three components of the perfusion triangle?", answer: "The pump (heart), the fluid (blood volume), and the container (blood vessels). All three must function for adequate perfusion.", category: "Perfusion" },
            { question: "What is the difference between hypoxia and hypoperfusion?", answer: "Hypoxia is a deficiency of oxygen at the tissue level. Hypoperfusion (shock) is inadequate blood flow to deliver oxygen and remove waste — hypoperfusion causes hypoxia.", category: "Shock Pathophysiology" },
            { question: "List the three stages of shock in order.", answer: "Compensated (BP maintained via tachycardia/vasoconstriction), Decompensated (hypotension develops, organ damage begins), Irreversible (multi-organ failure, fatal).", category: "Shock Stages" },
            { question: "Why is blood pressure a LATE sign of shock in the compensated stage?", answer: "Because the body compensates by increasing heart rate and constricting peripheral blood vessels — maintaining BP until compensatory mechanisms fail.", category: "Shock Stages" },
            { question: "What are the five categories of shock?", answer: "Hypovolemic (fluid loss), Cardiogenic (pump failure), Distributive (vasodilation — septic, neurogenic, anaphylactic), and Obstructive (physical blockage).", category: "Shock Types" },
            { question: "How does neurogenic shock differ from other types of shock?", answer: "Neurogenic shock presents with warm/dry skin and BRADYCARDIA due to loss of sympathetic tone — most other shock types present with tachycardia and cool/clammy skin.", category: "Shock Types" },
            { question: "What are early signs of compensated shock that an EMT should recognize?", answer: "Tachycardia, pale/cool skin, delayed capillary refill, diaphoresis, anxiety/restlessness, with normal blood pressure.", category: "Shock Recognition" },
            { question: "What is the classic presentation of cardiogenic shock?", answer: "Cool/clammy skin, hypotension, pulmonary congestion (crackles/rales), and jugular venous distention — described as 'wet and cold.'", category: "Shock Types" }
        ],
        quiz: [
            { q: "The three components of the perfusion triangle are:", options: ["Heart, lungs, and brain", "Heart (pump), blood volume (fluid), and blood vessels (container)", "Arteries, veins, and capillaries", "Oxygen, carbon dioxide, and hemoglobin"], correct: 1 },
            { q: "In compensated shock, the blood pressure is:", options: ["Significantly decreased", "Maintained within normal limits", "Elevated above normal", "Unobtainable"], correct: 1 },
            { q: "Which type of shock is characterized by BRADYCARDIA and warm, dry skin?", options: ["Hypovolemic shock", "Cardiogenic shock", "Neurogenic shock", "Septic shock"], correct: 2 },
            { q: "Anaphylactic shock is classified as which type of shock?", options: ["Hypovolemic", "Cardiogenic", "Obstructive", "Distributive"], correct: 3 },
            { q: "The earliest sign of compensated shock is usually:", options: ["Hypotension", "Bradycardia", "Tachycardia", "Cyanosis"], correct: 2 },
            { q: "[HARD] A patient with a spinal cord injury above T6 presents with hypotension and bradycardia. The skin is warm and dry. This presentation is MOST consistent with:", options: ["Hypovolemic shock from occult bleeding", "Neurogenic shock due to loss of sympathetic tone", "Cardiogenic shock from spinal shock", "Septic shock from infection"], correct: 1 },
            { q: "[HARD] Which of the following findings BEST distinguishes obstructive shock from cardiogenic shock?", options: ["Presence of hypotension", "Presence of JVD", "Unilateral absent breath sounds with tracheal deviation", "Cool, clammy skin"], correct: 2 },
            { q: "A trauma patient with tachycardia, cool skin, and a normal blood pressure is MOST likely in which stage of shock?", options: ["Irreversible shock", "Decompensated shock", "Compensated shock", "No shock is present because BP is normal"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_2_2_1",
                scenario: "You are dispatched to a motor vehicle collision involving a 35-year-old male who was the unrestrained driver in a high-speed front-impact crash. On arrival, the patient is sitting on the curb being assisted by bystanders. He is awake and oriented but appears anxious and restless. His skin is pale, cool, and diaphoretic. Vital signs: BP 118/74, P 118, R 22, SpO₂ 96%. There is no visible external bleeding. The patient has tenderness in the left upper quadrant and diffuse abdominal tenderness. Your partner says, 'His blood pressure is normal, so he's probably fine — let's just get him on the stretcher.'",
                question: "What is the MOST appropriate interpretation of this patient's condition?",
                options: [
                    {t: "The patient is in compensated shock from likely intra-abdominal bleeding — his normal BP is maintained by tachycardia and vasoconstriction, but he is deteriorating. Immediate transport to a trauma center is indicated.", f: "Correct — The patient has tachycardia (P 118), anxiety/restlessness, pale cool skin, and a mechanism (unrestrained high-speed MVC) that can cause intra-abdominal bleeding (likely splenic injury given LUQ tenderness). The normal BP is maintained by compensatory mechanisms but this is temporary."},
                    {t: "The patient's vital signs are within normal limits, so shock is not present. He may simply be anxious from the accident", f: "Incorrect — A normal blood pressure in the setting of tachycardia, anxiety, and a high-energy mechanism does NOT rule out shock. Waiting for hypotension to develop would delay critical intervention. Compensated shock has a narrow window before decompensation."}
                ],
                correct: 0,
                explanation: "This patient is in compensated hypovolemic shock. His body is maintaining blood pressure through increased heart rate (118 bpm) and peripheral vasoconstriction (pale/cool skin). The mechanism (unrestrained, high-speed MVC), LUQ tenderness, and restlessness are concerning for splenic rupture with intra-abdominal hemorrhage. Prompt recognition of compensated shock — before hypotension develops — is a critical EMT skill. The patient needs high-priority transport to a trauma center with IV access en route.",
                kpi: "Recognizes compensated shock despite normal blood pressure using tachycardia, skin signs, and mental status"
            },
            {
                id: "crit_2_2_2",
                scenario: "You are called to a nursing home for a 78-year-old female with altered mental status. The nursing staff reports she has been 'more confused than usual' since this morning and has not eaten or drank much in the past 24 hours due to nausea. She has a history of hypertension, diabetes, and congestive heart failure. Her medications include lisinopril, metformin, and furosemide. Vital signs: BP 88/56, P 104, R 20, SpO₂ 95%, temperature 100.4°F. Her skin is cool and pale. Lung sounds are clear bilaterally. The nursing home staff report she had two episodes of diarrhea this morning but no vomiting. There is no obvious bleeding. The patient's daughter arrives and says, 'Her blood pressure is always low — that's normal for her.'",
                question: "How should the EMT interpret the blood pressure finding in this patient?",
                options: [
                    {t: "The blood pressure of 88/56 is concerning for shock — even if 'normal for her,' the presence of tachycardia, altered mental status, and cool skin indicates hypoperfusion. This is likely hypovolemic shock from decreased intake and fluid loss.", f: "Correct — A 'low normal' BP does not account for the other findings of hypoperfusion: tachycardia (104), altered mental status (increased confusion), cool/pale skin, and possible low-grade fever. The history of decreased intake, nausea, diarrhea, and diuretic use (furosemide) all contribute to volume depletion."},
                    {t: "Since the daughter states low BP is normal for her and lung sounds are clear, this is not shock. The confusion is likely from her baseline dementia and age", f: "Incorrect — While some elderly patients have lower baseline BP, the CHANGE from baseline combined with tachycardia, altered mental status, and cool skin indicates acute hypoperfusion. Clear lung rules out cardiogenic shock, making hypovolemic shock most likely."}
                ],
                correct: 0,
                explanation: "This patient has multiple risk factors for hypovolemia: decreased oral intake, nausea, diarrhea, and furosemide (a loop diuretic that can cause volume depletion). The triad of hypotension, tachycardia, and altered mental status in an elderly patient signals decompensated shock. Clear lung fields suggest hypovolemic rather than cardiogenic shock. Even if her baseline BP is low, the acute change with other signs of hypoperfusion demands intervention (IV access, oxygen, position of comfort, transport). Elderly patients have decreased physiologic reserve and may decompensate rapidly.",
                kpi: "Recognizes hypoperfusion in elderly patients considering baseline status and medication effects"
            },
            {
                id: "crit_2_2_3",
                scenario: "A 22-year-old female with a history of peanut allergy accidentally ate a cookie containing peanut butter at a party. Within minutes, she developed diffuse hives, swelling of her lips and tongue, wheezing, and difficulty swallowing. By the time you arrive, she is sitting upright, using accessory muscles to breathe, and has audible stridor. Vital signs: BP 88/52, P 122, R 28, SpO₂ 88% on room air, and she has a non-rebreathing mask at 15 LPM applied by the host. Her skin is flushed with widespread urticaria. She is awake but unable to speak in full sentences due to respiratory distress. She has a prescribed epinephrine auto-injector, but no one at the party administered it.",
                question: "What is the priority intervention for this patient, and which type of shock is she experiencing?",
                options: [
                    {t: "Administer her epinephrine auto-injector IM into the lateral thigh — this is anaphylactic distributive shock. Epinephrine is the first-line treatment and counteracts vasodilation, bronchoconstriction, and airway edema.", f: "Correct — Anaphylactic shock is distributive shock caused by IgE-mediated histamine release. Epinephrine is the definitive treatment: alpha-1 agonism reverses vasodilation/hypotension, beta-2 agonism relaxes bronchial smooth muscle, and it reduces airway edema. Delaying epinephrine can be fatal."},
                    {t: "Apply a CPAP device for respiratory support and start IV fluids — this is primarily a respiratory emergency, not shock", f: "Incorrect — While this patient has a respiratory component (wheezing, stridor, hypoxia), the hypotension (88/52) confirms distributive/anaphylactic shock. CPAP and IV fluids are secondary. Epinephrine is the first-line treatment for anaphylaxis and must be given without delay. Airway management and fluids follow epinephrine administration."}
                ],
                correct: 0,
                explanation: "Anaphylactic shock is a distributive shock subtype. The pathophysiology includes massive vasodilation (causing hypotension), increased capillary permeability (causing tissue edema and hives), and bronchoconstriction (causing wheezing and respiratory distress). Stridor indicates upper airway edema — a life-threatening finding. Epinephrine 0.3 mg IM (0.15 mg for children) into the anterolateral thigh is the first-line treatment. The EMT should administer the patient's prescribed auto-injector (or agency-supplied epinephrine per protocol), provide high-flow oxygen, support ventilation, and transport emergently. Repeat epinephrine may be given after 5-15 minutes if symptoms persist.",
                kpi: "Identifies anaphylactic shock and initiates epinephrine as the priority intervention"
            }
        ]
    },
    {
        id: "c2s3",
        shortTitle: "2.3 Scene Size-up & Safety",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Scene Size-up & Safety</h3>

            <h4>The Scene Size-up — A Continuous Process</h4>
            <p>The <strong>scene size-up</strong> is a systematic assessment that begins the moment dispatch provides information and continues until you leave the scene. It is the critical first step in every patient encounter and must be completed <strong>before</strong> you make patient contact or begin hands-on assessment. The scene size-up answers five essential questions:</p>
            <ol>
                <li><strong>Is the scene safe?</strong> — For you, your partner, the patient, and bystanders</li>
                <li><strong>What is the mechanism of injury (MOI) or nature of illness (NOI)?</strong></li>
                <li><strong>How many patients are there?</strong> — Is a mass casualty incident (MCI) protocol needed?</li>
                <li><strong>Do we need additional resources?</strong> — Fire, law enforcement, HazMat, ALS backup</li>
                <li><strong>What BSI/PPE is required?</strong> — Based on the scene and anticipated patient contact</li>
            </ol>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Critical Mindset:</strong> Scene safety is NOT a "one and done" check. It is reassessed continuously throughout the call. A scene that is safe when you arrive can become dangerous at any moment — approaching family members, changing traffic patterns, the arrival of bystanders, or environmental shifts all require ongoing situational awareness.
            </div>

            <h4>Scene Safety — The First Priority</h4>
            <p>Your first and most important responsibility on every call is <strong>scene safety</strong>. You cannot help anyone if you become a patient yourself. Scene safety evaluation includes:</p>
            <ul>
                <li><strong>Traffic hazards:</strong> Are you responding to a roadway incident? Position the apparatus to create a barrier between the scene and oncoming traffic. All personnel must wear high-visibility safety vests (ANSI Class 2 or 3). The leading cause of on-duty death among EMS providers is being struck by a vehicle.</li>
                <li><strong>Environmental hazards:</strong> Weather (lightning, extreme heat/cold, floods), terrain (steep slopes, unstable surfaces, water), fire/smoke, downed power lines, hazardous materials. Use the Hazardous Materials Warning Placard System (NFPA 704) to identify HazMat risks.</li>
                <li><strong>Violence and threats:</strong> Scenes involving weapons, domestic disputes, combative patients, intoxicated individuals, or known gang activity require law enforcement presence before EMS entry. <strong>Never enter a potentially violent scene without police.</strong> Look for signs of violence before approaching: broken furniture, shouting, weapons visible, or history of violence from dispatch.</li>
                <li><strong>Structural hazards:</strong> Unstable buildings, construction sites, confined spaces, potential for collapse. If you are not trained in technical rescue, wait for appropriate resources.</li>
                <li><strong>Electrical and utility hazards:</strong> Downed power lines require at least one full span (or 30+ feet) of clearance — water on the ground does not diminish the risk. Have the utility company disconnect power before approaching.</li>
            </ul>

            <h4>BSI and PPE — Protecting Yourself Before Patient Contact</h4>
            <p><strong>Body Substance Isolation (BSI)</strong> precautions are the minimum infection prevention measures you must take before any patient contact. Your BSI/PPE selection should be based on the anticipated exposure:</p>
            <ul>
                <li><strong>Gloves:</strong> Minimum BSI for every patient contact. Change between patients and between procedures on the same patient. Never wash or reuse disposable gloves.</li>
                <li><strong>Eye protection:</strong> Required when there is risk of splash or spray — wound irrigation, suctioning, childbirth, arterial bleeding, or any procedure involving body fluids under pressure.</li>
                <li><strong>Mask:</strong> Surgical mask for potential droplet exposure (coughing, sneezing). N95 respirator for suspected airborne diseases (TB, measles, COVID-19).</li>
                <li><strong>Gown:</strong> For situations involving large amounts of body fluids, extensive wound care, or when clothing may become contaminated.</li>
                <li><strong>Turnout gear/helmet:</strong> For fire scenes, vehicle extrication, or technical rescue situations.</li>
                <li><strong>High-visibility vest:</strong> Required when working on or near roadways at any time of day or night.</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Safety Rule:</strong> When you identify a scene as unsafe — whether from violence, HazMat, fire, or any other hazard — <strong>do not enter</strong>. Stage at a safe distance, notify dispatch, and wait for the appropriate resources (law enforcement, fire, HazMat team) to render the scene safe. No patient outcome justifies becoming a casualty yourself.
            </div>

            <h4>Mechanism of Injury (MOI) vs. Nature of Illness (NOI)</h4>
            <p>Determining the MOI or NOI during scene size-up directs your assessment and treatment approach:</p>
            <p><strong>Mechanism of Injury (MOI)</strong> — How a traumatic injury occurred. The MOI helps you predict the pattern and severity of injuries, even before you see the patient. Key MOI categories include:</p>
            <ul>
                <li><strong>Blunt trauma:</strong> Motor vehicle collisions (frontal, rear-end, lateral, rotational, rollover), falls (height + surface + patient position), assaults, sports injuries. In MVCs, assess: vehicle speed, damage extent, intrusion into passenger compartment, steering wheel deformation, airbag deployment, seatbelt use, and patient position in vehicle.</li>
                <li><strong>Penetrating trauma:</strong> Gunshot wounds (GSW) — consider caliber, distance, trajectory, entry vs. exit wounds, number of shots. Stab wounds — consider weapon type, blade length, number of wounds, and angle of entry.</li>
                <li><strong>Significant MOI criteria</strong> (high-index suspicion for serious injury): Ejection from vehicle, death of another occupant in same vehicle, fall > 20 ft (adult) / > 10 ft (child) or 3x patient height, vehicle rollover, high-speed vehicle collision, pedestrian struck at significant speed, motorcycle crash with separation from bike, or any penetrating injury to head/neck/torso.</li>
            </ul>
            <p><strong>Nature of Illness (NOI)</strong> — The medical condition that prompted the call. For medical patients, you gather the NOI from dispatch information, bystanders, family members, or the patient themselves. Common NOI categories include: respiratory distress, chest pain, altered mental status, stroke, seizure, diabetic emergency, allergic reaction, poisoning/overdose, and behavioral emergencies. The NOI guides your medical assessment and treatment approach.</p>

            <h4>Number of Patients — Triage Considerations</h4>
            <p>During scene size-up, you must determine how many patients are involved. If the number of patients exceeds your available resources, you may need to declare a <strong>mass casualty incident (MCI)</strong> and initiate triage protocols (START or SALT). As a general rule:</p>
            <ul>
                <li>If the number of patients exceeds your ability to treat and transport with available resources, call for additional resources immediately</li>
                <li>Do not become distracted by the first patient you see — scan the entire scene for additional patients</li>
                <li>At MVCs, check all vehicles involved, not just the one you can see from your approach</li>
                <li>At medical calls in homes, check other rooms for patients who may not be able to call for help</li>
                <li>If you find multiple patients, begin triage to ensure the greatest good for the greatest number</li>
            </ul>

            <h4>Spinal Precautions — When to Suspect Spinal Injury</h4>
            <p>The decision to apply spinal precautions (cervical collar and long backboard or immobilization device) begins during scene size-up. Suspect spinal injury in any patient with:</p>
            <ul>
                <li><strong>Significant MOI:</strong> MVC, fall from height, diving accident, any blunt trauma above the clavicles, axial loading (e.g., football injury, fall onto feet/buttocks)</li>
                <li><strong>Altered mental status:</strong> Any impairment interferes with the patient's ability to report symptoms or cooperate with assessment</li>
                <li><strong>Neurologic deficit:</strong> Numbness, tingling, weakness, paralysis, loss of bowel/bladder control</li>
                <li><strong>Distracting injury:</strong> A painful injury that distracts from the pain of a spinal injury (e.g., femur fracture, large laceration)</li>
                <li><strong>Intoxication or drugs:</strong> Any substance that impairs sensation or cooperation</li>
                <li><strong>Inability to communicate:</strong> Language barrier, developmental delay, hearing impairment</li>
                <li><strong>Pain or tenderness:</strong> Midline spinal pain or tenderness on palpation</li>
            </ul>
            <p>When in doubt, <strong>immobilize</strong>. Spinal injury can be clinically cleared in the field only by specific protocols (e.g., NEXUS criteria or Canadian C-Spine Rule, if your protocols allow). If you are not trained or authorized to clear the spine, err on the side of immobilization.</p>

            <h4>Requesting Additional Resources</h4>
            <p>Part of scene size-up is identifying what resources you need beyond what you have. Do not hesitate to call for help early — it is better to cancel unneeded resources than to need them and not have them arrive in time. Resources you may request include:</p>
            <ul>
                <li>Law enforcement (for scene safety, crime scenes, traffic control, violent patients)</li>
                <li>Fire department (for extrication, HazMat, fire suppression, technical rescue)</li>
                <li>Additional EMS units (for multiple patients, ALS intercept, mutual aid)</li>
                <li>Aeromedical transport (for time-critical patients at remote locations or with prolonged transport times)</li>
                <li>Utility companies (for downed power lines, gas leaks)</li>
                <li>Specialty teams (HazMat, swift-water rescue, mountain rescue, CISM team)</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "What are the five essential questions answered during scene size-up?", answer: "1) Is the scene safe? 2) What is the MOI/NOI? 3) How many patients? 4) Do we need additional resources? 5) What BSI/PPE is needed?", category: "Scene Size-up" },
            { question: "What is the leading cause of on-duty death among EMS providers?", answer: "Being struck by a vehicle while working on a roadway (struck-by incidents). High-visibility vests and proper apparatus positioning are critical preventive measures.", category: "Scene Safety" },
            { question: "What is the difference between MOI and NOI?", answer: "MOI (Mechanism of Injury) describes how a traumatic injury occurred. NOI (Nature of Illness) is the medical complaint for a non-traumatic emergency.", category: "Scene Size-up" },
            { question: "When should an EMT NOT enter a scene?", answer: "When the scene is unsafe — violence/threats, HazMat, fire, downed power lines, unstable structures, or any hazard that cannot be mitigated. Stage safely and wait for appropriate resources.", category: "Scene Safety" },
            { question: "List at least four criteria that raise suspicion for spinal injury.", answer: "Significant MOI, altered mental status, neurologic deficit (numbness/weakness), distracting injury, intoxication, inability to communicate, or midline spinal pain/tenderness.", category: "Spinal Precautions" },
            { question: "When should an EMT consider declaring a mass casualty incident (MCI)?", answer: "When the number of patients exceeds available resources to treat and transport. Scan the entire scene for all patients before focusing on any individual.", category: "Scene Size-up" },
            { question: "What is the minimum BSI requirement for every patient contact?", answer: "Gloves. Additional PPE (eye protection, mask, gown) is added based on the anticipated exposure to body fluids or infectious agents.", category: "BSI/PPE" },
            { question: "What should you do if you find downed power lines at the scene of an MVC?", answer: "Maintain a minimum clearance of at least one full span (30+ feet), do not approach, have dispatch contact the utility company to disconnect power, and establish a danger zone perimeter.", category: "Scene Safety" }
        ],
        quiz: [
            { q: "The scene size-up begins:", options: ["When you arrive at the patient's side", "When you exit the ambulance", "When you receive the call from dispatch", "After the primary assessment is complete"], correct: 2 },
            { q: "The leading cause of on-duty death among EMS providers is:", options: ["Heart attack", "Needlestick injury", "Struck by a vehicle", "Violence from patients"], correct: 2 },
            { q: "Which of the following is NOT part of the scene size-up?", options: ["Determining the mechanism of injury", "Taking a full set of vital signs", "Evaluating the need for additional resources", "Identifying the number of patients"], correct: 1 },
            { q: "A patient was involved in a high-speed rollover MVC. Based on this MOI, the EMT should:", options: ["Assume there are no injuries if the patient is ambulatory", "Apply spinal precautions and perform a thorough assessment for hidden injuries", "Only assess areas where the patient reports pain", "Transport without assessment since the patient is awake"], correct: 1 },
            { q: "When should BSI/PPE be applied during a call?", options: ["After the primary assessment", "Before patient contact, during scene size-up", "Only if the patient appears infectious", "At the hospital during handoff"], correct: 1 },
            { q: "An EMT arrives at a scene and suspects violence. The most appropriate action is:", options: ["Enter cautiously with your partner for safety", "Stage at a safe distance and request law enforcement to secure the scene", "Announce your presence loudly before entering", "Call medical direction for guidance"], correct: 1 },
            { q: "[HARD] A 45-year-old male fell approximately 8 feet from a ladder while trimming trees. He is awake and alert, denies any neck or back pain, and has full motor and sensory function in all extremities. Which of the following BEST describes the appropriate spinal precautions decision?", options: ["No immobilization needed — the patient has no symptoms", "Immobilize the patient — the fall height (> 6 feet), mechanism, and inability to clinically clear in the field meet spinal precaution criteria", "Apply a cervical collar only without a backboard", "Have the patient walk to the ambulance to prove they are not injured"], correct: 1 },
            { q: "[HARD] You arrive at a two-car MVC. As you approach, you see one patient walking on the sidewalk and another still in a vehicle. A bystander tells you there is a third person in the back seat of the second car that you cannot see from your approach. Your partner begins assessing the ambulatory patient. What should you do FIRST?", options: ["Help your partner with the ambulatory patient since they are closer", "Visually confirm the number and condition of ALL patients, including the one reported in the back seat, before focusing on any single patient", "Begin extricating the patient in the vehicle since they may be more seriously injured", "Call for additional resources immediately since you have multiple patients"], correct: 1 }
        ],
        critical: [
            {
                id: "crit_2_3_1",
                scenario: "You and your partner are dispatched to a reported 'domestic disturbance' at a residential address. Dispatch advises that law enforcement has NOT yet arrived at the scene. As you approach the neighborhood, you can hear shouting coming from the residence. When you pull up to the address, you see a man and a woman yelling at each other on the front porch. The front door is open, and you can see broken glass on the porch. There are no visible weapons, but the man is holding a baseball bat. The woman appears to have blood on her face and is crying. Your partner says, 'Let's go — she's bleeding and needs our help.'",
                question: "What is the MOST appropriate immediate action?",
                options: [
                    {t: "Stage at a safe distance and wait for law enforcement to secure the scene before approaching — violence is suspected and no police are on scene yet", f: "Correct — A domestic disturbance with shouting, broken glass, visible blood, and a person holding a weapon (baseball bat) is an unsafe scene. EMS should never enter a potentially violent scene without law enforcement present. Stage safely."},
                    {t: "Approach cautiously and try to calm the situation by speaking to the individuals from a distance", f: "Incorrect — While approaching cautiously is better than rushing in, the scene is clearly unsafe. Law enforcement has not arrived. EMS providers are not trained to de-escalate violent domestic situations. Staging safely and awaiting police is the correct action."}
                ],
                correct: 0,
                explanation: "Scene safety is the first priority. This scene has multiple red flags: dispatch reported a domestic disturbance (high-risk for violence), shouting is audible, broken glass indicates physical altercation, blood is visible, and a potential weapon (baseball bat) is present. Without law enforcement on scene, the EMT must stage at a safe location and request police to secure the scene before any patient contact is made. No patient outcome justifies EMS becoming victims of violence. The DOT's 'Scene Safety' guidelines emphasize that EMTs should never enter scenes where violence is occurring or imminent.",
                kpi: "Recognizes an unsafe scene and stages for law enforcement before entering"
            },
            {
                id: "crit_2_3_2",
                scenario: "You respond to a motor vehicle collision on a busy interstate highway. It is nighttime and raining. A single vehicle has struck the concrete median barrier. The driver is still in the vehicle, appears conscious, and is moving. There is moderate front-end damage and the airbags have deployed. As you approach from your ambulance, traffic is passing at highway speeds in both directions. There are no fire or police personnel on scene yet. Your partner begins gathering equipment from the side of the ambulance that faces oncoming traffic.",
                question: "What scene safety measures should be implemented IMMEDIATELY?",
                options: [
                    {t: "Position the ambulance as a barrier between the scene and oncoming traffic, activate all emergency warning lights, ensure all personnel don high-visibility vests, and request law enforcement for traffic control before approaching the vehicle", f: "Correct — Nighttime, rain, highway speeds, and no traffic control make this an extremely high-risk scene for struck-by incidents. Apparatus positioning to create a protected work zone is the first priority, immediately followed by high-visibility vests and requesting law enforcement."},
                    {t: "Approach the vehicle immediately since the patient may be critically injured — traffic safety can be managed after patient contact is made", f: "Incorrect — Patient care cannot begin if providers are struck and injured. Scene safety is ALWAYS the first priority. The ambulance must first be positioned to protect the scene, and personnel must wear high-visibility vests before approaching. Requesting law enforcement for traffic control is also essential."}
                ],
                correct: 0,
                explanation: "Struck-by incidents are the leading cause of death among EMS providers. Nighttime, rain, and high-speed traffic multiply the risk. The ambulance should be positioned at an angle (typically 45° offset) to create a physical barrier between the scene and oncoming traffic — this is called 'blocking' the scene. All emergency lights should be activated. High-visibility ANSI Class 3 vests are mandatory. Law enforcement should be requested for traffic control. Patient care begins only after these scene safety measures are in place. The scene should be continuously monitored for changing traffic conditions.",
                kpi: "Prioritizes scene safety (vehicle positioning, high-visibility vests, traffic control) before patient contact at roadway incidents"
            },
            {
                id: "crit_2_3_3",
                scenario: "You are dispatched to a 'person down' behind a grocery store at 11:00 PM. Dispatch advises limited information — a store employee called and reported seeing someone lying on the ground behind the dumpster and then hung up. As you approach the area from the parking lot, you can see a person's legs visible behind the dumpster. The lighting is very poor. There are no other people visible, and the area is secluded. Your partner says, 'Let me run up there and check on them while you get the equipment.'",
                question: "Before approaching the patient, what scene size-up considerations should the EMT prioritize?",
                options: [
                    {t: "Request law enforcement to respond and assist before approaching — this is a high-risk scene with limited information, poor lighting, a secluded location, and an unknown situation. Scene safety cannot be assured.", f: "Correct — Limited dispatch information, night hours, poor lighting, a secluded location (behind a dumpster), and the caller hung up without details all raise the index of suspicion for an unsafe scene. The safest approach is to request law enforcement and stage until the scene is secured."},
                    {t: "Approach together with a handheld flashlight, staying alert and communicating with each other — waiting for law enforcement delays patient care", f: "Incorrect — While approaching together is safer than one person going alone, the combination of poor lighting, a secluded location at night, limited dispatch information, and the caller hanging up makes this scene unsuitable for EMS to enter without law enforcement. Staging is the appropriate response."}
                ],
                correct: 0,
                explanation: "Scene safety assessment must consider all available information. This scene has multiple safety concerns: the call is at night (poor visibility), the location is secluded (behind a dumpster), dispatch information is incomplete (caller hung up), and the situation is unknown (unresponsive person could be medical — or could be a trap, a crime scene, or a HazMat situation involving drug paraphernalia). In such scenarios, the EMT should request law enforcement backup and not approach until the scene is declared safe. EMS protocol universally prioritizes provider safety over rapid patient access when scene safety is uncertain. If the patient is truly in cardiac arrest, minutes matter — but not at the cost of EMS becoming additional patients.",
                kpi: "Recognizes high-risk scene indicators (secluded location, poor lighting, limited dispatch info) and stages for law enforcement"
            }
        ]
    },
    {
        id: "c2s4",
        shortTitle: "2.4 Primary Assessment (XABCDE)",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Primary Assessment (XABCDE)</h3>

            <h4>Introduction to the Primary Assessment</h4>
            <p>The <strong>primary assessment</strong> is a systematic, prioritized approach to identifying and managing immediate life threats. It is performed on every patient, regardless of whether the problem is medical or traumatic. The primary assessment follows the <strong>XABCDE</strong> mnemonic, which expands the traditional ABC approach by adding X (Exsanguinating Hemorrhage) as the absolute first priority. Each step must be completed before moving to the next — life threats found at any step are managed immediately before proceeding.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The primary assessment is a <strong>treat-as-you-go</strong> process. You do NOT complete all steps and then treat. If you find a problem during X, A, B, C, D, or E — you treat it immediately before moving on. This is a fundamental difference from the secondary assessment, which is a complete head-to-toe exam performed after life threats are managed.
            </div>

            <h4>X — Exsanguinating (Catastrophic) Hemorrhage</h4>
            <p>Before checking the airway — even before introducing yourself — you must scan for <strong>life-threatening external bleeding</strong>. Exsanguinating hemorrhage is the most rapidly reversible cause of death in trauma. If you see arterial spurting, a pool of blood, a mangled extremity, or uncontrolled bleeding from any source, you must control it immediately. Techniques include:</p>
            <ul>
                <li><strong>Direct pressure:</strong> Apply firm pressure directly over the bleeding site with gauze or a hemostatic dressing. Hold continuous pressure — do not lift to "check" if bleeding has stopped.</li>
                <li><strong>Tourniquet:</strong> For life-threatening extremity hemorrhage not controlled by direct pressure. Apply 2-3 inches above the wound (not over a joint), tighten until bleeding stops, and note the application time. Tourniquets are safe and effective — concerns about limb loss are largely unfounded when used appropriately.</li>
                <li><strong>Hemostatic agents:</strong> Gauze impregnated with kaolin or chitosan (e.g., QuickClot, Combat Gauze) that accelerates clotting. Pack into the wound and apply direct pressure.</li>
                <li><strong>Wound packing:</strong> For junctional wounds (groin, axilla, neck) where tourniquets cannot be applied. Pack hemostatic gauze firmly into the wound tract and hold direct pressure.</li>
            </ul>

            <p>For trauma patients, a <strong>rapid trauma exam</strong> (quick head-to-toe scan) may be performed during the primary assessment to identify hidden hemorrhage sources. For medical patients, this step is typically a visual scan for bleeding and moves quickly to A.</p>

            <h4>A — Airway (with Spinal Precautions)</h4>
            <p>Once hemorrhage is controlled, assess the airway. An open airway is the most immediate requirement for oxygen to reach the lungs. Assessment steps:</p>
            <ol>
                <li><strong>Is the airway patent?</strong> Look for chest rise, listen for breath sounds, feel for air movement. A patent airway is open and unobstructed. Signs of airway compromise: snoring (tongue obstruction), gurgling (fluid/blood), stridor (upper airway swelling), crowing (laryngospasm), or silence with respiratory effort (complete obstruction).</li>
                <li><strong>If the airway is compromised:</strong>
                    <ul>
                        <li>Head-tilt/chin-lift (medical patients — no suspected spinal injury)</li>
                        <li>Jaw-thrust (trauma patients with suspected spinal injury — maintains inline stabilization)</li>
                        <li>Suction — clear blood, vomitus, or secretions from the airway</li>
                        <li>Oropharyngeal airway (OPA) — for unresponsive patients with no gag reflex</li>
                        <li>Nasopharyngeal airway (NPA) — for patients with a gag reflex or semi-conscious patients</li>
                        <li>Recovery position — for patients with an intact airway who are unresponsive and breathing adequately (no suspected spinal injury)</li>
                    </ul>
                </li>
                <li><strong>Spinal precautions must be maintained</strong> during airway management if mechanism suggests possible spinal injury. Manual inline stabilization is applied during airway interventions and maintained until the patient is fully immobilized.</li>
            </ol>

            <h4>B — Breathing</h4>
            <p>After establishing a patent airway, assess the adequacy of breathing. Key assessments include:</p>
            <table>
                <thead>
                    <tr><th>Assessment</th><th>Normal Findings</th><th>Concerning Findings</th></tr>
                </thead>
                <tbody>
                    <tr><td>Respiratory Rate</td><td>12–20 breaths/min (adult)</td><td>&lt; 12 (bradypnea) or &gt; 20 (tachypnea) — both can indicate inadequate ventilation</td></tr>
                    <tr><td>Respiratory Depth</td><td>Normal tidal volume, symmetric chest rise</td><td>Shallow, agonal, gasping, or Cheyne-Stokes respirations</td></tr>
                    <tr><td>Respiratory Effort</td><td>Unlabored, no accessory muscle use</td><td>Accessory muscle use, nasal flaring, intercostal/supraclavicular retractions, seesaw breathing, tripod positioning</td></tr>
                    <tr><td>Breath Sounds</td><td>Clear and equal bilaterally</td><td>Absent/decreased on one side (pneumothorax, hemothorax), crackles (pulmonary edema), wheezing (asthma/COPD/anaphylaxis)</td></tr>
                    <tr><td>Oxygen Saturation</td><td>SpO₂ ≥ 95% (at sea level)</td><td>&lt; 94% indicates hypoxemia; &lt; 90% is critical</td></tr>
                    <tr><td>Skin Color</td><td>Pink (adequate oxygenation)</td><td>Cyanosis (late sign of hypoxia), pallor</td></tr>
                </tbody>
            </table>
            <p>If breathing is inadequate, ventilate with a bag-valve mask (BVM) with high-flow oxygen. If breathing is adequate but oxygenation is low, administer supplemental oxygen. Be prepared to assist ventilation if the rate, depth, or effort is insufficient.</p>
            <p>Critical breathing conditions to identify during the primary assessment: tension pneumothorax (tracheal deviation, absent breath sounds, JVD, hypotension), open pneumothorax (sucking chest wound), flail chest (paradoxical chest wall movement), and massive hemothorax.</p>

            <h4>C — Circulation</h4>
            <p>After ensuring adequate ventilation, assess the cardiovascular system's ability to perfuse the body:</p>
            <ul>
                <li><strong>Pulse:</strong> Check for a carotid pulse (or femoral in adults if carotid is not accessible). Assess rate, rhythm, and quality. Absent pulse = cardiac arrest — begin CPR and apply AED. Weak/thready pulse suggests reduced cardiac output (shock).</li>
                <li><strong>Skin:</strong> Assess color (pale, flushed, cyanotic, jaundiced), temperature (cool/clammy vs. warm/dry), moisture (diaphoretic vs. dry), and capillary refill (normal &lt; 2 seconds). The skin is a window into the cardiovascular system — cool/clammy skin with pallor is classic for shock.</li>
                <li><strong>Bleeding (reassessment):</strong> Return to the 'X' step — re-check for any bleeding that may have been missed initially or that has resumed. Internal bleeding should be suspected based on mechanism, vital signs, and physical exam.</li>
                <li><strong>Shock management:</strong> If signs of shock are present, initiate treatment: high-flow oxygen, IV access (if in scope), position of comfort (Trendelenburg or supine with legs elevated if tolerated), keep warm, and transport rapidly.</li>
            </ul>

            <h4>D — Disability (Neurologic Status)</h4>
            <p>Assess neurologic function using the <strong>AVPU</strong> scale or <strong>Glasgow Coma Scale (GCS)</strong>:</p>
            <ul>
                <li><strong>A</strong> — Alert: The patient is awake, responsive, and oriented to person, place, time, and event.</li>
                <li><strong>V</strong> — Verbal: The patient responds to verbal stimulation but may be confused, disoriented, or inappropriate.</li>
                <li><strong>P</strong> — Pain: The patient responds only to painful stimulation (pinch trapezius, rub sternum, apply supraorbital pressure).</li>
                <li><strong>U</strong> — Unresponsive: The patient does not respond to any stimulus.</li>
            </ul>
            <p>Also assess <strong>pupils</strong> for size, equality, and reactivity to light. Sluggish or unequal pupils may indicate increased intracranial pressure, stroke, or drug effects. Check for <strong>hypoglycemia</strong> — altered mental status is often due to low blood glucose, which is rapidly correctable. Obtain a blood glucose reading if your protocols allow. A lateralizing sign (one-sided weakness, facial droop, or sensory loss) suggests a stroke or intracranial pathology.</p>

            <h4>E — Expose / Environment</h4>
            <p>The final step of the primary assessment involves two components:</p>
            <p><strong>Expose:</strong> Remove or cut away clothing as necessary to fully visualize the patient's body for hidden injuries, rashes, bleeding, deformities, burns, or signs of illness. In trauma patients, you must see the entire body — injuries hidden under clothing can be life-threatening. Be respectful of the patient's modesty; expose only what is clinically necessary and cover the patient as soon as assessment is complete.</p>
            <p><strong>Environment:</strong> Protect the patient from environmental threats. This includes:</p>
            <ul>
                <li><strong>Temperature regulation:</strong> Cover the patient with blankets to prevent hypothermia (trauma patients are especially vulnerable). Use reflective blankets, warm the ambulance, and administer warmed IV fluids if available.</li>
                <li><strong>Scene environment reassessment:</strong> Continue to monitor the scene for changing hazards — the environment that was safe when you arrived may have changed.</li>
                <li><strong>Transport decision:</strong> The primary assessment should give you a clear picture of the patient's severity — critical (immediate transport with care en route) or stable (complete secondary assessment on scene before transport).</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The primary assessment should take 60-90 seconds for a stable patient and may be as short as 15-30 seconds for a critical trauma patient requiring immediate transport. Efficiency comes with practice. Do not sacrifice thoroughness for speed — but do not linger on any single step. Manage threats and move on.
            </div>

            <h4>Summary: Primary Assessment Flow</h4>
            <ol>
                <li><strong>X:</strong> Scan for and control catastrophic external hemorrhage</li>
                <li><strong>A:</strong> Assess airway patency; intervene with positioning, suction, OPA/NPA as needed; maintain spinal precautions</li>
                <li><strong>B:</strong> Assess breathing rate, depth, effort, and oxygenation; intervene with BVM, oxygen, or positioning as needed</li>
                <li><strong>C:</strong> Assess pulse, skin, and signs of shock; control any bleeding; begin shock management</li>
                <li><strong>D:</strong> Assess neurologic status (AVPU/GCS); check pupils and blood glucose</li>
                <li><strong>E:</strong> Expose for hidden injuries; protect from environment (temperature); reassess scene; make transport decision</li>
            </ol>
            <p>After completing the primary assessment and managing all life threats, proceed to the <strong>secondary assessment</strong> (detailed physical exam and history) or <strong>rapid transport</strong> if the patient's condition demands immediate hospital care.</p>
        </div>`,
        flashcards: [
            { question: "What does the X in XABCDE stand for?", answer: "Exsanguinating (catastrophic) hemorrhage — life-threatening external bleeding must be controlled before airway assessment.", category: "Primary Assessment" },
            { question: "What is the difference between head-tilt/chin-lift and jaw-thrust?", answer: "Head-tilt/chin-lift is used for medical patients with no suspected spinal injury. Jaw-thrust is used for trauma patients with suspected spinal injury to maintain inline stabilization.", category: "Airway" },
            { question: "What are the five components assessed in the 'B' (Breathing) step?", answer: "Respiratory rate, depth, effort, breath sounds, and oxygen saturation (SpO₂). Also assess skin color for signs of hypoxia.", category: "Breathing" },
            { question: "What does AVPU stand for?", answer: "Alert (awake and oriented), Verbal (responds to voice), Pain (responds only to painful stimulus), Unresponsive (no response to any stimulus).", category: "Disability" },
            { question: "How long should a primary assessment take?", answer: "Approximately 60-90 seconds for a stable patient, 15-30 seconds for a critical trauma patient requiring immediate transport.", category: "Primary Assessment" },
            { question: "What is the correct position for an unresponsive medical patient with a patent airway and adequate breathing?", answer: "The recovery position (lateral recumbent) — maintains airway patency and allows fluids to drain from the mouth, unless spinal injury is suspected.", category: "Airway" },
            { question: "When should you use an oropharyngeal airway (OPA) vs. a nasopharyngeal airway (NPA)?", answer: "OPA for unresponsive patients with no gag reflex. NPA for semi-conscious patients or those with an intact gag reflex. NPA is better tolerated.", category: "Airway" },
            { question: "What does the 'E' in XABCDE cover?", answer: "Expose (remove clothing to fully visualize injuries/signs of illness) and Environment (protect from temperature extremes, reassess scene safety, make transport decision).", category: "Primary Assessment" }
        ],
        quiz: [
            { q: "In the XABCDE primary assessment, what is the first priority upon reaching the patient?", options: ["Check the airway", "Control life-threatening external bleeding", "Assess breathing rate", "Check for a pulse"], correct: 1 },
            { q: "An unresponsive trauma patient with a suspected spinal injury requires airway management. The correct technique is:", options: ["Head-tilt/chin-lift", "Jaw-thrust with manual inline stabilization", "Place the patient in the recovery position", "Turn the patient prone to clear the airway"], correct: 1 },
            { q: "Signs of adequate breathing include all of the following EXCEPT:", options: ["Respiratory rate of 16", "Symmetric chest rise", "Accessory muscle use", "Clear breath sounds bilaterally"], correct: 2 },
            { q: "A patient who responds only to a painful stimulus is classified as:", options: ["Alert", "Verbal", "Pain", "Unresponsive"], correct: 2 },
            { q: "Which of the following is an indication for using an oropharyngeal airway (OPA)?", options: ["A patient who is coughing and gagging", "An unresponsive patient with no gag reflex", "A conscious patient with snoring respirations", "A patient with a suspected stroke who is awake"], correct: 1 },
            { q: "During the primary assessment, a patient with tachycardia, cool/pale skin, and delayed capillary refill has findings most consistent with:", options: ["Adequate perfusion", "Shock/hypoperfusion", "Respiratory failure", "Neurologic injury"], correct: 1 },
            { q: "[HARD] You are performing a primary assessment on a 28-year-old male trauma patient. You find a large, actively bleeding wound on his lower leg with arterial spurting. What is the correct sequence according to XABCDE?", options: ["Check airway first, then control bleeding — A comes before X", "Apply a tourniquet to control the bleeding immediately, then proceed to airway assessment", "Start an IV for fluid resuscitation, then apply a tourniquet", "Assess breathing first, then control bleeding"], correct: 1 },
            { q: "[HARD] During the primary assessment, you find a patient with snoring respirations, a respiratory rate of 8, and an SpO₂ of 85%. According to XABCDE priorities, what should you do NEXT after hemorrhage is ruled out?", options: ["Apply a non-rebreathing mask at 15 LPM", "Open the airway using head-tilt/chin-lift or jaw-thrust, then assist ventilations with a BVM", "Begin chest compressions for the low SpO₂", "Check the pulse and begin transport immediately"], correct: 1 }
        ],
        critical: [
            {
                id: "crit_2_4_1",
                scenario: "You are called to a construction site where a 34-year-old male worker caught his right arm in a piece of heavy machinery. On arrival, you find the patient lying on the ground with coworkers around him. His right forearm has a traumatic amputation at the mid-forearm level with active arterial bleeding — bright red blood is spurting from the wound with each heartbeat. There is a large pool of blood on the ground beneath the arm. The patient is awake, anxious, and screaming in pain. His skin is pale and diaphoretic. One coworker is applying a belt as a tourniquet proximal to the wound, but blood is still actively spurting. The patient's airway is patent and he is breathing rapidly at 24 breaths per minute.",
                question: "According to the XABCDE primary assessment approach, what is the EMT's priority action?",
                options: [
                    {t: "Immediately take over hemorrhage control — apply a properly placed commercial tourniquet 2-3 inches above the wound, tighten until bleeding stops, and note the application time. This is the 'X' step and takes priority over everything else.", f: "Correct — X (Exsanguinating Hemorrhage) is the absolute first priority. The patient has life-threatening arterial bleeding with a traumatic amputation. The improvised belt tourniquet is not controlling bleeding. A commercial tourniquet properly placed and tightened takes priority over all other interventions. After bleeding is controlled, proceed through A, B, C, D, E."},
                    {t: "Begin assessing the airway first and apply high-flow oxygen — the rapid breathing rate and anxiety suggest hypoxia, which must be addressed before bleeding control", f: "Incorrect — While this patient will eventually need oxygen, exsanguinating hemorrhage is the immediate life threat. A patient can die from blood loss in minutes. The X (hemorrhage control) step always comes before A (airway) in the XABCDE sequence. Control the bleeding first."}
                ],
                correct: 0,
                explanation: "This patient has an immediately life-threatening hemorrhage (traumatic amputation with arterial spurting, large blood pool, pale/diaphoretic skin). XABCDE places 'X' — exsanguinating hemorrhage — as the #1 priority before airway, breathing, or circulation. The improvised belt tourniquet was not effective; the EMT must apply a properly placed commercial tourniquet 2-3 inches above the wound (over single bone — forearm), tighten until bleeding stops completely, and document the application time. Only after hemorrhage is controlled should the EMT proceed through the remaining XABCDE steps. This patient will also need rapid transport to a trauma center.",
                kpi: "Prioritizes exsanguinating hemorrhage control (X) above all other primary assessment steps"
            },
            {
                id: "crit_2_4_2",
                scenario: "You are dispatched to a home for a 6-year-old child who is 'not breathing right.' On arrival, you find the child sitting on the floor, leaning forward with hands on knees (tripod position). The child has audible wheezing, nasal flaring, and intercostal retractions. The parents state the child has asthma and has been using an inhaler every 2 hours for the past 6 hours without relief. The child is awake but cannot speak in full sentences. Respiratory rate is 38, heart rate is 140, SpO₂ is 88% on room air, and skin is pale with central cyanosis noted around the lips. There is no external bleeding. You identify this as a severe asthma exacerbation with respiratory failure.",
                question: "How should the EMT prioritize interventions using the XABCDE approach?",
                options: [
                    {t: "X (no hemorrhage), then A — maintain airway patency. B — begin high-flow oxygen via non-rebreathing mask (or BVM if breathing becomes inadequate), assist with the child's prescribed inhaler or a nebulized bronchodilator per protocol, and transport promptly", f: "Correct — After ruling out hemorrhage (X), assess airway (A). The child's airway is patent but breathing is inadequate (B): tachypnea, accessory muscle use, hypoxia, cyanosis. Administer high-flow oxygen and bronchodilator therapy. The tripod position maintains airway patency — do not force the child flat. Be prepared to assist ventilations if the child deteriorates."},
                    {t: "Start with circulation (C) — the tachycardia of 140 indicates cardiovascular compromise, so IV access should be established before focusing on the respiratory problem", f: "Incorrect — While the tachycardia is concerning, it is likely secondary to respiratory distress and hypoxia, not a primary circulatory problem. The XABCDE sequence prioritizes X → A → B before C. The primary problem is inadequate breathing and severe hypoxia. Oxygen and bronchodilators are the priority. IV access can be obtained en route if needed."}
                ],
                correct: 0,
                explanation: "Using XABCDE: X — no hemorrhage visible. A — airway is patent (child is speaking, tripod positioning maintains airway). B — BREATHING is the primary problem: tachypnea, accessory muscle use, wheezing, hypoxia (88%), and cyanosis. The priority is to support breathing: high-flow oxygen, bronchodilator therapy (albuterol/levalbuterol per protocol), and positioning (tripod — do not lie the child flat). If the child's condition worsens (decreasing mental status, rising CO₂, respiratory fatigue), assisted ventilation with BVM becomes necessary. C — circulation is assessed after breathing. D and E follow. The tachycardia (140) is expected in a hypoxic child and should improve with oxygenation.",
                kpi: "Correctly sequences XABCDE priorities in a severe respiratory emergency — prioritizing breathing interventions"
            },
            {
                id: "crit_2_4_3",
                scenario: "You and your partner respond to a single-vehicle MVC where a 55-year-old male struck a tree at approximately 40 mph. Upon arrival, you find the patient seated in the driver's seat, restrained, with airbag deployment. The windshield is starred on the driver's side. He is awake but confused, answering questions slowly and inappropriately. His airway is patent with snoring respirations. His respiratory rate is 10 and shallow, breath sounds are clear bilaterally, and SpO₂ is 91%. You note a large contusion on his chest from the steering wheel. His radial pulse is weak and rapid at 116. His skin is pale, cool, and diaphoretic. He has an obvious deformed and angulated right femur. Your partner says, 'Let's get him on the backboard and out of here — this is a trauma center run.'",
                question: "During the primary assessment, what is the MOST important intervention the EMT should perform before moving the patient to the backboard?",
                options: [
                    {t: "Open the airway using a jaw-thrust maneuver (maintaining inline stabilization) — the patient has snoring respirations indicating partial airway obstruction from the tongue. Manage the airway FIRST before proceeding with B, C, D, E.", f: "Correct — Go through XABCDE sequentially. X: scan for hemorrhage (no visible active bleeding noted). A: the patient has snoring respirations (tongue obstruction) with an altered mental status — the airway is compromised. Use jaw-thrust with manual inline stabilization (MVC mechanism). If the airway cannot be maintained, insert an NPA (patient has some responsiveness). After airway is secured, proceed to B (ventilatory support for the low rate and shallow depth), C (shock signs), D (GCS/AVPU), and E (expose, immobilize, transport)."},
                    {t: "Splint the deformed right femur — femur fractures can cause significant internal blood loss and must be stabilized before moving the patient", f: "Incorrect — While the femur fracture is important, airway compromise takes priority. The snoring respirations indicate a partially obstructed airway. In the XABCDE sequence, A (Airway) comes before any musculoskeletal injury management. The femur can be splinted during extrication or en route. Failure to address the airway first could result in complete obstruction and cardiac arrest."}
                ],
                correct: 0,
                explanation: "This patient has a high-mechanism MVC with concerning findings: altered mental status, snoring respirations (airway compromise), bradypnea (rate 10) with shallow breathing (inadequate ventilation), signs of shock (tachycardia, pale/cool/diaphoretic), and a femur fracture. Following XABCDE: X — no active external bleeding noted. A — snoring respirations indicate the tongue is partially obstructing the airway, likely due to the decreased mental status. The EMT must open the airway using jaw-thrust (maintaining cervical spine inline stabilization), insert an NPA if tolerated, and position the patient appropriately. After airway patency is confirmed, proceed to B — assist ventilations with BVM (rate 10 is too low, shallow depth = inadequate minute ventilation). Then C — manage shock. The femur can be splinted during movement. This patient requires rapid transport to a trauma center.",
                kpi: "Prioritizes airway management (A) over extremity injuries in the XABCDE sequence"
            }
        ]
    },
    {
        id: "c2s5",
        shortTitle: "2.5 Vital Signs",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Vital Signs</h3>

            <p>Vital signs are objective measurements of the body's basic physiological functions. They are the cornerstone of patient assessment — providing critical information about the patient's current condition, helping you identify life threats, and serving as a baseline to track changes over time. Every EMT must master the measurement, interpretation, and trending of vital signs across all age groups.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> A single set of vital signs is a snapshot. Trending vital signs over time — comparing serial measurements — reveals the patient's trajectory (improving, stable, or deteriorating). This is far more valuable than any single reading.
            </div>

            <h4>Normal Vital Sign Ranges by Age Group</h4>
            <p>The following ranges are the accepted NREMT reference standards. Remember that normal ranges vary with age, and individual patients may fall outside these ranges for benign reasons (e.g., an athlete's resting heart rate may be 45–50 bpm). Always interpret vital signs in the context of the patient's overall presentation.</p>

            <table>
                <thead>
                    <tr><th>Vital Sign</th><th>Adult (≥12 yr)</th><th>Child (1–11 yr)</th><th>Infant (0–12 mo)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Heart Rate (bpm)</td><td>60–100</td><td>80–120</td><td>100–160</td></tr>
                    <tr><td>Respiratory Rate (breaths/min)</td><td>12–20</td><td>15–30</td><td>30–60</td></tr>
                    <tr><td>Systolic Blood Pressure (mmHg)</td><td>90–120</td><td>80–110</td><td>70–100</td></tr>
                    <tr><td>SpO₂ (%)</td><td>94–100</td><td>94–100</td><td>94–100</td></tr>
                    <tr><td>Temperature (°F / °C)</td><td>97.0–99.6°F (36.1–37.5°C)</td><td>96.8–99.6°F (36.0–37.5°C)</td><td>97.0–100.4°F (36.1–38.0°C)</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>NREMT Tip:</strong> You will be expected to recall normal ranges for testing. A useful memory aid: <strong>"60–100 for the big one (adult HR), 80–120 for the middle one (child HR), 100–160 for the little one (infant HR)."</strong> For respiratory rates, remember rates roughly double the heart rate expectation: adult 12–20, child 15–30, infant 30–60.
            </div>

            <h4>Measuring Vital Signs</h4>

            <h5>Heart Rate (Pulse)</h5>
            <p>Assess the pulse for <strong>rate</strong>, <strong>rhythm</strong>, and <strong>quality</strong> (strong/weak, regular/irregular). The preferred site for initial assessment in a conscious patient is the <strong>radial artery</strong> (thumb side of the wrist). If the radial pulse is weak, absent, or the patient is unresponsive, check the <strong>carotid artery</strong> (side of the neck, between the trachea and the sternocleidomastoid muscle). In infants, use the <strong>brachial artery</strong> (inner aspect of the upper arm between elbow and shoulder). Count for <strong>30 seconds and multiply by 2</strong>; if the rhythm is irregular, count for the full 60 seconds. For pediatric patients, always count for a full 30–60 seconds due to naturally variable rates.</p>

            <ul>
                <li><strong>Tachycardia:</strong> Heart rate above normal range. Causes include: fever, pain, anxiety, hypovolemia, hypoxia, shock, cardiac arrhythmias, medications, caffeine, and stimulants.</li>
                <li><strong>Bradycardia:</strong> Heart rate below normal range. Causes include: athletic conditioning, medications (beta-blockers), increased intracranial pressure, hypoxia (a late sign in children), and conduction disorders.</li>
            </ul>

            <h5>Respiratory Rate</h5>
            <p>Count the number of breaths in <strong>30 seconds and multiply by 2</strong>. Observe the patient's chest rise — do not announce that you are counting breaths, as patients may unconsciously alter their breathing pattern. Assess for <strong>rate</strong>, <strong>rhythm</strong> (regular vs. irregular), <strong>depth</strong> (shallow, normal, deep — Kussmaul breathing is deep and labored seen in DKA), and <strong>effort</strong> (work of breathing). Note accessory muscle use, retractions (intercostal, supraclavicular, substernal), nasal flaring (especially in children), and paradoxical breathing (see-saw motion suggesting airway obstruction).</p>

            <ul>
                <li><strong>Tachypnea:</strong> Rate above normal. Causes include: fever, anxiety, pain, hypoxia, respiratory infection, pulmonary embolism, compensation for metabolic acidosis.</li>
                <li><strong>Bradypnea:</strong> Rate below normal. Causes include: opioid overdose, CNS depression, head injury, severe hypoxia (a pre-terminal sign), hypothermia.</li>
            </ul>

            <h5>Blood Pressure</h5>
            <p>Blood pressure is measured using a <strong>sphygmomanometer</strong> (blood pressure cuff) and <strong>stethoscope</strong>. Select the correct cuff size — the bladder should encircle at least 80% of the upper arm. A cuff that is too small will give an <strong>artificially high</strong> reading; a cuff that is too large will give an <strong>artificially low</strong> reading.</p>

            <p><strong>Technique:</strong> Palpate the brachial artery in the antecubital space. Place the stethoscope over the artery. Inflate the cuff to approximately 30 mmHg above the point where the pulse disappears (the estimated systolic pressure). Slowly release pressure at 2–3 mmHg per second. The first Korotkoff sound (tapping) is the <strong>systolic</strong> pressure. The point where sounds disappear is the <strong>diastolic</strong> pressure. If you cannot hear the pressure (noisy environment, weak pulses), obtain a <strong>palpated systolic pressure</strong> by noting the point where the radial pulse returns during deflation — document as "Palpated systolic: 90 mmHg."</p>

            <ul>
                <li><strong>Hypertension:</strong> Persistently elevated BP. May be chronic (essential hypertension) or acute (pain, anxiety, increased ICP, preeclampsia).</li>
                <li><strong>Hypotension:</strong> Systolic BP below 90 mmHg in adults. A sign of shock (hypoperfusion) until proven otherwise. Look for other signs of poor perfusion: altered mental status, cool/clammy skin, tachycardia, weak pulses.</li>
                <li><strong>Orthostatic Hypotension:</strong> A drop in systolic BP of ≥20 mmHg when moving from lying to standing. Indicates volume depletion.</li>
            </ul>

            <h5>SpO₂ (Oxygen Saturation)</h5>
            <p>Measured with a <strong>pulse oximeter</strong> placed on a finger, toe, or earlobe. Normal SpO₂ is <strong>94–100%</strong>. Readings of 91–93% are borderline and require close monitoring. Readings ≤90% represent <strong>hypoxemia</strong> and require immediate intervention (oxygen therapy, assessment of airway/breathing). Be aware that pulse oximetry has limitations — see c2s6 for a detailed discussion of pitfalls.</p>

            <h5>Temperature</h5>
            <p>Temperature can be measured orally (sublingual), tympanically (ear), temporally (forehead artery), axillary (armpit — least accurate), or rectally (core temperature — most accurate). In the prehospital setting, <strong>tympanic</strong> and <strong>temporal</strong> thermometers are most common for speed and patient comfort. Temperature extremes are medical emergencies:</p>

            <ul>
                <li><strong>Hypothermia:</strong> Core temperature &lt;95°F (35°C). Patients may be shivering (mild) or shivering may stop as hypothermia deepens. Remove wet clothing, cover passively, handle gently (rough handling can trigger V-fib below 86°F/30°C).</li>
                <li><strong>Hyperthermia / Heat Stroke:</strong> Core temperature &gt;104°F (40°C) with altered mental status. This is a life-threatening emergency. Aggressive cooling measures while transporting.</li>
                <li><strong>Fever:</strong> Temperature &gt;100.4°F (38°C). The body's normal response to infection. In infants &lt;3 months, fever warrants high suspicion for serious bacterial infection.</li>
            </ul>

            <h4>Factors That Affect Vital Signs</h4>
            <p>Many non-pathological factors can alter vital signs. Always consider these when interpreting your readings:</p>
            <table>
                <thead>
                    <tr><th>Factor</th><th>Effect on Vital Signs</th></tr>
                </thead>
                <tbody>
                    <tr><td>Age</td><td>Baselines change across the lifespan as noted in the table above.</td></tr>
                    <tr><td>Physical Exertion/Activity</td><td>Increases HR, RR, and BP temporarily. Allow the patient to rest 2–5 minutes before reassessing.</td></tr>
                    <tr><td>Emotional State (Anxiety, Fear)</td><td>Can significantly elevate HR, RR, and BP. Pain has a similar effect.</td></tr>
                    <tr><td>Medications</td><td>Beta-blockers blunt HR response; antihypertensives lower BP; bronchodilators increase HR.</td></tr>
                    <tr><td>Position</td><td>BP is higher when sitting/standing than lying. Orthostatic changes indicate volume issues.</td></tr>
                    <tr><td>Environment</td><td>Heat/exercise increase temperature; cold can lower temperature and initially raise BP.</td></tr>
                    <tr><td>Time of Day</td><td>Core body temperature is lowest in early morning and highest in late afternoon/evening.</td></tr>
                    <tr><td>Pregnancy</td><td>HR increases 10–20 bpm; BP decreases in 2nd trimester, normalizes by term.</td></tr>
                    <tr><td>Fitness Level</td><td>Well-conditioned athletes often have lower resting HR and BP.</td></tr>
                </tbody>
            </table>

            <h4>When to Recheck Vital Signs</h4>
            <p>Serial vital sign measurements are essential for tracking the patient's status. Follow these general guidelines:</p>
            <ul>
                <li><strong>Stable patient:</strong> Recheck every 15 minutes during transport.</li>
                <li><strong>Unstable patient</strong> (any abnormal vital sign, altered mental status, suspected shock): Recheck every 5 minutes and after every intervention.</li>
                <li><strong>After any intervention:</strong> Recheck to assess response (e.g., after oxygen administration, fluid resuscitation, medication administration, splinting of a fracture).</li>
                <li><strong>At any change in patient condition:</strong> If the patient's status changes — new symptoms, deterioration, improvement — obtain a full set of vital signs immediately.</li>
                <li><strong>Before and after any significant movement:</strong> Moving a trauma patient, standing a patient up, or transferring to a hospital bed should be preceded and followed by vital sign assessment.</li>
            </ul>

            <p>Document all vital signs with the time they were obtained. Trend analysis — looking at how vital signs change over time — is one of the most powerful diagnostic tools you have as an EMT. A patient who starts with HR 110, BP 100/70, RR 22 and over 15 minutes progresses to HR 130, BP 88/50, RR 28 is clearly deteriorating, even if the initial vital signs were not alarming in isolation.</p>
        </div>`,
        flashcards: [
            { question: "What is the normal heart rate range for an adult?", answer: "60–100 beats per minute at rest", category: "Vital Signs" },
            { question: "What are the normal respiratory rate ranges for adult, child, and infant?", answer: "Adult: 12–20; Child (1–11 yr): 15–30; Infant (0–12 mo): 30–60 breaths per minute", category: "Vital Signs" },
            { question: "What is the preferred pulse site for an unresponsive adult patient?", answer: "The carotid artery — located lateral to the trachea, medial to the sternocleidomastoid muscle", category: "Vital Signs" },
            { question: "What pulse site is used for infants?", answer: "The brachial artery — on the inner aspect of the upper arm between the elbow and shoulder", category: "Vital Signs" },
            { question: "What happens to blood pressure readings when using a cuff that is too small?", answer: "The reading will be artificially high — the cuff bladder must encircle at least 80% of the upper arm", category: "Vital Signs" },
            { question: "How often should vital signs be rechecked in an unstable patient?", answer: "Every 5 minutes, and after every intervention", category: "Vital Signs" },
            { question: "What is the normal SpO₂ range for a healthy patient on room air?", answer: "94–100%. Readings of 91–93% are borderline; ≤90% is hypoxemia requiring immediate intervention.", category: "Vital Signs" },
            { question: "Define orthostatic hypotension.", answer: "A drop in systolic BP of ≥20 mmHg when moving from lying to standing, indicating possible volume depletion", category: "Vital Signs" }
        ],
        quiz: [
            { q: "What is the most common cause of a falsely elevated blood pressure reading in the field?", options: ["Stethoscope placed incorrectly", "BP cuff that is too small for the patient's arm", "BP cuff that is too large for the patient's arm", "Taking the pressure over a vein"], correct: 1 },
            { q: "A 6-month-old infant has a heart rate of 150 bpm. The EMT should:", options: ["Consider this normal for an infant and assess other vital signs", "Immediately start CPR", "Administer oxygen and request ALS", "Suspect sepsis and transport emergently"], correct: 0 },
            { q: "A patient with a suspected opioid overdose would most likely exhibit which pattern of vital sign abnormality?", options: ["Tachypnea and tachycardia", "Bradypnea and bradycardia", "Hypertension and tachypnea", "Hyperthermia and tachycardia"], correct: 1 },
            { q: "[HARD] A trauma patient has an initial BP of 118/72 and HR of 96. Fifteen minutes later, the BP is 96/62 and HR is 122. The skin is cool and clammy. This trend most likely indicates:", options: ["The patient is stabilizing and improving", "Compensated shock progressing toward decompensation — intervene immediately", "A normal stress response to injury", "Medication side effects from pain medication"], correct: 1, explanation: "Falling BP with rising HR and cool, clammy skin is the classic progression from compensated to decompensated (hypotensive) shock." }
        ],
        critical: [
            {
                id: "crit_2_5_1",
                scenario: "You are called to a residence for a 72-year-old male with weakness and dizziness. His initial vital signs while sitting on the couch: HR 88, BP 112/70, RR 16, SpO₂ 96%. He states he felt fine lying down but became dizzy when he stood up. You assist him to standing and immediately note he becomes pale and diaphoretic. Repeat standing vital signs: HR 122, BP 84/56, RR 20, SpO₂ 95%. He feels faint and you help him back to a seated position.",
                question: "What do these vital sign trends indicate and what is the most likely pathophysiology?",
                options: [
                    { t: "The patient is having a heart attack — administer aspirin and transport emergently", f: "Incorrect. While cardiac ischemia can cause these findings, the orthostatic pattern suggests volume depletion." },
                    { t: "Orthostatic hypotension with a significant BP and HR change indicating volume depletion/dehydration — transport for evaluation and IV fluids", f: "Correct. The drop in systolic BP of >20 mmHg and compensatory tachycardia upon standing is classic for volume depletion." }
                ],
                correct: 1,
                explanation: "A drop in systolic BP ≥20 mmHg with a concurrent HR increase ≥20 bpm upon standing is diagnostic of orthostatic hypotension, most commonly from volume depletion (dehydration, blood loss). This patient requires transport for further evaluation.",
                kpi: "Orthostatic vital sign interpretation"
            },
            {
                id: "crit_2_5_2",
                scenario: "A 5-year-old child is brought to the ambulance by her mother with complaints of fever and vomiting for 24 hours. The child is lying still on the stretcher, appears lethargic, and has dry mucous membranes. Initial vital signs: HR 148, BP 82/58, RR 28, SpO₂ 98%, temp 102.4°F (39.1°C). Capillary refill is 4 seconds. The mother states the child has not urinated in over 8 hours.",
                question: "Based on the vital signs and clinical presentation, what is the most appropriate interpretation and next action?",
                options: [
                    { t: "The fever is the main concern — focus on cooling the child and transport non-emergent", f: "Incorrect. While the fever is present, the HR is elevated out of proportion to fever alone, and the signs point to hypovolemia." },
                    { t: "Tachycardia, borderline hypotension with signs of poor perfusion (lethargy, delayed cap refill, dry mucous membranes, oliguria) indicate hypovolemic shock — provide oxygen, keep warm, and transport rapidly with fluid resuscitation ALS intercept if available", f: "Correct. This child has signs of compensated shock (tachycardia, cool skin, delayed cap refill) progressing toward hypotension. Fever increases fluid losses; vomiting causes direct volume loss." }
                ],
                correct: 1,
                explanation: "Children compensate for shock by increasing heart rate and systemic vascular resistance. Hypotension is a LATE sign in pediatric decompensation. These vital signs + physical findings = hypovolemic shock from dehydration.",
                kpi: "Pediatric shock recognition"
            },
            {
                id: "crit_2_5_3",
                scenario: "You are assessing a 34-year-old male involved in a high-speed MVC. He is confused, with cool/clammy skin. His initial vital signs in the ambulance: HR 128, BP 104/70, RR 24, SpO₂ 94%. While en route (8 minutes later), repeat vitals: HR 136, BP 86/56, RR 28, SpO₂ 91%. You are 12 minutes from the trauma center. Your partner asks if you should turn on the lights and sirens.",
                question: "What is the most appropriate interpretation and action based on the vital sign trends?",
                options: [
                    { t: "These vitals show the patient is compensating — continue routine transport at normal speed", f: "Incorrect. The trend shows decompensation from compensated shock to hypotensive shock." },
                    { t: "The patient has progressed from compensated to decompensated (hypotensive) shock — initiate high-flow oxygen, repeat vital signs every 5 minutes, and request ALS intercept while expediting transport", f: "Correct. Falling BP + rising HR + dropping SpO₂ + altered mental status = decompensated hemorrhagic shock." }
                ],
                correct: 1,
                explanation: "The trend from BP 104/70 → 86/56 with HR climbing from 128 → 136 signals that compensatory mechanisms are failing. This is decompensated (hypotensive) shock — a critical phase where rapid transport and hemorrhage control are essential.",
                kpi: "Shock trend recognition"
            }
        ]
    },
    {
        id: "c2s6",
        shortTitle: "2.6 Monitoring Devices",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Monitoring Devices</h3>

            <p>Modern prehospital care depends on monitoring devices that provide real-time data about the patient's physiological status. These devices supplement — but never replace — your clinical assessment. Understanding how each device works, what the numbers mean, and when to trust them (or be suspicious) is essential for safe patient care. This section covers the four monitoring devices you will use most as an EMT: pulse oximetry, capnography, blood glucose monitoring, and cardiac monitoring (ECG).</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Rule:</strong> Monitoring devices provide <strong>data points</strong>, not <strong>diagnoses</strong>. Use them to support your clinical assessment, not to replace it. A normal SpO₂ does not rule out respiratory failure. A normal EtCO₂ does not rule out a pulmonary embolism. Always treat the patient, not the monitor.
            </div>

            <h4>1. Pulse Oximetry (SpO₂)</h4>

            <h5>How It Works</h5>
            <p>Pulse oximetry uses <strong>spectrophotometry</strong> — light-emitting diodes (LEDs) shine two wavelengths of light (red and infrared) through a perfused tissue bed (typically a fingertip, toe, or earlobe). <strong>Oxyhemoglobin</strong> and <strong>deoxyhemoglobin</strong> absorb these wavelengths differently. The device calculates the ratio of oxygenated to total hemoglobin and displays it as a percentage. It also displays a <strong>plethysmographic waveform (pleth)</strong> — a visual representation of the pulse that confirms the device is detecting a pulsatile signal.</p>

            <h5>Normal Values and Targets</h5>
            <table>
                <thead>
                    <tr><th>Patient Category</th><th>Target SpO₂</th><th>Action if Below Target</th></tr>
                </thead>
                <tbody>
                    <tr><td>General medical patient</td><td>94–98%</td><td>Increase O₂; assess airway/breathing</td></tr>
                    <tr><td>COPD / chronic CO₂ retainer</td><td>88–92%</td><td>Titrate carefully — avoid over-oxygenation</td></tr>
                    <tr><td>Acute stroke patient</td><td>≥94%</td><td>Supplement O₂ to maintain target</td></tr>
                    <tr><td>Acute MI / cardiac patient</td><td>≥94%</td><td>Supplement O₂ only if hypoxic</td></tr>
                    <tr><td>Neonatal / infant</td><td>90–95%</td><td>More cautious — avoid hyperoxia toxicity</td></tr>
                </tbody>
            </table>

            <h5>Pitfalls and Common Errors</h5>
            <p>Pulse oximetry has important limitations that every EMT must know:</p>
            <table>
                <thead>
                    <tr><th>Problem</th><th>Effect on Reading</th><th>Solution</th></tr>
                </thead>
                <tbody>
                    <tr><td>Poor perfusion (shock, cold extremity, vasoconstriction)</td><td>Falsely low or no reading; weak/flat pleth waveform</td><td>Warm the extremity, try earlobe or nasal probe, assess for perfusion problem</td></tr>
                    <tr><td>Patient movement / shivering</td><td>Artifact — erratic or fluctuating readings</td><td>Stabilize the hand, use the earlobe site, wait for patient to be still</td></tr>
                    <tr><td>Nail polish (especially dark blue, black, green, or acrylic nails)</td><td>May cause falsely low reading</td><td>Remove polish from the test finger or rotate the probe 90° (side-to-side reading)</td></tr>
                    <tr><td>Carbon monoxide (CO) poisoning</td><td>Falsely high SpO₂ (COHb reads as oxyhemoglobin)</td><td>SpO₂ will be normal despite severe hypoxia — suspect CO from history/exposure, use CO-oximeter if available</td></tr>
                    <tr><td>Anemia / severe blood loss</td><td>SpO₂ may remain normal until late (O₂ is carried but there is less total hemoglobin)</td><td>Do not rely on SpO₂ alone — look for signs of shock, tissue hypoxia, and low CO₂</td></tr>
                    <tr><td>Bright ambient light (sunlight, surgical lights)</td><td>May interfere with sensor</td><td>Cover the sensor site with opaque material</td></tr>
                    <tr><td>Hypothermia</td><td>Poor perfusion → unreliable reading</td><td>Restore perfusion, use core temperature probe site</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Always check the <strong>pleth waveform</strong> before trusting a SpO₂ number. If the waveform is weak, erratic, or absent, the number is unreliable. The pleth is your confirmation that the device is detecting pulsatile blood flow.
            </div>

            <h4>2. Capnography (EtCO₂)</h4>

            <h5>How It Works</h5>
            <p>Capnography measures the concentration of carbon dioxide (CO₂) in exhaled breath. <strong>End-tidal CO₂ (EtCO₂)</strong> is the peak CO₂ concentration at the end of exhalation, measured in mmHg. The device displays a <strong>capnogram waveform</strong> — a graphic representation of CO₂ concentration throughout the respiratory cycle. Normal EtCO₂ is <strong>35–45 mmHg</strong>.</p>

            <h5>What the Waveform Tells You</h5>
            <p>A normal capnogram has four phases: (1) ascending phase — dead space CO₂ at start of exhalation, (2) alveolar plateau — CO₂-rich alveolar air reaches the sensor, (3) peak (EtCO₂) — end of exhalation, (4) descending phase — inhalation begins, CO₂ drops sharply. The waveform shape provides important diagnostic information:</p>
            <ul>
                <li><strong>Normal rectangular waveform:</strong> Normal ventilation-perfusion matching.</li>
                <li><strong>"Shark-fin" waveform (slow upslope):</strong> Bronchospasm (asthma, COPD) — air trapping causes prolonged, incomplete exhalation.</li>
                <li><strong>Sudden drop to near zero:</strong> Airway displacement, tube obstruction, apnea, or cardiac arrest (loss of pulmonary blood flow).</li>
                <li><strong>Gradual decreasing EtCO₂:</strong> Hyperventilation, decreasing cardiac output, hypovolemia, pulmonary embolism.</li>
                <li><strong>Increasing EtCO₂:</strong> Hypoventilation, rising metabolic rate (fever, seizure), or rebreathing CO₂.</li>
            </ul>

            <h5>EMT Applications of Capnography</h5>
            <ul>
                <li><strong>Confirming and monitoring advanced airway placement:</strong> Waveform capnography is the <strong>gold standard</strong> for confirming endotracheal tube placement and monitoring for displacement. Six exhaled breaths with a consistent waveform confirms placement in the trachea.</li>
                <li><strong>Monitoring CPR quality:</strong> EtCO₂ ≥10–20 mmHg during CPR indicates adequate chest compressions. A sudden increase in EtCO₂ during CPR often signals <strong>return of spontaneous circulation (ROSC)</strong> before a pulse is palpable.</li>
                <li><strong>Assessing ventilation adequacy:</strong> In a spontaneously breathing patient, EtCO₂ provides real-time feedback about whether the patient is breathing too fast (low EtCO₂) or too slow/shallow (high EtCO₂).</li>
            </ul>

            <h5>Pitfalls</h5>
            <ul>
                <li><strong>Colorimetric devices (color-change detectors):</strong> These are single-use, disposable devices that change color based on CO₂ presence. Purple = low CO₂ (possible esophageal intubation), tan = moderate CO₂, yellow = high CO₂ (correct tracheal placement). These are less reliable than waveform capnography and cannot provide quantitative values or trend data.</li>
                <li><strong>Nasal cannula capnography:</strong> In a breathing patient, the EtCO₂ reading may be diluted by room air if the patient breathes through the mouth. Consider using a combined O₂/CO₂ mask.</li>
                <li><strong>Massive pulmonary embolism:</strong> Can cause a low EtCO₂ despite normal minute ventilation due to increased dead space — CO₂ cannot reach the alveoli to be exhaled.</li>
            </ul>

            <h4>3. Blood Glucose Monitoring</h4>

            <h5>How It Works</h5>
            <p>A <strong>glucometer</strong> measures the concentration of glucose in a small capillary blood sample (usually from a fingertip). The device applies the blood to a test strip containing glucose oxidase; an electrochemical reaction produces a current proportional to the glucose level. Normal fasting blood glucose is <strong>70–110 mg/dL</strong>, though postprandial (after eating) levels may be slightly higher.</p>

            <h5>EMT Indications for Blood Glucose Testing</h5>
            <ul>
                <li><strong>Altered mental status of unknown cause</strong> — this is the most critical indication. Hypoglycemia (&lt;60 mg/dL) is a rapidly reversible cause of AMS that can mimic stroke, intoxication, seizure, head injury, and psychiatric conditions.</li>
                <li><strong>Known diabetic with suspected hypoglycemia or hyperglycemia</strong> — symptoms of hypoglycemia (sweating, tachycardia, confusion, seizure, coma) require immediate glucose administration if the patient can safely take oral glucose or has an order for IM glucagon or IV dextrose.</li>
                <li><strong>Seizure — to rule out hypoglycemia as the cause.</strong></li>
                <li><strong>Any patient with syncope or near-syncope of unclear etiology.</strong></li>
                <li><strong>Patients on insulin or oral hypoglycemic agents with any change in mental status.</strong></li>
            </ul>

            <h5>Interpreting Results</h5>
            <table>
                <thead>
                    <tr><th>Result</th><th>Interpretation</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>&lt;60 mg/dL</td><td>Severe hypoglycemia</td><td>Give oral glucose (if conscious, able to swallow) or IM glucagon per protocol. Transport.</td></tr>
                    <tr><td>60–70 mg/dL</td><td>Mild hypoglycemia</td><td>Monitor closely; consider oral glucose if symptomatic. Transport.</td></tr>
                    <tr><td>70–180 mg/dL</td><td>Normal to mildly elevated</td><td>No glucose intervention needed; assess for other causes of symptoms.</td></tr>
                    <tr><td>&gt;180 mg/dL</td><td>Hyperglycemia</td><td>May be associated with DKA/HHS. Check for ketones, provide transport. Do NOT give glucose.</td></tr>
                    <tr><td>&gt;400–500 mg/dL</td><td>Severe hyperglycemia</td><td>Usually indicates DKA or HHS. Provide transport; monitor ABCs.</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> In hypoglycemia, the brain runs out of fuel. Minutes matter. If a patient with altered mental status has a blood glucose &lt;60 mg/dL, administer glucose immediately per your protocol. Do not wait for a doctor's order if standing orders authorize it. Brain cells can suffer irreversible damage within 30 minutes of severe hypoglycemia.
            </div>

            <h5>Pitfalls</h5>
            <ul>
                <li><strong>Inadequate blood sample:</strong> Too little blood yields an error or falsely low reading. Use the side of the fingertip (not the pad — more painful, less blood).</li>
                <li><strong>Hemoconcentration from poor perfusion:</strong> In shock, capillary glucose may not reflect venous glucose accurately.</li>
                <li><strong>Contaminated skin:</strong> Alcohol wipes, food residue, or lotion on the finger can contaminate the sample. Clean with soap and water or alcohol, then dry thoroughly.</li>
                <li><strong>Expired test strips:</strong> Always check the expiration date. Expired strips give inaccurate results.</li>
                <li><strong>Reagent strip vs. photometric devices:</strong> Know which type your agency uses. Reagent strips (visually read) are less accurate than electronic meters.</li>
            </ul>

            <h4>4. Cardiac Monitoring (ECG Basics for EMTs)</h4>

            <h5>How It Works</h5>
            <p>An <strong>electrocardiogram (ECG or EKG)</strong> records the electrical activity of the heart through electrodes placed on the patient's skin. The heart's electrical conduction system — SA node → AV node → Bundle of His → Purkinje fibers — generates a characteristic waveform that can be analyzed for rate, rhythm, and ischemia. As an EMT, your role in cardiac monitoring focuses on <strong>lead placement</strong>, <strong>basic rhythm interpretation</strong>, and <strong>recognition of life-threatening arrhythmias</strong>.</p>

            <h5>EMT Scope — Cardiac Monitoring</h5>
            <p>The EMT scope of practice for cardiac monitoring generally includes:</p>
            <ul>
                <li>Applying ECG electrodes correctly and obtaining a <strong>3-lead or 4-lead tracing</strong> for rhythm monitoring.</li>
                <li>Obtaining a <strong>12-lead ECG</strong> (in some systems — know your local protocol). In most systems, paramedics or trained EMTs obtain 12-leads, but the skill of proper lead placement is valuable.</li>
                <li>Identifying the <strong>basic rhythm</strong>: normal sinus rhythm, sinus tachycardia, sinus bradycardia, and the life-threatening rhythms listed below.</li>
                <li>Assisting with <strong>AED analysis and defibrillation</strong>.</li>
                <li>Recognizing <strong>artifacts</strong> (patient movement, loose leads, 60-cycle interference) that can mimic dangerous rhythms.</li>
            </ul>

            <h5>Life-Threatening Rhythms to Recognize</h5>
            <table>
                <thead>
                    <tr><th>Rhythm</th><th>Characteristics</th><th>Treatment</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ventricular Fibrillation (V-Fib)</strong></td><td>Chaotic, irregular waveform — no identifiable P waves, QRS complexes, or T waves. The heart is quivering, not pumping. No pulse.</td><td>CPR + AED (defibrillate) + epinephrine per protocol</td></tr>
                    <tr><td><strong>Pulseless Ventricular Tachycardia (V-Tach)</strong></td><td>Wide, bizarre QRS complexes at a rate &gt;150 bpm. No pulse palpated.</td><td>CPR + AED (defibrillate) — treated same as V-Fib</td></tr>
                    <tr><td><strong>Asystole</strong></td><td>Flat line (must confirm in at least two leads to rule out fine V-Fib). No electrical activity, no pulse.</td><td>CPR + epinephrine — do NOT defibrillate (no shockable rhythm)</td></tr>
                    <tr><td><strong>Pulseless Electrical Activity (PEA)</strong></td><td>Organized electrical activity seen on monitor but NO pulse. The heart has electrical function but no mechanical output.</td><td>CPR + epinephrine + treat the underlying cause</td></tr>
                    <tr><td><strong>Third-Degree (Complete) Heart Block</strong></td><td>Atria and ventricles beat independently — P waves with no relationship to QRS complexes. Rate is often slow.</td><td>Treat causes, external pacing if severely symptomatic</td></tr>
                </tbody>
            </table>

            <h5>Lead Placement for 3-Lead/4-Lead Monitoring</h5>
            <ul>
                <li><strong>White (RA):</strong> Right arm (right clavicle, upper chest).</li>
                <li><strong>Black (LA):</strong> Left arm (left clavicle, upper chest).</li>
                <li><strong>Red (LL):</strong> Left leg (left lower rib margin or lower abdomen).</li>
                <li><strong>Green (RL):</strong> Right leg (ground lead — right lower rib margin or lower abdomen).</li>
            </ul>
            <p>Memo: <strong>"White on right, smoke over fire"</strong> — white (RA) on right, black (LA) to the left of white, red (LL) below the heart.</p>

            <h5>Common Artifacts and Troubleshooting</h5>
            <ul>
                <li><strong>Wandering baseline (respiratory variation):</strong> The tracing moves up and down with breathing. Move leads closer to the heart center (torso placement instead of limbs).</li>
                <li><strong>60-cycle interference:</strong> Fine, regular 60 Hz artifact from nearby electrical equipment. Switch to battery power; plug the monitor into a different outlet; move away from large electrical devices.</li>
                <li><strong>Muscle tremor artifact:</strong> Coarse baseline from patient shivering or movement. Warm the patient, ask them to stay still, or use the "monitor" lead filter.</li>
                <li><strong>Loose lead:</strong> Sudden flat line in one lead with normal tracings in others. Check electrode connections.</li>
                <li><strong>Chest hair:</strong> Poor electrode-to-skin contact. Shave small patches of hair for electrode placement.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> A common EMS pitfall is mistaking <strong>artifact for V-Fib</strong>. Before shocking, always check the patient — confirm unresponsiveness + apnea + pulselessness. If the patient is talking to you or has a pulse, the "V-Fib" on the monitor is artifact. <strong>Treat the patient, not the monitor.</strong>
            </div>

            <h4>General Principles — Using Any Monitoring Device</h4>
            <ul>
                <li><strong>Correlate with the patient:</strong> Every abnormal reading should be verified against the patient's clinical condition. A SpO₂ of 88% in a patient who is talking comfortably and has pink, warm skin deserves investigation of the equipment, not immediate intubation.</li>
                <li><strong>Trend over time is more valuable than a single reading:</strong> A single EtCO₂ of 38 mmHg is less informative than a trend from 32 → 38 → 42 suggesting hypoventilation.</li>
                <li><strong>Document device, reading, and time:</strong> Your PCR should include the device used, the values obtained, and the time of measurement.</li>
                <li><strong>Batteries fail:</strong> Carry spare batteries for every portable device. A device with a dead battery is useless.</li>
                <li><strong>Clean and maintain equipment:</strong> Follow your agency's protocol for cleaning monitoring devices between patients. Blood and body fluids on sensors can cause inaccurate readings and transmit infection.</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "What is the normal end-tidal CO₂ (EtCO₂) range for a healthy adult?", answer: "35–45 mmHg", category: "Monitoring Devices" },
            { question: "What does a 'shark-fin' capnography waveform indicate?", answer: "Bronchospasm — seen in asthma and COPD exacerbations due to air trapping and incomplete exhalation", category: "Monitoring Devices" },
            { question: "What is the most critical EMT indication for blood glucose monitoring?", answer: "Altered mental status of unknown cause — hypoglycemia is a rapidly reversible cause of AMS", category: "Monitoring Devices" },
            { question: "What is the treatment threshold for hypoglycemia in a patient with altered mental status?", answer: "Blood glucose <60 mg/dL — administer oral glucose (if conscious/swallowing) or IM glucagon per protocol", category: "Monitoring Devices" },
            { question: "What does a sudden increase in EtCO₂ during CPR typically indicate?", answer: "Return of spontaneous circulation (ROSC) — a rise in EtCO₂ indicates that cardiac output has returned and CO₂ is being delivered to the lungs", category: "Monitoring Devices" },
            { question: "What is the mnemonic for ECG lead placement?", answer: "'White on right, smoke over fire' — White (RA) on right clavicle, Black (LA) on left clavicle, Red (LL) below the heart", category: "Monitoring Devices" },
            { question: "Why can pulse oximetry give a falsely normal SpO₂ reading in a patient with carbon monoxide poisoning?", answer: "CO-oxygen (COHb) is read by the pulse oximeter as oxyhemoglobin — the SpO₂ appears normal even though the patient is severely hypoxic", category: "Monitoring Devices" },
            { question: "What is the minimum EtCO₂ value during CPR that indicates adequate chest compressions?", answer: "≥10–20 mmHg — a value below this suggests inadequate compression depth or rate", category: "Monitoring Devices" }
        ],
        quiz: [
            { q: "A pulse oximeter is reading 92% on a patient with cool, pale hands and a weak radial pulse. The pleth waveform is low-amplitude and irregular. What is the most appropriate action?", options: ["Accept the reading — it is likely accurate", "Warm the patient's hands, try the earlobe site, and correlate with clinical signs before interpreting", "Immediately administer high-flow oxygen", "Replace the pulse oximeter battery"], correct: 1 },
            { q: "During CPR, the EtCO₂ monitor shows a sudden rise from 12 mmHg to 42 mmHg. This most likely indicates:", options: ["The patient is hyperventilating", "Return of spontaneous circulation (ROSC)", "The capnography device needs recalibration", "The airway has become displaced"], correct: 1 },
            { q: "[HARD] A 55-year-old asthmatic patient has an EtCO₂ reading of 52 mmHg with a shark-fin waveform visible on the capnogram. The patient is awake but using accessory muscles and speaking in 2-word sentences. This combination of findings indicates:", options: ["Normal ventilation — no intervention needed", "Bronchospasm causing hypoventilation with CO₂ retention — this patient is tiring and may need BVM assistance", "Hyperventilation from anxiety", "A pulmonary embolism — transport to a PCI center"], correct: 1, explanation: "The elevated EtCO₂ (>45 mmHg) plus shark-fin waveform indicates air trapping and CO₂ retention from severe bronchospasm. When paired with accessory muscle use and inability to speak full sentences, this signals impending respiratory failure." },
            { q: "Which of the following cardiac rhythms is NOT shockable (should NOT be defibrillated)?", options: ["Ventricular Fibrillation (V-Fib)", "Pulseless Ventricular Tachycardia (V-Tach)", "Asystole", "AED analysis advised 'shock'"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_2_6_1",
                scenario: "You are called to a house fire for a 45-year-old male who was rescued by firefighters. He was trapped in a smoke-filled room for approximately 10 minutes. He is awake but confused, coughing, and complaining of a headache. His vitals: HR 108, BP 138/84, RR 24, SpO₂ 98% on high-flow oxygen via non-rebreather mask. The pulse oximeter shows a strong pleth waveform. His skin is pink and warm. The fire department reports the fire involved synthetic materials.",
                question: "Given the SpO₂ reading of 98% in a patient with significant smoke exposure, what is the most critical concern?",
                options: [
                    { t: "The patient is well-oxygenated and does not require further treatment — SpO₂ 98% confirms adequate oxygenation", f: "Incorrect. In smoke inhalation, CO poisoning is suspected, and pulse oximetry cannot distinguish COHb from oxyhemoglobin." },
                    { t: "Pulse oximetry is unreliable with smoke inhalation — the patient likely has carbon monoxide poisoning with a falsely normal SpO₂. Administer high-flow oxygen, monitor for deterioration, and transport to an appropriate facility", f: "Correct. In CO poisoning, SpO₂ is falsely elevated. Treat with high-flow O₂ and transport for CO-oximetry and hyperbaric evaluation." }
                ],
                correct: 1,
                explanation: "Carbon monoxide (CO) binds to hemoglobin 200–250× more strongly than oxygen. The pulse oximeter reads CO-oxygen as oxygenated hemoglobin, giving a falsely normal SpO₂. High-flow oxygen is the primary treatment to displace CO from hemoglobin (half-life on room air = 4–6 hours; on 100% O₂ = 60–90 minutes).",
                kpi: "CO poisoning recognition"
            },
            {
                id: "crit_2_6_2",
                scenario: "You are transporting a 68-year-old female with difficulty breathing. She has a history of CHF and COPD. She is sitting upright, using accessory muscles, with audible wheezes. She can only speak 2–3 words between breaths. You have placed her on a non-rebreather at 15 L/min and applied a pulse oximeter and capnography. Her SpO₂ is 91% and the capnogram shows a shark-fin waveform with an EtCO₂ reading that has risen from 46 to 54 mmHg over the last 8 minutes of transport. She is becoming increasingly drowsy.",
                question: "Based on these monitoring trends, what is the most appropriate next action?",
                options: [
                    { t: "Continue monitoring — the SpO₂ is above 90% and the patient is just tired from the work of breathing", f: "Incorrect. The rising EtCO₂ plus increasing drowsiness signals respiratory failure, not fatigue alone." },
                    { t: "The rising EtCO₂, shark-fin waveform, and declining mental status despite high-flow O₂ indicate respiratory failure from bronchospasm — initiate positive-pressure ventilation (BVM with CPAP if available) and prepare for possible advanced airway management", f: "Correct. Rising EtCO₂ with deteriorating mental status means the patient is tiring and can no longer maintain adequate ventilation. Assisted ventilation is needed immediately." }
                ],
                correct: 1,
                explanation: "An EtCO₂ rising above 45 mmHg with declining mental status signals hypoventilatory respiratory failure. In this COPD/asthma patient, the shark-fin waveform indicates bronchospasm causing air trapping. The patient needs CPAP/BiPAP or BVM ventilation, not just continued passive oxygen.",
                kpi: "Capnography trend interpretation"
            },
            {
                id: "crit_2_6_3",
                scenario: "You are called to a nursing home for a 78-year-old male with a history of type 2 diabetes and dementia. Staff report he has been 'more confused than usual' since this morning and refused breakfast. He has not had his insulin today. On arrival, he is sitting in a chair, awake but confused, unable to answer questions appropriately. His skin is warm and dry. Vitals: HR 96, BP 130/78, RR 16, SpO₂ 97%, temp 98.6°F. Staff state his blood sugar was checked 2 hours ago and was 'normal.' You perform a finger-stick glucose reading of 48 mg/dL. The staff insists, 'That can't be right — we checked it two hours ago and it was 132.'",
                question: "What is the most appropriate interpretation and action?",
                options: [
                    { t: "Trust the nursing home staff's prior reading — the glucometer reading must be wrong", f: "Incorrect. Blood glucose can drop rapidly, especially in patients who miss meals. The current reading takes priority." },
                    { t: "Blood glucose changes over time — the current reading of 48 mg/dL is valid and explains his AMS. Administer oral glucose per protocol (if he can swallow safely) or IM glucagon, and transport for evaluation", f: "Correct. The current reading reflects the patient's condition now. Hypoglycemia (&lt;60 mg/dL) is a medical emergency requiring immediate treatment." }
                ],
                correct: 1,
                explanation: "Hypoglycemia (&lt;60 mg/dL) is a rapidly reversible cause of altered mental status. The fact that the glucose was normal 2 hours ago is irrelevant — the current value is diagnostic. Missing a meal + insulin or hypoglycemic agent = rapid glucose drop. Treat immediately and transport.",
                kpi: "Hypoglycemia diagnosis and treatment"
            }
        ]
    },
    {
        id: "c2s7",
        shortTitle: "2.7 History Taking (SAMPLE / OPQRST)",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> History Taking (SAMPLE / OPQRST)</h3>

            <p>Patient history taking is one of the most important skills you will develop as an EMT. The information you gather from the patient — and from family members, bystanders, and the scene — often determines the diagnosis, the treatment you provide, and the destination you choose. Unlike vital signs and physical exam findings, the history provides the <strong>context</strong> for everything else you observe. A well-taken history can distinguish between a stroke and hypoglycemia, between cardiac chest pain and GERD, between anaphylaxis and a panic attack.</p>

            <p>Two structured mnemonic tools — <strong>SAMPLE</strong> and <strong>OPQRST</strong> — help you gather a complete and organized history every time. They are not checklists to be recited robotically; they are frameworks that ensure you do not miss critical information while allowing the conversation to flow naturally.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> History taking is not a one-time event — it is an ongoing process. You will gather initial information during the primary assessment, add detail during the secondary assessment, and fill in gaps during reassessment. It is acceptable and expected to ask the same question in different ways as the patient's condition evolves or as you build rapport.
            </div>

            <h4>The SAMPLE History</h4>
            <p>The <strong>SAMPLE</strong> mnemonic is used to obtain a comprehensive medical history. It is indicated for <strong>every patient</strong>, regardless of the nature of the call — medical or trauma.</p>

            <table>
                <thead>
                    <tr><th>Letter</th><th>Stands For</th><th>Key Questions / Details to Gather</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>S</strong></td>
                        <td><strong>Signs & Symptoms</strong></td>
                        <td>
                            What is the patient experiencing? "Why did you call today?" "What's bothering you most?" Distinguish between <strong>signs</strong> (objective — what you observe: bleeding, swelling, abnormal vital signs) and <strong>symptoms</strong> (subjective — what the patient feels: pain, nausea, dizziness).<br>
                            For pain, use OPQRST (see below).
                        </td>
                    </tr>
                    <tr>
                        <td><strong>A</strong></td>
                        <td><strong>Allergies</strong></td>
                        <td>
                            "Are you allergic to any medications?" "Any food or environmental allergies?"<br>
                            Specifically ask about <strong>penicillin, sulfa drugs, aspirin, latex, and iodine</strong> — these are common triggers. Document the type of reaction (rash, anaphylaxis, GI upset). This is critical if you plan to administer any medication.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>M</strong></td>
                        <td><strong>Medications</strong></td>
                        <td>
                            "What medications do you take?" "Have you taken any today?" Include prescriptions, over-the-counter (OTC), herbal supplements, and recreational drugs.<br>
                            Ask about <strong>beta-blockers</strong> (can blunt HR response to shock), <strong>anticoagulants/blood thinners</strong> (warfarin, apixaban, rivaroxaban — major bleeding risk after trauma), <strong>insulin/oral hypoglycemics</strong>, and <strong>nitroglycerin</strong> (cardiac history). Bring all medication bottles to the hospital if possible.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>P</strong></td>
                        <td><strong>Past Medical History</strong></td>
                        <td>
                            "Do you have any medical conditions?" "Have you ever been hospitalized or had surgery?"<br>
                            Ask specifically about <strong>cardiac disease, diabetes, hypertension, COPD/asthma, seizures, stroke, cancer, kidney disease, and bleeding disorders</strong>. Also ask about <strong>pregnancy</strong> in female patients of childbearing age — pregnancy changes anatomy, physiology, and treatment options.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>L</strong></td>
                        <td><strong>Last Oral Intake</strong></td>
                        <td>
                            "When did you last eat or drink anything?" "What was it?"<br>
                            This matters for: (1) aspiration risk if sedation or surgery is needed, (2) diabetic patients (last meal timing relates to hypoglycemia/hyperglycemia), (3) determining if nausea/vomiting is related to food poisoning.<br>
                            Also ask about <strong>last bowel movement and urination</strong> — especially in elderly or bedridden patients (constipation can cause AMS in the elderly; lack of urination suggests dehydration or obstruction).
                        </td>
                    </tr>
                    <tr>
                        <td><strong>E</strong></td>
                        <td><strong>Events Leading to Illness/Injury</strong></td>
                        <td>
                            "What were you doing when this started?" "What happened right before you felt ill?"<br>
                            For trauma: mechanism of injury (MVC height, fall distance, speed, restraint use, intrusion, airbag deployment). For medical: what activity preceded symptoms? Was the patient at rest or active? Did anything make it better or worse? Was there any recent illness, travel, or unusual stress?
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> When a patient tells you "I'm allergic to everything," ask: "What specific medication caused a reaction, and what happened?" True anaphylaxis (hives, swelling, breathing difficulty) is different from nausea or headache — which may be a side effect, not a true allergy. Document the specific reaction.
            </div>

            <h4>The OPQRST Pain/Discomfort Assessment</h4>
            <p>When the chief complaint involves <strong>pain or discomfort</strong> — chest pain, abdominal pain, headache, back pain — the <strong>OPQRST</strong> mnemonic helps you characterize the pain in detail. This information is critical for differential diagnosis and for communicating effectively with the receiving hospital.</p>

            <table>
                <thead>
                    <tr><th>Letter</th><th>Stands For</th><th>Questions to Ask</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>O</strong></td>
                        <td><strong>Onset</strong></td>
                        <td>"When did the pain start?" "What were you doing when it began?" "Did it come on suddenly or gradually?"<br>
                        <strong>Sudden onset</strong> (like a "tearing" sensation) suggests: aortic dissection, pulmonary embolism, acute MI, ruptured aneurysm, pneumothorax. <strong>Gradual onset</strong> suggests: infections, inflammatory conditions, musculoskeletal pain.</td>
                    </tr>
                    <tr>
                        <td><strong>P</strong></td>
                        <td><strong>Provocation / Palliation</strong></td>
                        <td>"What makes the pain worse?" "What makes it better?"<br>
                        Worse with movement? Deep breathing? Eating? Lying flat? Better with rest? Specific position? Medications? Nitroglycerin that relieves chest pain is suggestive of cardiac ischemia. Pain worsened by breathing (pleuritic) suggests pulmonary origin.</td>
                    </tr>
                    <tr>
                        <td><strong>Q</strong></td>
                        <td><strong>Quality</strong></td>
                        <td>"Can you describe the pain?" "What does it feel like?"<br>
                        Use patient's own words, but offer descriptors if they struggle: sharp, dull, stabbing, burning, crushing, tearing, pressure, squeezing, throbbing. <strong>Crushing/pressure</strong> = cardiac. <strong>Tearing</strong> = aortic dissection. <strong>Burning</strong> = GERD or cardiac (atypical). <strong>Sharp/stabbing</strong> = pulmonary or musculoskeletal.</td>
                    </tr>
                    <tr>
                        <td><strong>R</strong></td>
                        <td><strong>Radiation</strong></td>
                        <td>"Does the pain travel anywhere?" "Is it in one spot or does it move?"<br>
                        Classic cardiac radiation: left arm, jaw, neck, back, epigastrium. Biliary pain: radiates to right shoulder/scapula. Renal colic: radiates from flank to groin. Aortic dissection: radiates to back or into legs.</td>
                    </tr>
                    <tr>
                        <td><strong>S</strong></td>
                        <td><strong>Severity</strong></td>
                        <td>"On a scale of 0 to 10, with 0 being no pain and 10 being the worst pain imaginable, how would you rate your pain?"<br>
                        Use standardized pain scales: <strong>Numeric Rating Scale (NRS)</strong> for adults/older children; <strong>Wong-Baker FACES</strong> for younger children; <strong>FLACC</strong> (Face, Legs, Activity, Cry, Consolability) for pre-verbal children or cognitively impaired patients. Track severity over time — is it getting better or worse?</td>
                    </tr>
                    <tr>
                        <td><strong>T</strong></td>
                        <td><strong>Time / Timing</strong></td>
                        <td>"When did the pain start exactly?" "Is it constant or does it come and go?" "How long does it last?" "Is this the first time you've had this pain?"<br>
                        Constant vs. intermittent is a key distinction. <strong>Constant, unrelenting pain</strong> suggests ischemia, infarction, or surgical abdomen. <strong>Intermittent/colicky</strong> suggests hollow-organ obstruction (kidney stones, gallstones, bowel obstruction).</td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Never lower the severity of a pain assessment because the patient appears comfortable or is not "acting" like they are in pain. Patient presentations vary widely — some patients with myocardial infarction have a "silent" presentation (especially diabetics, women, and the elderly). Their pain score is their truth. Document it accurately.
            </div>

            <h4>Communication Techniques for History Taking</h4>

            <p>Effective history taking is not just about asking the right questions — it is about <strong>how</strong> you ask them. Your communication style directly affects the quality and accuracy of the information you receive.</p>

            <h5>Open-Ended vs. Closed Questions</h5>
            <ul>
                <li><strong>Open-ended questions</strong> encourage the patient to tell their story: "Tell me what happened today." "Can you describe the pain?" These questions yield the richest information and should be used <strong>first</strong>.</li>
                <li><strong>Closed questions</strong> elicit specific yes/no or short-answer responses: "Did the pain start suddenly?" "Have you taken your nitroglycerin?" Use these to <strong>clarify and fill in details</strong> after open-ended questions.</li>
                <li>Balance: Start open-ended, then narrow with closed questions. Avoid leading questions that suggest an answer: "The pain doesn't radiate to your arm, does it?" Instead ask: "Does the pain travel anywhere?"</li>
            </ul>

            <h5>Active Listening Techniques</h5>
            <ul>
                <li><strong>Facilitation:</strong> Use neutral prompts to encourage the patient to continue: "Go on…" "Tell me more about that." "Mm-hmm." Nodding and maintaining eye contact communicates that you are listening.</li>
                <li><strong>Reflection/Repetition:</strong> Repeat the patient's last few words back as a question: Patient: "The pain started after I ate lunch." EMT: "After you ate lunch…?" This encourages elaboration without leading.</li>
                <li><strong>Clarification:</strong> When the patient uses vague terms: "What do you mean by 'feeling funny'?" "You said the medication was 'a little blue pill' — do you know the name on the bottle?"</li>
                <li><strong>Summarization:</strong> Periodically summarize what you have heard to confirm accuracy: "Let me make sure I understand — the chest pain started about 2 hours ago while you were watching TV, it's a dull pressure that radiates to your left shoulder, and it's about a 6 out of 10. Did I get that right?"</li>
                <li><strong>Empathic statements:</strong> "This sounds very scary. I'm here to help you." "I can see you are in a lot of pain — we are going to do everything we can to help you." Empathy builds trust and encourages more honest disclosure.</li>
            </ul>

            <h5>Interviewing Patients with Special Needs</h5>
            <table>
                <thead>
                    <tr><th>Patient Population</th><th>Strategies</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pediatric</strong></td><td>Get on their eye level. Use simple language. Ask about what the child likes to do. If possible, interview the parent/caregiver separately for the history. Use the child's favorite toy or blanket for comfort. For pain, use the Wong-Baker FACES scale or FLACC.</td></tr>
                    <tr><td><strong>Elderly</strong></td><td>Speak clearly and face the patient (they may lip-read). Allow extra time — processing may be slower. Check for hearing aids and glasses. Be aware of polypharmacy and cognitive impairment. Ask about fall history, medication changes, and functional decline.</td></tr>
                    <tr><td><strong>Cognitively Impaired (Dementia, Intellectual Disability)</strong></td><td>Approach slowly, use calm voice, and identify yourself repeatedly if needed. Use short, concrete sentences. Avoid testing (e.g., "Do you know where you are?") — focus on comfort and observation. Gather history from caregivers, family, or facility staff.</td></tr>
                    <tr><td><strong>Non-English Speaking / Limited English Proficiency</strong></td><td>Use a <strong>medical interpreter</strong> — in person, by phone, or by video (available in many systems). Do NOT use family members as interpreters for sensitive information (they may filter or misunderstand). Learn key phrases in common languages: "Where does it hurt?" "Take this medication." Use picture-based communication tools if available.</td></tr>
                    <tr><td><strong>Hearing Impaired</strong></td><td>Face the patient directly, speak clearly, and ensure good lighting on your face. If the patient reads lips, do not obstruct your mouth. Use written communication (pen/paper, smartphone screen) as a backup. ASL interpreters can be accessed via video services.</td></tr>
                    <tr><td><strong>Visually Impaired</strong></td><td>Identify yourself by name and role immediately. Describe what you are doing before you do it: "I am going to take your blood pressure now — you'll feel the cuff squeeze your arm." Guide the patient's hand to your arm or equipment so they know what is happening.</td></tr>
                    <tr><td><strong>Emotionally Distressed / Crying</strong></td><td>Allow the patient to express emotion — do not rush to "fix it" with false reassurance. Use empathic silence. Acknowledge their distress: "This is a very difficult situation. Take your time." Then gently redirect to the history.</td></tr>
                </tbody>
            </table>

            <h4>Dealing with Difficult Patients</h4>
            <p>Not every patient encounter is cooperative. You will encounter patients who are angry, combative, intoxicated, in denial, or simply frightened in ways that manifest as hostility. Your approach to these patients can mean the difference between gaining their cooperation and escalating the situation.</p>

            <h5>General Principles for Difficult Encounters</h5>
            <ul>
                <li><strong>Stay calm.</strong> Your calm demeanor is contagious. If you become angry or defensive, the situation will escalate. Take a deep breath. Speak slowly and quietly — a calm voice lowers the emotional temperature of the room.</li>
                <li><strong>Do not take it personally.</strong> The patient is not angry at <em>you</em> — they are angry at their situation, their pain, their fear, or their loss of control. Separate the person from their behavior.</li>
                <li><strong>Set clear boundaries.</strong> "I understand you are frustrated, but I need you to sit on the stretcher so I can help you. I cannot help you if you are walking away." Use respectful, direct language.</li>
                <li><strong>Use the patient's name.</strong> Addressing a patient by name (with permission) humanizes the interaction and establishes rapport.</li>
                <li><strong>Give the patient choices</strong> to restore a sense of control: "Would you like to sit or lie on the stretcher?" "Would you like me to call your daughter?" Autonomy reduces resistance.</li>
            </ul>

            <h5>The Difficult Patient by Type</h5>
            <table>
                <thead>
                    <tr><th>Patient Type</th><th>Characteristics</th><th>Approach</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Anxious / Fearful</strong></td><td>Rapid speech, hyperventilation, repetitive questions, inability to focus</td><td>Be calm and reassuring. Explain everything before you do it. Give simple, direct instructions. Avoid overwhelming with too much information at once. Use grounding: "Focus on my voice. Take a slow breath with me."</td></tr>
                    <tr><td><strong>Angry / Hostile</strong></td><td>Loud voice, threatening posture, blaming language, refuses care</td><td>Maintain a safe distance. Do not turn your back. Keep an exit route open. Use a low, calm voice. Acknowledge their anger: "I can see you are very upset." Do not argue. Set limits: "I want to help you, but I need you to lower your voice." Request law enforcement if you feel threatened.</td></tr>
                    <tr><td><strong>Intoxicated / Substance-Impaired</strong></td><td>Slurred speech, unsteady gait, erratic behavior, denial of intoxication</td><td>Speak slowly and clearly. Be patient — they may not process information quickly. Do not lecture about substance use. Maintain safety — intoxicated patients can become violent unpredictably. Assume co-existing medical problem (head injury, hypoglycemia, overdose) until proven otherwise.</td></tr>
                    <tr><td><strong>Denies Illness / Refuses Care</strong></td><td>States "I'm fine," minimizes symptoms, refuses transport</td><td>Do not argue. Explain your concerns in simple terms: "Your blood pressure is very low and your heart rate is very fast — these are signs your body is under stress." Describe what could happen without care. Offer alternatives: "You don't have to go to the ER, but let me at least check your blood pressure again before I leave." Document refusal thoroughly if they still refuse.</td></tr>
                    <tr><td><strong>Manipulative / Demanding</strong></td><td>Makes excessive requests, uses flattery or threats, demands specific treatments (e.g., "Give me morphine" or "Take me to the hospital across town")</td><td>Be professional and consistent. Do not reward demanding behavior — explain what you can and cannot do within your protocol. Do not argue. "I understand you would like to go to City Hospital. Our protocol requires us to transport to the closest appropriate facility, which is County General. I will document your request."</td></tr>
                    <tr><td><strong>Confused / Demented</strong></td><td>Disoriented, unable to give coherent history, may be agitated</td><td>Orient the patient gently: "My name is John, I'm an EMT, and I'm here to help you." Use short, simple sentences. Avoid asking multiple questions at once. Gather history from family/caregivers. Look for medical causes of sudden confusion (infection, hypoxia, hypoglycemia, stroke, medication change).</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> When a patient refuses care, <strong>do not argue</strong>. Arguing damages rapport and makes the patient more resistant. Instead: (1) acknowledge their autonomy ("I understand you do not want to go to the hospital"), (2) explain your concerns ("I am worried because your blood pressure is low and you passed out"), (3) offer alternatives ("Will you let me check your blood pressure one more time?"), (4) if they still refuse, document thoroughly and have them sign a refusal (or document witnessed verbal refusal). Leave the door open: "If you change your mind, call 9-1-1 again. We will come back."
            </div>

            <h4>Putting It All Together — A Systematic Approach</h4>
            <p>Your scene size-up and primary assessment have already identified and managed life threats. Now you shift to the <strong>secondary assessment</strong>, where history taking is the centerpiece. Here is how the SAMPLE and OPQRST fit into the overall patient assessment process:</p>
            <ol>
                <li><strong>Scene Size-Up</strong> — Ensure safety; note mechanism of injury or nature of illness.</li>
                <li><strong>Primary Assessment (XABCDE)</strong> — Identify and manage life threats; get initial chief complaint and general impression.</li>
                <li><strong>History Taking</strong> — Obtain SAMPLE history and OPQRST (if pain is present). This is where 80% of diagnostic information comes from.</li>
                <li><strong>Secondary Assessment</strong> — Focused physical exam based on the chief complaint and history.</li>
                <li><strong>Reassessment</strong> — Repeat vital signs, re-evaluate interventions, fill in any history gaps.</li>
            </ol>
            <p>Remember: History taking is an <strong>active conversation</strong>, not an interrogation. The patient is the expert on their own body and their own experience. Your job is to guide the conversation, listen carefully, and extract the information you need to provide safe, appropriate care.</p>
        </div>`,
        flashcards: [
            { question: "What does the SAMPLE mnemonic stand for?", answer: "Signs & Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to illness/injury", category: "History Taking" },
            { question: "What does the OPQRST mnemonic stand for?", answer: "Onset, Provocation/Palliation, Quality, Radiation, Severity, Time/Timing", category: "History Taking" },
            { question: "Why is it important to ask about anticoagulant use in a trauma patient?", answer: "Anticoagulants (warfarin, apixaban, rivaroxaban) significantly increase the risk of life-threatening bleeding, even from minor injuries", category: "History Taking" },
            { question: "What pain scale is recommended for pre-verbal children or cognitively impaired patients?", answer: "The FLACC scale (Face, Legs, Activity, Cry, Consolability) — it uses observable behaviors to assess pain when the patient cannot self-report", category: "History Taking" },
            { question: "What is the recommended approach when a patient refuses care and transport?", answer: "Acknowledge their autonomy, explain your concerns, offer alternatives, document thoroughly (signed refusal or witnessed verbal refusal), and leave the door open for them to call back", category: "History Taking" },
            { question: "A patient describes chest pain as 'tearing' in quality. What condition should you suspect?", answer: "Aortic dissection — tearing or ripping chest/back pain is a classic descriptor for this life-threatening condition", category: "History Taking" },
            { question: "What is the difference between an open-ended and a closed question in history taking?", answer: "Open-ended questions (e.g., 'Tell me what happened') encourage narrative and yield richer information. Closed questions (e.g., 'Did the pain start suddenly?') elicit specific yes/no answers and are used to clarify details.", category: "History Taking" },
            { question: "List three subgroups of patients who are more likely to have a 'silent' or atypical presentation of myocardial infarction.", answer: "Diabetics (neuropathy blunts pain), women (more likely to have atypical symptoms like fatigue, nausea, back pain), and the elderly (may present with altered mental status or weakness alone)", category: "History Taking" }
        ],
        quiz: [
            { q: "In the SAMPLE mnemonic, what does the 'P' stand for?", options: ["Pain assessment", "Past medical history", "Prior medications", "Physical exam"], correct: 1 },
            { q: "A trauma patient has a known history of atrial fibrillation and takes warfarin. This information is MOST relevant for assessing the risk of:", options: ["Allergic reaction to pain medication", "Life-threatening bleeding from internal injuries due to anticoagulation", "Hypoglycemia during transport", "Seizure activity"], correct: 1 },
            { q: "[HARD] A 65-year-old male with chest pain tells you the pain started 3 hours ago while shoveling snow, is a 'heavy pressure' in the center of his chest that radiates to his left arm, rates it 7/10, and notes nitroglycerin gave partial relief. Which of the following is the MOST concerning element of this history?", options: ["The pain started during physical exertion", "The pain radiates to the left arm", "The duration is 3 hours — prolonged chest pain suggests evolving MI rather than stable angina", "The nitroglycerin gave partial relief"], correct: 2, explanation: "Angina typically lasts 5–15 minutes and resolves with rest or nitroglycerin. Pain lasting >20 minutes despite NTG is concerning for acute coronary syndrome / evolving MI. This patient needs emergent transport to a PCI-capable center." },
            { q: "[HARD] A patient with sudden onset severe lower back pain describes it as 'the worst pain of my life' and rates it 10/10. It radiates into the left groin. Onset was sudden while sitting at rest. He is pale, diaphoretic, HR 122, BP 84/56. What condition must be at the TOP of your differential?", options: ["Muscle spasm", "Renal colic (kidney stone)", "Ruptured abdominal aortic aneurysm (AAA) — the combination of sudden tearing back/flank pain, hypotension, and pallor in an older patient is classic", "Herniated disc"], correct: 2, explanation: "Sudden severe back/flank pain with hypotension, diaphoresis, and pallor in an older patient is a ruptured AAA until proven otherwise. This is a time-critical surgical emergency. Do not delay transport." }
        ],
        critical: [
            {
                id: "crit_2_7_1",
                scenario: "You are called to a home for a 58-year-old male with a chief complaint of 'weakness.' On arrival, the patient is lying on the couch, alert but subdued. He states he has felt 'weak and tired' for the past 2 days but didn't think much of it. He has a history of diabetes and hypertension. His wife mentions he had 'a little stomach bug' but is otherwise healthy. As you begin your SAMPLE history, the patient becomes increasingly vague and says, 'I just need to rest.' The wife quietly pulls you aside and tells you that he had dark, tarry stools yesterday and again this morning — which he told her not to mention. Your assessment reveals: HR 108, BP 96/60, RR 18, SpO₂ 96%, skin pale and cool.",
                question: "What piece of SAMPLE information changes your clinical picture most dramatically, and what is your next action?",
                options: [
                    { t: "The history of diabetes — check blood glucose and give orange juice if low", f: "Incorrect. While diabetes is relevant, the critical new information is the melena (dark tarry stools), which explains the vital sign abnormalities." },
                    { t: "The 'E' (Events) information — the wife's disclosure of dark tarry stools (melena) indicates GI bleeding, explaining the tachycardia and borderline hypotension. Initiate high-flow oxygen, place patient supine, and transport emergently", f: "Correct. Melena = upper GI bleeding. The patient's 'weakness' is actually hemorrhagic shock from blood loss. This changes the urgency from a routine assessment to a time-sensitive transport." }
                ],
                correct: 1,
                explanation: "The wife's supplemental history (melena) is the key finding. The combination of melena + tachycardia + borderline hypotension + pallor = GI hemorrhage with early hypovolemic shock. The patient may have been minimizing his symptoms. Always seek collateral history from family/caregivers.",
                kpi: "Collateral history gathering"
            },
            {
                id: "crit_2_7_2",
                scenario: "A 45-year-old male was the unrestrained driver in a high-speed MVC (estimated 60 mph into a tree). He has a deformed steering wheel and a starred windshield. He is conscious and alert, with obvious deformity of his right femur. He is in significant pain. As you begin your history, he becomes angry and shouts, 'Why are you asking me all these stupid questions? I was in a car accident! My leg is broken! Just take me to the hospital! Stop wasting time!' He refuses to answer any more questions and demands you 'drive now.'",
                question: "How should you manage this difficult patient encounter while still obtaining essential history?",
                options: [
                    { t: "Ignore his outburst and continue asking SAMPLE questions — the history is mandatory", f: "Incorrect. Pushing through resistance in an already angry patient will escalate the situation and damage rapport." },
                    { t: "Acknowledge his frustration and pain, explain briefly why you need a few answers ('I need to know your allergies and medications to give you safe pain treatment'), prioritize critical SAMPLE elements (allergies + meds + events), and defer non-critical questions to en route", f: "Correct. Meet the patient where they are, explain the 'why' behind your questions, prioritize the safety-critical information, and defer what can wait. Build rapport en route." }
                ],
                correct: 1,
                explanation: "When a patient is hostile, acknowledge their feelings, explain your reasoning, and prioritize. Allergies and medications are safety-critical before any treatment. Past medical history and last oral intake can be asked en route after the patient has calmed and trust has been established.",
                kpi: "Difficult patient management"
            },
            {
                id: "crit_2_7_3",
                scenario: "You respond to a 78-year-old female who 'fell and can't get up.' She lives alone. Upon arrival, she is on the floor in her kitchen, alert but confused. She says she 'must have tripped' but cannot remember exactly what happened. She has no visible injuries, states she does not need an ambulance, and just wants help getting back into her chair. Her vitals: HR 82, BP 124/78, RR 16, SpO₂ 97%. She is pleasant but insistent: 'I'm fine, dear. Just help me up.' As you talk with her, you notice she seems more confused than you would expect for a simple mechanical fall — she cannot remember what day it is and keeps asking why you are there. There is an empty pill bottle on the counter for lisinopril. The house is cluttered, and the refrigerator appears empty.",
                question: "What is the most appropriate approach to history taking and decision-making in this scenario?",
                options: [
                    { t: "Help her back into the chair and have her sign a refusal — she is alert and has a right to refuse", f: "Incorrect. Her confusion and poor recall suggest an underlying medical problem that caused the fall, not a simple slip." },
                    { t: "Use OPQRST for the fall mechanism, gather collateral from what you can observe (empty fridge suggests poor nutrition/hydration; empty lisinopril bottle suggests she may have stopped her BP medication), notice her confusion may indicate the cause rather than the result of the fall, and explain why transport is needed: 'You seem a bit confused, which may be a sign of an infection or other medical problem. I'd like to have a doctor check you to make sure you're safe'", f: "Correct. The patient's confusion, poor recall, and empty house suggest systemic illness (UTI, dehydration, medication issue) that caused the fall. Refusing transport is not appropriate for a patient who may lack the capacity to make that decision due to underlying AMS." }
                ],
                correct: 1,
                explanation: "When a patient's decision-making capacity is questionable (confusion, poor recall, inability to understand their situation), allowing them to refuse transport is unsafe. The EMT has a duty to act and should proceed with transport, explaining concerns to the patient calmly and clearly. The 'E' in SAMPLE (Events) — why she actually fell — is the key question.",
                kpi: "Capacity assessment and refusal management"
            }
        ]
    },
    {
        id: "c2s8",
        shortTitle: "2.8 Secondary Assessment",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Secondary Assessment — Head-to-Toe Physical Exam</h3>

            <p>The secondary assessment is a systematic head-to-toe physical examination performed after the primary assessment has identified and managed all immediate life threats (XABCDE). Its purpose is to <strong>identify all injuries or abnormalities</strong> that were not found during the primary assessment. This is where you slow down and look — literally from head to toe — for every finding that will shape your field impression, treatment, and transport decisions.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The secondary assessment is performed <em>only after</em> life threats are addressed. If your patient deteriorates during the secondary assessment, stop and return to the primary assessment — the ABCs always come first.
            </div>

            <h4>When to Perform a Secondary Assessment</h4>
            <p>Not every patient receives a full head-to-toe exam. The decision depends on the patient's condition and the clinical context:</p>
            <table>
                <thead>
                    <tr><th>Assessment Type</th><th>When Performed</th><th>Patient Examples</th></tr>
                </thead>
                <tbody>
                    <tr><td>Rapid Head-to-Toe (Detailed Physical Exam)</td><td>Unstable trauma patients; patients with significant mechanism of injury; unresponsive medical patients</td><td>MVC with rollover, fall from height, unresponsive diabetic</td></tr>
                    <tr><td>Focused Physical Exam</td><td>Stable medical patients; isolated injury with no significant mechanism; responsive patients with a clear chief complaint</td><td>Isolated ankle injury, chest pain patient, allergic reaction</td></tr>
                    <tr><td>No Secondary Assessment</td><td>Critical patients requiring immediate transport; cardiac arrest with ongoing resuscitation</td><td>Traumatic arrest, ongoing CPR</td></tr>
                </tbody>
            </table>

            <h4>DCAP-BTLS — The Systematic Search Pattern</h4>
            <p>As you assess each body region, you are looking for the same nine findings. Memorize this mnemonic — you will use it on every call requiring a head-to-toe exam:</p>
            <table>
                <thead>
                    <tr><th>Letter</th><th>Finding</th><th>What to Look For</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>D</strong></td><td>Deformities</td><td>Angulation, shortening, rotation of limbs; asymmetry of the skull or pelvis; abnormal joint position</td></tr>
                    <tr><td><strong>C</strong></td><td>Contusions</td><td>Bruising, ecchymosis, black-and-blue discoloration — may indicate underlying injury (e.g., Battle's sign behind the ear suggests basilar skull fracture)</td></tr>
                    <tr><td><strong>A</strong></td><td>Abrasions</td><td>Scraped skin, road rash — assess for embedded debris and bleeding</td></tr>
                    <tr><td><strong>P</strong></td><td>Punctures / Penetrations</td><td>Open wounds, impaled objects, entry and exit wounds (bullet wounds may have a small entrance and larger exit)</td></tr>
                    <tr><td><strong>B</strong></td><td>Burns</td><td>Redness, blistering, charring; note the extent (rule of nines), depth, and source (thermal, chemical, electrical)</td></tr>
                    <tr><td><strong>T</strong></td><td>Tenderness</td><td>Pain on palpation — ask the patient where it hurts; palpate last in that area and watch for guarding or facial reactions</td></tr>
                    <tr><td><strong>L</strong></td><td>Lacerations</td><td>Cuts, slicing injuries, flap lacerations; assess depth, bleeding severity, and involvement of underlying structures</td></tr>
                    <tr><td><strong>S</strong></td><td>Swelling</td><td>Edema, distension, enlargement of a body part — may indicate fracture, hematoma, or inflammation</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#e2f0d9; border-left-color:#28a745;">
                <strong>Clinical Pearl:</strong> Use the same mnemonic for every body region — it creates a consistent search pattern that prevents missed injuries. "Look at the head — D, C, A, P, B, T, L, S. Look at the neck — D, C, A, P, B, T, L, S." Train this repetition.
            </div>

            <h4>Systematic Head-to-Toe Assessment by Region</h4>

            <h5>Head and Scalp</h5>
            <p>Begin at the top of the head. Palpate the scalp with your fingertips, feeling for depressions, step-offs, or areas of tenderness. Look for DCAP-BTLS. Check the face for symmetry — ask the patient to smile (tests cranial nerve VII — facial nerve). Pupils should be <strong>PERRL</strong> (Pupils Equal, Round, and Reactive to Light). Document size in millimeters and reactivity. Assess for raccoon eyes (periorbital ecchymosis — basilar skull fracture), Battle's sign (mastoid ecchymosis — basilar skull fracture), and cerebrospinal fluid (CSF) leaking from the nose (rhinorrhea) or ears (otorrhea) — CSF looks like watery drainage and tests positive for glucose or forms a "halo" or "target" sign on a sheet or bandage.</p>

            <h5>Neck</h5>
            <p>Palpate the cervical spine for midline tenderness or step-offs — maintain spinal motion restriction if mechanism warrants. Assess the trachea for midline position (deviation suggests tension pneumothorax). Palpate for <strong>subcutaneous emphysema</strong> (air trapped under the skin, feels like Rice Krispies) — suggests airway or lung injury. Check for <strong>JVD</strong> (jugular venous distension) — a sign of tension pneumothorax or cardiac tamponade. Inspect the neck for medical alert tags or stoma.</p>

            <h5>Chest</h5>
            <p>Inspect for symmetry of chest wall movement, retractions, and accessory muscle use. Palpate the clavicles, sternum, and ribs. Assess for <strong>paradoxical motion</strong> (flail segment — two or more adjacent ribs broken in two or more places causing a free-floating segment that moves opposite to the rest of the chest). Auscultate breath sounds — compare left vs. right at the midaxillary line, both upper and lower lobes. Listen for absent/decreased breath sounds (pneumothorax, hemothorax), crackles/rales (pulmonary edema, CHF), wheezing (asthma, COPD, allergic reaction), or rhonchi (secretions).</p>

            <h5>Abdomen</h5>
            <p>Divide the abdomen into four quadrants (RUQ, LUQ, RLQ, LLQ) and palpate each quadrant gently but systematically. Assess for <strong>tenderness, guarding, rigidity, or distension</strong>. Pain in the RUQ with referred pain to the right shoulder suggests gallbladder disease or liver injury. Diffuse tenderness with rigidity suggests peritonitis. In trauma, a rigid/distended abdomen suggests internal bleeding. Never palpate deeply if you suspect an aortic aneurysm. Auscultate bowel sounds if time and protocol permit — absent bowel sounds may indicate ileus or peritonitis.</p>

            <h5>Pelvis</h5>
            <p>In trauma patients, gently compress the iliac crests toward midline — pain or crepitus suggests pelvic fracture. <strong>Warning:</strong> Never rock or aggressively compress the pelvis — you can worsen bleeding from a pelvic fracture. If the pelvis is tender or unstable, apply a pelvic binder or sheet. In nontrauma patients, assess for bladder distension, incontinence, or rectal tone (in unresponsive patients).</p>

            <h5>Extremities</h5>
            <p>Assess all four extremities systematically. Look for DCAP-BTLS. Assess <strong>CMS</strong> (Circulation, Motor, Sensation) in each extremity — document distal pulses (radial, dorsalis pedis, posterior tibial), motor function (wiggle fingers/toes, push/pull), and sensation (light touch, sharp/dull discrimination). Palpate for crepitus (grating sensation from bone fragments). Assess for deformity, angulation, or shortening — these indicate fractures or dislocations. Splint before moving if possible. In medical patients, assess for pitting edema in the lower extremities (CHF, DVT), capillary refill (&lt;2 seconds is normal), and skin temperature/color.</p>

            <h5>Posterior Body</h5>
            <p>Log-roll the patient (with adequate personnel — minimum 3-4 rescuers) to assess the back and posterior surfaces. Palpate the entire length of the spine for step-offs, tenderness, or deformity. Inspect the posterior torso, buttocks, and backs of the legs for DCAP-BTLS. <strong>This is a commonly missed area</strong> — especially in penetrating trauma where an exit wound may be posterior. If you cannot log-roll due to suspected spine injury, gently slide your hand beneath the patient to feel for wounds.</p>

            <h4>Focused Physical Exam</h4>
            <p>For stable medical patients and patients with isolated injuries, the focused exam targets the body system or region related to the chief complaint. This is not a shortcut — it is an appropriate narrowing of the assessment based on clinical context:</p>
            <ul>
                <li><strong>Respiratory complaint:</strong> Focus on chest — auscultation, accessory muscle use, JVD, tracheal position, SpO₂, EtCO₂</li>
                <li><strong>Cardiac complaint:</strong> Focus on chest, vital signs, lung sounds (for pulmonary edema), skin signs, JVD, peripheral edema</li>
                <li><strong>Abdominal complaint:</strong> Focus on abdominal quadrants, guarding, rebound tenderness, bowel sounds, rectal exam (if indicated)</li>
                <li><strong>Neurological complaint:</strong> Focus on cranial nerves, motor/sensory exam, GCS, speech, pupil reactivity, facial symmetry</li>
                <li><strong>Isolated injury:</strong> Focus on the injured area and proximal/distal to it — assess CMS above and below the injury</li>
            </ul>

            <h4>Patient Positioning for the Exam</h4>
            <ul>
                <li><strong>Supine:</strong> Standard position for trauma assessment; allows access to airway, chest, abdomen, and extremities</li>
                <li><strong>Semi-Fowler's (30-45°):</strong> Respiratory distress, CHF, COPD — easier breathing</li>
                <li><strong>Fowler's (90°):</strong> Severe respiratory distress — maximizes diaphragmatic excursion</li>
                <li><strong>Trendelenburg:</strong> No longer recommended for shock — may impair respiratory mechanics and increase aspiration risk</li>
                <li><strong>Left lateral recumbent (recovery position):</strong> Unresponsive patient with no suspected spine injury — protects airway</li>
                <li><strong>Position of comfort:</strong> Stable medical patients without respiratory compromise</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The secondary assessment is an ongoing process — you may not complete the full head-to-toe before transport is necessary. In a critical patient with a short transport time, prioritize the most relevant body regions and continue the assessment en route. Document what you were able to assess and why.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What does the mnemonic DCAP-BTLS stand for?",
                answer: "Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling — assessed in every body region during the head-to-toe exam",
                category: "Secondary Assessment"
            },
            {
                question: "What is the difference between a rapid head-to-toe exam and a focused physical exam?",
                answer: "A rapid head-to-toe is for unstable trauma patients or unresponsive medical patients and examines all body regions. A focused exam targets only the system or area related to the chief complaint in stable medical patients or isolated injuries.",
                category: "Secondary Assessment"
            },
            {
                question: "What does PERRL stand for and when is it assessed?",
                answer: "Pupils Equal, Round, and Reactive to Light — assessed during the head exam of the secondary assessment. Document pupil size in millimeters and reactivity.",
                category: "Secondary Assessment"
            },
            {
                question: "What does crepitus indicate when palpating an extremity?",
                answer: "Crepitus (grating sensation) suggests bone fragments moving against each other — indicates a fracture. Splint the extremity before moving the patient.",
                category: "Secondary Assessment"
            },
            {
                question: "What findings on the head suggest a basilar skull fracture?",
                answer: "Raccoon eyes (periorbital ecchymosis), Battle's sign (mastoid ecchymosis), and CSF leakage from the nose (rhinorrhea) or ears (otorrhea). CSF may form a 'halo' or 'target' sign on a sheet.",
                category: "Secondary Assessment"
            },
            {
                question: "What is CMS assessment and what does it evaluate in each extremity?",
                answer: "CMS stands for Circulation (distal pulses), Motor (movement), and Sensation (light touch) — evaluated in all four extremities to assess for neurovascular compromise.",
                category: "Secondary Assessment"
            },
            {
                question: "When should you NOT perform a full secondary assessment?",
                answer: "In critical patients requiring immediate transport (e.g., traumatic arrest, ongoing CPR) — life-saving interventions and transport take priority over the detailed exam.",
                category: "Secondary Assessment"
            },
            {
                question: "What does JVD indicate and where is it assessed?",
                answer: "Jugular Venous Distension — distended neck veins indicating increased central venous pressure. Assessed during the neck exam. Can indicate tension pneumothorax, cardiac tamponade, or right heart failure.",
                category: "Secondary Assessment"
            }
        ],
        quiz: [
            {
                q: "During a head-to-toe assessment of a trauma patient, you palpate a grating sensation over the left forearm. This finding is BEST described as:",
                options: [
                    "Tenderness indicating a muscle strain",
                    "Crepitus suggesting a fracture of the radius or ulna",
                    "Subcutaneous emphysema from a lung injury",
                    "A normal finding in the forearm"
                ],
                correct: 1
            },
            {
                q: "A 45-year-old male was involved in a high-speed MVC. He is now alert and oriented with stable vital signs. His chief complaint is chest pain from hitting the steering wheel. Which assessment approach is MOST appropriate?",
                options: [
                    "No secondary assessment — transport immediately",
                    "Rapid head-to-toe because the mechanism is significant",
                    "Focused chest exam only since the patient is stable",
                    "Focused exam of the chest during a rapid head-to-toe — the significant mechanism warrants a full exam even if the patient appears stable"
                ],
                correct: 3
            },
            {
                q: "You find bruising behind a patient's ear (mastoid process) during your head-to-toe assessment. This finding is called:",
                options: [
                    "Raccoon eyes",
                    "Battle's sign",
                    "Cushing's reflex",
                    "Halo sign"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_2_8_1",
                scenario: "You are assessing a 32-year-old male who was ejected from an ATV at approximately 25 mph. He is on a backboard with cervical collar in place. During your head-to-toe assessment, you note the following: scalp laceration with active bleeding, deformity of the left forearm, abrasions across the chest, tenderness in the left upper quadrant of the abdomen, and a deformed left femur. The patient is alert, airway is patent, breathing is adequate at 20/min with good SpO₂ of 97%, and radial pulses are strong bilaterally. The transport time to the Level II trauma center is 18 minutes.",
                question: "Given the multiple injuries found during your secondary assessment, what is the BEST approach to managing this patient?",
                options: [
                    {t: "Treat the most visible injury (the bleeding scalp laceration) first, then splint the forearm and femur, and transport", f: "Incorrect. You must prioritize by threat to life — the abdominal tenderness suggests possible internal bleeding, which is the highest priority."},
                    {t: "Control scalp bleeding with direct pressure, apply a pelvic binder (due to the mechanism), splint the deformed femur and forearm, establish IV access if available, monitor for deterioration of the abdominal exam, and transport to the trauma center — re-evaluating the abdomen frequently en route", f: "Correct. Abdominal tenderness in a high-mechanism trauma suggests intra-abdominal injury — this is your highest priority after addressing external bleeding. Splint fractures to reduce pain and prevent further injury."}
                ],
                correct: 1,
                explanation: "In multi-system trauma, prioritize threats to life: hemorrhage control first, then monitor for hidden injuries (abdominal tenderness may indicate internal bleeding). Splint fractures for comfort and to prevent secondary injury. The abdominal finding is the most concerning because it cannot be visually assessed and may deteriorate rapidly.",
                kpi: "Multi-system trauma prioritization"
            },
            {
                id: "crit_2_8_2",
                scenario: "You are assessing a 67-year-old female with a chief complaint of shortness of breath that started 3 hours ago. She has a history of congestive heart failure and hypertension. Her vital signs are: BP 158/94, HR 108, RR 26, SpO₂ 89% on room air, and she is sitting upright in the tripod position. During your focused physical exam, you auscultate crackles (rales) in the bilateral lung bases, note 2+ pitting edema in both lower extremities, and observe JVD at 45°. She is alert and able to speak in 3-4 word sentences.",
                question: "What is your focused secondary assessment finding that is MOST consistent with acute CHF exacerbation, and what is your priority intervention?",
                options: [
                    {t: "Wheezing in the upper airways — administer albuterol via nebulizer", f: "Incorrect. Bilateral crackles (rales) in the bases with JVD and pedal edema indicate pulmonary edema from CHF, not reactive airway disease."},
                    {t: "Bibasilar crackles with JVD and pedal edema — apply CPAP, administer oxygen to target SpO₂ ≥94%, consider nitroglycerin per protocol, and transport in a semi-Fowler's or Fowler's position", f: "Correct. These three findings (crackles, JVD, edema) are the classic triad of acute CHF exacerbation with pulmonary edema. CPAP provides positive pressure to push fluid back into circulation and improves oxygenation."}
                ],
                correct: 1,
                explanation: "The combination of bibasilar crackles, JVD, and peripheral edema in a patient with dyspnea and CHF history is classic for acute decompensated heart failure. CPAP is the definitive BLS intervention — it reduces preload and afterload while improving alveolar ventilation.",
                kpi: "Focused medical assessment — CHF recognition"
            },
            {
                id: "crit_2_8_3",
                scenario: "You are performing a secondary assessment on a 22-year-old male who was stabbed in the right upper back. He is lying supine with spinal motion restriction. When you log-roll him to assess the posterior body, you discover a second wound — 3 cm in diameter — on his right posterior-lateral chest at the level of the 6th rib. He has diminished breath sounds on the right side, his trachea is midline, and his vital signs are: BP 110/70, HR 104, RR 22, SpO₂ 93%. There is no active air sucking or bubbling from the wound.",
                question: "What should you do with the newly discovered posterior chest wound?",
                options: [
                    {t: "Leave it open to the air so it can drain — it is a small wound and will seal on its own", f: "Incorrect. An open chest wound communicating with the pleural space can create a tension pneumothorax. It must be covered with an occlusive or non-porous dressing."},
                    {t: "Cover the wound with an occlusive dressing (e.g., petroleum gauze or commercial chest seal), taped on three sides to act as a flutter valve — monitor for tension pneumothorax development (worsening hypoxia, tracheal deviation, JVD, decreasing BP)", f: "Correct. This is an open pneumothorax (sucking chest wound). The occlusive dressing taped on three sides allows air to escape during exhalation but prevents air from entering during inhalation — functioning as a one-way valve."}
                ],
                correct: 1,
                explanation: "Any wound that penetrates the chest wall and may communicate with the pleural space requires an occlusive dressing taped on three sides. This prevents air entry (tension) while allowing trapped air to escape. Monitor closely for signs of tension pneumothorax: worsening hypoxia, tracheal deviation away from the side, JVD, and hypotension.",
                kpi: "Open pneumothorax management"
            }
        ]
    },
    {
        id: "c2s9",
        shortTitle: "2.9 Reassessment & Trending",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Reassessment & Trending</h3>

            <p>Reassessment is the ongoing evaluation of a patient after the initial assessment and treatment. It is <strong>not optional</strong> — it is the process that detects deterioration, confirms improvement, and guides transport and treatment decisions. One assessment is a snapshot; reassessment creates a <strong>trend</strong> — and trends tell you where the patient is headed.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Assessment is a continuous cycle, not a one-time event. The moment you stop reassessing is the moment you will miss a patient crashing. Reassessment is how you know whether your interventions are working.
            </div>

            <h4>Reassessment Frequency</h4>
            <p>The frequency of reassessment is determined by the patient's stability — this is a NREMT core standard:</p>
            <table>
                <thead>
                    <tr><th>Patient Category</th><th>Reassessment Interval</th><th>What It Includes</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Unstable</strong> (any abnormal vital sign, altered LOC, active bleeding, respiratory distress, shock)</td><td><strong>Every 5 minutes</strong></td><td>Primary assessment (ABCs), vital signs, interventions check, pain assessment, mental status</td></tr>
                    <tr><td><strong>Stable</strong> (normal vital signs, intact LOC, no significant mechanism, improving condition)</td><td><strong>Every 15 minutes</strong></td><td>Vital signs, mental status, interventions check, focused reassessment of chief complaint</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#e2f0d9; border-left-color:#28a745;">
                <strong>Clinical Pearl:</strong> If your patient is unstable enough to require 5-minute reassessments, consider whether your transport is urgent enough that you should be moving toward the hospital rather than staying on scene. Reassessment intervals guide both clinical care and scene time decisions.
            </div>

            <h4>The Six Components of Reassessment</h4>
            <p>Every reassessment should address these six elements in order of priority:</p>

            <h5>1. Primary Assessment (ABCs)</h5>
            <p>Re-check the patient's airway, breathing, and circulation. Has anything changed? Is the airway still patent? Is the breathing rate, rhythm, or depth changing? Are the pulses still present and strong? <strong>Return to the primary assessment first — every time.</strong> Deterioration often announces itself through changes in the ABCs before the vital signs change.</p>

            <h5>2. Vital Signs</h5>
            <p>Repeat all vital signs: pulse rate and quality, respiratory rate and quality, blood pressure, SpO₂, and (if available) EtCO₂ and temperature. Compare each value to the previous reading. Is the heart rate trending up (possible compensation for shock) or down (possible improvement or impending decompensation)? Is the SpO₂ stable on the same oxygen delivery device? Trends — not single values — drive decisions.</p>

            <h5>3. Interventions</h5>
            <p>Re-evaluate every intervention you have performed:</p>
            <ul>
                <li><strong>Oxygen:</strong> Is the SpO₂ at target? Does the delivery device need adjustment?</li>
                <li><strong>Hemorrhage control:</strong> Is the dressing still intact? Is bleeding controlled? Is the tourniquet still effective? Note the time of application.</li>
                <li><strong>Splints:</strong> Is the splint still properly positioned? Are distal CMS (Circulation, Motor, Sensation) intact? Has swelling increased under the splint?</li>
                <li><strong>Medications:</strong> Did the patient receive oxygen, aspirin, nitroglycerin, epinephrine, naloxone, or glucose? What was the response? Any side effects?</li>
                <li><strong>CPAP/BVM:</strong> Is the device functioning? Is chest rise adequate? Is the seal maintained?</li>
            </ul>

            <h5>4. Pain Assessment</h5>
            <p>Reassess pain using the same scale used initially (0-10 numeric, Wong-Baker FACES for children, FLACC for non-verbal patients). Is the pain improving, worsening, or unchanged? If the patient received pain medication, when was it given and what was the response? Worsening pain in a trauma patient may signal hidden injury (e.g., expanding abdominal bleed).</p>

            <h5>5. Mental Status</h5>
            <p>Re-assess level of consciousness using <strong>AVPU</strong> (Alert, Verbal, Pain, Unresponsive) or the <strong>GCS</strong> (Glasgow Coma Scale). A declining mental status is one of the earliest and most reliable signs of deterioration — it can indicate hypoxia, hypoperfusion, head injury progression, or medication effect. Any decrease in AVPU or drop in GCS of 2 or more points requires immediate re-evaluation of ABCs.</p>

            <h5>6. Transport Decision</h5>
            <p>Based on your reassessment, re-evaluate your transport plan: Is the patient stable enough to go to the closest hospital, or do they meet trauma/stroke/STEMI center criteria? Is the transport mode appropriate (routine, urgent, emergent, lights-and-sirens)? Has the patient's condition changed such that a different destination is now indicated?</p>

            <h4>Trending — Reading the Story in the Numbers</h4>
            <p>A single set of vital signs tells you the patient's status at one moment. A series of reassessments tells you the <strong>trajectory</strong>. Trending is the clinical skill of comparing serial assessments to determine whether the patient is improving (good), stable (monitor), or deteriorating (intervene or expedite). Here are key trends to recognize:</p>

            <table>
                <thead>
                    <tr><th>Trend Pattern</th><th>Example Values Over Time</th><th>What It Suggests</th></tr>
                </thead>
                <tbody>
                    <tr><td>✅ Improving</td><td>HR 120 → 104 → 92; BP 84/50 → 98/62 → 110/70; mentation improving</td><td>Interventions are working; continue current management</td></tr>
                    <tr><td>📊 Stable</td><td>Vital signs remain within normal range; no significant change over 2-3 reassessments</td><td>Patient is compensating adequately; maintain monitoring</td></tr>
                    <tr><td>⚠️ Deteriorating</td><td>HR 88 → 104 → 124; BP 110/70 → 102/64 → 90/56; SpO₂ dropping; mentation declining</td><td>Hemorrhage, shock, or other decompensation — escalate interventions and transport urgently</td></tr>
                    <tr><td>🔄 Compensating (then crashing)</td><td>Initially tachycardic, vasoconstricted, narrowing pulse pressure; then sudden bradycardia and hypotension</td><td>Patient was compensating in shock and has now exhausted compensatory mechanisms — impending arrest</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> A sudden drop in heart rate in a trauma patient who was tachycardic is a <strong>pre-arrest sign</strong> — not a sign of improvement. The patient's compensatory mechanisms have failed. This is called "catching the crash" and requires immediate intervention and expedited transport.
            </div>

            <h4>Documenting Reassessment Findings</h4>
            <p>Your patient care report (PCR) must document reassessments — including the time of each assessment. The receiving hospital needs to see the trend. Use a SOAP note format or a structured narrative that includes:</p>
            <ul>
                <li><strong>Time-stamped vital signs</strong> — every reassessment with the exact time of measurement</li>
                <li><strong>Changes in mental status</strong> — specific GCS or AVPU scores with times</li>
                <li><strong>Intervention response</strong> — what was done, when, and what changed</li>
                <li><strong>Pain reassessment</strong> — before and after any pain interventions</li>
                <li><strong>Physical exam changes</strong> — new findings or resolution of previous findings</li>
                <li><strong>Onguing assessment limitations</strong> — e.g., "Unable to complete full reassessment due to transport urgency"</li>
            </ul>
            <p>Remember: <em>"If it wasn't documented, it wasn't done."</em> The PCR is the legal record of all assessments, treatments, and reassessments.</p>

            <h4>When to Stop Reassessment and Act</h4>
            <p>Reassessment is not busywork — it is surveillance. However, reassessment should never delay critical action. If your reassessment reveals deterioration:</p>
            <ul>
                <li><strong>Return to primary assessment</strong> — the ABCs have changed, manage the new threat</li>
                <li><strong>Escalate interventions</strong> — increase oxygen, start BVM, reassess hemorrhage control</li>
                <li><strong>Reconsider destination</strong> — the patient may now meet trauma center or specialty center criteria</li>
                <li><strong>Consider ALS intercept or paramedic backup</strong> — if available and appropriate</li>
                <li><strong>Contact medical direction</strong> — especially if protocols do not cover the current situation</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> The three most dangerous words in EMS are "They look fine." Reassessment is the tool that prevents you from being surprised by a crashing patient. When the trend changes, act. Do not wait for the next scheduled reassessment.
            </div>
        </div>`,
        flashcards: [
            {
                question: "How often should you reassess an unstable patient vs. a stable patient?",
                answer: "Unstable patients should be reassessed every 5 minutes. Stable patients should be reassessed every 15 minutes.",
                category: "Reassessment"
            },
            {
                question: "What are the six components of a comprehensive reassessment?",
                answer: "Primary assessment (ABCs), vital signs, interventions check, pain assessment, mental status, and transport decision.",
                category: "Reassessment"
            },
            {
                question: "Why is trending more valuable than a single vital sign measurement?",
                answer: "A single measurement is a snapshot; trending shows the trajectory — whether the patient is improving, stable, or deteriorating. Trends drive clinical decisions.",
                category: "Reassessment"
            },
            {
                question: "What does a sudden drop in heart rate in a tachycardic trauma patient indicate?",
                answer: "Pre-arrest — the patient has exhausted their compensatory mechanisms. This is not improvement; it is impending decompensation requiring immediate intervention.",
                category: "Reassessment"
            },
            {
                question: "What is the first thing you should check when you begin a reassessment?",
                answer: "The primary assessment (ABCs) — always return to airway, breathing, and circulation first. Deterioration often shows up here before vital signs change.",
                category: "Reassessment"
            },
            {
                question: "What must be documented for each reassessment on the PCR?",
                answer: "Time-stamped vital signs, mental status (GCS/AVPU), intervention response, pain reassessment, physical exam changes, and any new findings or concerns.",
                category: "Reassessment"
            },
            {
                question: "What does a narrowing pulse pressure indicate in a trauma patient?",
                answer: "Compensated shock — the body is vasoconstricting to maintain blood pressure. The pulse pressure narrows as diastolic pressure rises. This precedes hypotension.",
                category: "Reassessment"
            },
            {
                question: "What should you do if your reassessment reveals the patient is deteriorating?",
                answer: "Return to primary assessment, escalate interventions, reconsider destination (trauma center?), consider ALS intercept, and contact medical direction as needed.",
                category: "Reassessment"
            }
        ],
        quiz: [
            {
                q: "A 55-year-old male with chest pain has stable vital signs and is pain-free after nitroglycerin. His initial SpO₂ was 96% on room air and is now 97%. How often should he be reassessed?",
                options: [
                    "Every 5 minutes because chest pain is always unstable",
                    "Every 15 minutes because he meets the criteria for a stable patient",
                    "Only at the hospital — reassessment is not needed en route",
                    "Continuous monitoring only — no scheduled reassessments needed"
                ],
                correct: 1
            },
            {
                q: "A trauma patient had a heart rate of 124 on initial assessment. On your 5-minute reassessment, the heart rate has dropped to 88. The blood pressure is now 82/50. What does this trend indicate?",
                options: [
                    "The patient is improving — the heart rate is normalizing",
                    "The patient is stable — vital signs are within normal range",
                    "The patient is in pre-arrest — compensatory mechanisms are failing and immediate intervention is needed",
                    "The patient is now stable because both HR and BP decreased"
                ],
                correct: 2
            }
        ],
        critical: [
            {
                id: "crit_2_9_1",
                scenario: "You are transporting a 38-year-old female with suspected gastrointestinal bleeding. She passed dark, tarry stools for two days and vomited coffee-ground emesis this morning. Initial vital signs were: BP 104/68, HR 108, RR 18, SpO₂ 98%. She was alert and oriented. After initiating a large-bore IV and oxygen at 2 L/min via nasal cannula, you begin transport. Fifteen minutes into transport, you perform your reassessment. The patient is now lethargic — she opens her eyes only when you call her name loudly. Her BP is 84/52, HR is 124 and thready, and her skin is pale, cool, and diaphoretic.",
                question: "Based on your reassessment findings, what is the BEST next action?",
                options: [
                    {t: "Continue routine transport — the patient is alert enough to respond to voice and the vital signs are acceptable for GI bleed", f: "Incorrect. The patient has deteriorated significantly — declining mental status and worsening vital signs indicate hemorrhagic shock progression."},
                    {t: "Re-check primary assessment (airway patency, breathing adequacy), increase oxygen delivery (non-rebreather at 15 L/min), increase IV fluid rate per protocol, notify the receiving hospital of the change, and request ALS intercept if available — consider activating lights-and-sirens transport", f: "Correct. The trend is clearly deteriorating: dropping BP, rising HR, declining mentation, and signs of hypoperfusion (cool, pale, diaphoretic skin). This is decompensated hemorrhagic shock requiring immediate escalation."}
                ],
                correct: 1,
                explanation: "This patient has progressed from compensated to decompensated hemorrhagic shock. The declining mental status is the most concerning sign — it indicates reduced cerebral perfusion. Increase oxygen, IV fluids, and transport urgency. Notify the hospital so they can prepare for massive transfusion protocol.",
                kpi: "Recognition of decompensated shock on reassessment"
            },
            {
                id: "crit_2_9_2",
                scenario: "You are treating a 66-year-old male with acute respiratory distress from COPD exacerbation. Initial vital signs: BP 148/92, HR 102, RR 28, SpO₂ 86% on room air. You apply a non-rebreather mask at 15 L/min and position him in Fowler's. After 10 minutes, your reassessment shows: BP 136/84, HR 96, RR 24, SpO₂ 93%. He is still working to breathe but says he feels better. He remains alert and can speak in short sentences. You are 10 minutes from the hospital.",
                question: "What does this reassessment trend indicate, and what is the appropriate transport decision?",
                options: [
                    {t: "The patient is deteriorating — his oxygen saturation is still below normal — request ALS for CPAP", f: "Incorrect. The trend shows improvement: HR decreased, RR decreased, SpO₂ improved from 86% to 93%, and mental status is intact."},
                    {t: "The trend is improving — vital signs are moving toward normal, SpO₂ is on an upward trajectory, and mentation is stable — continue current management, reassess in 5-15 minutes, transport non-emergent", f: "Correct. SpO₂ climbing from 86% → 93% on the same oxygen device, HR and RR decreasing, and stable mentation all indicate the patient is responding to treatment."}
                ],
                correct: 1,
                explanation: "The trend shows improvement: heart rate dropping (less work), respiratory rate slowing, and SpO₂ rising. Continue current treatment and reassess. If SpO₂ plateaus below 94%, consider CPAP per protocol. The patient is trending toward stability.",
                kpi: "Trend interpretation — improvement"
            }
        ]
    },
    {
        id: "c2s10",
        shortTitle: "2.10 Clinical Decision Making",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Clinical Decision Making</h3>

            <p>Clinical decision making is the cognitive process by which EMTs gather information, interpret findings, form a field impression, and take appropriate action. It is the bridge between knowledge (what you know) and action (what you do). In the field, you rarely have complete information — you make decisions with the data available, under time pressure, and often in chaotic environments. Developing strong clinical reasoning skills is what separates a proficient EMT from one who merely follows checklists.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Protocols are your foundation — they tell you what to do for specific presentations. Clinical decision making tells you <em>which protocol to apply</em>, <em>when to deviate</em>, and <em>when to ask for help</em>. Protocols cannot cover every situation; your clinical judgment fills the gaps.
            </div>

            <h4>The Clinical Reasoning Cycle</h4>
            <p>Clinical decision making follows a continuous cycle in the field:</p>
            <ol>
                <li><strong>Gather data</strong> — Scene size-up, dispatch information, primary assessment, vital signs, patient history (SAMPLE/OPQRST), secondary assessment findings</li>
                <li><strong>Process the data</strong> — Identify what is normal vs. abnormal. Cluster findings into patterns. Compare against known presentations.</li>
                <li><strong>Form a field impression</strong> — A working hypothesis about what is wrong with the patient. This is not a definitive diagnosis — it is a clinical impression that drives treatment and transport decisions.</li>
                <li><strong>Take action</strong> — Apply the appropriate protocol, initiate treatment, decide on destination and transport priority</li>
                <li><strong>Reassess</strong> — Evaluate the patient's response. Did the intervention work? Has the condition changed? Does the field impression need revision?</li>
                <li><strong>Revise</strong> — Update your impression and treatment plan based on reassessment findings</li>
            </ol>

            <h4>Forming a Field Impression</h4>
            <p>EMTs do not diagnose — EMTs form <strong>field impressions</strong> that guide treatment and transport. The field impression is a differential-based working hypothesis. It answers the question: "What is the most likely problem causing this patient's presentation, and what is the safest thing to do right now?" Your field impression should be supported by your assessment findings and documented clearly.</p>

            <p><strong>Using Differential Diagnosis as an EMT:</strong> While paramedics and physicians use differential diagnosis formally, EMTs benefit from the same thinking process. When you encounter a patient, generate a short mental list of possible causes for their presentation, then use your assessment to rule in or rule out each possibility:</p>

            <table>
                <thead>
                    <tr><th>Presentation</th><th>Possible Causes (Differential)</th><th>Key Differentiating Findings</th></tr>
                </thead>
                <tbody>
                    <tr><td>Altered mental status</td><td>Hypoglycemia, hypoxia, overdose, stroke, head injury, seizure, infection (sepsis), shock</td><td>Blood glucose (fingerstick), SpO₂, pupil size/reaction, GCS, BP, temperature, lateralizing signs (unilateral weakness)</td></tr>
                    <tr><td>Shortness of breath</td><td>CHF, COPD, asthma, pneumonia, pneumothorax, pulmonary embolism, anaphylaxis, anxiety</td><td>Onset (sudden vs. gradual), lung sounds (crackles vs. wheezing vs. clear), JVD, edema, fever, cough, sputum, recent surgery/travel (PE)</td></tr>
                    <tr><td>Chest pain</td><td>ACS (heart attack), angina, pericarditis, pulmonary embolism, pneumothorax, costochondritis, GERD, musculoskeletal</td><td>Quality (crushing vs. sharp vs. tearing), radiation, associated symptoms (diaphoresis, nausea), lung sounds, ECG findings, response to nitroglycerin</td></tr>
                    <tr><td>Abdominal pain</td><td>Appendicitis, cholecystitis, pancreatitis, bowel obstruction, AAA, ectopic pregnancy, gastritis, kidney stone, diverticulitis</td><td>Location and radiation, quality, guarding, rigidity, fever, vomiting, last menstrual period (females of childbearing age), age</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#e2f0d9; border-left-color:#28a745;">
                <strong>Clinical Pearl:</strong> Always ask yourself: "What is the worst-case scenario for this patient?" Then manage for that while working up to better possibilities. For chest pain, manage as ACS until proven otherwise. For abdominal pain in a woman of childbearing age, consider ectopic pregnancy. For altered mental status, check blood glucose and oxygen first.
            </div>

            <h4>When to Deviate from Protocol</h4>
            <p>Protocols are guidelines — they cannot anticipate every clinical scenario. There are situations where strict adherence to protocol may be inappropriate or even harmful. However, deviating from protocol carries significant legal and clinical risk. Before deviating, consider these principles:</p>

            <ul>
                <li><strong>Know the protocol before you break it</strong> — You cannot intelligently deviate from a protocol you do not understand. Know what the protocol says and why it says it.</li>
                <li><strong>Patient stability comes first</strong> — If following the protocol would delay a life-saving intervention, act in the patient's best interest and document your reasoning.</li>
                <li><strong>Contact medical direction</strong> — Whenever possible, call online medical control (OLMC) for authorization before deviating. Document the physician's name and the order.</li>
                <li><strong>Document your reasoning</strong> — If you deviate, your PCR must clearly explain: what the protocol said, why you believed deviation was necessary, what you did instead, and the outcome.</li>
                <li><strong>Never deviate out of convenience or laziness</strong> — Deviations must be in the patient's best interest, not your own convenience.</li>
                <li><strong>Know your scope</strong> — Never perform a skill or administer a medication outside your scope of practice, even if you believe it would help. That is practicing medicine without a license.</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Legal Warning:</strong> Unauthorized deviation from protocol is a leading cause of EMT discipline, license revocation, and civil liability. If you deviate without medical direction authorization and the patient is harmed, you are legally exposed. Always contact OLMC when possible.
            </div>

            <h4>Documenting Your Clinical Reasoning</h4>
            <p>Your PCR must reflect <strong>why</strong> you made the decisions you did. A PCR that only documents actions ("Applied oxygen, transported to ER") tells the receiving provider and quality reviewers nothing about your thought process. A well-documented PCR includes:</p>
            <ul>
                <li><strong>Field impression</strong> — "Patient presents with signs and symptoms consistent with acute CHF exacerbation: bibasilar crackles, JVD, pedal edema, sudden onset dyspnea, history of CHF."</li>
                <li><strong>Reasoning for interventions</strong> — "CPAP initiated due to respiratory distress with SpO₂ 88% and accessory muscle use."</li>
                <li><strong>Reasoning for destination choice</strong> — "Transport to St. Mary's Cardiac Center due to chest pain with ST-elevation on 12-lead."</li>
                <li><strong>Protocol deviations</strong> — "Patient required CPAP but protocol requires medical direction authorization for initial use. Contacted OLMC (Dr. Chen, order #4821) who authorized CPAP application."</li>
                <li><strong>Patient response</strong> — "After 10 minutes of CPAP, SpO₂ improved from 88% to 95%, RR decreased from 32 to 24, and patient reported improved breathing."</li>
            </ul>

            <h4>Error Reduction Strategies — Cognitive Biases in EMS</h4>
            <p>Human factors and cognitive biases are the most common cause of medical errors — not lack of knowledge. Being aware of these biases helps you recognize when your thinking might be flawed:</p>

            <table>
                <thead>
                    <tr><th>Cognitive Bias</th><th>What It Is</th><th>How to Counter It</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Anchoring</strong></td><td>Locking onto the first piece of information (e.g., dispatch says "flu") and ignoring conflicting evidence</td><td>Form a differential, not a single diagnosis. Revisit your impression after the full assessment.</td></tr>
                    <tr><td><strong>Confirmation bias</strong></td><td>Looking only for evidence that supports your initial impression, ignoring data that contradicts it</td><td>Actively search for "disconfirming" evidence. Ask: "What would prove me wrong?"</td></tr>
                    <tr><td><strong>Availability bias</strong></td><td>Giving more weight to conditions you recently encountered or that come to mind easily</td><td>Rely on objective data and the systematic assessment process, not your most recent call.</td></tr>
                    <tr><td><strong>Premature closure</strong></td><td>Stopping the assessment once you think you have the answer</td><td>Complete the full assessment before making a final field impression. Do not stop early.</td></tr>
                    <tr><td><strong>Diagnostic momentum</strong></td><td>Once a "label" is given (by dispatch, bystander, or first responder), it sticks regardless of evidence</td><td>Form your own independent impression. Verify information from others through your own assessment.</td></tr>
                </tbody>
            </table>

            <p><strong>Systematic error reduction strategies include:</strong></p>
            <ul>
                <li><strong>Use checklists</strong> — Physical checklists or mental checklists for high-stakes procedures and assessment steps</li>
                <li><strong>Stop and think</strong> — Before acting, pause for 3-5 seconds: "Does everything line up? Is there anything I am missing?"</li>
                <li><strong>Read back and repeat</strong> — Read back medication orders and doses. Confirm aloud with your partner.</li>
                <li><strong>Use the "Two-Challenge Rule"</strong> — If you are unsure about an action, voice your concern twice in a clear, assertive way. If it is still not resolved, escalate to a supervisor or medical direction.</li>
                <li><strong>Debrief after critical calls</strong> — Discuss what went well and what could have been done differently. This is how clinical judgment improves over time.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Good clinical decisions are made with the information available at the time. Hindsight bias — judging your decision based on what was discovered later — is the enemy of learning. Judge decisions by the information available when they were made, not by the outcome.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What is a field impression and how does it differ from a medical diagnosis?",
                answer: "A field impression is an EMT's working hypothesis about the patient's condition that guides treatment and transport decisions. It is not a definitive diagnosis — it is a differential-based clinical impression used to select the appropriate protocol.",
                category: "Clinical Decision Making"
            },
            {
                question: "What are the six steps of the clinical reasoning cycle?",
                answer: "Gather data → Process the data → Form a field impression → Take action (apply protocol) → Reassess → Revise the impression/plan as needed",
                category: "Clinical Decision Making"
            },
            {
                question: "What should you document if you deviate from protocol?",
                answer: "What the protocol said, why deviation was necessary, what you did instead, who authorized it (OLMC physician name and order # if contacted), and the patient outcome.",
                category: "Clinical Decision Making"
            },
            {
                question: "What is anchoring bias and how can you counter it?",
                answer: "Anchoring is locking onto the first piece of information and ignoring conflicting evidence. Counter it by forming a differential diagnosis list and actively seeking evidence that might disprove your initial impression.",
                category: "Clinical Decision Making"
            },
            {
                question: "What is the 'worst-case scenario' thinking strategy?",
                answer: "Ask yourself: 'What is the worst thing this could be?' Then manage for that condition while working up to better possibilities. For chest pain, manage as ACS until proven otherwise.",
                category: "Clinical Decision Making"
            },
            {
                question: "What is the two-challenge rule?",
                answer: "If you have a safety concern, voice it clearly twice. If the concern is not resolved after two attempts, escalate to a supervisor or medical direction.",
                category: "Clinical Decision Making"
            },
            {
                question: "What is premature closure and why is it dangerous?",
                answer: "Premature closure is stopping the assessment once you think you have the answer. It is dangerous because you may miss critical findings that contradict your initial impression. Complete the full assessment before finalizing your field impression.",
                category: "Clinical Decision Making"
            },
            {
                question: "What is the difference between a protocol and a field impression?",
                answer: "A protocol is a system-approved treatment guideline for specific presentations. A field impression is your clinical judgment about which protocol applies to this specific patient, based on your assessment and reasoning.",
                category: "Clinical Decision Making"
            }
        ],
        quiz: [
            {
                q: "You arrive at a nursing home for a 78-year-old with 'altered mental status.' The nurse says, 'She probably has another UTI — she gets confused with UTIs.' Your assessment reveals unequal pupils and left-sided weakness. What cognitive error are you at risk of if you accept the nurse's assumption without completing your assessment?",
                options: [
                    "Hindsight bias",
                    "Diagnostic momentum",
                    "Confirmation bias",
                    "Availability bias"
                ],
                correct: 1
            },
            {
                q: "[HARD] An EMT forms a field impression of CHF in a dyspneic patient based on crackles and pedal edema. However, the patient also has unilateral leg swelling and recently returned from a long flight. The EMT fails to consider pulmonary embolism. Which cognitive bias is MOST demonstrated here?",
                options: [
                    "Anchoring — the EMT locked onto the initial CHF impression and failed to consider alternative causes despite conflicting evidence",
                    "Availability bias — CHF is more common than PE",
                    "Confirmation bias — the EMT found crackles which confirmed CHF",
                    "Diagnostic momentum — the family said it was CHF"
                ],
                correct: 0
            },
            {
                q: "[HARD] When documenting a protocol deviation on your PCR, which element is LEGALLY most important to include?",
                options: [
                    "A personal note explaining why you dislike the protocol",
                    "Documentation that you attempted to contact medical direction and the specific orders received (or the reason you could not)",
                    "A statement that you are confident in your decision regardless of outcome",
                    "The name of the paramedic who trained you"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_2_10_1",
                scenario: "You are dispatched to a 52-year-old male with 'difficulty breathing.' Dispatch notes the call was placed by a neighbor who heard the patient gasping through the wall. On arrival, you find the patient sitting on the edge of his bed, tripod position, using accessory muscles, and unable to speak more than one word at a time. He nods that he does not have a history of lung problems. Vital signs: BP 168/100, HR 112, RR 36, SpO₂ 82% on room air. Lung sounds are clear bilaterally — no wheezing, no crackles. No JVD. No pedal edema. No fever. ECG shows sinus tachycardia. When you ask if he has had any recent surgeries or long trips, his wife mentions he had knee replacement surgery 10 days ago and has been mostly sedentary since.",
                question: "What is your field impression based on the available data, and what drives your treatment and transport decisions?",
                options: [
                    {t: "Anxiety attack — the clear lung sounds and hypertension suggest hyperventilation syndrome — coach the patient to breathe slowly", f: "Incorrect. Severe hypoxia (SpO₂ 82%) and tachypnea are not consistent with anxiety. Clear lung sounds with respiratory distress after recent surgery should raise concern for PE."},
                    {t: "Possible pulmonary embolism — recent surgery + prolonged immobility + sudden onset dyspnea + clear lung sounds + hypoxia + tachycardia — this is a high-risk presentation for PE. Apply high-flow oxygen, position for comfort, expedite transport to a facility capable of managing PE (CT angiogram capability), and monitor for deterioration", f: "Correct. The absence of crackles, wheezing, or fever rules out CHF, asthma, and pneumonia. The recent surgery and immobility create a classic DVT/PE risk profile. PE can present with clear lung sounds and severe hypoxia. This patient requires rapid transport and advanced diagnostic capability."}
                ],
                correct: 1,
                explanation: "Pulmonary embolism should be high on your differential when a patient has: (1) sudden-onset dyspnea without lung pathology on auscultation, (2) risk factors (recent surgery, immobility), (3) hypoxemia out of proportion to lung findings, and (4) tachycardia. Do not mistake clear lung sounds for 'no problem' — PE is a silent killer that presents with clear lungs.",
                kpi: "Field impression — pulmonary embolism recognition"
            },
            {
                id: "crit_2_10_2",
                scenario: "You are called to a construction site for a 29-year-old male who fell approximately 12 feet from scaffolding, landing on his feet and then collapsing onto his back. He is alert, oriented, and complaining of severe low back pain and bilateral heel pain. Vital signs: BP 118/72, HR 96, RR 18, SpO₂ 99%. His primary assessment shows a patent airway, adequate breathing, and strong radial pulses. During the secondary assessment, you palpate tenderness over the lumbar spine and bilateral calcaneal (heel) deformities. There is no other trauma. The nearest Level I trauma center is 35 minutes away; the nearest community hospital is 12 minutes away. The on-scene foreman asks why you cannot just take him to the closer hospital since he is 'talking and stable.'",
                question: "How do you explain your destination decision, and what is the appropriate transport plan?",
                options: [
                    {t: "Agree with the foreman — the patient is stable and can go to the closest hospital for X-rays", f: "Incorrect. The mechanism (12-foot fall) and findings (lumbar spine tenderness, bilateral calcaneal fractures) indicate a significant axial loading injury with high risk for spinal fracture and possible internal injuries."},
                    {t: "This patient has a significant mechanism (fall >10 feet) with potential spinal injury and bilateral calcaneal fractures — a classic axial loading pattern that often involves lumbar spine burst fractures. While he appears stable now, spinal fractures and retroperitoneal bleeding can deteriorate. Transport to the Level I trauma center for surgical evaluation and specialty orthopaedic/spine care", f: "Correct. Falls >10 feet meet trauma triage criteria. Bilateral calcaneal fractures from axial loading are associated with lumbar spine burst fractures in up to 10-15% of cases. The patient may appear stable but has high-risk mechanism and injury patterns requiring a trauma center."}
                ],
                correct: 1,
                explanation: "This patient meets CDC field triage criteria for transport to a trauma center: fall >10 feet (Step 2 — mechanism of injury). The calcaneal fractures suggest axial loading that frequently causes lumbar spine burst fractures. The 'stable' appearance can be misleading — retroperitoneal bleeding from spinal fractures can cause delayed decompensation.",
                kpi: "Trauma destination decision making"
            },
            {
                id: "crit_2_10_3",
                scenario: "You are treating a 74-year-old female with chest pain and a history of coronary artery disease. Your protocol for chest pain includes: oxygen to maintain SpO₂ ≥94%, aspirin 324 mg (4 x 81mg chewable), nitroglycerin (if BP >100 systolic and HR >50 and <100), and transport. The patient's vital signs are: BP 98/66, HR 92, RR 18, SpO₂ 94% on room air. She describes a 'tight, squeezing' sensation in the center of her chest radiating to her left arm, which started 45 minutes ago. She has no allergies. She already took one of her husband's nitroglycerin tablets 20 minutes ago with minimal relief. She is alert and anxious. Her BP is below the protocol threshold for NTG administration (100 systolic).",
                question: "Given the BP of 98/66, which is below the protocol threshold for NTG administration, what is the BEST course of action?",
                options: [
                    {t: "Administer NTG anyway because her chest pain is severe — the BP is close enough to 100 and she already took her own NTG without crashing", f: "Incorrect. Protocol thresholds exist to protect the patient — NTG can cause severe hypotension, especially in right ventricular infarction or inferior wall MI where preload is critical. Document the reason for withholding NTG."},
                    {t: "Hold NTG per protocol (BP below threshold), administer oxygen (even though SpO₂ is 94%, the protocol for chest pain warrants supplemental oxygen), administer aspirin 324 mg chewable, contact medical direction for guidance on NTG given the borderline BP, transport with cardiac monitoring, and reassess BP frequently — a 12-lead ECG should be obtained at the hospital", f: "Correct. Do not administer NTG below the protocol BP threshold without medical direction authorization. Aspirin and oxygen are still indicated. Contact OLMC — they may authorize a lower NTG dose or an IV fluid bolus first to raise BP. Document the reasoning clearly."}
                ],
                correct: 1,
                explanation: "Protocols have parameters for a reason — NTG given to a patient with borderline hypotension can cause severe, irreversible hypotension, particularly in inferior or right ventricular MI where the heart depends on preload. Administer aspirin and oxygen, contact medical direction for guidance, and transport. Document that NTG was held per protocol due to BP below threshold.",
                kpi: "Protocol adherence decision making — chest pain"
            }
        ]
    },
    {
        id: "c2s11",
        shortTitle: "2.11 Field Triage (START / SALT)",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Field Triage — START & SALT</h3>

            <p>Triage is the process of sorting patients based on the severity of their condition to determine the priority of treatment and transport. In a Mass Casualty Incident (MCI), the number of patients overwhelms the available resources. The goal of triage is to <strong>do the greatest good for the greatest number of patients</strong> — a fundamental shift from everyday EMS, where you focus all resources on a single patient. Two triage systems are widely taught and used in the United States: <strong>START</strong> (Simple Triage and Rapid Treatment) for adults and <strong>JumpSTART</strong> for pediatric patients, with <strong>SALT</strong> (Sort, Assess, Lifesaving Interventions, Treatment/Transport) as an alternative framework.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> In everyday EMS, your goal is "everything for every patient." In an MCI, your goal is "the most good for the most patients." This means a patient who might survive with immediate care in a single-patient scenario may be triaged as delayed (Yellow) in an MCI because resources are needed for more salvageable patients.
            </div>

            <h4>The START Triage System</h4>
            <p>START is designed for rapid assessment — it takes approximately 30-60 seconds per patient. It uses the <strong>RPM</strong> mnemonic: <strong>R</strong>espirations, <strong>P</strong>erfusion, <strong>M</strong>ental status. Assessment is done in this exact order:</p>

            <table>
                <thead>
                    <tr><th>Step</th><th>Assessment</th><th>Finding</th><th>Triage Category</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>R — Respirations</strong></td><td>Count respirations; check for breathing effort</td><td>Absent — Open airway. Still not breathing?<br>Present but &gt;30/min<br>Present, &lt;30/min</td><td>Black (if still apneic after airway repositioning)<br>Red (Immediate)<br>Proceed to Perfusion</td></tr>
                    <tr><td><strong>P — Perfusion</strong></td><td>Check for radial pulse OR capillary refill</td><td>No radial pulse OR capillary refill &gt;2 seconds<br>Radial pulse present AND capillary refill ≤2 seconds</td><td>Red (Immediate)<br>Proceed to Mental Status</td></tr>
                    <tr><td><strong>M — Mental Status</strong></td><td>Can the patient follow simple commands? ("Squeeze my hand" or "Open your eyes")</td><td>Cannot follow commands<br>Can follow commands</td><td>Red (Immediate)<br>Yellow (Delayed) / Green (Minor)</td></tr>
                </tbody>
            </table>

            <h4>Triage Categories — The Four Colors</h4>
            <table>
                <thead>
                    <tr><th>Category</th><th>Color</th><th>Meaning</th><th>Examples</th><th>Treatment Priority</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Immediate</strong></td><td style="color:#dc3545;font-weight:bold;">RED</td><td>Life-threatening injury requiring immediate intervention; survival is likely with rapid treatment</td><td>Airway obstruction, tension pneumothorax, uncontrolled hemorrhage, RR &gt;30, no radial pulse, altered mental status</td><td>Highest — treat and transport first</td></tr>
                    <tr><td><strong>Delayed</strong></td><td style="color:#ffc107;font-weight:bold;">YELLOW</td><td>Significant injury but stable for a short delay; can wait 30-60 minutes for care</td><td>Fractures without neurovascular compromise, large lacerations with controlled bleeding, burns without airway compromise</td><td>Second — treat after all Red patients</td></tr>
                    <tr><td><strong>Minor / Minimal</strong></td><td style="color:#28a745;font-weight:bold;">GREEN</td><td>"Walking wounded" — ambulatory patients with minor injuries who can wait or assist</td><td>Minor cuts, bruises, sprains, superficial abrasions, psychological distress with no physical injury</td><td>Lowest — may be asked to assist with light tasks or walk to a collection point</td></tr>
                    <tr><td><strong>Deceased / Expectant</strong></td><td style="color:#000;font-weight:bold;">BLACK</td><td>Dead or injuries so severe that survival is unlikely even with maximal treatment</td><td>Apneic after airway opening, decapitation, massive evisceration, obvious signs of death</td><td>No treatment — resources are diverted to salvageable patients</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Concept:</strong> "Black" (expectant) does not mean the patient is dead — it means they are so critically injured that survival is unlikely with available resources. In a different setting with more resources, they might have been Red. This is the hardest triage decision for new providers. Follow the algorithm, not your emotions.
            </div>

            <h4>The START Algorithm — Step by Step</h4>
            <ol>
                <li><strong>Voice command:</strong> "Everyone who can walk, move to the sound of my voice." Ambulatory patients are triaged <strong>GREEN (Minor)</strong>. Tag them and direct them to a collection area.</li>
                <li><strong>First non-ambulatory patient:</strong> Begin RPM assessment.</li>
                <li><strong>R — Respirations:</strong>
                    <ul>
                        <li>Not breathing: Open airway (jaw-thrust). If still not breathing → <strong>BLACK</strong>.</li>
                        <li>Breathing &gt;30/min → <strong>RED</strong>.</li>
                        <li>Breathing &lt;30/min → Check perfusion.</li>
                    </ul>
                </li>
                <li><strong>P — Perfusion:</strong>
                    <ul>
                        <li>No radial pulse OR capillary refill &gt;2 seconds → <strong>RED</strong>.</li>
                        <li>Radial pulse present AND capillary refill ≤2 seconds → Check mental status.</li>
                    </ul>
                </li>
                <li><strong>M — Mental Status:</strong>
                    <ul>
                        <li>Cannot follow simple commands → <strong>RED</strong>.</li>
                        <li>Can follow simple commands → <strong>YELLOW (Delayed)</strong>.</li>
                    </ul>
                </li>
                <li><strong>Tag the patient</strong> with the appropriate color triage tag. Move to the next patient.</li>
            </ol>

            <h4>Pediatric Triage — JumpSTART</h4>
            <p>Children are not small adults. Their physiology differs in important ways: they have higher metabolic rates, faster respiratory rates, and different compensatory mechanisms. The <strong>JumpSTART</strong> system modifies START for children ages 1-8 years (or up to puberty/pediatric size):</p>

            <table>
                <thead>
                    <tr><th>Step</th><th>START (Adult)</th><th>JumpSTART (Pediatric 1-8 yrs)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Ambulatory</td><td>Green (Minor)</td><td>Green (Minor)</td></tr>
                    <tr><td>Respirations — Absent</td><td>Black (if apneic after airway opening)</td><td><strong>Open airway, check pulse.</strong> If pulseless → Black. If pulse present, give 5 rescue breaths. If breathing starts → Red. If still apneic → Black.</td></tr>
                    <tr><td>Respirations — Rate</td><td>Red if &gt;30/min</td><td>Red if &lt;15/min OR &gt;45/min (modified rate thresholds for pediatric physiology)</td></tr>
                    <tr><td>Perfusion</td><td>Capillary refill &gt;2 sec = Red</td><td>No palpable peripheral pulse = Red (same, but use palmar pulse for infants)</td></tr>
                    <tr><td>Mental Status</td><td>AVPU — Cannot follow commands = Red</td><td>AVPU — "P" (responds to Pain only) or "U" (unresponsive) = Red. Use age-appropriate commands.</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#e2f0d9; border-left-color:#28a745;">
                <strong>Clinical Pearl:</strong> The most important difference in JumpSTART is the <strong>5 rescue breaths</strong> for an apneic child with a pulse. In START, apneic adults are immediately Black. In JumpSTART, give 5 rescue breaths — if the child starts breathing, they are Red (not Black). This reflects the fact that children often arrest from respiratory causes (reversible) rather than cardiac causes.
            </div>

            <h4>SALT Triage Overview</h4>
            <p>SALT (<strong>S</strong>ort, <strong>A</strong>ssess, <strong>L</strong>ifesaving <strong>I</strong>nterventions, <strong>T</strong>reatment/<strong>T</strong>ransport) is an alternative triage system endorsed by the American College of Emergency Physicians (ACEP), the National Association of EMS Physicians (NAEMSP), and the CDC as a national standard for mass casualty triage. It is designed to work across all age groups and MCI types.</p>

            <p><strong>S — Sort:</strong> Global sorting by ability to follow commands and purposeful movement:</p>
            <ul>
                <li>Patients who can walk → <strong>Green (Minor)</strong></li>
                <li>Patients who can wave or follow commands but cannot walk → Further assessment</li>
                <li>Patients who cannot follow commands or are not moving → Further assessment</li>
            </ul>

            <p><strong>A — Assess:</strong> Individual assessment using the RPM-like approach. Assess each patient systematically. SALT uses a more nuanced approach than START — it identifies patients who need <strong>immediate life-saving interventions</strong> (LSIs) that can be performed quickly at the point of triage.</p>

            <p><strong>L — Lifesaving Interventions:</strong> Before assigning a triage category, perform any of these five rapid LSIs if indicated:</p>
            <ul>
                <li>Open the airway (manual maneuver, suction, OPA/NPA)</li>
                <li>Control major hemorrhage (tourniquet, direct pressure, hemostatic dressing)</li>
                <li>Decompress tension pneumothorax (needle decompression — paramedic only)</li>
                <li>Administer antidote (e.g., nerve agent exposure)</li>
                <li>Position the patient (recovery position for unresponsive)</li>
            </ul>

            <p><strong>T — Treatment/Transport:</strong> Assign category (Red/Yellow/Green/Black) based on the assessment after life-saving interventions are performed. Patients who need LSIs and survive are typically Red. Patients who need no LSIs and follow commands are Green or Yellow.</p>

            <table>
                <thead>
                    <tr><th>SALT Category</th><th>Description</th><th>Equivalent START Color</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Immediate</strong></td><td>Life-threatening condition requiring LSIs; likely to survive with rapid intervention</td><td>Red</td></tr>
                    <tr><td><strong>Delayed</strong></td><td>Significant injury but can wait for care without immediate threat to life or limb</td><td>Yellow</td></tr>
                    <tr><td><strong>Minimal</strong></td><td>Minor injuries; ambulatory; can self-evacuate or assist</td><td>Green</td></tr>
                    <tr><td><strong>Dead / Expectant</strong></td><td>Obviously dead or injuries incompatible with survival despite LSIs</td><td>Black</td></tr>
                </tbody>
            </table>

            <h4>Triage Tags</h4>
            <p>Triage tags are physical tags attached to patients during MCI to communicate their triage category at a glance. Common systems include the <strong>METTAG</strong> (four-color fold-over tags), <strong>SMART Tag</strong>, and <strong>START Tag</strong>. Key information typically recorded on a triage tag includes:</p>
            <ul>
                <li>Patient identification number (often a sequential number or barcode)</li>
                <li>Triage category (color-coded — visible from a distance)</li>
                <li>Vital signs and reassessment findings</li>
                <li>Treatments provided</li>
                <li>Decontamination status (for hazmat MCIs)</li>
                <li>Hospital destination</li>
            </ul>
            <p>Tags should be affixed to the patient in a visible location (wrist, ankle, or clothing). As patients are reassessed and their category changes, the tag should be updated — a <strong>secondary triage</strong> may upgrade or downgrade a patient's priority.</p>

            <h4>MCI Management Basics</h4>
            <p>Beyond triage, successful MCI management requires a structured incident management system:</p>
            <ul>
                <li><strong>Incident Command (IC):</strong> The first unit on scene establishes command and provides an initial scene size-up ("MCI — bus rollover, approximately 30 patients, requesting additional resources")</li>
                <li><strong>Triage Officer:</strong> Designated provider who performs primary triage and assigns triage categories</li>
                <li><strong>Treatment Officer:</strong> Designated provider who manages the treatment area where triaged patients are brought</li>
                <li><strong>Transport Officer:</strong> Coordinates patient transport assignments and hospital destinations, ensuring no single hospital is overwhelmed</li>
                <li><strong>Staging:</strong> Designated area for incoming resources (ambulances, supplies) to wait until assigned</li>
                <li><strong>Medical Communications:</strong> A dedicated channel or frequency for MCI medical coordination</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> During an MCI, the most important principle is to <strong>stay organized</strong>. Triage is rapid — 30-60 seconds per patient. Get them categorized, tagged, and moved to the appropriate treatment area. Do not stop to provide definitive care during primary triage — that is the treatment team's job. Do not get "sucked in" to treating a single patient and losing sight of the big picture.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What does RPM stand for in the START triage system?",
                answer: "Respirations (rate &gt;30/min = Red), Perfusion (no radial pulse or cap refill &gt;2 sec = Red), Mental status (cannot follow commands = Red). Assess in that order.",
                category: "START Triage"
            },
            {
                question: "What are the four triage categories and their colors in START?",
                answer: "Red (Immediate) — life-threatening but salvageable; Yellow (Delayed) — significant but stable; Green (Minor/Minimal) — walking wounded; Black (Deceased/Expectant) — dead or unsurvivable injuries.",
                category: "START Triage"
            },
            {
                question: "What is the most important difference between START and JumpSTART?",
                answer: "JumpSTART allows 5 rescue breaths for apneic children with a pulse. If the child starts breathing after rescue breaths, they are triaged Red (not Black). START triages apneic adults as Black immediately after airway opening.",
                category: "JumpSTART"
            },
            {
                question: "What age range and criteria define which patients should receive JumpSTART instead of START?",
                answer: "Children ages 1-8 years (or up to the onset of puberty / pediatric size — roughly under 100 lbs). Infants under 1 year should be assessed with JumpSTART as well.",
                category: "JumpSTART"
            },
            {
                question: "What five life-saving interventions (LSIs) are performed during the 'L' step of SALT triage?",
                answer: "Open the airway, control major hemorrhage (tourniquet/pressure), decompress tension pneumothorax (paramedic), administer antidote, and position the patient (recovery position).",
                category: "SALT Triage"
            },
            {
                question: "What does SALT stand for?",
                answer: "Sort (global sorting), Assess (individual assessment), Lifesaving Interventions (rapid LSIs), Treatment/Transport (assign category and move to next patient).",
                category: "SALT Triage"
            },
            {
                question: "What is a triage tag and what information does it contain?",
                answer: "A physical tag attached to the patient during MCI showing triage category (color-coded), patient ID number, vital signs, treatments provided, decontamination status, and hospital destination.",
                category: "MCI Management"
            },
            {
                question: "What are the key roles in MCI incident management?",
                answer: "Incident Command (IC) — overall scene command; Triage Officer — performs primary triage; Treatment Officer — manages the treatment area; Transport Officer — coordinates hospital assignments; Staging Officer — manages incoming resources.",
                category: "MCI Management"
            }
        ],
        quiz: [
            {
                q: "In the START triage system, a patient with a respiratory rate of 32 breaths per minute would be triaged as:",
                options: [
                    "Green (Minor)",
                    "Yellow (Delayed)",
                    "Red (Immediate)",
                    "Black (Deceased)"
                ],
                correct: 2
            },
            {
                q: "A 6-year-old child is found apneic after an explosion. You open the airway and the child still does not breathe. You palpate a strong radial pulse. According to JumpSTART, what should you do?",
                options: [
                    "Tag the child as Black — the child is not breathing despite airway opening",
                    "Give 5 rescue breaths, then reassess — if breathing starts, tag as Red",
                    "Start CPR immediately — this is a pediatric cardiac arrest",
                    "Tag as Yellow and move to the next patient — rescue breaths take too long in an MCI"
                ],
                correct: 1
            },
            {
                q: "[HARD] In the SALT triage system, a patient who cannot follow commands and has a life-threatening hemorrhage after a bomb blast receives a tourniquet and airway opening as LSIs. After these interventions, the patient has a pulse but remains unresponsive. What is the SALT triage category?",
                options: [
                    "Minimal (Green)",
                    "Delayed (Yellow)",
                    "Immediate (Red)",
                    "Dead (Black)"
                ],
                correct: 2
            }
        ],
        critical: [
            {
                id: "crit_2_11_1",
                scenario: "You are the first EMS unit to arrive at a church bus rollover on a rural highway. The bus has come to rest on its side. Approximately 20 patients are scattered around the scene — some are walking, some are lying on the ground, and several are still in the bus. As you approach, you issue a voice command: 'Everyone who can walk, come to the sound of my voice.' Eight patients walk toward you with minor scrapes and bruises. You then encounter a middle-aged male lying on the ground approximately 15 feet from the bus. He is breathing at 28 breaths per minute, you can palpate a radial pulse, and when you ask him to squeeze your hand, he opens his eyes and squeezes. You then find a female patient still partially in the bus window who is not moving. She is not breathing. You open her airway with a jaw-thrust — she remains apneic.",
                question: "Apply START triage to each of these three patients. What are their triage categories?",
                options: [
                    {t: "Walking patients = Green; Male with RR 28, radial pulse, follows commands = Yellow; Female apneic after airway opening = Red — start rescue breathing", f: "Incorrect. The apneic female after airway opening is Black (not Red) in START. Rescue breaths are not part of START — that is a JumpSTART modification for children."},
                    {t: "Walking patients = Green (Minor); Male with RR 28, radial pulse, follows commands = Yellow (Delayed); Female apneic after airway opening = Black (Deceased)", f: "Correct. The walking patients are automatically Green. The male has all normal RPM findings (RR &lt;30, radial pulse present, follows commands) = Yellow. The female is apneic after airway opening = Black in START (adult). Note: if this were a child, JumpSTART would apply and 5 rescue breaths would be indicated."}
                ],
                correct: 1,
                explanation: "START algorithm: (1) Walking = Green. (2) Male: RR 28 (<30) → check perfusion → radial pulse present → check mental status → follows commands = Yellow. (3) Female: apneic → open airway → still apneic = Black. Hard but correct. In adult START, no rescue breaths are given — resources go to salvageable patients.",
                kpi: "START triage application in MCI"
            },
            {
                id: "crit_2_11_2",
                scenario: "You arrive at the scene of a small apartment building explosion. There are approximately 12 patients. A 7-year-old child is found lying on the ground near the building. He is not moving. On assessment: he is not breathing. You open his airway — he still does not breathe. You palpate a strong brachial pulse. You give 5 rescue breaths. After the breaths, the child begins to breathe spontaneously at a rate of 28 breaths per minute. He does not open his eyes or respond to your voice. His radial pulse is present. Capillary refill is approximately 2 seconds. Nearby, an adult male with a large laceration to his thigh is bleeding profusely. He is alert but has a weak radial pulse. His respiratory rate is 26.",
                question: "Apply JumpSTART to the child and START to the adult. What are their triage categories?",
                options: [
                    {t: "Child = Yellow (Delayed — breathing &lt;30/min, perfusing, but altered mental status); Adult = Red (Immediate — bleeding with weak radial pulse indicates hypoperfusion)", f: "Incorrect. The child cannot follow commands (unresponsive after rescue breaths) — this meets JumpSTART criteria for Red (Immediate) on mental status, even though RR and perfusion are normal."},
                    {t: "Child = Red (Immediate — after rescue breaths, breathing but unresponsive/unable to follow commands = altered mental status = Red in JumpSTART); Adult = Red (Immediate — significant hemorrhage with weak radial pulse = hypoperfusion = Red in START)", f: "Correct. The child received 5 rescue breaths, started breathing, but remains unresponsive — altered mental status = Red. The adult has a weak radial pulse from active hemorrhage = hypoperfusion = Red. Both need immediate care. The child needing rescue breaths and then being upgraded to Red illustrates why JumpSTART exists — children arrest from reversible respiratory causes more often than adults."}
                ],
                correct: 1,
                explanation: "JumpSTART: Apneic with pulse → 5 rescue breaths → breathing starts but unresponsive (cannot follow commands, AVPU = P or U) = Red. START: Active hemorrhage with weak radial pulse = hypoperfusion = Red. The child's recovery with rescue breaths validates the JumpSTART approach — a child who would have been Black in START becomes a salvageable Red patient.",
                kpi: "JumpSTART application and pediatric triage"
            },
            {
                id: "crit_2_11_3",
                scenario: "You are the triage officer at a multi-vehicle collision on an interstate highway with approximately 15 patients. You have completed primary triage and have the following patient counts: RED (3), YELLOW (4), GREEN (6), BLACK (2). Your transport officer reports that there are currently 4 ambulances on scene with a fifth arriving in 8 minutes. Each ambulance can transport 1-2 patients. The closest trauma center is 20 minutes away, and the closest community hospital is 10 minutes away for Yellow and Green patients. One of the Red patients — a 45-year-old male with a respiratory rate of 32 and no radial pulse — begins to deteriorate and becomes apneic.",
                question: "As the triage officer, what is your priority and how should you reassign resources?",
                options: [
                    {t: "Downgrade the deteriorating Red patient to Black and focus resources on the remaining 2 Red patients, who have better salvage potential", f: "Correct (this is the right answer). The patient has progressed from Red (tachycardic/agonal) to apneic — in the MCI context, this patient is now expectant (Black). Resources should focus on the two remaining Red patients who still have a chance."},
                    {t: "Divert one ambulance to transport the deteriorating Red patient immediately with lights and sirens while continuing to triage the other patients", f: "Incorrect. This violates MCI triage principles — you are pouring resources into a patient who is now unsalvageable while other salvageable Red patients remain untreated. The MCI goal is the greatest good for the greatest number."}
                ],
                correct: 0,
                explanation: "In MCI triage, patients can be downgraded if their condition deteriorates to the point of being unsalvageable. The patient who becomes apneic is now Black (expectant). This is the hardest decision in triage — but diverting resources to a non-survivable patient while salvageable patients wait is a failure of MCI management. The three remaining ambulances should focus on transporting the two remaining Red patients to the trauma center.",
                kpi: "MCI resource allocation and re-triage decisions"
            }
        ]
    }
    ]
};