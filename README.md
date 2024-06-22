# Projekt-Dokumentation

Gabriel Bischof, Ensar Yildirm, John Broder

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|15.05.2024       | 1.1   | Wir haben begonnen, die Dokumentation zu bearbeiten. Ausserdem haben wir uns darüber informiert, wie wir unser Projekt umsetzen können. |
|22.05.2024       | 1.2    | Wir haben die Planung unseres Projekts abgeschlossen und mit dem Programmieren begonnen.|
|29.05.2024       | 2.1   |  Wir sind mit dem Frontend fortgefahren und haben bereits einen Teil des Backends programmiert.|
|05.06.2024       | 2.2   | Wir haben unser Projekt fertig programmiert.|
|12.06.2024       | 3.1   |Wir haben die Dokumentation abgeschlossen und das Portfolio erstellt.|


## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist eine Website, auf der Kunden ihr Feedback eingeben können. Dieses Feedback wird dann in einer API gespeichert.
### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1| muss | funktional |Als Kunde möchte ich die wichtigsten Informationen auf der Startseite haben.|
|2| muss | funktional|Als Kunde möchte ich verschiedene Seiten aufrufen können.|
|3| muss | funktional | Als Kunde möchte ich meine Meinung zu dem Restaurant abgeben können, damit das Restaurant sich verbessern kann.
|4| muss | funktional | Als Kunde möchte ich, dass das Feedback gespeichert wird.|
|5| muss | funktional | 	Als Kunde möchte ich, dass das Feedback gelesen wird.|
|6| kann | Rand|Als Kunde möchte ich ein ansprechendes Design haben. |
|7| kann | Rand|	Als Kunde möchte ich verschiedene Bilder zum Restaurant auf einer Seite sehen.|

 
### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|  -                | Website öffnen| Website wird geöffnet|
|2.1| Website geöffnet |Auf eine Navigationsleiste klicken	|Neue Seite wird geöffnet|
|3.1| Website geöffnet | E-Mail, Name, Bewertung eingeben     | Vielen Dank für ihr Feedback|
|4.1| Website geöffnet  | E-Mail, Name, Bewertung                | Vielen Dank für Ihr Feedback|
|7.1| Website geöffnet| -                                    | Bilder werden auf der Website angezeigtt|
## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
|1.1|29.05.2024 |John Broder, Ensar Yildirim |Eine Startseite mit HTML und CSS programmieren. |60min|
|2.1.| 29.05.2024| John Broder| Einen Mechanismus erstellen, der das Wechseln zwischen Seiten ermöglicht.|15min|
|3.1| 29.05.2024| Gabriel Bischof| Ein Eingabefeld programmieren, in das der Benutzer seine Meinung schreiben kann.|15min|
|4.1|05.06.2024|Gabriel Bischof                  |API erstellen.                         |90min|
|4.2|05.06.2024|Ensar Yildirim                   |MongoDB einrichten.                     |90min|
|4.3|05.06.2024|John Broder, Gabriel Bischof     |API mit Frontend verbinden             |120min|
|4.4|05.06.2024| Ensar Yildirim , Gabriel Bischof|API in Docker-Container laufen lassen.    |120min|
|5.1|05.06.2024|John Broder                      |API mit Postman testen.              |30min|
|6.1|05.06.2024| Ensar Yildirim                  | Ansprechendes Design der Webseite erstellen.|30 min|
|7.1|05.06.2024|Ensar Yildirim, Gabriel Bischof  |Verschiedene Bilder in die Webseite einfügen.|15min|

## 3 Entscheiden
Wir haben uns entschieden, unsere Datenbank und API in einem Docker-Container laufen zu lassen. Dabei werden wir MongoDB als NoSQL-Datenbank verwenden.
Die API werden wir mit Postman testen.



## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
|1.1|29.05.2024 |John Broder, Ensar Yildirim     |60min  |75min |
|2.1| 29.05.2024|John Broder| 15min| 15min|
|3.1| 29.05.2024| Gabriel Bischof| 15min|15min|
|4.1|05.06.2024|Gabriel Bischof                  |90min  |120min|
|4.2|05.06.2024|Ensar Yildirim                   |90min  |120min|
|4.3|05.06.2024|John Broder, Gabriel Bischof     |120min |120min|
|4.4|05.06.2024| Ensar Yildirim , Gabriel Bischof|120min |150min|
|5.1|05.06.2024|John Broder                      |30min  |30min |
|6.1|05.06.2024| Ensar Yildirim                   |30min |30min|
|7.1|05.06.2024|Ensar Yildirim, Gabriel Bischof  |15min  |15min |                  


## 5 Testen


| TC-№ | Datum | Resultat |
| ---- | ----- | -------- | 
|1.1| 05.06.2024| OK|
|2.1| 05.06.2024| OK|
|3.1| 05.06.2024| OK|
|4.1| 05.06.2024| OK|
|4.2| 05.06.2024| OK|
|4.3| 05.06.2024| OK|
|4.4| 05.06.2024| OK|
|5.1| 05.06.2024| OK|
|6.1| 05.06.2024| OK|
|7.1| 05.06.2024| OK|
