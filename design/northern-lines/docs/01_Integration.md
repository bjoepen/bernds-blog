# Integration in Astro

## Komponente

```astro
---
import NorthernLineIcon from '../components/icons/NorthernLineIcon.astro';
---

<NorthernLineIcon name="camera" size={24} />
```

## Barrierefreiheit

Dekorative Symbole erhalten automatisch `aria-hidden="true"`.

Ein Symbol mit eigenständiger Bedeutung kann beschriftet werden:

```astro
<NorthernLineIcon
  name="lighthouse"
  size={24}
  label="Unser Tipp"
/>
```

## Farbsteuerung

Die Symbolfarbe wird über die CSS-Eigenschaft `color` gesteuert.
