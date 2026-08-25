"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import TurnstileWidget from "./TurnstileWidget";

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
  website: string;
};

type SubmissionState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; reference: string; message: string }
  | { kind: "error"; message: string };

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "Sitio web",
  message: "",
  consent: false,
  website: "",
};

const projectTypes = [
  "Sitio web",
  "Sistema a medida",
  "Tienda virtual",
  "Soporte o mantenimiento",
  "Necesito orientación",
];

type LeadResponse = {
  id?: string;
  error?: string;
  fields?: Record<string, string>;
};

export default function LeadForm({ source, submitLabel = "Enviar solicitud" }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submission, setSubmission] = useState<SubmissionState>({ kind: "idle" });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const busy = submission.kind === "submitting";

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
    setErrors((current) => {
      const next = { ...current };
      delete next.turnstile;
      return next;
    });
  }, []);

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
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (submission.kind !== "idle") setSubmission({ kind: "idle" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (form.name.trim().length < 2) nextErrors.name = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Ingresa un email válido.";
    if (!/^(?:\+593\s?)?0?9\d{8}$/.test(form.phone.replace(/\s|-/g, ""))) nextErrors.phone = "Ingresa un WhatsApp ecuatoriano válido.";
    if (form.message.trim().length < 12) nextErrors.message = "Describe brevemente qué necesitas resolver.";
    if (!form.consent) nextErrors.consent = "Acepta el uso de tus datos para responder la solicitud.";
    if (!turnstileSiteKey) nextErrors.turnstile = "La verificación de seguridad todavía no está configurada.";
    if (!turnstileToken) nextErrors.turnstile = "Completa la verificación de seguridad.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmission({ kind: "submitting" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source, turnstileToken }),
      });
      const body = (await response.json().catch(() => ({}))) as LeadResponse;

      if (!response.ok) {
        if (body.fields) setErrors(body.fields);
        throw new Error(body.error || "No pudimos enviar la solicitud. Inténtalo nuevamente.");
      }

      setForm(initialState);
      setErrors({});
      setTurnstileToken("");
      setTurnstileReset((value) => value + 1);
      setSubmission({
        kind: "success",
        reference: body.id || "MS",
        message: "Recibimos tu solicitud. Revisaremos el contexto y te responderemos con el siguiente paso.",
      });

      window.dispatchEvent(
        new CustomEvent("mancar:analytics", {
          detail: { event: "lead_form_submit", source, projectType: form.projectType },
        }),
      );
      const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({ event: "lead_form_submit", source, projectType: form.projectType });
      }
    } catch (error) {
      setTurnstileToken("");
      setTurnstileReset((value) => value + 1);
      setSubmission({ kind: "error", message: error instanceof Error ? error.message : "No pudimos enviar la solicitud." });
    }
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
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${source}-nombre-error` : undefined}
            required
          />
          {errors.name && <p id={`${source}-nombre-error`} className="mt-1 text-sm font-medium text-secondary-700">{errors.name}</p>}
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
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${source}-email-error` : undefined}
            required
          />
          {errors.email && <p id={`${source}-email-error`} className="mt-1 text-sm font-medium text-secondary-700">{errors.email}</p>}
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
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${source}-telefono-error` : undefined}
            required
          />
          {errors.phone && <p id={`${source}-telefono-error`} className="mt-1 text-sm font-medium text-secondary-700">{errors.phone}</p>}
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
            aria-invalid={!!errors.projectType}
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
          maxLength={1200}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${source}-mensaje-error` : undefined}
          required
        />
        {errors.message && <p id={`${source}-mensaje-error`} className="mt-1 text-sm font-medium text-secondary-700">{errors.message}</p>}
      </div>

      <label className="hidden" aria-hidden="true">
        Sitio web
        <input
          type="text"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-300"
          aria-invalid={!!errors.consent}
          required
        />
        <span>
          Acepto que Mancar Software use estos datos únicamente para responder mi solicitud y dar seguimiento a esta conversación.
        </span>
      </label>
      {errors.consent && <p className="text-sm font-medium text-secondary-700">{errors.consent}</p>}

      {turnstileSiteKey ? (
        <TurnstileWidget
          siteKey={turnstileSiteKey}
          resetKey={turnstileReset}
          onToken={handleTurnstileToken}
          onExpire={() => setErrors((current) => ({ ...current, turnstile: "La verificación venció. Inténtalo nuevamente." }))}
        />
      ) : (
        <p className="rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3 text-sm font-medium text-secondary-800">
          La verificación de seguridad todavía no está configurada.
        </p>
      )}
      {errors.turnstile && <p className="text-sm font-medium text-secondary-700">{errors.turnstile}</p>}

      {submission.kind === "error" && (
        <p aria-live="polite" className="rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3 text-sm font-medium text-secondary-800">
          {submission.message}
        </p>
      )}

      {submission.kind === "success" && (
        <p aria-live="polite" className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-medium text-primary-800">
          {submission.message} <strong>Referencia: {submission.reference}</strong>
        </p>
      )}

      <button
        type="submit"
        disabled={busy || !turnstileSiteKey}
        className="w-full rounded-full bg-gray-950 px-5 py-3 font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {busy ? "Enviando..." : submitLabel}
      </button>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-sm font-extrabold text-primary-700 transition hover:text-primary-900"
      >
        Prefiero escribir por WhatsApp
      </a>
    </form>
  );
}
