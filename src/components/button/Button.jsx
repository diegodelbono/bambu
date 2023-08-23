import React from "react";
import { arrayOf, shape } from "prop-types";

const Button = ({ data }) => {
  const { link, value } = data;
  return (
    <a href={link} className="button">
      {value}
    </a>
  );
};

Button.propTypes = {
  data: arrayOf(shape({})),
};

Button.defaultProps = {
  data: [],
};

export default Button;
