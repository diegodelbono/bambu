import React, { useEffect } from "react";
import { Article, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Servicios = () => {
  const { data, isLoading } = useApiData("servicios");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data && (
        <>
          <Slider data={data.acf.slide} />
          <main className="main ">
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

export default Servicios;
