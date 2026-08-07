# README_AI — Befive Solutions

Documento de contexto para retomar este proyecto sin necesitar el historial de conversación. Léelo antes de tocar nada.

## Qué es esto

Landing page de marketing para **Befive Solutions** (agencia de diseño/desarrollo/automatización con IA, Madrid + Guinea Ecuatorial). Una sola página (`/`), sin backend, sin base de datos, sin CMS. Todo el contenido vive en `lib/data.js`.

Referencia visual original: estructura editorial de mdkaif.com (sitio hecho en Framer), adaptada con paleta azul de marca y contenido real de Befive.

## Tecnologías

- **Next.js 14.2.x** (App Router, `app/`) — sin TypeScript, JS puro.
- **Tailwind CSS 3** — único sistema de estilos, sin CSS Modules ni styled-components.
- **Framer Motion 11** — todas las animaciones (scroll reveal, scroll-linked transforms, marquees).
- **lucide-react** — única librería de iconos.
- Sin backend: no hay Supabase, no hay API routes, no hay formularios que persistan datos. Los CTAs "Auditoría gratuita" y "Tengo un proyecto" son enlaces directos a WhatsApp (`whatsappHref` en `lib/data.js`).
- Sin CMS: todo el copy y las rutas de imágenes están hardcodeados en `lib/data.js`.

No confundir con el repo hermano `maseya` (inmobiliaria en Guinea Ecuatorial, Next.js + Supabase) — son proyectos completamente distintos que viven en carpetas separadas (`~/befive-solutions` vs `~/maseya`).

## Arquitectura

```
app/
  layout.js       → RootLayout: fuente Inter, <Navbar/>, <Footer/>, metadata
  page.js         → Homepage: orden de todas las secciones (única página real)
  globals.css     → Tailwind directives + keyframes custom (shiny, noise-bg)
components/
  layout/         → Navbar, Footer (fijos en layout.js)
  sections/       → Una sección de la home = un componente. Cada uno importa
                    su propio bloque de datos desde lib/data.js
  ui/             → Componentes reutilizables sin conocimiento de contenido
                    (Button, Card, Section, Container, Reveal, BlurReveal,
                    Badge, Eyebrow, VerProyectoButton)
lib/
  data.js         → ÚNICA fuente de verdad para todo el copy, rutas de
                    imágenes/vídeos y enlaces. Editar aquí, no en los JSX.
public/
  marcas/         → 21 logos reales de clientes (1.webp...21.webp), usados en
                    LogoStrip (scroller de logos) y en Trabajos como fallback
  reseñas/        → Fotos reales de clientes para Testimonials (carpeta con
                    ñ literal en el nombre — cuidado al escribir rutas)
  fotos/          → 9 fotos reales para el marquee scroll-driven bajo el hero
                    (ClientMarquee)
  trabajos/       → 8 fotos horizontales (1800×1040, ratio ~1.73:1) para las
                    cards de la sección Trabajos
  loquehacemos/   → 7 fotos para la sección WhatWeDo ("Lo que hacemos")
  befive_solutions.webp → logo oficial (con canal alfa/transparencia)
  hero-befive.mp4 → vídeo de fondo del Hero
  figma.mp4       → vídeo de la card "Fiable y preparado para el futuro" (bento)
```

### Orden de secciones en `app/page.js`

Hero → LogoStrip → ClientMarquee → WhyUs → Services → Trabajos → WhatWeDo →
Testimonials → Process → AboutIntro → Pricing → CtaFullscreen

(Footer y Navbar están en `layout.js`, no en `page.js`.)

## Convenciones de código

- **Todo el contenido en `lib/data.js`**, nunca hardcodeado en un componente,
  con dos excepciones documentadas ahí mismo cuando el copy necesita
  formato JSX específico (ej. el titular del Hero tiene 2 líneas con
  tratamiento visual distinto — está directamente en `Hero.jsx`, no en data.js).
- **Componentes `sections/*.jsx`**: un archivo = una sección de la home.
  Importan sus datos de `lib/data.js` por nombre (`import { hero } from '@/lib/data'`).
- **Componentes `ui/*.jsx`**: genéricos, reciben todo por props, no importan
  de `lib/data.js` directamente (excepción: algunos usan `nav.logoImage`
  para el logo, ya que aparece en varios sitios).
- **Sin comentarios explicativos** en el código salvo que documenten un WHY
  no obvio. Nombres descriptivos en vez de comentarios.
- **No dejar código muerto**: si sustituyes un componente o quitas un uso de
  un dato, borra el archivo/campo. Ya se ha limpiado varias veces
  (`Stats.jsx`, `work` export, `avatar()` helper, etc. — todos borrados
  cuando quedaron sin uso).
- **Rutas de imágenes**: siempre absolutas desde `/public` (ej. `/marcas/1.webp`),
  nunca `import` de imagen ni `next/image` — el proyecto usa `<img>` planas
  a propósito para simplicidad (sin optimización de Next Image).
- **Reinicio de servidor tras cambios de datos/imágenes**: cuando cambian
  imágenes en `/public`, borrar `.next` y reiniciar (`rm -rf .next && npm run dev`)
  para evitar caché de Next sirviendo la versión vieja.

## Decisiones de diseño

### Paleta y tipografía
- Acento: azul `#2563EB` (hover `#1D4ED8`), fondo suave `#EFF4FF`.
- Fondo general blanco/gris muy claro (`#FFFFFF` / `#F7F8FA`), texto
  `#0A0A0A` / `#5B5F66`. Definidos como colores Tailwind custom en
  `tailwind.config.js` (`bg`, `ink`, `accent`, `border`, `success`).
