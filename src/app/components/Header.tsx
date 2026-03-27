"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Mancar<span className="text-primary-600">Software</span>
        </Link>

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

        <button className="md:hidden text-gray-600">☰</button>
      </div>
    </header>
  );
}