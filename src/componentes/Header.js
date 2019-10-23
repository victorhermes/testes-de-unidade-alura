import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Logo from "../imgs/alura.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </header>
    );
  }
}
