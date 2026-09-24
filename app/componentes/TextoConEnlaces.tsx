import { Fragment } from "react";

const ENLACES: Record<string, string> = {
  IAF: "https://iaf.cc",
};

const PATRON = new RegExp(`\b(${Object.keys(ENLACES).join("|")})\b`);

// Convierte los nombres con página propia (hoy "IAF") en hipervínculos.
export default function TextoConEnlaces({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(PATRON).map((trozo, i) =>
        ENLACES[trozo] ? (
          <a key={i} href={ENLACES[trozo]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {trozo}
          </a>
        ) : (
          <Fragment key={i}>{trozo}</Fragment>
        )
      )}
    </>
  );
}
