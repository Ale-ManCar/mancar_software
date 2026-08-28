"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { trackConversion } from './analytics';
import { successCases } from './cases';
import LeadForm from './components/LeadForm';
import FaqSection from './components/FaqSection';

const images = {
  hero: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85',
  strategy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  web: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?auto=format&fit=crop&w=1200&q=85',
  systems: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
  ecommerce: 'https://oneaso.com/content/uploads/images/horoshop-product-page-ui-catalog-filters-1-1.jpg',
  support: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=85',
  contact: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
};

const serviceDetails = [
  {
    title: 'Diseño web profesional',
    label: 'Captación de clientes',
    image: images.web,
    fullDescription:
      'Creamos sitios rápidos, modernos y claros para que tu empresa proyecte confianza y convierta visitas en contactos reales.',
    features: ['Diseño responsive', 'SEO técnico base', 'Formulario de contacto', 'Contenido editable', 'Optimización de carga'],
  },
  {
    title: 'Sistemas a medida',
    label: 'Operación ordenada',
    image: images.systems,
    fullDescription:
      'Desarrollamos herramientas internas para centralizar información, automatizar tareas y reducir errores operativos.',
    features: ['Panel administrativo', 'Bases de datos', 'Reportes', 'Automatización', 'Roles de usuario'],
  },
  {
    title: 'Tiendas virtuales',
    label: 'Venta online',
    image: images.ecommerce,
    fullDescription:
      'Construimos ecommerce con catálogo, carrito, pagos, inventario y una experiencia de compra clara para Ecuador.',
    features: ['Catálogo', 'Carrito', 'Pasarelas de pago', 'Inventario', 'SEO de productos'],
  },
  {
    title: 'Soporte continuo',
    label: 'Estabilidad',
    image: images.support,
    fullDescription:
      'Mantenemos tu sitio o sistema seguro, actualizado y listo para seguir creciendo después del lanzamiento.',
    features: ['Actualizaciones', 'Backups', 'Corrección de errores', 'Monitoreo', 'Soporte técnico'],
  },
];

const stats = [
  ['5', 'proyectos reales'],
  ['2', 'apps desktop Windows'],
  ['3', 'verticales de negocio'],
  ['100%', 'trato directo'],
];

const benefits = [
  ['Más confianza', 'Tu web deja de verse improvisada y empieza a comunicar valor desde el primer vistazo.'],
  ['Menos trabajo manual', 'Automatizamos tareas repetitivas para que tu equipo gane tiempo y controle mejor la operación.'],
  ['Mejor seguimiento', 'Trabajamos por etapas, con avances claros y decisiones explicadas sin tecnicismos innecesarios.'],
];

const trustProof = [
  {
    title: 'Sistemas con operación real',
    text: 'Hemos trabajado soluciones desktop y LAN para clínicas que necesitan continuidad, control local y flujos diarios bien definidos.',
    metric: 'Windows + LAN',
  },
  {
    title: 'Webs pensadas para captar',
    text: 'Creamos sitios y tiendas con estructura comercial, llamados a la acción claros, formularios y demos públicas cuando el proyecto lo permite.',
    metric: 'Web + leads',
  },
  {
    title: 'Arquitectura proporcional',
    text: 'Elegimos tecnología según el alcance: páginas estáticas, APIs, bases de datos o paneles administrativos sin sumar complejidad innecesaria.',
    metric: 'Escalable',
  },
];

const steps = [
  ['01', 'Diagnóstico', 'Revisamos tu negocio, objetivos, procesos y prioridad comercial.'],
  ['02', 'Propuesta clara', 'Definimos alcance, entregables, tiempos y ruta de implementación.'],
  ['03', 'Diseño y desarrollo', 'Construimos una solución usable, responsive y alineada a tu marca.'],
  ['04', 'Lanzamiento', 'Publicamos, probamos y dejamos soporte para ajustes y mejoras.'],
];

const plans = [
  { name: 'Web inicial', price: 'Desde $590', items: ['Sitio corporativo', 'Hasta 5 secciones', 'Formulario de contacto'] },
  { name: 'Web estratégica', price: 'Desde $1,290', items: ['Estructura comercial', 'SEO técnico base', 'Soporte inicial'] },
  { name: 'Sistema o ecommerce', price: 'Desde $2,490', items: ['Panel administrativo', 'Integraciones', 'Acompañamiento técnico'] },
];

