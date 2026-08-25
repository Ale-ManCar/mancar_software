import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { successCases } from '../../cases';

type Props = { params: Promise<{ slug: string }> };

const caseImages: Record<string, string> = {
  'diseno-web-corporativo': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85',
  'sistema-gestion-a-medida': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  'mantenimiento-soporte-continuo': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentCase = successCases.find((c) => c.slug === slug);
  if (!currentCase) return { title: 'Caso no encontrado | Mancar Software' };

  return {
    title: `${currentCase.title} | Caso de referencia | Mancar Software`,
    description: currentCase.summary,
    openGraph: {
      title: `${currentCase.title} | Caso de referencia`,
      description: currentCase.summary,
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return successCases.map((c) => ({ slug: c.slug }));
}

export default async function CasoPage({ params }: Props) {
  const { slug } = await params;
  const currentCase = successCases.find((c) => c.slug === slug);
  if (!currentCase) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <Link href="/" className="font-semibold text-primary-700 hover:text-primary-900">Volver al inicio</Link>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Caso de referencia · {currentCase.category}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">{currentCase.title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{currentCase.summary}</p>
          </div>
          <div className="image-frame h-[320px] md:h-[420px]">
            <Image src={caseImages[currentCase.slug]} alt={`Imagen del caso ${currentCase.title}`} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {currentCase.kpis.map((kpi) => (
            <div key={kpi.label} className="soft-card p-6 text-center">
              <div className="font-display text-3xl font-extrabold text-primary-700">{kpi.value}</div>
              <div className="mt-1 text-sm text-gray-500">{kpi.label}</div>
            </div>
          ))}
          <div className="soft-card p-6 text-center">
            <div className="font-display text-3xl font-extrabold text-primary-700">{currentCase.timeline}</div>
            <div className="mt-1 text-sm text-gray-500">Tiempo típico</div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 pb-16 md:pb-20 lg:grid-cols-2">
          {[
            ['Perfil del cliente', currentCase.clientProfile],
            ['Desafío', currentCase.challenge],
            ['Solución implementada', currentCase.solution],
          ].map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
          <article className="soft-card p-7 lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-950">Resultados</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {currentCase.results.map((result) => <li key={result} className="rounded-2xl bg-primary-50 p-4 font-medium text-primary-900">{result}</li>)}
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
