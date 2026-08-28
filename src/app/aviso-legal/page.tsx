import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Aviso legal y términos de uso',
  browserTitle: 'Aviso legal',
  description:
    'Información legal, términos de uso, responsabilidades, propiedad intelectual y condiciones generales del sitio web de Mancar Software.',
  path: '/aviso-legal',
});

const sections = [
  [
    'Titular del sitio',
    'Este sitio web es operado por Mancar Software para presentar servicios de desarrollo web, sistemas a medida, tiendas virtuales, soporte técnico y consultoría digital para pymes en Ecuador.',
  ],
  [
    'Uso del sitio',
    'El visitante se compromete a usar el sitio de forma lícita, respetuosa y sin intentar afectar su seguridad, disponibilidad, formularios, integraciones o contenido.',
  ],
  [
    'Información comercial',
    'Los textos, precios referenciales, alcances y descripciones publicados tienen finalidad informativa. Una propuesta formal depende del diagnóstico, alcance, tiempos, integraciones y condiciones particulares de cada proyecto.',
  ],
  [
    'Propiedad intelectual',
    'El contenido, diseño, textos, estructura, identidad visual y recursos propios de Mancar Software no pueden copiarse, distribuirse o reutilizarse sin autorización previa. Las marcas o logos de proyectos mostrados pertenecen a sus respectivos titulares.',
  ],
  [
    'Enlaces externos',
    'El sitio puede incluir enlaces a demos, redes sociales, servicios externos o páginas de terceros. Mancar Software no controla el contenido, disponibilidad o prácticas de privacidad de esos sitios externos.',
  ],
  [
    'Formulario de contacto',
    'El envío del formulario no crea una relación contractual automática. La información enviada se usa para responder la solicitud, evaluar necesidades y coordinar una posible propuesta comercial.',
  ],
  [
    'Limitación de responsabilidad',
    'Mancar Software procura mantener la información actualizada y el sitio disponible, pero no garantiza ausencia total de errores, interrupciones o incompatibilidades. El uso del sitio se realiza bajo responsabilidad del visitante.',
  ],
  [
    'Contacto legal',
    'Para consultas legales, privacidad o solicitudes relacionadas con el sitio, puedes escribir a mancarsoftwares@gmail.com.',
  ],
];

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <section className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="image-frame min-h-[320px] lg:min-h-[520px]">
          <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85" alt="Documento legal y acuerdos profesionales" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="content-panel">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">Aviso legal y términos de uso</h1>
          <p className="mt-5 leading-7 text-gray-600">
            Estas condiciones regulan el uso informativo del sitio web de Mancar Software y ayudan a establecer una relación clara entre visitantes, prospectos y la empresa.
          </p>
          <div className="mt-8 space-y-6">
            {sections.map(([title, text]) => (
              <section key={title} className="border-t border-gray-100 pt-5">
                <h2 className="text-xl font-bold text-gray-950">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{text}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">Última actualización: 28 de agosto de 2026.</p>
        </div>
      </section>
    </main>
  );
}
