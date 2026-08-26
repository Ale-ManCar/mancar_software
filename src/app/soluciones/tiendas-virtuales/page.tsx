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
    />
  );
}
