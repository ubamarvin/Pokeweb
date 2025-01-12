# Projektbeschreibung: Single-Player-Game-Plattform Pokeweb

## Überblick
Pokeweb ist eine skalierbare Single-Player-Game-Plattform, die mehrere Spieler gleichzeitig bedienen kann. Spieler interagieren mit dem Server unabhängig voneinander; Multiplayer-Interaktionen (z. B. gegeneinander spielen) sind derzeit nicht implementiert.

## Technologie-Stack
- **Backend**: Scala mit Play Framework, deployt auf Render in einem Docker-Container.
- **Frontend**: Implementiert mit Vue.js, gebündelt durch Vite, deployt auf Vercel

## Frontend Backend Kommunikation
- Die Kommunikation zwischen Server und Client erfolgt über HTTP-Routen, während die JSON-Dateien der Web-GUI über einen WebSocket ausgetauscht werden.


## Architektur
### Stateless Architektur
- Der Server verwaltet mehrere unabhängige Spielsitzungen mit nur einer Instanz des Spieles.
- Spiellogik basiert auf einem JSON-basierten Game State, der zwischen Client und Server ausgetauscht wird.

### Game State Management
- Das Spiel startet mit einem initialen Zustand (*Game State*), der in ein JSON-Objekt transformiert wird.
- Der Server übermittelt diesen Zustand an den Client.
- Der Client bearbeitet den Game State, indem er Aktionen wie das Wählen eines Pokémons, das Ausführen von Attacken oder die Rundenauswertung durchführt.
- Anschließend sendet der Client den aktualisierten JSON-Game State zurück an den Server.
- Der Server verarbeitet die neuen Informationen, generiert einen aktualisierten Game State, kalkuliert gegebenenfalls Rundenauswertungen und sendet den aktualisierten Zustand erneut an den Client.

### Backend-Integration
- Der Server nutzt eine **Fat JAR**, die ein zuvor implementiertes Pokemon Spiel enthält.
- Dieses Spiel folgt einer strikten MVC-Architektur und macht umfangreichen Gebrauch von Entwurfsmustern, darunter:
  - **Observer Pattern**: Zur Implementierung von Zustandsänderungen und Benachrichtigungen.
  - **State Pattern**: Für die Verwaltung verschiedener Spielzustände.
  - **Strategy Pattern**: Zur dynamischen Anpassung von Spielmechaniken.
  - **Chain of Responsibility Pattern**: Für die Verarbeitung von Aktionen und Ereignissen.

### Grafiken
- Sprites (Spielgrafiken) werden über eine öffentliche Drittanbieter-API direkt vom Client abgerufen.

## Vorteile der Umsetzung
- **Effizienz**: Eine einzige Serverinstanz kann mehrere Spieler-Sitzungen gleichzeitig verwalten.
- **Skalierbarkeit**: Dank der Stateless-Architektur kann die Plattform leicht erweitert werden.
- **Flexibilität**: Der JSON-basierte Ansatz ermöglicht eine einfache Manipulation und Erweiterung des Game States.

## Deployment
- Die Plattform ist in einem Docker-Container verpackt und auf Render deployt, was eine einfache Bereitstellung und Wartung ermöglicht.