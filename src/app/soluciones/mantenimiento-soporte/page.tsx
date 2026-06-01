import SolutionPage from '../SolutionPage';

export default function MantenimientoSoportePage() {
  return (
    <SolutionPage
      kicker="Soporte técnico"
      title="Mantenimiento para que tu operación digital no se detenga."
      description="Mantenemos sitios, tiendas y sistemas actualizados, protegidos y funcionando correctamente para reducir incidencias y evitar tiempos muertos."
      secondary="Atendemos errores, mejoras y revisiones preventivas con comunicación clara y respuesta directa."
      image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Equipo revisando soporte y mantenimiento técnico"
      features={['Actualizaciones de seguridad', 'Corrección de errores', 'Monitoreo preventivo', 'Copias de seguridad', 'Soporte por WhatsApp', 'Mejoras continuas']}
    />
  );
}
