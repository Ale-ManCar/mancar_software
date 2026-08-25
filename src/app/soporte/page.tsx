const supportCards = [
  ['Sitio caído o lento', 'Revisamos disponibilidad, errores visibles, hosting y configuración básica.'],
  ['Errores en formularios', 'Validamos envíos, WhatsApp, correos y datos que llegan incompletos.'],
  ['Actualizaciones y seguridad', 'Aplicamos mejoras, copias de seguridad y prevención de incidencias.'],
  ['Mejoras pequeñas', 'Ajustamos textos, secciones, estilos, contenido o funcionalidades puntuales.'],
];

export default function SoportePage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Soporte</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">Soporte técnico claro y directo.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Si tu sitio, tienda o sistema necesita atención, te ayudamos a diagnosticar el problema y definir el siguiente paso con claridad.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="soft-card p-6">
            <h2 className="text-xl font-bold text-gray-950">Teléfono</h2>
            <p className="mt-4 text-gray-600">+593 98 695 1419</p>
            <p className="mt-1 text-sm text-gray-500">Lunes a viernes, 9:00 a 18:00</p>
          </div>
          <div className="soft-card p-6">
            <h2 className="text-xl font-bold text-gray-950">WhatsApp</h2>
            <p className="mt-4 font-bold text-primary-700">+593 98 695 1419</p>
          </div>
          <div className="soft-card p-6">
            <h2 className="text-xl font-bold text-gray-950">Correo</h2>
            <p className="mt-4 text-gray-600">soporte@mancarsoftware.com</p>
          </div>
          <div className="soft-card p-6">
            <h2 className="text-xl font-bold text-gray-950">Respuesta</h2>
            <p className="mt-4 text-gray-600">Priorizamos incidentes que afectan ventas, formularios o disponibilidad.</p>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Casos comunes</p>
          <h2 className="section-title">Te ayudamos a recuperar estabilidad.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {supportCards.map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
