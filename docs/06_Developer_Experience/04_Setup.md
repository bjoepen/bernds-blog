# Geführte Einrichtung

```bash
npm run setup
```

Ablauf:

```text
macOS-Metadaten entfernen
        ↓
npm ci --no-audit --no-fund
        ↓
Release-Prüfung
        ↓
Inhaltsprüfung
        ↓
Astro Sync
        ↓
Produktions-Build
```

Nach erfolgreichem Abschluss:

```bash
npm run dev
```
