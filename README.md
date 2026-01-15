# Modern Esthete / E-commerce

Una aplicación de comercio electrónico moderna y de alto rendimiento construida con Next.js 15, TypeScript y Tailwind CSS. El diseño presenta una estética minimalista y premium con diseños avanzados para las páginas de Tienda (Shop), Carrito (Cart) y Contacto.

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Contexto**: React Context API (Cart State)
- **Iconos**: Material Symbols Outlined / Lucide React
- **Fuentes**: Manrope

## Estructura del Proyecto

```bash
Modern Esthete/
├── src/
│   ├── app/                # Rutas y Páginas
│   │   ├── cart/           # Carrito
│   │   ├── collections/    # Colecciones
│   │   ├── contact/        # Contacto
│   │   ├── new-arrivals/   # Novedades
│   │   ├── shop/           # Tienda y Producto
│   │   ├── layout.tsx      # Estructura Global
│   │   └── page.tsx        # Home Page
│   ├── components/         # Bloques de la Web
│   │   ├── Navbar.tsx      # Navegación
│   │   ├── Hero.tsx        # Portada
│   │   ├── ProductCard.tsx # Tarjetas
│   │   └── Footer.tsx      # Pie de página
│   ├── context/            # Lógica (Carrito)
│   └── data/               # Datos de Productos
└── src/globals.css         # Estilos y Colores
```

## Empezando

1.  **Clonar el repositorio:**
    ```bash
    git clone <repository-url>
    cd modern-esthete
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir la aplicación:**
    Visita [http://localhost:3000](http://localhost:3000)

## Características Principales

- **Carrito Dinámico**: Sistema persistente (LocalStorage) para añadir productos, actualizar cantidades y calcular totales automáticamente.
- **Navegación Móvil**: Menú hamburguesa completo con acceso a categorías, búsqueda y carrito.
- **Fidelidad de Diseño**: Estética editorial premium con tipografía Manrope y micro-interacciones (Quick Add, Hover effects).
- **Páginas Editoriales**: Páginas de "New Arrivals" y "Collections" con layouts de alta fidelidad.
- **SEO Ready**: Estructura semántica HTML5 y optimización de metatitulos.
