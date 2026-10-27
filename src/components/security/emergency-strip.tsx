import { MessageCircle, Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WA_MESSAGES, waUrl } from "@/lib/site-config";

/**
 * Banda roja de emergencias: refuerza la promesa 24/7 y captura al visitante
 * con urgencia real (el lead más caliente). Llamada directa + SOS WhatsApp.
 */
export function EmergencyStrip() {
  return (
    <section
      aria-label="Línea de emergencias 24/7"
      className="relative overflow-hidden border-y border-alert-600/30 bg-ink-950"
    >
      {/* Resplandor rojo sutil de fondo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_130%_at_18%_50%,rgba(229,72,77,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(45%_120%_at_85%_50%,rgba(255,176,32,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-alert-500/15 ring-1 ring-alert-500/60">
            <Siren className="h-5 w-5 text-alert-500" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-paper-50">
              ¿Emergencia?
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alert-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-alert-500" />
              </span>
            </p>
            <p className="text-sm leading-snug text-paper-100/80">
              Nuestra central responde{" "}
              <strong className="font-semibold text-paper-50">de inmediato</strong>{" "}
              — 24 horas, los 365 días del año.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="min-h-12 bg-alert-500 font-bold text-white shadow-lg shadow-alert-500/30 hover:bg-alert-600"
          >
            <a href={`tel:+${SITE.whatsapp}`}>
              <Phone className="h-4 w-4" aria-hidden />
              Llamar a la central
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-h-12 border-steel-500/70 bg-transparent text-paper-100 hover:border-signal-400/70 hover:bg-steel-800/60 hover:text-signal-300"
          >
            <a
              href={waUrl(WA_MESSAGES.sos)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              SOS por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
