import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Política de seguridad',
  browserTitle: 'Seguridad',
  description:
    'Conoce el enfoque de seguridad de Mancar Software para proteger información, accesos y continuidad operativa en proyectos digitales.',
  path: '/politica-de-seguridad',
});

const principles = [
  ['Confidencialidad', 'Solo las personas autorizadas acceden a la información necesaria para operar el proyecto.'],
  ['Integridad', 'Cuidamos que los datos no sean alterados de forma no autorizada.'],
  ['Disponibilidad', 'Trabajamos para que los sistemas y la información estén disponibles cuando el negocio los necesita.'],
  ['Prevención de abuso', 'Usamos validación, controles anti-spam y revisión de solicitudes para reducir envíos automatizados o maliciosos.'],
  ['Gestión de accesos', 'Recomendamos separar credenciales, limitar permisos y evitar compartir secretos por canales inseguros.'],
  ['Mejora continua', 'Revisamos riesgos técnicos durante el mantenimiento para corregir problemas antes de que afecten al negocio.'],
];

export default function PoliticaSeguridadPage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Seguridad</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">Protección de información desde el diseño.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La seguridad no es un extra. En cada solución buscamos proteger datos, accesos y continuidad operativa con medidas técnicas y organizativas razonables.
            </p>
          </div>
          <div className="image-frame h-[320px] md:h-[430px]">
            <Image src="https://idataprotection.es/wp-content/uploads/2022/05/Proteccion-datos_1680143202_157553914_1200x675.png" alt="Protección de datos e infraestructura de seguridad digital" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
