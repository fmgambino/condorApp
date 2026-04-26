# CondorApp v1

Primera versión estática para GitHub Pages con UI mobile first, SweetAlert2, Chart.js, Supabase JS CDN y PWA básica.

## Reemplazar logo y favicon
- Logo: `assets/logo-condor.svg`
- Favicon: `assets/favicon.svg`
- También podés editar las rutas en `index.html`:
  - `<link rel="icon" href="assets/favicon.svg">`
  - `<img src="assets/logo-condor.svg">`

## Conectar Supabase
En `js/app.js`, reemplazar `TU_SUPABASE_URL` y `TU_SUPABASE_ANON_KEY`, o cargar valores desde el módulo Configuración.

Tablas sugeridas:
- `profiles`: id, full_name, role, participant_type, permissions, avatar_url
- `sensor_readings`: id, sensor_name, value, unit, created_at
- `actuator_events`: id, actuator_name, state, created_at, user_id
- `sponsors`: id, name, logo_url, website_url, priority
- `notifications`: id, title, message, level, created_at

## Publicar en GitHub Pages
Subir todos los archivos al repositorio y activar Pages desde la rama principal.
