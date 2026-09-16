"use client";

import { motion } from "motion/react";

// Documento esquemático con un check que se "dibuja" en hover — representa
// el posicionamiento declarado: automatización con IA, siempre verificada
// por una persona antes de usarse.
export default function VerificacionHumana() {
  return (
    <motion.svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      initial="reposo"
      whileHover="activo"
      aria-hidden
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <rect
        x={4}
        y={3}
        width={14}
        height={20}
        rx={1.5}
        fill="none"
        stroke="var(--tinta-suave)"
        strokeWidth={1.4}
      />
      <line x1={7} y1={8} x2={15} y2={8} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={7} y1={11.5} x2={15} y2={11.5} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={7} y1={15} x2={12} y2={15} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <motion.path
        d="M11 18.5 L15 22.5 L23 12.5"
        fill="none"
        stroke="var(--acento)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          reposo: { pathLength: 0, opacity: 0 },
          activo: { pathLength: 1, opacity: 1 },
        }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      />
    </motion.svg>
  );
}
