# Produktionstest für RC5.2

## Vor dem Upload

```bash
npm run verify
```

Danach:

```bash
npm run build
```

Auf den Webserver wird ausschließlich der Inhalt des Ordners `dist/`
übertragen.

## Prüfpunkte auf dem Produktionsserver

- Startseite auf Smartphone öffnen
- Menütaste sichtbar
- Menü lässt sich öffnen und schließen
- alle fünf Navigationsziele funktionieren
- Header bleibt beim Scrollen sichtbar
- Reisetag 1 mit allen drei Editorial-Karten prüfen
- Hoch- und Querformat testen
- iOS Safari und Android Chrome testen
- Desktop-Navigation weiterhin vollständig sichtbar

## Cache

Nach einem Austausch des `dist/`-Ordners gegebenenfalls Browser- oder
Proxy-Cache leeren. Nginx Proxy Manager benötigt für dieses Release keine
Konfigurationsänderung.
