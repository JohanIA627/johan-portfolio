"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Representa la auditoría de seguridad real de FL SHOES: agentes de IA
// encontraron y corrigieron una vulnerabilidad de permisos. Al hacer hover,
// el arco del candado se levanta (crossfade + rotación, sin morphing de path).
export default function Candado() {
  const [hover, setHover] = useState(false);

  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{ width: 18, height: 18 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden
    >
      <svg width={18} height={18} viewBox="0 0 18 18">
        <rect x={4} y={8} width={10} height={8} rx={1.5} fill="var(--acento)" />
        <motion.path
          d="M6 8 V5.5 a3 3 0 0 1 6 0 V8"
          fill="none"
          stroke="var(--tinta-suave)"
          strokeWidth={2}
          strokeLinecap="round"
          animate={{ opacity: hover ? 0 : 1 }}
          transition={{ duration: 0.25 }}
        />
        <motion.path
          d="M6 8 V5.5 a3 3 0 0 1 6 0 V6"
          fill="none"
          stroke="var(--tinta-suave)"
          strokeWidth={2}
          strokeLinecap="round"
          style={{ transformOrigin: "6px 8px" }}
          animate={{ opacity: hover ? 1 : 0, rotate: hover ? -25 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </span>
  );
}
