// Runs Flow jobs one prompt at a time, so every image belongs to exactly one prompt.
//   node run-batch.mjs --batch P00 --model "Nano Banana Pro" [--ids 1,12] [--max 50]
// Skips ids that already have a result, logs to run-log.jsonl, stops at a limit notice.
import { createRequire } from 'node:module';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import * as path from 'node:path';

const SERVER = 'C:/Users/Solim/.nano-banana-mcp/server/';
const load = f => import(pathToFileURL(SERVER + f).href);
const { getFlowTab } = await load('dist/browser.js');
const { generateImages, snapshotMedia } = await load('dist/generate.js');
const { fetchMedia } = await load('dist/download.js');
const { writeImage } = await load('dist/image.js');
const { listLibrary } = await load('dist/library.js');

const ROOT = 'D:/Apps/SmartCare/.google-flow';
const arg = n => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : null; };
const batchArg = arg('batch'), modelArg = arg('model'), idsArg = arg('ids'), max = +(arg('max') || 999);
const OUTPUTS = 2, LOG = path.join(ROOT, 'run-log.jsonl');
const log = o => appendFileSync(LOG, JSON.stringify({ t: new Date().toISOString(), ...o }) + '\n');
const sleep = ms => new Promise(r => setTimeout(r, ms));

const controls = page => page.$$eval('button, [role="button"]', els => els.filter(e => e.offsetParent !== null).map(e => ({
  text: (e.innerText || '').trim().replace(/\s+/g, ' '), pressed: e.getAttribute('aria-pressed') || e.getAttribute('aria-checked') || e.getAttribute('aria-selected') || '',
  cx: e.getBoundingClientRect().x + e.getBoundingClientRect().width / 2, cy: e.getBoundingClientRect().y + e.getBoundingClientRect().height / 2,
})));
const click = async (page, c) => { await page.mouse.click(c.cx, c.cy); await page.waitForTimeout(700); };

// Never send anything unless the composer is on an image model with the Agent off.
async function prepare(page, model) {
  let cs = await controls(page);
  const tip = cs.find(c => /^check Got it$/.test(c.text));
  if (tip) { await click(page, tip); cs = await controls(page); }
  const agent = cs.find(c => c.text === 'Agent');
  if (agent && agent.pressed === 'true') { await click(page, agent); cs = await controls(page); }
  let trig = cs.find(c => /crop_[0-9a-z]/.test(c.text) && /(^|\s)x\d(\s|$)/.test(c.text));
  if (!trig) throw new Error('composer summary button not found: ' + cs.slice(-8).map(c => c.text).join(' | '));
  if (!trig.text.includes('Nano Banana')) throw new Error('not on an image model: ' + trig.text);
  if (trig.text.includes(model)) return trig.text;

  await click(page, trig);
  cs = await controls(page);
  const picker = cs.find(c => /Nano Banana/.test(c.text) && /arrow_drop_down/.test(c.text));
  if (!picker) throw new Error('model picker not found');
  await click(page, picker);
  const opt = page.locator('[role="menuitem"], [role="option"], [role="menuitemradio"], button').filter({ hasText: new RegExp(model + '$|' + model + '\\s') }).last();
  if (!(await opt.count())) throw new Error('model option not found: ' + model);
  await opt.click();
  await page.waitForTimeout(800);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);
  cs = await controls(page);
  trig = cs.find(c => /crop_[0-9a-z]/.test(c.text) && /(^|\s)x\d(\s|$)/.test(c.text));
  if (!trig || !trig.text.includes(model)) throw new Error('model did not switch: ' + (trig && trig.text));
  return trig.text;
}

const LIMIT_RE = /(daily|usage|generation)\s+limit|limit (reached|for)|reached your|try again (later|tomorrow)|too many requests|quota/i;
const BLOCK_RE = /violat|policy|safety|unable to generate|couldn'?t generate|failed to generate|might not be appropriate|prominent people|minors/i;
const pageNotice = async page => {
  const t = await page.evaluate(() => [...document.querySelectorAll('[role="alert"], [role="status"], [class*="snack"], [class*="toast"], [class*="error"], [class*="fail"]')].map(e => e.innerText).join(' | ').slice(0, 500)).catch(() => '');
  return t.trim();
};

const jobs = JSON.parse(readFileSync(path.join(ROOT, 'jobs.json'), 'utf8'))
  .filter(j => (!batchArg || j.batch === batchArg) && (!modelArg || j.model === modelArg) && !j.keep && (!idsArg || idsArg.split(',').includes(String(j.id))));

const logRows = () => JSON.parse('[' + (existsSync(LOG) ? readFileSync(LOG, 'utf8').trim().split('\n').filter(Boolean).join(',') : '') + ']');
const done = id => logRows().some(r => r.id === id && (r.ok || r.blocked));

