# Modern Esthete / DevStudio E-commerce

<p align="center">
  <img src="Logo.png">
</p>

A modern, high-performance e-commerce application built with Next.js 15, TypeScript, and Tailwind CSS. The design features a minimalist and premium aesthetic with advanced layouts for Shop, Cart, and Contact pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Context**: React Context API (Cart State)
- **Icons**: Material Symbols Outlined / Lucide React
- **Fonts**: Manrope

## Project Structure

```bash
Modern Esthete/
├── src/
│   ├── app/                # Routes & Pages
│   │   ├── cart/           # Shopping Cart
│   │   ├── collections/    # Editorial Collections
│   │   ├── contact/        # Contact & Branding
│   │   ├── new-arrivals/   # Latest Drops
│   │   ├── shop/           # Shop & Product Details
│   │   ├── layout.tsx      # Global Structure
│   │   └── page.tsx        # Home Page
│   ├── components/         # UI Blocks
│   │   ├── Navbar.tsx      # Main Navigation
│   │   ├── Hero.tsx        # High-Impact Hero Section
│   │   ├── ProductCard.tsx # Product Cards
│   │   └── Footer.tsx      # Social & Payment Footer
│   ├── context/            # Logic (Cart State)
│   └── data/               # Product Data
└── src/globals.css         # Global Styles & Tokens
```

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd modern-esthete
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Visit [http://localhost:3000](http://localhost:3000)

## Key Features

- **Dynamic Cart**: Persistent (LocalStorage) system to add products, update quantities, and calculate totals automatically.
- **Mobile Navigation**: Full-screen hamburger menu with access to categories, search, and cart.
- **Design Fidelity**: Premium editorial aesthetic with Manrope typography and micro-interactions (Quick Add, Hover effects).
- **Editorial Pages**: Dedicated "New Arrivals" and "Collections" pages with high-fidelity layouts.
- **SEO Ready**: Semantic HTML5 structure and meta-title optimization.
