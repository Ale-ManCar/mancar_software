import SolutionPage from '../SolutionPage';

export default function OptimizacionConsultoriaPage() {
  return (
    <SolutionPage
      kicker="Optimización"
      title="Mejoras concretas para convertir más y cargar mejor."
      description="Auditamos tu web o sistema para detectar fricción, lentitud, oportunidades SEO y puntos donde puedes convertir mejor."
      secondary="Entregamos una hoja de ruta priorizada, clara y accionable para que sepas qué mejorar primero y por qué."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Dashboard de analítica y optimización digital"
      features={['Auditoría técnica', 'Velocidad y rendimiento', 'SEO y contenido', 'Mejora de conversión', 'Informe priorizado', 'Seguimiento de mejoras']}
    />
  );
}
