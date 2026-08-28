import NavBar from "./componentes/NavBar";
import Hero from "./componentes/Hero";
import SobreMi from "./componentes/SobreMi";
import Experiencia from "./componentes/Experiencia";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </div>
  );
}
