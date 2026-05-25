import Link from 'next/link';
import { notFound } from 'next/navigation';
import { successCases } from '../../cases';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return successCases.map((c) => ({ slug: c.slug }));
}

export default async function CasoPage({ params }: Props) {
  const { slug } = await params;
  const currentCase = successCases.find((c) => c.slug === slug);
  if (!currentCase) return notFound();

  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <section className="container mx-auto px-4 max-w-4xl bg-white rounded-xl shadow-md p-8">
        <Link href="/" className="text-primary-700 hover:text-primary-800 font-medium">← Volver al inicio</Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-3">{currentCase.icon} {currentCase.title}</h1>
        <p className="text-gray-600 mb-8">{currentCase.summary}</p>

        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {currentCase.kpis.map((kpi) => (
            <div key={kpi.label} className="bg-primary-50 border border-primary-100 rounded-lg p-4 text-center">
              <div className="text-primary-700 text-xl font-bold">{kpi.value}</div>
              <div className="text-gray-600 text-sm">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-gray-700">
          <div><h2 className="font-semibold text-gray-800">Perfil del cliente</h2><p>{currentCase.clientProfile}</p></div>
          <div><h2 className="font-semibold text-gray-800">Desafío</h2><p>{currentCase.challenge}</p></div>
          <div><h2 className="font-semibold text-gray-800">Solución implementada</h2><p>{currentCase.solution}</p></div>
          <div>
            <h2 className="font-semibold text-gray-800">Resultados</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">{currentCase.results.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </div>
      </section>
    </main>
  );
}
