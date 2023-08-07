import React, { useEffect, useState } from "react";
import { Nav } from "../nav";
import Logo from '../../assets/Bambu-logo.svg';

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${sticky ? 'header--sticky' : ''}`}>
      <div className="header__container container">
        <div className="header__item">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="header__item">
          <Nav />
        </div>
      </div>
    </header>
  );
};


export default Header;