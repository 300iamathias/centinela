import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { WHY_US } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

export function WhyUsSection() {
  return (
    <section id="por-que" aria-labelledby="why-title" className="scroll-mt-24 bg-paper-100/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Imagen de la central */}
          <Reveal className="order-2 lg:order-1">
            <figure className="relative overflow-hidden rounded-md border border-steel-600/30 shadow-2xl shadow-steel-700/20">
              <Image
                src="/images-security/gallery/gal-central.jpg"
                alt="Muro de pantallas de la central de monitoreo en operación nocturna"
                width={1024}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-ink-950/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper-100 backdrop-blur">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Central de monitoreo · En operación
              </figcaption>
            </figure>
          </Reveal>

          {/* Lista de ventajas */}
          <div className="order-1 lg:order-2">
            <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
            <h2
              id="why-title"
              className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
            >
              Vigilancia de verdad, no solo presencia
            </h2>
            <ul className="mt-8 space-y-5">
              {WHY_US.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <li className="flex gap-3.5">
                    <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-signal-500" aria-hidden />
                    <div>
                      <h3 className="font-semibold text-ink-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel-500">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
