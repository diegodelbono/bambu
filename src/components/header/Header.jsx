import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../nav";
import Logo from '../../assets/Bambu-logo.svg';
import Imago from "../../assets/Bambu-imago.svg";
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;

        const handleScroll = () => {
            if (window.scrollY < 100) {
                logo.classList.remove('logo-imago'); // Quitar la clase al volver a la posición inicial
            } else {
                logo.classList.add('logo-imago');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const logo = logoRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.logo-container',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // duration: 10,
            },
        });

        tl.to(logo, { width: "3rem", transformOrigin: 'top left', });
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__item">
                    <Link to="home">
                        <div className="logo-container">
                            <div ref={logoRef} className="logo">
                                {/* <img src={Logo} alt="Logo" /> */}
                            </div>
                            {/* <div className="imago">
                <img src={Imago} alt="Imago" />
              </div> */}
                        </div>
                    </Link>
                </div>
                <div className="header__item">
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
