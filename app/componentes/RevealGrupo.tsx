"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const itemRevelado: Variants = {
  oculto: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 17, mass: 0.55 },
  },
};

type Etiqueta = "div" | "ul" | "ol";

export function RevealGrupo({
  children,
  as = "div",
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  as?: Etiqueta;
  amount?: number;
  className?: string;
}) {
  const Componente = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;
  return (
    <Componente
      variants={contenedor}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </Componente>
  );
}

export function RevealItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
}) {
  const Componente = as === "li" ? motion.li : motion.div;
  return (
    <Componente variants={itemRevelado} className={className}>
      {children}
    </Componente>
  );
}
