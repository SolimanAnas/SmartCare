'use strict';

/* SmartCare Exam Review — shared quiz engine.
 * Used by acls/bdls/bls/itls/medical/pals/pepp/ppet.html. Each page defines
 * `window.EXAM_CONFIG = { id, qCountFallback }` in an inline <script> before
 * loading this file — `id` namespaces this page's localStorage keys
 * (progress/theme/mode) so pages don't collide with each other.
 *
 * A page opts into the qCount "how many questions" selector purely by
 * having a #qCount <select> in its markup — startExam() checks for the
 * element rather than reading a config flag. Pages without one (itls,
 * pepp — they use a multi-form-card picker instead) load their exam's
 * full question set unshuffled, matching their original behavior.
 */

const EXAM_ID = (window.EXAM_CONFIG && window.EXAM_CONFIG.id) || 'exam';
const QCOUNT_FALLBACK = (window.EXAM_CONFIG && window.EXAM_CONFIG.qCountFallback) || '25';

// State management with persistence
let ST = {
  qs: [], idx: 0, answers: {}, elim: {}, marked: {}, name: '',
  mode: 'exam', timerSec: 0, timerRef: null,
  confidence: {}, hintsShown: {}, answersRevealed: {},
  currentFilter: 'all', autoSaveInterval: null
};
const THEMES = ['dark','light','sepia','green'];
const STORAGE_KEY = `${EXAM_ID}-progress`;

// Theme management
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(`${EXAM_ID}-theme`, t);
  THEMES.forEach(th => {
    const selBtn = document.getElementById(`s-tp-${th}`);
    const hdrBtn = document.getElementById(`h-tp-${th}`);
    if (selBtn) {
      selBtn.classList.toggle('active', th === t);
      selBtn.setAttribute('aria-pressed', th === t);
    }
    if (hdrBtn) {
      hdrBtn.classList.toggle('active', th === t);
      hdrBtn.setAttribute('aria-pressed', th === t);
    }
  });
}

// Initialize theme
let savedTheme = localStorage.getItem(`${EXAM_ID}-theme`);
setTheme(THEMES.includes(savedTheme) ? savedTheme : 'dark');

// Mode UI with persistence
function setModeUI(m) {
  ST.mode = m;
  localStorage.setItem(`${EXAM_ID}-mode`, m);

  const examBtn = document.getElementById('modeExamBtn');
  const studyBtn = document.getElementById('modeStudyBtn');

  if (m === 'exam') {
    examBtn.classList.add('active-exam');
    examBtn.setAttribute('aria-pressed', 'true');
    studyBtn.classList.remove('active-study');
    studyBtn.setAttribute('aria-pressed', 'false');
  } else {
    studyBtn.classList.add('active-study');
    studyBtn.setAttribute('aria-pressed', 'true');
    examBtn.classList.remove('active-exam');
    examBtn.setAttribute('aria-pressed', 'false');
  }
}

// Load saved mode
let savedMode = localStorage.getItem(`${EXAM_ID}-mode`);
setModeUI(['exam','study'].includes(savedMode) ? savedMode : 'study');

