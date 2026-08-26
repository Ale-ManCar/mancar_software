import Script from "next/script";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="mancar-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
          window.addEventListener('mancar:analytics', function(event) {
            if (!event.detail || !event.detail.event) return;
            var payload = Object.assign({}, event.detail);
            var eventName = payload.event;
            delete payload.event;
            gtag('event', eventName, payload);
          });
        `}
      </Script>
    </>
  );
}
