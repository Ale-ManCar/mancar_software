import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Acompañamiento técnico continuo para pymes',
  browserTitle: 'Acompañamiento continuo',
  description:
    'Acompañamiento post-lanzamiento para mejorar, mantener y evolucionar tu sitio web, tienda virtual o sistema con criterio técnico.',
  path: '/soluciones/acompanamiento-continuo',
});

export default function AcompanamientoContinuoPage() {
  return (
    <SolutionPage
      kicker="Acompañamiento"
      title="Un aliado técnico para seguir mejorando después del lanzamiento."
      description="No entregamos y desaparecemos. Te acompañamos con soporte, ajustes, mejoras y criterio técnico para que tu proyecto evolucione con tu negocio."
      secondary="Ideal para pymes que necesitan mantener su operación digital activa, segura y alineada a nuevos objetivos."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Equipo en reunión de acompañamiento y mejora continua"
      problems={[
        'Publicaste una web o sistema, pero no tienes un equipo técnico cercano para resolver dudas, ajustes o mejoras.',
        'El negocio cambia y necesitas actualizar contenido, flujos, secciones o funciones sin empezar desde cero.',
        'Quieres tomar decisiones digitales con criterio, evitando gastos innecesarios o soluciones difíciles de mantener.',
      ]}
      deliverables={[
        'Canal de coordinación para consultas, prioridades, mejoras y revisión de incidencias.',
        'Ajustes incrementales en contenido, diseño, rendimiento, formularios o funcionalidades acordadas.',
        'Planificación de nuevas fases para que el proyecto evolucione con orden y sin improvisación.',
      ]}
      features={[
        {
          title: 'Asesoría personalizada',
          description: 'Te ayudamos a decidir qué mejorar, qué evitar y cómo priorizar inversiones digitales según tu etapa.',
        },
        {
          title: 'Respuesta ágil',
          description: 'Atendemos dudas y ajustes con comunicación directa para que no pierdas tiempo buscando a quién acudir.',
        },
        {
          title: 'Mejoras continuas',
          description: 'Aplicamos cambios incrementales en contenido, diseño, rendimiento o funcionalidades según necesidades reales.',
        },
        {
          title: 'Capacitación',
          description: 'Explicamos el uso de la solución para que tu equipo gane autonomía y reduzca dependencia operativa.',
        },
        {
          title: 'Soporte post-lanzamiento',
          description: 'Revisamos estabilidad, formularios, accesos y funcionamiento general después de publicar.',
        },
        {
          title: 'Planificación de nuevas fases',
          description: 'Ordenamos futuras mejoras para que el proyecto crezca sin improvisar ni rehacer lo ya construido.',
        },
      ]}
      faqs={[
        {
          question: '¿El acompañamiento tiene que ser mensual?',
          answer: 'Puede ser mensual o por bloques de trabajo, según la frecuencia de cambios que necesite tu negocio.',
        },
        {
          question: '¿Sirve si todavía no tengo un proyecto publicado?',
          answer: 'Sí. También podemos acompañarte desde la etapa de decisión para priorizar alcance, inversión y camino técnico.',
        },
        {
          question: '¿Incluye capacitación?',
          answer: 'Sí, cuando el proyecto lo requiere. La meta es que tu equipo entienda cómo usar y mantener lo esencial.',
        },
      ]}
    />
  );
}
