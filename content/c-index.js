/* ========== c-index.js – Full Curriculum Index ========== */
window.CPG_DATA = {
    id: "c-index",
    title: "Table of Contents",
    shortTitle: 'Index',
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
    // Curriculum data now lives in content/curriculum-index.js (loaded
    // before this file — see chapters/c-index.html's <script> order) so
    // index.html's homepage search can reuse the exact same chapter/topic
    // list instead of duplicating it.
    const INDEX_DATA = window.CURRICULUM_INDEX;

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
