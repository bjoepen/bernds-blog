# Changelog

## 1.0-dev.3

### Neu
- Überarbeitete Leaflet-Kartenkomponente
- Nummerierte Marker in Fjordblau und Sand/Papier-Kontrast
- Automatische Kartenausrichtung auf alle Fotospots
- Verbesserte Popups mit Hinweis, Tageszeit und Objektiv
- Fehleranzeige und erneuter Ladeversuch

### Geändert
- Leaflet-CSS wird beim Build eingebunden, nicht dynamisch im Browser importiert
- Kartenkacheln werden weiterhin erst nach ausdrücklichem Klick geladen

### Entfernt
- Google-Maps-Link auf Ortsseiten
- `googleMaps` aus Content-Schema, Beispieldaten und Front-Matter-Vorlagen


## 1.0-dev.4

### Neu
- erste reale Reise: MSC Seaview, westliches Mittelmeer, 11.–18. Oktober 2025
- Routenkarte mit nummerierten Hafenmarkern und gestrichelter Reiseroute
- keine Ortsdetails oder Popups auf der Routenkarte
- Bildgalerie für Reiseberichte
- Hero-Illustration der Mittelmeerreise
- erweiterte Front-Matter-Felder für Route und Bilder
- separate Bildanleitung


## 1.0-dev.5

### Behoben
- Header-Logo und Favicon verwenden jetzt dieselbe SVG-Datei.
- Das mittlere Symbol wurde als stilisierte Möwe neu gezeichnet und reicht bis nahe an den Kreis.
- Leere optionale Felder in Reiseberichten führen nicht mehr zu einem Schemafehler.
- Die beiden leeren Collections `ausruestung` und `artikel` enthalten interne Entwurfsplatzhalter, sodass keine glob-loader-Warnungen mehr erscheinen.


## 1.0-dev.6

### Neu
- einheitliches Möwenlogo für Header, Footer und Favicon
- neuer dreispaltiger Footer
- Instagram: `bjoepen`
- Facebook: `bjoepen`
- E-Mail: `info@beblog.de`

### Verbessert
- Abstände und Typografie der OpenStreetMap-Zustimmungsbox
- responsive Darstellung des Footers
- automatische Jahreszahl im Copyright-Hinweis


## 1.0-dev.7

### Neu
- neues Möwenlogo ohne Wellen für Header, Footer und Favicon
- identisches, zentriertes Design für alle OpenStreetMap-Zustimmungsboxen
- Social-Media-Namen im Footer sichtbar
- Instagram und Facebook öffnen in einem neuen Tab

### Verbessert
- einheitlicher Text und Button in Orts- und Routenkarten
- zentriertes Karten-Icon und optimierte Abstände


## 1.1.0-rc.1

### Redaktion
- vollständig vorkonfigurierte Front-Matter-Umgebung
- Inhaltstypen für Reisen, Orte, Fotospots, Ausrüstung und Artikel
- Formulare für Reiserouten, Galerien und Fotospots
- Medienmetadaten für Titel, Alt-Text und Bildunterschrift
- VS-Code-Erweiterungsempfehlungen
- Reset- und Redaktionsanleitung

### Design
- keine Änderungen am festgelegten Release-Candidate-Design


## 1.1.0 RC1

### Status
- erster festgelegter Release Candidate

### Behoben
- widersprüchliche und doppelte CSS-Regeln für Bilder entfernt
- responsive Größenberechnung für alle Inhaltsbilder vereinheitlicht
- Hero-Bilder auf ein konsistentes Seitenverhältnis gebracht
- Galeriebilder einheitlich auf 3:2 gesetzt
- Logos, Icons und SVG-Illustrationen vor globalen Bildregeln geschützt
- Bildunterschriften und mobile Darstellung verbessert


## 1.1.0 RC2

### Behoben
- verzerrte Startseiten-Illustration auf dem iPad
- SVG-Seitenverhältnis auf `xMidYMid slice` umgestellt
- stabiles Seitenverhältnis für `.hero-art`
- obere Hero-Abstände für Sticky Header korrigiert
- Tablet-Darstellung auf 16:9 optimiert


## 1.1.0 RC3.1 – Author Edition

### Neu
- Reisetage und Seetage als eigene Front-Matter-Vorlagen
- eigene Collections für Reisetage, Häfen und Schiffe
- Autoren-Infoblock für Tagesseiten
- vorbereitete Musterseite für Tag 1
- neue Redaktionsanleitungen unter `docs/04_Redaktion/`

