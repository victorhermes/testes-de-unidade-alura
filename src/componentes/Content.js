import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../css/Content.css";
import ImgUm from "../imgs/conteudo/01.jpg";
import ImgDois from "../imgs/conteudo/02.jpg";
import ImgTres from "../imgs/conteudo/03.jpg";

export default class Content extends Component {
  state = {
    reais: "R$"
  };

  render() {
    return (
      <Fragment>
        <Header />
        <section>
          <div>
            <img src={ImgUm} alt="Natureza" className="Imagem" />
          </div>
          <div className="Conteudo">
            <h1>Notebook com processador i5</h1>
            <p className="Valor">{this.state.reais}500,00</p>
            <Link to="/produto">Conferir</Link>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <img src={ImgDois} alt="Natureza" className="Imagem" />
          </div>
          <div className="Conteudo">
            <h1>Fusca vermelho clássico</h1>
            <p className="Valor">{this.state.reais}15.000,00</p>
            <a href="http://localhost:3000/">Conferir</a>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <img src={ImgTres} alt="Natureza" className="Imagem" />
          </div>
          <div className="Conteudo">
            <h1>Celular com tela infinita</h1>
            <p className="Valor">{this.state.reais}700,00</p>
            <a href="http://localhost:3000/">Conferir</a>
          </div>
        </section>
      </Fragment>
    );
  }
}