const homeFaqs = [
  {
    question: '¿Qué información necesitan para cotizar?',
    answer:
      'Necesitamos entender qué vende tu negocio, qué problema quieres resolver, qué secciones o módulos necesitas y si ya tienes marca, contenido, dominio o referencias visuales.',
  },
  {
    question: '¿Pueden trabajar por fases?',
    answer:
      'Sí. Para pymes suele ser mejor lanzar una primera versión útil y luego mejorar con datos reales, nuevas funciones o ajustes comerciales.',
  },
  {
    question: '¿El proyecto queda preparado para crecer?',
    answer:
      'Diseñamos la estructura pensando en mantenimiento, rendimiento, seguridad y futuras mejoras, sin complicar el proyecto con tecnología innecesaria.',
  },
  {
    question: '¿Incluyen soporte después de publicar?',
    answer:
      'Sí. Podemos dar soporte, mantenimiento, ajustes de contenido, mejoras de rendimiento, revisión de formularios y acompañamiento técnico continuo.',
  },
];

export default function HomeClient() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  useEffect(() => {
    const hasOpenModal = selectedService !== null;
    document.body.style.overflow = hasOpenModal ? 'hidden' : '';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedService]);

  return (
    <main className="overflow-hidden">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="min-w-0">
              <p className="section-kicker">Software para pymes de Ecuador</p>
              <h1 className="mt-5 max-w-4xl break-words text-[2rem] font-extrabold leading-[1.08] text-gray-950 sm:text-5xl md:text-7xl">
                Webs y sistemas que ayudan a vender, ordenar y crecer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                En Mancar Software diseñamos presencia digital, sistemas a medida y tiendas virtuales para empresas que necesitan verse mejor y trabajar con más control.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" onClick={() => trackConversion('cta_click', { label: 'Solicitar orientación inicial', location: 'hero' })} className="btn-primary w-full sm:w-auto">
                  Solicitar orientación inicial
                </Link>
                <a href="#servicios" onClick={() => trackConversion('cta_click', { label: 'Ver soluciones', location: 'hero' })} className="btn-secondary w-full sm:w-auto">
                  Ver soluciones
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="min-w-0 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <p className="font-display text-3xl font-extrabold text-gray-950">{value}</p>
                    <p className="mt-1 break-words text-xs font-semibold leading-5 text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-frame h-[360px] min-w-0 md:h-[520px]">
              <Image
                src={images.hero}
                alt="Equipo de desarrollo trabajando en una solución digital"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/64 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-5 backdrop-blur">
                <p className="text-sm font-extrabold text-primary-700">Diagnóstico primero</p>
                <p className="mt-2 text-xl font-bold text-gray-950">Antes de desarrollar, definimos qué necesita lograr tu negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker mx-auto">Por qué importa</p>
            <h2 className="section-title">Tecnología con objetivo comercial, no solo diseño bonito.</h2>
            <p className="section-copy">
              Una buena solución digital debe hacer más fácil captar clientes, atender mejor y operar con información clara.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map(([title, text]) => (
              <article key={title} className="soft-card p-6">
                <h3 className="text-xl font-bold text-gray-950">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-950/5 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="section-kicker">Confianza</p>
                <h3 className="mt-5 text-3xl font-extrabold leading-tight text-gray-950 md:text-4xl">
                  Evidencia concreta antes de pedirte una decisión.
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Mostramos cómo resolvemos problemas reales: operación local, presencia comercial, formularios, paneles y despliegues preparados para crecer.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {trustProof.map((proof) => (
                  <article key={proof.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <p className="font-display text-2xl font-extrabold text-primary-700">{proof.metric}</p>
                    <h4 className="mt-3 text-lg font-bold text-gray-950">{proof.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{proof.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker mx-auto">Soluciones</p>
            <h2 className="section-title">Construimos lo que tu negocio necesita para avanzar.</h2>
            <p className="section-copy">
              Cada servicio combina estrategia, diseño y desarrollo para resolver necesidades reales de pymes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceDetails.map((service, index) => (
              <article key={service.title} className="soft-card overflow-hidden">
                <div className="grid h-full md:grid-cols-[0.86fr_1.14fr]">
                  <div className="image-frame h-56 rounded-none border-0 md:h-full">
                    <Image
                      src={service.image}
                      alt={`Imagen relacionada con ${service.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 35vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-extrabold text-primary-700">{service.label}</p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{service.fullDescription}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(index);
                        trackConversion('service_detail_open', { service: service.title });
                      }}
                      className="mt-5 font-extrabold text-primary-700 transition hover:text-primary-900"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
            <div className="image-frame h-[340px] md:h-[480px]">
              <Image
                src={images.strategy}
                alt="Equipo planificando una estrategia digital"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <div>
              <p className="section-kicker">Método de trabajo</p>
              <h2 className="section-title">Primero entendemos el negocio. Después elegimos la tecnología.</h2>
              <p className="section-copy">
                Evitamos desarrollar funciones innecesarias. Priorizamos lo que puede mejorar ventas, operación, atención o control desde el primer lanzamiento.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {steps.map(([number, title, text]) => (
                  <article key={number} className="rounded-2xl border border-gray-100 bg-white p-5">
                    <p className="font-display text-2xl font-extrabold text-primary-700">{number}</p>
                    <h3 className="mt-2 text-lg font-bold text-gray-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker mx-auto border-white/10 bg-white/10 text-white">Inversión</p>
            <h2 className="section-title text-white">Puntos de partida claros para cotizar.</h2>
            <p className="section-copy text-gray-300">
              Estos valores son referenciales. El alcance final se ajusta según objetivos, contenido, integraciones y tiempos.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <article key={plan.name} className={`rounded-2xl border p-6 ${index === 1 ? 'border-primary-300 bg-white text-gray-950' : 'border-white/10 bg-white/8 text-white'}`}>
                {index === 1 && <p className="mb-4 inline-flex rounded-full bg-secondary-100 px-3 py-1 text-xs font-extrabold text-secondary-800">Más solicitado</p>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`mt-4 font-display text-3xl font-extrabold ${index === 1 ? 'text-primary-700' : 'text-primary-200'}`}>{plan.price}</p>
                <ul className={`mt-6 space-y-3 text-sm ${index === 1 ? 'text-gray-600' : 'text-gray-300'}`}>
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 rounded-[2rem] border border-gray-100 bg-gray-50 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="section-kicker">Portafolio</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-950 md:text-5xl">
                Soluciones reales para negocios que necesitan avanzar.
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Explora proyectos donde aplicamos estrategia, diseño y desarrollo para crear sistemas, sitios web y herramientas digitales pensadas para operar mejor y captar más oportunidades.
              </p>
              <Link
                href="/casos"
                onClick={() => trackConversion('portfolio_page_open', { source: 'home-portfolio-teaser' })}
                className="mt-7 inline-flex rounded-full bg-gray-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                Ver portafolio
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="soft-card p-5">
                <p className="font-display text-3xl font-extrabold text-gray-950">{successCases.length}</p>
                <p className="mt-1 text-sm font-semibold text-gray-500">casos documentados</p>
              </div>
              <div className="soft-card p-5">
                <p className="font-display text-3xl font-extrabold text-gray-950">2</p>
                <p className="mt-1 text-sm font-semibold text-gray-500">demos verificadas</p>
              </div>
              <div className="soft-card p-5">
                <p className="font-display text-3xl font-extrabold text-gray-950">100%</p>
                <p className="mt-1 text-sm font-semibold text-gray-500">enfoque comercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Lo que necesitas saber antes de empezar."
        description="Resolvemos las dudas más comunes antes de pedirte información técnica o avanzar con una propuesta."
        items={homeFaqs}
      />

      <section id="contacto" className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="section-kicker">Contacto</p>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">Cuéntanos qué quieres mejorar.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Te responderemos con una orientación clara para decidir si necesitas una web, un sistema, una tienda virtual o soporte técnico.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a href="tel:+593986951419" onClick={() => trackConversion('phone_click', { location: 'home-contact' })} className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-primary-200 hover:bg-primary-50">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-primary-700">Teléfono</span>
                  <span className="mt-1 block font-bold text-gray-950">+593 98 695 1419</span>
                </a>
                <a href="mailto:mancarsoftwares@gmail.com" onClick={() => trackConversion('email_click', { location: 'home-contact' })} className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-primary-200 hover:bg-primary-50">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-primary-700">Email</span>
                  <span className="mt-1 block break-words font-bold text-gray-950">mancarsoftwares@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-gray-900 shadow-xl shadow-gray-950/5 md:p-6 lg:p-7">
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-gray-950">Cuéntanos tu caso</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    Recibiremos tu solicitud con el contexto necesario para responderte con una orientación clara.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-extrabold text-primary-800">Respuesta directa</span>
              </div>
              <LeadForm source="home-contacto" submitLabel="Solicitar orientación inicial" />
            </div>
          </div>
        </div>
      </section>

      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedService(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 id="service-dialog-title" className="text-2xl font-bold text-gray-950">{serviceDetails[selectedService].title}</h3>
                <button type="button" aria-label="Cerrar servicio" onClick={() => setSelectedService(null)} className="text-2xl text-gray-400 transition hover:text-gray-600">×</button>
              </div>
              <p className="mb-6 text-gray-600">{serviceDetails[selectedService].fullDescription}</p>
              <h4 className="mb-2 font-semibold text-gray-950">Características destacadas</h4>
              <ul className="mb-6 list-disc space-y-1 pl-5 text-gray-600">{serviceDetails[selectedService].features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
