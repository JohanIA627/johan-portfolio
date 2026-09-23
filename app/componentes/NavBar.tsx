"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import ToggleIdioma from "./ToggleIdioma";
import ToggleTema from "./ToggleTema";

const ENLACES: { href: string; clave: keyof typeof diccionario.nav }[] = [
  { href: "#home", clave: "home" },
  { href: "#proyectos-ingenieria", clave: "proyectosIngenieria" },
  { href: "#plataformas", clave: "plataformas" },
  { href: "#proyectos-academicos", clave: "academicos" },
];

const CURVA = [0.32, 0.72, 0, 1] as const;

function useSeccionActiva() {
  const [activa, setActiva] = useState<string>("home");

  useEffect(() => {
    const ids = ENLACES.map((e) => e.href.slice(1));
    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elementos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas.filter((entrada) => entrada.isIntersecting);
        if (visibles.length > 0) {
          setActiva(visibles[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return activa;
}

export default function NavBar() {
  const { idioma, cambiarIdioma } = useIdioma();
  const d = diccionario.nav;
  const seccionActiva = useSeccionActiva();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, ease: CURVA }}
      className="sticky top-0 z-30 backdrop-blur"
      style={{
        background: "var(--nav-fondo)",
        borderBottom: "1px solid var(--borde)",
      }}
    >
      <div className="contenedor flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <span
            className="text-sm sm:text-lg font-bold whitespace-nowrap"
            style={{ color: "var(--acento)", fontFamily: "var(--font-firma), cursive" }}
          >
            {t(d.marca, idioma)}
          </span>
          <div className="hidden sm:flex gap-5 text-base">
            {ENLACES.map((e) => (
              <a
                key={e.href}
                href={e.href}
                className="enlace-nav"
                style={{
                  color: "var(--tinta-titulo)",
                  fontFamily: "var(--font-firma), cursive",
                  textDecoration: seccionActiva === e.href.slice(1) ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
              >
                {t(d[e.clave], idioma)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ToggleIdioma idioma={idioma} cambiarIdioma={cambiarIdioma} />
          <ToggleTema />
        </div>
      </div>

      <div className="sm:hidden flex flex-wrap gap-x-4 gap-y-1 text-base px-6 pb-3 -mt-1">
        {ENLACES.map((e) => (
          <a
            key={e.href}
            href={e.href}
            className="enlace-nav"
            style={{
              color: "var(--tinta-titulo)",
              fontFamily: "var(--font-firma), cursive",
              textDecoration: seccionActiva === e.href.slice(1) ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            {t(d[e.clave], idioma)}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
