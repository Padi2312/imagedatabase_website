# BilderDB
Webseite um Bilder hochzuladen, welche dann gespeichert werden. Zusätzlcih lassen sich einige Meta-Daten verändern, sowie Tags zu ausgewählten Bildern hinzufügen.

### Zuteilung der Aufgaben
Datenbank + Datenbank Funktion im Backend: Mirco 1165783 \
Frontend: Simon 6175790 \
Teile vom Backend + Anbindung an Frontend + Docker: Patrick 7414700

# Benutzung
Um das Projekt auf dem PC zu starten muss man sich im Hauptverzeichnis befinden. (Dort wo die docker-compose.yml Datei liegt)
Mit ```docker-compose up``` wird das Projekt gestartet.

Unter http://localhost:3000 ereicht man dann das Projekt.

### Daten löschen
Um die BilderDB zu löschen, müssen ALLE INHALTE aus folgenden Verzeichnissen gelöscht werden:
./database/data
./images

# Aufbau
## Backend
Das Backend liegt unter "./backend". 
In diesem ist auch das zugehörige Dockerfile, so wie eine .env-Datei,
um Variablen anzupassen.
Die hochgeladen Bilder befinden sich unter "./images"

## Frontend
Das Frontend ist unter "./web" zu finden, es beinhaltet ebenfalls
ein Dockerfile sowie eine .env-Datei.
Zusätzlich beinhaltet es eine nginx.conf-Datei welche für die Konfiguration
des Frontends ist.
Das Frontend wird über einen Nginx Webserver gehostet.


## Datenbank
Die Daten der Datenbank wurden auf den Host gemountet,
und sind unter "./database/data" zu finden.
Im Order "./database/scripts" findet man das zugehörige Initskript,
welches beim ersten Start ausgeführt wird.
