export default function EticaPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ética y conducta</h1>
        <div className="max-w-3xl">
          <p className="text-gray-600 mb-4">
            En Mancar Software nos regimos por principios éticos que guían cada una de nuestras acciones. 
            La honestidad, el respeto y la responsabilidad son la base de nuestra relación con clientes, colaboradores y aliados.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Nuestros compromisos</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Integridad:</strong> Actuamos con honestidad en todas nuestras interacciones.</li>
            <li><strong>Confidencialidad:</strong> Protegemos la información de nuestros clientes como si fuera propia.</li>
            <li><strong>Responsabilidad:</strong> Asumimos las consecuencias de nuestras decisiones y trabajamos para mejorar continuamente.</li>
            <li><strong>Respeto:</strong> Valoramos la diversidad y fomentamos un ambiente de trabajo inclusivo.</li>
          </ul>
          <p className="text-gray-600 mt-6">
            Este código de ética es la guía que nos permite construir relaciones duraderas y basadas en la confianza.
          </p>
        </div>
      </div>
    </main>
  );
}