import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Gallery, Loading, News, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useGroupLink } from "../../utils/animations";

const Home = () => {
  const { data, isLoading } = useApiData("home");
  const groupLink = useRef(null);
  useGroupLink(groupLink);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data && (
        <>
          <Slider data={data.acf.slide} slideHome />

          <div className="container">
            <div className="slider__caption">
              <h2 className="h-medium text-white">
                Somos un vivero especializado <br />
                en la producción y venta de <br />
                plantas de bambú en Uruguay.
              </h2>
            </div>
          </div>

          <main className="main">
            <div className="main__container">
              <div className="container">
                <div className="group-link" ref={groupLink}>
                  <div className="group-link__item">
                    <Link to="/plantas?s=plantas&scrollTo=paisajismo" className="button button--big">
                      Paisajismo
                    </Link>
                  </div>
                  <div className="group-link__item">
                    <Link to="/plantas?s=plantas&scrollTo=agro" className="button button--big">
                      Agro
                    </Link>
                  </div>
                  <div className="group-link__item">
                    <Link to="/plantas?s=plantas&scrollTo=proyectosproductivos" className="button button--big">
                      Proyectos productivos
                    </Link>
                  </div>
                  <div className="group-link__item">
                    <Link to="/plantas?s=plantas&scrollTo=medioambiente" className="button button--big">
                      Medio ambiente
                    </Link>
                  </div>
                </div>
              </div>
              <Gallery data={data.acf.gallery} />
              <div className="container">
                <Summary data={data.acf.summary} />
              </div>
              <News data={data.acf.news} />
            </div>
          </main>
        </>
      )
      }
    </>
  );
};

export default Home;
