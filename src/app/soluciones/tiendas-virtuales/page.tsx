import SolutionPage from '../SolutionPage';

export default function TiendasVirtualesPage() {
  return (
    <SolutionPage
      kicker="E-commerce"
      title="Tiendas virtuales listas para vender con claridad."
      description="Implementamos tiendas online con catálogo, carrito, pagos, inventario y una experiencia de compra pensada para que el cliente encuentre y compre sin complicaciones."
      secondary="Te acompañamos desde la estructura de productos hasta el panel de administración y el flujo de atención."
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Persona comprando en una tienda virtual"
      features={['Catálogo de productos', 'Carrito y checkout', 'Pasarelas de pago', 'Gestión de inventario', 'SEO para productos', 'Panel administrativo']}
    />
  );
}
