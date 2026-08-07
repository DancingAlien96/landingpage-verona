"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpandIcon,
} from "./icons";

const FOTOS = [
  {
    src: "/images/hero-1.webp",
    alt: "Render 3D aéreo de fachada contemporánea con ladrillo visto y cochera privada",
    caption: "Vista aérea del proyecto",
  },
  {
    src: "/images/hero-5.webp",
    alt: "Fachada frontal de la residencia con acabados de ladrillo y balcones",
    caption: "Fachada principal",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Sala de estar espaciosa con sofás de cuero y vistas al jardín",
    caption: "Sala de estar",
  },
  {
    src: "/images/hero-4.webp",
    alt: "Comedor moderno con mesa de madera, sillas blancas y salida al patio",
    caption: "Comedor",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Dormitorio principal con diseño moderno, iluminación natural y closet integrado",
    caption: "Suite principal",
  },
];

export default function Galeria() {
  const [abierta, setAbierta] = useState<number | null>(null);

  const cerrar = useCallback(() => setAbierta(null), []);
  const mover = useCallback((dir: 1 | -1) => {
    setAbierta((a) =>
      a === null ? a : (a + dir + FOTOS.length) % FOTOS.length
    );
  }, []);

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierta, cerrar, mover]);

  return (
    <section id="galeria" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-6 block h-px w-12 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
                Galería
              </span>
              <h2 className="mt-4 font-serif text-5xl text-ink-950 md:text-6xl">
                Conoce cada <em>espacio</em>
              </h2>
            </div>
            <p className="max-w-sm text-ink-600">
              Recorre los ambientes del proyecto. Toca cualquier imagen para
              verla en pantalla completa.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOTOS.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={(i % 3) * 100}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <button
                onClick={() => setAbierta(i)}
                className={`group relative block w-full cursor-zoom-in overflow-hidden ${
                  i === 0 ? "aspect-[4/3] h-full" : "aspect-[4/3]"
                }`}
                aria-label={`Ampliar: ${foto.caption}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {foto.caption}
                </span>
                <span className="absolute right-4 top-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ExpandIcon width={18} height={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {abierta !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4"
          onClick={cerrar}
        >
          <button
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 cursor-pointer"
          >
            <CloseIcon width={18} height={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            aria-label="Anterior"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 md:left-6 cursor-pointer"
          >
            <ChevronLeftIcon width={18} height={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            aria-label="Siguiente"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 md:right-6 cursor-pointer"
          >
            <ChevronRightIcon width={18} height={18} />
          </button>
          <figure
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={FOTOS[abierta].src}
              alt={FOTOS[abierta].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <figcaption className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 translate-y-full text-center text-sm text-white/80">
              {FOTOS[abierta].caption} · {abierta + 1} / {FOTOS.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
