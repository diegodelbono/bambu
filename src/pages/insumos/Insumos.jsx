import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Loading, Image, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Insumos = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));

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
              <div className="products">
                <h2 className="h-medium">{data.acf.products.title}</h2>
                <div className="grid grid--col-3">
                  {data.acf.products.product.map(({ img, img_secondary, summary, title }, index) => (
                    <div className="grid__col" key={index}>
                      <div className="product">
                        <div className="product__figure">
                          <div className="product__figure--hover">
                            <Image id={img_secondary.url} />
                          </div>
                          <Image id={img.url} />
                        </div>
                        <p className="p-small">
                          <strong>{title}</strong>
                        </p>
                        <p className="p-small">{summary}</p>
                        <a href="https://api.whatsapp.com/send?phone=59898464748&text=Hola,%20me%20interesaría%20saber%20más%20sobre%20uno%20de%20sus%20insumos.%20Gracias" className="button">
                          Consultar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};


export default Insumos;
