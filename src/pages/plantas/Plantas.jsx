import React from "react";
import { Article, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Plantas = () => {
    const { data, isLoading } = useApiData("plantas");

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            {data && <>
                <Slider data={data.acf.slide} />
                <main className="main">
                    <div class="main__container container">
                        <Summary data={data.acf.summary} />
                        {data.acf.article.map((article, index) => (
                            <Article data={article} key={index} />
                        ))}
                    </div>
                </main>
            </>}
        </>
    );
};

export default Plantas;
