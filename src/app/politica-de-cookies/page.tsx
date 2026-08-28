import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Política de cookies',
  browserTitle: 'Cookies',
  description:
    'Información sobre el uso de cookies necesarias, analítica, Cloudflare Turnstile y opciones de consentimiento en el sitio web de Mancar Software.',
  path: '/politica-de-cookies',
});

const sections = [
  [
    'Qué son las cookies',
    'Las cookies son pequeños archivos o identificadores que un sitio puede usar para recordar preferencias, proteger formularios, medir visitas o mejorar la experiencia de navegación.',
  ],
  [
    'Cookies necesarias',
    'Usamos cookies o almacenamiento local necesarios para recordar tu decisión sobre analítica y permitir que el sitio funcione correctamente. Estas no se usan para vender información personal.',
  ],
  [
    'Analítica',
    'Si aceptas el uso de analítica, podemos cargar Google Analytics para conocer visitas, páginas consultadas, interacciones generales y rendimiento del sitio. Configuramos la medición con anonimización de IP cuando está disponible.',
  ],
  [
    'Protección anti-spam',
    'El formulario puede usar Cloudflare Turnstile para diferenciar envíos legítimos de actividad automatizada. Este servicio puede procesar señales técnicas necesarias para la verificación.',
  ],
  [
    'Gestión del consentimiento',
    'Puedes aceptar o rechazar la analítica desde el aviso de cookies. Si deseas cambiar tu decisión, puedes borrar los datos del sitio desde la configuración del navegador y volver a cargar la página.',
  ],
  [
    'Contacto',
    'Para consultas sobre privacidad, cookies o tratamiento de datos, puedes escribir a mancarsoftwares@gmail.com.',
  ],
];

export default function PoliticaCookiesPage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Cookies</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">Medición clara, solo cuando el visitante acepta.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Usamos cookies y tecnologías similares con un enfoque limitado: funcionamiento del sitio, seguridad del formulario y analítica si el visitante lo permite.
            </p>
          </div>
          <div className="image-frame h-[320px] md:h-[430px]">
            <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" alt="Infraestructura digital y medición responsable del sitio" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
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
        <p className="mt-8 text-sm leading-6 text-gray-500">
          Esta política complementa la{' '}
          <Link href="/politica-de-privacidad" className="font-bold text-primary-800 underline underline-offset-2 hover:text-primary-950">
            Política de privacidad
          </Link>
          .
        </p>
        <p className="mt-3 text-sm text-gray-500">Última actualización: 28 de agosto de 2026.</p>
      </section>
    </main>
  );
}
