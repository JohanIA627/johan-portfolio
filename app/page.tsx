import NavBar from "./componentes/NavBar";
import Hero from "./componentes/Hero";
import ProyectosIngenieria from "./componentes/ProyectosIngenieria";
import PlataformasWeb from "./componentes/PlataformasWeb";
import Contacto from "./componentes/Contacto";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <Hero />
      <ProyectosIngenieria />
      <PlataformasWeb />
      <Contacto />
    </div>
  );
}
