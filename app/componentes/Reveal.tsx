"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const CURVA = [0.32, 0.72, 0, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: CURVA }}
    >
      {children}
    </motion.div>
  );
}
