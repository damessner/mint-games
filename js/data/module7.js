// ============================================================
// MINT-Games – Modul 7: Linux & Terminal-Befehle
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Betriebssysteme & Software
// ============================================================

const MODULE_7 = {
  id: 7,
  title: "Linux & Terminal-Befehle",
  icon: "🐧",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Betriebssysteme & Software",
  activities: [

    // ── Aktivität 1: Drag & Drop – Linux vs. Windows/macOS ──────────
    {
      id: "m7-a1",
      type: "dragdrop",
      badge: "🎯 Systeme im Vergleich",
      knowledge: {
        title: "Was ist Linux und wer nutzt es? 🐧",
        blocks: [
          {
            type: "text",
            content: "Wenn du an ein Betriebssystem denkst, fallen dir sicher zuerst Windows (auf PCs) oder macOS/iOS (auf Apple-Geräten) ein. Aber es gibt noch einen geheimen Riesen der Computerwelt: **Linux**! 🐧"
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Linux ist überall (auch wenn man es nicht sieht!)",
            content: "Linux ist Open Source (quelloffen und kostenlos). Fast alle Webserver der Welt laufen mit Linux. Dein Android-Handy basiert auf Linux, ebenso wie viele Smart-TVs, Router und sogar die schnellsten Supercomputer der Welt! Windows und macOS hingegen dominieren auf normalen Büro- und Gaming-PCs."
          },
          {
            type: "comparison",
            left: {
              icon: "🖥️",
              title: "Windows / macOS",
              color: "primary",
              points: [
                "Hauptsächlich für Desktop-PCs und Laptops",
                "Teure Lizenzen (oder im Gerätepreis enthalten)",
                "Fast alle bekannten PC-Spiele laufen hier",
                "Einfache grafische Oberfläche für jeden"
              ]
            },
            right: {
              icon: "🐧",
              title: "Linux",
              color: "secondary",
              points: [
                "Ideal für Server, Handys (Android) und Smart-Devices",
                "Komplett kostenlos und quelloffen (Open Source)",
                "Sehr stabil, sicher und extrem anpassbar",
                "Wird oft rein über Textbefehle (Terminal) gesteuert"
              ]
            }
          }
        ]
      },
      question: "Teile die Anwendungsbereiche den richtigen Betriebssystem-Typen zu!",
      instruction: "Ziehe die Begriffe in die passende Kategorie.",
      targets: [
        { id: "t-desktop", label: "🖥️ Windows / macOS (Klassische PCs)", accepts: ["office", "gaming", "macbook"] },
        { id: "t-linux",   label: "🐧 Linux (Server & Spezialgeräte)", accepts: ["webserver", "android", "smarttv", "supercomputer"] }
      ],
      items: [
        { id: "office",         text: "Büro-Arbeitsplatz" },
        { id: "gaming",         text: "High-End Gaming-PC" },
        { id: "macbook",        text: "Grafik-Design am Laptop" },
        { id: "webserver",       text: "Server für Wikipedia" },
        { id: "android",        text: "Betriebssystem für Samsung-Smartphones" },
        { id: "smarttv",        text: "Steuerungssoftware im Fernseher" },
        { id: "supercomputer",  text: "Wettervorhersage-Supercomputer" }
      ],
      explanation: "Windows und macOS beherrschen den klassischen Büro- und Spielemarkt. Linux hingegen treibt das Internet (Webserver), Smartphones (Android), Haushaltsgeräte (Smart-TVs) und Supercomputer an."
    },

    // ── Aktivität 2: Lückentext – Das Linux-Dateisystem ────────────
    {
      id: "m7-a2",
      type: "fillgaps",
      badge: "✏️ Dateistruktur",
      knowledge: {
        title: "Das Linux-Dateisystem: Keine Laufwerke C:! 📁",
        blocks: [
          {
            type: "text",
            content: "Unter Windows bist du es gewöhnt, dass deine Festplatte 'Laufwerk C:' heißt. Wenn du einen USB-Stick ansteckst, bekommt er den Buchstaben 'D:' oder 'E:'. Bei Linux ist das völlig anders! Es gibt keine Laufwerksbuchstaben. 🛑"
          },
          {
            type: "highlight",
            icon: "🌲",
            title: "Die Verzeichnis-Struktur als Baum",
            content: "Alles beginnt ganz oben bei der sogenannten **Wurzel** (Root). Sie wird einfach mit einem Schrägstrich `/` dargestellt. Von dort zweigen alle Ordner ab – auch Festplatten oder USB-Sticks werden einfach als Unterordner in diesen Baum 'eingehängt' (gemountet)."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Root (/) ", icon: "📂", def: "Das oberste Verzeichnis. Alles, wirklich alles auf dem Computer liegt hierdrinnen." },
              { term: "/home", icon: "🏠", def: "Der Benutzerordner. Hier liegen die privaten Dateien (Dokumente, Bilder) aller User." },
              { term: "/etc", icon: "⚙️", def: "Der Einstellungsordner. Hier liegen alle Konfigurationsdateien für Programme und das System." },
              { term: "Alles ist eine Datei", icon: "📄", def: "Eine goldene Linux-Regel. Selbst Festplatten, Tastaturen oder Drucker werden vom System wie Textdateien behandelt!" }
            ]
          }
        ]
      },
      question: "Vervollständige die Beschreibung des Linux-Dateisystems!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Im Gegensatz zu Windows startet das Linux-Dateisystem nicht bei C:, sondern bei der Wurzel, genannt " },
        { type: "gap", id: "g1", answer: "root", hint: "Wurzel auf Englisch" },
        { type: "text", text: ", die als einfacher Schrägstrich " },
        { type: "gap", id: "g2", answer: "/", hint: "Sonderzeichen (Slash)" },
        { type: "text", text: " geschrieben wird. Die privaten Daten der Benutzer befinden sich im Ordner " },
        { type: "gap", id: "g3", answer: "/home", hint: "Pfad zum Benutzerverzeichnis" },
        { type: "text", text: ". Systemkonfigurationen und Einstellungen speichert Linux unter " },
        { type: "gap", id: "g4", answer: "/etc", hint: "3 Zeichen (inkl. Slash)" },
        { type: "text", text: ". Eine wichtige Besonderheit von Linux ist, dass sogar Hardware wie Drucker oder Tastaturen als " },
        { type: "gap", id: "g5", answer: "datei", hint: "Dokument-Typ" },
        { type: "text", text: " behandelt wird." }
      ],
      explanation: "Bei Linux startet alles bei der Wurzel (Root, `/`). Einstellungen liegen in `/etc`, Benutzerdateien in `/home` und Hardwaregeräte werden wie Dateien behandelt."
    },

    // ── Aktivität 3: Zuordnung – Terminal-Befehle ──────────────────
    {
      id: "m7-a3",
      type: "matching",
      badge: "🔗 Terminal-Befehle",
      knowledge: {
        title: "Steuerung wie ein Profi: Das Terminal ⌨️",
        blocks: [
          {
            type: "text",
            content: "Linux-Server haben meist keine grafische Oberfläche mit Fenstern und Mauszeiger. Sie werden komplett über die Tastatur im **Terminal** (auch Konsole oder CLI genannt) gesteuert! Das sieht am Anfang kompliziert aus, geht mit etwas Übung aber extrem schnell! ⚡"
          },
          {
            type: "keyterms",
            terms: [
              { term: "ls (list)", icon: "📋", def: "Listet alle Dateien und Ordner im aktuellen Verzeichnis auf." },
              { term: "cd (change directory)", icon: "🚶", def: "Wechselt den Ordner (z.B. 'cd /home' wechselt in den Home-Ordner)." },
              { term: "pwd (print working directory)", icon: "📍", def: "Zeigt dir an, in welchem Ordner du dich gerade genau befindest." },
              { term: "mkdir (make directory)", icon: "📁", def: "Erstellt einen neuen, leeren Ordner." },
              { term: "rm (remove)", icon: "🗑️", def: "Löscht Dateien oder Ordner. Vorsicht: Es gibt keinen Papierkorb! Weg ist weg! 💥" },
              { term: "cat (concatenate)", icon: "👁️", def: "Zeigt den Inhalt einer Textdatei direkt im Terminal an." },
              { term: "sudo (superuser do)", icon: "👑", def: "Führt einen Befehl mit Administrator-Rechten aus ('Als Administrator ausführen')." }
            ]
          }
        ]
      },
      question: "Verbinde jeden Terminal-Befehl mit seiner richtigen Funktion!",
      instruction: "Wähle links den Befehl und rechts die passende Erklärung.",
      leftItems: [
        { id: "b1", text: "ls" },
        { id: "b2", text: "cd" },
        { id: "b3", text: "pwd" },
        { id: "b4", text: "mkdir" },
        { id: "b5", text: "sudo" }
      ],
      rightItems: [
        { id: "br1", text: "Listet alle Dateien im aktuellen Verzeichnis auf", matches: "b1" },
        { id: "br2", text: "Wechselt das aktuelle Verzeichnis / den Ordner", matches: "b2" },
        { id: "br3", text: "Zeigt den aktuellen Standort im Dateisystem (Pfad)", matches: "b3" },
        { id: "br4", text: "Erstellt einen neuen leeren Ordner", matches: "b4" },
        { id: "br5", text: "Führt einen Befehl mit Administrator-Rechten aus", matches: "b5" }
      ],
      explanation: "ls (list), cd (change directory), pwd (print working directory), mkdir (make directory) und sudo (superuser do) sind die absoluten Basics im Terminal."
    },

    // ── Aktivität 4: Sortierung – Dateierstellung im Terminal ───────
    {
      id: "m7-a4",
      type: "sorting",
      badge: "🔢 Befehlsfolge",
      knowledge: {
        title: "Ein praktischer Ablauf im Terminal 🛠️",
        blocks: [
          {
            type: "text",
            content: "Wenn du im Terminal arbeitest, tippst du Befehle nacheinander ein. Stell dir vor, du möchtest:\n1. Prüfen, wo du bist.\n2. Einen neuen Ordner namens 'projekt' anlegen.\n3. In diesen neuen Ordner hineingehen.\n4. Eine Textdatei erstellen.\n5. Kontrollieren, ob die Datei im Ordner liegt."
          },
          {
            type: "steps",
            title: "Die Befehle Schritt für Schritt:",
            steps: [
              { icon: "📍 1. pwd", text: "Zeigt dir deinen aktuellen Pfad (z.B. /home/schueler)." },
              { icon: "📁 2. mkdir projekt", text: "Erstellt den neuen Ordner 'projekt' im aktuellen Verzeichnis." },
              { icon: "🚶 3. cd projekt", text: "Du wechselst in den neu erstellten Ordner 'projekt'." },
              { icon: "📝 4. cat > datei.txt", text: "Erstellt eine neue Datei namens 'datei.txt' und lässt dich Text hineinschreiben." },
              { icon: "📋 5. ls", text: "Listet den Inhalt auf – du siehst deine neue 'datei.txt'!" }
            ]
          }
        ]
      },
      question: "Bringe die Befehlsreihenfolge in die logische Reihe, um den Arbeitsablauf durchzuführen!",
      instruction: "Sortiere die Befehle von oben (Schritt 1) nach unten (Schritt 5).",
      correctOrder: ["s_pwd", "s_mkdir", "s_cd", "s_cat", "s_ls"],
      items: [
        { id: "s_cd",    text: "cd projekt (In den Ordner hineingehen)" },
        { id: "s_mkdir", text: "mkdir projekt (Neuen Ordner erstellen)" },
        { id: "s_ls",    text: "ls (Prüfen, ob die Datei im Ordner existiert)" },
        { id: "s_cat",   text: "cat > datei.txt (Textdatei erstellen und befüllen)" },
        { id: "s_pwd",   text: "pwd (Aktuellen Pfad abfragen)" }
      ],
      explanation: "Der logische Ablauf ist: Ort prüfen (`pwd`) → Ordner erstellen (`mkdir`) → Ordner wechseln (`cd`) → Datei anlegen (`cat > ...`) → Ordnerinhalt prüfen (`ls`)."
    },

    // ── Aktivität 5: Drag & Drop – Dateirechte ──────────────────────
    {
      id: "m7-a5",
      type: "dragdrop",
      badge: "🎯 Linux-Rechte",
      knowledge: {
        title: "Sicherheit durch Dateirechte: r, w, x 🔒",
        blocks: [
          {
            type: "text",
            content: "Linux ist ein Mehrbenutzersystem. Damit nicht jeder Schüler die Dateien des Lehrers löschen oder verändern kann, hat jede Datei und jeder Ordner genaue **Zugriffsrechte**."
          },
          {
            type: "highlight",
            icon: "🔑",
            title: "Die drei Rechte-Arten:",
            content: "• **r (read)**: Datei lesen oder Ordnerinhalt anzeigen.\n• **w (write)**: Datei ändern, löschen oder im Ordner neue Dateien erstellen.\n• **x (execute)**: Ein Programm ausführen oder in einen Ordner hineingehen."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Besitzer (Owner)", icon: "👤", def: "Der User, dem die Datei gehört. Er darf meistens alles." },
              { term: "Gruppe (Group)", icon: "👥", def: "Eine Gruppe von Benutzern (z.B. 'schueler'), die gemeinsame Rechte teilen." },
              { term: "Andere (Others)", icon: "🌍", def: "Alle anderen Personen im System – sie haben oft nur Leserechte." }
            ]
          }
        ]
      },
      question: "Ordne die Symbole (r, w, x) den richtigen Rechten und Berechtigungen zu!",
      instruction: "Ziehe die Symbole und Beispiele in die passende Kategorie.",
      targets: [
        { id: "t-read",    label: "📖 Lesen (r - read)", accepts: ["r_sym", "r_desc"] },
        { id: "t-write",   label: "✏️ Schreiben (w - write)", accepts: ["w_sym", "w_desc"] },
        { id: "t-execute", label: "🚀 Ausführen (x - execute)", accepts: ["x_sym", "x_desc"] }
      ],
      items: [
        { id: "r_sym",   text: "Symbol: r" },
        { id: "r_desc",  text: "Einen Brief lesen / Ordnerliste anzeigen" },
        { id: "w_sym",   text: "Symbol: w" },
        { id: "w_desc",  text: "Text in einer Datei ändern oder löschen" },
        { id: "x_sym",   text: "Symbol: x" },
        { id: "x_desc",  text: "Ein Skript starten / In einen Ordner hineingehen" }
      ],
      explanation: "Dateirechte in Linux werden durch r (read/lesen), w (write/schreiben) und x (execute/ausführen) geregelt."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m7-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Linux-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Sehr gut! Du hast gelernt, wie Linux aufgebaut ist und wie man es steuert. Hier sind die wichtigsten Punkte noch einmal zusammengefasst:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🐧", title: "Linux", text: "Kostenloses Open-Source-System für Server & IoT" },
              { icon: "📁", title: "Wurzel / Root", text: "Die oberste Ebene, dargestellt als /" },
              { icon: "📋", title: "ls / cd", text: "ls listet Dateien auf, cd wechselt Ordner" },
              { icon: "📍", title: "pwd / mkdir", text: "pwd zeigt den Pfad, mkdir erstellt Ordner" },
              { icon: "🔑", title: "Rechte", text: "r = lesen, w = schreiben, x = ausführen" },
              { icon: "👑", title: "sudo", text: "Führt Befehle mit Admin-Rechten aus" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Was bedeutet die Eigenschaft 'Open Source' bei Linux?",
          options: [
            "Es läuft nur bei geöffnetem Fenster.",
            "Der Quellcode ist für jeden frei einsehbar, veränderbar und kostenlos nutzbar.",
            "Jeder kann sich ohne Passwort einloggen.",
            "Es funktioniert nur mit einer offenen Internetverbindung."
          ],
          correct: 1,
          explanation: "Open Source bedeutet, dass der Quelltext offenliegt und die Software von der Community frei weiterentwickelt und kostenlos genutzt werden darf."
        },
        {
          q: "Wo startet das Linux-Dateisystem (die oberste Ebene)?",
          options: [
            "Bei Laufwerk C:",
            "Im Ordner /home/user",
            "Bei der Wurzel (Root-Verzeichnis), dargestellt als /",
            "Im Windows-Explorer"
          ],
          correct: 2,
          explanation: "Unter Linux gibt es keine Laufwerksbuchstaben. Alles startet an der Wurzel (Root, `/`)."
        },
        {
          q: "In welchem Ordner liegen standardmäßig die privaten Dateien der Benutzer?",
          options: ["/etc", "/home", "/bin", "/var"],
          correct: 1,
          explanation: "Der Ordner `/home` enthält für jeden Benutzer einen eigenen Unterordner für dessen private Dokumente und Bilder."
        },
        {
          q: "Welcher Terminal-Befehl zeigt dir den aktuellen Ordnerpfad an, in dem du dich befindest?",
          options: ["ls", "cd", "pwd", "mkdir"],
          correct: 2,
          explanation: "`pwd` steht für 'print working directory' und gibt den aktuellen Verzeichnispfad aus."
        },
        {
          q: "Mit welchem Befehl listest du die Dateien und Unterordner des aktuellen Verzeichnisses auf?",
          options: ["list", "cat", "cd", "ls"],
          correct: 3,
          explanation: "`ls` steht für 'list' und zeigt den Inhalt des aktuellen Ordners an."
        },
        {
          q: "Was bewirkt der Befehl 'cd /home'?",
          options: [
            "Er löscht den Home-Ordner.",
            "Er wechselt das aktuelle Verzeichnis in den Ordner /home.",
            "Er benennt das Verzeichnis um.",
            "Er kopiert Dateien."
          ],
          correct: 1,
          explanation: "`cd` steht für 'change directory'. Der Befehl wechselt das Arbeitsverzeichnis in den angegebenen Pfad."
        },
        {
          q: "Was macht der Befehl 'sudo'?",
          options: [
            "Er fährt den Computer sofort herunter.",
            "Er sucht nach Viren.",
            "Er führt den nachfolgenden Befehl mit Administrator-Rechten (Root-Rechten) aus.",
            "Er ändert das Passwort des Benutzers."
          ],
          correct: 2,
          explanation: "`sudo` (superuser do) erlaubt es normalen Benutzern, Befehle mit den Rechten des Administrators (root) auszuführen."
        },
        {
          q: "Wofür stehen die Berechtigungen 'r', 'w' und 'x' im Linux-Dateisystem?",
          options: [
            "reset, write, exit",
            "read, write, execute (lesen, schreiben, ausführen)",
            "run, wait, xml",
            "remote, wireless, extra"
          ],
          correct: 1,
          explanation: "Die drei grundlegenden Dateirechte sind r (read - lesen), w (write - schreiben) und x (execute - ausführen)."
        },
        {
          q: "Welche Gefahr besteht bei der Verwendung des Löschbefehls 'rm' im Terminal?",
          options: [
            "Der Computer überhitzt.",
            "Gelöschte Dateien landen im Papierkorb und verstopfen diesen.",
            "Dateien werden ohne Nachfrage gelöscht und es gibt keinen Papierkorb zum Wiederherstellen.",
            "Der Befehl funktioniert nur bei leeren Dateien."
          ],
          correct: 2,
          explanation: "Im Terminal gibt es keinen Papierkorb. Der Befehl `rm` löscht Dateien sofort und endgültig."
        },
        {
          q: "Welches bekannte mobile Betriebssystem für Smartphones basiert auf Linux?",
          options: ["iOS", "Windows Phone", "Android", "Symbian"],
          correct: 2,
          explanation: "Android wurde auf Basis des Linux-Kernels entwickelt und nutzt diesen für die Hardwaresteuerung."
        }
      ]
    }
  ]
};
