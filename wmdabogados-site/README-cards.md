# Sistema de Tarjetas WMD

## Dónde editar contenido
- Rutas principales:
  - `src/pages/index.astro`
  - `src/pages/nosotros.astro`
  - `src/pages/equipo/index.astro`
  - `src/pages/areas/index.astro`
  - `src/pages/contacto.astro`
- Navegación y orden de tarjetas: `src/utils/cards.ts` (`CARD_ROUTES`).
- Shell visual y scripts globales de tarjetas: `src/layouts/CardShell.astro`.
- Navegación horizontal (flechas, dots, teclado, swipe): `src/components/CardNavigation.astro`.

## Links clave
- Brochure: cambia `BROCHURE_URL` en `src/utils/cards.ts`.
- Login externo: cambia el enlace en `src/pages/index.astro`.

## Agregar una tarjeta nueva
1. Crea una nueva ruta en `src/pages/...` usando `CardShell`.
2. Agrega la ruta en `CARD_ROUTES` manteniendo el orden.
3. Si necesitas tabs internas, usa el atributo `data-tabs` con botones `data-tab-target` y paneles `data-tab-panel`.
