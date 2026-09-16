"use client";

import { motion } from "motion/react";

// Mecanismo de cremallera y piñón — 1.5× el tamaño del riel/rodamiento
// anterior (114×46 vs. 76×30). La rotación del engranaje no es un número
// estético: es física real de rodadura sin deslizamiento
// (ángulo = distancia recorrida / radio), para que los dientes se vean
// avanzar sobre la cremallera de forma consistente, no solo deslizarse.
const ANCHO = 114;
const ALTO = 46;
const RADIO = 18;
const DIAMETRO = RADIO * 2;
const CENTRO_IZQ = RADIO + 6; // "ES"
const CENTRO_DER = ANCHO - RADIO - 6; // "EN"
const RECORRIDO = CENTRO_DER - CENTRO_IZQ;
const ROTACION_GRADOS = (RECORRIDO / RADIO) * (180 / Math.PI);

const DIENTES_ENGRANAJE = 11;
const RADIO_CUERPO = RADIO - 5;
const RADIO_EJE = 5.5;

function Engranaje() {
  const dientes = Array.from({ length: DIENTES_ENGRANAJE });
  return (
    <svg width={DIAMETRO} height={DIAMETRO} viewBox={`${-RADIO} ${-RADIO} ${DIAMETRO} ${DIAMETRO}`}>
      <defs>
        <radialGradient id="metalEngranaje" cx="35%" cy="28%">
          <stop offset="0%" stopColor="#eaf3fc" />
          <stop offset="32%" stopColor="#a9c9e8" />
          <stop offset="62%" stopColor="#3d6f9e" />
          <stop offset="100%" stopColor="#12283b" />
        </radialGradient>
      </defs>
      {dientes.map((_, i) => {
        const angulo = (360 / DIENTES_ENGRANAJE) * i;
        return (
          <rect
            key={i}
            x={-2.4}
            y={-RADIO}
            width={4.8}
            height={5.5}
            rx={0.7}
            fill="url(#metalEngranaje)"
            stroke="#0a1a28"
            strokeWidth={0.4}
            transform={`rotate(${angulo})`}
          />
        );
      })}
      <circle r={RADIO_CUERPO} fill="url(#metalEngranaje)" stroke="#0a1a28" strokeWidth={0.6} />
      <circle r={RADIO_EJE} fill="#0d1b27" stroke="#000" strokeWidth={0.6} />
      <circle r={RADIO_EJE - 2} fill="#3d6f9e" opacity={0.6} />
    </svg>
  );
}

function Cremallera() {
  const grosor = 7;
  const y0 = ALTO - grosor - 2;
  const paso = 8.5;
  const dientes = Math.ceil(ANCHO / paso) + 1;
  return (
    <svg
      width={ANCHO}
      height={ALTO}
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      className="absolute inset-0"
      style={{ pointerEvents: "none" }}
    >
      <rect x={0} y={y0 + 3} width={ANCHO} height={grosor - 3} fill="#0a1a28" />
      {Array.from({ length: dientes }).map((_, i) => {
        const x = i * paso;
        return (
          <polygon
            key={i}
            points={`${x},${y0 + 4} ${x + 3},${y0} ${x + 5.5},${y0} ${x + 8.5},${y0 + 4}`}
            fill="#123a5c"
            stroke="#0a1a28"
            strokeWidth={0.5}
          />
        );
      })}
    </svg>
  );
}

export default function ToggleIdioma({
  idioma,
  cambiarIdioma,
}: {
  idioma: "es" | "en";
  cambiarIdioma: (idioma: "es" | "en") => void;
}) {
  const activo = idioma === "en";
  const centroX = activo ? CENTRO_DER : CENTRO_IZQ;
  const rotacion = activo ? ROTACION_GRADOS : 0;

  return (
    <div className="inline-flex items-center gap-2.5" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        onClick={() => cambiarIdioma("es")}
        aria-pressed={idioma === "es"}
        className="dato text-xs font-semibold transition-colors"
        style={{
          color: idioma === "es" ? "var(--tinta-titulo)" : "var(--tinta-suave)",
          transitionDuration: "var(--rapido)",
          transitionTimingFunction: "var(--curva)",
        }}
      >
        ES
      </button>

      <div
        className="relative overflow-hidden rounded-[10px]"
        style={{
          width: ANCHO,
          height: ALTO,
          background: "linear-gradient(180deg, #1B1F24, #0C0E11)",
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.05)",
          border: "1px solid #050607",
        }}
      >
        <Cremallera />
        <motion.div
          aria-hidden
          className="absolute pointer-events-none"
          style={{ top: ALTO - 7 - 2 - DIAMETRO, width: DIAMETRO, height: DIAMETRO }}
          animate={{ x: centroX - RADIO, rotate: rotacion }}
          transition={{ type: "spring", stiffness: 260, damping: 24, mass: 1 }}
        >
          <Engranaje />
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => cambiarIdioma("en")}
        aria-pressed={idioma === "en"}
        className="dato text-xs font-semibold transition-colors"
        style={{
          color: idioma === "en" ? "var(--tinta-titulo)" : "var(--tinta-suave)",
          transitionDuration: "var(--rapido)",
          transitionTimingFunction: "var(--curva)",
        }}
      >
        EN
      </button>
    </div>
  );
}
