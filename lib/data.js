export const photo = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const whatsappHref = 'https://wa.me/34645797073'

export const nav = {
  logo: 'Befive',
  logoImage: '/befive_solutions.webp',
  links: [
    { label: 'Servicios', href: '/#lo-que-hacemos' },
    { label: 'Trabajos', href: '/#trabajos' },
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  cta: { label: 'Hablemos', href: whatsappHref },
}

export const hero = {
  badge: 'Disponibles para nuevos proyectos',
  titleLine1: 'Webs y automatizaciones',
  titleLine2: 'con IA, hechas a medida.',
  subtitle: 'Diseño, desarrollo web y automatizaciones de procesos con IA, pensados para que tu día a día sea más simple.',
  cta: 'Hablemos de tu proyecto',
  microtext: 'Sin compromiso · Respuesta en 24h',
}

export const clientLogos = {
  eyebrow: 'Marcas que confían en nosotros',
  logos: [
    { name: 'Kauzen', image: '/marcas/1.webp' },
    { name: 'Bubbushop', image: '/marcas/2.webp' },
    { name: 'InnerSpirit', image: '/marcas/3.webp' },
    { name: 'AFS', image: '/marcas/4.webp' },
    { name: 'Perla Home', image: '/marcas/5.webp' },
    { name: 'Wac Services', image: '/marcas/6.webp' },
    { name: 'Royal Palm Club Social Sampaka', image: '/marcas/7.webp' },
    { name: 'Lenka', image: '/marcas/8.webp' },
    { name: 'Junior Team', image: '/marcas/9.webp' },
    { name: 'AR&Cool Academy', image: '/marcas/10.webp' },
    { name: 'Cria Cuervos', image: '/marcas/11.webp' },
    { name: 'Nomex Energy', image: '/marcas/12.webp' },
    { name: 'Monerías', image: '/marcas/13.webp' },
    { name: 'Kenyamber', image: '/marcas/14.webp' },
    { name: 'Kwaleon', image: '/marcas/15.webp' },
    { name: 'Afrorecords', image: '/marcas/16.webp' },
    { name: 'Cartas al Fútbol', image: '/marcas/17.webp' },
    { name: 'Maseya', image: '/marcas/18.webp' },
    { name: 'Beego', image: '/marcas/19.webp' },
    { name: 'Viajes Guinea Ecuatorial', image: '/marcas/21.webp' },
  ],
}

export const metricCard = {
  value: 700,
  suffix: 'k',
  prefix: '+',
  label: 'facturados por clientes',
  video: '/fondo700.mp4',
  image: '/transacciones.webp',
}

export const whyUs = {
  eyebrow: '(hola)',
  title: 'Por qué Befive',
  focusTitle: 'Trabajo con pocos proyectos a la vez',
  focusText:
    'Sin equipo grande detrás, sin clientes en cola. Si arrancamos algo, tienes mi atención completa hasta que esté terminado.',
  featureCards: [
    {
      title: 'Construido para la era de la IA',
      text: 'De la idea a un producto funcional, escalable y listo para producción.',
      type: 'icons',
      icons: [
        { src: '/iconos/claude.avif', bg: 'white' },
        { src: '/iconos/aws.avif', bg: 'white' },
        { src: '/iconos/chat.avif', bg: 'black' },
      ],
    },
    {
      type: 'image',
      image: '/figma.webp',
    },
    {
      title: 'Respuesta rápida',
      text: 'Te contesto yo, no un ticket en cola.',
      type: 'chat',
      chatBubble: '¿Tienes un proyecto en mente?',
    },
  ],
}

export const whatWeDo = {
  eyebrow: '(Lo que hacemos)',
  items: [
    { label: 'Social Media', image: '/loquehacemos/socialmedia.webp' },
    { label: 'Desarrollo Web', image: '/loquehacemos/desarrolloweb.webp' },
    { label: 'Ecommerce', image: '/loquehacemos/ecommerce.webp' },
    { label: 'Desarrollo App', image: '/loquehacemos/desarrolloapp.webp' },
    { label: 'Branding', image: '/loquehacemos/branding.webp' },
    { label: 'SEO & SEM', image: '/loquehacemos/seosem.webp' },
    { label: 'Automatización IA', image: '/loquehacemos/automatizacionia.webp' },
  ],
}

export const servicesHub = {
  eyebrow: '(Servicios)',
  title: 'Servicios que venden',
  intro:
    'Diseño web, ecommerce, branding, SEO/SEM, gestión de redes sociales y automatización con IA — todo bajo un mismo equipo, sin subcontratas ni departamentos de por medio. Elige el servicio que necesitas o cuéntame tu proyecto y te digo qué combinación tiene sentido para ti.',
}

export const serviceDetails = [
  {
    slug: 'social-media-marketing',
    icon: 'Megaphone',
    color: '#2563EB',
    bg: '#EFF4FF',
    title: 'Social Media Marketing',
    shortDescription: 'Estrategia de contenido y pauta que convierte seguidores en clientes.',
    metaTitle: 'Social Media Marketing | Estrategia y pauta que vende | Befive',
    metaDescription:
      'Agencia de social media marketing en Madrid. Estrategia de contenido, pauta en Meta e Instagram Ads y reporting mensual pensado para vender, no solo para sumar seguidores.',
    heroSubtitle:
      'Seguidores no pagan facturas. Diseñamos una estrategia de contenido y pauta publicitaria pensada para llevar gente real a tu web o a tu WhatsApp, con objetivos claros desde el primer mes.',
    benefits: [
      {
        title: 'Estrategia antes que publicaciones',
        text: 'Empezamos por definir a quién le hablas y qué quieres que haga después de verte, no por llenar un calendario de contenido.',
      },
      {
        title: 'Pauta con presupuesto controlado',
        text: 'Campañas en Meta e Instagram Ads con objetivos de conversión, no solo de alcance. Cada euro tiene un porqué.',
      },
      {
        title: 'Contenido que se nota tuyo',
        text: 'Nada de plantillas genéricas: fotos, vídeos y copy que reflejan tu negocio real, no un stock de internet.',
      },
      {
        title: 'Reporting mensual sin tecnicismos',
        text: 'Un resumen claro de qué ha funcionado y qué cambiamos el mes que viene. Sin excusas ni jerga.',
      },
    ],
    process: [
      { title: 'Auditoría de tus redes', text: 'Revisamos qué tienes, qué funciona y qué no, y por qué.' },
      { title: 'Plan de contenido y pauta', text: 'Calendario editorial y estrategia de campañas alineados a un objetivo de negocio concreto.' },
      { title: 'Producción y publicación', text: 'Creamos, publicamos y gestionamos la comunidad, sin que tengas que pensarlo tú.' },
      { title: 'Optimización mensual', text: 'Ajustamos creatividades, segmentación y presupuesto según los datos reales.' },
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo se tarda en ver resultados?',
        a: 'La pauta puede dar tráfico desde la primera semana. El crecimiento orgánico y la construcción de marca suelen notarse a partir del segundo o tercer mes de trabajo constante.',
      },
      {
        q: '¿Gestionáis Instagram, Facebook y TikTok?',
        a: 'Sí, trabajamos con los canales donde realmente está tu cliente. No te metemos en una red social solo porque exista.',
      },
      {
        q: '¿Necesito tener ya contenido grabado?',
        a: 'No. Si hace falta, organizamos una sesión de fotos o vídeo con tu producto o local para tener material propio desde el primer mes.',
      },
    ],
  },
  {
    slug: 'desarrollo-web-ecommerce',
    icon: 'ShoppingCart',
    color: '#7C3AED',
    bg: '#F3EEFE',
    title: 'Desarrollo Web & Ecommerce',
    shortDescription: 'Webs y tiendas online rápidas, que venden desde el primer día.',
    metaTitle: 'Diseño y Desarrollo Web & Ecommerce en Madrid | Befive',
    metaDescription:
      'Diseño y desarrollo de páginas web y tiendas online a medida en Madrid. Webs rápidas, optimizadas para SEO y pensadas para convertir visitas en clientes desde el primer día.',
    heroSubtitle:
      'Una web bonita que no vende es un gasto, no una inversión. Diseñamos y desarrollamos páginas web y tiendas online rápidas, optimizadas para buscadores y construidas para convertir visitas en clientes o pedidos.',
    benefits: [
      {
        title: 'Diseño a medida, no plantillas',
        text: 'Cada web se diseña desde cero para tu marca y tu negocio, no partimos de una plantilla genérica que ya has visto cien veces.',
      },
      {
        title: 'Velocidad de carga real',
        text: 'Webs ligeras y optimizadas: nada de plugins innecesarios que ralentizan la página y espantan visitas.',
      },
      {
        title: 'Ecommerce listo para vender',
        text: 'Pasarela de pago, gestión de pedidos, inventario y envíos configurados desde el primer día, sin sorpresas después.',
      },
      {
        title: 'Base SEO desde el código',
        text: 'Estructura, metadatos y velocidad pensados para que Google entienda tu web desde el lanzamiento, no como un parche posterior.',
      },
    ],
    process: [
      { title: 'Descubrimiento', text: 'Entendemos tu negocio, tu competencia y qué necesita realmente tu web para vender.' },
      { title: 'Diseño', text: 'Propuesta visual a medida, con foco en conversión y en cómo navega de verdad tu cliente.' },
      { title: 'Desarrollo', text: 'Construcción de la web o tienda online, con pruebas en móvil, tablet y ordenador.' },
      { title: 'Lanzamiento y soporte', text: 'Publicamos, formamos a tu equipo si hace falta, y damos soporte post-lanzamiento.' },
    ],
    faqs: [
      {
        q: '¿Cuánto tarda en estar lista una web?',
        a: 'Una web corporativa suele estar lista en 2-4 semanas. Un ecommerce completo puede llevar entre 4 y 8 semanas, según catálogo e integraciones.',
      },
      {
        q: '¿Puedo actualizar el contenido yo mismo después?',
        a: 'Sí, entregamos la web con un panel sencillo para que puedas editar textos, precios y productos sin depender de un programador.',
      },
      {
        q: '¿Trabajáis con Shopify o solo a medida?',
        a: 'Ambas opciones. Si tu negocio necesita la flexibilidad de Shopify la usamos; si necesitas algo más específico, desarrollamos a medida.',
      },
    ],
  },
  {
    slug: 'gestion-redes-sociales',
    icon: 'Share2',
    color: '#059669',
    bg: '#E7F8F1',
    title: 'Gestión de Redes Sociales',
    shortDescription: 'Presencia constante y coherente en cada canal, sin que tengas que pensarlo tú.',
    metaTitle: 'Gestión de Redes Sociales para Empresas | Befive',
    metaDescription:
      'Gestión profesional de redes sociales en Madrid: calendario de contenido, publicación, comunidad y reporting mensual, para que tu marca esté presente sin que tengas que ocuparte tú.',
    heroSubtitle:
      'Publicar de vez en cuando no construye marca. Nos encargamos de tener tus redes activas, coherentes y respondiendo a tu comunidad, para que tu negocio esté presente todos los días sin que tengas que acordarte tú.',
    benefits: [
      {
        title: 'Calendario editorial mensual',
        text: 'Planificamos con antelación qué se publica y cuándo, en lugar de improvisar cada semana.',
      },
      {
        title: 'Gestión de comunidad real',
        text: 'Respondemos comentarios y mensajes con el tono de tu marca, no con respuestas automáticas genéricas.',
      },
      {
        title: 'Coherencia visual en cada canal',
        text: 'Una identidad reconocible en Instagram, Facebook o LinkedIn, no publicaciones sueltas sin criterio.',
      },
      {
        title: 'Datos, no impresiones',
        text: 'Medimos alcance, interacción y conversión real, y te lo explicamos en cristiano cada mes.',
      },
    ],
    process: [
      { title: 'Auditoría inicial', text: 'Revisamos tus canales actuales, tono de marca y qué ha funcionado hasta ahora.' },
      { title: 'Línea editorial', text: 'Definimos pilares de contenido y un calendario mensual alineado a tus objetivos.' },
      { title: 'Publicación y comunidad', text: 'Creamos, publicamos y gestionamos la interacción diaria en tus canales.' },
      { title: 'Revisión mensual', text: 'Analizamos resultados y ajustamos la estrategia para el mes siguiente.' },
    ],
    faqs: [
      {
        q: '¿Cuántas publicaciones incluye el servicio?',
        a: 'Depende del plan y del canal, normalmente entre 3 y 5 publicaciones semanales más gestión de historias. Lo ajustamos a lo que tu negocio realmente necesita.',
      },
      {
        q: '¿Puedo pedir cambios en el contenido antes de publicar?',
        a: 'Sí, siempre revisas y apruebas el contenido antes de que salga a tus canales.',
      },
      {
        q: '¿Gestionáis también la publicidad, o solo lo orgánico?',
        a: 'Ambas cosas, si lo necesitas. Podemos combinar gestión orgánica con campañas de pauta dentro del mismo servicio.',
      },
    ],
  },
  {
    slug: 'branding',
    icon: 'Sparkles',
    color: '#EA580C',
    bg: '#FEF0E7',
    title: 'Identidad de Marca & Branding',
    shortDescription: 'Marcas con carácter propio, reconocibles a la primera.',
    metaTitle: 'Diseño de Identidad de Marca y Branding | Befive',
    metaDescription:
      'Diseño de branding e identidad de marca en Madrid: logotipo, paleta de color, tipografía y manual de marca, para que tu negocio se reconozca a la primera en cualquier canal.',
    heroSubtitle:
      'Si tu marca no se reconoce a la primera, se te olvida. Diseñamos una identidad visual completa —logo, color, tipografía y tono— para que tu negocio se distinga de la competencia en cualquier canal.',
    benefits: [
      {
        title: 'Logotipo con criterio, no solo bonito',
        text: 'Cada elemento tiene una razón de ser ligada a tu negocio, no un diseño de moda sin conexión con tu marca.',
      },
      {
        title: 'Sistema de marca completo',
        text: 'Paleta de color, tipografía y aplicaciones (redes, papelería, web) coherentes entre sí desde el primer día.',
      },
      {
        title: 'Manual de marca claro',
        text: 'Un documento sencillo que puedes compartir con cualquier proveedor o diseñador futuro, sin perder la coherencia.',
      },
      {
        title: 'Pensado para digital',
        text: 'Diseño que funciona igual de bien en una app, un post de Instagram o un favicon, no solo en papel.',
      },
    ],
    process: [
      { title: 'Briefing y research', text: 'Entendemos tu negocio, tu competencia y qué quieres transmitir realmente.' },
      { title: 'Propuestas de identidad', text: 'Presentamos conceptos de logo y sistema visual antes de avanzar a la versión final.' },
      { title: 'Desarrollo del sistema', text: 'Cerramos paleta, tipografía y aplicaciones principales de la marca.' },
      { title: 'Manual y entrega', text: 'Recibes todos los archivos y un manual de marca listo para usar.' },
    ],
    faqs: [
      {
        q: '¿Solo hacéis el logo, o también aplicaciones?',
        a: 'Diseñamos el sistema completo: logo, paleta, tipografía y las aplicaciones principales que necesites (redes, web, papelería).',
      },
      {
        q: '¿Puedo pedir un rediseño de una marca que ya existe?',
        a: 'Sí, hacemos tanto marcas desde cero como rediseños (rebranding) de negocios que ya están funcionando.',
      },
      {
        q: '¿En qué formatos entregáis los archivos finales?',
        a: 'Entregamos todos los formatos necesarios para imprenta y digital (vectorial, PNG, favicon, etc.) junto con el manual de marca.',
      },
    ],
  },
  {
    slug: 'seo-sem',
    icon: 'Search',
    color: '#DB2777',
    bg: '#FDECF3',
    title: 'Optimización SEO & SEM',
    shortDescription: 'Visibilidad real en Google, con resultados medibles.',
    metaTitle: 'Agencia de SEO y SEM en Madrid | Posicionamiento en Google | Befive',
    metaDescription:
      'Optimización SEO y campañas SEM en Madrid. Posicionamiento en Google con resultados medibles: auditoría técnica, contenido optimizado y campañas de Google Ads rentables.',
    heroSubtitle:
      'Si no apareces en Google, no existes para quien te está buscando ahora mismo. Trabajamos SEO técnico y de contenido junto con campañas SEM para que aparezcas donde tu cliente está buscando.',
    benefits: [
      {
        title: 'Auditoría técnica real',
        text: 'Revisamos velocidad, estructura, indexación y errores que están frenando tu posicionamiento antes de tocar nada más.',
      },
      {
        title: 'Contenido optimizado, no genérico',
        text: 'Textos pensados para las búsquedas reales de tu cliente, no relleno con palabras clave forzadas.',
      },
      {
        title: 'Campañas SEM rentables',
        text: 'Google Ads con seguimiento de conversión desde el primer euro invertido, no solo clics sin retorno.',
      },
      {
        title: 'Reporting con datos, no promesas',
        text: 'Posiciones, tráfico y conversiones reales cada mes, explicado sin humo.',
      },
    ],
    process: [
      { title: 'Auditoría SEO', text: 'Analizamos tu web, tu competencia y las palabras clave con oportunidad real.' },
      { title: 'Optimización técnica', text: 'Corregimos velocidad, estructura y errores que bloquean tu posicionamiento.' },
      { title: 'Contenido y enlazado', text: 'Creamos y optimizamos contenido pensado para posicionar, con enlazado interno coherente.' },
      { title: 'Campañas y seguimiento', text: 'Lanzamos SEM si aporta valor, y medimos resultados mes a mes.' },
    ],
    faqs: [
      {
        q: '¿Cuánto se tarda en posicionar en Google?',
        a: 'El SEO es un trabajo a medio plazo: los primeros movimientos suelen verse a partir del tercer mes, con resultados más sólidos entre el sexto y el noveno.',
      },
      {
        q: '¿SEO o SEM, qué necesito?',
        a: 'Depende de tu urgencia y presupuesto. El SEM da visibilidad inmediata mientras el SEO construye posicionamiento estable a largo plazo. Muchas veces la combinación de ambos es lo más rentable.',
      },
      {
        q: '¿Trabajáis posicionamiento local?',
        a: 'Sí, optimizamos también tu ficha de Google Business Profile y contenido local para que aparezcas en búsquedas de tu zona.',
      },
    ],
  },
  {
    slug: 'automatizacion-ia',
    icon: 'Bot',
    color: '#0891B2',
    bg: '#E5F6FA',
    title: 'Automatización de Procesos con IA',
    shortDescription: 'Menos tareas repetitivas, más tiempo para lo que importa: la IA se encarga del resto.',
    metaTitle: 'Automatización de Procesos con Inteligencia Artificial | Befive',
    metaDescription:
      'Automatización de procesos con IA para negocios en Madrid: chatbots, gestión de leads, respuestas automáticas y flujos de trabajo que ahorran horas cada semana.',
    heroSubtitle:
      'Cada tarea repetitiva que automatizas es tiempo que recuperas para tu negocio. Diseñamos flujos de automatización con inteligencia artificial aplicados a tu día a día: leads, atención al cliente, contenido y gestión interna.',
    benefits: [
      {
        title: 'Automatización aplicada, no moda',
        text: 'Usamos IA donde realmente ahorra tiempo o dinero, no como una etiqueta de marketing sin utilidad real.',
      },
      {
        title: 'Chatbots y respuestas automáticas',
        text: 'Atención inicial a tus clientes por WhatsApp o web, disponible fuera de tu horario, sin perder el tono de tu marca.',
      },
      {
        title: 'Gestión de leads automatizada',
        text: 'Captación, clasificación y seguimiento de contactos sin depender de que alguien lo haga a mano cada día.',
      },
      {
        title: 'Integraciones con tus herramientas',
        text: 'Conectamos lo que ya usas (CRM, hojas de cálculo, WhatsApp, email) para que la información fluya sola.',
      },
    ],
    process: [
      { title: 'Diagnóstico de procesos', text: 'Identificamos qué tareas repetitivas te están robando más tiempo cada semana.' },
      { title: 'Diseño del flujo', text: 'Diseñamos la automatización o el asistente de IA adaptado a tu proceso real.' },
      { title: 'Implementación', text: 'Configuramos, integramos con tus herramientas y probamos antes de activar.' },
      { title: 'Ajuste y soporte', text: 'Supervisamos el funcionamiento las primeras semanas y ajustamos lo que haga falta.' },
    ],
    faqs: [
      {
        q: '¿Necesito conocimientos técnicos para usarlo?',
        a: 'No. Diseñamos las automatizaciones para que tu equipo las use sin fricción, con formación incluida si hace falta.',
      },
      {
        q: '¿Qué procesos se pueden automatizar?',
        a: 'Desde respuestas por WhatsApp y clasificación de leads, hasta generación de informes o gestión de pedidos. Lo vemos caso a caso en la auditoría inicial.',
      },
      {
        q: '¿La IA sustituye a mi equipo?',
        a: 'No, libera tiempo de tareas repetitivas para que tu equipo se dedique a lo que realmente necesita criterio humano.',
      },
    ],
  },
]

