// ============================================================
// MINT-Games – Modul 2: LAN-Kabel selbst crimpen
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Produktion, Handeln
// ============================================================

const MODULE_2 = {
  id: 2,
  title: "LAN-Kabel selbst crimpen",
  icon: "🔌",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Produktion & Handeln",
  activities: [

    // ── Aktivität 1: Drag & Drop – Kabeltypen ───────────────
    {
      id: "m2-a1",
      type: "dragdrop",
      badge: "🎯 Drag & Drop",
      question: "Ordne die Eigenschaften den richtigen Kabeltypen zu!",
      instruction: "Ziehe jede Eigenschaft zum passenden Kabeltyp.",
      targets: [
        { id: "t-koax",    label: "📻 Koaxialkabel",   accepts: ["koax1", "koax2"] },
        { id: "t-utp",     label: "🔵 UTP-Kabel",      accepts: ["utp1", "utp2"] },
        { id: "t-glasfaser", label: "✨ Glasfaserkabel", accepts: ["glas1", "glas2"] },
      ],
      items: [
        { id: "koax1",  text: "Wird für Kabel-TV verwendet" },
        { id: "koax2",  text: "Hat einen einzelnen Kupferleiter" },
        { id: "utp1",   text: "8 verdrillte Kupferdrähte (4 Paare)" },
        { id: "utp2",   text: "Wird für LAN/Ethernet verwendet" },
        { id: "glas1",  text: "Überträgt Daten als Lichtsignale" },
        { id: "glas2",  text: "Höchste Übertragungsgeschwindigkeit, größte Reichweite" },
      ],
      explanation: "Koaxialkabel (TV), UTP-Kabel (LAN/Netzwerk mit 8 verdrillten Drähten) und Glasfaser (Licht-Übertragung, sehr schnell & weit) sind die drei häufigsten Kabeltypen."
    },

    // ── Aktivität 2: Farbcodierung RJ45 (Drag & Drop) ───────
    {
      id: "m2-a2",
      type: "cable-colors",
      badge: "🎨 Farbcodierung",
      question: "Bringe die 8 Drähte des LAN-Kabels in die richtige Reihenfolge! (Standard TIA/EIA 568-B)",
      instruction: "Ziehe die farbigen Kabeldrähte in die richtige Reihenfolge von Position 1 bis 8.",
      correctOrder: ["ow", "o", "gw", "bl", "blw", "g", "brw", "br"],
      colorItems: [
        { id: "ow",  label: "Orange-Weiß",  color: "#FF8C00", stripe: true,  stripeColor: "#FFFFFF" },
        { id: "o",   label: "Orange",       color: "#FF6600", stripe: false },
        { id: "gw",  label: "Grün-Weiß",   color: "#00AA44", stripe: true,  stripeColor: "#FFFFFF" },
        { id: "bl",  label: "Blau",         color: "#0055CC", stripe: false },
        { id: "blw", label: "Blau-Weiß",   color: "#3399FF", stripe: true,  stripeColor: "#FFFFFF" },
        { id: "g",   label: "Grün",         color: "#007722", stripe: false },
        { id: "brw", label: "Braun-Weiß",  color: "#AA6633", stripe: true,  stripeColor: "#FFFFFF" },
        { id: "br",  label: "Braun",        color: "#8B4513", stripe: false },
      ],
      explanation: "Der TIA/EIA 568-B Standard definiert die Reihenfolge: 1-Orange/Weiß, 2-Orange, 3-Grün/Weiß, 4-Blau, 5-Blau/Weiß, 6-Grün, 7-Braun/Weiß, 8-Braun. Diese Reihenfolge ist weltweit Standard für LAN-Kabel!"
    },

    // ── Aktivität 3: Lückentext – Kabelkategorien ───────────
    {
      id: "m2-a3",
      type: "fillgaps",
      badge: "✏️ Lückentext",
      question: "Ergänze den Text über Netzwerkkabel-Kategorien!",
      instruction: "Tippe die fehlenden Wörter in die Lücken.",
      segments: [
        { type: "text", text: "Netzwerkkabel werden in sogenannte Kategorien (Cat) eingeteilt. " },
        { type: "gap", id: "g1", answer: "Cat5e", hint: "Kategorie für 1 Gbit/s" },
        { type: "text", text: " unterstützt Übertragungsraten von bis zu " },
        { type: "gap", id: "g2", answer: "1000", hint: "Zahl in Mbit/s" },
        { type: "text", text: " Mbit/s und ist für normale Heimnetzwerke geeignet. " },
        { type: "gap", id: "g3", answer: "Cat6", hint: "Kategorie für 10 Gbit/s" },
        { type: "text", text: " ist schneller und ermöglicht Übertragungsraten von bis zu " },
        { type: "gap", id: "g4", answer: "10", hint: "Zahl in Gbit/s" },
        { type: "text", text: " Gbit/s. Der Stecker, der am Ende des LAN-Kabels sitzt, heißt " },
        { type: "gap", id: "g5", answer: "RJ45", hint: "Name des Steckers" },
        { type: "text", text: " und hat " },
        { type: "gap", id: "g6", answer: "8", hint: "Anzahl der Kontakte" },
        { type: "text", text: " Kontakte." },
      ],
      explanation: "Cat5e (1 Gbit/s, 100m), Cat6 (10 Gbit/s, 55m) und Cat6a (10 Gbit/s, 100m) sind die häufigsten Kategorien. Der RJ45-Stecker hat 8 Kontakte für 8 Drähte."
    },

    // ── Aktivität 4: Sortierung – Crimping-Schritte ─────────
    {
      id: "m2-a4",
      type: "sorting",
      badge: "🔢 Sortierung",
      question: "Welche Schritte braucht man zum Crimpen eines LAN-Kabels?",
      instruction: "Bringe die Schritte in die richtige Reihenfolge von oben nach unten.",
      correctOrder: ["cs1", "cs2", "cs3", "cs4", "cs5", "cs6", "cs7"],
      items: [
        { id: "cs3", text: "🎨 Drähte nach TIA/EIA 568-B Farbcode sortieren und gerade ausrichten" },
        { id: "cs6", text: "🔧 RJ45-Stecker mit der Crimpzange festpressen" },
        { id: "cs1", text: "✂️ Kabelmantel ca. 3 cm abisolieren (mit Abisolierzange)" },
        { id: "cs7", text: "🔍 Kabel mit LAN-Tester auf Funktion prüfen" },
        { id: "cs2", text: "🔓 Die 4 Drahtpaare aufdrehen und einzelne Drähte trennen" },
        { id: "cs5", text: "📥 Drähte vorsichtig in den RJ45-Stecker einschieben (bis ganz vorne)" },
        { id: "cs4", text: "✂️ Drähte auf gleiche Länge abschneiden (ca. 13mm)" },
      ],
      explanation: "Die korrekte Reihenfolge: 1. Mantel abisolieren → 2. Paare aufdrehen → 3. Drähte sortieren (568-B) → 4. Drähte kürzen → 5. In RJ45 stecken → 6. Crimpen → 7. Testen"
    },

    // ── Aktivität 5: Matching – Netzwerkgeräte ──────────────
    {
      id: "m2-a5",
      type: "matching",
      badge: "🔗 Zuordnung",
      question: "Ordne das Netzwerkgerät seiner Funktion zu!",
      instruction: "Wähle zuerst ein Gerät links, dann seine Funktion rechts.",
      leftItems: [
        { id: "d1", text: "🔀 Switch" },
        { id: "d2", text: "📡 Router" },
        { id: "d3", text: "🔌 Hub" },
        { id: "d4", text: "📶 Access Point" },
        { id: "d5", text: "🔁 Repeater" },
      ],
      rightItems: [
        { id: "dr1", text: "Verbindet mehrere Geräte im LAN und leitet Datenpakete gezielt weiter", matches: "d1" },
        { id: "dr2", text: "Verbindet verschiedene Netzwerke (z.B. LAN mit Internet)", matches: "d2" },
        { id: "dr3", text: "Älteres Gerät, das Daten an ALLE verbundenen Geräte sendet", matches: "d3" },
        { id: "dr4", text: "Ermöglicht drahtlose WLAN-Verbindungen", matches: "d4" },
        { id: "dr5", text: "Verstärkt das WLAN-Signal um dessen Reichweite zu verlängern", matches: "d5" },
      ],
      explanation: "Switch (intelligent, gezielt), Router (Verbindung zum Internet), Hub (veraltet, nicht gezielt), Access Point (WLAN), Repeater (Signalverstärkung)."
    },

    // ── Aktivität 6: Abschluss-Quiz ─────────────────────────
    {
      id: "m2-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      questions: [
        {
          q: "Wie viele Drähte (Adern) hat ein Standard LAN/Ethernet-Kabel (UTP)?",
          options: ["4 Drähte", "6 Drähte", "8 Drähte", "12 Drähte"],
          correct: 2,
          explanation: "Ein UTP-Kabel (Unshielded Twisted Pair) hat 8 Drähte, die in 4 Paare verdrilllt sind. Jedes Paar ist miteinander verdrillt, um elektromagnetische Störungen zu reduzieren."
        },
        {
          q: "Wie lautet der erste Draht (Pin 1) beim TIA/EIA 568-B Standard?",
          options: ["Grün-Weiß", "Orange-Weiß", "Blau", "Braun-Weiß"],
          correct: 1,
          explanation: "Nach TIA/EIA 568-B: Pin 1 = Orange-Weiß, Pin 2 = Orange, Pin 3 = Grün-Weiß, Pin 4 = Blau, Pin 5 = Blau-Weiß, Pin 6 = Grün, Pin 7 = Braun-Weiß, Pin 8 = Braun."
        },
        {
          q: "Was bedeutet 'UTP' bei Netzwerkkabeln?",
          options: [
            "Universal Transfer Protocol",
            "Ultra Twisted Pair",
            "Unshielded Twisted Pair (Ungeschirmtes, verdrilltes Paar)",
            "Universal Telephone Protocol"
          ],
          correct: 2,
          explanation: "UTP steht für 'Unshielded Twisted Pair' – ungeschirmtes, verdrilltes Kabelpaar. Im Gegensatz dazu gibt es STP (Shielded Twisted Pair) mit Abschirmung gegen Störungen."
        },
        {
          q: "Welche Kabelkategorie ist für Heimnetzwerke mit 1 Gbit/s geeignet?",
          options: ["Cat3", "Cat5e", "Cat7", "Koaxialkabel"],
          correct: 1,
          explanation: "Cat5e (Category 5 enhanced) unterstützt Gigabit-Ethernet (1000 Mbit/s) und ist für normale Heimnetzwerke gut geeignet. Cat6 bietet noch mehr Leistung (bis 10 Gbit/s)."
        },
        {
          q: "Welches Werkzeug benötigst du, um einen RJ45-Stecker am Kabel zu befestigen?",
          options: ["Hammer", "Lötkolben", "Crimpzange", "Abisolierzange"],
          correct: 2,
          explanation: "Eine Crimpzange drückt die Kontakte des RJ45-Steckers auf die Drähte. Die Abisolierzange wird vorher verwendet, um den Kabelmantel zu entfernen."
        },
        {
          q: "Was ist der Unterschied zwischen einem Switch und einem Hub?",
          options: [
            "Es gibt keinen Unterschied",
            "Ein Switch sendet Daten gezielt an den richtigen Port, ein Hub an alle",
            "Ein Hub ist schneller als ein Switch",
            "Switches sind drahtlos, Hubs haben Kabel"
          ],
          correct: 1,
          explanation: "Ein Switch ist intelligent: Er kennt die MAC-Adressen der verbundenen Geräte und sendet Daten nur an den richtigen Port. Ein Hub sendet alles an alle – das ist ineffizient und unsicher."
        },
        {
          q: "Wie weit kann ein Ethernet-Signal über ein normales Cat5e/Cat6 Kabel ohne Verstärker übertragen werden?",
          options: ["10 Meter", "55 Meter", "100 Meter", "1000 Meter"],
          correct: 2,
          explanation: "Das Maximum für Ethernet über Twisted-Pair-Kabel (Cat5e, Cat6) beträgt 100 Meter. Danach wird das Signal zu schwach und muss mit einem Switch oder Repeater verstärkt werden."
        },
        {
          q: "Wofür steht 'RJ' beim RJ45-Stecker?",
          options: [
            "Registered Jack",
            "Round Junction",
            "Radio Junction",
            "Remote Jack"
          ],
          correct: 0,
          explanation: "RJ steht für 'Registered Jack' – ein in den USA standardisierter Steckertyp. RJ45 hat 8 Positionen (8P) und 8 Kontakte (8C), daher auch '8P8C' genannt."
        },
        {
          q: "Was überträgt ein Glasfaserkabel im Gegensatz zu einem Kupferkabel?",
          options: ["Elektrische Signale", "Lichtsignale", "Funksignale", "Magnetische Impulse"],
          correct: 1,
          explanation: "Glasfaserkabel übertragen Daten als Lichtsignale durch dünne Glasfasern. Das ermöglicht extrem hohe Geschwindigkeiten (bis zu 100 Gbit/s und mehr) über sehr große Entfernungen."
        },
        {
          q: "Was ist der erste Schritt beim Crimpen eines LAN-Kabels?",
          options: [
            "RJ45-Stecker aufstecken",
            "Mit dem LAN-Tester testen",
            "Kabelmantel ca. 3 cm abisolieren",
            "Drähte nach Farben sortieren"
          ],
          correct: 2,
          explanation: "Der erste Schritt ist immer das Abisolieren des Kabelmantels (ca. 3 cm). Danach: Paare aufdrehen → Drähte sortieren (568-B) → kürzen → in RJ45 stecken → crimpen → testen."
        },
      ]
    }
  ]
};
