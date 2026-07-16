# Geprüfte npm-Installationsskripte

Die beiden gemeldeten Installationsskripte gehören zu regulären
Projektabhängigkeiten:

```text
esbuild@0.28.1
fsevents@2.3.3
```

Sie sind in `package.json` ausdrücklich und versionsgebunden freigegeben:

```json
"allowScripts": {
  "esbuild@0.28.1": true,
  "fsevents@2.3.3": true
}
```

`esbuild` wird von Astro für den Build benötigt. `fsevents` ist eine optionale
macOS-Abhängigkeit zur effizienten Erkennung von Dateiänderungen.

Die Freigabe ist bewusst auf die geprüften Versionen begrenzt. Nach einer
späteren Aktualisierung wird npm erneut auf eine Prüfung hinweisen.
