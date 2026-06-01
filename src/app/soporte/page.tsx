export default function SoportePage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <section className="max-w-3xl">
          <p className="section-kicker">Soporte</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">Soporte técnico claro y directo</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Si tu sitio, tienda o sistema necesita atención, te ayudamos a diagnosticar el problema y definir el siguiente paso con claridad.
          </p>
        </section>
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="soft-card p-7">
            <h2 className="text-2xl font-bold text-gray-950">Teléfono</h2>
            <p className="mt-4 text-gray-600">+593 98 695 1419</p>
            <p className="mt-1 text-sm text-gray-500">Lunes a viernes, 9:00 a 18:00</p>
          </div>
          <div className="soft-card p-7">
            <h2 className="text-2xl font-bold text-gray-950">WhatsApp</h2>
            <a href="https://wa.me/593986951419" className="mt-4 inline-flex text-primary-700 hover:underline">+593 98 695 1419</a>
          </div>
          <div className="soft-card p-7">
            <h2 className="text-2xl font-bold text-gray-950">Correo electrónico</h2>
            <p className="mt-4 text-gray-600">soporte@mancarsoftware.com</p>
          </div>
          <div className="soft-card p-7">
            <h2 className="text-2xl font-bold text-gray-950">Preguntas frecuentes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
              <li><strong>¿Cuánto tarda un desarrollo web?</strong> Un sitio corporativo suele tomar entre 2 y 4 semanas.</li>
              <li><strong>¿Ofrecen mantenimiento?</strong> Sí. Podemos acompañarte con mejoras, seguridad, respaldos y soporte continuo.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
