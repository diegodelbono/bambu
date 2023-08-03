import React from "react";
import { Article, Loading, Slider } from "../../components";
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
                <main className="main container">
                    <section className="section">
                        <div className="summary">
                            {data.acf.summary}
                        </div>
                        {data.acf.article.map((article, index) => (
                            <Article data={article} key={index} />
                        ))}

                    </section>
                </main>
            </>}
        </>
    );
};

export default Plantas;
