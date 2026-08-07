"use client";

import type { ComponentType, SVGProps } from "react";
import { CountUp, Reveal } from "./Reveal";
import {
  BalconyIcon,
  BathIcon,
  BedIcon,
  CarIcon,
  DiningIcon,
  GardenIcon,
  KitchenIcon,
  LaundryIcon,
  RulerIcon,
} from "./icons";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  clave?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: BedIcon,
    title: "3 habitaciones",
    text: "Suite principal con baño privado. 2 habitaciones secundarias con baño compartido. Espacio ideal para tu familia.",
    clave: true,
  },
  {
    icon: BathIcon,
    title: "2.5 baños",
    text: "Baño privado en suite, baño completo compartido para las 2 habitaciones secundarias, y medio baño en planta baja.",
    clave: true,
  },
  {
    icon: DiningIcon,
    title: "Comedor",
    text: "Espacio integrado con vista al jardín. Ideal para reuniones familiares.",
  },
  {
    icon: KitchenIcon,
    title: "Cocina",
    text: "Cocina con distribución funcional, espacios bien aprovechados y excelente conexión con las áreas sociales.",
  },
  {
    icon: LaundryIcon,
    title: "Lavandería",
    text: "Área independiente con conexiones para lavadora y secadora.",
  },
  {
    icon: GardenIcon,
    title: "Patio trasero",
    text: "Jardín privado perfecto para mascotas y momentos al aire libre.",
  },
  {
    icon: CarIcon,
    title: "Garaje",
    text: "Para un vehículo en la parte principal de la vivienda",
  },
  {
    icon: BalconyIcon,
    title: "Balcón principal",
    text: "Terraza privada con vista al frente. Tu rincón para el café de la mañana.",
  },
  {
    icon: RulerIcon,
    title: "128 m² de construcción",
    text: "Cada metro cuadrado optimizado. Espacios que se sienten más grandes de lo que son.",
    clave: true,
  },
];

const CHIPS = ["3 habitaciones", "2.5 baños", "1 garaje", "Balcón"];

export default function Modelo() {
  return (
    <section id="modelo" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[5fr_7fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="mb-6 block h-px w-12 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
              Modelo de vivienda
            </span>
            <div className="mt-6 font-sans text-7xl font-bold tracking-tight text-ink-950 md:text-8xl">
              <CountUp end={128} format={(n) => String(Math.round(n))} />
              <span className="text-4xl font-medium md:text-5xl">
                m<sup>2</sup>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-ink-600">
              de construcción cuidadosamente distribuidos
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="border border-ink-200 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 100}>
              <div
                className={`relative h-full border p-7 transition-shadow hover:shadow-[0_10px_40px_rgba(22,19,26,0.07)] ${
                  f.clave
                    ? "border-gold-200 bg-cream-100"
                    : "border-ink-200/50 bg-white"
                }`}
              >
                {f.clave && (
                  <span className="absolute right-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    Clave
                  </span>
                )}
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                    f.clave ? "bg-gold-500 text-white" : "bg-lav-100 text-ink-700"
                  }`}
                >
                  <f.icon />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
