import React, { Fragment } from 'react';
import './index.css';
import { Comissao } from '../../components/Comissao/comissao'

export const Sobre = () => (
    <Fragment>
        <div className="background__image">
            <div className="banner-crono background__image">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="title__sobre" style={{ textAlign:'center' }}>Apresentação</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row ">
                    <div className="col-md-12" >

                        <h2 style={{ textAlign: 'center', fontSize: "20px" }}>Sobre a MostraPoA</h2>
                        <p style={{ textAlign: 'justify', fontSize: "14px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
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
            <Comissao />
        </div>
    </Fragment>
);