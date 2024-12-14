# Projektbeschreibung: Single-Player-Game-Plattform Pokeweb

## Überblick
Eine skalierbare Single-Player-Game-Plattform, die mehrere Spieler gleichzeitig bedienen kann. Spieler interagieren unabhängig voneinander; Multiplayer-Interaktionen (z. B. gegeneinander spielen) sind derzeit nicht implementiert.

## Technologie-Stack
- **Backend**: Scala mit Play Framework, deployt auf Render in einem Docker-Container.
- **Frontend**: Implementiert mit Vue.js, gebündelt durch Vite, deployt auf Vercel

## Architektur
### Stateless Architektur
- Der Server verwaltet mehrere unabhängige Spielsitzungen mit nur einer Instanz des Spieles.
- Spiellogik basiert auf einem JSON-basierten Game State, der zwischen Client und Server ausgetauscht wird.

### Backend-Integration
- Der Server nutzt eine **Fat JAR**, die ein zuvor implementiertes Pokemon Spiel enthält.
- Dieses Spiel folgt einer strikten MVC-Architektur und macht umfangreichen Gebrauch von Entwurfsmustern, darunter:
  - **Observer Pattern**: Zur Implementierung von Zustandsänderungen und Benachrichtigungen.
  - **State Pattern**: Für die Verwaltung verschiedener Spielzustände.
  - **Strategy Pattern**: Zur dynamischen Anpassung von Spielmechaniken.
  - **Chain of Responsibility Pattern**: Für die Verarbeitung von Aktionen und Ereignissen.

### Game State Management
- Der Client sendet manipulierte JSON-Objekte zurück an den Server.
- Der Server berechnet den neuen Spielstatus und übermittelt ihn an den Client.

### Grafiken
- Sprites (Spielgrafiken) werden über eine öffentliche Drittanbieter-API direkt vom Client abgerufen.

## Vorteile der Umsetzung
- **Effizienz**: Eine einzige Serverinstanz kann mehrere Spieler-Sitzungen gleichzeitig verwalten.
- **Skalierbarkeit**: Dank der Stateless-Architektur kann die Plattform leicht erweitert werden.
- **Flexibilität**: Der JSON-basierte Ansatz ermöglicht eine einfache Manipulation und Erweiterung des Game States.

## Deployment
- Die Plattform ist in einem Docker-Container verpackt und auf Render deployt, was eine einfache Bereitstellung und Wartung ermöglicht.