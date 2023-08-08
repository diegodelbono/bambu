import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Accordion, Loading, Slider, Summary, Image } from "../../components";
import useApiData from "../../hooks/useApiData";

const Bambu = () => {

	const [params] = useSearchParams();
    const { data, isLoading } = useApiData(params.get("s"));

	//const { data, isLoading } = useApiData("el-bambu");

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

						<div className="products">
							<h2>{data.acf.species.title}</h2>
							<div className="grid grid--col-4">
								{data.acf.species.spice.map(({ image, summary, title }, index) => (
									<div className="grid__col" key={index}>
										<div className="product">
											<Image id={image.url} />
											<p><strong>{title}</strong></p>
											<p>{summary}</p>
											<Link to="/" className="button">Contactar</Link>
										</div>
									</div>
								))}
							</div>
						</div>						
						<h2>Preguntas frecuentes</h2>
						<Accordion data={data.acf.accordion} />
					</div>
				</main>
			</>}
		</>
	);
};

export default Bambu;
