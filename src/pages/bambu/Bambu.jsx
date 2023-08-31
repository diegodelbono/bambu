import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Accordion, Loading, Slider, Summary, Image } from "../../components";
import useApiData from "../../hooks/useApiData";

const Bambu = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));

  const scrollTo = params.get("scrollTo");

  console.log("data bambu", data)

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

              <div id="species" className="products">
                <h2 className="h-medium">{data.acf.species.title}</h2>
                <div className="grid grid--col-4">
                  {data.acf.species.spice.map(({ image, img_secondary, summary, title }, index) => (
                    <div className="grid__col" key={index}>
                      <div className="product">
                        <div className="product__figure">
                          <div className="product__figure--hover">
                            <Image id={img_secondary.url} />
                          </div>
                          <Image id={image.url} />
                        </div>
                        <p className="p-small">
                          <strong>{title}</strong>
                        </p>
                        <p className="p-small">{summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="h-medium">Preguntas frecuentes</h2>
              <Accordion data={data.acf.accordion} />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Bambu;
