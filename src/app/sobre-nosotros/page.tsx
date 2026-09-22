import Text from "../i18n/Text";
import LabeledRegion from "../i18n/LabeledRegion";
import type { Metadata } from 'next';
import Image from "../i18n/LocalizedImage";
import FaqSection from '../components/FaqSection';
import { publicAsset } from '../asset-paths';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Sobre nosotros | Equipo y valores',
  browserTitle: 'Sobre nosotros',
  description:
    'Conoce al equipo de Mancar Software, nuestra forma de trabajo y los valores con los que desarrollamos sitios web, sistemas y soporte técnico para negocios en crecimiento.',
  path: '/sobre-nosotros',
});

const teamMembers = [
  {
    name: 'Alejandro Mantilla',
    role: 'Desarrollador Full Stack',
    image: publicAsset('/desarrolladores/alejandro-mantilla.jpeg'),
    imagePosition: 'object-top',
    initials: 'AM',
    description: 'Lidera la construcción de soluciones web completas, cuidando tanto la arquitectura técnica como la experiencia de uso.',
    strengths: ['React', 'Next.js', 'Node.js', 'UI/UX']
  },
  {
    name: 'Jeremy Macias',
    role: 'Desarrollador Frontend',
    image: publicAsset('/desarrolladores/jeremy-macias.jpeg'),
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

const aboutFaqs = [
  {
    question: '¿Quién atiende mi proyecto?',
    answer:
      'Trabajas con un equipo técnico pequeño y directo. Esto facilita decisiones rápidas, comunicación clara y seguimiento cercano.',
  },
  {
    question: '¿Cómo manejan la confidencialidad?',
    answer:
      'Tratamos información, accesos y procesos del cliente con responsabilidad. Solo solicitamos lo necesario para ejecutar el trabajo.',
  },
  {
    question: '¿Qué diferencia a Mancar Software?',
    answer:
      'Combinamos diseño, desarrollo y criterio comercial para crear soluciones útiles para negocios en crecimiento, evitando funciones innecesarias y explicando cada decisión importante.',
  },
];

export default function SobreNosotrosPage() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="page-hero grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker"><Text>Sobre nosotros</Text></p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl"><Text>
              Tecnología con criterio, cercanía y responsabilidad.
            </Text></h1>
            <p className="mt-6 text-lg leading-8 text-gray-600"><Text>
              En </Text><strong><Text>Mancar Software</Text></strong><Text> ayudamos a negocios en crecimiento a convertir ideas y procesos en soluciones digitales claras, mantenibles y orientadas a resultados.
            </Text></p>
            <p className="mt-4 text-lg leading-8 text-gray-600"><Text>
              Trabajamos con comunicación directa, entregas por etapas y decisiones técnicas explicadas sin complicar lo necesario.
            </Text></p>
          </div>
          <div className="image-frame bg-gray-950">
            <div className="relative h-80 md:h-[420px]">
              <Image src="https://www.coforge.com/hubfs/Workplace-Setup.jpg" alt="Espacio de trabajo tecnológico con laptops y monitores" fill className="object-cover opacity-80" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-7 text-white">
              <h2 className="text-2xl font-bold"><Text>Datos que nos respaldan</Text></h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div><div className="text-4xl font-extrabold text-primary-200"><Text>+2</Text></div><div className="mt-1 text-sm text-gray-300"><Text>años de experiencia</Text></div></div>
                <div><div className="text-4xl font-extrabold text-primary-200"><Text>+15</Text></div><div className="mt-1 text-sm text-gray-300"><Text>proyectos entregados</Text></div></div>
                <div><div className="text-4xl font-extrabold text-primary-200"><Text>100%</Text></div><div className="mt-1 text-sm text-gray-300"><Text>atención personalizada</Text></div></div>
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
                <h2 className="text-lg font-bold text-gray-950"><Text>{title}</Text></h2>
                <p className="mt-3 text-sm leading-6 text-gray-600"><Text>{text}</Text></p>
            </article>
          ))}
        </section>

        <section id="equipo" className="scroll-mt-24 border-t border-gray-200 py-16 md:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker mx-auto"><Text>Equipo</Text></p>
            <h2 className="section-title"><Text>Nuestro equipo de desarrolladores</Text></h2>
            <p className="section-copy"><Text>
              Personas cercanas, criterio técnico y comunicación clara para construir soluciones confiables desde el primer contacto.
            </Text></p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={`${member.name}-${member.role}`} className="soft-card p-7">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={108}
                    height={108}
                    className={`mb-6 h-28 w-28 rounded-full border border-primary-100 object-cover ${member.imagePosition}`}
                  />
                ) : (
                  <LabeledRegion as="div" role="img" label="Placeholder de foto de" name={member.name} className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary-100 text-2xl font-extrabold text-primary-700">
                    <Text>{member.initials}</Text>
                  </LabeledRegion>
                )}
                <h3 className="text-2xl font-bold text-gray-950"><Text>{member.name}</Text></h3>
                <p className="mt-1 font-semibold text-primary-700"><Text>{member.role}</Text></p>
                <p className="mt-5 leading-7 text-gray-600"><Text>{member.description}</Text></p>
                <LabeledRegion as="ul" className="mt-6 flex flex-wrap gap-2" label="Fortalezas de" name={member.name}>
                  {member.strengths.map((strength) => (
                    <li key={strength} className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                      <Text>{strength}</Text>
                    </li>
                  ))}
                </LabeledRegion>
              </article>
            ))}
          </div>
        </section>
      </div>
      <FaqSection
        kicker="Confianza"
        title="Preguntas frecuentes sobre nuestro equipo."
        description="Una relación clara desde el inicio hace que el proyecto avance con menos fricción."
        items={aboutFaqs}
      />
    </main>
  );
}
