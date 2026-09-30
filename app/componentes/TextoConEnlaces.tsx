import { Fragment } from "react";

// Da formato a los textos del diccionario: pone en negrilla lo que va entre
// ** ** y convierte en hipervínculo los nombres con página propia (hoy solo
// "IAF").
//
// Los patrones van como literales, no armados con `new RegExp(\`\b...\`)`:
// dentro de una plantilla, \b es el carácter de retroceso y no el límite de
// palabra, y por eso el enlace de IAF no aparecía en ninguna parte.
const ENLACE_IAF = "https://iaf.cc";
const NEGRILLA = /\*\*(.+?)\*\*/;
const NOMBRE_CON_ENLACE = /\b(IAF)\b/;

function conEnlaces(texto: string, llave: string) {
  return texto.split(NOMBRE_CON_ENLACE).map((trozo, i) =>
    trozo === "IAF" ? (
      <a
        key={`${llave}-${i}`}
        href={ENLACE_IAF}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {trozo}
      </a>
    ) : (
      <Fragment key={`${llave}-${i}`}>{trozo}</Fragment>
    )
  );
}

export default function TextoConEnlaces({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(NEGRILLA).map((trozo, i) =>
        // split con grupo de captura: los impares son lo que iba entre ** **
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "var(--tinta-titulo)" }}>
            {conEnlaces(trozo, String(i))}
          </strong>
        ) : (
          <Fragment key={i}>{conEnlaces(trozo, String(i))}</Fragment>
        )
      )}
    </>
  );
}
