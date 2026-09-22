import Text from "../i18n/Text";
import LabeledRegion from "../i18n/LabeledRegion";
import type { Metadata } from "next";
import Image from "../i18n/LocalizedImage";
import TrackedLink from "../components/TrackedLink";
import { publicAsset } from "../asset-paths";
import { type SuccessCase, successCases } from "../cases";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portafolio de proyectos",
  browserTitle: "Portafolio",
  description:
    "Casos reales de Mancar Software: sistemas locales, sitios web comerciales, plantillas y soluciones digitales para negocios en crecimiento.",
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
      <div className="relative flex min-h-32 flex-col justify-center gap-3">
        <div className="relative h-24 w-full">
          <Image
            src={publicAsset(successCase.logo.src)}
            alt={successCase.logo.alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 82vw"
          />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: successCase.brand.accent }}>
            <Text>{successCase.category}</Text>
          </p>
          <p className="mt-1 font-display text-2xl font-extrabold" style={{ color: successCase.brand.foreground }}>
            <Text>{successCase.title}</Text>
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
          <p className="section-kicker mx-auto"><Text>Portafolio</Text></p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl"><Text>
            Proyectos que convierten ideas en herramientas de negocio.
          </Text></h1>
          <p className="mt-6 text-lg leading-8 text-gray-600"><Text>
            Conoce cómo abordamos sitios web, sistemas internos y soluciones digitales pensadas para mejorar la operación, fortalecer la marca y facilitar el contacto con nuevos clientes.
          </Text></p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {successCases.map((successCase) => (
            <article key={successCase.slug} className="soft-card flex h-full flex-col p-6">
              <CaseLogoPanel successCase={successCase} />
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-extrabold text-primary-700"><Text>{successCase.category}</Text></p>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-extrabold text-gray-500">
                  <Text>{successCase.liveUrl ? "Demo" : "Caso"}</Text>
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-950"><Text>{successCase.title}</Text></h2>
              <p className="mt-3 text-sm leading-6 text-gray-600"><Text>{successCase.summary}</Text></p>
              <LabeledRegion as="ul" className="mt-5 space-y-2 border-t border-gray-100 pt-5" label="Evidencia del caso" name={successCase.title}>
                {successCase.results.slice(0, 2).map((result) => (
                  <li key={result} className="flex gap-2 text-sm leading-6 text-gray-600">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary-400" />
                    <span><Text>{result}</Text></span>
                  </li>
                ))}
              </LabeledRegion>
              <div className="mt-5 flex flex-wrap gap-2">
                {successCase.technologies.slice(0, 4).map((technology) => (
                  <span key={technology} className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                    <Text>{technology}</Text>
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <TrackedLink
                  href={`/casos/${successCase.slug}`}
                  eventName="case_open"
                  eventPayload={{ case: successCase.slug, location: "portfolio-grid" }}
                  className="inline-flex w-full justify-center rounded-full bg-gray-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                ><Text>
                  Ver caso completo
                </Text></TrackedLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
