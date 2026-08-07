export const photo = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`
export const avatar = (n) => `https://i.pravatar.cc/150?img=${n}`

export const nav = {
  logo: 'Befive',
  logoImage: '/befive_logo.png',
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  cta: { label: 'Auditoría gratuita', href: '#contacto' },
}

export const hero = {
  badge: 'Disponibles para nuevos proyectos',
  title: 'Impulsa tu negocio hacia el futuro digital',
  subtitle: 'Diseño, tecnología y automatización con IA para marcas que quieren crecer de verdad.',
  cta: 'Pedir auditoría gratuita',
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
    { name: 'Beego', image: '/marcas/beego.webp' },
    { name: 'Export Africa', image: '/marcas/export_africa.webp' },
    { name: 'Viajes Guinea Ecuatorial', image: '/marcas/viajes_guinea.WEBP' },
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
  checklist: [
    'Estrategia a medida',
    'Diseño de alto impacto',
    'Entrega puntual',
    'Proceso transparente',
    'Soporte post-lanzamiento',
  ],
  checklistTitle: 'Soluciones estratégicas para un impacto duradero',
  featureCards: [
    {
      title: 'Hecho para la era de la IA',
      text: 'De la idea a un producto con IA, escalable y listo para producción.',
      type: 'icons',
    },
    {
      title: 'Fiable y preparado para el futuro',
      type: 'photo',
      image: photo('befive-reliable', 700, 500),
    },
    {
      title: '24/7',
      text: 'Soporte siempre activo',
      type: 'chat',
    },
  ],
}

export const whatWeDo = {
  eyebrow: '(Lo que hacemos)',
  items: [
    { label: 'Social Media', image: photo('whatwedo-social', 900, 700) },
    { label: 'Desarrollo Web', image: photo('whatwedo-web', 900, 700) },
    { label: 'Branding', image: photo('whatwedo-branding', 900, 700) },
    { label: 'SEO & SEM', image: photo('whatwedo-seo', 900, 700) },
    { label: 'Automatización IA', image: photo('whatwedo-ia', 900, 700) },
  ],
}

export const services = {
  eyebrow: '(Servicios)',
  title: 'Todo lo que tu marca necesita para crecer',
  items: [
    {
      icon: 'Megaphone',
      title: 'Social Media Marketing',
      description: 'Estrategia de contenido y pauta que convierte seguidores en clientes.',
    },
    {
      icon: 'ShoppingCart',
      title: 'Desarrollo Web & Ecommerce',
      description: 'Webs y tiendas online rápidas, que venden desde el primer día.',
    },
    {
      icon: 'Share2',
      title: 'Gestión de Redes Sociales',
      description: 'Presencia constante y coherente en cada canal, sin que tengas que pensarlo tú.',
    },
    {
      icon: 'Sparkles',
      title: 'Identidad de Marca & Branding',
      description: 'Marcas con carácter propio, reconocibles a la primera.',
    },
    {
      icon: 'Search',
      title: 'Optimización SEO & SEM',
      description: 'Visibilidad real en Google, con resultados medibles.',
    },
    {
      icon: 'Bot',
      title: 'Automatización de Procesos con IA',
      description: 'Flujos de trabajo más rápidos, con IA trabajando por ti.',
    },
  ],
  closing: 'Todos nuestros servicios están estratégicamente orientados a maximizar tus resultados y tu rentabilidad, de forma personalizada.',
}

export const process = {
  eyebrow: '(Proceso)',
  title: 'Cómo trabajamos',
  steps: [
    {
      number: '01',
      title: 'Auditoría gratuita',
      description: 'Analizamos tu negocio a fondo, sin compromiso, para detectar oportunidades reales de crecimiento.',
    },
    {
      number: '02',
      title: 'Estrategia',
      description: 'Diseñamos una propuesta de servicios digitales enfocada 100% en tus objetivos.',
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Ejecutamos un plan de acción personalizado, analizando a tu competencia y adaptando cada canal.',
    },
    {
      number: '04',
      title: 'Resultado',
      description: 'Medimos, optimizamos y seguimos mejorando tu presencia online: contenidos, SEO, SEM y RRSS.',
    },
  ],
}

export const clientMarquee = [
  { name: 'Kwaleon', image: photo('marquee-kwaleon', 420, 270) },
  { name: 'Kenyamber', image: photo('marquee-kenyamber', 420, 270) },
  { name: 'Cria Cuervos', image: photo('marquee-cria-cuervos', 420, 270) },
  { name: 'Afrorecords', image: photo('marquee-afrorecords', 420, 270) },
  { name: 'Kauzen', image: photo('marquee-kauzen', 420, 270) },
  { name: 'WAC Services', image: photo('marquee-wac', 420, 270) },
  { name: 'Beego App', image: photo('marquee-beego', 420, 270) },
  { name: 'Lenka', image: photo('marquee-lenka', 420, 270) },
  { name: 'Team Junior', image: photo('marquee-team-junior', 420, 270) },
]

