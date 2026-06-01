export default function ContactoPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <section className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Contacto</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">Conversemos sobre tu proyecto</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cuéntanos qué necesitas mejorar, automatizar o vender mejor. Te responderemos con una orientación clara y aterrizada para tu negocio en Ecuador.
          </p>
        </section>
        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card bg-gray-950 p-8 text-white">
            <h2 className="text-2xl font-bold">Canales directos</h2>
            <div className="mt-8 space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white">Atención</h3>
                <p className="mt-1">Atención remota para pymes en Ecuador, con coordinación directa desde Guayaquil.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Teléfono y WhatsApp</h3>
                <p className="mt-1">+593 98 695 1419</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-1">contacto@mancarsoftware.com</p>
              </div>
            </div>
            <a href="https://wa.me/593986951419" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-gray-950 transition hover:bg-primary-100">
              Hablemos por WhatsApp
            </a>
          </div>
          <div className="soft-card p-8">
            <h2 className="text-2xl font-bold text-gray-950">Envíanos un mensaje</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">Nombre</label>
                <input type="text" id="nombre" className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700">Mensaje</label>
                <textarea id="mensaje" rows={4} className="mt-1 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Cuéntanos qué quieres construir o mejorar"></textarea>
              </div>
              <button type="submit" className="w-full rounded-full bg-gray-950 px-5 py-3 font-semibold text-white transition hover:bg-primary-800">Enviar mensaje</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
