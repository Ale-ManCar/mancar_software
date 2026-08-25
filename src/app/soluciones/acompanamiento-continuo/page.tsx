import SolutionPage from '../SolutionPage';

export default function AcompanamientoContinuoPage() {
  return (
    <SolutionPage
      kicker="Acompañamiento"
      title="Un aliado técnico para seguir mejorando después del lanzamiento."
      description="No entregamos y desaparecemos. Te acompañamos con soporte, ajustes, mejoras y criterio técnico para que tu proyecto evolucione con tu negocio."
      secondary="Ideal para pymes que necesitan mantener su operación digital activa, segura y alineada a nuevos objetivos."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Equipo en reunión de acompañamiento y mejora continua"
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
    />
  );
}
