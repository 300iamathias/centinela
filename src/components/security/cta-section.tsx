import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { WA_MESSAGES, waUrl } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-monitor-dark py-20 sm:py-24">
      {/* Cuadrícula + haz ámbar */}
      <div aria-hidden className="absolute inset-0 bg-grid-monitor opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,176,32,0.7), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-sm border border-steel-600/80 bg-steel-900/70 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-paper-100">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Central de monitoreo activa · 24/7
          </p>
          <h2
            id="cta-title"
            className="mt-6 font-display text-3xl sm:text-5xl font-bold uppercase leading-[1.02] tracking-tight text-paper-50 text-balance"
          >
            ¿Listo para proteger lo que más valoras?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-paper-100/70">
            La evaluación de seguridad es gratuita y sin compromiso. En una
            visita te decimos exactamente dónde estás expuesto.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="min-h-14 bg-signal-500 text-ink-950 hover:bg-signal-400 px-9 text-base font-bold uppercase tracking-wide shadow-xl shadow-signal-500/25"
            >
              <a
                href={waUrl(WA_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar evaluación gratuita
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
