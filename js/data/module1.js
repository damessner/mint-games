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
