# MDX und Editorial Callouts

RC4.2 verwendet für Reisetage MDX statt reinem Markdown. Dadurch können
Astro-Komponenten direkt im Beitrag genutzt werden.

## Warum MDX?

Die wiederkehrenden Rubriken sind keine normalen Kapitelüberschriften, sondern
gestaltete redaktionelle Elemente mit eigenem Symbol und eigener Semantik:

- Der Moment des Tages
- Unser Tipp
- Bernds Notizbuch

## Aufbau eines Reisetages

Direkt nach dem Front Matter wird die Komponente importiert:

```mdx
import EditorialCallout from '../../components/EditorialCallout.astro';
```

Danach kann sie im Text verwendet werden:

```mdx
<EditorialCallout type="moment">

Der erste Blick auf das Schiff und das Gefühl, dass die Reise beginnt.

</EditorialCallout>
```

```mdx
<EditorialCallout type="tip">

Plant bei der Einschiffung ausreichend Zeit ein.

</EditorialCallout>
```

```mdx
<EditorialCallout type="notebook">

Eine kleine persönliche Beobachtung dieses Tages.

</EditorialCallout>
```

## Dateiendung

Neue Reisetage werden als `.mdx` gespeichert:

```text
src/content/reisetage/mein-reisetag.mdx
```

Normale Beiträge ohne Komponenten dürfen weiterhin `.md` verwenden.

## Wichtig

Es werden keine Remark-Plugins und kein alter Markdown-Prozessor benötigt.
Die offizielle Astro-Integration `@astrojs/mdx` übernimmt die Verarbeitung.
