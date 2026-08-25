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
      features={[
        {
          title: 'Diseño responsive',
          description: 'Adaptamos la experiencia para móvil, tablet y escritorio, cuidando lectura, jerarquía visual y velocidad de navegación.',
        },
        {
          title: 'SEO técnico base',
          description: 'Organizamos títulos, metadatos, estructura semántica y rendimiento inicial para que Google pueda interpretar mejor tu sitio.',
        },
        {
          title: 'Formularios de contacto',
          description: 'Creamos formularios claros conectados al flujo comercial, con campos útiles para responder mejor a cada prospecto.',
        },
        {
          title: 'Integración con redes sociales',
          description: 'Conectamos tus canales principales para que el visitante pueda verificar tu marca y seguir la conversación donde ya te atienden.',
        },
        {
          title: 'Contenido fácil de actualizar',
          description: 'Estructuramos secciones, textos e imágenes para que el sitio pueda crecer sin rehacer la página desde cero.',
        },
        {
          title: 'Experiencia orientada a conversión',
          description: 'Diseñamos recorridos con mensajes claros, beneficios visibles y llamadas a la acción ubicadas donde tienen sentido.',
        },
      ]}
    />
  );
}
