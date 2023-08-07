import React from "react";
import { Accordion, Loading, Slider, Summary } from "../../components";
import useApiData from "../../hooks/useApiData";

const Bambu = () => {
	const { data, isLoading } = useApiData("el-bambu");

	{ console.log("el bambu", data) }

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			{data && <>
				<Slider data={data.acf.slide} />
				<main className="main">
					{/* <div className="summary">
						<div className="grid">
							<div className="grid__col">
								<h2>{data.acf.summary.title}</h2>
							</div>
							<div className="grid__col">
								<p>{data.acf.summary.resume}</p>
							</div>
						</div>
					</div> */}
					{/* <div className="summary">
						<p>{data.acf.summary.resume}</p>
					</div> */}

					<div className="main__container container">
						<Summary data={data.acf.summary} />
						<Accordion data={data.acf.accordion} />
					</div>
					{/* {data.acf.accordion.map((item, index) => (
						<div>
							<p>{item.title}</p>
							<p>{item.resume}</p>
						</div>
						// <Article data={article} key={index} />
					))} */}
				</main>
			</>}
		</>
	);
};

export default Bambu;
