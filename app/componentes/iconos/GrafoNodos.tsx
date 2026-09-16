"use client";

import { motion } from "motion/react";

// Representa la automatización real en producción con n8n (avisos
// automáticos en Gestión PH): un pulso viaja entre 3 nodos, en loop sutil.
export default function GrafoNodos() {
  return (
    <svg
      width={24}
      height={16}
      viewBox="0 0 24 16"
      aria-hidden
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <line x1={3} y1={12} x2={12} y2={3} stroke="var(--tinta-suave)" strokeWidth={1} />
      <line x1={12} y1={3} x2={21} y2={12} stroke="var(--tinta-suave)" strokeWidth={1} />
      <circle cx={3} cy={12} r={2} fill="var(--tinta-suave)" />
      <circle cx={12} cy={3} r={2} fill="var(--tinta-suave)" />
      <circle cx={21} cy={12} r={2} fill="var(--tinta-suave)" />
      <motion.circle
        r={1.6}
        fill="var(--acento)"
        animate={{ cx: [3, 12, 21, 12, 3], cy: [12, 3, 12, 3, 12] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
