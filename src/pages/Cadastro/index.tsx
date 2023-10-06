import TextField from "@mui/material/TextField/TextField";
import "./style.css";
import React, { useState } from "react";
import FilledInput from "@mui/material/FilledInput/FilledInput";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

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
      console.log("valores", senha, usuario);

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
    <div className="Conteiner">
      <TextField
        onChange={(e) => setUsuario(e.target.value)}
        value={usuario}
        label="Usuário"
        id="filled-basic"
        sx={{ m: 1, width: "25ch" }}
      />
      <TextField
        id="filled-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        sx={{ m: 1, width: "25ch" }}
      />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
      <Button onClick={criarCadastro} variant="contained">
        Cadastre
      </Button>
    </div>
  );
}
