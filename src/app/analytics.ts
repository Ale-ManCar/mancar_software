type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: AnalyticsPayload[];
    gtag?: (command: "event", eventName: string, payload?: AnalyticsPayload) => void;
  }
}

export function trackConversion(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload };
  window.dispatchEvent(new CustomEvent("mancar:analytics", { detail }));

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(detail);
  }
}
