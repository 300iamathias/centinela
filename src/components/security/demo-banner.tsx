"use client";

import { TriangleAlert, X } from "lucide-react";
import { useDemoBanner } from "@/lib/demo-banner-store";
import { useHydrated } from "@/hooks/use-hydrated";

/**
 * Franja fija superior que avisa al cliente que el sitio es una DEMO
 * (maquetación de propuesta), igual que el aviso de norkaesparza.jimbra.net.
 * Se puede cerrar con la X; reaparece en la próxima visita.
 */
export function DemoBanner() {
  const mounted = useHydrated();
  const dismissed = useDemoBanner((s) => s.dismissed);
  const dismiss = useDemoBanner((s) => s.dismiss);

  // En el servidor siempre se muestra; tras hidratar se respeta lo guardado.
  if (mounted && dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de vista previa"
      className="relative bg-ink-950 text-paper-50 shadow-[0_2px_20px_rgba(10,15,20,0.55)] backdrop-blur-md"
    >
      {/* Línea ámbar superior */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,176,32,0.7), transparent)",
        }}
      />
      <div className="border-b border-signal-500/40">
        <div className="mx-auto max-w-7xl px-4 pr-12 sm:px-6 sm:pr-16">
          <div className="flex items-center justify-center gap-2 py-2 text-center">
            <TriangleAlert
              className="hidden h-3.5 w-3.5 shrink-0 text-signal-500 sm:block"
              aria-hidden
            />
            <p className="text-[10px] leading-snug tracking-wide text-paper-100/80 sm:text-[11px]">
              <span className="mr-2 font-semibold uppercase tracking-[0.18em] text-signal-400">
                Modo Vista Previa
              </span>
              <span className="hidden sm:inline text-paper-100/90">
                Este sitio es una propuesta de maquetación técnica y visual.
                Los datos, cifras y proyectos mostrados son únicamente de
                referencia y se personalizarán con la información real del
                cliente.
              </span>
              <span className="sm:hidden text-paper-100/90">
                Propuesta demo: los datos y cifras son de referencia y se
                personalizarán con la información real.
              </span>
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Cerrar aviso de vista previa"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-paper-100/70 transition-colors hover:bg-signal-500/10 hover:text-signal-400"
            >
              <X className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
