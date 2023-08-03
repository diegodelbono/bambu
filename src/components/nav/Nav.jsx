import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__item" to="/plantas">
                Plantas
            </NavLink>
            <NavLink className="nav__item" to="/servicios">
                Servicios
            </NavLink>
            <NavLink className="nav__item" to="/insumos">
                Insumos
            </NavLink>
            <NavLink className="nav__item" to="/bambu">
                El Bambu
            </NavLink>
            <NavLink className="nav__item" to="/nosotros">
                Nosotros
            </NavLink>
        </nav>
    );
};


export default Nav;