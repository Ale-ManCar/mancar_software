export type SuccessCase = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  clientProfile: string;
  challenge: string;
  solution: string;
  businessImpact: string;
  results: string[];
  technologies: string[];
  kpis: { label: string; value: string }[];
  timeline: string;
  category: 'Web' | 'Sistema' | 'Soporte';
  liveUrl?: string;
  brand: {
    accent: string;
    background: string;
    foreground: string;
  };
};

export const successCases: SuccessCase[] = [
  {
    slug: 'odontocare',
    title: 'OdontoCare',
    icon: 'OC',
    category: 'Sistema',
    brand: {
      accent: '#22C7D8',
      background: '#EAFBFF',
      foreground: '#063B4A',
    },
    summary:
      'Sistema odontológico desktop para clínicas que necesitan operar en Windows con datos locales, roles, pacientes, agenda, tratamientos, pagos y respaldos.',
    clientProfile: 'Clínicas odontológicas que requieren una herramienta instalable, privada y preparada para trabajo diario sin depender de una web pública.',
    challenge:
      'Centralizar información clínica y administrativa en una aplicación local, manteniendo una experiencia moderna y una arquitectura mantenible.',
    solution:
      'Construimos una aplicación desktop con Electron, React, NestJS, PostgreSQL local, Prisma y flujos verificados para gestión clínica, agenda, inventario, reportes y auditoría.',
    businessImpact:
      'La clínica puede operar con información centralizada en equipos Windows, reducir registros dispersos y mantener control sobre datos sensibles sin depender de una plataforma pública.',
    results: [
      'Aplicación instalable para Windows con base de datos local y procesos guiados.',
      'Cobertura funcional para autenticación, roles, pacientes, historia clínica, odontograma, pagos, reportes y respaldos.',
      'Arquitectura separada entre interfaz, API local, base de datos y migraciones para facilitar mantenimiento.',
    ],
    technologies: ['Electron', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
    kpis: [
      { label: 'Plataforma', value: 'Windows' },
      { label: 'Modo de datos', value: 'Local' },
      { label: 'Verificación', value: 'Tests' },
    ],
    timeline: 'Producto desktop en evolución',
  },
  {
    slug: 'vetcare-pro-lan',
    title: 'VetCare Pro LAN',
    icon: 'VP',
    category: 'Sistema',
    brand: {
      accent: '#0F9B9A',
      background: '#EAF8F7',
      foreground: '#053B3A',
    },
    summary:
      'Sistema veterinario local para Windows con modo servidor LAN y clientes conectados dentro de la misma red de la clínica.',
    clientProfile: 'Clínicas veterinarias que trabajan con dos o más equipos y necesitan operar sin depender de internet o servicios en la nube.',
    challenge:
      'Permitir que varios computadores compartan información de pacientes, atención y operación diaria con instalación simple para usuarios no técnicos.',
    solution:
      'Desarrollamos una aplicación desktop con Electron, API local, PostgreSQL portable, selector de modo Local/LAN y estado de conexión visible.',
    businessImpact:
      'El equipo puede trabajar en red local con mayor continuidad, evitando depender de internet para tareas clínicas y administrativas del día a día.',
    results: [
      'Los equipos cliente pueden conectarse al servidor LAN sin instalar Docker, Node.js, PostgreSQL ni depender de internet.',
      'La arquitectura local separa la app, la API y la base de datos para mantener control operativo dentro de la clínica.',
      'El flujo de instalación contempla Windows 10/11 x64 y uso en red local.',
    ],
    technologies: ['Electron', 'React', 'PostgreSQL portable', 'LAN', 'API local', 'Windows'],
    kpis: [
      { label: 'Trabajo', value: 'LAN' },
      { label: 'Internet', value: 'No cloud' },
      { label: 'Instalación', value: 'Windows' },
    ],
    timeline: 'Producto desktop LAN',
  },
  {
    slug: 'casa-nativa',
    title: 'Casa Nativa',
    icon: 'CN',
    category: 'Web',
    liveUrl: 'https://mancarsoftware.github.io/muebleria/',
    brand: {
      accent: '#173F33',
      background: '#F2F5EE',
      foreground: '#173F33',
    },
    summary:
      'Sitio comercial premium para una mueblería, con catálogo administrable, leads, analítica interna y asesoría de producto asistida por IA.',
    clientProfile: 'Negocio de muebles que necesita mostrar productos con una experiencia visual cuidada y captar oportunidades comerciales.',
    challenge:
      'Combinar una vitrina atractiva con herramientas internas para administrar catálogo, contactos y comportamiento de visitantes.',
    solution:
      'Creamos una experiencia React/Vite con TypeScript, Supabase, administración de catálogo, bandeja de leads, analítica anónima y recomendaciones compatibles con API server-side.',
    businessImpact:
      'El negocio gana una vitrina digital más confiable y una base operativa para administrar productos, entender interés de visitantes y responder oportunidades comerciales.',
    results: [
      'Catálogo editable desde un panel administrativo con publicación de productos.',
      'Registro de contactos, consultas y consentimiento para manejo responsable de leads.',
      'Analítica interna sin guardar nombres, emails, teléfonos, mensajes ni IP en métricas anónimas.',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Supabase', 'IA', 'Analytics'],
    kpis: [
      { label: 'Catálogo', value: 'Admin' },
      { label: 'Leads', value: 'Inbox' },
      { label: 'Privacidad', value: 'Anon.' },
    ],
    timeline: 'Plantilla comercial avanzada',
  },
  {
    slug: 'nova-store',
    title: 'Nova Store',
    icon: 'NS',
    category: 'Web',
    liveUrl: 'https://ale-mancar.github.io/tiendaOnline/',
    brand: {
      accent: '#FF5A45',
      background: '#FFF4F1',
      foreground: '#17181C',
    },
    summary:
      'Ecommerce orientado a producción con vitrina, autenticación, carrito, checkout, panel administrativo y backend API conectado a base de datos.',
    clientProfile: 'Negocios que necesitan vender online con una experiencia moderna, catálogo administrable y arquitectura preparada para crecer.',
    challenge:
      'Construir una tienda online que no sea solo una vitrina estática, sino una base comercial con frontend público, API, persistencia y flujos de compra.',
    solution:
      'Desarrollamos una plataforma ecommerce con React, TypeScript, Vite, React Router, NestJS, PostgreSQL y Prisma, preparada para desplegar storefront y API por separado.',
    businessImpact:
      'La tienda deja de ser solo una presentación visual y se convierte en una base comercial con catálogo, compra guiada, administración e infraestructura preparada para crecer.',
    results: [
      'Storefront publicado en GitHub Pages con rutas adaptadas para despliegue estático.',
      'Backend preparado para Render con PostgreSQL en Neon y migraciones Prisma.',
      'Modo demo para previsualización y configuración pensada para despliegues comerciales.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'NestJS', 'PostgreSQL', 'Prisma'],
    kpis: [
      { label: 'Demo', value: 'Online' },
      { label: 'Backend', value: 'API' },
      { label: 'Datos', value: 'PostgreSQL' },
    ],
    timeline: 'Ecommerce en evolución',
  },
  {
    slug: 'alma-vet',
    title: 'Alma Vet',
    icon: 'AV',
    category: 'Web',
    liveUrl: 'https://mancarsoftware.github.io/veterinaria/',
    brand: {
      accent: '#FF003D',
      background: '#EEF5FF',
      foreground: '#08111F',
    },
    summary:
      'Sitio web estático para veterinaria con backend ligero para recibir y validar solicitudes de citas.',
    clientProfile: 'Clínica veterinaria que necesita comunicar confianza, servicios y canales de atención de forma simple.',
    challenge:
      'Mantener una web liviana, publicable en GitHub Pages, pero con capacidad real para recibir solicitudes desde un formulario.',
    solution:
      'Desarrollamos un frontend React y una arquitectura con Supabase Edge Functions para procesar solicitudes sin convertir el sitio en una plataforma pesada.',
    businessImpact:
      'La clínica obtiene una presencia web ligera y confiable para explicar servicios, generar solicitudes y mantener un flujo de contacto más ordenado.',
    results: [
      'Frontend estático fácil de publicar y mantener.',
      'Recepción y validación de solicitudes mediante funciones backend.',
      'Arquitectura simple y proporcional al tipo de negocio.',
    ],
    technologies: ['React', 'GitHub Pages', 'Supabase', 'Edge Functions', 'Formularios'],
    kpis: [
      { label: 'Hosting', value: 'Static' },
      { label: 'Backend', value: 'Edge' },
      { label: 'Objetivo', value: 'Citas' },
    ],
    timeline: 'Sitio web ligero',
  },
];

export const caseCategories: Array<SuccessCase['category'] | 'Todos'> = ['Todos', 'Web', 'Sistema'];
