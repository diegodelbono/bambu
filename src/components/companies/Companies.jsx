import React from "react";
import OwlCarousel from "react-owl-carousel";

const Companies = ({ data }) => {
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
  const { title } = data;
  return (
    <>
      <div className="products">
        <h2 className="h-medium">{title}</h2>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="imgs"></div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Companies;
