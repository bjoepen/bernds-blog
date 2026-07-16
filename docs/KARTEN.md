# Karten und Fotospots

Die Kartenkomponente verwendet Leaflet und OpenStreetMap.

## Datenschutz

Beim ersten Seitenaufruf wird keine Verbindung zum Kartenanbieter aufgebaut. Erst nach Klick auf **Karte mit Fotospots laden** lädt der Browser Leaflet-JavaScript aus dem lokalen Website-Bundle und Kartenkacheln von OpenStreetMap.

## Fotospots pflegen

Fotospots stehen in der Ortsdatei unter `spots`:

```yaml
spots:
  - name: "Kruttornet"
    latitude: 57.6410
    longitude: 18.2887
    note: "Stadtmauer, Turm und Hafen."
    lens: "18–50 mm"
    bestTime: "Früher Morgen"
```

Die Reihenfolge bestimmt die Nummerierung auf der Karte und in der Fotospot-Liste.

## Keine Google-Maps-Verknüpfung

Das Projekt verwendet keine `googleMaps`-Felder und zeigt keine Google-Maps-Schaltflächen an.
