import List from "@mui/material/List/List";
import "./styles.css";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import MenuBar from "../../components/Menu";

export default function Cursos() {
  return (
    <>
      <div>
        <h1>Seus interesses são em </h1>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Chelsea Otakan" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText inset primary="Eric Hoffman" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      <div>
        <h1>Aqui alguns cursos que posso gostar</h1>
        <div className="img-post">
          <img src="https://github.com/maykbrito.png" />
        </div>
        <div className="img-post">
          <img src="https://github.com/maykbrito.png" />
        </div>
        <div className="img-post">
          <img src="https://github.com/maykbrito.png" />
        </div>
      </div>
      <MenuBar />
    </>
  );
}
