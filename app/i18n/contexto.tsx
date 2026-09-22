"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Idioma = "es" | "en";

type ContextoIdioma = {
  idioma: Idioma;
  cambiarIdioma: (idioma: Idioma) => void;
};

const ContextoIdiomaCtx = createContext<ContextoIdioma | null>(null);

const CLAVE_STORAGE = "johan-portfolio:idioma";

export function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>("es");

  useEffect(() => {
    try {
      const guardado = window.localStorage.getItem(CLAVE_STORAGE);
      if (guardado === "es" || guardado === "en") setIdioma(guardado);
    } catch {
      // localStorage no disponible (modo privado, etc.) — se queda en español
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = idioma;
  }, [idioma]);

  const cambiarIdioma = (nuevo: Idioma) => {
    setIdioma(nuevo);
    try {
      window.localStorage.setItem(CLAVE_STORAGE, nuevo);
    } catch {
      // no pasa nada si no se puede persistir
    }
  };

  return (
    <ContextoIdiomaCtx.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </ContextoIdiomaCtx.Provider>
  );
}

export function useIdioma() {
  const ctx = useContext(ContextoIdiomaCtx);
  if (!ctx) throw new Error("useIdioma debe usarse dentro de ProveedorIdioma");
  return ctx;
}

export function t<T extends Record<Idioma, unknown>>(campo: T, idioma: Idioma): T[Idioma] {
  return campo[idioma];
}
