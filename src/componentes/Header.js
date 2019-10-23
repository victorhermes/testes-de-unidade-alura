import React from 'react';
import '../css/Header.css'
import Logo from '../imgs/alura.svg';
import User from '../imgs/user.png';

export default class Header extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <header>
                <div>
                    <img src={Logo} alt="Logo" />
                    <img src={User} alt="User" className="User" />
                </div>
            </header>
        )
    }
}