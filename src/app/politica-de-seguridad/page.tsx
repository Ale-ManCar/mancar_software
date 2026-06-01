import Image from 'next/image';

const principles = [
  ['Confidencialidad', 'Solo las personas autorizadas acceden a la información necesaria para operar el proyecto.'],
  ['Integridad', 'Cuidamos que los datos no sean alterados de forma no autorizada.'],
  ['Disponibilidad', 'Trabajamos para que los sistemas y la información estén disponibles cuando el negocio los necesita.'],
];

export default function PoliticaSeguridadPage() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">Seguridad</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">Protección de información desde el diseño.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La seguridad no es un extra. En cada solución buscamos proteger datos, accesos y continuidad operativa con medidas técnicas y organizativas razonables.
          </p>
        </div>
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/12">
          <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85" alt="Seguridad digital y protección de datos" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map(([title, text]) => (
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