- Fuente: Inter vía `next/font/google`, cargada en `app/layout.js`.
- Excepción: la tarjeta "Plan PRO" en Pricing usa un degradado dorado
  (`#BF953F → #FCF6BA → #B38728...`) sobre fondo negro sólido — deliberadamente
  fuera de la paleta azul porque el cliente lo pidió explícitamente como
  plan "premium/metalizado", sin azul.

### Animaciones
- **Scroll reveal genérico**: `components/ui/Reveal.jsx` (fade + translateY)
  y `BlurReveal.jsx` (fade + blur, para títulos grandes de sección). Ambos
  usan `whileInView` de Framer Motion — funcionan igual en mobile y desktop
  (no dependen de media queries, son IntersectionObserver).
- **Marquees**: dos técnicas distintas según el efecto pedido:
  - `LogoStrip.jsx`: animación CSS pura (`animate-marquee-left`, definida en
    `tailwind.config.js`), con pausa al hover controlada por estado de React
    (`animationPlayState`) — NO usar la variante arbitraria de Tailwind
    `hover:[animation-play-state:paused]`, no se aplicó de forma fiable.
  - `ClientMarquee.jsx`: posición ligada al scroll real (no loop CSS), vía
    listener de `scroll` calculando `translateX` a mano. Ver comentario de
    fórmula en el propio archivo si se toca.
- **Scroll-linked stacking cards**: `Trabajos.jsx` usa `useScroll` +
  `useTransform` de Framer Motion por card, con `position: sticky` para el
  efecto de apilado que se va encogiendo. Cada card centra su contenido
  verticalmente en un contenedor `sticky h-[75vh] flex items-center` — el
  contenido NO se estira a `h-full` (se probó y generaba bandas grises de
  letterbox con fotos panorámicas 1800×1040; ahora el alto es intrínseco).
- **Hero**: vídeo de fondo (`hero-befive.mp4`) sin overlay oscuro global
  (se quitó a petición del cliente — "no pase el efecto oscuro"). Solo hay
  degradado a blanco en el 28% inferior para la transición a la siguiente
  sección. El titular usa un gradiente de texto animado (`animate-shiny`,
  keyframe en `globals.css`) + filtro de ruido SVG (`#c3-noise`, definido
  inline en `Hero.jsx`) sobre la segunda línea.
- **Logo adaptable**: el logo (`befive_solutions.webp`) tiene canal alfa.
  En el Navbar se muestra en blanco (`filter: brightness(0) invert(1)`)
  sobre el hero oscuro, y a color normal cuando el nav está en su estado
  "scrolled" (fondo blanco). Mismo patrón en el Footer (siempre blanco,
  fondo oscuro) y en la card de testimonios del bento "Por qué Befive"
  (color normal, fondo blanco).
  - **Cuidado con flex-col + logo**: si metes una `<img>` de ancho variable
    dentro de un contenedor `flex flex-col`, el `align-items: stretch` por
    defecto la deforma (estira el ancho mientras la altura queda fija por
    `h-*`). Solución: `self-start` en la imagen. Ya pasó una vez en la card
    de testimonios del bento — si aparece un logo "aplastado" en otro sitio,
    es este bug.

### Contenido / negocio
- **Todos los CTAs de "Auditoría gratuita" y "Tengo un proyecto" van a
  WhatsApp** (`whatsappHref = 'https://wa.me/34645797073'`), no a un
  formulario ni a la sección de contacto. Es decisión explícita del cliente.
- **Fotos reales, no placeholders**: el cliente ha ido subiendo fotos reales
  de sus proyectos a `/public` en varias tandas (marcas, reseñas, fotos,
  trabajos, loquehacemos). Cuando falte una imagen real para algo nuevo,
  usar `photo(seed, w, h)` de `lib/data.js` (picsum placeholder) solo como
  último recurso y decirlo explícitamente — el cliente prefiere fotos reales
  siempre que existan.
- **Testimonios**: 6 en total, 5 con foto real + 1 sin foto (usa iniciales
  en círculo, `avatar: null` → fallback en `Testimonials.jsx`). Uno de los
  6 (`featured: true`, actualmente Doris/Perla Home) se muestra en formato
  grande con foto de cabecera en vez de card estándar. La cuadrícula reparte
  en 3 columnas por índice (`i % 3`) — si añades/quitas testimonios, revisa
  que las columnas queden balanceadas (2/2/2 es el objetivo, no 2/2/1).
- **Trabajos**: 8 proyectos, cada uno con `link` a día de hoy apuntando a
  `'#'` como placeholder — el cliente dijo que pondría los enlaces reales
  más adelante. Revisar `trabajos[].link` en `lib/data.js` antes de dar el
  sitio por terminado.
- **Copy**: reescrito siguiendo principios de la skill `copywriting`
  (claridad y especificidad por encima de jerga corporativa — evitar
  "transformación digital", "maximizar resultados", "estrategia integral"
  y similares; preferir beneficios concretos y tono directo).

## Cómo levantar el proyecto

```bash
cd /Users/hector/befive-solutions
npm install   # si no se ha hecho
npm run dev -- -p 3300   # el script "dev" ya fija -p 3300 en package.json
```

Preview en `http://localhost:3300`. Tras tocar archivos de `/public`, borrar
`.next` antes de reiniciar para evitar servir caché vieja:

```bash
rm -rf .next
```

## Estado de publicación

Repo git inicializado localmente en `/Users/hector/befive-solutions`
(rama `main`), con remoto configurado:

```
origin → https://github.com/esonoalonso/befive-solutions.git
```

Aún no se ha hecho `git push` — falta autenticar `gh auth login` (o el
método que el usuario prefiera) para completar la publicación.
