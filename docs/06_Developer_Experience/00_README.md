# Developer Experience in RC5.0.1

RC5.0.1 verbessert Installation, Diagnose und Release-Prüfung.

## Neue Befehle

```bash
npm run metadata:clean
npm run doctor
npm run setup
npm run verify
```

## Empfohlener erster Start

```bash
npm run setup
```

Der Einrichtungsassistent bereinigt macOS-Metadaten, installiert alle
Abhängigkeiten mit `npm ci` und führt anschließend die vollständige
Projektprüfung aus.
