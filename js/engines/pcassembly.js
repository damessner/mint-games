// ============================================================
// MINT-Games – PC Assembly & Setup Simulator Engine
// ============================================================

let pcDragState = {
  dragging: null,
  ghost: null,
  offsetX: 0,
  offsetY: 0,
  sourceContainer: null,
};

// ── 1. PC Assembly Engine ──────────────────────────────────
function renderPcAssembly(activity, container) {
  const parts = activity.parts || [
    { id: "mainboard", name: "Mainboard", icon: "🖥️", desc: "Das Fundament: Verbindet alle Bauteile miteinander." },
    { id: "cpu", name: "Prozessor (CPU)", icon: "🧠", desc: "Das Gehirn des PCs. Berechnet alles." },
    { id: "ram", name: "Arbeitsspeicher (RAM)", icon: "⚡", desc: "Kurzzeitspeicher für laufende Programme." },
    { id: "gpu", name: "Grafikkarte (GPU)", icon: "🎮", desc: "Verarbeitet Bilder, Videos und 3D-Spiele." },
    { id: "psu", name: "Netzteil (PSU)", icon: "🔌", desc: "Versorgt alle Komponenten mit Strom." },
    { id: "ssd", name: "SSD-Speicher", icon: "💾", desc: "Dauerspeicher für Windows und deine Daten." }
  ];

  const html = `
    <div class="assembly-container">
      <!-- Parts List -->
      <div class="assembly-parts-box">
        <div class="assembly-parts-title">Teile-Kiste</div>
        <div class="assembly-parts-list" id="assembly-pool">
          ${parts.map(part => `
            <div class="assembly-part-item" 
                 id="pcpart-${part.id}" 
                 data-part="${part.id}" 
                 draggable="true">
              <span class="assembly-part-icon">${part.icon}</span>
              <div class="assembly-part-info">
                <span class="assembly-part-name">${part.name}</span>
                <span class="assembly-part-desc">${part.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Case Graphic -->
      <div class="assembly-case-box">
        <div class="pc-case-graphic" id="pcCaseGraphic">
          
          <!-- Motherboard Area -->
          <div class="pc-case-area pc-case-area-mainboard">
            <div class="pc-drop-zone" id="pcs-mainboard" data-slot="mainboard">
              <span class="pc-drop-zone-icon" style="font-size: 32px">🔲</span>
              <span class="pc-drop-zone-label">1. Mainboard-Platz</span>
            </div>
            
            <!-- Motherboard slots, hidden/opacity until mainboard is snapped -->
            <div class="mb-slots-grid" id="mbSlotsGrid">
              <div class="mb-slot-cpu">
                <div class="pc-drop-zone" id="pcs-cpu" data-slot="cpu">
                  <span>🔲 Sockel</span>
                  <span class="pc-drop-zone-label">CPU</span>
                </div>
              </div>
              <div class="mb-slot-ram">
                <div class="pc-drop-zone" id="pcs-ram" data-slot="ram">
                  <span>🔲 DIMM</span>
                  <span class="pc-drop-zone-label">RAM</span>
                </div>
              </div>
              <div class="mb-slot-gpu">
                <div class="pc-drop-zone" id="pcs-gpu" data-slot="gpu">
                  <span>🔲 PCIe Slot</span>
                  <span class="pc-drop-zone-label">Grafikkarte</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- SSD Bay -->
          <div class="pc-case-area pc-case-area-ssd">
            <div class="pc-drop-zone" id="pcs-ssd" data-slot="ssd">
              <span class="pc-drop-zone-icon" style="font-size: 24px">🗄️</span>
              <span class="pc-drop-zone-label">SSD-Schacht</span>
            </div>
          </div>
          
          <!-- PSU Bay -->
          <div class="pc-case-area pc-case-area-psu">
            <div class="pc-drop-zone" id="pcs-psu" data-slot="psu">
              <span class="pc-drop-zone-icon" style="font-size: 24px">🔋</span>
              <span class="pc-drop-zone-label">Netzteil-Fach</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
  
  // Save snapped parts state on the container dataset
  container.dataset.snapped = JSON.stringify({
    mainboard: false,
    cpu: false,
    ram: false,
    gpu: false,
    psu: false,
    ssd: false
  });
  
  initPcDragDrop(container);
  
  // Check button is disabled initially
  document.getElementById('btnCheck').disabled = true;
}

function initPcDragDrop(container) {
  const items = container.querySelectorAll('.assembly-part-item');
  const zones = container.querySelectorAll('.pc-drop-zone');

  // Desktop events
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.part);
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
      zone.classList.remove('wrong-dependency');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      zone.classList.remove('wrong-dependency');
      const partId = e.dataTransfer.getData('text/plain');
      dropPcPart(partId, zone, container);
    });
  });

  // Touch iPad events
  items.forEach(item => {
    item.addEventListener('touchstart', onPcTouchStart, { passive: false });
  });
}

