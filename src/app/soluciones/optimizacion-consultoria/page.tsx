export default function OptimizacionConsultoriaPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Optimización y Consultoría</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              Analizamos tu presencia digital actual y te proponemos mejoras concretas en rendimiento, SEO, usabilidad y conversión. Te asesoramos para que tomes decisiones informadas y alcances tus objetivos de negocio con tecnología.
            </p>
            <p className="text-gray-600 mb-4">
              Realizamos auditorías técnicas, evaluamos la experiencia de usuario y diseñamos una hoja de ruta para optimizar tu sitio o aplicación.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Características</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Auditoría técnica completa</li>
              <li>Optimización de velocidad y rendimiento</li>
              <li>Estrategia SEO (palabras clave, contenido)</li>
              <li>Mejora de conversión (CRO)</li>
              <li>Informes detallados y seguimiento</li>
            </ul>
            <div className="mt-8">
              <a href="/contacto" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition">Solicita tu presupuesto</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="bg-primary-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-400 text-6xl">📈</span>
            </div>
            <p className="text-gray-500 text-sm text-center">(Imagen ilustrativa de análisis y optimización)</p>
          </div>
        </div>
      </div>
    </main>
  );
}