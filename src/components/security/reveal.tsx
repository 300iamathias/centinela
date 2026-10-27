"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Aparición suave al hacer scroll, respetando prefers-reduced-motion */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.65, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Etiqueta ámbar pequeña para encabezados de sección */
export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-signal-600 font-semibold tracking-[0.18em] text-xs uppercase">
      <span aria-hidden className="inline-block h-px w-8 signal-divider" />
      {children}
      <span aria-hidden className="inline-block h-px w-8 signal-divider" />
    </p>
  );
}