function onPcTouchStart(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const touch = e.touches[0];
  const rect = item.getBoundingClientRect();

  pcDragState.dragging = item;
  pcDragState.offsetX = touch.clientX - rect.left;
  pcDragState.offsetY = touch.clientY - rect.top;
  pcDragState.sourceContainer = item.parentElement;

  const ghost = item.cloneNode(true);
  ghost.classList.add('ghost');
  ghost.style.width = rect.width + 'px';
  ghost.style.left = (touch.clientX - pcDragState.offsetX) + 'px';
  ghost.style.top  = (touch.clientY - pcDragState.offsetY) + 'px';
  document.body.appendChild(ghost);
  pcDragState.ghost = ghost;

  item.style.opacity = '0.4';

  document.addEventListener('touchmove', onPcTouchMove, { passive: false });
  document.addEventListener('touchend', onPcTouchEnd);
}

function onPcTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  if (pcDragState.ghost) {
    pcDragState.ghost.style.left = (touch.clientX - pcDragState.offsetX) + 'px';
    pcDragState.ghost.style.top  = (touch.clientY - pcDragState.offsetY) + 'px';
  }

  document.querySelectorAll('.pc-drop-zone').forEach(z => {
    z.classList.remove('drag-over');
    z.classList.remove('wrong-dependency');
  });
  
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.pc-drop-zone');
  if (zone) zone.classList.add('drag-over');
}

function onPcTouchEnd(e) {
  document.removeEventListener('touchmove', onPcTouchMove);
  document.removeEventListener('touchend', onPcTouchEnd);

  document.querySelectorAll('.pc-drop-zone').forEach(z => {
    z.classList.remove('drag-over');
    z.classList.remove('wrong-dependency');
  });

  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.pc-drop-zone');

  if (pcDragState.ghost) {
    pcDragState.ghost.remove();
    pcDragState.ghost = null;
  }

  const item = pcDragState.dragging;
  if (!item) return;
  item.style.opacity = '';

  if (zone) {
    const container = document.getElementById('activityContent');
    dropPcPart(item.dataset.part, zone, container);
  }

  pcDragState.dragging = null;
}

function dropPcPart(partId, zone, container) {
  const slotId = zone.dataset.slot;
  const snapped = JSON.parse(container.dataset.snapped);

  // 1. Check correct slot
  if (slotId !== partId) {
    showFeedback(false, `❌ Das Bauteil gehört nicht in diesen Schacht!`);
    return;
  }

  // 2. Check mainboard dependency
  if (["cpu", "ram", "gpu"].includes(partId) && !snapped.mainboard) {
    zone.classList.add('wrong-dependency');
    showFeedback(false, `❌ Baue zuerst das Mainboard ein! Auf dem Gehäuseboden können CPU, RAM und Grafikkarte nicht befestigt werden.`);
    setTimeout(() => zone.classList.remove('wrong-dependency'), 2500);
    return;
  }

  // Snap the item
  snapped[partId] = true;
  container.dataset.snapped = JSON.stringify(snapped);

  // Update UI for the slot
  zone.classList.add('filled');
  const partEl = document.getElementById(`pcpart-${partId}`);
  const icon = partEl.querySelector('.assembly-part-icon').textContent;
  const name = partEl.querySelector('.assembly-part-name').textContent;

  zone.innerHTML = `
    <div class="snapped-part">
      <span class="snapped-part-icon">${icon}</span>
      <span class="snapped-part-name">${name}</span>
    </div>
  `;

  // Hide the item from pool
  partEl.style.display = 'none';

  // If motherboard was installed, trigger mainboard layout activation
  if (partId === 'mainboard') {
    document.getElementById('pcCaseGraphic').classList.add('mb-installed');
    showFeedback(true, `✅ Mainboard verschraubt! Jetzt kannst du CPU, RAM und Grafikkarte auf das Mainboard stecken.`);
  } else {
    showFeedback(true, `✅ ${name} erfolgreich eingebaut!`);
  }

  // Check if everything is assembled
  const allAssembled = Object.values(snapped).every(v => v === true);
  if (allAssembled) {
    document.getElementById('btnCheck').disabled = false;
    showFeedback(true, `🎉 Perfekt! Der Computer ist vollständig zusammengebaut. Klicke auf 'Antwort prüfen'!`);
  }
}

