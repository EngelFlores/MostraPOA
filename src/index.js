import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./index.css";

import Index from "./views/HomePage";
import NotFound from "./views/NotFound";
import { Menu } from "./components/Menu/dropDown";
import { Regulamento } from "./components/Regulamento/regulamento";
import { Cronograma } from "./components/Cronograma/cronograma";
import { Formulario } from "./components/Inscricoes/formulario";
import { Horario } from "./components/Horario/horario";
import { Palestrantes } from "./components/Palestrantes/palestrantes";
import { Sobre } from  "./views/Sobre";
import { Contato } from "./components/Contato/contato";
import { Premiados } from "./components/Premiados/premiados";
import { Submissao } from "./components/Submissao/submissao";
import { Aceitos } from "./components/Aceitos/aceitos";


const routes = () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route path="/index" component={Index} />
      <Route path="/regulamento" component={Regulamento} />
      <Route path="/cronograma" component={Cronograma} />
      <Route path="/incricao" component={Formulario} />
      <Route path="/horario" component={Horario} />
      <Route path="/palestrantes" component={Palestrantes} />
      <Route path="/sobre" component={Sobre}/>
      <Route path="/contato" component={Contato}/>
      <Route path="/premiados" component={Premiados}/>
      <Route path="/submissao" component={Submissao}/>
      <Route path="/aceitos" component={Aceitos}/>
      <Redirect exact from="/" to="index" />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);


ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById("root")
);
