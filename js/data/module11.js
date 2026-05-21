// ============================================================
// MINT-Games – Modul 11: IP-Adressierung & Subnetze
// Lehrplanbezug: Digitale Grundbildung MS Österreich
// Kompetenzbereiche: Netzwerke & Technische Grundlagen
// ============================================================

const MODULE_11 = {
  id: 11,
  title: "IP-Adressierung & Subnetze",
  icon: "🔢",
  duration: 45,
  totalActivities: 6,
  lehrplan: "Netzwerke & Technik",
  activities: [

    // ── Aktivität 1: Drag & Drop – IPv4 vs. IPv6 ────────────────────
    {
      id: "m11-a1",
      type: "dragdrop",
      badge: "🎯 IP-Standards",
      knowledge: {
        title: "IP-Adressen: Die Hausnummern des Internets 🌐",
        blocks: [
          {
            type: "text",
            content: "Damit Datenpakete im Internet ankommen, braucht jedes Gerät eine eindeutige Adresse – die **IP-Adresse** (Internet Protocol Address). Weil das Internet so riesig geworden ist, gibt es mittlerweile zwei Standards parallel."
          },
          {
            type: "comparison",
            left: {
              icon: "🔢",
              title: "IPv4 (Der bewährte Standard)",
              color: "primary",
              points: [
                "Besteht aus 32 Bit (4 Milliarden Adressen)",
                "Wird in Dezimalzahlen geschrieben: z.B. 192.168.1.1",
                "Vier Zahlenblöcke (Oktette) von 0 bis 255",
                "IP-Adressen sind weltweit fast komplett ausverkauft"
              ]
            },
            right: {
              icon: "🧬",
              title: "IPv6 (Der neue Standard)",
              color: "secondary",
              points: [
                "Besteht aus 128 Bit (340 Sextillionen Adressen)",
                "Wird in Hexadezimal (0-9, a-f) geschrieben",
                "Getrennt durch Doppelpunkte: z.B. 2001:db8::1",
                "Reicht aus, damit jedes Sandkorn eine eigene IP bekommt"
              ]
            }
          }
        ]
      },
      question: "Ordne die Eigenschaften dem richtigen IP-Adressen-Standard zu!",
      instruction: "Ziehe die Kärtchen in die passende Kategorie.",
      targets: [
        { id: "t-v4", label: "🔢 IPv4-Standard", accepts: ["v4_len", "v4_dec", "v4_limit", "v4_ex"] },
        { id: "t-v6", label: "🧬 IPv6-Standard", accepts: ["v6_len", "v6_hex", "v6_inf", "v6_ex"] }
      ],
      items: [
        { id: "v4_len",   text: "32 Bit Adresslänge" },
        { id: "v4_dec",   text: "Vier Dezimalzahlen durch Punkte getrennt" },
        { id: "v4_limit", text: "Knapp 4,3 Milliarden Adressen (Knappheit)" },
        { id: "v4_ex",    text: "Beispiel: 172.21.3.99" },
        { id: "v6_len",   text: "128 Bit Adresslänge" },
        { id: "v6_hex",   text: "Hexadezimalzahlen mit Buchstaben a-f" },
        { id: "v6_inf",   text: "Fast unendlicher Adressraum (Sextillionen)" },
        { id: "v6_ex",    text: "Beispiel: 2a02:560:42c::1" }
      ],
      explanation: "IPv4 nutzt 32-Bit-Adressen im Dezimalformat (z.B. 192.168.1.1), was zu Adressknappheit führt. IPv6 löst das Problem mit 128-Bit-Adressen im Hexadezimalformat."
    },

    // ── Aktivität 2: Lückentext – Netz-ID, Host-ID & Gateway ──────────
    {
      id: "m11-a2",
      type: "fillgaps",
      badge: "✏️ Subnetz-Aufbau",
      knowledge: {
        title: "Straße und Hausnummer: Subnetze verstehen 🗺️",
        blocks: [
          {
            type: "text",
            content: "Eine IP-Adresse ist wie eine Postadresse aufgebaut. Sie besteht aus einem Netzwerk-Teil (Straße) und einem Host-Teil (Hausnummer)."
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Die Maske teilt auf",
            content: "Welche Bits zum Netzwerk und welche zum Gerät gehören, verrät die **Subnetzmaske** (z.B. `255.255.255.0`). Steht in der Maske eine 255, gehört der entsprechende Block der IP-Adresse zum Netzwerk. Steht dort eine 0, gehört er dem Gerät."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Netzwerk-ID (Net-ID)", icon: "🛣️", def: "Bestimmt die 'Straße'. Alle Geräte in derselben Straße müssen denselben Netzwerk-Teil haben." },
              { term: "Host-ID", icon: "🏠", def: "Bestimmt das konkrete Gerät (PC, Drucker, Handy) in dieser Straße." },
              { term: "Standard-Gateway", icon: "🚪", def: "Die Ausgangstür aus dem eigenen Netzwerk. Meistens ist das die IP-Adresse des Routers." }
            ]
          }
        ]
      },
      question: "Fülle die Lücken aus, um die Funktionsweise von Subnetzmasken und Gateways zu erklären!",
      instruction: "Trage die richtigen Begriffe in die Lücken ein.",
      segments: [
        { type: "text", text: "Die Aufteilung einer IP-Adresse in Netzwerk- und Host-Teil wird durch die " },
        { type: "gap", id: "g1", answer: "subnetzmaske", hint: "z.B. 255.255.255.0" },
        { type: "text", text: " geregelt. Der vordere Teil der IP-Adresse heißt " },
        { type: "gap", id: "g2", answer: "netzwerk-id", hint: "Straße des Geräts (mit Bindestrich)" },
        { type: "text", text: ", während der hintere Teil, der das Gerät eindeutig kennzeichnet, als " },
        { type: "gap", id: "g3", answer: "host-id", hint: "Hausnummer des Geräts (mit Bindestrich)" },
        { type: "text", text: " bezeichnet wird. Möchte ein PC Daten an einen Webserver im weltweiten Internet schicken, leitet er diese an das " },
        { type: "gap", id: "g4", answer: "standard-gateway", hint: "Ausgangstür / Router-IP (mit Bindestrich)" },
        { type: "text", text: " weiter." }
      ],
      explanation: "Die Subnetzmaske trennt die Netzwerk-ID (Netz-Teil) von der Host-ID (Geräte-Teil). Das Standard-Gateway leitet Pakete an fremde Netzwerke (Internet) weiter."
    },

    // ── Aktivität 3: Zuordnung – IP-Adressbereiche ────────────────────
    {
      id: "m11-a3",
      type: "matching",
      badge: "🔗 IP-Bereiche",
      knowledge: {
        title: "Private vs. Öffentliche IPs und Localhost 🔒",
        blocks: [
          {
            type: "text",
            content: "Es gibt IP-Adressen, die sind wie deine Privatadresse zu Hause – sie sind im Internet nicht direkt sichtbar. Und es gibt Adressen, die jeder auf der Welt anrufen kann."
          },
          {
            type: "keyterms",
            terms: [
              { term: "Private IP-Adressen", icon: "🏠", def: "Werden in privaten Netzen (Heimnetz, Schule) verwendet. Sie sind kostenlos und mehrfach auf der Welt nutzbar (z.B. 192.168.x.x)." },
              { term: "Öffentliche IP-Adresse", icon: "🌍", def: "Gibt es weltweit nur einmal. Sie wird vom Internet-Provider an deinen Router vergeben." },
              { term: "Localhost (127.0.0.1)", icon: "🔄", def: "Die Loopback-Adresse. Sie zeigt immer auf den eigenen Computer zurück ('Home, sweet home')." }
            ]
          }
        ]
      },
      question: "Verbinde die IP-Adressbereiche und Begriffe mit ihrer richtigen Funktion!",
      instruction: "Wähle links die IP / den Begriff und rechts die passende Erklärung.",
      leftItems: [
        { id: "i1", text: "192.168.1.1" },
        { id: "i2", text: "127.0.0.1" },
        { id: "i3", text: "Öffentliche IP" },
        { id: "i4", text: "10.0.0.1" },
        { id: "i5", text: "DNS-Server IP" }
      ],
      rightItems: [
        { id: "ir1", text: "Klassische private IP im Heimnetzwerk", matches: "i1" },
        { id: "ir2", text: "Localhost (Verbindung zu sich selbst)", matches: "i2" },
        { id: "ir3", text: "Einzigartige IP des Routers im weltweiten Internet", matches: "i3" },
        { id: "ir4", text: "Großer privater IP-Bereich für Schulen und Firmen", matches: "i4" },
        { id: "ir5", text: "IP-Adresse eines Dienstes zur Namensauflösung (z.B. 8.8.8.8)", matches: "i5" }
      ],
      explanation: "192.168.x.x und 10.x.x.x sind private IP-Bereiche. 127.0.0.1 zeigt auf sich selbst (Localhost). Öffentliche IPs sind im Web einzigartig."
    },

    // ── Aktivität 4: Sortierung – Binäre Stellenwerte ──────────────────
    {
      id: "m11-a4",
      type: "sorting",
      badge: "🔢 Binär-System",
      knowledge: {
        title: "Wie Computer zählen: Binärcode im IP-Netz 🤖",
        blocks: [
          {
            type: "text",
            content: "Computer kennen nur Strom an (1) oder Strom aus (0). Jede Zahl einer IPv4-Adresse (jedes Oktett) besteht aus genau 8 Bits. Um Dezimalzahlen (wie 192) in Binärzahlen umzurechnen, nutzen wir die 8 Stellenwerte:"
          },
          {
            type: "steps",
            title: "Die Stellenwerte von links (höchstes Bit) nach rechts (niedrigstes Bit):",
            steps: [
              { icon: "🔢 1. Bit", text: "Wertigkeit: 128" },
              { icon: "🔢 2. Bit", text: "Wertigkeit: 64" },
              { icon: "🔢 3. Bit", text: "Wertigkeit: 32" },
              { icon: "🔢 4. Bit", text: "Wertigkeit: 16" },
              { icon: "🔢 5. Bit", text: "Wertigkeit: 8" },
              { icon: "🔢 6. Bit", text: "Wertigkeit: 4" },
              { icon: "🔢 7. Bit", text: "Wertigkeit: 2" },
              { icon: "🔢 8. Bit", text: "Wertigkeit: 1" }
            ]
          },
          {
            type: "highlight",
            icon: "💡",
            title: "Rechnungsbeispiel für 192",
            content: "Wir probieren von links nach rechts:\nPasst 128 in 192? Ja! (Rest 64) -> Bit 1 ist 1.\nPasst 64 in 64? Ja! (Rest 0) -> Bit 2 ist 1.\nAlle anderen Bits werden 0.\nErgebnis: 192 = binär `11000000`!"
          }
        ]
      },
      question: "Bringe die binären Stellenwerte eines IP-Bytes (Oktetts) in die richtige Reihenfolge (von links nach rechts)!",
      instruction: "Sortiere die Werte von links (höchste Wertigkeit = 128) nach rechts (niedrigste Wertigkeit = 1).",
      correctOrder: ["s_128", "s_64", "s_32", "s_16", "s_8", "s_4", "s_2", "s_1"],
      items: [
        { id: "s_16",  text: "Wertigkeit: 16" },
        { id: "s_128", text: "Wertigkeit: 128" },
        { id: "s_2",   text: "Wertigkeit: 2" },
        { id: "s_64",  text: "Wertigkeit: 64" },
        { id: "s_8",   text: "Wertigkeit: 8" },
        { id: "s_1",   text: "Wertigkeit: 1" },
        { id: "s_32",  text: "Wertigkeit: 32" },
        { id: "s_4",   text: "Wertigkeit: 4" }
      ],
      explanation: "Die acht binären Stellenwerte eines Bytes lauten von links nach rechts immer: 128, 64, 32, 16, 8, 4, 2, 1. Zusammenaddiert ergeben sie maximal 255."
    },

    // ── Aktivität 5: Drag & Drop – IP-Adress-Prüfung ─────────────────
    {
      id: "m11-a5",
      type: "dragdrop",
      badge: "🎯 IP-Validierung",
      knowledge: {
        title: "Richtig oder Falsch? IP-Adressen prüfen 🔍",
        blocks: [
          {
            type: "text",
            content: "Als IT-Techniker musst du sofort erkennen, ob eine IP-Adresse syntaktisch richtig geschrieben ist."
          },
          {
            type: "highlight",
            icon: "🚨",
            title: "Die drei goldenen Regeln für IPv4:",
            content: "1. Es müssen genau vier Zahlenblöcke sein.\n2. Die Blöcke müssen durch Punkte getrennt sein.\n3. Jede einzelne Zahl darf minimal 0 und maximal 255 groß sein."
          }
        ]
      },
      question: "Prüfe die folgenden Adressen und sortiere sie in gültige und fehlerhafte IPs ein!",
      instruction: "Ziehe die Adressen in die passende Kategorie.",
      targets: [
        { id: "t-val",   label: "🟢 Gültige IPv4-Adressen",   accepts: ["v1", "v2", "v3"] },
        { id: "t-inval", label: "🔴 Ungültige IPv4-Adressen", accepts: ["inv1", "inv2", "inv3"] }
      ],
      items: [
        { id: "v1",   text: "192.168.10.25" },
        { id: "v2",   text: "10.0.0.1" },
        { id: "v3",   text: "172.16.254.1" },
        { id: "inv1", text: "192.168.300.5 (Zahl > 255)" },
        { id: "inv2", text: "10.0.1 (Nur 3 Blöcke)" },
        { id: "inv3", text: "192.168.1.abc (Buchstaben)" }
      ],
      explanation: "Eine gültige IPv4-Adresse besteht aus 4 Blöcken zwischen 0 und 255. 300 ist zu groß, 10.0.1 hat zu wenig Blöcke, abc enthält unerlaubte Zeichen."
    },

    // ── Aktivität 6: Abschluss-Quiz ──────────────────────────
    {
      id: "m11-a6",
      type: "quiz-multi",
      badge: "🏆 Abschlussquiz",
      isCheckup: true,
      knowledge: {
        title: "Bereit für das IP-Quiz? Hier ist deine Zusammenfassung! 📝",
        blocks: [
          {
            type: "text",
            content: "Hervorragend! Du bist jetzt bereit für das IP-Adressierungs-Quiz. Hier ist dein Spickzettel:"
          },
          {
            type: "summary-grid",
            items: [
              { icon: "🔢", title: "IPv4", text: "32 Bit, 4 Dezimal-Blöcke (z.B. 192.168.1.1)" },
              { icon: "🧬", title: "IPv6", text: "128 Bit, Hexadezimal (z.B. 2001:db8::1)" },
              { icon: "🗺️", title: "Subnetzmaske", text: "Trennt Netzwerk-ID von Host-ID" },
              { icon: "🏠", title: "Private IP", text: "Nur im lokalen Netz gültig (nicht im Internet)" },
              { icon: "🚪", title: "Gateway", text: "Router-IP für den Weg ins Internet" },
              { icon: "🤖", title: "Stellenwert 1", text: "Das erste Bit von links steht für 128" }
            ]
          }
        ]
      },
      questions: [
        {
          q: "Wofür steht die Abkürzung 'IP' in IP-Adresse?",
          options: ["Internet Protocol", "Internal Password", "Instant Port", "Information Processor"],
          correct: 0,
          explanation: "IP steht für 'Internet Protocol'. Es regelt die Adressierung und den Transport von Datenpaketen im Netzwerk."
        },
        {
          q: "Wie viele Bits hat eine IPv4-Adresse im Vergleich zu einer IPv6-Adresse?",
          options: [
            "IPv4 hat 8 Bit, IPv6 hat 16 Bit.",
            "IPv4 hat 32 Bit, IPv6 hat 128 Bit.",
            "IPv4 hat 64 Bit, IPv6 hat 256 Bit.",
            "Beide haben 32 Bit."
          ],
          correct: 1,
          explanation: "Eine IPv4-Adresse ist 32 Bit lang (4 Byte). IPv6-Adressen sind viermal so lang (128 Bit)."
        },
        {
          q: "Warum wurde der neue IPv6-Standard eingeführt?",
          options: [
            "Weil IPv6 sicherer gegen Diebstahl ist.",
            "Weil durch das Wachstum des Internets die IPv4-Adressen knapp geworden sind.",
            "Weil IPv6 keine Kabel mehr benötigt.",
            "Weil Windows 11 nur IPv6 unterstützt."
          ],
          correct: 1,
          explanation: "Mit 32 Bit sind maximal 4,3 Milliarden IPv4-Adressen möglich. Da heutzutage jeder Mensch mehrere smarte Geräte besitzt, reicht das nicht mehr aus."
        },
        {
          q: "Welche der folgenden IP-Adressen ist eine gültige IPv6-Adresse?",
          options: [
            "192.168.1.1",
            "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
            "256.100.0.1",
            "10.0.0.256"
          ],
          correct: 1,
          explanation: "IPv6-Adressen bestehen aus 8 Blöcken von Hexadezimalzahlen, die durch Doppelpunkte getrennt sind."
        },
        {
          q: "Welches Gerät im Netzwerk fungiert üblicherweise als 'Standard-Gateway'?",
          options: ["Der Drucker", "Der Switch", "Der Router", "Der Computer-Bildschirm"],
          correct: 2,
          explanation: "Der Router verbindet das heimische Netzwerk mit dem Internet und leitet alle fremden Datenpakete dorthin weiter."
        },
        {
          q: "Welcher Teil einer IP-Adresse bestimmt die 'Straße' (das gemeinsame Netz)?",
          options: ["Host-ID", "MAC-Adresse", "Netzwerk-ID (Net-ID)", "Portnummer"],
          correct: 2,
          explanation: "Die Netzwerk-ID ist für alle Geräte im selben IP-Netz identisch. Nur über sie wissen die Geräte, dass sie Nachbarn sind."
        },
        {
          q: "Welcher IP-Adressbereich wird typischerweise für private Heimnetzwerke verwendet?",
          options: ["8.8.8.8", "192.168.x.x", "200.100.x.x", "127.0.0.1"],
          correct: 1,
          explanation: "Der Bereich 192.168.0.0 bis 192.168.255.255 ist weltweit für private lokale Netzwerke (LAN) reserviert."
        },
        {
          q: "Was zeigt die IP-Adresse 127.0.0.1 (Localhost) an?",
          options: [
            "Den Webserver von Google.",
            "Den eigenen Computer (Loopback-Adresse).",
            "Das Standard-Gateway der Schule.",
            "Eine unbenutzte IP-Adresse."
          ],
          correct: 1,
          explanation: "127.0.0.1 verweist immer direkt auf den eigenen Rechner. Admins nutzen sie, um lokale Serversoftware zu testen."
        },
        {
          q: "Wie lautet der binäre Wert des ersten (am weitesten links stehenden) Bits in einem IP-Byte (Oktett)?",
          options: ["1", "255", "128", "64"],
          correct: 2,
          explanation: "Im Binärsystem verdoppeln sich die Werte von rechts nach links (1, 2, 4, 8, 16, 32, 64, 128). Das ganz linke Bit hat somit den Wert 128."
        },
        {
          q: "Welche Zahl darf in den vier Blöcken einer IPv4-Adresse niemals vorkommen?",
          options: ["0", "255", "256", "1"],
          correct: 2,
          explanation: "Da jeder Block aus genau 8 Bits besteht, können nur Zahlen von 0 bis maximal 255 dargestellt werden. 256 ist ungültig."
        }
      ]
    }
  ]
};
