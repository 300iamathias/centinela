"use client";

import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  Cctv,
  Fingerprint,
  Radio,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionEyebrow } from "./reveal";
import { SERVICES, SITE, waUrl } from "@/lib/site-config";

const ICONS: Record<(typeof SERVICES)[number]["icon"], typeof ShieldCheck> = {
  ShieldCheck,
  Radio,
  Cctv,
  Fingerprint,
  UserCheck,
  ClipboardCheck,
};

export function ServicesSection() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Servicios</SectionEyebrow>
          <h2
            id="servicios-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
          >
            Seguridad integral para tu operación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-steel-500">
            Personal y tecnología bajo un solo plan, con supervisión y reportes
            que te mantienen al tanto de todo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            const waMessage = `Hola ${SITE.shortName} 👋 Quiero cotizar: ${service.title}.`;
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-md border border-steel-600/25 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-signal-500/50 hover:shadow-xl hover:shadow-steel-700/10">
                  <div className="relative h-44 overflow-hidden bg-steel-900">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/70 to-transparent" aria-hidden />
                    <span className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-ink-950/80 ring-1 ring-signal-500/50 backdrop-blur">
                      <Icon className="h-5 w-5 text-signal-400" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink-950">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-steel-500">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-fit border-steel-600/40 text-steel-700 hover:border-signal-500/60 hover:bg-signal-500/10 hover:text-signal-600"
                    >
                      <a
                        href={waUrl(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Cotizar ${service.title} por WhatsApp`}
                      >
                        Cotizar
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