// Toast notification system
function showToast(message, type = 'info', duration = 1500) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');

  const icons = { success: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg>', info: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-help"/></svg>', warning: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg>' };
  toast.innerHTML = `<span class="toast-icon" aria-hidden="true">${icons[type] || '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-help"/></svg>'}</span><span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

// Screen manager
function showScreen(s) {
  document.getElementById('selectorScreen').style.display = s === 'sel' ? 'flex' : 'none';
  document.getElementById('examScreen').classList.toggle('active', s === 'exam');
  document.getElementById('resultsScreen').classList.toggle('active', s === 'res');

  if (s === 'exam') {
    document.getElementById('qText')?.focus?.();
  }
}

// Save/Load progress
function saveProgress() {
  if (!ST.name) return;
  const progress = {
    examName: ST.name,
    answers: ST.answers,
    elim: ST.elim,
    marked: ST.marked,
    idx: ST.idx,
    timerSec: ST.timerSec,
    confidence: ST.confidence,
    timestamp: Date.now()
  };
  localStorage.setItem(`${STORAGE_KEY}-${ST.name}`, JSON.stringify(progress));
}

function loadProgress(name) {
  const saved = localStorage.getItem(`${STORAGE_KEY}-${name}`);
  if (!saved) return false;
  try {
    const progress = JSON.parse(saved);
    if (Date.now() - progress.timestamp < 86400000) {
      ST.answers = progress.answers || {};
      ST.elim = progress.elim || {};
      ST.marked = progress.marked || {};
      ST.idx = progress.idx || 0;
      ST.timerSec = progress.timerSec || 0;
      ST.confidence = progress.confidence || {};
      return true;
    }
  } catch(e) {
    console.warn('Failed to load progress:', e);
  }
  return false;
}

// Exam engine
async function startExam(path, name) {
  const qCountEl = document.getElementById('qCount');
  const qCount = qCountEl ? parseInt(qCountEl.value || QCOUNT_FALLBACK) : null;
  document.getElementById('qLoading').style.display = 'block';
  document.getElementById('qBox').style.display = 'none';
  document.getElementById('optsList').innerHTML = '';

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    if (json.questions && Array.isArray(json.questions)) {
      ST.qs = json.questions;
    } else if (Array.isArray(json)) {
      ST.qs = json;
    } else {
      throw new Error('JSON must contain a "questions" array');
    }

    if (ST.qs.length === 0) throw new Error('No questions found');

    // Pages with a #qCount selector shuffle + slice to the chosen count;
    // pages without one (multi-form pickers) load the full set as-is.
    if (qCount !== null) {
      const totalQs = ST.qs.length;
      const shuffled = [...ST.qs].sort(() => Math.random() - 0.5);
      ST.qs = qCount >= totalQs ? shuffled : shuffled.slice(0, qCount);
    }

    ST.name = name;
    const restored = loadProgress(name);
    if (!restored) {
      ST.idx = 0; ST.answers = {}; ST.elim = {}; ST.marked = {};
      ST.confidence = {}; ST.hintsShown = {}; ST.answersRevealed = {};
    }

    document.getElementById('examName').textContent = name;
    document.getElementById('resExamName').textContent = name;

    const modeBadge = document.getElementById('modeBadge');
    modeBadge.innerHTML =ST.mode === 'study' ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> Study' : '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Exam';
    modeBadge.className = 'hdr-mode ' + (ST.mode === 'study' ? 'm-study' : 'm-exam');

    const isStudy = ST.mode === 'study';
    document.getElementById('backBtn').style.display = isStudy ? '' : 'none';
    document.getElementById('endBtn').style.display = isStudy ? 'none' : '';
    document.getElementById('markBtn').style.display = isStudy ? 'none' : '';
    document.getElementById('qBox').classList.toggle('is-study', isStudy);
    document.getElementById('studyActions').style.display = isStudy ? 'flex' : 'none';
    document.getElementById('confidenceRow').style.display = isStudy ? 'flex' : 'none';

    if (ST.timerRef) clearInterval(ST.timerRef);
    ST.timerRef = setInterval(() => {
      ST.timerSec++;
      let m = Math.floor(ST.timerSec/60), s = ST.timerSec%60;
      const timerEl = document.getElementById('timerDisplay');
      timerEl.textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;

      if (ST.timerSec >= 2700 && ST.mode === 'exam') {
        timerEl.classList.add('warning');
        if (ST.timerSec === 2700) {
          showToast('<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#alarm-clock"/></svg> 45 min - review flagged', 'warning', 1500);
        }
      }
    }, 1000);

    if (ST.timerSec > 0) {
      let m = Math.floor(ST.timerSec/60), s = ST.timerSec%60;
      document.getElementById('timerDisplay').textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
    }

    buildGrid();
    renderQ();
    showScreen('exam');

    if (!ST.autoSaveInterval) {
      ST.autoSaveInterval = setInterval(saveProgress, 30000);
    }

    showToast(restored ? 'Progress restored' : 'Exam started', 'success', 1200);

  } catch(e) {
    document.getElementById('qLoading').style.display = 'none';
    document.getElementById('qBox').style.display = 'block';
    document.getElementById('qText').textContent = `Error: ${e.message}`;
    showToast('Load failed', 'warning', 1200);
    console.error(e);
  }
}

// Grid building
function buildGrid() {
  const grid = document.getElementById('qGrid');
  grid.innerHTML = '';
  ST.qs.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'qn';
    btn.id = `qb${i}`;
    btn.textContent = i+1;
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', i === ST.idx);
    btn.onclick = () => jumpTo(i);
    btn.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        jumpTo(i);
      }
    };
    grid.appendChild(btn);
  });
  applyGridFilter();
  syncGrid();
  syncStats();
}

// Grid filtering
function filterGrid(filter) {
  ST.currentFilter = filter;
  document.querySelectorAll('.sb-filter-btn').forEach(btn => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  applyGridFilter();
  showToast(`Showing ${filter === 'all' ? 'all' : filter}`, 'info', 1000);
}

function applyGridFilter() {
  ST.qs.forEach((q, i) => {
    const btn = document.getElementById(`qb${i}`);
    if (!btn) return;

    let show = true;
    if (ST.currentFilter === 'unanswered' && ST.answers[q.id]) show = false;
    if (ST.currentFilter === 'flagged' && !ST.marked[q.id]) show = false;

    btn.style.display = show ? '' : 'none';
  });
}

function syncGrid() {
  ST.qs.forEach((q, i) => {
    const btn = document.getElementById(`qb${i}`);
    if (!btn) return;

    const pip = btn.querySelector('.flag-pip');
    if (pip) pip.remove();

    btn.className = 'qn' + (i===ST.idx ? ' cur' : '') + (ST.answers[q.id] ? ' done' : '') + (ST.marked[q.id] ? ' flg' : '');
    btn.setAttribute('aria-selected', i === ST.idx);

    if (ST.marked[q.id]) {
      const d = document.createElement('span');
      d.className = 'flag-pip';
      d.setAttribute('aria-hidden', 'true');
      btn.appendChild(d);
    }
  });
}

function syncStats() {
  const ans = Object.keys(ST.answers).length;
  const uns = ST.qs.length - ans;
  const flg = Object.values(ST.marked).filter(Boolean).length;

  ['stAns','mAns'].forEach(id => {
    let el = document.getElementById(id);
    if(el) {
      el.textContent = ans;
      el.parentElement?.parentElement?.setAttribute('aria-label', `${ans} questions answered`);
    }
  });
  ['stUns','mUns'].forEach(id => {
    let el = document.getElementById(id);
    if(el) el.textContent = uns;
  });
  ['stFlg','mFlg'].forEach(id => {
    let el = document.getElementById(id);
    if(el) el.textContent = flg;
  });
}

// Question rendering
function renderQ() {
  const total = ST.qs.length, q = ST.qs[ST.idx];
  const isStudy = ST.mode === 'study';
  const selected = ST.answers[q.id] || null;
  const revealed = isStudy && ST.answersRevealed[q.id];
  const hintShown = isStudy && ST.hintsShown[q.id];
  const elim = ST.elim[q.id] || [];
  const letters = ['A', 'B', 'C', 'D'];
  const confidence = ST.confidence[q.id];

  document.getElementById('qLoading').style.display = 'none';
  document.getElementById('qBox').style.display = 'block';

  document.getElementById('qBadge').textContent = `Question ${ST.idx+1} of ${total}`;
  const pfill = document.getElementById('qPfill');
  const progress = ((ST.idx+1)/total*100).toFixed(1);
  pfill.style.width = `${progress}%`;
  pfill.parentElement.setAttribute('aria-valuenow', progress);

  document.getElementById('navCtr').textContent = `${ST.idx+1} / ${total}`;
  document.getElementById('qText').textContent = q.text;

  const markBtn = document.getElementById('markBtn');
  if (markBtn) {
    const isFlagged = !!ST.marked[q.id];
    markBtn.classList.toggle('flagged', isFlagged);
    markBtn.setAttribute('aria-pressed', isFlagged);
  }

  if (isStudy) {
    const hintBtn = document.getElementById('hintBtn');
    const answerBtn = document.getElementById('answerBtn');
    hintBtn.disabled = hintShown || revealed;
    answerBtn.disabled = revealed;
  }

  const optsDiv = document.getElementById('optsList');
  optsDiv.innerHTML = '';
  optsDiv.setAttribute('aria-label', `Answer choices for question ${ST.idx+1}`);

  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const isSel = selected === letter;
    const isElim = elim.includes(idx);
    const isCorrect = letter === q.correct_answer;

    let revClass = '';
    if (revealed) {
      if (isCorrect) revClass = ' rev-correct';
      else if (isSel) revClass = ' rev-wrong';
    }

    const row = document.createElement('div');
    row.className = 'opt' + (isSel && !revealed ? ' selected' : '') + (isElim && !revealed ? ' eliminated' : '') + revClass;
    row.setAttribute('role', 'radio');
    row.setAttribute('aria-checked', isSel && !revealed);
    row.setAttribute('tabindex', isSel ? '0' : '-1');

    let elimHtml = '';
    if (!isStudy && !revealed) {
      elimHtml = `<button class="elim-btn" onclick="doElim(${ST.idx},${idx},event)" aria-label="${isElim ? 'Restore' : 'Eliminate'} option ${letter}">${isElim ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#undo-2"/></svg>' : '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg>'}</button>`;
    }

    let tagHtml = '';
    if (revealed) {
      if (isCorrect && isSel) tagHtml = '<span class="rev-tag rev-tag-ok"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Correct</span>';
      else if (isCorrect) tagHtml = '<span class="rev-tag rev-tag-ans"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Answer</span>';
      else if (isSel) tagHtml = '<span class="rev-tag rev-tag-ng"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg> Wrong</span>';
    }

    row.innerHTML = elimHtml +
      `<div class="opt-letter" aria-hidden="true">${letter}</div>
       <div class="opt-wrap" onclick="doSelect('${letter}')" role="presentation">
         <span class="opt-txt">${escapeHtml(optText)}</span>${tagHtml}
       </div>`;

    row.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doSelect(letter);
      }
    };

    optsDiv.appendChild(row);
  });

  const expDiv = document.getElementById('expArea');
  if (isStudy) {
    if (revealed) {
      expDiv.innerHTML = `
        <div class="study-exp">
          <div class="exp-label">Explanation</div>
          <div class="exp-body">${escapeHtml(q.explanation || 'No explanation provided.')}</div>
        </div>`;
    } else if (hintShown) {
      const hint = q.hint || 'Review the key assessment findings and prioritize life-threatening conditions first.';
      expDiv.innerHTML = `
        <div class="study-hint" onclick="revealAnswer()" style="cursor:pointer">
          <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#lightbulb"/></svg> <strong>Hint:</strong> ${escapeHtml(hint)}
          <div style="margin-top:8px;font-size:.75rem;color:var(--blue)">Click to reveal answer</div>
        </div>`;
    } else {
      expDiv.innerHTML = '<div class="study-hint"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#lightbulb"/></svg> Select an answer, then use the buttons above to get help</div>';
    }
  } else {
    expDiv.innerHTML = '';
  }

  if (isStudy && revealed && confidence) {
    const confLabels = { high: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#smile"/></svg> Sure', medium: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#message-circle-question"/></svg> Maybe', low: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#frown"/></svg> Guessed' };
    expDiv.innerHTML += `
      <div style="margin-top:12px;padding-top:12px;border-top:1px dashed var(--border)">
        <span style="font-size:.7rem;color:var(--muted)">Your confidence: <strong>${confLabels[confidence]}</strong></span>
      </div>`;
  }

  document.getElementById('prevBtn').disabled = ST.idx === 0;

  const nextBtn = document.getElementById('nextBtn');
  if (isStudy && !revealed) {
    nextBtn.textContent = 'Check Answer';
    nextBtn.disabled = false;
  } else {
    nextBtn.innerHTML ='Next <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg>';
    nextBtn.disabled = ST.idx === total - 1;
  }

  syncGrid();

  const qScroll = document.getElementById('qScroll');
  if (qScroll) qScroll.scrollTo({ top: 0, behavior: 'smooth' });

  const firstOpt = optsDiv.querySelector('.opt-wrap');
  if (firstOpt && !revealed) {
    setTimeout(() => firstOpt.focus(), 100);
  }

  saveProgress();
}

