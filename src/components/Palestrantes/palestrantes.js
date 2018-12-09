import React, { Fragment } from 'react';
import './palestrantes.css'
import profile from "./profile.jpg"

export const Palestrantes = () => (
    <Fragment>
        <div className="w3-container w3-padding-64 w3-center" id="team">
            <h2 className="title__palestrantes">Palestrantes</h2>

            <div className="w3-row">

                <div className="w3-quarter">
                    <img src={profile} alt="Boss" className="w3-circle w3-hover-opacity palestrantes__image" />
                    <h3 className="nome__palestrantes">Johnny Walker</h3>
                    <h3 className="subtitle__palestrantes">Web Designer</h3>
                    <p className="bio_palestrantes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
                </div>

                <div className="w3-quarter">
                    <img src={profile} alt="Boss" className="w3-circle w3-hover-opacity  palestrantes__image" />
                    <h3 className="nome__palestrantes">Rebecca Flex</h3>
                    <h3 className="subtitle__palestrantes">Support</h3>
                    <p className="bio_palestrantes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
                </div>

                <div className="w3-quarter">
                    <img src={profile} alt="Boss" className="w3-circle w3-hover-opacity palestrantes__image" />
                    <h3 className="nome__palestrantes">Jan Ringo</h3>
                    <h3 className="subtitle__palestrantes">Boss man</h3>
                    <p className="bio_palestrantes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
                </div>

                <div className="w3-quarter">
                    <img src={profile} alt="Boss" className="w3-circle w3-hover-opacity palestrantes__image" />
                    <h3 className="nome__palestrantes">Kai Ringo</h3>
                    <h3 className="subtitle__palestrantes">Fixer</h3>
                    <p className="bio_palestrantes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
                </div>

            </div>
        </div>
    </Fragment>
)
