import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <Link to="/">
            <div className="logo logo--imago" />
          </Link>
          <div className="footer__col">
            <div className="footer__menu">
              <NavLink to="/plantas?s=plantas">Plantas</NavLink>
              <NavLink to="/servicios?s=servicios">Servicios</NavLink>
              <NavLink to="/insumos?s=insumos">Insumos</NavLink>
              <NavLink to="/bambu?s=el-bambu">El Bambu</NavLink>
              <NavLink to="/nosotros?s=nosotros">Nosotros</NavLink>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__menu">
              <a href="#">WhatsApp</a>
              <a href="https://www.instagram.com/bambu_del_este" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/BambudelEsteUruguay/" target="_blank">Facebook</a>
            </div>
          </div>
          <div className="footer__col footer__col--end">
            <a href="mailto:vivero@bambudeleste.com.uy">vivero@bambudeleste.com.uy</a>
            <div> +598 98 46 47 48</div>
            <div className="footer__info">
              <div>
                Costa Azul, <br /> Canelones Uruguay
              </div>
              <div className="copy">© Bambú del Este 2023</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
