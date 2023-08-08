import React from "react";
import { Link } from "react-router-dom";
import { Article, Loading, Slider, Summary } from "../../components";
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


                <div className="container">
                    <div className="slider__caption">
                        <h2>Somos un vivero especializado en la producción y venta de plantas de bambú en Uruguay.</h2>
                    </div>
                </div>

                <main className="main">
                    <div className="main__container container">

                        <div className="group-link">
                            <div className="group-link__item">
                                <Link to="/paisajismo" className="button button--big">Paisajismo</Link>
                            </div>
                            <div className="group-link__item">
                                <Link to="/paisajismo" className="button button--big">Agro</Link>
                            </div>
                            <div className="group-link__item">
                                <Link to="/paisajismo" className="button button--big">Proyectos productivos</Link>
                            </div>
                            <div className="group-link__item">
                                <Link to="/paisajismo" className="button button--big">Medio ambiente</Link>
                            </div>
                        </div>

                        <Summary data={data.acf.summary} />

                    </div>
                </main>
            </>}
        </>
    );
};

export default Home;
