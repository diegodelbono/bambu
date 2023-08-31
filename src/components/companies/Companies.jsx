import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Image } from "../image";

const Companies = ({ data }) => {
  const { title, company } = data;
  const options = {
    loop: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 20,
        nav: false,
      },
      600: {
        items: 2,
        margin: 20,
        nav: false,
      },
      1024: {
        items: 4,
        margin: 30,
        nav: false,
      },
    },
  };

  return (
    <>
      <div className="products">
        <h2 className="h-medium">{title}</h2>
        <OwlCarousel className="owl-theme" {...options}>
          {company.map(({ logo, link }, index) => (
            <a href={link} key={index} target="_blank">
              <Image id={logo.url} />
            </a>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Companies;
