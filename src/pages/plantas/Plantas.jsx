import React from "react";
import { Article, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Lenis from '@studio-freight/lenis'

// https://www.youtube.com/watch?v=gRKuzQTXq74

const Plantas = () => {


    // const lenis = new Lenis({
    //     lerp: 0.1,
    //     wheelMultiplier: 0.7,
    //     infinite: false,
    //     gestureOrientation: "vertical",
    //     normalizeWheel: false,
    //     smoothTouch: false
    // });

    // function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // gsap.registerPlugin(ScrollTrigger)

    // gsap.fromTo('.logo', {
    //     opacity: 0,
        
    // }, {
    //     opacity: 1,
    //     duration: 2,
    // })

    const [params] = useSearchParams();
    const { data, isLoading } = useApiData(params.get("s"));

    if (isLoading) {
        return <Loading />;
    }




    return (
        <>
            {data && <>
                <Slider data={data.acf.slide} />
                <main className="main">
                    <div className="main__container container">
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
