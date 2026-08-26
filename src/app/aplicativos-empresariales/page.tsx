import type { Metadata } from 'next';
import Image from 'next/image';
import FaqSection from '../components/FaqSection';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Aplicativos empresariales para pymes en Ecuador',
  description:
    'Desarrollamos sistemas internos, inventarios, CRM, dashboards y aplicaciones empresariales a medida para que las pymes operen con más control.',
  path: '/aplicativos-empresariales',
});

const features = [
  ['Inventarios', 'Control de stock, movimientos, alertas de reposición y reportes para dejar atrás hojas sueltas.'],
  ['CRM comercial', 'Seguimiento de clientes, historial de interacciones, oportunidades y tareas en un solo lugar.'],
  ['Dashboards', 'Indicadores claros para entender ventas, operación, rendimiento y puntos de mejora.'],
  ['Facturación y procesos', 'Integraciones y flujos preparados para operar de forma más ordenada con procesos locales.'],
];

const outcomes = [
  'Menos errores manuales',
  'Más control de información',
  'Procesos visibles para el equipo',
  'Reportes para tomar decisiones',
];

const appFaqs = [
  {
    question: '¿Qué tipo de aplicativo puede necesitar una pyme?',
    answer:
      'Puede ser un inventario, CRM, panel de pedidos, dashboard, sistema de turnos, control interno o una herramienta conectada a procesos propios del negocio.',
  },
  {
    question: '¿Se puede reemplazar una hoja de cálculo por un sistema?',
    answer:
      'Sí, cuando la hoja ya genera errores, duplicidad o falta de control. Primero revisamos el flujo actual y luego definimos los módulos necesarios.',
  },
  {
    question: '¿El equipo necesita conocimientos técnicos para usarlo?',
    answer:
      'No debería. Diseñamos interfaces claras y capacitamos al equipo para que la adopción sea ordenada y práctica.',
  },
];

export default function AplicativosPage() {
  return (
    <main className="bg-gray-50">
      <section className="page-hero container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">Aplicativos empresariales</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">
              Sistemas internos para operar con más control.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Diseñamos software personalizado para que tu empresa reduzca trabajo manual, centralice información y tenga procesos más fáciles de seguir.
            </p>
          </div>
          <div className="image-frame h-[340px] md:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
              alt="Dashboard empresarial con datos de gestión"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Módulos frecuentes</p>
          <h2 className="section-title">Aplicaciones pensadas para tareas reales.</h2>
          <p className="section-copy">Partimos de tu proceso actual y diseñamos módulos que tu equipo pueda adoptar sin fricción.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map(([title, text]) => (
            <article key={title} className="soft-card p-7">
              <h2 className="text-2xl font-bold text-gray-950">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-950">Impacto esperado</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <li key={item} className="rounded-2xl bg-gray-50 p-4 font-semibold text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <FaqSection
        kicker="Aplicativos empresariales"
        title="Preguntas frecuentes sobre sistemas internos."
        description="Aclaramos dudas frecuentes antes de transformar procesos manuales en herramientas digitales."
        items={appFaqs}
      />
    </main>
  );
}
