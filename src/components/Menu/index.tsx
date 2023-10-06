import {
  MdOutlineExplore,
  MdOutlineSupervisedUserCircle,
  MdHome,
} from "react-icons/md";

import { IconContext } from "react-icons";

import { useNavigate } from "react-router-dom";

import "./menu.css";

export default function MenuBar() {
  const navigate = useNavigate();
  const routeChange = (rota: string) => {
    console.log("rota", rota);
    navigate(rota);
  };

  return (
    <nav className="nav">
      <div className="menu-icons">
        <IconContext.Provider value={{ size: "26px" }}>
          <MdHome onClick={() => routeChange("/feed")} />

          <MdOutlineExplore onClick={() => routeChange("/cursos")} />

          <MdOutlineSupervisedUserCircle
            onClick={() => routeChange("/perfil")}
          />
        </IconContext.Provider>
      </div>
      {/* <div className="container">
        <img className="logo" src="" />

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <input placeholder="pesquisar" />
                </div>
      </div> */}
    </nav>
  );
}
