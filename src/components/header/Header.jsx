import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../nav";
import { useLogoAnimation } from "../../utils/animations";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const logoRef = useRef(null);
  useLogoAnimation(logoRef);

  const body = document.body;

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  if (navOpen) {
    body.classList.add("body-fixed");
  } else {
    body.classList.remove("body-fixed");
  }

  const closeNav = () => {
    setNavOpen(false);
  };

  const [overlappingDivs, setOverlappingDivs] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(".logo");
      const main = document.querySelector(".main");
      const divsToCheck = document.querySelectorAll(".bg-color");
      const slider = document.querySelector(".slider");

      const overlappingDivs = [];

      divsToCheck.forEach((div) => {
        const logoRect = logo.getBoundingClientRect();
        const divRect = div.getBoundingClientRect();
        const mainRect = main.getBoundingClientRect();

        if (mainRect.top <= 0) {
          slider.classList.add("slider--relative");
        } else {
          slider.classList.remove("slider--relative");
        }

        if (logoRect.bottom > divRect.top && logoRect.top < divRect.bottom) {
          overlappingDivs.push(div.id);
        }
      });

      setOverlappingDivs(overlappingDivs);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${navOpen ? "header--expand" : ""} ${overlappingDivs.length > 0 ? "header--overlay" : ""}`}>
      <div className="header__container container">
        <Link to="/">
          <div id="logo" className="logo" ref={logoRef} />
        </Link>
        <Nav isOpen={navOpen} onCloseNav={closeNav} />
        <div className="nav--toggle" onClick={toggleNav}>
          <div className={`nav-icon ${navOpen ? "nav-icon--active" : ""}`}>
            <div className="nav-icon--line" />
            <div className="nav-icon--line" />
          </div>
        </div>
        <div className="header__footer">
          <a href="https://api.whatsapp.com/send?phone=59898464748&text=Hola,%20me%20interesaría%20recibir%20más%20información%20sobre%20Bambú%20del%20Este.%20Gracias">WhatsApp</a>
          <a href="https://www.instagram.com/bambu_del_este" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/BambudelEsteUruguay/" target="_blank">Facebook</a>

          <div className="header__footer--end">
            <a href="mailto:vivero@bambudeleste.com.uy">vivero@bambudeleste.com.uy</a>
            <div><a href="tel:+59898464748">+598 98 46 47 48</a></div>
          </div>
        </div>
      </div>

      <div className="header__bg" />
    </header>
  );
};

export default Header;
