import { experiencias } from "../datos";

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-14 md:py-20" style={{ background: "var(--papel)" }}>
      <div className="contenedor max-w-3xl">
        <h2 className="text-2xl font-bold mb-10">Experiencia</h2>
        <ol className="relative border-l" style={{ borderColor: "var(--borde)" }}>
          {experiencias.map((exp) => (
            <li key={`${exp.empresa}-${exp.periodo}`} className="mb-10 ml-6 last:mb-0">
              <span
                className="absolute -left-[7px] w-3.5 h-3.5 rounded-full"
                style={{ background: "var(--oro-700)", border: "2px solid var(--papel)" }}
              />
              <p className="dato text-xs tenue mb-1">{exp.periodo}</p>
              <h3 className="text-base font-semibold" style={{ color: "var(--tinta-titulo)" }}>
                {exp.rol} · {exp.empresa}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--tinta)" }}>
                {exp.descripcion}
              </p>
              {exp.proyectoId && (
                <a href={`#${exp.proyectoId}`} className="text-sm mt-2 inline-block">
                  Ver proyecto →
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
