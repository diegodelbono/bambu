import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isOpen, onCloseNav }) => {

  return (
    <>
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <NavLink className="nav__item p-small" to="/plantas?s=plantas" onClick={onCloseNav}>
          Plantas
        </NavLink>
        <NavLink className="nav__item p-small" to="/servicios?s=servicios" onClick={onCloseNav}>
          Servicios
        </NavLink>
        <NavLink className="nav__item p-small" to="/insumos?s=insumos" onClick={onCloseNav}>
          Insumos
        </NavLink>
        <NavLink className="nav__item p-small" to="/bambu?s=el-bambu" onClick={onCloseNav}>
          El Bambu
        </NavLink>
        <NavLink className="nav__item p-small" to="/nosotros?s=nosotros" onClick={onCloseNav}>
          Nosotros
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
