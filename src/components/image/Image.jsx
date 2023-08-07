import { useEffect, useState } from "react";

const Image = ({ id }) => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		fetch(`https://bambudeleste.com.uy/wordpress/wp-json/wp/v2/media/${id}`)
			.then(response => response.json())
			.then(data => setImageUrl(data.source_url))
			.catch(error => console.error('Error fetching image:', error));
	}, [id]);

	return (
		<>{imageUrl && <figure className="figure"><img src={imageUrl} alt="Imagen desde API" /></figure>}</>
	);
};

export default Image;
