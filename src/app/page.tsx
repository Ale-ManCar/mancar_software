export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Soluciones Digitales que{" "}
                <span className="text-primary-600">Impulsan tu Negocio</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Somos una agencia pequeña con dedicación personalizada. Creamos y diseñamos páginas web,
                desarrollamos sistemas a medida y te acompañamos con mantenimiento continuo.
                Tecnología que se adapta a ti, no al revés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contacto"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Contáctanos
                </a>
                <a
                  href="#servicios"
                  className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Conoce más
                </a>
              </div>
            </div>
            {/* Imagen (opcional) */}
            <div className="hidden md:block">
              <div className="bg-primary-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-primary-400">[Ilustración tecnológica]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Clientes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Empresas que confían en nuestras soluciones
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Logo 1 */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 1</span>
            </div>
            {/* Logo 2 */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 2</span>
            </div>
            {/* Logo 3 */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 3</span>
            </div>
            {/* Logo 4 */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 4</span>
            </div>
            {/* Logo 5 */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Soluciones digitales creadas con dedicación y enfoque en tus necesidades.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño Web Profesional</h3>
              <p className="text-gray-600">
                Sitios modernos, rápidos y adaptados a cualquier dispositivo. Ideal para negocios que buscan presencia online impactante.
              </p>
            </div>
            {/* Servicio 2 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Desarrollo de Sistemas a Medida</h3>
              <p className="text-gray-600">
                Software que se adapta exactamente a tus procesos: aplicaciones de escritorio, plataformas web o herramientas internas.
              </p>
            </div>
            {/* Servicio 3 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mantenimiento y Soporte Técnico</h3>
              <p className="text-gray-600">
                Mantenemos tu sitio o sistema actualizado, seguro y funcionando sin problemas. Resolvemos incidencias de forma ágil.
              </p>
            </div>
            {/* Servicio 4 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tiendas Virtuales (E‑commerce)</h3>
              <p className="text-gray-600">
                Implementamos tiendas en línea con pasarelas de pago, gestión de inventario y experiencia de compra optimizada.
              </p>
            </div>
            {/* Servicio 5 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Optimización y Consultoría</h3>
              <p className="text-gray-600">
                Analizamos tu presencia digital y proponemos mejoras en rendimiento, SEO y usabilidad para que alcances tus objetivos.
              </p>
            </div>
            {/* Servicio 6 */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Acompañamiento Continuo</h3>
              <p className="text-gray-600">
                Un servicio cercano y rápido, porque sabemos que detrás de cada proyecto hay personas que necesitan respuestas claras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: Texto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tenemos una misión: <span className="text-primary-600">Ayudarte a crecer</span>
              </h2>
              <p className="text-gray-600 mb-6">
                En Mancar Software somos un equipo pequeño pero apasionado por la tecnología.
                Creemos que las soluciones digitales deben ser accesibles, funcionales y hechas
                a la medida de cada negocio. Te escuchamos, te asesoramos y construimos contigo.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">+2</div>
                  <div className="text-gray-500 text-sm">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">+15</div>
                  <div className="text-gray-500 text-sm">Proyectos entregados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-gray-500 text-sm">Atención personalizada</div>
                </div>
              </div>
            </div>
            {/* Columna derecha */}
            <div className="bg-white p-6 rounded-xl shadow-md">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Obtenemos resultados gracias a nuestro enfoque estratégico y colaborativo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Escuchamos tus ideas</h3>
              <p className="text-gray-600">
                Entendemos tus necesidades y objetivos. Te damos asesoría clara sin tecnicismos innecesarios.
              </p>
            </div>
            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseñamos y desarrollamos</h3>
              <p className="text-gray-600">
                Creamos la solución paso a paso, con entregas periódicas y pruebas para garantizar calidad.
              </p>
            </div>
            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">3</span>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Casos de éxito
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conoce cómo hemos ayudado a empresas a transformar sus negocios con tecnología.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Caso 1 - Diseño Web */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">🌐</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño Web Corporativo</h3>
                <p className="text-gray-600 mb-4">
                  Creamos un sitio web moderno y responsive para una empresa local, aumentando su visibilidad y generando un 40% más de consultas en los primeros 3 meses.
                </p>
                <span className="text-primary-600 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
            {/* Caso 2 - Sistema a Medida */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">📋</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistema de Gestión a Medida</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos un software personalizado para automatizar la gestión de inventarios y pedidos, reduciendo errores manuales en un 70% y ahorrando 15 horas semanales.
                </p>
                <span className="text-primary-600 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
            {/* Caso 3 - Mantenimiento Continuo */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-primary-100 h-32 flex items-center justify-center">
                <span className="text-primary-500 text-4xl">🔧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mantenimiento y Soporte Continuo</h3>
                <p className="text-gray-600 mb-4">
                  Brindamos soporte técnico y actualizaciones periódicas para una plataforma educativa, logrando un 99.9% de disponibilidad y reducción de incidencias críticas a cero.
                </p>
                <span className="text-primary-600 text-sm font-medium">Ver caso →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna izquierda: Información de contacto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ¿Cómo podemos ayudarte? <span className="text-primary-600">Escríbenos</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Hacemos de la tecnología una herramienta sencilla y efectiva para tu negocio.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📍 Oficinas</h3>
                  <p className="text-gray-600">
                    Av. Principal #123, Oficina 5<br />
                    Quito, Ecuador
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">📞 Teléfono</h3>
                  <p className="text-gray-600">+593 (9) 1234-5678</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">✉️ Email</h3>
                  <p className="text-gray-600">contacto@mancarsoftware.com</p>
                </div>
                <div>
                  <a
                    href="https://wa.me/593912345678?text=Hola%20quiero%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    💬 ¡Hablemos por WhatsApp!
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
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
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition"
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
    </main>
  );
}