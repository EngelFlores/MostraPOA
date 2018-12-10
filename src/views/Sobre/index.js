import React, { Fragment } from 'react';
import './index.css';
import {Comissao} from '../../components/Comissao/comissao'

export const Sobre = () => (
    <Fragment>
        <div class="banner-crono">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="page-header" style={{ marginTop: '2em', textAlign: 'center' }}>Apresentação</h1>
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row ">
                <div class="col-md-12" >

                    <h2 style={{ textAlign: 'center',fontSize:"20px" }}>Sobre a MostraPoA</h2>
                    <p style={{ textAlign: 'justify',fontSize:"14px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                         vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?.</p>

                </div>
            </div>
        </div>
        <Comissao/>
    </Fragment>
);