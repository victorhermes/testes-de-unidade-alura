import React from 'react';
import '../css/Content.css'
import Img from '../imgs/conteudo/01.jpg';
import Perfil from '../imgs/profile.jpg';

export default class Content extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <section>
                <div className="Cabecalho">
                    <img src={Perfil} alt="Perfil" className="Perfil" />
                    <p>Victor Hermes</p>
                </div>
                <img src={Img} alt="Natureza" className="Imagem" />
            </section>
        )
    }
}