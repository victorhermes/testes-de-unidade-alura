import React, { Component, Fragment } from "react";
import Menu from "./Menu";
import "../css/Produto.css";

export default class Produto extends Component {
    state = {
        moeda: "R$",
        dados: {}
    };

    componentWillMount() {
        const dados = this.props.location.dados;
        this.setState({ dados });
    }

    render() {
        function organizarNumeros(a, b) {
            return a - b;
        }

        const { id, titulo, imagem, lances } = this.state.dados;

        const lance = lances
            .sort(organizarNumeros)
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
                        {lance.map(l => {
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
