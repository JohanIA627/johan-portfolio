"use client";

import { motion } from "motion/react";

// Mascota original del sitio: un robot/blob amigable vestido de ingeniero
// (casco + chaleco de seguridad), plano y esquemático como el resto de los
// íconos del portafolio (sin degradados, solo colores de la paleta). No es
// ningún personaje de marca existente — es un diseño nuevo para acompañar
// cada sección haciendo una acción distinta.

export type Pose = "engranaje" | "plano" | "laptop" | "diploma" | "saludo";

type Props = { pose: Pose; className?: string };

const DIENTES_ENGRANAJE = 12;

export default function Ingeniero({ pose, className }: Props) {
  const oscuro = pose === "saludo";
  const colorCuerpo = oscuro ? "var(--azul-300)" : "var(--acento)";
  const colorCabeza = oscuro ? "var(--azul-300)" : "var(--fondo)";
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
        style={{ transformOrigin: "42px 90px" }}
        animate={
          pose === "engranaje"
            ? { rotate: [10, -6, 10] }
            : { rotate: 0 }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={36} y={90} width={10} height={22} rx={3} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "58px 90px" }}
        animate={
          pose === "engranaje"
            ? { rotate: [-8, 9, -8] }
            : { rotate: 0 }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      >
        <rect x={54} y={90} width={10} height={22} rx={3} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.2} />
      </motion.g>

      {/* Torso en bloque + chaleco */}
      <rect x={32} y={46} width={36} height={40} rx={10} fill={colorCuerpo} stroke={colorTrazo} strokeWidth={1.4} />
      {/* Cara lateral del bloque — sombra sutil que da el efecto "juguete 3D" */}
      <rect x={57} y={47} width={9} height={38} rx={4} fill={colorTrazo} opacity={0.14} />
      <rect
        x={35}
        y={58}
        width={30}
        height={5}
        rx={2.5}
        fill={oscuro ? "var(--tinta-titulo)" : "var(--fondo)"}
        transform="rotate(-7 50 60)"
        opacity={0.9}
      />

      {/* Brazos */}
      <BrazoIzquierdo pose={pose} color={colorCuerpo} trazo={colorTrazo} />
      <BrazoDerecho pose={pose} color={colorCuerpo} trazo={colorTrazo} />

      {/* Cabeza en bloque, ojos rectangulares — estilo juguete geométrico */}
      <rect x={36} y={16} width={28} height={28} rx={8} fill={colorCabeza} stroke={colorTrazo} strokeWidth={1.4} />
      <rect x={58} y={17} width={5.5} height={26} rx={2.5} fill={colorTrazo} opacity={0.14} />
      <rect x={41} y={27} width={5} height={8} rx={1.5} fill={colorTrazo} />
      <rect x={54} y={27} width={5} height={8} rx={1.5} fill={colorTrazo} />

      {/* Casco */}
      <path d="M33,29 A17,19 0 0 1 67,29 Z" fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />
      <rect x={30} y={27} width={40} height={4.5} rx={2.25} fill={colorCasco} stroke={colorTrazo} strokeWidth={1.2} />

      {/* Accesorio de la pose (plano / laptop / diploma) */}
      {pose === "plano" && <Plano />}
      {pose === "laptop" && <Laptop />}
      {pose === "diploma" && <Diploma color={colorCasco} trazo={colorTrazo} />}
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
        style={{ transformOrigin: "34px 62px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={30} y={62} width={9} height={18} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={28} y={58} width={9} height={22} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function BrazoDerecho({ pose, color, trazo }: { pose: Pose; color: string; trazo: string }) {
  if (pose === "saludo") {
    return (
      <motion.g
        style={{ transformOrigin: "68px 52px" }}
        animate={{ rotate: [0, -35, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={64} y={30} width={9} height={24} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "diploma") {
    return (
      <motion.g
        style={{ transformOrigin: "68px 52px" }}
        animate={{ rotate: [-6, 2, -6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={64} y={26} width={9} height={28} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "plano") {
    return (
      <motion.g
        style={{ transformOrigin: "66px 58px" }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={62} y={54} width={9} height={22} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  if (pose === "laptop") {
    return (
      <motion.g
        style={{ transformOrigin: "66px 62px" }}
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
      >
        <rect x={61} y={62} width={9} height={18} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />
      </motion.g>
    );
  }
  return <rect x={63} y={58} width={9} height={22} rx={4.5} fill={color} stroke={trazo} strokeWidth={1.2} />;
}

function Plano() {
  return (
    <motion.g
      style={{ transformOrigin: "84px 60px" }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={70} y={46} width={28} height={22} rx={2} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.4} />
      <line x1={75} y1={53} x2={93} y2={53} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={75} y1={58} x2={93} y2={58} stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={75} y1={63} x2={86} y2={63} stroke="var(--tinta-suave)" strokeWidth={1.2} />
    </motion.g>
  );
}

function Laptop() {
  return (
    <g>
      <rect x={30} y={80} width={40} height={5} rx={1.5} fill="var(--tinta-suave)" />
      <motion.rect
        x={33}
        y={62}
        width={34}
        height={20}
        rx={2}
        fill="var(--papel)"
        stroke="var(--tinta-suave)"
        strokeWidth={1.4}
        style={{ transformOrigin: "33px 80px" }}
        animate={{ rotate: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function Diploma({ color, trazo }: { color: string; trazo: string }) {
  return (
    <motion.g
      style={{ transformOrigin: "82px 38px" }}
      animate={{ y: [0, -3, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x={72} y={22} width={20} height={9} rx={4.5} fill="var(--papel)" stroke="var(--tinta-suave)" strokeWidth={1.2} />
      <line x1={76} y1={24.5} x2={88} y2={24.5} stroke="var(--tinta-suave)" strokeWidth={1} />
      <path d="M74,31 L74,38 L78,35 L82,38 L82,31" fill={color} stroke={trazo} strokeWidth={1} />
    </motion.g>
  );
}
