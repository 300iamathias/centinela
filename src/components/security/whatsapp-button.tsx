"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { SITE, WA_MESSAGES, waUrl } from "@/lib/site-config";

const emptySubscribe = () => () => {};

/** ¿El usuario ya cerró la burbuja en esta sesión? (sessionStorage, seguro para SSR) */
function useBubbleDismissed(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => {
      try {
        return sessionStorage.getItem("centinela-wa-bubble") === "off";
      } catch {
        return false;
      }
    },
    () => false,
  );
}

/**
 * Botón flotante de WhatsApp + burbuja de invitación a los 5 segundos
 * (cerrable y descartable por sesión). En móvil se oculta cuando la
 * barra inferior de CTA es visible para no duplicar (CRO: un objetivo por pantalla).
 */
export function WhatsAppButton() {
  const [bubble, setBubble] = useState(false);
  const dismissedBubble = useBubbleDismissed();

  useEffect(() => {
    // Mostrar la burbuja a los 5 segundos (asincrónico: permitido en effects)
    const t = setTimeout(() => setBubble(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const dismissBubble = () => {
    setBubble(false);
    try {
      sessionStorage.setItem("centinela-wa-bubble", "off");
    } catch {
      /* ignorar */
    }
  };

  return (
    <>
      {/* Burbuja de invitación */}
      {bubble && !dismissedBubble && (
        <div
          role="status"
          className="fixed bottom-[84px] right-4 md:bottom-24 md:right-6 z-40 max-w-[260px] rounded-md border border-steel-600 bg-ink-950/95 p-3 pr-8 text-sm text-paper-100 shadow-xl backdrop-blur"
        >
          <button
            type="button"
            onClick={dismissBubble}
            aria-label="Cerrar invitación"
            className="absolute right-1.5 top-1.5 rounded-full p-1 text-paper-100/60 hover:text-paper-50"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
          <p className="font-semibold text-signal-400">¿Necesitas proteger tu empresa?</p>
          <p className="mt-1 text-paper-100/80">
            Escríbenos y recibe una evaluación de seguridad gratuita.
          </p>
        </div>
      )}

      {/* Botón flotante (solo pantallas medianas o mayores: en móvil manda la barra inferior) */}
      <a
        href={waUrl(WA_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}

/**
 * Barra fija inferior en móvil (CRO handoff §6: CTA fijo inferior en móvil).
 * Dos acciones: llamar y cotizar por WhatsApp. En pantallas grandes se oculta.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-steel-700 bg-ink-950/95 backdrop-blur px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:+${SITE.whatsapp}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-steel-600 text-sm font-bold text-paper-50 active:bg-steel-800"
        >
          Llamar ahora
        </a>
        <a
          href={waUrl(WA_MESSAGES.quote)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-signal-500 text-sm font-bold text-ink-950 active:bg-signal-400"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}
