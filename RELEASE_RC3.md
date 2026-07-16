# Bernds Blog 1.4.1 RC3 – Sveltia Admin Route Fix

## Korrektur

Der Astro-Entwicklungsserver leitete `/admin/` nicht automatisch auf die statische Datei
`public/admin/index.html` weiter. Deshalb erschien lokal die Northern-Lines-404-Seite,
obwohl Sveltia unter `/admin/index.html` erreichbar war.

RC3 ergänzt eine ausschließlich für den Entwicklungsserver aktive Vite-Middleware:

```text
/admin   → /admin/index.html
/admin/  → /admin/index.html
```

Die statische Sveltia-Datei bleibt unverändert unter `public/admin/index.html`. Dadurch
entsteht beim Produktions-Build kein Dateikonflikt.

## Zusätzlich geprüft

- `public/admin/index.html`
- `public/admin/config.yml`
- `frontmatter.json`
- lokale Admin-Weiterleitung in `astro.config.mjs`
- optionale `.npmrc`

## Test

```bash
npm ci
npm run verify
npm run dev
```

Danach aufrufen:

```text
http://localhost:4321/admin/
http://localhost:4321/admin/index.html
http://localhost:4321/admin/config.yml
```
