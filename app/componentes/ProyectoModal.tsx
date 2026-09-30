"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import type { Proyecto } from "../datos";
import { useBloquearScroll } from "./useBloquearScroll";
import Galeria from "./Galeria";

// Ventana de un proyecto con fotos reales (hoy solo Mermelatte). Mismo
// comportamiento que ExperienciaModal: bloquea el scroll del fondo, atrapa el
// foco, cierra con Escape o clic afuera. Sin cinta de obra: las cintas se
// quedan solo donde todavía no hay foto.
type Props = {
  proyecto: Proyecto | null;
  onCerrar: () => void;
};

export default function ProyectoModal({ proyecto, onCerrar }: Props) {
  const { idioma } = useIdioma();
  const d = diccionario.experiencia;
  const panelRef = useRef<HTMLDivElement>(null);
  const disparadorRef = useRef<HTMLElement | null>(null);
  const tituloId = "proyecto-modal-titulo";

  useBloquearScroll(proyecto !== null);

  useEffect(() => {
    if (!proyecto) return;
    disparadorRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCerrar();
        return;
      }
      if (e.key !== "Tab") return;
      const focosables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], video, [tabindex]:not([tabindex="-1"])'
      );
      if (!focosables || focosables.length === 0) return;
      const primero = focosables[0];
      const ultimo = focosables[focosables.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    window.addEventListener("keydown", manejarTecla);
    return () => {
      window.removeEventListener("keydown", manejarTecla);
      disparadorRef.current?.focus();
    };
  }, [proyecto, onCerrar]);

  return (
    <AnimatePresence>
      {proyecto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "var(--overlay)" }}
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
            transition={{ duration: 0.2 }}
            className="tarjeta p-7 md:p-9 max-w-lg w-full max-h-[85vh] overflow-y-auto text-left relative outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={t(d.cerrar, idioma)}
              onClick={onCerrar}
              className="absolute top-4 right-4 text-lg leading-none cursor-pointer"
              style={{ color: "var(--tinta-suave)" }}
            >
              ✕
            </button>

            <p className="dato text-xs tenue mb-1">{t(proyecto.contexto, idioma)}</p>
            <h3
              id={tituloId}
              className="text-lg font-semibold mb-4 pr-6"
              style={{ color: "var(--tinta-titulo)" }}
            >
              {proyecto.emoji && <span aria-hidden>{proyecto.emoji} </span>}
              {t(proyecto.titulo, idioma)}
            </h3>

            <p className="text-sm mb-6" style={{ color: "var(--tinta)" }}>
              {t(proyecto.descripcion, idioma)}
            </p>

            {proyecto.fotos && proyecto.fotos.length > 0 && (
              <Galeria
                fotos={proyecto.fotos}
                video={proyecto.video}
                poster="/fotos/mermelatte-video.jpg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
