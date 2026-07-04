/* ========== app.js – SmartCare (Final Clean) ========== */
(function(){
"use strict";

// ---------- STORAGE ----------  
const storage = (function() {  
    const KEY = 'smartcare_cpg_stats';  
    const defaultStats = { totalAttempts: 0, chapters: {}, critical: { total: 0, correct: 0 } };  
    function load() {  
        try {  
            const data = localStorage.getItem(KEY);  
            return data ? JSON.parse(data) : defaultStats;  
        } catch(e) { return defaultStats; }  
    }  
    function save(stats) {  
        try { localStorage.setItem(KEY, JSON.stringify(stats)); } catch(e) {}  
    }  
    return { load, save };  
})();  

// ---------- EARLY INIT: theme + font-size applied BEFORE render to prevent flash ----------
// Theme list/cycling lives in src/theme.js (window.SmartTheme), loaded before
// this script on every page that needs it — single source of truth instead
// of a copy-pasted `themes` array per page.
(function() {
    if (window.SmartTheme) window.SmartTheme.init();
    const html = document.documentElement;
    const savedSize = localStorage.getItem('smartcare_font_size') || 'medium';
    html.setAttribute('data-font-size', savedSize);
})();

// ============================================================
// LAST VISITED – records chapter visits to localStorage (single implementation)
// ============================================================
const LAST_VISITED_KEY = 'smartcare_last_visited';

function recordLastVisited() {
    if (!chapterData) return;
    const item = {
        id:        chapterData.id,
        title:     chapterData.shortTitle || chapterData.title || 'Chapter',
        url:       window.location.href,
        timestamp: Date.now()
    };
    try {
        let list = JSON.parse(localStorage.getItem(LAST_VISITED_KEY) || '[]');
        list = list.filter(i => i.id !== item.id);
        list.unshift(item);
        list = list.slice(0, 5);
        localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(list));
    } catch(e) {}
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1)   return 'Just now';
    if (mins < 60)  return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)   return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
}

// ============================================================
// SERVICE WORKER — registration + "Update ready" toast
// ============================================================
function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../sw.js')
            .then((reg) => initSWUpdateToast(reg))
            .catch(() => {});
    });

    let swRefreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (swRefreshing) return;
        swRefreshing = true;
        window.location.reload();
    });
}

function initSWUpdateToast(reg) {
    function showToast(worker) {
        if (document.getElementById('sw-update-toast')) return;
        const toast = document.createElement('div');
        toast.id = 'sw-update-toast';
        toast.setAttribute('role', 'status');
        toast.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);' +
            'background:#1e293b;color:#fff;padding:12px 16px;border-radius:10px;' +
            'box-shadow:0 4px 20px rgba(0,0,0,.35);z-index:99999;display:flex;' +
            'align-items:center;gap:12px;font:14px/1.4 system-ui,-apple-system,sans-serif;';
        toast.innerHTML = '<span>Update ready</span>' +
            '<button id="sw-update-btn" style="background:#3b82f6;color:#fff;border:none;' +
            'padding:6px 14px;border-radius:6px;cursor:pointer;font:inherit;font-weight:600;">Refresh</button>';
        document.body.appendChild(toast);
        document.getElementById('sw-update-btn').addEventListener('click', () => {
            worker.postMessage({ type: 'SKIP_WAITING' });
            toast.remove();
        });
    }
    if (reg.waiting) showToast(reg.waiting);
    reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showToast(newWorker);
            }
        });
    });
}

// ---------- CHAPTER DATA ----------  
const chapterData = window.CPG_DATA;  
const isChapterMissing = !chapterData;  

const dom = {  
    main: document.getElementById('mainContent'),  
    homeBtn: document.getElementById('homeBtn'),  
    pageTitle: document.getElementById('pageTitle'),  
    pageSubtitle: document.getElementById('pageSubtitle')  
};  

// ---------- STATE ----------  
let state = {  
    sections: chapterData ? (chapterData.sections || null) : null,  
    activeSectionId: null,  
    activeSection: null,  
    quizData: [],  
    mistakes: [],  
    qIndex: 0,  
    score: 0,  
    flashData: [],  
    fIndex: 0,  
    criticalData: [],  
    criticalIndex: 0,  
    criticalScore: 0,  
    stats: storage.load()  
};  

/* ---------- FIX FOR FLAT CHAPTERS (no sections) ---------- */
if (!state.sections && chapterData) {
    state.sections = [{
        id: chapterData.id,
        shortTitle: chapterData.shortTitle,
        summary: chapterData.summary || '',
        quiz: chapterData.quiz || [],
        flashcards: chapterData.flashcards || [],
        critical: chapterData.critical || []
    }];
}

// ---------- UTILITIES ----------  
const utils = {  
    shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),  
    safeScrollTop: () => {  
        window.scrollTo(0,0);  
        document.body.scrollTop = 0;  
        document.documentElement.scrollTop = 0;  
        setTimeout(() => window.scrollTo(0,0), 20);  
    },  
    escapeHTML: (str) => {  
        if (!str) return '';
        return str.replace(/[&<>"]/g, (c) => {  
            if(c === '&') return '&amp;';  
            if(c === '<') return '&lt;';  
            if(c === '>') return '&gt;';  
            if(c === '"') return '&quot;';  
            return c;  
        });
    },  
    getSection: (id) => {
        if (!state.sections) return null;
        return state.sections.find(s => s.id === id);
    },
    getSectionIndex: (id) => {
        if (!state.sections) return -1;
        return state.sections.findIndex(s => s.id === id);
    },
    // Split chapter bundles (content/cN.meta.js) only carry {id, shortTitle}
    // per section — fetch the full section JSON on first use and cache it by
    // mutating the section object in place (state.sections holds the same
    // references, so repeat visits are free). Flat/unsplit chapters already
    // have `summary` present and skip the fetch entirely.
    ensureSectionData: (section) => {
        if (!section) return Promise.resolve(section);
        if (section.summary !== undefined) return Promise.resolve(section);
        if (!chapterData || !chapterData.id) return Promise.resolve(section);
        return fetch(`../content/${chapterData.id}/${section.id}.json`)
            .then((r) => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
            .then((full) => { Object.assign(section, full); delete section._loadFailed; return section; })
            .catch(() => utils.loadFullChapterFallback()
                .then((fullData) => {
                    const full = fullData && fullData.sections
                        ? fullData.sections.find((s) => s.id === section.id) : null;
                    if (full) { Object.assign(section, full); delete section._loadFailed; }
                    else section._loadFailed = true;
                    return section;
                })
                .catch(() => { section._loadFailed = true; return section; }));
    },
    // Last-resort fallback: dynamically load the original, unsplit
    // content/cN.js (still shipped as the offline source of truth) if a
    // per-section fetch fails — e.g. offline and that section wasn't cached.
    loadFullChapterFallback: () => {
        if (utils._fullChapterFallbackPromise) return utils._fullChapterFallbackPromise;
        utils._fullChapterFallbackPromise = new Promise((resolve, reject) => {
            if (!chapterData || !chapterData.id) return reject(new Error('no chapter id'));
            const script = document.createElement('script');
            script.src = `../content/${chapterData.id}.js`;
            script.onload = () => resolve(window.CPG_DATA);
            script.onerror = () => reject(new Error('Fallback chapter bundle failed to load'));
            document.head.appendChild(script);
        });
        return utils._fullChapterFallbackPromise;
    },
    getQueryParam: (param) => {  
        const urlParams = new URLSearchParams(window.location.search);  
        return urlParams.get(param);  
    },  
    // FIX #2: use replaceState instead of pushState
    setQueryParam: (param, value) => {  
        const url = new URL(window.location.href);  
        url.searchParams.set(param, value);  
        window.history.replaceState({}, '', url);  
    },  
    replaceQueryParam: (param, value) => {  
        const url = new URL(window.location.href);  
        url.searchParams.set(param, value);  
        window.history.replaceState({}, '', url);  
    }  
};  

