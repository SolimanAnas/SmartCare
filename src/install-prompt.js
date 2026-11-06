/* SmartCare — install toast, shared by the home page, the courses hub, every
 * course exam page and every course reviewer.
 *
 *   Android browser → "Get the app on Google Play" (the store listing opens
 *                     the Play Store app on the phone).
 *   iPhone / iPad   → "Add to Home Screen" steps (installs the PWA).
 *   Anything else   → nothing, unless opened from a page's Install button.
 *
 * Never shown inside the installed app: the Android app is a Trusted Web
 * Activity (it opens the site with an android-app:// referrer and reports
 * display-mode standalone), and an iOS home-screen app runs standalone too.
 *
 * Dismissing it hides it on every page for a day (same keys the old home
 * page banner used, so an earlier dismissal still counts).
 *
 * Include once, near the end of <body>:
 *   <script src="(rel)/src/install-prompt.js" defer></script>
 * A page's own Install button can call SmartInstall.open().
 */
(function () {
    'use strict';

    var PLAY_URL = 'https://play.google.com/store/apps/details?id=io.github.solimananas.smartcare';
    var SNOOZE_KEY = 'smartcare_pwa_install';
    var NEVER_KEY = 'smartcare_pwa_never';
    var APP_KEY = 'smartcare_in_app';
    var SNOOZE_MS = 24 * 60 * 60 * 1000;
    var LATER_MS = 30 * 24 * 60 * 60 * 1000; // after tapping "Get it" / "How?"
    var DELAY_MS = 4000;

    var script = document.currentScript;
    var BASE = script ? script.src.replace(/src\/install-prompt\.js(\?.*)?$/, '') : '';

    function store(fn) { try { return fn(); } catch (e) { return null; } }
    function get(k) { return store(function () { return localStorage.getItem(k); }); }
    function set(k, v) { store(function () { localStorage.setItem(k, v); }); }

    var ua = navigator.userAgent || '';
    var isIos = /iphone|ipad|ipod/i.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS
    var isAndroid = /android/i.test(ua);
    var isWebView = /; wv\)/.test(ua); // another app's in-app browser

    // Inside the Play Store app (TWA) the first page has an android-app://
    // referrer; remember it for the rest of the session's navigations.
    if (/^android-app:\/\//.test(document.referrer || '')) {
        store(function () { sessionStorage.setItem(APP_KEY, '1'); });
    }
    function inApp() {
        return (window.matchMedia && (
                window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: fullscreen)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches)) ||
            window.navigator.standalone === true ||
            store(function () { return sessionStorage.getItem(APP_KEY); }) === '1';
    }

    function snoozed() {
        return get(NEVER_KEY) === '1' || Date.now() < parseInt(get(SNOOZE_KEY) || '0', 10);
    }
    function snooze(ms) { set(SNOOZE_KEY, String(Date.now() + ms)); }

    // Desktop Chrome/Edge: keep the browser's own prompt for the Install button.
    var deferred = null;
    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferred = e;
    });
    window.addEventListener('appinstalled', function () { set(NEVER_KEY, '1'); hide(); });

    // iOS uses the current page's manifest and icon when it is added to the
    // Home Screen; most course pages don't link them, so add them here.
    function ensureHomeScreenMeta() {
        var head = document.head;
        if (!head.querySelector('link[rel="manifest"]')) {
            var m = document.createElement('link');
            m.rel = 'manifest'; m.href = BASE + 'manifest.json';
            head.appendChild(m);
        }
        if (!head.querySelector('link[rel="apple-touch-icon"]')) {
            var i = document.createElement('link');
            i.rel = 'apple-touch-icon'; i.href = BASE + 'icons/icon-192x192.png';
            head.appendChild(i);
        }
        [['apple-mobile-web-app-capable', 'yes'], ['mobile-web-app-capable', 'yes'],
         ['apple-mobile-web-app-title', 'SmartCare']].forEach(function (p) {
            if (!head.querySelector('meta[name="' + p[0] + '"]')) {
                var t = document.createElement('meta');
                t.name = p[0]; t.content = p[1];
                head.appendChild(t);
            }
        });
    }

    var CSS = '' +
        '.sci-toast{position:fixed;left:50%;bottom:0;z-index:2147483000;width:min(440px,calc(100% - 24px));' +
        'transform:translate(-50%,0);padding-bottom:max(12px,env(safe-area-inset-bottom));' +
        'font:500 15px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#e8f0fe;' +
        'animation:sci-in .32s cubic-bezier(.2,.9,.3,1.2)}' +
        '.sci-toast.sci-out{animation:sci-out .25s ease-in forwards}' +
        '@keyframes sci-in{from{transform:translate(-50%,110%);opacity:0}}' +
        '@keyframes sci-out{to{transform:translate(-50%,110%);opacity:0}}' +
        '@media (prefers-reduced-motion:reduce){.sci-toast,.sci-toast.sci-out{animation:none}}' +
        '.sci-card{background:rgba(10,20,40,.96);-webkit-backdrop-filter:blur(18px) saturate(160%);' +
        'backdrop-filter:blur(18px) saturate(160%);border:1px solid rgba(96,165,250,.4);border-radius:18px;' +
        'box-shadow:0 10px 34px rgba(0,0,0,.45);padding:12px}' +
        '.sci-row{display:flex;align-items:center;gap:12px}' +
        '.sci-icon{flex:none;width:44px;height:44px;border-radius:11px;object-fit:cover;background:#1e3a8a}' +
        '.sci-text{flex:1;min-width:0}' +
        '.sci-title{display:block;font-weight:700;font-size:15px;color:#f1f5ff}' +
        '.sci-sub{display:block;font-size:13px;color:#b4c3dc}' +
        '.sci-go{flex:none;display:inline-flex;align-items:center;justify-content:center;min-height:38px;' +
        'padding:0 18px;border:0;border-radius:999px;background:#2563eb;color:#fff;font-weight:700;font-size:14px;' +
        'line-height:1;font-family:inherit;text-decoration:none;cursor:pointer;white-space:nowrap}' +
        '.sci-go:hover{background:#1d4ed8}' +
        '.sci-x{flex:none;width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.18);' +
        'background:rgba(255,255,255,.08);color:#cbd5e1;font-size:20px;line-height:1;font-family:inherit;' +
        'cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0}' +
        '.sci-x:hover{background:rgba(255,255,255,.16);color:#fff}' +
        '.sci-go:focus-visible,.sci-x:focus-visible{outline:3px solid #93c5fd;outline-offset:2px}' +
        '.sci-steps{margin:12px 0 2px;padding:0;list-style:none;display:grid;gap:8px;' +
        'border-top:1px solid rgba(255,255,255,.1);padding-top:12px}' +
        '.sci-steps li{display:flex;align-items:center;gap:10px;font-size:14px;color:#d6e0f0}' +
        '.sci-steps b{color:#fff}' +
        '.sci-n{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(96,165,250,.22);' +
        'border:1px solid rgba(96,165,250,.55);color:#bfdbfe;font-size:12px;font-weight:700;' +
        'display:inline-flex;align-items:center;justify-content:center}' +
        '.sci-glyph{display:inline-block;width:18px;height:18px;vertical-align:-3px;color:#60a5fa}';

    // The iOS Share glyph (square with an up arrow).
    var SHARE_SVG = '<svg class="sci-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M12 3v12"/><path d="m8 7 4-4 4 4"/><path d="M8 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"/></svg>';
    var ADD_SVG = '<svg class="sci-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>';

    var el = null;

    function hide() {
        if (!el) return;
        var t = el; el = null;
        t.classList.add('sci-out');
        setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 260);
    }

    function build(kind) {
        if (!document.getElementById('sci-style')) {
            var st = document.createElement('style');
            st.id = 'sci-style'; st.textContent = CSS;
            document.head.appendChild(st);
        }
        var ios = kind === 'ios';
        var t = document.createElement('div');
        t.className = 'sci-toast';
        t.setAttribute('role', 'region');
        t.setAttribute('aria-label', ios ? 'Install SmartCare' : 'Get the SmartCare app');
        t.innerHTML =
            '<div class="sci-card">' +
              '<div class="sci-row">' +
                '<img class="sci-icon" alt="" src="' + BASE + 'icons/icon.png">' +
                '<div class="sci-text">' +
                  '<strong class="sci-title">' + (ios ? 'Install SmartCare' : 'Get the SmartCare app') + '</strong>' +
                  '<span class="sci-sub">' + (ios ? 'Add it to your Home Screen · works offline'
                                                   : 'Free on Google Play · works offline') + '</span>' +
                '</div>' +
                (ios ? '<button type="button" class="sci-go" data-act="how">How?</button>'
                     : '<a class="sci-go" data-act="play" href="' + PLAY_URL + '" target="_blank" rel="noopener">Get it</a>') +
                '<button type="button" class="sci-x" data-act="close" aria-label="Dismiss">&times;</button>' +
              '</div>' +
              (ios ? '<ol class="sci-steps" hidden>' +
                       '<li><span class="sci-n">1</span><span>Tap <b>Share</b> ' + SHARE_SVG + ' in the browser toolbar</span></li>' +
                       '<li><span class="sci-n">2</span><span>Choose <b>Add to Home Screen</b> ' + ADD_SVG + '</span></li>' +
                       '<li><span class="sci-n">3</span><span>Tap <b>Add</b>. SmartCare opens like an app</span></li>' +
                     '</ol>' : '') +
            '</div>';
        t.addEventListener('click', function (e) {
            var b = e.target.closest('[data-act]');
            if (!b) return;
            var act = b.getAttribute('data-act');
            if (act === 'close') { snooze(SNOOZE_MS); hide(); }
            else if (act === 'play') { snooze(LATER_MS); setTimeout(hide, 300); }
            else if (act === 'how') {
                snooze(LATER_MS);
                t.querySelector('.sci-steps').hidden = false;
                b.hidden = true;
            }
        });
        t.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { snooze(SNOOZE_MS); hide(); }
        });
        return t;
    }

    function show(kind) {
        if (el) return;
        if (kind === 'ios') ensureHomeScreenMeta();
        el = build(kind);
        document.body.appendChild(el);
    }

    // Don't cover the controls of an exam or quiz that is in progress.
    function busy() {
        return ['examScreen', 'exam-screen'].some(function (id) {
            var s = document.getElementById(id);
            return !!(s && s.offsetParent !== null);
        });
    }

    function autoShow() {
        if (inApp() || snoozed() || isWebView) return;
        var kind = isIos ? 'ios' : isAndroid ? 'android' : null;
        if (!kind) return;
        setTimeout(function () {
            if (!busy() && !snoozed()) show(kind);
        }, DELAY_MS);
    }

    // For a page's own "Install" button: always shows something useful.
    function open() {
        if (inApp()) return;
        if (isIos) { show('ios'); return; }
        if (isAndroid) { show('android'); return; }
        if (deferred) { deferred.prompt(); deferred = null; return; }
        show('android'); // desktop: the Play listing can send the app to a phone
    }

    window.SmartInstall = { open: open, hide: hide, PLAY_URL: PLAY_URL };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoShow);
    else autoShow();
})();
