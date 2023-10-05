import * as React from 'react';

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
//import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import IconButton from '@mui/material/IconButton/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.css'

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return(
          <div className='Conteiner'>
               <TextField
          label="Usuário"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />

         <OutlinedInput
            id="outlined-adornment-password"
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
            label="Password"
          />
         <Button variant="contained">Contained</Button>

         <p><a href="url">Cadrasta-se</a></p>
          </div>
    )
}