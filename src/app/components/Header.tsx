"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ChevronIconProps = { isOpen: boolean };

function ChevronIcon({ isOpen }: ChevronIconProps) {
  return (
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
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const linkClass = "rounded-full px-3 py-2 text-sm font-extrabold text-gray-600 transition hover:bg-gray-100 hover:text-gray-950";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-gray-50/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex items-center gap-2 text-xl font-extrabold tracking-tight text-gray-950">
          <Image
            src="/brand/mancar-mark.svg"
            alt="Logo de Mancar Software"
            width={38}
            height={38}
            priority
            className="h-9 w-9 rounded-xl shadow-sm transition duration-300 group-hover:scale-105"
          />
          <span className="font-display">Mancar<span className="text-primary-700">Software</span></span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 lg:flex">
          <div className="relative">
            <button onClick={() => toggleDropdown("nosotros")} className={`${linkClass} flex items-center gap-1`}>
              ¿Por qué nosotros?
              <ChevronIcon isOpen={openDropdown === "nosotros"} />
            </button>
            {openDropdown === "nosotros" && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-900/10">
                <Link href="/sobre-nosotros" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Sobre nosotros</Link>
                <Link href="/sobre-nosotros#equipo" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Equipo</Link>
                <Link href="/etica-y-conducta" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Ética y conducta</Link>
                <Link href="/politica-de-seguridad" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Política de seguridad</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown("soluciones")} className={`${linkClass} flex items-center gap-1`}>
              Soluciones
              <ChevronIcon isOpen={openDropdown === "soluciones"} />
            </button>
            {openDropdown === "soluciones" && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-900/10">
                <Link href="/soluciones/diseno-web" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Diseño Web Profesional</Link>
                <Link href="/soluciones/desarrollo-sistemas" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Desarrollo de Sistemas a Medida</Link>
                <Link href="/soluciones/mantenimiento-soporte" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Mantenimiento y Soporte Técnico</Link>
                <Link href="/soluciones/tiendas-virtuales" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Tiendas Virtuales</Link>
                <Link href="/soluciones/optimizacion-consultoria" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Optimización y Consultoría</Link>
                <Link href="/soluciones/acompanamiento-continuo" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}>Acompañamiento Continuo</Link>
              </div>
            )}
          </div>

          <Link href="/aplicativos-empresariales" className={linkClass}>Aplicativos</Link>
          <Link href="/soporte" className={linkClass}>Soporte</Link>
          <Link href="/contacto" className={linkClass}>Contacto</Link>
        </nav>

        <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Abrir menú" className="lg:hidden rounded-full border border-gray-200 p-2 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-gray-950/55 z-40 lg:hidden" onClick={closeMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/brand/mancar-mark.svg"
                  alt="Logo de Mancar Software"
                  width={34}
                  height={34}
                  className="h-8 w-8 rounded-xl"
                />
                <span className="font-bold text-gray-950">Mancar Software</span>
              </div>
              <button onClick={closeMobileMenu} aria-label="Cerrar menú" className="rounded-full border border-gray-200 p-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              <Link href="/sobre-nosotros" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Sobre nosotros</Link>
              <Link href="/sobre-nosotros#equipo" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Equipo</Link>
              <Link href="/etica-y-conducta" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Ética y conducta</Link>
              <Link href="/politica-de-seguridad" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Política de seguridad</Link>
              <div className="my-2 border-t border-gray-100"></div>
              <Link href="/soluciones/diseno-web" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Diseño Web Profesional</Link>
              <Link href="/soluciones/desarrollo-sistemas" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Desarrollo de Sistemas</Link>
              <Link href="/soluciones/mantenimiento-soporte" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Mantenimiento y Soporte</Link>
              <Link href="/soluciones/tiendas-virtuales" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Tiendas Virtuales</Link>
              <Link href="/soluciones/optimizacion-consultoria" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Optimización y Consultoría</Link>
              <Link href="/soluciones/acompanamiento-continuo" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Acompañamiento Continuo</Link>
              <div className="my-2 border-t border-gray-100"></div>
              <Link href="/aplicativos-empresariales" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Aplicativos Empresariales</Link>
              <Link href="/soporte" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Soporte</Link>
              <Link href="/contacto" className="rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}>Contacto</Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
