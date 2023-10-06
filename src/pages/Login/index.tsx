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
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, InputLabel } from "@mui/material";

import "./style.css";
import image from "../../assets/Nome_preto-05.svg";

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

  const navigate = useNavigate();
  const routeChange = (rota: string) => {
    navigate(rota);
  };

  const fazerLogin = () => {
    if (senhaValida && senha && usuario) {
      sessionStorage.setItem("cad_usuario", usuario);

      routeChange("/feed");
    }
  };

  const validarSenha = (value: string) => {
    if (value.length >= 1) {
      setSenhaValida(true);
    } else {
      setSenhaValida(false);
    }
  };

  return (
    <div className="fundo">
      <div className="Conteiner">
        <img src={image} alt="logo" />
        <TextField
          onChange={(e) => setUsuario(e.target.value)}
          value={usuario}
          id="filled-basic"
          label="Nome"
          variant="filled"
          style={{ marginBottom: "1rem" }}
        />
        <FormControl variant="outlined" style={{ marginBottom: "1rem" }}>
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
                  aria-label="mudar visibilidade da senha"
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
        <Button
          onClick={fazerLogin}
          variant="contained"
          style={{ background: "#66B4E3" }}
        >
          Login
        </Button>

        <p>
          <Link to="/cadastro">cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
