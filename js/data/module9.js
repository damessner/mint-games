// ============================================================
// MINT-Games – Modul 9: Container mit Docker
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Betriebssysteme, Software & Virtualisierung
// ============================================================

const MODULE_9 = {
  id: 9,
  title: "Container mit Docker",
  icon: "🐳",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Betriebssysteme & Software",
  activities: [

    // ── Aktivität 1: Zuordnung – Docker-Fachbegriffe ──────────────────
    {
      id: "m9-a1",
      type: "matching",
      badge: "🔗 Docker-Begriffe",
      knowledge: {
        title: "Docker: Die Schifffahrt-Metapher 🐳",
        blocks: [
          {
            type: "text",
            content: "Stell dir vor, du möchtest eine Webseite, eine Datenbank und einen Chatbot auf einem Server installieren. Jedes Programm braucht andere Software-Versionen und sie stören sich gegenseitig. Das ist Chaos! 🤯"
          },
          {
            type: "highlight",
            icon: "📦",
            title: "Die Schiffscontainer-Idee",
            content: "Docker löst dieses Problem wie echte Frachtschiffe: Jede Anwendung wird in eine eigene, geschlossene Kiste verpackt – einen **Container**. In diesem Container ist alles fixfertig drin, was das Programm zum Laufen braucht. Es stört kein anderes Programm auf dem Server."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Dockerfile", icon: "📝", def: "Das Rezept (Bauplan) als Textdatei. Hier steht drin, welche Software installiert werden soll." },
              { term: "Docker Image", icon: "💾", def: "Die gefrorene 'Backmischung'. Das fertige, unveränderliche Paket, das aus dem Dockerfile gebaut wurde." },
              { term: "Docker Container", icon: "🚀", def: "Der fertig gebackene Kuchen. Die laufende Anwendung, die aus dem Image gestartet wurde." },
              { term: "Docker Hub", icon: "🌐", def: "Der App-Store für Docker. Hier gibt es Millionen fertige Images zum Herunterladen." }
            ]
          }
        ]
      },
      question: "Verbinde die Docker-Begriffe mit ihrer richtigen Bedeutung!",
      instruction: "Wähle links das Wort und rechts die passende Erklärung.",
      leftItems: [
        { id: "d1", text: "Dockerfile" },
        { id: "d2", text: "Docker Image" },
        { id: "d3", text: "Docker Container" },
        { id: "d4", text: "Docker Hub" },
        { id: "d5", text: "Docker Volume" }
      ],
      rightItems: [
        { id: "dr1", text: "Die Textdatei mit den Bauanweisungen (Rezept)", matches: "d1" },
        { id: "dr2", text: "Das unveränderliche Software-Paket (Backmischung)", matches: "d2" },
        { id: "dr3", text: "Die aktiv ausgeführte, isolierte Anwendung (Kuchen)", matches: "d3" },
        { id: "dr4", text: "Die Online-Plattform für fertige App-Images (App-Store)", matches: "d4" },
        { id: "dr5", text: "Speicherplatz zur dauerhaften Sicherung von Container-Daten", matches: "d5" }
      ],
      explanation: "Ein Dockerfile beschreibt das System. Daraus wird ein unveränderliches Image gebaut. Aus diesem Image startet man beliebig viele laufende Container. Docker Hub dient als Online-Bibliothek."
    },

    // ── Aktivität 2: Lückentext – Vorteile von Containern ────────────
    {
      id: "m9-a2",
      type: "fillgaps",
      badge: "✏️ Vorteile von Docker",
      knowledge: {
        title: "Warum liebt jeder Docker? 💖",
        blocks: [
          {
            type: "text",
            content: "Früher gab es oft Streit zwischen Software-Entwicklern und Server-Admins. Der Entwickler sagte: 'Auf meinem Laptop funktioniert die App!'. Der Admin antwortete: 'Auf dem Server aber nicht!' 🤷‍♂️"
          },
          {
            type: "highlight",
            icon: "⚡",
            title: "Build once, run anywhere",
            content: "Da ein Docker-Container alle benötigten Bibliotheken selbst mitbringt, verhält er sich überall exakt gleich. Er läuft auf einem Windows-Laptop genauso wie auf einem riesigen Linux-Server im Rechenzentrum. Zudem teilen sich Container den Kernel des Haupt-Betriebssystems, wodurch sie viel weniger RAM als VMs verbrauchen."
          }
        ]
      },
      question: "Fülle die Lücken aus, um die Vorteile von Docker zu beschreiben!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Da sich Docker-Container den Systemkern (Kernel) teilen, laufen sie " },
        { type: "gap", id: "g1", answer: "isoliert", hint: "Voneinander getrennt / geschützt" },
        { type: "text", text: " voneinander und sind im Vergleich zu VMs extrem " },
        { type: "gap", id: "g2", answer: "leichtgewichtig", hint: "Ressourcenschonend" },
        { type: "text", text: ". Ein riesiger Vorteil ist die " },
        { type: "gap", id: "g3", answer: "portabilität", hint: "Eigenschaft, überall lauffähig zu sein" },
        { type: "text", text: ", was bedeutet, dass ein Container auf dem Laptop des Entwicklers genauso funktioniert wie auf dem " },
        { type: "gap", id: "g4", answer: "server", hint: "Zentraler Computer im Netzwerk" },
        { type: "text", text: " im Rechenzentrum. Man nennt dieses Prinzip auch 'Build once, run " },
        { type: "gap", id: "g5", answer: "anywhere", hint: "Englisch für 'überall'" },
        { type: "text", text: "'." }
      ],
      explanation: "Container sind isoliert, leichtgewichtig (sparen RAM) und bieten maximale Portabilität. Sie laufen ohne Anpassungen auf jedem System (anywhere)."
    },

    // ── Aktivität 3: Sortierung – Docker-Workflow ──────────────────
    {
      id: "m9-a3",
      type: "sorting",
      badge: "🔢 Docker-Arbeitsablauf",
      knowledge: {
        title: "Der Docker-Workflow: Vom Code zum laufenden Container 🚀",
        blocks: [
          {
            type: "text",
            content: "Wie kommt eine eigene App in die Docker-Welt? Dieser Ablauf wird täglich von Tausenden Programmierern genutzt:"
          },
          {
            type: "steps",
            title: "Die Phasen des Workflows:",
            steps: [
              { icon: "📝 1. Schreiben", text: "Erstelle ein `Dockerfile` und definiere das Betriebssystem und die App-Dateien." },
              { icon: "🏗️ 2. Bauen (Build)", text: "Führe `docker build` aus. Docker liest das Rezept und schnürt das fertige `Image`." },
              { icon: "📤 3. Veröffentlichen (Push)", text: "Lade das Image mit `docker push` auf Docker Hub hoch, damit andere darauf zugreifen können." },
              { icon: "📥 4. Herunterladen (Pull)", text: "Auf dem Zielserver holst du dir das Image mit `docker pull` aus dem Internet." },
              { icon: "🚀 5. Starten (Run)", text: "Starte die Anwendung mit `docker run`. Der Container läuft!" }
            ]
          }
        ]
      },
      question: "Bringe die Schritte des Docker-Workflows in die richtige logische Reihenfolge!",
      instruction: "Sortiere die Schritte von oben (Schritt 1) nach unten (Schritt 5).",
      correctOrder: ["s_write", "s_build", "s_push", "s_pull", "s_run"],
      items: [
        { id: "s_build", text: "docker build (Image aus dem Rezept bauen)" },
        { id: "s_run",   text: "docker run (Container auf dem Zielserver starten)" },
        { id: "s_write", text: "Dockerfile schreiben (Rezept definieren)" },
        { id: "s_pull",  text: "docker pull (Das fertige Image auf den Server laden)" },
        { id: "s_push",  text: "docker push (Das Image auf Docker Hub hochladen)" }
      ],
      explanation: "Der Ablauf geht immer von Dockerfile (Schreiben) → docker build (Bauen) → docker push (Hochladen) → docker pull (Herunterladen) → docker run (Ausführen)."
    },

    // ── Aktivität 4: Drag & Drop – Docker-Befehle ──────────────────
    {
      id: "m9-a4",
      type: "dragdrop",
      badge: "🎯 Docker-CLI",
      knowledge: {
        title: "Docker über das Terminal steuern ⌨️",
        blocks: [
          {
            type: "text",
            content: "Um Docker-Container zu steuern, nutzen Admins Befehle im Terminal. Diese Befehle fangen alle mit dem Wort `docker` an."
          },
          {
            type: "keyterms",
            terms: [
              { term: "docker run", icon: "🚀", def: "Erstellt einen neuen Container aus einem Image und startet ihn." },
              { term: "docker stop", icon: "🛑", def: "Stoppt einen aktuell laufenden Container, ohne ihn zu löschen." },
              { term: "docker ps", icon: "📋", def: "Zeigt eine Liste aller aktuell laufenden Container an." },
              { term: "docker rm", icon: "🗑️", def: "Löscht einen gestoppten Container permanent vom System." },
              { term: "docker images", icon: "💾", def: "Listet alle auf dem Computer gespeicherten Images auf." }
            ]
          }
        ]
      },
      question: "Teile die Docker-Befehle ihren jeweiligen Funktionen zu!",
      instruction: "Ziehe die Befehle in die passende Funktions-Kategorie.",
      targets: [
        { id: "t-action", label: "🚀 Status ändern (Start/Stop)", accepts: ["c_run", "c_stop"] },
        { id: "t-manage", label: "⚙️ Verwalten (Anzeigen/Löschen)", accepts: ["c_ps", "c_rm", "c_images"] }
      ],
      items: [
        { id: "c_run",    text: "docker run (Starten)" },
        { id: "c_stop",   text: "docker stop (Anhalten)" },
        { id: "c_ps",     text: "docker ps (Laufende auflisten)" },
        { id: "c_rm",     text: "docker rm (Container löschen)" },
        { id: "c_images", text: "docker images (Geladene Images anzeigen)" }
      ],
      explanation: "`docker run` und `docker stop` verändern den Zustand eines Containers. Mit `docker ps`, `docker images` und `docker rm` verwaltet und bereinigt man sein System."
    },

    // ── Aktivität 5: Zuordnung – Ports & Volumes ────────────────────
    {
      id: "m9-a5",
      type: "matching",
      badge: "🔗 Ports & Daten",
      knowledge: {
        title: "Löcher in die Kiste bohren: Ports und Volumes 🔌",
        blocks: [
          {
            type: "text",
            content: "Ein Docker-Container ist standardmäßig komplett von der Außenwelt isoliert. Das Programm darin kann nicht nach draußen funken, und niemand kann darauf zugreifen. Wir müssen kontrolliert 'Verbindungen' herstellen!"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Port-Mapping (-p)", icon: "🔌", def: "Leitet Netzwerkanfragen vom echten Computer (Host) in den Container weiter. Beispiel: `-p 8080:80` leitet Webanfragen von Port 8080 des Hosts an Port 80 im Container." },
              { term: "Volumes (-v)", icon: "💾", def: "Verbindet einen Ordner auf dem echten PC mit einem Ordner im Container. Da Container beim Löschen all ihre Daten verlieren, sichern Volumes Datenbanken und Dateien dauerhaft!" }
            ]
          }
        ]
      },
      question: "Verbinde die Docker-Netzwerk- und Speicheroptionen mit der richtigen Funktion!",
      instruction: "Wähle links die Option und rechts die passende Erklärung.",
      leftItems: [
        { id: "o1", text: "-p 8080:80" },
        { id: "o2", text: "-v /mein/ordner:/data" },
        { id: "o3", text: "Daten-Persistenz" },
        { id: "o4", text: "Isolierung" }
      ],
      rightItems: [
        { id: "or1", text: "Leitet den Host-Port 8080 an den Container-Port 80 weiter", matches: "o1" },
        { id: "or2", text: "Verbindet einen Host-Ordner mit einem Container-Pfad", matches: "o2" },
        { id: "or3", text: "Daten dauerhaft behalten, auch wenn der Container gelöscht wird", matches: "o3" },
        { id: "or4", text: "Vollständige Abschirmung des Containers vom restlichen System", matches: "o4" }
      ],
      explanation: "Mit `-p` (Ports) schalten wir Netzwerkports frei. Mit `-v` (Volumes) verbinden wir Dateipfade, um Daten dauerhaft zu sichern (Persistenz)."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m9-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Docker-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Super! Du hast gelernt, wie Container funktionieren, warum Docker so beliebt ist und wie man es bedient. Hier ist deine Zusammenfassung vor dem Quiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🐳", title: "Docker", text: "Verpackt Apps in isolierte Container" },
              { icon: "📝", title: "Dockerfile", text: "Der Text-Bauplan (Rezept)" },
              { icon: "💾", title: "Image", text: "Das fertige, eingefrorene Paket" },
              { icon: "🚀", title: "Container", text: "Die aktiv laufende App-Instanz" },
              { icon: "🔌", title: "Port-Mapping", text: "Leitet Datenverkehr weiter (z.B. -p 8080:80)" },
              { icon: "📂", title: "Volume", text: "Speichert Daten dauerhaft auf dem Host" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Was ist ein Docker-Container?",
          options: [
            "Eine Holzkiste für den Transport von Computern im Hafen.",
            "Eine isolierte Umgebung, in der eine Anwendung mit all ihren Abhängigkeiten läuft.",
            "Ein spezieller Typ von Arbeitsspeicher.",
            "Ein neues Dateiformat für Bilder."
          ],
          correct: 1,
          explanation: "Ein Container isoliert eine Anwendung komplett vom restlichen System und bringt alle benötigten Bibliotheken selbst mit."
        },
        {
          q: "Was ist der Unterschied zwischen einem Docker Image und einem Container?",
          options: [
            "Images sind immer kostenpflichtig.",
            "Das Image ist der unveränderliche Bauplan (die Backmischung); der Container ist die laufende Instanz davon (der fertige Kuchen).",
            "Ein Container existiert nur im Internet.",
            "Images können nicht gelöscht werden."
          ],
          correct: 1,
          explanation: "Das Image ist das statische Paket, das auf der Festplatte liegt. Sobald es gestartet wird, wird es zu einem aktiven Container."
        },
        {
          q: "In welcher Datei schreibt man die Anweisungen, wie ein Docker Image aufgebaut sein soll?",
          options: ["docker.config", "Dockerfile", "index.html", "container.json"],
          correct: 1,
          explanation: "Das `Dockerfile` ist eine einfache Textdatei, in der Zeile für Zeile steht, welches Basis-Betriebssystem und welche Dateien ins Image sollen."
        },
        {
          q: "Welche Online-Plattform dient als weltweiter App-Store für Docker-Images?",
          options: ["Google Play Store", "GitHub Desktop", "Docker Hub", "App-Store Proxmox"],
          correct: 2,
          explanation: "Auf Docker Hub (hub.docker.com) laden Entwickler und Firmen ihre offiziellen Software-Images (z.B. für Webserver oder Datenbanken) hoch."
        },
        {
          q: "Mit welchem Befehl erstellt und startet man einen neuen Container aus einem Image?",
          options: ["docker start", "docker run", "docker build", "docker execute"],
          correct: 1,
          explanation: "`docker run` lädt (falls nötig) das Image herunter, erstellt den Container und startet die Anwendung sofort."
        },
        {
          q: "Wie listet man im Terminal alle aktuell laufenden Docker-Container auf?",
          options: ["docker ls", "docker list", "docker ps", "docker show"],
          correct: 2,
          explanation: "`docker ps` (process status) zeigt eine Tabelle aller aktiven Container inklusive ihrer IDs und Namen an."
        },
        {
          q: "Was bewirkt der Parameter '-p 8080:80' beim Starten eines Containers?",
          options: [
            "Er begrenzt den RAM auf 80 Megabyte.",
            "Er leitet Netzwerkanfragen von Port 8080 des echten PCs an Port 80 im Container weiter.",
            "Er erlaubt 8080 Benutzer gleichzeitig.",
            "Er benennt den Container um."
          ],
          correct: 1,
          explanation: "Dies ist das Port-Mapping. Es bohrt ein Loch in den isolierten Container, damit man die darin laufende Web-App über den Host-PC erreichen kann."
        },
        {
          q: "Was passiert standardmäßig mit den Daten innerhalb eines Containers, wenn dieser gelöscht wird?",
          options: [
            "Sie werden automatisch auf Docker Hub gesichert.",
            "Sie sind unwiderruflich verloren.",
            "Sie werden in den Windows-Papierkorb verschoben.",
            "Sie werden auf eine CD gebrannt."
          ],
          correct: 1,
          explanation: "Docker-Container sind flüchtig (ephemer). Wenn man sie löscht, verschwinden alle geänderten Daten darin – es sei denn, man verwendet ein Volume."
        },
        {
          q: "Wie sorgt man bei Docker für 'Daten-Persistenz' (dauerhafte Datenspeicherung)?",
          options: [
            "Man darf den Computer nie ausschalten.",
            "Man verwendet Docker Volumes (`-v`), um Ordner des echten PCs in den Container einzubinden.",
            "Man kopiert die Daten per Hand.",
            "Man kauft mehr Speicherplatz bei Docker."
          ],
          correct: 1,
          explanation: "Ein Volume verknüpft einen Ordner des echten PCs (Host) mit dem Container. So bleiben Daten (wie Datenbankinhalte) auch nach dem Löschen des Containers erhalten."
        },
        {
          q: "Was bedeutet das Docker-Motto 'Build once, run anywhere'?",
          options: [
            "Man muss ein Programm für jedes Betriebssystem neu schreiben.",
            "Ein einmal gebautes Docker-Image läuft unverändert auf jedem PC oder Server, der Docker installiert hat.",
            "Der Bauprozess dauert immer genau eine Minute.",
            "Docker-Apps funktionieren nur im Flugzeug."
          ],
          correct: 1,
          explanation: "Da das Image alle Software-Teile mitbringt, läuft es überall identisch – egal ob Windows, macOS oder Linux."
        }
      ]
    }
  ]
};
