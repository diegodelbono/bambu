import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">

          <div className="footer__col">
            <div className="footer__col--flex">
              <Link to="/">
                <div className="logo logo--imago" />
              </Link>
              <div className="footer__menu">
                <NavLink to="/especies?s=especies">Especies</NavLink>
                <NavLink to="/usos?s=usos">Usos</NavLink>
                <NavLink to="/servicios?s=servicios">Servicios</NavLink>
                <NavLink to="/insumos?s=insumos">Insumos</NavLink>
                <NavLink to="/nosotros?s=nosotros">Nosotros</NavLink>
              </div>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__menu">
              <a href="https://api.whatsapp.com/send?phone=59898464748&text=Hola,%20me%20interesaría%20recibir%20más%20información%20sobre%20Bambú%20del%20Este.%20Gracias">WhatsApp</a>
              <a href="https://www.instagram.com/bambu_del_este" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/BambudelEsteUruguay/" target="_blank">Facebook</a>
            </div>
          </div>
          <div className="footer__col footer__col--end">Envíos a todo el país</div>
          <div className="footer__col footer__col--end">
            <a href="mailto:vivero@bambudeleste.com.uy">vivero@bambudeleste.com.uy</a>
            <div><a href="tel:+59898464748">+598 98 46 47 48</a></div>
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
