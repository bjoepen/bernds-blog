# Update ohne GitHub

## Backup

```bash
cp -a /var/www/bernds-blog /var/www/bernds-blog-backup-$(date +%Y%m%d-%H%M)
```

## Neues Release

Eigene Inhalte und Bilder sichern:

```text
src/content/
public/images/
```

Danach Release einspielen, Abhängigkeiten installieren und neu bauen:

```bash
cd /var/www/bernds-blog
npm install
npm run build
```
