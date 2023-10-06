import Avatar from "@mui/material/Avatar/Avatar";
import MenuBar from "../../components/Menu";

import "./style.css";

export default function Perfil() {
  return (
    <>
      <div>
        <div className="profileInfor">
          <Avatar sx={{ width: 100, height: 100 }} />
          <div>
            <h1 className="name">Miranda</h1>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
              vel,
            </p>
          </div>
        </div>

        <div className="contentPost">
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>
          <div className="img-post">
            <img src="https://github.com/maykbrito.png" />
          </div>

          {/* <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/>
                </div> <div className="postProfile">
                    <img src=""/>
                </div>
                <div className="postProfile">
                    <img src=""/> */}
        </div>
      </div>

      <MenuBar />
    </>
  );
}
