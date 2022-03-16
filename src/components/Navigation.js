import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';

const Navigation = () => {
    return (
        <div className ="wrap">
            <div class="navbar">
                <NavLink className="link" exact to="/" activeClassName="nav-active">
                Acceuil
                </NavLink>

                <NavLink className="link" exact to="/favoris" activeClassName="nav-active">
                Favoris
                </NavLink>

                <NavLink className="link" exact to="/about" activeClassName="nav-active">
                    Apropos
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;