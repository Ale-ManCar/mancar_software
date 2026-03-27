export default function SoportePage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Soporte Técnico</h1>
        <p className="text-gray-600 mb-8">
          ¿Tienes algún problema o duda? Estamos aquí para ayudarte. Contáctanos a través de los siguientes canales.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📞 Soporte por teléfono</h2>
            <p className="text-gray-600">+593 (9) 1234-5678</p>
            <p className="text-gray-500 text-sm">Lunes a viernes, 9am – 6pm</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💬 WhatsApp</h2>
            <a href="https://wa.me/593912345678" className="text-green-600 hover:underline">+593 (9) 1234-5678</a>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">✉️ Correo electrónico</h2>
            <p className="text-gray-600">soporte@mancarsoftware.com</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">❓ Preguntas frecuentes</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li><strong>¿Cuánto tarda un desarrollo web?</strong> Depende de la complejidad, generalmente entre 2 y 6 semanas.</li>
              <li><strong>¿Ofrecen mantenimiento después de entregar?</strong> Sí, contamos con planes de soporte continuo.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}