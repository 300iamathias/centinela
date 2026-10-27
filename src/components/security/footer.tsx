"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { InstallAppButton } from "./install-app-button";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site-config";

const SOCIALS = [
  { name: "Facebook", href: SITE.social.facebook, icon: Facebook, aria: "Facebook de la empresa" },
  { name: "Instagram", href: SITE.social.instagram, icon: Instagram, aria: "Instagram de la empresa" },
  { name: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin, aria: "LinkedIn de la empresa" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-steel-950 text-paper-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images-security/logo.jpg"
                alt={`Logo de ${SITE.name}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-md object-cover ring-1 ring-signal-500/40"
              />
              <div className="leading-none">
                <p className="font-display text-xl font-bold uppercase tracking-wide text-paper-50">
                  Centinela
                </p>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-signal-400">
                  Seguridad privada · Ecuador
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper-100/60">
              Vigilancia física, monitoreo de alarmas y tecnología de seguridad
              electrónica para empresas, industrias y conjuntos residenciales.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.aria}
                  className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel-700 text-paper-100/80 transition-colors hover:border-signal-500/60 hover:text-signal-400"
                >
                  <s.icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios destacados">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-signal-400">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicios"
                    className="text-paper-100/70 transition-colors hover:text-signal-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menú */}
          <nav aria-label="Mapa del sitio">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-signal-400">
              Explora
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-paper-100/70 transition-colors hover:text-signal-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-signal-400">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${SITE.whatsapp}`}
                  className="flex items-center gap-2.5 text-paper-100/70 transition-colors hover:text-signal-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-signal-500" aria-hidden />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-paper-100/70 transition-colors hover:text-signal-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-signal-500" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-paper-100/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" aria-hidden />
                {SITE.address}
              </li>
            </ul>
            <div className="mt-5">
              <InstallAppButton
                variant="outline"
                size="sm"
                label="Instalar la app"
                className="w-full border-signal-500/70 bg-signal-500/10 text-signal-400 hover:border-signal-500 hover:bg-signal-500 hover:text-ink-950"
              />
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div aria-hidden className="mt-12 h-px w-full signal-divider opacity-40" />

        {/* Barra inferior */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-xs text-paper-100/50">
            © {year} {SITE.name} · Todos los derechos reservados
            {SITE.isDemo && (
              <span className="text-paper-100/35">
                {" "}· Sitio demostrativo
              </span>
            )}
          </p>
        </div>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-paper-100/35">
          Sitio demostrativo con datos, cifras, testimonios y fotografías
          ilustrativas (generadas con IA); el contenido se reemplaza por la
          información real del cliente antes de publicar.
        </p>
      </div>

      {/* Firma JIMBRA — apunta a jimbra.net */}
      <div className="border-t border-signal-500/25 bg-black">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-paper-100/55">
          Desarrollado por{" "}
          <a
            href={SITE.designerCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-signal-400 underline-offset-4 transition-colors hover:text-signal-300 hover:underline"
          >
            {SITE.designerCredit.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
