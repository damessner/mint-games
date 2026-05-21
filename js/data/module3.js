// ============================================================
// MINT-Games – Modul 3: VLANs, Switches & Loops
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Netzwerke, Datenübertragung & Sicherheit
// ============================================================

const MODULE_3 = {
  id: 3,
  title: "VLANs, Switches & Loops",
  icon: "🔀",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Netzwerke & Datenübertragung",
  activities: [

    // ── Aktivität 1: Access-Ports vs. Trunk-Ports (Drag & Drop) ──
    {
      id: "m3-a1",
      type: "dragdrop",
      badge: "🎯 Port-Typen",
      knowledge: {
        title: "Switches und ihre Anschlüsse (Ports) 🔌",
        blocks: [
          {
            type: "text",
            content: "Ein **Switch** ist der Verteiler im Netzwerk. Er hat viele Buchsen, in die man LAN-Kabel stecken kann – diese nennen wir **Ports**. Aber wusstest du, dass Port nicht gleich Port ist? Wenn wir virtuelle Netzwerke (VLANs) nutzen, gibt es zwei super wichtige Port-Arten: **Access-Ports** und **Trunk-Ports**! 🧠"
          },
          {
            type: "comparison",
            title: "Access-Port vs. Trunk-Port:",
            leftTitle: "Access-Port (Zugang) 🖥️",
            leftContent: [
              "Verbindet ein **Endgerät** (PC, Drucker, Spielekonsole) mit dem Switch.",
              "Gehört immer zu **genau einem** VLAN.",
              "Die Daten reisen ohne 'Etikett' (ungetaggt) – das Endgerät merkt gar nichts vom VLAN!",
              "Sicherheit: Ein PC am Access-Port kann nicht einfach in ein anderes VLAN hineinlinsen."
            ],
            rightTitle: "Trunk-Port (Stammleitung) 🔀",
            rightContent: [
              "Verbindet einen **Switch mit einem anderen Switch** (oder einem Router).",
              "Trägt die Daten für **viele verschiedene** VLANs gleichzeitig über ein einziges Kabel!",
              "Jedes Datenpaket bekommt ein 'Etikett' (VLAN-Tag) mit der VLAN-ID aufgeklebt (Norm 802.1Q).",
              "Damit der empfangende Switch weiß, wohin das Paket gehört."
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Das Post-Gleichnis 📦",
            content: "Stell dir ein Bürogebäude vor. Ein **Access-Port** ist wie der Schreibtisch eines Mitarbeiters: Er bekommt nur Briefe, die direkt für ihn sind (ohne Umschlag). Ein **Trunk-Port** ist wie der Postbote, der eine Kiste mit vielen beschrifteten Briefumschlägen für verschiedene Abteilungen ins Gebäude trägt. Die Umschläge haben die Abteilung aufgeschrieben (das VLAN-Tag)!"
          },
          {
            type: "keyterms",
            terms: [
              { term: "Port", icon: "🔌", def: "Die physikalische Buchse an einem Switch, in die das LAN-Kabel gesteckt wird." },
              { term: "Access-Port", icon: "🖥️", def: "Port für ein Endgerät. Überträgt Daten für nur ein einziges VLAN ohne Tags." },
              { term: "Trunk-Port", icon: "🔀", def: "Port für Verbindungen zwischen Switches. Überträgt getaggte Daten für mehrere VLANs." },
              { term: "Tagging (802.1Q)", icon: "🏷️", def: "Das Kennzeichnen von Datenpaketen mit einer VLAN-ID (Zahl von 1 bis 4094)." }
            ]
          }
        ]
      },
      question: "Ordne die Aussagen den richtigen Port-Typen zu!",
      instruction: "Ziehe jede Eigenschaft zum passenden Port-Typ.",
      targets: [
        { id: "t-access", label: "🖥️ Access-Port", accepts: ["acc1", "acc2"] },
        { id: "t-trunk",  label: "🔀 Trunk-Port",  accepts: ["tru1", "tru2"] }
      ],
      items: [
        { id: "acc1", text: "Verbindet PCs oder Drucker mit dem Switch" },
        { id: "acc2", text: "Gehört zu genau einem VLAN (ungetaggt)" },
        { id: "tru1", text: "Verbindet zwei Switches miteinander" },
        { id: "tru2", text: "Trägt Daten für mehrere VLANs gleichzeitig (getaggt)" }
      ],
      explanation: "Access-Ports verbinden Endgeräte (wie Computer) und übertragen Daten für ein einziges VLAN ungetaggt. Trunk-Ports verbinden Switches untereinander und leiten Daten für mehrere VLANs weiter, indem sie diese mit VLAN-Tags kennzeichnen."
    },

    // ── Aktivität 2: VLAN-Zuordnung (Drag & Drop) ──────────────────
    {
      id: "m3-a2",
      type: "dragdrop",
      badge: "🎯 VLAN-Teilung",
      knowledge: {
        title: "VLAN: Ein Netzwerk in logische Bereiche teilen ✂️",
        blocks: [
          {
            type: "text",
            content: "Warum teilt man ein Netzwerk überhaupt auf? Stell dir vor, an deiner Schule sind alle Geräte im selben Netzwerk: Die Laptops der Schüler, die PCs der Direktion und das offene WLAN für Gäste. \n\nOhne Trennung könnte ein neugieriger Schüler vielleicht auf die Zeugnisdaten im Sekretariat zugreifen oder ein Gast-Handy fängt sensible Lehrer-E-Mails ab! Das wollen wir auf keinen Fall! 🔒"
          },
          {
            type: "highlight",
            icon: "🛡️",
            title: "Die Lösung: VLAN (Virtual Local Area Network)",
            content: "Mit einem VLAN können wir an ein und demselben Switch logische Grenzen ziehen. Obwohl alle Geräte am selben Gerät stecken, verhält es sich so, als wären sie in völlig getrennten Räumen und Kabeln angeschlossen! Ein Gerät in VLAN 10 kann standardmäßig NIEMALS mit einem Gerät in VLAN 20 sprechen, außer ein Router erlaubt es ausdrücklich!"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "👩‍🏫", title: "VLAN 10: Verwaltung & Lehrer", text: "Streng geheim! Für PCs der Direktion, Sekretariat & Notendrucker." },
              { icon: "💻", title: "VLAN 20: Schülergeräte", text: "Sicher & kontrolliert! Für PCs im Informatikraum und Schüler-Tablets." },
              { icon: "📶", title: "VLAN 30: Gäste-WLAN", text: "Komplett isoliert! Für Besucher am Elternsprechtag. Kein Zugriff auf Schulgeräte." }
            ]
          },
          {
            type: "text",
            content: "Durch diese Aufteilung wird das Netzwerk nicht nur sicherer, sondern auch schneller. Denn sogenannte *Broadcasts* (Rundrufe, die alle Geräte senden) werden nur noch innerhalb des eigenen VLANs verteilt und verstopfen nicht das gesamte Schulnetz! 🚀"
          }
        ]
      },
      question: "Ordne die Schulgeräte dem richtigen VLAN zu!",
      instruction: "Ziehe die Geräte in die passende Sicherheitszone (VLAN).",
      targets: [
        { id: "v-lehrer",   label: "🔒 VLAN 10 (Lehrer & Verwaltung)", accepts: ["dev_l1", "dev_l2"] },
        { id: "v-schueler", label: "💻 VLAN 20 (Schüler-Geräte)",        accepts: ["dev_s1", "dev_s2"] },
        { id: "v-gaeste",   label: "📶 VLAN 30 (Gäste-Netzwerk)",        accepts: ["dev_g1", "dev_g2"] }
      ],
      items: [
        { id: "dev_l1", text: "💻 PC des Direktors" },
        { id: "dev_l2", text: "🖨️ Drucker für Zeugnisse" },
        { id: "dev_s1", text: "🖥️ PC im Informatikraum" },
        { id: "dev_s2", text: "📱 Tablet der 2a-Klasse" },
        { id: "dev_g1", text: "📱 Handy eines Vaters am Elternabend" },
        { id: "dev_g2", text: "💻 Laptop einer Gastvortragenden" }
      ],
      explanation: "VLAN 10 sichert sensible Verwaltungsgeräte (PC Direktor, Zeugnisdrucker). VLAN 20 trennt die Schülergeräte (Informatikraum, Klasse-Tablets). VLAN 30 isoliert Gäste komplett vom internen Schulnetzwerk."
    },

    // ── Aktivität 3: Loop & Spanning Tree (Lückentext) ─────────────
    {
      id: "m3-a3",
      type: "fillgaps",
      badge: "✏️ Loops & STP",
      knowledge: {
        title: "Vorsicht vor dem Netzwerkkringel (Loops)! 🔄🚨",
        blocks: [
          {
            type: "text",
            content: "In großen Netzwerken will man Ausfallsicherheit. Wenn ein Kabel kaputtgeht, soll das Netzwerk trotzdem weiterlaufen. Also legt man oft ein zweites Kabel als Reserve (das nennen wir **Redundanz**). Aber das birgt eine riesige Gefahr: **Netzwerk-Loops** (Schleifen)! 🌀"
          },
          {
            type: "highlight",
            icon: "💥",
            title: "Was ist ein Broadcast-Sturm?",
            content: "Wenn zwei Switches mit zwei Kabeln im Kreis geschaltet sind, fangen Datenpakete an, endlos im Kreis zu kreisen. Da es im Ethernet-Protokoll kein 'Ablaufdatum' (TTL) für Pakete gibt, verdoppeln sich die Pakete rasend schnell. Innerhalb von Sekunden ist der Switch überlastet – alle Lämpchen blinken wild und das gesamte Netzwerk bricht zusammen! 😱"
          },
          {
            type: "text",
            content: "Damit das nicht passiert, gibt es einen eingebauten Schutzengel in jedem modernen Switch: Das **Spanning Tree Protocol (STP)**!"
          },
          {
            type: "steps",
            title: "Wie STP das Netzwerk rettet:",
            steps: [
              { icon: "🕵️", text: "Die Switches senden sich spezielle Kontrollnachrichten (BPDUs) zu." },
              { icon: "🗺️", text: "Sie erstellen eine logische Karte des Netzwerks ohne Kreise." },
              { icon: "🔒", text: "STP blockiert automatisch die redundanten Ports (stellt sie auf 'Blocking')." },
              { icon: "🔌", text: "Wenn ein aktives Kabel bricht, bemerkt STP das sofort!" },
              { icon: "🔓", text: "Der blockierte Reserve-Port wird blitzschnell geöffnet (Forwarding)." }
            ]
          }
        ]
      },
      question: "Fülle die Lücken zum Thema Netzwerkschleifen und STP aus!",
      instruction: "Tippe die fehlenden Wörter in die Lücken ein.",
      segments: [
        { type: "text", text: "Wenn man zwei Switches mit zwei Kabeln parallel verbindet, entsteht eine " },
        { type: "gap", id: "g1", answer: "Schleife", hint: "Anderes Wort für Loop" },
        { type: "text", text: ". Datenpakete kreisen endlos und verursachen einen " },
        { type: "gap", id: "g2", answer: "Broadcast-Sturm", hint: "Überlastung des Netzes durch kreisende Pakete" },
        { type: "text", text: ", der das Netz lahmlegt. Um das zu verhindern und trotzdem " },
        { type: "gap", id: "g3", answer: "Redundanz", hint: "Ausfallsicherheit durch Reservekabel" },
        { type: "text", text: " zu ermöglichen, nutzen Switches das " },
        { type: "gap", id: "g4", answer: "Spanning Tree Protocol", hint: "STP ausgeschrieben" },
        { type: "text", text: " (STP). Dieses Protokoll " },
        { type: "gap", id: "g5", answer: "blockiert", hint: "Zustand des Reserve-Ports (auf Deutsch)" },
        { type: "text", text: " Reserveverbindungen so lange, bis eine aktive Verbindung ausfällt." }
      ],
      explanation: "Eine Schleife (Loop) führt zum gefürchteten Broadcast-Sturm. Das Spanning Tree Protocol (STP) verhindert dies, indem es Reservekabel (Redundanz) blockiert, bis sie gebraucht werden."
    },

    // ── Aktivität 4: Begriffs-Matching (Zuordnung) ───────────────
    {
      id: "m3-a4",
      type: "matching",
      badge: "🔗 Zuordnung",
      knowledge: {
        title: "Begriffe-Check: Alles im Griff? 🔍",
        blocks: [
          {
            type: "text",
            content: "Wir haben eine Menge Fachbegriffe kennengelernt. Lass uns diese festigen, bevor wir zu den Port-Zuständen und zum Abschlussquiz kommen! Hier ist deine schnelle Übersicht zum Lernen. 📚"
          },
          {
            type: "keyterms",
            terms: [
              { term: "VLAN-ID", icon: "🆔", def: "Die Nummer des VLANs (1 bis 4094). Standardmäßig sind alle Ports im VLAN 1." },
              { term: "Broadcast", icon: "📢", def: "Ein Rundruf im Netzwerk, der an ALLE Geräte geschickt wird (z.B. 'Wer hat die IP 192.168.1.1?')." },
              { term: "Redundanz", icon: "🛡️", def: "Das Vorhandensein von zusätzlichen Reservewegen zur Absicherung gegen Ausfälle." },
              { term: "802.1Q", icon: "📜", def: "Der weltweite Standard, der festlegt, wie VLAN-Tags in Datenpakete eingefügt werden." }
            ]
          },
          {
            type: "highlight",
            icon: "⚠️",
            title: "Wichtig zu wissen:",
            content: "Ein Switch arbeitet auf Schicht 2 (Data Link Layer) des OSI-Modells und nutzt MAC-Adressen. Ein Router arbeitet auf Schicht 3 (Network Layer) und nutzt IP-Adressen, um verschiedene VLANs miteinander zu verbinden!"
          }
        ]
      },
      question: "Ordne die Netzwerkbegriffe ihrer richtigen Erklärung zu!",
      instruction: "Klicke zuerst links auf einen Begriff, dann rechts auf die passende Erklärung.",
      leftItems: [
        { id: "d1", text: "🆔 VLAN-ID" },
        { id: "d2", text: "📢 Broadcast" },
        { id: "d3", text: "🛡️ Redundanz" },
        { id: "d4", text: "🏷️ Tagging" },
        { id: "d5", text: "🔄 Loop" }
      ],
      rightItems: [
        { id: "dr1", text: "Die Nummer, die ein VLAN eindeutig identifiziert (z.B. VLAN 10).", matches: "d1" },
        { id: "dr2", text: "Ein Rundruf-Paket, das an alle Geräte im selben Netzsegment gesendet wird.", matches: "d2" },
        { id: "dr3", text: "Mehrere Verbindungswege, um das Netz ausfallsicher zu machen.", matches: "d3" },
        { id: "dr4", text: "Kennzeichnen eines Datenpakets mit einer VLAN-Nummer beim Trunk-Port.", matches: "d4" },
        { id: "dr5", text: "Ein Kreislauf im Netz, der durch doppelte Kabel ohne Schutz entsteht.", matches: "d5" }
      ],
      explanation: "VLAN-ID (Nummer), Broadcast (Rundruf), Redundanz (Reserve), Tagging (Kennzeichnung für Trunks), Loop (Fehlerhafte Schleife)."
    },

    // ── Aktivität 5: STP Portzustände sortieren (Sorting) ──────────
    {
      id: "m3-a5",
      type: "sorting",
      badge: "🔢 STP-Zustände",
      knowledge: {
        title: "Wie ein Switch-Port aufwacht: Die STP-Zustände ⏱️",
        blocks: [
          {
            type: "text",
            content: "Wenn du ein Kabel in einen Switch steckst, leuchtet das Lämpchen oft erst orange und wird nach ein paar Sekunden grün. Warum? Weil der Port nicht sofort Daten senden darf! \n\nEr muss erst prüfen, ob durch ihn ein Loop entsteht. Das macht das Spanning Tree Protocol, indem es den Port nacheinander durch vier Zustände schickt! 🚦"
          },
          {
            type: "steps",
            title: "Die Phasen des Aufwachens (STP Port States):",
            steps: [
              { icon: "🔴 1. Blocking (Blockierend)", text: "Der Port blockiert alle normalen Daten. Er hört nur auf Kontrollnachrichten (BPDUs). So wird ein Loop sofort verhindert." },
              { icon: "🟡 2. Listening (Zuhörend)", text: "Der Port horcht aktiv ins Netz. Er prüft, ob es andere Switches gibt und ob der Pfad sicher ist, ohne Schleifen zu bauen." },
              { icon: "🔵 3. Learning (Lernend)", text: "Der Port sendet noch keine Daten, aber er lernt die MAC-Adressen der angeschlossenen Geräte und speichert sie in seiner Tabelle." },
              { icon: "🟢 4. Forwarding (Weiterleitend)", text: "Alles sicher! Der Port ist voll aktiv. Er leitet normale Benutzerdaten weiter und empfängt sie." }
            ]
          },
          {
            type: "highlight",
            icon: "⏳",
            title: "Warum dauert das so lange?",
            content: "Dieser gesamte Prozess dauert standardmäßig ca. 30 bis 50 Sekunden. Das klingt kurz, ist im Netzwerk aber eine Ewigkeit! Es stellt jedoch sicher, dass beim Anstecken eines neuen Kabels niemals versehentlich ein Loop entsteht, der das Netz crasht. 🛡️"
          }
        ]
      },
      question: "Bringe die STP-Portzustände in die richtige zeitliche Reihenfolge!",
      instruction: "Sortiere die Zustände von oben nach unten (vom Anstecken des Kabels bis zur vollen Aktivität).",
      correctOrder: ["stp1", "stp2", "stp3", "stp4"],
      items: [
        { id: "stp3", text: "🔵 3. Learning (MAC-Adressen lernen, noch keine Daten weiterleiten)" },
        { id: "stp1", text: "🔴 1. Blocking (Keine Datenweiterleitung, Loop-Vermeidung)" },
        { id: "stp4", text: "🟢 4. Forwarding (Port voll aktiv, normale Daten fließen)" },
        { id: "stp2", text: "🟡 2. Listening (Prüfen auf Schleifen, BPDUs senden/empfangen)" }
      ],
      explanation: "Die korrekte STP-Reihenfolge ist: 1. Blocking (Sicherheit zuerst) → 2. Listening (Horchen) → 3. Learning (MAC-Tabellen lernen) → 4. Forwarding (Voll aktiv)."
    },

    // ── Aktivität 6: Abschlussquiz (Quiz) ──────────────────────────
    {
      id: "m3-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das große VLAN & Switch Quiz? 📝",
        blocks: [
          {
            type: "text",
            content: "Wow, du hast dich durch die Tiefen der Netzwerktechnik gekämpft! 🔀 Du weißt jetzt, wie man Netzwerke aufteilt, warum Kringel gefährlich sind und wie STP uns rettet. Hier ist dein Spickzettel für das Abschlussquiz:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🖥️", title: "Access-Port", text: "Verbindet Endgeräte. Nur 1 VLAN. Ungetaggt." },
              { icon: "🔀", title: "Trunk-Port", text: "Verbindet Switches. Viele VLANs. Getaggt (802.1Q)." },
              { icon: "🛡️", title: "VLAN", text: "Virtuelle Trennung am selben Switch. Erhöht Sicherheit." },
              { icon: "🔄", title: "Loop / Schleife", text: "Entsteht durch Kreisverkabelung. Crasht das Netz." },
              { icon: "🌳", title: "STP", text: "Spanning Tree Protocol. Verhindert Loops durch Blockieren." },
              { icon: "🚦", title: "STP Zustände", text: "Blocking → Listening → Learning → Forwarding" }
            ]
          },
          {
            type: "highlight",
            icon: "🏆",
            title: "Hol dir dein Zertifikat!",
            content: "Beantworte nun die 10 Fragen richtig, um dein offizielles Zertifikat für 'Netzwerk-Technik (VLAN & Switching)' herunterzuladen! Viel Erfolg! 💪"
          }
        ]
      },
      questions: [
        {
          q: "Was macht ein Switch im Netzwerk?",
          options: [
            "Er verbindet Geräte innerhalb eines LANs und leitet Daten gezielt weiter.",
            "Er wählt sich ins Internet ein.",
            "Er sperrt alle Webseiten.",
            "Er wandelt Lichtsignale in Funksignale um."
          ],
          correct: 0,
          explanation: "Ein Switch ist die Koppelstation für Geräte im Local Area Network (LAN). Im Gegensatz zum veralteten Hub leitet er Datenpakete gezielt an den Empfänger-Port weiter."
        },
        {
          q: "Wofür steht die Abkürzung 'VLAN'?",
          options: [
            "Virtual Local Area Network",
            "Very Long Antenna Network",
            "Vectorized LAN",
            "Variable Link Access Network"
          ],
          correct: 0,
          explanation: "VLAN steht für Virtual Local Area Network (Virtuelles lokales Netzwerk) und beschreibt die logische Aufteilung eines physischen Switches in getrennte Netze."
        },
        {
          q: "Welches Gerät verbindet standardmäßig verschiedene VLANs miteinander?",
          options: ["Ein Access-Port", "Ein Hub", "Ein Router (oder Layer-3-Switch)", "Eine Crimpzange"],
          correct: 2,
          explanation: "Da VLANs logisch komplett getrennt sind, benötigt man ein Gerät auf Schicht 3 (Network Layer) – einen Router oder Layer-3-Switch –, um Daten zwischen ihnen zu vermitteln."
        },
        {
          q: "An welchen Port steckst du einen normalen Schul-PC an?",
          options: ["Trunk-Port", "Access-Port", "Loop-Port", "Console-Port"],
          correct: 1,
          explanation: "Normale Endgeräte wie PCs, Notebooks oder Drucker werden immer an einen Access-Port angeschlossen. Dieser gehört zu genau einem VLAN und sendet ungetaggte Daten."
        },
        {
          q: "Was kennzeichnet eine Trunk-Verbindung?",
          options: [
            "Sie überträgt Daten für mehrere VLANs gleichzeitig und nutzt dafür VLAN-Tags.",
            "Sie darf nur für Drucker verwendet werden.",
            "Sie ist komplett drahtlos.",
            "Sie schaltet den Switch ab."
          ],
          correct: 0,
          explanation: "Trunk-Ports verbinden Switches untereinander und leiten Datenströme mehrerer VLANs über ein einziges Kabel. Jedes Paket erhält ein Tag (Etikett) mit der VLAN-ID (Standard 802.1Q)."
        },
        {
          q: "Was passiert bei einem Netzwerk-Loop (Schleife) ohne Schutzprotokoll?",
          options: [
            "Die Daten werden schneller übertragen.",
            "Es entsteht ein Broadcast-Sturm, der das Netzwerk innerhalb von Sekunden lahmlegt.",
            "Der PC fängt an zu brennen.",
            "Das Internet wird auf allen Geräten automatisch verschlüsselt."
          ],
          correct: 1,
          explanation: "Ohne Schutz kreisen Datenpakete unendlich im Kreis, vervielfachen sich und lösen einen Broadcast-Sturm aus, der die CPU des Switches überlastet und das Netz komplett lahmlegt."
        },
        {
          q: "Welches Protokoll verhindert Netzwerkschleifen (Loops)?",
          options: ["DHCP", "FTP", "STP (Spanning Tree Protocol)", "HTTP"],
          correct: 2,
          explanation: "STP steht für Spanning Tree Protocol (Spannbaum-Protokoll). Es erkennt Schleifen und blockiert redundante Ports, um einen kreisfreien Pfad aufzubauen."
        },
        {
          q: "In welchem STP-Zustand lernt der Port MAC-Adressen, leitet aber noch keine Benutzerdaten weiter?",
          options: ["Blocking", "Listening", "Learning", "Forwarding"],
          correct: 2,
          explanation: "Im Zustand 'Learning' (Lernend) baut der Switch-Port seine MAC-Adresstabelle auf, blockiert aber weiterhin den normalen Datenverkehr, um Loops während der Lernphase zu vermeiden."
        },
        {
          q: "Wie lautet die VLAN-ID, in der sich ein Switch-Port standardmäßig befindet?",
          options: ["VLAN 0", "VLAN 1", "VLAN 100", "VLAN 999"],
          correct: 1,
          explanation: "Standardmäßig befinden sich alle Ports eines Switches im VLAN 1. Dieses wird auch oft als Default- oder Management-VLAN voreingestellt."
        },
        {
          q: "Welche Norm regelt das VLAN-Tagging auf Trunk-Leitungen?",
          options: ["IEEE 802.11ac", "IEEE 802.3", "IEEE 802.1Q", "TIA/EIA 568-B"],
          correct: 2,
          explanation: "IEEE 802.1Q (oft einfach dot1q genannt) ist der weltweite Standard für VLAN-Tagging auf Trunk-Verbindungen im Ethernet-Netzwerk."
        }
      ]
    }
  ]
};
