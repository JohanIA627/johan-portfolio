"use client";

import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import { RevealGrupo, RevealItem } from "./RevealGrupo";
import Ingeniero from "./mascota/Ingeniero";

export default function Contacto() {
  const { idioma } = useIdioma();
  const d = diccionario.contacto;

  return (
    <footer
      id="contacto"
      className="py-14 md:py-20"
      style={{ background: "var(--tinta-titulo)" }}
    >
      <div className="contenedor max-w-2xl text-center relative">
        <Ingeniero pose="saludo" className="mx-auto w-20 h-24 mb-2" />
        <RevealGrupo>
          <RevealItem as="div">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#fff" }}>
              {t(d.titulo, idioma)}
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              {t(d.texto, idioma)}
            </p>
          </RevealItem>
          <RevealItem as="div" className="flex flex-wrap gap-3 justify-center mb-10">
            <a
              className="boton"
              style={{ background: "var(--azul-400)", color: "var(--tinta-titulo)" }}
              href="mailto:johan.rondon27@hotmail.com"
            >
              {t(d.correo, idioma)}
            </a>
            <a
              className="boton secundario"
              style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
              href="https://www.linkedin.com/in/johansebastianrondon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(d.linkedin, idioma)}
            </a>
          </RevealItem>
          <RevealItem as="div">
            <p className="dato text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t(d.ubicacion, idioma)}
            </p>
          </RevealItem>
        </RevealGrupo>
      </div>
    </footer>
  );
}
