import { Clock, Mail, MapPinned, MapPin, Phone } from "lucide-react";
import { COVERAGE_ZONES, SITE } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

export function MapSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Contacto</SectionEyebrow>
          <h2
            id="contacto-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
          >
            Estamos donde nos necesites
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Datos de contacto */}
          <Reveal className="lg:col-span-2 min-w-0">
            <div className="flex h-full flex-col justify-between gap-6 rounded-md border border-steel-600/25 bg-white p-6 sm:p-8 shadow-sm">
              <ul className="space-y-5">
                <li>
                  <a
                    href={`tel:+${SITE.whatsapp}`}
                    className="flex items-start gap-3.5 group"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 transition-colors group-hover:bg-signal-500">
                      <Phone className="h-5 w-5 text-signal-400 transition-colors group-hover:text-ink-950" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-400">
                        Llámanos
                      </span>
                      <span className="mt-0.5 block font-semibold text-ink-950 group-hover:text-signal-600">
                        {SITE.whatsappDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-3.5 group">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 transition-colors group-hover:bg-signal-500">
                      <Mail className="h-5 w-5 text-signal-400 transition-colors group-hover:text-ink-950" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-400">
                        Escríbenos
                      </span>
                      <span className="mt-0.5 block font-semibold text-ink-950 group-hover:text-signal-600">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800">
                    <MapPin className="h-5 w-5 text-signal-400" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-400">
                      Oficinas
                    </span>
                    <span className="mt-0.5 block font-semibold text-ink-950">
                      {SITE.address}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="rounded-sm border border-steel-600/20 bg-paper-100/70 p-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-steel-400">
                  <Clock className="h-4 w-4 text-signal-500" aria-hidden />
                  Horario de atención
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="flex items-baseline justify-between gap-4">
                      <dt className="font-medium text-steel-500">{h.day}</dt>
                      <dd className="text-right font-bold text-ink-950">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-sm border border-steel-600/20 bg-paper-100/70 p-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-steel-400">
                  <MapPinned className="h-4 w-4 text-signal-500" aria-hidden />
                  Zonas de cobertura
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {COVERAGE_ZONES.map((zone) => (
                    <li
                      key={zone}
                      className="rounded-full border border-steel-600/25 bg-white px-3 py-1 text-xs font-semibold text-steel-500"
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1} className="lg:col-span-3 min-w-0">
            <div className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-md border border-steel-600/25 shadow-sm">
              {/* Cabecera del mapa: dirección + cómo llegar */}
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-steel-600/20 bg-white px-4 py-2.5">
                <p className="flex min-w-0 items-center gap-2 text-xs font-semibold text-steel-500">
                  <MapPin className="h-4 w-4 shrink-0 text-signal-500" aria-hidden />
                  <span className="truncate">{SITE.address}</span>
                </p>
                <a
                  href={SITE.mapDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-signal-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-signal-600 transition-colors hover:bg-signal-500 hover:text-ink-950"
                >
                  <MapPinned className="h-3.5 w-3.5" aria-hidden />
                  Cómo llegar
                </a>
              </div>
              <iframe
                src={mapSrc}
                title={`Mapa con la ubicación de ${SITE.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[300px] w-full flex-1 border-0 grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6 text-center">
          <p className="text-xs text-steel-400/80">
            ⚠️ Dirección de demostración — se actualiza con la ubicación real de
            la empresa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
