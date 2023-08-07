import React from "react";
import { Button, Image } from "../../components";

const Article = ({ data }) => {
    const { button, description, img, title } = data;
    return (
        <article className="article">
            <div className="grid">
                <div className="grid__col">
                    <h3>{title}</h3>
                </div>
                <div className="grid__col">
                    <div className="article__figure">
                        <Image id={img} />
                    </div>
                    <div className="article__summary">
                        <p>{description}</p>
                        <Button data={button} />
                    </div>
                </div>
            </div>
        </article>
    )
};

//https://download-video.akamaized.net/v2-1/playback/322834e8-4094-41f6-86b0-a1cb80fc3319/a8d3074d-ab9a9c1e?__token__=st=1691435658~exp=1691450058~acl=%2Fv2-1%2Fplayback%2F322834e8-4094-41f6-86b0-a1cb80fc3319%2Fa8d3074d-ab9a9c1e%2A~hmac=8bf6fecc5659a503e319f820d968e91d58294f7f22b14159b09e3c089058fc79&r=dXMtZWFzdDE%3D

export default Article;
