# macOS-Metadateien

Der Finder kann Dateien wie `.DS_Store` und `._Dateiname` erzeugen.

RC5.0.1 behandelt diese Dateien nicht mehr als manuellen Fehler. Sie werden
automatisch entfernt durch:

```bash
npm run metadata:clean
```

Auch `npm run release:check` und `npm run verify` bereinigen diese Dateien
automatisch.

Zusätzlich sind sie in `.gitignore` ausgeschlossen.
