import Image from "next/image";

export default function Hero() {
  return (
    <header className="pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="contenedor flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-3"
            style={{ color: "var(--oro-700)" }}
          >
            Johan Sebastián Rondón Alvarado
          </p>
          <h1 className="text-3xl md:text-[2.6rem] font-bold leading-tight mb-4">
            Estudiante de Ingeniería Industrial (UPB)
          </h1>
          <p className="text-lg md:text-xl mb-2" style={{ color: "var(--tinta)" }}>
            Mejora de procesos y gestión de proyectos · IA aplicada a operaciones
            · Diseño mecánico en la industria de alimentos.
          </p>
          <p className="tenue mb-8 max-w-xl mx-auto md:mx-0">
            Bucaramanga / Floridablanca, Santander, Colombia.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              className="boton"
              href="https://www.linkedin.com/in/johansebastianrondon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver LinkedIn
            </a>
            <a className="boton secundario" href="mailto:johan.rondon27@hotmail.com">
              Escribir un correo
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 176,
              height: 176,
              boxShadow: "var(--sombra-alta)",
              border: "3px solid var(--papel)",
            }}
          >
            <Image
              src="/foto-johan.jpg"
              alt="Johan Sebastián Rondón Alvarado"
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
