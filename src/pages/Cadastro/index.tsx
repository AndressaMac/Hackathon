import TextField from '@mui/material/TextField/TextField'
import './style.css'
import FilledInput from '@mui/material/FilledInput/FilledInput'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import IconButton from '@mui/material/IconButton/IconButton'
import React from 'react'
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button/Button'


export default function Cadastro(){

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
       
    return(
      <div className='Conteiner'> 
      <TextField id="filled-basic" label="Nome" variant="filled" />
      <TextField id="filled-basic" label="Email" variant="filled" />
      <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
          />
           <Button variant="contained">Cadastre</Button>


                           
      </div>
    )
}