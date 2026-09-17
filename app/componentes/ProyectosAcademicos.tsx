"use client";

import { proyectos } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import Reveal from "./Reveal";
import Ingeniero from "./mascota/Ingeniero";

export default function ProyectosAcademicos() {
  const { idioma } = useIdioma();
  const d = diccionario.proyectosAcademicos;
  const proyectosAcademicos = proyectos.filter((p) => p.categoria === "academico");

  return (
    <section id="proyectos-academicos" className="py-14 md:py-20">
      <div className="contenedor relative">
        <Reveal>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-firma), cursive" }}>
            <span aria-hidden>🎓 </span>
            {t(d.titulo, idioma)}
          </h2>
          <p className="tenue mb-10">{t(d.subtitulo, idioma)}</p>
        </Reveal>
        <Ingeniero
          pose="diploma"
          className="hidden md:block absolute top-0 right-0 w-[144px] h-[168px]"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {proyectosAcademicos.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article id={p.id} className="tarjeta p-6 md:p-7 scroll-mt-24 h-full">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
