"use client";

import { motion } from "motion/react";
import Tractor from "./iconos/Tractor";

// Separador decorativo entre secciones, estilo línea de un diagrama de
// proceso (P&ID): una línea punteada fija en --borde y un tractor que la
// recorre, con las llantas rodando, cada vez que el separador entra en
// pantalla. Deliberadamente sutil — es un detalle entre secciones, no una
// barra de progreso ni una alerta.
//
// Dos cosas que hay que respetar si se toca esto:
// 1. Quien observa la entrada en pantalla es el contenedor, no el tractor.
//    Si el disparador va en el tractor, que arranca fuera del borde
//    izquierdo, el observador nunca lo ve y la animación no ocurre nunca.
// 2. El tractor va en su propio SVG de tamaño fijo. Dentro de un SVG a lo
//    ancho con preserveAspectRatio="none" se deformaría distinto en cada
//    pantalla: estirado en escritorio y aplastado en móvil.
const DURACION = 5;
// El tractor se dibuja en 40×40 y se muestra un poco más grande para que se
// note. Como la línea está en top: 32, el SVG sube 32 × (ESCALA − 1) para que
// las llantas sigan apoyadas en ella.
const ESCALA = 1.3;
const LINEA = 32;

export default function SeparadorProceso() {
  return (
    <motion.div
      aria-hidden
      className="relative w-full"
      style={{ margin: "24px 0", height: 40 }}
      initial="oculto"
      whileInView="visible"
      viewport={{ amount: 0.6 }}
    >
      {/* Línea punteada: mismo patrón 6/6 que tenía en SVG */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: LINEA,
          height: 1,
          opacity: 0.6,
          backgroundImage:
            "repeating-linear-gradient(to right, var(--borde) 0 6px, transparent 6px 12px)",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: LINEA - 32 * ESCALA,
          width: 40 * ESCALA,
          height: 40 * ESCALA,
        }}
        variants={{
          oculto: { opacity: 0, left: "-8%" },
          visible: {
            opacity: [0, 1, 1, 0],
            left: ["-8%", "45%", "95%", "104%"],
            transition: { duration: DURACION, ease: "linear" },
          },
        }}
      >
        <svg
          width={40 * ESCALA}
          height={40 * ESCALA}
          viewBox="0 0 40 40"
          style={{ display: "block", overflow: "visible" }}
        >
          <Tractor y={32} />
        </svg>
      </motion.div>
    </motion.div>
  );
}
