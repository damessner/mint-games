// ============================================================
// MINT-Games – Knowledge Page Renderer
// Renders rich knowledge blocks before each activity
// ============================================================

function renderKnowledgePage(activity, stepIndex, totalSteps) {
  const k = activity.knowledge;
  if (!k) return null;

  const blocksHtml = k.blocks.map(block => renderKnowledgeBlock(block)).join('');

  return `
    <div class="knowledge-screen" id="knowledgeScreen">
      <div class="knowledge-hero">
        <div class="knowledge-step-label">
          📚 Schritt ${stepIndex + 1} von ${totalSteps} · Wissen
        </div>
        <h2 class="knowledge-title">${k.title}</h2>
      </div>
      <div class="knowledge-blocks">
        ${blocksHtml}
      </div>
      <div class="knowledge-cta">
        <p class="knowledge-cta-text">✅ Text gelesen? Dann kommt jetzt die Aufgabe!</p>
        <button class="btn-to-activity" onclick="showActivityFromKnowledge()">
          🎮 Zur Aufgabe!
        </button>
      </div>
    </div>`;
}

function renderKnowledgeBlock(block) {
  switch (block.type) {

    case 'text':
      return `<div class="kb-text">${block.content}</div>`;

    case 'highlight':
      return `
        <div class="kb-highlight">
          <div class="kb-highlight-icon">${block.icon}</div>
          <div class="kb-highlight-body">
            <div class="kb-highlight-title">${block.title}</div>
            <div class="kb-highlight-text">${block.content}</div>
          </div>
        </div>`;

    case 'keyterms':
      return `
        <div class="kb-keyterms">
          ${block.terms.map(t => `
            <div class="kb-term-card">
              <div class="kb-term-header">
                <span class="kb-term-icon">${t.icon}</span>
                <span class="kb-term-name">${t.term}</span>
              </div>
              <div class="kb-term-def">${t.def}</div>
            </div>
          `).join('')}
        </div>`;

    case 'steps':
      return `
        <div class="kb-steps">
          <div class="kb-steps-title">${block.title || 'Schritt für Schritt:'}</div>
          <div class="kb-steps-list">
            ${block.steps.map((s, i) => `
              <div class="kb-step">
                ${block.numbered !== false
                  ? `<div class="kb-step-num">${i + 1}</div>`
                  : `<div class="kb-step-icon">${s.icon}</div>`}
                <div class="kb-step-text">${s.icon && block.numbered !== false ? s.icon + ' ' : ''}${s.text}</div>
              </div>
            `).join('')}
          </div>
        </div>`;

    case 'comparison':
      return `
        <div class="kb-comparison">
          ${renderCompareCard(block.left, 'primary')}
          ${renderCompareCard(block.right, 'secondary')}
        </div>`;

    case 'timeline-preview':
      return `
        <div class="kb-timeline-preview">
          ${block.events.map(e => `
            <div class="kb-timeline-row">
              <span class="kb-tl-year">${e.year}</span>
              <span class="kb-tl-icon">${e.icon}</span>
              <span class="kb-tl-text">${e.text}</span>
            </div>
          `).join('')}
        </div>`;

    case 'profiles':
      return `
        <div class="kb-profiles">
          ${block.people.map(p => `
            <div class="kb-profile-card">
              <div class="kb-profile-flag">${p.icon}</div>
              <div class="kb-profile-info">
                <div class="kb-profile-name">${p.name}</div>
                <div class="kb-profile-achievement">🏆 ${p.achievement}</div>
                <div class="kb-profile-fact">💡 ${p.fact}</div>
              </div>
            </div>
          `).join('')}
        </div>`;

    case 'summary-grid':
      return `
        <div class="kb-summary-grid">
          ${block.items.map(item => `
            <div class="kb-summary-item">
              <div class="kb-summary-icon">${item.icon}</div>
              <div class="kb-summary-title">${item.title}</div>
              <div class="kb-summary-text">${item.text}</div>
            </div>
          `).join('')}
        </div>`;

    case 'cable-cards':
      return `
        <div class="kb-cable-cards">
          ${block.cables.map(c => `
            <div class="kb-cable-card" style="border-left-color: ${c.color}">
              <div class="kb-cable-header">
                <div class="kb-cable-icon" style="color:${c.color}">${c.icon}</div>
                <div>
                  <div class="kb-cable-name" style="color:${c.color}">${c.name}</div>
                  <div class="kb-cable-desc">${c.description}</div>
                </div>
              </div>
              <ul class="kb-cable-props">
                ${c.properties.map(p => `<li>${p}</li>`).join('')}
              </ul>
              <div class="kb-cable-uses">📌 Einsatz: ${c.emoji}</div>
            </div>
          `).join('')}
        </div>`;

    case 'color-table':
      return `
        <div class="kb-color-table">
          <div class="kb-color-table-title">${block.title}</div>
          ${block.rows.map(r => {
            const bg = r.stripe
              ? `repeating-linear-gradient(90deg, ${r.color} 0px, ${r.color} 5px, ${r.stripeColor} 5px, ${r.stripeColor} 10px)`
              : r.color;
            return `
              <div class="kb-color-row">
                <span class="kb-color-pin">Pin ${r.pin}</span>
                <div class="kb-color-swatch" style="background:${bg}"></div>
                <span class="kb-color-label">${r.label}</span>
                <span class="kb-color-pair">${r.pair}</span>
              </div>`;
          }).join('')}
        </div>`;

    case 'spec-table':
      return `
        <div class="kb-spec-table">
          <div class="kb-spec-table-title">${block.title}</div>
          <div class="kb-spec-header">
            ${block.headers.map(h => `<span>${h}</span>`).join('')}
          </div>
          ${block.rows.map(r => `
            <div class="kb-spec-row">
              ${r.map(cell => `<span>${cell}</span>`).join('')}
            </div>
          `).join('')}
        </div>`;

    case 'tools':
      return `
        <div>
          ${block.title ? `<div class="kb-steps-title">${block.title}</div>` : ''}
          <div class="kb-tools" style="margin-top: ${block.title ? 'var(--space-md)' : '0'}">
            ${block.items.map(t => `
              <div class="kb-tool-item">
                <div class="kb-tool-icon">${t.icon}</div>
                <div class="kb-tool-name">${t.name}</div>
                <div class="kb-tool-desc">${t.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>`;

    case 'device-cards':
      return `
        <div class="kb-device-cards">
          ${block.devices.map(d => `
            <div class="kb-device-card" style="border-left-color:${d.color}">
              <div class="kb-device-icon-wrap">${d.icon}</div>
              <div class="kb-device-body">
                <div class="kb-device-name">${d.name}</div>
                <div class="kb-device-function" style="color:${d.color}">${d.function}</div>
                <div class="kb-device-detail">${d.detail}</div>
                <div class="kb-device-ports">🔌 ${d.ports}</div>
              </div>
            </div>
          `).join('')}
        </div>`;

    default:
      return `<div class="kb-text">${JSON.stringify(block)}</div>`;
  }
}

function renderCompareCard(side, colorClass) {
  return `
    <div class="kb-compare-card ${colorClass}">
      <div class="kb-compare-icon">${side.icon}</div>
      <div class="kb-compare-title">${side.title}</div>
      <ul class="kb-compare-list">
        ${side.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>`;
}
