# Bernds Blog

> Reisen · Fotografie · Gestalten

Bernds Blog ist die Reise- und Fotografieplattform des Projekts **Northern Lines**.  
Der Blog verbindet persönliche Reiseberichte, Fotografie, Karten, Galerien und eine ruhige, konsistente Designsprache.

## Redaktionsworkflow

### Zu Hause

```text
Git Pull → Front Matter CMS → lokale Vorschau → Commit → Push
```

### Unterwegs

```text
Sveltia CMS → Draft → GitHub → später zu Hause Git Pull
```

Neue Inhalte bleiben zunächst:

```yaml
draft: true
```

## Installation

```bash
npm ci
npm run verify
npm run dev
```

Lokale Adressen:

```text
http://localhost:4321/
http://localhost:4321/admin/
```

## Build

```bash
npm run build
```

Der Produktions-Build liegt anschließend in `dist/`.

## Repository

```text
https://github.com/bjoepen/bernds-blog
```

## Version

**1.5.1 – Repository Cleanup Edition**

## Lizenz

Privates Projekt. Texte, Bilder, Gestaltung und Quellbestand dürfen nicht ohne ausdrückliche Genehmigung weiterverwendet werden.
