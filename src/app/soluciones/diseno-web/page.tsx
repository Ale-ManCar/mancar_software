import SolutionPage from '../SolutionPage';

export default function DisenoWebPage() {
  return (
    <SolutionPage
      kicker="Diseño web"
      title="Sitios web rápidos, elegantes y preparados para convertir."
      description="Diseñamos sitios modernos para pymes que necesitan verse profesionales, explicar bien su oferta y generar contactos desde cualquier dispositivo."
      secondary="Incluimos estructura estratégica, responsive, SEO técnico base y formularios conectados al flujo comercial del negocio."
      image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Composición visual de arquitectura y diseño web"
      features={['Diseño responsive', 'SEO técnico base', 'Formularios de contacto', 'Integración con redes sociales', 'Contenido fácil de actualizar', 'Experiencia orientada a conversión']}
    />
  );
}
