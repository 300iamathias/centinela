import { PROCESS_STEPS } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

export function ProcessSection() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="scroll-mt-24 bg-monitor-dark py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Cómo trabajamos</SectionEyebrow>
          <h2
            id="proceso-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-paper-50 text-balance"
          >
            De la evaluación al reporte, sin huecos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-paper-100/70">
            Un método probado que empieza por entender tus riesgos reales, no
            por vender cámaras.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <li className="relative h-full rounded-md border border-steel-700/70 bg-steel-900/60 p-6">
                {/* Línea conectora en desktop */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-9 -right-4 hidden lg:block h-px w-8 signal-divider opacity-70"
                  />
                )}
                <p className="font-display text-4xl font-bold text-signal-500/90">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-paper-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-100/70">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
