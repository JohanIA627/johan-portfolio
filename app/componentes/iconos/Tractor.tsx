"use client";

import { motion } from "motion/react";

// Tractor esquemático que recorre el separador entre secciones. Las
// llantas giran en proporción inversa a su radio (la delantera, más
// chica, da más vueltas por el mismo tramo) — la misma idea de rodadura
// real que usa el engranaje de los deslizadores, aquí solo de adorno.
// Hereda las variantes "oculto"/"visible" del <motion.g> que lo mueve en
// SeparadorProceso, por eso no define su propio initial/animate.
const RADIO_TRASERA = 9;
const RADIO_DELANTERA = 5.5;
const VUELTAS = 4;

function Llanta({ cx, cy, radio, vueltas }: { cx: number; cy: number; radio: number; vueltas: number }) {
  return (
    <motion.g
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      variants={{
        oculto: { rotate: 0 },
        visible: { rotate: 360 * vueltas, transition: { duration: 5, ease: "linear" } },
      }}
    >
      <circle cx={cx} cy={cy} r={radio} fill="var(--tinta-titulo)" />
      <circle cx={cx} cy={cy} r={radio * 0.45} fill="var(--amarillo-casco)" />
      {Array.from({ length: 4 }).map((_, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy - radio * 0.42}
          stroke="var(--tinta-titulo)"
          strokeWidth={1.2}
          transform={`rotate(${i * 90} ${cx} ${cy})`}
        />
      ))}
    </motion.g>
  );
}

export default function Tractor({ y = 0 }: { y?: number }) {
  return (
    <g transform={`translate(0, ${y})`}>
      {/* Escape */}
      <rect x={9} y={-31} width={3} height={8} rx={1} fill="var(--tinta-titulo)" />
      {/* Cabina */}
      <rect x={5} y={-24} width={15} height={14} rx={2} fill="var(--amarillo-casco)" stroke="var(--tinta-titulo)" strokeWidth={1.2} />
      <rect x={8} y={-21} width={7} height={7} rx={1} fill="var(--azul-300)" />
      {/* Capó */}
      <path
        d="M20 -17 L34 -13 L34 -8 L20 -8 Z"
        fill="var(--amarillo-casco)"
        stroke="var(--tinta-titulo)"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <circle cx={33} cy={-13} r={1.3} fill="var(--tinta-titulo)" />

      <Llanta cx={9} cy={-RADIO_TRASERA} radio={RADIO_TRASERA} vueltas={VUELTAS} />
      <Llanta
        cx={29}
        cy={-RADIO_DELANTERA}
        radio={RADIO_DELANTERA}
        vueltas={VUELTAS * (RADIO_TRASERA / RADIO_DELANTERA)}
      />
    </g>
  );
}
