"use client";

import { useState, type FormEvent } from "react";
import { CountUp, Reveal } from "./Reveal";
import { InfoIcon } from "./icons";
import { FORMSPREE_ENDPOINT, WHATSAPP_NUMBER } from "./site";

const PLAZOS = [
  { years: 5, cuotas: 60, defaultCuota: "13,519.62" },
  { years: 10, cuotas: 120, defaultCuota: "8,340.70" },
  { years: 15, cuotas: 180, defaultCuota: "6,738.03" },
  { years: 20, cuotas: 240, defaultCuota: "6,019.81", destacado: true },
];

const STATS = [
  { label: "Plazo máximo", big: "20", small: "años" },
  { label: "Sin banco", big: "100%", small: "directo" },
  { label: "Tasa fija", big: "10%", small: "Anual Sobre Capital" },
  { label: "Entrega", big: "8", small: "meses" },
];

function parseCuota(v: string) {
  const n = parseFloat(v.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function Financiamiento() {
  const [cuotas, setCuotas] = useState(
    PLAZOS.map((p) => p.defaultCuota)
  );
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    plazo: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const maxCuota = Math.max(...cuotas.map(parseCuota), 1);

  const openWhatsApp = () => {
    const msg = [
      "Hola, quiero una cotización personalizada del proyecto residencial.",
      form.nombre && `Nombre: ${form.nombre}`,
      form.correo && `Correo: ${form.correo}`,
      form.telefono && `Teléfono: ${form.telefono}`,
      form.plazo && `Plazo de interés: ${form.plazo}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      openWhatsApp();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          tipo: "Cotización",
          nombre: form.nombre,
          correo: form.correo,
          telefono: form.telefono,
          plazo: form.plazo,
          _subject: `Nueva cotización: ${form.nombre} (${form.plazo})`,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full border-b border-ink-200 bg-transparent py-3 text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500";

  return (
    <section
      id="financiamiento"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-gold-100 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Planes de financiamiento
          </span>
          <h2 className="mt-6 font-serif text-5xl text-ink-950 md:text-6xl">
            Una inversión <em>a tu medida.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-600">
            Condiciones transparentes, sin letra pequeña. Tú eliges el plazo,
            nosotros ponemos la confianza.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          {/* Columna izquierda: valor, enganche y stats */}
          <Reveal>
            <span className="mb-6 block h-px w-12 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
              Valor total de la vivienda
            </span>
            <div className="mt-3 font-sans text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl md:text-7xl">
              Q<CountUp end={650000} />
            </div>

            <div className="mt-10 border-l-2 border-gold-400 pl-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
                Enganche inicial
              </span>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-sans text-4xl font-bold text-gold-500">
                  <CountUp end={5} format={(n) => `${Math.round(n)}%`} />
                </span>
                <span className="text-2xl font-medium text-ink-900">
                  Q<CountUp end={35000} />
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-ink-600">
                La entrada más competitiva del mercado. Tu hogar está más cerca
                de lo que imaginas.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="min-w-0 bg-lav-50 p-4 sm:p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
                    {s.label}
                  </span>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-sans text-2xl font-bold text-ink-950 sm:text-3xl">
                      {s.big}
                    </span>
                    <span className="text-sm text-ink-600">{s.small}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Columna derecha: comparativa y cuotas */}
          <Reveal delay={150}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
              Comparativa de plazos
            </span>

            <div className="mt-6 flex h-40 gap-4">
              {PLAZOS.map((p, i) => {
                const value = parseCuota(cuotas[i]);
                const h = value > 0 ? Math.max((value / maxCuota) * 100, 8) : 8;
                return (
                  <div
                    key={p.years}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="flex w-full flex-1 items-end">
                      <div
                        className={`w-full transition-all duration-700 ${
                          p.destacado ? "bg-gold-500" : "bg-gold-200"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-ink-600">
                      {p.years} años
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-ink-400">
              Cuota mensual relativa — a menor plazo, mayor cuota; a mayor
              plazo, menor cuota
            </p>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
                Ingresa las cuotas mensuales
              </span>
              <div className="mt-4 space-y-4">
                {PLAZOS.map((p, i) => (
                  <div
                    key={p.years}
                    className={`flex flex-wrap items-center justify-between gap-4 border p-4 sm:p-5 ${
                      p.destacado
                        ? "border-gold-300 bg-cream-100"
                        : "border-ink-200/50 bg-white"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={`h-10 w-1 shrink-0 ${
                          p.destacado ? "bg-gold-500" : "bg-gold-300"
                        }`}
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="whitespace-nowrap text-lg font-bold text-ink-950">
                            {p.years} años
                          </span>
                          {p.destacado && (
                            <span className="whitespace-nowrap rounded-full bg-gold-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                              Más accesible
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-ink-600">
                          {p.cuotas} cuotas mensuales fijas
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto flex items-baseline gap-2">
                      <span className="text-sm text-ink-600">Q</span>
                      <input
                        value={cuotas[i]}
                        onChange={(e) =>
                          setCuotas((prev) =>
                            prev.map((c, j) => (j === i ? e.target.value : c))
                          )
                        }
                        placeholder="0.00"
                        inputMode="decimal"
                        className="w-24 border-b border-gold-300 bg-transparent py-1 text-right text-lg font-bold text-ink-950 outline-none focus:border-gold-500 sm:w-28"
                      />
                      <span className="text-xs text-ink-600">/mes</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3 bg-cream-100 p-5">
              <span className="mt-0.5 shrink-0 text-gold-500">
                <InfoIcon width={18} height={18} />
              </span>
              <p className="text-sm leading-relaxed text-ink-700">
                <strong className="text-ink-950">
                  Financiamiento propio directo.
                </strong>{" "}
                Sin intermediarios bancarios. Sin comisiones ocultas. Sin
                historial crediticio complejo. La cuota es fija durante toda la
                vida del plan. El saldo restante después del enganche se
                distribuye en cuotas mensuales iguales, adaptadas al plazo que
                mejor se ajuste a tu presupuesto familiar.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Formulario de cotización */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-2xl bg-lav-50 p-8 md:p-12">
            <h3 className="text-center font-serif text-3xl text-ink-950 md:text-4xl">
              Solicita tu cotización personalizada
            </h3>
            <p className="mt-3 text-center text-sm text-ink-600">
              Sin compromiso. Te enviamos el desglose completo adaptado al
              plazo que prefieras.
            </p>
            {status === "success" ? (
              <p className="mt-10 text-center text-lg text-gold-600">
                ¡Gracias, {form.nombre}! Recibimos tu solicitud y te
                contactaremos muy pronto con tu cotización personalizada.
              </p>
            ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
                  Nombre completo
                  <input
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                    placeholder="Tu nombre"
                    required
                    className={inputCls}
                  />
                </label>
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
                  Correo electrónico
                  <input
                    type="email"
                    value={form.correo}
                    onChange={(e) =>
                      setForm({ ...form, correo: e.target.value })
                    }
                    placeholder="tu@correo.com"
                    required
                    className={inputCls}
                  />
                </label>
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
                  Teléfono
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={(e) =>
                      setForm({ ...form, telefono: e.target.value })
                    }
                    placeholder="+502"
                    required
                    className={inputCls}
                  />
                </label>
              </div>
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
                  Plazo de interés
                  <select
                    value={form.plazo}
                    onChange={(e) => setForm({ ...form, plazo: e.target.value })}
                    required
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">Selecciona un plazo</option>
                    {PLAZOS.map((p) => (
                      <option key={p.years} value={`${p.years} años`}>
                        {p.years} años
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-600 disabled:cursor-wait disabled:opacity-60 cursor-pointer"
              >
                {status === "sending" ? "Enviando…" : "Quiero mi cotización"}
              </button>
              {status === "error" && (
                <p className="text-center text-sm text-red-600">
                  No se pudo enviar la solicitud. Intenta de nuevo o{" "}
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="underline cursor-pointer"
                  >
                    escríbenos por WhatsApp
                  </button>
                  .
                </p>
              )}
            </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