export const process = {
  eyebrow: '(Proceso)',
  title: 'Cómo trabajamos',
  steps: [
    {
      number: '01',
      title: 'Auditoría gratuita',
      description: 'Revisamos tu web, tus redes y tu competencia — gratis y sin compromiso — para decirte qué está fallando.',
    },
    {
      number: '02',
      title: 'Estrategia',
      description: 'Te proponemos solo lo que necesitas, con precio y plazos claros antes de empezar.',
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Nos ponemos a trabajar — diseño, desarrollo o campañas — con avances que puedes ver desde la primera semana.',
    },
    {
      number: '04',
      title: 'Resultado',
      description: 'Revisamos los números cada mes y ajustamos lo que haga falta: contenido, SEO o anuncios, hasta que funcione.',
    },
  ],
}

export const clientMarquee = [
  { name: 'Beego', image: '/fotos/1.webp' },
  { name: 'Cria Cuervos', image: '/fotos/2.webp' },
  { name: 'Lenka', image: '/fotos/3.webp' },
  { name: 'Kwaleon', image: '/fotos/4.webp' },
  { name: 'Maseya', image: '/fotos/5.webp' },
  { name: 'Kenyamber', image: '/fotos/6.webp' },
  { name: 'Kwaleon', image: '/fotos/7.webp' },
  { name: 'Wac Services', image: '/fotos/8.webp' },
]

