"use client";

// Dos cintas de peligro cruzadas en X, cada una como una curva con pandeo
// real (bezier con el punto de control desplazado hacia abajo, como una
// cuerda sujeta en sus dos extremos) — no una línea recta "templada". El
// volumen se simula con una sombra duplicada debajo y un degradado vertical
// sobre la cinta (más clara arriba, más oscura abajo). Las rayas
// diagonales salen de un patrón rotado, y "NO PASE" sigue la curva real
// con textPath, no texto recto superpuesto.

const ANCHO = 400;
const ALTO = 160;
const MARGEN = 26;
const SAG = 46; // cuánto "cae" el punto medio de cada cinta, en unidades del viewBox

// Bezier cuadrática: el punto real a t=0.5 es 0.25*P0 + 0.5*Pc + 0.25*P2.
// Para que ese punto quede `sag` unidades por debajo de la línea recta,
// el control debe ir a 2*sag por debajo del punto medio recto.
function controlY(y0: number, y2: number, sag: number) {
  return (y0 + y2) / 2 + sag * 2;
}

const P0_A = { x: MARGEN, y: MARGEN };
const P2_A = { x: ANCHO - MARGEN, y: ALTO - MARGEN };
const CTRL_A = { x: ANCHO / 2, y: controlY(P0_A.y, P2_A.y, SAG) };

const P0_B = { x: MARGEN, y: ALTO - MARGEN };
const P2_B = { x: ANCHO - MARGEN, y: MARGEN };
const CTRL_B = { x: ANCHO / 2, y: controlY(P0_B.y, P2_B.y, SAG) };

const PATH_A = `M${P0_A.x},${P0_A.y} Q${CTRL_A.x},${CTRL_A.y} ${P2_A.x},${P2_A.y}`;
const PATH_B = `M${P0_B.x},${P0_B.y} Q${CTRL_B.x},${CTRL_B.y} ${P2_B.x},${P2_B.y}`;

const GROSOR = 22;

export default function CintaPeligro({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="rayasPeligro"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="16" height="16" fill="var(--amarillo-casco)" />
          <rect width="8" height="16" fill="var(--tinta-titulo)" />
        </pattern>
        <linearGradient id="volumenCinta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      {/* Sombra: misma curva, desplazada, para dar sensación de que la
          cinta cuelga por delante del fondo, no pegada a él. */}
      <path
        d={PATH_A}
        transform="translate(3, 5)"
        fill="none"
        stroke="var(--tinta-titulo)"
        strokeOpacity={0.18}
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />
      <path
        d={PATH_B}
        transform="translate(3, 5)"
        fill="none"
        stroke="var(--tinta-titulo)"
        strokeOpacity={0.18}
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />

      {/* Cinta B primero (queda debajo en el cruce), luego A encima */}
      <path
        id="tapaB"
        d={PATH_B}
        fill="none"
        stroke="url(#rayasPeligro)"
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />
      <path
        d={PATH_B}
        fill="none"
        stroke="url(#volumenCinta)"
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />

      <path
        id="tapaA"
        d={PATH_A}
        fill="none"
        stroke="url(#rayasPeligro)"
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />
      <path
        d={PATH_A}
        fill="none"
        stroke="url(#volumenCinta)"
        strokeWidth={GROSOR}
        strokeLinecap="round"
      />

      <text fontSize="11" fontWeight={700} letterSpacing="2" fill="var(--tinta-titulo)">
        <textPath href="#tapaA" startOffset="4%">
          NO PASE • NO PASE • NO PASE • NO PASE
        </textPath>
      </text>
      <text fontSize="11" fontWeight={700} letterSpacing="2" fill="var(--tinta-titulo)">
        <textPath href="#tapaB" startOffset="4%">
          NO PASE • NO PASE • NO PASE • NO PASE
        </textPath>
      </text>
    </svg>
  );
}
