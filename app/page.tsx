import NavBar from "./componentes/NavBar";
import Hero from "./componentes/Hero";
import ProyectosIngenieria from "./componentes/ProyectosIngenieria";
import PlataformasWeb from "./componentes/PlataformasWeb";
import ProyectosAcademicos from "./componentes/ProyectosAcademicos";
import Contacto from "./componentes/Contacto";
import SeparadorProceso from "./componentes/SeparadorProceso";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <Hero />
      <SeparadorProceso />
      <ProyectosIngenieria />
      <SeparadorProceso />
      <PlataformasWeb />
      <SeparadorProceso />
      <ProyectosAcademicos />
      <SeparadorProceso />
      <Contacto />
    </div>
  );
}
