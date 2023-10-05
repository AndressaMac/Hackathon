import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/Feed";
import Perfil from "./pages/Perfil";
import { FC } from "react";

const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const userIsLogged = sessionStorage.getItem("cad_usuario");

  if (!userIsLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/feed" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/feed"
        element={
          <RequireAuth>
            <Feed />
          </RequireAuth>
        }
      />
      <Route
        path="/perfil"
        element={
          <RequireAuth>
            <Perfil />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
