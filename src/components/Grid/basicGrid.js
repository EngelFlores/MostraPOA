import React, { Fragment } from 'react';
import './basicGrid.css'
import novidade1 from "./IMG_3662.JPG"
import novidade2 from "./IMG_3783.JPG"
import novidade3 from "./IMG_4016.JPG"


export const Grid = (props) => (
    <Fragment>
        <div className="grid__container">
            <div className="grid__novidades">
                <h2>{props.text}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Vitae elementum curabitur vitae nunc. Lectus sit amet est placerat in egestas erat imperdiet sed. Praesent tristique magna sit amet purus gravida quis blandit. Iaculis eu non diam phasellus vestibulum. Convallis convallis tellus id interdum velit laoreet id. Id nibh tortor id aliquet lectus proin. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Tellus elementum sagittis vitae et leo. Nunc faucibus a pellentesque sit amet porttitor. Arcu non sodales neque sodales ut etiam sit.</p>
            </div>
            <div className="grid_item">
                <img className="grid__image" src={novidade1} alt="Novidades"></img>
                <p className="grid__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="grid__button" >Confira</button>
            </div>
            <div className="grid_item">
                <img className="grid__image" src={novidade2} alt="Novidades"></img>
                <p className="grid__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="grid__button" >Confira</button>
            </div>
            <div className="grid_item">
                <img className="grid__image" src={novidade3} alt="Novidades"></img>
                <p className="grid__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="grid__button" >Confira</button>
            </div>
        </div>
    </Fragment>
)
