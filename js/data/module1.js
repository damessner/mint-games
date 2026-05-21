// ============================================================
// MINT-Games – Modul 1: Geschichte des Internets
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Orientierung, Information
// ============================================================

const MODULE_1 = {
  id: 1,
  title: "Geschichte des Internets",
  icon: "🌐",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Orientierung & Information",
  activities: [

    // ── Aktivität 1: Timeline / Zeitstrahl ──────────────────
    {
      id: "m1-a1",
      type: "timeline",
      badge: "⏳ Zeitstrahl",
      knowledge: {
        title: "Von ARPANET bis Instagram – die verrückte Geschichte des Internets! 🚀",
        blocks: [
          {
            type: "text",
            content: "Kannst du dir vorstellen, was du ohne Internet machen würdest? Kein YouTube, kein WhatsApp, kein Minecraft-Download… Schaudernd, oder? 😱 Aber das Internet ist noch gar nicht so alt – es wurde Schritt für Schritt erfunden!"
          },
          {
            type: "highlight",
            icon: "🎖️",
            title: "Alles begann im Kalten Krieg…",
            content: "In den 1960er Jahren hatten die USA Angst vor einem Atomangriff der Sowjetunion. Das Militär dachte: Was, wenn unsere Kommunikation ausfällt? So entstand die Idee – ein Netzwerk, das auch dann funktioniert, wenn Teile davon zerstört werden!"
          },
          {
            type: "text",
            content: "1969 war es soweit: Das ARPANET (Advanced Research Projects Agency Network) wurde gestartet. Der erste Computer-zu-Computer-Kontakt war... fast peinlich. Man wollte das Wort 'LOGIN' übertragen – nach 'LO' stürzte das System ab! 💥 Die erste Nachricht im Internet war also: 'LO' 😄"
          },
          {
            type: "keyterms",
            terms: [
              { term: "ARPANET", icon: "🔗", def: "Das erste Computernetzwerk (1969). Vorläufer des Internets, zuerst nur für Militär und Wissenschaft." },
              { term: "WWW", icon: "🕸️", def: "World Wide Web – erfunden 1991 von Tim Berners-Lee. Das ist die Welt der Websites, die wir täglich nutzen." },
              { term: "E-Mail", icon: "📧", def: "Elektronische Post – seit 1971 möglich! Das @ Zeichen kommt daher." },
              { term: "TCP/IP", icon: "📡", def: "Das 'Regelwerk' des Internets seit 1983. Legt fest, wie Datenpakete verschickt werden." },
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Internet ≠ World Wide Web!",
            content: "Viele verwechseln das: Das INTERNET ist wie das Straßennetz (die Infrastruktur). Das WWW ist wie die Autos darauf – eine von vielen Anwendungen. E-Mail, WhatsApp & Co. laufen auch über das Internet, aber sie sind nicht das WWW!"
          },
          {
            type: "timeline-preview",
            events: [
              { year: "1969", icon: "🔗", text: "ARPANET – erstes Netzwerk" },
              { year: "1971", icon: "📧", text: "Erste E-Mail" },
              { year: "1983", icon: "📡", text: "TCP/IP als Standard" },
              { year: "1991", icon: "🕸️", text: "Tim Berners-Lee erfindet das WWW" },
              { year: "1998", icon: "🔍", text: "Google wird gegründet" },
              { year: "2007", icon: "📱", text: "iPhone – mobiles Internet für alle" },
            ]
          }
        ]
      },
      question: "Bringe die wichtigsten Meilensteine des Internets in die richtige Reihenfolge!",
      instruction: "Ziehe die Ereignisse auf das passende Jahr im Zeitstrahl.",
      slots: [
        { year: "1969", correct: "arpanet",     placeholder: "Ereignis ziehen…" },
        { year: "1971", correct: "email",        placeholder: "Ereignis ziehen…" },
        { year: "1983", correct: "tcpip",        placeholder: "Ereignis ziehen…" },
        { year: "1991", correct: "www",          placeholder: "Ereignis ziehen…" },
        { year: "1998", correct: "google",       placeholder: "Ereignis ziehen…" },
        { year: "2007", correct: "smartphone",   placeholder: "Ereignis ziehen…" },
      ],
      items: [
        { id: "arpanet",    text: "🔗 ARPANET – erste Netzwerkverbindung" },
        { id: "email",      text: "📧 Erste E-Mail wird gesendet" },
        { id: "tcpip",      text: "📡 TCP/IP wird Standardprotokoll" },
        { id: "www",        text: "🕸 Tim Berners-Lee erfindet das WWW" },
        { id: "google",     text: "🔍 Google wird gegründet" },
        { id: "smartphone", text: "📱 Erstes iPhone – mobiles Internet" },
      ],
      explanation: "Das Internet entstand schrittweise: Vom militärischen ARPANET (1969) über E-Mail (1971) und TCP/IP (1983) bis zum World Wide Web (1991) und dem mobilen Internet (2007)."
    },

    // ── Aktivität 2: Drag & Drop – Internet vs. WWW ─────────
    {
      id: "m1-a2",
      type: "dragdrop",
      badge: "🎯 Drag & Drop",
      knowledge: {
        title: "Internet vs. WWW – was ist der Unterschied? 🤔",
        blocks: [
          {
            type: "text",
            content: "Hier ist die häufigste Verwechslung in der Digitalwelt – selbst viele Erwachsene machen diesen Fehler! 😅 Wenn du sagst 'ich bin im Internet', meinst du meistens das WWW. Aber das ist nicht dasselbe!"
          },
          {
            type: "comparison",
            left: {
              icon: "🌐",
              title: "Das Internet",
              color: "primary",
              points: [
                "Die physische Infrastruktur (Kabel, Router, Server)",
                "Globales Netzwerk aus Millionen von Computern",
                "Entstand 1969 als ARPANET",
                "Überträgt alle Arten von Daten",
                "Wie das Straßennetz 🛣️"
              ]
            },
            right: {
              icon: "🕸️",
              title: "Das World Wide Web (WWW)",
              color: "secondary",
              points: [
                "Ein Dienst, der über das Internet läuft",
                "Besteht aus Websites und Hyperlinks",
                "Erfunden 1991 von Tim Berners-Lee",
                "Wird mit einem Browser genutzt (Chrome, Safari…)",
                "Wie die Autos auf dem Straßennetz 🚗"
              ]
            }
          },
          {
            type: "highlight",
            icon: "🧠",
            title: "Was läuft noch über das Internet (aber ist NICHT das WWW)?",
            content: "E-Mails 📧 · WhatsApp & Nachrichten 💬 · Online-Gaming 🎮 · Videotelefonie (FaceTime) 📹 · Musik-Streaming (Spotify) 🎵 · Cloud-Dienste (iCloud, Google Drive) ☁️"
          },
          {
            type: "text",
            content: "Tim Berners-Lee war ein britischer Informatiker am CERN (dem berühmten Teilchenbeschleuniger in der Schweiz). Er wollte Dokumente einfach mit Kollegen teilen – so erfand er das WWW. Heute ist es die größte Informationssammlung der Menschheitsgeschichte! 📚"
          }
        ]
      },
      question: "Ordne die Begriffe: Gehört es zum Internet oder zum World Wide Web (WWW)?",
      instruction: "Ziehe jeden Begriff in die richtige Kategorie.",
      targets: [
        { id: "t-internet", label: "🌐 Internet", accepts: ["router", "tcpip2", "kabel", "server"] },
        { id: "t-www",      label: "🕸 World Wide Web", accepts: ["browser", "url", "html", "website"] },
      ],
      items: [
        { id: "router",  text: "Router" },
        { id: "tcpip2",  text: "TCP/IP Protokoll" },
        { id: "kabel",   text: "Glasfaserkabel" },
        { id: "server",  text: "Webserver" },
        { id: "browser", text: "Browser (Chrome, Safari)" },
        { id: "url",     text: "URL / Webadresse" },
        { id: "html",    text: "HTML" },
        { id: "website", text: "Website" },
      ],
      explanation: "Das Internet ist die physische Infrastruktur (Kabel, Router, Protokolle). Das WWW ist eine Anwendung, die auf dem Internet läuft – so wie ein Auto auf einer Straße."
    },

    // ── Aktivität 3: Lückentext – ARPANET ───────────────────
    {
      id: "m1-a3",
      type: "fillgaps",
      badge: "✏️ Lückentext",
      knowledge: {
        title: "Wie funktioniert das Internet eigentlich? 🔧",
        blocks: [
          {
            type: "text",
            content: "Das Internet funktioniert wie ein riesiges Postsystem – nur milliardenfach schneller! Wenn du eine Website öffnest, werden deine Daten in winzig kleine 'Pakete' zerschnitten, durch das Netz geschickt und am Ziel wieder zusammengesetzt. Das ist wie ein Puzzle, das zerlegt und dann wieder aufgebaut wird! 🧩"
          },
          {
            type: "steps",
            title: "Von der Eingabe zur Website – in Millisekunden:",
            steps: [
              { icon: "⌨️", text: "Du tippst 'google.at' in den Browser" },
              { icon: "📖", text: "Der DNS-Server schlägt nach: Was ist die IP-Adresse von google.at?" },
              { icon: "📍", text: "DNS antwortet: google.at = 142.250.185.14" },
              { icon: "🔌", text: "Dein Browser verbindet sich mit diesem Server" },
              { icon: "📥", text: "Der Server schickt die Website als Datenpakete zurück" },
              { icon: "🖥️", text: "Dein Browser setzt die Pakete zusammen und zeigt die Seite an" },
            ]
          },
          {
            type: "keyterms",
            terms: [
              { term: "DNS", icon: "📖", def: "Domain Name System – das 'Telefonbuch' des Internets. Übersetzt Adressen wie 'google.at' in Zahlen-Adressen (IP)." },
              { term: "IP-Adresse", icon: "📍", def: "Eindeutige Nummer eines Geräts im Netz. Beispiel: 192.168.0.1. Jedes Gerät hat eine eigene IP!" },
              { term: "Datenpakete", icon: "📦", def: "Daten werden in kleine Pakete aufgeteilt, einzeln verschickt und am Ziel wieder zusammengesetzt." },
              { term: "CERN", icon: "🔬", def: "Europäisches Forschungszentrum in der Schweiz – dort wurde das WWW erfunden!" },
            ]
          },
          {
            type: "highlight",
            icon: "🤯",
            title: "Unglaubliche Zahlen!",
            content: "Jeden Tag werden über 300 Milliarden E-Mails verschickt 📧 · Das Internet überträgt ca. 5 Millionen Gigabyte pro Minute ⚡ · Es gibt über 1,7 Milliarden Websites 🌍 · YouTube-Nutzer laden täglich 500 Stunden Video pro Minute hoch 🎥"
          }
        ]
      },
      question: "Ergänze den Text über die Entstehung des Internets!",
      instruction: "Tippe die fehlenden Wörter in die Lücken.",
      segments: [
        { type: "text", text: "Das Internet entstand in den " },
        { type: "gap", id: "g1", answer: "1960er", hint: "Jahrzehnt" },
        { type: "text", text: " Jahren. Es begann als militärisches Netzwerk namens " },
        { type: "gap", id: "g2", answer: "ARPANET", hint: "Name des Netzwerks" },
        { type: "text", text: ", das vom amerikanischen Verteidigungsministerium " },
        { type: "gap", id: "g3", answer: "DARPA", hint: "Abkürzung" },
        { type: "text", text: " entwickelt wurde. Das World Wide Web wurde erst " },
        { type: "gap", id: "g4", answer: "1991", hint: "Jahreszahl" },
        { type: "text", text: " von Tim Berners-Lee erfunden. Er arbeitete damals beim Forschungszentrum " },
        { type: "gap", id: "g5", answer: "CERN", hint: "4 Buchstaben" },
        { type: "text", text: " in der Schweiz." },
      ],
      explanation: "ARPANET (1969) war das erste Paketvermittlungsnetzwerk. Das WWW (1991) machte das Internet für alle zugänglich durch Browser und Hyperlinks."
    },

    // ── Aktivität 4: Matching – Erfinder & Erfindungen ──────
    {
      id: "m1-a4",
      type: "matching",
      badge: "🔗 Zuordnung",
      knowledge: {
        title: "Die Helden des Internets – Menschen, die alles veränderten! 🦸",
        blocks: [
          {
            type: "text",
            content: "Das Internet wurde nicht von einer einzigen Person erfunden – es war ein Teamprojekt über Jahrzehnte! Viele kluge Köpfe haben ihren Teil beigetragen. Kennst du ihre Namen? 🤔"
          },
          {
            type: "profiles",
            people: [
              {
                icon: "🇬🇧",
                name: "Tim Berners-Lee",
                year: "1955",
                achievement: "Erfindung des World Wide Web (1991)",
                fact: "Er hat das WWW nicht patentiert – er schenkte es der ganzen Welt kostenlos! 🎁"
              },
              {
                icon: "🇺🇸",
                name: "Vint Cerf & Bob Kahn",
                year: "1970er",
                achievement: "Entwicklung von TCP/IP (1983)",
                fact: "Werden oft als 'Väter des Internets' bezeichnet! 👨‍👦"
              },
              {
                icon: "🇺🇸",
                name: "Ray Tomlinson",
                year: "1971",
                achievement: "Versand der ersten E-Mail",
                fact: "Er wählte das @-Zeichen, weil es auf keinem Vornamen vorkommt. Genial! 📧"
              },
              {
                icon: "🇺🇸",
                name: "Marc Andreessen",
                year: "1993",
                achievement: "Erster weit verbreiteter Webbrowser 'Mosaic'",
                fact: "Dank ihm konnten normale Menschen erstmals das WWW nutzen! 🌐"
              },
              {
                icon: "🇺🇸",
                name: "Larry Page & Sergey Brin",
                year: "1998",
                achievement: "Gründung von Google",
                fact: "Sie entwickelten Google als Uni-Projekt an der Stanford University! 🎓"
              }
            ]
          },
          {
            type: "highlight",
            icon: "🌍",
            title: "Warum ist das wichtig für dich?",
            content: "All diese Personen haben dafür gesorgt, dass du heute Wissen aus der ganzen Welt abrufen, mit Freunden kommunizieren und kreativ sein kannst – von überall auf der Welt. Das Internet ist die größte Erfindung deiner Generation!"
          }
        ]
      },
      question: "Verbinde die Person mit ihrer wichtigen Leistung für das Internet!",
      instruction: "Wähle zuerst eine Person links, dann ihre Leistung rechts.",
      leftItems: [
        { id: "p1", text: "Tim Berners-Lee" },
        { id: "p2", text: "Vint Cerf & Bob Kahn" },
        { id: "p3", text: "Ray Tomlinson" },
        { id: "p4", text: "Marc Andreessen" },
        { id: "p5", text: "Larry Page & Sergey Brin" },
      ],
      rightItems: [
        { id: "r1", text: "Erfindung des World Wide Web (WWW)", matches: "p1" },
        { id: "r2", text: "Entwicklung des TCP/IP-Protokolls", matches: "p2" },
        { id: "r3", text: "Versand der ersten E-Mail", matches: "p3" },
        { id: "r4", text: "Erster Webbrowser 'Mosaic'", matches: "p4" },
        { id: "r5", text: "Gründung von Google", matches: "p5" },
      ],
      explanation: "Viele Pioniere haben das Internet geprägt: Tim Berners-Lee (WWW), Vint Cerf & Bob Kahn (TCP/IP), Ray Tomlinson (E-Mail), Marc Andreessen (Browser) und Larry Page & Sergey Brin (Google)."
    },

    // ── Aktivität 5: Sortierung – Wie funktioniert das Internet? ──
    {
      id: "m1-a5",
      type: "sorting",
      badge: "🔢 Sortierung",
      knowledge: {
        title: "Wie kommt eine Website zu dir – Schritt für Schritt! 🗺️",
        blocks: [
          {
            type: "text",
            content: "Wenn du auf deinem iPad eine URL eingibst und Enter drückst, passieren in weniger als einer Sekunde unglaublich viele Dinge! Das Internet ist wie ein super-schneller Lieferdienst – nur statt Paketen liefert er Webseiten. 📦⚡"
          },
          {
            type: "highlight",
            icon: "📖",
            title: "Was ist eine URL?",
            content: "URL steht für 'Uniform Resource Locator' – also die genaue Adresse einer Ressource im Internet. Zum Beispiel: https://www.schule.at/thema · https = Protokoll (wie der Brief verschickt wird) · www.schule.at = Domainname · /thema = Pfad zur genauen Seite"
          },
          {
            type: "steps",
            title: "Der Weg einer Website-Anfrage:",
            steps: [
              { icon: "⌨️", text: "Du tippst eine Webadresse (URL) in den Browser ein" },
              { icon: "📡", text: "Der Browser fragt beim DNS-Server nach der IP-Adresse" },
              { icon: "📍", text: "DNS übersetzt den Namen in eine Zahlen-Adresse (IP-Adresse)" },
              { icon: "🔌", text: "Der Browser verbindet sich mit dem Webserver über diese IP-Adresse" },
              { icon: "🖥️", text: "Der Browser zeigt die empfangene Website an" },
            ]
          },
          {
            type: "keyterms",
            terms: [
              { term: "Browser", icon: "🌐", def: "Programm zum Anzeigen von Websites. Beispiele: Safari, Chrome, Firefox, Edge" },
              { term: "Webserver", icon: "🖥️", def: "Ein Computer, der Websites speichert und auf Anfrage ausliefert" },
              { term: "Protokoll", icon: "📋", def: "Vereinbarte Regeln für die Kommunikation. HTTP/HTTPS = Regeln für Websites" },
            ]
          },
          {
            type: "highlight",
            icon: "🔒",
            title: "Was bedeutet das Schloss-Symbol in der Adressleiste?",
            content: "Das Schloss 🔒 zeigt: Die Verbindung ist mit HTTPS verschlüsselt. Das heißt, niemand kann 'mithören', was du mit der Website austauschst. Immer auf das Schloss achten – besonders beim Online-Shopping oder Login!"
          }
        ]
      },
      question: "In welcher Reihenfolge passiert das, wenn du eine Website öffnest?",
      instruction: "Ziehe die Schritte in die richtige Reihenfolge von oben nach unten.",
      correctOrder: ["step1", "step2", "step3", "step4", "step5"],
      items: [
        { id: "step3", text: "📍 DNS übersetzt den Namen in eine IP-Adresse" },
        { id: "step1", text: "⌨️ Du tippst eine Webadresse (URL) in den Browser" },
        { id: "step5", text: "🖥 Der Browser zeigt die Website an" },
        { id: "step2", text: "📡 Der Browser fragt beim DNS-Server nach" },
        { id: "step4", text: "🔌 Der Browser verbindet sich mit dem Webserver und lädt die Seite" },
      ],
      explanation: "So funktioniert das Internet: URL eingeben → DNS-Anfrage → DNS gibt IP-Adresse zurück → Verbindung mit Webserver → Website wird geladen und angezeigt."
    },

    // ── Aktivität 6: Abschluss-Quiz ─────────────────────────
    {
      id: "m1-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Abschlussquiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Wow, du hast dieses Modul fast geschafft! 🎉 Bevor du das Abschlussquiz startest, hier noch einmal das Wichtigste auf einen Blick. Nach dem Quiz bekommst du dein persönliches Zertifikat!"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🔗", title: "ARPANET", text: "Erstes Netzwerk, 1969, USA, militärisch" },
              { icon: "📧", title: "E-Mail", text: "1971, Ray Tomlinson, @-Zeichen" },
              { icon: "📡", title: "TCP/IP", text: "1983, Regelwerk des Internets" },
              { icon: "🕸️", title: "WWW", text: "1991, Tim Berners-Lee, CERN Schweiz" },
              { icon: "🔍", title: "Google", text: "1998, Page & Brin, Stanford Uni" },
              { icon: "📱", title: "Mobiles Web", text: "2007, iPhone, Internet überall" },
            ]
          },
          {
            type: "highlight",
            icon: "🏆",
            title: "Dein Quiz wartet!",
            content: "10 Fragen · Pro Frage gibt es 1 Punkt · Du siehst nach jeder Frage, ob du richtig lagst · Am Ende gibt es ein Zertifikat mit deinem Namen!\n\nViel Erfolg! 🍀"
          }
        ]
      },
      questions: [
        {
          q: "In welchem Jahr wurde das ARPANET, der Vorläufer des Internets, gegründet?",
          options: ["1955", "1969", "1983", "1991"],
          correct: 1,
          explanation: "Das ARPANET wurde 1969 gegründet, als die erste Verbindung zwischen der UCLA und dem Stanford Research Institute hergestellt wurde."
        },
        {
          q: "Wer hat das World Wide Web (WWW) erfunden?",
          options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
          correct: 2,
          explanation: "Tim Berners-Lee erfand das WWW 1991 während seiner Arbeit am CERN in Genf, Schweiz."
        },
        {
          q: "Was ist der Unterschied zwischen Internet und WWW?",
          options: [
            "Es gibt keinen Unterschied, beides bedeutet dasselbe",
            "Das Internet ist die Infrastruktur, das WWW ist eine Anwendung darauf",
            "Das WWW ist älter als das Internet",
            "Das Internet funktioniert nur mit einem Browser"
          ],
          correct: 1,
          explanation: "Das Internet ist die globale Netzwerkinfrastruktur (Kabel, Router, Protokolle). Das WWW ist nur eine von vielen Anwendungen, die auf dem Internet laufen."
        },
        {
          q: "Wofür steht die Abkürzung 'TCP/IP'?",
          options: [
            "Technical Computer Protocol / Internet Process",
            "Transmission Control Protocol / Internet Protocol",
            "Transfer Communication Program / Internal Protocol",
            "Technology Connection Protocol / IP-Address"
          ],
          correct: 1,
          explanation: "TCP/IP steht für Transmission Control Protocol / Internet Protocol. Es ist das grundlegende Kommunikationsprotokoll des Internets."
        },
        {
          q: "Was macht ein DNS-Server?",
          options: [
            "Er speichert alle Websites der Welt",
            "Er schützt vor Viren",
            "Er übersetzt Domainnamen (z.B. google.at) in IP-Adressen",
            "Er verwaltet E-Mails"
          ],
          correct: 2,
          explanation: "DNS (Domain Name System) ist wie ein Telefonbuch des Internets – es übersetzt lesbare Adressen wie 'google.at' in numerische IP-Adressen wie '142.250.185.14'."
        },
        {
          q: "Wer hat im Jahr 1971 die erste E-Mail gesendet?",
          options: ["Tim Berners-Lee", "Ray Tomlinson", "Vint Cerf", "Bill Gates"],
          correct: 1,
          explanation: "Ray Tomlinson sendete 1971 die erste E-Mail und führte das @-Zeichen ein, um Benutzer von Computern zu trennen."
        },
        {
          q: "Was versteht man unter 'Web 2.0'?",
          options: [
            "Eine neue Version des Browsers",
            "Das Internet der 1970er Jahre",
            "Interaktive Websites, auf denen Nutzer selbst Inhalte erstellen (z.B. soziale Medien)",
            "Ein schnelleres Internetprotokoll"
          ],
          correct: 2,
          explanation: "Web 2.0 bezeichnet die Phase ab ca. 2004, in der das Internet interaktiv wurde: Nutzer können selbst Inhalte erstellen (YouTube, Wikipedia, soziale Medien)."
        },
        {
          q: "Welches Protokoll sichert eine Verbindung zu einer Website (erkennbar an 'https://')?",
          options: ["HTTP", "FTP", "TLS/SSL (HTTPS)", "DNS"],
          correct: 2,
          explanation: "HTTPS verwendet TLS/SSL-Verschlüsselung. Das Schloss-Symbol im Browser zeigt an, dass die Verbindung sicher und verschlüsselt ist."
        },
        {
          q: "Was ist eine IP-Adresse?",
          options: [
            "Der Name einer Website",
            "Eine eindeutige Zahlenkombination, die ein Gerät im Netzwerk identifiziert",
            "Das Passwort für das WLAN",
            "Die Geschwindigkeit des Internets"
          ],
          correct: 1,
          explanation: "Eine IP-Adresse (z.B. 192.168.1.1) ist die eindeutige Adresse eines Geräts im Netzwerk – so wie eine Postadresse für Computer."
        },
        {
          q: "In welchem Land wurde das CERN gegründet, wo Tim Berners-Lee das WWW erfand?",
          options: ["USA", "Deutschland", "Schweiz", "Großbritannien"],
          correct: 2,
          explanation: "Das CERN liegt in Genf, Schweiz (und Frankreich). Tim Berners-Lee entwickelte dort das WWW ursprünglich, um Dokumente zwischen Wissenschaftlern zu teilen."
        },
      ]
    }
  ]
};
