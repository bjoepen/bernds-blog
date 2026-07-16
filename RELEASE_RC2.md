# Bernds Blog 1.4.1 RC2 – GitHub Verify Fix

## Behoben

- `npm run verify` bricht nicht mehr ab, wenn im geklonten GitHub-Repository keine `.npmrc` vorhanden ist.
- Eine vorhandene `.npmrc` wird weiterhin auf die öffentliche npm-Registry geprüft.
- Die Prüfung der neun Hero-Dateien verwendet nun definierte Variablen und projektunabhängige Pfade.
- Fehlende `package.json`- oder `package-lock.json`-Dateien werden verständlich gemeldet.

## Test

```bash
npm ci
npm run verify
```

Die Projektposition im Dateisystem ist beliebig. Es werden keine fest codierten lokalen Pfade verwendet.
