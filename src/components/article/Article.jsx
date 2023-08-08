import React from "react";
import { Button, Image } from "../../components";

const Article = ({ data }) => {
    const { button, description, img, title } = data;
    return (
        <article className="article">
            <div className="article__col">
                <h3>{title}</h3>
            </div>
            <div className="article__col">
                <div className="article__figure">
                    <Image id={img.url} />
                </div>
                <div className="article__summary">
                    <p>{description}</p>
                    <Button data={button} />
                </div>
            </div>
        </article>
    )
};

export default Article;
