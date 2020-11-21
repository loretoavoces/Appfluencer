## Endpoints (Influencers.routes)

METHOD PATH DESCRIPTION

- Get / Muestra la página principal (index)
- Get /influencer Muestra la página principal (index)
- Get /influencer/crear-influencer Muestra la vista de “new”
- Post /influencer/crear-influencer Guarda en la BBDD una nueva influencer
- Get /influencer/editar-influencer Muestra la vista de “edit”
- Post /influencer/editar-influencer Edita en la BBDD una influencer
- Get /influencer/:id Elimina de la BBDD una influencer
- Get /influencer/:endpoint Muestra la vista "details"
- Get /influencer/mapa-agencias Muestra la vista "map"

## Endpoints (auth.routes)

- Get /registro Muestra la vista "signup"
- Post /registro Guarda en la BBDD una nueva usuaria
- Get /inicio-sesión Muestra la vista de “login”
- Post /inicio-sesión Mantiene a la usuaria logueada
- Get /perfil Muestra la vista de “my-profile”
- Get /cerrar-sesion Cierra sesión

- Run `npm run dev` command on the root directory
