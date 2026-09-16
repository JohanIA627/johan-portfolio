"use client";

import { useEffect, useRef, useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

// @google/model-viewer registra el custom element <model-viewer> en el
// navegador, pero React/TypeScript no lo conocen de forma nativa: hay que
// declarar su tipo intrínseco para poder usarlo como JSX sin `any`.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "shadow-intensity"?: string;
          exposure?: string;
          "interaction-prompt"?: string;
        },
        HTMLElement
      >;
    }
  }
}

type ModelViewerProps = {
  src: string;
  alt: string;
  poster?: string;
  ayuda?: string;
};

export default function ModelViewer({ src, alt, poster, ayuda }: ModelViewerProps) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // El visor crea un contexto WebGL propio — montar dos de una vez al
  // cargar la página (aunque estén fuera de pantalla) puede congelar el
  // hilo de render en equipos con GPU limitada. Se monta solo cuando la
  // tarjeta está por entrar en pantalla.
  useEffect(() => {
    const nodo = contenedorRef.current;
    if (!nodo) return;
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(nodo);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    // El registro del custom element toca `self`/`window`, así que solo
    // puede cargarse en el navegador — nunca en el prerender del servidor.
    import("@google/model-viewer");
  }, [visible]);

  return (
    <div
      ref={contenedorRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--fondo)",
        border: "1px solid var(--borde)",
        borderRadius: "var(--r-grande)",
        minHeight: 320,
        height: 320,
      }}
    >
      {visible && (
        <model-viewer
          src={src}
          alt={alt}
          poster={poster}
          camera-controls
          auto-rotate={false}
          shadow-intensity="1"
          exposure="1"
          interaction-prompt="none"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <span
        className="dato absolute bottom-2 right-3 text-[10px] pointer-events-none"
        style={{ color: "var(--tinta-suave)" }}
      >
        {ayuda ?? "Arrastra para rotar · scroll para zoom"}
      </span>
    </div>
  );
}
