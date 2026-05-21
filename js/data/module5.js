// ============================================================
// MINT-Games – Modul 5: Sicherheit, Datenschutz & Cybermobbing
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Sicherheit
// ============================================================

const MODULE_5 = {
  id: 5,
  title: "Sicherheit & Cybermobbing",
  icon: "🔒",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Sicherheit",
  activities: [

    // ── Aktivität 1: Drag & Drop – Sichere vs. unsichere Passwörter ──
    {
      id: "m5-a1",
      type: "dragdrop",
      badge: "🎯 Passwörter",
      knowledge: {
        title: "Passwort-Sicherheit – wie schützt du deine Accounts? 🔑",
        blocks: [
          {
            type: "text",
            content: "Ob TikTok, Discord, Minecraft oder Schul-Account – fast alles im Internet ist mit einem Passwort geschützt. Aber wusstest du, dass viele Passwörter von Computern in weniger als einer Sekunde geknackt werden können? 😱"
          },
          {
            type: "highlight",
            icon: "🚨",
            title: "Die Lieblings-Passwörter der Österreicher…",
            content: "Leider nutzen viele Menschen immer noch superleichte Passwörter wie '123456', 'passwort' oder ihren eigenen Vornamen mit dem Geburtsjahr. Für Hacker ist das ein Kinderspiel! 🎮"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Länge", icon: "📏", def: "Ein sicheres Passwort sollte mindestens 12 Zeichen lang sein – je länger, desto besser!" },
              { term: "Zeichenmix", icon: "🔣", def: "Verwende Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen (wie !, ?, #, _)." },
              { term: "Keine Muster", icon: "❌", def: "Vermeide Tastaturmuster wie 'qwertz' oder einfache Reihenfolgen wie '12345'." },
              { term: "Individuell", icon: "🔑", def: "Nutze niemals dasselbe Passwort für mehrere Accounts!" }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Ein genialer Trick: Der Passwort-Satz!",
            content: "Wie merkt man sich ein langes Passwort? Denk dir einen Satz aus, den du dir leicht merken kannst. Zum Beispiel: 'Ich spiele jeden Dienstag mit meinen 3 Freunden Minecraft!'\n\nNimm nun die Anfangsbuchstaben und Zahlen: **IsjDmm3FM!** – Schon hast du ein super sicheres Passwort! 🧠"
          }
        ]
      },
      question: "Welche Passwörter sind sicher und welche unsicher?",
      instruction: "Ziehe die Passwörter in die richtige Kategorie.",
      targets: [
        { id: "t-secure",   label: "🔒 Sichere Passwörter",   accepts: ["sec1", "sec2", "sec3", "sec4"] },
        { id: "t-insecure", label: "⚠️ Unsichere Passwörter", accepts: ["insec1", "insec2", "insec3", "insec4"] }
      ],
      items: [
        { id: "sec1",   text: "IsjDmm3FM!" },
        { id: "sec2",   text: "P@ssw0rt_2026!" },
        { id: "sec3",   text: "M1n3cr@ft_F@n#99" },
        { id: "sec4",   text: "Sonne_Mond_2026!" },
        { id: "insec1", text: "12345678" },
        { id: "insec2", text: "passwort" },
        { id: "insec3", text: "Tobias2012" },
        { id: "insec4", text: "qwertz" }
      ],
      explanation: "Sichere Passwörter nutzen mindestens 12 Zeichen, Groß-/Kleinschreibung, Sonderzeichen und Zahlen, ohne einfache Wörter oder Tastaturmuster zu verwenden."
    },

    // ── Aktivität 2: Matching – Cybermobbing Begriffe und Reaktionen ──
    {
      id: "m5-a2",
      type: "matching",
      badge: "🔗 Cybermobbing",
      knowledge: {
        title: "Netiquette & Cybermobbing – stopp den Hass im Netz! 🚫",
        blocks: [
          {
            type: "text",
            content: "Im Internet verhalten sich manche Menschen gemeiner als im echten Leben. Das liegt daran, dass sie hinter einem Bildschirm sitzen und die Reaktion der anderen Person nicht direkt sehen. Wenn im Internet systematisch geärgert, beleidigt oder ausgeschlossen wird, nennt man das **Cybermobbing**."
          },
          {
            type: "highlight",
            icon: "📢",
            title: "Die Netiquette – die Anstandsregeln im Netz",
            content: "Behandle andere im Internet immer so, wie du selbst behandelt werden möchtest! Höflichkeit, Respekt und Toleranz gelten in Chats genauso wie auf dem Schulhof. 🤝"
          },
          {
            type: "steps",
            title: "Was tun bei Cybermobbing? (Die 3 wichtigsten Schritte):",
            steps: [
              { icon: "🔇", text: "Nicht antworten und den Angreifer sofort blockieren." },
              { icon: "📸", text: "Beweise sichern! Mach Screenshots von den Nachrichten oder Kommentaren." },
              { icon: "🗣️", text: "Hol Hilfe! Sprich mit deinen Eltern, Lehrkräften oder vertrauenswürdigen Erwachsenen." }
            ]
          },
          {
            type: "highlight",
            icon: "🧠",
            title: "Es ist kein Spaß!",
            content: "Cybermobbing kann Betroffene sehr traurig machen. Schau nicht weg, wenn jemand in einem Klassenchat gemobbt wird – steh der Person bei oder melde es einer Lehrkraft! ✊"
          }
        ]
      },
      question: "Verbinde die Begriffe rund um Cybermobbing mit der richtigen Beschreibung oder Gegenmaßnahme!",
      instruction: "Klicke zuerst links auf einen Begriff, dann rechts auf die passende Beschreibung.",
      leftItems: [
        { id: "d1", text: "🚫 Cybermobbing" },
        { id: "d2", text: "💬 Flaming" },
        { id: "d3", text: "🚷 Ausgrenzung" },
        { id: "d4", text: "🔒 Blockieren" },
        { id: "d5", text: "📸 Beweise sichern" }
      ],
      rightItems: [
        { id: "dr1", text: "Absichtliches und wiederholtes Beleidigen oder Bedrohen im digitalen Raum.", matches: "d1" },
        { id: "dr2", text: "Hitziges, aggressives Beschimpfen in Chats oder Kommentarspalten.", matches: "d2" },
        { id: "dr3", text: "Systematisches Ausschließen einer Person aus Klassen-Chats oder Gaming-Gruppen.", matches: "d3" },
        { id: "dr4", text: "Sperren von Kontakten, um keine Nachrichten mehr von ihnen zu erhalten.", matches: "d4" },
        { id: "dr5", text: "Erstellen von Screenshots gemeiner Nachrichten als Nachweis.", matches: "d5" }
      ],
      explanation: "Cybermobbing umfasst Beleidigungen, Flaming (aggressives Chatten) und Ausgrenzung. Wichtigste Gegenmaßnahmen sind: Blockieren, Screenshots sichern und Erwachsene informieren."
    },

    // ── Aktivität 3: Lückentext – Phishing & 2FA ──
    {
      id: "m5-a3",
      type: "fillgaps",
      badge: "✏️ Account-Schutz",
      knowledge: {
        title: "Phishing & 2FA – wie schützt du dich vor Betrug? 🎣",
        blocks: [
          {
            type: "text",
            content: "Stell dir vor, du bekommst eine E-Mail von 'Netflix' oder deiner 'Bank', in der steht: 'Ihr Account wurde gesperrt. Bitte klicken Sie hier und geben Sie Ihr Passwort ein.' Vorsicht! Das ist fast immer ein Betrugsversuch! 🚨"
          },
          {
            type: "highlight",
            icon: "🎣",
            title: "Was ist Phishing?",
            content: "Das Wort kommt von 'Fishing' (Angeln). Betrüger werfen gefälschte E-Mails oder Websites als 'Köder' aus, um deine Passwörter oder Kreditkartendaten zu 'angeln'. Sie kopieren Logos und Designs täuschend echt!"
          },
          {
            type: "keyterms",
            terms: [
              { term: "2FA", icon: "🔑", def: "Zwei-Faktor-Authentifizierung. Ein doppelter Schutz: Passwort PLUS ein Code aufs Handy." },
              { term: "Phishing", icon: "🚨", def: "Datenklau mit gefälschten E-Mails oder Fake-Websites." },
              { term: "Absender", icon: "📧", def: "Prüfe die E-Mail-Adresse genau! Betrüger nutzen oft Namen wie 'support@netfl1x-abfrage.com' statt 'support@netflix.com'." }
            ]
          },
          {
            type: "highlight",
            icon: "🛡️",
            title: "Warum macht 2FA dich fast unhackbar?",
            content: "Selbst wenn ein Hacker dein Passwort herausfindet (z.B. durch Phishing), kann er sich nicht einloggen! Denn er hat dein Handy nicht, auf dem der zweite Anmeldecode (Faktor) ankommt. Aktiviere 2FA überall, wo es geht! 📱"
          }
        ]
      },
      question: "Ergänze den Text über Phishing-Gefahren und Account-Sicherheit!",
      instruction: "Tippe die passenden Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Wenn Betrüger versuchen, mit gefälschten E-Mails oder Webseiten Passwörter zu klauen, nennt man das " },
        { type: "gap", id: "g1", answer: "Phishing", hint: "Daten-Angeln (englisches Wort)" },
        { type: "text", text: ". Solche Nachrichten erkennt man oft an einer fehlerhaften E-Mail-Adresse des " },
        { type: "gap", id: "g2", answer: "Absenders", hint: "Wer die Mail sendet" },
        { type: "text", text: ". Um Accounts vor unbefugtem Zugriff zu schützen, sollte man die " },
        { type: "gap", id: "g3", answer: "2fa", hint: "Abkürzung: Zwei-Faktor-Authentifizierung" },
        { type: "text", text: " aktivieren. Dabei wird neben dem Passwort ein zweiter Code benötigt, der meistens per " },
        { type: "gap", id: "g4", answer: "sms", hint: "Kurznachricht am Handy" },
        { type: "text", text: " oder eine Authentifikator-App gesendet wird. Bei Verdacht sollte man sich immer an die " },
        { type: "gap", id: "g5", answer: "eltern", hint: "Erziehungsberechtigte Personen" },
        { type: "text", text: " oder eine Lehrkraft wenden." }
      ],
      explanation: "Phishing ist der Diebstahl von Daten über Fake-Mails. Die Zwei-Faktor-Authentifizierung (2FA) sichert Accounts zusätzlich per SMS-Code oder App ab."
    },

    // ── Aktivität 4: Drag & Drop – Private vs. öffentliche Daten ──
    {
      id: "m5-a4",
      type: "dragdrop",
      badge: "🎯 Datenschutz",
      knowledge: {
        title: "Datenschutz – was geht niemanden etwas an? 🛡️",
        blocks: [
          {
            type: "text",
            content: "Im Internet hinterlassen wir überall Spuren – sogenannte **digitale Fußabdrücke**. Viele Apps und Websites wollen so viele Daten wie möglich von uns sammeln, um personalisierte Werbung anzuzeigen. Deshalb musst du selbst entscheiden, welche Daten privat bleiben müssen! 🤫"
          },
          {
            type: "comparison",
            title: "Private vs. öffentliche Daten:",
            leftTitle: "🔒 Private Daten (Geheim halten!)",
            leftContent: [
              "Passwörter und PINs 🔑",
              "Dein voller Name, Wohnort & Adresse 🏠",
              "Deine Handynummer 📱",
              "Fotos von deinem Zeugnis, Ausweis oder Bankkarten 💳",
              "Fotos von deinen Freunden (ohne deren Erlaubnis!) 👥"
            ],
            rightTitle: "🌍 Öffentliche Daten (Darf geteilt werden)",
            rightContent: [
              "Deine Hobbys & Lieblingsspiele 🎮",
              "Bilder von Landschaften oder Haustieren 🐱",
              "Selbstgemalte Bilder oder Musik 🎨",
              "Allgemeines Wissen oder Witze 💡",
              "Dein Lieblingsessen oder Sportarten 🍕"
            ]
          },
          {
            type: "highlight",
            icon: "📢",
            title: "Das Recht am eigenen Bild",
            content: "Du darfst niemals ungefragt Fotos von deinen Mitschülern oder Freunden ins Internet stellen oder per WhatsApp teilen! Jede Person hat das Recht zu bestimmen, ob Fotos von ihr veröffentlicht werden. Frag immer vorher um Erlaubnis! 📸"
          }
        ]
      },
      question: "Welche Daten sind privat und sollten geschützt werden, und welche kannst du unbesorgt teilen?",
      instruction: "Ziehe die Daten in die richtige Kategorie.",
      targets: [
        { id: "t-private", label: "🔒 Private Daten (Geheim halten!)",   accepts: ["priv1", "priv2", "priv3", "priv4"] },
        { id: "t-public",  label: "🌍 Öffentliche Daten (Teilen okay)", accepts: ["pub1", "pub2", "pub3", "pub4"] }
      ],
      items: [
        { id: "priv1", text: "Mein Passwort" },
        { id: "priv2", text: "Meine Handynummer" },
        { id: "priv3", text: "Mein genauer Wohnort" },
        { id: "priv4", text: "Foto von meinem Zeugnis" },
        { id: "pub1",  text: "Lieblings-Minecraft-Block" },
        { id: "pub2",  text: "Bild von meiner Katze" },
        { id: "pub3",  text: "Mein Lieblingsgericht" },
        { id: "pub4",  text: "Bild vom Urlaubsort (ohne Personen)" }
      ],
      explanation: "Sensible Daten wie Passwörter, Handynummer, Wohnort und Zeugnisse müssen privat bleiben. Allgemeine Hobbys, Tierfotos oder Zeichnungen können geteilt werden."
    },

    // ── Aktivität 5: Sorting – Passwort-Manager Schritte ──
    {
      id: "m5-a5",
      type: "sorting",
      badge: "🔢 Passwort-Manager",
      knowledge: {
        title: "Passwort-Manager – das Gedächtnis für deine Codes! 🧠",
        blocks: [
          {
            type: "text",
            content: "Wenn du für jeden Dienst ein eigenes, 16-stelliges Passwort verwendest, wie sollst du dir das merken? Niemand kann das! 🤯 Die Lösung ist ein **Passwort-Manager**."
          },
          {
            type: "highlight",
            icon: "🔑",
            title: "Wie funktioniert ein Passwort-Manager?",
            content: "Das ist wie ein digitaler Tresor. Er speichert alle deine Passwörter verschlüsselt ab. Du musst dir nur noch ein einziges Passwort merken: Das **Master-Passwort**, um den Tresor aufzusperren! Alle anderen Passwörter trägt der Manager automatisch ein."
          },
          {
            type: "steps",
            title: "So richtest du einen Passwort-Manager sicher ein:",
            steps: [
              { icon: "📥", text: "Einen seriösen Passwort-Manager herunterladen (z.B. Bitwarden or Keepass)." },
              { icon: "🔑", text: "Ein extrem starkes Master-Passwort ausdenken (das darfst du NIEMALS vergessen!)." },
              { icon: "➕", text: "Neue Einträge für deine bestehenden Accounts anlegen." },
              { icon: "🎲", text: "Den eingebauten Passwort-Generator nutzen, um alle alten Passwörter durch zufällige Codes zu ersetzen." },
              { icon: "💾", text: "Die Datenbank verschlüsselt speichern (Cloud-Synchronisation oder Backup-Datei)." }
            ]
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "WICHTIG!",
            content: "Wenn jemand dein Master-Passwort herausfindet, hat er Zugriff auf ALLE deine Accounts. Wähle dieses Passwort also extrem sorgfältig aus und verrate es niemandem! 🤫"
          }
        ]
      },
      question: "Bringe die Schritte zur Einrichtung und Nutzung eines Passwort-Managers in die richtige Reihenfolge!",
      instruction: "Ziehe die Schritte in die richtige Reihenfolge von oben nach unten.",
      correctOrder: ["step1", "step2", "step3", "step4", "step5"],
      items: [
        { id: "step2", text: "🔑 Ein extrem starkes Master-Passwort für den Tresor ausdenken" },
        { id: "step4", text: "🎲 Mit dem Generator zufällige, sichere Passwörter für jeden Dienst erzeugen" },
        { id: "step1", text: "📥 Einen seriösen Passwort-Manager installieren" },
        { id: "step5", text: "💾 Den Safe verschlüsseln und ein sicheres Backup anlegen" },
        { id: "step3", text: "➕ Einträge für deine Accounts (Discord, Instagram...) anlegen" }
      ],
      explanation: "Reihenfolge: App installieren → Master-Passwort setzen → Accounts hinzufügen → Starke Zufallspasswörter generieren → Datenbank sicher backupt / synchronisieren."
    },

    // ── Aktivität 6: Abschluss-Quiz ──
    {
      id: "m5-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Sicherheits-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Hervorragend! Du hast alle Lektionen zur digitalen Sicherheit abgeschlossen. 🔒 Hier ist ein schneller Spickzettel, bevor du das Quiz startest und dein Zertifikat abholst:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🔑", title: "Sicheres Passwort", text: "Mindestens 12 Zeichen, Mix aus A-z, 0-9 & Sonderzeichen." },
              { icon: "📱", title: "2FA", text: "Doppelter Schutz durch zusätzlichen Einmal-Code." },
              { icon: "🎣", title: "Phishing", text: "Betrugsmails, die Passwörter angeln wollen. Absender prüfen!" },
              { icon: "🛡️", title: "Datenschutz", text: "Private Daten wie Name, Adresse, Telefonnummer geheim halten." },
              { icon: "🚫", title: "Cybermobbing", text: "Hass im Netz. Gegenmaßnahme: Blockieren, Screenshots machen, Hilfe holen!" },
              { icon: "🧠", title: "Netiquette", text: "Respektvoller Umgang in Chats und Kommentaren." }
            ]
          },
          {
            type: "highlight",
            icon: "🏆",
            title: "Dein Zertifikat wartet!",
            content: "Beantworte nun die 10 Fragen, um zu zeigen, dass du ein Sicherheitsprofi im Netz bist!"
          }
        ]
      },
      questions: [
        {
          q: "Was zeichnet ein starkes Passwort aus?",
          options: [
            "Es besteht aus dem Vornamen und dem Geburtsdatum.",
            "Es ist mindestens 12 Zeichen lang und nutzt Buchstaben, Zahlen und Sonderzeichen.",
            "Es ist ein englisches Wort, damit es niemand errät.",
            "Es ist dasselbe Passwort wie für alle anderen Accounts."
          ],
          correct: 1,
          explanation: "Ein starkes Passwort hat mindestens 12 Zeichen, kombiniert Groß- und Kleinbuchstaben, Zahlen sowie Sonderzeichen und ist einzigartig."
        },
        {
          q: "Was versteht man unter 'Cybermobbing'?",
          options: [
            "Das illegale Herunterladen von Computerspielen.",
            "Die Reparatur eines beschädigten Laptops.",
            "Das absichtliche und wiederholte Beleidigen, Bedrohen oder Bloßstellen einer Person im Internet.",
            "Das schnelle Tippen von Nachrichten."
          ],
          correct: 2,
          explanation: "Cybermobbing bezeichnet das wiederholte, absichtliche Herabsetzen, Schikanieren oder Ausschließen einer Person über digitale Medien."
        },
        {
          q: "Wie reagiert man am besten auf Beleidigungen im Chat?",
          options: [
            "Zurückbeleidigen, damit der Angreifer aufhört.",
            "Die Nachricht löschen und so tun, als wäre nichts passiert.",
            "Den Absender blockieren, Beweise per Screenshot sichern und Hilfe bei Erwachsenen holen.",
            "Das Handy für immer ausschalten."
          ],
          correct: 2,
          explanation: "Die empfohlenen Schritte sind: Keine Aufmerksamkeit schenken (nicht antworten), blockieren, Screenshots als Beweis sichern und Vertrauenspersonen einweihen."
        },
        {
          q: "Welche Funktion hat die Zwei-Faktor-Authentifizierung (2FA)?",
          options: [
            "Sie sperrt den Account nach zwei Fehlversuchen.",
            "Sie verdoppelt die Internetgeschwindigkeit beim Einloggen.",
            "Sie verlangt beim Anmelden neben dem Passwort einen zweiten Bestätigungsschritt (z.B. Code per SMS).",
            "Sie erlaubt es zwei Personen, denselben Account zu nutzen."
          ],
          correct: 2,
          explanation: "2FA erhöht die Sicherheit massiv: Selbst bei bekanntem Passwort kann sich ein Hacker ohne den zweiten Faktor (z.B. Einmalcode aus einer App auf deinem Handy) nicht anmelden."
        },
        {
          q: "Was ist 'Phishing'?",
          options: [
            "Ein beliebtes Angel-Spiel für Handys.",
            "Der Versuch von Betrügern, über gefälschte E-Mails oder Websites an sensible Daten wie Passwörter zu gelangen.",
            "Das Suchen nach Viren auf einer Festplatte.",
            "Das Teilen von privaten Urlaubsbildern."
          ],
          correct: 1,
          explanation: "Phishing bezeichnet betrügerische Versuche, mittels täuschend echter E-Mails oder gefälschter Webseiten Passwörter, Logins oder Kreditkartendaten zu entwenden."
        },
        {
          q: "Welche Daten solltest du im Internet NIEMALS öffentlich teilen?",
          options: [
            "Dein Lieblingsbuch und deine Hobbys.",
            "Dein Passwort, deine Wohnadresse und deine Handynummer.",
            "Fotos von Haustieren oder schönen Landschaften.",
            "Einen interessanten Zeitungsartikel."
          ],
          correct: 1,
          explanation: "Passwörter, Telefonnummern und Adressen sind hochsensible private Daten, die missbraucht werden können und daher geschützt bleiben müssen."
        },
        {
          q: "Welches Recht besagt, dass man Fotos von anderen nicht einfach ungefragt veröffentlichen darf?",
          options: [
            "Recht auf freien Download",
            "Urheberrecht für Fotos",
            "Recht am eigenen Bild",
            "Datenschutz-Grundverordnung für Kameras"
          ],
          correct: 2,
          explanation: "Das 'Recht am eigenen Bild' schützt Personen davor, dass Fotos, auf denen sie erkennbar sind, ohne ihre Zustimmung veröffentlicht oder verbreitet werden."
        },
        {
          q: "Was ist die Hauptaufgabe eines Passwort-Managers?",
          options: [
            "Er löscht unbenutzte Accounts automatisch.",
            "Er speichert und verschlüsselt alle Passwörter, sodass man sich nur noch ein Master-Passwort merken muss.",
            "Er sendet Passwörter an Freunde.",
            "Er errät die Passwörter von anderen Personen."
          ],
          correct: 1,
          explanation: "Ein Passwort-Manager speichert und verschlüsselt Logins. Man benötigt nur noch ein extrem sicheres 'Master-Passwort' zum Entsperren des Tresors."
        },
        {
          q: "Was bedeutet das Wort 'Netiquette'?",
          options: [
            "Ein französischer Browser.",
            "Die Regeln für ein schnelles Netzwerk.",
            "Die Verhaltensregeln für eine respektvolle und höfliche Kommunikation im Internet.",
            "Ein Etikett, das auf LAN-Kabel geklebt wird."
          ],
          correct: 2,
          explanation: "Netiquette setzt sich aus 'Net' (Netz) und 'Etiquette' (Verhaltensregeln) zusammen. Sie beschreibt den respektvollen Umgang im Netz."
        },
        {
          q: "Woran erkennt man eine Phishing-Mail am ehesten?",
          options: [
            "Sie enthält immer Bilder.",
            "Sie kommt nachts an.",
            "An einer verdächtigen Absender-E-Mail-Adresse, Grammatikfehlern oder dringenden Aufforderungen, Zugangsdaten einzugeben.",
            "Sie hat keinen Betreff."
          ],
          correct: 2,
          explanation: "Verdächtige Absenderdomains (z.B. @paypal-sicherheitsdienst.de statt @paypal.de), Fehler im Text und Druckaufbau ('Handeln Sie sofort!') sind typische Merkmale für Phishing."
        }
      ]
    }
  ]
};
