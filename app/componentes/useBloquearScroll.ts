import { useEffect } from "react";

// Con un modal abierto la página de fondo no debe desplazarse. Compensa el
// ancho de la barra de scroll para que el contenido no salte al ocultarla.
export function useBloquearScroll(activo: boolean) {
  useEffect(() => {
    if (!activo) return;
    const { overflow, paddingRight } = document.body.style;
    const barra = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (barra > 0) document.body.style.paddingRight = `${barra}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [activo]);
}
