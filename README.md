# Bernds Blog

> Reisen · Fotografie · Gestalten

Bernds Blog ist ein privater Reise- und Fotografieblog, der auf **Astro** basiert und im Rahmen des Projekts **Northern Lines** entwickelt wird.

Der Schwerpunkt liegt auf hochwertigen Reiseberichten, Kreuzfahrten, Fotografie und persönlichen Reiseerlebnissen – ergänzt durch Karten, Galerien und redaktionell aufbereitete Inhalte.

---

## Projektphilosophie

Northern Lines verfolgt einen einfachen Grundsatz:

> Gute Inhalte entstehen nicht durch möglichst viele Funktionen,
> sondern durch Klarheit, Ruhe und eine hochwertige Gestaltung.

Die technische Plattform bleibt bewusst schlank.

Der Fokus liegt auf den Geschichten, Bildern und Erinnerungen.

---

# Technischer Stack

- Astro
- TypeScript
- Markdown / MDX
- Content Collections
- Front Matter CMS (Desktop)
- Sveltia CMS (mobil)
- Git & GitHub
- GitHub Actions
- Nginx

---

# Repository-Struktur

```text
.
├── src/
│   ├── components/
│   ├── content/
│   │   ├── reisen/
│   │   ├── reisetage/
│   │   └── seiten/
│   ├── layouts/
│   └── pages/
│
├── public/
│   ├── admin/
│   ├── images/
│   └── icons/
│
├── .frontmatter/
├── .github/
│   └── workflows/
│
├── docs/
├── astro.config.mjs
├── package.json
└── README.md
```

---

# Entwicklungsworkflow

## Zu Hause

```text
Git Pull
        │
        ▼
Front Matter CMS
        │
        ▼
Lokale Vorschau
        │
        ▼
Git Commit
        │
        ▼
Git Push
```

---

## Unterwegs

```text
Sveltia CMS
        │
        ▼
GitHub
        │
        ▼
später Git Pull
```

Alle neuen Inhalte werden zunächst als

```yaml
draft: true
```

angelegt.

Erst nach der redaktionellen Prüfung erfolgt die Veröffentlichung.

---

# Entwicklungsumgebung

Repository klonen

```bash
git clone https://github.com/bjoepen/bernds-blog.git

cd bernds-blog
```

Abhängigkeiten installieren

```bash
npm install
```

Entwicklungsserver starten

```bash
npm run dev
```

Projekt prüfen

```bash
npm run verify
```

Produktionsbuild erzeugen

```bash
npm run build
```

---

# Content-Workflow

Jede Reise besitzt eine einheitliche Struktur.

```text
Reise
│
├── Übersicht
├── Tag 1
├── Tag 2
├── ...
│
├── Galerie
├── Reisetipps
├── Fotospots
├── Karte
└── Downloads
```

Dadurch bleiben alle Reisen konsistent – unabhängig davon, ob es sich um eine Kreuzfahrt, einen Roadtrip oder einen Wochenendausflug handelt.

---

# Design

Das Projekt verwendet die **Northern Lines Design Library**.

Wichtige Gestaltungsmerkmale:

- klare Typografie
- großzügiger Weißraum
- ruhige Farbwelt
- Hero Collection
- minimalistische Icons
- Editorial-Komponenten

Die Gestaltung unterstützt den Inhalt und drängt sich nicht in den Vordergrund.

---

# Deployment

Vor jedem Deployment:

```bash
npm run verify
npm run build
```

Der erzeugte Inhalt befindet sich anschließend im Verzeichnis:

```text
dist/
```

Dieser Build wird auf den Produktionsserver übertragen.

---

# Lizenz

Dieses Repository ist Bestandteil des privaten Projekts **Northern Lines**.

Alle Inhalte, Texte, Fotografien und Gestaltungen unterliegen dem Urheberrecht.

Eine Weiterverwendung außerhalb dieses Projekts ist ohne ausdrückliche Genehmigung nicht gestattet.
