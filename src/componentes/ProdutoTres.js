import React, { Component, Fragment } from "react";
import Header from "./Header";
import "../css/Product.css";
import ImgTres from "../imgs/conteudo/03.jpg";

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
                <img src={ImgTres} alt="Celular" />
            </div>
            <div className="Conteudo">
                <h1>Celular com tela infinita</h1>
                <h3>Maior lance:</h3>
                <p className="ValorMaior">{this.state.reais}400,00</p>

                <h3>Menor lance:</h3>
                <p className="ValorMenor">{this.state.reais}100,00</p>

                <h3>Maiores lances:</h3>
                <p className="ValorNeutro">{this.state.reais}400,00</p>
                <p className="ValorNeutro">{this.state.reais}350,00</p>
                <p className="ValorNeutro">{this.state.reais}100,00</p>
            </div>
            </section>
        </Fragment>
        );
    }
}
