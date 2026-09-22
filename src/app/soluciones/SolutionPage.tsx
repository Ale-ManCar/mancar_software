import Text from "../i18n/Text";
import Image from "../i18n/LocalizedImage";
import Link from 'next/link';
import FaqSection from '../components/FaqSection';
import TrackedLink from '../components/TrackedLink';

type TextItem = {
  title: string;
  description: string;
};

type SolutionPageProps = {
  kicker: string;
  title: string;
  description: string;
  secondary: string;
  image: string;
  imageAlt: string;
  problems?: string[];
  deliverables?: string[];
  features: TextItem[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export default function SolutionPage({
  kicker,
  title,
  description,
  secondary,
  image,
  imageAlt,
  problems = [],
  deliverables = [],
  features,
  faqs = [],
}: SolutionPageProps) {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="section-kicker"><Text>{kicker}</Text></p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl"><Text>{title}</Text></h1>
            <p className="mt-6 text-lg leading-8 text-gray-600"><Text>{description}</Text></p>
            <p className="mt-4 text-lg leading-8 text-gray-600"><Text>{secondary}</Text></p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contacto"
                eventName="contact_cta_click"
                eventPayload={{ location: 'solution-hero', solution: kicker }}
                className="btn-primary w-full sm:w-auto"
              ><Text>
                Cotizar mi proyecto
              </Text></TrackedLink>
              <Link href="/casos" className="btn-secondary w-full sm:w-auto"><Text>
                Ver proyectos
              </Text></Link>
            </div>
          </div>
          <div className="image-frame h-[320px] md:h-[470px]">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/42 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      {(problems.length > 0 || deliverables.length > 0) && (
        <section className="container mx-auto px-4 pb-16 md:pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {problems.length > 0 && (
              <article className="soft-card p-7">
                <p className="section-kicker"><Text>Problemas que resolvemos</Text></p>
                <h2 className="mt-4 text-2xl font-bold text-gray-950"><Text>Señales de que tu negocio necesita esta solución.</Text></h2>
                <ul className="mt-6 space-y-3">
                  {problems.map((problem) => (
                    <li key={problem} className="flex gap-3 text-gray-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary-400" />
                      <span className="leading-7"><Text>{problem}</Text></span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {deliverables.length > 0 && (
              <article className="soft-card p-7">
                <p className="section-kicker"><Text>Entregables</Text></p>
                <h2 className="mt-4 text-2xl font-bold text-gray-950"><Text>Qué puedes esperar al finalizar.</Text></h2>
                <ul className="mt-6 space-y-3">
                  {deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-gray-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                      <span className="leading-7"><Text>{deliverable}</Text></span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </section>
      )}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker"><Text>{kicker}</Text></p>
          <h2 className="section-title"><Text>Alcance de trabajo</Text></h2>
          <p className="section-copy"><Text>Estos son los componentes que trabajamos según el tipo de proyecto, siempre ajustados al contexto real de tu empresa.</Text></p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="soft-card p-6">
              <h2 className="text-lg font-bold text-gray-950"><Text>{feature.title}</Text></h2>
              <p className="mt-3 text-sm leading-6 text-gray-600"><Text>{feature.description}</Text></p>
            </article>
          ))}
        </div>
      </section>
      {faqs.length > 0 && (
        <FaqSection
          kicker={kicker}
          title="Preguntas frecuentes sobre esta solución."
          description="Aclaramos alcance, tiempos y decisiones frecuentes antes de iniciar una propuesta."
          items={faqs}
        />
      )}
    </main>
  );
}
