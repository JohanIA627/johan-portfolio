"use client";

import { useState } from "react";
import { proyectos, type Proyecto } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import Reveal from "./Reveal";
import Ingeniero from "./mascota/Ingeniero";
import EnConstruccion from "./EnConstruccion";
import ProyectoModal from "./ProyectoModal";

export default function ProyectosAcademicos() {
  const { idioma } = useIdioma();
  const d = diccionario.proyectosAcademicos;
  const proyectosAcademicos = proyectos.filter((p) => p.categoria === "academico");
  const [abierto, setAbierto] = useState<Proyecto | null>(null);

  return (
    <section id="proyectos-academicos" className="py-14 md:py-20">
      <div className="contenedor relative">
        <Reveal>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-firma), cursive" }}>
            <span aria-hidden>🎓 </span>
            {t(d.titulo, idioma)}
          </h2>
          <p
            className="mb-10 text-lg"
            style={{ fontFamily: "var(--font-firma), cursive", color: "var(--tinta)" }}
          >
            {t(d.subtitulo, idioma)}
          </p>
        </Reveal>
        <Ingeniero
          pose="birrete"
          className="hidden md:block absolute top-0 right-0 w-[144px] h-[168px]"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {proyectosAcademicos.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article id={p.id} className="tarjeta scroll-mt-24 h-full overflow-hidden">
                {p.fotos && p.fotos.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setAbierto(p)}
                    aria-label={`${t(d.verFotos, idioma)}: ${t(p.titulo, idioma)}`}
                    className="block w-full cursor-pointer"
                  >
                    <img
                      src={p.fotos[0]}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-40 object-cover"
                    />
                  </button>
                ) : (
                  <EnConstruccion indice={i} />
                )}
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3
                      className="text-lg font-semibold flex-1 min-w-[60%]"
                      style={{ color: "var(--tinta-titulo)" }}
                    >
                      {p.emoji && <span aria-hidden>{p.emoji} </span>}
                      {t(p.titulo, idioma)}
                    </h3>
                  </div>
                  <p className="tenue text-sm mb-3">{t(p.contexto, idioma)}</p>
                  <p className="text-sm mb-4" style={{ color: "var(--tinta)" }}>
                    {t(p.descripcion, idioma)}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="dato text-[11px] tenue">
                      {p.stack.map((s) => t(s, idioma)).join("  ·  ")}
                    </p>
                  </div>
                  {p.estado && (
                    <p
                      className="dato text-[11px] mt-3 px-2.5 py-0.5 rounded-full inline-block"
                      style={{
                        background: "var(--fondo)",
                        color: "var(--acento)",
                        border: "1px solid var(--borde)",
                      }}
                    >
                      {t(p.estado, idioma)}
                    </p>
                  )}
                  {p.fotos && p.fotos.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setAbierto(p)}
                      className="dato text-[11px] mt-4 block cursor-pointer"
                      style={{ color: "var(--acento)", background: "none", border: "none", padding: 0 }}
                    >
                      {t(d.verFotos, idioma)} →
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <ProyectoModal proyecto={abierto} onCerrar={() => setAbierto(null)} />
    </section>
  );
}
