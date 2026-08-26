import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TrackedLink from '../../components/TrackedLink';
import { type SuccessCase, successCases } from '../../cases';
import { createPageMetadata } from '../../seo';

type Props = { params: Promise<{ slug: string }> };

function CaseLogoHero({ currentCase }: { currentCase: SuccessCase }) {
  return (
    <div
      className="relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-100 p-8 shadow-2xl shadow-gray-950/10 md:min-h-[420px]"
      style={{ background: currentCase.brand.background }}
    >
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-15"
        style={{ background: currentCase.brand.accent }}
      />
      <div
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-10"
        style={{ background: currentCase.brand.accent }}
      />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span
            className="rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em]"
            style={{ color: currentCase.brand.foreground }}
          >
            {currentCase.category}
          </span>
          <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-extrabold text-gray-500">
            {currentCase.liveUrl ? 'Demo online' : 'Caso privado'}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.75rem] text-3xl font-extrabold shadow-2xl shadow-black/15"
            style={{ background: currentCase.brand.accent, color: 'white' }}
            aria-hidden="true"
          >
            {currentCase.icon}
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em]" style={{ color: currentCase.brand.accent }}>
              Mancar Software
            </p>
            <p className="mt-3 font-display text-4xl font-extrabold md:text-5xl" style={{ color: currentCase.brand.foreground }}>
              {currentCase.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentCase = successCases.find((c) => c.slug === slug);
  if (!currentCase) return { title: 'Caso no encontrado | Mancar Software' };

  return createPageMetadata({
    title: `${currentCase.title} | Caso de referencia`,
    browserTitle: currentCase.title,
    description: currentCase.summary,
    path: `/casos/${currentCase.slug}`,
    type: 'article',
  });
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
        <Link href="/casos" className="inline-flex min-h-11 items-center rounded-full border border-primary-100 bg-white px-4 font-semibold text-primary-700 hover:text-primary-900">Atrás</Link>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Caso de referencia · {currentCase.category}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">{currentCase.title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{currentCase.summary}</p>
            {currentCase.liveUrl && (
              <TrackedLink
                href={currentCase.liveUrl}
                eventName="case_demo_open"
                eventPayload={{ case: currentCase.slug, location: "case-detail" }}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-gray-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Ver demo online
              </TrackedLink>
            )}
          </div>
          <CaseLogoHero currentCase={currentCase} />
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
            ['Impacto para el negocio', currentCase.businessImpact],
          ].map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
          <article className="soft-card p-7 lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker">Evidencia</p>
                <h2 className="mt-4 text-2xl font-bold text-gray-950">Qué demuestra este proyecto</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Este caso resume decisiones de diseño, arquitectura y operación aplicadas a un contexto real de negocio.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {currentCase.results.map((result) => (
                  <li key={result} className="rounded-2xl border border-primary-100 bg-primary-50 p-4 text-sm font-semibold leading-6 text-primary-900">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="rounded-3xl bg-gray-950 p-7 text-white lg:col-span-2">
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary-200">Siguiente paso</p>
            <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold">¿Quieres una solución con este nivel de claridad?</h2>
                <p className="mt-3 leading-7 text-gray-300">
                  Cuéntanos qué proceso quieres mejorar y te ayudamos a definir alcance, prioridades y una ruta realista de implementación.
                </p>
              </div>
              <TrackedLink
                href="/contacto"
                eventName="contact_cta_click"
                eventPayload={{ location: "case-detail", case: currentCase.slug }}
                className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-gray-950 transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Cotizar una solución similar
              </TrackedLink>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
