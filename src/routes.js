import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import ScrollToTop from "Componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu/>

      <Routes> {/* O componente Routes é responsável por alternar entre diferentes rotas da nossa aplicação e recebe componentes Route como conteúdo */}
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>   
        </Route>

        <Route path="posts/:id/*" element={<Post />}/>       
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>

  )
};

export default AppRoutes;


 
        // Na rota "/", a estruta a ser renderizada é:

        // <PaginaPadrao>
        //   <Inicio/>    
        // </PaginaPadrao>

        // Na rota "/sobremim", a estruta a ser renderizada é:

        // <PaginaPadrao>
        //   <SobreMim/>    
        // </PaginaPadrao>
        
        

