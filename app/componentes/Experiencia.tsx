"use client";

import { useState } from "react";
import { experiencias, type Experiencia as ExperienciaTipo } from "../datos";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import Reveal from "./Reveal";
import ExperienciaModal from "./ExperienciaModal";
import HallazgoConsumibles from "./iconos/HallazgoConsumibles";

// Palabras clave temáticas para la foto de portada de cada tarjeta — son
// placeholders (servicio externo LoremFlickr) hasta que Johan pase las fotos
// reales de cada proyecto; `lock` fija la misma foto en cada recarga.
const FOTO_TEMA: Record<string, { tags: string; lock: number }> = {
  "IAF Ingeniería": { tags: "mechanical,engineering", lock: 1 },
  "Always Ahead": { tags: "startup,team", lock: 2 },
  "DSM Latinoamérica": { tags: "factory,industrial", lock: 3 },
  "Cuché Cuté": { tags: "coffee,shop", lock: 4 },
  Innovameq: { tags: "steel,machinery", lock: 5 },
  "Proinnprot SAS": { tags: "technology,office", lock: 6 },
};

function urlFoto(empresa: string) {
  const tema = FOTO_TEMA[empresa] ?? { tags: "engineering,industry", lock: 0 };
  return `https://loremflickr.com/640/400/${tema.tags}?lock=${tema.lock}`;
}

export default function Experiencia() {
  const { idioma } = useIdioma();
  const [seleccionada, setSeleccionada] = useState<ExperienciaTipo | null>(null);

  return (
    <div className="mt-14 max-w-4xl w-full text-left">
      <h2
        className="text-2xl font-bold mb-5"
        style={{ fontFamily: "var(--font-firma), cursive" }}
      >
        {t(diccionario.hero.tituloExperiencia, idioma)}
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {experiencias.map((exp, i) => (
          <Reveal key={`${exp.empresa}-${t(exp.periodo, idioma)}`} delay={i * 0.06}>
            <button
              type="button"
              onClick={() => setSeleccionada(exp)}
              className="tarjeta text-left w-full h-full flex flex-col cursor-pointer overflow-hidden"
            >
              <img
                src={urlFoto(exp.empresa)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="dato text-xs tenue mb-1">{t(exp.periodo, idioma)}</p>
                <p
                  className="text-sm font-semibold mb-2 flex items-center gap-2"
                  style={{ color: "var(--tinta-titulo)" }}
                >
                  {exp.emoji && <span aria-hidden>{exp.emoji}</span>}
                  <span>
                    {t(exp.rol, idioma)} · {exp.empresa}
                  </span>
                  {exp.empresa === "DSM Latinoamérica" && <HallazgoConsumibles />}
                </p>
                <p className="text-sm line-clamp-3" style={{ color: "var(--tinta)" }}>
                  {t(exp.descripcion, idioma)}
                </p>
                <span className="dato text-[11px] mt-4" style={{ color: "var(--acento)" }}>
                  {t(diccionario.experiencia.verMas, idioma)} →
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <ExperienciaModal experiencia={seleccionada} onCerrar={() => setSeleccionada(null)} />
    </div>
  );
}
