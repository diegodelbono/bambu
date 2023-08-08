import React from "react";
import { About, Accordion, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";
import { useSearchParams } from "react-router-dom";

const Nosotros = () => {
	
	const [params] = useSearchParams();
    const { data, isLoading } = useApiData(params.get("s"));

	return (
		<>
			{data && <>
				<Slider data={data.acf.slide} loading={isLoading} />
				<main className="main">
					<div className="main__container container">
						<Summary data={data.acf.summary} />
						<Accordion data={data.acf.accordion} />
						<About data={data.acf.about} />
					</div>
				</main>
			</>}
		</>
	);
};

export default Nosotros;
