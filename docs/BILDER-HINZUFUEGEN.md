# Bilder in Bernds Blog einfügen

## Grundprinzip

Alle veröffentlichten Bilder liegen im Astro-Projekt unter:

```text
public/images/
```

Für jede Reise wird ein eigener Ordner angelegt. Für die erste Mittelmeerreise:

```text
public/images/reisen/msc-seaview-mittelmeer-2025/
```

Empfohlene Struktur:

```text
public/images/reisen/msc-seaview-mittelmeer-2025/
├── hero.jpg
├── 01-barcelona-einschiffung.jpg
├── 02-cannes-hafen.jpg
├── 03-genua-altstadt.jpg
├── 04-la-spezia.jpg
├── 05-civitavecchia.jpg
├── 06-msc-seaview.jpg
└── 07-palma.jpg
```

## Dateinamen

Verwende:

- nur Kleinbuchstaben
- Bindestriche statt Leerzeichen
- keine Umlaute
- eine kurze, beschreibende Bezeichnung

Gut:

```text
03-genua-alter-hafen.jpg
```

Ungünstig:

```text
IMG_4728 endgültig Genua ÄNDERUNG.jpg
```

## Empfohlene Bildgrößen

### Hero-Bild

- Seitenverhältnis: ungefähr 2:1
- Empfehlung: 1800 × 900 Pixel
- Format: JPEG oder WebP
- Zielgröße: möglichst unter 500–700 KB

### Galeriebilder

- Seitenverhältnis: bevorzugt 3:2
- lange Kante: 1600–2000 Pixel
- Format: JPEG oder WebP
- Zielgröße: meist 250–600 KB

Die Originaldateien bleiben separat in deinem Fotoarchiv. Für die Website werden verkleinerte Kopien verwendet.

## Hero-Bild eintragen

In der Markdown-Datei der Reise:

```yaml
heroImage: "/images/reisen/msc-seaview-mittelmeer-2025/hero.jpg"
heroAlt: "MSC Seaview beim Einlaufen in einen Mittelmeerhafen"
heroCaption: "Die MSC Seaview während unserer Mittelmeerreise im Oktober 2025."
```

`heroAlt` beschreibt das Bild für Screenreader und Suchmaschinen. Er sollte sachlich erklären, was zu sehen ist.

## Bildergalerie eintragen

Im Front Matter:

```yaml
galleryTitle: "Bilder unserer Mittelmeerreise"
gallery:
  - src: "/images/reisen/msc-seaview-mittelmeer-2025/01-barcelona-einschiffung.jpg"
    alt: "Blick auf den Kreuzfahrthafen von Barcelona"
    caption: "Barcelona am Tag der Einschiffung."
    width: 1800
    height: 1200

  - src: "/images/reisen/msc-seaview-mittelmeer-2025/02-cannes-hafen.jpg"
    alt: "Tenderboote und Yachten im Hafen von Cannes"
    caption: "Cannes wurde auf dieser Reise vor Anker angelaufen."
    width: 1800
    height: 1200
```

## Bilder mit Cyberduck kopieren

Beim lokalen Entwicklungsworkflow kopierst du die Bilder zunächst auf dem Mac in den passenden Ordner des Astro-Projekts.

Danach:

```bash
npm run dev
```

Prüfe die Bilder im Browser unter:

```text
http://localhost:4321/reisen/msc-seaview-mittelmeer-2025/
```

Für die Veröffentlichung:

```bash
npm run build
```

Anschließend wird nur der Inhalt von `dist/` per Cyberduck auf den Webserver übertragen. Die Bilder werden beim Build automatisch in `dist/images/` übernommen.

## Bilder in Front Matter CMS

Front Matter CMS kann das Feld `heroImage` bearbeiten. Bei der verschachtelten Galerie ist die direkte Bearbeitung in der Markdown-Datei zunächst meist übersichtlicher.

Wir können die Front-Matter-Konfiguration später um eine komfortable Galerie-Eingabemaske erweitern, sobald die endgültige Arbeitsweise mit den ersten echten Bildern feststeht.

## Urheberrecht und Personen

Verwende vorzugsweise eigene Fotos. Bei Bildern mit erkennbaren Personen, fremden Werken oder geschützten Innenräumen muss vor der Veröffentlichung geprüft werden, ob die Nutzung zulässig ist.

## Checkliste vor der Veröffentlichung

- [ ] Bild korrekt ausgerichtet
- [ ] Dateigröße optimiert
- [ ] verständlicher Dateiname
- [ ] Alt-Text vorhanden
- [ ] Bildunterschrift sinnvoll
- [ ] keine privaten Daten sichtbar
- [ ] Nutzungsrechte geklärt
