# RC5.3.1 – Astro-Check unter macOS

## Ursache

Die frühere Prüfung kontrollierte, ob die Datei

```text
node_modules/.bin/astro
```

mit einem bestimmten Dateirechte-Flag ausführbar ist. Unter macOS konnte
diese Prüfung fehlschlagen, obwohl npm das Astro-CLI korrekt starten konnte.

## Neue Prüfung

```bash
npm exec --no astro -- --version
```

Der Parameter `--no` verhindert, dass npm ein fehlendes Paket ungefragt aus
dem Internet installiert. Die Prüfung bestätigt ausschließlich ein bereits
lokal installiertes Astro-CLI.

## Test

```bash
npm run verify
```

Bei einer fehlenden Installation:

```bash
npm run install:project
```
