# GrowthBrick Landing

Landing estática para [growthbrick.tech](https://growthbrick.tech). Next.js 16 + React 19 + Tailwind CSS v4 + shadcn-style components. Sin backend — `output: 'export'` genera HTML estático servido por Caddy dentro de un contenedor chico.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS v4 (vía `@tailwindcss/postcss`)
- lucide-react para iconos
- Caddy 2 como servidor estático en producción

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build local

```bash
npm run build
# → genera /out con todo el HTML estático
```

Para previsualizar el build estático:

```bash
npx serve out
```

## Deploy (Easypanel + GitHub)

Repo: https://github.com/GonzaloDevelop/landing-growthbrick

1. **Push a GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial: landing"
   git branch -M main
   git remote add origin https://github.com/GonzaloDevelop/landing-growthbrick.git
   git push -u origin main
   ```

2. **Conectar el servicio `growthbrick / main` de Easypanel**
   - Source → **Github** tab
   - Repository: `GonzaloDevelop/landing-growthbrick`
   - Branch: `main`
   - Build method: **Dockerfile** (el repo incluye uno)
   - Guardar y Deploy

3. **Asignar el dominio** (una vez que el container esté corriendo)
   - Domains → Add Domain
   - Host: `growthbrick.tech` · Port interno: `80`
   - Add Domain otra vez
   - Host: `www.growthbrick.tech` · Port interno: `80`
   - Easypanel pide los certificados SSL a Let's Encrypt automáticamente (~1 min).

4. **Verificá**
   - https://growthbrick.tech → debe cargar y mostrar el candadito verde
   - http://growthbrick.tech → debe redireccionar a HTTPS automáticamente

## Modificar el contenido

- **Copy + secciones**: `src/app/page.jsx` — todos los textos, testimoniales y servicios en arrays arriba del archivo.
- **Colores de marca**: `src/app/globals.css` — tokens `--brand-*` al comienzo.
- **Logo**: `src/components/Logo.jsx` + `public/logo.svg`.
- **Metadata SEO / OG**: `src/app/layout.jsx`.

## Performance

- Static HTML → respuesta <50ms desde Caddy
- `Cache-Control: max-age=31536000, immutable` en assets versionados
- Inter font via `next/font` con `display: swap`
- Imagen OG: pendiente (`public/og-image.png`) — importante para previews en WhatsApp / LinkedIn.
