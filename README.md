# CondorApp v4

Webapp mobile first para telemetría, cámaras, comunicación LoRa y control de un cohete por presión de agua.

## Login demo
- Administrador: `admin@condor.app` / `admin123`
- Participante: `participante@condor.app` / `part123`

## Reemplazar logo y favicon
- Logo: `assets/logo-condor.svg`
- Favicon: `assets/favicon.svg`
- Avatar demo: `assets/avatar.svg`

## YouTube Live / cámaras
Las tres cámaras del dashboard usan este embed inicial:
`https://www.youtube.com/embed/fO9e9jnhYK8?si=a_wBnZHHgW6gu94O`

Para cambiarlo desde UI: Dashboard > Cámaras en vivo > Editar URLs.

## Supabase
El SQL actualizado está en:
`database/condorapp_supabase.sql`

Las credenciales se reemplazan al final de:
`js/app.js`

```js
const SUPABASE_URL='TU_SUPABASE_URL';
const SUPABASE_ANON_KEY='TU_SUPABASE_ANON_KEY';
```

## GitHub Pages
Subir el contenido de la carpeta `CondorApp` a la raíz del repositorio o activar Pages sobre esa carpeta.
