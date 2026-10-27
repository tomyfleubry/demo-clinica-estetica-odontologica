---
name: Clínica Estética Odontológica
colors:
  paper: "#ffffff"
  ink: "#183936"
  teal: "#3baaa5"
  action: "#12645f"
  mint: "#e7f3f1"
  plum: "#75517a"
typography:
  display: { fontFamily: "Bodoni Moda", fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.035em" }
  body: { fontFamily: "Manrope", fontWeight: 400, fontSize: "17px", lineHeight: 1.65 }
rounded:
  photo: "0px"
  control: "4px"
  floating-card: "16px"
  floating-contact: "50%"
shadows:
  resting: none
  floating: "0 12px 32px rgb(24 57 54 / 14%)"
---

# Sistema de diseño

Documento escrito ANTES del HTML, CSS y JavaScript. La identidad proviene del logo y las ocho imágenes propias entregadas; no de la referencia española.

## Referencia estudiada

https://www.gdental.es/ se abrió y se miró renderizada, tanto hero como sección de tratamiento e instalaciones, el27/10/2026. Se toma su lógica: oferta dental inequívoca, fotografía real, especialidades explicadas, clínica visible y datos prácticos cerca del cierre. No se toman sus textos, fotos, promesas, equipo, teléfonos, años ni paleta. Tampoco se reproduce su fila de tres tarjetas, overlays de color sobre fotografías o sombras en las fotos.

## Identidad y diales

El turquesa y el ciruela son los colores observados en foto-1.jpg y las placas del negocio. El blanco acompaña su material; el verde oscuro deriva del turquesa para texto y contraste en acciones. No hay gradientes. El ciruela es un color real de marca, nunca una transición índigo-violeta.

- Varianza6/10: composición editorial con eje de lectura al42%, mosaico fotográfico en el hero, tamaños distintos para las dos especialidades destacadas y lista abierta para las otras ocho.
- Movimiento5/10: GSAP+ScrollTrigger para entradas por partes, franja de cifras que cuenta una sola vez y parallax leve del hero; Lenis para rueda/trackpad, no para secuestrar el desplazamiento táctil.
- Densidad4/10: una idea por sección, párrafos breves, fotografías grandes y todas las especialidades presentes. Nada de diez tarjetas iguales ni grandes vacíos sin contenido.

## Tipografía

Pairing de Google Fonts, servido desde archivos locales: Bodoni Moda500 para titulares, Manrope400/500/600 para texto, navegación y botones. La serif dialoga con la pieza editorial propia foto-8.jpg sin copiarla. No se usa una fuente del sistema como display. Respaldos Georgia/Arial solo para fallos de carga, no como diseño principal.

Escala prevista: display fluido44–88px, sección38–64px, subtítulos24–32px, cuerpo17px, notas14px. Titulares en dos líneas como máximo; nombre largo dividido semánticamente en Clínica Estética / Odontológica. Texto alineado a izquierda, medida máxima65ch. Sin una palabra aislada con otro color o cursiva, sin etiquetas pequeñas arriba de los títulos.

## Paleta y usos

Blanco para base; tinta#183936 para lectura; turquesa#3baaa5 para campos de marca; acción#12645f para botones con texto blanco; menta#e7f3f1 para información secundaria y separación de secciones; ciruela#75517a para valoración y cierre de marca. El turquesa claro no se usa como texto pequeño sobre blanco. Foco visible de3px y contraste AA comprobable.

## Formas, radios y profundidad

Fotos rectas(0px), botones4px, tarjeta de valoración16px y contacto flotante circular. No existe un radio universal aplicado a todo. Sin sombras en bloques en reposo: solo valoración realmente superpuesta y botón flotante pueden usar la sombra definida. No glassmorphism, blur decorativo, blobs ni bordes finos como adorno.

## Composición

Un solo contenedor máximo1440px, márgenes iguales32px en escritorio y20px en móvil. Ritmo interno16/24/32/48px y secciones96–144px; en móvil72–88px según el contenido. El eje editorial42% se reutiliza en hero, listas y datos prácticos. Donde hay columna breve, la otra sostiene una foto o lista: no queda medio sitio vacío.

Hero: cabecera compacta con logo real y tres anclas; mosaico de sonrisa propia, señalética propia y bloque de marca con valoración sólida4,8. Debajo, nombre en serif sobre el eje, propuesta y botón de turno. En430px se reorganiza para mostrar nombre, propuesta, fotografía y acción dentro del primer viewport, sin textos fotográficos recortados. El recorte derivado de foto-4.jpg muestra solo la parte fotográfica; su placa completa permanece disponible en la especialidad.

Especialidades: alineadores invisibles y blanqueamiento como destacados fotográficos asimétricos; odontología general, endodoncia, ortodoncia, prótesis, implantes, estética dental, estomatología y odontopediatría en lista sobria con SVG de trazo fino. La clínica combina señalética, imágenes propias y dirección/horarios. Proceso de reserva como secuencia real, no tres tarjetas de beneficios. Cierre con una sola acción.

## Iconografía

Set propio de SVG24×24 o32×32, trazo1.6, extremos redondeados y currentColor de marca. Diente, alineación, raíz, implante, pieza protésica, cuidado infantil, ubicación, reloj, estrella, flecha y WhatsApp. Ningún emoji funciona como icono.

## Movimiento y alternativa estática

Librerías gratuitas fijadas por versión desde CDN. Registro de ScrollTrigger, sincronización de Lenis con el ticker en milisegundos y destrucción al cambiar a movimiento reducido. Entradas de600–850ms, stagger70ms y viaje máximo24px; foto del hero escala de1.035 a1 y deriva menos del5%. Cifras animadas una sola vez hacia los datos reales, sin inventar estadísticas.

HTML y CSS muestran todo de forma predeterminada. La animación se agrega solo cuando cargaron las librerías. Con prefers-reduced-motion se elimina Lenis, parallax, contadores y reveals: se ve el estado final. Si fallan JS o CDN, se conservan lectura, anclas, archivo desplegable nativo y los tres enlaces reales de turno.

## Contenido e integridad

Único teléfono: https://wa.me/5493884622845. Enlaces a WhatsApp solo en hero, cierre y flotante; ningún enlace de ese tipo en otros bloques. Horario publicado: lunes a viernes9:00–20:00, fuente ficha de Google. Sin horarios de sábado, pediatra, cardiólogo, precios, reseñas escritas, años, financiación, promesas de resultados ni nombres de profesionales sin confirmar.

No hay par antes/después genuino en el material: NO se construye comparador. foto-3.jpg es un sorteo navideño y se identifica como publicación de archivo sin vigencia confirmada, nunca como promoción actual. Los retratos no se atribuyen a una persona ni prueban un resultado de tratamiento.

## Verificación prevista

Capturas430px de hero, sección media y cierre; revisión adicional320,390,746,768,1024,1280 y1440px. Comprobar8materiales propios cargados, ninguna foto deformada, nada de scroll horizontal o texto cortado, tres WhatsApp exactos, foco/teclado, JS desactivado, CDN fallido y movimiento reducido. Verificación renderizada pública posterior al despliegue. Este documento será contrastado con el código al cierre; no sustituye esa prueba.
