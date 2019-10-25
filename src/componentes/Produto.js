import React, { Component, Fragment } from "react";
import Menu from "./Menu";
import "../css/Produto.css";

export default class Produto extends Component {
        state = {
            moeda: "R$"
        };

        subtrairLances = (num1, num2) => {
            return num1 - num2;
        };

        render() {
            const { id, titulo, imagem, lances } = this.props.location.dados;

            const maioresLances = lances
                .sort(this.subtrairLances)
                .reverse()
                .slice(0, 3);

            return (
                <Fragment>
                    <Menu />
                    <section key={id} className="produto">
                        <div>
                            <img
                                src={imagem}
                                alt={titulo}
                                className="imagem-produto"
                            />
                        </div>
                        <div className="conteudo">
                            <h1 className="titulo-produto">{titulo}</h1>
                            <h3>Maior lance:</h3>
                            <p className="valor-maior">
                                {this.state.moeda}
                                {Math.max(...lances)}
                            </p>

                            <h3>Menor lance:</h3>
                            <p className="valor-menor">
                                {this.state.moeda}
                                {Math.min(...lances)}
                            </p>

                            <h3>Maiores lances:</h3>
                            {maioresLances.map(l => {
                                return (
                                    <p key={l} className="valor-neutro">
                                        {this.state.moeda}
                                        {l}
                                    </p>
                                );
                            })}
                        </div>
                    </section>
                </Fragment>
            );
        }
}
