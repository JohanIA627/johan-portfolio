"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import { experiencias } from "../datos";
import { RevealGrupo, RevealItem } from "./RevealGrupo";
import VerificacionHumana from "./iconos/VerificacionHumana";
import HallazgoConsumibles from "./iconos/HallazgoConsumibles";

const CURVA = [0.32, 0.72, 0, 1] as const;

const HERRAMIENTAS = [
  "Solid Edge",
  "SolidWorks",
  "AutoCAD",
  "Power BI",
  "Excel / VBA",
  "n8n",
  "Claude Code",
  "Next.js",
  "Supabase",
];

export default function Hero() {
  const { idioma } = useIdioma();
  const h = diccionario.hero;

  return (
    <section id="home" className="pt-6 pb-14 md:pt-10 md:pb-20 overflow-x-clip">
      <div className="contenedor flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, ease: CURVA }}
          className="relative mx-auto w-[228px] h-[228px] sm:w-[290px] sm:h-[290px] md:w-[358px] md:h-[358px] lg:w-[428px] lg:h-[428px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full overflow-hidden w-[168px] h-[168px] sm:w-[216px] sm:h-[216px] md:w-[276px] md:h-[276px] lg:w-[330px] lg:h-[330px]"
              style={{
                boxShadow: "var(--sombra-alta)",
                border: "4px solid var(--papel)",
              }}
            >
              <Image
                src="/foto-johan.jpg"
                alt={t(h.nombre, idioma)}
                width={330}
                height={330}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <span
            className="absolute top-0 left-0 leading-tight text-left"
            style={{
              color: "var(--tinta-titulo)",
              fontFamily: "var(--font-firma), cursive",
              fontWeight: 700,
              fontSize: "clamp(1.3rem, 4.5vw, 2.2rem)",
              maxWidth: "min(170px, 46%)",
              transform: "rotate(-16deg)",
              transformOrigin: "top left",
            }}
          >
            {t(h.nombreCorto, idioma)}
          </span>
          <span
            className="absolute bottom-0 right-0 leading-tight text-right"
            style={{
              color: "var(--acento)",
              fontFamily: "var(--font-firma), cursive",
              fontWeight: 700,
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              maxWidth: "min(160px, 44%)",
              transform: "rotate(-16deg)",
              transformOrigin: "bottom right",
            }}
          >
            {t(h.carrera, idioma)}
          </span>
        </motion.div>

        <RevealGrupo amount={0} className="mt-10 max-w-xl flex flex-col items-center">
          <RevealItem as="div">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              {t(h.titular, idioma)}
            </h1>
          </RevealItem>
          <RevealItem as="div">
            <p className="text-base md:text-lg mb-2" style={{ color: "var(--tinta)" }}>
              {t(h.subtitular, idioma)}
            </p>
          </RevealItem>
          <RevealItem as="div">
            <p className="tenue mb-7">{t(h.ubicacion, idioma)}</p>
          </RevealItem>
          <RevealItem as="div" className="flex flex-wrap gap-3 justify-center">
            <a
              className="boton"
              href="https://www.linkedin.com/in/johansebastianrondon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(h.botonLinkedin, idioma)}
            </a>
            <a className="boton secundario" href="mailto:johan.rondon27@hotmail.com">
              {t(h.botonCorreo, idioma)}
            </a>
          </RevealItem>
        </RevealGrupo>

        <RevealGrupo className="tarjeta p-7 md:p-9 mt-14 max-w-2xl text-left">
          <RevealItem as="div">
            <p className="mb-4">{t(h.bio1, idioma)}</p>
          </RevealItem>
          <RevealItem as="div">
            <p className="mb-2">
              {t(h.bio2, idioma)} <VerificacionHumana />
            </p>
          </RevealItem>
          <RevealItem as="div">
            <p className="dato text-xs tenue">{HERRAMIENTAS.join("  ·  ")}</p>
          </RevealItem>
        </RevealGrupo>

        <div className="mt-10 max-w-2xl text-left w-full">
          <h2 className="text-lg font-semibold mb-4">{t(h.tituloExperiencia, idioma)}</h2>
          <RevealGrupo as="ul" className="flex flex-col gap-4">
            {experiencias.map((exp) => (
              <RevealItem
                key={`${exp.empresa}-${t(exp.periodo, idioma)}`}
                as="li"
                className="pb-4"
              >
                <div style={{ borderBottom: "1px solid var(--borde)" }} className="pb-0">
                  <p className="dato text-xs tenue mb-1">{t(exp.periodo, idioma)}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--tinta-titulo)" }}>
                    {exp.emoji && <span aria-hidden>{exp.emoji} </span>}
                    {t(exp.rol, idioma)} · {exp.empresa}
                  </p>
                  <p className="text-sm mt-1 flex items-start gap-2" style={{ color: "var(--tinta)" }}>
                    <span>{t(exp.descripcion, idioma)}</span>
                    {exp.empresa === "DSM Latinoamérica" && <HallazgoConsumibles />}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGrupo>
        </div>
      </div>
    </section>
  );
}