export const trabajos = [
  {
    number: '01',
    name: 'Kwaleon',
    category: 'Desarrollo Web, Branding, Ecommerce',
    image: '/trabajos/kwaleon.webp',
    link: 'https://kwaleon.com',
  },
  {
    number: '02',
    name: 'Kenyamber',
    category: 'Desarrollo Web',
    image: '/trabajos/kenyamber.webp',
    link: 'https://www.kenyamber.com/',
  },
  {
    number: '03',
    name: 'Cria Cuervos',
    category: 'Ecommerce, Gestión de pedidos',
    image: '/trabajos/criacuervos.webp',
    link: 'https://www.instagram.com/p/DHwo_3QpRFW/?hl=es&img_index=1',
  },
  {
    number: '04',
    name: 'Afrorecords',
    category: 'Desarrollo Web, Distribución Musical, RRSS',
    image: '/trabajos/afrorecords.webp',
    link: 'https://www.instagram.com/afrorecordsmusic_/',
  },
  {
    number: '05',
    name: 'Maseya',
    category: 'Desarrollo Web, Branding',
    image: '/trabajos/maseya.webp',
    link: 'https://maseyaweb.com/',
  },
  {
    number: '06',
    name: 'Perla Home',
    category: 'Gestión de Redes Sociales',
    image: '/trabajos/perlamalabo.webp',
    link: 'https://www.instagram.com/perla_eventos_gnq/',
  },
  {
    number: '07',
    name: 'Beego',
    category: 'Desarrollo App, Branding',
    image: '/trabajos/beego.webp',
    link: 'https://apps.apple.com/us/app/beego-app/id6745769782',
  },
  {
    number: '08',
    name: 'Wac Services',
    category: 'Desarrollo Web',
    image: '/trabajos/wacservices.webp',
    link: 'https://wacservicesge.com/',
  },
  {
    number: '09',
    name: 'Inner Spirit',
    category: 'Desarrollo Web',
    image: '/trabajos/inner.webp',
    link: 'https://innerspirit.es',
  },
  {
    number: '10',
    name: 'Lenka',
    category: 'Gestión de Redes Sociales',
    image: '/trabajos/lenka.webp',
    link: 'https://www.instagram.com/lenkamadrid/',
  },
  {
    number: '11',
    name: 'Kauzen',
    category: 'Desarrollo Web',
    image: '/trabajos/kauzen.webp',
    link: 'https://kauzenx.com',
  },
]

