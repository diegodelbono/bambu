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
                <div className="grid">
                  {data.acf.products.product.map(({ img, summary, title }, index) => (
                    <div className="grid__col" key={index}>
                      <div className="product">
                        <Image id={img.url} />
                        <p className="p-small">
                          <strong>{title}</strong>
                        </p>
                        <p className="p-small">{summary}</p>
                        <Link to="/" className="button">
                          Contactar
                        </Link>
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
