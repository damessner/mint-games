// ============================================================
// MINT-Games – Modul 10: Firewall-Regeln
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Netzwerke, Sicherheit & Datenschutz
// ============================================================

const MODULE_10 = {
  id: 10,
  title: "Firewall-Regeln",
  icon: "🛡️",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Netzwerke & Sicherheit",
  activities: [

    // ── Aktivität 1: Drag & Drop – Türsteher-Aktionen ──────────────────
    {
      id: "m10-a1",
      type: "dragdrop",
      badge: "🎯 Der Türsteher",
      knowledge: {
        title: "Was ist eine Firewall? 🛡️",
        blocks: [
          {
            type: "text",
            content: "Stell dir eine Firewall wie einen strengen Türsteher vor einer exklusiven Club-Tür vor. Der Club ist dein internes Netzwerk (z.B. deine Schule oder dein Heimnetzwerk), die Straße davor das unsichere Internet."
          },
          {
            type: "highlight",
            icon: "🧱",
            title: "Schutz durch Filterung",
            content: "Jedes Datenpaket, das ins Netzwerk rein- oder rausgehen will, muss am Türsteher vorbei. Der Türsteher prüft anhand einer **Gästeliste** (den Firewall-Regeln), ob das Paket passieren darf (ALLOW) oder abgewiesen wird (BLOCK/DENY)."
          },
          {
            type: "keyterms",
            terms: [
              { term: "ALLOW / PASS", icon: "🟢", def: "Das Datenpaket darf passieren. Die Verbindung wird hergestellt." },
              { term: "BLOCK / DENY", icon: "🔴", def: "Das Datenpaket wird abgewiesen. Der Sender erhält eine Benachrichtigung über die Blockade." },
              { term: "DROP", icon: "🌑", def: "Das Datenpaket wird einfach ignoriert und heimlich weggeworfen. Der Sender merkt nichts und wartet vergeblich auf Antwort (besonders sicher gegen Angreifer)." }
            ]
          }
        ]
      },
      question: "Teile die Netzwerk-Szenarien den richtigen Firewall-Entscheidungen zu!",
      instruction: "Ziehe die Beispiele in die passende Kategorie.",
      targets: [
        { id: "t-allow", label: "🟢 Erlauben (Allow)",    accepts: ["a_web", "a_dns", "a_admin"] },
        { id: "t-block", label: "🔴 Blockieren (Block/Drop)", accepts: ["b_virus", "b_hack", "b_games"] }
      ],
      items: [
        { id: "a_web",   text: "Schüler ruft Lernseite (HTTPS Port 443) auf" },
        { id: "a_dns",   text: "Computer fragt DNS-Server nach einer IP-Adresse" },
        { id: "a_admin", text: "IT-Lehrer verbindet sich zur Fernwartung (SSH Port 22)" },
        { id: "b_virus", text: "Computer versucht Schadsoftware von Viren-Server zu laden" },
        { id: "b_hack",  text: "Fremder PC aus dem Internet klopft an die Datenbank an" },
        { id: "b_games", text: "Schüler versucht in der Mathe-Stunde Online-Games zu zocken" }
      ],
      explanation: "Nützlicher, bekannter Verkehr (wie Webseiten-Aufrufe oder DNS) wird erlaubt. Gefährlicher Verkehr (Angriffe, Viren) oder unerwünschte Dienste werden blockiert."
    },

    // ── Aktivität 2: Lückentext – Aufbau einer Firewall-Regel ──────────
    {
      id: "m10-a2",
      type: "fillgaps",
      badge: "✏️ Regel-Aufbau",
      knowledge: {
        title: "Wie sieht eine Firewall-Regel aus? 📝",
        blocks: [
          {
            type: "text",
            content: "Damit eine Firewall weiß, was sie tun soll, müssen wir ihr ganz genaue Befehle geben. Eine Regel besteht aus Kriterien (Wer? Wohin? Wie?) und einer Aktion."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Source IP (Quell-IP)", icon: "📍", def: "Die IP-Adresse des Absenders (wer schickt das Paket?)." },
              { term: "Destination IP (Ziel-IP)", icon: "🎯", def: "Die IP-Adresse des Empfängers (wohin soll es gehen?)." },
              { term: "Protocol", icon: "🛣️", def: "Die Sprache, z.B. TCP (sichere Übertragung für Webseiten) oder UDP (schnell, z.B. für DNS)." },
              { term: "Destination Port", icon: "🔌", def: "Die Portnummer, die für einen bestimmten Dienst steht (z.B. Port 80 für HTTP)." },
              { term: "Action", icon: "👑", def: "Was passiert, wenn die Regel zutrifft? (ALLOW, DENY, DROP)." }
            ]
          }
        ]
      },
      question: "Fülle die Lücken aus, um die Bestandteile einer Firewall-Regel zu beschreiben!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Jede Regel prüft den Absender anhand der " },
        { type: "gap", id: "g1", answer: "source ip", hint: "Quell-IP-Adresse auf Englisch (2 Wörter)" },
        { type: "text", text: " und den Empfänger über die " },
        { type: "gap", id: "g2", answer: "destination ip", hint: "Ziel-IP-Adresse auf Englisch (2 Wörter)" },
        { type: "text", text: ". Zudem wird das verwendete Transportverfahren, genannt " },
        { type: "gap", id: "g3", answer: "protocol", hint: "z.B. TCP oder UDP (Englisch)" },
        { type: "text", text: ", kontrolliert. Um den genauen Dienst (z.B. unverschlüsseltes Web) zu bestimmen, filtert man nach der Nummer des " },
        { type: "gap", id: "g4", answer: "port", hint: "z.B. Port 80" },
        { type: "text", text: ". Trifft diese Kombination zu, führt die Firewall die festgelegte " },
        { type: "gap", id: "g5", answer: "action", hint: "Aktion (Englisch, z.B. ALLOW/DENY)" },
        { type: "text", text: " aus." }
      ],
      explanation: "Eine Firewall-Regel setzt sich aus Source IP, Destination IP, Protocol, Port und der auszuführenden Action zusammen."
    },

    // ── Aktivität 3: Zuordnung – Bekannte Netzwerkports ───────────────
    {
      id: "m10-a3",
      type: "matching",
      badge: "🔗 Standardports",
      knowledge: {
        title: "Netzwerkports: Die Hausnummern der Dienste 🔌",
        blocks: [
          {
            type: "text",
            content: "Wenn ein Datenpaket an einer IP-Adresse ankommt, weiß der Server noch nicht, für welches Programm es bestimmt ist. Dafür gibt es **Ports**! Sie sind wie Hausnummern auf einem Briefpapier."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Port 80 (HTTP)", icon: "🌐", def: "Unverschlüsseltes Surfen im Web. Heutzutage kaum noch genutzt." },
              { term: "Port 443 (HTTPS)", icon: "🔒", def: "Verschlüsseltes, sicheres Surfen im Internet (z.B. Online-Banking, Schulportal)." },
              { term: "Port 22 (SSH)", icon: "⌨️", def: "Sichere Textverbindung für IT-Administratoren, um Server aus der Ferne zu steuern." },
              { term: "Port 53 (DNS)", icon: "🗺️", def: "Namensauflösung: Wandelt lesbare Adressen (www.schule.at) in IP-Adressen um." },
              { term: "Port 21 (FTP)", icon: "📁", def: "Dateitransfer: Zum Hoch- und Herunterladen von Dateien auf Server." }
            ]
          }
        ]
      },
      question: "Verbinde die Netzwerk-Ports mit ihrem dazugehörigen Dienst!",
      instruction: "Wähle links die Portnummer und rechts den passenden Dienst.",
      leftItems: [
        { id: "p1", text: "Port 80" },
        { id: "p2", text: "Port 443" },
        { id: "p3", text: "Port 22" },
        { id: "p4", text: "Port 53" },
        { id: "p5", text: "Port 21" }
      ],
      rightItems: [
        { id: "pr1", text: "HTTP (Unverschlüsselte Webseiten)", matches: "p1" },
        { id: "pr2", text: "HTTPS (Sichere Webseiten-Verschlüsselung)", matches: "p2" },
        { id: "pr3", text: "SSH (Konsolen-Fernwartung)", matches: "p3" },
        { id: "pr4", text: "DNS (Namensübersetzung des Internets)", matches: "p4" },
        { id: "pr5", text: "FTP (Dateitransfer-Protokoll)", matches: "p5" }
      ],
      explanation: "Ports ordnen Datenpakete Programmen zu. Port 80 (HTTP) und 443 (HTTPS) sind fürs Surfen da, 22 für Admins (SSH), 53 für Namen (DNS) und 21 für Dateien (FTP)."
    },

    // ── Aktivität 4: Sortierung – Reihenfolge der Regeln ────────────
    {
      id: "m10-a4",
      type: "sorting",
      badge: "🔢 Regel-Priorität",
      knowledge: {
        title: "Die Reihenfolge entscheidet! 🪜",
        blocks: [
          {
            type: "text",
            content: "Eine Firewall liest Regeln wie ein Rezeptbuch: von oben nach unten (First-Match-Prinzip). Sobald eine Zeile auf das Paket passt, wird diese ausgeführt. Die Suche stoppt sofort! Alles, was darunter steht, wird ignoriert."
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "Das 'Implicit Deny'-Prinzip",
            content: "Ganz unten auf der Liste steht immer eine unsichtbare, geheime Standardregel: **Alles andere blockieren**! Wenn kein einziges Kriterium weiter oben gepasst hat, wird das Paket abgewiesen. Das nennt man 'Default Deny'."
          },
          {
            type: "steps",
            title: "Beispiel-Ablauf an der Firewall:",
            steps: [
              { icon: "📦 1. Paket kommt", text: "Ein Paket kommt an (z.B. von IP 10.0.0.5 an Port 80)." },
              { icon: "🪜 2. Regel 1 prüfen", text: "Steht ganz oben: 'Erlaube IP 10.0.0.5 Zugriff auf Port 80'? Ja!" },
              { icon: "🟢 3. Aktion ausführen", text: "Paket wird durchgelassen (ALLOW) und die Prüfung ist beendet." },
              { icon: "🛑 4. Stopp!", text: "Folgende Verbots-Regeln in Zeile 2 und 3 werden gar nicht mehr angeschaut." }
            ]
          }
        ]
      },
      question: "Bringe die Schritte der Regelauswertung bei einer Firewall in die richtige Reihenfolge!",
      instruction: "Sortiere die Schritte vom Eintreffen des Pakets (Schritt 1) bis zur Standardentscheidung (Schritt 5).",
      correctOrder: ["s_arrive", "s_top", "s_match", "s_next", "s_deny"],
      items: [
        { id: "s_top",    text: "Die Firewall liest die oberste Regel (Regel 1) der Tabelle aus" },
        { id: "s_deny",   text: "Trifft gar nichts zu, greift ganz unten das 'Implicit Deny' (Blockieren)" },
        { id: "s_arrive", text: "Ein Datenpaket trifft an der Firewall-Schnittstelle ein" },
        { id: "s_match",  text: "Falls die Regel passt: Wende Aktion (Allow/Block) an und brich die Suche ab" },
        { id: "s_next",   text: "Falls die Regel nicht passt: Springe zur nächsten Zeile darunter" }
      ],
      explanation: "Eine Firewall prüft Pakete sequenziell von oben nach unten. Die erste passende Regel gewinnt (First Match). Passt keine, greift die Standard-Blockierung (Implicit Deny) ganz unten."
    },

    // ── Aktivität 5: Drag & Drop – Inbound vs. Outbound ──────────────
    {
      id: "m10-a5",
      type: "dragdrop",
      badge: "🎯 Verkehrsrichtung",
      knowledge: {
        title: "Rein oder Raus? Inbound vs. Outbound 🔄",
        blocks: [
          {
            type: "text",
            content: "Datenverkehr hat immer eine Richtung. Firewalls unterscheiden streng danach, um das Netzwerk optimal abzusichern."
          },
          {
            type: "comparison",
            left: {
              icon: "📥",
              title: "Eingehend (Inbound)",
              color: "primary",
              points: [
                "Verbindungen, die von AUSSEN nach INNEN gestartet werden",
                "Beispiel: Jemand ruft unseren Webserver auf",
                "Sehr gefährlich: Muss extrem streng gefiltert werden",
                "Standardmäßig fast komplett gesperrt"
              ]
            },
            right: {
              icon: "📤",
              title: "Ausgehend (Outbound)",
              color: "secondary",
              points: [
                "Verbindungen, die von INNEN nach AUSSEN gestartet werden",
                "Beispiel: Schüler surft im Unterricht auf Google",
                "Weniger gefährlich, da selbst gestartet",
                "Standardmäßig meist großzügig erlaubt"
              ]
            }
          }
        ]
      },
      question: "Teile die Szenarien der richtigen Richtung des Datenverkehrs zu!",
      instruction: "Ziehe die Szenarien in die passende Kategorie.",
      targets: [
        { id: "t-in",  label: "📥 Eingehender Verkehr (Inbound)", accepts: ["in_web", "in_hacker", "in_ping"] },
        { id: "t-out", label: "📤 Ausgehender Verkehr (Outbound)", accepts: ["out_surf", "out_mail", "out_update"] }
      ],
      items: [
        { id: "in_web",     text: "Ein externer Webseiten-Besucher ruft unseren Server auf" },
        { id: "in_hacker",  text: "Ein Angreifer versucht eine Verbindung zur Datenbank aufzubauen" },
        { id: "in_ping",    text: "Ein externer Ping-Test prüft die Erreichbarkeit des Servers" },
        { id: "out_surf",   text: "Ein Schüler im Schulnetzwerk öffnet die Wikipedia-Webseite" },
        { id: "out_mail",   text: "Das Lehrerzimmer-Outlook sendet eine E-Mail ins Internet" },
        { id: "out_update", text: "Unser lokaler Windows-PC sucht nach Updates bei Microsoft" }
      ],
      explanation: "Inbound-Verbindungen kommen von außen herein (hohes Risiko, streng blockiert). Outbound-Verbindungen starten im inneren Netzwerk nach außen (meist erlaubt)."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m10-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Firewall-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Klasse Arbeit! Du weißt jetzt, wie Firewalls Netzwerke sichern. Hier ist deine Zusammenfassung vor dem Quiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🧱", title: "Firewall", text: "Filtert Datenpakete wie ein Türsteher" },
              { icon: "🟢", title: "Allow", text: "Erlaubt den Durchgang des Pakets" },
              { icon: "🔴", title: "Block / Drop", text: "Weist Pakete ab oder ignoriert sie" },
              { icon: "🔌", title: "Port 443", text: "HTTPS - Sicher verschlüsseltes Surfen" },
              { icon: "🪜", title: "Reihenfolge", text: "Regeln werden von oben nach unten geprüft" },
              { icon: "🛑", title: "Implicit Deny", text: "Standardregel: Alles andere sperren!" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Mit welcher Alltagssituation kann man eine Firewall am besten vergleichen?",
          options: [
            "Mit einem Staubsauger, der Staub aufsaugt.",
            "Mit einem Türsteher vor einer Club-Tür, der eine Gästeliste kontrolliert.",
            "Mit einem Postboten, der Briefe austrägt.",
            "Mit einer Ampel an einer Straßenkreuzung."
          ],
          correct: 1,
          explanation: "Eine Firewall prüft jedes ankommende Paket anhand von vordefinierten Regeln (Gästeliste) und entscheidet, wer rein darf."
        },
        {
          q: "Was unterscheidet die Firewall-Aktion 'DROP' von 'BLOCK/DENY'?",
          options: [
            "DROP lässt das Paket ohne Prüfung durch.",
            "DROP wirft das Paket heimlich weg, ohne dem Absender zu antworten, während BLOCK eine Fehlermeldung zurückschickt.",
            "DROP schaltet den Server aus.",
            "Es gibt keinen Unterschied."
          ],
          correct: 1,
          explanation: "Mit `DROP` verpufft das Paket im Nichts. Angreifer müssen dadurch lange warten (Timeout) und erfahren nicht einmal, ob die IP-Adresse überhaupt existiert."
        },
        {
          q: "Welche IP-Adresse beschreibt den Absender eines Datenpakets?",
          options: ["Destination IP", "Host IP", "Source IP (Quell-IP)", "Gateway IP"],
          correct: 2,
          explanation: "`Source` bedeutet Quelle oder Ursprung. Die Source IP zeigt an, woher das Paket stammt."
        },
        {
          q: "Welche Portnummer nutzt das sichere, verschlüsselte Surfen im Web (HTTPS)?",
          options: ["Port 80", "Port 22", "Port 53", "Port 443"],
          correct: 3,
          explanation: "Während Port 80 für unsicheres HTTP steht, nutzt sicheres Web-Traffic standardmäßig Port 443 (HTTPS)."
        },
        {
          q: "Wofür wird Port 53 im Internet zwingend benötigt?",
          options: [
            "Für den Dateitransfer über FTP",
            "Für den DNS-Dienst (Übersetzung von Web-Namen in IP-Adressen)",
            "Zum Empfangen von E-Mails",
            "Für die sichere Shell-Verbindung"
          ],
          correct: 1,
          explanation: "DNS (Domain Name System) läuft über Port 53. Ohne diesen könnten wir Adressen wie google.com nicht auflösen."
        },
        {
          q: "In welcher Reihenfolge prüft eine Firewall ihre Regeltabelle?",
          options: [
            "Völlig zufällig (Random-Prinzip)",
            "Strikte Auswertung von oben nach unten (First-Match)",
            "Von der wichtigsten zur unwichtigsten Regel",
            "Von unten nach oben"
          ],
          correct: 1,
          explanation: "Regeln werden starr zeilenweise von oben nach unten geprüft. Sobald eine Regel passt, bricht die Prüfung ab."
        },
        {
          q: "Was bedeutet das Prinzip des 'Implicit Deny' (Default Deny)?",
          options: [
            "Alles, was nicht ausdrücklich in den Regeln erlaubt wurde, wird automatisch blockiert.",
            "Alle Webseiten sind standardmäßig erlaubt.",
            "Die Firewall schaltet sich bei Überlastung ab.",
            "Der Administrator darf alles."
          ],
          correct: 0,
          explanation: "Dies ist das wichtigste Sicherheitsprinzip: Nur explizit erlaubte Dinge dürfen passieren. Alles Unbekannte wird gesperrt."
        },
        {
          q: "Welche Richtung hat eine Verbindung, wenn ein Schüler im Unterricht google.at aufruft?",
          options: ["Inbound (Eingehend)", "Outbound (Ausgehend)", "Loopback (Rundlauf)", "Static (Statisch)"],
          correct: 1,
          explanation: "Die Verbindung startet im internen Schulnetzwerk und geht nach draußen ins Internet – sie ist somit ausgehend (outbound)."
        },
        {
          q: "Warum ist eingehender Datenverkehr (Inbound) standardmäßig fast komplett gesperrt?",
          options: [
            "Weil sonst die Computer überhitzen.",
            "Weil es die Internetleitung verlangsamt.",
            "Um zu verhindern, dass Angreifer unbefugt von außen in das interne Netzwerk eindringen.",
            "Weil das Schulgesetz es vorschreibt."
          ],
          correct: 2,
          explanation: "Wenn Verbindungsanfragen von außen ungehindert hineindürften, könnten Hacker Sicherheitslücken in Geräten direkt ausnutzen."
        },
        {
          q: "Welcher Port wird für die sichere Fernwartung (SSH) von Linux-Servern verwendet?",
          options: ["Port 21", "Port 22", "Port 80", "Port 443"],
          correct: 1,
          explanation: "Port 22 ist für SSH reserviert und ermöglicht Admins den sicheren, verschlüsselten Zugriff auf die Kommandozeile eines Servers."
        }
      ]
    }
  ]
};
