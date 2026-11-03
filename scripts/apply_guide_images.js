#!/usr/bin/env node
/*
 * Writes the illustrations listed in data/guide-images.json into the guides in
 * content/cN.js and content/formulary.js. Safe to re-run: it removes the
 * figures it finds, then adds the current list.
 *
 * Usage: node scripts/apply_guide_images.js && node scripts/split_content.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const { figures } = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/guide-images.json'), 'utf8'));
const problems = [];

function load(file) {
    const src = fs.readFileSync(file, 'utf8');
    const sandbox = { window: {} };
    vm.runInNewContext(src.replace(/^﻿/, ''), sandbox);
    return { src, data: sandbox.window.CPG_DATA };
}

const figure = (f, withPos) => ({
    src: f.src,
    alt: f.alt,
    ...(f.caption ? { caption: f.caption } : {}),
    w: f.w,
    h: f.h,
    ...(withPos ? { pos: f.pos || 'after' } : {}),
});

// images.md shortens a few titles, for example "Keep warm" for "Keep warm (36.5–37.5 °C)".
const findSection = (guide, title) => guide.sections.find(s => s.title === title)
    || guide.sections.find(s => s.title.startsWith(title));

const stripFigures = (o) => JSON.parse(JSON.stringify(o, (k, v) => (k === 'figures' ? undefined : v)));

// Where in the section a figure goes. A step, path or group that can't be found
// is reported, not silently moved.
function target(section, f) {
    if (f.step) {
        const item = (section.steps || [])[f.step - (section.start || 1)];
        return item ? { node: item } : null;
    }
    if (f.path) {
        const item = (section.paths || []).find(p => p.title === f.path);
        return item ? { node: item } : null;
    }
    if (f.group) {
        const item = (section.groups || []).find(g => g.title === f.group);
        return item ? { node: item } : null;
    }
    return { node: section, withPos: true };
}

function place(section, f, label) {
    const t = target(section, f);
    if (!t) { problems.push(`#${f.id} ${label}: no step, path or group in "${f.section}"`); return; }
    (t.node.figures = t.node.figures || []).push(figure(f, t.withPos));
}

// ── Chapters: these files are exactly JSON.stringify(data, null, 2) with CRLF ──
const chapterIds = [...new Set(figures.filter(f => f.topic !== 'formulary').map(f => f.topic.match(/^c\d+/)[0]))];
for (const c of chapterIds) {
    const file = path.join(CONTENT, `${c}.js`);
    const { src, data } = load(file);
    const start = src.indexOf('window.CPG_DATA = ');
    const clean = stripFigures(data);
    for (const f of figures.filter(x => x.topic !== 'formulary' && x.topic.match(/^c\d+/)[0] === c)) {
        const topic = clean.sections.find(s => s.id === f.topic);
        const section = topic && topic.guide && findSection(topic.guide, f.section);
        if (!section) { problems.push(`#${f.id} ${f.topic}: no section "${f.section}"`); continue; }
        place(section, f, f.topic);
    }
    const body = JSON.stringify(clean, null, 2).replace(/\n/g, '\r\n');
    fs.writeFileSync(file, `${src.slice(0, start)}window.CPG_DATA = ${body};\r\n`);
}

// ── Formulary: hand-formatted, so only the guide objects are replaced as text ──
{
    const file = path.join(CONTENT, 'formulary.js');
    let { src, data } = load(file);
    // Remove any figures from an earlier run.
    src = src.replace(/,?\r?\n[ ]*"figures": \[[\s\S]*?\r?\n[ ]*\](?=,?\r?\n)/g, '');
    data = stripFigures(data);
    for (const f of figures.filter(x => x.topic === 'formulary')) {
        const topic = f.drug === 'overview'
            ? data.sections.find(s => s.id === 'formulary-overview')
            : data.sections.find(s => s.shortTitle === f.drug);
        const section = topic && topic.guide && topic.guide.sections.find(s => s.title === f.section);
        if (!section) { problems.push(`#${f.id} formulary: no section "${f.section}" for ${f.drug}`); continue; }
        // Formulary placements are all section-level ("beside", "in the row"), so
        // each is inserted directly after that section's title line.
        const anchorDrug = f.drug === 'overview' ? 'id: "formulary-overview"' : `shortTitle: "${f.drug}"`;
        const from = src.indexOf(anchorDrug);
        const titleRe = new RegExp(`\\r?\\n([ ]*)"title": ${JSON.stringify(f.section).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?`);
        const rest = src.slice(from);
        const m = from < 0 ? null : rest.match(titleRe);
        if (!m) { problems.push(`#${f.id} formulary: title line not found for ${f.drug} / ${f.section}`); continue; }
        const pad = m[1];
        const json = JSON.stringify([figure(f, true)], null, 2).replace(/\n/g, `\r\n${pad}`);
        const at = from + m.index + m[0].length;
        const comma = m[0].endsWith(',') ? '' : ',';
        const tail = m[0].endsWith(',') ? ',' : '';
        src = `${src.slice(0, at)}${comma}\r\n${pad}"figures": ${json}${tail}${src.slice(at)}`;
    }
    fs.writeFileSync(file, src);
    load(file); // throws if the edit broke the file
}

console.log(`${figures.length - problems.length} of ${figures.length} figures placed`);
if (problems.length) {
    console.log(problems.join('\n'));
    process.exitCode = 1;
}
