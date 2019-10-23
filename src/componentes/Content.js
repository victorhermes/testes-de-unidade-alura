import React from 'react';
import '../css/Content.css'
import Img from '../imgs/conteudo/01.jpg';

export default class Content extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <section>
                <div className="Cabecalho">
                    <p>Perfil</p>
                </div>
                <img src={Img} alt="Natureza" className="Imagem" />
            </section>
        )
    }
}