export const trabajos = [
  {
    number: '01',
    name: 'Kwaleon',
    category: 'Desarrollo Web, Branding, Ecommerce',
    images: [photo('trabajo-kwaleon-1', 500, 320), photo('trabajo-kwaleon-2', 500, 420), photo('trabajo-kwaleon-3', 700, 900)],
  },
  {
    number: '02',
    name: 'Kenyamber',
    category: 'Desarrollo Web',
    images: [photo('trabajo-kenyamber-1', 500, 320), photo('trabajo-kenyamber-2', 500, 420), photo('trabajo-kenyamber-3', 700, 900)],
  },
  {
    number: '03',
    name: 'Cria Cuervos',
    category: 'Ecommerce, Gestión de pedidos',
    images: [photo('trabajo-cria-cuervos-1', 500, 320), photo('trabajo-cria-cuervos-2', 500, 420), photo('trabajo-cria-cuervos-3', 700, 900)],
  },
]

export const work = {
  eyebrow: '(Más allá del marketing)',
  title: 'Beyond Just Marketing',
  titleEs: 'Más allá del marketing',
  subtitle: 'Proyectos que hemos hecho realidad',
  projects: [
    {
      number: '01',
      name: 'Cria Cuervos',
      description: 'Gestión de pedidos y cubiteras.',
      services: ['Ecommerce', 'Gestión de pedidos'],
      image: photo('cria-cuervos', 900, 700),
    },
    {
      number: '02',
      name: 'Kwaleon',
      description: 'Marca de moda artesanal en tejido wax, de cero a tienda online.',
      services: ['Desarrollo Web', 'Branding', 'Ecommerce'],
      image: photo('kwaleon', 900, 700),
    },
    {
      number: '03',
      name: 'Kenyamber',
      description: 'Web para outlet de electrodomésticos en Madrid.',
      services: ['Desarrollo Web'],
      image: photo('kenyamber', 900, 700),
    },
    {
      number: '04',
      name: 'Afrorecords',
      description: 'Distribución musical y gestión de RRSS.',
      services: ['Desarrollo Web', 'Distribución Musical', 'RRSS'],
      image: photo('afrorecords', 900, 700),
    },
    {
      number: '05',
      name: 'Beego App',
      description: 'App iOS & Android desde cero.',
      services: ['Desarrollo App', 'Branding'],
      image: photo('beego-app', 900, 700),
    },
    {
      number: '06',
      name: 'Kauzen',
      description: 'Ecommerce y gestión de pedidos.',
      services: ['Desarrollo Web', 'Ecommerce'],
      image: photo('kauzen', 900, 700),
    },
  ],
}

export const testimonials = [
  {
    quote: 'Me ayudaron a crear mi página web para mejorar la visibilidad de mi negocio en Guinea Ecuatorial.',
    author: 'Wilwardo Moisés Oyono',
    role: 'Wac Services',
    avatar: '/reseñas/wilwardo.webp',
    rating: 5,
  },
  {
    quote: 'Les contacté por recomendación de un amigo para que creasen y gestionasen nuestras redes sociales y la verdad, fue un paso adelante.',
    author: 'Doris',
    role: 'Perla Home',
    avatar: '/reseñas/doris.webp',
    rating: 5,
  },
  {
    quote: 'Contraté los servicios de la agencia para habilitar los portales del lanzamiento de mi primer libro.',
    author: 'Miguel Ángel Ramos',
    role: 'La Pirámide del Equilibrio Laboral',
    avatar: avatar(33),
    featured: true,
    photo: photo('testimonial-featured', 700, 850),
  },
  {
    quote: 'Tras más de dos años trabajando juntos he podido comprobar que con paciencia se logran los resultados.',
    author: 'Ruslán Obiang',
    role: 'Afrorecords',
    avatar: '/reseñas/ruslan.webp',
    rating: 4,
  },
  {
    quote: 'El equipo entendió nuestra marca desde el primer día. La web quedó exactamente como la imaginábamos.',
    author: 'Ángel Bretón',
    role: 'Kwaleon',
    avatar: '/reseñas/angel.webp',
    rating: 4,
  },
  {
    quote: 'Tardaron más de lo esperado en entregar la web, pero el resultado final quedó muy bien.',
    author: 'Miguel',
    role: 'Kenyamber',
    avatar: '/reseñas/miguel.webp',
    rating: 3,
  },
]

export const ctaFullscreen = {
  title: '¿Listo para transformar tu negocio?',
  text: 'En Befive te acompañamos en cada paso hacia la transformación digital.',
  cta: 'Tengo un proyecto',
  href: 'https://wa.me/2402229674',
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
      name: 'Plan Esencial',
      price: '600€ – 1.800€',
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
      name: 'Plan Crecimiento',
      price: '2.000€ – 6.000€+',
      note: 'Precio final tras una llamada de descubrimiento',
      description:
        'Estrategia digital completa — diseño, desarrollo, SEO/SEM y automatización con IA trabajando juntos.',
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
    },
  ],
}

export const about = {
  eyebrow: '(Intro)',
  title: 'Conoce Befive',
  subtitle: 'El equipo',
  bio:
    'Befive Solutions es un equipo de diseñadores, desarrolladores y estrategas de marketing con sede en Madrid. Ayudamos a marcas de toda España y Guinea Ecuatorial a construir presencias digitales que realmente convierten — combinando diseño cuidado, tecnología sólida y automatización con IA. Creemos en el trabajo cercano con cada cliente, sin intermediarios ni procesos innecesarios.',
  image: photo('befive-founder', 800, 900),
}

export const footer = {
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  social: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
  copyright: '© 2026 Befive Solutions. Todos los derechos reservados.',
  location: 'Madrid, España',
}
