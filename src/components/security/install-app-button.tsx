"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Download, Share, PlusSquare, Smartphone, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/site-config";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

/** ¿Está la web ya instalada como app? Suscrito al display-mode (reactivo) */
function useStandalone(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(display-mode: standalone)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true,
    () => false,
  );
}

/**
 * Botón «Instalar app»: usa el prompt nativo de Android/Chrome y
 * muestra instrucciones en iPhone (Safari no soporta el prompt nativo).
 */
export function InstallAppButton({
  variant = "default",
  size = "default",
  className = "",
  label = "Instalar app",
  iconOnly = false,
}: {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  label?: string;
  iconOnly?: boolean;
}) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const standalone = useStandalone();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const installed = () => {
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", installed);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installed);
    };
  }, []);

  const onClick = useCallback(() => {
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.finally(() => setDeferred(null));
      return;
    }
    setHelpOpen(true); // iOS o sin prompt disponible: mostrar instrucciones
  }, [deferred]);

  if (standalone) return null;

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={onClick}
        aria-label="Instalar la aplicación en tu celular"
        className={`group ${className}`}
      >
        <Download
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
          aria-hidden
        />
        {!iconOnly && <span>{label}</span>}
      </Button>

      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="sm:max-w-md bg-paper-50 border-signal-500/40">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2 text-ink-950">
              <Smartphone className="h-5 w-5 text-signal-600" aria-hidden />
              Instala {SITE.name} en tu celular
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-left space-y-3 pt-2 text-steel-500">
                <p>
                  Funciona igual que una app: ícono en tu pantalla, pantalla
                  completa y funciona incluso con internet lento.
                </p>
                <ol className="space-y-3">
                {isIOS() ? (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-700 text-paper-50 text-xs font-bold">
                        1
                      </span>
                      <span>
                        Abre esta página en <strong>Safari</strong> y toca el
                        botón <strong>Compartir</strong>
                      </span>
                      <Share
                        className="h-4 w-4 mt-1 ml-1 text-steel-500 shrink-0"
                        aria-hidden
                      />
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-700 text-paper-50 text-xs font-bold">
                        2
                      </span>
                      <span>
                        Baja y toca <strong>«Añadir a pantalla de inicio»</strong>
                      </span>
                      <PlusSquare
                        className="h-4 w-4 mt-1 ml-1 text-steel-500 shrink-0"
                        aria-hidden
                      />
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-700 text-paper-50 text-xs font-bold">
                        3
                      </span>
                      <span>
                        Confirma con <strong>«Añadir»</strong>. ¡Listo, ya estás
                        protegido!
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-700 text-paper-50 text-xs font-bold">
                        1
                      </span>
                      <span className="flex items-start gap-1">
                        En el navegador toca el menú
                        <MoreVertical
                          className="h-4 w-4 mt-0.5 text-steel-500"
                          aria-hidden
                        />
                        <em>(tres puntitos)</em>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-steel-700 text-paper-50 text-xs font-bold">
                        2
                      </span>
                      <span>
                        Elige <strong>«Instalar aplicación»</strong> o «Añadir a
                        pantalla de inicio»
                      </span>
                    </li>
                  </>
                )}
                </ol>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
