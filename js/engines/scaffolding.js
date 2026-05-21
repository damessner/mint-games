// ============================================================
// MINT-Games – Scaffolding Engine
// Hint system + Peek (10-second answer reveal)
// ============================================================

const SCAFFOLDING = {
  hintUsed:   false,
  peekUsed:   false,
  peekCount:  0,
  MAX_PEEKS:  2,
  peekTimer:  null,
  PEEK_SECS:  10,
};

// ── Render Scaffolding Bar ────────────────────────────────
function renderScaffoldingBar(activity) {
  const bar = document.getElementById('scaffoldingBar');
  if (!bar) return;

  SCAFFOLDING.hintUsed = false;
  SCAFFOLDING.peekUsed = false;

  const hasHint = !!(activity.hint || activity.explanation || (activity.questions && activity.questions[0]?.explanation));
  const peekLeft = SCAFFOLDING.MAX_PEEKS - SCAFFOLDING.peekCount;

  bar.innerHTML = `
    <span class="scaffolding-label">🛟 Hilfe:</span>

    ${hasHint ? `
      <button class="btn-scaffold btn-hint" id="btnHint" onclick="showHint()" title="Zeigt einen Hinweis zur Aufgabe">
        💡 Hinweis
      </button>
    ` : ''}

    <button class="btn-scaffold btn-peek" id="btnPeek"
      onclick="startPeek()"
      ${peekLeft <= 0 ? 'disabled' : ''}
      title="Zeigt die Lösung für 10 Sekunden">
      👁️ Lösung ansehen
      <span class="scaffold-uses">${peekLeft}×</span>
    </button>
  `;

  // Close hint if open
  const panel = document.getElementById('hintPanel');
  if (panel) { panel.classList.remove('open'); panel.innerHTML = ''; }
}