// ---------- HEADER ----------  
function updateHeader(title, subtitle = '', showBack = true) {  
    if (dom.pageTitle) dom.pageTitle.innerHTML = title || 'SmartCare';
    if (dom.pageSubtitle) dom.pageSubtitle.innerHTML = subtitle || '';
    if (dom.homeBtn) dom.homeBtn.style.display = showBack ? 'block' : 'none';  

    const statsBadge = document.getElementById('liveStatsBadge');
    if (statsBadge) {
        statsBadge.style.display = chapterData ? 'none' : 'flex';
    }
}  

// ---------- RENDER COMING SOON ----------  
function renderComingSoon() {
    const view = utils.getQueryParam('view') || 'summary';
    let title = 'Coming Soon', subtitle = '', message = '', icon = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#construction"/></svg>';
    switch(view) {
        case 'critical':
            title = 'Critical Scenarios';
            subtitle = 'Coming Soon';
            message = 'High‑acuity decision‑making cases are being developed for this chapter.';
            icon = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#siren"/></svg>';
            break;
        case 'flashcards':
            title = 'Flashcards';
            subtitle = 'Coming Soon';
            message = 'Interactive flashcards for this chapter are under construction.';
            icon = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#contact"/></svg>';
            break;
        case 'quiz':
            title = 'Quiz';
            subtitle = 'Coming Soon';
            message = 'Practice questions for this chapter are being prepared.';
            icon = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#clipboard-list"/></svg>';
            break;
        default:
            title = 'Coming Soon';
            subtitle = 'Stay tuned.....';
            message = 'This clinical chapter is under construction.';
            icon = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#construction"/></svg>';
    }
    const html = `<div class="coming-soon-card" style="text-align:center; background: var(--glass-bg); backdrop-filter: blur(16px); border-radius: 60px; padding: 40px 20px; box-shadow: var(--glass-shadow);">   <div style="font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 900; background: linear-gradient(145deg, #0a3b4e, #1e6f8f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 15px 30px rgba(0,0,0,0.2); margin-bottom: 15px; line-height: 1.2; font-family: Georgia, serif;">${icon} ${title}</div>   <div style="font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 5vw, 2.2rem); font-style: italic; font-weight: 600; color: #0a3b4e; text-shadow: 0 2px 5px rgba(255,255,255,0.7); border-top: 3px solid rgba(0,86,179,0.3); border-bottom: 3px solid rgba(0,86,179,0.3); display: inline-block; padding: 10px 30px; margin-top: 10px; letter-spacing: 2px;">${subtitle}</div>   <div style="font-size: clamp(1rem, 4vw, 1.4rem); font-weight: 500; color: #1a3a4a; background: rgba(255,255,255,0.5); padding: 12px 20px; border-radius: 50px; display: inline-block; margin-top: 25px; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 10px rgba(0,0,0,0.05);">   ${message}   </div>   <div style="margin-top: 40px;">   <button class="control-btn" data-action="backHome" style="padding: 12px 30px; border-radius: 40px; font-weight: 700; font-size: clamp(0.9rem, 4vw, 1.1rem); color: white; background: linear-gradient(to bottom, #00b4db, #0083b0); box-shadow: 0 8px 20px rgba(0, 131, 176, 0.5); border: none; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.3); letter-spacing: 1px;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button>   </div>   </div>`;
    setMainContent(html);
    updateHeader(title, subtitle, true);
    utils.safeScrollTop();
}

// ---------- RENDER SECTION TABS ----------  
function renderSectionTabs(activeId) {  
    if (!state.sections || state.sections.length <= 1) return '';  
    return `  
        <div class="section-tabs">  
            ${state.sections.map(s => `  
                <button class="section-tab ${s.id === activeId ? 'active-tab' : ''}"   
                        data-section-id="${s.id}">  
                    ${utils.escapeHTML(s.shortTitle)}  
                </button>  
            `).join('')}  
        </div>  
    `;  
}  

