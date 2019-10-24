import React, { Component, Fragment } from "react";
import Header from "./Header";
import "../css/Product.css";
import ImgUm from "../imgs/conteudo/01.jpg";

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
                <img src={ImgUm} alt="Notebook" />
            </div>
            <div className="Conteudo">
                <h1>Notebook com processador i5</h1>
                <h3>Maior lance:</h3>
                <p className="ValorMaior">{this.state.reais}500,00</p>

                <h3>Menor lance:</h3>
                <p className="ValorMenor">{this.state.reais}110,00</p>

                <h3>Maiores lances:</h3>
                <p className="ValorNeutro">{this.state.reais}500,00</p>
                <p className="ValorNeutro">{this.state.reais}150,00</p>
                <p className="ValorNeutro">{this.state.reais}110,00</p>
            </div>
            </section>
        </Fragment>
        );
    }
}
