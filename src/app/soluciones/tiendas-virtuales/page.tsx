import type { Metadata } from 'next';
import SolutionPage from '../SolutionPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Tiendas virtuales para vender online en Ecuador',
  description:
    'Diseñamos tiendas online con catálogo, carrito, pagos, inventario y una experiencia clara para que tus clientes compren sin complicaciones.',
  path: '/soluciones/tiendas-virtuales',
});

export default function TiendasVirtualesPage() {
  return (
    <SolutionPage
      kicker="E-commerce"
      title="Tiendas virtuales listas para vender con claridad."
      description="Implementamos tiendas online con catálogo, carrito, pagos, inventario y una experiencia de compra pensada para que el cliente encuentre y compre sin complicaciones."
      secondary="Te acompañamos desde la estructura de productos hasta el panel de administración y el flujo de atención."
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Persona comprando en una tienda virtual"
      problems={[
        'Vendes por redes o WhatsApp, pero el catálogo se vuelve difícil de organizar cuando crecen productos, precios o pedidos.',
        'Los clientes abandonan la compra porque no encuentran rápido información, fotos, disponibilidad o pasos claros para pagar.',
        'No tienes un flujo ordenado para revisar pedidos, controlar stock y responder consultas sin perder datos importantes.',
      ]}
      deliverables={[
        'Tienda responsive con catálogo, fichas de producto, carrito y flujo de compra claro para tus clientes.',
        'Panel de administración para gestionar productos, pedidos y contenido esencial según el alcance.',
        'Configuración base para medición, SEO de productos y conexión con canales de atención o pago definidos.',
      ]}
      features={[
        {
          title: 'Catálogo de productos',
          description: 'Organizamos categorías, fichas, precios, imágenes y atributos para que el cliente encuentre rápido lo que busca.',
        },
        {
          title: 'Carrito y checkout',
          description: 'Diseñamos un flujo de compra sencillo, con pasos claros y menor fricción hasta confirmar el pedido.',
        },
        {
          title: 'Pasarelas de pago',
          description: 'Integramos métodos de pago según el alcance del proyecto y la forma en que tu negocio atiende ventas en Ecuador.',
        },
        {
          title: 'Gestión de inventario',
          description: 'Configuramos control de stock para evitar vender productos agotados y mantener información actualizada.',
        },
        {
          title: 'SEO para productos',
          description: 'Preparamos títulos, descripciones y estructura para que cada producto tenga mejores oportunidades de búsqueda.',
        },
        {
          title: 'Panel administrativo',
          description: 'Dejamos un espacio de gestión para revisar pedidos, editar productos y administrar contenido esencial.',
        },
      ]}
      faqs={[
        {
          question: '¿Puedo empezar con una tienda simple?',
          answer: 'Sí. Podemos iniciar con catálogo, carrito y recepción de pedidos, y luego integrar pagos, inventario avanzado o automatizaciones.',
        },
        {
          question: '¿Necesito tener todas las fotos de productos?',
          answer: 'Lo ideal es trabajar con fotos reales y consistentes. Si no las tienes listas, podemos ayudarte a definir un estándar visual para cargarlas por etapas.',
        },
        {
          question: '¿La tienda puede conectarse con WhatsApp?',
          answer: 'Sí. Podemos diseñar flujos donde el cliente compre en la web y el negocio continúe la atención por WhatsApp o correo si eso encaja mejor.',
        },
      ]}
    />
  );
}
