import React, { useState, useEffect } from "react";
import { arrayOf, shape } from "prop-types";
import { useSearchParams } from "react-router-dom";
import { converFormatText } from "../../utils/format";

const Accordion = ({ data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [params] = useSearchParams();
  const scrollTo = params.get("scrollTo");

  // Use useEffect to toggle the accordion based on scrollTo
  useEffect(() => {
    if (scrollTo) {
      const indexToOpen = data.findIndex(
        (item) => converFormatText(item.title) === scrollTo
      );
      if (indexToOpen !== -1) {
        toggleAccordion(indexToOpen);
      }
    }
  }, [scrollTo, data]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div
          key={index}
          id={converFormatText(item.title)}
          className={`accordion__item`}
        >
          <div className="accordion__col">
            <div
              className="accordion__title"
              onClick={() => toggleAccordion(index)}
            >
              <span className="p-medium">{item.title}</span>
              <span
                className={
                  openIndexes.includes(index)
                    ? "icon icon--minus"
                    : "icon icon--plus"
                }
              />
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
