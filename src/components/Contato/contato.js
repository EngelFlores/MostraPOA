import React, { Fragment } from "react";
import "./contato.css";

export const Contato = () => (
    <Fragment>
        <div className="container__form">
            <h1 className="form__title">Contato</h1>

            <form>
                <div className="large-group">
                    <div className="small-group">
                        <label >Primeiro Nome</label>
                        <input id="firstname" type="text" name="firstname" required/>
                    </div>

                    <div className="small-group">
                        <label >Sobrenome</label>
                        <input  type="text" name="lastname" required />
                    </div>

                    <div className="small-group">
                        <label >E-mail</label>
                        <input id="email" type="email" name="email" required/>
                    </div>

                    <div className="small-group">
                        <label >Telefone</label>
                        <input id="phonenumber" type="tel" name="phonenumber" required/>
                    </div>

                    <div className="textarea-div">
                        <label >Mensagem</label>
                        <textarea id="message" type="text" name="message" required></textarea>
                    </div>

                    <input id="submit" className="btn" type="submit" name="submit" value="Enviar" />

                </div>
            </form>
        </div>
    </Fragment>
)
