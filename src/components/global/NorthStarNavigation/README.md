# NL-UI-001 – North Star Navigation v1.1

## Zweck

Die North Star Navigation verbindet Lesefortschritt, Rückkehr zum Seitenanfang und das wiederkehrende North-Star-Zeichen der Northern Lines Design Library. Sie erscheint, sobald der konfigurierte Anteil der scrollbaren Seite gelesen wurde.

## Installation und Einbindung

Alle fünf Dateien des Komponentenordners müssen gemeinsam erhalten bleiben. Es gibt keine zusätzlichen Pakete oder Framework-Abhängigkeiten. Die Komponente ist zentral in `BaseLayout.astro` unmittelbar vor `</body>` eingebunden und steht dadurch automatisch auf allen Seiten zur Verfügung.

```astro
---
import NorthStarNavigation from '../components/global/NorthStarNavigation/NorthStarNavigation.astro';
---

<NorthStarNavigation />
```

## Parameter

- `label?: string` – zugängliche Beschriftung des Buttons; Standard: `Zum Seitenanfang`
- `revealAt?: number` – Sichtbarkeitsschwelle zwischen `0` und `1`; Standard: `0.4`

Ungültige Schwellenwerte werden auf den erlaubten Bereich begrenzt.

## Architektur

- `NorthStarNavigation.astro` enthält semantisches Markup, die unveränderte öffentliche Props-API und den von Astro gebündelten Import des Client-Moduls.
- `NorthStarNavigation.ts` kapselt Scrollmessung, Sichtbarkeit, Ringfortschritt, Smooth Scroll und den View-Transition-Lebenszyklus.
- `NorthStarNavigation.css` enthält ausschließlich Darstellung, Zustände und Motion-Präferenzen.
- `north-star.svg` ist das eigenständige Markensymbol.

Der SVG-Ring verwendet `pathLength="100"`. TypeScript überträgt den Lesefortschritt deshalb ohne Umfangsberechnung direkt auf `strokeDashoffset`: 100 ist leer, 0 vollständig. Scroll- und Resize-Ereignisse werden über `requestAnimationFrame` zusammengefasst.

Für Astro View Transitions initialisiert `astro:page-load` das jeweils aktuelle DOM. Vor `astro:before-swap` und vor jeder erneuten Initialisierung beendet ein gemeinsamer `AbortController` alle Komponenten-Listener; noch offene Animation Frames werden ebenfalls verworfen.

## Design

Die Komponente verwendet die bestehenden Tokens `--paper-light`, `--ink`, `--fjord`, `--sea-light`, `--line`, `--nl-shadow-soft` und `--nl-motion-medium` mit eigenständigen Fallbacks. Das Farbschema folgt automatisch `prefers-color-scheme`. Auf kleinen Displays beträgt die Größe 56 px, sonst 48 px.

## Anpassungsmöglichkeiten

Text und Einblendschwelle werden über Props angepasst. Visuelle Änderungen erfolgen über die lokalen Custom Properties in `NorthStarNavigation.css`; Positionierung, Fokusdarstellung und sichere Randabstände sollten dabei erhalten bleiben.

## Wartung

Markup, Verhalten, Gestaltung und Symbol liegen getrennt im Komponentenordner. Bei Änderungen sind Build, Tastaturbedienung, beide Farbschemata, reduzierte Bewegung sowie Seiten mit sehr kurzem und sehr langem Inhalt zu prüfen.

## Troubleshooting

- **Die Navigation erscheint nicht:** Die Seite muss scrollbar sein und den mit `revealAt` festgelegten Fortschritt erreicht haben.
- **Der Ring bewegt sich nicht:** Prüfen, ob beide Kreise weiterhin `pathLength="100"` besitzen und `.north-star-navigation__value` unverändert vorhanden ist.
- **Smooth Scroll ist deaktiviert:** Bei aktivierter Betriebssystemoption für reduzierte Bewegung ist sofortiges Scrollen beabsichtigt.
- **Nach einer View Transition reagiert der Button nicht:** Sicherstellen, dass ein verwendeter Router die Astro-Ereignisse `astro:before-swap` und `astro:page-load` auslöst und der gebündelte Import in der Astro-Komponente erhalten ist.
- **Mehrere Listener oder veraltete DOM-Referenzen:** Keine zusätzliche Initialisierung außerhalb von `NorthStarNavigation.ts` ergänzen; der vorhandene Lifecycle übernimmt Initialisierung und Cleanup zentral.
