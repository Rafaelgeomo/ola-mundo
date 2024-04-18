import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes> {/* O componente Routes é responsável por alternar entre diferentes rotas da nossa aplicação e recebe componentes Route como conteúdo */}
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>

  )
};

export default AppRoutes;

