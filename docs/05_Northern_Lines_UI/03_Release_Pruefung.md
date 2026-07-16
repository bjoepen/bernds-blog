# Technische Release-Prüfung

RC5.0 enthält erstmals automatisierte Prüfungen.

## Vollständige Prüfung

```bash
npm run verify
```

Der Ablauf:

```text
Release-Pfade prüfen
        ↓
Inhaltsbeziehungen prüfen
        ↓
Astro Collections synchronisieren
        ↓
Produktions-Build erzeugen
```

## Einzelne Prüfungen

```bash
npm run release:check
npm run content:check
npm run sync
npm run build
```

Die Release-Prüfung verhindert insbesondere interne Registry-URLs und lokale Entwicklungs- und Containerpfade in einem veröffentlichten Paket.
