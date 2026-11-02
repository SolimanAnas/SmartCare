// Builds .google-flow/ from docs/images.md. Hand decisions live in the tables below.
const fs = require('fs'), path = require('path');
const ROOT = 'D:/Apps/SmartCare', OUT = path.join(ROOT, '.google-flow');
const BATCH_SIZE = 8, OUTPUTS = 2, RETRY = 1.25;

const SVG = [23,29,43,47,49,52,78,86,92,93,97,101,106,107,109,150,151,152,162,169,172,174,175,176,177,195,199,200,201,205,210,215,216,220,241,245];
const REUSE = {98:5,54:114,222:114,89:178,218:159,214:242,231:70,157:77,125:225,229:45,105:129,88:131,202:110,18:104,32:40,148:12,246:68,109:199};
const OVERLAY = [22,46,72,10,30,35,42,67,82,121,166,167,189,191,234,239,20,40,45,48,53,56,59,63,99,113,119,127,136,144,184,186,190,196,206,209,211,219,221,230,233,235,237,238,240,242,244];
const FORCE_PRO = [12]; // safety-critical technique
const PILOT = [1,5,12,14,22,31,40,64];
const SQUARE = [9,21,62,70,117,118,128,156,196,239];
const ANATOMY = [1,2,3,4,8,17,28,33,34,35,41,42,45,46,57,69,75,76,79,90,91,115,116,119,120,122,126,127,129,130,140,178,204,230];
const OBJECT = [6,14,19,21,25,38,55,62,63,64,68,72,80,117,128,156,161,168,187,193,203,209,212,213,233,236,239,232];
const SCENE = [7,9,31,36,37,39,60,61,74,84,94,95,103,108,110,111,112,134,146,147,153,154,155,160,163,164,165,171,173,182,183,189,190,194,228];
const MANY = [61,64,72,104,126,193];
const FIX = {
  3:'Infant is fully dressed in a onesie; draw as a simple schematic.',
  8:'Draw a simplified schematic torso outline, not a realistic bare child. Diagram only, clinical in tone.',
  11:'Patient fully clothed.',
  12:'The infant is fully dressed in a onesie. No fingertip touches the chest in the second panel, and no hand is near the belly.',
  58:'Infant is fully dressed in a onesie; schematic and clinical in tone.',
  59:'Child is fully dressed in a t-shirt and shorts; schematic and clinical in tone.',
  118:'Clean and non-graphic: no blood pooling, no gore.',
  133:'Patient clothed; a simple clinical drawing.',
  135:'Side view. Mother fully draped with a sheet from the waist to the knees. No genital anatomy is visible; the sheet hides the delivery area. Clinical in tone.',
  136:'Mother covered with a blanket; baby wrapped except where the cord is shown.',
  137:'Mother fully draped with a sheet. No genital anatomy visible; show the cord and hand as a small separate schematic inset. Clinical in tone.',
  138:'Side view. Mother fully draped with a sheet from the waist to the knees. Clinical in tone.',
  139:'Mother covered below the hips with a sheet; only the lower abdomen is exposed. Clinical in tone.',
  141:'Patient is seen from a respectful distance, fully wrapped and clothed. No injury shown. Emphasis on the bags.',
  142:'Newborn wrapped in a towel apart from the face and top of the chest.',
  143:'Newborn wrapped in a towel apart from the face and upper chest.',
  144:'Newborn wrapped in a towel with only the upper chest showing; schematic and clinical in tone.',
  145:'The plastic wrap stops at the neck: the face is completely clear and uncovered. Baby wears a hat.',
  149:'Infant is fully dressed in a onesie. Show the crossed-out two-finger technique only as a small inset with a red cross.',
  170:'No blood and no wound; the shirt is off the patient or only the fabric is shown.',
  183:'Patient wears shorts and has a sheet across the hips; respectful and non-sexual.',
  85:'Non-violent, respectful and calm; the patient is treated with dignity.',
};
const SENSITIVE = [3,8,11,12,58,59,85,118,133,135,136,137,138,139,141,142,143,144,145,149,170,183];
// Exact label text. An empty list means no text. Numbers that must be exact go through the overlay step.
const LABELS = {
  1:['Upper airway','Lower airway','Nose','Mouth','Pharynx','Epiglottis','Larynx','Vocal cords','Trachea','Carina','Right mainstem bronchus','Left mainstem bronchus','Bronchioles','Alveolus','Capillary'],
  3:['Airway kinked','Airway neutral'], 6:['Snoring','Gurgling','Stridor','Wheeze'],
  7:['Tripod position','Accessory muscles','Short sentences'], 14:['OPA','NPA','Flange','Curve','Bevel'],
  19:['Nasal cannula','Simple face mask','Non-rebreather mask','Bag-valve mask'], 25:['Rigid (Yankauer)','Soft French catheter'],
  31:['Distress','Failure','Time'],
  33:['Right atrium','Left atrium','Right ventricle','Left ventricle','Tricuspid valve','Pulmonary valve','Mitral valve','Aortic valve'],
  37:['just tired','indigestion','short of breath'], 38:['PDE-5 inhibitor','24 h / 48 h'],
  64:['Balance','Eyes','Face','Arm','Speech','Time'], 96:['Extrication only'], 103:['SAMPLE'], 108:['just a UTI'],
  112:["Waddell's triad"], 141:[], 142:[], 146:['Appearance','Work of breathing','Circulation to skin'], 153:['Pressure areas'],
  156:['Flange','Ties','Inner cannula'], 173:[], 181:["Fowler's",'Recovery position','Supine','Left tilt'],
  185:['Insulating mat','Vapour barrier','Sleeping bag','Outer shell','Heat packs'], 192:['Elapids only'],
  204:['Alpha-1','Beta-1','Beta-2','Muscarinic','Mu-opioid'], 208:['1 From the bag','2 At the syringe','3 At the patient'],
  212:['Aspirin','Nitroglycerin','Oral glucose','Epinephrine','Naloxone','Albuterol'],
  213:['Methadone','Buprenorphine','Naltrexone','Ceiling'], 232:['Half in each side'], 243:['Malignant hyperthermia'],
};
// Rewritten descriptions for entries the pilot showed were too loose.
const SUBJECT = {
  1:"The air path: the head and neck drawn as a side-view cut, continuing into a front view of the chest with both lungs. Nose and mouth, pharynx, epiglottis, larynx with the vocal cords, trachea, carina, the two mainstem bronchi and bronchioles, plus a circular magnified inset of one alveolus with a capillary. The patient's right mainstem bronchus, on the viewer's left, is clearly shorter, wider and more vertical. The patient's left mainstem bronchus, on the viewer's right, is clearly longer, narrower and more horizontal.",
  12:"Two side-by-side panels of a seated rescuer holding an infant. Left panel: the infant lies face-down along the rescuer's forearm, head lower than the chest, jaw supported by the rescuer's hand, while the heel of the rescuer's other hand strikes between the shoulder blades. Right panel: the infant lies face-up along the rescuer's other forearm, head lower than the chest and supported. The rescuer's free hand presses on the centre of the chest, on the lower half of the breastbone, using only the heel of the palm, which is the thick base of the palm next to the wrist. The fingers and thumb are lifted clearly off the chest and point toward the infant's head.",
  14:"Two airway devices side by side, with nothing else in the image. Left: an oropharyngeal airway, a rigid J-shaped curved plastic device with a flat flange at one end and a short hollow bite block below it. Right: a nasopharyngeal airway, a soft narrow flexible tube with a flared flange at one end and an angled bevelled tip at the other. The label Bevel points only to the tip of the nasopharyngeal airway.",
  22:"Two panels. Left panel, a close-up of bag-mask technique on a patient lying on their back: one gloved hand holds the mask on the face, with the thumb and index finger forming a C shape pressing the mask down, and the middle, ring and little fingers forming an E shape along the bony jaw, lifting it. The other hand squeezes the bag. Right panel: two rescuers, one kneeling at the head holding the mask on with both hands, the other beside the patient squeezing the bag. In both panels a small curved arrow shows the chest rising gently.",
};
SUBJECT[13] = "Two panels of a rescuer kneeling at the head of an unresponsive patient lying on their back. Left panel, marked with a green tick: the rescuer's hands stay clear of the mouth while they look into the open mouth and can see an object near the front. Right panel, marked with a red cross: a blind finger sweep, with the rescuer's finger pushed deep into the mouth while looking away.";
// Rewritten after reviewing the first run: each one fixes a specific fault in that output.
Object.assign(SUBJECT, {
  36: "A sweaty patient facing the viewer, holding a fist to the chest (Levine sign). Arrows show typical pain radiation to the jaw, to the back, and down the patient's own left arm, which is the arm on the right side of the image. No arrow runs down the arm on the left side of the image.",
  50: "Two panels. Left panel, a bare torso seen straight from the front showing anterolateral pad placement: one pad just below the collarbone on the patient's right, which is the left side of the image, and one pad on the patient's left side at the mid-axillary line below the armpit, on the right side of the image. Right panel, showing anteroposterior placement as a small front view and a small back view of the same torso: on the front view one pad at the centre-left of the chest, and on the back view, seen straight from behind, one pad between the spine and the left shoulder blade.",
  114: "Wound packing in the groin by a rescuer's gloved hands, in two steps: gauze pushed deep into the wound with two fingers, then both hands pressing with straight arms.",
  133: "Manual left uterine displacement on a visibly pregnant patient lying flat on their back, drawn from the side with the patient's head at the left of the image and the feet at the right, so the far side of the body is the patient's left. Two rescuers kneel on that far side. One does chest compressions with the hands on the lower half of the breastbone. The other, nearer the feet, has both hands on the pregnant abdomen, moving the uterus up off the spine and toward the far side. A single arrow on the abdomen points up and away from the viewer, toward that rescuer. Patient clothed; a simple clinical drawing.",
  139: "A rescuer's gloved hands on the lower abdomen: one hand cupping the fundus above the umbilicus and massaging in circles, the other hand just above the pubic bone supporting the lower uterus. Mother covered below the hips with a sheet; only the lower abdomen is exposed. Clinical in tone.",
  143: "A newborn bag-mask seen from the side, with the mask covering the mouth and nose but not the eyes, held with a C-grip by a rescuer's gloved hand, and a pulse oximeter probe on the right wrist.",
  149: "Two panels of a fully dressed infant lying face-up, seen from above, each marked with a green tick. Left panel: a rescuer's two gloved hands encircle the chest with both thumbs side by side on the lower half of the breastbone. Right panel: the heel of one gloved hand, drawn small in proportion to the infant, rests in the centre of the chest just below the line between the nipples. The wrist is above the bottom of the ribs, well clear of the belly, and the fingers are lifted and point toward the infant's head, ending at the collarbones. A small inset marked with a red cross shows two fingertips on the breastbone, the technique that is no longer used.",
  58: "Two panels of a fully dressed infant lying face-up, seen from above. Left panel: two rescuers, one with two gloved hands encircling the chest with both thumbs side by side in the centre of the chest just below the line between the nipples, the other holding a bag-mask at the head. Right panel: the heel of one gloved hand, drawn small in proportion to the infant, rests in the centre of the chest just below the line between the nipples. The wrist is above the bottom of the ribs, well clear of the belly, and the fingers are lifted and point toward the infant's head, ending at the collarbones. No two-finger technique anywhere in the image.",
  // Pro: these run after the daily reset.
  42: "Cross-section of the aorta in the centre with a torn inner layer and a false lumen. One single patient seen from the front, the same person on both sides of the aorta drawing, with a blood pressure cuff on each of their two arms and a blank gauge beside each cuff.",
  59: "Child CPR with exactly one hand: a kneeling rescuer places the heel of one gloved hand on the lower half of the breastbone, arm straight, while their other hand rests on the child's forehead. A depth gauge shows about 5 cm.",
  127: "Front view of a rib cage showing two needle decompression sites on the same side of the chest, the patient's right, which is the left side of the image. One needle in the 2nd intercostal space at the mid-clavicular line. One needle in the 4th or 5th intercostal space just anterior to the mid-axillary line. A circular magnified inset shows a needle passing just over the top edge of a rib.",
  144: "Two rescuers with a newborn lying face-up on a flat surface, wrapped in a towel with only the upper chest showing, seen from above at a slight angle. One rescuer's two gloved hands encircle the chest with both thumbs clearly visible side by side on the lower third of the breastbone. The second rescuer, at the head, holds a bag-mask over the mouth and nose. All skin is drawn in natural, warm human skin tones, never grey. Leave clear space beside the rescuers for a small label added later.",
  234: "Rapid push technique: the patient's arm raised above the heart, one three-way tap close to the cannula with exactly two syringes attached, a small adenosine syringe and a larger 20 mL saline flush syringe, and a monitor strip showing a brief pause.",
  235: "A checklist card before nitrates, with three rows: a blood pressure cuff with a blank gauge; a chest seen from the front with one ECG electrode on the patient's right side of the chest, which is the left side of the image, below the nipple line at the mid-clavicular line (the V4R position); and a crossed-out PDE-5 tablet with a blank tag.",
});
const KEEP = { 5:'cea6eb15', 31:'d365da32', 40:'8511000d', 64:'1fd6aa90' }; // approved pilot images (filename suffix)

