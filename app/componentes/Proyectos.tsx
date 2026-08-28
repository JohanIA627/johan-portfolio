import { proyectos } from "../datos";

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-14 md:py-20">
      <div className="contenedor">
        <h2 className="text-2xl font-bold mb-10">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((p) => (
            <article key={p.id} id={p.id} className="tarjeta p-6 md:p-7 scroll-mt-24">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-lg font-semibold" style={{ color: "var(--tinta-titulo)" }}>
                  {p.titulo}
                </h3>
                {p.estado && (
                  <span
                    className="dato text-[11px] px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      background: "var(--fondo)",
                      color: "var(--oro-700)",
                      border: "1px solid var(--borde)",
                    }}
                  >
                    {p.estado}
                  </span>
                )}
              </div>
              <p className="tenue text-sm mb-3">{p.contexto}</p>
              <p className="text-sm mb-4" style={{ color: "var(--tinta)" }}>
                {p.descripcion}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="dato text-[11px] px-2.5 py-0.5 rounded-full"
                    style={{ background: "var(--fondo)", color: "var(--tinta-suave)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
