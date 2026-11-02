// Runs a range of batches in order: node run-all.mjs B01 B03
// Each batch runs Pro prompts, then 2.1 prompts. A limit on one model only stops that model.
// Any other stop ends the run so the cause can be looked at.
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const ROOT = 'D:/Apps/SmartCare/.google-flow';
const [from, to] = process.argv.slice(2);
const names = [...new Set(JSON.parse(readFileSync(`${ROOT}/jobs.json`, 'utf8')).map(j => j.batch))]
  .filter(b => b >= from && b <= to && b !== 'P00').sort();
const MODELS = ['Nano Banana Pro', 'Nano Banana 2.1'];
const limited = new Set();

outer: for (const batch of names) {
  for (const model of MODELS) {
    if (limited.has(model)) { console.log(`${batch} ${model}: skipped, at limit`); continue; }
    const r = spawnSync('node', [`${ROOT}/run-batch.mjs`, '--batch', batch, '--model', model], { encoding: 'utf8', timeout: 1_800_000 });
    const lines = (r.stdout || '').trim().split('\n');
    lines.slice(0, -1).forEach(l => console.log(`${batch} ${l}`));
    let res = null;
    try { res = JSON.parse(lines[lines.length - 1]); } catch { /* handled below */ }
    if (!res) { console.log(`STOP ${batch} ${model}: runner gave no result. ${(r.stderr || '').slice(0, 400)}`); break outer; }
    console.log(`${batch} ${model}: sent ${res.sent}, saved ${res.saved}, stop ${res.stop}`);
    if (res.stop && res.stop.startsWith('limit')) {
      limited.add(model);
      if (limited.size === MODELS.length) { console.log('STOP both models at limit'); break outer; }
    } else if (res.stop) { console.log(`STOP ${batch} ${model}: ${res.stop}`); break outer; }
  }
  await new Promise(res => setTimeout(res, 15_000));
}
console.log('DONE ' + JSON.stringify({ limited: [...limited] }));
process.exit(0);
