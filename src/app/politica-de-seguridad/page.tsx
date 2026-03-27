export default function PoliticaSeguridadPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Política de seguridad de la información</h1>
        <div className="max-w-3xl">
          <p className="text-gray-600 mb-4">
            En Mancar Software, la seguridad de la información es un pilar fundamental. Nos comprometemos a proteger los datos de nuestros clientes y a garantizar la confidencialidad, integridad y disponibilidad de la información.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Principios clave</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Confidencialidad:</strong> Solo las personas autorizadas tienen acceso a la información.</li>
            <li><strong>Integridad:</strong> Garantizamos que los datos no sean alterados de manera no autorizada.</li>
            <li><strong>Disponibilidad:</strong> Aseguramos que la información esté accesible cuando sea necesaria.</li>
          </ul>
          <p className="text-gray-600 mt-6">
            Implementamos controles técnicos y organizativos para cumplir con estos principios, y revisamos periódicamente nuestras políticas para adaptarnos a las nuevas amenazas.
          </p>
        </div>
      </div>
    </main>
  );
}