// --queue priority.json runs jobs in that order across batches. Reruns are listed in
// its "reruns" array and count as done only after a second successful run.
const queueArg = arg('queue');
if (queueArg) {
  const q = JSON.parse(readFileSync(path.join(ROOT, queueArg), 'utf8'));
  const byId = new Map(jobs.map(j => [j.id, j]));
  const seen = new Set(q.order);
  if (seen.size !== q.order.length) throw new Error('duplicate id in queue');
  for (const id of q.order) if (!byId.has(id)) throw new Error('queue id is not a Flow job: ' + id);
  const rest = jobs.filter(j => !seen.has(j.id)).map(j => j.id);
  jobs.length = 0;
  for (const id of [...q.order, ...rest]) jobs.push({ ...byId.get(id), rerun: (q.reruns || []).includes(id) });
}
const limited = new Set();
const isDone = job => job.rerun ? logRows().filter(r => r.id === job.id && r.ok).length >= 2 : done(job.id);
const nextLetter = (dir, id) => 'abcdefgh'.split('').filter(l => !existsSync(path.join(dir, `${id}-${l}.jpg`)));

const { page, projectId } = await getFlowTab();
await page.bringToFront();
let sent = 0, stop = null, failsInRow = 0;
const saved = [];

for (const job of jobs) {
  if (sent >= max) { stop = 'max'; break; }
  if (isDone(job) && !idsArg) continue;
  if (limited.has(job.model)) continue;
  if (queueArg && sent && sent % 8 === 0) await sleep(15_000); // a pause between batches of 8
  try {
    const summary = await prepare(page, job.model);
    const before = new Set((await snapshotMedia(page)).keys());
    const t0 = Date.now();
    let images = [], err = null;
    try {
      ({ images } = await generateImages({ prompt: job.prompt, aspect: job.aspect, count: OUTPUTS, timeoutMs: 150_000 }));
    } catch (e) { err = e.message; }

    // A second output can land after the tool stops watching. Wait for it here, or it
    // would be counted as a result of the next prompt.
    const have = new Set(images.map(i => i.mediaId));
    for (let i = 0; i < 40 && images.length && have.size < OUTPUTS; i++) {
      await sleep(1500);
      for (const [id, m] of await snapshotMedia(page)) {
        if (!before.has(id) && !have.has(id) && m.width > 200) { have.add(id); images.push({ mediaId: id, signedUrl: m.src, width: m.width, height: m.height }); }
      }
    }

    sent++;
    if (!images.length) {
      const notice = await pageNotice(page);
      const body = await page.evaluate(() => document.body.innerText).catch(() => '');
      const hit = (body.match(LIMIT_RE) || body.match(BLOCK_RE) || [''])[0];
      const text = `${err || ''} ${notice} ${hit}`;
      if (++failsInRow >= 3) { log({ id: job.id, batch: job.batch, model: job.model, ok: false, text: text.slice(0, 400) }); stop = 'repeated failures: ' + text.slice(0, 200); break; }
      if (LIMIT_RE.test(text)) { log({ id: job.id, batch: job.batch, model: job.model, limit: true, text });
        if (queueArg) {
          console.log(`LIMIT ${job.model}: ${text.slice(0, 160)}`);
          limited.add(job.model); failsInRow = 0;
          if (limited.size === 2) { stop = 'limit: both models'; break; }
          continue;
        }
        stop = 'limit: ' + text.slice(0, 200); break; }
      const blocked = BLOCK_RE.test(text);
      log({ id: job.id, batch: job.batch, model: job.model, blocked, ok: false, text: text.slice(0, 400) });
      console.log(`#${job.id} ${blocked ? 'BLOCKED' : 'FAILED'}: ${text.slice(0, 160)}`);
      continue;
    }

    failsInRow = 0;
    const dir = path.join(ROOT, 'incoming', job.batch);
    mkdirSync(dir, { recursive: true });
    const files = [];
    const letters = nextLetter(dir, job.id); // reruns keep the earlier images
    for (const [i, img] of images.entries()) {
      const out = path.join(dir, `${job.id}-${letters[i]}.jpg`);
      await writeImage(await fetchMedia(page, img.mediaId, img.signedUrl), out);
      files.push(out);
    }
    log({ id: job.id, batch: job.batch, model: job.model, summary, ok: true, secs: Math.round((Date.now() - t0) / 1000), media: images.map(i => i.mediaId), files });
    saved.push({ id: job.id, media: images.map(i => i.mediaId), prompt: job.prompt });
    console.log(`#${job.id} ok, ${images.length} images, ${Math.round((Date.now() - t0) / 1000)}s`);
    await sleep(2000);
  } catch (e) {
    log({ id: job.id, batch: job.batch, model: job.model, ok: false, text: e.message });
    console.log(`#${job.id} ERROR: ${e.message}`);
    stop = 'error: ' + e.message.slice(0, 200);
    break;
  }
}

// Independent check: Flow's own record of which prompt made each image, where available.
let verified = 'skipped';
try {
  if (saved.length && projectId) {
    const lib = new Map((await listLibrary(page, projectId)).map(i => [i.mediaId, i.prompt]));
    let good = 0, bad = 0, unknown = 0;
    for (const s of saved) for (const m of s.media) {
      if (!lib.has(m) || !lib.get(m)) unknown++;
      else if (lib.get(m).trim() === s.prompt.trim()) good++;
      else { bad++; log({ id: s.id, mismatch: m }); console.log(`MISMATCH #${s.id} ${m}`); }
    }
    verified = `match ${good}, mismatch ${bad}, unknown ${unknown}`;
  }
} catch (e) { verified = 'unavailable: ' + e.message.slice(0, 100); }

console.log(JSON.stringify({ batch: batchArg, model: modelArg, sent, saved: saved.length, stop, verified }));
process.exit(0);
