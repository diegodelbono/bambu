import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__item" to="/plantas?s=plantas">
                Plantas
            </NavLink>
            <NavLink className="nav__item" to="/servicios?s=servicios">
                Servicios
            </NavLink>
            <NavLink className="nav__item" to="/insumos?s=insumos">
                Insumos
            </NavLink>
            <NavLink className="nav__item" to="/bambu?s=el-bambu">
                El Bambu
            </NavLink>
            <NavLink className="nav__item" to="/nosotros?s=nosotros">
                Nosotros
            </NavLink>
        </nav>
    );
};


export default Nav;