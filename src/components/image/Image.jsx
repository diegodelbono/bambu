import { useEffect, useState } from "react";

const Image = ({ id }) => {

	return (
		<>{id &&
			<figure className="figure">
				<img src={id} alt="Imagen desde API"/>
			</figure>}
		</>
	);
};

//https://download-video.akamaized.net/v2-1/playback/322834e8-4094-41f6-86b0-a1cb80fc3319/a8d3074d-ab9a9c1e?__token__=st=1691435658~exp=1691450058~acl=%2Fv2-1%2Fplayback%2F322834e8-4094-41f6-86b0-a1cb80fc3319%2Fa8d3074d-ab9a9c1e%2A~hmac=8bf6fecc5659a503e319f820d968e91d58294f7f22b14159b09e3c089058fc79&r=dXMtZWFzdDE%3D


export default Image;
