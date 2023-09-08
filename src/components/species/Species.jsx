import React, { useState } from "react";
import { Image } from "../image";

const Species = ({ data }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div id="species" className="products">
            <h2 className="h-medium">{data.title}</h2>
            <div className="grid grid--col-3">
                {data.spice.map(({ image, img_secondary, extract, summary, title }, index) => (
                    <div className="grid__col" key={index}>
                        <div className="product">
                            <div className="product__figure">
                                <div className="product__figure--hover">
                                    <Image id={img_secondary.url} />
                                </div>
                                <Image id={image.url} />
                            </div>
                            <p className="p-small">
                                <strong>{title}</strong>
                            </p>
                            <p>{extract}</p>
                            {openIndexes.includes(index) && (
                                <p className="p-small" dangerouslySetInnerHTML={{ __html: summary }} />
                            )}
                            <div onClick={() => toggleAccordion(index)} className="button--link">
                                {openIndexes.includes(index) ? 'Ocultar' : 'Ver más'}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Species;
