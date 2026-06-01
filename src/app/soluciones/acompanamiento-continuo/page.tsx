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
      features={['Asesoría personalizada', 'Respuesta ágil', 'Mejoras continuas', 'Capacitación', 'Soporte post-lanzamiento', 'Planificación de nuevas fases']}
    />
  );
}
