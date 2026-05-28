export default function SoportePage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Soporte técnico</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Si tu sitio, tienda o sistema necesita atención, te ayudamos a diagnosticar el problema y definir el siguiente paso con claridad. Atendemos a pymes de Ecuador con soporte directo y ordenado.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soporte por teléfono</h2>
            <p className="text-gray-600">+593 98 695 1419</p>
            <p className="text-gray-500 text-sm">Lunes a viernes, 9:00 a 18:00</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">WhatsApp</h2>
            <a href="https://wa.me/593986951419" className="text-green-600 hover:underline">+593 98 695 1419</a>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Correo electrónico</h2>
            <p className="text-gray-600">soporte@mancarsoftware.com</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preguntas frecuentes</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li><strong>¿Cuánto tarda un desarrollo web?</strong> Depende del alcance, pero un sitio corporativo suele tomar entre 2 y 4 semanas.</li>
              <li><strong>¿Ofrecen mantenimiento después de entregar?</strong> Sí. Podemos acompañarte con mejoras, seguridad, respaldo y soporte continuo.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
