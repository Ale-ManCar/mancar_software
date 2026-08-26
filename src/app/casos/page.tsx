import type { Metadata } from "next";
import TrackedLink from "../components/TrackedLink";
import { type SuccessCase, successCases } from "../cases";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portafolio de proyectos",
  description:
    "Casos reales de Mancar Software: sistemas locales, sitios web comerciales, plantillas y soluciones digitales para negocios de Ecuador.",
  path: "/casos",
});

function CaseLogoPanel({ successCase }: { successCase: SuccessCase }) {
  return (
    <div
      className="relative mb-5 overflow-hidden rounded-2xl border border-gray-100 p-5"
      style={{ background: successCase.brand.background }}
    >
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15"
        style={{ background: successCase.brand.accent }}
      />
      <div className="relative flex min-h-32 items-center gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold shadow-lg shadow-black/10"
          style={{ background: successCase.brand.accent, color: "white" }}
          aria-hidden="true"
        >
          {successCase.icon}
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: successCase.brand.accent }}>
            {successCase.category}
          </p>
          <p className="mt-2 font-display text-2xl font-extrabold" style={{ color: successCase.brand.foreground }}>
            {successCase.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Portafolio</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">
            Proyectos que convierten ideas en herramientas de negocio.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conoce cómo abordamos sitios web, sistemas internos y soluciones digitales pensadas para mejorar la operación, fortalecer la marca y facilitar el contacto con nuevos clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {successCases.map((successCase) => (
            <article key={successCase.slug} className="soft-card flex h-full flex-col p-6">
              <CaseLogoPanel successCase={successCase} />
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-extrabold text-primary-700">{successCase.category}</p>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-extrabold text-gray-500">
                  {successCase.liveUrl ? "Demo" : "Caso"}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-950">{successCase.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{successCase.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {successCase.technologies.slice(0, 4).map((technology) => (
                  <span key={technology} className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <TrackedLink
                  href={`/casos/${successCase.slug}`}
                  eventName="case_open"
                  eventPayload={{ case: successCase.slug, location: "portfolio-grid" }}
                  className="inline-flex justify-center rounded-full bg-gray-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                >
                  Ver caso completo
                </TrackedLink>
                {successCase.liveUrl && (
                  <TrackedLink
                    href={successCase.liveUrl}
                    eventName="case_demo_open"
                    eventPayload={{ case: successCase.slug, location: "portfolio-grid" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-extrabold text-gray-950 transition hover:border-primary-200 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                  >
                    Ver demo online
                  </TrackedLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
