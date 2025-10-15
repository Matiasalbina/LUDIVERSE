LUDIVERSE — Plataforma online de venta de juegos de mesa

LUDIVERSE es una e-commerce para juegos de mesa construida con TypeScript, React, Node.js y PostgreSQL. El objetivo es ofrecer un catálogo claro, un proceso de compra simple y herramientas de administración para gestionar inventario, pedidos y clientes.
En el futuro se integrará con Mercado Libre para sincronizar publicaciones, precios y stock.

✨ Características (MVP)

Catálogo de productos con imágenes, precio, etiquetas y categorías.

Búsqueda y filtros (categoría, precio, disponibilidad).

Ficha de producto con galería y variantes (p. ej., accesorios).

Carrito persistente y cálculo de totales.

Autenticación básica (JWT) y roles (cliente/admin).

Panel mínimo de administración para CRUD de productos.

Roadmap

Checkout con pasarela de pago.

Órdenes, estados y notificaciones por correo.

Reviews/valoraciones.

Integración con Mercado Libre (publicaciones, stock, órdenes).

Despliegue en nube y CI/CD.

🧱 Stack técnico

Frontend: React + TypeScript, Tailwind/DaisyUI (UI), React Router.

Backend: Node.js + TypeScript (Express), JWT, Zod/Helmet (validación/seguridad).

Base de datos: PostgreSQL (via pg).

Testing: Vitest/Jest (según módulo).

Herramientas: ESLint + Prettier, Husky (pre-commit).

Infra (futuro): Docker, Render/Vercel/Fly.io, S3 u otro storage para medios.

🏗️ Arquitectura

Monorepo simple frontend + backend (o carpetas separadas):

/ludiverse
├─ frontend/ # React + TS
├─ backend/ # Node + Express + TS
├─ docs/ # decisiones, endpoints, diagramas
└─ README.md

Backend (capas):
routes → controllers → services → repositories (DB) → models
Middlewares para auth, manejo de errores y validación de inputs.
