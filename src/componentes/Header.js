import React from 'react';
import '../css/Header.css'
import Logo from '../imgs/logo.png';

export default class Header extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <header>
                <div>
                    <img src={Logo} alt="Logo" />
                    <a href="http://localhost:3000/"> Entrar </a>
                </div>
            </header>
        )
    }
}