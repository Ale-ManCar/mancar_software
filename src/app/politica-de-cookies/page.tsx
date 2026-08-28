import type { Metadata } from 'next';
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
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="content-panel">
          <p className="section-kicker">Cookies</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">Política de cookies</h1>
          <p className="mt-5 leading-7 text-gray-600">
            En Mancar Software usamos cookies y tecnologías similares con un enfoque limitado: funcionamiento del sitio, seguridad del formulario y medición si el visitante lo permite.
          </p>
          <div className="mt-8 space-y-6">
            {sections.map(([title, text]) => (
              <section key={title} className="border-t border-gray-100 pt-5">
                <h2 className="text-xl font-bold text-gray-950">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{text}</p>
              </section>
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
        </div>
      </section>
    </main>
  );
}
