"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "../i18n/contexto";
import { useTema } from "../tema/contexto";
import ToggleCremallera from "./ToggleCremallera";

const ICONO = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Sol() {
  return (
    <svg {...ICONO}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function Luna() {
  return (
    <svg {...ICONO}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

// Selector claro / oscuro con el mismo mecanismo que el de idioma.
export default function ToggleTema() {
  const { idioma } = useIdioma();
  const { tema, cambiarTema } = useTema();
  const en = idioma === "en";

  // El servidor siempre pinta "claro", pero el cliente puede arrancar en
  // "oscuro" (lo fija un script del <head>). Hasta montar se muestra "claro"
  // para que la hidratación coincida; luego se salta al valor real sin animar
  // y solo después se activa la animación.
  const [montado, setMontado] = useState(false);
  const [animable, setAnimable] = useState(false);
  useEffect(() => {
    setMontado(true);
    const id = requestAnimationFrame(() => setAnimable(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const real = montado ? tema : "claro";

  return (
    <ToggleCremallera
      izquierda={<Sol />}
      derecha={<Luna />}
      valor={real === "oscuro" ? "derecha" : "izquierda"}
      onCambiar={(v) => cambiarTema(v === "derecha" ? "oscuro" : "claro")}
      etiquetaGrupo={en ? "Theme" : "Tema"}
      etiquetaIzq={en ? "Light theme" : "Tema claro"}
      etiquetaDer={en ? "Dark theme" : "Tema oscuro"}
      instantaneo={!animable}
    />
  );
}
