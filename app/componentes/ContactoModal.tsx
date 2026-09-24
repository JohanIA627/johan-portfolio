"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import { useBloquearScroll } from "./useBloquearScroll";

type Props = { abierto: boolean; onCerrar: () => void };

export default function ContactoModal({ abierto, onCerrar }: Props) {
  const { idioma } = useIdioma();
  const d = diccionario.contacto;
  const panelRef = useRef<HTMLDivElement>(null);
  const disparadorRef = useRef<HTMLElement | null>(null);
  const tituloId = "contacto-modal-titulo";

  useBloquearScroll(abierto);

  useEffect(() => {
    if (!abierto) return;
    disparadorRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const alPresionarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        onCerrar();
        return;
      }
      if (evento.key !== "Tab") return;
      const focosables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focosables || focosables.length === 0) return;
      const primero = focosables[0];
      const ultimo = focosables[focosables.length - 1];
      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    };
    window.addEventListener("keydown", alPresionarTecla);
    return () => {
      window.removeEventListener("keydown", alPresionarTecla);
      disparadorRef.current?.focus();
    };
  }, [abierto, onCerrar]);

  return (
    <AnimatePresence>
      {abierto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: "var(--overlay)", zIndex: 100 }}
          onClick={onCerrar}
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={tituloId}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="tarjeta p-7 md:p-9 max-w-sm w-full relative text-left"
            style={{ outline: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onCerrar}
              aria-label={idioma === "en" ? "Close" : "Cerrar"}
              className="absolute top-4 right-4 text-lg leading-none"
              style={{ color: "var(--tinta-suave)", background: "none", border: "none", cursor: "pointer" }}
            >
              ✕
            </button>

            <h2 id={tituloId} className="text-xl font-bold mb-2" style={{ color: "var(--tinta-titulo)" }}>
              {t(d.titulo, idioma)}
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--tinta)" }}>
              {t(d.texto, idioma)}
            </p>

            <div className="flex flex-col gap-3">
              <a className="boton" href={`mailto:${t(d.correo, idioma)}`}>
                {t(d.correo, idioma)}
              </a>
              <a
                className="boton secundario"
                href="https://www.linkedin.com/in/johansebastianrondon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(d.linkedin, idioma)}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
