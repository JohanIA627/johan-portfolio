"use client";

import { useState } from "react";
import { motion } from "motion/react";

// FL SHOES reemplazó un Excel compartido sin trazabilidad por control de
// proveedores/plazos/saldos — al pasar el mouse, una línea de escaneo baja
// por el recibo y deja una fila de tabla esquemática al terminar.
export default function ReciboEscaneado() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "var(--fondo)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width={88} height={88} viewBox="0 0 88 88" aria-hidden>
        <rect x={26} y={10} width={36} height={52} rx={2} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={32} y={20 + i * 9} width={24} height={3} rx={1.5} fill="var(--tinta-suave)" opacity={0.5} />
        ))}

        <motion.rect
          x={24}
          width={40}
          height={3}
          rx={1.5}
          fill="var(--acento)"
          animate={{
            y: hover ? [10, 60] : 10,
            opacity: hover ? [1, 1, 0] : 0,
          }}
          transition={{ duration: 0.7, ease: "linear" }}
        />

        <motion.g
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }}
          transition={{ duration: 0.4, delay: hover ? 0.55 : 0 }}
        >
          <rect x={18} y={68} width={15} height={8} rx={1.5} fill="var(--acento)" opacity={0.12} stroke="var(--acento)" strokeWidth={1} />
          <rect x={36} y={68} width={15} height={8} rx={1.5} fill="var(--acento)" opacity={0.12} stroke="var(--acento)" strokeWidth={1} />
          <rect x={54} y={68} width={15} height={8} rx={1.5} fill="var(--acento)" opacity={0.12} stroke="var(--acento)" strokeWidth={1} />
        </motion.g>
      </svg>
    </div>
  );
}