// Answer selection — allows changing before reveal
function doSelect(letter) {
  const q = ST.qs[ST.idx];

  // Only block if answer is already revealed
  if (ST.mode === 'study' && ST.answersRevealed[q.id]) return;

  // Toggle or set selection
  if (ST.answers[q.id] === letter) {
    delete ST.answers[q.id];
  } else {
    ST.answers[q.id] = letter;
  }

  renderQ();
  syncStats();
}

// Elimination
function doElim(qi, oi, e) {
  e.stopPropagation();
  const q = ST.qs[qi];
  if (!ST.elim[q.id]) ST.elim[q.id] = [];
  const arr = ST.elim[q.id];
  const idx = arr.indexOf(oi);

  if (idx === -1) {
    arr.push(oi);
    showToast(`Eliminated ${['A','B','C','D'][oi]}`, 'info', 1000);
  } else {
    arr.splice(idx,1);
    showToast('Restored', 'info', 1000);
  }
  renderQ();
}

// Flag
function toggleMark() {
  const q = ST.qs[ST.idx];
  const wasMarked = !!ST.marked[q.id];

  if (wasMarked) {
    delete ST.marked[q.id];
    showToast('Flag removed', 'info', 1000);
  } else {
    ST.marked[q.id] = true;
    showToast('Flagged', 'info', 1000);
  }

  const markBtn = document.getElementById('markBtn');
  if (markBtn) {
    markBtn.classList.toggle('flagged', !wasMarked);
    markBtn.setAttribute('aria-pressed', !wasMarked);
  }

  syncGrid();
  syncStats();
  saveProgress();
}

