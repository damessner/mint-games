// ============================================================
// MINT-Games – Fill Gaps Engine (Lückentext)
// ============================================================

function renderFillGaps(activity, container) {
  let html = '<div class="fillgaps-text">';
  activity.segments.forEach(seg => {
    if (seg.type === 'text') {
      html += `<span>${seg.text}</span>`;
    } else if (seg.type === 'gap') {
      html += `<input
        class="gap-input"
        type="text"
        id="gap-${seg.id}"
        data-answer="${seg.answer.toLowerCase()}"
        placeholder="${seg.hint || '…'}"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        style="min-width:${Math.max(80, seg.answer.length * 14 + 40)}px"
        oninput="onGapInput(this)"
      />`;
    }
  });
  html += '</div>';
  container.innerHTML = html;
}

function onGapInput(input) {
  // Remove any previous state
  input.classList.remove('correct', 'wrong');
  document.getElementById('btnCheck').disabled = false;
}

function checkFillGaps(content) {
  const gaps = content.querySelectorAll('.gap-input');
  let allCorrect = true;
  gaps.forEach(gap => {
    const userVal = gap.value.trim().toLowerCase();
    const correct = gap.dataset.answer.toLowerCase();
    if (userVal === correct) {
      gap.classList.add('correct');
      gap.classList.remove('wrong');
    } else {
      gap.classList.add('wrong');
      gap.classList.remove('correct');
      allCorrect = false;
    }
  });
  if (allCorrect) {
    showFeedback(true, '✅ Alle Lücken richtig ausgefüllt! Sehr gut!');
  } else {
    showFeedback(false, '❌ Einige Lücken sind noch falsch. Die richtigen Antworten wurden rot markiert.');
    // Show correct answers for wrong ones
    gaps.forEach(gap => {
      if (gap.classList.contains('wrong')) {
        gap.value = gap.dataset.answer;
        gap.classList.remove('wrong');
        gap.classList.add('correct');
      }
    });
  }
  gaps.forEach(g => g.readOnly = true);
  return allCorrect;
}
