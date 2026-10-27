"use client";

import { useEffect } from "react";

/** Registra el service worker para que la web sea instalable en el celular */
export function SwRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const register = () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
          /* registro silencioso: no afecta el funcionamiento del sitio */
        });
      };
      if (document.readyState === "complete") register();
      else {
        window.addEventListener("load", register);
        return () => window.removeEventListener("load", register);
      }
    }
  }, []);
  return null;
}