export const testimonials = [
  {
    quote: 'No tenía ni idea de cómo aparecer en Google desde Guinea. Me hicieron la web y ahora los clientes me encuentran solos, sin que tenga que ir puerta por puerta.',
    author: 'Wilwardo Moisés Oyono',
    role: 'Wac Services',
    avatar: '/reseñas/wilwardo.webp',
    rating: 5,
  },
  {
    quote: 'Un amigo me los recomendó para las redes de Perla Home. Al principio dudé porque nunca había pagado por esto, pero en dos meses las ventas por Instagram se notaron de verdad.',
    author: 'Doris',
    role: 'Perla Home',
    avatar: '/reseñas/doris.webp',
    featured: true,
    photo: '/reseñas/doris.webp',
    rating: 5,
  },
  {
    quote: 'Dos años trabajando juntos y todavía me escriben cuando algo falla en la web, no solo cuando toca cobrar. Eso ya dice mucho.',
    author: 'Ruslán Obiang',
    role: 'Afrorecords',
    avatar: '/reseñas/ruslan.webp',
    rating: 4,
  },
  {
    quote: 'Les enseñé fotos de la tienda física y en la web se nota, no parece una plantilla genérica. Mis clientas de siempre lo notaron.',
    author: 'Ángel Bretón',
    role: 'Kwaleon',
    avatar: '/reseñas/angel.webp',
    rating: 4,
  },
  {
    quote: 'Se retrasaron casi tres semanas sobre lo que habíamos hablado, no lo voy a esconder. Pero la tienda quedó mejor de lo que pedí, así que se lo perdono.',
    author: 'Miguel',
    role: 'Kenyamber',
    avatar: '/reseñas/miguel.webp',
    rating: 3,
  },
  {
    quote: 'Necesitábamos algo simple para que los padres vieran los horarios de las clases sin llamarnos cada dos por tres. Desde que está la web, las llamadas bajaron a la mitad.',
    author: 'Marcos',
    role: 'Junior Team',
    avatar: null,
    rating: 5,
  },
]

