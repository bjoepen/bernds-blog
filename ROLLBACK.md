# Rollback

Falls RC5.0 unerwartete Probleme verursacht:

```bash
cd ~/Projekte
rm -rf bernds-blog
mv bernds-blog-backup-YYYYMMDD-HHMM bernds-blog
```

Danach:

```bash
cd ~/Projekte/bernds-blog
rm -rf node_modules
npm ci --no-audit --no-fund
npm run dev
```
