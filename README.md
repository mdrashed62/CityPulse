# 🚌 CityPulse: University Bus Tracker PWA

**CityPulse** is a high-performance, Progressive Web Application (PWA) specifically engineered for real-time university shuttle tracking. By leveraging **Domain-Driven Design (DDD)**, the platform ensures a scalable, maintainable, and premium experience that reflects the prestige of City University.

---

## 🏗️ Architectural Blueprint

The project follows a strict separation of concerns to maintain high code quality and business logic integrity.

### Backend: Domain-Driven Design (DDD)
The backend is organized into layers that isolate the core business rules from external technologies.



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
│   ├── prisma/             # Database Schema & Migrations
│   ├── src/
│   │   ├── domain/         # Entities, Value Objects, & Repo Interfaces
│   │   ├── application/    # Business Use Cases & Services
│   │   ├── infrastructure/ # Implementations (DB, JWT, Email)
│   │   ├── presentation/   # Express Controllers & WebSockets
│   │   └── server.ts       # Express Entry Point
│
└── frontend/
    ├── src/
    │   ├── theme.ts        # Heritage Crimson MUI Configuration
    │   ├── domains/        # Feature-based organization (Auth, Admin, Map)
    │   ├── store/          # Redux Toolkit Slices
    │   ├── services/       # API Clients & WebSocket Listeners
    │   └── pwa/            # Service Worker & PWA Utilities