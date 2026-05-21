# MINT-Games – Digitale Grundbildung an Mittelschulen

Eine interaktive, spielerische Lernplattform für das Schulfach **Digitale Grundbildung** (Österreichischer Lehrplan 2022/23), speziell optimiert für Tablets (iPads). Die Plattform bietet Schülerinnen und Schülern abwechslungsreiche Übungen (z. B. Drag & Drop, Zuordnungen, Reihenfolgen, interaktives PC-Zusammenbauen und Netzwerkkabel-Crimpen) und schließt jedes Modul mit einem Zertifikat ab.

---

## 📢 Schulhomepage-Text (Kopier- und Nutzungsvorlage)

Dieser Text kann direkt für die Schulhomepage, den Newsletter oder Infobriefe verwendet werden:

> ### 🖥️ MINT-Games: Spielend die digitale Welt verstehen!
> Unsere Schule hat Grund zur Freude: Wir präsentieren stolz unsere neue schuleigene Lernplattform **MINT-Games**! Speziell für den Unterricht in *Digitaler Grundbildung* entwickelt, ermöglicht sie unseren Schülerinnen und Schülern einen spannenden, interaktiven Zugang zu wichtigen Zukunftsthemen aus den Bereichen Informatik, Technik und IT-Sicherheit.
> 
> Ob Netzwerkkabel crimpen, einen PC virtuell aus Einzelteilen zusammenbauen, Betriebssystem-Grundlagen (Linux) verstehen oder Passwörter knacken – in **12 abwechslungsreichen Lernmodulen** erarbeiten sich die Jugendlichen selbstständig Fachwissen. Am Ende jedes Moduls wartet ein Wissens-Checkup-Quiz, nach dessen erfolgreichem Abschluss die Schülerinnen und Schüler ein persönliches IT-Zertifikat herunterladen können.
> 
> Das Beste daran: Die Plattform läuft vollständig im Webbrowser, ist komplett werbefrei, speichert keine personenbezogenen Daten und benötigt keinen Login.
> 
> **Freie Bildung für alle (Creative Commons):**
> Weil uns das Teilen von Bildungsinhalten am Herzen liegt, stellen wir die gesamte Lernplattform als *Open Educational Resource (OER)* unter der Lizenz **Creative Commons (CC BY-NC-SA 4.0)** kostenfrei zur Verfügung. Andere Schulen, Lehrpersonen und Interessierte können den Quellcode herunterladen, ihn für die eigenen Klassen anpassen und die Website selbst hosten!
> 
> *Dieses Projekt wurde durch einen MINT-Scheck vom Land Tirol, der AK Tirol, der WKO Tirol und der IV Tirol gefördert und offiziell unterstützt.*

---

## 🛠️ Anleitung: Eigene Installation & Hosting

MINT-Games ist als rein statische Website konzipiert. Es ist kein Server-Backend, keine Datenbank und kein Registrierungsprozess erforderlich. Alle Fortschritte werden verschlüsselt lokal im Browser (LocalStorage) gespeichert.

### Voraussetzungen:
- Jeder beliebige statische Webspace (z. B. Schulserver, Webhoster, GitHub Pages, Vercel, Netlify oder ein lokaler Ordner auf Schul-iPads).

### Schritt-für-Schritt-Anleitung:

1. **Dateien herunterladen**:
   Lade alle Dateien dieses Repositories herunter (bzw. klone das Repository mit `git clone`).
   
2. **Ordnerstruktur beibehalten**:
   Vergewissere dich, dass folgende Struktur eingehalten wird:
   - `index.html` (Hauptseite mit Modulübersicht)
   - `lesson.html` (Lernoberfläche)
   - `mint-tirol-colored.svg` (Sponsorenlogo)
   - `css/` (Styling-Dateien)
   - `js/` (Programmlogik und Moduldaten unter `js/data/`)

3. **Auf Webspace hochladen**:
   Kopiere den gesamten Projektordner auf deinen Webserver (z. B. via FTP in einen Ordner namens `/mint-games/`).

4. **Aufrufen**:
   Die Schülerinnen und Schüler können die Plattform nun direkt über die entsprechende Adresse aufrufen, zum Beispiel:
   `https://deine-schule.at/mint-games/`

5. **Lokale Offline-Nutzung (Alternativ)**:
   Da es sich um statische HTML/JS-Dateien handelt, kann der Ordner auch direkt heruntergeladen, entpackt und offline durch Doppelklick auf die `index.html` im Browser gestartet werden.

---

## 🎨 Modulinhalte anpassen

Wenn du ein Modul textlich verändern, Fragen austauschen oder ein neues Modul erstellen möchtest:
- Die Moduldaten liegen in einfachen JavaScript-Strukturen unter `js/data/module1.js` bis `module12.js`.
- Dort kannst du Texte, Wissensblöcke und Fragen in lesbarem Format bearbeiten.

---

## ⚖️ Lizenzierung (Creative Commons)

Dieses Werk ist lizenziert unter einer **Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz (CC BY-NC-SA 4.0)**.

### Das bedeutet für dich:
- **Teilen**: Du darfst das Material in jedwedem Format oder Medium vervielfältigen und weiterverbreiten.
- **Bearbeiten**: Du darfst das Material remixen, verändern und darauf aufbauen.
- **Unter folgenden Bedingungen**:
  - **Namensnennung (BY)**: Du musst angemessene Urheber- und Rechteangaben machen (z. B. Nennung der *Mittelschule Telfs* als Ursprungsurheber).
  - **Nicht-kommerziell (NC)**: Du darfst das Material nicht für kommerzielle Zwecke nutzen.
  - **Weitergabe unter gleichen Bedingungen (SA)**: Wenn du das Material remixst oder veränderst, musst du deine Beiträge unter der gleichen Lizenz wie das Original verbreiten.
  - **Keine weiteren Einschränkungen**: Du darfst keine zusätzlichen Klauseln oder technischen Maßnahmen einsetzen, die anderen rechtlich verbieten, das zu tun, was die Lizenz erlaubt.

*Die vollständige Lizenzvereinbarung kann unter [creativecommons.org](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de) eingesehen werden.*
