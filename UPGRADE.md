# Upgrade auf Bernds Blog 1.4.1 RC1

```bash
cd ~/Projekte/bernds-blog
unzip -o ~/Downloads/bernds-blog_v1.4.1-rc.1-sveltia-mobile-editor.zip

npm run cms:configure -- OWNER/REPOSITORY
npm run cms:check
npm run verify
npm run dev
```

Lokale Prüfung:

```text
http://localhost:4321/admin/
```

Nach dem Deployment:

```text
https://www.beblog.de/admin/
```

## Sveltia CMS lokal prüfen (RC3)

```bash
npm run dev
```

Öffnen:

```text
http://localhost:4321/admin/
```

Der Entwicklungsserver leitet automatisch nach `/admin/index.html` weiter.

