import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Aviso legal',
  browserTitle: 'Aviso legal',
  description:
    'Información legal del sitio web de Mancar Software, condiciones de uso, responsabilidad del contenido y contacto legal.',
  path: '/aviso-legal',
});

const items = [
  'Este sitio web es operado por Mancar Software para informar sobre sus servicios tecnológicos.',
  'El contenido de esta web es informativo y puede actualizarse sin previo aviso.',
  'Se prohíbe la reproducción total o parcial del contenido sin autorización expresa.',
  'Mancar Software no se responsabiliza por daños derivados del uso indebido del sitio o de enlaces externos.',
  'Contacto legal: mancarsoftwares@gmail.com.',
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
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">Aviso legal</h1>
          <div className="mt-8 space-y-4 text-gray-700">
            {items.map((item) => <p key={item} className="leading-7">{item}</p>)}
          </div>
          <p className="mt-8 text-sm text-gray-500">Última actualización: 26 de agosto de 2026.</p>
        </div>
      </section>
    </main>
  );
}