// Study mode: Show hint
function showHint() {
  const q = ST.qs[ST.idx];
  ST.hintsShown[q.id] = true;
  renderQ();
  const hint = q.hint || 'Think about primary survey priorities: Airway, Breathing, Circulation.';
  showToast('Hint: ' + hint, 'info', 2000);
}

// Study mode: Reveal answer
function revealAnswer() {
  const q = ST.qs[ST.idx];
  ST.answersRevealed[q.id] = true;

  if (!ST.answers[q.id]) {
    ST.answers[q.id] = q.correct_answer;
  }

  renderQ();
  showToast('Answer revealed', 'success', 1000);
}

// Study mode: Set confidence
function setConfidence(level) {
  const q = ST.qs[ST.idx];
  ST.confidence[q.id] = level;

  document.querySelectorAll('.confidence-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });

  renderQ();
  saveProgress();
}

// Navigation
function nav(d) {
  const q = ST.qs[ST.idx];

  // Intercept 'Next' in study mode to validate first
  if (d === 1 && ST.mode === 'study' && !ST.answersRevealed[q.id]) {
    if (!ST.answers[q.id]) {
      showToast('Please select an answer first', 'warning');
      return;
    }
    revealAnswer();
    return;
  }

  const n = ST.idx + d;
  if (n >= 0 && n < ST.qs.length) {
    ST.idx = n;
    renderQ();
    closeSidebar();
  }
}

function jumpTo(i) {
  ST.idx = i;
  renderQ();
  closeSidebar();
}

// Sidebar management
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.sb-toggle');
  const isOpen = sidebar.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', isOpen);
}

