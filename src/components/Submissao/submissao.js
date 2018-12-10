import React, { Fragment } from 'react';
import './submissao.css'

export const Submissao = () => (
    <Fragment>
        <div className="banner-crono">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <h1 className="title__submissao" style={{textAlign:'center',fontSize:"30px"}}>Submissão de Trabalhos</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" style={{marginTop:'3em'}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline7">
                        <div className="timeline">
                            <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                            <span className="year">2018</span>
                            <div className="timeline-content">
                                <h5 className="title">Web Designer</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                            <span className="year">Março</span>
                            <div className="timeline-content">
                                <h5 className="title">Web Developer</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                            <span className="year">Maio</span>
                            <div className="timeline-content">
                                <h5 className="title">Web Designer</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                            <span className="year">Julho</span>
                            <div className="timeline-content">
                                <h5 className="title">Web Developer</h5>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
)