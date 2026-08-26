import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Optimización web y consultoría digital',
  browserTitle: 'Optimización web',
  description:
    'Auditamos sitios y sistemas para mejorar velocidad, SEO, claridad comercial, experiencia de usuario y conversión.',
  path: '/soluciones/optimizacion-consultoria',
});

export default function OptimizacionConsultoriaPage() {
  return (
    <SolutionPage
      kicker="Optimización"
      title="Mejoras concretas para convertir más y cargar mejor."
      description="Auditamos tu web o sistema para detectar fricción, lentitud, oportunidades SEO y puntos donde puedes convertir mejor."
      secondary="Entregamos una hoja de ruta priorizada, clara y accionable para que sepas qué mejorar primero y por qué."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Dashboard de analítica y optimización digital"
      problems={[
        'Tu web recibe visitas, pero no genera suficientes contactos o los usuarios no entienden rápido qué ofreces.',
        'La página carga lento, tiene mensajes débiles, formularios poco claros o secciones que no ayudan a vender.',
        'Quieres mejorar antes de invertir en una reconstrucción completa y necesitas saber qué cambios tienen más impacto.',
      ]}
      deliverables={[
        'Auditoría de experiencia, rendimiento, SEO técnico, copy comercial y puntos de fricción del recorrido.',
        'Informe priorizado por impacto y esfuerzo, con recomendaciones concretas para implementar.',
        'Acompañamiento opcional para ejecutar mejoras y medir si los cambios aportan resultados.',
      ]}
      features={[
        {
          title: 'Auditoría técnica',
          description: 'Revisamos estructura, rendimiento, enlaces, formularios, indexación y puntos que afectan la experiencia del usuario.',
        },
        {
          title: 'Velocidad y rendimiento',
          description: 'Detectamos recursos pesados, bloqueos de carga e imágenes mal optimizadas que pueden alejar visitantes.',
        },
        {
          title: 'SEO y contenido',
          description: 'Evaluamos títulos, mensajes, arquitectura de información y oportunidades para explicar mejor tu oferta.',
        },
        {
          title: 'Mejora de conversión',
          description: 'Analizamos llamadas a la acción, claridad del recorrido y fricciones que pueden impedir que un cliente contacte.',
        },
        {
          title: 'Informe priorizado',
          description: 'Entregamos una lista ordenada por impacto y esfuerzo para que sepas qué corregir primero.',
        },
        {
          title: 'Seguimiento de mejoras',
          description: 'Podemos acompañar la implementación y revisar si los cambios realmente mejoran la experiencia.',
        },
      ]}
      faqs={[
        {
          question: '¿La auditoría obliga a rediseñar todo?',
          answer: 'No. La idea es detectar qué conviene ajustar primero; a veces pequeños cambios de estructura, velocidad o mensajes generan una mejora clara.',
        },
        {
          question: '¿Incluye revisión SEO?',
          answer: 'Sí. Revisamos títulos, descripciones, estructura semántica, indexación, rendimiento y oportunidades de contenido.',
        },
        {
          question: '¿Pueden implementar las mejoras después?',
          answer: 'Sí. Podemos entregar solo el diagnóstico o acompañar la implementación según prioridades y presupuesto.',
        },
      ]}
    />
  );
}
