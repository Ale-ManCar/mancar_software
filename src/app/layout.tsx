import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Mancar Software | Soluciones Digitales",
  description: "Expertos en desarrollo web, sistemas a medida y mantenimiento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');`}</Script>
        <Header />
        {children}
        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Mancar Software</h3>
                <p className="text-gray-400 text-sm">
                  Soluciones tecnológicas que transforman negocios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
                  <li><Link href="/sobre-nosotros" className="hover:text-white transition">Sobre nosotros</Link></li>
                  <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
                  <li><Link href="/politica-de-privacidad" className="hover:text-white transition">Política de privacidad</Link></li>
                  <li><Link href="/aviso-legal" className="hover:text-white transition">Aviso legal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>📞 +593 (9) 8695-1419</li>
                  <li>✉️ contacto@mancarsoftware.com</li>
                  <li>📍 Guayaquil, Ecuador</li>
                  <li><Link href="/politica-de-privacidad" className="hover:text-white transition">Política de privacidad</Link></li>
                  <li><Link href="/aviso-legal" className="hover:text-white transition">Aviso legal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="https://www.tiktok.com/@mancar_software?_r=1&_t=ZS-96f2U0kQRCn" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35h-3.2v12.53a2.89 2.89 0 1 1-2-2.75V8.86a6.13 6.13 0 1 0 5.2 6v-6.4a8 8 0 0 0 4.77 1.58V6.69z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/mancarsoftware?igsh=ZmdvbGg3eDhzN2Jo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z"/><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/><circle cx="17.5" cy="6.5" r="1.1"/></svg>
                  </a>
                  <a href="https://github.com/MancarSoftware" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.23 2.56 2.56 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.48-1.34-5.48-5.95a4.65 4.65 0 0 1 1.24-3.22 4.31 4.31 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.31 4.31 0 0 1 .12 3.18 4.65 4.65 0 0 1 1.24 3.22c0 4.62-2.81 5.65-5.49 5.95a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Mancar Software. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}