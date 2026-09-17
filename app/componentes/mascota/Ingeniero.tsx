"use client";

import { motion } from "motion/react";

// Mascota del sitio: una versión "vestida de ingeniero" (casco + chaleco) de
// Clawd, la mascota no oficial de Claude Code — un cuerpo único en bloques,
// naranja (#DA7758), con ojos cuadrados negros, sin cabeza separada del
// cuerpo. Interpretación propia en el mismo lenguaje visual plano/esquemático
// del resto de los íconos del portafolio (sin degradados, solo colores de la
// paleta), no un asset oficial de Anthropic.

export type Pose = "engranaje" | "plano" | "laptop" | "diploma" | "saludo";

type Props = { pose: Pose; className?: string };

const DIENTES_ENGRANAJE = 12;

export default function Ingeniero({ pose, className }: Props) {
  const oscuro = pose === "saludo";
  const colorCuerpo = oscuro ? "var(--naranja-clawd-claro)" : "var(--naranja-clawd)";
  const colorTrazo = oscuro ? "var(--papel)" : "var(--tinta-titulo)";
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
        style={{ transformOrigin: "40px 72px" }}
        animate={pose === "engranaje" ? { rotate: [10, -6, 10] } : { rotate: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={34} y={72} width={11} height={21} rx={4} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "60px 72px" }}
        animate={pose === "engranaje" ? { rotate: [-8, 9, -8] } : { rotate: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      >
        <rect x={55} y={72} width={11} height={21} rx={4} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>

      {/* Garras/brazos — nubs laterales cortos, como en Clawd */}
      <BrazoIzquierdo pose={pose} color={colorCuerpo} trazo={colorTrazo} />
      <BrazoDerecho pose={pose} color={colorCuerpo} trazo={colorTrazo} />

      {/* Cuerpo único en bloque — sin cabeza separada, como Clawd */}
      <rect x={26} y={18} width={48} height={54} rx={16} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.6} />
      {/* Cara lateral del bloque — sombra sutil, efecto "juguete 3D" */}
      <rect x={63} y={19} width={10} height={52} rx={8} fill={colorTrazo} opacity={0.14} />
      {/* Chaleco: franja diagonal */}
      <rect
        x={30}
        y={53}
        width={40}
        height={6}
        rx={3}
        fill={oscuro ? "var(--tinta-titulo)" : "var(--fondo)"}
        transform="rotate(-6 50 56)"
        opacity={0.9}
      />
      {/* Ojos cuadrados, bien separados */}
      <rect x={37} y={36} width={9} height={11} rx={2.5} fill={colorTrazo} />
      <rect x={54} y={36} width={9} height={11} rx={2.5} fill={colorTrazo} />

      {/* Casco de seguridad, encima del bloque */}
      <path d="M25,19 A25,21 0 0 1 75,19 Z" fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />
      <rect x={21} y={17} width={58} height={5} rx={2.5} fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />

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
        style={{ transformOrigin: "24px 50px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={18} y={46} width={11} height={15} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={16} y={42} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function BrazoDerecho({ pose, color, trazo }: { pose: Pose; color: string; trazo: string }) {
  if (pose === "saludo") {
    return (
      <motion.g
        style={{ transformOrigin: "76px 40px" }}
        animate={{ rotate: [0, -35, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={72} y={22} width={11} height={20} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "diploma") {
    return (
      <motion.g
        style={{ transformOrigin: "76px 40px" }}
        animate={{ rotate: [-6, 2, -6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={72} y={18} width={11} height={24} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "plano") {
    return (
      <motion.g
        style={{ transformOrigin: "76px 46px" }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={72} y={40} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "laptop") {
    return (
      <motion.g
        style={{ transformOrigin: "78px 50px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      >
        <rect x={73} y={46} width={11} height={15} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={75} y={42} width={11} height={16} rx={5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function Plano() {
  return (
    <motion.g
      style={{ transformOrigin: "90px 50px" }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={76} y={36} width={28} height={22} rx={2} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.4} />
      <line x1={81} y1={43} x2={99} y2={43} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={81} y1={48} x2={99} y2={48} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={81} y1={53} x2={92} y2={53} stroke="var(--tinta-suave)" strokeWidth={1.2} />
    </motion.g>
  );
}

function Laptop() {
  return (
    <g>
      <rect x={30} y={64} width={44} height={5} rx={1.5} fill="var(--tinta-suave)" />
      <motion.rect
        x={33}
        y={46}
        width={38}
        height={20}
        rx={2}
        fill="var(--papel)"
        stroke="var(--tinta-suave)"
        strokeWidth={1.4}
        style={{ transformOrigin: "33px 64px" }}
        animate={{ rotate: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function Diploma({ color, trazo }: { color: string; trazo: string }) {
  return (
    <motion.g
      style={{ transformOrigin: "90px 28px" }}
      animate={{ y: [0, -3, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={80} y={12} width={20} height={9} rx={4.5} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={84} y1={14.5} x2={96} y2={14.5} stroke="var(--tinta-suave)" strokeWidth={1} />
      <path d="M82,21 L82,28 L86,25 L90,28 L90,21" fill={color} stroke={trazo} strokeWidth={1} />
    </motion.g>
  );
}
