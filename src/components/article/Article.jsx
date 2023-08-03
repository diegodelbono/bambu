import React from "react";
import { Button, Image } from "../../components";

const Article = ({ data }) => {
    const {  button, description, image, title } = data;

    console.log("data en article", data)

    {console.log("image en article", image)}
    
    return (
        <article className="article">
            <div className="grid">
                <div className="grid__col">
                    <h3>{title}</h3>
                </div>
                <div className="grid__col">
                    <figure className="figure">
                        <Image id={image} /> 
                    </figure>
                    <div className="article__summary">
                        <p>{description}</p>
                        <Button data={button} />
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Article;
