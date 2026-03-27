export default function DisenoWebPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Diseño Web Profesional</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              Creamos sitios web modernos, rápidos y completamente adaptados a cualquier dispositivo (responsive). Nos aseguramos de que tu negocio tenga una presencia online impactante, con un diseño que refleje tu identidad y capte la atención de tus clientes.
            </p>
            <p className="text-gray-600 mb-4">
              Incluye optimización SEO básica, formularios de contacto y un panel de administración fácil de usar para que puedas actualizar tu contenido sin necesidad de conocimientos técnicos.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Diseño responsive (se ve perfecto en móvil, tablet y escritorio)</li>
              <li>Optimización SEO para mejorar tu posicionamiento en Google</li>
              <li>Formularios de contacto personalizados</li>
              <li>Integración con redes sociales</li>
              <li>Panel de administración intuitivo</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">🎨</span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              (Imagen ilustrativa de un diseño web)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}