export const ctaFullscreen = {
  title: '¿Tu web no te está trayendo clientes?',
  text: 'Cuéntanos qué necesitas y te decimos, sin rodeos, si podemos ayudarte.',
  cta: 'Tengo un proyecto',
  href: whatsappHref,
}

export const contact = {
  email: 'info@befive.es',
  phone: '(+34) 645 797 073',
  whatsapp: '(+240) 222 96 7974',
  address: 'C/ Bahía de Pollensa, 5, Barajas, 28042 Madrid',
  hours: 'Lunes a Viernes, 09:00–18:00',
}

export const pricing = {
  eyebrow: '(Planes)',
  title: 'Explora nuestros precios',
  plans: [
    {
      name: 'Plan Starter',
      price: 'Desde 397€',
      note: 'Precio final tras una llamada de descubrimiento',
      description:
        'Tu punto de partida digital: web o tienda online lista para vender, con diseño a medida y sin sorpresas.',
      delivery: '2-4 semanas',
      features: [
        'Diseño web o ecommerce a medida',
        'Optimización SEO básica',
        'Gestión de 1 red social',
        'Formulario de contacto y WhatsApp',
        '1 mes de soporte post-lanzamiento',
        'Entrega en días laborables',
      ],
      dark: false,
    },
    {
      name: 'Plan PRO',
      price: '1.500€ – 5.000€+',
      note: 'Precio final tras una llamada de descubrimiento',
      description:
        'Todo lo que necesitas para crecer mes a mes: diseño, desarrollo, SEO/SEM y automatización con IA en un mismo equipo.',
      delivery: 'Continuo, mes a mes',
      features: [
        'Todo lo del Plan Esencial',
        'Identidad de marca completa',
        'Gestión de redes sociales multicanal',
        'Campañas SEO & SEM',
        'Automatización de procesos con IA',
        'Soporte y optimización continua',
      ],
      dark: true,
      gold: true,
    },
  ],
}

