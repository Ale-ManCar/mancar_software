export default function SobreNosotrosPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre nosotros</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              En <strong>Mancar Software</strong> somos un equipo pequeño pero apasionado por la tecnología. 
              Creemos que las soluciones digitales deben ser accesibles, funcionales y hechas a la medida de cada negocio.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestra misión es ayudarte a crecer mediante herramientas tecnológicas que simplifiquen tus procesos y potencien tu presencia digital.
            </p>
            <p className="text-gray-600 mb-4">
              Trabajamos con metodologías ágiles y comunicación directa. Cada proyecto recibe la misma dedicación, sin importar el tamaño.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Nuestros valores</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li><strong>Cercanía:</strong> Estamos siempre disponibles para escucharte.</li>
              <li><strong>Transparencia:</strong> Comunicación clara y honesta.</li>
              <li><strong>Compromiso:</strong> Nos involucramos como si fuera nuestro propio proyecto.</li>
              <li><strong>Calidad:</strong> Buscamos la excelencia en cada detalle.</li>
            </ul>
          </div>
          <div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">📊 Datos que nos respaldan</h3>
              <div className="flex justify-between mt-4">
                <div><div className="text-3xl font-bold text-primary-600">+2</div><div className="text-gray-500">años de experiencia</div></div>
                <div><div className="text-3xl font-bold text-primary-600">+15</div><div className="text-gray-500">proyectos entregados</div></div>
                <div><div className="text-3xl font-bold text-primary-600">100%</div><div className="text-gray-500">atención personalizada</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}