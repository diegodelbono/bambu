import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Image } from "../image";

const Gallery = ({ data }) => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    animateOut: "fadeOut",
    dots: false,
  };

  return (
    <div className="bg-color">
      <div id="gallery" className="gallery">
        <OwlCarousel className="owl-theme" {...options}>
          {data.map(({ url }, index) => (
            <div className="gallery__item" key={index}>
              <Image id={url} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Gallery;
