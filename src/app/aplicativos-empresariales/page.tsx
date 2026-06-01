import Image from 'next/image';
import Link from 'next/link';

const features = [
  ['Gestión de inventarios', 'Control de stock, alertas de reposición, movimientos y reportes para tomar decisiones sin depender de hojas sueltas.'],
  ['CRM a medida', 'Seguimiento de clientes, historial de interacciones, oportunidades y tareas comerciales en un solo lugar.'],
  ['Business Intelligence', 'Dashboards claros para entender ventas, operación, rendimiento y puntos de mejora.'],
  ['Facturación electrónica', 'Integraciones y flujos preparados para operar de forma más ordenada con procesos locales.'],
];

export default function AplicativosPage() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">Aplicativos empresariales</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-950 md:text-6xl">Sistemas internos que ordenan tu negocio.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Diseñamos software personalizado para que tu operación gane control, reduzca errores y deje de depender de procesos manuales difíciles de escalar.
          </p>
          <Link href="/contacto" className="mt-8 inline-flex rounded-full bg-gray-950 px-7 py-3 font-semibold text-white transition hover:bg-primary-800">
            Solicitar diagnóstico
          </Link>
        </div>
        <div className="relative h-[460px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/12">
          <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85" alt="Dashboard empresarial con datos de gestión" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map(([title, text]) => (
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
