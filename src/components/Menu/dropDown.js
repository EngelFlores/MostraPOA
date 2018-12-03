import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import './dropDown.css'


export const Menu = () => (
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

            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Redirect to={''}></Redirect>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>SOBRE</p>
            </Tooltip>

            <Tooltip
                position="bottom-start"
                html={
                    <div className='container'>
                        <Redirect to={''}></Redirect>
                    </div>
                }
                trigger="click"
                interactive="true"
                useContext="true"
                theme="light"
            >
                <p>CONTATO</p>
            </Tooltip>
    </div>
)