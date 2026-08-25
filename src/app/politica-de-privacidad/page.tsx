import Image from 'next/image';

const sections = [
  ['Datos que recopilamos', 'Podemos recopilar datos de contacto, información de navegación, mensajes enviados mediante formularios y datos técnicos necesarios para prevenir spam o abuso.'],
  ['Uso de la información', 'Usamos la información para responder consultas, mejorar servicios, brindar soporte, medir el rendimiento del sitio y realizar análisis estadísticos.'],
  ['Servicios externos', 'Podemos usar proveedores como Cloudflare Turnstile para verificación de seguridad, Supabase para almacenamiento de solicitudes, Resend para notificaciones por correo y herramientas de analítica configuradas por Mancar Software.'],
  ['Conservación y seguridad', 'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos y conservarlos solo durante el tiempo necesario.'],
  ['Tus derechos', 'Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a mancarsoftwares@gmail.com.'],
];

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <section className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="image-frame min-h-[320px] lg:min-h-[520px]">
          <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85" alt="Privacidad y protección de información digital" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="content-panel">
          <p className="section-kicker">Privacidad</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">Política de privacidad</h1>
          <p className="mt-5 leading-7 text-gray-600">En Mancar Software protegemos la información personal de usuarios y clientes con un enfoque responsable y transparente.</p>
          <div className="mt-8 space-y-6">
            {sections.map(([title, text]) => (
              <section key={title} className="border-t border-gray-100 pt-5">
                <h2 className="text-xl font-bold text-gray-950">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{text}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">Última actualización: 25 de mayo de 2026.</p>
        </div>
      </section>
    </main>
  );
}
