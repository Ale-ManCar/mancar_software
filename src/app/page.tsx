"use client";

import { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const serviceDetails = [
    {
      title: "Diseño Web Profesional",
      icon: "🎨",
      fullDescription: "Creamos sitios web modernos, rápidos y completamente adaptados a cualquier dispositivo (responsive). Nos aseguramos de que tu negocio tenga una presencia online impactante, con un diseño que refleje tu identidad y capte la atención de tus clientes. Incluye optimización SEO básica y formularios de contacto.",
      features: ["Diseño responsive", "Optimización SEO", "Formularios de contacto", "Integración con redes sociales", "Panel de administración fácil"]
    },
    {
      title: "Desarrollo de Sistemas a Medida",
      icon: "⚙️",
      fullDescription: "Creamos software personalizado que se adapta exactamente a tus procesos y necesidades. Ya sea una aplicación de escritorio, una plataforma web interna o una herramienta de gestión, desarrollamos soluciones robustas, escalables y con interfaces intuitivas.",
      features: ["Aplicaciones web y de escritorio", "Automatización de procesos", "Bases de datos a medida", "Reportes y dashboards", "Capacitación al personal"]
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      icon: "🔧",
      fullDescription: "Ofrecemos mantenimiento continuo para tu sitio web o sistema, garantizando que esté siempre actualizado, seguro y funcionando sin problemas. Resolvemos incidencias de forma ágil y realizamos mejoras periódicas para adaptarnos a tus necesidades cambiantes.",
      features: ["Actualizaciones de seguridad", "Resolución de errores", "Monitoreo 24/7", "Copias de seguridad", "Soporte por chat/teléfono"]
    },
    {
      title: "Tiendas Virtuales (E‑commerce)",
      icon: "🛒",
      fullDescription: "Implementamos tiendas en línea completas con pasarelas de pago integradas, gestión de inventario, carrito de compras y una experiencia de compra optimizada. Ayudamos a que tu negocio venda por internet de manera profesional y segura.",
      features: ["Pasarelas de pago (PayPal, tarjetas)", "Gestión de inventario", "Diseño atractivo", "SEO para productos", "Panel de administración"]
    },
    {
      title: "Optimización y Consultoría",
      icon: "📈",
      fullDescription: "Analizamos tu presencia digital actual y te proponemos mejoras concretas en rendimiento, SEO, usabilidad y conversión. Te asesoramos para que tomes decisiones informadas y alcances tus objetivos de negocio con tecnología.",
      features: ["Auditoría técnica", "Optimización de velocidad", "Estrategia SEO", "Mejora de conversión", "Informes detallados"]
    },
    {
      title: "Acompañamiento Continuo",
      icon: "🤝",
      fullDescription: "No solo entregamos un proyecto y nos vamos. Te ofrecemos un servicio cercano y rápido, con comunicación directa, porque sabemos que detrás de cada proyecto hay personas que necesitan respuestas claras. Estamos a tu lado para ajustes, mejoras y nuevos desafíos.",
      features: ["Asesoría personalizada", "Respuesta rápida", "Mejoras continuas", "Capacitación", "Soporte post-lanzamiento"]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-gray-100 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Soluciones Digitales que{" "}
                <span className="text-primary-700">Impulsan tu Negocio</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Somos una agencia pequeña con dedicación personalizada. Creamos y diseñamos páginas web,
                desarrollamos sistemas a medida y te acompañamos con mantenimiento continuo.
                Tecnología que se adapta a ti, no al revés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contacto"
                  className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center shadow-md"
                >
                  Contáctanos
                </a>
                <a
                  href="#servicios"
                  className="border border-primary-700 text-primary-700 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Conoce más
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-primary-100 rounded-lg h-64 flex items-center justify-center shadow-inner">
                <span className="text-primary-500 text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Clientes */}
      <section className="py-12 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Empresas que confían en nuestras soluciones
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll w-max">
              {/* Logos Carrusel */}
              <div className="flex gap-12 md:gap-16 items-center pr-12 md:pr-16">
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/orion.jpg" alt="Orion" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/quantix.png" alt="Quantix" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/vertex.png" alt="Vertex" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 4</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 5</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 6</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 7</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 8</span>
                </div>
              </div>
              {/* Carrusel infinito */}
              <div className="flex gap-12 md:gap-16 items-center">
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/orion.jpg" alt="Orion" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/quantix.png" alt="Quantix" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/vertex.png" alt="Vertex" className="h-12 w-auto object-contain" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 4</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 5</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 6</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 7</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-32 h-20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm">Logo 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Soluciones digitales creadas con dedicación y enfoque en tus necesidades.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedService(idx)}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition duration-300 cursor-pointer shadow-md"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary-700 text-xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.fullDescription.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tenemos una misión: <span className="text-primary-700">Ayudarte a crecer</span>
              </h2>
              <p className="text-gray-600 mb-6">
                En Mancar Software somos un equipo pequeño pero apasionado por la tecnología.
                Creemos que las soluciones digitales deben ser accesibles, funcionales y hechas
                a la medida de cada negocio. Te escuchamos, te asesoramos y construimos contigo.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary-700">+2</div>
                  <div className="text-gray-500 text-sm">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-700">+15</div>
                  <div className="text-gray-500 text-sm">Proyectos entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-700">100%</div>
                  <div className="text-gray-500 text-sm">Atención personalizada</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl shadow-md">
              <div className="text-center">
                <div className="inline-block bg-primary-100 p-4 rounded-full mb-4">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso con la calidad</h3>
                <p className="text-gray-600">
                  Trabajamos con metodologías ágiles y comunicación directa. Cada proyecto recibe
                  la misma dedicación, sin importar el tamaño.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proceso de trabajo */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Cómo trabajamos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Obtenemos resultados gracias a nuestro enfoque estratégico y colaborativo.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Escuchamos tus ideas</h3>
              <p className="text-gray-600">
                Entendemos tus necesidades y objetivos. Te damos asesoría clara sin tecnicismos innecesarios.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseñamos y desarrollamos</h3>
              <p className="text-gray-600">
                Creamos la solución paso a paso, con entregas periódicas y pruebas para garantizar calidad.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lanzamiento y acompañamiento</h3>
              <p className="text-gray-600">
                Publicamos tu proyecto y seguimos a tu lado para ajustes, capacitación y mejoras continuas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Casos de éxito */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Casos de éxito</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Conoce cómo hemos ayudado a empresas a transformar sus negocios con tecnología.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">🌐</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño Web Corporativo</h3>
                <p className="text-gray-600 mb-4">
                  Creamos un sitio web moderno y responsive para una empresa local, aumentando su visibilidad y generando un 40% más de consultas en los primeros 3 meses.
                </p>
                <span className="text-primary-700 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">📋</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistema de Gestión a Medida</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos un software personalizado para automatizar la gestión de inventarios y pedidos, reduciendo errores manuales en un 70% y ahorrando 15 horas semanales.
                </p>
                <span className="text-primary-700 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mantenimiento y Soporte Continuo</h3>
                <p className="text-gray-600 mb-4">
                  Brindamos soporte técnico y actualizaciones periódicas para una plataforma educativa, logrando un 99.9% de disponibilidad y reducción de incidencias críticas a cero.
                </p>
                <span className="text-primary-700 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA Contacto */}
      <section id="contacto" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ¿Cómo podemos ayudarte? <span className="text-primary-700">Escríbenos</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Hacemos de la tecnología una herramienta sencilla y efectiva para tu negocio.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📍 Oficinas</h3>
                  <p className="text-gray-600">
                    Av. Principal #123, Oficina 5<br />
                    Guayaquil, Ecuador
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📞 Teléfono</h3>
                  <p className="text-gray-600">+593 (9) 8695-1419</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">✉️ Email</h3>
                  <p className="text-gray-600">contacto@mancarsoftware.com</p>
                </div>
                <div>
                  <a
                    href="https://wa.me/593986951419?text=Hola%20quiero%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
                  >
                    💬 ¡Hablemos por WhatsApp!
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-lg transition shadow-md"
                >
                  Enviar mensaje
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Este es un formulario de demostración. Más adelante podremos conectarlo para que los mensajes te lleguen por correo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de detalles del servicio */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{serviceDetails[selectedService].icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{serviceDetails[selectedService].title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">{serviceDetails[selectedService].fullDescription}</p>
              <h4 className="font-semibold text-gray-800 mb-2">Características destacadas:</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                {serviceDetails[selectedService].features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <a
                  href="#contacto"
                  onClick={() => setSelectedService(null)}
                  className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-lg transition shadow-md"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}