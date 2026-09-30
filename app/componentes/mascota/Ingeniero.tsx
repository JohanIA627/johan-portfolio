"use client";

import { motion } from "motion/react";

// Mascota del sitio: bloque redondeado terracota con dos ojos cuadrados,
// cuatro patas cortas y dos muñones laterales, con borde claro tipo sticker
// (`paintOrder: stroke` para que el trazo quede por detrás del relleno).
// Sigue la línea de Clawd, la mascota no oficial de Claude Code, redibujada
// a partir de los tres diseños que pasó Johan: casco + cono, birrete, y
// casco entre ladrillos. Plano, sin degradados, y siempre con movimiento.

export type Pose = "ladrillos" | "cono" | "birrete" | "saludo" | "laptop";

type Props = { pose: Pose; className?: string };

export default function Ingeniero({ pose, className }: Props) {
  // En el pie de contacto el fondo es oscuro: el cuerpo va en el tono claro
  // para que no se pierda.
  const oscuro = pose === "saludo";
  const cuerpo = oscuro ? "var(--naranja-clawd-claro)" : "var(--naranja-clawd)";
  const borde = "var(--mascota-borde)";
  const ojos = "#14171b";

  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      {pose === "ladrillos" && <Ladrillos />}

      <motion.g
        style={{ paintOrder: "stroke", transformOrigin: "50px 84px" }}
        animate={{ y: [0, -1.6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Patas: cuatro bloques cortos, las dos de los extremos se mecen */}
        {[29.5, 40.5, 51.5, 62.5].map((x, i) => (
          <motion.rect
            key={x}
            x={x}
            y={82}
            width={7.5}
            height={15}
            rx={2.5}
            fill={cuerpo}
            stroke={borde}
            strokeWidth={3}
            style={{ transformOrigin: `${x + 3.75}px 82px` }}
            animate={{ rotate: i === 0 ? [3, -3, 3] : i === 3 ? [-3, 3, -3] : 0 }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}

        {/* Muñones laterales */}
        <MunonIzquierdo pose={pose} cuerpo={cuerpo} borde={borde} />
        <MunonDerecho pose={pose} cuerpo={cuerpo} borde={borde} />

        {/* Cuerpo: un solo bloque, sin cabeza aparte */}
        <rect x={28} y={34} width={44} height={50} rx={9} fill={cuerpo} stroke={borde} strokeWidth={3} />

        {/* Ojos: dos cuadrados negros */}
        <rect x={38} y={50} width={8} height={8} fill={ojos} />
        <rect x={54} y={50} width={8} height={8} fill={ojos} />
      </motion.g>

      {(pose === "ladrillos" || pose === "cono") && <Casco />}
      {pose === "birrete" && <Birrete />}
      {pose === "cono" && <Cono />}
      {pose === "laptop" && <Laptop />}
    </svg>
  );
}

// Casco de seguridad, ladeado sobre el bloque. Cabecea apenas.
function Casco() {
  return (
    <motion.g
      style={{ transformOrigin: "50px 38px" }}
      animate={{ rotate: [-11, -7, -11] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M26,36 A24,24 0 0 1 74,36 Z"
        fill="var(--amarillo-casco)"
        stroke="var(--mascota-borde)"
        strokeWidth={2.5}
        style={{ paintOrder: "stroke" }}
      />
      {/* Ala: apenas más ancha que el casquete, si no parece sombrero */}
      <rect
        x={23}
        y={32}
        width={54}
        height={8}
        rx={4}
        fill="var(--amarillo-casco-oscuro)"
        stroke="var(--mascota-borde)"
        strokeWidth={2.5}
        style={{ paintOrder: "stroke" }}
      />
      {/* Nervio central, por dentro del casquete */}
      <rect x={47.5} y={17} width={5} height={15} rx={2.5} fill="var(--amarillo-casco-oscuro)" />
    </motion.g>
  );
}

// Birrete de grado: tabla, base y borla que se mece.
function Birrete() {
  return (
    <g>
      <rect x={36} y={22} width={28} height={12} rx={3} fill="#232323" />
      <ellipse cx={50} cy={22} rx={14} ry={5} fill="#2c2c2c" />
      <polygon
        points="50,8 80,20 50,32 20,20"
        fill="#232323"
        stroke="var(--mascota-borde)"
        strokeWidth={2.5}
        style={{ paintOrder: "stroke" }}
      />
      <circle cx={50} cy={20} r={2.2} fill="var(--amarillo-casco)" />
      <motion.g
        style={{ transformOrigin: "50px 20px" }}
        animate={{ rotate: [-7, 7, -7] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M50,20 Q64,19 70,24" fill="none" stroke="var(--amarillo-casco)" strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={70 - i * 1.6}
            y1={24}
            x2={68 - i * 1.6}
            y2={38}
            stroke="var(--amarillo-casco)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        ))}
      </motion.g>
    </g>
  );
}

// Cono de tránsito al lado de la mascota, tambaleándose desde la base.
function Cono() {
  return (
    <motion.g
      style={{ transformOrigin: "14px 98px" }}
      animate={{ rotate: [-3.5, 3.5, -3.5] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <clipPath id="clipCono">
        <polygon points="14,52 27,95 1,95" />
      </clipPath>
      <polygon
        points="14,52 27,95 1,95"
        fill="var(--cono-naranja)"
        stroke="var(--mascota-borde)"
        strokeWidth={2.5}
        style={{ paintOrder: "stroke" }}
      />
      <g clipPath="url(#clipCono)">
        <rect x={-2} y={68} width={32} height={8} fill="#ffffff" />
        <rect x={-2} y={82} width={32} height={8} fill="#ffffff" />
      </g>
      <rect
        x={-2}
        y={95}
        width={32}
        height={7}
        rx={2.5}
        fill="var(--cono-naranja)"
        stroke="var(--mascota-borde)"
        strokeWidth={2.5}
        style={{ paintOrder: "stroke" }}
      />
    </motion.g>
  );
}

// Muros de ladrillo a lado y lado: el último ladrillo de cada muro entra en
// su sitio y se queda, como una obra que avanza.
const FILAS = [0, 1, 2, 3];

function Ladrillos() {
  return (
    <g>
      {FILAS.map((fila) => {
        const y = 94 - fila * 9;
        const desfase = fila % 2 === 0 ? 0 : -8;
        return (
          <g key={fila}>
            {[0, 1].map((i) => (
              <rect
                key={`izq-${i}`}
                x={-6 + desfase + i * 17}
                y={y}
                width={15.5}
                height={7.5}
                rx={1.5}
                fill="var(--ladrillo)"
              />
            ))}
            {[0, 1].map((i) => (
              <rect
                key={`der-${i}`}
                x={72 - desfase + i * 17}
                y={y}
                width={15.5}
                height={7.5}
                rx={1.5}
                fill="var(--ladrillo)"
              />
            ))}
          </g>
        );
      })}
      <motion.rect
        x={72}
        y={58}
        width={15.5}
        height={7.5}
        rx={1.5}
        fill="var(--ladrillo-claro)"
        initial={{ x: 18, opacity: 0 }}
        animate={{ x: [18, 0, 0, 18], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, times: [0, 0.35, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

// Portátil apoyado al frente: la pantalla parpadea mientras la mascota teclea.
function Laptop() {
  return (
    <g>
      <rect x={31} y={75} width={38} height={4.5} rx={2} fill="var(--tinta-suave)" />
      <motion.rect
        x={35}
        y={62}
        width={30}
        height={14}
        rx={2}
        fill="var(--papel)"
        stroke="var(--tinta-suave)"
        strokeWidth={1.6}
        animate={{ opacity: [1, 0.72, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function MunonIzquierdo({ pose, cuerpo, borde }: { pose: Pose; cuerpo: string; borde: string }) {
  const forma = (
    <rect x={20.5} y={52} width={9} height={13} rx={3} fill={cuerpo} stroke={borde} strokeWidth={3} />
  );
  if (pose !== "laptop") return forma;
  return (
    <motion.g
      style={{ transformOrigin: "25px 58px" }}
      animate={{ y: [0, -1.8, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {forma}
    </motion.g>
  );
}

function MunonDerecho({ pose, cuerpo, borde }: { pose: Pose; cuerpo: string; borde: string }) {
  const forma = (
    <rect x={70.5} y={52} width={9} height={13} rx={3} fill={cuerpo} stroke={borde} strokeWidth={3} />
  );
  if (pose === "saludo") {
    return (
      <motion.g
        style={{ transformOrigin: "71px 62px" }}
        animate={{ rotate: [0, -38, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {forma}
      </motion.g>
    );
  }
  if (pose === "laptop") {
    return (
      <motion.g
        style={{ transformOrigin: "75px 58px" }}
        animate={{ y: [0, -1.8, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        {forma}
      </motion.g>
    );
  }
  return forma;
}
