"use client";

import Image from "next/image";
import {
  useRef,
  useState,
  type ComponentType,
  type MouseEvent,
  type SVGProps,
} from "react";
import { Reveal } from "./Reveal";
import {
  BalconyIcon,
  BathIcon,
  BedIcon,
  CarIcon,
  CheckIcon,
  CrownIcon,
  DiningIcon,
  FileIcon,
  GardenIcon,
  KitchenIcon,
  LaundryIcon,
  RotateIcon,
  SofaIcon,
} from "./icons";
import { scrollToSection } from "./site";

type Item = { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string };

const PLANTAS = [
  {
    num: "01",
    title: "Primera Planta",
    sub: "Área social",
    img: "/images/plano-1.webp",
    alt: "Plano 3D Primera Planta",
    text: "Planta baja con garaje, sala de estar, comedor, cocina, baño para visita, área de lavandería y jardín privado en la parte posterior.",
    items: [
      { icon: CarIcon, label: "Garaje para 1 vehículo" },
      { icon: SofaIcon, label: "Sala de estar" },
      { icon: DiningIcon, label: "Comedor" },
      { icon: KitchenIcon, label: "Cocina" },
      { icon: GardenIcon, label: "Jardín privado" },
      { icon: LaundryIcon, label: "Área de lavandería" },
    ] as Item[],
  },
  {
    num: "02",
    title: "Segunda Planta",
    sub: "Área privada",
    img: "/images/plano-2.webp",
    alt: "Plano 3D Segunda Planta",
    text: "Nivel superior dedicado al descanso. Tres habitaciones con closets, dos baños completos con regadera de vidrio y balcón privado en la suite principal.",
    items: [
      { icon: BedIcon, label: "3 Habitaciones" },
      { icon: CrownIcon, label: "Suite principal" },
      { icon: BathIcon, label: "2 Baños completos" },
      { icon: BalconyIcon, label: "Balcón privado" },
    ] as Item[],
  },
];

function Plano3D({ planta }: { planta: (typeof PLANTAS)[number] }) {
  const box = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(18deg) rotateY(0deg)"
  );

  const onMove = (e: MouseEvent) => {
    const rect = box.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${18 - y * 14}deg) rotateY(${x * 18}deg)`
    );
  };

  const onLeave = () =>
    setTransform("perspective(1000px) rotateX(18deg) rotateY(0deg)");

  return (
    <div
      ref={box}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative mt-6 cursor-grab overflow-hidden bg-gradient-to-b from-lav-50 to-white py-6"
    >
      <div
        className="relative mx-auto aspect-[4/3] w-[88%] transition-transform duration-200 ease-out"
        style={{ transform }}
      >
        <Image
          src={planta.img}
          alt={planta.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-contain drop-shadow-[0_30px_40px_rgba(22,19,26,0.25)]"
        />
      </div>
      <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.25em] text-ink-400">
        {planta.title}
      </span>
      <span className="absolute bottom-4 right-5 flex items-center gap-2 text-xs uppercase tracking-wider text-ink-400 opacity-0 transition-opacity group-hover:opacity-100">
        <RotateIcon width={14} height={14} /> Gira la vista
      </span>
    </div>
  );
}

export default function Distribucion() {
  return (
    <section
      id="distribucion"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-6 block h-px w-12 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-600">
                Distribución del espacio
              </span>
              <h2 className="mt-4 font-serif text-5xl text-ink-950 md:text-6xl">
                Planos en <em>3D</em>
              </h2>
            </div>
            <p className="max-w-sm text-ink-600">
              Desliza o mueve el cursor para girar el plano y explorar cada
              rincón desde distintos ángulos.
            </p>
          </div>

          <div className="my-12 flex items-center gap-6">
            <span className="h-px flex-1 bg-ink-200/70" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-600">
              2 niveles · 1 vivienda completa
            </span>
            <span className="h-px flex-1 bg-ink-200/70" />
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {PLANTAS.map((planta, i) => (
            <Reveal key={planta.num} delay={i * 150}>
              <div className="flex h-full flex-col border border-ink-200/50 bg-white p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-5xl text-gold-300">
                      {planta.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl text-ink-950">
                        {planta.title}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                        {planta.sub}
                      </span>
                    </div>
                  </div>
                  <span className="border border-gold-300 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                    Vista 3D
                  </span>
                </div>

                <Plano3D planta={planta} />

                <p className="mt-6 text-sm leading-relaxed text-ink-600">
                  {planta.text}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2">
                  {planta.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 border-t border-ink-200/50 py-4"
                    >
                      <span className="text-gold-500">
                        <item.icon width={18} height={18} />
                      </span>
                      <span className="text-sm text-ink-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-ink-200/60 pt-10 md:flex-row">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
              {[
                "Diseño arquitectónico contemporáneo",
                "Acabados de primera calidad",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-ink-700">
                  <span className="text-gold-500">
                    <CheckIcon width={16} height={16} />
                  </span>
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("financiamiento")}
              className="flex items-center gap-3 bg-gold-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-600 cursor-pointer"
            >
              <FileIcon width={16} height={16} />
              Cotizar esta vivienda
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
