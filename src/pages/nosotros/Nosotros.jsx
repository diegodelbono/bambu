import React from "react";
import { Loading, Slider } from "../../components";
import useApiData from "../../hooks/useApiData";

const Nosotros = () => {
	const { data, isLoading } = useApiData("nosotros");

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

export default Nosotros;
