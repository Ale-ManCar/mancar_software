import Image from 'next/image';

const commitments = [
  ['Integridad', 'Actuamos con honestidad en cada conversación, propuesta y entrega.'],
  ['Confidencialidad', 'Protegemos la información de nuestros clientes como parte central del servicio.'],
  ['Responsabilidad', 'Asumimos decisiones técnicas con criterio y explicamos sus implicaciones.'],
  ['Respeto', 'Construimos relaciones de trabajo claras, colaborativas y profesionales.'],
];

export default function EticaPage() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-kicker">Ética y conducta</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">La confianza también se diseña.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            En Mancar Software trabajamos con principios claros para que cada proyecto avance con honestidad, respeto, responsabilidad y protección de la información.
          </p>
        </div>
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/12">
          <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85" alt="Acuerdo profesional entre colaboradores" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>
      <section className="container mx-auto px-4 pb-20">
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
