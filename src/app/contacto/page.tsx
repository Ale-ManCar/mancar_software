export default function ContactoPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Conversemos sobre tu proyecto</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cuéntanos qué necesitas mejorar, automatizar o vender mejor. Te responderemos con una orientación clara y aterrizada para tu negocio en Ecuador.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Atención</h3>
                <p className="text-gray-600">Atención remota para pymes en Ecuador, con coordinación directa desde Guayaquil.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Teléfono y WhatsApp</h3>
                <p className="text-gray-600">+593 98 695 1419</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">contacto@mancarsoftware.com</p>
              </div>
              <div>
                <a href="https://wa.me/593986951419" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition">
                  Hablemos por WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 mb-1">Nombre</label>
                <input type="text" id="nombre" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-gray-700 mb-1">Mensaje</label>
                <textarea id="mensaje" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Cuéntanos qué quieres construir o mejorar"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition">Enviar mensaje</button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              También puedes escribirnos por WhatsApp si prefieres una respuesta más directa.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
