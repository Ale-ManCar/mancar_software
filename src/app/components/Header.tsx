"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Cerrar el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Mancar<span className="text-primary-600">Software</span>
        </Link>

        {/* Menú de navegación (escritorio) */}
        <nav className="hidden md:flex space-x-6">
          {/* Dropdown: ¿Por qué nosotros? */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("nosotros")}
              className="text-gray-600 hover:text-primary-600 transition flex items-center gap-1"
            >
              ¿Por qué nosotros?
              <ChevronIcon isOpen={openDropdown === "nosotros"} />
            </button>
            {openDropdown === "nosotros" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link href="/sobre-nosotros" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Sobre nosotros</Link>
                <Link href="/etica-y-conducta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Ética y conducta</Link>
                <Link href="/politica-de-seguridad" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Política de seguridad</Link>
              </div>
            )}
          </div>

          {/* Dropdown: Soluciones */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("soluciones")}
              className="text-gray-600 hover:text-primary-600 transition flex items-center gap-1"
            >
              Soluciones
              <ChevronIcon isOpen={openDropdown === "soluciones"} />
            </button>
            {openDropdown === "soluciones" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-10">
                <Link href="/soluciones/diseno-web" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Diseño Web Profesional</Link>
                <Link href="/soluciones/desarrollo-sistemas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Desarrollo de Sistemas a Medida</Link>
                <Link href="/soluciones/mantenimiento-soporte" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Mantenimiento y Soporte Técnico</Link>
                <Link href="/soluciones/tiendas-virtuales" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Tiendas Virtuales (E‑commerce)</Link>
                <Link href="/soluciones/optimizacion-consultoria" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Optimización y Consultoría</Link>
                <Link href="/soluciones/acompanamiento-continuo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Acompañamiento Continuo</Link>
              </div>
            )}
          </div>

          <Link href="/aplicativos-empresariales" className="text-gray-600 hover:text-primary-600 transition">Aplicativos Empresariales</Link>
          <Link href="/soporte" className="text-gray-600 hover:text-primary-600 transition">Soporte</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-primary-600 transition">Contacto</Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Menú móvil (panel lateral) */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden overflow-y-auto">
            <div className="flex justify-end p-4">
              <button onClick={closeMobileMenu} className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-6">
              <nav className="flex flex-col space-y-3">
                <Link href="/sobre-nosotros" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Sobre nosotros</Link>
                <Link href="/etica-y-conducta" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Ética y conducta</Link>
                <Link href="/politica-de-seguridad" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Política de seguridad</Link>
                <div className="border-t my-2"></div>
                <Link href="/soluciones/diseno-web" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Diseño Web Profesional</Link>
                <Link href="/soluciones/desarrollo-sistemas" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Desarrollo de Sistemas a Medida</Link>
                <Link href="/soluciones/mantenimiento-soporte" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Mantenimiento y Soporte Técnico</Link>
                <Link href="/soluciones/tiendas-virtuales" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Tiendas Virtuales (E‑commerce)</Link>
                <Link href="/soluciones/optimizacion-consultoria" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Optimización y Consultoría</Link>
                <Link href="/soluciones/acompanamiento-continuo" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Acompañamiento Continuo</Link>
                <div className="border-t my-2"></div>
                <Link href="/aplicativos-empresariales" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Aplicativos Empresariales</Link>
                <Link href="/soporte" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Soporte</Link>
                <Link href="/contacto" className="text-gray-700 hover:text-primary-600 py-2" onClick={closeMobileMenu}>Contacto</Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}