"use client";

import { motion } from "motion/react";

export default function ToggleIdioma({
  idioma,
  cambiarIdioma,
}: {
  idioma: "es" | "en";
  cambiarIdioma: (idioma: "es" | "en") => void;
}) {
  const activo = idioma === "en" ? 1 : 0;

  return (
    <div
      className="relative inline-flex items-center rounded-full"
      style={{
        width: 76,
        height: 30,
        background: "linear-gradient(180deg, #1B1F24, #0C0E11)",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.05)",
        border: "1px solid #050607",
      }}
      role="group"
      aria-label="Idioma / Language"
    >
      {/* pista/ranura */}
      <div
        className="absolute left-[15px] right-[15px] top-1/2 -translate-y-1/2 h-[2px] rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      <button
        type="button"
        onClick={() => cambiarIdioma("es")}
        aria-pressed={idioma === "es"}
        className="dato relative z-10 w-1/2 h-full text-[10px] font-semibold transition-colors"
        style={{
          color: idioma === "es" ? "#fff" : "rgba(255,255,255,0.35)",
          transitionDuration: "var(--rapido)",
          transitionTimingFunction: "var(--curva)",
        }}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => cambiarIdioma("en")}
        aria-pressed={idioma === "en"}
        className="dato relative z-10 w-1/2 h-full text-[10px] font-semibold transition-colors"
        style={{
          color: idioma === "en" ? "#fff" : "rgba(255,255,255,0.35)",
          transitionDuration: "var(--rapido)",
          transitionTimingFunction: "var(--curva)",
        }}
      >
        EN
      </button>

      {/* el rodamiento */}
      <motion.div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 24,
          height: 24,
          top: 3,
          background:
            "radial-gradient(circle at 32% 28%, #fff, #cfd6dd 35%, #8b95a1 68%, #565e68 100%)",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.5), inset 0 -2px 2px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.8)",
        }}
        animate={{ x: activo === 0 ? 3 : 49, rotate: activo === 0 ? 0 : 240 }}
        transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.6 }}
      />
    </div>
  );
}
