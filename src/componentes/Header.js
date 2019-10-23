import React from 'react';
import '../css/Header.css'
import Logo from '../imgs/alura.svg';

export default class Header extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <header>
                <img src={Logo} alt="Logo" />
            </header>
        )
    }
}