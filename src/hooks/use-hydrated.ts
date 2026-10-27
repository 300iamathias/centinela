"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Devuelve false durante SSR/primer render del servidor y true en el cliente.
 * Sirve para leer estado persistido (carrito, localStorage) sin romper la hidratación.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
