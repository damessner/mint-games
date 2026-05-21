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
      knowledge: {
        title: "Kabel, Kabel, Kabel – welches wofür? 🔌",
        blocks: [
          {
            type: "text",
            content: "In deiner Schule, in deinem Zuhause, unter der Straße – überall verlaufen Kabel. Aber nicht alle Kabel sind gleich! Je nach Einsatz braucht man verschiedene Typen. Lass uns die drei wichtigsten kennenlernen! 💪"
          },
          {
            type: "cable-cards",
            cables: [
              {
                icon: "📻",
                name: "Koaxialkabel",
                color: "#8B5CF6",
                description: "Das älteste der drei Typen. Kennst du das dicke runde Kabel hinter dem Fernseher? Das ist ein Koaxialkabel!",
                properties: [
                  "Ein einzelner Kupferleiter in der Mitte",
                  "Umgeben von einer Isolierung & Metallgeflecht",
                  "Wird für Kabel-TV, Radio & ältere Netzwerke verwendet",
                  "Gut gegen elektromagnetische Störungen geschützt"
                ],
                emoji: "📺 Kabel-TV · 📡 Antennenkabel"
              },
              {
                icon: "🔵",
                name: "UTP-Kabel (Twisted Pair)",
                color: "#3B82F6",
                description: "Das ist DAS Netzwerkkabel schlechthin! UTP steht für 'Unshielded Twisted Pair' – also ungeschirmte, verdrillte Paare.",
                properties: [
                  "8 Kupferdrähte in 4 verdrillten Paaren",
                  "Verdrillung reduziert Störungen (clever! 🧠)",
                  "Wird für LAN/Ethernet-Netzwerke verwendet",
                  "Verschiedene Kategorien: Cat5e, Cat6, Cat7…",
                ],
                emoji: "🖥️ LAN · 📶 Router · 🏢 Büronetzwerke"
              },
              {
                icon: "✨",
                name: "Glasfaserkabel",
                color: "#10B981",
                description: "Die Königsklasse unter den Kabeln! Hier fließen keine Elektronen – hier reist Licht mit Lichtgeschwindigkeit! ⚡",
                properties: [
                  "Überträgt Daten als Lichtsignale",
                  "Extrem hohe Geschwindigkeit (bis 100 Gbit/s & mehr)",
                  "Sehr große Reichweite (bis zu 100 km ohne Verstärker!)",
                  "Unempfindlich gegen elektromagnetische Störungen",
                ],
                emoji: "🌍 Internet-Backbone · 🏠 Glasfaser-Hausanschluss"
              }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Warum verdrillt man die Drähte beim UTP-Kabel?",
            content: "Das ist echte Ingenieurskunst! Wenn zwei Drähte miteinander verdrillt werden, heben sich ihre elektromagnetischen Felder gegenseitig auf. Das nennt man 'Differentialsignalübertragung'. Störsignale von außen beeinflussen beide Drähte gleich – und werden dadurch automatisch herausgefiltert! 🧲❌"
          },
          {
            type: "keyterms",
            terms: [
              { term: "UTP", icon: "🔵", def: "Unshielded Twisted Pair – ungeschirmtes, verdrilltes Kabel. Standard für LAN-Netzwerke." },
              { term: "STP", icon: "🛡️", def: "Shielded Twisted Pair – wie UTP, aber mit zusätzlicher Metallabschirmung gegen Störungen." },
              { term: "Koaxialkabel", icon: "📻", def: "Rundes Kabel mit einem Leiter in der Mitte. Für TV-Antennen und ältere Netzwerke." },
              { term: "Glasfaser", icon: "✨", def: "Überträgt Licht statt Strom. Sehr schnell, sehr weit, sehr teuer." },
            ]
          }
        ]
      },
      question: "Ordne die Eigenschaften den richtigen Kabeltypen zu!",
      instruction: "Ziehe jede Eigenschaft zum passenden Kabeltyp.",
      targets: [
        { id: "t-koax",      label: "📻 Koaxialkabel",   accepts: ["koax1", "koax2"] },
        { id: "t-utp",       label: "🔵 UTP-Kabel",      accepts: ["utp1", "utp2"] },
        { id: "t-glasfaser", label: "✨ Glasfaserkabel",  accepts: ["glas1", "glas2"] },
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
      knowledge: {
        title: "8 Drähte, 8 Farben – und eine weltweite Regel! 🌍",
        blocks: [
          {
            type: "text",
            content: "Schau mal genau in ein aufgeschnittenes LAN-Kabel: Da drin sind 8 Drähte in 4 Farb-Paaren. Und die Reihenfolge, in der du sie in den RJ45-Stecker steckst, ist weltweit genormt! 🌍 Diese Norm heißt TIA/EIA 568-B."
          },
          {
            type: "highlight",
            icon: "🤔",
            title: "Warum brauchen wir eine Norm?",
            content: "Stell dir vor, jeder Hersteller würde die Drähte in einer anderen Reihenfolge anordnen. Dann würde ein Kabel von Firma A nicht mit einem Switch von Firma B funktionieren! Die internationale Norm stellt sicher, dass alle Geräte überall auf der Welt miteinander kommunizieren können. 🤝"
          },
          {
            type: "color-table",
            title: "TIA/EIA 568-B – Die offizielle Reihenfolge:",
            rows: [
              { pin: 1, color: "#FF8C00", stripe: true,  stripeColor: "#FFFFFF", label: "Orange-Weiß",  pair: "Paar 2" },
              { pin: 2, color: "#FF6600", stripe: false,                          label: "Orange",       pair: "Paar 2" },
              { pin: 3, color: "#00AA44", stripe: true,  stripeColor: "#FFFFFF", label: "Grün-Weiß",   pair: "Paar 3" },
              { pin: 4, color: "#0055CC", stripe: false,                          label: "Blau",         pair: "Paar 1" },
              { pin: 5, color: "#3399FF", stripe: true,  stripeColor: "#FFFFFF", label: "Blau-Weiß",   pair: "Paar 1" },
              { pin: 6, color: "#007722", stripe: false,                          label: "Grün",         pair: "Paar 3" },
              { pin: 7, color: "#AA6633", stripe: true,  stripeColor: "#FFFFFF", label: "Braun-Weiß",  pair: "Paar 4" },
              { pin: 8, color: "#8B4513", stripe: false,                          label: "Braun",        pair: "Paar 4" },
            ]
          },
          {
            type: "highlight",
            icon: "🧠",
            title: "Merkhilfe für die Reihenfolge:",
            content: "O/w – O – G/w – BL – BL/w – G – BR/w – BR\n(Orange-weiß, Orange, Grün-weiß, Blau, Blau-weiß, Grün, Braun-weiß, Braun)\n\n🎵 Tipp: Lerne es wie einen Reim: 'OraWei, Ora, GrüWei, Blau – BlauWei, Grün, BraunWei, Braun!'"
          },
          {
            type: "text",
            content: "Beachte: Paar 1 (Blau) und Paar 3 (Grün) sind aufgeteilt – Grün-Weiß kommt auf Pin 3, aber Grün kommt erst auf Pin 6! Das ist der knifflige Teil! 😅"
          }
        ]
      },
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
      explanation: "Der TIA/EIA 568-B Standard: Pin 1-Orange/Weiß, 2-Orange, 3-Grün/Weiß, 4-Blau, 5-Blau/Weiß, 6-Grün, 7-Braun/Weiß, 8-Braun."
    },

    // ── Aktivität 3: Lückentext – Kabelkategorien ───────────
    {
      id: "m2-a3",
      type: "fillgaps",
      badge: "✏️ Lückentext",
      knowledge: {
        title: "Cat5, Cat6, Cat7 – was bedeuten diese Zahlen? 📊",
        blocks: [
          {
            type: "text",
            content: "LAN-Kabel werden in Kategorien (kurz: Cat) eingeteilt. Je höher die Zahl, desto schneller und besser das Kabel. Aber was bedeutet das genau für dich? 🤔"
          },
          {
            type: "spec-table",
            title: "Kabelkategorien im Vergleich:",
            headers: ["Kategorie", "Max. Geschwindigkeit", "Max. Frequenz", "Länge", "Einsatz"],
            rows: [
              ["Cat5", "100 Mbit/s", "100 MHz", "100m", "Veraltet 🏚️"],
              ["Cat5e", "1.000 Mbit/s (1 Gbit/s)", "100 MHz", "100m", "Heimnetzwerk 🏠"],
              ["Cat6", "10.000 Mbit/s (10 Gbit/s)", "250 MHz", "55m", "Büro & Schule 🏢"],
              ["Cat6a", "10.000 Mbit/s (10 Gbit/s)", "500 MHz", "100m", "Professionell 🏆"],
              ["Cat7", "10.000 Mbit/s (10 Gbit/s)", "600 MHz", "100m", "Rechenzentren 🏗️"],
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Was ist Mbit/s und Gbit/s?",
            content: "Mbit/s = Megabit pro Sekunde. Gbit/s = Gigabit pro Sekunde.\n1 Gbit/s = 1.000 Mbit/s = 125 MB/s = ca. 1 Blu-ray Film in 4 Sekunden! 🎬\nZum Vergleich: Ein normales WLAN zu Hause ist oft nur 50-200 Mbit/s."
          },
          {
            type: "keyterms",
            terms: [
              { term: "RJ45", icon: "🔌", def: "Der Standard-Stecker für LAN-Kabel. Hat 8 Pins (Kontakte). Sieht aus wie ein breiter Telefonstecker." },
              { term: "Cat5e", icon: "🔵", def: "Category 5 enhanced – Standard für Heimnetzwerke. 1 Gbit/s, 100m Reichweite." },
              { term: "Cat6", icon: "🟢", def: "Category 6 – für Büros und Schulen. 10 Gbit/s, aber nur 55m bei voller Geschwindigkeit." },
              { term: "Ethernet", icon: "🌐", def: "Die Technologie hinter kabelgebundenen Netzwerken. Definiert, wie Daten über Kabel übertragen werden." },
            ]
          },
          {
            type: "text",
            content: "Der RJ45-Stecker (am Ende des LAN-Kabels) hat genau 8 Kontakte – einen für jeden der 8 Drähte. RJ steht für 'Registered Jack' – ein US-amerikanischer Standard, der weltweit übernommen wurde. 🌍"
          }
        ]
      },
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
      knowledge: {
        title: "Jetzt wird's praktisch: Ein LAN-Kabel selbst crimpen! 🔧",
        blocks: [
          {
            type: "text",
            content: "Das Crimpen eines LAN-Kabels ist eine echte Handwerks-Fähigkeit! Mit etwas Übung kann jeder ein professionelles Netzwerkkabel herstellen. Das spart Geld und macht Spaß – lass uns die Schritte lernen! 💪"
          },
          {
            type: "tools",
            title: "Das brauchst du:",
            items: [
              { icon: "🔧", name: "Crimpzange", desc: "Presst den RJ45-Stecker auf die Drähte" },
              { icon: "✂️", name: "Abisolierzange", desc: "Entfernt den Außenmantel sauber" },
              { icon: "📏", name: "Lineal", desc: "Für die genaue Länge (13mm Drähte)" },
              { icon: "🔍", name: "LAN-Tester", desc: "Prüft, ob alle 8 Verbindungen funktionieren" },
              { icon: "🔌", name: "LAN-Kabel (UTP)", desc: "Das Rohmaterial – Cat5e oder Cat6" },
              { icon: "🔩", name: "RJ45-Stecker", desc: "Je 1 Stück pro Ende des Kabels" },
            ]
          },
          {
            type: "steps",
            title: "Die 7 Schritte zum perfekten LAN-Kabel:",
            steps: [
              { icon: "✂️", text: "Kabelmantel ca. 3 cm abisolieren (mit Abisolierzange)" },
              { icon: "🔓", text: "Die 4 Drahtpaare aufdrehen und einzelne Drähte trennen" },
              { icon: "🎨", text: "Drähte nach TIA/EIA 568-B Farbcode sortieren und gerade ausrichten" },
              { icon: "📏", text: "Drähte auf gleiche Länge abschneiden (ca. 13mm)" },
              { icon: "📥", text: "Drähte vorsichtig in den RJ45-Stecker einschieben (bis ganz vorne)" },
              { icon: "🔧", text: "RJ45-Stecker mit der Crimpzange festpressen" },
              { icon: "🔍", text: "Kabel mit LAN-Tester auf Funktion prüfen" },
            ]
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "Wichtige Tipps für das Crimpen:",
            content: "✅ Drähte müssen bis ganz vorne in den Stecker ragen (bis zu den Kontakten)\n✅ Alle 8 Drähte müssen parallel und gerade sein – kein Überkreuzen!\n✅ Nach dem Crimpen leicht am Stecker ziehen – er darf nicht herausfallen\n✅ Immer beide Enden des Kabels testen!\n❌ Mantel NICHT zu weit abisolieren – max. 3cm reichen aus"
          }
        ]
      },
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
      knowledge: {
        title: "Die Geräte in deinem Netzwerk – was macht was? 🔀",
        blocks: [
          {
            type: "text",
            content: "Wenn du dein WLAN-Passwort eingibst, weißt du was dahinter steckt? In jedem Heim- und Schulnetzwerk gibt es mehrere verschiedene Geräte mit ganz unterschiedlichen Aufgaben. Lass sie uns kennenlernen! 🕵️"
          },
          {
            type: "device-cards",
            devices: [
              {
                icon: "🔀",
                name: "Switch",
                color: "#3B82F6",
                function: "Verbindet mehrere Geräte im LAN (Local Area Network)",
                detail: "Ein Switch ist 'intelligent' – er kennt die Adresse jedes angeschlossenen Geräts (MAC-Adresse) und schickt Datenpakete nur an den richtigen Port. Das ist viel effizienter als ein Hub!",
                ports: "8, 16, 24 oder 48 Ports"
              },
              {
                icon: "📡",
                name: "Router",
                color: "#10B981",
                function: "Verbindet verschiedene Netzwerke (z.B. dein Heimnetz mit dem Internet)",
                detail: "Der Router ist das 'Tor zum Internet'. Er kennt die Adressen im Netz und entscheidet, welchen Weg jedes Datenpaket nehmen soll. Dein WLAN-Router zu Hause ist meistens Router + Switch + WLAN-Access Point in einem!",
                ports: "1-4 LAN-Ports + WAN-Port für Internet"
              },
              {
                icon: "🔌",
                name: "Hub",
                color: "#6B7280",
                function: "Älteres Gerät – sendet Daten an ALLE Ports (nicht gezielt)",
                detail: "Ein Hub ist wie eine Gegensprechanlage in einem Haus: Alle hören alles. Das ist ineffizient und unsicher! Hubs werden heute kaum mehr verwendet – Switches haben sie abgelöst.",
                ports: "Veraltet – wird kaum noch verwendet ❌"
              },
              {
                icon: "📶",
                name: "Access Point (WLAN)",
                color: "#F59E0B",
                function: "Ermöglicht drahtlose WLAN-Verbindungen",
                detail: "Der Access Point ist die 'Basisstation' für WLAN-Geräte. Er empfängt WLAN-Signale von Smartphones, Tablets und Laptops und leitet sie über Kabel an den Switch/Router weiter.",
                ports: "1 LAN-Port für Verkabelung"
              },
              {
                icon: "🔁",
                name: "Repeater",
                color: "#8B5CF6",
                function: "Verstärkt das WLAN-Signal und verlängert dessen Reichweite",
                detail: "Ein Repeater empfängt das WLAN-Signal und sendet es mit voller Stärke weiter. Damit können auch weit entfernte Räume mit WLAN versorgt werden. Nachteil: Die Geschwindigkeit wird halbiert!",
                ports: "Kein LAN-Port nötig (läuft per WLAN)"
              }
            ]
          },
          {
            type: "highlight",
            icon: "🏠",
            title: "Was hat dein Zuhause?",
            content: "Typisches Heimnetzwerk: Dein Internet-Anbieter liefert ein Kabel ins Haus → das geht in den Router (oft Kombigerät mit WLAN) → an den Router können über LAN-Kabel weitere Geräte angeschlossen werden → WLAN für Smartphones & Tablets"
          }
        ]
      },
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
      knowledge: {
        title: "Bereit für das Abschlussquiz? Hier ist dein Spickzettel! 📝",
        blocks: [
          {
            type: "text",
            content: "Fast geschafft! 🎉 Du weißt jetzt alles über LAN-Kabel, Netzwerkgeräte und Farbcodes. Hier nochmal die wichtigsten Fakten, dann startet dein Abschlussquiz!"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🔵", title: "UTP-Kabel", text: "8 Drähte, 4 verdrillte Paare, für LAN" },
              { icon: "📻", title: "Koaxialkabel", text: "1 Leiter, für TV/Antenne, rund" },
              { icon: "✨", title: "Glasfaser", text: "Lichtsignale, schnellstes Kabel" },
              { icon: "🎨", title: "568-B Norm", text: "OW-O-GW-BL-BLW-G-BRW-BR" },
              { icon: "🔌", title: "RJ45", text: "8 Kontakte, Standard LAN-Stecker" },
              { icon: "🔀", title: "Switch vs Hub", text: "Switch = gezielt, Hub = alle" },
            ]
          },
          {
            type: "highlight",
            icon: "🔧",
            title: "Crimping-Reihenfolge – nochmal!",
            content: "1️⃣ Mantel abisolieren (3cm) → 2️⃣ Paare aufdrehen → 3️⃣ Sortieren (568-B) → 4️⃣ Kürzen (13mm) → 5️⃣ In RJ45 einschieben → 6️⃣ Crimpen → 7️⃣ Testen\n\nNach dem Quiz bekommst du dein persönliches Zertifikat! 🏆"
          }
        ]
      },
      questions: [
        {
          q: "Wie viele Drähte (Adern) hat ein Standard LAN/Ethernet-Kabel (UTP)?",
          options: ["4 Drähte", "6 Drähte", "8 Drähte", "12 Drähte"],
          correct: 2,
          explanation: "Ein UTP-Kabel (Unshielded Twisted Pair) hat 8 Drähte, die in 4 Paare verdrillt sind. Jedes Paar ist miteinander verdrillt, um elektromagnetische Störungen zu reduzieren."
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
          options: ["Registered Jack", "Round Junction", "Radio Junction", "Remote Jack"],
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
