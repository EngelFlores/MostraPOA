import React, { Fragment } from "react";
import "./cronograma.css";

export const Cronograma = () => (
  <Fragment>
    <ul className="main">
      <li className="date">
        <h3>Julho</h3>
        <p>Cronograma do Evento</p>
      </li>
      <li className="events">
        <ul className="events-detail">
          <li>
            <span className="event-time">Até dia 18 - </span>
            <span className="event-name">
              Inscrição de autores, coautores, orientadores e coorientadores
            </span>
            <br />
            <span className="event-location">Torre Sul</span>
          </li>

          <li>
            <span className="event-time">Até dia 20 - </span>
            <span className="event-name">
              Inscrição de avaliadores, voluntários e ouvintes
            </span>
            <br />
            <span className="event-location">Torre Norte</span>
          </li>

          <li>
            <span className="event-time">Até dia 22 - </span>
            <span className="event-name">
              Período para correção de trabalhos não aceitos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Até dia 26 - </span>
            <span className="event-name">
              Divulgação final dos trabalhos aceitos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Até dia 28 - </span>
            <span className="event-name">
              Divulgação dos horários das apresentações
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
            <span className="event-time">Até dia 18 - </span>
            <span className="event-name">
              Inscrição de autores, coautores, orientadores e coorientadores
            </span>
            <br />
            <span className="event-location">Torre Sul</span>
          </li>

          <li>
            <span className="event-time">Até dia 20 - </span>
            <span className="event-name">
              Inscrição de avaliadores, voluntários e ouvintes
            </span>
            <br />
            <span className="event-location">Torre Norte</span>
          </li>

          <li>
            <span className="event-time">Até dia 22 - </span>
            <span className="event-name">
              Período para correção de trabalhos não aceitos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Até dia 26 - </span>
            <span className="event-name">
              Divulgação final dos trabalhos aceitos
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>

          <li>
            <span className="event-time">Até dia 28 - </span>
            <span className="event-name">
              Divulgação dos horários das apresentações
            </span>
            <br />
            <span className="event-location">Torre Sul - Sala 1003</span>
          </li>
        </ul>
      </li>
    </ul>
  </Fragment>
);
