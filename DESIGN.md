---
name: Clínica Estética Odontológica
description: Identidad dental propia con composición editorial, fotografía real y lectura abierta.
colors:
  paper: "#fff"
  ink: "#183936"
  teal: "#3baaa5"
  action: "#12645f"
  mint: "#e7f3f1"
  plum: "#75517a"
typography:
  display:
    fontFamily: "'Bodoni Moda', Georgia, serif"
    fontSize: "clamp(52px, 5.7vw, 88px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Bodoni Moda', Georgia, serif"
    fontSize: "clamp(40px, 4.4vw, 64px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.65
  navigation:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  metric:
    fontFamily: "'Bodoni Moda', Georgia, serif"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: 1
rounded:
  photo: "0px"
  control: "4px"
  floating-card: "16px"
  floating-contact: "50%"
spacing:
  compact: "16px"
  content: "24px"
  gutter: "32px"
  gutter-mobile: "20px"
  cluster: "40px"
  major: "48px"
  deep: "64px"
  section: "clamp(96px, 9vw, 144px)"
  section-mobile: "80px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
  rating-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.floating-card}"
    padding: "16px 20px"
  service-row:
    textColor: "{colors.ink}"
  archive:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.photo}"
    padding: "24px 32px"
  metrics-strip:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    padding: "40px 0"
  floating-contact:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    rounded: "{rounded.floating-contact}"
    width: "60px"
    height: "60px"
  floating-contact-hover:
    backgroundColor: "{colors.plum}"
---

# Design System: Clínica Estética Odontológica

## Overview

**Creative North Star: "Clínica Estética Odontológica"**

La identidad parte del logo y de las ocho imágenes propias de la clínica: turquesa, ciruela, blanco, señalética y publicaciones reales. La serif editorial da presencia al nombre y a los títulos; la sans sostiene la lectura y las acciones. La página mantiene una densidad moderada, fotografías grandes y contenido abierto, sin convertir cada fragmento en una tarjeta.

