"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Building2, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, SectionEyebrow } from "./reveal";
import { QUOTE_OPTIONS, SITE, waUrl } from "@/lib/site-config";

/**
 * Cotizador rápido (handoff §5.10): formulario SIN backend que arma un
 * mensaje de WhatsApp con lo elegido y abre wa.me. Es el elemento que
 * más impresiona en la demo.
 */
export function QuoteSection() {
  const [service, setService] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const complete = service && place && city && size;

  const waHref = useMemo(() => {
    const message = [
      `Hola ${SITE.shortName} 👋 Quiero una cotización de seguridad.`,
      "",
      `• Servicio: ${service}`,
      `• Tipo de lugar: ${place}`,
      `• Ciudad: ${city}`,
      `• Tamaño: ${size}`,
      "",
      "¿Me ayudan con una evaluación y precio?",
    ].join("\n");
    return waUrl(message);
  }, [service, place, city, size]);

  return (
    <section id="cotizar" aria-labelledby="cotizar-title" className="scroll-mt-24 bg-monitor-dark py-20 sm:py-28 relative overflow-hidden">
      {/* Cuadrícula de fondo */}
      <div aria-hidden className="absolute inset-0 bg-grid-monitor opacity-50" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Cotización express</SectionEyebrow>
          <h2
            id="cotizar-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-paper-50 text-balance"
          >
            Tu cotización en <span className="text-gradient-signal">4 pasos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-paper-100/70">
            Elige lo que necesitas y te enviamos el mensaje listo para abrir el
            chat. Sin formularios eternos ni esperas.
          </p>
        </div>

        <Reveal delay={0.1}>
          <form
            className="mt-10 rounded-md border border-steel-700/70 bg-steel-900/80 p-6 sm:p-8 backdrop-blur shadow-2xl shadow-ink-950/40"
            onSubmit={(e) => {
              e.preventDefault();
              if (complete) window.open(waHref, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Servicio */}
              <div className="sm:col-span-2">
                <label htmlFor="quote-service" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-paper-100/70">
                  <Wrench className="h-3.5 w-3.5 text-signal-400" aria-hidden />
                  ¿Qué servicio necesitas?
                </label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="quote-service" className="mt-2 h-12 border-steel-600 bg-ink-950/60 text-paper-50 focus:ring-signal-500">
                    <SelectValue placeholder="Elige un servicio" />
                  </SelectTrigger>
                  <SelectContent className="border-steel-700 bg-steel-900 text-paper-50">
                    {QUOTE_OPTIONS.services.map((s) => (
                      <SelectItem key={s} value={s} className="focus:bg-steel-800 focus:text-signal-400">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Lugar */}
              <div>
                <label htmlFor="quote-place" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-paper-100/70">
                  <Building2 className="h-3.5 w-3.5 text-signal-400" aria-hidden />
                  Tipo de lugar
                </label>
                <Select value={place} onValueChange={setPlace}>
                  <SelectTrigger id="quote-place" className="mt-2 h-12 border-steel-600 bg-ink-950/60 text-paper-50 focus:ring-signal-500">
                    <SelectValue placeholder="Elige el lugar" />
                  </SelectTrigger>
                  <SelectContent className="border-steel-700 bg-steel-900 text-paper-50">
                    {QUOTE_OPTIONS.places.map((p) => (
                      <SelectItem key={p} value={p} className="focus:bg-steel-800 focus:text-signal-400">
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Ciudad */}
              <div>
                <label htmlFor="quote-city" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-paper-100/70">
                  <MapPin className="h-3.5 w-3.5 text-signal-400" aria-hidden />
                  Ciudad
                </label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger id="quote-city" className="mt-2 h-12 border-steel-600 bg-ink-950/60 text-paper-50 focus:ring-signal-500">
                    <SelectValue placeholder="Elige la ciudad" />
                  </SelectTrigger>
                  <SelectContent className="border-steel-700 bg-steel-900 text-paper-50">
                    {QUOTE_OPTIONS.cities.map((c) => (
                      <SelectItem key={c} value={c} className="focus:bg-steel-800 focus:text-signal-400">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tamaño */}
              <div className="sm:col-span-2">
                <label htmlFor="quote-size" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-paper-100/70">
                  <Users className="h-3.5 w-3.5 text-signal-400" aria-hidden />
                  ¿Cuántos puestos o cámaras?
                </label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger id="quote-size" className="mt-2 h-12 border-steel-600 bg-ink-950/60 text-paper-50 focus:ring-signal-500">
                    <SelectValue placeholder="Elige el tamaño de la operación" />
                  </SelectTrigger>
                  <SelectContent className="border-steel-700 bg-steel-900 text-paper-50">
                    {QUOTE_OPTIONS.sizes.map((s) => (
                      <SelectItem key={s} value={s} className="focus:bg-steel-800 focus:text-signal-400">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={!complete}
              className="mt-7 w-full min-h-14 bg-signal-500 text-ink-950 text-base font-bold uppercase tracking-wide shadow-lg shadow-signal-500/25 enabled:hover:bg-signal-400 disabled:opacity-40"
              aria-disabled={!complete}
            >
              {complete ? "Solicitar cotización por WhatsApp" : "Completa los 4 campos para continuar"}
              {complete && <ArrowRight className="h-5 w-5" aria-hidden />}
            </Button>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-paper-100/45">
              Se abrirá WhatsApp con tu solicitud ya escrita. ⚠️ En esta demo el
              mensaje va a un número de prueba; en la versión final llega directo
              a la empresa.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
