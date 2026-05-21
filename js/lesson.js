// ============================================================
// MINT-Games – Lesson Controller
// ============================================================

const MODULES = { 
  1: MODULE_1, 
  2: MODULE_2, 
  3: MODULE_3, 
  4: MODULE_4, 
  5: MODULE_5, 
  6: MODULE_6,
  7: MODULE_7,
  8: MODULE_8,
  9: MODULE_9,
  10: MODULE_10,
  11: MODULE_11,
  12: MODULE_12
};

let state = {
  moduleId:       null,
  module:         null,
  activityIndex:  0,
  quizIndex:      0,
  score:          0,
  quizTotal:      0,
  quizCorrect:    0,
  timerInterval:  null,
  timeLeft:       45 * 60,
  checked:        false,
  knowledgeRead:  {},
  learning: {
    totalChecks:        0,
    correctChecks:      0,
    currentStreak:      0,
    bestStreak:         0,
    hintUses:           0,
    peekUses:           0,
    hintCountedByKey:   {},
    peekCountedByKey:   {},
    attemptsByKey:      {},
    solvedByKey:        {},
    lastResult:         null,
  }
};

// Global refs used by scaffolding engine
window.CURRENT_ACTIVITY   = null;
window.CURRENT_QUIZ_INDEX = 0;

// ── Boot ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const moduleId = parseInt(params.get('m') || '1');
  loadModule(moduleId);
});

function goHome() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  closePeek();
  window.location.href = 'index.html';
}

// Close peek when clicking the dark backdrop (not the card itself)
function closePeekOnBackdrop(e) {
  if (e.target.id === 'peekOverlay') closePeek();
}

// ── Load Module ───────────────────────────────────────────
function loadModule(id) {
  state.moduleId       = id;
  state.module         = MODULES[id];
  state.knowledgeRead  = {};
  state.learning = {
    totalChecks:   0,
    correctChecks: 0,
    currentStreak: 0,
    bestStreak:    0,
    hintUses:      0,
    peekUses:      0,
    hintCountedByKey: {},
    peekCountedByKey: {},
    attemptsByKey: {},
    solvedByKey:   {},
    lastResult:    null,
  };
  window.CURRENT_MODULE_OBJ = state.module;
  SCAFFOLDING.peekCount = 0; // reset peek uses per module

  if (!state.module) {
    alert('Modul nicht gefunden!');
    goHome();
    return;
  }

  document.getElementById('lessonNavTitle').textContent = state.module.title;
  document.title = `MINT-Games | ${state.module.title}`;

  state.timeLeft = state.module.duration * 60;
  startTimer();
  buildStepProgress();

  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('activityContainer').style.display = 'flex';
    document.getElementById('activityContainer').style.flexDirection = 'column';
    showActivity(0);
  }, 600);
}

// ── Timer ─────────────────────────────────────────────────
function startTimer() {
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timeLeft / 60);
  const secs = state.timeLeft % 60;
  const display = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  const el = document.getElementById('timerDisplay');
  const timer = el.closest('.lesson-timer');
  if (el) el.textContent = display;
  if (timer) {
    if (state.timeLeft < 300) timer.classList.add('urgent');
    else timer.classList.remove('urgent');
  }
}

// ── Step Progress ─────────────────────────────────────────
function buildStepProgress() {
  const container = document.getElementById('stepProgress');
  const total = state.module.activities.length;
  let html = '';
  for (let i = 0; i < total; i++) {
    if (i > 0) html += `<div class="step-line" id="step-line-${i}"></div>`;
    const a = state.module.activities[i];
    const icon = getActivityIcon(a.type);
    html += `<div class="step-dot" id="step-${i}" title="${a.badge || ''}"><span>${icon}</span></div>`;
  }
  container.innerHTML = html;
}

function getActivityIcon(type) {
  const icons = {
    'timeline':    '⏳',
    'dragdrop':    '🎯',
    'fillgaps':    '✏️',
    'matching':    '🔗',
    'sorting':     '🔢',
    'quiz-multi':  '🏆',
    'cable-colors':'🎨',
    'pcassembly':  '🛠️',
    'pcboot':      '⚡',
    'pcinstall':   '💿',
  };
  return icons[type] || '❓';
}

function updateStepProgress(index) {
  const total = state.module.activities.length;
  for (let i = 0; i < total; i++) {
    const dot = document.getElementById(`step-${i}`);
    if (!dot) continue;
    dot.classList.remove('active', 'done');
    if (i < index) {
      dot.classList.add('done');
      const line = document.getElementById(`step-line-${i}`);
      if (line) line.classList.add('done');
    } else if (i === index) {
      dot.classList.add('active');
    }
  }
}