// ── Hint ─────────────────────────────────────────────────
function showHint() {
  const btn = document.getElementById('btnHint');
  if (btn) btn.classList.add('used');

  SCAFFOLDING.hintUsed = true;

  const activity = window.CURRENT_ACTIVITY;
  if (!activity) return;

  const panel = document.getElementById('hintPanel');
  if (!panel) return;

  // Build hint content depending on activity type
  const { hintTitle, hintText, hintExtra } = buildHintContent(activity);

  panel.innerHTML = `
    <div class="hint-header">
      <div class="hint-title">💡 Hinweis</div>
      <button class="hint-close" onclick="closeHint()" aria-label="Hinweis schließen">✕</button>
    </div>
    <div class="hint-text">${hintText}</div>
    ${hintExtra ? `<div class="hint-extra">💬 ${hintExtra}</div>` : ''}
  `;
  panel.classList.add('open');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeHint() {
  const panel = document.getElementById('hintPanel');
  if (panel) panel.classList.remove('open');
}

function buildHintContent(activity) {
  let hintText  = activity.hint || '';
  let hintExtra = '';

  switch (activity.type) {
    case 'timeline':
      hintText  = hintText || '📅 Überlege: Wann passierte was historisch? Die 1960er Jahre waren das Zeitalter des Kalten Krieges und der Mondlandung.';
      hintExtra = `Tipp: Beginne mit dem frühesten Ereignis (${activity.slots[0].year}) und arbeite dich vorwärts.`;
      break;

    case 'dragdrop':
      hintText = hintText || buildDragDropHint(activity);
      hintExtra = 'Tipp: Lies den Wissenstext nochmals – alle Antworten stehen dort!';
      break;

    case 'fillgaps':
      hintText = hintText || buildFillGapsHint(activity);
      hintExtra = 'Tipp: Schau dir die Hinweis-Texte unter den Lücken genau an – sie verraten den Typ der Antwort.';
      break;

    case 'matching':
      hintText = hintText || buildMatchingHint(activity);
      hintExtra = 'Tipp: Arbeite systematisch – schließe die aus, die du bereits kennst!';
      break;

    case 'sorting':
      hintText = hintText || buildSortingHint(activity);
      hintExtra = 'Tipp: Überlege, was logisch als Erstes passieren muss, bevor etwas anderes möglich ist.';
      break;

    case 'cable-colors':
      hintText = '🎨 Merkreim für 568-B:\n"OraWei – Ora – GrüWei – Blau\nBlauWei – Grün – BraunWei – Braun!"\n\nPins 1–2: Orange-Paar · Pins 3+6: Grün-Paar (aufgeteilt!) · Pins 4–5: Blau-Paar · Pins 7–8: Braun-Paar';
      hintExtra = 'Beachte: Grün-Weiß (Pin 3) und Grün (Pin 6) sind aufgeteilt – das ist der knifflige Teil!';
      break;

    case 'quiz-multi': {
      // Hint for the current quiz question
      const qi = window.CURRENT_QUIZ_INDEX || 0;
      const q  = activity.questions?.[qi];
      if (q) {
        const numOptions = q.options.length;
        hintText = `❓ Diese Frage hat ${numOptions} mögliche Antworten.\n\n`;
        // Eliminate one wrong answer as hint
        const wrongIndices = q.options
          .map((_, i) => i)
          .filter(i => i !== q.correct);
        const eliminate = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
        hintText += `💡 Ausschluss-Tipp: "${q.options[eliminate]}" ist NICHT die richtige Antwort.\n`;
        hintText += `\n📖 Schaue nochmal in den Wissenstext dieses Moduls – die Antwort steht dort!`;
      }
      break;
    }

    case 'pcassembly':
      hintText = '🛠️ Montagetipp:\n\n1. Ziehe zuerst das **Mainboard** in den großen freien "Mainboard-Platz" des PC-Gehäuses.\n2. Erst wenn das Mainboard sitzt, kannst du **CPU, RAM und Grafikkarte** auf die Steckplätze des Mainboards platzieren!\n3. Netzteil und SSD haben feste, beschriftete eigene Bereiche im Gehäuse.';
      hintExtra = 'Denke an die Sicherheitsregel: Vor dem Arbeiten immer statisch entladen!';
      break;

    case 'pcboot':
      hintText = '⚡ Schritt-für-Schritt Boot-Lösung:\n\n1. Drücke den runden **Power-Button ⏻** am PC-Gehäuse.\n2. Lies die Fehlermeldung auf dem Monitor: "No Boot Device Found".\n3. Ziehe den **Windows 11 USB-Stick** auf den USB-Anschluss.\n4. Schalte den PC über den Power-Button aus und wieder an (Neustart), damit das BIOS den USB-Stick lädt!';
      hintExtra = 'Ein Neustart ist zwingend nötig, damit das BIOS nach dem Einstecken des USB-Sticks neu sucht!';
      break;

    case 'pcinstall':
      hintText = '💿 Windows-Setup Guide:\n\n1. Wähle die Sprache (Deutsch Österreich) und klicke "Weiter".\n2. Klicke auf "Jetzt installieren".\n3. Akzeptiere die Lizenzbedingungen und klicke "Weiter".\n4. Wähle **"Benutzerdefiniert"** für eine saubere Erstinstallation auf der leeren SSD.\n5. Klicke auf **"⭐ [Neu] Partition erstellen"** und dann auf "Weiter", um die SSD einzurichten.\n6. Warte den Kopiervorgang ab.\n7. Gib einen Benutzernamen ein und klicke "Einrichten".';
      hintExtra = 'Ohne Partitionierung weiß Windows nicht, wo es installiert werden soll. Klicke unbedingt auf "Partition erstellen"!';
      break;

    default:
      hintText = activity.hint || activity.explanation || 'Schau dir den Wissenstext nochmals an – alle Antworten sind dort erklärt!';
  }

  return { hintText, hintExtra };
}

function buildDragDropHint(activity) {
  if (!activity.targets) return 'Ziehe jeden Begriff zu der Kategorie, die am besten passt.';
  const lines = activity.targets.map(t => {
    const count = t.accepts.length;
    return `${t.label}: gehören ${count} Begriff${count !== 1 ? 'e' : ''} hinein`;
  });
  return 'Anzahl der Begriffe pro Kategorie:\n' + lines.join('\n');
}

function buildFillGapsHint(activity) {
  if (!activity.segments) return '';
  const gaps = activity.segments.filter(s => s.type === 'gap');
  const firstLetters = gaps.map((g, i) =>
    `Lücke ${i + 1}: beginnt mit „${g.answer[0].toUpperCase()}" · ${g.hint || g.answer.length + ' Zeichen'}`
  );
  return 'Erster Buchstabe jeder Antwort:\n' + firstLetters.join('\n');
}

function buildMatchingHint(activity) {
  if (!activity.leftItems) return '';
  // Show one correct pair as example
  const first = activity.leftItems[0];
  const match = activity.rightItems?.find(r => r.matches === first.id);
  if (!first || !match) return 'Verbinde jeden Begriff mit seiner passenden Beschreibung.';
  return `Beispiel: "${first.text}" → "${match.text}"\n\nNun kannst du die anderen Paare selbst finden!`;
}

function buildSortingHint(activity) {
  if (!activity.correctOrder || !activity.items) return '';
  const firstId   = activity.correctOrder[0];
  const lastId    = activity.correctOrder[activity.correctOrder.length - 1];
  const firstItem = activity.items.find(i => i.id === firstId);
  const lastItem  = activity.items.find(i => i.id === lastId);
  return `🔢 Hinweis zur Reihenfolge:\n\n🟢 Erster Schritt: "${firstItem?.text || '?'}"\n🔴 Letzter Schritt: "${lastItem?.text || '?'}"\n\nOrdne die restlichen Schritte dazwischen!`;
}

// ── Peek ─────────────────────────────────────────────────
function startPeek() {
  const activity = window.CURRENT_ACTIVITY;
  if (!activity) return;

  if (SCAFFOLDING.peekCount >= SCAFFOLDING.MAX_PEEKS) return;
  SCAFFOLDING.peekCount++;
  SCAFFOLDING.peekUsed = true;

  // Update peek button
  const btn = document.getElementById('btnPeek');
  const left = SCAFFOLDING.MAX_PEEKS - SCAFFOLDING.peekCount;
  if (btn) {
    const badge = btn.querySelector('.scaffold-uses');
    if (badge) badge.textContent = `${left}×`;
    if (left <= 0) btn.disabled = true;
  }

  // Build peek content
  const peekHtml = buildPeekContent(activity);
  showPeekOverlay(peekHtml);
}

function showPeekOverlay(contentHtml) {
  const overlay = document.getElementById('peekOverlay');
  if (!overlay) return;

  const countdownEl = document.getElementById('peekCountdown');
  const progressEl  = document.getElementById('peekProgressFill');
  const contentEl   = document.getElementById('peekContent');

  contentEl.innerHTML = contentHtml;
  overlay.classList.add('active');

  let secs = SCAFFOLDING.PEEK_SECS;
  countdownEl.textContent = secs;
  if (progressEl) progressEl.style.width = '100%';

  // Force reflow so transition works
  progressEl?.offsetHeight;
  if (progressEl) {
    progressEl.style.transition = `width ${secs}s linear`;
    progressEl.style.width      = '0%';
  }

  SCAFFOLDING.peekTimer = setInterval(() => {
    secs--;
    if (countdownEl) {
      countdownEl.textContent = secs;
      if (secs <= 3) countdownEl.classList.add('urgent');
    }
    if (secs <= 0) {
      closePeek();
    }
  }, 1000);
}

function closePeek() {
  clearInterval(SCAFFOLDING.peekTimer);
  SCAFFOLDING.peekTimer = null;

  const overlay = document.getElementById('peekOverlay');
  if (overlay) overlay.classList.remove('active');

  const countdown = document.getElementById('peekCountdown');
  if (countdown) countdown.classList.remove('urgent');
}

function buildPeekContent(activity) {
  switch (activity.type) {

    case 'quiz-multi': {
      const qi = window.CURRENT_QUIZ_INDEX || 0;
      const q  = activity.questions?.[qi];
      if (!q) return '<p>Keine Vorschau verfügbar.</p>';
      return `
        <p style="font-size:14px;color:var(--color-text-muted);margin-bottom:var(--space-sm)">Richtige Antwort für Frage ${qi + 1}:</p>
        <div class="peek-answer-item">
          <span class="peek-answer-num">✓</span>
          <div>
            <div class="peek-answer-text">${q.options[q.correct]}</div>
            <div class="peek-answer-sub">${q.explanation}</div>
          </div>
        </div>`;
    }

    case 'fillgaps': {
      const gaps = activity.segments?.filter(s => s.type === 'gap') || [];
      return gaps.map((g, i) => `
        <div class="peek-answer-item" style="animation-delay:${i * 0.05}s">
          <span class="peek-answer-num">${i + 1}</span>
          <div>
            <div class="peek-answer-text">→ <strong>${g.answer}</strong></div>
            <div class="peek-answer-sub">${g.hint || ''}</div>
          </div>
        </div>`).join('');
    }

    case 'timeline': {
      const sorted = [...activity.slots].sort((a, b) => parseInt(a.year) - parseInt(b.year));
      return sorted.map((slot, i) => {
        const item = activity.items.find(it => it.id === slot.correct);
        return `
          <div class="peek-answer-item" style="animation-delay:${i * 0.05}s">
            <span class="peek-answer-num" style="color:var(--color-accent);font-size:15px">${slot.year}</span>
            <div class="peek-answer-text">${item?.text || slot.correct}</div>
          </div>`;
      }).join('');
    }

    case 'dragdrop': {
      return activity.targets.map((target, ti) => {
        const correctItems = activity.items.filter(it => target.accepts.includes(it.id));
        return `
          <div style="margin-bottom:var(--space-sm)">
            <div style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:4px">${target.label}</div>
            ${correctItems.map((it, i) => `
              <div class="peek-answer-item" style="animation-delay:${(ti * 3 + i) * 0.04}s">
                <span class="peek-answer-num">→</span>
                <div class="peek-answer-text">${it.text}</div>
              </div>`).join('')}
          </div>`;
      }).join('');
    }

    case 'matching': {
      return activity.leftItems.map((left, i) => {
        const right = activity.rightItems?.find(r => r.matches === left.id);
        return `
          <div class="peek-answer-item" style="animation-delay:${i * 0.05}s">
            <span class="peek-answer-num">${i + 1}</span>
            <div>
              <div class="peek-answer-text"><strong>${left.text}</strong></div>
              <div class="peek-answer-sub">→ ${right?.text || '?'}</div>
            </div>
          </div>`;
      }).join('');
    }

    case 'sorting': {
      return activity.correctOrder.map((id, i) => {
        const item = activity.items.find(it => it.id === id);
        return `
          <div class="peek-answer-item" style="animation-delay:${i * 0.05}s">
            <span class="peek-answer-num">${i + 1}</span>
            <div class="peek-answer-text">${item?.text || id}</div>
          </div>`;
      }).join('');
    }

    case 'cable-colors': {
      const order   = activity.correctOrder || [];
      const colors  = activity.colorItems   || [];
      return `
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:var(--space-sm)">TIA/EIA 568-B – korrekte Reihenfolge:</p>
        ${order.map((id, i) => {
          const wire = colors.find(c => c.id === id);
          if (!wire) return '';
          const bg = wire.stripe
            ? `repeating-linear-gradient(90deg, ${wire.color} 0px, ${wire.color} 5px, ${wire.stripeColor} 5px, ${wire.stripeColor} 10px)`
            : wire.color;
          return `
            <div class="peek-wire-row" style="animation-delay:${i * 0.04}s">
              <span style="font-family:var(--font-heading);font-size:13px;font-weight:800;color:var(--color-text-muted);width:24px">Pin ${i + 1}</span>
              <div class="peek-wire-swatch" style="background:${bg}"></div>
              <span style="font-size:14px;font-weight:600;color:var(--color-text)">${wire.label}</span>
            </div>`;
        }).join('')}`;
    }

    case 'pcassembly': {
      return `
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:var(--space-sm)">Richtige Reihenfolge & Platzierung:</p>
        <div class="peek-answer-item" style="animation-delay:0.05s">
          <span class="peek-answer-num">1</span>
          <div>
            <div class="peek-answer-text"><strong>Mainboard</strong></div>
            <div class="peek-answer-sub">Muss als allererstes in das Gehäuse!</div>
          </div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.1s">
          <span class="peek-answer-num">2</span>
          <div>
            <div class="peek-answer-text"><strong>CPU, RAM, Grafikkarte</strong></div>
            <div class="peek-answer-sub">Werden danach auf das eingebaute Mainboard gesteckt.</div>
          </div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.15s">
          <span class="peek-answer-num">3</span>
          <div>
            <div class="peek-answer-text"><strong>Netzteil & SSD</strong></div>
            <div class="peek-answer-sub">Kommen in das Netzteil-Fach bzw. den SSD-Schacht.</div>
          </div>
        </div>
      `;
    }

    case 'pcboot': {
      return `
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:var(--space-sm)">Ablauf des erfolgreichen Bootens:</p>
        <div class="peek-answer-item" style="animation-delay:0.05s">
          <span class="peek-answer-num">1</span>
          <div class="peek-answer-text">Power-Button drücken (Anschalten)</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.1s">
          <span class="peek-answer-num">2</span>
          <div class="peek-answer-text">Windows-USB-Stick in den USB-Port stecken</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.15s">
          <span class="peek-answer-num">3</span>
          <div class="peek-answer-text">Power-Button drücken (Ausschalten/Neustart)</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.2s">
          <span class="peek-answer-num">4</span>
          <div class="peek-answer-text">Power-Button erneut drücken (Start vom USB-Stick!)</div>
        </div>
      `;
    }

    case 'pcinstall': {
      return `
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:var(--space-sm)">Schlüsselstellen des Windows-Setups:</p>
        <div class="peek-answer-item" style="animation-delay:0.05s">
          <span class="peek-answer-num">1</span>
          <div class="peek-answer-text">Sprachauswahl → Jetzt installieren → Lizenz akzeptieren</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.1s">
          <span class="peek-answer-num">2</span>
          <div class="peek-answer-text">Installationstyp: <strong>Benutzerdefiniert</strong> wählen</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.15s">
          <span class="peek-answer-num">3</span>
          <div class="peek-answer-text">Speicherort: Auf <strong>⭐ [Neu] Partition erstellen</strong> klicken</div>
        </div>
        <div class="peek-answer-item" style="animation-delay:0.2s">
          <span class="peek-answer-num">4</span>
          <div class="peek-answer-text">Dateien kopieren abwarten → Benutzername eingeben</div>
        </div>
      `;
    }

    default:
      return `<div class="peek-answer-item"><span class="peek-answer-num">💡</span><div class="peek-answer-text">${activity.explanation || 'Keine Vorschau verfügbar.'}</div></div>`;
  }
}
