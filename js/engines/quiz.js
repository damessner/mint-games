// ============================================================
// MINT-Games – Quiz Engine (Multiple Choice)
// ============================================================

function renderQuiz(activity, container) {
  const q = activity.questions ? activity.questions[0] : activity;
  const question = q.q || activity.question;
  const options   = q.options || activity.options;
  const html = `
    <div class="quiz-options" id="quizOptions">
      ${options.map((opt, i) => `
        <button class="quiz-option" id="qopt-${i}" onclick="selectQuizOption(${i})" data-index="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `).join('')}
    </div>`;
  container.innerHTML = html;
  container.dataset.selected = '';
  container.dataset.correct  = q.correct ?? activity.correct;
  container.dataset.explanation = q.explanation || '';
}

function selectQuizOption(index) {
  document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
  const opt = document.getElementById(`qopt-${index}`);
  if (opt) {
    opt.classList.add('selected');
    document.getElementById('activityContent').dataset.selected = index;
    document.getElementById('btnCheck').disabled = false;
  }
}

function checkQuiz(content) {
  const selected = parseInt(content.dataset.selected);
  const correct  = parseInt(content.dataset.correct);
  const explanation = content.dataset.explanation;

  const opts = content.querySelectorAll('.quiz-option');
  opts.forEach(el => el.style.pointerEvents = 'none');

  if (selected === correct) {
    opts[selected].classList.add('correct');
    showFeedback(true, `✅ Richtig! ${explanation}`);
    return true;
  } else {
    opts[selected].classList.add('wrong');
    opts[correct].classList.add('correct');
    showFeedback(false, `❌ Leider falsch. ${explanation}`);
    return false;
  }
}
