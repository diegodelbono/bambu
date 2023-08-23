import React, { useState, useEffect } from "react";
import "./LogoComponent.css"; // Importar el archivo CSS

const Pruebas = () => {
  const [overlappingDivs, setOverlappingDivs] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(".logo");
      const divsToCheck = document.querySelectorAll(".div-to-check");

      const overlappingDivs = [];

      divsToCheck.forEach((div) => {
        const logoRect = logo.getBoundingClientRect();
        const divRect = div.getBoundingClientRect();

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
    <div className="logo-container">
      <div className={`logo ${overlappingDivs.length > 0 ? "overlay" : ""}`}>{/* Tu logo */}</div>

      <div id="div1" className="div-to-check">
        {/* Primer div para verificar */}
      </div>

      <div className="test" />

      <div id="div2" className="div-to-check">
        {/* Segundo div para verificar */}
      </div>
      {/* Agrega más divs-to-check según sea necesario */}
    </div>
  );
};

export default Pruebas;
