import React, { Component, Fragment } from "react";
import axios from "axios";
import { baseURL } from "../services/api";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../css/Conteudo.css";

export default class Conteudo extends Component {
    state = {
        moeda: "R$",
        dados: []
    };

    componentDidMount() {
        axios.get(`${baseURL}`).then(res => {
            this.setState({ dados: res.data });
        });
    }

    render() {
        return (
            <>
                <Menu />
                {this.state.dados.map(conteudo => {
                    return (
                        <Fragment key={conteudo.id}>
                            <section className="container">
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
                            <hr />
                        </Fragment>
                    );
                })}
            </>
        );
    }
}
