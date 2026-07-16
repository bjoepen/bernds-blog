# RC5.0 – Testbericht

## Automatisierte Prüfungen

- [x] Prüfung auf interne Registry-Adressen
- [x] Prüfung auf lokale Build-Pfade
- [x] Prüfung der Reise-/Reisetag-Beziehungen
- [x] Prüfung doppelter Tagesnummern
- [x] Astro-Content-Synchronisierung im Verify-Workflow
- [x] Produktions-Build im Verify-Workflow

## Manuelle Sichtprüfung

Nach der Installation bitte prüfen:

- [ ] `/design/ui/`
- [ ] `/design/icons/`
- [ ] Tag-1-Seite
- [ ] Tablet-Darstellung
- [ ] Smartphone-Darstellung
- [ ] Dark-Mode ist derzeit nicht Bestandteil des Themes


## RC5.0.1

- [x] `.DS_Store` wird automatisch entfernt
- [x] AppleDouble-Dateien `._*` werden automatisch entfernt
- [x] `__MACOSX` wird automatisch entfernt
- [x] esbuild 0.28.1 ist versionsgebunden freigegeben
- [x] fsevents 2.3.3 ist versionsgebunden freigegeben
- [x] Doctor-Skript benötigt keine installierten Projektabhängigkeiten
- [x] Setup-Skript nutzt reproduzierbares `npm ci`


## RC5.2

- [x] Desktop-Navigation bleibt unverändert verfügbar
- [x] mobile Navigation ist ohne JavaScript bedienbar
- [x] Touch-Ziel der Menütaste mindestens 48 × 48 Pixel
- [x] Tastaturfokus ist sichtbar
- [x] Breakpoint vor Überlagerung der Desktop-Navigation
- [x] schmale Bildschirmbreiten bis 390 Pixel berücksichtigt
- [x] Editorial-Symbole behalten die freigegebene versetzte Gestaltung
- [ ] Produktionstest mit iOS Safari
- [ ] Produktionstest mit Android Chrome


## RC5.3

- [x] Desktop- und Mobilnavigation verwenden dieselbe Navigationsliste
- [x] aktive Seite erhält `aria-current="page"`
- [x] Sprunglink zum Hauptinhalt vorhanden
- [x] Editorial-Symbole bleiben bewusst versetzt
- [x] Akzentstreifen folgt dem Kartenradius
- [x] reduzierte Bewegung berücksichtigt
- [x] horizontaler Überlauf begrenzt
- [ ] Produktionstest Desktop
- [ ] Produktionstest iOS Safari
- [ ] Produktionstest Android Chrome


## RC5.3.1

- [x] Astro-Prüfung verwendet npm statt Dateirechteprüfung
- [x] keine automatische Paketinstallation während der Prüfung
- [x] macOS-, Linux- und Windows-Befehlspfad berücksichtigt
- [x] keine neuen Abhängigkeiten
- [ ] Verify-Lauf auf dem Mac Mini
