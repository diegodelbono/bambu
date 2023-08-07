import React from "react";
import { About, Accordion, Loading, Image, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Nosotros = () => {
	const { data, isLoading } = useApiData("nosotros");

	{ console.log("data en nosotros", data) }

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
						<Accordion data={data.acf.accordion} />
						<About data={data.acf.about} />
					</div>
				</main>
			</>}
		</>
	);
};

export default Nosotros;
