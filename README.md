# Modern Esthete

<p align="center">
  <img src="Logo.png">
</p>

Modern Esthete is a premium, high-performance e-commerce platform built with **Next.js 15**, **Auth.js v5**, **Prisma**, and **Supabase**. It features a "Modern Minimalist" aesthetic with a core focus on typography, editorial layouts, and a seamless shopping experience.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack moderno y de alto rendimiento para garantizar la mejor experiencia de usuario y facilidad de desarrollo.

| Categoría | Tecnología | Uso |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) | Reemplaza el renderizado del lado del servidor y estático. |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | Tipado estático para un código más robusto y mantenible. |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) | Framework de CSS basado en utilidades para diseños rápidos. |
| **Autenticación** | [Auth.js v5](https://authjs.dev/) | Gestión segura de sesiones y autenticación de usuarios. |
| **Base de Datos** | [Supabase](https://supabase.com/) | PostgreSQL gestionado con capacidades de tiempo real. |
| **ORM** | [Prisma](https://www.prisma.io/) | Modelado de datos y consultas de base de datos seguras. |
| **Iconos** | [Lucide React](https://lucide.dev/) | Biblioteca de iconos vectoriales consistentes y modernos. |
| **Validación** | [Zod](https://zod.dev/) | Esquemas de validación de datos para API y formularios. |
| **Seguridad** | [Bcryptjs](https://www.npmjs.com/package/bcryptjs) | Encriptación de contraseñas de alta seguridad. |

### 💎 Características Principales

- **Tienda Minimalista**: Diseño enfocado en el producto con una navegación intuitiva.
- **Gestión de Carrito**: Experiencia de compra fluida con persistencia local.
- **Perfil de Usuario**: Área personal para gestionar datos y pedidos.
- **Borrado de Cuenta Seguro**: Sistema de eliminación de cuenta con confirmación mediante modal personalizado y limpieza total de datos (Cascading Deletes).
- **Diseño Premium**: Interfaz moderna con animaciones suaves y tipografía Manrope.
- **Seguridad Avanzada**: Row Level Security (RLS) en Supabase para proteger los datos de los usuarios.

## 📂 Project Structure

```bash
Modern Esthete/
├── prisma/                  # Database schema & migrations
│   ├── schema.prisma        # Prisma Data Model
│   └── seed.ts              # Database Seeder (Products/Categories)
├── public/                  # Static assets & Logos
├── src/
│   ├── app/                 # Next.js App Router (Pages & API)
│   │   ├── (auth)/          # Auth flows (Login/Register)
│   │   ├── account/         # User Profile
│   │   ├── api/             # Backend Endpoints
│   │   ├── cart/            # Checkout Flow
│   │   ├── shop/            # Catalog Layer
│   │   └── layout.tsx       # Root UI Wrapper
│   ├── components/          # Reusable UI Architecture
│   │   ├── Hero.tsx         # High-impact visuals
│   │   └── Navbar.tsx       # Dynamic Auth Navigation
│   ├── context/             # Global State (Cart)
│   ├── lib/                 # Core utilities (Prisma Client)
│   ├── auth.ts              # NextAuth v5 Config
│   └── globals.css          # Design System
├── .env                     # Secrets (Supabase/Auth)
├── LICENSE                  # MIT License
├── architecture.drawio      # Editable source diagram
├── security_policies.sql    # Database Hardening
└── package.json             # Core Metadata
```

## 🏗️ System Architecture

Modern Esthete leverages modern serverless patterns and a robust relational database.

### System Architecture

```mermaid
graph TD
    subgraph Client ["Frontend (Client Browser)"]
        UI[User Interface / React]
        Cart[Context / Local Storage]
    end

    subgraph Server ["Next.js Server / Edge"]
        API[API Route Handlers]
        Pages[Server Components]
        Auth[Auth.js / NextAuth]
        
        API --> |Reads/Writes| Prisma[Prisma ORM]
        Pages --> |Server Data Fetching| Prisma
        Auth --> |Validate| Prisma
    end

    subgraph Database ["Data Layer"]
        Postgres[(PostgreSQL Database)]
        Prisma --> Postgres
    end

    subgraph External ["External Services"]
        Stripe[Stripe Payment Gateway]
        SupabaseAuth[Supabase Auth Admin]
    end

    Client --> |HTTP Requests| API
    Client --> |Navigation| Pages
    API --> |Checkout| Stripe
    API --> |User Management| SupabaseAuth
```

### Backend Flow (Auth & Data)

```mermaid
sequenceDiagram
    participant User as Client / Browser
    participant API as Next.js API Route
    participant Auth as Auth.js (Middleware)
    participant DB as Prisma / PostgreSQL
    participant SB as Supabase Auth (Admin)

    User->>API: DELETE /api/auth/delete-account
    API->>Auth: Validate Session (JWT)
    alt Unauthorized
        Auth-->>User: 401 Unauthorized
    else Authorized
        API->>DB: prisma.user.delete({ where: { id } })
        Note over DB: Cascading Deletes (Orders, Cart, etc.)
        DB-->>API: Success / Error
        API->>SB: supabaseAdmin.auth.admin.deleteUser(id)
        SB-->>API: Success / Warn (if key missing)
        API-->>User: 200 OK (Success)
    end
```

## 📊 Data Model (Prisma)

The database schema is designed for scalability and data integrity.

- **User**: Authentication and profile data. Linked to `Orders` and `Addresses`.
- **Product**: Core catalog item. Includes `slug` for SEO-friendly URLs.
- **Category**: Hierarchical organization.
- **Order**: Transactional record linking `User`, `Address`, and `OrderItems`.
- **Cart**: Persistent shopping cart management.

## 🔐 Security (RLS)

The database is hardened using **Row Level Security (RLS)** in Supabase.
- Public tables (`Product`, `Category`) are read-only for all.
- Private tables (`User`, `Order`, `Cart`) are restricted to the owner (`auth.uid()`).
- Use the provided `security_policies.sql` to apply these rules.

---

## 🚀 Getting Started

### 1. Requirements
- Node.js 20+
- A Supabase project (PostgreSQL)

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Configure your `.env` with `DATABASE_URL`, `DIRECT_URL`, and `AUTH_SECRET`.

### 4. Database Sync
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development
```bash
npm run dev
```

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente, siempre citando al autor.