## 1.1.0 RC3.2 – Documentation Edition

- Redaktionsdokumentation erweitert
- Qualitätschecklisten ergänzt
- Flowchart ergänzt


## 1.1.0 RC3.3 – Reference Journey Edition

### Neu
- vollständige Referenzstruktur der MSC-Seaview-Reise
- acht vorbereitete Reisetage mit exakten Liegezeiten
- Hafen-, Schiffs- und Bildstruktur
- automatische Reise- und Tagesnavigation
- interne Verlinkung zwischen Reise, Tagen und Häfen


## 1.2.0 RC4.0 Preview 1 – Northern Lines

### Neu
- Northern Lines Symbol Library in das Astro-Projekt integriert
- Reisetag-Infoblock ohne Emojis
- NL-001 als neues Signatursymbol
- interne Symbolvorschau unter `/design/icons`


## 1.2.0 RC4.1 – Editorial Symbols

### Neu
- Feather, North Star und Travel Notebook
- EditorialCallout-Komponente
- kräftigere NL-001 UI-Variante

### Geändert
- „Moment des Tages“ nutzt nicht mehr die Möwe
- Tag-1-Überschriften enthalten keine Emojis mehr


## 1.2.0 RC4.2 – MDX Editorial Integration

### Neu
- offizielle `@astrojs/mdx`-Integration
- semantische EditorialCallout-Komponenten in Reisetagen
- MDX-Vorlagen für Front Matter CMS

### Geändert
- Reisetage verwenden `.mdx`
- Moment, Tipp und Notizbuch werden nicht mehr als gewöhnliche H2-Überschriften gerendert

### Entfernt
- Abhängigkeit von Remark-Plugins zur automatischen Überschriftenerkennung


## 1.3.0 RC5.0 – Northern Lines UI

### Neu
- sieben wiederverwendbare Northern-Lines-UI-Komponenten
- interne Komponentenvorschau unter `/design/ui/`
- zentrale Design-Tokens für Abstände, Radien und Schatten
- automatisierte Release- und Inhaltsprüfungen
- Verify-Workflow
- Upgrade-, Rollback- und Testdokumentation

### Technisch
- keine neuen Laufzeitabhängigkeiten
- Lockfile auf öffentliche npm-Registry geprüft
- projektbezogene `.npmrc` gehärtet


## 1.3.0 RC5.0.1 – Developer Experience

### Behoben
- Finder-Metadateien brechen die Release-Prüfung nicht mehr ab
- npm-Allow-Scripts-Warnungen für esbuild und fsevents behoben

### Neu
- automatische Metadatenbereinigung
- Systemdiagnose mit `npm run doctor`
- geführte Einrichtung mit `npm run setup`
- neue Installations- und Diagnoseanleitungen

## 1.3.0 RC5.0.2 – Release Check Fix

### Behoben
- Falschmeldung durch Selbstprüfung von `scripts/release-check.mjs`


## 1.3.0 RC5.1 – Build & Developer Tools

### Behoben
- verständliche Behandlung eines fehlenden Astro-CLI
- Verify läuft erst nach erfolgreicher Installation

### Neu
- `npm run install:project`
- Astro-Prüfung vor Verify
- überarbeiteter Doctor- und Setup-Workflow


## 1.3.0 RC5.2 – Responsive Navigation

### Behoben
- fehlende Hauptnavigation auf Smartphones
- zu enge Headerdarstellung auf kleinen Displays

### Neu
- zugängliche mobile Navigation ohne JavaScript
- Tablet- und Smartphone-Breakpoints
- responsive Menüfläche und große Touch-Ziele
- Feinausrichtung der Editorial-Symbole


## 1.3.0 RC5.3 – Northern Lines Polish

### Geändert
- Editorial-Karten und Symbolabstände feinjustiert
- Akzentstreifen und Kartenhintergründe veredelt
- Typografie und Leserythmus verbessert
- aktive Navigation ergänzt

### Neu
- Sprunglink zum Hauptinhalt
- konsistente Fokusdarstellung
- Unterstützung für reduzierte Bewegung
- Schutz vor horizontalem Überlauf


## 1.3.0 RC5.3.1 – Astro Check Hotfix

### Behoben
- falsche Meldung „Astro ist nicht installiert“ unter macOS
- plattformübergreifende Astro-Prüfung über `npm exec`


## 1.3.0 RC5.4 – First Published Journey Day

### Veröffentlicht
- Tag 1 der MSC-Seaview-Mittelmeerreise