export const about = {
  eyebrow: '(Intro)',
  title: 'Conoce Befive',
  bio:
    'BEFIVE SOLUTIONS nace para ayudar a empresas a dar forma a sus proyectos digitales sin complicarse la vida.\n\nSoy quien dirige cada proyecto de principio a fin: estrategia, diseño web, desarrollo y automatización con inteligencia artificial aplicada al negocio. Cuando un proyecto pide perfiles muy específicos, colaboro con una red de profesionales de confianza en diseño, desarrollo, branding y marketing — sin la estructura ni la burocracia de una agencia grande.\n\nAntes de crear Befive desarrollé mis propios proyectos online y varios eCommerce, lo que me permite entender los problemas reales de un negocio digital.\n\nTrabajo como una consultora tecnológica: proyectos cuidados, trato directo conmigo desde el primer día, y soluciones pensadas a medida — no un paquete cerrado ni un equipo anónimo detrás.',
  image: '/sobre-nosotros.webp',
}

export const footer = {
  nav: [
    { label: 'Servicios', href: '/#lo-que-hacemos' },
    { label: 'Trabajos', href: '/#trabajos' },
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Contacto', href: '/#contacto' },
  ],
  local: [
    ...serviceDetails.map((service) => ({ label: service.title, href: `/servicios/${service.slug}` })),
    { label: 'Agencia de marketing en Alcalá de Henares', href: '/agencia-marketing-alcala-de-henares' },
    { label: 'Agencia de marketing en Azuqueca de Henares', href: '/agencia-marketing-azuqueca-de-henares' },
  ],
  social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/befivesolutions' }],
  copyright: '© 2026 Befive Solutions. Todos los derechos reservados.',
  location: 'Madrid, España',
}

