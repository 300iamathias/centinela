import { CLIENTS } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

/**
 * Clientes — ⚠️ MARCADORES de demo: nombres ficticios en gris.
 * Reemplazar por logos autorizados por los clientes reales.
 */
export function ClientsSection() {
  return (
    <section aria-labelledby="clientes-title" className="py-14 sm:py-18 border-y border-steel-600/20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <SectionEyebrow>Confían en nosotros</SectionEyebrow>
          <h2
            id="clientes-title"
            className="sr-only"
          >
            Clientes de {`Centinela`}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 items-center">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="font-display text-sm font-bold uppercase tracking-[0.14em] text-steel-400/70 text-center select-none"
              >
                {client}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-[11px] text-steel-400/70">
            Marcadores de demostración — se reemplazan por los logos autorizados
            de los clientes reales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