### Neu
- echtes Hero-Foto
- WebP- und JPEG-Version
- Alt-Text, Bildunterschrift und Open-Graph-Bild

### Geändert
- Tag 1 ist nicht mehr als Entwurf markiert


## 1.3.0 RC5.5 – Lightbox Gallery

### Neu
- Northern-Lines-Lightbox
- zwei zusätzliche Bilder in Tag 1
- Tastatur- und Touch-Navigation

## 1.4.0 RC6.0a Build 1
- Northern-Lines-Design-System dokumentiert
- interne Seite `/design/system/`
- Timeline als optionale Komponente festgelegt

## 1.4.0 RC6.0a Build 2
- Road-Symbol
- Stay-Symbol
- kategorisierte Icon-Seite
- aktualisierte Design-System-Übersicht


## 1.4.0 RC6.0a Build 3 – Master Showcase

### Neu
- durchsuchbare Icon-Masterübersicht
- Kategorienfilter
- Statusanzeige
- SVG-Download
- Kopierfunktion für Dateinamen
- Benennungsregeln für kommende Northern-Lines-Komponenten


## 1.4.0 RC6.0a Build 3.1
- Überlagerung in „Gestaltungsregeln“ behoben
- Seagull kräftiger dargestellt
- Road und Stay freigegeben


## 1.4.0 RC6.0a Build 4 – Editorial Foundations

### Neu
- NLHero
- NLSectionDivider
- NLQuote
- interne Editorial-Vorschauseite
- NL-Komponentennamensraum dokumentiert


## 1.4.0 RC6.0a Build 4.1 – Design Navigation Fix

### Behoben
- fehlende zentrale Design-Übersicht
- Editorial-Vorschau war nicht sichtbar verlinkt

### Neu
- `/design/` als Design-Hub
- Rücklinks auf allen Designseiten


## 1.4.0 RC6.0b Build 1 – Editorial Hero Pilot

### Neu
- Editorial Hero für Reisetage
- automatische Hero-Icons nach Reisetagtyp
- Storytelling-Kapiteltrenner in Tag 1

### Behoben
- doppelte Hero-Bildausgabe auf Reisetag-Seiten


## 1.4.0 RC6.1 Build 2 – Hero Collection
- Northern Lines Hero Collection v1.0 integriert
- Frontpage-Hero auf hero-07-reisen geändert
- MSC-Seaview-Reise-Hero auf hero-02-kreuzfahrten geändert
- interne Hero-Showcase-Seite ergänzt


## 1.4.0 RCF 1 – Northern Lines Final Polish

### Feature Freeze
- keine neuen Funktionen

### Politur
- Fokuszustände vereinheitlicht
- Mikrointeraktionen harmonisiert
- Hero- und Bildabstände angeglichen
- responsive Feinkorrekturen
- reduzierte Bewegung berücksichtigt

### Qualitätssicherung
- Hero Collection in Release-Prüfung aufgenommen
- RCF-Testplan und Finaldefinition ergänzt


## 1.4.1 RC1 – Sveltia Mobile Editor

### Neu
- Sveltia CMS unter `/admin/`
- mobile Redaktion für Reisen und Reisetage
- GitHub-Konfigurations- und Prüfscripte
- mobiler Markdown-Inhaltstyp für Front Matter

### Sicherheit
- Admin-Bereich wird nicht indexiert
- Admin-Dateien werden nicht gecacht
- keine OAuth-Secrets im Repository

## 1.4.1 RC2 – GitHub Verify Fix

- `.npmrc` ist für `release-check.mjs` nun optional.
- Hero-Collection-Prüfung korrigiert.
- Verifikation für frisch geklonte GitHub-Repositories robuster gemacht.

## 1.4.1 RC3 – Sveltia Admin Route Fix

### Behoben
- `/admin/` wird im Astro-Entwicklungsserver auf `/admin/index.html` weitergeleitet.
- Die CMS-Pflichtdateien werden durch `npm run verify` geprüft.
- Kein Konflikt zwischen Astro-Route und statischer Sveltia-Datei im Build.

## 1.5.0 Final – Northern Lines Edition

### Final
- Front Matter CMS und Sveltia CMS vollständig integriert
- Sveltia auf `bjoepen/bernds-blog` konfiguriert
- GitHub Actions für Verify und Build
- repositorygerechte `.gitignore` und `.gitattributes`
- Norwegen 2026 mit acht Reisetagen als Draft vorbereitet
- lokale `/admin/`-Route und optionale `.npmrc` abgesichert

