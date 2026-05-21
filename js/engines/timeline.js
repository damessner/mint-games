// ============================================================
// MINT-Games – Timeline Engine (Zeitstrahl)
// ============================================================

function renderTimeline(activity, container) {
  const shuffled = [...activity.items].sort(() => Math.random() - 0.5);

  const html = `
    <div class="timeline-area">
      <div class="timeline-events-pool" id="timeline-pool">
        ${shuffled.map(item => `
          <div class="drag-item"
            id="titem-${item.id}"
            data-id="${item.id}"
            data-text="${item.text}"
            draggable="true">
            ${item.text}
          </div>
        `).join('')}
      </div>

      <div class="timeline-track">
        <div class="timeline-line"></div>
        ${activity.slots.map(slot => `
          <div class="timeline-slot">
            <span class="timeline-year">${slot.year}</span>
            <div class="timeline-dot"></div>
            <div class="timeline-drop-zone"
              id="tzone-${slot.year}"
              data-year="${slot.year}"
              data-correct="${slot.correct}">
              <span class="zone-placeholder">${slot.placeholder}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  container.innerHTML = html;
  initTimelineDrag(container);
}

function initTimelineDrag(container) {
  const items = container.querySelectorAll('.drag-item');
  const zones = container.querySelectorAll('.timeline-drop-zone');

  // Mouse drag
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      dropOnTimeline(id, zone);
    });
  });

  // Touch (reuse global touch handler from dragdrop.js)
  items.forEach(item => {
    item.addEventListener('touchstart', onTouchStartTimeline, { passive: false });
  });
}

function onTouchStartTimeline(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const touch = e.touches[0];
  const rect  = item.getBoundingClientRect();

  const ghost = item.cloneNode(true);
  ghost.classList.add('ghost');
  ghost.style.width = rect.width + 'px';
  ghost.style.left  = (touch.clientX - rect.width / 2) + 'px';
  ghost.style.top   = (touch.clientY - rect.height / 2) + 'px';
  document.body.appendChild(ghost);

  item.style.opacity = '0.4';

  const moveH = e2 => {
    e2.preventDefault();
    const t = e2.touches[0];
    ghost.style.left = (t.clientX - rect.width  / 2) + 'px';
    ghost.style.top  = (t.clientY - rect.height / 2) + 'px';
    document.querySelectorAll('.timeline-drop-zone').forEach(z => z.classList.remove('drag-over'));
    const el = document.elementFromPoint(t.clientX, t.clientY);
    el?.closest('.timeline-drop-zone')?.classList.add('drag-over');
  };

  const endH = e2 => {
    document.removeEventListener('touchmove', moveH);
    document.removeEventListener('touchend', endH);
    ghost.remove();
    document.querySelectorAll('.timeline-drop-zone').forEach(z => z.classList.remove('drag-over'));
    item.style.opacity = '';
    const t = e2.changedTouches[0];
    const el = document.elementFromPoint(t.clientX, t.clientY);
    const zone = el?.closest('.timeline-drop-zone');
    if (zone) dropOnTimeline(item.dataset.id, zone);
  };

  document.addEventListener('touchmove', moveH, { passive: false });
  document.addEventListener('touchend', endH);
}

function dropOnTimeline(itemId, zone) {
  // If zone already has an item, send it back to pool
  const existing = zone.querySelector('.drag-item');
  if (existing) {
    const pool = document.getElementById('timeline-pool');
    pool.appendChild(existing);
    existing.draggable = true;
    existing.addEventListener('touchstart', onTouchStartTimeline, { passive: false });
  }

  const item = document.getElementById(`titem-${itemId}`);
  if (!item) return;
  const placeholder = zone.querySelector('.zone-placeholder');
  if (placeholder) placeholder.remove();
  zone.appendChild(item);
  item.draggable = false;
  item.removeEventListener('touchstart', onTouchStartTimeline);
  // Allow re-dragging from zone
  item.draggable = true;
  item.addEventListener('touchstart', onTouchStartTimeline, { passive: false });
  document.getElementById('btnCheck').disabled = false;
}

function checkTimeline(content) {
  const zones = content.querySelectorAll('.timeline-drop-zone');
  let allCorrect = true;

  zones.forEach(zone => {
    const item = zone.querySelector('.drag-item');
    const correct = zone.dataset.correct;

    if (item && item.dataset.id === correct) {
      zone.classList.add('correct');
      zone.classList.remove('wrong');
    } else {
      zone.classList.add('wrong');
      allCorrect = false;
    }

    // Disable dragging after check
    if (item) {
      item.draggable = false;
      item.removeEventListener('touchstart', onTouchStartTimeline);
      item.style.cursor = 'default';
    }
  });

  if (allCorrect) {
    showFeedback(true, '✅ Perfekt! Du hast alle Ereignisse richtig in den Zeitstrahl eingeordnet!');
  } else {
    showFeedback(false, '❌ Einige Ereignisse sind noch nicht an der richtigen Position. Überprüfe die rot markierten Jahre.');
  }
  return allCorrect;
}
