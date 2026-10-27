# Centinela Seguridad Privada — Web demo

Demo de sitio web para una empresa de seguridad privada (Ecuador).
Desarrollada por **JIMBRA** con la arquitectura del handoff técnico.

## ⚠️ Sitio demostrativo

Este sitio es una **propuesta de maquetación** (verás la franja «Modo Vista
Previa» arriba, que se puede cerrar). Todos los datos — nombre de empresa,
teléfono, dirección, cifras, testimonios y fotografías — son **de
referencia** y se personalizan con la información real del cliente.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 (tokens en `src/app/globals.css` con `@theme`)
- shadcn/ui + framer-motion + lucide-react
- PWA instalable (manifest + service worker)
- Sin base de datos, sin autenticación, sin variables de entorno

## Cómo cambiar los datos (5 minutos)

**Todo el contenido editable vive en un solo archivo:**

```
src/lib/site-config.ts
```

Ahí cambias: nombre de la empresa, WhatsApp (⚠️ el número demo es
`593999888777`), teléfono, correo, dirección, ciudad, horarios, redes
sociales, cifras, servicios, testimonios, preguntas frecuentes y las
opciones del cotizador.

Otros ajustes:

- **Logo e imágenes**: reemplaza los archivos en `public/images-security/`
  (logo.jpg, hero.jpg, services/, gallery/). Mantén nombres o actualiza
  las rutas en `site-config.ts`.
- **Dominio para SEO**: busca `centinelaseguridad.com` en
  `src/app/layout.tsx`, `src/app/robots.ts` y `src/app/sitemap.ts`, y pon
  el dominio real.
- **Colores**: edita los tokens `@theme` en `src/app/globals.css`
  (tinta `#0A0F14`, azules acero, ámbar señal `#FFB020`).
- **Crédito del diseñador**: `designerCredit` en `site-config.ts`.

## Cómo correr en local

```bash
bun install     # o npm install
bun run dev     # http://localhost:3000
```

## Cómo desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En vercel.com → **Add New → Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. **No configure nada más**
   (sin variables de entorno). Clic en **Deploy**.
4. Opcional: en Settings → Domains agrega el dominio del cliente.

Con cada `git push` a `main`, Vercel vuelve a desplegar automáticamente.

## Notas de sector (seguridad privada)

- La seguridad privada es un sector regulado: **no mostrar permisos ni
  certificaciones** que el cliente no haya validado (ver `permitNumber`
  en `site-config.ts`, vacío por defecto).
- Testimonios y «clientes» del sitio son marcadores ilustrativos de la
  demo; reemplazar solo con material autorizado.

---

Desarrollado por [Jimbra](https://jimbra.net) · Diseño web para emprendedores
