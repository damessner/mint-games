// ============================================================
// MINT-Games – Sorting Engine (Drag to Reorder)
// ============================================================

let sortDrag = { dragging: null, ghost: null };

function renderSorting(activity, container) {
  // Shuffle items for display
  const shuffled = [...activity.items].sort(() => Math.random() - 0.5);

  const html = `
    <div class="sort-items" id="sortList">
      ${shuffled.map((item, idx) => `
        <div class="sort-item"
          id="sitem-${item.id}"
          data-id="${item.id}"
          draggable="true">
          <span class="sort-handle">⠿</span>
          <span class="sort-num">${idx + 1}</span>
          <span class="sort-text">${item.text}</span>
        </div>
      `).join('')}
    </div>`;
  container.innerHTML = html;
  container.dataset.correctOrder = JSON.stringify(activity.correctOrder);
  initSorting(container);
}

function initSorting(container) {
  const list = container.querySelector('#sortList');

  // Mouse drag
  list.addEventListener('dragstart', e => {
    const item = e.target.closest('.sort-item');
    if (!item) return;
    sortDrag.dragging = item;
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });

  list.addEventListener('dragend', () => {
    if (sortDrag.dragging) {
      sortDrag.dragging.classList.remove('dragging');
      sortDrag.dragging = null;
    }
    updateSortNumbers(list);
  });

  list.addEventListener('dragover', e => {
    e.preventDefault();
    const afterEl = getDragAfterElement(list, e.clientY);
    const dragging = sortDrag.dragging;
    if (!dragging) return;
    if (!afterEl) {
      list.appendChild(dragging);
    } else {
      list.insertBefore(dragging, afterEl);
    }
  });

  // Touch drag (iPad)
  list.querySelectorAll('.sort-item').forEach(item => {
    item.addEventListener('touchstart', sortTouchStart, { passive: false });
  });
}

function sortTouchStart(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const touch = e.touches[0];
  const rect = item.getBoundingClientRect();
  const list = item.parentElement;

  sortDrag.dragging = item;
  sortDrag.startY = touch.clientY;

  const ghost = item.cloneNode(true);
  ghost.classList.add('ghost');
  ghost.style.width = rect.width + 'px';
  ghost.style.left  = rect.left + 'px';
  ghost.style.top   = rect.top + 'px';
  ghost.style.opacity = '0.95';
  document.body.appendChild(ghost);
  sortDrag.ghost = ghost;

  item.classList.add('dragging');

  const moveH = e => {
    e.preventDefault();
    const t = e.touches[0];
    ghost.style.top = (t.clientY - (rect.height / 2)) + 'px';

    const afterEl = getDragAfterElement(list, t.clientY);
    if (!afterEl) list.appendChild(item);
    else list.insertBefore(item, afterEl);
  };

  const endH = () => {
    document.removeEventListener('touchmove', moveH);
    document.removeEventListener('touchend', endH);
    if (ghost) ghost.remove();
    sortDrag.ghost = null;
    item.classList.remove('dragging');
    sortDrag.dragging = null;
    updateSortNumbers(list);
  };

  document.addEventListener('touchmove', moveH, { passive: false });
  document.addEventListener('touchend', endH);
}

function getDragAfterElement(container, y) {
  const items = [...container.querySelectorAll('.sort-item:not(.dragging)')];
  return items.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: -Infinity }).element;
}

function updateSortNumbers(list) {
  list.querySelectorAll('.sort-item').forEach((item, i) => {
    const num = item.querySelector('.sort-num');
    if (num) num.textContent = i + 1;
  });
}

function checkSorting(content) {
  const correct = JSON.parse(content.dataset.correctOrder);
  const list = content.querySelector('#sortList');
  const items = list.querySelectorAll('.sort-item');
  let allCorrect = true;

  items.forEach((item, i) => {
    const num = item.querySelector('.sort-num');
    if (item.dataset.id === correct[i]) {
      item.classList.add('correct');
      if (num) { num.textContent = '✓'; num.style.background = 'var(--color-secondary)'; }
    } else {
      item.classList.add('wrong');
      allCorrect = false;
    }
    item.draggable = false;
    item.removeEventListener('touchstart', sortTouchStart);
    item.style.cursor = 'default';
  });

  if (allCorrect) {
    showFeedback(true, '✅ Perfekte Reihenfolge! Du hast alles richtig sortiert!');
  } else {
    showFeedback(false, '❌ Die Reihenfolge stimmt noch nicht ganz. Die grün markierten Einträge sind korrekt.');
  }
  return allCorrect;
}
