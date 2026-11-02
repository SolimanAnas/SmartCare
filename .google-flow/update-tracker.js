// Fills tracker.csv status and notes from run-log.jsonl and picks.json.
// Run it after generate-batches.js, which resets the tracker. Sign-off values are kept out of here on purpose.
const fs = require('fs');
const ROOT = __dirname;
const parseLine = l => l.match(/("([^"]|"")*"|[^,]*)(,|$)/g).slice(0, -1).map(c => c.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'));
const quote = c => `"${String(c).replace(/"/g, '""')}"`;
const log = fs.readFileSync(`${ROOT}/run-log.jsonl`, 'utf8').trim().split('\n').map(JSON.parse);
const { picks, notes, needs_pro_rerun: rerun } = JSON.parse(fs.readFileSync(`${ROOT}/picks.json`, 'utf8'));
const generated = new Set(log.filter(r => r.ok).map(r => r.id));

const rows = fs.readFileSync(`${ROOT}/tracker.csv`, 'utf8').trim().split(/\r?\n/);
const head = parseLine(rows[0]);
const [iId, iTrack, iStatus, iNotes] = ['id', 'track', 'status', 'notes'].map(n => head.indexOf(n));
const counts = {};
const out = [rows[0]];
for (const row of rows.slice(1)) {
  const c = parseLine(row);
  const id = c[iId];
  if (c[iTrack].startsWith('flow')) {
    c[iStatus] = rerun[id] ? 'rerun-pro'
      : picks[id] === 'kept' ? 'picked'
      : picks[id] ? 'picked'
      : generated.has(+id) ? 'generated'
      : 'todo';
    const pick = picks[id] && picks[id] !== 'kept' ? `Pick ${id}-${picks[id]}.` : '';
    c[iNotes] = [pick, rerun[id] || notes[id] || ''].filter(Boolean).join(' ');
  }
  counts[c[iStatus]] = (counts[c[iStatus]] || 0) + 1;
  out.push(c.map(quote).join(','));
}
fs.writeFileSync(`${ROOT}/tracker.csv`, out.join('\n') + '\n');
console.log(counts);
