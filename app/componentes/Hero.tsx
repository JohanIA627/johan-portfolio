"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { diccionario } from "../i18n/diccionario";
import { t, useIdioma } from "../i18n/contexto";
import { RevealGrupo, RevealItem } from "./RevealGrupo";
import VerificacionHumana from "./iconos/VerificacionHumana";
import Experiencia from "./Experiencia";
import ContactoModal from "./ContactoModal";
import Ingeniero from "./mascota/Ingeniero";

export default function Hero() {
  const { idioma } = useIdioma();
  const h = diccionario.hero;
  const [contactoAbierto, setContactoAbierto] = useState(false);

  return (
    <section id="home" className="pt-6 pb-14 md:pt-10 md:pb-20 overflow-x-clip">
      <div className="contenedor flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.78 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 14, mass: 0.8 }}
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

        <RevealGrupo amount={0} className="mt-10 flex flex-col items-center">
          <RevealItem as="div" className="flex flex-wrap gap-3 justify-center">
            <button type="button" className="boton" onClick={() => setContactoAbierto(true)}>
              {t(h.botonContacto, idioma)}
            </button>
            <a className="boton secundario" href="/cv-johan-rondon.pdf" download>
              {t(h.botonCV, idioma)}
            </a>
          </RevealItem>
        </RevealGrupo>

        <ContactoModal abierto={contactoAbierto} onCerrar={() => setContactoAbierto(false)} />

        <RevealGrupo className="tarjeta p-7 md:p-9 mt-14 max-w-2xl text-left relative overflow-visible">
          <RevealItem as="div">
            <p className="mb-4">{t(h.bio1, idioma)}</p>
          </RevealItem>
          <RevealItem as="div">
            <p className="mb-2">
              {t(h.bio2, idioma)} <VerificacionHumana />
            </p>
          </RevealItem>
          <Ingeniero
            pose="engranaje"
            className="w-[140px] h-[160px] mx-auto mt-6 md:absolute md:mt-0 md:top-full md:right-6 md:-translate-y-4"
          />
        </RevealGrupo>

        <Experiencia />
      </div>
    </section>
  );
}
