# WMD Abogados - Sitio Astro (Tarjetas)

Sitio institucional en Astro con navegación horizontal por tarjetas (sin scroll vertical) y 5 rutas principales.

## Rutas activas
- `/` (Home)
- `/nosotros`
- `/equipo`
- `/areas`
- `/contacto`

## Desarrollo local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Archivos clave
- `src/layouts/CardShell.astro`: shell principal (header/footer + área de tarjeta)
- `src/components/CardNavigation.astro`: flechas, dots, teclado, swipe
- `src/utils/cards.ts`: orden de tarjetas y `BROCHURE_URL`
- `src/styles/base.css`: estilos globales y tipografías
- `src/pages/index.astro`: banner principal con CTA

## Tipografías (self-host)
Colocar estos archivos en `public/fonts/`:
- `Museo Sans Cyrl 300.ttf`
- `Museo Sans Cyrl 700.ttf`
- `CODE_Bold.otf`

Fallback ya configurado:
- Sans principal: Museo Sans Cyrl + system fallbacks
- Acento/branding: `Code` y si no existe, usa Museo 700

## Contenido editable
- Textos de cada sección: `src/pages/...`
- Menú/orden de navegación: `src/utils/cards.ts`
- Enlace brochure: constante `BROCHURE_URL` en `src/utils/cards.ts`
- Link desarrollador/footer: `src/layouts/CardShell.astro`

## Limpieza manual
Para borrar archivos legacy del proyecto, revisa:
- `BORRAR_MANUAL.txt`

## Nota
Existe una guía corta adicional:
- `README-cards.md`