function checkPcAssembly(content) {
  const snapped = JSON.parse(content.dataset.snapped);
  const allAssembled = Object.values(snapped).every(v => v === true);
  
  if (allAssembled) {
    showFeedback(true, `✅ Super gemacht! Der PC ist betriebsbereit und wartet auf das Einschalten.`);
    return true;
  } else {
    showFeedback(false, `❌ Der Computer ist noch nicht komplett fertig zusammengebaut!`);
    return false;
  }
}


// ── 2. PC Boot & USB Simulator Engine ───────────────────────
let bootState = {
  powerOn: false,
  usbInserted: false,
  bootCompleted: false,
  textBuffer: [],
  printing: false,
};

function renderPcBoot(activity, container) {
  bootState = {
    powerOn: false,
    usbInserted: false,
    bootCompleted: false,
    textBuffer: [],
    printing: false,
  };

  const html = `
    <div class="boot-sim-container">
      <!-- CRT Monitor -->
      <div class="monitor-bezel">
        <div class="monitor-screen" id="monitorScreen">
          <pre class="boot-terminal-text" id="terminalOutput">Bereit zum Einschalten. Klicke auf den Power-Button unten!<br><span class="boot-terminal-cursor"></span></pre>
        </div>
      </div>

      <!-- PC Panel controls -->
      <div class="pc-front-panel">
        <div class="panel-controls">
          <div class="power-btn-wrap">
            <button class="power-btn" id="pcPowerBtn" onclick="togglePcPower()">⏻</button>
            <span class="power-btn-label">Power</span>
          </div>
        </div>
        
        <div class="panel-controls">
          <div class="usb-port-wrap">
            <div class="usb-port-graphic pc-drop-zone" id="pcUsbPort" data-slot="usb">
              <!-- USB drops here -->
            </div>
            <span class="usb-port-label">USB 3.0</span>
          </div>
        </div>
      </div>

      <!-- Desk with USB Stick -->
      <div class="desk-area">
        <div class="usb-stick-item" id="usbStick" draggable="true" data-part="usb">
          💾 Windows 11 USB
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
  
  // Set up drag drop for USB
  const usb = container.querySelector('#usbStick');
  const port = container.querySelector('#pcUsbPort');

  // Mouse Drag
  usb.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', 'usb');
    usb.classList.add('dragging');
  });
  usb.addEventListener('dragend', () => {
    usb.classList.remove('dragging');
  });

  port.addEventListener('dragover', e => {
    e.preventDefault();
    port.classList.add('drag-over');
  });
  port.addEventListener('dragleave', () => {
    port.classList.remove('drag-over');
  });
  port.addEventListener('drop', e => {
    e.preventDefault();
    port.classList.remove('drag-over');
    const item = e.dataTransfer.getData('text/plain');
    if (item === 'usb') {
      insertUsbStick();
    }
  });

  // Touch Drag
  usb.addEventListener('touchstart', onUsbTouchStart, { passive: false });
  
  document.getElementById('btnCheck').disabled = true;
}

function onUsbTouchStart(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const touch = e.touches[0];
  const rect = item.getBoundingClientRect();

  pcDragState.dragging = item;
  pcDragState.offsetX = touch.clientX - rect.left;
  pcDragState.offsetY = touch.clientY - rect.top;

  const ghost = item.cloneNode(true);
  ghost.classList.add('ghost');
  ghost.style.width = rect.width + 'px';
  ghost.style.left = (touch.clientX - pcDragState.offsetX) + 'px';
  ghost.style.top  = (touch.clientY - pcDragState.offsetY) + 'px';
  document.body.appendChild(ghost);
  pcDragState.ghost = ghost;

  item.style.opacity = '0.4';

  document.addEventListener('touchmove', onUsbTouchMove, { passive: false });
  document.addEventListener('touchend', onUsbTouchEnd);
}

function onUsbTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  if (pcDragState.ghost) {
    pcDragState.ghost.style.left = (touch.clientX - pcDragState.offsetX) + 'px';
    pcDragState.ghost.style.top  = (touch.clientY - pcDragState.offsetY) + 'px';
  }

  const port = document.getElementById('pcUsbPort');
  port.classList.remove('drag-over');
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.pc-drop-zone');
  if (zone && zone.id === 'pcUsbPort') zone.classList.add('drag-over');
}

function onUsbTouchEnd(e) {
  document.removeEventListener('touchmove', onUsbTouchMove);
  document.removeEventListener('touchend', onUsbTouchEnd);

  const port = document.getElementById('pcUsbPort');
  port.classList.remove('drag-over');

  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const zone = el?.closest('.pc-drop-zone');

  if (pcDragState.ghost) {
    pcDragState.ghost.remove();
    pcDragState.ghost = null;
  }

  const item = pcDragState.dragging;
  if (!item) return;
  item.style.opacity = '';

  if (zone && zone.id === 'pcUsbPort') {
    insertUsbStick();
  }

  pcDragState.dragging = null;
}

function insertUsbStick() {
  bootState.usbInserted = true;
  const usb = document.getElementById('usbStick');
  const port = document.getElementById('pcUsbPort');
  
  if (usb) usb.classList.add('inserted');
  if (port) {
    port.classList.add('usb-inserted');
    port.innerHTML = `<span style="font-size: 10px; color: #60A5FA; font-weight: 800">PLUGGED</span>`;
  }

  showFeedback(true, `🔌 USB-Stick wurde angeschlossen!`);

  if (bootState.powerOn) {
    appendTerminalText(`\n[!] USB-Medium erkannt: "Windows 11 Installer"\nKlicke auf den Power-Button (Aus & An), um den PC neu zu starten!`);
  }
}

function togglePcPower() {
  const btn = document.getElementById('pcPowerBtn');
  const screen = document.getElementById('monitorScreen');
  
  if (bootState.powerOn) {
    // Power OFF
    bootState.powerOn = false;
    btn.classList.remove('on');
    screen.style.color = '#374151';
    document.getElementById('terminalOutput').innerHTML = 'PC ausgeschaltet. Klicke auf den Power-Button, um ihn einzuschalten.<br><span class="boot-terminal-cursor"></span>';
    document.getElementById('btnCheck').disabled = true;
  } else {
    // Power ON
    bootState.powerOn = true;
    btn.classList.add('on');
    screen.style.color = '#10B981';
    startBootSequence();
  }
}

function startBootSequence() {
  const term = document.getElementById('terminalOutput');
  term.innerHTML = '';
  
  bootState.textBuffer = [
    "MINT-BIOS v2.026 - (C) 2026 MINT-Games",
    "--------------------------------------",
    "Prüfe Hardwarekomponenten...",
    "Prozessor: Intel Core i5 @ 3.50GHz ..... OK",
    "Arbeitsspeicher: 16 GB DDR4 ............ OK",
    "Grafikkarte: NVIDIA GeForce RTX 3060 ... OK",
    "SSD-Speicher: M.2 NVMe 500GB ........... OK",
    "--------------------------------------",
    "Suche nach bootfähigem Betriebssystem..."
  ];

  printNextLine(() => {
    if (bootState.usbInserted) {
      // Boot from USB
      bootState.textBuffer = [
        "-> Boot-Medium gefunden auf Port USB 3.0",
        "Starte Bootloader von USB-Stick...",
        "Lade Windows 11 Setup-Dateien................",
        "\n[ USB-BOOT ERFOLGREICH ]",
        "Das Installationsmedium wurde geladen.",
        "Klicke unten auf 'Antwort prüfen'!"
      ];
      printNextLine(() => {
        bootState.bootCompleted = true;
        document.getElementById('btnCheck').disabled = false;
      });
    } else {
      // No boot device
      bootState.textBuffer = [
        "\n🚨 FEHLER: Kein Betriebssystem gefunden!",
        "Suche fehlgeschlagen (Boot Device Not Found).",
        "\nTipp: Schließe das USB-Installationsmedium an und",
        "schalte den PC aus und wieder an (Neustart)!"
      ];
      printNextLine();
    }
  });
}

function printNextLine(callback) {
  if (bootState.textBuffer.length === 0) {
    if (callback) callback();
    return;
  }
  
  const term = document.getElementById('terminalOutput');
  const line = bootState.textBuffer.shift();
  
  // Append line
  term.innerHTML = term.innerHTML.replace('<span class="boot-terminal-cursor"></span>', '') + line + '\n<span class="boot-terminal-cursor"></span>';
  term.parentElement.scrollTop = term.parentElement.scrollHeight;

  // Print next after brief delay
  setTimeout(() => printNextLine(callback), 300 + Math.random() * 200);
}

function appendTerminalText(text) {
  const term = document.getElementById('terminalOutput');
  term.innerHTML = term.innerHTML.replace('<span class="boot-terminal-cursor"></span>', '') + text + '\n<span class="boot-terminal-cursor"></span>';
  term.parentElement.scrollTop = term.parentElement.scrollHeight;
}

function checkPcBoot(content) {
  if (bootState.powerOn && bootState.usbInserted && bootState.bootCompleted) {
    showFeedback(true, `✅ Perfekt! Du hast den PC erfolgreich gestartet und den Windows 11 Installer vom USB-Stick gebootet!`);
    return true;
  } else {
    if (!bootState.powerOn) {
      showFeedback(false, `💡 Schalte den PC über den Power-Button ein!`);
    } else if (!bootState.usbInserted) {
      showFeedback(false, `💡 Der PC findet kein Betriebssystem auf der leeren Festplatte. Stecke den Windows-USB-Stick an den USB-Port!`);
    } else {
      showFeedback(false, `💡 Nach dem Einstecken des USB-Sticks musst du den PC durch Aus- und Einschalten neu starten, damit das BIOS ihn erkennt.`);
    }
    return false;
  }
}


// ── 3. Windows Setup Installer Simulator Engine ─────────────
let installState = {
  step: 1, // Current screen
  username: "",
  licenseChecked: false,
  customSelected: false,
  driveFormatted: false,
  progress: 0,
  installDone: false
};

function renderPcInstall(activity, container) {
  installState = {
    step: 1,
    username: "",
    licenseChecked: false,
    customSelected: false,
    driveFormatted: false,
    progress: 0,
    installDone: false
  };

  renderInstallStep(container);
  document.getElementById('btnCheck').disabled = true;
}

function renderInstallStep(container) {
  let contentHtml = "";

  switch (installState.step) {
    case 1: // Language
      contentHtml = `
        <div class="win-logo-brand">
          <div class="win-logo-icon"><div></div><div></div><div></div><div></div></div>
          <h1 class="win-setup-headline">Windows-Setup</h1>
        </div>
        <p class="win-setup-text">Wähle deine Ländereinstellungen aus:</p>
        
        <div class="win-setup-field">
          <label class="win-setup-label">Installationssprache:</label>
          <select class="win-setup-select"><option>Deutsch (Deutschland)</option><option selected>Deutsch (Österreich)</option></select>
        </div>
        <div class="win-setup-field">
          <label class="win-setup-label">Zeit- und Währungsformat:</label>
          <select class="win-setup-select"><option selected>Deutsch (Österreich)</option></select>
        </div>
        <div class="win-setup-field">
          <label class="win-setup-label">Tastatur oder Eingabemethode:</label>
          <select class="win-setup-select"><option selected>Deutsch (Österreich)</option></select>
        </div>
        
        <div class="win-setup-footer" style="margin-top:auto; padding: 12px 0 0 0; background:none; border:none">
          <button class="win-btn primary" onclick="nextInstallStep()">Weiter</button>
        </div>
      `;
      break;

    case 2: // Install Now Button
      contentHtml = `
        <div class="win-logo-brand" style="justify-content: center; flex-direction: column; margin-top: 30px">
          <div class="win-logo-icon" style="width: 48px; height: 48px; gap: 4px; margin-bottom: 12px"><div></div><div></div><div></div><div></div></div>
          <h1 class="win-setup-headline" style="font-size: 24px">Windows 11</h1>
        </div>
        <button class="win-btn-install-center" onclick="nextInstallStep()">Jetzt installieren</button>
        <p class="win-setup-text" style="text-align: center; color: #888; font-size: 11px">Setup wird gestartet...</p>
      `;
      break;

    case 3: // License Terms
      contentHtml = `
        <h1 class="win-setup-headline" style="font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 8px">Lizenzbedingungen</h1>
        <div style="flex: 1; background: white; border: 1px solid #CCC; padding: 10px; font-size: 11px; overflow-y: scroll; height: 120px; line-height: 1.4">
          <strong>MICROSOFT-SOFTWARE-LIZENZBEDINGUNGEN</strong><br><br>
          Gilt für: Windows 11 Education Edition.<br><br>
          Diese Lizenzbedingungen sind eine Vereinbarung zwischen Ihnen und der Microsoft Corporation. Bitte lesen Sie sie durch. Sie gelten für die Software, die oben genannt ist. Die Bedingungen gelten auch für alle Microsoft-Dienste oder -Updates für die Software, es sei denn, diesen liegen andere Bedingungen bei.
        </div>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer; margin-top: 6px">
          <input type="checkbox" id="licenseChk" ${installState.licenseChecked ? 'checked' : ''} onchange="toggleLicense(this)" />
          Ich akzeptiere die Microsoft-Software-Lizenzbedingungen.
        </label>
        <div class="win-setup-footer" style="margin-top:auto; padding: 12px 0 0 0; background:none; border:none">
          <button class="win-btn" onclick="prevInstallStep()">Zurück</button>
          <button class="win-btn primary" id="licenseNext" ${installState.licenseChecked ? '' : 'disabled'} onclick="nextInstallStep()">Weiter</button>
        </div>
      `;
      break;

    case 4: // Install Type
      contentHtml = `
        <h1 class="win-setup-headline" style="font-size: 15px; margin-bottom: 8px">Welche Installationsart möchtest du auswählen?</h1>
        
        <div class="win-option-card" onclick="selectInstallType(false)">
          <span style="font-size: 20px">🔄</span>
          <div>
            <div class="win-opt-title">Upgrade: Windows installieren und Dateien behalten</div>
            <div class="win-opt-desc">Dateien, Einstellungen und Anwendungen werden zu Windows verschoben. Diese Option ist nur verfügbar, wenn bereits eine Windows-Version läuft.</div>
          </div>
        </div>

        <div class="win-option-card ${installState.customSelected ? 'selected' : ''}" onclick="selectInstallType(true)">
          <span style="font-size: 20px">⚙️</span>
          <div>
            <div class="win-opt-title">Benutzerdefiniert: nur Windows installieren (für fortgeschrittene Benutzer)</div>
            <div class="win-opt-desc">Dies ist eine saubere Neuinstallation (Clean Install). Alle alten Daten auf der Festplatte werden gelöscht. Ideal für eine nagelneue SSD! (Empfohlen)</div>
          </div>
        </div>
        
        <div class="win-setup-footer" style="margin-top:auto; padding: 12px 0 0 0; background:none; border:none">
          <button class="win-btn" onclick="prevInstallStep()">Zurück</button>
          <button class="win-btn primary" id="installTypeNext" ${installState.customSelected ? '' : 'disabled'} onclick="nextInstallStep()">Weiter</button>
        </div>
      `;
      break;

    case 5: // Drive Partitioning
      contentHtml = `
        <h1 class="win-setup-headline" style="font-size: 15px; margin-bottom: 4px">Wo möchtest du Windows installieren?</h1>
        <p class="win-setup-text" style="font-size: 11px; margin-bottom: 8px">Der PC hat eine leere SSD. Du musst sie partitionieren, um Windows zu installieren!</p>
        
        <table class="win-drive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gesamtgröße</th>
              <th>Freier Speicher</th>
              <th>Typ</th>
            </tr>
          </thead>
          <tbody id="driveTableBody">
            ${installState.driveFormatted ? `
              <tr>
                <td>Laufwerk 0 Partition 1: System</td>
                <td>100.0 MB</td>
                <td>95.0 MB</td>
                <td>System (MINT)</td>
              </tr>
              <tr>
                <td>Laufwerk 0 Partition 2: MSR</td>
                <td>16.0 MB</td>
                <td>16.0 MB</td>
                <td>MSR (Reserviert)</td>
              </tr>
              <tr class="selected">
                <td>Laufwerk 0 Partition 3: Primär</td>
                <td>499.9 GB</td>
                <td>499.9 GB</td>
                <td>Primär</td>
              </tr>
            ` : `
              <tr class="selected">
                <td>Laufwerk 0 Nicht zugewiesener Speicher</td>
                <td>500.0 GB</td>
                <td>500.0 GB</td>
                <td>—</td>
              </tr>
            `}
          </tbody>
        </table>

        <div class="win-drive-tools">
          <button class="win-drive-tool-btn" onclick="formatDrive()">⭐ [Neu] Partition erstellen</button>
          <span style="color:#CCC">|</span>
          <button class="win-drive-tool-btn" style="color:#888;cursor:not-allowed">🗑️ Löschen</button>
          <span style="color:#CCC">|</span>
          <button class="win-drive-tool-btn" style="color:#888;cursor:not-allowed">🔄 Formatieren</button>
        </div>

        <div class="win-setup-footer" style="margin-top:auto; padding: 12px 0 0 0; background:none; border:none">
          <button class="win-btn" onclick="prevInstallStep()">Zurück</button>
          <button class="win-btn primary" id="driveNext" ${installState.driveFormatted ? '' : 'disabled'} onclick="nextInstallStep()">Weiter</button>
        </div>
      `;
      break;

    case 6: // Installation Progress
      contentHtml = `
        <h1 class="win-setup-headline" style="font-size: 15px; margin-bottom: 12px">Windows wird installiert</h1>
        <p class="win-setup-text">Der PC startet während dieses Vorgangs mehrmals neu. Bitte schalte ihn nicht aus.</p>
        
        <div class="win-progress-list">
          <div class="win-progress-item ${installState.progress >= 20 ? 'done' : 'active'}">
            <span class="win-progress-status-icon">${installState.progress >= 20 ? '💚' : '⏳'}</span>
            <span>Windows-Dateien werden kopiert...</span>
          </div>
          <div class="win-progress-item ${installState.progress >= 70 ? 'done' : (installState.progress >= 20 ? 'active' : '')}">
            <span class="win-progress-status-icon">${installState.progress >= 70 ? '💚' : (installState.progress >= 20 ? '⏳' : '⚪')}</span>
            <span>Dateien werden für die Installation vorbereitet...</span>
          </div>
          <div class="win-progress-item ${installState.progress >= 90 ? 'done' : (installState.progress >= 70 ? 'active' : '')}">
            <span class="win-progress-status-icon">${installState.progress >= 90 ? '💚' : (installState.progress >= 70 ? '⏳' : '⚪')}</span>
            <span>Features werden installiert...</span>
          </div>
          <div class="win-progress-item ${installState.progress >= 100 ? 'done' : (installState.progress >= 90 ? 'active' : '')}">
            <span class="win-progress-status-icon">${installState.progress >= 100 ? '💚' : (installState.progress >= 90 ? '⏳' : '⚪')}</span>
            <span>Updates werden installiert...</span>
          </div>
        </div>

        <div class="win-progress-bar-wrap">
          <div class="win-progress-bar-fill" id="winProgressBar" style="width: ${installState.progress}%"></div>
        </div>
      `;
      // Trigger progress animation
      startInstallProgress(container);
      break;

    case 7: // User Account Name
      contentHtml = `
        <div class="win-logo-brand">
          <div class="win-logo-icon"><div></div><div></div><div></div><div></div></div>
          <h1 class="win-setup-headline">Wer wird diesen PC nutzen?</h1>
        </div>
        <p class="win-setup-text">Erstelle ein lokales Benutzerkonto für diesen Computer.</p>
        
        <div class="win-setup-field" style="margin-top: 10px">
          <label class="win-setup-label">Benutzername:</label>
          <input type="text" class="win-setup-input" id="winUsernameInput" placeholder="Z.B. Schüler1" value="${installState.username}" oninput="updateUsername(this.value)" />
        </div>
        
        <div class="win-setup-footer" style="margin-top:auto; padding: 12px 0 0 0; background:none; border:none">
          <button class="win-btn primary" id="userNext" ${installState.username.trim().length > 1 ? '' : 'disabled'} onclick="nextInstallStep()">Einrichten</button>
        </div>
      `;
      break;

    case 8: // Desktop view (Success)
      contentHtml = `
        <div class="win-desktop-screen">
          <div class="desktop-icons">
            <div class="desktop-icon-item">
              <span class="desktop-icon-img">🗑️</span>
              <span>Papierkorb</span>
            </div>
            <div class="desktop-icon-item">
              <span class="desktop-icon-img">🌐</span>
              <span>MINT-Games</span>
            </div>
          </div>
          
          <div style="background: rgba(0,0,0,0.6); padding: 12px; color: white; border-radius: 8px; font-size: 13px; max-width: 320px; text-align: center; margin: auto auto; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(8px)">
            <span style="font-size: 24px">🎉</span>
            <h3 style="margin: 6px 0">Windows installiert!</h3>
            <p style="margin: 0; font-size: 11px">Willkommen auf deinem Desktop, <strong>${installState.username}</strong>! Klicke nun unten auf <strong>'Antwort prüfen'</strong>, um die Lektion abzuschließen!</p>
          </div>
          
          <!-- Taskbar -->
          <div class="desktop-taskbar">
            <div class="taskbar-center">
              <div class="tb-icon tb-icon-start">
                <span class="tb-icon-win">💠</span>
              </div>
              <div class="tb-icon">📂</div>
              <div class="tb-icon">🌐</div>
              <div class="tb-icon">🎮</div>
            </div>
            
            <div class="taskbar-right">
              <div class="tb-tray-icons">📶 🔊 🔋</div>
              <div class="tb-time-box">
                <span id="desktopTime">09:00</span>
                <span style="font-size: 8px">21.05.2026</span>
              </div>
            </div>
          </div>
        </div>
      `;
      // Start desktop clock
      setTimeout(updateDesktopClock, 100);
      
      // Active the final check button!
      installState.installDone = true;
      document.getElementById('btnCheck').disabled = false;
      break;
  }

  const html = `
    <div class="win-setup-wrap">
      <div class="win-setup-window" id="winSetupWindow" style="height: ${installState.step === 8 ? '100%' : 'auto'}; min-height: ${installState.step === 8 ? '100%' : '430px'};">
        ${installState.step < 8 ? `
          <div class="win-setup-header">
            <span class="win-setup-title">Windows-Setup</span>
            <span class="win-setup-close">✕</span>
          </div>
        ` : ''}
        <div class="win-setup-body" style="padding: ${installState.step === 8 ? '0' : '24px'}">
          ${contentHtml}
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function nextInstallStep() {
  const container = document.getElementById('activityContent');
  installState.step++;
  renderInstallStep(container);
}

function prevInstallStep() {
  const container = document.getElementById('activityContent');
  installState.step--;
  renderInstallStep(container);
}

function toggleLicense(chk) {
  installState.licenseChecked = chk.checked;
  const btn = document.getElementById('licenseNext');
  if (btn) btn.disabled = !chk.checked;
}

function selectInstallType(custom) {
  installState.customSelected = custom;
  
  if (!custom) {
    showFeedback(false, `❌ Upgrade ist fehlgeschlagen! Auf einer leeren Festplatte gibt es kein Betriebssystem, das aktualisiert werden kann. Wähle die benutzerdefinierte Neuinstallation.`);
    return;
  }
  
  showFeedback(true, `✅ Benutzerdefiniert ausgewählt! Bereit für die manuelle Partitionierung.`);
  const container = document.getElementById('activityContent');
  renderInstallStep(container);
}

function formatDrive() {
  installState.driveFormatted = true;
  showFeedback(true, `✅ SSD erfolgreich formatiert und neue Partitionen erstellt (System- und Primär-Partition)!`);
  const container = document.getElementById('activityContent');
  renderInstallStep(container);
}

function startInstallProgress(container) {
  installState.progress = 0;
  
  const timer = setInterval(() => {
    // Check if we are still on step 6. If not (e.g. user refreshed/changed), clear timer.
    if (installState.step !== 6) {
      clearInterval(timer);
      return;
    }

    installState.progress += 2;
    const bar = document.getElementById('winProgressBar');
    if (bar) bar.style.width = installState.progress + '%';
    
    // Update active states in the DOM directly rather than re-rendering the whole step!
    const progressItems = container.querySelectorAll('.win-progress-item');
    if (progressItems.length === 4) {
      // Item 0: Kopieren (done if progress >= 20)
      updateProgressItemUI(progressItems[0], installState.progress >= 20, installState.progress < 20);
      // Item 1: Vorbereiten (done if progress >= 70, active if progress >= 20)
      updateProgressItemUI(progressItems[1], installState.progress >= 70, installState.progress >= 20 && installState.progress < 70);
      // Item 2: Features (done if progress >= 90, active if progress >= 70)
      updateProgressItemUI(progressItems[2], installState.progress >= 90, installState.progress >= 70 && installState.progress < 90);
      // Item 3: Updates (done if progress >= 100, active if progress >= 90)
      updateProgressItemUI(progressItems[3], installState.progress >= 100, installState.progress >= 90 && installState.progress < 100);
    }
    
    if (installState.progress >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        // Automatically proceed to username account step
        installState.step = 7;
        renderInstallStep(container);
      }, 800);
    }
  }, 100);
}

