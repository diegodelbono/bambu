import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";

const Accordion = ({ data }) => {

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className={`accordion__item`}>
          <div className="accordion__col">
            <div className="accordion__title" onClick={() => toggleAccordion(index)}>
              <span className="p-medium">{item.title}</span>
              <span className={openIndexes.includes(index) ? "icon icon--minus" : "icon icon--plus"} />
            </div>
          </div>
          <div className="accordion__col">
            {openIndexes.includes(index) && (

              <div dangerouslySetInnerHTML={{ __html: item.resume }} />

            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: arrayOf(shape({})),
};

Accordion.defaultProps = {
  data: [],
};

export default Accordion;
