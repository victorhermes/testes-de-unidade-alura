import React, { Component, Fragment } from 'react';
import '../css/Content.css'
import Img from '../imgs/conteudo/01.jpg';
import Perfil from '../imgs/profile.jpg';

export default class Content extends Component {
    state = {
        liked: false
    }

    curtirPostagem = () => {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const label = this.state.liked ? 'Curtiu' : 'Curtir'

        return (
            <Fragment>
                <section>
                    <div className="Cabecalho">
                        <img src={Perfil} alt="Perfil" className="Perfil" />
                        <p>Victor Hermes</p>
                    </div>
                    <img src={Img} alt="Natureza" className="Imagem" />
                    <div className="Curtidas">
                        <p>{this.state.curtidas} pessoas curtiram sua publicação</p>
                        <button onClick={this.curtirPostagem}>{label}</button>
                    </div>
                </section>
            </Fragment>
        )
    }
}