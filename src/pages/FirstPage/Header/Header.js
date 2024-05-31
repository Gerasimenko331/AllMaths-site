import React from 'react';
import logo from './logo.svg';

function Header() {
    return (
        <div className="header" style={{backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', border: '3px solid #CEE7F5'}}>
            <img src={logo} alt="логотип" style={{width: '100px', height: '100px', margin: '0'}} />
        </div>
    );
}

export default Header;