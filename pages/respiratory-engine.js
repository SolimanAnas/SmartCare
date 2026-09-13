/**
 * SmartCare Respiratory Pattern Engine v1.0
 * Conceptual respiratory waveform synthesis for pattern-recognition teaching.
 *
 * Companion to ecg-engine.js and follows the same contract: the engine is a
 * pure-ish sample generator called once per sample by the page's render loop,
 * and knows nothing about canvas, DOM or UI state.
 *
 * KEY MODEL: amplitude is a dimensionless CHEST EXCURSION, not a measured
 * volume or pressure. 0 = end-expiration (baseline), +1.0 = peak inspiration
 * at depth 100 %. Time is absolute seconds and monotonically increasing.
 *
 * KEY IDEA #1 — one asymmetric breath shape, many patterns.
 *   Tidal breathing is not a sine wave: inspiration is an active, faster
 *   upstroke; expiration is a slower passive decay. Every pattern here is that
 *   one shape with its rate, amplitude, timing or envelope modulated.
 *
 * KEY IDEA #2 — the flat baseline is a consequence, not a special case.
 *   A breath occupies a roughly CONSTANT active time (~2.6 s at rest). The rest
 *   of the cycle is an end-expiratory pause. That single rule is why bradypnea
 *   shows long flat gaps and tachypnea looks continuous, from the same maths.
 *
 * KEY IDEA #3 — irregularity is keyed to the BREATH, never to the sample.
 *   Drawing a random number per sample yields noise, not irregular breathing.
 *   Irregular patterns are therefore scheduled as lazily-built breath lists,
 *   with per-breath values derived from a deterministic hash of the breath index.
 *
 * This is an educational visualisation, not a physiological simulation and not
 * a monitor waveform.
 */
