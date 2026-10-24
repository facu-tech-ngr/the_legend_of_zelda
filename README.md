# Crónicas de Hyrule

Web de Zelda en HTML, CSS y JavaScript puros. Python es opcional.

## Ejecutar en local
- Sin Python: abre `index.html` en el navegador.
- Con Python: `pip install -r requirements.txt && python server.py` y visita http://localhost:5000 (si no hay Flask, usa http.server).

## Publicar en GitHub Pages
1. Sube el contenido de esta carpeta a un repositorio.
2. Settings > Pages > Deploy from a branch > `main` / root.
3. La web estará en `https://TU_USUARIO.github.io/TU_REPO/`.

## Cambiar imágenes y textos
- Los textos están en `index.html`.
- Las imágenes están en `assets/` (WebP) y se enlazan al final de `style.css`. Para sustituir una, guarda el archivo en `assets/` y añade al elemento `.art`: `style="--img:url(assets/castillo.webp)"`. En la galería, edita el array `items` de `script.js`.
- Usa solo recursos oficiales de prensa de Nintendo o con licencia libre, y anota autoría y licencia en el pie de página.

## Hovers
| Efecto | Dónde |
|---|---|
| Espada Maestra (borde de energía, hoja que se ilumina, destello, partículas) | Reliquias > Espada Maestra |
| Trifuerza (triángulos en secuencia, halo dorado, destello) | Tarjetas de Historia y reliquia Trifuerza |
| Sheikah (borde azul, circuitos, indicador deslizante) | Navegación y controles del visor |
| Galería Hyrule (parallax, luz, reflejo, título revelado, línea) | Exploración y miniaturas |
| Botón principal (reflejo, borde dorado progresivo, símbolo) | Hero: "Explorar Hyrule" |
| Personajes (filo azul, halo dorado, sombra carmesí) | Sección Personajes |

Accesibilidad: `:focus-visible`, `prefers-reduced-motion` y modo táctil (se ilumina la tarjeta central).
