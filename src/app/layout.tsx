import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Header from "./components/Header";
import Analytics from "./components/Analytics";
import TrackedLink from "./components/TrackedLink";
import { defaultOgImage, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mancar Software | Desarrollo web y sistemas para pymes en Ecuador",
    template: "%s | Mancar Software",
  },
  icons: {
    icon: "/brand/mancar-mark.svg",
    shortcut: "/brand/mancar-mark.svg",
    apple: "/brand/mancar-mark.svg",
  },
  description:
    "Desarrollo web, sistemas a medida, tiendas virtuales y soporte técnico para pymes de Ecuador que quieren vender mejor y ordenar sus procesos.",
  keywords: [
    "desarrollo web Ecuador",
    "software para pymes",
    "sistemas a medida Guayaquil",
    "tiendas virtuales Ecuador",
    "soporte web Ecuador",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Mancar Software" }],
  creator: "Mancar Software",
  publisher: "Mancar Software",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://mancarsoftware.com",
    siteName: "Mancar Software",
    title: "Mancar Software | Desarrollo web y sistemas para pymes en Ecuador",
    description:
      "Creamos sitios web, sistemas a medida, ecommerce y soporte técnico para pymes de Ecuador.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mancar Software | Desarrollo web y sistemas para pymes en Ecuador",
    description:
      "Soluciones digitales para vender mejor, ordenar procesos y crecer con confianza.",
    images: [defaultOgImage.url],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mancar Software",
  url: siteUrl,
  logo: `${siteUrl}/brand/mancar-logo.svg`,
  image: `${siteUrl}/brand/og-image.png`,
  description:
    "Desarrollo web, sistemas a medida, tiendas virtuales y soporte técnico para pymes de Ecuador.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guayaquil",
    addressCountry: "EC",
  },
  areaServed: {
    "@type": "Country",
    name: "Ecuador",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+593986951419",
      contactType: "sales",
      areaServed: "EC",
      availableLanguage: ["es"],
    },
  ],
  sameAs: [
    "https://github.com/MancarSoftware",
    "https://www.instagram.com/mancarsoftware?igsh=ZmdvbGg3eDhzN2Jo",
    "https://www.tiktok.com/@mancar_software?_r=1&_t=ZS-96f2U0kQRCn",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        <Header />
        {children}
        <footer className="dark-section border-t border-white/10 pt-14 pb-8 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
                  <Image
                    src="/brand/mancar-mark.svg"
                    alt="Logo de Mancar Software"
                    width={38}
                    height={38}
                    className="h-9 w-9 rounded-xl"
                  />
                  <span className="font-display">Mancar<span className="text-primary-200">Software</span></span>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                  Soluciones digitales claras, cercanas y diseñadas para que las pymes vendan mejor, ordenen procesos y crezcan con confianza.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Enlaces</h4>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
                  <li><Link href="/sobre-nosotros" className="hover:text-white transition">Sobre nosotros</Link></li>
                  <li><Link href="/casos" className="hover:text-white transition">Portafolio</Link></li>
                  <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
                  <li><Link href="/politica-de-privacidad" className="hover:text-white transition">Política de privacidad</Link></li>
                  <li><Link href="/aviso-legal" className="hover:text-white transition">Aviso legal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Contacto</h4>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li>+593 98 695 1419</li>
                  <li>mancarsoftwares@gmail.com</li>
                  <li>Guayaquil, Ecuador</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Síguenos</h4>
                <div className="mt-4 flex space-x-3">
                  <TrackedLink href="https://www.tiktok.com/@mancar_software?_r=1&_t=ZS-96f2U0kQRCn" eventName="social_click" eventPayload={{ network: "TikTok", location: "footer" }} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:bg-white hover:text-gray-950">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35h-3.2v12.53a2.89 2.89 0 1 1-2-2.75V8.86a6.13 6.13 0 1 0 5.2 6v-6.4a8 8 0 0 0 4.77 1.58V6.69z"/></svg>
                  </TrackedLink>
                  <TrackedLink href="https://www.instagram.com/mancarsoftware?igsh=ZmdvbGg3eDhzN2Jo" eventName="social_click" eventPayload={{ network: "Instagram", location: "footer" }} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:bg-white hover:text-gray-950">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z"/><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/><circle cx="17.5" cy="6.5" r="1.1"/></svg>
                  </TrackedLink>
                  <TrackedLink href="https://github.com/MancarSoftware" eventName="social_click" eventPayload={{ network: "GitHub", location: "footer" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:bg-white hover:text-gray-950">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.23 2.56 2.56 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.48-1.34-5.48-5.95a4.65 4.65 0 0 1 1.24-3.22 4.31 4.31 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.31 4.31 0 0 1 .12 3.18 4.65 4.65 0 0 1 1.24 3.22c0 4.62-2.81 5.65-5.49 5.95a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5z"/></svg>
                  </TrackedLink>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Mancar Software. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
