import * as React from 'react';

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import IconButton from '@mui/material/IconButton/IconButton';
 import Visibility from '@mui/icons-material/Visibility';
 import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.css'
import FilledInput from '@mui/material/FilledInput/FilledInput';
import image from '../../assets/Nome_preto-05.svg'

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return(
      <div className='fundo'>
          <div className='Conteiner'>
            <img src={image} alt='logo'/>
          <TextField id="filled-basic" label="Nome" variant="filled" style={{marginBottom:'1rem'}}/>

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
                   {showPassword ? <VisibilityOff /> : <Visibility />} 
                </IconButton>
              </InputAdornment>
            }
            style={{marginBottom:'1rem'}}
          />
         <Button variant="contained" style={{background:'#66B4E3'}}>Login</Button>

         <p><a href="url">Cadrasta-se</a></p>
          </div>
          </div>
    )
}