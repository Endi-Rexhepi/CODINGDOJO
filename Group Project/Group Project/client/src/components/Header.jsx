// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Pizza Pete's</h1>
        <nav>
            <Link to="/home">HOME</Link>
            <Link to="/order">ORDER</Link>
            <Link to="/account">ACCOUNT</Link>
            <Link to="/logout">LOGOUT</Link>
        </nav>
    </header>
);

export default Header;

