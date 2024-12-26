import { useNavigate } from 'react-router-dom';
import React from 'react';
import './styling/navbar2.css'; // Create a CSS file for styling

export const NavbarWithButtons = () => {
     const navigate = useNavigate()
     return (
          <nav className="navbar2 colorful-navbar">
               <div className="navbar-buttons">
                    <button className="navbar-button" onClick={() => {
                         navigate("/")
                    }}>All</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/sports")
                    }}>Sports</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/entertainment")
                    }}>Entertainment</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/technology")
                    }}>Technology</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/health")
                    }}>Health</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/business")
                    }}>Business</button>
                    <button className="navbar-button" onClick={() => {
                         navigate("/world")
                    }}>World</button>
               </div>
          </nav>
     );
};
