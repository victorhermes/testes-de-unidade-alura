import React, { Component, Fragment } from "react";
import { URLBase } from "../services/api";

import Menu from "./Menu";
import ListarProdutos from "./ListaProdutos";

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
            });
    }

    render() {
        return (
            <Fragment>
                <Menu />
                <ListarProdutos dados={this.state.dados} />
            </Fragment>
        );
    }
}
