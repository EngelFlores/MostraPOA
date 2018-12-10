import React, { Fragment } from "react";
import "./index.css";
import { Grid } from "../../components/Grid/basicGrid";

export default () => (
  <Fragment>
    <div className="main">
      <div className="bgimg-1">
        <div className="caption">
          <span className="border">MOSTRAPOA 2019</span>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 style={{ textAlign: "center" }}>
            20ª Mostra de Pesquisa, Ensino e Extensão
          </h1>
        </div>
        <div className="col">
          <h4 style={{ textAlign: "center" }}>Data do evento aqui</h4>
        </div>
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span className="border">FOTO 2</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            backgroundcolor: "#282E34",
            textalign: "center justify"
          }}
        >
          <Grid text="Novidades" />
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span className="border">FOTO 3</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{ backgroundcolor: "#282E34", textalign: "center justify" }}
        >
          <Grid text="Regulamento" />
        </div>
      </div>

      <div className="bgimg-1">
        <div className="caption">
          <span className="border">INSCRIÇÕES EM BREVE.</span>
        </div>
      </div>
    </div>
  </Fragment>
);
