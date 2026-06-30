/* ========== c-index.js – Full Curriculum Index ========== */
window.CPG_DATA = {
    id: "c-index",
    title: "Table of Contents",
    shortTitle: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#clipboard-list"/></svg> Index',
    sections: [
        {
            id: "c-index-main",
            shortTitle: "Complete Index",
            summary: generateIndexHTML(),
            quiz: [],
            flashcards: [],
            critical: []
        }
    ]
};

function generateIndexHTML() {
    /* ──────────────────────────────────────────────────────────────
       Curriculum data — chapters with their subchapters (topics).
       Mirrors the authored sections in content/cN.js. Subchapter ids
       deep-link via cN.html?view=summary&section=<id> (see app.js boot).
       ────────────────────────────────────────────────────────────── */
    const INDEX_DATA = [
        { id:"c1",  num:"1",  file:"c1",  title:"Foundations of Emergency Care", icon:"shield",      accent:"var(--accent-universal)", sections:[
            ["c1s1","1.1 EMS, Systems & Professionalism"],
            ["c1s3","1.2 Workforce Safety & Wellness"],
            ["c1s4","1.3 Infection Prevention & PPE"],
            ["c1s5","1.4 Medical, Legal & Ethical Issues"],
            ["c1s6","1.5 Consent, Refusal & Advance Directives"],
            ["c1s7","1.6 Communication & Handoff"],
            ["c1s8","1.7 Documentation & the Patient Care Report"],
            ["c1s9","1.8 Medical Terminology"],
            ["c1s10","1.9 Lifting, Moving & Positioning"]
        ]},
        { id:"c2",  num:"2",  file:"c2",  title:"Patient Assessment", icon:"search",          accent:"var(--accent-universal)", sections:[
            ["c2s1","2.1 Anatomy & Physiology Essentials"],
            ["c2s2","2.2 Pathophysiology of Perfusion & Shock"],
            ["c2s3","2.3 Scene Size-up & Safety"],
            ["c2s4","2.4 Primary Assessment (XABCDE)"],
            ["c2s5","2.5 Vital Signs"],
            ["c2s6","2.6 Monitoring Devices"],
            ["c2s7","2.7 History Taking (SAMPLE / OPQRST)"],
            ["c2s8","2.8 Secondary Assessment"],
            ["c2s9","2.9 Reassessment & Trending"],
            ["c2s10","2.10 Clinical Decision Making"],
            ["c2s11","2.11 Field Triage (START / SALT)"]
        ]},
        { id:"c3",  num:"3",  file:"c3",  title:"Airway & Ventilation", icon:"wind",          accent:"var(--accent-airway)", sections:[
            ["c3s1","3.1 Airway Anatomy & Physiology"],
            ["c3s2","3.2 Airway Assessment"],
            ["c3s3","3.3 Foreign Body Airway Obstruction (FBAO)"],
            ["c3s4","3.4 Airway Adjuncts"],
            ["c3s5","3.5 Oxygen Therapy"],
            ["c3s6","3.6 Ventilation"],
            ["c3s7","3.7 Suction"],
            ["c3s8","3.8 Advanced Airways"],
            ["c3s9","3.9 Respiratory Failure"]
        ]},
        { id:"c4",  num:"4",  file:"c4",  title:"Cardiovascular & Resuscitation", icon:"heart", accent:"var(--accent-cardio)", sections:[
            ["c4s1","4.1 Cardiac Anatomy & Physiology"],
            ["c4s2","4.2 Chest Pain / Acute Coronary Syndrome"],
            ["c4s3","4.3 Heart Failure & Pulmonary Edema"],
            ["c4s4","4.4 Hypertensive Emergencies"],
            ["c4s5","4.5 Dysrhythmia Recognition"],
            ["c4s6","4.6 ECG Basics & 12-Lead / STEMI"],
            ["c4s7","4.7 Cardiac Arrest & High-Quality CPR"],
            ["c4s8","4.8 AED & Defibrillation"],
            ["c4s9","4.9 Post-Cardiac-Arrest (ROSC) Care"],
            ["c4s10","4.10 Shock & Hemorrhage"],
            ["c4s11","4.11 Fluid Resuscitation"],
            ["c4s12","4.12 Pediatric Cardiac Arrest & BLS"],
            ["c4s13","4.13 Termination of Resuscitation & Verification of Death"]
        ]},
        { id:"c5",  num:"5",  file:"c5",  title:"Medical Emergencies", icon:"stethoscope",    accent:"var(--accent-medical)", sections:[
            ["c5s1","5.1 Respiratory Emergencies"],
            ["c5s2","5.2 Neurological Emergencies"],
            ["c5s3","5.3 Endocrine Emergencies"],
            ["c5s4","5.4 Allergy & Anaphylaxis"],
            ["c5s5","5.5 Toxicology & Overdose"],
            ["c5s6","5.6 Gastrointestinal & Abdominal"],
            ["c5s7","5.7 Genitourinary & Renal"],
            ["c5s8","5.8 Hematologic Emergencies"],
            ["c5s9","5.9 Infectious Disease & Sepsis"],
            ["c5s10","5.10 Behavioral & Psychiatric"],
            ["c5s11","5.11 Pain Management"]
        ]},
        { id:"c6",  num:"6",  file:"c6",  title:"Trauma Emergencies", icon:"bandage",         accent:"var(--accent-cardio)", sections:[
            ["c6s1","6.1 Trauma Systems & Kinematics"],
            ["c6s2","6.2 Bleeding Control"],
            ["c6s3","6.3 Shock in Trauma"],
            ["c6s4","6.4 Soft-Tissue Injuries & Wound Care"],
            ["c6s5","6.5 Burns"],
            ["c6s6","6.6 Head & Brain Injury"],
            ["c6s7","6.7 Spine & Motion Restriction"],
            ["c6s8","6.8 Chest Trauma"],
            ["c6s9","6.9 Abdominal & Pelvic Trauma"],
            ["c6s10","6.10 Musculoskeletal Injuries & Splinting"],
            ["c6s11","6.11 Multisystem Trauma & Pregnancy"]
        ]},
        { id:"c7",  num:"7",  file:"c7",  title:"Special Populations", icon:"heart-pulse",     accent:"var(--accent-pediatric)", sections:[
            ["c7s1","7.1 Obstetrics & Childbirth"],
            ["c7s2","7.2 Gynecologic Emergencies"],
            ["c7s3","7.3 Neonatal Resuscitation"],
            ["c7s4","7.4 Pediatric Assessment & Emergencies"],
            ["c7s5","7.5 Child Abuse & Neglect Recognition"],
            ["c7s6","7.6 Geriatrics"],
            ["c7s7","7.7 Patients with Special Challenges"],
            ["c7s8","7.8 Bariatric Considerations"]
        ]},
        { id:"c8",  num:"8",  file:"c8",  title:"Environmental & Disaster Medicine", icon:"thermometer", accent:"var(--accent-environmental)", sections:[
            ["c8s1","8.1 Heat-Related Illness"],
            ["c8s2","8.2 Cold Exposure & Hypothermia"],
            ["c8s3","8.3 Drowning & Submersion Injury"],
            ["c8s4","8.4 Diving & Altitude Emergencies"],
            ["c8s5","8.5 Bites, Stings & Envenomation"],
            ["c8s6","8.6 Hazardous Materials & Radiation"],
            ["c8s7","8.7 CBRNE & Terrorism Response"],
            ["c8s8","8.8 Mass-Casualty Incidents & Triage"],
            ["c8s9","8.9 Incident Command System (ICS)"]
        ]},
        { id:"c9",  num:"9",  file:"c9",  title:"Emergency Pharmacology", icon:"pill",         accent:"var(--accent-medical)", sections:[
            ["c9s1","9.1 Principles of Pharmacology & Drug Classes"],
            ["c9s2","9.2 Routes of Administration"],
            ["c9s3","9.3 Rights of Medication Administration"],
            ["c9s4","9.4 Dose & Simple Calculations"],
            ["c9s5","9.5 Emergency Drug Formulary"],
            ["c9s6","9.6 Medication-Assisted Treatment"],
            ["c9s7","9.7 Medication Safety & Error Prevention"]
        ]},
        { id:"c10", num:"10", file:"c10", title:"Clinical Procedures & Skills", icon:"syringe", accent:"var(--accent-resus)", sections:[
            ["c10s1","10.1 Airway & Breathing Skills"],
            ["c10s2","10.2 Oxygen & Ventilation Skills"],
            ["c10s3","10.3 Bleeding Control & Wound Care"],
            ["c10s4","10.4 Splinting & Bandaging"],
            ["c10s5","10.5 Spinal Motion Restriction Skills"],
            ["c10s6","10.6 Patient Movement & Lifting"],
            ["c10s7","10.7 ECG Acquisition — 12-Lead"],
            ["c10s8","10.8 Medication Administration Skills"]
        ]},
        { id:"m1-38", num:"11", file:"m1-38", title:"Emergency Drug Reference", icon:"book", accent:"var(--accent-scope)", sections:[
            ["m1-38s1","Drug Formulary (M1–38)"]
        ]}
    ];

    function svg(name) {
        return `<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#${name}"/></svg>`;
    }
    function escAttr(s) {
        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    const totalChapters = INDEX_DATA.length;
    const totalTopics = INDEX_DATA.reduce((n, c) => n + c.sections.length, 0);

    let html = `
    <style>
        .index-wrap { max-width: 880px; margin: 0 auto; }
        .index-search-wrapper {
            display: flex; align-items: center;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 40px;
            padding: 4px 4px 4px 18px;
            margin-bottom: 14px;
            backdrop-filter: blur(10px);
            box-shadow: var(--glass-shadow);
            position: sticky; top: 8px; z-index: 5;
        }
        .index-search-wrapper > span { font-size: 1.15rem; margin-right: 8px; color: var(--text-secondary); display: inline-flex; }
        .index-search-wrapper input {
            flex: 1; background: transparent; border: none; padding: 12px 0;
            font-size: 1rem; color: var(--text-primary); outline: none;
        }
        .index-search-wrapper input::placeholder { color: var(--text-secondary); opacity: .7; }
        .index-search-wrapper button {
            background: transparent; border: none; width: 32px; height: 32px;
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            font-size: 1rem; color: var(--text-secondary); cursor: pointer;
            transition: all .2s; margin-right: 4px; padding: 0;
        }
        .index-search-wrapper button:hover { background: rgba(128,128,128,.15); color: var(--text-primary); }
        .index-search-wrapper button:active { transform: scale(.95); }

        .index-toolbar {
            display: flex; align-items: center; justify-content: space-between;
            gap: 12px; flex-wrap: wrap; margin: 0 4px 16px;
        }
        .index-heading { font-size: 1.3rem; font-weight: 800; margin: 0 4px 16px; display: flex; align-items: center; gap: 10px; color: var(--text-primary); }
        [data-theme="dark"] .index-heading,
        [data-theme="amoled"] .index-heading { color: #ffffff; }
        .index-heading svg { color: var(--primary-accent); }
        [data-theme="dark"] .index-heading svg,
        [data-theme="amoled"] .index-heading svg { color: #ffffff; }
        .index-count { font-size: .85rem; color: var(--text-primary); }
        [data-theme="dark"] .index-count,
        [data-theme="amoled"] .index-count { color: #ffffff; }
        .index-count strong { color: var(--primary-accent); font-weight: 700; }
        [data-theme="dark"] .index-count strong,
        [data-theme="amoled"] .index-count strong { color: #ffffff; }
        .index-actions { display: flex; gap: 8px; }
        .index-action-btn {
            display: inline-flex; align-items: center; gap: 6px;
            background: var(--glass-bg); border: 1px solid var(--glass-border);
            color: var(--text-secondary); border-radius: 30px;
            padding: 7px 14px; font-size: .82rem; font-weight: 600;
            cursor: pointer; transition: all .18s;
        }
        .index-action-btn:hover { color: var(--text-primary); border-color: var(--primary-accent); transform: translateY(-1px); }
        .index-action-btn:active { transform: translateY(0); }

        .acc-card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-left: 3px solid var(--acc, var(--primary-accent));
            border-radius: 14px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: border-color .2s, box-shadow .2s;
        }
        .acc-card:hover { box-shadow: var(--glass-shadow); }
        .acc-head {
            display: flex; align-items: center; gap: 12px;
            width: 100%; text-align: left;
            background: transparent; border: none; cursor: pointer;
            padding: 16px 18px; color: var(--text-primary); font: inherit;
        }
        .acc-icon {
            display: inline-flex; align-items: center; justify-content: center;
            width: 38px; height: 38px; flex: 0 0 38px; border-radius: 11px;
            font-size: 1.15rem; color: var(--acc, var(--primary-accent));
            background: color-mix(in srgb, var(--acc, var(--primary-accent)) 14%, transparent);
        }
        .acc-titles { flex: 1; min-width: 0; }
        .acc-title { font-weight: 700; font-size: 1.06rem; line-height: 1.3; }
        .acc-sub-label { font-size: .8rem; color: var(--text-secondary); margin-top: 2px; }
        .acc-count-badge {
            flex: 0 0 auto; font-size: .72rem; font-weight: 700;
            color: var(--acc, var(--primary-accent));
            background: color-mix(in srgb, var(--acc, var(--primary-accent)) 12%, transparent);
            border-radius: 30px; padding: 3px 10px;
        }
        .acc-chevron {
            flex: 0 0 auto; display: inline-flex; color: var(--text-secondary);
            transition: transform .28s ease; font-size: 1rem;
        }
        .acc-card.open .acc-chevron { transform: rotate(90deg); }

        .acc-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .28s ease; }
        .acc-card.open .acc-body { grid-template-rows: 1fr; }
        .acc-body-inner { overflow: hidden; }
        .acc-list { padding: 0 18px 10px 68px; }

        .acc-overview {
            display: inline-flex; align-items: center; gap: 7px;
            font-size: .82rem; font-weight: 600; text-decoration: none;
            color: var(--acc, var(--primary-accent));
            padding: 8px 0 12px; opacity: .9;
        }
        .acc-overview:hover { opacity: 1; gap: 10px; }

        .acc-sub {
            display: flex; align-items: center; gap: 10px;
            padding: 11px 8px 11px 0; text-decoration: none;
            color: var(--text-primary); font-size: .98rem; font-weight: 500;
            border-top: 1px solid rgba(128,128,128,.13);
            transition: color .18s, padding-left .18s, background .18s;
            border-radius: 8px;
        }
        .acc-sub::before {
            content: ""; flex: 0 0 6px; width: 6px; height: 6px; border-radius: 50%;
            background: var(--acc, var(--primary-accent)); opacity: .5;
        }
        .acc-sub:hover { color: var(--acc, var(--primary-accent)); padding-left: 8px; }
        .acc-sub:hover::before { opacity: 1; }
        .acc-sub mark { background: var(--primary-accent); color: #fff; border-radius: 3px; padding: 0 2px; }
        .acc-title mark { background: var(--primary-accent); color: #fff; border-radius: 3px; padding: 0 2px; }

        .acc-card.is-direct .acc-chevron { display: none; }

        .index-no-results {
            padding: 34px; text-align: center; color: var(--text-secondary);
            font-style: italic; background: var(--glass-bg);
            border-radius: 16px; border: 1px dashed var(--glass-border);
        }
        @media (prefers-reduced-motion: reduce) {
            .acc-body, .acc-chevron { transition: none; }
        }
        @media (max-width: 540px) {
            .acc-list { padding-left: 22px; }
            .acc-head { padding: 14px; gap: 10px; }
        }
    </style>

    <div class="index-wrap" id="indexRoot">
        <h3 class="index-heading">${svg('library')} Table of Contents</h3>

        <div class="index-search-wrapper">
            <span>${svg('search')}</span>
            <input type="text" id="indexSearchInput" autocomplete="off" spellcheck="false"
                   aria-label="Search the curriculum index"
                   placeholder="Search chapters &amp; topics…">
            <button id="indexSearchClearBtn" type="button" aria-label="Clear search" style="display:none;">${svg('x')}</button>
        </div>

        <div class="index-toolbar">
            <div class="index-count" id="indexCount"><strong>${totalChapters}</strong> chapters &middot; <strong>${totalTopics}</strong> topics</div>
            <div class="index-actions">
                <button class="index-action-btn" id="expandAllBtn" type="button">${svg('arrow-down')} Expand all</button>
                <button class="index-action-btn" id="collapseAllBtn" type="button">${svg('arrow-up')} Collapse all</button>
            </div>
        </div>

        <div id="indexAccordion">
    `;

    INDEX_DATA.forEach(ch => {
        const isDirect = ch.sections.length <= 1;
        const count = ch.sections.length;
        const overviewLink = `${ch.file}.html?view=summary`;

        html += `
        <div class="acc-card${isDirect ? ' is-direct' : ''}" data-cid="${ch.id}" style="--acc:${ch.accent};">
            <button class="acc-head" type="button" aria-expanded="false">
                <span class="acc-icon">${svg(ch.icon)}</span>
                <span class="acc-titles">
                    <span class="acc-title" data-raw="${escAttr('Chapter ' + ch.num + ' · ' + ch.title)}">Chapter ${ch.num} &middot; ${escAttr(ch.title)}</span>
                    <span class="acc-sub-label">${count} ${count === 1 ? 'topic' : 'topics'}</span>
                </span>
                ${isDirect ? '' : `<span class="acc-count-badge">${count}</span>`}
                <span class="acc-chevron">${svg('arrow-right')}</span>
            </button>
            <div class="acc-body">
                <div class="acc-body-inner">
                    <div class="acc-list">
                        <a class="acc-overview" href="${overviewLink}">${svg('book-open')} Open chapter overview</a>
        `;

        ch.sections.forEach(([sid, label]) => {
            html += `<a class="acc-sub" data-sid="${sid}" data-raw="${escAttr(label)}" href="${ch.file}.html?view=summary&section=${sid}"><span class="acc-sub-text">${escAttr(label)}</span></a>`;
        });

        html += `
                    </div>
                </div>
            </div>
        </div>`;
    });

    html += `
            <div id="noResultsMsg" class="index-no-results" style="display:none;">No matching chapters or topics found.</div>
        </div>
    </div>`;

    /* ── Behaviour: accordion + expand/collapse all + fuzzy search ── */
    setTimeout(() => {
        const root = document.getElementById('indexRoot');
        if (!root) return;
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const expandBtn = document.getElementById('expandAllBtn');
        const collapseBtn = document.getElementById('collapseAllBtn');
        const countEl = document.getElementById('indexCount');
        const noResults = document.getElementById('noResultsMsg');
        const cards = Array.from(root.querySelectorAll('.acc-card'));

        const setOpen = (card, open) => {
            card.classList.toggle('open', open);
            const head = card.querySelector('.acc-head');
            if (head) head.setAttribute('aria-expanded', String(open));
        };

        // Accordion toggle (skip single-section "direct" cards)
        cards.forEach(card => {
            const head = card.querySelector('.acc-head');
            head.addEventListener('click', () => {
                if (card.classList.contains('is-direct')) {
                    window.location.href = card.querySelector('.acc-overview').getAttribute('href');
                    return;
                }
                setOpen(card, !card.classList.contains('open'));
            });
        });

        if (expandBtn) expandBtn.addEventListener('click', () => cards.forEach(c => { if (!c.classList.contains('is-direct')) setOpen(c, true); }));
        if (collapseBtn) collapseBtn.addEventListener('click', () => cards.forEach(c => setOpen(c, false)));

        // Subsequence fuzzy match
        function fuzzy(text, q) {
            const t = text.toLowerCase(); let qi = 0;
            for (let ti = 0; ti < t.length && qi < q.length; ti++) if (t[ti] === q[qi]) qi++;
            return qi === q.length;
        }
        // Subsequence highlight
        function highlight(text, q) {
            let out = '', qi = 0;
            for (let i = 0; i < text.length; i++) {
                if (qi < q.length && text[i].toLowerCase() === q[qi]) { out += `<mark>${text[i]}</mark>`; qi++; }
                else out += text[i];
            }
            return out;
        }

        function runSearch(raw) {
            const q = raw.trim().toLowerCase();
            clearBtn.style.display = q ? 'flex' : 'none';
            let visChapters = 0, visTopics = 0;

            cards.forEach(card => {
                const titleEl = card.querySelector('.acc-title');
                const titleRaw = titleEl.getAttribute('data-raw');
                const subs = Array.from(card.querySelectorAll('.acc-sub'));
                const chapMatch = !q || fuzzy(titleRaw, q);

                let topicHits = 0;
                subs.forEach(sub => {
                    const txtEl = sub.querySelector('.acc-sub-text');
                    const rawLabel = sub.getAttribute('data-raw');
                    const show = !q || chapMatch || fuzzy(rawLabel, q);
                    sub.style.display = show ? '' : 'none';
                    txtEl.innerHTML = (q && !chapMatch) ? highlight(rawLabel, q) : rawLabel;
                    if (show) topicHits++;
                });

                titleEl.innerHTML = (q && chapMatch) ? highlight(titleRaw, q) : titleRaw;

                const cardVisible = !q || chapMatch || topicHits > 0;
                card.style.display = cardVisible ? '' : 'none';
                if (cardVisible) { visChapters++; visTopics += topicHits; }

                // Auto-expand on active search; restore collapsed when cleared
                if (q) { if (cardVisible && !card.classList.contains('is-direct')) setOpen(card, true); }
                else setOpen(card, false);
            });

            noResults.style.display = visChapters === 0 ? 'block' : 'none';
            countEl.innerHTML = q
                ? `<strong>${visChapters}</strong> ${visChapters === 1 ? 'chapter' : 'chapters'} &middot; <strong>${visTopics}</strong> ${visTopics === 1 ? 'topic' : 'topics'}`
                : `<strong>${cards.length}</strong> chapters &middot; <strong>${cards.reduce((n,c)=>n+c.querySelectorAll('.acc-sub').length,0)}</strong> topics`;
        }

        if (input) input.addEventListener('input', () => runSearch(input.value));
        if (clearBtn) clearBtn.addEventListener('click', () => { input.value = ''; runSearch(''); input.focus(); });
    }, 50);

    return html;
}
