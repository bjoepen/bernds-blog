# RC5.1 – Build & Developer Tools

RC5.1 trennt Systemprüfung, Installation und Projektprüfung.

```text
npm run doctor
      ↓
npm run install:project
      ↓
npm run verify
      ↓
npm run dev
```

Der Befehl `npm run verify` prüft vorab automatisch, ob das Astro-CLI
installiert ist. Fehlt es, erscheint eine verständliche Installationsanweisung.
