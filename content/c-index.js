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
    const CHAPTERS = [
        { id:"c1",     shortTitle:"1. Foundations",       title:"Foundations of Emergency Care",                chapterFile:"c1",  chapterGroup:"foundations" },
        { id:"c2",     shortTitle:"2. Assessment",        title:"Patient Assessment",                           chapterFile:"c2",  chapterGroup:"assessment" },
        { id:"c3",     shortTitle:"3. Airway",            title:"Airway & Ventilation",                         chapterFile:"c3",  chapterGroup:"airway" },
        { id:"c4",     shortTitle:"4. Cardio & Resus",    title:"Cardiovascular & Resuscitation",               chapterFile:"c4",  chapterGroup:"cardio" },
        { id:"c5",     shortTitle:"5. Medical",           title:"Medical Emergencies",                          chapterFile:"c5",  chapterGroup:"medical" },
        { id:"c6",     shortTitle:"6. Trauma",            title:"Trauma Emergencies",                           chapterFile:"c6",  chapterGroup:"trauma" },
        { id:"c7",     shortTitle:"7. Special Pop",       title:"Special Populations",                          chapterFile:"c7",  chapterGroup:"special" },
        { id:"c8",     shortTitle:"8. Environmental",     title:"Environmental & Disaster Medicine",            chapterFile:"c8",  chapterGroup:"environmental" },
        { id:"c9",     shortTitle:"9. Pharmacology",      title:"Emergency Pharmacology",                       chapterFile:"c9",  chapterGroup:"pharmacology" },
        { id:"c10",    shortTitle:"10. Procedures",       title:"Clinical Procedures & Skills",                 chapterFile:"c10", chapterGroup:"procedures" },
        { id:"s1",     shortTitle:"Scope of Practice",    title:"Clinical Scope Matrix",                        chapterFile:"s1",  chapterGroup:"scope" },
        { id:"m1-38",  shortTitle:"Medication Formulary", title:"Emergency Drug Reference",                    chapterFile:"m1-38", chapterGroup:"scope" }
    ];

    const categories = {
        foundations:    '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#shield"/></svg> 1. Foundations of Care',
        assessment:     '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#search"/></svg> 2. Patient Assessment',
        airway:         '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg> 3. Airway & Ventilation',
        cardio:         '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg> 4. Cardiovascular & Resuscitation',
        medical:        '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> 5. Medical Emergencies',
        trauma:         '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#bandage"/></svg> 6. Trauma Emergencies',
        special:        '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> 7. Special Populations',
        environmental:  '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#thermometer"/></svg> 8. Environmental & Disaster',
        pharmacology:   '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> 9. Emergency Pharmacology',
        procedures:     '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#syringe"/></svg> 10. Clinical Procedures & Skills',
        scope:          '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book"/></svg> 11. Scope & Reference'
    };

    const GROUP_ACCENT = {
        foundations:    'var(--accent-universal)',
        assessment:     'var(--accent-universal)',
        airway:         'var(--accent-airway)',
        cardio:         'var(--accent-cardio)',
        medical:        'var(--accent-medical)',
        trauma:         'var(--accent-cardio)',
        special:        'var(--accent-pediatric)',
        environmental:  'var(--accent-environmental)',
        pharmacology:   'var(--accent-medical)',
        procedures:     'var(--accent-resus)',
        scope:          'var(--accent-scope)'
    };

    /* ── Inline styles for the glassy search bar & polished index ── */
    let html = `
    <style>
        .index-search-wrapper {
            display: flex;
            align-items: center;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 40px;
            padding: 4px 4px 4px 20px;
            margin-bottom: 24px;
            backdrop-filter: blur(10px);
            box-shadow: var(--glass-shadow);
        }
        .index-search-wrapper span {
            font-size: 1.2rem;
            margin-right: 8px;
            color: var(--text-secondary);
        }
        .index-search-wrapper input {
            flex: 1;
            background: transparent;
            border: none;
            padding: 12px 0;
            font-size: 1rem;
            color: var(--text-primary);
            outline: none;
        }
        .index-search-wrapper input::placeholder {
            color: var(--text-secondary);
            opacity: 0.7;
        }
        .index-search-wrapper button {
            background: transparent;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s;
            margin-right: 4px;
            padding: 0;
        }
        .index-search-wrapper button:hover {
            background: rgba(255,255,255,0.1);
            color: var(--text-primary);
        }
        .index-search-wrapper button:active {
            transform: scale(0.95);
        }
        .index-category {
            margin: 20px 0 10px;
            font-size: 1.2rem;
            font-weight: 700;
            border-bottom: 2px solid currentColor;
            padding-bottom: 5px;
        }
        .index-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
        }
        .index-topic-link {
            display: block;
            padding: 12px 0;
            font-weight: 500;
            font-size: 1.05rem;
            color: var(--text-primary);
            text-decoration: none;
            border-bottom: 1px solid rgba(128, 128, 128, 0.15);
            transition: color 0.2s, padding-left 0.2s, background 0.2s;
        }
        .index-topic-link:hover {
            color: var(--primary-accent);
            padding-left: 8px;
            background: rgba(0,0,0,0.02);
            border-radius: 8px 0 0 8px;
        }
        .index-row td {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .index-no-results {
            padding: 30px;
            text-align: center;
            color: var(--text-secondary);
            font-style: italic;
            background: var(--glass-bg);
            border-radius: 16px;
            border: 1px dashed var(--glass-border);
        }
    </style>

    <div class="sum-card" id="indexRoot">
        <h3><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#library"/></svg> SmartCare Table of Contents</h3>

        <div class="index-search-wrapper">
            <span><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#search"/></svg></span>
            <input type="text" id="indexSearchInput" placeholder="Filter clinical guidelines &amp; topics...">
            <button id="indexSearchClearBtn" style="display:none;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg></button>
        </div>

        <div id="indexTableContainer">
    `;

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        const accentVar = GROUP_ACCENT[group] || 'var(--primary-accent)';

        html += `<h4 class="index-category" style="color: ${accentVar};">${categories[group]}</h4>`;
        html += `<table class="index-table">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const link = `${baseFile}.html?view=summary`;

            html += `
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" class="index-topic-link" data-original="${ch.shortTitle} – ${ch.title}">
                            ${ch.shortTitle} – ${ch.title}
                        </a>
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `<div id="noResultsMsg" class="index-no-results" style="display: none;">No matching guidelines found.</div>`;
    html += `</div></div>`;

    /* ── Search logic: fuzzy match + character-level highlight ── */
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const rows = document.querySelectorAll('.index-row');
        const tables = document.querySelectorAll('.index-table');
        const headers = document.querySelectorAll('.index-category');
        const noResults = document.getElementById('noResultsMsg');

        function fuzzyMatch(text, query) {
            let t = text.toLowerCase();
            let q = query.toLowerCase();
            let ti = 0, qi = 0;
            while (ti < t.length && qi < q.length) {
                if (t[ti] === q[qi]) qi++;
                ti++;
            }
            return qi === q.length;
        }

        function highlight(text, query) {
            let result = "";
            let qIndex = 0;
            query = query.toLowerCase();
            for (let i = 0; i < text.length; i++) {
                if (qIndex < query.length && text[i].toLowerCase() === query[qIndex]) {
                    result += `<span style="background: var(--primary-accent); color: #fff; border-radius: 3px; padding: 0 2px;">${text[i]}</span>`;
                    qIndex++;
                } else {
                    result += text[i];
                }
            }
            return result;
        }

        if (input) {
            input.addEventListener('input', () => {
                const query = input.value.trim();
                clearBtn.style.display = query ? 'flex' : 'none';
                const lowerQuery = query.toLowerCase();
                let visibleCount = 0;

                rows.forEach(row => {
                    const link = row.querySelector('.index-topic-link');
                    const original = link.getAttribute('data-original');
                    const title = row.getAttribute('data-title');

                    if (!query) {
                        row.style.display = '';
                        link.innerHTML = original;
                        visibleCount++;
                    } else if (fuzzyMatch(title, lowerQuery)) {
                        row.style.display = '';
                        link.innerHTML = highlight(original, query);
                        visibleCount++;
                    } else {
                        row.style.display = 'none';
                    }
                });

                tables.forEach((table, i) => {
                    const visibleRows = table.querySelectorAll('.index-row:not([style*="display: none"])');
                    if (visibleRows.length === 0) {
                        table.style.display = 'none';
                        if (headers[i]) headers[i].style.display = 'none';
                    } else {
                        table.style.display = '';
                        if (headers[i]) headers[i].style.display = '';
                    }
                });

                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                input.value = '';
                clearBtn.style.display = 'none';
                input.dispatchEvent(new Event('input'));
            });
        }
    }, 50);

    return html;
}
