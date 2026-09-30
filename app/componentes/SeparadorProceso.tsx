"use client";

import { motion } from "motion/react";
import Tractor from "./iconos/Tractor";

// Separador decorativo entre secciones, estilo línea de un diagrama de
// proceso (P&ID): una línea punteada fija en --borde, con un tractor que
// la recorre una sola vez cada vez que el separador entra en pantalla,
// llantas rodando incluidas. Deliberadamente sutil — es un detalle entre
// secciones, no una barra de progreso ni una alerta.
export default function SeparadorProceso() {
  return (
    <div aria-hidden style={{ margin: "24px 0", height: 40, width: "100%" }}>
      <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
        <line
          x1="0"
          y1="32"
          x2="1000"
          y2="32"
          stroke="var(--borde)"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity={0.6}
        />
        <motion.g
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            oculto: { opacity: 0, x: -40 },
            visible: {
              opacity: [0, 1, 1, 0],
              x: [-40, 480, 950, 1000],
              transition: { duration: 5, ease: "linear" },
            },
          }}
        >
          <Tractor y={32} />
        </motion.g>
      </svg>
    </div>
  );
}
