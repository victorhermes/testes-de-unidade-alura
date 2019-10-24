import React, { Component, Fragment } from "react";
import Header from "./Header";
import "../css/Product.css";
import ImgDois from "../imgs/conteudo/02.jpg";

export default class Content extends Component {
    state = {
        reais: "R$"
    };

    render() {
        return (
        <Fragment>
            <Header />
            <section className="Produto">
            <div>
                <img src={ImgDois} alt="Natureza" />
            </div>
            <div className="Conteudo">
                <h1>Fusca vermelho clássico</h1>
                <h3>Maior lance:</h3>
                <p className="ValorMaior">{this.state.reais}6.500,00</p>

                <h3>Menor lance:</h3>
                <p className="ValorMenor">{this.state.reais}5.000,00</p>

                <h3>Maiores lances:</h3>
                <p className="ValorNeutro">{this.state.reais}6.500,00</p>
                <p className="ValorNeutro">{this.state.reais}6.200,00</p>
                <p className="ValorNeutro">{this.state.reais}5.000,00</p>
            </div>
            </section>
        </Fragment>
        );
    }
}
