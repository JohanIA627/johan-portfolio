"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Tema = "claro" | "oscuro";

type ContextoTema = {
  tema: Tema;
  cambiarTema: (tema: Tema) => void;
};

const ContextoTemaCtx = createContext<ContextoTema | null>(null);

const CLAVE_STORAGE = "johan-portfolio:tema";

function temaInicial(): Tema {
  if (typeof document === "undefined") return "claro";
  const puesto = document.documentElement.getAttribute("data-tema");
  return puesto === "oscuro" ? "oscuro" : "claro";
}

export function ProveedorTema({ children }: { children: ReactNode }) {
  // El script del <head> ya fijó data-tema antes de pintar: se parte de ahí
  // para que el estado de React coincida con lo que se ve.
  const [tema, setTema] = useState<Tema>(temaInicial);

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  const cambiarTema = (nuevo: Tema) => {
    setTema(nuevo);
    try {
      window.localStorage.setItem(CLAVE_STORAGE, nuevo);
    } catch {
      // sin localStorage, el tema solo dura la visita
    }
  };

  return (
    <ContextoTemaCtx.Provider value={{ tema, cambiarTema }}>{children}</ContextoTemaCtx.Provider>
  );
}

export function useTema() {
  const ctx = useContext(ContextoTemaCtx);
  if (!ctx) throw new Error("useTema debe usarse dentro de ProveedorTema");
  return ctx;
}
