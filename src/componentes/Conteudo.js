import React, { Component, Fragment } from "react";
import { URLBase } from "../services/api";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../css/Conteudo.css";

export default class Conteudo extends Component {
    state = {
        moeda: "R$",
        dados: []
    };

    componentDidMount() {
        fetch(URLBase)
            .then(response => response.json())
            .then(data => {
                this.setState({ dados: data });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <Fragment>
                <Menu />
                {this.state.dados.map(conteudo => {
                    return (
                        <section className="container" key={conteudo.id}>
                            <div>
                                <img
                                    src={conteudo.imagem}
                                    alt={conteudo.titulo}
                                    className="imagem"
                                />
                            </div>
                            <div className="conteudo">
                                <h1 className="titulo-conteudo">
                                    {conteudo.titulo}
                                </h1>
                                <p className="valor">
                                    {this.state.moeda}
                                    {Math.max(...conteudo.lances)}
                                </p>
                                <Link
                                    to={{
                                        pathname: `/produto/${conteudo.id}`,
                                        dados: conteudo
                                    }}
                                    className="botao-conferir"
                                >
                                    Conferir
                                </Link>
                            </div>
                        </section>
                    );
                })}
            </Fragment>
        );
    }
}
