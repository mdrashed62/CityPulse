# 🚌 CityPulse: University Bus Tracker PWA

**CityPulse** is a high-performance, Progressive Web Application (PWA) specifically engineered for real-time university shuttle tracking. By leveraging **Domain-Driven Design (DDD)**, the platform ensures a scalable, maintainable, and premium experience that reflects the prestige of City University.

---

## 🏗️ Architectural Blueprint

The project follows a strict separation of concerns to maintain high code quality and business logic integrity.

### Backend: Domain-Driven Design (DDD)

The backend is organized into layers that isolate core business rules from external technologies:

* **Domain Layer**: Contains pure business logic, Entities (User, Bus, Schedule), and Value Objects (Email, GeoPoint). It is independent of any frameworks.
* **Application Layer**: Orchestrates use cases (e.g., `UpdateBusLocation`, `ApproveUser`) and handles Data Transfer Objects (DTOs).
* **Infrastructure Layer**: Implements technical details like Prisma repositories, JWT authentication, and Nodemailer services.
* **Presentation Layer**: The entry point for external requests via REST APIs and WebSocket Gateways.

### Frontend: Container-Presenter Pattern
The frontend utilizes a modern React architecture to decouple logic from the UI.

* **Container Layer**: Handles state management (Redux), data fetching, and side effects.
* **Presenter Layer**: Pure functional components styled with a **Heritage Premium MUI Theme**.
* **Real-time Synchronization**: Integrated WebSockets (Socket.io) for live bus telemetry.
* **PWA Core**: Equipped with Service Workers and a Web Manifest for offline reliability and mobile installability.

---

## 🎨 Design Philosophy: Heritage Premium

CityPulse is themed using the **City University Heritage Palette**. The interface is designed to feel authoritative yet modern, utilizing:

* **Primary Color**: Heritage Crimson (`#8D191D`) for branding and vital actions.
* **Secondary Color**: Oxford Blue-Grey (`#1E293B`) for navigation and structural elements.
* **Surface**: Modern Glassmorphism (blurred app bars) and soft elevations for a premium "App-like" feel on the web.

---

## 🔐 Role-Based Access Control (RBAC)

The system is governed by four distinct security roles:

| Role | Responsibility |
| :--- | :--- |
| **ADMIN** | System oversight, user verification, bus/route creation, and scheduling. |
| **DRIVER** | Telemetry source; initiates tracking sessions and broadcasts GPS coordinates. |
| **STUDENT** | End-user; tracks assigned buses, views ETAs, and receives route updates. |
| **STAFF** | End-user; shares student permissions with staff-specific route assignments. |

---

## 📁 Project Organization

```text
CityPulse/
├── backend/
│   ├── prisma/          # Database Schema & Migrations
│   ├── src/
│   │   ├── domain/      # Entities, Value Objects, & Repo Interfaces
│   │   ├── application/ # Business Use Cases & Services
│   │   ├── infrastructure/ # Implementations (DB, JWT, Email)
│   │   ├── presentation/   # Express Controllers & WebSockets
│   │   └── server.ts       # Express Entry Point
│
└── frontend/
    ├── src/
    │   ├── theme.ts     # Heritage Crimson MUI Configuration
    │   ├── domains/     # Feature-based organization (Auth, Admin, Map)
    │   ├── store/       # Redux Toolkit Slices
    │   ├── services/    # API Clients & WebSocket Listeners
    │   └── pwa/         # Service Worker & PWA Utilities

```

---

## 🛠️ Installation & Execution

CityPulse uses an automated management system to handle background processes and live logging.

### 1. Initial Setup

Before running the application for the first time, ensure dependencies are installed and environment variables are configured in both sub-directories.

```bash
# Install Backend dependencies
cd backend && npm install && cd ..

# Install Frontend dependencies
cd frontend && npm install && cd ..

# Make management scripts executable
chmod +x start.sh stop.sh

```

### 2. Running the Servers

The `start.sh` script launches both the Express backend (Port 5000) and the Vite frontend (Port 3000) simultaneously.

```bash
./start.sh

```

> **Note:** This script is configured to stream live logs directly to your terminal. Pressing **Ctrl + C** while the script is active will trigger a cleanup function that stops both servers.

### 3. Stopping the Servers

If the servers are running in the background, use the provided stop script to safely terminate processes and free up the ports.

```bash
./stop.sh

```

---

## 🔌 Communication Protocols

### REST API Endpoints

* **Auth**: Secure Login, Registration (Pending Approval), and Password Recovery.
* **Admin**: User lifecycle management, Bus asset management, and Schedule coordination.
* **User**: Retrieval of assigned routes and profile management.

### WebSocket Telemetry

* `bus_location_update`: Real-time GPS stream from Driver to Server.
* `bus_location_broadcast`: Low-latency distribution from Server to Student Map.

---

## 📄 License

This project is licensed under the **MIT License**.

## 👥 Development

**CityPulse Development Team** *Building the future of campus mobility.*

```