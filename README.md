# Modern Esthete

<p align="center">
  <img src="Logo.png">
</p>

Modern Esthete is a premium, high-performance e-commerce platform built with **Next.js 15**, **Auth.js v5**, **Prisma**, and **Supabase**. It features a "Modern Minimalist" aesthetic with a core focus on typography, editorial layouts, and a seamless shopping experience.

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-Logic-3178C6?style=for-the-badge&logo=typescript)

- [**Next.js 15**](https://nextjs.org/): Core framework for both frontend UI and backend API routes.
- [**Supabase**](https://supabase.com/): Managed PostgreSQL database with real-time capabilities and security.
- [**Tailwind CSS 4.0**](https://tailwindcss.com/): Modern styling engine for high-end minimalist aesthetics.
- [**Prisma**](https://www.prisma.io/): Type-safe ORM for database modeling and efficient querying.
- [**Auth.js v5**](https://authjs.dev/): Flexible authentication for the Next.js ecosystem.

---

## 🏗️ Project Architecture

The platform follows a modern full-stack architecture, utilizing Next.js as the bridge between user experience and data persistence.

```mermaid
graph TD
    subgraph Client ["Client Interface (Frontend)"]
        UI[React Components / UI]
        State[Context API / Cart State]
        Logic[Client-side Validation]
    end

    subgraph Server ["Infrastructure (Backend)"]
        Routes[App Router / SSR]
        API[API Endpoints]
        Auth[Auth.js Middleware]
        Prisma[Prisma ORM Engine]
        
        Routes --> |Fetch| API
        API --> |Secure| Auth
        API --> |Query| Prisma
        Auth --> |Database Sync| Prisma
    end

    subgraph Data ["Persistence Layer"]
        Postgres[(PostgreSQL Database)]
        Supabase[Supabase Logic / RLS]
        Prisma --> Postgres
        Supabase --> Postgres
    end

    UI --> |User Interaction| State
    State --> |Hydrate| Logic
    Logic --> |Secure API Requests| API
    UI --> |Server Components| Routes
```

---

## 📊 Data Model (Prisma Schema)

The architecture prioritizes relational integrity through a structured schema:

- **User**: Central identity node.
- **Product**: Catalog management with SEO-optimized slugs.
- **Order/OrderItem**: Transactional records with relational mapping.
- **Cart**: Session-persistent state management.
- **Cascading Logic**: Configured at the DB level to ensure data hygiene upon user deletion.

---

## 🔐 Security & Hardening

- **RLS (Row Level Security)**: Supabase policies ensure that users can only access their own transactional data (`auth.uid()`).
- **Middleware Validation**: Next.js middleware intercepts requests to verify identity via Auth.js before reaching data-sensitive routes.
- **Encryption**: sensitive data is handled using `bcryptjs` for secure hashing.

---

## 🚀 Deployment & Initialization

### 1. Database Sync
```bash
npx prisma generate
npx prisma db push
```

### 2. Environment Variables
Required keys: `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`.

## 🤝 Contributing

Developed with ❤️ for the Tech Community.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente, siempre citando al autor.