// ── parse images.md ──────────────────────────────────────────
const md = fs.readFileSync(path.join(ROOT, 'docs/images.md'), 'utf8').split(/\r?\n/);
let chapter = null, accent = null, topic = null, topicTitle = null, cur = null;
const entries = [];
for (const l of md) {
  let m;
  if ((m = l.match(/^## (.+?) \(accent [a-z]+ (#[0-9a-f]{6})\)/i))) { chapter = m[1]; accent = m[2]; continue; }
  if ((m = l.match(/^### (.+)$/))) {
    const t = m[1].match(/^(c\d+s\d+) – (.*)/);
    topic = t ? t[1] : 'formulary'; topicTitle = t ? t[2] : m[1]; continue;
  }
  if ((m = l.match(/^\s*(\d+)\. \*\*Where:\*\* (.*)/))) {
    cur = { id: +m[1], chapter, accent, topic, topicTitle, where: m[2], image: '', notes: '' };
    entries.push(cur); continue;
  }
  if (cur && (m = l.match(/^\s*\*\*Image:\*\* (.*)/))) { cur.image = m[1]; continue; }
  if (cur && (m = l.match(/^\s*\*\*Notes:\*\* (.*)/))) { cur.notes = m[1]; continue; }
}
if (entries.length !== 247) throw new Error('expected 247 entries, got ' + entries.length);
for (const e of entries) if (!e.image) throw new Error('no image text: ' + e.id);
const byId = Object.fromEntries(entries.map(e => [e.id, e]));

// ── classify ─────────────────────────────────────────────────
const TICK = /\b(ticks?|ticked|crossed|crosses|strike)\b|red cross/i;
for (const e of entries) {
  e.track = REUSE[e.id] ? 'reuse' : SVG.includes(e.id) ? 'svg' : OVERLAY.includes(e.id) ? 'flow+overlay' : 'flow';
  e.family = ANATOMY.includes(e.id) ? 'anatomy' : OBJECT.includes(e.id) ? 'object' : SCENE.includes(e.id) ? 'scene' : 'procedure';
  e.ratio = SQUARE.includes(e.id) ? '1:1' : '4:3';
  const wantsText = /\blabel|\bwritten\b|callout|speech bubble|["“]/i.test(e.image + ' ' + e.notes);
  if (wantsText && e.track === 'flow' && !LABELS[e.id]) throw new Error('needs an explicit label list: #' + e.id);
  e.labelled = (LABELS[e.id] || []).length > 0;
  e.model = (FORCE_PRO.includes(e.id) || e.family === 'anatomy' || e.labelled || e.track === 'flow+overlay') ? 'Nano Banana Pro' : 'Nano Banana 2.1';
  e.file = `images/guides/${e.topic}-${String(e.id).padStart(3, '0')}.webp`;
}
for (const [k, v] of Object.entries(REUSE)) {
  if (REUSE[v]) throw new Error('reuse chain ' + k);
  byId[k].file = byId[v].file;
}

// ── prompts ──────────────────────────────────────────────────
function prompt(e) {
  const body = SUBJECT[e.id] || e.image;
  const hasPeople = /rescuer|patient|person|people|\bhands?\b|provider|paramedic|crew|child|infant|toddler|newborn|baby|woman|\bman\b|mother|family|team|athlete|diver|climber|swimmer|figure|finger|\barm\b|forearm|\bleg\b|torso|helper|partner|interpreter/i.test(body);
  // Instructions about labels and numbering are replaced by the explicit rule below,
  // so they can't be copied into the image as text.
  const notes = (e.notes || '').split(/(?<=[.!?])\s+/).filter(s => s && !/^(Label|Number)\b/i.test(s)).join(' ');
  const parts = [
    `A flat, clean vector-style medical illustration, not photographic, on a plain solid off-white background (#F8F9FA) that fills the whole image, with no border, frame or drop shadow. Clean dark outlines and a soft limited palette, with ${e.accent} as the single highlight color. No logos or brand names.`,
    body,
  ];
  if (notes) parts.push(notes);
  if (FIX[e.id]) parts.push(FIX[e.id]);
  if (TICK.test(e.image + ' ' + e.notes)) parts.push('A green tick marks what is correct and a red cross marks what is wrong.');
  // Naming rescuers in the prompt adds them to the image, so only do it when the entry has them.
  const hasRescuer = /rescuer|provider|paramedic|\bcrew\b|\bEMS\b|\bteam\b|helper|partner|gloved hand/i.test(body);
  parts.push(!hasPeople
    ? 'Show only what is described here, with no people, hands or extra body parts.'
    : hasRescuer
      ? 'Show only the people and objects described here, with neutral, diverse people. Rescuers wear a plain navy uniform and blue gloves.'
      : 'Show only the people and objects described here, with neutral, diverse people. There are no rescuers and no extra hands in this image.');
  if (e.track === 'flow+overlay') parts.push('The image contains no words, digits or units at all. Gauges, tags, dials and labels are blank, with clear space around the subject.');
  else if (e.labelled) parts.push(`The only text in the image is these short labels, in plain sans-serif, large and legible at small size: ${LABELS[e.id].join('; ')}. No other words, titles or captions.`);
  else parts.push('The image contains no words, letters or numbers.');
  return parts.join(' ');
}

// ── batches ──────────────────────────────────────────────────
const flow = entries.filter(e => e.track.startsWith('flow'));
const pilot = PILOT.map(i => byId[i]);
for (const p of pilot) if (!p.track.startsWith('flow')) throw new Error('pilot not flow: ' + p.id);
pilot.forEach(e => e.batch = 'P00');
const chapters = [...new Set(entries.map(e => e.chapter))];
const famOrder = ['anatomy', 'object', 'procedure', 'scene'];
const batches = [{ name: 'P00', chapter: 'Pilot (mixed chapters)', items: pilot }];
let n = 1;
for (const ch of chapters) {
  const items = flow.filter(e => e.chapter === ch && !e.batch)
    .sort((a, b) => famOrder.indexOf(a.family) - famOrder.indexOf(b.family) || a.id - b.id);
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const name = 'B' + String(n++).padStart(2, '0');
    const chunk = items.slice(i, i + BATCH_SIZE);
    chunk.forEach(e => e.batch = name);
    batches.push({ name, chapter: ch, items: chunk });
  }
}

// ── integrity checks ─────────────────────────────────────────
const counted = batches.flatMap(b => b.items.map(e => e.id));
if (new Set(counted).size !== counted.length) throw new Error('duplicate in batches');
if (counted.length !== flow.length) throw new Error('flow count mismatch');
if (batches.some(b => b.items.length > BATCH_SIZE)) throw new Error('oversize batch');
for (const v of Object.values(REUSE)) if (!byId[v] || byId[v].track === 'reuse') throw new Error('bad reuse target ' + v);

// ── numbers ──────────────────────────────────────────────────
const count = t => entries.filter(e => e.track === t).length;
const pro = flow.filter(e => e.model === 'Nano Banana Pro').length, std = flow.length - pro;
const castPrompts = 3;
const proGen = Math.ceil((pro + castPrompts) * OUTPUTS * RETRY), stdGen = Math.ceil(std * OUTPUTS * RETRY);
const days = (p, s) => Math.max(Math.ceil(proGen / p), Math.ceil(stdGen / s));
const stats = { total: entries.length, flow: count('flow'), overlay: count('flow+overlay'), svg: count('svg'), reuse: count('reuse'), prompts: flow.length, pro, std, batches: batches.length, proGen, stdGen, dNone: days(20, 400), dPlus: days(100, 1000), dUltra: days(500, 1000) };

// ── write ────────────────────────────────────────────────────
fs.mkdirSync(path.join(OUT, 'batches'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'jobs.json'), JSON.stringify(batches.flatMap(b => b.items.map(e => ({
  id: e.id, batch: b.name, model: e.model, aspect: e.ratio, keep: KEEP[e.id] || null, sensitive: SENSITIVE.includes(e.id), prompt: prompt(e),
}))), null, 1));
for (const d of ['cast', 'incoming', 'final']) fs.mkdirSync(path.join(OUT, d), { recursive: true });
for (const b of batches) {
  const models = [...new Set(b.items.map(e => e.model))].join(', ');
  let s = `# ${b.name}: ${b.chapter}\n\n${b.items.length} prompts, ${OUTPUTS} outputs each. Models: ${models}.\n\n`;
  s += `Save picks to \`.google-flow/incoming/${b.name}/<id>.png\`. Log results in \`tracker.csv\` before starting the next batch.\n\n`;
  for (const e of b.items) {
    s += `## #${e.id} (${e.topic}, ${e.family})\n\n`;
    s += `- **Settings:** ${e.model}, ${e.ratio}, ${OUTPUTS} outputs\n- **Goes in:** ${e.where}\n`;
    if (e.track === 'flow+overlay') s += `- **After generation:** add the words and numbers in the overlay step\n`;
    if (MANY.includes(e.id)) s += `- **If it comes out cramped:** generate each panel separately and assemble\n`;
    if (SENSITIVE.includes(e.id)) s += `- **Sensitive:** see "Sensitive images" in \`REVIEW.md\`\n`;
    const others = Object.entries(REUSE).filter(([, v]) => +v === e.id).map(([k]) => '#' + k);
    if (others.length) s += `- **Also used for:** ${others.join(', ')}\n`;
    s += `\n\`\`\`text\n${prompt(e)}\n\`\`\`\n\n`;
  }
  fs.writeFileSync(path.join(OUT, 'batches', b.name + '.md'), s);
}
const q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
const csv = ['id,batch,track,topic,family,model,ratio,reuse_of,final_file,where,status,medical_signoff,notes'];
for (const e of entries) csv.push([e.id, e.batch || '', e.track, e.topic, e.family, e.track.startsWith('flow') ? e.model : '', e.ratio, REUSE[e.id] || '', e.file, e.where, 'todo', '', ''].map(q).join(','));
fs.writeFileSync(path.join(OUT, 'tracker.csv'), csv.join('\n') + '\n');

let svg = `# Code-drawn images (not sent to Flow)\n\nThese depend on exact shapes, numbers or wording, so they're built as SVG. Numbers come from the topic's guide text, not from memory.\n\n`;
for (const e of entries.filter(x => x.track === 'svg')) svg += `- **#${e.id}** (${e.topic}) ${e.image}${e.notes ? ' *' + e.notes + '*' : ''}\n`;
svg += `\n## Reused images\n\nThese entries share another entry's image, so no prompt is needed.\n\n| Entry | Uses | Topic |\n|---|---|---|\n`;
for (const [k, v] of Object.entries(REUSE)) svg += `| #${k} | #${v} | ${byId[k].topic} |\n`;
fs.writeFileSync(path.join(OUT, 'NOT-FLOW.md'), svg);

fs.writeFileSync(path.join(OUT, '.stats.json'), JSON.stringify(stats, null, 2));
const rows = batches.map(b => {
  const c = {}; b.items.forEach(e => c[e.family] = (c[e.family] || 0) + 1);
  return `| ${b.name} | ${b.chapter} | ${b.items.length} | ${famOrder.filter(f => c[f]).map(f => `${c[f]} ${f}`).join(', ')} |`;
}).join('\n');
fs.writeFileSync(path.join(OUT, '.batch-table.md'), rows + '\n');
console.log(stats);
console.log(batches.map(b => b.name + ':' + b.items.length).join(' '));
console.log('labelled sample', flow.filter(e => e.labelled).length, 'of', flow.length);
console.log('--- AUDIT: plain flow, no text rule, but text-like content');
for (const e of flow) if (e.track === 'flow' && !e.labelled && /\d|number|reading|\btag\b|\bform\b|letter|\bword/i.test(e.image + ' ' + e.notes)) console.log(e.id, e.batch, '|', e.image.slice(0, 170));
console.log('--- tick rule on:', flow.filter(e => TICK.test(e.image + ' ' + e.notes)).map(e => e.id).join(' '));
console.log('--- labelled:', flow.filter(e => e.labelled && e.track === 'flow').map(e => e.id).join(' '));
