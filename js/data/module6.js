// ============================================================
// MINT-Games – Modul 6: Suchen, Finden & Urheberrecht
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Informationskompetenz & Urheberrecht
// ============================================================

const MODULE_6 = {
  id: 6,
  title: "Suchen & Urheberrecht",
  icon: "🔍",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Informationskompetenz",
  activities: [

    // ── Aktivität 1: Drag & Drop – Suchoperatoren ──
    {
      id: "m6-a1",
      type: "dragdrop",
      badge: "🎯 Suchoperatoren",
      knowledge: {
        title: "Suchmaschinen clever füttern – Suchoperatoren! 🔍🧠",
        blocks: [
          {
            type: "text",
            content: "Wenn du bei Google einfach nur Wörter eingibst, bekommst du oft Millionen von Treffern. Aber wie findest du genau das, was du suchst? Mit **Suchoperatoren**! Das sind kleine Wörter und Symbole, die deine Suche extrem beschleunigen."
          },
          {
            type: "highlight",
            icon: "⚡",
            title: "Die wichtigsten Helfer für deine Recherche:",
            content: "Mit dem Minuszeichen `-` kannst du unerwünschte Ergebnisse ausschließen. Wenn du nach einem Jaguar (dem Tier) suchst, aber keine Autos willst, tippst du: `Jaguar -Auto`. Genial! 🐆"
          },
          {
            type: "keyterms",
            terms: [
              { term: "AND (und)", icon: "➕", def: "Verbindet Suchbegriffe. Beide Wörter müssen auf der Seite vorkommen. (Beispiel: katze AND hund)" },
              { term: "OR (oder)", icon: "🔀", def: "Mindestens eines der Wörter muss vorkommen. Gut für Synonyme. (Beispiel: handy OR smartphone)" },
              { term: "NOT (nicht)", icon: "➖", def: "Schließt Wörter aus. Oft auch als Minuszeichen geschrieben. (Beispiel: jaguar NOT auto)" },
              { term: "Anführungszeichen \"\"", icon: "🏷️", def: "Sucht nach der exakten Wortfolge. (Beispiel: \"Klimawandel in Österreich\")" },
              { term: "Sternchen *", icon: "⭐", def: "Ein Platzhalter für beliebige Buchstaben oder Wörter. (Beispiel: bundeskanzler * österreich)" }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Probier es aus!",
            content: "Gibst du `\"Österreichische Bundesbahnen\"` in Anführungszeichen ein, zeigt Google nur Ergebnisse, bei denen diese drei Wörter exakt hintereinanderstehen. Ohne Anführungszeichen sucht Google nach 'Österreichische', 'Bundesbahnen' irgendwo auf der Seite! 🚄"
          }
        ]
      },
      question: "Teile die Suchoperatoren in Text-Operatoren und Symbol-Operatoren ein!",
      instruction: "Ziehe die Begriffe in die passende Kategorie.",
      targets: [
        { id: "t-words",   label: "🔤 Text-Operatoren", accepts: ["op_and", "op_or", "op_not"] },
        { id: "t-symbols", label: "✨ Symbol-Operatoren", accepts: ["sym_quotes", "sym_minus", "sym_star"] }
      ],
      items: [
        { id: "op_and",     text: "AND (Verbindet Begriffe)" },
        { id: "op_or",      text: "OR (Synonym-Suche)" },
        { id: "op_not",     text: "NOT (Ausschließen)" },
        { id: "sym_quotes", text: "\" \" (Exakte Wortfolge)" },
        { id: "sym_minus",  text: "- (Begriff ausschließen)" },
        { id: "sym_star",   text: "* (Platzhalter)" }
      ],
      explanation: "Text-Operatoren (AND, OR, NOT) verbinden oder schließen Begriffe logisch aus. Symbole wie \" \", - und * schränken die Suchergebnisse präzise ein."
    },

    // ── Aktivität 2: Matching – Creative Commons Lizenzen ──
    {
      id: "m2-a2", // keep engine matching load key
      type: "matching",
      badge: "🔗 CC-Lizenzen",
      knowledge: {
        title: "Creative Commons (CC) – Bilder & Musik legal nutzen! 🎨🎵",
        blocks: [
          {
            type: "text",
            content: "Wenn jemand ein Foto knipst, ein Lied komponiert oder einen Text schreibt, ist diese Person automatisch der **Urheber**. Niemand darf dieses Werk einfach so kopieren oder auf einer Website veröffentlichen. Aber viele Künstler wollen ihre Werke teilen! Dafür gibt es die **Creative Commons Lizenzen** (kurz CC)."
          },
          {
            type: "highlight",
            icon: "📜",
            title: "Was ist Creative Commons?",
            content: "Das sind standardisierte Verträge. Der Urheber sagt damit im Vorhinein: 'Du darfst mein Bild nutzen, wenn du dich an folgende Regeln hältst!' Diese Regeln werden mit Abkürzungen und Symbolen dargestellt."
          },
          {
            type: "keyterms",
            terms: [
              { term: "BY (Namensnennung)", icon: "👤", def: "Du musst den Namen des Urhebers nennen und die Quelle verlinken." },
              { term: "NC (Nicht-kommerziell)", icon: "🪙", def: "Das Werk darf nicht für kommerzielle Zwecke (Geld verdienen, Werbung) genutzt werden." },
              { term: "ND (Keine Bearbeitung)", icon: "🚫", def: "Du darfst das Werk nutzen, aber absolut nicht verändern oder zerschneiden." },
              { term: "SA (Share Alike / Weitergabe)", icon: "🔄", def: "Wenn du das Werk veränderst, musst du das neue Werk unter derselben Lizenz weitergeben." },
              { term: "CC0 (Gemeinfreiheit)", icon: "🔓", def: "Der Urheber verzichtet auf alle Rechte. Das Werk ist komplett frei für alles!" }
            ]
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "Ein wichtiger Tipp für Referate!",
            content: "Nutze für Präsentationen oder deine Homepage Plattformen mit freien Inhalten (wie Wikipedia Commons, Pixabay oder Unsplash). So vermeidest du teure Urheberrechts-Abmahnungen! 🙅‍♂️"
          }
        ]
      },
      question: "Ordne die Creative-Commons-Symbole und Abkürzungen ihrer richtigen Bedeutung zu!",
      instruction: "Klicke zuerst links auf das CC-Kriterium, dann rechts auf die passende Erklärung.",
      leftItems: [
        { id: "d1", text: "👤 BY (Namensnennung)" },
        { id: "d2", text: "🪙 NC (Nicht-kommerziell)" },
        { id: "d3", text: "🚫 ND (Keine Bearbeitung)" },
        { id: "d4", text: "🔄 SA (Weitergabe unter gleichen Bedingungen)" },
        { id: "d5", text: "🔓 CC0 (Gemeinfreiheit / Public Domain)" }
      ],
      rightItems: [
        { id: "dr1", text: "Der Name des Urhebers muss zwingend angegeben werden.", matches: "d1" },
        { id: "dr2", text: "Das Werk darf nicht für kommerzielle Zwecke oder Werbung genutzt werden.", matches: "d2" },
        { id: "dr3", text: "Das Werk darf nur im Originalzustand verwendet und nicht verändert werden.", matches: "d3" },
        { id: "dr4", text: "Veränderte Versionen müssen unter exakt derselben Lizenz veröffentlicht werden.", matches: "d4" },
        { id: "dr5", text: "Völlig frei nutzbar, keine Namensnennung oder Bedingungen nötig.", matches: "d5" }
      ],
      explanation: "BY verlangt Namensnennung, NC verbietet kommerzielle Nutzung, ND untersagt Bearbeitung, SA fordert die gleiche Lizenz für Abwandlungen, und CC0 ist völlig frei."
    },

    // ── Aktivität 3: Lückentext – Fake News & Quellen ──
    {
      id: "m6-a3",
      type: "fillgaps",
      badge: "✏️ Quellen & Fake News",
      knowledge: {
        title: "Fake News & Quellenprüfung – glaube nicht alles! 🕵️‍♀️📰",
        blocks: [
          {
            type: "text",
            content: "Im Internet kann jeder veröffentlichen, was er möchte. Es gibt keine Kontrollinstanz, die prüft, ob eine Information wahr oder erfunden ist. Deshalb verbreiten sich Lügen und Falschmeldungen – sogenannte **Fake News** – rasend schnell!"
          },
          {
            type: "highlight",
            icon: "🚨",
            title: "Wie erkennst du Fake News?",
            content: "Oft haben sie reißerische Überschriften, die dich wütend oder neugierig machen sollen (Clickbait). Prüfe immer, wer die Nachricht geschrieben hat, woher sie kommt und ob andere bekannte Medien darüber berichten! 📺"
          },
          {
            type: "steps",
            title: "Der Fake-News-Check:",
            steps: [
              { icon: "📖", text: "Prüfe das Impressum der Website (Wer ist verantwortlich?)." },
              { icon: "📍", text: "Vergleiche die Nachricht mit einer Zweitquelle (z.B. ORF, APA, Qualitätszeitungen)." },
              { icon: "📸", text: "Bilder-Rückwärtssuche nutzen (Wurde das Bild manipuliert oder stammt es aus einem alten Kontext?)." }
            ]
          },
          {
            type: "highlight",
            icon: "🇦🇹",
            title: "Die Impressumspflicht in Österreich",
            content: "In Österreich muss jede kommerzielle und journalistische Webseite ein **Impressum** haben. Fehlt es völlig oder stehen dort keine echten Kontaktdaten, ist die Webseite unseriös! ⚠️"
          }
        ]
      },
      question: "Ergänze den Text über Internetrecherche und Glaubwürdigkeit!",
      instruction: "Tippe die passenden Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Absichtliche Falschmeldungen im Internet nennt man " },
        { type: "gap", id: "g1", answer: "fake news", hint: "Englischer Begriff (2 Wörter)" },
        { type: "text", text: ". Um herauszufinden, wer eine Webseite betreibt, wirft man einen Blick in das gesetzlich vorgeschriebene " },
        { type: "gap", id: "g2", answer: "impressum", hint: "Anbieterkennzeichnung" },
        { type: "text", text: ". Informationen aus dem Netz sollte man niemals ungeprüft übernehmen, sondern immer mit einer unabhängigen " },
        { type: "gap", id: "g3", answer: "zweitquelle", hint: "Vergleichsquelle (1 Wort)" },
        { type: "text", text: " vergleichen. Reißerische Überschriften, auch genannt " },
        { type: "gap", id: "g4", answer: "schlagzeilen", hint: "Große Überschriften" },
        { type: "text", text: ", dienen oft als Clickbait. Für eine altersgerechte Recherche eignet sich eine Kindersuchmaschine wie " },
        { type: "gap", id: "g5", answer: "fragfinn", hint: "Bekannte deutsche Kindersuchmaschine (ohne Leerzeichen)" },
        { type: "text", text: "." }
      ],
      explanation: "Fake News sind gezielte Desinformationen. Das Impressum verrät den Betreiber einer Website, Zweitquellen helfen bei der Verifizierung, und Kindersuchmaschinen wie FragFinn bieten Schutz vor ungeeigneten Inhalten."
    },

    // ── Aktivität 4: Drag & Drop – Erlaubt vs. Verboten ──
    {
      id: "m6-a4",
      type: "dragdrop",
      badge: "🎯 Urheberrecht",
      knowledge: {
        title: "Urheberrecht im Alltag – was darf ich, was nicht? ⚖️",
        blocks: [
          {
            type: "text",
            content: "Das Urheberrecht gilt auch für dich persönlich! Es schützt kreative Werke vor Missbrauch. Im Schulalltag oder auf Social Media gerät man schnell in eine rechtliche Falle. Lass uns klären, was erlaubt ist und was verboten. 👮‍♂️"
          },
          {
            type: "comparison",
            title: "Urheberrechtliche Spielregeln:",
            leftTitle: "✅ Erlaubt (Kein Rechtsverstoß)",
            leftContent: [
              "Bilder mit CC0-Lizenz (Gemeinfreiheit) herunterladen und nutzen 🔓",
              "Kurze Textpassagen mit genauer Quellenangabe zitieren 📖",
              "Ein YouTube-Video auf WhatsApp an Freunde verlinken 🔗",
              "Ein gekauftes Lied privat mit der engsten Familie teilen 👥",
              "Gemeinfreie Werke kopieren (deren Urheber seit über 70 Jahren tot ist) 🏛️"
            ],
            rightTitle: "❌ Verboten (Urheberrechtsverletzung!)",
            rightContent: [
              "Fremde Google-Bilder als eigene Postings auf Instagram hochladen 📸",
              "Ein urheberrechtlich geschütztes Lied als Hintergrundmusik im YouTube-Video nutzen 🎵",
              "Kopien von Schulbüchern oder E-Books im Klassenchat verteilen 📚",
              "Einen fremden Text kopieren und als eigene Hausübung abgeben (Plagiat!) 📝",
              "Filme oder Spiele von illegalen Streaming- und Downloadplattformen laden 🖥️"
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Das Zitat-Recht",
            content: "Du darfst fremde Texte in deinem Referat nutzen, wenn du sie als **Zitat** kennzeichnest (in Anführungszeichen setzen) und die Quelle angibst. So zeigst du Respekt vor der Arbeit des Urhebers und machst dich nicht strafbar! 📚"
          }
        ]
      },
      question: "Ordne die Handlungen im Internet ein: Erlaubt oder Verboten?",
      instruction: "Ziehe die Aktionen in die richtige Kategorie.",
      targets: [
        { id: "t-allowed",   label: "✅ Erlaubt (Legal)",   accepts: ["all1", "all2", "all3", "all4"] },
        { id: "t-forbidden", label: "❌ Verboten (Illegal)", accepts: ["forb1", "forb2", "forb3", "forb4"] }
      ],
      items: [
        { id: "all1",  text: "CC0-Fotos für die eigene Website nutzen" },
        { id: "all2",  text: "Einen Satz aus Wikipedia zitieren mit Quelle" },
        { id: "all3",  text: "Ein YouTube-Video an Freunde verlinken" },
        { id: "all4",  text: "Gemeinfreie Musik im Video abspielen" },
        { id: "forb1", text: "Fremde Google-Bilder auf Instagram posten" },
        { id: "forb2", text: "Aktuelle Charthits im YouTube-Video hinterlegen" },
        { id: "forb3", text: "Kopierte E-Books im Klassen-Chat verteilen" },
        { id: "forb4", text: "Wikipedia-Artikel kopieren und als Hausaufgabe abgeben" }
      ],
      explanation: "Zitate mit Quellenangabe, Verlinkungen und CC0/gemeinfreie Medien sind legal. Das ungefragte Posten fremder Bilder/Musik sowie Plagiate verletzen das Urheberrecht."
    },

    // ── Aktivität 5: Sorting – Suchanfrage verfeinern ──
    {
      id: "m6-a5",
      type: "sorting",
      badge: "🔢 Suchstrategie",
      knowledge: {
        title: "Suchstrategie – vom Chaos zur perfekten Information! 🗺️",
        blocks: [
          {
            type: "text",
            content: "Wenn du für ein Biologie-Referat über das Waldsterben recherchierst, solltest du planvoll vorgehen. Eine gute Suchstrategie spart viel Zeit und führt zu verlässlichen Ergebnissen. Lass uns den besten Ablauf ansehen! ⏱️"
          },
          {
            type: "steps",
            title: "Die 5 Schritte einer professionellen Internetrecherche:",
            steps: [
              { icon: "🌎", text: "Starten mit einem breiten Thema (z.B. waldsterben) für einen ersten Überblick." },
              { icon: "🔍", text: "Suchbegriffe präzisieren und einschränken (z.B. waldsterben alpen), um relevantere Treffer zu erhalten." },
              { icon: "✨", text: "Suchoperatoren hinzufügen (z.B. waldsterben alpen -klimawandel), um irrelevante Aspekte gezielt auszublenden." },
              { icon: "📅", text: "Suchfilter anwenden (z.B. nur PDFs oder Ergebnisse der letzten zwei Jahre anzeigen lassen)." },
              { icon: "📖", text: "Quellen verifizieren: Betreiber der Webseite im Impressum prüfen und die Fakten mit einer Zweitquelle abgleichen." }
            ]
          },
          {
            type: "highlight",
            icon: "🧠",
            title: "Warum Filter nutzen?",
            content: "Mit Suchfiltern kannst du z.B. einstellen, dass dir nur Ergebnisse aus Österreich (Seiten auf Deutsch, Region Österreich) oder Bilddateien mit einer bestimmten Nutzungslizenz angezeigt werden. Das spart langes Durchklicken! 🗂️"
          }
        ]
      },
      question: "Bringe die Schritte einer erfolgreichen Such- und Recherchestrategie in die richtige Reihenfolge!",
      instruction: "Sortiere die Schritte von oben nach unten (vom breiten Überblick bis zur geprüften Quelle).",
      correctOrder: ["step1", "step2", "step3", "step4", "step5"],
      items: [
        { id: "step2", text: "🔍 Suchbegriffe verengen und eingrenzen (z.B. waldsterben alpen)" },
        { id: "step4", text: "📅 Filter einstellen (z.B. Dateityp PDF oder Zeitraum einschränken)" },
        { id: "step1", text: "🌎 Allgemeines Thema suchen für einen groben Überblick (z.B. waldsterben)" },
        { id: "step5", text: "📖 Impressum prüfen und Fakten mit einer Zweitquelle absichern" },
        { id: "step3", text: "✨ Suchoperatoren nutzen, um Störbegriffe auszuschließen" }
      ],
      explanation: "Erfolgreiche Recherche: 1. Allgemeiner Überblick → 2. Eingrenzung → 3. Operatoren nutzen → 4. Filter setzen → 5. Quellen und Impressum verifizieren."
    },

    // ── Aktivität 6: Abschlussquiz ──
    {
      id: "m6-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das große Recherche & Urheberrecht Quiz? 📝",
        blocks: [
          {
            type: "text",
            content: "Fantastisch! Du hast dich zum echten Informations- und Rechtsprofi im Netz ausbilden lassen. 🔍 Hier ist dein Spickzettel, bevor du das Abschlussquiz absolvierst:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "➖", title: "NOT / -", text: "Schließt Begriffe aus der Suche aus (z.B. Jaguar -Auto)." },
              { icon: "🏷️", title: "Anführungszeichen", text: "Sucht exakt zusammenhängende Wortfolgen." },
              { icon: "👤", title: "CC-BY", text: "Nutzung erlaubt bei Nennung des Urhebers." },
              { icon: "🪙", title: "CC-NC", text: "Nutzung nur für nicht-kommerzielle Zwecke." },
              { icon: "📖", title: "Impressum", text: "Pflicht in Österreich. Zeigt, wer für die Seite verantwortlich ist." },
              { icon: "🕵️", title: "Fake News", text: "Falschmeldungen. Immer mit Zweitquellen verifizieren!" }
            ]
          },
          {
            type: "highlight",
            icon: "🏆",
            title: "Hol dir dein Abschluss-Zertifikat!",
            content: "Beantworte die 10 Fragen richtig, um dein Zertifikat für 'Recherche & Urheberrecht' herunterzuladen! Los geht's! 🚀"
          }
        ]
      },
      questions: [
        {
          q: "Wie schließt man bei der Google-Suche ein Wort sicher aus?",
          options: [
            "Indem man 'NICHT' dahinter schreibt.",
            "Mit einem Minuszeichen direkt vor dem Wort (z.B. Jaguar -Auto).",
            "Indem man das Wort in Klammern setzt.",
            "Das ist bei Google nicht möglich."
          ],
          correct: 1,
          explanation: "Der Minus-Operator schließt Begriffe aus. Wichtig ist, dass kein Leerzeichen zwischen dem Minus und dem auszuschließenden Wort steht."
        },
        {
          q: "Was bewirken Anführungszeichen bei einem Suchbegriff (z.B. \"Rotes Rathaus\")?",
          options: [
            "Sie markieren den Begriff als wichtig und fett gedruckt.",
            "Sie suchen nach Seiten, die genau diese Wortgruppe in dieser exakten Reihenfolge enthalten.",
            "Sie übersetzen den Begriff in andere Sprachen.",
            "Sie suchen nach Witzen über dieses Thema."
          ],
          correct: 1,
          explanation: "Anführungszeichen erzwingen die Phrasensuche. Google sucht exakt nach der Wortkombination in dieser Reihenfolge."
        },
        {
          q: "Unter welcher Creative Commons Lizenz darfst du ein Bild nutzen, musst aber zwingend den Urheber nennen?",
          options: ["CC-NC", "CC-BY", "CC-ND", "CC-SA"],
          correct: 1,
          explanation: "BY steht für Namensnennung (Attribution). Du musst den Namen des Urhebers und idealerweise die Lizenz nennen."
        },
        {
          q: "Was bedeutet das Kürzel 'NC' bei einer CC-Lizenz?",
          options: [
            "No Copies (Keine Kopien erlaubt)",
            "Non-Commercial (Nicht-kommerzielle Nutzung)",
            "No Changes (Keine Bearbeitung)",
            "Network Connection (Nur online nutzbar)"
          ],
          correct: 1,
          explanation: "NC steht für Non-Commercial (nicht-kommerziell). Das Werk darf nicht für Zwecke genutzt werden, die auf Geldgewinn abzielen."
        },
        {
          q: "Welche CC-Lizenz erlaubt jede Nutzung, sogar ohne Namensnennung?",
          options: ["CC-BY-NC", "CC0 (Gemeinfreiheit)", "CC-BY-ND", "CC-BY-SA"],
          correct: 1,
          explanation: "CC0 (Creative Commons Zero) bedeutet Verzicht auf alle Schutzrechte (Gemeinfreiheit). Das Werk kann völlig frei verwendet werden."
        },
        {
          q: "Welche gesetzliche Pflicht verlangt in Österreich, dass Webseitenbetreiber ihren Namen und Kontakt angeben müssen?",
          options: ["Die Cookie-Richtlinie", "Die Impressumspflicht", "Das Urheberrechtsgesetz", "Das Telekommunikationsgesetz"],
          correct: 1,
          explanation: "Die Impressumspflicht regelt, dass Webseiten ein Impressum mit Anbieterkennzeichnung (Name, Anschrift, E-Mail) bereitstellen müssen."
        },
        {
          q: "Was ist eine gute Methode, um den Wahrheitsgehalt einer Nachricht im Netz zu prüfen?",
          options: [
            "Den Text kopieren und auf WhatsApp teilen.",
            "Die Nachricht mit einer unabhängigen Zweitquelle (z.B. öffentlich-rechtlichen Medien) vergleichen.",
            "Prüfen, ob der Text Emojis enthält.",
            "Glauben, was die meisten Likes hat."
          ],
          correct: 1,
          explanation: "Das Verifizieren von Fakten über eine unabhängige Zweitquelle (Zwei-Quellen-Prinzip) ist die Basis professioneller Recherche."
        },
        {
          q: "Was versteht man unter einem 'Plagiat'?",
          options: [
            "Ein Virus, der den Browser blockiert.",
            "Die unrechtmäßige Übernahme und Veröffentlichung fremder Texte/Ideen als eigene Leistung (Diebstahl geistigen Eigentums).",
            "Eine illegale Film-Streaming-Webseite.",
            "Die Übersetzung eines ausländischen Artikels."
          ],
          correct: 1,
          explanation: "Ein Plagiat liegt vor, wenn man fremdes geistiges Eigentum (Texte, Bilder, Ideen) als das eigene ausgibt, ohne die Quelle zu nennen."
        },
        {
          q: "Was darf man laut Zitat-Recht tun?",
          options: [
            "Ein ganzes Buch kopieren und auf der Schulwebseite veröffentlichen.",
            "Einen kurzen Textabschnitt unverändert übernehmen, in Anführungszeichen setzen und die Quelle genau angeben.",
            "Beliebige Lieder als Hintergrundmusik für Instagram-Reels nutzen.",
            "Das Logo einer bekannten Marke auf T-Shirts drucken und verkaufen."
          ],
          correct: 1,
          explanation: "Das Zitatrecht erlaubt die Übernahme kurzer Ausschnitte zur Veranschaulichung, sofern sie als Zitat gekennzeichnet und mit Quelle versehen sind."
        },
        {
          q: "Welche der folgenden Suchmaschinen wurde speziell für Kinder entwickelt?",
          options: ["Google", "Yahoo", "FragFinn", "Bing"],
          correct: 2,
          explanation: "FragFinn.de ist eine kindersichere Suchmaschine, die nur von Medienpädagogen geprüfte, altersgerechte Webseiten in den Suchergebnissen anzeigt."
        }
      ]
    }
  ]
};
