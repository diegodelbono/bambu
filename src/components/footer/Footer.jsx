import React from "react";
import Logo from "../../assets/Bambu-imago.svg";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__col">
                        <div className="logo logo-imago" />
                    </div>
                    <div className="footer__col">
                        <div className="footer__menu">
                            <a href="#">Plantas</a>
                            <a href="#">Servicios</a>
                            <a href="#">Insumos</a>
                            <a href="#">El bambu</a>
                            <a href="#">Nosotros</a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__menu">
                            <a href="#">WhatsApp</a>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                    <div className="footer__col footer__col--end">
                        <p>vivero@bambudeleste.com.uy <br /> +598 98 46 47 48</p>
                        <p>Costa Azul, Canelones <br /> Uruguay</p>
                        <div className="copy">© Bambú del Este 2023</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;