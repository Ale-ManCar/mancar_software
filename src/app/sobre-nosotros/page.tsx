import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Sobre nosotros | Equipo y valores',
  description:
    'Conoce al equipo de Mancar Software, nuestra forma de trabajo y los valores con los que desarrollamos sitios web, sistemas y soporte para pymes en Ecuador.',
  path: '/sobre-nosotros',
});

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
    name: 'Equipo Backend Mancar',
    role: 'Desarrollo Backend y Automatización',
    initials: 'MB',
    description: 'Construye servicios confiables para que cada sistema sea seguro, ordenado y fácil de mantener a largo plazo.',
    strengths: ['APIs', 'Bases de datos', 'Seguridad', 'Automatización']
  }
];

export default function SobreNosotrosPage() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="page-hero grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Sobre nosotros</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">
              Tecnología con criterio, cercanía y responsabilidad.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En <strong>Mancar Software</strong> ayudamos a pymes de Ecuador a convertir ideas y procesos en soluciones digitales claras, mantenibles y orientadas a resultados.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Trabajamos con comunicación directa, entregas por etapas y decisiones técnicas explicadas sin complicar lo necesario.
            </p>
          </div>
          <div className="image-frame bg-gray-950">
            <div className="relative h-80 md:h-[420px]">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85" alt="Equipo colaborando en una planificación digital" fill className="object-cover opacity-80" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-7 text-white">
              <h2 className="text-2xl font-bold">Datos que nos respaldan</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div><div className="text-4xl font-extrabold text-primary-200">+2</div><div className="mt-1 text-sm text-gray-300">años de experiencia</div></div>
                <div><div className="text-4xl font-extrabold text-primary-200">+15</div><div className="mt-1 text-sm text-gray-300">proyectos entregados</div></div>
                <div><div className="text-4xl font-extrabold text-primary-200">100%</div><div className="mt-1 text-sm text-gray-300">atención personalizada</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 pb-16 md:grid-cols-4 md:pb-20">
          {[
            ['Cercanía', 'Escuchamos antes de proponer.'],
            ['Transparencia', 'Hablamos claro sobre alcance, tiempos y prioridades.'],
            ['Compromiso', 'Nos involucramos como aliados del proyecto.'],
            ['Calidad', 'Cuidamos diseño, rendimiento, seguridad y mantenimiento.'],
          ].map(([title, text]) => (
              <article key={title} className="soft-card p-6">
                <h2 className="text-lg font-bold text-gray-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
            </article>
          ))}
        </section>

        <section id="equipo" className="scroll-mt-24 border-t border-gray-200 py-16 md:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker mx-auto">Equipo</p>
            <h2 className="section-title">Nuestro equipo de desarrolladores</h2>
            <p className="section-copy">
              Personas cercanas, criterio técnico y comunicación clara para construir soluciones confiables desde el primer contacto.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={`${member.name}-${member.role}`} className="soft-card p-7">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    width={108}
                    height={108}
                    className={`mb-6 h-28 w-28 rounded-full border border-primary-100 object-cover ${member.imagePosition}`}
                  />
                ) : (
                  <div role="img" aria-label={`Placeholder de foto de ${member.name}`} className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary-100 text-2xl font-extrabold text-primary-700">
                    {member.initials}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-950">{member.name}</h3>
                <p className="mt-1 font-semibold text-primary-700">{member.role}</p>
                <p className="mt-5 leading-7 text-gray-600">{member.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Fortalezas de ${member.name}`}>
                  {member.strengths.map((strength) => (
                    <li key={strength} className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
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
