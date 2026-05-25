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
  category: 'Web' | 'Sistema' | 'Soporte';
};

export const successCases: SuccessCase[] = [
  {
    slug: 'diseno-web-corporativo',
    title: 'Diseño Web Corporativo',
    icon: '🌐',
    category: 'Web',
    summary:
      'Creamos un sitio web moderno y responsive para una empresa local, aumentando su visibilidad y generando un 40% más de consultas en los primeros 3 meses.',
    clientProfile: 'Empresa local de servicios profesionales con presencia digital limitada.',
    challenge:
      'Dependían de recomendaciones boca a boca y no contaban con un canal digital efectivo para captar nuevos clientes.',
    solution:
      'Diseñamos y desarrollamos un sitio web corporativo responsive, optimizado para SEO básico y orientado a conversiones con formularios de contacto visibles.',
    results: [
      'Incremento del 40% en consultas en los primeros 3 meses.',
      'Mejor posicionamiento local en búsquedas relacionadas al servicio.',
      'Imagen de marca más profesional y confiable para nuevos clientes.',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Optimización SEO on-page', 'Formularios de contacto'],
    kpis: [
      { label: 'Consultas', value: '+40%' },
      { label: 'Tiempo de carga', value: '-35%' },
      { label: 'Conversión', value: '+22%' },
    ],
  },
  {
    slug: 'sistema-gestion-a-medida',
    title: 'Sistema de Gestión a Medida',
    icon: '📋',
    category: 'Sistema',
    summary:
      'Desarrollamos un software personalizado para automatizar la gestión de inventarios y pedidos, reduciendo errores manuales en un 70% y ahorrando 15 horas semanales.',
    clientProfile: 'Negocio comercial con alto volumen de pedidos y control manual de inventario.',
    challenge:
      'Procesos manuales en hojas de cálculo, errores frecuentes y retrasos operativos en inventario y despacho.',
    solution:
      'Construimos un sistema de gestión a medida para centralizar inventario y pedidos, con trazabilidad y reportes para la toma de decisiones.',
    results: [
      'Reducción del 70% en errores manuales.',
      'Ahorro estimado de 15 horas de trabajo por semana.',
      'Mayor control de stock y disminución de quiebres de inventario.',
    ],
    technologies: ['Sistema web a medida', 'Base de datos relacional', 'Panel administrativo', 'Reportes operativos'],
    kpis: [
      { label: 'Errores manuales', value: '-70%' },
      { label: 'Tiempo ahorrado', value: '15h/sem' },
      { label: 'Precisión de stock', value: '+48%' },
    ],
  },
  {
    slug: 'mantenimiento-soporte-continuo',
    title: 'Mantenimiento y Soporte Continuo',
    icon: '🔧',
    category: 'Soporte',
    summary:
      'Brindamos soporte técnico y actualizaciones periódicas para una plataforma educativa, logrando un 99.9% de disponibilidad y reducción de incidencias críticas a cero.',
    clientProfile: 'Plataforma educativa con usuarios activos diarios y requerimientos de alta disponibilidad.',
    challenge: 'Incidencias técnicas recurrentes y falta de un plan de mantenimiento preventivo.',
    solution:
      'Implementamos mantenimiento continuo, monitoreo, actualizaciones programadas y soporte ágil para incidentes.',
    results: [
      'Disponibilidad sostenida del 99.9%.',
      'Reducción de incidencias críticas a cero.',
      'Mayor estabilidad y confianza de usuarios finales.',
    ],
    technologies: ['Monitoreo continuo', 'Mantenimiento preventivo', 'Actualizaciones de seguridad', 'Gestión de incidencias'],
    kpis: [
      { label: 'Disponibilidad', value: '99.9%' },
      { label: 'Incidencias críticas', value: '0' },
      { label: 'Tiempo de respuesta', value: '<20min' },
    ],
  },
];

export const caseCategories: Array<SuccessCase['category'] | 'Todos'> = ['Todos', 'Web', 'Sistema', 'Soporte'];