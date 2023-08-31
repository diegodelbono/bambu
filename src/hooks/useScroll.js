import { useEffect } from "react";

const useScroll = ({ scrollTo }) => {
  const target = document.getElementById(scrollTo);
  useEffect(() => {
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollTo, target]);
};

export default useScroll;
