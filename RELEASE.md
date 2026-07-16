# Bernds Blog 1.4.1 RC1 – Sveltia Mobile Editor

## Neu

- Sveltia CMS unter `/admin/`
- GitHub-Backend
- mobile Collections für Reisen und Reisetage
- Draft-Standard für alle neuen Einträge
- Uploadordner für mobile Reisebilder
- Konfigurations- und Prüfscripte
- Nginx-Regeln gegen Admin-Caching und Indexierung

## Front Matter

- Git-Unterstützung aktiviert
- zusätzlicher Inhaltstyp `reisetag-mobile`
- reines Markdown-Template für mobile Entwürfe
- bestehende MDX-Templates bleiben erhalten

## Wichtiger Einrichtungsschritt

```bash
npm run cms:configure -- OWNER/REPOSITORY
npm run cms:check
```

Ohne diesen Schritt ist die Admin-Oberfläche vorhanden, kann aber noch
nicht auf das richtige GitHub-Repository zugreifen.
