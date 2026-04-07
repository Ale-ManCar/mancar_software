import type { Metadata } from "next";
import Link from "next/link";
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
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>📞 +593 (9) 8695-1419</li>
                  <li>✉️ contacto@mancarsoftware.com</li>
                  <li>📍 Guayaquil, Ecuador</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
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