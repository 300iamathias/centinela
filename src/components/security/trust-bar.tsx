"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/site-config";

function CountUp({
  value,
  suffix,
  suffixText,
  reduce,
}: {
  value: number;
  suffix: string;
  suffixText: string;
  reduce: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduce ? value : display}
      {suffix}
      {suffixText && <small className="ml-1 text-base font-semibold">{suffixText}</small>}
    </span>
  );
}

/** Barra de cifras — ⚠️ datos de demostración (handoff §5.2) */
export function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Cifras de la empresa"
      className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-4 sm:px-6"
    >
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-steel-600 shadow-xl shadow-ink-950/15 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 bg-white px-4 py-6 text-center"
          >
            <dd className="font-display text-3xl sm:text-4xl font-bold text-steel-700">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                suffixText={stat.suffixText}
                reduce={!!reduce}
              />
            </dd>
            <dt className="text-xs sm:text-sm font-medium text-steel-400">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
