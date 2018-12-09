import React, { Fragment } from "react";
import "./cronograma.css";

export const Cronograma = () => (
  <Fragment>
    <h1 className="title_cronograma">Programação</h1>
    <div className="container_cronograma">

    <ul className="main">
      <li className="date">
        <h3>Julho</h3>
        <p>Cronograma do Evento</p>
      </li>
      <li className="events">
        <ul className="events-detail">
          <li>
            <span className="event-time">Dia 18 - </span>
            <span className="event-name">
              Recepção e credenciamento
            </span>
            <br />
            <span className="event-location">Torre Sul</span>
          </li>

          <li>
            <span className="event-time">Dia 20 - </span>
            <span className="event-name">
              Cerimônia
            </span>
            <br />
            <span className="event-location">Torre Norte</span>
          </li>

          <li>
            <span className="event-time">Dia 22 - </span>
            <span className="event-name">
              Palestra de Abertura
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Dia 26 - </span>
            <span className="event-name">
              Sessões de apresentação de trabalhos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Dia 28 - </span>
            <span className="event-name">
              Premiação dos Trabalhos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>
        </ul>
      </li>

      <li className="date">
        <h3>Julho</h3>
        <p>Cronograma do Evento</p>
      </li>
      <li className="events">
        <ul className="events-detail">
          <li>
            <span className="event-time">Dia 18 - </span>
            <span className="event-name">
              Recepção e credenciamento
            </span>
            <br />
            <span className="event-location">Torre Sul</span>
          </li>

          <li>
            <span className="event-time">Dia 20 - </span>
            <span className="event-name">
              Cerimônia
            </span>
            <br />
            <span className="event-location">Torre Norte</span>
          </li>

          <li>
            <span className="event-time">Dia 22 - </span>
            <span className="event-name">
              Palestra de Abertura
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Dia 26 - </span>
            <span className="event-name">
              Sessões de apresentação de trabalhos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Dia 28 - </span>
            <span className="event-name">
              Premiação dos Trabalhos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>
        </ul>
      </li>
    </ul>
    </div>
  </Fragment>
);
