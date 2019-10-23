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
            <img src={ImgUm} alt="Natureza" />
          </div>
          <div className="Conteudo">
            <h1>Produto</h1>
            <p className="Valor">{this.state.reais}500,00</p>
            <a href="http://localhost:3000/">Conferir</a>
          </div>
        </section>
      </Fragment>
    );
  }
}
