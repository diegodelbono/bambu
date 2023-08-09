import React, { useState } from 'react';

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

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
                    <div className="accordion__col">
                        <div className="accordion__title" onClick={() => toggleAccordion(index)}>
                            <h3 className='p-medium'>{item.title}</h3>
                            <div className="accordion__button" >
                                <div className={openIndex === index ? 'i i--minus' : 'i i--plus'} />
                            </div>
                        </div>
                    </div>
                    <div className="accordion__col">
                        {openIndex === index && <div dangerouslySetInnerHTML={{ __html: item.resume }} />}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
