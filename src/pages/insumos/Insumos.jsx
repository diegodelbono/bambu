import React from "react";
import { Article, Loading, Image, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Insumos = () => {
	const { data, isLoading } = useApiData("insumos");

	if (isLoading) {
		return <Loading />;
	}

	{ console.log("isimos", data) }

	return (
		<>
			{data && <>
				<Slider data={data.acf.slide} />
				<main className="main">
					<div className="main__container container">
						<Summary data={data.acf.summary} />
						<h2>{data.acf.products.title}</h2>
						<div className="grid">
							{data.acf.products.product.map(({ img, summary, title }, index) => (
								<div class="grid__col" key={index}>
									<div className="product">
										<Image id={img} />
										<p><strong>{title}</strong></p>
										{summary}
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</>}
		</>
	);
};

export default Insumos;
