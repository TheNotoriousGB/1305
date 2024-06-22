# Projekt-Dokumentation

Gabriel Bischof, Ensar Yildirm, John Broder

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|15.05.2024       | 1.1   | Angefangen die Dokumentation zu bearbeiten. Wir haben uns informiert, wie wir unser Projekt umsetzen können.  |
|22.05.2024       | 1.2    | Wir haben die Planung unseres Projektes abgeschlosseb und wir haben angefangen zu programmieren.|
|29.05.2024       | 2.1   |  Wir haben programmiert.|
|05.06.2024       | 2.2   | Wir haben unser Projekt fertig programmiert.|
|12.06.2024       | 3.1   |Wir haben die Dokumentation abgeschlossen und das Portfolio erstellt .|


## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist eine Website auf der Kunden ihr Feedback eingeben können und dieses in einer API gespeichert wird.
### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1| muss | funktional | Als Kunde möchte ich die wichtigsten infos auf der Startseite haben .|
|2| muss | funktional|Als Kunde möchte ich verschiedene Seiten aufrufen können  |
|3| muss | funktional | Als ein Kunde möchte ich meine meinung zu dem Restaurant abgeben können, damit das Rsetaurant sich verbbessern kann
|4| muss | funktional | Als Kunde möchte ich das dasFeedback gespeichert  wird|
|5| muss | funktional | Als Kunde möchte ich das das Feedback gelesen wird|
|6| kann | Rand|Als kunde möchte ich ein ansprechendes design haben |
|7| kann | Rand|Als Kunde möchte ich verschiedene Bilder zum Restaurant auf einer seite haben |

 
### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|  -                | Website öffnen| Website wird geöffnet|
|2.1| Webseite geöffnet | auf eine navigations leiste klicken  | Neue Seite öffnen|
|3.1| Webseite geöffnet | Email, Benutzername, Bewertung       | Vielen Dank für ihr Feedback|
|4.1| Website geöffnet  | Emai, Name, Bewertung                | Vielen Dank für ihr Feedback|
|7.1| geöffnete Webseite| -                                    | Bilder werden auf der Webseite amgezeigt|
## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
|1.1|29.05.2024 |John Broder, Ensar Yildirim | Startseite mit html und css programmieren|60min|
|2.1.| 29.05.2024| John Broder| Einen Mechanismus erstellen, der das Wechseln zwischen Seiten ermöglicht.|15min|
|3.1| 29.05.2024| Gabriel Bischof| Eingabe Feld programmiernen In das der Benutzer seine Meinung schreiben kann|15min|
|4.1|05.06.2024|Gabriel Bischof                  |API esrtellen                           |90min|
|4.2|05.06.2024|Ensar Yildirim                   |Mongo db einrichten                     |90min|
|4.3|05.06.2024|John Broder, Gabriel Bischof     |APi mit Frontened verbinden             |120min|
|4.4|05.06.2024| Ensar Yildirim , Gabriel Bischof|Api in Dockercontainer laufen lassen    |120min|
|5.1|05.06.2024|John Broder                      |mit postman api testen                  |30min|
|6.1|05.06.2024| Ensar Yildirim                  | ansprechendes design der webseite erstellen|30 min|
|7.1|05.06.2024|Ensar Yildirim, Gabriel Bischof  |verschiedene Bilder in die ebseite einfügen|15min|

## 3 Entscheiden




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
