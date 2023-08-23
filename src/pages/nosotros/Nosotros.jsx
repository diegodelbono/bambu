import React from "react";
import { About, Accordion, Companies, Contact, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useSearchParams } from "react-router-dom";

const Nosotros = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));
  return (
    <>
      {data && (
        <>
          <div className="content" />
          <Slider data={data.acf.slide} loading={isLoading} />
          <main className="main">
            <div className="main__container container">
              <Summary data={data.acf.summary} />
              <Accordion data={data.acf.accordion} />
              <About data={data.acf.about} />
              <Companies data={data.acf.companies} />
              <Contact />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Nosotros;
