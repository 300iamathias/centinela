"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { DemoBanner } from "./demo-banner";
import { InstallAppButton } from "./install-app-button";
import { NAV_LINKS, SITE, WA_MESSAGES, waUrl } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-steel-700 focus:text-paper-50 focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Saltar al contenido
      </a>
      <header className="fixed top-0 inset-x-0 z-50">
        {/* Franja «Modo Vista Previa» (demo) — se puede cerrar con la X */}
        <DemoBanner />
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-ink-950/95 backdrop-blur border-b border-steel-700/60 shadow-[0_2px_20px_rgba(10,15,20,0.4)]"
              : "bg-ink-950/80 backdrop-blur-sm"
          }`}
        >
          <nav
            aria-label="Navegación principal"
            className="mx-auto max-w-7xl px-4 sm:px-6"
          >
            <div className="flex h-16 items-center justify-between gap-3">
              {/* Marca */}
              <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${SITE.name} — inicio`}>
                <Image
                  src="/images-security/logo.jpg"
                  alt={`Logo de ${SITE.name}`}
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 rounded-md object-cover ring-1 ring-signal-500/40"
                />
                <span className="hidden sm:block leading-none">
                  <span className="block font-display text-xl font-bold uppercase tracking-wide text-paper-50">
                    Centinela
                  </span>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-signal-400 mt-1">
                    Seguridad privada · Ecuador
                  </span>
                </span>
              </Link>

              {/* Enlaces escritorio */}
              <ul className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="px-3 py-2 rounded-sm text-sm font-medium text-paper-100/80 hover:text-signal-400 hover:bg-steel-800/60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Acciones */}
              <div className="flex items-center gap-2">
                {/* Llamada directa (CRO handoff §8) — número completo solo en xl */}
                <a
                  href={`tel:+${SITE.whatsapp}`}
                  aria-label="Llamar por teléfono"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-steel-600 text-paper-100 transition-colors hover:border-signal-500/60 hover:text-signal-400 xl:w-auto xl:px-4 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  <span className="hidden xl:inline whitespace-nowrap">{SITE.whatsappDisplay}</span>
                </a>

                {/* SOS emergencias 24/7 — lead más caliente */}
                <a
                  href={`tel:+${SITE.whatsapp}`}
                  aria-label="SOS emergencias 24/7 — llamar a la central"
                  className="hidden sm:inline-flex h-9 shrink-0 items-center gap-1.5 rounded-sm border border-alert-500/60 bg-alert-500/10 px-2.5 text-xs font-bold uppercase tracking-[0.14em] text-alert-500 transition-colors hover:bg-alert-500 hover:text-white"
                >
                  <Siren className="h-3.5 w-3.5" aria-hidden />
                  SOS
                </a>

                <div className="hidden xl:block">
                  <InstallAppButton
                    variant="outline"
                    size="sm"
                    label="Instalar app"
                    className="border-signal-500/70 bg-signal-500/10 text-signal-400 hover:border-signal-500 hover:bg-signal-500 hover:text-ink-950"
                  />
                </div>

                <Button
                  size="sm"
                  className="hidden shrink-0 sm:inline-flex bg-signal-500 text-ink-950 hover:bg-signal-400 font-bold shadow-sm shadow-signal-500/20"
                  asChild
                >
                  <a
                    href={waUrl(WA_MESSAGES.hero)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar ahora
                  </a>
                </Button>

                <button
                  type="button"
                  className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm text-paper-100 hover:bg-steel-800/60"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Abrir menú"
                  aria-expanded={menuOpen}
                >
                  <Menu className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Menú móvil */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="w-[300px] bg-ink-950 text-paper-50 p-0 flex flex-col border-steel-700"
        >
          <div className="flex items-center justify-between p-4 border-b border-steel-700">
            <SheetTitle className="flex items-center gap-2 font-display font-bold uppercase text-paper-50">
              <Image
                src="/images-security/logo.jpg"
                alt=""
                width={34}
                height={34}
                className="h-9 w-9 rounded object-cover ring-1 ring-signal-500/40"
              />
              Centinela
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menú de navegación de {SITE.name}
            </SheetDescription>
          </div>
          <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto scroll-steel">
            <ul className="p-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-12 items-center rounded-sm px-4 text-base font-medium text-paper-100/85 hover:bg-steel-800/70 hover:text-signal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-steel-700 p-4 space-y-2">
            <InstallAppButton
              variant="outline"
              className="w-full border-signal-500/70 bg-signal-500/10 text-signal-400 hover:border-signal-500 hover:bg-signal-500 hover:text-ink-950"
              label="Instalar app en tu celular"
            />
            <Button
              asChild
              className="w-full bg-signal-500 text-ink-950 hover:bg-signal-400 font-bold"
            >
              <a
                href={waUrl(WA_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="w-full border-steel-600 text-paper-100 hover:bg-steel-800/60"
            >
              <a href={`tel:+${SITE.whatsapp}`}>{SITE.whatsappDisplay}</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