function closeSidebar() {
  if (window.innerWidth <= 720) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sb-toggle');
    sidebar?.classList.remove('open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.sb-toggle');
  if (!sidebar || !sidebar.classList.contains('open')) return;
  if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn?.contains(e.target)) {
    closeSidebar();
  }
});

// Modal management
function openEndModal() {
  syncStats();
  document.getElementById('endModal')?.classList.add('open');
  setTimeout(() => {
    document.querySelector('.mbtn-cancel')?.focus();
  }, 100);
}

function closeModal() {
  document.getElementById('endModal')?.classList.remove('open');
}

// Exit confirmation for study mode back button
function confirmExit() {
  document.getElementById('exitModal')?.classList.add('open');
  setTimeout(() => {
    document.querySelector('#exitModal .mbtn-cancel')?.focus();
  }, 100);
}

function closeExitModal() {
  document.getElementById('exitModal')?.classList.remove('open');
}

function confirmExitNow() {
  closeExitModal();
  goSelector();
}

function goSelector() {
  clearInterval(ST.timerRef);
  if (ST.autoSaveInterval) {
    clearInterval(ST.autoSaveInterval);
    ST.autoSaveInterval = null;
  }
  saveProgress();
  showScreen('sel');
}

// Submit exam
function submitExam() {
  closeModal();
  clearInterval(ST.timerRef);
  if (ST.autoSaveInterval) {
    clearInterval(ST.autoSaveInterval);
    ST.autoSaveInterval = null;
  }

  const qs = ST.qs, n = qs.length;
  let c=0, x=0, o=0;

  qs.forEach(q => {
    let a = ST.answers[q.id];
    if(!a) o++;
    else if(a===q.correct_answer) c++;
    else x++;
  });

  const pct = Math.round(c/n*100), pass = pct>=75;

  let html = `
    <div class="score-banner">
      <div class="score-ring ${pass?'ring-pass':'ring-fail'}" role="img" aria-label="Score: ${pct}%, ${pass?'Pass':'Fail'}">
        <div class="ring-num">${pct}%</div>
        <div class="ring-lbl">${pass?'PASS':'FAIL'}</div>
      </div>
      <div class="score-stats">
        <div class="ss-box">
          <div class="ss-num" style="color:var(--green)">${c}</div>
          <div class="ss-lbl">Correct</div>
        </div>
        <div class="ss-box">
          <div class="ss-num" style="color:var(--red)">${x}</div>
          <div class="ss-lbl">Incorrect</div>
        </div>
        <div class="ss-box">
          <div class="ss-num" style="color:var(--muted)">${o}</div>
          <div class="ss-lbl">Omitted</div>
        </div>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="study-btn" onclick="filterResults('all')">All Questions</button>
      <button class="study-btn" onclick="filterResults('incorrect')"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-x"/></svg> Incorrect Only</button>
      <button class="study-btn" onclick="filterResults('flagged')"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flag"/></svg> Flagged</button>
      <button class="study-btn" onclick="window.print()"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#printer"/></svg>️ Print</button>
    </div>

    <div class="rq-list" id="resultsList">`;

  qs.forEach((q,i) => {
    const ua = ST.answers[q.id];
    const isC = ua && ua === q.correct_answer, isX = ua && !isC, isO = !ua;
    const dotClass = isC ? 'dot-c' : isX ? 'dot-x' : 'dot-o';
    const ind = isC ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg>' : isX ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg>' : '—';
    const badgeClass = isC ? 'rqb-c' : isX ? 'rqb-x' : 'rqb-o';
    const badgeText = isC ? 'Correct' : isX ? 'Incorrect' : 'Omitted';
    const confidence = ST.confidence[q.id];
    const confDisplay = confidence ? ` <span style="font-size:.65rem;color:var(--muted)">[${confidence}]</span>` : '';

    html += `<div class="rq-item" data-status="${isC?'correct':isX?'incorrect':'omitted'}" data-flagged="${!!ST.marked[q.id]}">
      <div class="rq-row" onclick="xpand(this,${i})" role="button" tabindex="0" aria-expanded="false">
        <span class="rq-n">${i+1}</span>
        <span class="rq-dot ${dotClass}" aria-hidden="true">${ind}</span>
        <span class="rq-q">${escapeHtml(q.text)}</span>
        <span class="rq-badge ${badgeClass}">${badgeText}${confDisplay}</span>
        <span class="rq-chev" aria-hidden="true">▼</span>
      </div>
      <div class="rq-body" id="rb${i}">
        ${buildResOpts(q,ua)}
        <div class="exp-box">
          <div class="exp-label">Explanation</div>
          <div class="exp-body">${escapeHtml(q.explanation||'No explanation provided.')}</div>
        </div>
      </div>
    </div>`;
  });

  html += '</div>';
  document.getElementById('resContent').innerHTML = html;
  showScreen('res');
  showToast('Submitted!', 'success', 1000);
}

