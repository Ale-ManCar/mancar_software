import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Política de privacidad',
  browserTitle: 'Privacidad',
  description:
    'Consulta cómo Mancar Software recopila, usa, protege y conserva los datos personales enviados mediante el sitio web.',
  path: '/politica-de-privacidad',
});

const sections = [
  ['Datos que recopilamos', 'Podemos recopilar datos de contacto, información de navegación y mensajes enviados mediante el formulario de contacto.'],
  ['Uso de la información', 'Usamos la información para responder consultas, mejorar servicios, brindar soporte, medir el rendimiento del sitio y realizar análisis estadísticos.'],
  ['Servicios externos', 'Podemos usar proveedores como Resend para enviar solicitudes de contacto, Cloudflare Turnstile para prevenir spam y herramientas de analítica configuradas por Mancar Software. Estos servicios procesan únicamente la información necesaria para cumplir esa finalidad.'],
  ['Cookies y medición del sitio', 'Podemos medir visitas, clics en canales de contacto, apertura de casos y uso del formulario para mejorar la experiencia y entender qué información resulta más útil. La analítica se carga únicamente cuando el visitante acepta el uso correspondiente desde el aviso de cookies.'],
  ['Conservación y seguridad', 'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos y conservarlos solo durante el tiempo necesario.'],
  ['Tus derechos', 'Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a mancarsoftwares@gmail.com.'],
];

export default function PoliticaPrivacidadPage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Privacidad</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">Datos personales tratados con responsabilidad.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En Mancar Software protegemos la información personal de usuarios y clientes con un enfoque claro, limitado y transparente.
            </p>
          </div>
          <div className="image-frame h-[320px] md:h-[430px]">
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85" alt="Privacidad y protección de información digital" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">Última actualización: 26 de agosto de 2026.</p>
      </section>
    </main>
  );
}
