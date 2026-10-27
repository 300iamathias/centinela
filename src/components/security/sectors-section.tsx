import { Building2, Factory, GraduationCap, Home, Store, Truck } from "lucide-react";
import { SECTORS } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

const ICONS = {
  Factory,
  Store,
  Home,
  Building2,
  Truck,
  GraduationCap,
} as const;

export function SectorsSection() {
  return (
    <section id="sectores" aria-labelledby="sectores-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Sectores</SectionEyebrow>
          <h2
            id="sectores-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
          >
            Donde ya sabemos qué vigilar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-steel-500">
            Protocolos específicos por tipo de instalación, porque una bodega no
            se vigila igual que una torre de oficinas.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SECTORS.map((sector, i) => {
            const Icon = ICONS[sector.icon as keyof typeof ICONS];
            return (
              <Reveal key={sector.title} delay={i * 0.05}>
                <li className="group flex h-full flex-col items-center gap-3 rounded-md border border-steel-600/25 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-signal-500/50 hover:shadow-lg hover:shadow-steel-700/10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-steel-800 transition-colors group-hover:bg-signal-500">
                    <Icon
                      className="h-6 w-6 text-signal-400 transition-colors group-hover:text-ink-950"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm font-semibold text-steel-700">
                    {sector.title}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
