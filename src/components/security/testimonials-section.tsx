import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

/** Testimonios — ⚠️ ilustrativos de demo (handoff §5.8) */
export function TestimonialsSection() {
  return (
    <section id="opiniones" aria-labelledby="opiniones-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Opiniones</SectionEyebrow>
          <h2
            id="opiniones-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
          >
            Lo que dicen quienes ya nos contrataron
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-md border border-steel-600/25 bg-white p-6 shadow-sm">
                <Quote className="h-7 w-7 text-signal-500/70" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-steel-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-steel-600/15 pt-4">
                  <p className="text-sm font-bold text-ink-950">{t.name}</p>
                  <p className="mt-0.5 text-xs text-steel-400">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="text-xs text-steel-400/70">
            Testimonios ilustrativos de demostración; se reemplazan por
            opiniones reales autorizadas por los clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
