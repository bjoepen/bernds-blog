# NL-UI-001 – North Star Navigation

## Zweck

Die North Star Navigation verbindet Lesefortschritt, Rückkehr zum Seitenanfang und das wiederkehrende North-Star-Zeichen der Northern Lines Design Library. Sie erscheint, sobald der konfigurierte Anteil der scrollbaren Seite gelesen wurde.

## Einbindung

Die Komponente ist zentral in `BaseLayout.astro` unmittelbar vor `</body>` eingebunden und steht dadurch automatisch auf allen Seiten zur Verfügung.

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

## Design

Die Komponente verwendet die bestehenden Tokens `--paper-light`, `--ink`, `--fjord`, `--sea-light`, `--line`, `--nl-shadow-soft` und `--nl-motion-medium` mit eigenständigen Fallbacks. Das Farbschema folgt automatisch `prefers-color-scheme`. Auf kleinen Displays beträgt die Größe 56 px, sonst 48 px.

## Anpassungsmöglichkeiten

Text und Einblendschwelle werden über Props angepasst. Visuelle Änderungen erfolgen über die lokalen Custom Properties in `NorthStarNavigation.css`; Positionierung, Fokusdarstellung und sichere Randabstände sollten dabei erhalten bleiben.

## Wartung

Markup, Verhalten, Gestaltung und Symbol liegen getrennt im Komponentenordner. Die TypeScript-Initialisierung ist idempotent und reagiert auf `astro:page-load`, sodass sie auch mit Astro View Transitions funktioniert. Bei Änderungen sind Build, Tastaturbedienung, beide Farbschemata, reduzierte Bewegung sowie Seiten mit sehr kurzem und sehr langem Inhalt zu prüfen.
