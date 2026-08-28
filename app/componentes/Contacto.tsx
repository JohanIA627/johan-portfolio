export default function Contacto() {
  return (
    <footer
      id="contacto"
      className="py-14 md:py-20"
      style={{ background: "var(--tinta-titulo)" }}
    >
      <div className="contenedor max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-3" style={{ color: "#fff" }}>
          Hablemos
        </h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
          Abierto a conectar con profesionales de operaciones, tecnología e
          industria de alimentos — y a conversar sobre oportunidades de
          práctica profesional.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <a
            className="boton"
            style={{ background: "var(--oro-400)", color: "var(--tinta-titulo)" }}
            href="mailto:johan.rondon27@hotmail.com"
          >
            johan.rondon27@hotmail.com
          </a>
          <a
            className="boton secundario"
            style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            href="https://www.linkedin.com/in/johansebastianrondon"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="dato text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          Floridablanca, Santander, Colombia
        </p>
      </div>
    </footer>
  );
}
