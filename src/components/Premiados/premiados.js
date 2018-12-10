import React, { Fragment } from 'react';
import './premiados.css'

export const Premiados = () => (
    <Fragment>
        <table>
            <caption className="title__premiados">Premiados</caption>
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Área</th>
                    <th scope="col">Nível</th>
                    <th scope="col">Modalidade</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Titulo">Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit.</td>
                    <td data-label="Area">Ciências Exatas e da Terra</td>
                    <td data-label="Nivel">Técnico</td>
                    <td data-label="Modalidade">Oral</td>
                    <td data-label="Categoria">Ensino</td>
                </tr>
                <tr>
                    <td data-label="Titulo">Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit.</td>
                    <td data-label="Area">Ciências Exatas e da Terra</td>
                    <td data-label="Nivel">Técnico</td>
                    <td data-label="Modalidade">Oral</td>
                    <td data-label="Categoria">Ensino</td>
                </tr>
                <tr>
                    <td data-label="Titulo">Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit.</td>
                    <td data-label="Area">Ciências Exatas e da Terra</td>
                    <td data-label="Nivel">Técnico</td>
                    <td data-label="Modalidade">Oral</td>
                    <td data-label="Categoria">Ensino</td>
                </tr>
                <tr>
                    <td data-label="Titulo">Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit.</td>
                    <td data-label="Area">Ciências Exatas e da Terra</td>
                    <td data-label="Nivel">Superior</td>
                    <td data-label="Modalidade">Oral</td>
                    <td data-label="Categoria">Pesquisa</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
)