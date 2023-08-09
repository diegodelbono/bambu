import React, { useState } from 'react';
import { Image } from "../../components";

const Gallery = ({ data }) => {

    console.log("gallery gallery", data);

    return (
        <div className="gallery">
            {data.map(({ url }, index) => (
                <div className='gallery__item' key={index}>
                    <Image id={url} />
                    {console.log("gitem", url)}
                </div>
            ))}
        </div>
    );
}

export default Gallery;
