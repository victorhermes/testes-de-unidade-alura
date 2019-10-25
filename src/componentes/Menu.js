import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
import Logo from "../imgs/alura.svg";

export default class Menu extends Component {
    render() {
        return (
            <header className="menu">
                <nav className="navegacao-menu">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="menu-logo" />
                    </Link>
                    <Link to="/adicionar-produto" className="link-produto">
                        Adicionar Produto
                    </Link>
                </nav>
            </header>
        );
    }
}
