"use client";

import { motion } from "motion/react";

// Diagrama de proceso simplificado (tipo P&ID) del ciclo de lavado CIP:
// tanque -> tubería -> válvula -> tubería -> vuelve al tanque. El flujo se
// insinúa con un trazo punteado que se desplaza en loop, no con líquido
// realista ni degradados.
const RUTA =
  "M 44 20 L 150 20 L 150 50 L 68 50 L 68 20 M 68 50 L 44 50 L 44 20";

export default function CircuitoCIP() {
  return (
    <svg
      viewBox="0 0 200 70"
      className="w-full"
      style={{ height: 64, display: "block" }}
      aria-hidden
    >
      {/* Tanque */}
      <rect
        x={6}
        y={12}
        width={38}
        height={46}
        rx={8}
        fill="var(--fondo)"
        stroke="var(--tinta-suave)"
        strokeWidth={1.5}
      />
      <line x1={12} y1={28} x2={38} y2={28} stroke="var(--tinta-suave)" strokeWidth={1} opacity={0.5} />
      <line x1={12} y1={40} x2={38} y2={40} stroke="var(--tinta-suave)" strokeWidth={1} opacity={0.5} />

      {/* Tubería fija (guía) */}
      <path d={RUTA} fill="none" stroke="var(--borde)" strokeWidth={3} strokeLinejoin="round" />

      {/* Flujo animado sobre la misma ruta */}
      <motion.path
        d={RUTA}
        fill="none"
        stroke="var(--acento)"
        strokeWidth={2.2}
        strokeLinejoin="round"
        strokeDasharray="7 6"
        initial={{ strokeDashoffset: 0 }}
        whileInView={{ strokeDashoffset: -52 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.8, ease: "linear", repeat: Infinity }}
      />

      {/* Válvula esquemática, a mitad de la línea superior */}
      <g transform="translate(97 20)">
        <polygon points="-7,0 0,-6 7,0 0,6" fill="var(--papel)" stroke="var(--acento)" strokeWidth={1.5} />
      </g>
    </svg>
  );
}
