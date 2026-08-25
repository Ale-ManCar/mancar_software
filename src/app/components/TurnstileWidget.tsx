"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
  resetKey: number;
  onToken: (token: string) => void;
  onExpire?: () => void;
};

let scriptPromise: Promise<void> | null = null;

function loadTurnstile() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("No pudimos cargar la verificación.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No pudimos cargar la verificación."));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export default function TurnstileWidget({ siteKey, resetKey, onToken, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadTurnstile().then(() => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) window.turnstile.remove(widgetIdRef.current);
      containerRef.current.innerHTML = "";
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        size: "normal",
        callback: onToken,
        "expired-callback": () => {
          onToken("");
          onExpire?.();
        },
        "error-callback": () => {
          onToken("");
          onExpire?.();
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [siteKey, resetKey, onToken, onExpire]);

  return <div ref={containerRef} className="min-h-[65px] w-fit max-w-full" />;
}
