import React, { useRef } from "react";
import { arrayOf, shape } from "prop-types";
import { useSlideAnimation, useSlideTitleAnimation } from "../../utils/animations";

const Slider = ({ data, slideHome }) => {
  const { title, background, video } = data;
  const slideRef = useRef(null);
  const slideTitleRef = useRef(null);


  useSlideAnimation(slideRef);
  useSlideTitleAnimation(slideTitleRef);

  return (
    <div ref={slideRef} className={`slider bg-color ${slideHome ? "slider--home" : ""}`} style={{ background: `url(${background})` }}>
      <h1 className="h-medium text-white" ref={slideTitleRef}>
        {title}
      </h1>
      {
        video && (
          <video className="slider__video" autoPlay loop muted playsInline>
            <source src={video.url} type="video/mp4" />
          </video>
        )
      }
    </div>
  );
};


export default Slider;
