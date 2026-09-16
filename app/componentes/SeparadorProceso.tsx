"use client";

import { motion } from "motion/react";

// Separador decorativo entre secciones, estilo línea de un diagrama de
// proceso (P&ID): una línea punteada fija en --borde, con una señal que
// recorre el tramo una sola vez cada vez que el separador entra en
// pantalla. Deliberadamente sutil — es un detalle entre secciones, no una
// barra de progreso ni una alerta.
export default function SeparadorProceso() {
  return (
    <div
      aria-hidden
      style={{ margin: "24px 0", height: 24, width: "100%" }}
    >
      <svg width="100%" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
        <line
          x1="0"
          y1="12"
          x2="1000"
          y2="12"
          stroke="var(--borde)"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity={0.6}
        />
        <motion.circle
          r="3.5"
          fill="var(--acento)"
          cy="12"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0],
            cx: [0, 500, 950, 1000],
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
