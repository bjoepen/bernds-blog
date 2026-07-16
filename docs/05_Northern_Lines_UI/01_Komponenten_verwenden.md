# Northern-Lines-Komponenten verwenden

In einer MDX-Datei werden die benötigten Komponenten importiert:

```mdx
import PhotoSettings from '../../components/ui/PhotoSettings.astro';
import WeatherSummary from '../../components/ui/WeatherSummary.astro';
```

Danach können sie direkt im Beitrag verwendet werden:

```mdx
<PhotoSettings
  camera="Fujifilm X-A2"
  lens="Sigma 18–50 mm F2.8"
  aperture="F5.6"
  shutter="1/250 s"
  iso="200"
/>
```

```mdx
<WeatherSummary
  condition="partly-cloudy"
  title="Sonne und Wolken"
  temperature="22 °C"
  wind="leichter Wind"
/>
```

Die Komponenten ersetzen keine persönlichen Texte. Sie strukturieren ergänzende
Informationen und verwenden ausschließlich Northern-Lines-Symbole.
