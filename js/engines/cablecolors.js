// ============================================================
// MINT-Games – Cable Colors Engine (RJ45 Farbcodierung)
// ============================================================

let cableSort = { dragging: null };

function renderCableColors(activity, container) {
  const shuffled = [...activity.colorItems].sort(() => Math.random() - 0.5);

  const html = `
    <div style="display:flex;flex-direction:column;gap:var(--space-xl)">

      <!-- RJ45 Visual Target -->
      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-lg);">
        <p style="font-size:13px;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--space-md)">
          RJ45 Stecker – Pinbelegung (TIA/EIA 568-B)
        </p>
        <div id="rj45Slots" style="display:flex;gap:6px;align-items:stretch;height:80px;padding:0 var(--space-md)">
          ${activity.correctOrder.map((_, i) => `
            <div class="rj45-slot"
              id="rj45-slot-${i}"
              data-pos="${i}"
              data-correct="${activity.correctOrder[i]}"
              style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div class="rj45-pin-slot"
                style="flex:1;width:100%;border:2px dashed var(--color-border);border-radius:6px 6px 0 0;
                       display:flex;align-items:center;justify-content:center;position:relative;min-height:44px;">
                <span class="pin-placeholder" style="font-size:11px;color:var(--color-text-dim)">?</span>
              </div>
              <span style="font-size:12px;font-weight:800;color:var(--color-text-muted)">${i + 1}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cable Items to drag -->
      <div>
        <p style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:var(--space-sm);text-transform:uppercase;letter-spacing:0.08em">
          Verfügbare Kabeldrähte – ziehe sie in die richtige Position:
        </p>
        <div id="cable-pool" style="display:flex;flex-wrap:wrap;gap:8px;padding:var(--space-md);background:var(--color-surface);border:2px dashed var(--color-border);border-radius:var(--radius-lg);min-height:70px;">
          ${shuffled.map(wire => `
            <div class="cable-wire drag-item"
              id="wire-${wire.id}"
              data-id="${wire.id}"
              draggable="true"
              style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:grab">
              <span class="wire-swatch"
                style="display:inline-block;width:18px;height:18px;border-radius:50%;
                  background:${wire.color};border:2px solid rgba(255,255,255,0.3);flex-shrink:0;
                  ${wire.stripe ? `background: repeating-linear-gradient(90deg, ${wire.color} 0px, ${wire.color} 4px, ${wire.stripeColor} 4px, ${wire.stripeColor} 8px)` : ''}"></span>
              <span style="font-size:13px;font-weight:700">${wire.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;

  container.innerHTML = html;
  container.dataset.correctOrder = JSON.stringify(activity.correctOrder);
  container.dataset.colorItems   = JSON.stringify(activity.colorItems);
  initCableColors(container, activity);
}

function initCableColors(container, activity) {
  const items = container.querySelectorAll('.cable-wire');
  const slots = container.querySelectorAll('.rj45-pin-slot');

  // Mouse
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.style.opacity = '0.4';
    });
    item.addEventListener('dragend', () => item.style.opacity = '');
  });

  slots.forEach((slot, i) => {
    const zoneEl = document.getElementById(`rj45-slot-${i}`);
    slot.addEventListener('dragover', e => { e.preventDefault(); slot.style.borderColor = 'var(--color-primary)'; });
    slot.addEventListener('dragleave', () => slot.style.borderColor = '');
    slot.addEventListener('drop', e => {
      e.preventDefault();
      slot.style.borderColor = '';
      const wireId = e.dataTransfer.getData('text/plain');
      dropWireInSlot(wireId, i, activity);
    });
  });

  // Touch
  items.forEach(item => item.addEventListener('touchstart', cableTouchStart, { passive: false }));
}

function cableTouchStart(e) {
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

  const activity = JSON.parse(document.getElementById('activityContent').dataset.colorItems
    ? document.getElementById('activityContent').dataset.colorItems : '[]');

  const moveH = e2 => {
    e2.preventDefault();
    const t = e2.touches[0];
    ghost.style.left = (t.clientX - rect.width  / 2) + 'px';
    ghost.style.top  = (t.clientY - rect.height / 2) + 'px';
  };

  const endH = e2 => {
    document.removeEventListener('touchmove', moveH);
    document.removeEventListener('touchend', endH);
    ghost.remove();
    item.style.opacity = '';

    const t = e2.changedTouches[0];
    const el = document.elementFromPoint(t.clientX, t.clientY);
    const slotEl = el?.closest('.rj45-slot');
    if (slotEl) {
      const pos = parseInt(slotEl.dataset.pos);
      const actData = {
        colorItems: JSON.parse(document.getElementById('activityContent').dataset.colorItems || '[]'),
        correctOrder: JSON.parse(document.getElementById('activityContent').dataset.correctOrder || '[]')
      };
      dropWireInSlot(item.dataset.id, pos, actData);
    }
  };

  document.addEventListener('touchmove', moveH, { passive: false });
  document.addEventListener('touchend', endH);
}

function dropWireInSlot(wireId, pos, activity) {
  const slot = document.getElementById(`rj45-slot-${pos}`).querySelector('.rj45-pin-slot');
  const wire = activity.colorItems?.find ? activity.colorItems.find(w => w.id === wireId)
    : JSON.parse(document.getElementById('activityContent').dataset.colorItems || '[]').find(w => w.id === wireId);
  if (!wire) return;

  // Return previous wire to pool if slot occupied
  const prev = slot.querySelector('.cable-wire');
  if (prev) {
    document.getElementById('cable-pool').appendChild(prev);
    prev.style.opacity = '';
    prev.draggable = true;
  }

  const placeholder = slot.querySelector('.pin-placeholder');
  if (placeholder) placeholder.remove();

  const wireEl = document.getElementById(`wire-${wireId}`);
  if (!wireEl) return;
  slot.appendChild(wireEl);
  wireEl.draggable = false;
  wireEl.style.cursor = 'default';
  wireEl.style.opacity = '';
  wireEl.removeEventListener('touchstart', cableTouchStart);
  wireEl.addEventListener('touchstart', cableTouchStart, { passive: false });

  slot.style.background = wire.stripe
    ? `repeating-linear-gradient(90deg, ${wire.color} 0px, ${wire.color} 5px, ${wire.stripeColor} 5px, ${wire.stripeColor} 10px)`
    : wire.color;

  document.getElementById('btnCheck').disabled = false;
}

function checkCableColors(content) {
  const correct = JSON.parse(content.dataset.correctOrder);
  let allCorrect = true;

  correct.forEach((wireId, pos) => {
    const slot = document.getElementById(`rj45-slot-${pos}`);
    const pinSlot = slot.querySelector('.rj45-pin-slot');
    const placed = pinSlot.querySelector('.cable-wire');

    if (placed && placed.dataset.id === wireId) {
      pinSlot.style.border = '2px solid var(--color-secondary)';
    } else {
      pinSlot.style.border = '2px solid var(--color-danger)';
      allCorrect = false;
    }
  });

  if (allCorrect) {
    showFeedback(true, '✅ Perfekt! Du kennst die TIA/EIA 568-B Farbcodierung auswendig!');
  } else {
    showFeedback(false, '❌ Einige Drähte sind noch an der falschen Position. Die Reihenfolge ist: Orange/W – Orange – Grün/W – Blau – Blau/W – Grün – Braun/W – Braun');
  }
  return allCorrect;
}
