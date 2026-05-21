// ============================================================
// MINT-Games – Modul 4: Computer-Hardware & Installation
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Hardware, Betriebssysteme & Software
// ============================================================

const MODULE_4 = {
  id: 4,
  title: "PC zusammenbauen & installieren",
  icon: "🖥️",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Computer-Hardware & Betriebssysteme",
  activities: [

    // ── Aktivität 1: Hardware-Zuordnung (Matching) ──────────────────
    {
      id: "m4-a1",
      type: "matching",
      badge: "🔗 Zuordnung",
      knowledge: {
        title: "Die Bauteile eines Computers kennenlernen ⚙️",
        blocks: [
          {
            type: "text",
            content: "Ein Computer sieht von außen oft aus wie eine graue oder schwarze Kiste. Doch innen drin arbeitet ein ganzes Team von hochspezialisierten Bauteilen zusammen! \n\nUm einen PC selbst zu bauen, musst du wissen, welche Aufgabe jede Komponente hat. Hier ist die Aufstellung der wichtigsten Teile: 🧠"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Mainboard (Motherboard)", icon: "🖥️", def: "Die Hauptplatine. Sie verbindet alle Teile wie Straßen in einer Stadt. Jedes Kabel und jede Karte wird hier eingesteckt." },
              { term: "Prozessor (CPU)", icon: "🧠", def: "Central Processing Unit. Das Gehirn des PCs. Er führt alle Berechnungen aus und sagt den anderen Teilen, was sie tun sollen." },
              { term: "Arbeitsspeicher (RAM)", icon: "⚡", def: "Random Access Memory. Der extrem schnelle Kurzzeitspeicher. Hier liegen Daten von Programmen, die gerade geöffnet sind. Wenn der PC ausgeht, wird der RAM gelöscht!" },
              { term: "Grafikkarte (GPU)", icon: "🎮", def: "Graphics Processing Unit. Sie berechnet alles, was du auf dem Monitor siehst. Super wichtig für 3D-Spiele, Videoschnitt und Grafik-Apps." },
              { term: "SSD (Solid State Drive)", icon: "💾", def: "Der Dauerspeicher. Hier liegen Windows, deine Spiele und Fotos. Sie speichert Daten magnetisch/elektronisch ab, sodass sie auch ohne Strom erhalten bleiben." },
              { term: "Netzteil (PSU)", icon: "🔌", def: "Power Supply Unit. Das Herz des PCs. Es wandelt den Strom aus der Steckdose (230V Wechselstrom) in sicheren Gleichstrom (z.B. 12V, 5V) für die Bauteile um." }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Der Unterschied zwischen RAM und SSD:",
            content: "Merk dir diesen Vergleich:\n- Der **RAM** ist wie dein Schreibtisch: Hier liegen Dokumente, an denen du *jetzt gerade* arbeitest. Er ist schnell aufgeräumt (gelöscht), wenn du Feierabend machst.\n- Die **SSD** ist wie dein Aktenschrank: Hier lagerst du alles ordentlich über Jahre hinweg. Das Heraussuchen dauert etwas länger, aber nichts geht verloren! 🗄️"
          }
        ]
      },
      question: "Ordne die Hardware-Komponente ihrer richtigen Funktion zu!",
      instruction: "Klicke zuerst links auf eine Komponente, dann rechts auf ihre Aufgabe.",
      leftItems: [
        { id: "h1", text: "🖥️ Mainboard" },
        { id: "h2", text: "🧠 CPU (Prozessor)" },
        { id: "h3", text: "⚡ RAM (Arbeitsspeicher)" },
        { id: "h4", text: "🎮 Grafikkarte (GPU)" },
        { id: "h5", text: "💾 SSD-Speicher" },
        { id: "h6", text: "🔌 Netzteil (PSU)" }
      ],
      rightItems: [
        { id: "hr1", text: "Hauptplatine, die alle Bauteile physisch und elektronisch verbindet.", matches: "h1" },
        { id: "hr2", text: "Berechnet alle Datenbefehle; das Hauptgehirn des Computers.", matches: "h2" },
        { id: "hr3", text: "Sehr schneller Kurzzeitspeicher; verliert seine Daten ohne Strom.", matches: "h3" },
        { id: "hr4", text: "Erzeugt das Bildsignal für den Monitor und berechnet 3D-Welten.", matches: "h4" },
        { id: "hr5", text: "Dauerhafter Speicher für das Betriebssystem, Spiele und Dateien.", matches: "h5" },
        { id: "hr6", text: "Wandelt Haushaltsstrom um und versorgt alle Bauteile mit Energie.", matches: "h6" }
      ],
      explanation: "Mainboard (Platine), CPU (Gehirn), RAM (Kurzzeitspeicher), GPU (Bildsignal/3D), SSD (Dauerspeicher), Netzteil (Stromversorgung)."
    },

    // ── Aktivität 2: PC-Zusammenbau (Custom Drag & Drop) ──────────────
    {
      id: "m4-a2",
      type: "pcassembly",
      badge: "🛠️ PC-Montage",
      knowledge: {
        title: "Wie man einen Computer zusammenbaut 🛠️",
        blocks: [
          {
            type: "text",
            content: "Einen Computer selbst zusammenzubauen ist wie Lego für Technikbegeisterte! Jedes Bauteil passt nur an seinen vorbestimmten Platz. Wenn man vorsichtig vorgeht, kann nichts schiefgehen. Lass uns die Montageregeln ansehen! 💪"
          },
          {
            type: "steps",
            title: "Die logische Montagereihenfolge:",
            steps: [
              { icon: "🖥️ 1. Das Mainboard", text: "Es wird zuerst ins Gehäuse eingebaut und festgeschraubt. Es ist die Basis. Auf dem nackten Blech dürfen keine losen Teile liegen!" },
              { icon: "🧠 2. Der Prozessor (CPU)", text: "Er wird vorsichtig in den Sockel auf dem Mainboard gelegt. Achtung: Die Kontakte dürfen niemals verbogen werden! ⚠️" },
              { icon: "⚡ 3. Der Arbeitsspeicher (RAM)", text: "Die Riegel werden in die langen schmalen Slots gesteckt, bis die Klammern an den Seiten hörbar einrasten." },
              { icon: "🔌 4. Das Netzteil (PSU)", text: "Wird meistens unten im Gehäuse verschraubt und versorgt das Mainboard und andere Geräte über Kabelbäume." },
              { icon: "🎮 5. Die Grafikkarte (GPU)", text: "Wird in den langen horizontalen PCIe-Steckplatz des Mainboards geschoben und am Gehäuserand fixiert." },
              { icon: "💾 6. Die Festplatte (SSD)", text: "Wird in einen Schacht geschraubt oder direkt als kleine M.2-Platine auf das Mainboard gesteckt." }
            ]
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "Wichtigste Sicherheitsregel: Elektrostatische Entladung (ESD)",
            content: "Unser Körper kann sich durch Reibung unsichtbar elektrisch aufladen. Wenn wir dann die empfindlichen Chips auf dem Mainboard berühren, kann ein winziger Funke springen, der das Bauteil zerstört! \n\nDeshalb: Vor dem Einbau immer kurz an einem geerdeten Metallteil (z.B. Heizkörper) entladen oder ein ESD-Armband tragen! 🔌❌"
          }
        ]
      },
      question: "Baue den Computer in der richtigen Reihenfolge zusammen!",
      instruction: "Ziehe die Komponenten aus der Teile-Kiste in das Gehäuse. Denke daran: Installiere zuerst das Mainboard!",
      explanation: "Zuerst wird das Mainboard als Fundament befestigt. Erst danach können CPU, RAM und Grafikkarte auf dem Mainboard installiert werden. Netzteil und SSD haben eigene Plätze im Gehäuse."
    },

    // ── Aktivität 3: Booten & USB-Stick (Custom Simulation) ──────────
    {
      id: "m4-a3",
      type: "pcboot",
      badge: "⚡ BIOS & Booten",
      knowledge: {
        title: "Der PC schaltet sich ein – Was passiert im Hintergrund? 🖥️",
        blocks: [
          {
            type: "text",
            content: "Wenn du den Power-Button drückst, passiert in Bruchteilen einer Sekunde eine ganze Kette von Aktionen. Der Computer prüft sich selbst auf Fehler und sucht nach Arbeit. Lass uns diesen Prozess aufschlüsseln! ⚙️"
          },
          {
            type: "steps",
            title: "Die Boot-Schritte nach dem Einschalten:",
            steps: [
              { icon: "🔌 1. Stromversorgung", text: "Das Netzteil schaltet sich ein und sendet das Signal 'Power Good' an das Mainboard. Alle Lüfter fangen an zu rotieren." },
              { icon: "🔍 2. POST (Power-On Self-Test)", text: "Das BIOS (oder modern: UEFI) auf dem Mainboard wacht auf. Es prüft sofort, ob CPU, Grafikkarte und Arbeitsspeicher da sind und funktionieren. Gibt es Fehler, piepst der PC!" },
              { icon: "🗺️ 3. Boot-Medium suchen", text: "Ist die Hardware OK, sucht das BIOS nach einem Betriebssystem (z.B. auf der SSD oder einem USB-Stick)." },
              { icon: "🚀 4. OS laden", text: "Wurde ein System gefunden, lädt der Bootloader die Kerndateien in den Arbeitsspeicher. Windows startet und zeigt dir den Login-Bildschirm!" }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Warum startet ein frisch gebauter PC nicht einfach?",
            content: "Ein neu zusammengebauter Computer hat eine komplett **leere** Festplatte (SSD). Da ist noch kein Betriebssystem (wie Windows oder Linux) drauf! \n\nDas BIOS meldet daher einen Boot-Fehler ('No Boot Device found'). Wir müssen dem PC ein Boot-Medium (meistens einen präparierten USB-Stick mit dem Windows-Installer) zur Verfügung stellen und ihn neu starten! 💾🔌"
          }
        ]
      },
      question: "Boote den Computer und starte das Windows-Setup!",
      instruction: "Schalte den PC über den Power-Button ein, lies die Fehlermeldung, schließe den Windows-USB-Stick an den PC an und starte den PC neu (aus- und einschalten)!",
      explanation: "Ein PC ohne Betriebssystem kann nicht ins Windows booten. Man muss erst ein Installationsmedium (USB-Stick) anschließen und den PC neustarten, damit er davon laden kann."
    },

    // ── Aktivität 4: Windows Installation (Custom Setup) ────────────
    {
      id: "m4-a4",
      type: "pcinstall",
      badge: "💿 OS Installation",
      knowledge: {
        title: "Ein Betriebssystem installieren – Schritt für Schritt 💿",
        blocks: [
          {
            type: "text",
            content: "Jetzt wird es spannend! Der USB-Stick hat geladen und wir sehen das Installationsmenü von Windows. Hier müssen wir einige wichtige Entscheidungen treffen, damit der PC später optimal läuft. 🤝"
          },
          {
            type: "steps",
            title: "Wichtige Stationen im Setup-Assistenten:",
            steps: [
              { icon: "🌐 Ländereinstellungen", text: "Sprache und Tastaturlayout einstellen. Für uns: Deutsch (Österreich) – damit auch das 'ß' und die Umlaute auf der Tastatur richtig liegen!" },
              { icon: "🔑 Upgrade vs. Neuinstallation", text: "Upgrade wählt man nur, wenn schon Windows da ist. Wir wählen 'Benutzerdefiniert (Custom)', da wir eine nagelneue leere SSD haben." },
              { icon: "💾 Festplatte partitionieren", text: "Wir können nicht direkt installieren! Die rohe SSD muss erst aufgeteilt (partitioniert) werden. Mit dem Klick auf 'Neu' erstellt Windows automatisch eine Hauptpartition für unsere Dateien sowie geheime, kleine Systempartitionen für den Boot-Prozess." },
              { icon: "☕ Kopiervorgang", text: "Jetzt kopiert Windows die Systemdateien auf die SSD, entpackt sie und richtet Treiber ein. Das dauert bei echten PCs ca. 10-20 Minuten." },
              { icon: "👤 Benutzerkonto", text: "Zum Schluss vergeben wir einen Benutzernamen und richten ein Passwort ein, damit niemand ungefragt auf unsere Dateien zugreifen kann." }
            ]
          },
          {
            type: "highlight",
            icon: "🤔",
            title: "Was ist eine Partition?",
            content: "Stell dir die SSD wie ein unaufgeteiltes Grundstück vor. Eine **Partition** ist wie der Zaun, den du ziehst, um das Grundstück in Vorgarten, Haus und Garage aufzuteilen. Erst durch die Partitionierung weiß der PC, wo er das Betriebssystem speichern darf! 📐🏠"
          }
        ]
      },
      question: "Führe die Windows 11 Installation auf der SSD durch!",
      instruction: "Befolge die Anweisungen des Setup-Wizards im simulierten Bildschirm. Formatiere die SSD, installiere die Dateien und erstelle dein Benutzerkonto.",
      explanation: "Bei einer sauberen Neuinstallation wird die benutzerdefinierte Installationsmethode verwendet. Die SSD wird partitioniert ('Neu') und formatiert, bevor die Systemdateien kopiert werden. Danach wird ein Benutzerkonto angelegt."
    },

    // ── Aktivität 5: Boot-Reihenfolge (Sorting) ──────────────────────
    {
      id: "m4-a5",
      type: "sorting",
      badge: "🔢 Boot-Priorität",
      knowledge: {
        title: "Die Boot-Reihenfolge (Boot Priority) im BIOS 🗺️",
        blocks: [
          {
            type: "text",
            content: "Wenn du deinen PC einschaltest, woher weiß er, wo er suchen soll? Er klappert eine Liste ab: Ist ein Betriebssystem auf dem USB-Port? Nein? Auf der SSD? Ja! \n\nDiese Liste nennen wir **Boot-Reihenfolge** (Boot Priority). Man kann sie im BIOS-Menü manuell einstellen. Lass uns das Prinzip ansehen! 🔍"
          },
          {
            type: "highlight",
            icon: "🧠",
            title: "Die richtige Reihenfolge für die Installation und danach:",
            content: "1️⃣ **USB-Laufwerk**: Wenn wir Windows neu installieren wollen, MUSS der USB-Stick an erster Stelle stehen. Sonst ignoriert der PC den Stick und meldet wieder 'Kein System gefunden'.\n2️⃣ **SSD / HDD**: Hier liegt das Haupt-Betriebssystem. Steht an zweiter Stelle. Wenn kein USB-Stick drin ist, startet Windows direkt blitzschnell von der SSD.\n3️⃣ **CD/DVD-Laufwerk**: Früher steckte man Windows-DVDs rein. Heute fast ausgestorben, kann aber als Reserve hinten stehen.\n4️⃣ **Netzwerk-Boot (PXE)**: Der PC sucht ein Betriebssystem im Schulnetzwerk. Dauert lange und wird nur von System-Administratoren genutzt."
          },
          {
            type: "text",
            content: "Steht der USB-Stick an erster Stelle, versucht der PC immer zuerst von dort zu laden. Ist kein USB-Stick eingesteckt, springt er automatisch zum nächsten Punkt der Liste (der SSD) und bootet dein normales Windows. Praktisch! 🚀"
          }
        ]
      },
      question: "Bringe die Boot-Reihenfolge für eine Windows-Installation in die richtige Priorität!",
      instruction: "Sortiere die Boot-Medien von der höchsten Priorität (1. Stelle) bis zur niedrigsten Priorität (4. Stelle).",
      correctOrder: ["boot_usb", "boot_ssd", "boot_dvd", "boot_net"],
      items: [
        { id: "boot_ssd", text: "💾 2. Lokale Festplatte (M.2 NVMe SSD mit installiertem Windows)" },
        { id: "boot_net", text: "🌐 4. Netzwerk-Boot / PXE (Laden eines Betriebssystems vom Schulserver)" },
        { id: "boot_usb", text: "🔌 1. Wechseldatenträger (USB-Stick mit Windows-Installationsdateien)" },
        { id: "boot_dvd", text: "💿 3. Optisches Laufwerk (Interner CD/DVD-Brenner)" }
      ],
      explanation: "Für die Installation muss der USB-Stick an erster Stelle stehen (Priorität 1). Nach der Installation bootet der PC standardmäßig von der SSD (Priorität 2). DVD und Netzwerk stehen an hinteren Plätzen."
    },

    // ── Aktivität 6: Abschlussquiz (Quiz) ──────────────────────────
    {
      id: "m4-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für den Hardware- & Installations-Check? 📝",
        blocks: [
          {
            type: "text",
            content: "Großartig! Du hast gelernt, wie man einen PC montiert, wie er bootet, wie man ein OS installiert und wie die Boot-Reihenfolge funktioniert. Hier ist dein Spickzettel für das Abschlussquiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🧠", title: "CPU", text: "Der Prozessor berechnet alle Daten im PC." },
              { icon: "⚡", title: "RAM", text: "Arbeitsspeicher. Schnell, flüchtig bei Stromausfall." },
              { icon: "💾", title: "SSD", text: "Dauerspeicher. Speichert Windows und Dateien dauerhaft." },
              { icon: "🔌", title: "Netzteil", text: "Wandelt 230V Wechselstrom in PC-Gleichstrom um." },
              { icon: "🔍", title: "POST", text: "Power-On Self-Test prüft die Hardware beim Start." },
              { icon: "💿", title: "Partition", text: "Logischer Bereich auf der SSD, der erstellt werden muss." }
            ]
          },
          {
            type: "highlight",
            icon: "🏆",
            title: "Abschließen & Zertifikat sichern!",
            content: "Beantworte nun die 10 Fragen, um dein offizielles Zertifikat für 'Computer-Hardware & Betriebssystem-Installation' freizuschalten. Los geht's! 🚀"
          }
        ]
      },
      questions: [
        {
          q: "Welches Bauteil verbindet alle Komponenten im PC miteinander?",
          options: ["Grafikkarte", "Prozessor (CPU)", "Mainboard (Platine)", "Netzteil (PSU)"],
          correct: 2,
          explanation: "Das Mainboard (auch Motherboard genannt) ist die zentrale Platine. Sie enthält Leiterbahnen und Steckplätze, um alle Komponenten miteinander zu verbinden."
        },
        {
          q: "Was passiert mit den Daten im Arbeitsspeicher (RAM), wenn der PC ausgeschaltet wird?",
          options: [
            "Sie werden dauerhaft auf der SSD gesichert.",
            "Sie werden komplett gelöscht (flüchtiger Speicher).",
            "Sie werden verschlüsselt.",
            "Nichts, sie bleiben für immer im RAM erhalten."
          ],
          correct: 1,
          explanation: "Der Arbeitsspeicher (RAM) ist ein flüchtiger Speicher. Er benötigt konstanten Strom, um Daten zu halten. Wird der PC abgeschaltet, wird der RAM komplett geleert."
        },
        {
          q: "Welches Bauteil sorgt dafür, dass 3D-Spiele flüssig laufen und Bilder schnell berechnet werden?",
          options: ["Netzteil", "Grafikkarte (GPU)", "SSD-Festplatte", "Soundkarte"],
          correct: 1,
          explanation: "Die Grafikkarte (mit dem Grafikprozessor/GPU) ist speziell für die Berechnung komplexer 2D- und 3D-Grafiken sowie die Bildausgabe auf den Monitor zuständig."
        },
        {
          q: "Welches Risiko beschreibt 'ESD' beim Zusammenbau eines Computers?",
          options: [
            "Ein Kurzschluss im Hausnetz.",
            "Die Zerstörung empfindlicher Mikrochips durch elektrostatische Entladungen unseres Körpers.",
            "Das Auslaufen von Kondensatoren auf dem Mainboard.",
            "Das Ersticken von Lüftern durch Staub."
          ],
          correct: 1,
          explanation: "ESD steht für Electrostatic Discharge. Durch Aufladung unseres Körpers können hohe Spannungen entstehen, die beim Berühren von Computerchips diese unbemerkt zerstören können. Erdung ist wichtig!"
        },
        {
          q: "Was versteht man unter dem 'POST' beim Einschalten des Computers?",
          options: [
            "Das Versenden einer E-Mail an den Hersteller.",
            "Die Überprüfung der Hardwarekomponenten auf Funktion direkt nach dem Einschalten.",
            "Den Ladevorgang von Windows.",
            "Die Übertragung von Daten über das Netzwerk."
          ],
          correct: 1,
          explanation: "POST steht für Power-On Self-Test. Das BIOS führt diesen Selbsttest direkt nach dem Einschalten durch, um sicherzustellen, dass CPU, RAM, Grafikkarte etc. vorhanden sind und funktionieren."
        },
        {
          q: "Was meldet das BIOS, wenn du einen frisch gebauten PC mit einer nagelneuen, leeren SSD einschaltest?",
          options: [
            "Windows startet automatisch.",
            "Fehlermeldung: Kein bootfähiges Medium gefunden (Boot Device Not Found).",
            "Der PC stürzt sofort mit einem Blue Screen ab.",
            "Die SSD wird automatisch vom BIOS gelöscht."
          ],
          correct: 1,
          explanation: "Da eine neue SSD komplett leer ist, kann das BIOS kein Betriebssystem finden. Es gibt die Fehlermeldung aus, dass kein Boot-Medium vorhanden ist, und fordert zum Einlegen eines solchen auf."
        },
        {
          q: "Wie bringst du das Windows-Setup auf einen neu gebauten Computer ohne Betriebssystem?",
          options: [
            "Durch Eingabe eines langen Programmier-Codes.",
            "Über einen bootfähigen USB-Stick mit den Installationsdateien.",
            "Der PC lädt Windows automatisch über das WLAN.",
            "Das ist ohne ein altes Betriebssystem unmöglich."
          ],
          correct: 1,
          explanation: "Man lädt die Installationsdateien mithilfe eines anderen PCs auf einen USB-Stick und macht diesen im BIOS als Boot-Medium startbereit. Dann bootet der neue PC direkt vom Stick in den Installer."
        },
        {
          q: "Welche Installationsart wählst du aus, um Windows auf einer neuen SSD sauber neu zu installieren?",
          options: [
            "Upgrade: Dateien und Einstellungen behalten",
            "Benutzerdefiniert: nur Windows installieren (Clean Install)",
            "Netzwerk-Update",
            "Automatische Schnellsicherung"
          ],
          correct: 1,
          explanation: "Für eine saubere Erstinstallation auf einer leeren Festplatte wählt man die benutzerdefinierte Methode. Dadurch wird die Platte komplett frisch beschrieben."
        },
        {
          q: "Was musst du im Windows-Setup mit einer nagelneuen SSD machen, bevor Windows installiert werden kann?",
          options: [
            "Sie mit einer Crimpzange bearbeiten.",
            "Eine Partition erstellen (auf 'Neu' klicken) und formatieren.",
            "Sie mit Passwörtern verschlüsseln.",
            "Nichts, Windows ignoriert die Festplatte automatisch."
          ],
          correct: 1,
          explanation: "Roher Festplattenspeicher muss partitioniert werden. Durch Klicken auf 'Neu' teilt Windows die SSD in passende logische Bereiche auf und formatiert sie, damit Dateien gespeichert werden können."
        },
        {
          q: "Warum muss der USB-Stick bei der Windows-Installation an 1. Stelle der Boot-Reihenfolge stehen?",
          options: [
            "Damit der PC weiß, dass er vom USB-Stick laden soll, anstatt das leere Laufwerk zu durchsuchen.",
            "Weil der USB-Stick sonst kaputtgeht.",
            "Das ist nicht nötig, das BIOS entscheidet immer zufällig.",
            "Weil USB-Kabel immer Vorrang vor internen Kabeln haben."
          ],
          correct: 0,
          explanation: "Die Boot-Reihenfolge bestimmt, welche Laufwerke das BIOS nacheinander nach einem Betriebssystem absucht. Steht der USB-Stick an erster Stelle, lädt er direkt das Windows-Setup vom Stick."
        }
      ]
    }
  ]
};
