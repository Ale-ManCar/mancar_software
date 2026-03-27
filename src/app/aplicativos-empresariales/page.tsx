export default function AplicativosPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Aplicativos Empresariales</h1>
        <p className="text-gray-600 mb-8">
          Desarrollamos software personalizado para optimizar la gestión de tu negocio. Desde sistemas de inventario hasta plataformas de gestión de clientes.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📦 Gestión de Inventarios</h3>
            <p className="text-gray-600">Control de stock, alertas de reposición, reportes de ventas.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📋 CRM a Medida</h3>
            <p className="text-gray-600">Administra tus clientes, historial de interacciones y campañas.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Business Intelligence</h3>
            <p className="text-gray-600">Dashboards interactivos para la toma de decisiones.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📄 Facturación Electrónica</h3>
            <p className="text-gray-600">Integración con SRI, generación automática de comprobantes.</p>
          </div>
        </div>
      </div>
    </main>
  );
}