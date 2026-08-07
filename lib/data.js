export const photo = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const whatsappHref = 'https://wa.me/34645797073'

export const nav = {
  logo: 'Befive',
  logoImage: '/befive_solutions.webp',
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  cta: { label: 'Hablemos', href: whatsappHref },
}

export const hero = {
  badge: 'Disponibles para nuevos proyectos',
  titleLine1: 'Webs y automatizaciones',
  titleLine2: 'con IA, hechas a medida.',
  subtitle: 'Diseño, desarrollo web y automatizaciones con IA, pensados para que tu día a día sea más simple.',
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

export const stats = [
  { value: '+50', label: 'proyectos generados para clientes' },
  { value: '24/7', label: 'siempre con soporte' },
  { value: '+40%', label: 'aumento medio de conversión' },
  { value: '+5', label: 'países con los que trabajamos' },
]

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
    },
    {
      type: 'video',
      video: '/figma.mp4',
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

export const services = {
  eyebrow: '(Servicios)',
  title: 'Servicios que venden',
  items: [
    {
      icon: 'Megaphone',
      title: 'Social Media Marketing',
      description: 'Estrategia de contenido y pauta que convierte seguidores en clientes.',
      color: '#2563EB',
      bg: '#EFF4FF',
    },
    {
      icon: 'ShoppingCart',
      title: 'Desarrollo Web & Ecommerce',
      description: 'Webs y tiendas online rápidas, que venden desde el primer día.',
      color: '#7C3AED',
      bg: '#F3EEFE',
    },
    {
      icon: 'Share2',
      title: 'Gestión de Redes Sociales',
      description: 'Presencia constante y coherente en cada canal, sin que tengas que pensarlo tú.',
      color: '#059669',
      bg: '#E7F8F1',
    },
    {
      icon: 'Sparkles',
      title: 'Identidad de Marca & Branding',
      description: 'Marcas con carácter propio, reconocibles a la primera.',
      color: '#EA580C',
      bg: '#FEF0E7',
    },
    {
      icon: 'Search',
      title: 'Optimización SEO & SEM',
      description: 'Visibilidad real en Google, con resultados medibles.',
      color: '#DB2777',
      bg: '#FDECF3',
    },
    {
      icon: 'Bot',
      title: 'Automatización de Procesos con IA',
      description: 'Menos tareas repetitivas, más tiempo para lo que importa: la IA se encarga del resto.',
      color: '#0891B2',
      bg: '#E5F6FA',
    },
  ],
  closing: 'No vendemos paquetes cerrados. Elegimos contigo qué servicios necesitas según lo que quieras conseguir.',
}

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
  { name: 'Kauzen', image: '/fotos/9.webp' },
]

export const trabajos = [
  {
    number: '01',
    name: 'Kwaleon',
    category: 'Desarrollo Web, Branding, Ecommerce',
    image: '/trabajos/kwaleon.webp',
    link: '#',
  },
  {
    number: '02',
    name: 'Kenyamber',
    category: 'Desarrollo Web',
    image: '/trabajos/kenyamber.webp',
    link: '#',
  },
  {
    number: '03',
    name: 'Cria Cuervos',
    category: 'Ecommerce, Gestión de pedidos',
    image: '/trabajos/criacuervos.webp',
    link: '#',
  },
  {
    number: '04',
    name: 'Afrorecords',
    category: 'Desarrollo Web, Distribución Musical, RRSS',
    image: '/trabajos/afrorecords.webp',
    link: '#',
  },
  {
    number: '05',
    name: 'Maseya',
    category: 'Desarrollo Web, Branding',
    image: '/trabajos/maseya.webp',
    link: '#',
  },
  {
    number: '06',
    name: 'Perla Home',
    category: 'Gestión de Redes Sociales',
    image: '/trabajos/perlamalabo.webp',
    link: '#',
  },
  {
    number: '07',
    name: 'Beego',
    category: 'Desarrollo App, Branding',
    image: '/trabajos/beego.webp',
    link: '#',
  },
  {
    number: '08',
    name: 'Wac Services',
    category: 'Desarrollo Web',
    image: '/trabajos/wacservices.webp',
    link: '#',
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
  subtitle: 'El equipo',
  bio:
    'BEFIVE SOLUTIONS nace para ayudar a empresas a dar forma a sus proyectos digitales sin complicarse la vida.\n\nSoy quien dirige cada proyecto de principio a fin: estrategia, diseño web, desarrollo y automatización con inteligencia artificial aplicada al negocio. Cuando un proyecto pide perfiles muy específicos, colaboro con una red de profesionales de confianza en diseño, desarrollo, branding y marketing — sin la estructura ni la burocracia de una agencia grande.\n\nAntes de crear Befive desarrollé mis propios proyectos online y varios eCommerce, lo que me permite entender los problemas reales de un negocio digital.\n\nTrabajo como una consultora tecnológica: proyectos cuidados, trato directo conmigo desde el primer día, y soluciones pensadas a medida — no un paquete cerrado ni un equipo anónimo detrás.',
  image: '/sobre-nosotros.webp',
}

export const footer = {
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/befivesolutions' }],
  copyright: '© 2026 Befive Solutions. Todos los derechos reservados.',
  location: 'Madrid, España',
}
