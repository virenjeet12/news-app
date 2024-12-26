import React from 'react';
import './styling/Navbar.css'; // Make sure to create and include a CSS file for styling
import logoImage from '../assets/logo.webp';

export const Navbar = () => {
    return (
        <nav className="navbar colorful-navbar">
            <div className="navbar-brand">
                <img src={logoImage} alt="Provider Logo" className="logo-image" />
                <a href="/" className="logo">NEWS</a>
            </div>
        </nav>
    );
};

