import React from "react";
import { Article, Loading, Slider } from "../../components";
import useApiData from "../../hooks/useApiData";

const Bambu = () => {
	const { data, isLoading } = useApiData("bambu");

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

export default Bambu;
