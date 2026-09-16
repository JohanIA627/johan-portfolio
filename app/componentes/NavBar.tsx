"use client";

import { motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import ToggleIdioma from "./ToggleIdioma";

const ENLACES: { href: string; clave: keyof typeof diccionario.nav }[] = [
  { href: "#home", clave: "home" },
  { href: "#proyectos-ingenieria", clave: "proyectosIngenieria" },
  { href: "#plataformas", clave: "plataformas" },
];

const CURVA = [0.32, 0.72, 0, 1] as const;

export default function NavBar() {
  const { idioma, cambiarIdioma } = useIdioma();
  const d = diccionario.nav;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, ease: CURVA }}
      className="sticky top-0 z-30 backdrop-blur"
      style={{
        background: "rgba(246, 249, 252, 0.85)",
        borderBottom: "1px solid var(--borde)",
      }}
    >
      <div className="contenedor flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold" style={{ color: "var(--tinta-titulo)" }}>
            {t(d.marca, idioma)}
          </span>
          <div className="hidden sm:flex gap-5 text-sm">
            {ENLACES.map((e) => (
              <a key={e.href} href={e.href} style={{ color: "var(--tinta)" }}>
                {t(d[e.clave], idioma)}
              </a>
            ))}
          </div>
        </div>

        <ToggleIdioma idioma={idioma} cambiarIdioma={cambiarIdioma} />
      </div>

      <div className="sm:hidden flex gap-4 text-sm px-6 pb-3 -mt-1">
        {ENLACES.map((e) => (
          <a key={e.href} href={e.href} style={{ color: "var(--tinta)" }}>
            {t(d[e.clave], idioma)}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
