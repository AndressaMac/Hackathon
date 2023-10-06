import React, { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
//import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import IconButton from "@mui/material/IconButton/IconButton";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./style.css";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, InputLabel } from "@mui/material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const fazerLogin = () => {
    if (senhaValida && senha && usuario) {
      sessionStorage.setItem("cad_usuario", usuario);
      console.log("valores", senha, usuario);

      window.location.href = "/feed";
    }
  };

  const validarSenha = (value: string) => {
    if (value.length >= 5) {
      setSenhaValida(true);
    } else {
      setSenhaValida(false);
    }
  };

  return (
    <div className="Conteiner">
      <form>
        <TextField
          onChange={(e) => setUsuario(e.target.value)}
          value={usuario}
          label="Usuário"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">senha</InputLabel>
          <OutlinedInput
            onChange={(e) => {
              setSenha(e.target.value);
              validarSenha(e.target.value);
            }}
            value={senha}
            label="senha"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            error={!senhaValida}
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
          />
        </FormControl>
        <Button onClick={fazerLogin} variant="contained">
          Entrar
        </Button>

        <p>
          <Link to="/cadastro">cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}