// ── Show Activity (with Knowledge first) ─────────────────
function showActivity(index) {
  state.activityIndex = index;
  state.checked = false;
  state.quizIndex = 0;
  state.quizCorrect = 0;

  updateStepProgress(index);

  const activity = state.module.activities[index];
  if (!activity) return;

  // If activity has knowledge and hasn't been read yet, show knowledge first
  if (activity.knowledge && !state.knowledgeRead?.[index]) {
    showKnowledgePage(activity, index);
    return;
  }

  renderActivity(activity);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showKnowledgePage(activity, index) {
  const feedback   = document.getElementById('feedbackBanner');
  const btnCheck   = document.getElementById('btnCheck');
  const btnNext    = document.getElementById('btnNext');
  const scaffBar   = document.getElementById('scaffoldingBar');
  const hintPanel  = document.getElementById('hintPanel');
  const coachPanel = document.getElementById('learningCoach');

  feedback.style.display = 'none';
  btnCheck.style.display = 'none';
  btnNext.style.display  = 'none';
  if (scaffBar)  scaffBar.style.display  = 'none';
  if (coachPanel) coachPanel.style.display = 'none';
  if (hintPanel) { hintPanel.classList.remove('open'); hintPanel.innerHTML = ''; }

  document.getElementById('activityQuestion').textContent    = '';
  document.getElementById('activityInstruction').textContent = '';
  document.getElementById('activityTypeBadge').textContent   = '📚 Wissen';

  const content = document.getElementById('activityContent');
  const total   = state.module.activities.length;
  content.innerHTML = renderKnowledgePage(activity, index, total) || '';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showActivityFromKnowledge() {
  const index = state.activityIndex;
  if (!state.knowledgeRead) state.knowledgeRead = {};
  state.knowledgeRead[index] = true;
  renderActivity(state.module.activities[index]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderActivity(activity) {
  window.CURRENT_ACTIVITY   = activity;
  window.CURRENT_QUIZ_INDEX = 0;

  // Reset UI
  const content  = document.getElementById('activityContent');
  const feedback = document.getElementById('feedbackBanner');
  const btnCheck = document.getElementById('btnCheck');
  const btnNext  = document.getElementById('btnNext');
  const scaffBar = document.getElementById('scaffoldingBar');
  const coachPanel = document.getElementById('learningCoach');
  const hintPanel = document.getElementById('hintPanel');

  content.innerHTML = '';
  content.dataset.type = activity.type;
  feedback.style.display = 'none';
  feedback.className = 'feedback-banner';
  btnCheck.style.display = 'block';
  btnNext.style.display  = 'none';
  btnCheck.disabled = false;
  if (coachPanel) coachPanel.style.display = 'block';
  if (hintPanel) { hintPanel.classList.remove('open'); hintPanel.innerHTML = ''; }

  // Set header
  document.getElementById('activityTypeBadge').textContent = activity.badge || activity.type;

  // Handle multi-question quiz (checkup)
  if (activity.type === 'quiz-multi') {
    state.quizTotal   = activity.questions.length;
    state.quizCorrect = 0;
    state.quizIndex   = 0;
    // Show scaffolding bar (no hint button on quiz – handled per-question)
    if (scaffBar) { scaffBar.style.display = 'flex'; renderScaffoldingBar(activity); }
    updateLearningCoach();
    showQuizQuestion(activity, 0);
    return;
  }

  document.getElementById('activityQuestion').textContent    = activity.question;
  document.getElementById('activityInstruction').textContent = activity.instruction || '';

  // Show scaffolding bar
  if (scaffBar) { scaffBar.style.display = 'flex'; renderScaffoldingBar(activity); }

  // Render by type
  switch (activity.type) {
    case 'timeline':     renderTimeline(activity, content);     break;
    case 'dragdrop':     renderDragDrop(activity, content);     break;
    case 'fillgaps':     renderFillGaps(activity, content);     break;
    case 'matching':     renderMatching(activity, content);     break;
    case 'sorting':      renderSorting(activity, content);      break;
    case 'cable-colors': renderCableColors(activity, content);  break;
    case 'pcassembly':   renderPcAssembly(activity, content);   break;
    case 'pcboot':       renderPcBoot(activity, content);       break;
    case 'pcinstall':    renderPcInstall(activity, content);    break;
    default: content.innerHTML = `<p>Unbekannter Typ: ${activity.type}</p>`;
  }
  updateLearningCoach();
}

// ── Multi-Question Quiz ───────────────────────────────────
function showQuizQuestion(activity, qIndex) {
  const q = activity.questions[qIndex];
  state.quizIndex = qIndex;
  window.CURRENT_QUIZ_INDEX = qIndex;

  document.getElementById('activityQuestion').textContent =
    `Frage ${qIndex + 1} von ${activity.questions.length}: ${q.q}`;
  document.getElementById('activityInstruction').textContent =
    'Wähle die richtige Antwort aus.';

  const content  = document.getElementById('activityContent');
  const scaffBar = document.getElementById('scaffoldingBar');
  const hintPanel = document.getElementById('hintPanel');

  content.innerHTML = '';
  content.dataset.selected    = '';
  content.dataset.correct     = q.correct;
  content.dataset.explanation = q.explanation || '';
  content.dataset.quizType    = 'multi';

  if (hintPanel) { hintPanel.classList.remove('open'); hintPanel.innerHTML = ''; }

  const feedback = document.getElementById('feedbackBanner');
  feedback.style.display = 'none';

  const btnCheck = document.getElementById('btnCheck');
  const btnNext  = document.getElementById('btnNext');
  btnCheck.style.display = 'block';
  btnCheck.disabled = true;
  btnNext.style.display = 'none';

  // Refresh scaffolding bar for this question
  if (scaffBar) { scaffBar.style.display = 'flex'; renderScaffoldingBar(activity); }

  const html = `
    <div class="quiz-options" id="quizOptions">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" id="qopt-${i}" onclick="selectQuizOption(${i})" data-index="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `).join('')}
    </div>`;
  content.innerHTML = html;
  updateLearningCoach();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Check Answer ──────────────────────────────────────────
function checkAnswer() {
  if (state.checked && state.module.activities[state.activityIndex]?.type !== 'quiz-multi') return;

  const content  = document.getElementById('activityContent');
  const btnCheck = document.getElementById('btnCheck');
  const btnNext  = document.getElementById('btnNext');
  const activity = state.module.activities[state.activityIndex];

  let correct = false;

  if (activity.type === 'quiz-multi') {
    // Single quiz question check
    correct = checkQuiz(content);
    if (correct) state.quizCorrect++;
    updateLearningStats(activity, correct);

    btnCheck.style.display = 'none';
    btnNext.style.display  = 'block';

    const isLast = state.quizIndex >= activity.questions.length - 1;
    btnNext.textContent = isLast
      ? `Abschluss (${state.quizCorrect}/${state.quizTotal} richtig) →`
      : `Nächste Frage (${state.quizIndex + 2}/${state.quizTotal}) →`;
    updateLearningCoach();
    return;
  }

  // Other activity types
  switch (activity.type) {
    case 'timeline':     correct = checkTimeline(content);    break;
    case 'dragdrop':     correct = checkDragDrop(content);    break;
    case 'fillgaps':     correct = checkFillGaps(content);    break;
    case 'matching':
      correct = checkMatching(content);
      if (correct && !state.checked) {
        state.checked = true;
        updateLearningStats(activity, true);
        saveProgress();
      }
      updateLearningCoach();
      return;
    case 'sorting':      correct = checkSorting(content);     break;
    case 'cable-colors': correct = checkCableColors(content); break;
    case 'pcassembly':   correct = checkPcAssembly(content);  break;
    case 'pcboot':       correct = checkPcBoot(content);      break;
    case 'pcinstall':    correct = checkPcInstall(content);   break;
  }

  updateLearningStats(activity, correct);

  state.checked = true;
  btnCheck.style.display = 'none';
  btnNext.style.display  = 'block';

  if (correct) {
    saveProgress();
  }
  updateLearningCoach();
}

// ── Next Activity ─────────────────────────────────────────
function nextActivity() {
  const activity = state.module.activities[state.activityIndex];

  // Multi-quiz: advance through questions
  if (activity.type === 'quiz-multi') {
    const nextQ = state.quizIndex + 1;
    if (nextQ < activity.questions.length) {
      showQuizQuestion(activity, nextQ);
      return;
    } else {
      // Quiz finished → show certificate
      saveProgress(true);
      showCertificate(state.quizCorrect, state.quizTotal);
      return;
    }
  }

  // Regular activities
  const next = state.activityIndex + 1;
  if (next < state.module.activities.length) {
    const container = document.getElementById('activityContainer');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    setTimeout(() => {
      showActivity(next);
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 300);
  } else {
    // All done
    saveProgress(true);
    showCertificate(state.quizCorrect, state.quizTotal);
  }
}

function revisitKnowledge() {
  const activity = state.module?.activities?.[state.activityIndex];
  if (!activity?.knowledge) return;
  showKnowledgePage(activity, state.activityIndex);
}

function onMatchingCompleted() {
  const activity = state.module?.activities?.[state.activityIndex];
  if (!activity || activity.type !== 'matching' || state.checked) return;
  state.checked = true;
  updateLearningStats(activity, true);
  saveProgress();
  updateLearningCoach();
}

function updateLearningStats(activity, correct) {
  const key = activity.type === 'quiz-multi'
    ? `${activity.id}-q${state.quizIndex}`
    : activity.id;

  const currentAttempts = (state.learning.attemptsByKey[key] || 0) + 1;
  state.learning.attemptsByKey[key] = currentAttempts;

  state.learning.totalChecks += 1;
  if (correct) {
    state.learning.correctChecks += 1;
    state.learning.currentStreak += 1;
    state.learning.bestStreak = Math.max(state.learning.bestStreak, state.learning.currentStreak);
    state.learning.solvedByKey[key] = true;
  } else {
    state.learning.currentStreak = 0;
  }

  if (SCAFFOLDING?.hintUsed && !state.learning.hintCountedByKey[key]) {
    state.learning.hintUses += 1;
    state.learning.hintCountedByKey[key] = true;
  }
  if (SCAFFOLDING?.peekUsed && !state.learning.peekCountedByKey[key]) {
    state.learning.peekUses += 1;
    state.learning.peekCountedByKey[key] = true;
  }

  state.learning.lastResult = {
    correct,
    attempts: currentAttempts,
    usedSupport: !!(SCAFFOLDING?.hintUsed || SCAFFOLDING?.peekUsed),
  };
}

function updateLearningCoach() {
  const progressEl = document.getElementById('coachProgress');
  const accuracyEl = document.getElementById('coachAccuracy');
  const streakEl   = document.getElementById('coachStreak');
  const helpEl     = document.getElementById('coachHelpUsage');
  const levelEl    = document.getElementById('coachLevelLabel');
  const messageEl  = document.getElementById('coachMessage');
  if (!progressEl || !accuracyEl || !streakEl || !helpEl || !levelEl || !messageEl) return;

  const totalActivities = state.module?.activities?.length || 0;
  const currentStep = Math.min(state.activityIndex + 1, totalActivities);
  const accuracy = state.learning.totalChecks > 0
    ? Math.round((state.learning.correctChecks / state.learning.totalChecks) * 100)
    : 0;

  progressEl.textContent = `${currentStep}/${totalActivities}`;
  accuracyEl.textContent = `${accuracy}%`;
  streakEl.textContent = `${state.learning.currentStreak}`;
  helpEl.textContent = `${state.learning.hintUses + state.learning.peekUses}`;

  const streak = state.learning.currentStreak;
  if (streak >= 5) levelEl.textContent = 'Master';
  else if (streak >= 3) levelEl.textContent = 'Pro';
  else if (streak >= 1) levelEl.textContent = 'Fokus';
  else levelEl.textContent = 'Warm-up';

  const last = state.learning.lastResult;
  if (!last) {
    messageEl.textContent = 'Lies die Wissensseite in Ruhe und starte dann mit Fokus in die Aufgabe.';
  } else if (!last.correct) {
    messageEl.textContent = 'Guter Versuch! Nutze „📚 Wissen wiederholen“ und den Hinweis, dann klappt der nächste Check.';
  } else if (last.attempts === 1 && !last.usedSupport) {
    messageEl.textContent = 'Stark! Direkt korrekt ohne Hilfe – du baust richtig sichere Grundlagen auf.';
  } else if (last.attempts > 1) {
    messageEl.textContent = 'Top Lernfortschritt: Nachbessern und erneut prüfen ist genau die richtige Strategie.';
  } else {
    messageEl.textContent = 'Weiter so! Du bist auf Kurs – halte den Fokus für die nächsten Aufgaben.';
  }
}

// ── Feedback ──────────────────────────────────────────────
function showFeedback(success, message) {
  const banner = document.getElementById('feedbackBanner');
  const icon   = document.getElementById('feedbackIcon');
  const text   = document.getElementById('feedbackText');

  banner.className = `feedback-banner ${success ? 'success' : 'error'}`;
  icon.textContent = success ? '✅' : '💡';
  text.textContent = message;
  banner.style.display = 'flex';

  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Certificate ───────────────────────────────────────────
function showCertificate(correct, total) {
  clearInterval(state.timerInterval);

  document.getElementById('activityContainer').style.display  = 'none';
  document.getElementById('certificateScreen').style.display  = 'flex';
  document.getElementById('stepProgress').style.display       = 'none';

  document.getElementById('certScore').textContent = `${correct} / ${total}`;

  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#3B82F6','#10B981','#F59E0B','#EF4444','#8B5CF6','#EC4899','#06B6D4'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left  = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width  = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 12 + 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (Math.random() * 2.5 + 2) + 's';
    piece.style.animationDelay    = (Math.random() * 1.5) + 's';
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = '', 5000);
}

// ── Progress Saving ───────────────────────────────────────
function saveProgress(completed = false) {
  const key  = `mint-progress-m${state.moduleId}`;
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  data.lastActivity = state.activityIndex;
  if (completed) {
    data.completed  = true;
    data.completedAt = Date.now();
    data.quizScore  = `${state.quizCorrect}/${state.quizTotal}`;
  }
  localStorage.setItem(key, JSON.stringify(data));
}
