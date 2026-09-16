"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Gestión PH reemplazó carpetas físicas de una administradora por gestión
// digital en tiempo real — el archivador se convierte en un rack de
// servidor al pasar el mouse, sin morphing de paths (dos capas, crossfade).
export default function ArchivadorServidor() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "var(--fondo)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.svg
        width={88}
        height={88}
        viewBox="0 0 88 88"
        style={{ position: "absolute" }}
        animate={{ opacity: hover ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        aria-hidden
      >
        <rect x={18} y={10} width={52} height={68} rx={3} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={2} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={22} y={16 + i * 22} width={44} height={18} rx={1.5} fill="none" stroke="var(--tinta-suave)" strokeWidth={1.5} />
            <rect x={40} y={24 + i * 22} width={8} height={2.5} rx={1.25} fill="var(--acento)" />
          </g>
        ))}
      </motion.svg>

      <motion.svg
        width={88}
        height={88}
        viewBox="0 0 88 88"
        style={{ position: "absolute" }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden
      >
        <rect x={18} y={10} width={52} height={68} rx={3} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={22} y={16 + i * 15} width={44} height={11} rx={1.5} fill="none" stroke="var(--tinta-suave)" strokeWidth={1.5} />
            <circle cx={60} cy={21.5 + i * 15} r={2} fill="var(--acento)" />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
