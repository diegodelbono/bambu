import React, { useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { Image } from "../image";

const News = ({ data }) => {

  const options = {
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        margin: 10,
        nav: false,
      },
      600: {
        items: 2,
        margin: 10,
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
    <section class="carousel-section">
      <div class="container">
        <div className="products">
          <h2 className="h-medium">Noticias</h2>
          <OwlCarousel className="owl-theme" {...options}>
            {data.map(({ url }, index) => (
              <a href="https://www.instagram.com/bambu_del_este/" key={index} target="_blank">
                <Image id={url} />
              </a>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};


//IGQWRPNUtleG1uTDJMSmJXZAVZAnOWxmLXIxR01mVVVyZAWtrYVhsd3FSaDhEby1YUm50YmJ4a3pHdUI0eE9RZA081YkFBbE8xa3cwZA1BSRFJfOWVrcUpnd1A0Qks0eEhqdWNQWGlpdks4Y2M5bWJFaE5vaFZAIMWRjSE0ZD
export default News;