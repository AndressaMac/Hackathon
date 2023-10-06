import TextField from "@mui/material/TextField/TextField";
import "./style.css";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import "./style.css";

import image from "../../assets/Nome_preto-05.svg";

export default function Cadastro() {
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senhaValida, setSenhaValida] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const criarCadastro = () => {
    if (senhaValida && senha && usuario) {
      sessionStorage.setItem("cad_usuario", usuario);

      window.location.href = "/login";
    }
  };

  const validarSenha = (value: string) => {
    const senhaRegex = /^(?=.*[a-z]).{4,}$/;
    if (senhaRegex.test(value)) {
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
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="filled-basic"
          label="Email"
          variant="filled"
          style={{ marginBottom: "1rem" }}
        />
        <FormControl style={{ marginBottom: "1rem" }} variant="outlined">
          <InputLabel htmlFor="cadastro-senha">senha</InputLabel>
          <OutlinedInput
            onChange={(e) => {
              setSenha(e.target.value);
              validarSenha(e.target.value);
            }}
            value={senha}
            label="senha"
            id="cadastro-senha"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="alterar visibilidade da senha"
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
          onClick={criarCadastro}
          variant="contained"
          style={{ background: "#66B4E3" }}
        >
          Cadastre
        </Button>
      </div>
    </div>
  );
}
