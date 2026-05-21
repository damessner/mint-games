// ============================================================
// MINT-Games – Home Page App Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  loadAllProgress();
});

function startModule(id) {
  window.location.href = `lesson.html?m=${id}`;
}

function loadAllProgress() {
  const moduleIds = [1, 2];
  let totalCompleted = 0;
  let totalCerts = 0;

  moduleIds.forEach(id => {
    const key  = `mint-progress-m${id}`;
    const data = JSON.parse(localStorage.getItem(key) || '{}');

    const progressBar   = document.getElementById(`progress-${id}`);
    const progressLabel = document.getElementById(`progress-label-${id}`);
    const btn           = document.getElementById(`btn-${id}`);
    const card          = document.getElementById(`card-${id}`);

    const MODULES_CLIENT = { 1: { totalActivities: 6 }, 2: { totalActivities: 6 } };
    const total = MODULES_CLIENT[id]?.totalActivities || 6;

    if (data.completed) {
      if (progressBar)   progressBar.style.width = '100%';
      if (progressLabel) progressLabel.textContent = `✅ Abgeschlossen! Quiz: ${data.quizScore || '—'}`;
      if (btn)           btn.innerHTML = '<span>Wiederholen</span><span class="btn-arrow">↺</span>';
      if (card)          card.classList.add('completed');
      totalCompleted++;
      totalCerts++;
    } else if (data.lastActivity !== undefined) {
      const pct = Math.round(((data.lastActivity + 1) / total) * 100);
      if (progressBar)   progressBar.style.width = pct + '%';
      if (progressLabel) progressLabel.textContent = `${data.lastActivity + 1} / ${total} Aufgaben`;
      if (btn)           btn.innerHTML = '<span>Weiter</span><span class="btn-arrow">→</span>';
    }
  });

  // Update hero stats
  const completedEl = document.getElementById('completedModules');
  const certsEl     = document.getElementById('totalCerts');
  if (completedEl) completedEl.textContent = totalCompleted;
  if (certsEl)     certsEl.textContent     = totalCerts;

  // Animate numbers
  animateCounter('totalModules', 2);
  animateCounter('completedModules', totalCompleted);
  animateCounter('totalCerts', totalCerts);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let start = 0;
  const step = () => {
    start = Math.min(start + 1, target);
    el.textContent = start;
    if (start < target) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
