# Bernds Blog 1.5.0 Final – Northern Lines Edition

## Status

**Final**

Dieser Build ist für den ersten vollständigen Import in das private GitHub-Repository vorgesehen:

```text
https://github.com/bjoepen/bernds-blog
```

## Enthalten

- vollständiger Astro-Blog
- Northern Lines Design System
- Northern Lines Hero Collection v1.0
- Front Matter CMS für die lokale Redaktion
- Sveltia CMS unter `/admin/`
- direkte Sveltia-Anbindung an `bjoepen/bernds-blog`
- lokale Weiterleitung von `/admin/` zu `/admin/index.html`
- robuste Verify-Prüfung ohne verpflichtende `.npmrc`
- GitHub Actions für Verify und Build
- repositorygerechte `.gitignore`
- `.gitattributes`
- Norwegen 2026 als vollständige Draft-Struktur
- acht vorbereitete Reisetage im Status Draft

## Erster lokaler Test

```bash
npm ci
npm run verify
npm run dev
```

Danach:

```text
http://localhost:4321/
http://localhost:4321/admin/
```

## Erster GitHub-Import

Nur Quell- und Inhaltsdateien werden versioniert. Automatisch erzeugte Ordner wie
`node_modules`, `.astro` und `dist` sind über `.gitignore` ausgeschlossen.

```bash
git status
git add .
git commit -m "release: Bernds Blog 1.5.0 Final – Northern Lines Edition"
git push origin main
```
