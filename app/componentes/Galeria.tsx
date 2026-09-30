"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useIdioma } from "../i18n/contexto";

// Galería de una sola foto a la vez, con flecha a cada lado. Las fotos van en
// una tira horizontal que se corre de a un ancho: así se pueden arrastrar con
// el dedo en móvil y el navegador conserva en caché lo ya visto. Da la vuelta
// al llegar al final. Si el proyecto trae video, va de primero.
type Diapositiva = { tipo: "foto" | "video"; src: string };

const ETIQUETAS = {
  anterior: { es: "Anterior", en: "Previous" },
  siguiente: { es: "Siguiente", en: "Next" },
};

export default function Galeria({
  fotos,
  video,
  poster,
}: {
  fotos: string[];
  video?: string;
  poster?: string;
}) {
  const { idioma } = useIdioma();
  const [actual, setActual] = useState(0);

  const diapositivas: Diapositiva[] = [
    ...(video ? [{ tipo: "video" as const, src: video }] : []),
    ...fotos.map((src) => ({ tipo: "foto" as const, src })),
  ];
  const total = diapositivas.length;

  const mover = (paso: number) => setActual((i) => (i + paso + total) % total);

  useEffect(() => {
    if (total < 2) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") mover(-1);
      if (e.key === "ArrowRight") mover(1);
    };
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  if (total === 0) return null;

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-[var(--r-medio)]"
        style={{ background: "var(--fondo)" }}
      >
        <motion.div
          className="flex"
          drag={total > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) mover(1);
            else if (info.offset.x > 60) mover(-1);
          }}
          animate={{ x: `${-actual * 100}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
        >
          {diapositivas.map((d, i) => (
            <div key={d.src} className="shrink-0 grow-0 basis-full h-64 sm:h-72">
              {d.tipo === "video" ? (
                <video
                  src={d.src}
                  poster={poster}
                  controls
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={d.src}
                  alt=""
                  aria-hidden="true"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-contain select-none"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {total > 1 && (
        <>
          <Flecha lado="izquierda" etiqueta={ETIQUETAS.anterior[idioma]} onClick={() => mover(-1)} />
          <Flecha lado="derecha" etiqueta={ETIQUETAS.siguiente[idioma]} onClick={() => mover(1)} />
          <p
            className="dato text-[11px] absolute bottom-2 right-2 px-2 py-0.5 rounded-full"
            style={{ background: "var(--papel)", color: "var(--tinta-suave)", opacity: 0.9 }}
          >
            {actual + 1} / {total}
          </p>
        </>
      )}
    </div>
  );
}

function Flecha({
  lado,
  etiqueta,
  onClick,
}: {
  lado: "izquierda" | "derecha";
  etiqueta: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={etiqueta}
      className={`absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
        lado === "izquierda" ? "left-2" : "right-2"
      }`}
      style={{
        background: "var(--papel)",
        border: "1px solid var(--borde)",
        boxShadow: "var(--sombra)",
        color: "var(--tinta-titulo)",
      }}
    >
      <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden>
        <path
          d={lado === "izquierda" ? "M10 2 L4 8 L10 14" : "M6 2 L12 8 L6 14"}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
