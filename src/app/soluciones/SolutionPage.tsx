import Image from 'next/image';
import Link from 'next/link';
import FaqSection from '../components/FaqSection';

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
            <p className="section-kicker">{kicker}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
            <p className="mt-4 text-lg leading-8 text-gray-600">{secondary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="btn-primary w-full sm:w-auto">
                Solicitar orientación
              </Link>
              <Link href="/casos" className="btn-secondary w-full sm:w-auto">
                Ver proyectos
              </Link>
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
                <p className="section-kicker">Problemas que resolvemos</p>
                <h2 className="mt-4 text-2xl font-bold text-gray-950">Señales de que tu negocio necesita esta solución.</h2>
                <ul className="mt-6 space-y-3">
                  {problems.map((problem) => (
                    <li key={problem} className="flex gap-3 text-gray-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary-400" />
                      <span className="leading-7">{problem}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {deliverables.length > 0 && (
              <article className="soft-card p-7">
                <p className="section-kicker">Entregables</p>
                <h2 className="mt-4 text-2xl font-bold text-gray-950">Qué puedes esperar al finalizar.</h2>
                <ul className="mt-6 space-y-3">
                  {deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-gray-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                      <span className="leading-7">{deliverable}</span>
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
          <p className="section-kicker">{kicker}</p>
          <h2 className="section-title">Alcance de trabajo</h2>
          <p className="section-copy">Estos son los componentes que trabajamos según el tipo de proyecto, siempre ajustados al contexto real de tu empresa.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="soft-card p-6">
              <h2 className="text-lg font-bold text-gray-950">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
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
