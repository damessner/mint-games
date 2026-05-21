// ============================================================
// MINT-Games – Matching Engine (Zuordnung)
// ============================================================

let matchState = {
  selectedLeft: null,
  matched: {},
};

function renderMatching(activity, container) {
  matchState = { selectedLeft: null, matched: {} };

  const html = `
    <div class="matching-area">
      <div class="matching-col">
        <div class="matching-col-title">Person / Begriff</div>
        ${activity.leftItems.map(item => `
          <button class="match-item selectable"
            id="mleft-${item.id}"
            data-id="${item.id}"
            data-side="left"
            onclick="selectLeft('${item.id}')">
            ${item.text}
          </button>
        `).join('')}
      </div>
      <div class="matching-col">
        <div class="matching-col-title">Beschreibung</div>
        ${activity.rightItems.map(item => `
          <button class="match-item selectable"
            id="mright-${item.id}"
            data-id="${item.id}"
            data-matches="${item.matches}"
            onclick="selectRight('${item.id}', '${item.matches}')">
            ${item.text}
          </button>
        `).join('')}
      </div>
    </div>`;
  container.innerHTML = html;
  container.dataset.totalPairs = activity.leftItems.length;
}

function selectLeft(id) {
  // Deselect previous
  document.querySelectorAll('.match-item.selected').forEach(el => {
    if (el.id.startsWith('mleft-')) el.classList.remove('selected');
  });
  matchState.selectedLeft = id;
  const el = document.getElementById(`mleft-${id}`);
  if (el && !el.classList.contains('matched-correct')) {
    el.classList.add('selected');
  }
}

function selectRight(rightId, matchesLeft) {
  if (!matchState.selectedLeft) return;

  const leftEl  = document.getElementById(`mleft-${matchState.selectedLeft}`);
  const rightEl = document.getElementById(`mright-${rightId}`);

  if (!leftEl || !rightEl) return;
  if (leftEl.classList.contains('matched-correct') || rightEl.classList.contains('matched-correct')) return;

  if (matchState.selectedLeft === matchesLeft) {
    // Correct!
    leftEl.classList.remove('selected');
    leftEl.classList.add('matched-correct');
    rightEl.classList.add('matched-correct');
    leftEl.style.pointerEvents  = 'none';
    rightEl.style.pointerEvents = 'none';
    matchState.matched[matchState.selectedLeft] = rightId;
    matchState.selectedLeft = null;

    // Check if all matched
    const total = parseInt(document.getElementById('activityContent').dataset.totalPairs);
    if (Object.keys(matchState.matched).length === total) {
      showFeedback(true, '✅ Alle Paare richtig gefunden! Ausgezeichnet!');
      document.getElementById('btnCheck').style.display = 'none';
      document.getElementById('btnNext').style.display = 'block';
    }
  } else {
    // Wrong
    leftEl.classList.add('matched-wrong');
    rightEl.classList.add('matched-wrong');
    setTimeout(() => {
      leftEl.classList.remove('matched-wrong', 'selected');
      rightEl.classList.remove('matched-wrong');
    }, 600);
    matchState.selectedLeft = null;
  }
}

function checkMatching(content) {
  const total   = parseInt(content.dataset.totalPairs);
  const matched = Object.keys(matchState.matched).length;
  if (matched === total) {
    showFeedback(true, '✅ Alle Paare wurden richtig zugeordnet!');
    return true;
  } else {
    showFeedback(false, `⚠️ Noch ${total - matched} Paare übrig. Klicke erst links, dann rechts!`);
    return false;
  }
}
