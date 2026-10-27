import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-config";
import { Reveal, SectionEyebrow } from "./reveal";

export function FaqSection() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="scroll-mt-24 bg-paper-100/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <h2
            id="faq-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink-950 text-balance"
          >
            Lo que todos preguntan antes de contratar
          </h2>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10 rounded-md border border-steel-600/25 bg-white px-5 shadow-sm">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className={i === FAQS.length - 1 ? "border-b-0" : undefined}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-ink-950 hover:text-signal-600 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-steel-500">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