// ---------- <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#smartphone"/></svg> STICKY BOTTOM NAVIGATION ----------
function renderBottomNav(currentView) {
    const views = [
        { id: 'summary', label: 'Summary', icon: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book"/></svg>' },
        { id: 'flashcards', label: 'Cards', icon: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#zap"/></svg>' },
        { id: 'quiz', label: 'Quiz', icon: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg>' },
        { id: 'critical', label: 'Scenario', icon: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ambulance"/></svg>' }
    ];
    return `
        <nav class="bottom-nav">
            ${views.map(v => `
                <a href="#" class="nav-pill ${currentView === v.id ? 'active' : ''}" data-view="${v.id}">
                    <i>${v.icon}</i>${v.label}
                </a>
            `).join('')}
        </nav>
    `;
}

// ---------- SLIM SECTION NAVIGATION ----------  
function renderSectionNavigation() {  
    if (!state.sections || state.sections.length <= 1) return '';  
    const currentIdx = utils.getSectionIndex(state.activeSectionId);  
    const prevSection = currentIdx > 0 ? state.sections[currentIdx - 1] : null;  
    const nextSection = currentIdx < state.sections.length - 1 ? state.sections[currentIdx + 1] : null;  
    const isLastSection = currentIdx === state.sections.length - 1;  

    return `  
        <div class="section-nav-slim">  
            ${prevSection ?   
                `<button class="section-nav-btn" data-section-nav="prev" data-section-id="${prevSection.id}">  
                    ◀ ${utils.escapeHTML(prevSection.shortTitle)}  
                </button>` :   
                `<button disabled>◀</button>`  
            }  
            ${nextSection ?   
                `<button class="section-nav-btn" data-section-nav="next" data-section-id="${nextSection.id}">  
                    ${utils.escapeHTML(nextSection.shortTitle)} ▶  
                </button>` :   
                (isLastSection ? 
                    `<button class="finish-chapter" data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Finish</button>` : 
                    `<button disabled>▶</button>`)
            }  
        </div>  
    `;  
}  

// ============================================================
// SCROLL‑RELATED FUNCTIONS (unified controller)
// ============================================================
let lastScrollY = 0;
let ticking = false;
let progressBarWrapper;     // set once in DOMContentLoaded

function updateHeaderVisibility() {
    const header = document.querySelector('header');
    if (!header) return;
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 100) {
        header.classList.add('header-hidden');
    } else if (currentY < lastScrollY) {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentY;
}

// FIX #6: more stable progress bar positioning
function updateProgressBarPosition() {
    if (!progressBarWrapper) return;
    const hdr = document.querySelector('header');
    if (!hdr) return;
    const realHeight = hdr.classList.contains('header-hidden')
        ? 0
        : hdr.getBoundingClientRect().height;
    progressBarWrapper.style.top = realHeight + 'px';
}

function updateBottomNavVisibility() {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    // Simpler threshold
    if (window.scrollY > 150) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
}

function updateFooterNavPosition() {
    const nav = document.querySelector('.bottom-nav');
    const ft = document.querySelector('footer');
    if (!nav || !ft) return;
    const footerRect = ft.getBoundingClientRect();
    const overlap = window.innerHeight - footerRect.top;
    nav.style.bottom = overlap > 0 ? overlap + 'px' : '0px';
}

function updateScrollProgress() {
    const progressBar = document.querySelector('#pageProgressBar .progress-bar-scroll')
                     || document.querySelector('.progress-bar-scroll');
    if (!progressBar) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const totalH    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalH <= 0) { progressBar.style.width = '100%'; return; }
    progressBar.style.width = Math.min((winScroll / totalH) * 100, 100) + '%';
}

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeaderVisibility();
            updateProgressBarPosition();
            updateBottomNavVisibility();
            updateFooterNavPosition();
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
}

// ---------- INITIALISE SCROLL DEPENDENCIES ----------
function initBottomNav() {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    if (nav.dataset.visibilityInit) return;
    nav.dataset.visibilityInit = 'true';
}

function initFooterAwareNav() {
    const nav = document.querySelector('.bottom-nav');
    const ft = document.querySelector('footer');
    if (!nav || !ft) return;
    if (nav.dataset.footerInit) return;
    nav.dataset.footerInit = 'true';
}

// ---------- SWITCH SECTION ----------
async function switchSection(sectionId, updateUrl = true) {
    const section = utils.getSection(sectionId);
    if (!section) return false;

    // Direction-aware transition: compare the target's position in the section
    // list against the current one. Forward (deeper) slides in from the right,
    // back slides in from the left. Same-section view changes get a plain fade.
    try {
        const list = state.sections || [];
        const prevIdx = list.findIndex(s => s.id === state.activeSectionId);
        const nextIdx = list.findIndex(s => s.id === sectionId);
        state.navDirection = (prevIdx !== -1 && nextIdx !== -1 && prevIdx !== nextIdx)
            ? (nextIdx > prevIdx ? 'slide-fwd' : 'slide-back')
            : null;
    } catch (_) { state.navDirection = null; }

    state.activeSectionId = sectionId;
    state.activeSection = section;

    state.quizData = [];
    state.mistakes = [];
    state.qIndex = 0;
    state.score = 0;
    state.fIndex = 0;
    state.criticalIndex = 0;
    state.criticalScore = 0;

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set('section', sectionId);
        // FIX #1: use replaceState instead of pushState
        window.history.replaceState({}, '', url);
    }

    // Only flash a loading skeleton when this section actually needs a
    // network round-trip — already-fetched sections resolve instantly.
    if (section.summary === undefined && dom.main && typeof renderState === 'function') {
        renderState(dom.main, 'loading', { lines: 4 });
    }

    await utils.ensureSectionData(section);
    state.flashData = section.flashcards || [];
    state.criticalData = section.critical || [];

    const currentView = utils.getQueryParam('view') || 'summary';
    if (currentView === 'summary') render.summary();
    else if (currentView === 'flashcards') render.flashcards();
    else if (currentView === 'quiz') render.quizSetup();
    else if (currentView === 'critical') render.criticalGame();
    else render.summary();

    initBottomNav();
    initFooterAwareNav();
    handleScroll();

    return true;
}

// ============================================================
// SAFE CONTENT SETTER (replaces innerHTML override)
// ============================================================
function setMainContent(html) {
    dom.main.innerHTML = html;

    // Direction-aware slide is applied to the content WRAPPER (first child), never
    // to #mainContent itself — a transform there re-anchors its position:fixed
    // bottom-nav (see the #mainContent comment in styles.css). The wrapper is a
    // sibling of the bottom-nav, so it carries the motion cleanly.
    const dir = state.navDirection;
    state.navDirection = null;
    const wrap = dom.main.firstElementChild;
    if (wrap && (dir === 'slide-fwd' || dir === 'slide-back')) {
        wrap.classList.add(dir);
    } else {
        dom.main.classList.remove('content-enter');
        void dom.main.offsetWidth;      // reflow so the opacity-only fade replays
        dom.main.classList.add('content-enter');
    }

    initBottomNav();
    initFooterAwareNav();
    handleScroll();
    if (typeof initScrollReveal === 'function') initScrollReveal();
}

// ============================================================
// MOTION SYSTEM — scroll reveal, toasts, modal
// (vanilla, transform/opacity only, reduced-motion handled in CSS)
// ============================================================

// Sprite path mirrors the rest of app.js templates (runs from /chapters/*).
const SPRITE_BASE = window.location.pathname.includes('/chapters/') ? '../icons/sprite.svg' : 'icons/sprite.svg';

// ---- Scroll reveal: section headers wipe open on entering the viewport ----
let _revealObserver = null;
function initScrollReveal() {
    if (typeof IntersectionObserver === 'undefined' || !dom.main) return;
    const headers = dom.main.querySelectorAll('.sum-card h3, .sum-card h4');
    if (!headers.length) return;

    if (!_revealObserver) {
        _revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-in');
                    obs.unobserve(entry.target);   // reveal once, then stop watching
                }
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
    }

    headers.forEach(h => {
        if (h.classList.contains('reveal-clip')) return;
        h.classList.add('reveal-clip');
        _revealObserver.observe(h);   // in-view headers fire on the next frame
    });
}

