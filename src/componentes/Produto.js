import React, { Component, Fragment } from "react";
import { URLBase } from "../services/api";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../css/Produto.css";

export default class Produto extends Component {
    state = {
        moeda: "R$",
        dados: []
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(URLBase + "/" + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ dados: [data] });
            })
            .catch(error => console.error(error));
    }

    subtrairLances = (num1, num2) => {
        return num1 - num2;
    };

    organizarLances = conteudo => {
        return conteudo.lances
            .sort(this.subtrairLances)
            .reverse()
            .slice(0, 3);
    };

    render() {
        return (
            <Fragment>
                <Menu />
                {this.state.dados.map(conteudo => {
                    return (
                        <section key={conteudo.id} className="produto">
                            <div>
                                <img
                                    src={conteudo.imagem}
                                    alt={conteudo.titulo}
                                    className="imagem-produto"
                                />
                            </div>
                            <div className="conteudo">
                                <h1 className="titulo-produto">
                                    {conteudo.titulo}
                                </h1>
                                <h3>Maior lance:</h3>
                                <p className="valor-maior">
                                    {this.state.moeda}
                                    {Math.max(...conteudo.lances)}
                                </p>
                                <h3>Menor lance:</h3>
                                <p className="valor-menor">
                                    {this.state.moeda}
                                    {Math.min(...conteudo.lances)}
                                </p>

                                <h3>Maiores lances:</h3>
                                {this.organizarLances(conteudo).map(lance => {
                                    return (
                                        <p key={lance} className="valor-neutro">
                                            {this.state.moeda}
                                            {lance}
                                        </p>
                                    );
                                })}
                                <Link
                                    to={{
                                        pathname: `/novo-lance/${conteudo.id}`
                                    }}
                                    className="botao-novo-lance"
                                >
                                    Novo lance
                                </Link>
                            </div>
                        </section>
                    );
                })}
            </Fragment>
        );
    }
}
