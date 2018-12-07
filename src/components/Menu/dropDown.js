import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import "./dropDown.css";
import "./hamburguer.css";

export const Menu = () => (
  <Fragment>
    <nav className="header_mobile" role="navigation">
      <div id="menutoggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <p>
            <Link className="menu__link" to={"/"}>
              INÍCIO
            </Link>
          </p>
          <Tooltip
            position="bottom-start"
            html={
              <div className="container">
                <Link to={"/regulamento"}>REGULAMENTO</Link>
                <Link to={"/"}>INSCRIÇÕES</Link>
                <Link to={"/cronograma"}>CRONOGRAMA</Link>
                <Link to={"/"}>PROGRAMAÇÃO</Link>
                <Link to={"/"}>HORÁRIO</Link>
                <Link to={"/"}>PALESTRANTES</Link>
              </div>
            }
            trigger="click"
            interactive="true"
            useContext="true"
            theme="light"
          >
            <p className="menu__link">MOSTRAPOA</p>
          </Tooltip>

          <Tooltip
            position="bottom-start"
            html={
              <div className="container">
                <Link to={"/regulamento"}>REGULAMENTO</Link>
                <Link to={"/"}>INSCRIÇÕES</Link>
                <Link to={"/cronograma"}>CRONOGRAMA</Link>
                <Link to={"/"}>PROGRAMAÇÃO</Link>
                <Link to={"/"}>HORÁRIO</Link>
                <Link to={"/"}>PALESTRANTES</Link>
              </div>
            }
            trigger="click"
            interactive="true"
            useContext="true"
            theme="light"
          >
            <p className="menu__link">STARTPOA</p>
          </Tooltip>

          <Tooltip
            position="bottom-start"
            html={
              <div className="container">
                <Link to={"/regulamento"}>REGULAMENTO</Link>
                <Link to={"/"}>INSCRIÇÕES</Link>
                <Link to={"/cronograma"}>CRONOGRAMA</Link>
                <Link to={"/"}>PROGRAMAÇÃO</Link>
                <Link to={"/"}>HORÁRIO</Link>
                <Link to={"/"}>PALESTRANTES</Link>
              </div>
            }
            trigger="click"
            interactive="true"
            useContext="true"
            theme="light"
          >
            <p className="menu__link">ROBÓTICA</p>
          </Tooltip>

          <Tooltip
            position="bottom-start"
            html={
              <div className="container">
                <Link to={"/"}>SUBMISSÃO</Link>
                <Link to={"/"}>ACEITOS</Link>
                <Link to={"/"}>PREMIADOS</Link>
              </div>
            }
            trigger="click"
            interactive="true"
            useContext="true"
            theme="light"
          >
            <p className="menu__link">TRABALHOS</p>
          </Tooltip>

          <p>
            <Link className="menu__link" to={"/"}>
              SOBRE
            </Link>
          </p>

          <p>
            <Link className="menu__link" to={"/"}>
              CONTATO
            </Link>
          </p>
        </ul>
      </div>
    </nav>

    <div className="menu">
      <p>
        <Link className="menu__link" to={"/"}>
          INÍCIO
        </Link>
      </p>
      <Tooltip
        position="bottom-start"
        html={
          <div className="container">
            <Link to={"/regulamento"}>REGULAMENTO</Link>
            <Link to={"/"}>INSCRIÇÕES</Link>
            <Link to={"/cronograma"}>CRONOGRAMA</Link>
            <Link to={"/"}>PROGRAMAÇÃO</Link>
            <Link to={"/"}>HORÁRIO</Link>
            <Link to={"/"}>PALESTRANTES</Link>
          </div>
        }
        trigger="click"
        interactive="true"
        useContext="true"
        theme="light"
      >
        <p className="menu__link">MOSTRAPOA</p>
      </Tooltip>

      <Tooltip
        position="bottom-start"
        html={
          <div className="container">
            <Link to={"/regulamento"}>REGULAMENTO</Link>
            <Link to={"/"}>INSCRIÇÕES</Link>
            <Link to={"/cronograma"}>CRONOGRAMA</Link>
            <Link to={"/"}>PROGRAMAÇÃO</Link>
            <Link to={"/"}>HORÁRIO</Link>
            <Link to={"/"}>PALESTRANTES</Link>
          </div>
        }
        trigger="click"
        interactive="true"
        useContext="true"
        theme="light"
      >
        <p className="menu__link">STARTPOA</p>
      </Tooltip>

      <Tooltip
        position="bottom-start"
        html={
          <div className="container">
            <Link to={"/regulamento"}>REGULAMENTO</Link>
            <Link to={"/"}>INSCRIÇÕES</Link>
            <Link to={"/cronograma"}>CRONOGRAMA</Link>
            <Link to={"/"}>PROGRAMAÇÃO</Link>
            <Link to={"/"}>HORÁRIO</Link>
            <Link to={"/"}>PALESTRANTES</Link>
          </div>
        }
        trigger="click"
        interactive="true"
        useContext="true"
        theme="light"
      >
        <p className="menu__link">ROBÓTICA</p>
      </Tooltip>

      <Tooltip
        position="bottom-start"
        html={
          <div className="container">
            <Link to={"/"}>SUBMISSÃO</Link>
            <Link to={"/"}>ACEITOS</Link>
            <Link to={"/"}>PREMIADOS</Link>
          </div>
        }
        trigger="click"
        interactive="true"
        useContext="true"
        theme="light"
      >
        <p className="menu__link">TRABALHOS</p>
      </Tooltip>

      <p>
        <Link className="menu__link" to={"/"}>
          SOBRE
        </Link>
      </p>

      <p>
        <Link className="menu__link" to={"/"}>
          CONTATO
        </Link>
      </p>
    </div>
  </Fragment>
);
