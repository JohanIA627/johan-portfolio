"use client";

import { proyectos } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import Reveal from "./Reveal";
import ArchivadorServidor from "./iconos/ArchivadorServidor";
import ReciboEscaneado from "./iconos/ReciboEscaneado";
import Candado from "./iconos/Candado";
import GrafoNodos from "./iconos/GrafoNodos";

export default function PlataformasWeb() {
  const { idioma } = useIdioma();
  const d = diccionario.plataformas;
  const plataformas = proyectos.filter((p) => p.categoria === "web");

  return (
    <section id="plataformas" className="py-14 md:py-20" style={{ background: "var(--papel)" }}>
      <div className="contenedor">
        <Reveal>
          <h2 className="text-2xl font-bold mb-2">
            <span aria-hidden>💻 </span>
            {t(d.titulo, idioma)}
          </h2>
          <p className="tenue mb-10">{t(d.subtitulo, idioma)}</p>
        </Reveal>
        <div className="flex flex-col">
          {plataformas.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article
                id={p.id}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start py-8 scroll-mt-24"
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--borde)" }}
              >
                <span
                  className="dato text-sm tenue shrink-0 hidden md:block"
                  style={{ width: 28 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="shrink-0 rounded-[var(--r-grande)] overflow-hidden"
                  style={{
                    width: "100%",
                    maxWidth: 260,
                    height: 160,
                    boxShadow: "var(--sombra)",
                  }}
                >
                  {p.id === "gestion-ph" ? <ArchivadorServidor /> : <ReciboEscaneado />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--tinta-titulo)" }}>
                    {t(p.titulo, idioma)}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "var(--tinta)" }}>
                    {t(p.descripcion, idioma)}
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <p className="dato text-[11px] tenue flex flex-wrap items-center gap-x-1">
                      {p.stack.map((s, si) => {
                        const texto = t(s, idioma);
                        return (
                          <span key={si} className="inline-flex items-center gap-1">
                            {si > 0 && <span aria-hidden>·</span>}
                            {texto}
                            {texto === "n8n" && <GrafoNodos />}
                          </span>
                        );
                      })}
                    </p>
                    {p.estado && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="dato text-[11px] px-2.5 py-0.5 rounded-full"
                          style={{
                            background: "var(--fondo)",
                            color: "var(--acento)",
                            border: "1px solid var(--borde)",
                          }}
                        >
                          {t(p.estado, idioma)}
                        </span>
                        {p.id === "fl-shoes" && <Candado />}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
