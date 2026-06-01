import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alejandro Mantilla',
    role: 'Desarrollador Full Stack',
    image: '/desarrolladores/alejandro-mantilla.jpeg',
    imagePosition: 'object-top',
    initials: 'AM',
    description: 'Lidera la construcción de soluciones web completas, cuidando tanto la arquitectura técnica como la experiencia de uso.',
    strengths: ['React', 'Next.js', 'Node.js', 'UI/UX']
  },
  {
    name: 'Jeremy Macias',
    role: 'Desarrollador Frontend',
    image: '/desarrolladores/jeremy-macias.jpeg',
    imagePosition: 'object-center',
    initials: 'JM',
    description: 'Transforma ideas y flujos de negocio en interfaces claras, accesibles y adaptadas a cualquier dispositivo.',
    strengths: ['React', 'Tailwind CSS', 'Accesibilidad', 'Diseño responsive']
  },
  {
    name: 'Nombre temporal',
    role: 'Desarrollador Backend',
    initials: 'NB',
    description: 'Construye servicios confiables para que cada sistema sea seguro, ordenado y fácil de mantener a largo plazo.',
    strengths: ['APIs', 'Bases de datos', 'Seguridad', 'Automatización']
  }
];

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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Datos que nos respaldan</h3>
              <div className="flex justify-between gap-4 mt-4">
                <div><div className="text-3xl font-bold text-primary-600">+2</div><div className="text-gray-500">años de experiencia</div></div>
                <div><div className="text-3xl font-bold text-primary-600">+15</div><div className="text-gray-500">proyectos entregados</div></div>
                <div><div className="text-3xl font-bold text-primary-600">100%</div><div className="text-gray-500">atención personalizada</div></div>
              </div>
            </div>
          </div>
        </div>

        <section id="equipo" className="mt-16 pt-12 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro equipo de desarrolladores</h2>
            <p className="text-gray-600">
              Personas cercanas, criterio técnico y comunicación clara para construir soluciones confiables desde el primer contacto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article key={`${member.name}-${member.role}`} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    width={96}
                    height={96}
                    className={`w-24 h-24 rounded-full object-cover ${member.imagePosition} mb-5 border border-primary-100`}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Placeholder de foto de ${member.name}`}
                    className="w-24 h-24 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-2xl font-bold mb-5"
                  >
                    {member.initials}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-primary-700 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 mb-5">{member.description}</p>
                <ul className="flex flex-wrap gap-2" aria-label={`Fortalezas de ${member.name}`}>
                  {member.strengths.map((strength) => (
                    <li key={strength} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-100">
                      {strength}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
