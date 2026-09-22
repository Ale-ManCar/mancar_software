"use client";

import Text from "../i18n/Text";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "../i18n/LocalizedImage";
import { publicAsset } from "../asset-paths";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../i18n/LanguageProvider";

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
  const { t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const linkClass = "rounded-full px-3 py-2 text-sm font-extrabold text-gray-600 transition hover:bg-gray-100 hover:text-gray-950";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-gray-50/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="group flex min-h-11 items-center">
          <Image
            src={publicAsset("/brand/mancar-logo.png")}
            alt="Logo de Mancar Software"
            width={230}
            height={64}
            priority
            className="h-10 w-auto max-w-[6.5rem] object-contain transition duration-300 group-hover:scale-[1.02] sm:h-11 sm:max-w-none"
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 xl:flex">
          <div className="relative">
            <button onClick={() => toggleDropdown("nosotros")} className={`${linkClass} flex items-center gap-1`}><Text>
              ¿Por qué nosotros?
              </Text><ChevronIcon isOpen={openDropdown === "nosotros"} />
            </button>
            {openDropdown === "nosotros" && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-900/10">
                <Link href="/sobre-nosotros" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Sobre nosotros</Text></Link>
                <Link href="/sobre-nosotros#equipo" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Equipo</Text></Link>
                <Link href="/etica-y-conducta" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Ética y conducta</Text></Link>
                <Link href="/politica-de-seguridad" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Política de seguridad</Text></Link>
                <Link href="/politica-de-cookies" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Política de cookies</Text></Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown("soluciones")} className={`${linkClass} flex items-center gap-1`}><Text>
              Soluciones
              </Text><ChevronIcon isOpen={openDropdown === "soluciones"} />
            </button>
            {openDropdown === "soluciones" && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-900/10">
                <Link href="/soluciones/diseno-web" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Diseño Web Profesional</Text></Link>
                <Link href="/soluciones/desarrollo-sistemas" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Desarrollo de Sistemas a Medida</Text></Link>
                <Link href="/soluciones/mantenimiento-soporte" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Mantenimiento y Soporte Técnico</Text></Link>
                <Link href="/soluciones/tiendas-virtuales" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Tiendas Virtuales</Text></Link>
                <Link href="/soluciones/optimizacion-consultoria" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Optimización y Consultoría</Text></Link>
                <Link href="/soluciones/acompanamiento-continuo" className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700" onClick={() => setOpenDropdown(null)}><Text>Acompañamiento Continuo</Text></Link>
              </div>
            )}
          </div>

          <Link href="/aplicativos-empresariales" className={linkClass}><Text>Aplicativos</Text></Link>
          <Link href="/soporte" className={linkClass}><Text>Soporte</Text></Link>
          <Link href="/contacto" className={linkClass}><Text>Contacto</Text></Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
        <LanguageSelector />
        <button onClick={() => setIsMobileMenuOpen(true)} aria-label={t("Abrir menú")} className="xl:hidden rounded-full border border-gray-200 p-2 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 min-h-dvh bg-gray-950/55 xl:hidden" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 end-0 z-50 min-h-dvh w-[min(20rem,88vw)] overflow-y-auto bg-white shadow-2xl xl:hidden">
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <div className="flex items-center gap-2">
                <Image
                  src={publicAsset("/brand/mancar-mark.png")}
                  alt="Logo de Mancar Software"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-gray-950"><Text>Mancar Software</Text></span>
              </div>
              <button onClick={closeMobileMenu} aria-label={t("Cerrar menú")} className="rounded-full border border-gray-200 p-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              <button
                type="button"
                aria-expanded={openDropdown === "mobile-nosotros"}
                onClick={() => toggleDropdown("mobile-nosotros")}
                className="flex min-h-11 items-center justify-between rounded-xl px-3 py-2 text-start font-bold text-gray-800 hover:bg-primary-50"
              ><Text>
                ¿Por qué nosotros?
                </Text><ChevronIcon isOpen={openDropdown === "mobile-nosotros"} />
              </button>
              {openDropdown === "mobile-nosotros" && (
                <div className="ms-3 grid gap-1 border-s border-gray-100 ps-3">
                  <Link href="/sobre-nosotros" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Sobre nosotros</Text></Link>
                  <Link href="/sobre-nosotros#equipo" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Equipo</Text></Link>
                  <Link href="/etica-y-conducta" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Ética y conducta</Text></Link>
                  <Link href="/politica-de-seguridad" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Política de seguridad</Text></Link>
                  <Link href="/politica-de-cookies" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Política de cookies</Text></Link>
                </div>
              )}
              <div className="my-2 border-t border-gray-100"></div>
              <button
                type="button"
                aria-expanded={openDropdown === "mobile-soluciones"}
                onClick={() => toggleDropdown("mobile-soluciones")}
                className="flex min-h-11 items-center justify-between rounded-xl px-3 py-2 text-start font-bold text-gray-800 hover:bg-primary-50"
              ><Text>
                Soluciones
                </Text><ChevronIcon isOpen={openDropdown === "mobile-soluciones"} />
              </button>
              {openDropdown === "mobile-soluciones" && (
                <div className="ms-3 grid gap-1 border-s border-gray-100 ps-3">
                  <Link href="/soluciones/diseno-web" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Diseño Web Profesional</Text></Link>
                  <Link href="/soluciones/desarrollo-sistemas" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Desarrollo de Sistemas</Text></Link>
                  <Link href="/soluciones/mantenimiento-soporte" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Mantenimiento y Soporte</Text></Link>
                  <Link href="/soluciones/tiendas-virtuales" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Tiendas Virtuales</Text></Link>
                  <Link href="/soluciones/optimizacion-consultoria" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Optimización y Consultoría</Text></Link>
                  <Link href="/soluciones/acompanamiento-continuo" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Acompañamiento Continuo</Text></Link>
                </div>
              )}
              <div className="my-2 border-t border-gray-100"></div>
              <Link href="/aplicativos-empresariales" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Aplicativos Empresariales</Text></Link>
              <Link href="/soporte" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Soporte</Text></Link>
              <Link href="/contacto" className="flex min-h-11 items-center rounded-xl px-3 py-2 text-gray-700 hover:bg-primary-50" onClick={closeMobileMenu}><Text>Contacto</Text></Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
