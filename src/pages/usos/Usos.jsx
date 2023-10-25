import React, { useEffect } from "react";
import { Article, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useSearchParams } from "react-router-dom";

const Usos = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));

  const scrollTo = params.get("scrollTo");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      const timeoutId = setTimeout(() => {
        const target = document.getElementById(scrollTo);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "center",
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
              {data.acf.article.map((article, index) => (
                <Article data={article} key={index} />
              ))}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Usos;
