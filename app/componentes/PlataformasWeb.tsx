"use client";

import { proyectos } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import Reveal from "./Reveal";
import GrafoNodos from "./iconos/GrafoNodos";
import Ingeniero from "./mascota/Ingeniero";
import SelloConstruccion from "./SelloConstruccion";

// Captura y enlace en vivo por id de proyecto (solo los que ya tienen despliegue público).
const RECURSOS_PLATAFORMAS: Record<string, { url: string; imagen: string }> = {
  "gestion-ph": { url: "https://gestion-ph-v22z.vercel.app/", imagen: "/fotos/proinnprot.png" },
};

export default function PlataformasWeb() {
  const { idioma } = useIdioma();
  const d = diccionario.plataformas;
  const plataformas = proyectos.filter((p) => p.categoria === "web");

  return (
    <section id="plataformas" className="py-14 md:py-20" style={{ background: "var(--papel)" }}>
      <div className="contenedor relative">
        <Reveal>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-firma), cursive" }}>
            <span aria-hidden>💻 </span>
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
          pose="laptop"
          className="hidden md:block absolute top-0 right-0 w-[144px] h-[168px]"
        />
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
                  className="relative shrink-0 rounded-[var(--r-grande)] overflow-hidden"
                  style={{
                    width: "100%",
                    maxWidth: 260,
                    height: 160,
                    boxShadow: "var(--sombra)",
                  }}
                >
                  <SelloConstruccion />
                  {(() => {
                    const recurso = RECURSOS_PLATAFORMAS[p.id];
                    const nombreProyecto = t(p.titulo, idioma);
                    if (!recurso) return null;
                    const etiquetaAbrir =
                      idioma === "en" ? `Open ${nombreProyecto}` : `Abrir ${nombreProyecto}`;
                    return (
                      <a
                        href={recurso.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={etiquetaAbrir}
                        className="block w-full h-full"
                      >
                        <img
                          src={recurso.imagen}
                          alt={nombreProyecto}
                          width={260}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    );
                  })()}
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
                    )}
                    {RECURSOS_PLATAFORMAS[p.id] && (
                      <a
                        href={RECURSOS_PLATAFORMAS[p.id].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dato text-[11px] underline underline-offset-2"
                        style={{ color: "var(--acento)" }}
                      >
                        {RECURSOS_PLATAFORMAS[p.id].url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
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
