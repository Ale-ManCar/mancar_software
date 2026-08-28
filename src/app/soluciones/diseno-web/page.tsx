import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Diseño web profesional para pymes en Ecuador',
  browserTitle: 'Diseño web',
  description:
    'Sitios web rápidos, responsive y orientados a conversión para pymes que necesitan explicar su oferta, generar contactos y verse profesionales.',
  path: '/soluciones/diseno-web',
});

export default function DisenoWebPage() {
  return (
    <SolutionPage
      kicker="Diseño web"
      title="Sitios web rápidos, elegantes y preparados para convertir."
      description="Diseñamos sitios modernos para pymes que necesitan verse profesionales, explicar bien su oferta y generar contactos desde cualquier dispositivo."
      secondary="Incluimos estructura estratégica, responsive, SEO técnico base y formularios conectados al flujo comercial del negocio."
      image="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Pantalla con código de desarrollo web sin personas"
      problems={[
        'Tu negocio se ve activo en redes, pero no tiene una página clara para explicar servicios, precios referenciales o canales de contacto.',
        'Los clientes preguntan lo mismo una y otra vez porque no encuentran información ordenada antes de escribirte.',
        'La página actual carga lento, se ve antigua en celular o no transmite suficiente confianza para cerrar oportunidades.',
      ]}
      deliverables={[
        'Sitio web responsive con estructura comercial, secciones claras y llamadas a la acción ubicadas con intención.',
        'Configuración SEO base: títulos, descripciones, semántica, sitemap, robots y rendimiento inicial.',
        'Formulario o canal de contacto conectado al flujo comercial para recibir solicitudes con contexto útil.',
      ]}
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
      faqs={[
        {
          question: '¿Necesito tener textos e imágenes antes de empezar?',
          answer: 'Ayuda tener material inicial, pero también podemos ordenar el copy, proponer estructura y recomendar imágenes adecuadas según tu rubro.',
        },
        {
          question: '¿La página se verá bien en celulares?',
          answer: 'Sí. Diseñamos primero pensando en lectura, velocidad y navegación móvil, y luego ajustamos tablet y escritorio.',
        },
        {
          question: '¿Incluye posicionamiento en Google?',
          answer: 'Incluye SEO técnico base. El posicionamiento orgánico requiere contenido, medición y mejoras continuas después del lanzamiento.',
        },
      ]}
    />
  );
}
