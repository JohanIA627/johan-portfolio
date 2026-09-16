"use client";

import { motion, type Variants } from "motion/react";

// Mini-grilla tipo hoja de cálculo que se ilumina celda por celda y termina
// en una lupa — dramatiza el hallazgo del Excel/VBA de consumibles sin
// inventar ninguna cifra (el texto real solo dice "varios millones de
// pesos que la empresa no estaba cuantificando", deliberadamente sin monto
// exacto).
const contenedor: Variants = {
  reposo: {},
  activo: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const celda: Variants = {
  reposo: { fill: "var(--borde)" },
  activo: { fill: "var(--acento)", transition: { duration: 0.3 } },
};

const CELDAS = [0, 1, 2, 3, 4, 5];

export default function HallazgoConsumibles() {
  return (
    <motion.svg
      width={40}
      height={34}
      viewBox="0 0 40 34"
      initial="reposo"
      whileHover="activo"
      whileInView="activo"
      viewport={{ once: true, amount: 0.6 }}
      variants={contenedor}
      aria-hidden
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      {CELDAS.map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <motion.rect
            key={i}
            x={2 + col * 8}
            y={2 + row * 9}
            width={6.5}
            height={7}
            rx={1}
            variants={celda}
          />
        );
      })}
      <circle cx={31} cy={23} r={5.5} fill="none" stroke="var(--acento)" strokeWidth={2} />
      <line x1={35} y1={27} x2={39} y2={31} stroke="var(--acento)" strokeWidth={2} strokeLinecap="round" />
    </motion.svg>
  );
}
