import React, { Component, Fragment } from "react";
import { URLBase } from "../services/api";
import Menu from "./Menu";
import ListarUmProduto from "./ListarUmProduto";
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
            });
    }

    render() {
        return (
            <Fragment>
                <Menu />
                <ListarUmProduto dados={this.state.dados} />
            </Fragment>
        );
    }
}
