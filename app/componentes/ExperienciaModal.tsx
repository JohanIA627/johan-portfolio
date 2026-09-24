"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import type { Experiencia as ExperienciaTipo } from "../datos";
import SelloConstruccion from "./SelloConstruccion";
import TextoConEnlaces from "./TextoConEnlaces";
import { useBloquearScroll } from "./useBloquearScroll";

type Props = {
  experiencia: ExperienciaTipo | null;
  onCerrar: () => void;
};

export default function ExperienciaModal({ experiencia, onCerrar }: Props) {
  const { idioma } = useIdioma();
  const d = diccionario.experiencia;
  const panelRef = useRef<HTMLDivElement>(null);
  const disparadorRef = useRef<HTMLElement | null>(null);
  const tituloId = "experiencia-modal-titulo";

  useBloquearScroll(experiencia !== null);

  useEffect(() => {
    if (!experiencia) return;
    disparadorRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCerrar();
        return;
      }
      if (e.key !== "Tab") return;
      const focosables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])'
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
  }, [experiencia, onCerrar]);

  return (
    <AnimatePresence>
      {experiencia && (
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

            <p className="dato text-xs tenue mb-1">{t(experiencia.periodo, idioma)}</p>
            <h3
              id={tituloId}
              className="text-lg font-semibold mb-4 pr-6"
              style={{ color: "var(--tinta-titulo)" }}
            >
              {experiencia.logo ? (
                <img
                  src={experiencia.logo}
                  alt=""
                  aria-hidden="true"
                  className="inline-block w-7 h-7 rounded-md object-contain bg-white align-middle mr-2"
                />
              ) : (
                experiencia.emoji && <span aria-hidden>{experiencia.emoji} </span>
              )}
              <TextoConEnlaces texto={`${t(experiencia.rol, idioma)} · ${experiencia.empresa}`} />
            </h3>

            <div className="text-sm mb-6 flex flex-col gap-3" style={{ color: "var(--tinta)" }}>
              {t(experiencia.detalle ?? experiencia.descripcion, idioma)
                .split("\n\n")
                .map((parrafo, i) => (
                  <p key={i}>
                    <TextoConEnlaces texto={parrafo} />
                  </p>
                ))}
            </div>

            {experiencia.enlaces && (
              <div className="flex flex-wrap gap-2 mb-6">
                {experiencia.enlaces.map((e) => (
                  <a
                    key={e.href}
                    className="boton secundario"
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(e.etiqueta, idioma)} ↗
                  </a>
                ))}
              </div>
            )}

            {experiencia.fotos && experiencia.fotos.length > 0 ? (
              <div className={experiencia.fotos.length > 1 ? "grid grid-cols-2 gap-2" : ""}>
                {experiencia.fotos.map((foto, i) => (
                  <div
                    key={foto}
                    className={`relative rounded-[var(--r-medio)] overflow-hidden ${
                      i === 0 && experiencia.fotos!.length > 1 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={foto}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className={`w-full object-cover ${i === 0 ? "h-48" : "h-32"}`}
                    />
                    <SelloConstruccion />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="rounded-[var(--r-medio)] flex flex-col items-center justify-center gap-2 py-8"
                style={{ background: "var(--fondo)", border: "1px dashed var(--borde)" }}
              >
                <svg width={40} height={34} viewBox="0 0 40 34" aria-hidden>
                  <rect
                    x={2}
                    y={2}
                    width={36}
                    height={26}
                    rx={3}
                    fill="none"
                    stroke="var(--tinta-suave)"
                    strokeWidth={2}
                  />
                  <circle cx={12} cy={12} r={3} fill="none" stroke="var(--tinta-suave)" strokeWidth={2} />
                  <path
                    d="M4 26 L15 16 L22 22 L28 14 L36 24"
                    fill="none"
                    stroke="var(--tinta-suave)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="dato text-xs tenue text-center px-4">{t(d.fotosProximamente, idioma)}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
