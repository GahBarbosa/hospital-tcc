import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import Index from "views/Index.js";
import Login from "views/Login.js";
import MasterForm from "views/MasterForm.js";
import Hospital from "views/GerenciamentoHospital.js";
import ResultadoFormulario from "views/ResultadoFormulario.js";
import Faq from "views/Faq.js";
import Cep from "views/Cep.js";
import Mapa from "views/Maps.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route 
          path="/index" 
          render={props => <Index {...props} />} 
        />

        <Route 
          path="/instituicao" 
          render={props => <Hospital {...props} />} 
        />
       
        <Route 
          path="/login" 
          render={props => <Login {...props} />} 
        />
        
        <Route 
          path="/questionario" 
          render={props => <MasterForm {...props} />} 
        />

        <Route 
          path="/resultado" 
          render={props => <ResultadoFormulario {...props} />} 
        />

        <Route 
          path="/faq" 
          render={props => <Faq {...props} />} 
        />
        
        <Route 
          path="/cep" 
          render={props => <Cep {...props} />} 
        />

        <Route 
          path="/mapa" 
          render={props => <Mapa {...props} />} 
        />

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
