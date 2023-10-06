import List from '@mui/material/List/List'
import './styles.css'
import ListItemButton from '@mui/material/ListItemButton/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import ListItem from '@mui/material/ListItem/ListItem'
import ListItemText from '@mui/material/ListItemText/ListItemText'
import icon from '../../assets/icone_roxo-10.svg'

export default function Cursos(){

    return(
        <>
        <div className='Conteiner'>
            <img src={icon} style={{width:'100px', height:'100px',alignSelf:'center'}}></img>
            <h1 style={{padding:'2rem', fontSize:'2rem'}}>Seus interesses são em: </h1>
           
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Biologia" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="
          jornalismo" />
        </ListItemButton>
      </ListItem>
    </List>
        </div>
        
        <div>
            <h1 style={{padding:'2rem', fontSize:'2rem'}}>Aqui alguns cursos que posso gostar</h1>
            <div className="img-post" >
                  <img src="https://github.com/maykbrito.png"/>
                  
            </div>
            <div className="img-post" >
                  <img src="https://github.com/maykbrito.png"/>
            </div>
            <div className="img-post" >
                  <img src="https://github.com/maykbrito.png"/>
            </div>
        </div>
        
        </>
    )
}