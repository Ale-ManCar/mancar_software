"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadFormProps = {
  source: string;
  submitLabel?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "Sitio web",
  message: "",
  consent: false,
};

const projectTypes = [
  "Sitio web",
  "Sistema a medida",
  "Tienda virtual",
  "Soporte o mantenimiento",
  "Necesito orientación",
];

export default function LeadForm({ source, submitLabel = "Enviar mensaje por WhatsApp" }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const whatsappUrl = useMemo(() => {
    const text = [
      "Hola Mancar Software, quiero orientación para mi proyecto.",
      `Nombre: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      `Tipo de proyecto: ${form.projectType}`,
      `Mensaje: ${form.message || "-"}`,
      `Consentimiento de contacto: ${form.consent ? "Sí" : "No"}`,
      `Origen: ${source}`,
    ].join("\n");

    return `https://wa.me/593986951419?text=${encodeURIComponent(text)}`;
  }, [form, source]);

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
    if (sent) setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Completa tu nombre, email y una breve descripción del proyecto.");
      return;
    }

    if (!form.consent) {
      setError("Acepta el uso de tus datos para que podamos responder tu solicitud.");
      return;
    }

    window.dispatchEvent(
      new CustomEvent("mancar:analytics", {
        detail: { event: "lead_form_submit", source, projectType: form.projectType },
      }),
    );
    const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push({ event: "lead_form_submit", source, projectType: form.projectType });
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-nombre`} className="block text-sm font-semibold text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id={`${source}-nombre`}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-1 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor={`${source}-email`} className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id={`${source}-email`}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-1 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-telefono`} className="block text-sm font-semibold text-gray-700">
            Teléfono o WhatsApp
          </label>
          <input
            type="tel"
            id={`${source}-telefono`}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-1 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor={`${source}-tipo`} className="block text-sm font-semibold text-gray-700">
            Tipo de proyecto
          </label>
          <select
            id={`${source}-tipo`}
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="mt-1 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${source}-mensaje`} className="block text-sm font-semibold text-gray-700">
          ¿Qué necesitas resolver?
        </label>
        <textarea
          id={`${source}-mensaje`}
          rows={4}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-1 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
          required
        />
      </div>

      <label className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-300"
          required
        />
        <span>
          Acepto que Mancar Software use estos datos únicamente para responder mi solicitud y dar seguimiento a esta conversación.
        </span>
      </label>

      {error && (
        <p aria-live="polite" className="rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3 text-sm font-medium text-secondary-800">
          {error}
        </p>
      )}

      {sent && (
        <p aria-live="polite" className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-medium text-primary-800">
          Abrimos WhatsApp con tu solicitud lista para enviar. Revisaremos tu caso y te responderemos con el siguiente paso.
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-gray-950 px-5 py-3 font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      >
        {submitLabel}
      </button>
    </form>
  );
}
