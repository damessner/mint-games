// ============================================================
// MINT-Games – Drag & Drop Engine (Touch-optimized for iPad)
// ============================================================

let dragState = {
  dragging: null,
  ghost: null,
  offsetX: 0,
  offsetY: 0,
  sourceContainer: null,
};

function renderDragDrop(activity, container) {
  const html = `
    <div class="drag-area">
      <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:4px">
        Ziehe die Begriffe in die richtige Kategorie:
      </p>
      <div class="drag-items-pool" id="drag-pool">
        ${activity.items.map(item => `
          <div class="drag-item"
            id="ditem-${item.id}"
            data-id="${item.id}"
            data-text="${item.text}"
            draggable="true">
            ${item.text}
          </div>
        `).join('')}
      </div>
      <div class="drag-targets">
        ${activity.targets.map(target => `
          <div class="drag-target-row">
            <span class="drag-target-label">${target.label}</span>
            <div class="drag-target-zone"
              id="zone-${target.id}"
              data-id="${target.id}"
              data-accepts='${JSON.stringify(target.accepts)}'>
              <span class="zone-placeholder">Hierher ziehen…</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  container.innerHTML = html;
  container.dataset.activity = JSON.stringify({ targets: activity.targets });
  initDragDrop(container);
}

function initDragDrop(container) {
  const items = container.querySelectorAll('.drag-item');
  const zones = container.querySelectorAll('.drag-target-zone');

  // Mouse events (desktop)
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.classList.add('dragging');
      setTimeout(() => item.style.opacity = '0.4', 0);
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      item.style.opacity = '';
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      dropIntoZone(id, zone, container);
    });
  });

  // Touch events (iPad)
  items.forEach(item => {
    item.addEventListener('touchstart', onTouchStart, { passive: false });
  });
}

function onTouchStart(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const touch = e.touches[0];
  const rect = item.getBoundingClientRect();

  dragState.dragging = item;
  dragState.offsetX = touch.clientX - rect.left;
  dragState.offsetY = touch.clientY - rect.top;
  dragState.sourceContainer = item.parentElement;

  // Create ghost element
  const ghost = item.cloneNode(true);
  ghost.classList.add('ghost');
  ghost.style.width = rect.width + 'px';
  ghost.style.left = (touch.clientX - dragState.offsetX) + 'px';
  ghost.style.top  = (touch.clientY - dragState.offsetY) + 'px';
  document.body.appendChild(ghost);
  dragState.ghost = ghost;

  item.style.opacity = '0.4';

  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('touchend', onTouchEnd);
}

function onTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  if (dragState.ghost) {
    dragState.ghost.style.left = (touch.clientX - dragState.offsetX) + 'px';
    dragState.ghost.style.top  = (touch.clientY - dragState.offsetY) + 'px';
  }

  // Highlight drop zone under finger
  document.querySelectorAll('.drag-target-zone').forEach(z => z.classList.remove('drag-over'));
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.drag-target-zone');
  if (zone) zone.classList.add('drag-over');
}

function onTouchEnd(e) {
  document.removeEventListener('touchmove', onTouchMove);
  document.removeEventListener('touchend', onTouchEnd);

  document.querySelectorAll('.drag-target-zone').forEach(z => z.classList.remove('drag-over'));

  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.drag-target-zone');

  if (dragState.ghost) { dragState.ghost.remove(); dragState.ghost = null; }

  const item = dragState.dragging;
  if (!item) return;
  item.style.opacity = '';

  if (zone) {
    const container = document.getElementById('activityContent');
    dropIntoZone(item.dataset.id, zone, container);
  }

  dragState.dragging = null;
}

function dropIntoZone(itemId, zone, container) {
  const item = document.getElementById(`ditem-${itemId}`);
  if (!item) return;

  // Remove placeholder text
  const placeholder = zone.querySelector('.zone-placeholder');
  if (placeholder) placeholder.remove();

  // Move item to zone (allow multiple per zone)
  zone.appendChild(item);
  item.draggable = false;
  item.style.opacity = '';
  item.classList.remove('dragging');

  // Add touch events back for moving between zones
  item.removeEventListener('touchstart', onTouchStart);
  item.addEventListener('touchstart', onTouchStart, { passive: false });

  // Enable check button
  document.getElementById('btnCheck').disabled = false;
}

function checkDragDrop(content) {
  const actData = JSON.parse(content.dataset.activity);
  const targets = actData.targets;
  let allCorrect = true;

  targets.forEach(target => {
    const zone = document.getElementById(`zone-${target.id}`);
    const items = zone.querySelectorAll('.drag-item');
    const accepts = target.accepts;

    let zoneCorrect = true;
    items.forEach(item => {
      const isAccepted = accepts.includes(item.dataset.id);
      if (!isAccepted) zoneCorrect = false;
    });

    // Check all expected items are here
    const zoneItemIds = Array.from(items).map(i => i.dataset.id);
    accepts.forEach(aid => {
      if (!zoneItemIds.includes(aid)) zoneCorrect = false;
    });

    if (zoneCorrect && items.length > 0) {
      zone.classList.add('correct');
      zone.classList.remove('wrong');
    } else {
      zone.classList.add('wrong');
      allCorrect = false;
    }
  });

  if (allCorrect) {
    showFeedback(true, '✅ Perfekt! Alle Begriffe richtig zugeordnet!');
  } else {
    showFeedback(false, '❌ Einige Zuordnungen stimmen noch nicht. Überprüfe die rot markierten Bereiche.');
  }

  // Disable further dragging
  document.querySelectorAll('.drag-item').forEach(i => {
    i.draggable = false;
    i.removeEventListener('touchstart', onTouchStart);
    i.style.cursor = 'default';
  });

  return allCorrect;
}
