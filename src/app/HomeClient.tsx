"use client";

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { caseCategories, successCases } from './cases';
import LeadForm from './components/LeadForm';

const heroImage = 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85';

const serviceDetails = [
  {
    title: 'Diseño Web Profesional',
    icon: '01',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Diseñamos sitios web modernos, rápidos y preparados para convertir visitas en contactos. Cuidamos estructura, velocidad, responsive, SEO base y una experiencia visual alineada con tu negocio.',
    features: ['Diseño responsive', 'SEO técnico base', 'Formularios de contacto', 'Integración con redes sociales', 'Contenido fácil de actualizar']
  },
  {
    title: 'Desarrollo de Sistemas a Medida',
    icon: '02',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Construimos sistemas web que ordenan procesos, reducen trabajo manual y centralizan información clave. Cada módulo se diseña alrededor de cómo opera realmente tu empresa.',
    features: ['Aplicaciones web', 'Automatización de procesos', 'Bases de datos', 'Dashboards', 'Capacitación al equipo']
  },
  {
    title: 'Mantenimiento y Soporte Técnico',
    icon: '03',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Mantenemos tu sitio o sistema estable, actualizado y protegido. Atendemos incidencias con comunicación directa y hacemos mejoras continuas para evitar problemas recurrentes.',
    features: ['Actualizaciones de seguridad', 'Corrección de errores', 'Monitoreo preventivo', 'Copias de seguridad', 'Soporte por WhatsApp']
  },
  {
    title: 'Tiendas Virtuales',
    icon: '04',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Creamos tiendas online pensadas para vender: catálogo, carrito, pagos, inventario y una experiencia de compra clara para clientes en Ecuador.',
    features: ['Catálogo de productos', 'Pasarelas de pago', 'Gestión de inventario', 'SEO para productos', 'Panel administrativo']
  },
  {
    title: 'Optimización y Consultoría',
    icon: '05',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Auditamos tu presencia digital y te damos una hoja de ruta concreta para mejorar velocidad, usabilidad, posicionamiento y conversión.',
    features: ['Auditoría técnica', 'Optimización de velocidad', 'Estrategia SEO', 'Mejora de conversión', 'Informes claros']
  },
  {
    title: 'Acompañamiento Continuo',
    icon: '06',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    fullDescription: 'Te acompañamos después del lanzamiento con soporte, ajustes, mejoras incrementales y criterio técnico para tomar mejores decisiones.',
    features: ['Asesoría cercana', 'Respuesta ágil', 'Mejoras continuas', 'Capacitación', 'Soporte post-lanzamiento']
  }
];

const processSteps = [
  {
    title: 'Diagnóstico claro',
    text: 'Entendemos tus objetivos, procesos y prioridades antes de proponer tecnología.',
  },
  {
    title: 'Diseño y desarrollo',
    text: 'Creamos una solución funcional, visualmente cuidada y fácil de usar para tu equipo.',
  },
  {
    title: 'Lanzamiento y mejora',
    text: 'Publicamos, medimos y seguimos optimizando para que el proyecto crezca contigo.',
  },
];

const trustItems = [
  { value: '+15', label: 'proyectos entregados' },
  { value: '+2', label: 'años acompañando pymes' },
  { value: '100%', label: 'comunicación directa' },
];

const trustSignals = [
  {
    title: 'Diagnóstico antes de cotizar',
    text: 'Revisamos objetivos, operación y prioridad comercial para proponer solo lo que realmente aporta valor.',
  },
  {
    title: 'Entregas por etapas',
    text: 'Trabajamos con hitos claros para que puedas revisar avances, ajustar decisiones y mantener control del presupuesto.',
  },
  {
    title: 'Soporte posterior',
    text: 'Después del lanzamiento seguimos disponibles para mantenimiento, mejoras, seguridad y capacitación básica.',
  },
];