function updateProgressItemUI(itemEl, isDone, isActive) {
  const iconEl = itemEl.querySelector('.win-progress-status-icon');
  if (isDone) {
    itemEl.classList.remove('active');
    itemEl.classList.add('done');
    if (iconEl) iconEl.textContent = '💚';
  } else if (isActive) {
    itemEl.classList.remove('done');
    itemEl.classList.add('active');
    if (iconEl) iconEl.textContent = '⏳';
  } else {
    itemEl.classList.remove('done', 'active');
    if (iconEl) iconEl.textContent = '⚪';
  }
}

function updateUsername(val) {
  installState.username = val;
  const btn = document.getElementById('userNext');
  if (btn) btn.disabled = val.trim().length <= 1;
}

function updateDesktopClock() {
  const el = document.getElementById('desktopTime');
  if (!el) return;
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mns = String(now.getMinutes()).padStart(2, '0');
  el.textContent = `${hrs}:${mns}`;
}

function checkPcInstall(content) {
  if (installState.step === 8 && installState.installDone && installState.username.trim().length > 1) {
    showFeedback(true, `✅ Hervorragend! Du hast Windows 11 vollständig installiert, das Laufwerk partitioniert und einen lokalen Benutzer angelegt.`);
    return true;
  } else {
    showFeedback(false, `💡 Schließe die Installation auf dem Windows-Bildschirm vollständig ab, um auf den Desktop zu gelangen.`);
    return false;
  }
}
