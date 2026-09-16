"use client";

import { proyectos } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import ModelViewer from "./ModelViewer";
import Reveal from "./Reveal";

export default function ProyectosIngenieria() {
  const { idioma } = useIdioma();
  const d = diccionario.proyectosIngenieria;
  const proyectosIngenieria = proyectos.filter((p) => p.categoria === "ingenieria");

  return (
    <section id="proyectos-ingenieria" className="py-14 md:py-20">
      <div className="contenedor">
        <Reveal>
          <h2 className="text-2xl font-bold mb-2">
            <span aria-hidden>⚙️ </span>
            {t(d.titulo, idioma)}
          </h2>
          <p className="tenue mb-10">{t(d.subtitulo, idioma)}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectosIngenieria.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article id={p.id} className="tarjeta p-6 md:p-7 scroll-mt-24 h-full">
                <ModelViewer
                  src="/models/muestra.glb"
                  alt={t(p.titulo, idioma)}
                  ayuda={t(d.ayudaVisor, idioma)}
                />
                <p className="dato text-[10px] mt-2 mb-1" style={{ color: "var(--acento)" }}>
                  {t(d.avisoMuestra, idioma)}
                </p>
                <div className="flex flex-wrap items-start justify-between gap-2 mt-3 mb-1">
                  <h3
                    className="text-lg font-semibold flex-1 min-w-[60%]"
                    style={{ color: "var(--tinta-titulo)" }}
                  >
                    {t(p.titulo, idioma)}
                  </h3>
                  {p.estado && (
                    <span
                      className="dato text-[11px] px-2.5 py-1 rounded-full whitespace-normal text-right"
                      style={{
                        background: "var(--fondo)",
                        color: "var(--acento)",
                        border: "1px solid var(--borde)",
                      }}
                    >
                      {t(p.estado, idioma)}
                    </span>
                  )}
                </div>
                <p className="tenue text-sm mb-3">{t(p.contexto, idioma)}</p>
                <p className="text-sm mb-4" style={{ color: "var(--tinta)" }}>
                  {t(p.descripcion, idioma)}
                </p>
                <p className="dato text-[11px] tenue">
                  {p.stack.map((s) => t(s, idioma)).join("  ·  ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
