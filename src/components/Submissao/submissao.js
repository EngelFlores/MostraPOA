import React, { Fragment } from 'react';
import './submissao.css'

export const Submissao = () => (
    <Fragment>
        <div class="banner-crono">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                    <h1 class="page-header" style={{marginTop:'2em', textAlign:'center'}}>Submissão de Trabalhos</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style={{marginTop:'3em'}}>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline7">
                        <div class="timeline">
                            <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                            <span class="year">2018</span>
                            <div class="timeline-content">
                                <h5 class="title">Web Designer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                            <span class="year">Março</span>
                            <div class="timeline-content">
                                <h5 class="title">Web Developer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><i class="fa fa-briefcase"></i></div>
                            <span class="year">Maio</span>
                            <div class="timeline-content">
                                <h5 class="title">Web Designer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><i class="fa fa-mobile"></i></div>
                            <span class="year">Julho</span>
                            <div class="timeline-content">
                                <h5 class="title">Web Developer</h5>
                                <p class="description">
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