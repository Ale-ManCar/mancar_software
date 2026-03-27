export default function DesarrolloSistemasPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Desarrollo de Sistemas a Medida</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              Creamos software personalizado que se adapta exactamente a tus procesos y necesidades. Ya sea una aplicación de escritorio, una plataforma web interna o una herramienta de gestión, desarrollamos soluciones robustas, escalables y con interfaces intuitivas.
            </p>
            <p className="text-gray-600 mb-4">
              Analizamos tus procesos, diseñamos la solución a tu medida y la implementamos con metodologías ágiles, garantizando que el sistema se integre perfectamente a tu operación.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Aplicaciones web y de escritorio</li>
              <li>Automatización de procesos manuales</li>
              <li>Bases de datos a medida</li>
              <li>Reportes y dashboards personalizados</li>
              <li>Capacitación al personal</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">⚙️</span>
            </div>
            <p className="text-gray-500 text-sm text-center">(Imagen ilustrativa de desarrollo de software)</p>
          </div>
        </div>
      </div>
    </main>
  );
}