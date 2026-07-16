# Migration von Markdown zu MDX

## Vorher

```markdown
## Unser Tipp

> Plant ausreichend Zeit ein.
```

## Nachher

```mdx
<EditorialCallout type="tip">

Plant ausreichend Zeit ein.

</EditorialCallout>
```

## Ablauf

```text
Front Matter
    ↓
Import der Astro-Komponente
    ↓
normaler Markdown-/MDX-Inhalt
    ↓
EditorialCallout-Komponenten
    ↓
Astro Build
```

RC4.2 hat alle vorbereiteten Reisetage automatisch auf `.mdx` umgestellt.
Die URLs der Beiträge ändern sich dadurch nicht.
