"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal, SectionEyebrow } from "./reveal";
import {
  GALLERY,
  GALLERY_CATEGORIES,
  type GalleryItem,
} from "@/lib/site-config";

type Filter = "Todos" | GalleryItem["category"];
const FILTERS: Filter[] = ["Todos", ...GALLERY_CATEGORIES];

export function GallerySection() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "Todos" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const current = lightbox !== null ? visible[lightbox] : null;

  return (
    <section
      id="galeria"
      className="py-20 sm:py-24 bg-monitor-dark scroll-mt-24"
      aria-labelledby="galeria-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <SectionEyebrow>Galería</SectionEyebrow>
          <h2
            id="galeria-title"
            className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-paper-50 text-balance"
          >
            Nuestras <span className="text-gradient-signal">operaciones</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-paper-100/70 leading-relaxed">
            Personal, tecnología y respuesta en el campo.
            Toca cualquier foto para verla en grande.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            aria-label="Filtrar galería por categoría"
            className="mt-8 flex gap-2 overflow-x-auto pb-2 scroll-steel sm:justify-center"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  setLightbox(null);
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all min-h-11 ${
                  filter === f
                    ? "bg-signal-500 text-ink-950 shadow-md"
                    : "bg-steel-900/60 text-paper-100/80 border border-steel-700 hover:bg-steel-800/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul
          layout
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.li
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group relative block w-full overflow-hidden rounded-md shadow-sm focus-visible:ring-2 focus-visible:ring-signal-500"
                  aria-label={`Ampliar foto: ${item.title}`}
                >
                  <span className="relative block aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-signal-400">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold uppercase tracking-wide text-paper-50">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-paper-100/80">
                      {item.description}
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="text-xs text-paper-100/45">
            Fotografías de referencia generadas con IA para la demo; se
            reemplazan por fotos reales de las operaciones del cliente.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${current.title}`}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 hover:bg-paper-50/20 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 hover:bg-paper-50/25 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-7 w-7" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 hover:bg-paper-50/25 transition-colors"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="h-7 w-7" aria-hidden />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[82vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </span>
              <figcaption className="mt-4 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-signal-400">
                  {current.category}
                </span>
                <span className="mt-1 block font-display text-2xl font-bold uppercase text-paper-50">
                  {current.title}
                </span>
                <span className="mt-1 block text-sm text-paper-100/75">
                  {current.description}
                </span>
                <span className="mt-2 block text-xs text-paper-100/45 tabular-nums">
                  {(lightbox ?? 0) + 1} / {visible.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
