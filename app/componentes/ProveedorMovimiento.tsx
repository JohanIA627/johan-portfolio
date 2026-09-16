"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// "user" respeta prefers-reduced-motion del sistema operativo: si está
// activo, `motion` recorta automáticamente las animaciones a algo mínimo
// en vez de reproducirlas completas. Es la misma regla de accesibilidad
// de la skill `interfaz` de Gestión PH, aplicada aquí a través de Motion
// en vez de solo CSS.
export default function ProveedorMovimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