const RespEngine = (() => {
  'use strict';

  // ── MATH PRIMITIVES ──────────────────────────────────────────

  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

  // Hermite smoothstep — used for crescendo / decrescendo envelopes
  const smoothstep = (a, b, x) => {
    const u = clamp((x - a) / (b - a), 0, 1);
    return u * u * (3 - 2 * u);
  };

  // Deterministic 32-bit integer hash -> 0..1.
  // Keyed on the breath index so a given breath always looks the same, which is
  // what separates "irregular breathing" from "a noisy line".
  const hash01 = (n, salt) => {
    let h = ((n | 0) * 0x27d4eb2d) ^ (((salt | 0) + 0x165667b1) * 0x9e3779b1);
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };

  // ── THE BREATH SHAPE ─────────────────────────────────────────
  // ph   : normalised phase within the ACTIVE part of the breath, [0,1)
  // ie   : inspiratory fraction of the active part (0.33 ≈ I:E of 1:2)
  // hold : end-inspiratory plateau as a fraction of inspiration (apneustic)
  //
  //   [0, riseEnd)  raised half-cosine        active inspiratory upstroke
  //   [riseEnd, ie) plateau at 1              optional inspiratory hold
  //   [ie, 1)       normalised exponential    passive expiratory decay
  //
  // The expiratory decay is normalised so it starts at exactly 1 and reaches
  // exactly 0, which is what keeps the inter-breath baseline perfectly flat.
  const EXP_K = 3.4;

  function breathShape(ph, ie, hold) {
    if (!(ph > 0) || ph >= 1) return 0;
    const h = hold || 0;
    const insp = clamp(ie, 0.08, 0.85);
    const riseEnd = Math.max(0.02, insp * (1 - h));

    if (ph < riseEnd) {
      return 0.5 - 0.5 * Math.cos(Math.PI * (ph / riseEnd));
    }
    if (ph < insp) return 1;                       // inspiratory hold

    const u = (ph - insp) / (1 - insp);
    // A held breath is released abruptly, so it decays with a steeper constant.
    const k = h > 0.05 ? EXP_K * 2.4 : EXP_K;
    const e = Math.exp(-k);
    return (Math.exp(-k * u) - e) / (1 - e);
  }

  // Fraction of the respiratory cycle spent actively moving air.
  // Active time is held near-constant in SECONDS, then clamped so it can never
  // exceed the cycle (tachypnea) or collapse to a spike (extreme bradypnea).
  const REST_BREATH_S = 2.6;

  function activeFrac(T) {
    return Math.min(Math.max(REST_BREATH_S, 0.35 * T), 0.95 * T) / T;
  }

  // ── REGULAR TRAIN ────────────────────────────────────────────
  // Closed-form sampler for every rhythmically regular pattern.
  function regular(t, p, ie, hold, ampMul) {
    const rate = clamp(p.rate, 4, 60);
    const T = 60 / rate;
    const af = activeFrac(T);
    const idx = Math.floor(t / T);
    const ph = (t % T) / T / af;
    // ±3 % per-breath amplitude variation keyed to the breath index. Humans are
    // not metronomes — but it is applied to AMPLITUDE only, so the baseline and
    // any apnoeic interval stay exactly flat.
    const vary = 0.97 + 0.06 * hash01(idx, 1337);
    return (p.depth / 100) * (ampMul == null ? 1 : ampMul) * vary *
           breathShape(ph, ie, hold);
  }

  // ── WAXING / WANING SAMPLER ──────────────────────────────────
  // Shared by Cheyne–Stokes (apnoea > 0) and periodic breathing (apnoea = 0).
  //
  // Amplitude envelope: minEnv .. 1 .. minEnv across the ventilation phase.
  // Rate is modulated too — real crescendo phases speed up as they deepen. The
  // breath count is the closed-form INTEGRAL of the instantaneous rate:
  //
  //   rate(u) = r0 * (a + b·sin(πu)),  u = tc / ramp
  //   N(tc)   = r0/60 · [ a·tc + b·(ramp/π)·(1 − cos(πu)) ]
  //
  // Integrating keeps the phase continuous with no stored state, so the trace
  // never jumps when a parameter changes mid-cycle.
  const FM_A = 0.80, FM_B = 0.40;

  function waxWane(t, p, minEnv, apneaS) {
    const ramp = Math.max(6, p.cycle);
    const period = ramp + Math.max(0, apneaS);
    const tc = t % period;
    if (tc >= ramp) return 0;                       // apnoea — exact baseline
    const u = tc / ramp;

    const env = minEnv + (1 - minEnv) * Math.pow(Math.sin(Math.PI * u), 1.25);
    const r0 = clamp(p.rate, 4, 60) / 60;
    const N = r0 * (FM_A * tc + FM_B * (ramp / Math.PI) * (1 - Math.cos(Math.PI * u)));
    const ph = N - Math.floor(N);
    const rateNow = clamp(p.rate, 4, 60) * (FM_A + FM_B * Math.sin(Math.PI * u));
    const af = activeFrac(60 / Math.max(1, rateNow));

    return (p.depth / 100) * env * breathShape(ph / af, 0.40, 0);
  }

  // ── IRREGULAR PATTERNS: LAZY BREATH SCHEDULES ────────────────
  // Each irregular pattern builds a list of breath events
  //   { t0, dur, ie, hold, amp }
  // extended on demand as time advances, and rebuilt only when its parameters
  // change (detected by a signature string). A forward-walking cursor keeps
  // lookup O(1) amortised.

  const LANE_CAP = 700, LANE_TRIM = 300;

  function laneSig(p) {
    return p.rate + '|' + p.depth + '|' + p.ie + '|' + p.apnea + '|' +
           p.cycle + '|' + p.cluster + '|' + p.jitter;
  }

  function trim(lane) {
    if (lane.list.length <= LANE_CAP) return;
    lane.list.splice(0, LANE_TRIM);
    lane.cursor = Math.max(0, lane.cursor - LANE_TRIM);
  }

  // Biot's: clusters of quick breaths separated by irregular apnoeic pauses.
  function buildBiot(lane, p, seed) {
    const n = lane.n++;
    const hc = hash01(n, seed + 11);
    const hp = hash01(n, seed + 29);
    const count = Math.max(2, Math.round(p.cluster + (hc - 0.5) * 4 * p.jitter));
    const T = 60 / clamp(p.rate, 4, 60);
    const dur = Math.min(T * 0.85, 1.6);            // quick, shallow-ish breaths
    let t = lane.end;
    for (let i = 0; i < count; i++) {
      const ha = hash01(n * 97 + i, seed + 7);
      lane.list.push({
        t0: t, dur: dur, ie: 0.38, hold: 0,
        amp: (p.depth / 100) * (0.72 + 0.46 * ha)
      });
      t += T;
    }
    lane.end = t + p.apnea * (0.55 + 1.1 * hp);
    trim(lane);
  }

  // Ataxic: every breath differs in BOTH depth and duration, with occasional
  // unpredictable pauses. No organised envelope — that is the whole point.
  function buildAtaxic(lane, p, seed) {
    const n = lane.n++;
    const hd = hash01(n, seed + 3);
    const ha = hash01(n, seed + 5);
    const hp = hash01(n, seed + 13);
    const T = 60 / clamp(p.rate, 4, 60);
    const dur = clamp(T * (0.45 + 1.35 * hd * (0.35 + p.jitter)), 0.7, 5.5);
    lane.list.push({
      t0: lane.end, dur: dur, ie: 0.26 + 0.32 * ha, hold: 0,
      amp: (p.depth / 100) * (0.22 + 1.25 * ha)
    });
    lane.end += dur;
    if (hp > 0.70) lane.end += p.apnea * (0.35 + hp) * (0.4 + p.jitter);
    trim(lane);
  }

  // Agonal: infrequent, abrupt, large efforts separated by long irregular
  // pauses. The pause dominates the trace — that is the teaching point.
  function buildAgonal(lane, p, seed) {
    const n = lane.n++;
    const hg = hash01(n, seed + 17);
    const hp = hash01(n, seed + 23);
    const dur = 0.55 + 0.55 * hg;
    lane.list.push({
      t0: lane.end, dur: dur, ie: 0.22, hold: 0.10,
      amp: (p.depth / 100) * (1.00 + 0.95 * hg)
    });
    const meanGap = 60 / clamp(p.rate, 2, 30);
    lane.end += dur + meanGap * (0.40 + 1.6 * hp * (0.5 + p.jitter));
    trim(lane);
  }

  const BUILDERS = { biot: buildBiot, ataxic: buildAtaxic, agonal: buildAgonal };

  function sampleLane(t, key, state, p) {
    const sg = laneSig(p);
    let lane = state.lanes[key];
    if (!lane || lane.sig !== sg) {
      lane = state.lanes[key] = { sig: sg, list: [], end: 0, n: 0, cursor: 0 };
    }
    const build = BUILDERS[key];
    let guard = 0;
    while (lane.end <= t + 4 && guard++ < 600) build(lane, p, state.seed);

    const list = lane.list;
    if (lane.cursor >= list.length || (list[lane.cursor] && list[lane.cursor].t0 > t)) {
      lane.cursor = 0;
    }
    for (let i = lane.cursor; i < list.length; i++) {
      const b = list[i];
      if (t < b.t0) break;
      lane.cursor = i;
      if (t < b.t0 + b.dur) {
        return b.amp * breathShape((t - b.t0) / b.dur, b.ie, b.hold);
      }
    }
    return 0;
  }

  // ── STATE FACTORY ────────────────────────────────────────────
  // Fresh state per session. Irregular patterns need somewhere to keep their
  // breath schedules, and a per-session seed so two runs are not identical.
  function createState() {
    return {
      seed: (Date.now() ^ 0x5bf03635) & 0x7fffffff,
      lanes: {}
    };
  }

  // ── PARAMETER RESOLUTION ─────────────────────────────────────
  // Any missing parameter falls back to the selected pattern's own default, so
  // callers may pass a partial object (or nothing at all).
  const PARAM_KEYS = ['rate', 'depth', 'ie', 'apnea', 'cycle', 'cluster', 'jitter'];

  function resolve(key, p) {
    const d = (PATTERNS[key] || PATTERNS.eupnea).defaults;
    if (!p) return d;
    const out = {};
    for (let i = 0; i < PARAM_KEYS.length; i++) {
      const k = PARAM_KEYS[i];
      const v = p[k];
      out[k] = (typeof v === 'number' && isFinite(v)) ? v : d[k];
    }
    return out;
  }

  // ── MAIN SAMPLE GENERATOR ────────────────────────────────────
  // t     : absolute seconds, continuously increasing
  // key   : pattern key
  // state : object from createState()
  // params: partial or complete parameter object
  // returns: chest excursion (dimensionless)
  function generateSample(t, key, state, params) {
    if (!(t > 0)) t = 0;
    const p = resolve(key, params);

    switch (key) {

      // ══ NORMAL ══════════════════════════════════════════════
      case 'eupnea':
        return regular(t, p, p.ie, 0);

      // ══ RATE ════════════════════════════════════════════════
      case 'bradypnea':
        // Same shape; the long flat gap falls out of activeFrac() alone.
        return regular(t, p, p.ie, 0);

      case 'tachypnea':
        return regular(t, p, p.ie, 0);

      // ══ DEPTH ═══════════════════════════════════════════════
      case 'hyperpnea':
        return regular(t, p, p.ie, 0);

      case 'hypopnea':
        return regular(t, p, p.ie, 0);

      // ══ CESSATION ═══════════════════════════════════════════
      case 'apnea': {
        // `cluster` breaths, then a flat apnoeic interval, repeating.
        const T = 60 / clamp(p.rate, 4, 60);
        const nb = Math.max(1, Math.round(p.cluster));
        const vent = nb * T;
        const tc = t % (vent + p.apnea);
        if (tc >= vent) return 0;                   // exact baseline
        return regular(tc, p, p.ie, 0);
      }

      // ══ PERIODIC ════════════════════════════════════════════
      case 'cheyneStokes':
        // Crescendo → decrescendo → true apnoea. Organised and cyclic.
        return waxWane(t, p, 0.10, p.apnea);

      case 'periodic':
        // Waxes and wanes but never stops: the minimum is shallow, not flat.
        return waxWane(t, p, 0.30, 0);

      case 'sighing': {
        // Regular breaths with every Nth breath markedly larger.
        const T = 60 / clamp(p.rate, 4, 60);
        const idx = Math.floor(t / T);
        const every = Math.max(3, Math.round(p.cluster));
        const isSigh = idx % every === 0;
        return regular(t, p, isSigh ? p.ie * 1.25 : p.ie, 0, isSigh ? 1.95 : 1);
      }

      // ══ METABOLIC ═══════════════════════════════════════════
      case 'kussmaul':
        // Deep, regular, usually rapid, with a slight end-inspiratory shoulder
        // that reads as "laboured" rather than merely fast.
        return regular(t, p, p.ie, 0.10);

      // ══ IRREGULAR ═══════════════════════════════════════════
      case 'biot':
      case 'ataxic':
      case 'agonal':
        return sampleLane(t, key, state, p);

      // ══ NEUROLOGIC ══════════════════════════════════════════
      case 'apneustic':
        // Prolonged inspiration, visible plateau, then abrupt short expiration.
        return regular(t, p, p.ie, 0.45);

      // ══ MECHANICS ═══════════════════════════════════════════
      case 'paradoxical':
        // This returns the CHEST trace only. The teaching point lives in the
        // relationship with generateAbdomenSample() below.
        return regular(t, p, p.ie, 0);

      default:
        return regular(t, PATTERNS.eupnea.defaults, 0.40, 0);
    }
  }

  // ── ABDOMINAL EXCURSION ──────────────────────────────────────
  // A single scalar trace cannot represent chest-wall mechanics, so paradoxical
  // breathing gets a second channel. For every other pattern the abdomen moves
  // WITH the chest (slightly larger, very slightly lagged — diaphragmatic
  // descent leads rib-cage expansion). For paradoxical breathing it moves in
  // the opposite direction: the compartments oppose each other.
  function generateAbdomenSample(t, key, state, params) {
    if (key === 'paradoxical') {
      return -0.88 * generateSample(t, key, state, params);
    }
    return 1.04 * generateSample(Math.max(0, t - 0.06), key, state, params);
  }

  // ── CATEGORIES ───────────────────────────────────────────────
  const CATEGORIES = [
    { id: 'normal',     label: 'Normal' },
    { id: 'rate',       label: 'Rate' },
    { id: 'depth',      label: 'Depth' },
    { id: 'periodic',   label: 'Periodic' },
    { id: 'irregular',  label: 'Irregular' },
    { id: 'neuro',      label: 'Neurologic' },
    { id: 'metabolic',  label: 'Metabolic' },
    { id: 'mechanical', label: 'Mechanics' }
  ];

  // ── PATTERN LIBRARY ──────────────────────────────────────────
  // Data only. Causes are deliberately phrased as associations: a respiratory
  // pattern contributes context, it does not establish a diagnosis.
  const PATTERNS = {

    eupnea: {
      key: 'eupnea',
      name: 'Eupnea',
      alsoKnownAs: 'Normal respiration / normopnea',
      category: 'normal',
      severity: 'normal',
      summary: 'Eupnea: regular breathing at a normal rate and normal depth, with consistent cycle length.',
      definition: 'Eupnea is quiet, unlaboured breathing at a normal rate and depth for the patient’s age. Inspiration is active and slightly shorter than expiration, and each cycle ends with a brief end-expiratory pause. It is the reference pattern every other pattern is described against.',
      waveform: 'Evenly spaced excursions of consistent amplitude: a smooth inspiratory upstroke, a slower passive expiratory decay, then a short flat pause before the next breath.',
      rate: 'Approximately 12–20 breaths/min in a resting adult (higher in children and infants).',
      depth: 'Normal tidal excursion; no accessory muscle use.',
      rhythm: 'Regular — cycle length and amplitude are consistent breath to breath.',
      ieNote: 'Inspiration shorter than expiration, roughly 1:1.5 to 1:2 at rest.',
      causes: [
        'The expected finding in a person at rest who is not in respiratory distress.',
        'Normal ranges shift with age — compare against age-appropriate values rather than adult ranges.'
      ],
      significance: 'Establishes the baseline for comparison. Normal rate and depth do not by themselves exclude respiratory or metabolic compromise — assess work of breathing, air movement, oxygenation and mental status as well.',
      emsNote: null,
      keyDistinction: 'A normal rate is not the same as adequate ventilation. A patient can breathe at a normal rate with inadequate tidal volume, so assess depth and effort, not just the count.',
      defaults: { rate: 16, depth: 100, ie: 0.40, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    bradypnea: {
      key: 'bradypnea',
      name: 'Bradypnea',
      alsoKnownAs: null,
      category: 'rate',
      severity: 'caution',
      summary: 'Bradypnea: abnormally slow breathing, often with a preserved regular rhythm and near-normal depth.',
      definition: 'Bradypnea is an abnormally slow respiratory rate for the patient’s age. The rhythm often stays regular and individual breaths may look normal in depth — what is abnormal is how few of them there are. Because minute ventilation is rate × tidal volume, a slow rate can produce hypoventilation even when each breath looks adequate.',
      waveform: 'Normal-looking excursions separated by markedly prolonged flat baseline between breaths.',
      rate: 'Below the age-appropriate range — conventionally under about 12 breaths/min in an adult.',
      depth: 'Often relatively preserved; may be reduced if drive is depressed.',
      rhythm: 'Usually regular.',
      ieNote: 'Cycle lengthening falls mainly on the end-expiratory pause.',
      causes: [
        'Commonly associated with opioid or sedative–hypnotic effect.',
        'May be seen with central nervous system depression of any cause.',
        'Consider raised intracranial pressure, particularly alongside other neurological changes.',
        'May be a normal finding during sleep or in conditioned athletes at rest.',
        'May be seen in severe metabolic or endocrine derangement, and in hypothermia.'
      ],
      significance: 'A slow rate reduces minute ventilation and can lead to CO₂ retention and hypoxaemia. Trend it alongside level of consciousness, SpO₂ and where available end-tidal CO₂.',
      emsNote: 'A falling respiratory rate in a patient with depressed consciousness is an airway and ventilation problem before it is anything else. Be prepared to support ventilation.',
      keyDistinction: 'Bradypnea describes RATE only. It says nothing about depth — slow deep breathing and slow shallow breathing carry very different implications for minute ventilation.',
      defaults: { rate: 7, depth: 100, ie: 0.34, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    tachypnea: {
      key: 'tachypnea',
      name: 'Tachypnea',
      alsoKnownAs: null,
      category: 'rate',
      severity: 'caution',
      summary: 'Tachypnea: abnormally rapid breathing, frequently relatively shallow.',
      definition: 'Tachypnea is an abnormally rapid respiratory rate for the patient’s age. It is a statement about frequency alone. Breaths are often relatively shallow, which increases the proportion of each breath spent ventilating dead space.',
      waveform: 'Closely spaced, shortened cycles with little or no flat baseline between them; amplitude is often reduced.',
      rate: 'Above the age-appropriate range — conventionally over about 20 breaths/min in an adult.',
      depth: 'Frequently shallow, but may be normal or increased.',
      rhythm: 'Usually regular.',
      ieNote: 'Both phases shorten; the end-expiratory pause disappears first.',
      causes: [
        'Commonly associated with fever, pain and anxiety.',
        'May be seen in hypoxaemia and in a wide range of pulmonary disease.',
        'Consider sepsis — an increased respiratory rate is often the earliest abnormal vital sign.',
        'May represent respiratory compensation for metabolic acidosis.',
        'May be seen in anaemia, pulmonary embolism, and heart failure.'
      ],
      significance: 'One of the most sensitive early signs of deterioration, and one of the most frequently under-recorded. Rising rate with falling depth suggests fatigue and warrants close reassessment.',
      emsNote: 'Count the rate for a full interval rather than estimating it, and record depth and effort alongside it. A rising rate that later falls may signal exhaustion, not improvement.',
      keyDistinction: 'Tachypnea is FAST breathing. Hyperpnea is DEEP breathing. Hyperventilation is ventilation in excess of metabolic demand. The three are not synonyms and should not be used interchangeably.',
      defaults: { rate: 30, depth: 62, ie: 0.42, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    hyperpnea: {
      key: 'hyperpnea',
      name: 'Hyperpnea',
      alsoKnownAs: null,
      category: 'depth',
      severity: 'caution',
      summary: 'Hyperpnea: increased depth of breathing, and therefore increased ventilation, with rate normal or mildly increased.',
      definition: 'Hyperpnea is an increase in the depth of breathing, and hence in ventilation. It is classically an appropriate response to increased metabolic demand — exercise being the everyday example — where ventilation rises to match CO₂ production. The rate may be normal or only mildly increased; the depth is what changes.',
      waveform: 'Increased amplitude with a broadly normal cycle length; the trace is taller rather than more crowded.',
      rate: 'Normal or mildly increased.',
      depth: 'Clearly increased.',
      rhythm: 'Regular.',
      ieNote: 'Inspiratory time often lengthens slightly as tidal volume rises.',
      causes: [
        'Commonly associated with exercise and other states of increased metabolic demand.',
        'May be seen with fever and in metabolic acidosis as a compensatory response.',
        'Consider hypoxaemia and increased work of breathing.'
      ],
      significance: 'Increased ventilation can be an entirely appropriate physiological response. Its significance depends on whether it matches metabolic demand, so interpret it in clinical context rather than in isolation.',
      emsNote: null,
      keyDistinction: 'Do not equate hyperpnea with hyperventilation. Hyperpnea is increased depth/ventilation, often matched to demand; hyperventilation is ventilation exceeding metabolic demand, with the potential to lower PaCO₂.',
      defaults: { rate: 18, depth: 170, ie: 0.44, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    hypopnea: {
      key: 'hypopnea',
      name: 'Hypopnea',
      alsoKnownAs: 'Shallow breathing',
      category: 'depth',
      severity: 'caution',
      summary: 'Hypopnea: reduced depth of breathing, with the rate often near normal.',
      definition: 'Hypopnea is abnormally shallow breathing — a reduction in tidal excursion. Rate may be normal, which is precisely what makes it easy to miss: the count looks acceptable while minute ventilation falls. Shallow breaths also ventilate proportionally more dead space, so effective alveolar ventilation drops faster than tidal volume alone suggests.',
      waveform: 'Low-amplitude excursions at a near-normal spacing; the trace is flatter rather than slower.',
      rate: 'Often normal; may be increased or decreased.',
      depth: 'Reduced.',
      rhythm: 'Usually regular.',
      ieNote: 'Both phases shorten in proportion to the smaller excursion.',
      causes: [
        'Commonly associated with pain on breathing — rib fractures, pleuritic chest pain, abdominal pain.',
        'May be seen with sedatives, opioids and neuromuscular weakness.',
        'Consider chest-wall restriction, splinting, obesity hypoventilation and fatigue.'
      ],
      significance: 'A normal rate with reduced depth can still mean significant hypoventilation. Assess air movement and chest rise directly rather than inferring adequacy from the rate.',
      emsNote: 'Shallow breathing at a normal rate is a common reason inadequate ventilation is missed. Look and listen for actual air movement.',
      keyDistinction: 'Hypopnea is reduced DEPTH; bradypnea is reduced RATE. They can occur together or entirely separately.',
      defaults: { rate: 15, depth: 42, ie: 0.40, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    apnea: {
      key: 'apnea',
      name: 'Apnea',
      alsoKnownAs: null,
      category: 'periodic',
      severity: 'critical',
      summary: 'Apnea: temporary cessation of respiratory effort, seen as a flat interval with no excursions.',
      definition: 'Apnea is the absence of respiratory airflow or effort for a period of time. It may be central (no respiratory effort), obstructive (effort present but airflow blocked), or mixed. On a conceptual excursion trace, a central apnoeic interval is flat.',
      waveform: 'Normal breaths followed by a flat interval with no respiratory excursion, then resumption of breathing.',
      rate: 'Zero during the apnoeic interval; whatever the underlying rate is between episodes.',
      depth: 'No excursion during the apnoeic interval.',
      rhythm: 'Interrupted — may be periodic or isolated.',
      ieNote: 'Not applicable during the apnoeic interval.',
      causes: [
        'Commonly associated with obstructive sleep apnoea when recurrent during sleep.',
        'May be seen with central nervous system depression, opioid effect and post-ictal states.',
        'Consider airway obstruction, where effort continues without airflow.',
        'Consider apnoea of prematurity in the neonate.'
      ],
      significance: 'Prolonged or recurrent apnoea causes hypoxaemia and hypercapnia. Apnoea in an unresponsive patient is a resuscitation situation, not an observation.',
      emsNote: 'Apnoea in an unresponsive patient means assess responsiveness, airway, breathing and circulation and follow the applicable resuscitation protocol. Do not wait to see whether breathing resumes.',
      keyDistinction: 'A flat trace shows absent EFFORT. In obstructive apnoea, effort continues while airflow does not — so a chest-excursion trace and actual air movement are not the same measurement.',
      defaults: { rate: 14, depth: 100, ie: 0.40, apnea: 10, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'cluster', 'apnea']
    },

    cheyneStokes: {
      key: 'cheyneStokes',
      name: 'Cheyne–Stokes Respiration',
      alsoKnownAs: 'Cheyne–Stokes breathing (CSR)',
      category: 'periodic',
      severity: 'caution',
      summary: 'Cheyne–Stokes respiration: a smooth crescendo then decrescendo in depth, followed by apnoea, repeating cyclically.',
      definition: 'Cheyne–Stokes respiration is an organised, cyclic pattern in which breaths progressively increase in depth (crescendo), then progressively decrease (decrescendo), and are followed by a period of apnoea before the cycle repeats. The whole cycle typically lasts tens of seconds. Its defining feature is that it is ORGANISED and repeatable — you can predict what comes next.',
      waveform: 'Smoothly waxing then waning amplitude across the ventilation phase, then a clearly flat apnoeic interval, then the same sequence again.',
      rate: 'Rises through the crescendo and falls through the decrescendo; zero during apnoea.',
      depth: 'Cycles smoothly from shallow to deep and back to shallow.',
      rhythm: 'Irregular breath to breath but highly regular cycle to cycle.',
      ieNote: 'Both phases shorten as the crescendo deepens.',
      causes: [
        'Commonly associated with heart failure, particularly with reduced ejection fraction.',
        'May be seen in a range of central nervous system disorders and after stroke.',
        'Consider cerebral hypoperfusion and prolonged circulatory transit time.',
        'May occur at high altitude and during sleep in otherwise healthy people.',
        'May be seen in end-of-life states and with some medications or metabolic derangements.'
      ],
      significance: 'Reflects instability in the respiratory control loop — typically a delayed or over-responsive chemoreflex. Meaningful as clinical context, especially when new, but non-specific on its own.',
      emsNote: 'Pattern recognition can provide useful clinical context, but the waveform alone does not establish the underlying cause. Assess the patient, oxygenation and perfusion, and document the pattern and its cycle length.',
      keyDistinction: 'Cheyne–Stokes is ORGANISED and cyclic with a smooth crescendo–decrescendo. Biot’s / ataxic breathing is DISORGANISED and unpredictable. If you can anticipate the next breath, it is not ataxic.',
      defaults: { rate: 22, depth: 130, ie: 0.40, apnea: 12, cycle: 32, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'cycle', 'apnea']
    },

    periodic: {
      key: 'periodic',
      name: 'Periodic Breathing',
      alsoKnownAs: null,
      category: 'periodic',
      severity: 'caution',
      summary: 'Periodic breathing: recurrent waxing and waning of ventilation without a true apnoeic pause.',
      definition: 'Periodic breathing is an umbrella description for recurrent cyclical variation in ventilation. In this representation the depth waxes and wanes but never reaches true apnoea — the minimum is shallow rather than absent. The term overlaps with several named patterns and is used differently across sources, so it is worth stating which you mean.',
      waveform: 'Continuous cyclical waxing and waning of amplitude, with a shallow trough instead of a flat interval.',
      rate: 'Varies cyclically around a mean.',
      depth: 'Varies cyclically between shallow and normal or increased.',
      rhythm: 'Cyclically irregular but organised.',
      ieNote: 'Follows the amplitude cycle.',
      causes: [
        'Commonly described in neonates, particularly preterm infants, where brief periodic breathing can be a normal developmental finding.',
        'May be seen at altitude and during sleep onset in healthy adults.',
        'Consider heart failure and central control instability where cycles are pronounced or new.'
      ],
      significance: 'Significance depends heavily on the patient and the context — in a preterm neonate it may be developmental; in an adult with heart failure it may reflect control-loop instability. Describe what you see rather than reaching for a label.',
      emsNote: null,
      keyDistinction: 'Periodic breathing as represented here has NO true apnoea — ventilation drops to shallow, not absent. Cheyne–Stokes includes a definite apnoeic interval. Treating all periodic breathing as Cheyne–Stokes loses that distinction.',
      defaults: { rate: 20, depth: 110, ie: 0.40, apnea: 0, cycle: 24, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'cycle']
    },

    kussmaul: {
      key: 'kussmaul',
      name: 'Kussmaul Respiration',
      alsoKnownAs: 'Kussmaul breathing',
      category: 'metabolic',
      severity: 'critical',
      summary: 'Kussmaul respiration: deep, laboured, usually rapid and regular breathing, classically with severe metabolic acidosis.',
      definition: 'Kussmaul respiration is deep, laboured breathing that is usually rapid and characteristically regular. It represents vigorous respiratory compensation for a severe metabolic acidosis: ventilation increases to blow off CO₂ and raise pH. The striking feature at the bedside is the DEPTH and effort, not merely the rate.',
      waveform: 'Large, consistent, high-amplitude excursions at a regular spacing, with a slight end-inspiratory shoulder that reads as effortful.',
      rate: 'Usually increased, though the pattern can occur at a near-normal rate.',
      depth: 'Markedly increased — the defining feature.',
      rhythm: 'Regular.',
      ieNote: 'Inspiration is prolonged and effortful relative to quiet breathing.',
      causes: [
        'Classically associated with diabetic ketoacidosis.',
        'May be seen in other causes of severe metabolic acidosis, including lactic acidosis, uraemia/advanced renal failure and certain toxic ingestions.',
        'Consider it a compensatory response — the respiratory system is working on behalf of a metabolic problem.'
      ],
      significance: 'Suggests a significant acid–base disturbance and a patient working hard to compensate. Loss of that effort in a previously Kussmaul-breathing patient is an ominous change, not an improvement.',
      emsNote: 'Consider severe metabolic acidosis in the appropriate clinical context, check glucose, and assess the patient rather than relying on the respiratory pattern alone. Do not assume the breathing itself is the primary problem.',
      keyDistinction: 'Kussmaul describes a PATTERN — deep, laboured, usually rapid, regular — not simply "fast breathing". Tachypnea alone, especially shallow tachypnea, is not Kussmaul respiration.',
      defaults: { rate: 28, depth: 185, ie: 0.46, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    biot: {
      key: 'biot',
      name: 'Biot’s Respiration',
      alsoKnownAs: 'Biot’s / Ataxic breathing',
      category: 'irregular',
      severity: 'critical',
      summary: 'Biot’s respiration: clusters of quick breaths separated by irregular periods of apnoea.',
      definition: 'Biot’s respiration consists of groups or clusters of quick breaths of roughly similar depth, separated by irregular periods of apnoea. Unlike Cheyne–Stokes there is no smooth crescendo–decrescendo; breaths start and stop abruptly and the pauses are unpredictable in length. Terminology varies between sources — some use "Biot’s" and "ataxic breathing" interchangeably, others reserve Biot’s for the clustered form, which is the convention followed here.',
      waveform: 'Clusters of similar-looking breaths that begin and end abruptly, separated by flat pauses of varying length.',
      rate: 'Normal to rapid within a cluster; zero between clusters.',
      depth: 'Fairly uniform within a cluster; often shallow to normal.',
      rhythm: 'Irregular — cluster size and pause length both vary unpredictably.',
      ieNote: 'Breaths within a cluster are quick, with little end-expiratory pause.',
      causes: [
        'Commonly associated with medullary dysfunction and damage to the respiratory centres.',
        'May be seen with raised intracranial pressure.',
        'Consider severe neurological injury, meningitis and brainstem stroke.',
        'May be seen with opioid effect in some descriptions.'
      ],
      significance: 'Suggests dysfunction of the brainstem respiratory centres and is generally an ominous finding. Treat any newly irregular breathing pattern in a patient with neurological injury as significant.',
      emsNote: 'Clustered irregular breathing with pauses in a patient with altered mental status is a high-acuity finding. Support ventilation as needed, avoid hypoxaemia and hypotension, and reassess frequently.',
      keyDistinction: 'Biot’s is CLUSTERED with abrupt starts and stops. Cheyne–Stokes is a smooth crescendo–decrescendo. Terminology overlaps with ataxic breathing, so describe what you see as well as naming it.',
      defaults: { rate: 26, depth: 95, ie: 0.38, apnea: 7, cycle: 30, cluster: 4, jitter: 0.5 },
      controls: ['rate', 'depth', 'cluster', 'apnea', 'jitter']
    },

    ataxic: {
      key: 'ataxic',
      name: 'Ataxic Respiration',
      alsoKnownAs: 'Chaotic breathing',
      category: 'irregular',
      severity: 'critical',
      summary: 'Ataxic respiration: completely irregular depth and timing, with unpredictable pauses.',
      definition: 'Ataxic respiration is disorganised breathing in which both the depth and the timing of successive breaths vary unpredictably, with pauses appearing without pattern. There is no envelope, no cluster structure and no cycle you can anticipate. It is disorganisation itself that is the finding.',
      waveform: 'Successive breaths of differing amplitude and differing duration, interrupted by pauses of random length. No repeating structure.',
      rate: 'Varies unpredictably.',
      depth: 'Varies unpredictably.',
      rhythm: 'Chaotic.',
      ieNote: 'Varies breath to breath.',
      causes: [
        'Commonly associated with severe brainstem, particularly medullary, dysfunction.',
        'May be seen with raised intracranial pressure and impending herniation.',
        'Consider severe neurological injury and hypoxic–ischaemic brain injury.'
      ],
      significance: 'Generally indicates severe injury to the central respiratory controllers and often precedes respiratory arrest. Anticipate the need to support ventilation.',
      emsNote: 'Chaotic breathing in a patient with a depressed conscious level should be treated as impending respiratory failure. Prepare to assist ventilation and reassess continuously.',
      keyDistinction: 'Cheyne–Stokes is ORGANISED and cyclic; ataxic breathing is DISORGANISED. Biot’s sits between the two with a recognisable cluster structure. If you can predict the next breath, it is not ataxic.',
      defaults: { rate: 16, depth: 105, ie: 0.38, apnea: 6, cycle: 30, cluster: 4, jitter: 0.7 },
      controls: ['rate', 'depth', 'apnea', 'jitter']
    },

    apneustic: {
      key: 'apneustic',
      name: 'Apneustic Breathing',
      alsoKnownAs: 'Apneusis',
      category: 'neuro',
      severity: 'critical',
      summary: 'Apneustic breathing: prolonged inspiration with an inspiratory hold, followed by a short abrupt expiration.',
      definition: 'Apneustic breathing consists of a prolonged, cramped inspiratory effort held at or near full inspiration, followed by a brief, insufficient expiration. It reflects loss of the normal inspiratory off-switch, classically with injury at the level of the pons. Ventilation is inefficient because expiration is inadequate.',
      waveform: 'A slow rise to a sustained inspiratory plateau, then an abrupt short drop — a distinctly flat-topped, sawtooth-like appearance.',
      rate: 'Usually slow.',
      depth: 'Inspiration deep and sustained; expiration incomplete.',
      rhythm: 'Fairly regular but grossly abnormal in timing.',
      ieNote: 'Inspiratory time is markedly prolonged with an end-inspiratory hold; expiration is short.',
      causes: [
        'Commonly associated with pontine injury, classically involving the lower pons.',
        'May be seen with severe brainstem stroke, haemorrhage or trauma.',
        'Consider it in the context of other brainstem signs rather than in isolation.'
      ],
      significance: 'Indicates severe brainstem dysfunction. Ventilation is usually ineffective despite obvious inspiratory effort, so effort should not be mistaken for adequacy.',
      emsNote: 'Visible effort is not the same as effective ventilation. Assess actual air movement and be prepared to assist ventilation; this pattern accompanies severe neurological injury.',
      keyDistinction: 'The teaching feature is the inspiratory HOLD, not the rate. Kussmaul breathing is also deep but is regular and freely expires; apneustic breathing gets stuck at the top of inspiration.',
      defaults: { rate: 9, depth: 140, ie: 0.62, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    },

    agonal: {
      key: 'agonal',
      name: 'Agonal Respiration',
      alsoKnownAs: 'Agonal gasping / gasping respiration',
      category: 'irregular',
      severity: 'critical',
      summary: 'Agonal respiration: infrequent, irregular gasping efforts separated by long pauses — not effective breathing.',
      definition: 'Agonal respiration is a brainstem reflex seen in profound hypoxia and frequently in the first minutes of cardiac arrest. It produces occasional, abrupt, often noisy gasping efforts separated by long irregular pauses. It does not achieve meaningful ventilation and it is not a sign of recovery.',
      waveform: 'Mostly flat, interrupted by occasional large, abrupt, brief excursions at irregular intervals. The pauses dominate the trace.',
      rate: 'Very slow and irregular — often only a few efforts per minute, typically declining.',
      depth: 'Individual gasps may look large, but ventilation is ineffective.',
      rhythm: 'Grossly irregular.',
      ieNote: 'Abrupt, snatching inspiration with little organised expiration.',
      causes: [
        'Commonly seen in the early minutes of cardiac arrest.',
        'May be seen in profound hypoxaemia and severe shock.',
        'Consider it a terminal brainstem reflex accompanying severe cerebral hypoperfusion.'
      ],
      significance: 'A time-critical emergency finding. Agonal gasping is one of the most common reasons cardiac arrest is not recognised, and mistaking it for breathing delays chest compressions.',
      emsNote: 'Agonal gasping is NOT adequate effective breathing and must not be interpreted as adequate ventilation. In an unresponsive patient, assess responsiveness, airway, breathing and circulation and follow the applicable resuscitation protocol — occasional gasps in an unresponsive patient should be treated as cardiac arrest until proven otherwise.',
      keyDistinction: 'Agonal gasping is not slow breathing. Bradypnea has recognisable, organised breaths at a slow rate; agonal efforts are isolated, abrupt and ineffective, on a background of no breathing at all.',
      defaults: { rate: 6, depth: 118, ie: 0.22, apnea: 10, cycle: 30, cluster: 4, jitter: 0.6 },
      controls: ['rate', 'depth', 'jitter']
    },

    sighing: {
      key: 'sighing',
      name: 'Sighing Respiration',
      alsoKnownAs: 'Sigh breathing',
      category: 'periodic',
      severity: 'normal',
      summary: 'Sighing respiration: mostly regular breathing interrupted by an occasional markedly deeper breath.',
      definition: 'Sighing respiration is otherwise regular breathing punctuated by intermittent breaths of noticeably greater depth. Occasional sighs are a normal physiological event that helps recruit alveoli. Frequent, repeated sighing can instead be a behavioural or anxiety-related pattern, and very frequent sighing is worth noting.',
      waveform: 'A run of regular, consistent excursions with every few breaths replaced by a much taller one, then the regular pattern resumes.',
      rate: 'Normal baseline rate.',
      depth: 'Normal baseline depth with intermittent markedly increased excursions.',
      rhythm: 'Regular, with intermittent interruption.',
      ieNote: 'The sigh has a longer inspiratory time than the surrounding breaths.',
      causes: [
        'Occasional sighing is a normal physiological finding contributing to alveolar recruitment.',
        'Commonly associated with anxiety and emotional distress when frequent and repetitive.',
        'May be seen in sighing dyspnoea, where patients describe an inability to get a satisfying breath.'
      ],
      significance: 'Usually benign, and the pattern itself rarely needs intervention. Frequent sighing accompanied by dyspnoea deserves assessment rather than dismissal, since anxiety and organic disease can coexist.',
      emsNote: null,
      keyDistinction: 'A sigh is a single interposed deep breath on a NORMAL background. Hyperpnea is sustained increased depth across all breaths, not an occasional one.',
      defaults: { rate: 15, depth: 100, ie: 0.40, apnea: 8, cycle: 30, cluster: 6, jitter: 0.4 },
      controls: ['rate', 'depth', 'cluster']
    },

    paradoxical: {
      key: 'paradoxical',
      name: 'Paradoxical Breathing',
      alsoKnownAs: 'See-saw respiration',
      category: 'mechanical',
      severity: 'critical',
      summary: 'Paradoxical breathing: chest and abdomen move in opposite directions during inspiration instead of together.',
      definition: 'Paradoxical breathing is an abnormality of chest-wall MECHANICS rather than of rate or depth. Normally the chest and abdomen move outward together during inspiration. In paradoxical breathing one compartment moves inward while the other moves outward, producing a see-saw appearance. A single scalar waveform cannot represent this, so both compartments are shown separately.',
      waveform: 'Two traces moving in opposite directions: as the chest excursion rises the abdominal excursion falls, and vice versa. The overall rate may look unremarkable.',
      rate: 'Variable — often increased, but the rate is not the abnormality.',
      depth: 'Effective tidal volume is reduced despite visible effort.',
      rhythm: 'May be regular; the abnormality is spatial rather than temporal.',
      ieNote: 'Timing may look normal while the mechanics are grossly abnormal.',
      causes: [
        'Commonly associated with respiratory muscle fatigue and impending respiratory failure.',
        'May be seen with flail chest and other severe chest-wall injury.',
        'Consider diaphragmatic paralysis, high spinal cord injury and severe neuromuscular disease.',
        'May be seen in infants with significant upper airway obstruction, whose compliant chest wall retracts on inspiration.'
      ],
      significance: 'A red-flag sign of failing respiratory mechanics, often appearing before the rate or SpO₂ change dramatically. In a fatiguing patient it suggests decompensation is close.',
      emsNote: 'See-saw chest and abdominal movement suggests failing mechanics and impending respiratory failure. Assess air movement directly, be prepared to assist ventilation early, and reassess frequently rather than waiting for saturations to fall.',
      keyDistinction: 'This is a MECHANICAL abnormality, visible in how the chest and abdomen move relative to each other. Rate and depth can both look acceptable while mechanics are failing, so it will be missed if you only count breaths.',
      defaults: { rate: 26, depth: 95, ie: 0.40, apnea: 8, cycle: 30, cluster: 4, jitter: 0.4 },
      controls: ['rate', 'depth', 'ie']
    }
  };

  // Display order: normal first, then rate, depth, cessation, periodic,
  // metabolic, irregular, neurologic, mechanical.
  const PATTERN_KEYS = [
    'eupnea',
    'bradypnea', 'tachypnea',
    'hyperpnea', 'hypopnea',
    'apnea', 'cheyneStokes', 'periodic', 'sighing',
    'kussmaul',
    'biot', 'ataxic', 'agonal',
    'apneustic',
    'paradoxical'
  ];

  // ── CONTROL DESCRIPTORS ──────────────────────────────────────
  // Range metadata lives with the engine so the UI cannot drift out of step
  // with what the maths can safely render.
  const CONTROLS = {
    rate:    { id: 'rate',    label: 'Respiratory rate', unit: '/min', min: 4,  max: 60,  step: 1,    fmt: v => v + ' /min' },
    depth:   { id: 'depth',   label: 'Depth',            unit: '%',    min: 25, max: 200, step: 5,    fmt: v => v + ' %' },
    ie:      { id: 'ie',      label: 'Inspiratory time', unit: '',     min: 0.20, max: 0.75, step: 0.01,
               fmt: v => 'I:E ≈ 1:' + (((1 - v) / v) || 0).toFixed(1) },
    apnea:   { id: 'apnea',   label: 'Apnea duration',   unit: 's',    min: 0,  max: 30,  step: 1,    fmt: v => v + ' s' },
    cycle:   { id: 'cycle',   label: 'Cycle duration',   unit: 's',    min: 10, max: 90,  step: 2,    fmt: v => v + ' s' },
    cluster: { id: 'cluster', label: 'Breaths per group', unit: '',    min: 2,  max: 12,  step: 1,    fmt: v => v + ' breaths' },
    jitter:  { id: 'jitter',  label: 'Irregularity',     unit: '',     min: 0,  max: 1,   step: 0.05, fmt: v => Math.round(v * 100) + ' %' }
  };

  // Per-pattern control label overrides, where the generic label would mislead.
  const CONTROL_LABELS = {
    apnea:       { cluster: 'Breaths before apnea' },
    sighing:     { cluster: 'Breaths between sighs' },
    biot:        { cluster: 'Breaths per cluster', apnea: 'Pause duration' },
    agonal:      { rate: 'Gasp frequency', depth: 'Gasp amplitude', jitter: 'Pause variability' },
    cheyneStokes:{ cycle: 'Ventilation phase', rate: 'Peak rate', depth: 'Peak depth' },
    periodic:    { cycle: 'Cycle duration' },
    ataxic:      { apnea: 'Max pause length' },
    apneustic:   { ie: 'Inspiratory hold' }
  };

  // ── PUBLIC API ───────────────────────────────────────────────
  return {
    generateSample,
    generateAbdomenSample,
    createState,
    resolveParams: resolve,
    PATTERNS,
    PATTERN_KEYS,
    CATEGORIES,
    CONTROLS,
    CONTROL_LABELS,
    PARAM_KEYS,
    // Shape helpers, exposed for the comparison renderer and for tests
    breathShape,
    activeFrac,
    smoothstep,
    hash01
  };

})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RespEngine;
}
