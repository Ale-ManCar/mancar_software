import type { Metadata } from "next";
import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Contacto y diagnóstico gratuito",
  description:
    "Agenda una orientación inicial con Mancar Software para desarrollo web, sistemas a medida, tiendas virtuales o soporte para pymes en Ecuador.",
};

export default function ContactoPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="page-hero mx-auto max-w-3xl text-center">
          <p className="section-kicker mx-auto">Contacto</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">Conversemos sobre tu proyecto</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cuéntanos qué necesitas mejorar, automatizar o vender mejor. Te responderemos con una orientación clara y aterrizada para tu negocio en Ecuador.
          </p>
        </section>
        <section className="grid gap-8 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card dark-section p-8 text-white">
            <h2 className="text-2xl font-bold">Canales directos</h2>
            <div className="mt-8 space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white">Atención</h3>
                <p className="mt-1">Atención remota para pymes en Ecuador, con coordinación directa desde Guayaquil.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Teléfono y WhatsApp</h3>
                <p className="mt-1">+593 98 695 1419</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-1">contacto@mancarsoftware.com</p>
              </div>
            </div>
            <a href="https://wa.me/593986951419" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-extrabold text-gray-950 transition hover:bg-primary-100">
              Hablemos por WhatsApp
            </a>
          </div>
          <div className="soft-card p-8">
            <h2 className="text-2xl font-bold text-gray-950">Solicita una orientación inicial</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Enviaremos tu solicitud por WhatsApp con el contexto necesario para darte una respuesta clara.
            </p>
            <LeadForm source="pagina-contacto" submitLabel="Enviar solicitud por WhatsApp" />
          </div>
        </section>
      </div>
    </main>
  );
}