// ---- Toasts: slide in top-right, stack, swipe-to-dismiss with momentum ----
const SmartToast = (function () {
    let region = null;
    function ensureRegion() {
        region = document.getElementById('sc-toast-region');
        if (!region) {
            region = document.createElement('div');
            region.id = 'sc-toast-region';
            region.setAttribute('role', 'status');
            region.setAttribute('aria-live', 'polite');
            document.body.appendChild(region);
        }
        return region;
    }
    function dismiss(el) {
        if (!el || el._dismissing) return;
        el._dismissing = true;
        clearTimeout(el._timer);
        el.removeAttribute('data-enter');
        el.setAttribute('data-exit', '');
        const done = () => el.remove();
        el.addEventListener('transitionend', done, { once: true });
        setTimeout(done, 400);   // fallback if transitionend is missed
    }
    function enableSwipe(el) {
        let startX = 0, startT = 0, dx = 0, dragging = false, pid = null;
        el.addEventListener('pointerdown', (e) => {
            if (dragging) return;                     // ignore extra fingers mid-drag
            dragging = true; pid = e.pointerId;
            startX = e.clientX; startT = Date.now(); dx = 0;
            el.setAttribute('data-swiping', '');
            try { el.setPointerCapture(pid); } catch (_) {}
        });
        el.addEventListener('pointermove', (e) => {
            if (!dragging || e.pointerId !== pid) return;
            dx = e.clientX - startX;
            if (dx < 0) dx *= 0.35;                   // resistance dragging left (away from exit)
            el.style.setProperty('--tx', dx + 'px');
        });
        function end(e) {
            if (!dragging || (e && e.pointerId !== pid)) return;
            dragging = false;
            el.removeAttribute('data-swiping');
            const dt = Date.now() - startT;
            const velocity = Math.abs(dx) / Math.max(dt, 1);
            const width = el.offsetWidth || 320;
            // Flick (velocity > 0.11) or drag past 40% → dismiss; else snap back.
            if (dx > width * 0.4 || (dx > 24 && velocity > 0.11)) {
                dismiss(el);
            } else {
                el.style.setProperty('--tx', '0px');
            }
        }
        el.addEventListener('pointerup', end);
        el.addEventListener('pointercancel', end);
    }
    function show(opts) {
        const o = opts || {};
        ensureRegion();
        const el = document.createElement('div');
        el.className = 'sc-toast' + (o.type ? ' sc-toast--' + o.type : '');
        el.setAttribute('data-enter', '');
        const icon = o.type === 'correct' ? '#circle-check-big'
                   : o.type === 'wrong'   ? '#circle-x'
                   : '#info';
        el.innerHTML =
            '<span class="sc-toast-icon"><svg class="lucide" aria-hidden="true" focusable="false"><use href="' +
            SPRITE_BASE + icon + '"/></svg></span><span class="sc-toast-msg"></span>';
        el.querySelector('.sc-toast-msg').textContent = o.message || '';
        region.prepend(el);          // newest on top; stack spacing from CSS gap
        enableSwipe(el);
        const ttl = o.duration || 3200;
        el._timer = setTimeout(() => dismiss(el), ttl);
        el.addEventListener('pointerenter', () => clearTimeout(el._timer));   // pause on hover
        el.addEventListener('pointerleave', () => { el._timer = setTimeout(() => dismiss(el), 1200); });
        return el;
    }
    return { show, dismiss };
})();
window.SmartToast = SmartToast;

// ---- Modal: backdrop blur fade-in, panel scales up from 0.95 (origin center) ----
const SmartModal = (function () {
    let backdrop = null;
    function close() {
        if (!backdrop) return;
        const bd = backdrop; backdrop = null;
        bd.setAttribute('data-closing', '');
        bd.removeAttribute('data-open');
        const done = () => bd.remove();
        bd.addEventListener('transitionend', (e) => { if (e.target === bd) done(); }, { once: true });
        setTimeout(done, 300);
    }
    function open(innerHTML, onMount) {
        close();
        backdrop = document.createElement('div');
        backdrop.className = 'sc-modal-backdrop';
        backdrop.innerHTML = '<div class="sc-modal" role="dialog" aria-modal="true">' + innerHTML + '</div>';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
        // Flip to the open state next frame so the enter transition actually plays.
        requestAnimationFrame(() => requestAnimationFrame(() => {
            if (backdrop) backdrop.setAttribute('data-open', '');
        }));
        if (typeof onMount === 'function') onMount(backdrop);
        return backdrop;
    }
    return { open, close };
})();
window.SmartModal = SmartModal;

