import React, { Fragment } from 'react';

export const Premiados = () => (
    <Fragment>
        <div class="banner-crono">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                    <h1 class="page-header" style={{marginTop:'2em', textAlign:'center'}}>Premiados</h1>
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row cronograma">
                <div class="col-md-12">
                <table class="table table-hover">
                    <thead> 
                        <th>ID</th>
                        <th>Título</th>
                        <th>Área</th>
                        <th>Nível</th>
                        <th>Modalidade</th>
                        <th>Categoria</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>63</td>
                            <td>Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit, iaculis adipiscing arcu platea.</td>
                            <td>Ciências Exatas e da Terra</td>
                            <td>Técnico</td>
                            <td>Oral</td>
                            <td>Ensino</td>
                        </tr>

                        <tr>
                            <td>194</td>
                            <td>Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit, iaculis adipiscing arcu platea.</td>
                            <td>Ciências Exatas e da Terra</td>
                            <td>Superior</td>
                            <td>Oral</td>
                            <td>Ensino</td>
                        </tr>

                        <tr>
                            <td>153</td>
                            <td>Duis potenti aliquam est proin molestie, tellus fringilla interdum nulla lectus elit, iaculis adipiscing arcu platea.</td>
                            <td>Ciências Biológicas</td>
                            <td>Técnico</td>
                            <td>Oral</td>
                            <td>Pesquisa</td>
                        </tr>
                    </tbody>
                </table>

                </div>
            </div>
        </div>

        </Fragment>
        )