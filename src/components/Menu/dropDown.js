import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import './dropDown.css'
import './hamburguer.css'


export const Menu = () => (
    <Fragment>
        <nav className="header_mobile" role="navigation">
            <div id="menutoggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Tooltip
                        position="bottom-start"
                        html={
                            <div className='container'>
                                <Link to={'/'}>NOVIDADES</Link>
                                <Link to={'/'}>REGULAMENTOS</Link>
                                <Link to={'/'}>EVENTOS</Link>
                            </div>
                        }
                        trigger="click"
                        interactive="true"
                        useContext="true"
                        theme="light"
                    >
                        <p>INÍCIO</p>
                    </Tooltip>

                    <Tooltip
                        position="bottom-start"
                        html={
                            <div className='container'>
                                <Link to={'/'}>REGULAMENTO</Link>
                                <Link to={'/'}>INSCRIÇÕES</Link>
                                <Link to={'/'}>CRONOGRAMA</Link>
                                <Link to={'/'}>PROGRAMAÇÃO</Link>
                                <Link to={'/'}>HORÁRIO</Link>
                                <Link to={'/'}>PALESTRANTES</Link>
                            </div>
                        }
                        trigger="click"
                        interactive="true"
                        useContext="true"
                        theme="light"
                    >
                        <p>MOSTRAPOA</p>
                    </Tooltip>


                    <Tooltip
                        position="bottom-start"
                        html={
                            <div className='container'>
                                <Link to={'/regulamento'}>REGULAMENTO</Link>
                                <Link to={'/'}>INSCRIÇÕES</Link>
                                <Link to={'/'}>CRONOGRAMA</Link>
                                <Link to={'/'}>PROGRAMAÇÃO</Link>
                                <Link to={'/'}>HORÁRIO</Link>
                                <Link to={'/'}>PALESTRANTES</Link>
                            </div>
                        }
                        trigger="click"
                        interactive="true"
                        useContext="true"
                        theme="light"
                        
                        
                    >
                        <p>STARTPOA</p>
                    </Tooltip>

                    <Tooltip
                        position="bottom-start"
                        html={
                            <div className='container'>
                                <Link to={'/'}>REGULAMENTO</Link>
                                <Link to={'/'}>INSCRIÇÕES</Link>
                                <Link to={'/'}>CRONOGRAMA</Link>
                                <Link to={'/'}>PROGRAMAÇÃO</Link>
                                <Link to={'/'}>HORÁRIO</Link>
                                <Link to={'/'}>PALESTRANTES</Link>
                            </div>
                        }
                        trigger="click"
                        interactive="true"
                        useContext="true"
                        theme="light"
                    >
                        <p>ROBÓTICA</p>
                    </Tooltip>


                    <Tooltip
                        position="bottom-start"
                        html={
                            <div className='container'>
                                <Link to={'/'}>SUBMISSÃO</Link>
                                <Link to={'/'}>ACEITOS</Link>
                                <Link to={'/'}>PREMIADOS</Link>
                            </div>
                        }
                        trigger="click"
                        interactive="true"
                        useContext="true"
                        theme="light"
                    >
                        <p>TRABALHOS</p>
                    </Tooltip>

                    <p onClick={<Redirect to={''}></Redirect>}>SOBRE</p>

                    <p onClick={<Redirect to={''}></Redirect>}>CONTATO</p>
                </ul>
            </div>
        </nav>

        <div className='menu'>
            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Link to={'/'}>NOVIDADES</Link>
                        <Link to={'/'}>REGULAMENTOS</Link>
                        <Link to={'/'}>EVENTOS</Link>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>INÍCIO</p>
            </Tooltip>

            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Link to={'/'}>REGULAMENTO</Link>
                        <Link to={'/'}>INSCRIÇÕES</Link>
                        <Link to={'/'}>CRONOGRAMA</Link>
                        <Link to={'/'}>PROGRAMAÇÃO</Link>
                        <Link to={'/'}>HORÁRIO</Link>
                        <Link to={'/'}>PALESTRANTES</Link>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>MOSTRAPOA</p>
            </Tooltip>


            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Link to={'/'}>REGULAMENTO</Link>
                        <Link to={'/'}>INSCRIÇÕES</Link>
                        <Link to={'/'}>CRONOGRAMA</Link>
                        <Link to={'/'}>PROGRAMAÇÃO</Link>
                        <Link to={'/'}>HORÁRIO</Link>
                        <Link to={'/'}>PALESTRANTES</Link>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>STARTPOA</p>
            </Tooltip>

            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Link to={'/'}>REGULAMENTO</Link>
                        <Link to={'/'}>INSCRIÇÕES</Link>
                        <Link to={'/'}>CRONOGRAMA</Link>
                        <Link to={'/'}>PROGRAMAÇÃO</Link>
                        <Link to={'/'}>HORÁRIO</Link>
                        <Link to={'/'}>PALESTRANTES</Link>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>ROBÓTICA</p>
            </Tooltip>


            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Link to={'/'}>SUBMISSÃO</Link>
                        <Link to={'/'}>ACEITOS</Link>
                        <Link to={'/'}>PREMIADOS</Link>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>TRABALHOS</p>
            </Tooltip>

            <p onClick={<Redirect to={''}></Redirect>}>SOBRE</p>
            
            <p onClick={<Redirect to={''}></Redirect>}>CONTATO</p>
        </div>
    </Fragment>
)