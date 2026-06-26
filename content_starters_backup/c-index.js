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
        { id:"c4",     shortTitle:"4. Cardio & Shock",    title:"Cardiovascular & Shock",                       chapterFile:"c4",  chapterGroup:"cardio" },
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
        foundations: '1. Foundations of Care',
        assessment: '2. Patient Assessment',
        airway: '3. Airway & Ventilation',
        cardio: '4. Cardiovascular & Shock',
        medical: '5. Medical Emergencies',
        trauma: '6. Trauma Emergencies',
        special: '7. Special Populations',
        environmental: '8. Environmental & Disaster',
        pharmacology: '9. Emergency Pharmacology',
        procedures: '10. Clinical Procedures & Skills',
        scope: '11. Scope & Reference'
    };

    let html = `
        <div class="index-container">
            <div class="index-search-bar">
                <span><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#search"/></svg></span>
                <input type="text" id="indexSearchInput" placeholder="Filter clinical guidelines &amp; topics...">
                <button id="indexSearchClearBtn" style="display:none;" aria-label="Clear search"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg></button>
            </div>
            <div class="index-list">
    `;

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        html += `<h4 class="index-category" style="color: var(--primary-accent); border-bottom:1px solid var(--border); padding-bottom:4px; margin-top:20px; font-weight:700;">${categories[group]}</h4>`;
        html += `<table class="index-table" style="width:100%; border-collapse:collapse;">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const link = `${baseFile}.html?view=summary`;

            html += `
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}" style="border-bottom: 1px solid var(--border);">
                    <td style="padding:10px 0;">
                        <a href="${link}" class="index-topic-link" data-original="${ch.shortTitle} – ${ch.title}" style="color:var(--text-primary); text-decoration:none; font-weight:500;">
                            ${ch.shortTitle} – ${ch.title}
                        </a>
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `<div id="noResultsMsg" class="index-no-results" style="display: none; padding:20px 0; text-align:center; color:var(--text-secondary);">No matching guidelines found.</div>`;
    html += `</div></div>`;

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
