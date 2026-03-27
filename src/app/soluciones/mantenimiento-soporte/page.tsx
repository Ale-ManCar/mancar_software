export default function MantenimientoSoportePage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Mantenimiento y Soporte Técnico</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              Ofrecemos mantenimiento continuo para tu sitio web o sistema, garantizando que esté siempre actualizado, seguro y funcionando sin problemas. Resolvemos incidencias de forma ágil y realizamos mejoras periódicas para adaptarnos a tus necesidades cambiantes.
            </p>
            <p className="text-gray-600 mb-4">
              Con nuestro soporte técnico, te aseguras de que tu inversión tecnológica esté protegida y optimizada, evitando tiempos de inactividad y problemas de seguridad.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Actualizaciones de seguridad periódicas</li>
              <li>Resolución de errores y bugs</li>
              <li>Monitoreo preventivo 24/7</li>
              <li>Copias de seguridad automáticas</li>
              <li>Soporte por chat, teléfono y email</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">🔧</span>
            </div>
            <p className="text-gray-500 text-sm text-center">(Imagen ilustrativa de soporte técnico)</p>
          </div>
        </div>
      </div>
    </main>
  );
}