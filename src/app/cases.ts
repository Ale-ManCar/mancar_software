export type SuccessCase = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  clientProfile: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  kpis: { label: string; value: string }[];
  timeline: string;
  category: 'Web' | 'Sistema' | 'Soporte';
  liveUrl?: string;
};

export const successCases: SuccessCase[] = [
  {
    slug: 'odontocare',
    title: 'OdontoCare',
    icon: 'OC',
    category: 'Sistema',
    summary:
      'Sistema odontológico desktop para clínicas que necesitan operar en Windows con datos locales, roles, pacientes, agenda, tratamientos, pagos y respaldos.',
    clientProfile: 'Clínicas odontológicas que requieren una herramienta instalable, privada y preparada para trabajo diario sin depender de una web pública.',
    challenge:
      'Centralizar información clínica y administrativa en una aplicación local, manteniendo una experiencia moderna y una arquitectura mantenible.',
    solution:
      'Construimos una aplicación desktop con Electron, React, NestJS, PostgreSQL local, Prisma y flujos verificados para gestión clínica, agenda, inventario, reportes y auditoría.',
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
    summary:
      'Sistema veterinario local para Windows con modo servidor LAN y clientes conectados dentro de la misma red de la clínica.',
    clientProfile: 'Clínicas veterinarias que trabajan con dos o más equipos y necesitan operar sin depender de internet o servicios en la nube.',
    challenge:
      'Permitir que varios computadores compartan información de pacientes, atención y operación diaria con instalación simple para usuarios no técnicos.',
    solution:
      'Desarrollamos una aplicación desktop con Electron, API local, PostgreSQL portable, selector de modo Local/LAN y estado de conexión visible.',
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
    summary:
      'Sitio comercial premium para una mueblería, con catálogo administrable, leads, analítica interna y asesoría de producto asistida por IA.',
    clientProfile: 'Negocio de muebles que necesita mostrar productos con una experiencia visual cuidada y captar oportunidades comerciales.',
    challenge:
      'Combinar una vitrina atractiva con herramientas internas para administrar catálogo, contactos y comportamiento de visitantes.',
    solution:
      'Creamos una experiencia React/Vite con TypeScript, Supabase, administración de catálogo, bandeja de leads, analítica anónima y recomendaciones compatibles con API server-side.',
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
    slug: 'beauty-business-template',
    title: 'Beauty Business Template',
    icon: 'BB',
    category: 'Web',
    summary:
      'Plantilla web reutilizable para negocios de belleza, barberías, spas, peluquerías y centros estéticos locales.',
    clientProfile: 'Negocios de servicios personales que necesitan una presencia web profesional, rápida de adaptar y orientada a reservas.',
    challenge:
      'Crear una base comercial flexible que pueda personalizarse para distintos tipos de negocios sin rehacer toda la interfaz.',
    solution:
      'Estructuramos una plantilla React/Vite con Tailwind CSS, componentes reutilizables y datos centralizados por tipo de negocio.',
    results: [
      'Cambio de demo por negocio desde archivos de datos centralizados.',
      'Secciones reutilizables para servicios, beneficios, galería, paquetes y testimonios.',
      'Base preparada para adaptar rápidamente propuestas web a comercios locales.',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Componentes', 'Data config'],
    kpis: [
      { label: 'Sectores', value: 'Beauty' },
      { label: 'Edición', value: 'Datos' },
      { label: 'Entrega', value: 'Rápida' },
    ],
    timeline: 'Plantilla comercial reutilizable',
  },
  {
    slug: 'alma-vet',
    title: 'Alma Vet',
    icon: 'AV',
    category: 'Web',
    liveUrl: 'https://mancarsoftware.github.io/veterinaria/',
    summary:
      'Sitio web estático para veterinaria con backend ligero para recibir y validar solicitudes de citas.',
    clientProfile: 'Clínica veterinaria que necesita comunicar confianza, servicios y canales de atención de forma simple.',
    challenge:
      'Mantener una web liviana, publicable en GitHub Pages, pero con capacidad real para recibir solicitudes desde un formulario.',
    solution:
      'Desarrollamos un frontend React y una arquitectura con Supabase Edge Functions para procesar solicitudes sin convertir el sitio en una plataforma pesada.',
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
