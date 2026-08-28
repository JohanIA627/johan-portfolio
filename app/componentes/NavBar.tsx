const ENLACES = [
  { href: "#sobre-mi", texto: "Sobre mí" },
  { href: "#experiencia", texto: "Experiencia" },
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#contacto", texto: "Contacto" },
];

export default function NavBar() {
  return (
    <nav
      className="sticky top-0 z-30 backdrop-blur"
      style={{
        background: "rgba(246, 249, 252, 0.85)",
        borderBottom: "1px solid var(--borde)",
      }}
    >
      <div className="contenedor flex items-center justify-between h-14">
        <span className="text-sm font-semibold" style={{ color: "var(--tinta-titulo)" }}>
          Johan Rondón
        </span>
        <div className="flex gap-5 text-sm">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href} style={{ color: "var(--tinta)" }}>
              {e.texto}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
