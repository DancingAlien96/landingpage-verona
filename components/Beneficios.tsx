"use client";

import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./Reveal";
import {
  BuildingIcon,
  ClockIcon,
  KeyIcon,
  PercentIcon,
  ShieldIcon,
  TrendUpIcon,
} from "./icons";

type Beneficio = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const BENEFICIOS: Beneficio[] = [
  {
    icon: KeyIcon,
    title: "Proyecto exclusivo",
    text: "Solo 10 viviendas en una comunidad privada e íntima. Sin aglomeraciones, con vecinos que valoran lo mismo que tú.",
  },
  {
    icon: PercentIcon,
    title: "Financiamiento directo",
    text: "Sin bancos, sin comisiones ocultas y sin historial crediticio complejo. Tratas directamente con nosotros, con cuota fija.",
  },
  {
    icon: ClockIcon,
    title: "Entrega en 8 meses",
    text: "Un plazo claro y realista. Tu vivienda avanza mes a mes y te mantenemos informado de cada etapa.",
  },
  {
    icon: TrendUpIcon,
    title: "Inversión que crece",
    text: "Una propiedad en zona residencial en desarrollo: patrimonio seguro para tu familia y plusvalía a futuro.",
  },
  {
    icon: ShieldIcon,
    title: "Tranquilidad y seguridad",
    text: "Zona residencial exclusiva, pensada para vivir en paz, caminar sin preocupaciones y dormir tranquilo.",
  },
  {
    icon: BuildingIcon,
    title: "Arquitectura contemporánea",
    text: "Diseño moderno con acabados de primera calidad y áreas verdes que hacen cada espacio más agradable.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-ink-950 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <span className="mx-auto mb-6 block h-px w-12 bg-gold-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            Beneficios
          </span>
          <h2 className="mt-4 font-serif text-5xl text-white md:text-6xl">
            Más que una vivienda, <em>una decisión inteligente.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Cada detalle del proyecto está pensado para que vivas mejor hoy y
            tu inversión valga más mañana.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100}>
              <div className="group h-full border border-white/10 bg-white/[0.04] p-8 transition-colors hover:border-gold-400/40 hover:bg-white/[0.07]">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-gold-400/50 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                  <b.icon />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
