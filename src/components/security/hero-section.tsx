"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Radio, ShieldCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstallAppButton } from "./install-app-button";
import { LiveClock } from "./live-clock";
import { WA_MESSAGES, waUrl } from "@/lib/site-config";

const CHIPS = [
  { icon: Radio, label: "Central de monitoreo 24/7" },
  { icon: ShieldCheck, label: "Personal capacitado y supervisado" },
  { icon: Timer, label: "Respuesta rápida ante incidentes" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.35, 1] as const },
        };

  return (
    <section
      id="inicio"
      className="relative bg-monitor-dark overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images-security/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        {/* Cuadrícula fina tipo sala de monitoreo */}
        <div className="absolute inset-0 bg-grid-monitor opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="max-w-3xl">
          {/* Indicador pulsante: central activa */}
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2.5 rounded-sm border border-steel-600/80 bg-steel-900/70 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-paper-100"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="hidden sm:inline">Central de monitoreo activa · 24/7 ·</span>
            <span className="sm:hidden">Central activa ·</span>
            <LiveClock />
            <span className="text-paper-100/60">ECT</span>
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            id="hero-title"
            className="mt-6 font-display text-4xl sm:text-6xl lg:text-[4.4rem] font-bold uppercase leading-[0.98] tracking-tight text-paper-50 text-balance"
          >
            Protegemos lo que más valoras,{" "}
            <span className="text-gradient-signal">las 24 horas</span>
          </motion.h1>

          <motion.p
            {...fade(0.24)}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-paper-100/85"
          >
            Vigilancia física, monitoreo de alarmas y tecnología de seguridad
            electrónica para empresas, industrias y conjuntos residenciales.
          </motion.p>

          <motion.div {...fade(0.36)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="min-h-12 bg-signal-500 text-ink-950 hover:bg-signal-400 font-bold text-base shadow-lg shadow-signal-500/25 px-7"
            >
              <a
                href={waUrl(WA_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Evaluación de seguridad gratuita
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 border-steel-500/60 bg-transparent text-paper-100 hover:bg-steel-800/60 hover:text-paper-50 px-7 text-base"
            >
              <a href="#servicios">
                Ver servicios
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </motion.div>

          <motion.ul
            {...fade(0.5)}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {CHIPS.map((chip) => (
              <li
                key={chip.label}
                className="flex items-center gap-2 text-sm text-paper-100/85"
              >
                <chip.icon className="h-4 w-4 text-signal-400" aria-hidden />
                {chip.label}
              </li>
            ))}
            <li className="flex items-center gap-2 text-sm text-paper-100/85">
              <InstallAppButton
                variant="ghost"
                size="sm"
                label="Instalar en tu celular"
                className="text-signal-400 hover:text-signal-300 hover:bg-signal-500/10 px-2"
              />
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
