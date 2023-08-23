import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useLogoAnimation = (logoRef) => {
  useEffect(() => {
    const logoElement = logoRef.current;
    const tl = gsap.timeline();
    const windowWidth = window.innerWidth;

    if (windowWidth > 600) {
      tl.fromTo(
        logoElement,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "ease", duration: 0.6 }
      );
    } else {
      tl.fromTo(
        logoElement,
        { opacity: 0 },
        { opacity: 1, ease: "ease", duration: 0.6 }
      );
    }
  }, []);
};

export const useSlideAnimation = (slideRef) => {
  useEffect(() => {
    const slideElement = slideRef.current;
    const windowWidth = window.innerWidth;
    const tl = gsap.timeline();

    if (windowWidth > 600) {
      tl.fromTo(
        slideElement,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, ease: "ease", delay: "0.5", duration: 0.6 }
      );
    } else {
      tl.fromTo(
        slideElement,
        { opacity: 0 },
        { opacity: 1, ease: "ease", duration: 0.6 }
      );
    }
  }, []);
};

export const useSlideTitleAnimation = (slideTitleRef) => {
  useEffect(() => {
    const slideTitleElement = slideTitleRef.current;
    const aaa = gsap.timeline();
    aaa.fromTo(
      slideTitleElement,
      { opacity: 0 },
      { opacity: 1, ease: "fade", delay: 0.5, duration: 0.6 }
    );
  }, []);
};

export const useGroupLink = (groupLink) => {
  useEffect(() => {
    const slideElement = groupLink.current;
    const tl = gsap.timeline();
    tl.fromTo(
      slideElement,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, delay: 1, ease: "none", duration: 0.6 }
    );
  }, []);
};
