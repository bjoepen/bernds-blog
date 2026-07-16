# Front Matter vollständig zurücksetzen und neu einrichten

## Ziel
Die lokale Front-Matter-Installation wird auf einen sauberen Zustand zurückgesetzt. Deine Markdown-Inhalte und Bilder bleiben erhalten.

## 1. VS Code vollständig beenden

## 2. Lokale Front-Matter-Daten sichern

```bash
cd ~/Projekte/bernds-blog
cp -a .frontmatter .frontmatter-backup-$(date +%Y%m%d-%H%M)
cp frontmatter.json frontmatter-backup-$(date +%Y%m%d-%H%M).json
```

## 3. Nur die lokale Datenbank entfernen

```bash
rm -rf .frontmatter/database
mkdir -p .frontmatter/database
```

Die Vorlagen in `.frontmatter/templates/` bleiben bestehen.

## 4. Erweiterungsspeicher zurücksetzen – nur bei anhaltenden Problemen

```bash
rm -rf ~/Library/Application\ Support/Code/User/globalStorage/eliostruyf.vscode-front-matter
```

## 5. VS Code neu öffnen

```bash
cd ~/Projekte/bernds-blog
code .
```

Front Matter nicht erneut initialisieren. Das Projekt enthält bereits eine vollständige `frontmatter.json`.

## 6. Dashboard öffnen

Front-Matter-Symbol in der Seitenleiste anklicken und **Dashboard öffnen** wählen. Sichtbar sein sollten Reisen, Orte, Fotospots, Ausrüstung und Artikel.

## 7. Entwicklungsserver starten

```bash
npm install
npm run dev
```

Vorschau: `http://localhost:4321`
