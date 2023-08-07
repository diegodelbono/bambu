import React, { useState } from 'react';

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    console.log("data en accordion", data)

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="accordion">
            {data.map((item, index) => (
                <div key={index} className={`accordion__item ${openIndex === index ? 'open' : ''}`}>
                    <div className="accordion__title">
                        <div>{item.title}</div>
                        <div className="accordion__button" onClick={() => toggleAccordion(index)}>
                            {openIndex === index ? '-' : '+'}
                        </div>
                    </div>
                    <div className="accordion__content">
                        {/* {openIndex === index && <p>{item.resume}</p>} */}
                        {openIndex === index && <div dangerouslySetInnerHTML={{ __html: item.resume }}  />}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
