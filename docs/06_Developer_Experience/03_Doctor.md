# Systemdiagnose

```bash
npm run doctor
```

Geprüft werden:

- Node-Version
- npm-Version
- öffentliche npm-Registry
- wichtige Projektdateien
- Installationsskript-Freigaben
- Registry-Adressen im Lockfile
- macOS-Metadaten
- vorhandene Abhängigkeiten

Der Doctor verändert keine Abhängigkeiten und kann bereits vor `npm ci`
ausgeführt werden.
