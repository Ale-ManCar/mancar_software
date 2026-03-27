export default function AcompanamientoContinuoPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Acompañamiento Continuo</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              No solo entregamos un proyecto y nos vamos. Te ofrecemos un servicio cercano y rápido, con comunicación directa, porque sabemos que detrás de cada proyecto hay personas que necesitan respuestas claras. Estamos a tu lado para ajustes, mejoras y nuevos desafíos.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestro acompañamiento continuo incluye asesoría personalizada, respuesta ágil a tus dudas, mejoras incrementales y capacitación para tu equipo.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Asesoría personalizada sin tecnicismos</li>
              <li>Respuesta rápida a consultas o incidencias</li>
              <li>Mejoras continuas basadas en tu feedback</li>
              <li>Capacitación para tu equipo</li>
              <li>Soporte post-lanzamiento garantizado</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">🤝</span>
            </div>
            <p className="text-gray-500 text-sm text-center">(Imagen ilustrativa de acompañamiento)</p>
          </div>
        </div>
      </div>
    </main>
  );
}