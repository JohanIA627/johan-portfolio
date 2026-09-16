"use client";

import { motion } from "motion/react";

// Motorreductor sinfín-corona esquemático: el tornillo sinfín (izquierda,
// franjas diagonales tipo rosca) engrana con la rueda corona (derecha,
// dientes). Al pasar el mouse, ambos giran — el sinfín como un patrón que
// avanza, la corona con una rotación real — igual de plano que el
// engranaje del toggle de idioma, sin degradados ni realismo.
const DIENTES = 8;
const RADIO = 9;

export default function MotorreductorSinfin() {
  return (
    <motion.svg
      width={34}
      height={20}
      viewBox="0 0 34 20"
      initial="quieto"
      whileHover="girando"
      style={{ display: "inline-block", verticalAlign: "middle" }}
      aria-hidden
    >
      {/* Sinfín: cilindro con rosca diagonal que se desplaza al girar */}
      <rect x={0} y={6} width={16} height={8} rx={4} fill="var(--fondo)" stroke="var(--tinta-suave)" strokeWidth={1} />
      <motion.g
        variants={{
          quieto: { x: 0 },
          girando: { x: -8, transition: { duration: 0.6, repeat: Infinity, ease: "linear" } },
        }}
      >
        <clipPath id="clipSinfin">
          <rect x={0} y={6} width={16} height={8} rx={4} />
        </clipPath>
        <g clipPath="url(#clipSinfin)">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1={i * 5 - 6}
              y1={16}
              x2={i * 5 - 2}
              y2={4}
              stroke="var(--tinta-suave)"
              strokeWidth={1.4}
            />
          ))}
        </g>
      </motion.g>

      {/* Rueda corona: engranaje pequeño que rota */}
      <motion.g
        style={{ transformOrigin: "25px 10px" }}
        variants={{
          quieto: { rotate: 0 },
          girando: { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } },
        }}
      >
        {Array.from({ length: DIENTES }).map((_, i) => {
          const angulo = (360 / DIENTES) * i;
          return (
            <rect
              key={i}
              x={25 - 1.4}
              y={10 - RADIO}
              width={2.8}
              height={3.2}
              fill="var(--acento)"
              transform={`rotate(${angulo} 25 10)`}
            />
          );
        })}
        <circle cx={25} cy={10} r={RADIO - 3.2} fill="var(--acento)" />
        <circle cx={25} cy={10} r={2.2} fill="var(--fondo)" />
      </motion.g>
    </motion.svg>
  );
}