// Results filtering
function filterResults(filter) {
  const items = document.querySelectorAll('.rq-item');
  items.forEach(item => {
    const status = item.dataset.status;
    const flagged = item.dataset.flagged === 'true';
    let show = true;

    if (filter === 'incorrect' && status !== 'incorrect') show = false;
    if (filter === 'flagged' && !flagged) show = false;

    item.style.display = show ? '' : 'none';
  });

  showToast(`Showing ${filter === 'all' ? 'all' : filter}`, 'info', 1000);
}

function buildResOpts(q, ua) {
  const letters = ['A','B','C','D'];
  let h = '<div class="res-opts" role="list">';

  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const isC = letter === q.correct_answer;
    const isSel = letter === ua;
    const isW = isSel && !isC;
    let cls = isC ? 'ro-correct' : isW ? 'ro-wrong' : '';

    h += `<div class="res-opt ${cls}" role="listitem">
      <div class="ro-ltr" aria-hidden="true">${letter}</div>
      <span style="font-size:.82rem;flex:1">${escapeHtml(optText)}</span>
      ${isC ? '<span class="ro-tag" style="color:var(--green)"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Correct</span>' : ''}
      ${isW ? '<span class="ro-tag" style="color:var(--red)"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg> Your pick</span>' : ''}
    </div>`;
  });

  return h + '</div>';
}

