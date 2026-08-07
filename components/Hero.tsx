"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WHATSAPP_LINK, scrollToSection } from "./site";

const SLIDES = [
  {
    src: "/images/hero-1.webp",
    alt: "Render 3D aéreo de fachada contemporánea con ladrillo visto y cochera privada",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Dormitorio principal con diseño moderno, iluminación natural y closet integrado",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Sala de estar espaciosa con sofás de cuero y vistas al jardín",
  },
  {
    src: "/images/hero-4.webp",
    alt: "Comedor moderno con mesa de madera, sillas blancas y salida al patio",
  },
  {
    src: "/images/hero-5.webp",
    alt: "Fachada frontal de la residencia con acabados de ladrillo y balcones",
  },
];

const FRASES = [
  {
    tag: "Accesible",
    big: "5%",
    small: "de enganche inicial",
    text: "La entrada más accesible del mercado. Tu hogar propio está más cerca de lo que imaginas.",
  },
  {
    tag: "Distribución",
    big: "3",
    small: "habitaciones con baños",
    text: "Suite principal con baño privado más 2 habitaciones secundarias con baño compartido. Espacio ideal para tu familia.",
  },
  {
    tag: "Largo plazo",
    big: "20",
    small: "años para financiar",
    text: "Cuotas mensuales cómodas y adaptadas a tu presupuesto familiar. Tú eliges el plazo.",
  },
];

const BADGES = ["Solo 10 viviendas", "Entrega inmediata", "Proyecto exclusivo"];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [frase, setFrase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setFrase((f) => (f + 1) % FRASES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const f = FRASES[frase];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-linear ${
              i === slide ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 md:px-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-normal leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Tu nuevo hogar
            <br />
            <em className="font-light">comienza aquí.</em>
          </h1>

          <div className="mt-10 max-w-md border border-white/25 bg-white/20 p-6 backdrop-blur-md">
            <div key={frase} className="animate-[fadeIn_0.6s_ease]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-200">
                {f.tag}
              </span>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="font-serif text-5xl text-white">{f.big}</span>
                <span className="text-sm uppercase tracking-wider text-white/90">
                  {f.small}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {f.text}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {FRASES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ver frase ${i + 1}`}
                  onClick={() => setFrase(i)}
                  className={`h-1 transition-all cursor-pointer ${
                    i === frase ? "w-8 bg-gold-400" : "w-4 bg-white/40"
                  }`}
                />
              ))}
              <span className="ml-auto text-xs text-white/70">
                {frase + 1}/{FRASES.length}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("financiamiento")}
              className="bg-gold-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-600 cursor-pointer"
            >
              Solicita información
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              Agenda tu visita
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="border-l-2 border-gold-400 pl-3 text-sm text-white/85"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Imagen ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === slide ? "w-8 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
        <span className="animate-bounce-slow text-[10px] uppercase tracking-[0.4em] text-white/70">
          Desliza
        </span>
      </div>

      <span className="absolute bottom-8 right-6 z-10 hidden text-sm tracking-[0.3em] text-white/70 md:block md:right-10">
        {String(slide + 1).padStart(2, "0")} /{" "}
        {String(SLIDES.length).padStart(2, "0")}
      </span>
    </section>
  );
}
