import Image from 'next/image';

type SolutionPageProps = {
  kicker: string;
  title: string;
  description: string;
  secondary: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export default function SolutionPage({ kicker, title, description, secondary, image, imageAlt, features }: SolutionPageProps) {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
            <p className="mt-4 text-lg leading-8 text-gray-600">{secondary}</p>
          </div>
          <div className="image-frame h-[320px] md:h-[470px]">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/42 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">{kicker}</p>
          <h2 className="section-title">Qué incluye esta solución</h2>
          <p className="section-copy">Pensamos cada entrega para que tu negocio pueda usarla con claridad desde el primer lanzamiento.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature} className="soft-card p-6">
              <h2 className="text-lg font-bold text-gray-950">{feature}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">Aplicado con una estructura simple, mantenible y pensada para usuarios reales.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
