"use client";

import CintaPeligro from "./iconos/CintaPeligro";
import Taladro from "./iconos/Taladro";
import Volqueta from "./iconos/Volqueta";
import ConoSeguridad from "./iconos/ConoSeguridad";
import CarretillaObra from "./iconos/CarretillaObra";
import Ingeniero from "./mascota/Ingeniero";

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
      <CintaPeligro className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-0 left-3 flex items-end gap-1">
        <Ingeniero pose="plano" className="w-16 h-20" />
        <Herramienta className="w-10 h-10 mb-1" />
      </div>
    </div>
  );
}
