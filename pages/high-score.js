/* ============================================================================
 * SmartCare — "High score 🎊" celebration + publish-to-leaderboard prompt
 * ----------------------------------------------------------------------------
 * Shared by the Megacode simulator, the course exam pages and the Prometric
 * exam. A page calls, once a result is final:
 *
 *   SmartCareHighScore.report({
 *     section:   'megacode' | 'prometric' | 'courses',
 *     testId:    'acls-acls-exam',        // stable id, see slug()
 *     testLabel: 'ACLS Exam',             // shown on the board
 *     score:     92,                      // percent
 *     questions: 25                       // exam length (null for Megacode)
 *   });
 *
 * If the score qualifies (≥ 85%, exams ≥ 20 questions, and better than what
 * this user already published for that test) a toast pops up with confetti
 * and a "Publish to leaderboard" button. Guests are sent through sign-in and
 * land on pages/leaderboard.html, which finishes publishing the saved score.
 *
 * The Supabase client is loaded lazily — only when a toast actually shows —
 * so exam pages pay nothing for this until someone earns a high score.
 * ========================================================================== */
(function () {
  'use strict';

  var MIN_SCORE = 85;
  var MIN_QUESTIONS = 20;
  var SECTIONS = ['megacode', 'prometric', 'courses'];
  // smartcare_* keys sync across devices (see supabase-client.js), so a score
  // published on the phone isn't re-offered on the laptop.
  var PUBLISHED_KEY = 'smartcare_leaderboard_published';
  // Score waiting for a guest to sign in. Device-local on purpose.
  var PENDING_KEY = 'leaderboard.pending';
  var PENDING_TTL = 24 * 3600 * 1000;

  // Directory this script was served from (pages/), so the lazy-loaded
  // Supabase files and links resolve from any page, including src/prometric/.
  var BASE = (function () {
    var s = document.currentScript;
    try { return s && s.src ? new URL('.', s.src).href : ''; } catch (e) { return ''; }
  })();

  function readJSON(k, d) {
    try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; }
  }
  function writeJSON(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ }
  }

  function slug(s) {
    return String(s || '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 50).replace(/-+$/, '');
  }

  function entryKey(e) { return e.section + ':' + e.testId; }

  function normalize(e) {
    if (!e || SECTIONS.indexOf(e.section) === -1 || !e.testId) return null;
    var score = Math.round(Number(e.score));
    if (!isFinite(score)) return null;
    return {
      section: e.section,
      testId: String(e.testId),
      testLabel: String(e.testLabel || e.testId).slice(0, 80),
      score: score,
      questions: e.questions == null ? null : Math.round(Number(e.questions))
    };
  }

  function qualifies(e) {
    if (!e || e.score < MIN_SCORE || e.score > 100) return false;
    if (e.section !== 'megacode' && !(e.questions >= MIN_QUESTIONS)) return false;
    var prev = readJSON(PUBLISHED_KEY, {})[entryKey(e)];
    return !(prev >= e.score);
  }

  function markPublished(e) {
    var all = readJSON(PUBLISHED_KEY, {});
    var k = entryKey(e);
    if (!(all[k] >= e.score)) { all[k] = e.score; writeJSON(PUBLISHED_KEY, all); }
  }

  /* ── Lazy Supabase client ── */
  var cloudP = null;
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = src;
      el.onload = resolve;
      el.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(el);
    });
  }
  function loadCloud() {
    if (window.SmartCareCloud) return Promise.resolve(window.SmartCareCloud);
    if (!cloudP) {
      cloudP = (window.SUPABASE_URL ? Promise.resolve() : loadScript(BASE + 'supabase-config.js'))
        .then(function () { return window.SmartCareCloud ? null : loadScript(BASE + 'supabase-client.js'); })
        .then(function () {
          if (!window.SmartCareCloud) throw new Error('Cloud not available');
          return window.SmartCareCloud;
        });
      cloudP.catch(function () { cloudP = null; });   // allow a retry once back online
    }
    return cloudP;
  }

  function cleanName(s) {
    // Control characters (\s covers tab/newline; the rest are stripped below).
    return String(s || '').replace(/\s+/g, ' ')
      .split('').filter(function (ch) { var c = ch.charCodeAt(0); return c > 31 && c !== 127; }).join('')
      .trim().slice(0, 32);
  }

  function defaultName(user) {
    var meta = (user && user.user_metadata) || {};
    return cleanName(meta.full_name || meta.name || (user && user.email ? user.email.split('@')[0] : ''));
  }

  /** Publish an entry under `name`. Resolves true if it's the user's new best. */
  function publish(e, name) {
    return loadCloud().then(function (cloud) {
      return cloud.submitHighScore({
        section: e.section, testId: e.testId, testLabel: e.testLabel,
        score: e.score, questions: e.questions, name: cleanName(name)
      });
    }).then(function (improved) {
      markPublished(e);
      clearPending();
      return improved;
    });
  }

  function savePending(e) { writeJSON(PENDING_KEY, { entry: e, at: Date.now() }); }
  function pending() {
    var p = readJSON(PENDING_KEY, null);
    if (!p || !p.entry || Date.now() - p.at > PENDING_TTL) return null;
    var e = normalize(p.entry);
    return e && qualifies(e) ? e : null;
  }
  function clearPending() { try { localStorage.removeItem(PENDING_KEY); } catch (err) { /* ignore */ } }

  function errText(err) {
    if (!navigator.onLine) return 'You’re offline — connect and try again.';
    var m = err && err.message ? err.message : '';
    return m && m.length < 120 ? m : 'Couldn’t reach the leaderboard. Please try again.';
  }

  /* ── Styles (injected once; self-contained so it looks the same on every page) ── */
  var CSS = '' +
    '.schs{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));z-index:2147483000;' +
      'width:min(400px,calc(100% - 32px));transform:translate(-50%,0);box-sizing:border-box;' +
      'background:linear-gradient(160deg,#16213a,#0c1424);color:#eef3ff;border:1px solid rgba(250,204,21,.45);' +
      'border-radius:18px;padding:16px 16px 14px;box-shadow:0 24px 60px -12px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.04) inset;' +
      'font:500 14px/1.45 "DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;' +
      'animation:schs-in .32s cubic-bezier(.16,1,.3,1) both}' +
    '.schs.out{animation:schs-out .2s ease-in both}' +
    '@keyframes schs-in{from{opacity:0;transform:translate(-50%,24px) scale(.96)}to{opacity:1;transform:translate(-50%,0) scale(1)}}' +
    '@keyframes schs-out{to{opacity:0;transform:translate(-50%,12px)}}' +
    '.schs *{box-sizing:border-box}' +
    '.schs-top{display:flex;align-items:center;gap:12px;padding-right:26px}' +
    '.schs-emoji{font-size:30px;line-height:1}' +
    '.schs-k{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#facc15}' +
    '.schs-t{font-size:16px;font-weight:700;margin-top:1px;word-break:break-word}' +
    '.schs-t b{color:#facc15}' +
    '.schs-p{margin:10px 0 0;color:#b6c2dc;font-size:13px}' +
    '.schs-p.err{color:#fca5a5}' +
    '.schs-x{position:absolute;top:8px;right:8px;width:30px;height:30px;border:0;border-radius:50%;background:transparent;' +
      'color:#8fa0c2;font-size:20px;line-height:1;cursor:pointer}' +
    '.schs-x:hover{background:rgba(255,255,255,.08);color:#fff}' +
    '.schs-row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}' +
    '.schs-btn{flex:1 1 auto;min-height:40px;padding:9px 14px;border-radius:11px;border:1px solid rgba(255,255,255,.14);' +
      'background:rgba(255,255,255,.06);color:#eef3ff;font:inherit;font-weight:700;cursor:pointer;text-align:center;text-decoration:none;' +
      'display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:transform .12s ease,background .15s ease}' +
    '.schs-btn:active{transform:scale(.97)}' +
    '.schs-btn.pri{background:linear-gradient(135deg,#facc15,#f59e0b);border-color:transparent;color:#1a1300}' +
    '.schs-btn[disabled]{opacity:.6;cursor:default}' +
    '.schs-in{width:100%;margin-top:10px;min-height:42px;padding:9px 12px;border-radius:11px;border:1px solid rgba(255,255,255,.18);' +
      'background:rgba(0,0,0,.28);color:#fff;font:inherit;font-size:15px}' +
    '.schs-in:focus{outline:2px solid #facc15;outline-offset:1px}' +
    '.schs-lbl{display:block;margin-top:10px;font-size:12px;color:#8fa0c2}' +
    '.schs-confetti{position:fixed;inset:0;pointer-events:none;z-index:2147482999;overflow:hidden}' +
    '.schs-confetti i{position:absolute;top:-14px;width:8px;height:14px;border-radius:2px;opacity:.95;' +
      'animation:schs-fall var(--d) cubic-bezier(.25,.6,.45,1) var(--w) forwards}' +
    '@keyframes schs-fall{to{transform:translate3d(var(--x),105vh,0) rotate(var(--r));opacity:.9}}' +
    '@media (prefers-reduced-motion:reduce){.schs,.schs.out{animation:none}.schs-confetti{display:none}}';

  function injectCSS() {
    if (document.getElementById('schs-css')) return;
    var st = document.createElement('style');
    st.id = 'schs-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = document.createElement('div');
    box.className = 'schs-confetti';
    box.setAttribute('aria-hidden', 'true');
    var colors = ['#facc15', '#f59e0b', '#22c55e', '#3b82f6', '#ec4899', '#a855f7', '#f97316'];
    for (var i = 0; i < 70; i++) {
      var p = document.createElement('i');
      p.style.left = (Math.random() * 100) + '%';
      p.style.background = colors[i % colors.length];
      p.style.setProperty('--x', ((Math.random() - 0.5) * 180) + 'px');
      p.style.setProperty('--r', ((Math.random() - 0.5) * 1080) + 'deg');
      p.style.setProperty('--d', (1.6 + Math.random() * 1.4) + 's');
      p.style.setProperty('--w', (Math.random() * 0.5) + 's');
      if (i % 3 === 0) { p.style.width = '10px'; p.style.height = '10px'; p.style.borderRadius = '50%'; }
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3800);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ── Toast ── */
  var current = null;

  function closeToast() {
    if (!current) return;
    var t = current;
    current = null;
    t.classList.add('out');
    setTimeout(function () { t.remove(); }, 220);
  }

  function showToast(e) {
    injectCSS();
    if (current) current.remove();
    var t = el('div', 'schs');
    t.setAttribute('role', 'dialog');
    t.setAttribute('aria-live', 'polite');
    t.setAttribute('aria-label', 'High score');
    current = t;

    var x = el('button', 'schs-x', '×');
    x.type = 'button';
    x.setAttribute('aria-label', 'Dismiss');
    x.addEventListener('click', closeToast);

    var top = el('div', 'schs-top');
    top.appendChild(el('span', 'schs-emoji', '🎊'));
    var head = el('div');
    head.appendChild(el('div', 'schs-k', 'High score'));
    var title = el('div', 'schs-t');
    title.appendChild(el('b', null, e.score + '%'));
    title.appendChild(document.createTextNode(' · ' + e.testLabel));
    head.appendChild(title);
    top.appendChild(head);

    var body = el('div');
    t.appendChild(x);
    t.appendChild(top);
    t.appendChild(body);
    document.body.appendChild(t);
    confetti();

    function btn(label, primary, onClick) {
      var b = el('button', 'schs-btn' + (primary ? ' pri' : ''), label);
      b.type = 'button';
      b.addEventListener('click', onClick);
      return b;
    }
    function link(label, href, primary) {
      var a = el('a', 'schs-btn' + (primary ? ' pri' : ''), label);
      a.href = href;
      return a;
    }
    function render(text, actions, isErr) {
      body.textContent = '';
      if (text) body.appendChild(el('p', 'schs-p' + (isErr ? ' err' : ''), text));
      if (actions && actions.length) {
        var row = el('div', 'schs-row');
        actions.forEach(function (a) { row.appendChild(a); });
        body.appendChild(row);
      }
    }

    function offer() {
      render('You made the top-achiever cut. Publish it to the SmartCare leaderboard?', [
        btn('Not now', false, closeToast),
        btn('🏆 Publish to leaderboard', true, start)
      ]);
    }

    function start() {
      render('Connecting…', []);
      loadCloud()
        .then(function (cloud) {
          return cloud.getUser().then(function (user) {
            if (!user) return guest();
            return cloud.getLeaderboardName().then(function (name) {
              if (name) return send(name);
              askName(defaultName(user));
            });
          });
        })
        .catch(function (err) { failed(err, start); });
    }

    function guest() {
      savePending(e);
      render('Sign in with Google to publish. Your score is kept for 24 hours.', [
        btn('Not now', false, closeToast),
        link('Sign in & publish', BASE + 'login.html?next=leaderboard.html', true)
      ]);
    }

    function askName(suggested) {
      body.textContent = '';
      var form = el('form');
      var lbl = el('label', 'schs-lbl', 'Name shown on the leaderboard (public)');
      var input = el('input', 'schs-in');
      input.id = 'schs-name';
      lbl.htmlFor = input.id;
      input.maxLength = 32;
      input.autocomplete = 'nickname';
      input.value = suggested;
      input.placeholder = 'Your name';
      var row = el('div', 'schs-row');
      var go = el('button', 'schs-btn pri', 'Publish');
      go.type = 'submit';
      row.appendChild(btn('Cancel', false, closeToast));
      row.appendChild(go);
      form.appendChild(lbl);
      form.appendChild(input);
      form.appendChild(row);
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var name = cleanName(input.value);
        if (name.length < 2) { input.focus(); return; }
        send(name);
      });
      body.appendChild(form);
      setTimeout(function () { input.focus(); input.select(); }, 30);
    }

    function send(name) {
      render('Publishing…', []);
      publish(e, name)
        .then(function () {
          render('You’re on the board, ' + name + '! 🏆', [
            btn('Close', false, closeToast),
            link('View leaderboard', BASE + 'leaderboard.html?section=' + e.section, true)
          ]);
        })
        .catch(function (err) { failed(err, function () { send(name); }); });
    }

    function failed(err, retry) {
      render(errText(err), [btn('Close', false, closeToast), btn('Try again', true, retry)], true);
    }

    offer();
  }

  /** Call once a result is final. Returns true if the high-score toast was shown. */
  function report(entry) {
    var e = normalize(entry);
    if (!qualifies(e)) return false;
    var show = function () { showToast(e); };
    if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
    return true;
  }

  window.SmartCareHighScore = {
    MIN_SCORE: MIN_SCORE,
    MIN_QUESTIONS: MIN_QUESTIONS,
    report: report,
    slug: slug,
    publish: publish,
    pending: pending,
    clearPending: clearPending,
    loadCloud: loadCloud,
    defaultName: defaultName,
    cleanName: cleanName,
    _qualifies: function (entry) { return qualifies(normalize(entry)); }
  };
})();
