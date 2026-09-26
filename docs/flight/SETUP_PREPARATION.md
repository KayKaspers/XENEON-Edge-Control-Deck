# Einrichtung vorbereiten - Star Citizen Deck 0.8.0

Stand: 2026-09-25. Dies ist eine Einrichtungshilfe zum bestehenden Paket,
keine neue Widget-Version und keine Bestaetigung der Spielbelegungen.

## Ergebnis der Pruefung

Elgato dokumentiert maximal 8x8 bzw. 64 Tasten fuer Virtual Stream Deck.
Lokal ist Stream Deck 7.6.0.23012 installiert. Der iCUE-Provider nimmt Spalten
und Zeilen entgegen; eine bestaetigte 8x8-Verbindung genau dieses Widgets ist
damit noch nicht nachgewiesen. Vor der Neubelegung das vorhandene Profil
exportieren und die Matrix einmal kontrollieren.

Fuer die 54 festen Slots gibt es jetzt `CONTROL_BINDINGS.json` als strukturierte
Belegungskandidaten und einen daraus erzeugten lokalen Einrichtungsplan:

| Kategorie | Anzahl | Naechster Schritt |
|---|---:|---|
| Standardtaste | 22 | In der laufenden Spielversion abgleichen, identisch in Stream Deck belegen |
| Neu belegen | 25 | Passende Tastaturfunktion im Spiel zuweisen, dann dieselbe Belegung in Stream Deck |
| Halten pruefen | 2 | Ping und Quantum: erforderliches Halteverhalten und dessen Umsetzung klaeren |
| Zuordnung offen | 5 | Slots 6, 49, 50, 53, 54 zunaechst leer lassen |

Die direkten Befehle `v_master_mode_set_scm` und `v_master_mode_set_nav` sind
in den gelesenen Spieldaten vorhanden und dort ohne Standardtaste. Fuer Slots
1/17 getrennte direkte Belegungen einrichten, keinesfalls beide mit B belegen.

Die lokale Benutzerdatei enthaelt 21 Joystick-Rebinds und keine ausdruecklichen
Tastatur-Rebinds. Ein fehlender Rebind ist kein Beweis der tatsaechlichen
Laufzeitbelegung. Bestehende Joystick-Zuweisungen werden nicht veraendert.

## Offene Funktionen gezielt klaeren

- Slot 6: Der gefundene Kandidat schaltet Throttle Sticky/Normal. Die Gleichheit
  mit dem Widget-Label CRUISE CONTROL ist nicht nachgewiesen.
- Slot 49: Remote-Turret-Zugaenge existieren; welcher davon den passenden
  Schiffstraktor bedient, haengt vom Schiff/Arbeitsplatz ab.
- Slot 50: Kein eindeutig bestaetigter universeller Greifen/Loesen-Befehl.
- Slots 53/54: Handtraktor-Rotationsachsen bzw. Haltefunktionen belegen keinen
  einzelnen Links-/Rechts-Drehbefehl fuer alle Schiffstraktoren.
- Slot 42: Der gelesene Kandidat wechselt den Modifier des fokussierten
  Salvage-Kopfes. Nicht als allgemeinen Scraping/Fracture-Wechsel interpretieren.

Keine generische Mausaktion oder andere Spielaktion unter einem unpassenden
Label einsetzen. Auch Standardtasten wie G oder Maus1 haben je nach
Operator-Modus unterschiedliche Bedeutungen. Der passende Arbeitsplatz bleibt
erforderlich; das Widget erkennt ihn nicht.

## Den Einrichtungsplan verwenden

1. `Einrichtungsplan.html` im Lieferordner `WP011-v0.8.0-Setup` oeffnen.
2. Set oder Vorbereitungsschritt filtern. Alle 64 Positionen bleiben an Ort
   und Stelle; zehn reservierte Tasten bleiben leer.
3. Eine Taste anklicken. Rechts stehen Aufgabe, Dateivorgabe, Hinweise und
   bei Bedarf der interne Funktionsname. Deine vorgesehene Belegung notieren.
4. Erst nach eigener Einrichtung das entsprechende Haekchen setzen; den
   Spieltest getrennt in der geplanten gemeinsamen Sitzung dokumentieren.
5. Notizen ueber den Exportknopf als JSON sichern. Browser-Speicherung kann
   gesperrt oder geloescht werden; sie ist kein Ersatz fuer einen Export.

Der Plan arbeitet offline. Er sendet keine Tasten, liest keine Telemetrie und
schreibt keine installierten Spiel-/Stream-Deck-Profile. Filter und Haekchen
sind lokale Vorbereitung. `Belegungsplan.csv` ist die statische Tabellenfassung.
Die bestehenden Widget-Paketdateien und ihr SHA256 bleiben unveraendert.

## Herkunft und Grenzen

Die Default-Aktionsnamen wurden aus dem lokalen LIVE-Archiv gelesen. Die
Build-Metadaten nennen Branch `sc-alpha-4.10.0`, Version `4.10.193.11644` und
Changelist `12660092`. Das ist der aufgefundene Dateistand; es ersetzt weder
die vom Maintainer genannte Spielversion 4.10.1 noch eine Laufzeitpruefung.

Die extrahierten 183915 Byte ergeben eine strukturell lesbare CryXML-Datei.
Laenge, Tabellenbereiche und Elternbeziehungen wurden kontrolliert. Die
dekodierte CRC stimmt jedoch nicht mit dem Archiv-Eintrag ueberein; daher wird
keine vollstaendige Integritaetsbestaetigung behauptet. Die Daten bleiben
Belegungskandidaten. Der SHA256 der dekodierten Datei lautet
`ad6e941804e8c0f8a4880870cc6b8815dad933c63f546be5fd3099fbf38233e6`.
Die vollstaendige Spieldatei wird nicht im Repository oder Lieferpaket verteilt.

Quellen:

- [Elgato Virtual Stream Deck, 8x8/64 Tasten](https://help.elgato.com/hc/en-us/articles/35492041288337-Elgato-Stream-Deck-How-to-Add-and-Remove-a-Virtual-Device-Virtual-Stream-Deck)
- [Elgato iCUE-Provider](https://docs.elgato.com/icue/widgets/references/plugins/stream-deck/)
- [Elgato Multi-Action-Verzoegerungen](https://help.elgato.com/hc/en-us/articles/7092527123725-Elgato-Stream-Deck-Customizable-Multi-Action-Delays):
  beschreibt begrenzte Zeiten zwischen Press/Release; kein Nachweis beliebiger
  langer Spiel-Haltefunktionen durch einen kurzen Widget-Klick.
- [unp4k CryXML-Formatreferenz, v4.0.87](https://github.com/dolkensp/unp4k/blob/v4.0.87/src/unforge/CryXmlB/CryXmlSerializer.cs)

Automatische Pruefung der Einrichtungshilfe: `tests/wp010/setup-plan.cjs`.
Widget-Funktionstests bleiben getrennt von dieser Vorbereitung.
