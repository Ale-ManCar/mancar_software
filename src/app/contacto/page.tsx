import type { Metadata } from "next";
import LeadForm from "../components/LeadForm";
import TrackedLink from "../components/TrackedLink";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto para desarrollo web y sistemas en Ecuador",
  browserTitle: "Contacto",
  description:
    "Agenda una orientación inicial con Mancar Software para desarrollo web, sistemas a medida, tiendas virtuales o soporte para pymes en Ecuador.",
  path: "/contacto",
});

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
        <section className="grid items-start gap-8 pb-16 md:pb-20 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-950/5 md:p-7">
            <p className="section-kicker">Canales directos</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-950">Atención directa para tu proyecto.</h2>
            <p className="mt-4 leading-7 text-gray-600">
              Recibimos solicitudes de pymes en Ecuador y coordinamos la primera orientación desde Guayaquil.
            </p>

            <div className="mt-7 grid gap-3">
              <TrackedLink href="tel:+593986951419" eventName="phone_click" eventPayload={{ location: "contact-page" }} className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-primary-200 hover:bg-primary-50">
                <span className="text-xs font-extrabold uppercase tracking-wide text-primary-700">Teléfono</span>
                <span className="mt-1 block text-lg font-extrabold text-gray-950 transition group-hover:text-primary-800">+593 98 695 1419</span>
              </TrackedLink>
              <TrackedLink href="mailto:mancarsoftwares@gmail.com" eventName="email_click" eventPayload={{ location: "contact-page" }} className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-primary-200 hover:bg-primary-50">
                <span className="text-xs font-extrabold uppercase tracking-wide text-primary-700">Email</span>
                <span className="mt-1 block break-words text-lg font-extrabold text-gray-950 transition group-hover:text-primary-800">mancarsoftwares@gmail.com</span>
              </TrackedLink>
              <div className="rounded-2xl border border-gray-200 bg-gray-950 p-4 text-white">
                <span className="text-xs font-extrabold uppercase tracking-wide text-primary-200">Siguiente paso</span>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Revisamos tu caso y te respondemos con una ruta clara: web, sistema, tienda virtual o soporte.
                </p>
              </div>
            </div>
          </div>
          <div className="soft-card p-8">
            <h2 className="text-2xl font-bold text-gray-950">Solicita una orientación inicial</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Enviaremos tu solicitud al equipo comercial con el contexto necesario para darte una respuesta clara.
            </p>
            <LeadForm source="pagina-contacto" />
          </div>
        </section>
      </div>
    </main>
  );
}
