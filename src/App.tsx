import { BrowserRouter,  } from "react-router-dom";
import Router from './Router'

import './styles/global.css'
import { GlobalStyle } from "./styles/global";


function App() {

  return (
    <>
   <BrowserRouter>
      <Router />
   </BrowserRouter>
   <GlobalStyle />
    </>
  )
}

export default App
