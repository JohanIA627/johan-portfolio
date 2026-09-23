"use client";

import ToggleCremallera from "./ToggleCremallera";

// Selector ES / EN: envoltorio fino sobre el mecanismo compartido.
export default function ToggleIdioma({
  idioma,
  cambiarIdioma,
}: {
  idioma: "es" | "en";
  cambiarIdioma: (idioma: "es" | "en") => void;
}) {
  return (
    <ToggleCremallera
      izquierda="ES"
      derecha="EN"
      valor={idioma === "en" ? "derecha" : "izquierda"}
      onCambiar={(v) => cambiarIdioma(v === "derecha" ? "en" : "es")}
      etiquetaGrupo="Idioma / Language"
    />
  );
}
