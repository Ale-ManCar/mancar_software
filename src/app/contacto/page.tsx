export default function ContactoPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hacemos de la tecnología una herramienta sencilla y efectiva para tu negocio.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📍 Oficinas</h3>
                <p className="text-gray-600">Av. Principal #123, Oficina 5<br />Quito, Ecuador</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📞 Teléfono</h3>
                <p className="text-gray-600">+593 (9) 1234-5678</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">✉️ Email</h3>
                <p className="text-gray-600">contacto@mancarsoftware.com</p>
              </div>
              <div>
                <a href="https://wa.me/593912345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition">💬 ¡Hablemos por WhatsApp!</a>
              </div>
            </div>
          </div>
          {/* Formulario */}
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
                <textarea id="mensaje" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition">Enviar mensaje</button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">(Demostración – próximamente funcional)</p>
          </div>
        </div>
      </div>
    </main>
  );
}