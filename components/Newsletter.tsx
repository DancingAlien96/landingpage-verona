"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section className="bg-ink-950 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-10">
        <h2 className="font-serif text-4xl text-white md:text-5xl">
          Recibe información <em>exclusiva</em>
        </h2>
        <p className="mt-4 text-white/70">
          Conoce antes que nadie las promociones, avances del proyecto y fechas
          de entrega.
        </p>
        {sent ? (
          <p className="mt-8 text-gold-300">
            ¡Gracias! Te mantendremos informado.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="flex-1 border border-white/25 bg-white/10 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold-400"
            />
            <button
              type="submit"
              className="bg-gold-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-600 cursor-pointer"
            >
              Suscribir
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
