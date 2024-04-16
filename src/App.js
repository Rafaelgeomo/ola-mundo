import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import SobreMim from "./Componentes/SobreMim";

function App() {
  return (
    <BrowserRouter>    
      <Routes> {/* O componente Routes é responsável por alternar entre diferentes rotas da nossa aplicação e recebe componentes Route como conteúdo */}
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>

  )
};

export default App;