export const localPages = [
  {
    slug: 'agencia-marketing-alcala-de-henares',
    city: 'Alcalá de Henares',
    metaTitle: 'Agencia de Marketing en Alcalá de Henares | Befive Solutions',
    metaDescription:
      'Agencia de marketing digital para empresas de Alcalá de Henares: diseño web, ecommerce, redes sociales, SEO y automatización con IA. Trato directo, sin subcontratas.',
    h1: 'Agencia de marketing en Alcalá de Henares',
    intro:
      'Befive Solutions es una consultora de marketing digital y desarrollo web con base en Madrid que trabaja con negocios de Alcalá de Henares y todo el Corredor del Henares. Si tienes un comercio, una clínica, una academia o un negocio local en Alcalá y tu web o tus redes no te están trayendo clientes, hablamos claro: qué está fallando y qué haría distinto.',
    whyLocal: [
      {
        title: 'Cerca, aunque trabajemos en remoto',
        text: 'A 30 minutos de Madrid capital. Podemos vernos en persona para conocer tu negocio si lo prefieres, o trabajar 100% en remoto con la misma cercanía.',
      },
      {
        title: 'Entendemos el tejido comercial de la zona',
        text: 'Comercio local, hostelería, clínicas, academias y pymes del Corredor del Henares compiten con negocios digitalizados de Madrid capital. Te ayudamos a competir en igualdad de condiciones.',
      },
      {
        title: 'Sin intermediarios ni agencias grandes',
        text: 'Trato directo conmigo desde el primer día, sin comerciales ni departamentos entre medias. Lo que se habla, se hace.',
      },
    ],
    servicesIntro:
      'Trabajamos con negocios de Alcalá de Henares en cualquiera de estas áreas, combinándolas según lo que tu negocio necesite:',
  },
  {
    slug: 'agencia-marketing-azuqueca-de-henares',
    city: 'Azuqueca de Henares',
    metaTitle: 'Agencia de Marketing en Azuqueca de Henares | Befive Solutions',
    metaDescription:
      'Agencia de marketing digital para empresas de Azuqueca de Henares: diseño web, ecommerce, redes sociales, SEO y automatización con IA. Trato directo, sin subcontratas.',
    h1: 'Agencia de marketing en Azuqueca de Henares',
    intro:
      'Befive Solutions es una consultora de marketing digital y desarrollo web con base en Madrid que trabaja con negocios de Azuqueca de Henares y el Corredor del Henares. Si tu empresa necesita una web que venda, presencia real en redes o posicionamiento en Google, hablamos claro: qué está fallando y qué haría distinto, sin paquetes cerrados.',
    whyLocal: [
      {
        title: 'A un paso de Madrid y Guadalajara',
        text: 'Azuqueca está en un punto estratégico del corredor logístico e industrial del Henares. Trabajamos en remoto con la misma cercanía que si estuviéramos en tu misma calle.',
      },
      {
        title: 'Negocios industriales y de servicios, no solo ecommerce',
        text: 'Azuqueca tiene un tejido empresarial fuerte en logística e industria además de comercio local. Adaptamos la estrategia digital a cada tipo de negocio, no un mismo molde para todos.',
      },
      {
        title: 'Sin intermediarios ni agencias grandes',
        text: 'Trato directo conmigo desde el primer día, sin comerciales ni departamentos entre medias. Lo que se habla, se hace.',
      },
    ],
    servicesIntro:
      'Trabajamos con negocios de Azuqueca de Henares en cualquiera de estas áreas, combinándolas según lo que tu negocio necesite:',
  },
]
