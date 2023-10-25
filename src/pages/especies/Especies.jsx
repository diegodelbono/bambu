import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  Loading,
  Slider,
  Summary,
  Image,
  Species,
} from "../../components";
import useApiData from "../../hooks/useApiData";

const Especies = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = params.get("scrollTo");

  useEffect(() => {
    if (data) {
      const timeoutId = setTimeout(() => {
        const target = document.getElementById(scrollTo);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [scrollTo, data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data && (
        <>
          <Slider data={data.acf.slide} />
          <main className="main">
            <div className="main__container container">
              <Summary data={data.acf.summary} />
              <Species data={data.acf.species} />
              <h2 className="h-medium">Preguntas frecuentes</h2>
              <Accordion data={data.acf.accordion} />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Especies;
