export default function TiendasVirtualesPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Tiendas Virtuales (E‑commerce)</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              Implementamos tiendas en línea completas con pasarelas de pago integradas, gestión de inventario, carrito de compras y una experiencia de compra optimizada. Ayudamos a que tu negocio venda por internet de manera profesional y segura.
            </p>
            <p className="text-gray-600 mb-4">
              Desde la configuración de productos hasta la logística de envíos, te acompañamos para que tu tienda virtual sea un canal de ventas exitoso.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Pasarelas de pago (PayPal, tarjetas, transferencias)</li>
              <li>Gestión de inventario y pedidos</li>
              <li>Diseño atractivo y orientado a conversión</li>
              <li>SEO para productos y categorías</li>
              <li>Panel de administración para gestionar tu tienda</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">🛒</span>
            </div>
            <p className="text-gray-500 text-sm text-center">(Imagen ilustrativa de e‑commerce)</p>
          </div>
        </div>
      </div>
    </main>
  );
}