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

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-14 md:py-20">
      <div className="contenedor max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Sobre mí</h2>
        <div className="tarjeta p-7 md:p-9">
          <p className="mb-4">
            Soy estudiante de Ingeniería Industrial en la UPB, con base previa
            en Ingeniería Mecánica (UIS) y experiencia en diseño de equipos y
            proyectos de ingeniería para la industria de alimentos. Mi
            enfoque: mejora de procesos, gestión de proyectos y automatización
            de operaciones con IA.
          </p>
          <p className="mb-4">
            Hoy soy Product Owner de una plataforma interna de gestión que
            diseñé y llevé a producción, y trabajo con datos, procesos y
            automatización en proyectos reales — siempre con verificación
            humana de lo que produce la IA.
          </p>
          <p className="mb-6">
            Me gusta trabajar por proyectos y me interesa desarrollarme en
            entornos industriales y tecnológicos donde los procesos, los
            datos y la automatización se encuentran.
          </p>
          <div className="flex flex-wrap gap-2">
            {HERRAMIENTAS.map((h) => (
              <span
                key={h}
                className="dato text-xs px-3 py-1 rounded-full"
                style={{
                  background: "var(--fondo)",
                  color: "var(--tinta-titulo)",
                  border: "1px solid var(--borde)",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
