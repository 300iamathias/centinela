"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DemoBannerState {
  /** true si el cliente ya cerró la franja en esta sesión */
  dismissed: boolean;
  dismiss: () => void;
}

/**
 * Estado de la franja «Modo Vista Previa».
 * Se guarda en sessionStorage: si el cliente cierra el aviso no vuelve
 * a aparecer mientras navega, pero SÍ reaparece en su próxima visita
 * (así siempre sabe que el sitio es una demo y no la versión final).
 */
export const useDemoBanner = create<DemoBannerState>()(
  persist(
    (set) => ({
      dismissed: false,
      dismiss: () => set({ dismissed: true }),
    }),
    {
      name: "centinela-demo-banner",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
