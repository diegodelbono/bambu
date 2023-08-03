import React from "react";
import { Article, Loading, Slider } from "../../components";
import useApiData from "../../hooks/useApiData";

const Home = () => {
    const { data, isLoading } = useApiData("home");

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            {data && <>
                <Slider data={data.acf.slide} />
                <main className="main container">

                    <section className="section">
                        <div className="group-link">
                            <div className="group-link__item">Paisajismo</div>
                            <div className="group-link__item">Agro</div>
                            <div className="group-link__item">Proyectos productivos</div>
                            <div className="group-link__item">Medio ambiente</div>
                        </div>
                    </section>

                    <figure className="figure">
                        <img src="" />
                    </figure>

                    <section className="section">
                        <div className="summary">
                            <p>Brindamos asesoramiento técnico integral para poner al bambú en el más alto nivel.</p>
                            <a href="#" className="button">Conocé nuestros servicios</a>
                        </div>
                    </section>

                    <section className="section">
                        <h2>Noticias</h2>
                    </section>

                </main>
            </>}
        </>
    );
};

export default Home;
