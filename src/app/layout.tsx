import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mancar Software | Soluciones Tecnológicas que transforman negocios",
  description: "Expertos en migración a la nube, desarrollo de software a medida, infraestructura TI y ciberseguridad. Ayudamos a empresas a optimizar costos y maximizar su ROI.",
  keywords: "software, tecnología, cloud, desarrollo web, ciberseguridad, infraestructura TI, Quito, Ecuador",
  authors: [{ name: "Mancar Software" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Mancar Software | Soluciones Tecnológicas",
    description: "Transformamos negocios con tecnología de vanguardia.",
    url: "https://mancarsoftware.com",
    siteName: "Mancar Software",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Columna 1: Empresa */}
              <div>
                <h3 className="text-xl font-bold mb-4">Mancar Software</h3>
                <p className="text-gray-400 text-sm">
                  Soluciones tecnológicas que transforman negocios.
                </p>
              </div>
              {/* Columna 2: Enlaces rápidos */}
              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition">Inicio</a></li>
                  <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
                  <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
                </ul>
              </div>
              {/* Columna 3: Contacto */}
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>📞 +593 (9) 1234-5678</li>
                  <li>✉️ contacto@mancarsoftware.com</li>
                  <li>📍 Quito, Ecuador</li>
                </ul>
              </div>
              {/* Columna 4: Redes sociales */}
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
  )
}
