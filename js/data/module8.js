// ============================================================
// MINT-Games – Modul 8: Virtualisierung mit Proxmox
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Betriebssysteme, Netzwerke & Virtualisierung
// ============================================================

const MODULE_8 = {
  id: 8,
  title: "Virtualisierung mit Proxmox",
  icon: "☁️",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Betriebssysteme & Netzwerke",
  activities: [

    // ── Aktivität 1: Zuordnung – Grundlagen der Virtualisierung ──────────
    {
      id: "m8-a1",
      type: "matching",
      badge: "🔗 Virtualisierung",
      knowledge: {
        title: "Was ist Virtualisierung? ☁️",
        blocks: [
          {
            type: "text",
            content: "Normalerweise läuft auf einem physischen Computer (Hardware) genau ein Betriebssystem (z.B. Windows auf deinem Laptop). Bei Servern im Rechenzentrum wäre das aber reine Verschwendung! Server sind oft so stark, dass sie sich langweilen würden. Die Lösung: **Virtualisierung**! 🖥️"
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Der Hypervisor als Manager",
            content: "Ein **Hypervisor** ist eine Software, die die echte Hardware aufteilt. Er tut so, als gäbe es viele kleine Computer. Diese simulierten Computer heißen **Virtuelle Maschinen (VMs)**. Sie teilen sich die echten Ressourcen wie CPU, RAM und Festplatten, wissen aber nichts voneinander."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Physischer Server (Host)", icon: "🖥️", def: "Die echte Hardware, die im Serverraum steht und Strom verbraucht." },
              { term: "Virtuelle Maschine (VM / Guest)", icon: "💻", def: "Der simulierte Computer, der auf dem Host läuft." },
              { term: "Hypervisor Typ-1 (Bare-Metal)", icon: "⚙️", def: "Wird direkt auf der Hardware installiert (wie Proxmox VE). Sehr schnell und stabil." },
              { term: "Hypervisor Typ-2 (Hosted)", icon: "💿", def: "Läuft als normales Programm innerhalb eines Betriebssystems (wie VirtualBox)." }
            ]
          }
        ]
      },
      question: "Ordne den Begriffen der Virtualisierung die passende Beschreibung zu!",
      instruction: "Wähle links den Begriff und rechts die richtige Erklärung.",
      leftItems: [
        { id: "v1", text: "Physischer Server (Host)" },
        { id: "v2", text: "Virtuelle Maschine (VM)" },
        { id: "v3", text: "Hypervisor Typ-1" },
        { id: "v4", text: "Hypervisor Typ-2" },
        { id: "v5", text: "Proxmox VE" }
      ],
      rightItems: [
        { id: "vr1", text: "Die echte, anfassbare Computer-Hardware", matches: "v1" },
        { id: "vr2", text: "Der simulierte, eigenständige 'Gast'-Computer", matches: "v2" },
        { id: "vr3", text: "Software direkt auf der Hardware (ohne normales OS darunter)", matches: "v3" },
        { id: "vr4", text: "Virtualisierungs-App, die auf einem normalen OS läuft", matches: "v4" },
        { id: "vr5", text: "Ein beliebtes, quelloffenes Typ-1 Hypervisor-System", matches: "v5" }
      ],
      explanation: "Ein physischer Server (Host) beherbergt virtuelle Maschinen (VMs) mittels einer Manager-Software, dem Hypervisor. Proxmox VE ist ein professioneller Typ-1 Hypervisor."
    },

    // ── Aktivität 2: Drag & Drop – VM vs. LXC ──────────────────────
    {
      id: "m8-a2",
      type: "dragdrop",
      badge: "🎯 VM vs. Container",
      knowledge: {
        title: "Zwei Welten: VMs (KVM) und Container (LXC) 📦",
        blocks: [
          {
            type: "text",
            content: "Proxmox VE bietet zwei verschiedene Möglichkeiten, um Anwendungen auszuführen. Beide haben ihre Stärken!"
          },
          {
            type: "comparison",
            left: {
              icon: "🖥️",
              title: "Virtuelle Maschine (VM / KVM)",
              color: "primary",
              points: [
                "Simuliert einen kompletten Computer inklusive BIOS",
                "Besitzt ein eigenes Betriebssystem mit eigenem Kernel",
                "Kann Windows, Linux, FreeBSD etc. ausführen",
                "Braucht mehr Arbeitsspeicher (RAM) und startet langsamer"
              ]
            },
            right: {
              icon: "📦",
              title: "Linux Container (LXC)",
              color: "secondary",
              points: [
                "Teilt sich das Betriebssystem (den Kernel) des Proxmox-Hosts",
                "Sehr leichtgewichtig und startet in Sekunden",
                "Benötigt extrem wenig RAM und Festplattenplatz",
                "Kann nur Linux-Distributionen ausführen (kein Windows!)"
              ]
            }
          }
        ]
      },
      question: "Teile die Eigenschaften der richtigen Virtualisierungsmethode in Proxmox zu!",
      instruction: "Ziehe die Eigenschaften in die richtige Kategorie.",
      targets: [
        { id: "t-kvm", label: "🖥️ Virtuelle Maschine (KVM)", accepts: ["kvm_kernel", "kvm_win", "kvm_slow", "kvm_full"] },
        { id: "t-lxc", label: "📦 Linux Container (LXC)", accepts: ["lxc_shared", "lxc_linux", "lxc_fast", "lxc_light"] }
      ],
      items: [
        { id: "kvm_kernel", text: "Eigener Betriebssystem-Kernel" },
        { id: "kvm_win",    text: "Kann Windows 11 ausführen" },
        { id: "kvm_slow",   text: "Längere Bootzeit (wie echter PC)" },
        { id: "kvm_full",   text: "Vollständige Hardware-Simulation" },
        { id: "lxc_shared", text: "Nutzt Kernel des Proxmox-Hosts" },
        { id: "lxc_linux",  text: "Nur Linux-Systeme möglich" },
        { id: "lxc_fast",   text: "Startet in wenigen Sekunden" },
        { id: "lxc_light",  text: "Sehr geringer RAM-Verbrauch" }
      ],
      explanation: "Virtuelle Maschinen (VMs via KVM) emulieren komplette Hardware und eignen sich für beliebige Systeme (wie Windows). Linux Container (LXC) teilen sich den Host-Kernel, sind extrem ressourcensparend, funktionieren aber nur mit Linux."
    },

    // ── Aktivität 3: Lückentext – Proxmox-Oberfläche & Begriffe ───────
    {
      id: "m8-a3",
      type: "fillgaps",
      badge: "✏️ Proxmox-Begriffe",
      knowledge: {
        title: "Die wichtigsten Vokabeln im Proxmox-Webinterface ⚙️",
        blocks: [
          {
            type: "text",
            content: "Wenn du dich im Webbrowser bei Proxmox VE anmeldest, siehst du links eine Baumstruktur mit verschiedenen Symbolen und Begriffen. Hier sind die wichtigsten:"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Node (Knoten)", icon: "🖥️", def: "Ein physischer Server. Jedes Gerät, auf dem Proxmox installiert ist, ist ein Node." },
              { term: "Cluster", icon: "🌐", def: "Ein Zusammenschluss mehrerer Nodes. Sie können gemeinsam verwaltet werden." },
              { term: "VM ID", icon: "🆔", def: "Jede VM und jeder Container braucht eine eindeutige Nummer (z.B. 100, 101, 102)." },
              { term: "ISO-Image", icon: "💿", def: "Die virtuelle Installations-CD eines Betriebssystems." },
              { term: "Storage", icon: "💾", def: "Speicherbereiche für ISOs, virtuelle Festplatten und Backups." }
            ]
          }
        ]
      },
      question: "Vervollständige den Text über die Begriffe in Proxmox!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Jeder physische Server, auf dem Proxmox läuft, wird als " },
        { type: "gap", id: "g1", answer: "node", hint: "Englisch für Knoten" },
        { type: "text", text: " bezeichnet. Wenn man mehrere dieser Server zusammenschaltet, nennt man dies einen " },
        { type: "gap", id: "g2", answer: "cluster", hint: "Zusammenschluss von Servern" },
        { type: "text", text: ". Jedes neu erstellte Gast-System erhält zur Unterscheidung eine eindeutige dreistellige Nummer, die sogenannte " },
        { type: "gap", id: "g3", answer: "vm id", hint: "Identifikationsnummer (2 Wörter/Abkürzung)" },
        { type: "text", text: ". Um ein Betriebssystem auf einer VM zu installieren, lädt man zuerst ein " },
        { type: "gap", id: "g4", answer: "iso-image", hint: "Virtuelles CD-Abbild (mit Bindestrich)" },
        { type: "text", text: " auf den Proxmox-" },
        { type: "gap", id: "g5", answer: "storage", hint: "Speicherplatz auf Englisch" },
        { type: "text", text: " hoch." }
      ],
      explanation: "Nodes sind die physischen Server, die sich zu Clustern zusammenschließen. Systeme nutzen ISO-Images aus dem Storage und werden über ihre VM ID (z.B. 100) identifiziert."
    },

    // ── Aktivität 4: Sortierung – VM erstellen ──────────────────────
    {
      id: "m8-a4",
      type: "sorting",
      badge: "🔢 VM-Erstellung",
      knowledge: {
        title: "Schritt für Schritt zur eigenen VM 🛠️",
        blocks: [
          {
            type: "text",
            content: "Wie erweckt man eine neue virtuelle Maschine zum Leben? Hier ist der klassische Arbeitsablauf in Proxmox VE:"
          },
          {
            type: "steps",
            title: "Der Ablauf im Detail:",
            steps: [
              { icon: "💿 1. ISO hochladen", text: "Lade das Betriebssystem-Abbild (z.B. Ubuntu-Linux) in den Storage hoch." },
              { icon: "➕ 2. Create VM", text: "Klicke oben rechts auf den blauen Button 'Create VM' (VM erstellen)." },
              { icon: "🏷️ 3. Name & ID", text: "Gib der VM einen Namen und kontrolliere die VM-ID (z.B. 100)." },
              { icon: "💿 4. ISO zuweisen", text: "Wähle im Menü das hochgeladene ISO-Image als Boot-Medium aus." },
              { icon: "⚙️ 5. Ressourcen festlegen", text: "Bestimme die Festplattengröße, die Anzahl der vCPUs und den RAM (z.B. 2048 MB)." },
              { icon: "🚀 6. Starten & Konsole", text: "Klicke auf 'Start' und öffne die 'Console', um die Installation durchzuführen." }
            ]
          }
        ]
      },
      question: "Bringe die Schritte zur Erstellung einer Virtuellen Maschine in die richtige Reihenfolge!",
      instruction: "Sortiere die Schritte von oben (Schritt 1) nach unten (Schritt 6).",
      correctOrder: ["s_iso", "s_click", "s_name", "s_media", "s_res", "s_start"],
      items: [
        { id: "s_click", text: "Auf 'Create VM' klicken" },
        { id: "s_name",  text: "Name & VM-ID (z.B. 100) eintragen" },
        { id: "s_media", text: "Das hochgeladene ISO-Image als Boot-Medium auswählen" },
        { id: "s_start", text: "VM starten und Installation über die Konsole abschließen" },
        { id: "s_iso",   text: "ISO-Datei des Betriebssystems in den Storage hochladen" },
        { id: "s_res",   text: "Hardware-Ressourcen (vCPU, RAM, Festplatte) zuweisen" }
      ],
      explanation: "Zuerst muss die Installationsdatei (ISO) existieren, dann wird die VM konfiguriert (Name, ID, Boot-Medium, Ressourcen) und schließlich gestartet."
    },

    // ── Aktivität 5: Zuordnung – Datensicherung & Speicher ──────────
    {
      id: "m8-a5",
      type: "matching",
      badge: "🔗 Backup & Migration",
      knowledge: {
        title: "Sicherheit & Flexibilität: Snapshots, Backups & Migration 🛡️",
        blocks: [
          {
            type: "text",
            content: "Virtualisierung macht das Verwalten von Servern unglaublich flexibel. Dinge, die mit echter Hardware Stunden dauern, gehen hier per Knopfdruck!"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Snapshot (Schnappschuss)", icon: "📸", def: "Speichert den Zustand einer VM in diesem Moment. Perfekt vor Updates! Wenn etwas schiefgeht, springt man in Sekunden zurück." },
              { term: "Backup", icon: "💾", def: "Eine komplette Sicherheitskopie aller Daten der VM auf einem externen Speicher. Schützt bei Hardware-Defekt." },
              { term: "Live-Migration", icon: "🚀", def: "Verschiebt eine laufende VM ohne Ausschalten von einem physischen Node auf einen anderen. Benutzer merken nichts davon! (Dafür wird Shared Storage benötigt)." },
              { term: "Shared Storage (NFS/Ceph)", icon: "🔀", def: "Ein Netzwerkspeicher, auf den alle Nodes im Cluster gleichzeitig Zugriff haben." }
            ]
          }
        ]
      },
      question: "Verbinde die Begriffe rund um Datensicherheit und Netzwerkspeicher mit ihrer Funktion!",
      instruction: "Wähle links das Wort und rechts die passende Erklärung.",
      leftItems: [
        { id: "s1", text: "Snapshot" },
        { id: "s2", text: "Backup" },
        { id: "s3", text: "Live-Migration" },
        { id: "s4", text: "Shared Storage" }
      ],
      rightItems: [
        { id: "sr1", text: "Schnappschuss für schnelle Rollbacks (z.B. vor Updates)", matches: "s1" },
        { id: "sr2", text: "Externe Vollkopie zum Schutz vor Hardwareausfall", matches: "s2" },
        { id: "sr3", text: "Verschieben einer laufenden VM ohne Ausfallzeit", matches: "s3" },
        { id: "sr4", text: "Gemeinsamer Netzwerkspeicher für alle Nodes im Cluster", matches: "s4" }
      ],
      explanation: "Snapshots sind schnelle Wiederherstellungspunkte auf demselben Server. Backups sichern Daten extern. Live-Migration verschiebt laufende VMs über Shared Storage auf andere Nodes."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m8-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Proxmox-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Klasse! Du hast die Grundlagen der Virtualisierung und Proxmox VE verstanden. Hier ist der Spickzettel für dein Abschlussquiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🖥️", title: "Virtualisierung", text: "Hardware virtuell aufteilen für viele VMs" },
              { icon: "⚙️", title: "Hypervisor Typ-1", text: "Direkt auf Hardware (z.B. Proxmox VE)" },
              { icon: "💻", title: "VM (KVM)", text: "Simuliert kompletten PC (inkl. Windows)" },
              { icon: "📦", title: "LXC (Container)", text: "Leichtgewichtig, teilt Host-Kernel (nur Linux)" },
              { icon: "📸", title: "Snapshot", text: "Schnappschuss vor Risiko-Aktionen" },
              { icon: "🚀", title: "Live-Migration", text: "Verschiebt laufende VMs ohne Downtime" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Was macht ein Hypervisor?",
          options: [
            "Er reinigt den Bildschirm.",
            "Er verwaltet und teilt physische Hardware auf virtuelle Maschinen auf.",
            "Er erhöht die Internet-Geschwindigkeit.",
            "Er kühlt den Prozessor."
          ],
          correct: 1,
          explanation: "Ein Hypervisor ist das Bindeglied zwischen Hardware und Software. Er verwaltet die Ressourcen und stellt sie den VMs zur Verfügung."
        },
        {
          q: "Welche Eigenschaft trifft auf einen Typ-1 Hypervisor (wie Proxmox VE) zu?",
          options: [
            "Er läuft als normales Programm unter Windows.",
            "Er wird direkt auf der nackten Hardware (Bare-Metal) installiert.",
            "Er benötigt zwingend eine Grafikkarte.",
            "Er ist kostenpflichtige Microsoft-Software."
          ],
          correct: 1,
          explanation: "Typ-1 Hypervisoren laufen direkt auf der physischen Hardware, was sie extrem effizient, stabil und sicher macht."
        },
        {
          q: "Was ist ein großer Vorteil eines Linux Containers (LXC) gegenüber einer VM?",
          options: [
            "Er kann Windows-Programme ausführen.",
            "Er ist viel leichtgewichtiger, verbraucht weniger RAM und startet extrem schnell.",
            "Er benötigt keine Netzwerkverbindung.",
            "Er simuliert eine komplette Grafikkarte."
          ],
          correct: 1,
          explanation: "Weil LXC-Container keinen eigenen Kernel booten, sondern den des Hosts mitbenutzen, starten sie in Sekunden und verbrauchen kaum Ressourcen."
        },
        {
          q: "Welches Betriebssystem kann NICHT in einem Proxmox LXC-Container laufen?",
          options: ["Ubuntu Linux", "Debian Linux", "Windows Server", "Alpine Linux"],
          correct: 2,
          explanation: "LXC-Container teilen sich den Linux-Kernel des Hosts. Daher können darin nur Linux-Distributionen laufen, kein Windows."
        },
        {
          q: "Was ist ein 'Node' in Proxmox VE?",
          options: [
            "Ein virtueller Switch.",
            "Ein physischer Server, auf dem Proxmox installiert ist.",
            "Eine Festplatte im Netzwerk.",
            "Das Netzwerkkabel."
          ],
          correct: 1,
          explanation: "Als 'Node' (Knoten) bezeichnet man jeden physischen Computer/Server, der Teil des Proxmox-Systems ist."
        },
        {
          q: "Was versteht man unter einem Proxmox 'Cluster'?",
          options: [
            "Einen Festplattenfehler.",
            "Den Zusammenschluss mehrerer Nodes zur gemeinsamen Verwaltung.",
            "Ein spezielles Kabel für Server.",
            "Den Papierkorb für gelöschte VMs."
          ],
          correct: 1,
          explanation: "Ein Cluster ermöglicht es, mehrere physische Proxmox-Server über eine einzige Weboberfläche zentral zu steuern."
        },
        {
          q: "Wofür steht die Abkürzung 'VM ID'?",
          options: [
            "Virtual Machine Internet Data",
            "Virtuelle Maschinen-Identifikationsnummer (z.B. 100)",
            "Volume Manager Internal Drive",
            "Variable Monitor Industry"
          ],
          correct: 1,
          explanation: "Die VM ID ist die eindeutige Nummer, unter der Proxmox eine VM oder einen Container führt."
        },
        {
          q: "Was ist der Unterschied zwischen einem Backup und einem Snapshot?",
          options: [
            "Snapshots sind immer kostenpflichtig.",
            "Snapshots sind schnelle Zustandspunkte auf dem Host; ein Backup ist eine vollständige, externe Sicherheitskopie.",
            "Backups dauern immer nur eine Millisekunde.",
            "Ein Snapshot löscht die virtuelle Maschine."
          ],
          correct: 1,
          explanation: "Snapshots sind perfekt für schnelle Tests (z.B. vor Updates), da sie auf demselben System liegen. Backups sichern die VM komplett auf andere Speichermedien ab."
        },
        {
          q: "Welche Technologie wird benötigt, um eine Live-Migration ohne Ausfall durchzuführen?",
          options: [
            "Eine WLAN-Verbindung",
            "Gemeinsamer Netzwerkspeicher (Shared Storage)",
            "Ein USB-Stick",
            "Ein Typ-2 Hypervisor"
          ],
          correct: 1,
          explanation: "Damit ein anderer Node die VM sofort übernehmen kann, müssen beide Nodes auf dieselbe virtuelle Festplatte im Netzwerkspeicher (Shared Storage) zugreifen."
        },
        {
          q: "Wie wird Proxmox VE standardmäßig vom Administrator bedient?",
          options: [
            "Über eine App auf dem Smartphone",
            "Bequem über einen Webbrowser auf einer Weboberfläche",
            "Ausschließlich mit einer Tastatur direkt am Server",
            "Über den Windows-Arbeitsplatz"
          ],
          correct: 1,
          explanation: "Proxmox stellt einen eingebauten Webserver bereit. Administratoren geben einfach die IP-Adresse im Browser ein und können alles grafisch verwalten."
        }
      ]
    }
  ]
};
