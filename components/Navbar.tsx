"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "./site";

const LINKS = [
  { label: "Video", target: "hero" },
  { label: "Beneficios", target: "modelo" },
  { label: "Galería", target: "hero" },
  { label: "Distribución", target: "distribucion" },
  { label: "Financiamiento", target: "financiamiento" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    scrollToSection(target);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_20px_rgba(22,19,26,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-3 text-left cursor-pointer"
          aria-label="Bienestar Inmobiliario"
        >
          <span className="flex h-11 w-11 items-center justify-center border border-ink-900 font-serif text-2xl text-ink-900">
            B
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.2em] text-ink-950">
              BIENESTAR
            </span>
            <span className="block text-xs tracking-[0.25em] text-gold-500">
              INMOBILIARIO
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => go(link.target)}
              className="text-xs font-medium uppercase tracking-[0.15em] text-ink-900 transition-colors hover:text-gold-500 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("financiamiento")}
            className="hidden bg-gold-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-gold-600 sm:block cursor-pointer"
          >
            Cotizar
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
            aria-label="Abrir menú"
          >
            <span
              className={`h-px w-6 bg-ink-900 transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink-900 transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-200/60 bg-white px-5 py-4 lg:hidden">
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => go(link.target)}
              className="block w-full py-3 text-left text-sm font-medium uppercase tracking-[0.15em] text-ink-900"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("financiamiento")}
            className="mt-2 w-full bg-gold-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
          >
            Cotizar
          </button>
        </div>
      )}
    </nav>
  );
}
