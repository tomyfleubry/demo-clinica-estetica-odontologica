# Clínica Estética Odontológica

Demo informativa de San Salvador de Jujuy. No es el sitio oficial del negocio. Sitio estático sin formularios, cobros, datos privados ni seguimiento.

El sistema visual se documentó y commiteó en DESIGN.md antes del código. Las ocho imágenes son material propio entregado expresamente para esta demo. Las piezas se conservan completas; hero-sonrisa.webp es un recorte fotográfico rectangular de foto-4.jpg, sin alteraciones de dientes ni resultados. El logo se usa sin redibujarlo. No hay un par antes/después confirmado ni un comparador.

foto-3.webp es un archivo de un sorteo navideño; no se presenta como promoción actual. Los retratos no identifican profesionales ni prueban resultados clínicos. Los originales convertidos se guardan en assets/ y su procedencia en sidecars JSON.

Tipografía: Bodoni Moda500 y Manrope variable, descargadas de [Google Fonts](https://fonts.google.com/), archivos autoalojados. Licencias SIL Open Font License completas en assets/fonts/.

Movimiento progresivo por CDN: [GSAP3.13.0](https://gsap.com/docs/v3/Installation/), ScrollTrigger3.13.0 y [Lenis1.3.27](https://github.com/darkroomengineering/lenis). Versiones fijadas e integridad SRI en scripts. El documento es legible sin JavaScript o CDN y desactiva las animaciones con prefers-reduced-motion. No se importan dependencias de desarrollo en tiempo de ejecución.

Publicación: GitHub Pages desde main/raíz. Meta robots noindex,nofollow y robots.txt bloquea rastreo; esto no es control de acceso y la demo es pública.