Este documento nació antes del HTML, CSS y JavaScript, por pedido del usuario. Esta edición conserva esa procedencia y contrasta sus decisiones con los archivos implementados. La referencia [GDental](https://www.gdental.es/) se vio renderizada el 27/10/2026 y aportó claridad de oferta, fotografía y organización de información; no aportó identidad, textos ni imágenes. Los diales acordados permanecen en varianza (6/10), movimiento (5/10) y densidad (4/10): su expresión actual es la asimetría editorial, las entradas breves y el ritmo de bloques abiertos.

**Key Characteristics:**

- Identidad turquesa y ciruela procedente del material propio.
- Bodoni Moda para la voz editorial y Manrope para lectura y navegación.
- Composición asimétrica, con una alineación recurrente al 42%.
- Fotografías rectas y superficies planas; profundidad solo en superposiciones reales.
- Movimiento progresivo con contenido completo en la alternativa estática.

## Colors

La paleta conserva la marca observada en las imágenes; los tonos oscuros sostienen el contraste y la menta separa bloques sin añadir bordes decorativos. Los seis valores normativos están en el frontmatter. Las rampas del panel son muestras de visualización, no colores adicionales de la implementación.

### Primary

- **Verde de acción — action:** relleno de la acción principal, contacto flotante, iconos funcionales y sección de reserva con texto blanco.
- **Turquesa de marca — teal:** ancla cromática de la identidad presente en el material propio. La variable existe en la hoja; las acciones implementadas usan su derivación oscura.

### Secondary

- **Ciruela de marca — plum:** acento del icono de valoración, selección de texto, contorno de foco y hover del contacto flotante. No es el fondo del cierre ni del pie.

### Neutral

- **Blanco — paper:** fondo principal, tarjeta superpuesta y texto sobre verde de acción.
- **Tinta verde — ink:** lectura, títulos y estado hover de la acción principal.
- **Menta — mint:** bandas informativas, especialidades, archivo y pie; también es el fondo base del mosaico fotográfico.

**The Contrast Rule.** El turquesa conserva su papel de marca; el texto pequeño sobre blanco usa tinta o verde de acción.

## Typography

**Display Font:** Bodoni Moda, con Georgia y serif como respaldo de carga.
**Body Font:** Manrope, con Arial y sans-serif como respaldo de carga.

Las dos fuentes se sirven desde archivos locales. Bodoni Moda usa el peso (500). Manrope declara un archivo variable (200–800), pero los estilos actuales emplean (400) y (600); no se conserva como token un peso (500) previsto que el código no utiliza.

### Hierarchy

- **Display:** nombre principal en Bodoni Moda, con los valores de `display`. A partir del ancho compacto usa `clamp(40px, 5.7vw, 64px)`; en móvil usa `clamp(34px, 9.4vw, 52px)` e interlínea (1.06).
- **Headline:** títulos de sección con `headline`. En móvil se fijan en (42px), con la misma interlínea.
- **Title:** subtítulos funcionales de la secuencia en Manrope con `title`, reducidos a (22px) en móvil. Los títulos editoriales de especialidad usan Bodoni Moda (38px, 500, 1.1), y los datos prácticos (36px, 500, 1.15). Son variantes de contexto, no una tercera familia.
- **Body:** lectura con `body`, reducida a (16px) en móvil. Los párrafos tienen un máximo general de (65ch), acotado en columnas breves.
- **Label / Navigation:** acciones seminegritas y navegación regular, con sus roles del frontmatter. La acción pasa a (15px) y la navegación a (14px) en móvil. No usan mayúsculas forzadas.
- **Metric:** cifras en Bodoni Moda y números tabulares. La banda usa (64px), baja a (52px) en ancho compacto y a (48px) en móvil. La valoración superpuesta tiene su propia escala (40px; 34px en móvil).
- **Notas:** pies y aclaraciones usan (14px), con interlíneas entre (1.45) y (1.5); algunas notas del pie y de la valoración bajan a (13px) en móvil.

**The Two Voices Rule.** La serif concentra nombre, títulos editoriales y cifras; la sans conserva la claridad de texto, navegación y acciones.

## Layout

El contenedor tiene un ancho máximo de (1440px) y descuenta dos márgenes iguales definidos por `gutter`. En móvil usa `gutter-mobile`. La separación de secciones usa `section` en escritorio y `section-mobile` en móvil; el ritmo interno repite los pasos del frontmatter y los ajusta al contenido.

El eje (42% / 58%) alinea introducciones, listas y datos prácticos. La franja fotográfica superior invierte la proporción (58% / 42%). Los destacados emplean dos columnas desiguales (1.12fr / 1fr), separadas por `clamp(48px, 7vw, 112px)`, con el segundo bloque desplazado (112px). Son patrones observados de esta página: no obligan a repetir su secuencia en cada superficie nueva.

Los cambios responden a dos umbrales: ancho máximo (1100px), que compacta separaciones y lleva la lista de servicios a una columna, y ancho máximo (700px), que apila bloques y elimina los desplazamientos verticales de las fotografías. En móvil, la cabecera coloca la navegación bajo la marca; la señalética del mosaico se oculta, y el bloque editorial ordena título, propuesta, acción y datos de lugar.

Las imágenes de especialidades, clínica y archivo mantienen ancho completo y altura automática. Solo la franja superior recorta su fotografía rectangular con `object-fit: cover`. El derivado del hero se obtiene de la parte fotográfica de la pieza original; la pieza completa permanece en la especialidad. No se modifican dientes ni se transforma esa fotografía en evidencia de resultados.

## Elevation & Depth

La profundidad procede de fondos sólidos y de la alternancia blanco/menta/verde. Los bloques de lectura y las fotografías no tienen sombra en reposo. La misma sombra suave se aplica únicamente a la valoración, colocada de forma absoluta sobre la fotografía, y al contacto, fijado sobre la página.

### Shadow Vocabulary

- **Superposición flotante:** `0 12px 32px rgb(24 57 54 / 14%)`. Su valor vive en el sidecar porque no pertenece al esquema de tokens del frontmatter. No es una sombra general para tarjetas.

**The Floating Depth Rule.** La sombra identifica una superposición real; no se hereda a secciones, fotografías ni contenedores de texto.

## Shapes

Las fotografías conservan esquinas rectas con `photo`. Los controles usan la curva mínima de `control`; la valoración, la curva más amplia de `floating-card`; el contacto fijo, el círculo de `floating-contact`. No existe un radio universal.

La iconografía es SVG de trazo fino (1.6), extremos y uniones redondeados, sin relleno y con color heredado. El módulo base mide (24px), con variantes observadas de (28px), (30px) y (32px) según la función; en móvil los iconos prácticos pasan a (26px). Los iconos complementan texto o una etiqueta accesible y no sustituyen el nombre de un servicio.

## Components

### Buttons

Acciones sólidas, legibles y compactas. La variante principal usa `button-primary`, una altura mínima de (58px), una separación interna entre texto y flecha de (32px) y los colores de acción/blanco. En móvil su relleno es (15px 22px), con altura mínima (56px).

El hover usa `button-primary-hover` y desplaza la flecha (3px). La presión desplaza el control (2px) hacia abajo. El foco visible de enlaces y desplegables dibuja un contorno ciruela de (3px) separado (6px). No hay una variante secundaria rellena en el código.

### Text Links

Los enlaces de lectura se subrayan con un desplazamiento de (5px) y un grosor de (1px). Heredan el tamaño del contexto; el hover cambia al verde de acción y conservan el mismo foco visible de los controles.

### Navigation

La navegación es una fila abierta de tres anclas, en Manrope regular. La separación es (32px) en escritorio y (24px) en los dos anchos compactos. Su hover suma verde de acción y subrayado separado (6px). En móvil ocupa el ancho disponible, bajo la marca, sin menú superpuesto.

### Cards / Containers

No hay un sistema de tarjetas genéricas. La valoración es un panel blanco superpuesto, con radio `floating-card`, cifra serif y estrella ciruela; cambia de tres a dos columnas en móvil y oculta allí la estrella. Los demás contenedores se definen con espacio y fondos sólidos.

La lista de servicios combina texto y un SVG en cada fila, con una separación de (16px), altura mínima de (40px) y tamaño (19px; 18px en móvil). La banda de cifras alinea números y descripciones; pasa de tres grupos horizontales a una columna.

### Archive Disclosure

El archivo usa `details` y `summary` nativos sobre menta. El resumen conserva una altura mínima de (44px), texto seminegrito y una flecha que rota al abrir. El contenido pasa de dos columnas a una en móvil. Este patrón es un desplegable documental, no un comparador de tratamientos.

### Floating Contact

Un control fijo usa `floating-contact`, con desplazamiento de (24px) desde los bordes inferior y derecho. En móvil mide (56px) y se separa (16px). El hover cambia al ciruela y asciende (3px). El SVG de WhatsApp dispone de una etiqueta accesible en el enlace.

### Motion and Static Alternative

Las transiciones de controles usan el easing `cubic-bezier(.16,1,.3,1)` donde el código lo declara, con duraciones entre (180ms) y (240ms). GSAP y ScrollTrigger añaden entradas de texto (720–750ms), imágenes (850ms) y stagger (70ms). Las entradas parten de opacidades visibles (0.85–0.92) y desplazamientos breves (12–22px).

La fotografía del hero escala de (1.035) a (1) con el desplazamiento de página; no añade una traslación paralela. Las cifras cuentan una vez hacia sus valores publicados y mantienen una alternativa textual accesible. Lenis suaviza rueda y trackpad, sin sincronizar el gesto táctil. Al activar movimiento reducido se destruye la instancia y se restaura el estado final de las cifras.

El HTML y el CSS muestran todo desde el principio. Sin JavaScript o con fallo de las dependencias externas, siguen disponibles el contenido, las anclas, el archivo nativo y los enlaces. No existen campos de entrada, chips ni formularios que documentar.

## Do's and Don'ts

### Do:

- **Do** conservar la identidad turquesa y ciruela del material propio y usar los tonos oscuros para lectura y acciones.
- **Do** mantener Bodoni Moda (500) y Manrope (400/600), con los roles y las variantes responsive documentadas.
- **Do** conservar las fotografías completas y su altura automática fuera de la franja superior.
- **Do** distinguir radios por función y reservar la sombra para superposiciones reales.
- **Do** conservar foco visible, semántica nativa y lectura completa con movimiento reducido o sin JavaScript.

### Don't:

- **Don't** aplicar una sombra de tarjeta a bloques en reposo ni redondear por defecto las fotografías.
- **Don't** convertir el turquesa claro en texto pequeño sobre blanco.
- **Don't** sustituir las fotografías propias por stock, imágenes generadas o modificaciones de dientes.
- **Don't** añadir degradados, glassmorphism, blur decorativo o una transición índigo-violeta a esta identidad.
- **Don't** usar emojis o glifos tipográficos como sustitutos de los SVG propios.
