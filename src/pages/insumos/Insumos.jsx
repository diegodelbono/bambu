import React from "react";
import { Article, Loading, Slider } from "../../components";
import useApiData from "../../hooks/useApiData";

const Insumos = () => {
	const { data, isLoading } = useApiData("insumos");

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
					</section>
				</main>
			</>}
		</>
	);
};

export default Insumos;
