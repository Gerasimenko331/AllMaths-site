import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="логотип" className="header-img"/>
        </div>
    );
}

export default Header;