function xpand(hdr, i) {
  const body = document.getElementById(`rb${i}`);
  if (!body) return;

  const isOpen = body.classList.toggle('open');
  hdr.classList.toggle('expanded', isOpen);
  hdr.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    setTimeout(() => body.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

  const isExamActive = document.getElementById('examScreen')?.classList.contains('active');

  if (isExamActive) {
    if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
      e.preventDefault(); nav(1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
      e.preventDefault(); nav(-1);
    }

    if (['1','a','A'].includes(e.key)) { e.preventDefault(); doSelect('A'); }
    if (['2','b','B'].includes(e.key)) { e.preventDefault(); doSelect('B'); }
    if (['3','c','C'].includes(e.key)) { e.preventDefault(); doSelect('C'); }
    if (['4','d','D'].includes(e.key)) { e.preventDefault(); doSelect('D'); }

    if ((e.key === 'f' || e.key === 'F') && ST.mode === 'exam') {
      e.preventDefault(); toggleMark();
    }
    if (e.key === 'Escape') {
      closeModal();
      closeExitModal();
      closeSidebar();
    }

    if (ST.mode === 'study') {
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        if (!ST.hintsShown[ST.qs[ST.idx]?.id]) showHint();
      }
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (ST.hintsShown[ST.qs[ST.idx]?.id] && !ST.answersRevealed[ST.qs[ST.idx]?.id]) revealAnswer();
      }
    }
  }

  if (e.key === 'd' || e.key === 'D') setTheme('dark');
  if (e.key === 'l' || e.key === 'L') setTheme('light');
  if (e.key === 's' || e.key === 'S') setTheme('sepia');
  if (e.key === 'g' || e.key === 'G') setTheme('green');
});

// Exit confirmation on browser back/close
window.addEventListener('beforeunload', (e) => {
  if (document.getElementById('examScreen')?.classList.contains('active')) {
    saveProgress();
    e.preventDefault();
    e.returnValue = '';
  }
});

// Utility: Escape HTML
function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// Educational-use disclaimer, injected once so all 8 exam-review pages stay
// in sync from this one place rather than 8 near-identical HTML edits.
(function addDisclaimerLink() {
  const sub = document.querySelector('.sel-sub');
  if (!sub || document.querySelector('.sel-disclaimer')) return;
  const a = document.createElement('a');
  a.className = 'sel-disclaimer';
  a.href = 'about.html#disclaimer';
  a.textContent = 'Study aid only — not for direct patient care';
  sub.insertAdjacentElement('afterend', a);
})();

// Initialize
showScreen('sel');

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (ST.autoSaveInterval) clearInterval(ST.autoSaveInterval);
  saveProgress();
});
