"use client";

import { motion } from "motion/react";

// Mascota del sitio: una versión "vestida de ingeniero" (casco + chaleco) de
// Clawd, la mascota no oficial de Claude Code — cuerpo en caja redondeada
// naranja (#DA7758) con una placa de cara más clara al frente y dos ojos en
// forma de barra vertical negra, sin cabeza separada del cuerpo. Referencia:
// renders 3D del proyecto comunitario clawd-mochi (github.com/yousifamanuel/
// clawd-mochi). Interpretación propia en SVG plano, no un asset oficial.

export type Pose = "engranaje" | "plano" | "laptop" | "diploma" | "saludo";

type Props = { pose: Pose; className?: string };

const DIENTES_ENGRANAJE = 12;

export default function Ingeniero({ pose, className }: Props) {
  const oscuro = pose === "saludo";
  const colorCuerpo = oscuro ? "var(--naranja-clawd-claro)" : "var(--naranja-clawd)";
  const colorPanel = "var(--naranja-clawd-panel)";
  const colorTrazo = oscuro ? "var(--papel)" : "var(--tinta-titulo)";
  const colorOjos = "var(--tinta-titulo)";
  const colorCasco = "var(--amarillo-casco)";

  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      {pose === "engranaje" && <Engranaje />}

      {/* Piernas — bloques cortos y rectos, únicas que se balancean (pedido
          explícito para el Hero) */}
      <motion.g
        style={{ transformOrigin: "40px 74px" }}
        animate={pose === "engranaje" ? { rotate: [10, -6, 10] } : { rotate: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={34} y={74} width={11} height={20} rx={4} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "60px 74px" }}
        animate={pose === "engranaje" ? { rotate: [-8, 9, -8] } : { rotate: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      >
        <rect x={55} y={74} width={11} height={20} rx={4} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>

      {/* Garras/brazos — nubs laterales cortos, como en Clawd */}
      <BrazoIzquierdo pose={pose} color={colorCuerpo} trazo={colorTrazo} />
      <BrazoDerecho pose={pose} color={colorCuerpo} trazo={colorTrazo} />

      {/* Cuerpo: caja redondeada única, sin cabeza separada */}
      <rect x={24} y={16} width={52} height={58} rx={18} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.6} />
      {/* Cara lateral del bloque — sombra sutil, efecto "juguete 3D" */}
      <rect x={65} y={17} width={10} height={56} rx={10} fill={colorTrazo} opacity={0.14} />

      {/* Placa de cara — panel más claro insertado al frente */}
      <rect x={32} y={27} width={36} height={35} rx={11} fill={colorPanel} />
      {/* Ojos: barras verticales negras */}
      <rect x={41} y={37} width={7} height={16} rx={3.5} fill={colorOjos} />
      <rect x={58} y={37} width={7} height={16} rx={3.5} fill={colorOjos} />

      {/* Chaleco: franja diagonal debajo de la cara */}
      <rect
        x={28}
        y={65}
        width={44}
        height={6}
        rx={3}
        fill={oscuro ? "var(--tinta-titulo)" : "var(--fondo)"}
        transform="rotate(-5 50 68)"
        opacity={0.9}
      />

      {/* Casco de seguridad, encima del bloque */}
      <path d="M22,17 A28,23 0 0 1 78,17 Z" fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />
      <rect x={18} y={15} width={64} height={5} rx={2.5} fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />

      {/* Accesorio de la pose (plano / laptop / diploma) */}
      {pose === "plano" && <Plano />}
      {pose === "laptop" && <Laptop />}
      {pose === "diploma" && <Diploma color={colorCuerpo} trazo={colorTrazo} />}
    </svg>
  );
}

function Engranaje() {
  const cx = 50;
  const cy = 108;
  const radio = 24;
  const radioCuerpo = radio - 6;
  return (
    <g>
      {Array.from({ length: DIENTES_ENGRANAJE }).map((_, i) => {
        const angulo = (360 / DIENTES_ENGRANAJE) * i;
        return (
          <rect
            key={i}
            x={cx - 3}
            y={cy - radio}
            width={6}
            height={7}
            fill="var(--borde)"
            transform={`rotate(${angulo} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={radioCuerpo} fill="var(--borde)" stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <circle cx={cx} cy={cy} r={6} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1} />
    </g>
  );
}

function BrazoIzquierdo({ pose, color, trazo }: { pose: Pose; color: string; trazo: string }) {
  if (pose === "laptop") {
    return (
      <motion.g
        style={{ transformOrigin: "24px 52px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={18} y={48} width={11} height={15} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={16} y={44} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function BrazoDerecho({ pose, color, trazo }: { pose: Pose; color: string; trazo: string }) {
  if (pose === "saludo") {
    return (
      <motion.g
        style={{ transformOrigin: "78px 42px" }}
        animate={{ rotate: [0, -35, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={74} y={24} width={11} height={20} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "diploma") {
    return (
      <motion.g
        style={{ transformOrigin: "78px 42px" }}
        animate={{ rotate: [-6, 2, -6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={74} y={20} width={11} height={24} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "plano") {
    return (
      <motion.g
        style={{ transformOrigin: "78px 48px" }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={74} y={42} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "laptop") {
    return (
      <motion.g
        style={{ transformOrigin: "80px 52px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      >
        <rect x={75} y={48} width={11} height={15} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={77} y={44} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function Plano() {
  return (
    <motion.g
      style={{ transformOrigin: "92px 52px" }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={78} y={38} width={28} height={22} rx={2} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.4} />
      <line x1={83} y1={45} x2={101} y2={45} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={83} y1={50} x2={101} y2={50} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={83} y1={55} x2={94} y2={55} stroke="var(--tinta-suave)" strokeWidth={1.2} />
    </motion.g>
  );
}

function Laptop() {
  return (
    <g>
      <rect x={30} y={66} width={44} height={5} rx={1.5} fill="var(--tinta-suave)" />
      <motion.rect
        x={33}
        y={48}
        width={38}
        height={20}
        rx={2}
        fill="var(--papel)"
        stroke="var(--tinta-suave)"
        strokeWidth={1.4}
        style={{ transformOrigin: "33px 66px" }}
        animate={{ rotate: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function Diploma({ color, trazo }: { color: string; trazo: string }) {
  return (
    <motion.g
      style={{ transformOrigin: "92px 30px" }}
      animate={{ y: [0, -3, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={82} y={14} width={20} height={9} rx={4.5} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={86} y1={16.5} x2={98} y2={16.5} stroke="var(--tinta-suave)" strokeWidth={1} />
      <path d="M84,23 L84,30 L88,27 L92,30 L92,23" fill={color} stroke={trazo} strokeWidth={1} />
    </motion.g>
  );
}
