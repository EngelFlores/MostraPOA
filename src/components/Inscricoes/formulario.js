import React, { Fragment } from "react";
import "./formulario.css";

export const Formulario = () => (
    <Fragment>
        <div className="container__form">
            <h1 className="form__title">Incrições</h1>

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
                        <label >Instituição</label>
                        <select name="fruit">
                            <option value="strawberry">IFRS</option>
                            <option value="peach">UFRGS</option>
                            <option value="banana">PUCRS</option>
                            <option value="watermelon">ULBRA</option>
                            <option value="pineapple">Outra</option>
                        </select>
                    </div>
                    <div className="small-group">
                        <label >Ocupação</label>
                        <select name="vegetable">
                            <option value="carrot">Estudante</option>
                            <option value="peppers">Trabalha e estuda</option>
                            <option value="broccoli">Trabalha</option>
                            <option value="corn">Desempregado</option>
                            <option value="beats">Outra</option>
                        </select>
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
                        <label >Resumo Biografia</label>
                        <textarea id="message" type="text" name="message" required></textarea>
                    </div>

                    <input id="submit" className="btn" type="submit" name="submit" />

                </div>
            </form>
        </div>
    </Fragment>
)
