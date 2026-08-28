import type { Metadata } from 'next';
import Image from 'next/image';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Ética y conducta',
  browserTitle: 'Ética',
  description:
    'Principios de integridad, confidencialidad, responsabilidad y respeto que guían cada proyecto desarrollado por Mancar Software.',
  path: '/etica-y-conducta',
});

const commitments = [
  ['Integridad', 'Actuamos con honestidad en cada conversación, propuesta y entrega.'],
  ['Confidencialidad', 'Protegemos la información de nuestros clientes como parte central del servicio.'],
  ['Responsabilidad', 'Asumimos decisiones técnicas con criterio y explicamos sus implicaciones.'],
  ['Respeto', 'Construimos relaciones de trabajo claras, colaborativas y profesionales.'],
];

export default function EticaPage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="section-kicker">Ética y conducta</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">La confianza también se diseña.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En Mancar Software trabajamos con principios claros para que cada proyecto avance con honestidad, respeto, responsabilidad y protección de la información.
            </p>
          </div>
          <div className="image-frame h-[320px] md:h-[430px]">
            <Image src="https://pub-ad20c03bcf344486bdbcb33e6a5a69dd.r2.dev/article-images/18-panel-workplace-drug-testing-legal-rules-best-featured-44my.png" alt="Documentos y políticas corporativas sobre ética profesional" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {commitments.map(([title, text]) => (
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
