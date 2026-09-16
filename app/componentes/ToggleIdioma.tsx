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

// Esquemático y plano, con los colores que ya usa el resto del sitio — nada
// de degradados metálicos: fondo del panel (--tinta-titulo), cremallera en
// --tinta-suave, y el engranaje en --acento con un agujero al centro del
// mismo color del panel, para que se lea como un engranaje real (cuerpo +
// dientes + agujero) y no como una mancha que se confunde con el fondo.
const DIENTES_ENGRANAJE = 8;
const RADIO_CUERPO = RADIO - 6;
const RADIO_AGUJERO = 5;
const COLOR_PANEL = "var(--fondo)";
const COLOR_CREMALLERA = "var(--tinta-suave)";
const COLOR_ENGRANAJE = "var(--acento)";

function Engranaje() {
  const dientes = Array.from({ length: DIENTES_ENGRANAJE });
  return (
    <svg width={DIAMETRO} height={DIAMETRO} viewBox={`${-RADIO} ${-RADIO} ${DIAMETRO} ${DIAMETRO}`}>
      {dientes.map((_, i) => {
        const angulo = (360 / DIENTES_ENGRANAJE) * i;
        return (
          <rect
            key={i}
            x={-3}
            y={-RADIO}
            width={6}
            height={6}
            fill={COLOR_ENGRANAJE}
            transform={`rotate(${angulo})`}
          />
        );
      })}
      <circle r={RADIO_CUERPO} fill={COLOR_ENGRANAJE} />
      <circle r={RADIO_AGUJERO} fill={COLOR_PANEL} />
    </svg>
  );
}

function Cremallera() {
  const grosor = 6;
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
      <rect x={0} y={y0 + 3} width={ANCHO} height={grosor - 3} fill={COLOR_CREMALLERA} />
      {Array.from({ length: dientes }).map((_, i) => {
        const x = i * paso;
        return (
          <polygon
            key={i}
            points={`${x},${y0 + 4} ${x + 3},${y0} ${x + 5.5},${y0} ${x + 8.5},${y0 + 4}`}
            fill={COLOR_CREMALLERA}
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
          background: COLOR_PANEL,
          border: "1px solid var(--borde)",
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