// ============================================================
// RENDER FUNCTIONS
// ============================================================
const render = {
    // A fetch failure (see utils.ensureSectionData) leaves a section object
    // still missing summary/quiz/flashcards/critical — without this check,
    // every view function's "No X available" branch would fire and quietly
    // mask the failure as if the section were legitimately empty. Shown
    // instead of the normal view; Retry re-runs switchSection to fetch again.
    loadFailed: function() {
        if (!dom.main || typeof renderState !== 'function') return false;
        const section = state.activeSection;
        if (!section || !section._loadFailed) return false;
        renderState(dom.main, 'error', {
            title: "Couldn't load this section",
            message: 'Check your connection and try again.',
            iconHref: '../icons/sprite.svg#triangle-alert',
            onRetry: () => {
                delete section._loadFailed;
                switchSection(state.activeSectionId, false);
            },
        });
        return true;
    },

    summary: function() {
        if (isChapterMissing) { renderComingSoon(); return; }
        const section = state.activeSection;
        if (!section) {
            console.error('No active section');
            return;
        }
        if (this.loadFailed()) return;
        const tabs = renderSectionTabs(section.id);
        // FIX #3: exclude c-index from special pages so bottom nav appears
        const isSpecialPage = chapterData && (chapterData.id === 'c0');
        const summaryContent = section.summary || '<div class="sum-card">No summary available.</div>';
        const nav = renderSectionNavigation();

        const html = `
            <div class="section active${tabs ? ' chapter-layout' : ''}">
                ${tabs}
                <div class="section-body">
                    ${summaryContent}
                    ${nav}
                    <div class="back-home-ghost">
                        <button data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button>
                    </div>
                </div>
            </div>
            ${!isSpecialPage ? renderBottomNav('summary') : ''}
        `;
        setMainContent(html);  
        updateHeader(utils.escapeHTML(section.shortTitle), 'Summary', true);  
        utils.safeScrollTop();  

        if (chapterData && chapterData.id === 'c-index') {  
            initIndexSearch();  
        }  
    },  

    flashcards: function() {
        if (isChapterMissing) { renderComingSoon(); return; }
        const section = state.activeSection;
        if (!section) {
            console.error('No active section');
            return;
        }
        if (this.loadFailed()) return;
        if (!state.flashData.length) {
            setMainContent('<div class="sum-card">No flashcards available.</div>');  
            return;  
        }  
        state.fIndex = 0;  
        this._renderFlashcard();  
        updateHeader(utils.escapeHTML(section.shortTitle), 'Flashcards', true);  
    },  

    _renderFlashcard: function() {  
        if (!state.flashData.length) return;  
        const card = state.flashData[state.fIndex];  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        
        const category = utils.escapeHTML(card.category || '');
        const question = utils.escapeHTML(card.question);
        const safeAnswer = utils.escapeHTML(card.answer || '').replace(/\n/g, '<br>');
        
        const html = `
            <div class="${tabs ? 'chapter-layout' : ''}">
                ${tabs}
                <div class="section-body">
                    <div class="fc-progress">Card ${state.fIndex+1} of ${state.flashData.length}</div>
                    <div class="scene" id="cardScene">
                        <div class="card" id="flashcard">
                            <div class="card__face card__face--front">
                                <span class="category-badge">${category}</span>
                                ${card.image ? `<div style="margin-bottom:15px;">
                                    <img src="${utils.escapeHTML(card.image)}" alt="ECG" style="max-width:100%; max-height:150px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                                </div>` : ''}
                                <div style="white-space: pre-wrap; font-size:1.3rem;">${question}</div>
                                <div style="font-size:0.8rem; color:#888; margin-top:20px;">Tap to flip</div>
                            </div>
                            <div class="card__face card__face--back">
                                <div style="white-space: pre-wrap;">${safeAnswer}</div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-row">
                        <button class="control-btn" data-flash="prev">◀ Previous</button>
                        <button class="control-btn" data-flash="next">Next ▶</button>
                    </div>
                    ${nav}
                    <div class="back-home-ghost"><button data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button></div>
                </div>
            </div>
            ${renderBottomNav('flashcards')}
        `;
        setMainContent(html);  
        const cardEl = document.getElementById('flashcard');  
        const scene = document.getElementById('cardScene');  
        if (scene) {  
            scene.addEventListener('click', function flipHandler(e) {  
                if (e.target.closest('.control-btn')) return;  
                cardEl.classList.toggle('is-flipped');  
            }, { passive: true });  
        }
        utils.safeScrollTop();  
    },  

    quizSetup: function() {
        if (isChapterMissing) { renderComingSoon(); return; }
        const section = state.activeSection;
        if (!section) {
            console.error('No active section');
            return;
        }
        if (this.loadFailed()) return;
        if (!section.quiz || !section.quiz.length) {
            setMainContent('<div class="sum-card">No quiz questions available.</div>');  
            return;  
        }  
        const totalQuestions = section.quiz.length;
        const tabs = renderSectionTabs(section.id);  
        const nav = renderSectionNavigation();  
        
        const possibleSizes = [10, 20, 30];
        const sizeButtons = possibleSizes
            .filter(size => size <= totalQuestions)
            .map(size => `<button class="setup-btn" data-quiz-size="${size}">${size} Questions <span><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg></span></button>`)
            .join('');
        
        const allButton = `<button class="setup-btn challenge" data-quiz-size="${totalQuestions}">All (${totalQuestions}) <span><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg></span></button>`;
        const buttonsHtml = sizeButtons + allButton;
        
        const html = `
            <div class="${tabs ? 'chapter-layout' : ''}">
                ${tabs}
                <div class="section-body">
                    <div class="quiz-setup-container">
                        <h2 style="color:var(--primary-accent);">Quiz: ${utils.escapeHTML(section.shortTitle)}</h2>
                        <p style="color:var(--text-secondary);">Select number of questions</p>
                        <div class="setup-grid">
                            ${buttonsHtml}
                        </div>
                    </div>
                    ${nav}
                    <div class="back-home-ghost"><button data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button></div>
                </div>
            </div>
            ${renderBottomNav('quiz')}
        `;
        setMainContent(html);  
        updateHeader('Quiz Setup', utils.escapeHTML(section.shortTitle), true);  
        utils.safeScrollTop();  
    },  

    quizGame: function() {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        if (!state.quizData.length) {  
            render.quizSetup();  
            return;  
        }  
        const q = state.quizData[state.qIndex];  
        const progress = `Q ${state.qIndex+1}/${state.quizData.length}`;  
        const optionsHtml = q.options.map((opt, idx) => {
            const optText = typeof opt === 'string' ? opt : opt.t;
            return `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(optText)}</button>`;
        }).join('');  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        const html = `
            <div class="${tabs ? 'chapter-layout' : ''}">
                ${tabs}
                <div class="section-body">
                    <div class="quiz-container">
                        <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
                            <span class="fc-progress">${progress}</span>
                            <span class="stats-badge" style="background:var(--glass-bg); color:var(--text-primary);">
                                Score: <strong>${state.score}</strong>
                            </span>
                        </div>
                        ${q.image ? `<div style="text-align:center; margin-bottom:20px;">
                            <img src="${utils.escapeHTML(q.image)}" alt="ECG" style="max-width:100%; max-height:200px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                        </div>` : ''}
                        <div style="font-size:1.15rem; font-weight:600; margin-bottom:20px; color:var(--text-primary);">${utils.escapeHTML(q.q)}</div>
                        <div class="quiz-options" id="quizOptionsContainer">${optionsHtml}</div>
                        <div class="quiz-feedback" id="quizFeedback" style="display:none;"></div>
                        <button class="control-btn" id="nextQuizBtn" style="width:100%; margin-top:25px; display:none;">Next Question</button>
                    </div>
                    ${nav}
                    <div class="back-home-ghost"><button data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button></div>
                </div>
            </div>
            ${renderBottomNav('quiz')}
        `;
        setMainContent(html);  
        utils.safeScrollTop();  
    },  

    criticalGame: function() {
        if (isChapterMissing) { renderComingSoon(); return; }
        const section = state.activeSection;
        if (!section) {
            console.error('No active section');
            return;
        }
        if (this.loadFailed()) return;
        if (!state.criticalData || !state.criticalData.length) {
            setMainContent('<div class="sum-card">No critical scenarios available.</div>');  
            return;  
        }  
        state.criticalIndex = 0;  
        state.criticalScore = 0;  
        this._renderCriticalQuestion();  
        updateHeader('Critical Scenarios', utils.escapeHTML(section.shortTitle), true);  
    },  

    _renderCriticalQuestion: function() {  
        const q = state.criticalData[state.criticalIndex];  
        const optionsHtml = q.options.map((opt, idx) => {
            const optText = typeof opt === 'string' ? opt : opt.t;
            return `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(optText)}</button>`;
        }).join('');  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        const html = `
            <div class="${tabs ? 'chapter-layout' : ''}">
                ${tabs}
                <div class="section-body">
                    <div class="critical-card">
                        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                            <span class="fc-progress">Scenario ${state.criticalIndex+1}/${state.criticalData.length}</span>
                            <span class="stats-badge" style="background:var(--glass-bg); color:var(--text-primary);">
                                Score: <strong>${state.criticalScore}</strong>
                            </span>
                        </div>
                        <div style="background: var(--btn-grad-scen); padding:15px; border-radius:12px; margin-bottom:20px; border:1px solid var(--border-scen);">
                            <strong style="color:var(--text-scen);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#siren"/></svg> Scenario</strong>
                            <p style="margin-top:8px; color:var(--text-primary);">${utils.escapeHTML(q.scenario)}</p>
                        </div>
                        <div style="font-weight:600; margin-bottom:15px;">${utils.escapeHTML(q.question)}</div>
                        <div class="quiz-options" id="criticalOptionsContainer">${optionsHtml}</div>
                        <div class="critical-feedback" id="criticalFeedback" style="display:none;"></div>
                        <button class="control-btn" id="nextCriticalBtn" style="width:100%; margin-top:25px; display:none;">Next Scenario</button>
                    </div>
                    ${nav}
                    <div class="back-home-ghost"><button data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button></div>
                </div>
            </div>
            ${renderBottomNav('critical')}
        `;
        setMainContent(html);  
        utils.safeScrollTop();  
    },  

    stats: function() {  
        const s = state.stats;  
        let chapStatsHtml = '';  
        for (let chId in s.chapters) {  
            const ch = s.chapters[chId];  
            const avg = ch.totalMax ? Math.round((ch.totalScore / ch.totalMax) * 100) : 0;  
            chapStatsHtml += `  
                <div class="stat-row">  
                    <span class="stat-label">Chapter ${utils.escapeHTML(chId)}</span>  
                    <span class="stat-value">${avg}% (${ch.attempts} attempts)</span>  
                </div>  
            `;  
        }  
        const totalChapters = window.CHAPTERS ? Object.keys(window.CHAPTERS).length : 1;  
        const overallPct = Math.round((Object.keys(s.chapters).length / totalChapters) * 100);  
        const critAcc = s.critical.total ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;  
        const html = `  
            <div class="stats-card">  
                <h2 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#chart-no-axes-column"/></svg> Your Performance</h2>  
                <div class="progress-header">  
                    <span class="progress-title">Overall Progress</span>  
                    <span style="font-weight:700;">${overallPct}%</span>  
                </div>  
                <div class="progress-container">
                    <div class="progress-bar" style="width: 0%;" data-fill="${overallPct}"></div>
                </div>
                <div class="stats-grid">  
                    <div class="stat-box">  
                        <span class="stat-label">Total Attempts</span>  
                        <span class="stat-value">${s.totalAttempts}</span>  
                    </div>  
                    <div class="stat-box">  
                        <span class="stat-label">Critical Acc</span>  
                        <span class="stat-value">${critAcc}%</span>  
                    </div>  
                </div>  
                ${chapStatsHtml || '<p style="margin-top:10px;">No chapter data yet.</p>'}  
                <div class="encouragement"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#lightbulb"/></svg> Keep up the great work!</div>  
                <div class="nav-row">  
                    <button class="control-btn" data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button>  
                </div>  
            </div>  
        `;  
        setMainContent(html);
        updateHeader('Statistics', '', true);
        utils.safeScrollTop();
        // Fill the bar from 0 with the custom curve once painted (perceived count-up).
        const bar = dom.main && dom.main.querySelector('.progress-bar[data-fill]');
        if (bar) requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = bar.dataset.fill + '%'; }));
    },

    reviewMistakes: function() {  
        if (!state.mistakes.length) {  
            setMainContent('<div class="sum-card">No mistakes to review.</div>');  
            return;  
        }  
        let items = state.mistakes.map(m => `  
            <div class="mistake-item">  
                <div class="mistake-question"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-help"/></svg> ${utils.escapeHTML(m.question)}</div>  
                <div class="mistake-answer"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Correct: ${utils.escapeHTML(m.correctAnswer)}</div>  
                <div class="mistake-rationale"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book"/></svg> ${utils.escapeHTML(m.rationale)}</div>  
            </div>  
        `).join('');  
        const html = `<div class="sum-card"><h3><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Mistakes Review</h3>${items}<div class="nav-row"><button class="control-btn" data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button></div></div>`;  
        setMainContent(html);  
        updateHeader('Mistakes', '', true);  
        utils.safeScrollTop();  
    }  
};  

// ---------- INDEX SEARCH INIT ----------
function initIndexSearch() {
    if (!chapterData || chapterData.id !== 'c-index') return;
    
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const container = document.getElementById('indexTableContainer');
        if (!input || !container) return;
        
        const rows = container.querySelectorAll('.index-table tr');
        
        function filterRows(text) {
            const lowerText = text.toLowerCase().trim();
            rows.forEach(row => {
                const link = row.querySelector('a');
                if (!link) return;
                const originalText = link.getAttribute('data-original') || link.textContent;
                if (!link.getAttribute('data-original')) {
                    link.setAttribute('data-original', originalText);
                }
                const rowText = originalText.toLowerCase();
                if (rowText.includes(lowerText)) {
                    row.classList.remove('filtered-out');
                    if (lowerText) {
                        const regex = new RegExp('(' + lowerText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
                        link.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
                    } else {
                        link.innerHTML = originalText;
                    }
                } else {
                    row.classList.add('filtered-out');
                    link.innerHTML = originalText;
                }
            });
        }

        input.removeEventListener('input', input._handler);
        clearBtn?.removeEventListener('click', clearBtn._handler);

        input._handler = function(e) {
            const val = e.target.value;
            if (clearBtn) clearBtn.style.display = val ? 'inline-block' : 'none';
            filterRows(val);
        };
        input.addEventListener('input', input._handler);

        if (clearBtn) {
            clearBtn._handler = function() {
                input.value = '';
                clearBtn.style.display = 'none';
                filterRows('');
            };
            clearBtn.addEventListener('click', clearBtn._handler);
        }
    }, 200);
}

// ---------- QUIZ ENGINE ----------  
const quizEngine = {  
    init: function(size) {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        const section = state.activeSection;  
        if (!section || !section.quiz) return;  
        state.quizData = utils.shuffle(section.quiz).slice(0, size);  
        state.qIndex = 0;  
        state.score = 0;  
        state.stats.totalAttempts = (state.stats.totalAttempts || 0) + 1;  
        storage.save(state.stats);  
        render.quizGame();  
    },  
    handleAnswer: function(selectedIdx, btn) {  
        const q = state.quizData[state.qIndex];  
        const isCorrect = selectedIdx === q.correct;  
        if (isCorrect) {  
            state.score++;  
        } else {  
            const correctAnswer = typeof q.options[q.correct] === 'string' 
                ? q.options[q.correct] 
                : q.options[q.correct].t;
            state.mistakes.push({  
                question: q.q,  
                correctAnswer: correctAnswer,  
                rationale: q.explanation  
            });  
        }  
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
            const correctBtn = document.querySelectorAll('.option-btn')[q.correct];
            if (correctBtn) correctBtn.classList.add('correct');
        }
        SmartToast.show({
            type: isCorrect ? 'correct' : 'wrong',
            message: isCorrect ? 'Correct' : 'Incorrect — see the explanation',
        });
        const fb = document.getElementById('quizFeedback');
        if (fb) {  
            fb.style.display = 'block';  
            fb.innerHTML = `<strong style="color:${isCorrect?'#155724':'#721c24'};">${isCorrect?'<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Correct':'<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-x"/></svg> Incorrect'}</strong>  
                            <p style="margin-top:8px;">${utils.escapeHTML(q.explanation)}</p>`;  
        }  
        const nextBtn = document.getElementById('nextQuizBtn');  
        if (nextBtn) nextBtn.style.display = 'block';  
        const scoreEl = document.getElementById('currentScore');  
        if (scoreEl) scoreEl.innerText = state.score;  
    },  
    next: function() {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        state.qIndex++;  
        if (state.qIndex < state.quizData.length) {  
            render.quizGame();  
        } else {  
            const chapterId = chapterData.id || 'c0';  
            if (!state.stats.chapters[chapterId]) {  
                state.stats.chapters[chapterId] = { attempts: 0, totalScore: 0, totalMax: 0 };  
            }  
            const chap = state.stats.chapters[chapterId];  
            chap.attempts += 1;  
            chap.totalScore += state.score;  
            chap.totalMax += state.quizData.length;  
            storage.save(state.stats);  
            const percentage = Math.round((state.score / state.quizData.length) * 100);  
            let msg = 'Keep studying!';  
            if (percentage >= 80) msg = 'Excellent!';  
            else if (percentage >= 60) msg = 'Good effort.';  
            const reviewBtn = state.mistakes.length ?
                `<button class="control-btn" id="scQuizReview"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Review ${state.mistakes.length} Mistakes</button>` : '';
            // Results modal: backdrop blur fade + panel scale-up over the last
            // graded question. The score ring fills from 0 with the custom curve.
            SmartModal.open(`
                <h2>Quiz Complete!</h2>
                <div class="sc-modal-score">${percentage}%</div>
                <div class="sc-modal-ring"><i></i></div>
                <p>${msg}</p>
                <div class="sc-modal-actions">
                    ${reviewBtn}
                    <button class="control-btn" data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button>
                </div>
            `, (bd) => {
                const fill = bd.querySelector('.sc-modal-ring > i');
                if (fill) requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = percentage + '%'; }));
                const rev = bd.querySelector('#scQuizReview');
                if (rev) rev.addEventListener('click', () => { SmartModal.close(); render.reviewMistakes(); });
            });
        }
    }
};

// ---------- CRITICAL ENGINE ----------  
const criticalEngine = {  
    handleAnswer: function(selectedIdx, btn) {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        const q = state.criticalData[state.criticalIndex];  
        const isCorrect = selectedIdx === q.correct;  
        if (isCorrect) {  
            state.criticalScore++;  
            state.stats.critical.correct = (state.stats.critical.correct || 0) + 1;  
        }  
        state.stats.critical.total = (state.stats.critical.total || 0) + 1;  
        storage.save(state.stats);  

        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
            const correctBtn = document.querySelectorAll('.option-btn')[q.correct];
            if (correctBtn) correctBtn.classList.add('correct');
        }
        SmartToast.show({
            type: isCorrect ? 'correct' : 'wrong',
            message: isCorrect ? 'Correct' : 'Incorrect — see the explanation',
        });
        const fb = document.getElementById('criticalFeedback');
        if (fb) {  
            fb.style.display = 'block';  
            fb.innerHTML = `<strong style="color:${isCorrect?'#155724':'#721c24'};">${isCorrect?'<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Correct':'<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-x"/></svg> Incorrect'}</strong>  
                            <p style="margin-top:8px;">${utils.escapeHTML(q.explanation)}</p>  
                            ${q.kpi ? `<div class="highlight-box" style="margin-top:10px;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#target"/></svg> KPI: ${utils.escapeHTML(q.kpi)}</div>` : ''}`;  
        }  
        const nextBtn = document.getElementById('nextCriticalBtn');  
        if (nextBtn) nextBtn.style.display = 'block';  
    },  
    next: function() {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        state.criticalIndex++;  
        if (state.criticalIndex < state.criticalData.length) {  
            render._renderCriticalQuestion();  
        } else {  
            const accuracy = Math.round((state.criticalScore / state.criticalData.length) * 100);
            SmartModal.open(`
                <h2>Scenarios Finished</h2>
                <div class="sc-modal-score">${accuracy}%</div>
                <div class="sc-modal-ring"><i></i></div>
                <p>Correct: ${state.criticalScore}/${state.criticalData.length}</p>
                <div class="sc-modal-actions">
                    <button class="control-btn" data-action="backHome"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#house"/></svg> Home</button>
                </div>
            `, (bd) => {
                const fill = bd.querySelector('.sc-modal-ring > i');
                if (fill) requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = accuracy + '%'; }));
            });
        }
    }
};

// ---------- WATER RIPPLE EFFECT ----------  
function createRipple(event, target) {  
    try {
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.7)';

        target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    } catch (err) {
        // Silently fail
    }
}  

// ---------- OPTIMISED MUTATION OBSERVER (only watches #mainContent) ----------
const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
        for (const node of m.addedNodes) {
            if (node.nodeType === 1 && node.classList?.contains('bottom-nav')) {
                initBottomNav();
                initFooterAwareNav();
                return;
            }
        }
    }
});
if (dom.main) {
    observer.observe(dom.main, { childList: true, subtree: true });
}

// ---------- COMPLETE EVENT DELEGATION ----------  
document.addEventListener('click', function(e) {  
    const target = e.target.closest('button, .nav-pill');  
    if (!target) return;  
    
    createRipple(e, target);
    
    // FIX #4: integrate home button handling directly
    if (target.id === 'homeBtn') {
        e.preventDefault();
        const inSub = window.location.pathname.includes('/chapters/');
        window.location.href = inSub ? '../index.html' : 'index.html';
        return;
    }

    const action = target.dataset.action;
    const view = target.dataset.view;
    const sectionNav = target.dataset.sectionNav;
    const sectionId = target.dataset.sectionId;
    const quizSize = target.dataset.quizSize;
    const flashAction = target.dataset.flash;
    const optIndex = target.dataset.optIndex;
    
    if (action === 'backHome') {
        e.preventDefault();
        const returnUrl = sessionStorage.getItem('smartcare_reviewer_return');
        if (returnUrl) {
            window.location.href = returnUrl;
        } else {
            const isInSubfolder = window.location.pathname.includes('/chapters/');
            window.location.href = isInSubfolder ? '../index.html' : 'index.html';
        }
        return;
    }
    
    if (view) {
        e.preventDefault();
        const currentSectionId = state.activeSectionId;
        if (currentSectionId) {
            utils.setQueryParam('view', view);
            switchSection(currentSectionId, false);
        }
        return;
    }
    
    if (action === 'stats') {
        render.stats();
        return;
    }
    
    if (action === 'reviewMistakes') {
        render.reviewMistakes();
        return;
    }
    
    if (sectionId && target.classList.contains('section-tab')) {
        e.preventDefault();
        switchSection(sectionId);
        return;
    }
    
    if (sectionNav && sectionId) {
        e.preventDefault();
        switchSection(sectionId);
        return;
    }
    
    if (quizSize) {
        quizEngine.init(parseInt(quizSize, 10));
        return;
    }
    
    if (flashAction === 'prev') {
        if (state.fIndex > 0) {
            state.fIndex--;
            render._renderFlashcard();
        }
        return;
    }
    
    if (flashAction === 'next') {
        if (state.fIndex < state.flashData.length - 1) {
            state.fIndex++;
            render._renderFlashcard();
        }
        return;
    }
    
    if (optIndex !== undefined && target.classList.contains('option-btn')) {
        const inQuiz = document.getElementById('quizFeedback') !== null;
        const inCritical = document.getElementById('criticalFeedback') !== null;
        
        if (inQuiz) {
            quizEngine.handleAnswer(parseInt(optIndex, 10), target);
        } else if (inCritical) {
            criticalEngine.handleAnswer(parseInt(optIndex, 10), target);
        }
        return;
    }
    
    if (target.id === 'nextQuizBtn') {
        quizEngine.next();
        return;
    }
    
    if (target.id === 'nextCriticalBtn') {
        criticalEngine.next();
        return;
    }
});

// FIX #5: safer popstate handler
window.addEventListener('popstate', async function () {
    const sectionId = utils.getQueryParam('section');
    const view = utils.getQueryParam('view') || 'summary';

    if (!chapterData) return;

    const section = sectionId ? utils.getSection(sectionId) : null;

    if (section) {
        state.activeSectionId = sectionId;
        state.activeSection = section;
    } else if (state.sections && state.sections.length > 0) {
        state.activeSectionId = state.sections[0].id;
        state.activeSection = state.sections[0];
    }

    if (state.activeSection && state.activeSection.summary === undefined && dom.main && typeof renderState === 'function') {
        renderState(dom.main, 'loading', { lines: 4 });
    }

    await utils.ensureSectionData(state.activeSection);
    state.flashData = (state.activeSection && state.activeSection.flashcards) || [];
    state.criticalData = (state.activeSection && state.activeSection.critical) || [];

    if (view === 'flashcards') render.flashcards();
    else if (view === 'quiz') render.quizSetup();
    else if (view === 'critical') render.criticalGame();
    else render.summary();
});

// ---------- BOOTSTRAP (DOMContentLoaded) ----------
document.addEventListener('DOMContentLoaded', function() {

    // ── Create progress bar if missing ─────────────────────
    if (!document.getElementById('pageProgressBar')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'pageProgressBar';
        wrapper.innerHTML = '<div class="progress-bar-scroll"></div>';
        document.body.appendChild(wrapper);
    }

    // ── Initialise global references for scroll controller ──
    progressBarWrapper = document.getElementById('pageProgressBar');

    // ── Set initial progress bar position ──────────────────
    const initialHeader = document.querySelector('header');
    if (initialHeader && progressBarWrapper) {
        setTimeout(() => {
            const realHeight = initialHeader.getBoundingClientRect().height;
            progressBarWrapper.style.top = realHeight + 'px';
        }, 30);
    }

    // ── Theme cycling (src/theme.js — window.SmartTheme) ────
    const themeBtn = document.getElementById('themeToggle');
    const htmlEl   = document.documentElement;
    if (themeBtn && window.SmartTheme) {
        themeBtn.addEventListener('click', () => window.SmartTheme.next());
    }

    // ── Font size ───────────────────────────────────────────
    const savedFont = localStorage.getItem('smartcare_font_size') || 'medium';
    htmlEl.setAttribute('data-font-size', savedFont);

    // ── Stats badge ─────────────────────────────────────────
    function refreshStatsBadge() {
        try {
            const s = storage.load();
            const acc = s.critical && s.critical.total
                ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;
            const attEl = document.getElementById('statsAttempts');
            const crtEl = document.getElementById('statsCritical');
            if (attEl) attEl.textContent = s.totalAttempts || 0;
            if (crtEl) crtEl.textContent = acc + '%';
        } catch(e) {}
    }
    refreshStatsBadge();

    // ── Offline support + last-visited tracking ─────────────
    registerServiceWorker();
    recordLastVisited();

    // ── Chapter page boot ───────────────────────────────────
    async function bootApp() {
        if (isChapterMissing) {
            renderComingSoon();
            return;
        }

        const urlSection = utils.getQueryParam('section');
        const urlView    = utils.getQueryParam('view') || 'summary';

        if (urlSection && state.sections) {
            const section = utils.getSection(urlSection);
            if (section) {
                state.activeSectionId = urlSection;
                state.activeSection   = section;
                if (section.summary === undefined && dom.main && typeof renderState === 'function') {
                    renderState(dom.main, 'loading', { lines: 4 });
                }
                await utils.ensureSectionData(section);
                state.flashData       = section.flashcards || [];
                state.criticalData    = section.critical   || [];
                if      (urlView === 'flashcards') render.flashcards();
                else if (urlView === 'quiz')       render.quizSetup();
                else if (urlView === 'critical')   render.criticalGame();
                else                               render.summary();
            } else {
                if (state.sections && state.sections.length > 0) switchSection(state.sections[0].id);
            }
        } else {
            if (state.sections && state.sections.length > 0) switchSection(state.sections[0].id);
        }
    }

    // ── Attach unified scroll controller ────────────────────
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // Run boot sequence directly if the DOM is already interactive/complete, otherwise wait for listener.
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        bootApp();
    } else {
        document.addEventListener('DOMContentLoaded', bootApp);
    }
});

})();