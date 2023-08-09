import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slider = ({ data }) => {
  const { title, background } = data;

  const slideRef = useRef(null);

  useEffect(() => {
    const slideElement = slideRef.current;

    // Crear una instancia de GSAP timeline
    const tl = gsap.timeline();

    // let heroTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".hero-component",
    //     start: "top top",
    //     end: "bottom center",
    //     ease: "none",
    //     endTrigger: ".hero-content",
    //     scrub: true
    //   }
    // });
    // heroTl.to(".home-hero_overlay", {
    //   opacity: 1,
    //   duration: 1
    // });

    // Definir la animación
    tl.fromTo(
      slideElement,
      { opacity: 0, y: 100 }, // Estado inicial: opacidad 0 y posición y a 100px
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' } // Estado final: opacidad 1, posición y a 0, duración de 1.5 segundos
    );
  }, []);

  return (
    <div className="slider" ref={slideRef} style={{ background: `url(${background})` }}>
      <div className="slider__content">
        <h1 className="h-medium text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Slider;
