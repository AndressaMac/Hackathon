import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/Feed";
import Perfil from "./pages/Perfil";



export default function Router() {
    return (
      <Routes>
      
        <Route path="/login" element={<Login />}/>
         <Route path="/cadastro" element={<Cadastro/>}/>
         <Route path="/Feed" element={<Feed/>}/>
         <Route path="/Perfil" element={<Perfil/>}/>
      </Routes>
    )
  }