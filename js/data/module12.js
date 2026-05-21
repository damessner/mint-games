// ============================================================
// MINT-Games – Modul 12: Server zusammenbauen & verkabeln
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Technische Grundlagen & Hardware
// ============================================================

const MODULE_12 = {
  id: 12,
  title: "Server zusammenbauen & verkabeln",
  icon: "🛠️",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Hardware & Technik",
  activities: [

    // ── Aktivität 1: Zuordnung – Server- vs. PC-Hardware ──────────────
    {
      id: "m12-a1",
      type: "matching",
      badge: "🔗 Server-Komponenten",
      knowledge: {
        title: "Was macht einen Server besonders? 🖥️",
        blocks: [
          {
            type: "text",
            content: "Ein Server läuft das ganze Jahr durch (24/7/365) und liefert Webseiten oder Spiele an Tausende Benutzer aus. Wenn dein Heim-PC abstürzt, ist das ärgerlich. Wenn ein Banken-Server abstürzt, ist das eine Katastrophe! 💥"
          },
          {
            type: "highlight",
            icon: "🚨",
            title: "Ausfallschutz durch Redundanz",
            content: "Server-Hardware ist auf Ausfallsicherheit getrimmt. Viele Teile sind mehrfach vorhanden (**redundant**). Fällt ein Teil aus, läuft das System einfach weiter."
          },
          {
            type: "keyterms",
            terms: [
              { term: "ECC RAM", icon: "🧠", def: "Arbeitsspeicher mit automatischer Fehlerkorrektur. Verhindert Abstürze durch Datenfehler im RAM." },
              { term: "Redundante Netzteile", icon: "⚡", def: "Zwei oder mehr Stromversorgungen. Fällt eine aus oder brennt durch, übernimmt die andere im laufenden Betrieb." },
              { term: "Hot-Swap-Festplatten", icon: "💾", def: "Festplatten in ausziehbaren Rahmen. Können getauscht werden, ohne den Server auszuschalten." },
              { term: "IPMI / iLO / iDRAC", icon: "🔌", def: "Ein kleiner Zusatzchip. Erlaubt die Fernsteuerung des Servers (Einschalten, Installieren), selbst wenn das Hauptsystem aus ist." }
            ]
          }
        ]
      },
      question: "Ordne den speziellen Server-Komponenten ihre Funktion zu!",
      instruction: "Wähle links die Komponente und rechts die passende Erklärung.",
      leftItems: [
        { id: "h1", text: "ECC RAM" },
        { id: "h2", text: "Redundantes Netzteil" },
        { id: "h3", text: "Hot-Swap-Festplatte" },
        { id: "h4", text: "IPMI / Fernwartungschip" },
        { id: "h5", text: "SAS-Schnittstelle" }
      ],
      rightItems: [
        { id: "hr1", text: "Arbeitsspeicher, der interne Datenfehler selbst repariert", matches: "h1" },
        { id: "hr2", text: "Mehrfache Stromversorgung für ausfallfreien Betrieb", matches: "h2" },
        { id: "hr3", text: "Festplattentausch im laufenden Betrieb des Servers", matches: "h3" },
        { id: "hr4", text: "Ermöglicht Server-Fernsteuerung bei ausgeschaltetem Zustand", matches: "h4" },
        { id: "hr5", text: "Schnellere, robustere Version des SATA-Festplattenanschlusses", matches: "h5" }
      ],
      explanation: "Server nutzen fehlerkorrigierenden ECC-RAM, redundante Netzteile, Hot-Swap-Platten und IPMI-Management-Chips für maximale Stabilität und Fernwartung."
    },

    // ── Aktivität 2: Lückentext – Das Server-Rack ───────────────────
    {
      id: "m12-a2",
      type: "fillgaps",
      badge: "✏️ Der Serverschrank",
      knowledge: {
        title: "Ordnung im Serverraum: Das 19-Zoll-Rack 🪜",
        blocks: [
          {
            type: "text",
            content: "Damit Server nicht kreuz und quer auf Tischen herumliegen, schraubt man sie in genormte Metallschränke, die **19-Zoll-Racks**."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Höheneinheit (HE / U)", icon: "📏", def: "Die standardisierte Höhe für Geräte im Rack. 1 HE entspricht genau 1,75 Zoll bzw. 4,445 Zentimetern." },
              { term: "Patchpanel", icon: "🔌", def: "Die Verteilerstelle für Netzwerkkabel. Hier enden alle Leitungen aus dem Gebäude." },
              { term: "USV (Unterbrechungsfreie Stromversorgung)", icon: "🔋", def: "Ein großer Akku-Pack. Fällt der Strom im Gebäude aus, versorgt die USV die Server weiter mit Strom, bis sie kontrolliert heruntergefahren werden können." }
            ]
          }
        ]
      },
      question: "Fülle die Lücken im Text über das Server-Rack aus!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Die Höhe von Servern wird in sogenannten " },
        { type: "gap", id: "g1", answer: "höheneinheiten", hint: "Abkürzung: HE (Plural)" },
        { type: "text", text: " gemessen. Alle Kabel aus den Klassenzimmern enden im Serverraum auf einem " },
        { type: "gap", id: "g2", answer: "patchpanel", hint: "Verteilerfeld für Netzwerk-Buchsen" },
        { type: "text", text: ", von wo aus sie mit kurzen Kabeln an den Switch angeschlossen werden. Zur sauberen Kabelorganisation nutzt man eine " },
        { type: "gap", id: "g3", answer: "kabeldurchführung", hint: "Kabel-Führungsbügel (Einzahl)" },
        { type: "text", text: ". Wenn der Netzstrom im Gebäude komplett ausfällt, schützt eine " },
        { type: "gap", id: "g4", answer: "usv", hint: "Batteriespeicher-Gerät (3 Buchstaben)" },
        { type: "text", text: " die Server vor einem plötzlichen Absturz." }
      ],
      explanation: "Gerätehöhen im Rack werden in Höheneinheiten (HE) gemessen. USV-Akkus sichern den Strom, Patchpanels verteilen das Netzwerk und Kabeldurchführungen ordnen den Salat."
    },

    // ── Aktivität 3: Sortierung – Server ins Rack einbauen ─────────────
    {
      id: "m12-a3",
      type: "sorting",
      badge: "🔢 Rack-Montage",
      knowledge: {
        title: "Schwerstarbeit: Server sicher einbauen 🛠",
        blocks: [
          {
            type: "text",
            content: "Server sind schwer und unhandlich. Beim Einbau in das Rack muss man genau vorgehen, um die Hardware nicht zu beschädigen und Unfälle zu vermeiden."
          },
          {
            type: "steps",
            title: "Die Arbeitsschritte bei der Rack-Montage:",
            steps: [
              { icon: "📏 1. Position markieren", text: "Wähle die passende freie Stelle (HE) aus und markiere die Löcher im Schrank." },
              { icon: "🔩 2. Käfigmuttern einsetzen", text: "Drücke die elastischen Käfigmuttern (Cage Nuts) von innen in den Schienen-Rahmen." },
              { icon: "🪜 3. Rails montieren", text: "Schraube die Teleskopschienen (Rails) links und rechts waagerecht in das Rack." },
              { icon: "📦 4. Server einschieben", text: "Hebe den Server zu zweit an und schiebe ihn vorsichtig in die Teleskopschienen, bis er einrastet." },
              { icon: "🔒 5. Frontsicherung", text: "Sichere den Server vorne mit Rändelschrauben direkt am Rack-Rahmen." }
            ]
          }
        ]
      },
      question: "Bringe die Schritte der Server-Rackmontage in die richtige Reihenfolge!",
      instruction: "Sortiere die Montageschritte von oben (Schritt 1) nach unten (Schritt 5).",
      correctOrder: ["s_pos", "s_nuts", "s_rails", "s_slide", "s_secure"],
      items: [
        { id: "s_rails",  text: "Teleskop-Führungsschienen (Rails) waagerecht links und rechts montieren" },
        { id: "s_pos",    text: "Einbauhöhe (HE) im Rack-Schrank bestimmen und markieren" },
        { id: "s_secure", text: "Server an der Rack-Front mit Schrauben gegen Herausrutschen sichern" },
        { id: "s_nuts",   text: "Käfigmuttern in die quadratischen Löcher der Markierung drücken" },
        { id: "s_slide",  text: "Server zu zweit anheben und vorsichtig in die Schienen schieben" }
      ],
      explanation: "Zuerst wird die Position festgelegt und die Käfigmuttern platziert. Dann montiert man die Schienen, schiebt den Server ein und verschraubt die Frontblende."
    },

    // ── Aktivität 4: Drag & Drop – Verkabelung & Anschlüsse ──────────
    {
      id: "m12-a4",
      type: "dragdrop",
      badge: "🎯 Verkabelung",
      knowledge: {
        title: "Professionelle Verkabelung: Alles doppelt hält besser 🔌",
        blocks: [
          {
            type: "text",
            content: "Beim Verkabeln eines Servers gilt das Gesetz der Redundanz. Jede wichtige Verbindung wird doppelt verkabelt, damit bei Ausfall eines Kabels oder Gerätes der Betrieb weitergeht."
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Die drei Haupt-Anschlüsse:",
            content: "1. **Strom**: Jedes der zwei Server-Netzteile wird an eine andere USV (A und B) angesteckt.\n2. **Daten**: Die zwei Netzwerkkarten werden an zwei verschiedene Switches gesteckt.\n3. **Management**: Der separate IPMI-Port kommt an einen separaten Verwaltungs-Switch."
          }
        ]
      },
      question: "Ordne die Server-Ports und Kabel ihren korrekten Ziel-Geräten im Rack zu!",
      instruction: "Ziehe die Kabel-Anbindungen in die passende Kategorie.",
      targets: [
        { id: "t-pwr", label: "⚡ Stromverkabelung (USVs)", accepts: ["p_usv_a", "p_usv_b"] },
        { id: "t-net", label: "🔌 Netzwerkverkabelung (Switches)", accepts: ["n_sw_1", "n_sw_2", "m_ipmi"] }
      ],
      items: [
        { id: "p_usv_a", text: "Netzteil 1 an USV-Gruppe A (Hauptstrom)" },
        { id: "p_usv_b", text: "Netzteil 2 an USV-Gruppe B (Notstrom)" },
        { id: "n_sw_1",  text: "LAN-Port 1 an Switch 1 (Primäres Netz)" },
        { id: "n_sw_2",  text: "LAN-Port 2 an Switch 2 (Backup-Netz)" },
        { id: "m_ipmi",  text: "IPMI-Verwaltungs-Port an den Management-Switch" }
      ],
      explanation: "Redundante Stromkabel gehören an getrennte USV-Stromkreise. Die Datenkabel werden auf zwei getrennte Switches aufgeteilt, um Switch-Ausfälle abzufedern. IPMI läuft über ein separates Management-Netz."
    },

    // ── Aktivität 5: Zuordnung – Server-Bauformen ────────────────────
    {
      id: "m12-a5",
      type: "matching",
      badge: "🔗 Gehäuseformen",
      knowledge: {
        title: "Server-Formfaktoren: Tower, Rack und Blade 📦",
        blocks: [
          {
            type: "text",
            content: "Server gibt es in verschiedenen Gehäusen, je nachdem, wie viel Platz vorhanden ist und wofür sie eingesetzt werden."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Tower-Server", icon: "🖥️", def: "Steht aufrecht wie ein klassischer Büro-PC. Leise Lüfter. Ideal für KMUs ohne eigenen Serverraum." },
              { term: "Rack-Server", icon: "💾", def: "Flache Schubladen (z.B. 1 HE oder 2 HE hoch). Werden im Rack verschraubt. Sehr laute, starke Lüfter für optimierte Kühlung." },
              { term: "Blade-Server", icon: "🗡️", def: "Extrem dünne Platten ('Klingen'), die hochkant in ein großes Gehäuse (Chassis) gesteckt werden. Sie teilen sich Netzteile und Lüfter. Für maximale Serverdichte im Großrechenzentrum." }
            ]
          }
        ]
      },
      question: "Verbinde die Server-Gehäuseformen mit ihrer passenden Eigenschaft!",
      instruction: "Wähle links die Bauform und rechts die richtige Erklärung.",
      leftItems: [
        { id: "f1", text: "Tower-Server" },
        { id: "f2", text: "Rack-Server" },
        { id: "f3", text: "Blade-Server" },
        { id: "f4", text: "Höheneinheit (HE)" }
      ],
      rightItems: [
        { id: "fr1", text: "Aufrechtstehendes Gehäuse für Büros ohne Serverraum", matches: "f1" },
        { id: "fr2", text: "Flache Einschübe für die waagerechte Rack-Montage", matches: "f2" },
        { id: "fr3", text: "Dünne Klingen-Server, die sich ein Chassis teilen", matches: "f3" },
        { id: "fr4", text: "Das Höhen-Maß für Rack-Geräte (ca. 4,4 cm)", matches: "f4" }
      ],
      explanation: "Tower stehen frei, Rack-Server werden waagerecht gestapelt, Blades stecken hochkant in einem geteilten Chassis. Die Höhe wird in Höheneinheiten (HE) angegeben."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m12-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das Serverbau-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Super gemacht! Du hast gelernt, wie Server aufgebaut, montiert und verkabelt werden. Hier ist die Zusammenfassung vor dem Quiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "⚡", title: "Redundanz", text: "Bauteile mehrfach auslegen für Ausfallsicherheit" },
              { icon: "🧠", title: "ECC-RAM", text: "Korrigiert Speicherfehler im Betrieb" },
              { icon: "🔌", title: "IPMI", text: "Fernzugriff auch bei ausgeschaltetem Server" },
              { icon: "📏", title: "Höheneinheit", text: "Standard-Maß im 19-Zoll-Rack (1 HE = 4,4 cm)" },
              { icon: "🔋", title: "USV", text: "Batteriepufferung bei Stromausfällen" },
              { icon: "⚙️", title: "Käfigmutter", text: "Spezielle Haltemuttern im Rack-Rahmen" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Was bedeutet das Prinzip der 'Redundanz' bei Server-Systemen?",
          options: [
            "Dass der Server besonders bunt leuchtet.",
            "Kritische Komponenten (wie Netzteile oder Leitungen) sind doppelt vorhanden, um Ausfälle abzufedern.",
            "Dass der Server automatisch Daten löscht.",
            "Dass der Server nur nachts arbeitet."
          ],
          correct: 1,
          explanation: "Redundanz sichert den Betrieb. Fällt ein Bauteil aus, übernimmt das andere ohne Unterbrechung."
        },
        {
          q: "Welchen Vorteil bietet ECC-Arbeitsspeicher (ECC RAM)?",
          options: [
            "Er erhöht die Grafik-Details bei Spielen.",
            "Er erkennt und korrigiert Speicherfehler selbstständig, um Systemabstürze zu verhindern.",
            "Er verbraucht überhaupt keinen Strom.",
            "Er macht das Internet schneller."
          ],
          correct: 1,
          explanation: "Im Serverbetrieb können kosmische Strahlung oder elektrische Impulse Bits im RAM kippen lassen. ECC-Speicher repariert solche Ein-Bit-Fehler im laufenden Betrieb."
        },
        {
          q: "Was bedeutet die Abkürzung 'Hot-Swap' bei Server-Festplatten?",
          options: [
            "Die Festplatten laufen sehr heiß.",
            "Festplatten können im laufenden Betrieb herausgezogen und getauscht werden.",
            "Die Festplatte hat ein eingebautes WLAN.",
            "Sie können nur im Winter getauscht werden."
          ],
          correct: 1,
          explanation: "Dank Hot-Swap-Rahmen muss ein Techniker den Server nicht herunterfahren, um eine defekte Festplatte gegen eine neue auszutauschen."
        },
        {
          q: "Wozu dient der IPMI-Port (auch bekannt als iLO oder iDRAC)?",
          options: [
            "Zum Anschließen einer Tastatur.",
            "Zur Fernsteuerung und Überwachung des Servers, selbst wenn dieser ausgeschaltet ist oder kein OS läuft.",
            "Zum schnellen Drucken von Dokumenten.",
            "Er verbindet den Server mit der Hi-Fi-Anlage."
          ],
          correct: 1,
          explanation: "Ein IPMI-Chip läuft auf eigener kleiner Hardware und hat eine eigene IP-Adresse. So kann ein Admin den Server aus der Ferne starten oder das BIOS konfigurieren."
        },
        {
          q: "Wie breit ist ein standardisierter Server-Schrank (Rack)?",
          options: ["10 Zoll", "19 Zoll", "50 Zoll", "1 Meter"],
          correct: 1,
          explanation: "Die Standardbreite für Server-Racks beträgt weltweit 19 Zoll (ca. 48,26 cm) zwischen den Montageschienen."
        },
        {
          q: "Wie hoch ist eine Höheneinheit (1 HE) in einem Server-Rack?",
          options: ["ca. 10 Zentimeter", "ca. 4,4 Zentimeter (1,75 Zoll)", "exakt 1 Meter", "1 Millimeter"],
          correct: 1,
          explanation: "Eine Höheneinheit (HE) ist als 44,45 mm definiert. Geräte sind meist 1 HE, 2 HE oder 4 HE hoch."
        },
        {
          q: "Welches Bauteil schützt den Server vor Abstürzen durch Stromausfälle im Gebäude?",
          options: ["Das redundante Netzteil", "Die USV (Unterbrechungsfreie Stromversorgung)", "Die Käfigmutter", "Das Patchpanel"],
          correct: 1,
          explanation: "Die USV schaltet bei Stromausfall blitzschnell auf Akkubetrieb um und filtert zudem Spannungsspitzen aus dem Stromnetz."
        },
        {
          q: "Wie heißen die speziellen elastischen Muttern, die man zur Gerätebefestigung in den Rack-Rahmen drückt?",
          options: ["Holzschrauben", "Käfigmuttern (Cage Nuts)", "Flügelmuttern", "Unterlegscheiben"],
          correct: 1,
          explanation: "Käfigmuttern werden in die quadratischen Löcher des 19-Zoll-Rahmens geklemmt. So kann das Gewinde bei Beschädigung einfach getauscht werden."
        },
        {
          q: "Welche Server-Bauform eignet sich am besten für Büroräume ohne separaten klimatisierten Serverraum?",
          options: ["Blade-Server", "Rack-Server", "Tower-Server", "Mainframe"],
          correct: 2,
          explanation: "Tower-Server haben große, langsam drehende Lüfter und sind daher sehr leise, weshalb sie problemlos im Büro stehen können."
        },
        {
          q: "Warum verbindet man die beiden Netzteile eines Servers idealerweise mit zwei getrennten USVs?",
          options: [
            "Weil der Server sonst zu viel Strom verbraucht.",
            "Um Ausfallsicherheit zu gewährleisten, falls eine USV defekt ist oder ein Stromkreis ausfällt.",
            "Weil ein Netzteil alleine zu heiß wird.",
            "Damit die Kabel nicht verknoten."
          ],
          correct: 1,
          explanation: "Wenn beide Netzteile an derselben USV hängen und diese USV ausfällt, geht auch der Server aus. Getrennte Stromkreise sichern maximale Redundanz."
        }
      ]
    }
  ]
};
