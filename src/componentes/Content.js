import React, { Component, Fragment } from 'react';
import '../css/Content.css'
import Img from '../imgs/conteudo/01.jpg';
import Perfil from '../imgs/profile.jpg';

export default class Content extends Component {
    state = {
        reais: 'R$',
    }

    render() {
        return (
            <Fragment>
                <section>
                    <div>
                        <img src={Img} alt="Natureza" className="Imagem" />
                    </div>
                    <div className="Conteudo">
                        <h1>Computador</h1>
                        <p className="Valor">{this.state.reais}500,00</p>
                        <a href="#">Conferir</a>
                    </div>
                </section>
            </Fragment>
        )
    }
}