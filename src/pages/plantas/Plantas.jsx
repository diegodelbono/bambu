import React, { useEffect } from "react";
import { Article, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useSearchParams } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Plantas = () => {
  const [params] = useSearchParams();
  const { data, isLoading } = useApiData(params.get("s"));

  const scrollTo = params.get("scrollTo");

  useEffect(() => {

    console.log("scrollTo", scrollTo)

    if (data) {
      const timeoutId = setTimeout(() => {
        const target = document.getElementById(scrollTo);

        console.log("target", target)
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

  { console.log("data.acf.article", data.acf.article) }

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

export default Plantas;