export default function HomeClient() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof caseCategories)[number]>('Todos');

  const filteredCases = useMemo(() => {
    if (activeCategory === 'Todos') return successCases;
    return successCases.filter((successCase) => successCase.category === activeCategory);
  }, [activeCategory]);

  const trackEvent = (event: string, payload: Record<string, string>) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mancar:analytics', { detail: { event, ...payload } }));
      const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) dataLayer.push({ event, ...payload });
    }
  };

  useEffect(() => {
    const hasOpenModal = selectedCase !== null || selectedService !== null;
    document.body.style.overflow = hasOpenModal ? 'hidden' : '';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCase(null);
        setSelectedService(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedCase, selectedService]);

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[calc(100vh-64px)] bg-gray-950 text-white">
        <Image
          src={heroImage}
          alt="Equipo de desarrollo trabajando en una solución digital"
          fill
          priority
          className="object-cover opacity-38"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.78)_46%,rgba(7,17,31,0.25)_100%)]" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid min-h-[640px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="section-kicker border-white/10 bg-white/10 text-primary-100">
                Diseño, software y soporte para pymes de Ecuador
              </p>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl">
                Tecnología simple para negocios que necesitan vender y operar mejor.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200">
                Creamos sitios web, sistemas a medida y tiendas virtuales con una mezcla de estrategia, diseño limpio y desarrollo confiable.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="rounded-full bg-white px-7 py-3 text-center font-semibold text-gray-950 shadow-2xl shadow-black/20 transition hover:bg-primary-100">
                  Solicitar diagnóstico gratuito
                </a>
                <a href="#servicios" className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10">
                  Explorar servicios
                </a>
              </div>
            </div>

            <div className="soft-card border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div className="rounded-2xl bg-white p-5 text-gray-950">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="font-semibold">Radiografía digital</p>
                    <p className="text-sm text-gray-500">Proyecto pyme en crecimiento</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">Activo</span>
                </div>
                <div className="grid grid-cols-3 gap-3 py-5">
                  {trustItems.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <p className="text-2xl font-extrabold text-gray-950">{item.value}</p>
                      <p className="mt-1 text-xs text-gray-500">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {['Experiencia de usuario', 'Automatización', 'Soporte continuo'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-secondary-500"></span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full rounded-full bg-primary-700" style={{ width: `${92 - index * 16}%` }} />
                      </div>
                      <span className="w-32 text-right text-xs text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {trustSignals.map((item) => (
              <article key={item.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                <h2 className="text-lg font-bold text-gray-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker mx-auto">Soluciones</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 md:text-5xl">Servicios con estrategia, diseño y criterio técnico.</h2>
            <p className="mt-5 text-gray-600">Cada servicio está pensado para una meta concreta: vender mejor, ordenar procesos o mantener tu operación digital estable.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, idx) => (
              <article key={service.title} className="soft-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={`Imagen de ${service.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-gray-950 shadow-sm">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{service.fullDescription}</p>
                  <button type="button" onClick={() => setSelectedService(idx)} className="mt-5 font-semibold text-primary-700 hover:text-primary-900">
                    Ver enfoque
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/12">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85" alt="Equipo planificando una solución digital" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div>
              <p className="section-kicker">Sobre Mancar</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 md:text-5xl">
                Una forma más humana de construir tecnología.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Somos un equipo cercano, técnico y directo. Nos enfocamos en que cada solución tenga sentido para tu operación, tu presupuesto y tus clientes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <p className="text-3xl font-extrabold text-primary-700">{item.value}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker border-white/10 bg-white/10 text-primary-100">Proceso</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">Un proceso simple, pero bien pensado.</h2>
              <p className="mt-5 text-gray-300">Menos ruido, más decisiones claras. Trabajamos por etapas para que sepas qué se está construyendo, por qué y qué resultado esperar.</p>
            </div>
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-300 text-sm font-extrabold text-gray-950">{index + 1}</span>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-gray-300">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker mx-auto">Inversión</p>
            <h2 className="mt-5 text-4xl font-extrabold text-gray-950 md:text-5xl">Planes orientativos para empezar con claridad.</h2>
            <p className="mt-5 text-gray-600">Valores referenciales. El alcance final se ajusta según tus objetivos, integraciones y tiempos.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: 'Desde $590', items: ['Sitio web corporativo', 'Hasta 5 secciones', 'Formulario y WhatsApp'] },
              { name: 'Growth', price: 'Desde $1,290', items: ['Web + SEO técnico base', 'Integraciones clave', 'Soporte inicial 30 días'] },
              { name: 'Pro', price: 'Desde $2,490', items: ['Sistema o e-commerce', 'Panel administrativo', 'Acompañamiento continuo'] },
            ].map((plan) => (
              <article key={plan.name} className="soft-card p-7">
                <h3 className="text-xl font-bold text-gray-950">{plan.name}</h3>
                <p className="my-4 text-3xl font-extrabold text-primary-700">{plan.price}</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  {plan.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
                <a href="#contacto" className="mt-6 inline-flex font-semibold text-primary-700 hover:text-primary-900" onClick={() => trackEvent('cta_plan_contact', { plan: plan.name })}>Cotizar este plan</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Casos de referencia</p>
              <h2 className="mt-5 text-4xl font-extrabold text-gray-950 md:text-5xl">Resultados explicados con contexto.</h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                Ejemplos de cómo abordamos proyectos frecuentes en pymes: desde el problema operativo hasta el impacto esperado.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {caseCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'border-gray-950 bg-gray-950 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((successCase) => (
              <article key={successCase.slug} className="soft-card overflow-hidden">
                <div className="relative h-36 bg-gray-950 p-6 text-white">
                  <p className="text-sm text-primary-200">{successCase.category}</p>
                  <p className="mt-5 text-4xl font-extrabold">{successCase.kpis[0].value}</p>
                  <p className="text-sm text-gray-300">{successCase.kpis[0].label}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-950">{successCase.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{successCase.summary}</p>
                  <p className="mt-4 rounded-full bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
                    Tiempo típico: {successCase.timeline}
                  </p>
                  <button type="button" onClick={() => { setSelectedCase(successCases.findIndex((item) => item.slug === successCase.slug)); trackEvent('case_preview_open', { slug: successCase.slug }); }} className="mt-5 font-semibold text-primary-700 hover:text-primary-900">
                    Ver desglose
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-extrabold text-gray-950 md:text-5xl">Lo que buscamos en cada proyecto</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Claridad', 'Que sepas qué se está haciendo, cuánto tarda y qué valor aporta.'],
              ['Cercanía', 'Comunicación directa, sin tecnicismos innecesarios y con seguimiento real.'],
              ['Calidad', 'Soluciones visualmente cuidadas, rápidas, seguras y listas para crecer.'],
            ].map(([title, text]) => (
              <blockquote key={title} className="soft-card p-7">
                <h3 className="text-xl font-bold text-gray-950">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{text}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-4xl font-extrabold text-gray-950 md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-4">
            <details className="soft-card p-5"><summary className="cursor-pointer font-bold text-gray-950">¿En cuánto tiempo entregan un proyecto?</summary><p className="mt-3 text-gray-600">Depende del alcance, pero un sitio web corporativo suele tomar entre 2 y 4 semanas.</p></details>
            <details className="soft-card p-5"><summary className="cursor-pointer font-bold text-gray-950">¿Trabajan con adelantos y entregas parciales?</summary><p className="mt-3 text-gray-600">Sí. Definimos hitos y entregables para que tengas visibilidad desde el inicio.</p></details>
            <details className="soft-card p-5"><summary className="cursor-pointer font-bold text-gray-950">¿Incluyen soporte después del lanzamiento?</summary><p className="mt-3 text-gray-600">Sí. Podemos acompañarte con ajustes, mejoras, seguridad y mantenimiento continuo.</p></details>
            <details className="soft-card p-5"><summary className="cursor-pointer font-bold text-gray-950">¿La empresa queda como dueña del sitio o sistema?</summary><p className="mt-3 text-gray-600">Sí. Dejamos claro desde la propuesta qué entregables recibes, accesos, dominio, hosting y condiciones de mantenimiento.</p></details>
            <details className="soft-card p-5"><summary className="cursor-pointer font-bold text-gray-950">¿Pueden orientar si aún no tengo claro qué necesito?</summary><p className="mt-3 text-gray-600">Sí. Empezamos con un diagnóstico breve para entender el problema, priorizar lo importante y evitar desarrollar funciones innecesarias.</p></details>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-gray-950 py-24 text-white">
        <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85" alt="Reunión de planificación para un proyecto digital" fill className="object-cover opacity-18" sizes="100vw" />
        <div className="absolute inset-0 bg-gray-950/84" />
        <div className="relative container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-kicker border-white/10 bg-white/10 text-primary-100">Contacto</p>
              <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">Hablemos de lo que tu negocio necesita resolver.</h2>
              <p className="mt-5 text-gray-300">Atención remota para pymes en Ecuador, con coordinación directa desde Guayaquil.</p>
              <div className="mt-8 space-y-4 text-gray-300">
                <p><strong className="text-white">Teléfono y WhatsApp:</strong> +593 98 695 1419</p>
                <p><strong className="text-white">Email:</strong> contacto@mancarsoftware.com</p>
              </div>
              <a href="https://wa.me/593986951419?text=Hola%20quiero%20una%20asesoria" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-gray-950 transition hover:bg-primary-100">
                Escribir por WhatsApp
              </a>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-gray-900 shadow-2xl shadow-black/25">
              <h3 className="text-xl font-bold">Cuéntanos tu caso</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                El formulario abre WhatsApp con tu solicitud organizada para responderte con mayor precisión.
              </p>
              <LeadForm source="home-contacto" />
            </div>
          </div>
        </div>
      </section>

      {selectedCase !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCase(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="case-dialog-title" className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 id="case-dialog-title" className="text-2xl font-bold text-gray-950">{successCases[selectedCase].title}</h3>
                <button type="button" aria-label="Cerrar caso" onClick={() => setSelectedCase(null)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
              </div>
              <p className="text-gray-600 mb-5">{successCases[selectedCase].summary}</p>
              <div className="space-y-4 text-gray-700">
                <div><h4 className="font-semibold text-gray-950">Perfil del cliente</h4><p>{successCases[selectedCase].clientProfile}</p></div>
                <div><h4 className="font-semibold text-gray-950">Desafío</h4><p>{successCases[selectedCase].challenge}</p></div>
                <div><h4 className="font-semibold text-gray-950">Solución implementada</h4><p>{successCases[selectedCase].solution}</p></div>
                <div><h4 className="font-semibold text-gray-950">Tiempo estimado</h4><p>{successCases[selectedCase].timeline}</p></div>
                <div>
                  <h4 className="font-semibold text-gray-950">Resultados</h4>
                  <ul className="list-disc pl-5 space-y-1">{successCases[selectedCase].results.map((result, idx) => <li key={idx}>{result}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950">Tecnologías y enfoque</h4>
                  <div className="flex flex-wrap gap-2 mt-2">{successCases[selectedCase].technologies.map((item) => <span key={item} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-100">{item}</span>)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 id="service-dialog-title" className="text-2xl font-bold text-gray-950">{serviceDetails[selectedService].title}</h3>
                <button type="button" aria-label="Cerrar servicio" onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
              </div>
              <p className="text-gray-600 mb-6">{serviceDetails[selectedService].fullDescription}</p>
              <h4 className="font-semibold text-gray-950 mb-2">Características destacadas</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">{serviceDetails[selectedService].features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="flex justify-end">
                <a href="#contacto" onClick={() => setSelectedService(null)} className="bg-gray-950 hover:bg-primary-800 text-white font-medium py-2 px-5 rounded-full transition">Cotizar esta solución</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <a href="https://wa.me/593986951419?text=Hola%20quiero%20una%20asesoria" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp" onClick={() => trackEvent('cta_whatsapp_floating', { position: 'floating' })} className="fixed bottom-6 right-6 z-40 md:hidden bg-gray-950 text-white px-4 py-3 rounded-full shadow-lg">
        WhatsApp
      </a>
    </main>
  );
}
