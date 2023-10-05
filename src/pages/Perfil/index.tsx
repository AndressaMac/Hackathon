import Avatar from "@mui/material/Avatar/Avatar";
import MenuBar from "../../components/Menu";




export default function Perfil(){
  return(
    <>
    <MenuBar/>
    <div>
        <div className="profileInfor">
            <Avatar></Avatar>
            <div>
                <h1 className="name">Miranda</h1>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent vel,</p>
            </div>

            <div className="contentPost">
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
            </div>
        </div>
    </div>
    </>
  )

}