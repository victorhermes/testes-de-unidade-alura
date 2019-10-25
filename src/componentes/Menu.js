import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
import Logo from "../imgs/alura.svg";

export default class Menu extends Component {
    render() {
        return (
            <header className="menu">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="menu-logo" />
                </Link>
            </header>
        );
    }
}
