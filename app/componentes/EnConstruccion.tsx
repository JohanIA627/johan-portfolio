"use client";

import Taladro from "./iconos/Taladro";
import Volqueta from "./iconos/Volqueta";
import ConoSeguridad from "./iconos/ConoSeguridad";
import CarretillaObra from "./iconos/CarretillaObra";
import SelloConstruccion from "./SelloConstruccion";

// Escena "en construcción" para proyectos sin capturas reales todavía:
// cinta de peligro colgando en X + la mascota (ya trae casco y chaleco en
// el propio dibujo) + una pieza de maquinaria amarilla al lado. La
// herramienta se elige por posición (índice en la lista), no por hash del
// id, para garantizar que las tarjetas consecutivas nunca repitan pieza.
const HERRAMIENTAS = [Taladro, Volqueta, ConoSeguridad, CarretillaObra];

export default function EnConstruccion({ indice }: { indice: number }) {
  const Herramienta = HERRAMIENTAS[indice % HERRAMIENTAS.length];

  return (
    <div
      className="relative w-full h-40 overflow-hidden"
      style={{ background: "var(--fondo)" }}
      aria-hidden="true"
    >
      <SelloConstruccion />
      <Herramienta className="absolute bottom-1 left-16 w-10 h-10" />
    </div>
  );
}
