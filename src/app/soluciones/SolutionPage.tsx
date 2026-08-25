import Image from 'next/image';
import Link from 'next/link';

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
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">{kicker}</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <p className="mt-4 text-lg leading-8 text-gray-600">{secondary}</p>
          <Link href="/contacto" className="mt-8 inline-flex rounded-full bg-gray-950 px-7 py-3 font-semibold text-white transition hover:bg-primary-800">
            Solicitar diagnóstico gratuito
          </Link>
        </div>
        <div className="relative h-[470px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/12">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature} className="soft-card p-6">
              <h2 className="text-lg font-bold text-gray-950">{feature}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
