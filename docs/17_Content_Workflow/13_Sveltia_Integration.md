# Sveltia CMS – Integration in Bernds Blog 1.4.1

## Umfang

Dieser Build ergänzt einen mobilen Redaktionszugang unter:

```text
https://www.beblog.de/admin/
```

Verwaltet werden bewusst nur:

- Reisen
- Reisetage

Neue Einträge werden als Markdown-Dateien angelegt und standardmäßig mit
`draft: true` gespeichert.

## Einmalige Einrichtung

GitHub-Repository eintragen:

```bash
npm run cms:configure -- OWNER/REPOSITORY
```

Danach prüfen:

```bash
npm run cms:check
```

## Anmeldung

### Empfohlener Einstieg für einen einzelnen Administrator

Anmeldung mit einem GitHub Personal Access Token über den Button
„Sign In with Token“.

### Komfortabler OAuth-Login

Für OAuth wird ein separater OAuth-Authenticator benötigt. Nach dessen
Einrichtung:

```bash
npm run cms:configure -- OWNER/REPOSITORY https://AUTHENTICATOR-URL
```

Das Client Secret gehört ausschließlich in den Authenticator und niemals
in dieses Repository.

## Zusammenspiel mit Front Matter CMS

Front Matter bleibt die vollständige Desktop-Redaktion.

Neu hinzugekommen ist der Inhaltstyp:

```text
reisetag-mobile
```

Dieser erzeugt reine Markdown-Dateien ohne Astro-Komponenten. Dadurch können
mobile Entwürfe sicher in Sveltia bearbeitet und später in VS Code
redaktionell finalisiert werden.

Die bestehenden MDX-Templates bleiben unverändert erhalten.
