"use client";

import CintaPeligro from "./iconos/CintaPeligro";
import Ingeniero from "./mascota/Ingeniero";

// Superposición decorativa (cinta + mascota) para poner ENCIMA de una foto
// real ya existente, sin taparla del todo ni reemplazar el contenido —
// pointer-events-none para que no interfiera con links/clicks de lo que
// tiene debajo.
export default function SelloConstruccion({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className ?? ""}`} aria-hidden="true">
      <CintaPeligro className="absolute inset-0 w-full h-full" />
      <Ingeniero pose="plano" className="absolute bottom-0 left-2 w-14 h-16" />
    </div>
  );
}
