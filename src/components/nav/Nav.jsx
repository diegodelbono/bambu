import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isOpen, onCloseNav }) => {
  return (
    <>
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <NavLink
          className="nav__item p-small"
          to="/especies?s=especies"
          onClick={onCloseNav}
        >
          Especies
        </NavLink>
        <NavLink
          className="nav__item p-small"
          to="/usos?s=usos"
          onClick={onCloseNav}
        >
          Usos
        </NavLink>
        <NavLink
          className="nav__item p-small"
          to="/servicios?s=servicios"
          onClick={onCloseNav}
        >
          Servicios
        </NavLink>
        <NavLink
          className="nav__item p-small"
          to="/insumos?s=insumos"
          onClick={onCloseNav}
        >
          Insumos
        </NavLink>

        <NavLink
          className="nav__item p-small"
          to="/nosotros?s=nosotros"
          onClick={onCloseNav}
        >
          Nosotros
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
